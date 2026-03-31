// ============================================================
// Servicio Google Sheets API v4
// ============================================================

import { SPREADSHEET_ID } from './config.js';

const API_BASE = 'https://sheets.googleapis.com/v4/spreadsheets';

// Cache de IDs numéricos de cada hoja (necesarios para eliminar filas)
let _sheetIds = {};

// ── Helpers internos ─────────────────────────────────────────

function authHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
}

async function handleResponse(res) {
  if (res.status === 401) {
    throw new Error('TOKEN_EXPIRED');
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `HTTP ${res.status}`);
  }
  return res.json();
}

// Obtiene los IDs numéricos de cada hoja (necesario para batchUpdate / eliminar filas)
async function getSheetIds(token) {
  if (Object.keys(_sheetIds).length > 0) return _sheetIds;
  const res = await fetch(`${API_BASE}/${SPREADSHEET_ID}?fields=sheets.properties`, {
    headers: authHeaders(token),
  });
  const data = await handleResponse(res);
  data.sheets.forEach((s) => {
    _sheetIds[s.properties.title] = s.properties.sheetId;
  });
  return _sheetIds;
}

// Lee todas las filas de una hoja (incluye la fila de cabeceras)
async function getRows(sheetName, token) {
  const res = await fetch(
    `${API_BASE}/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetName)}`,
    { headers: authHeaders(token) }
  );
  const data = await handleResponse(res);
  return data.values || [];
}

// Agrega una fila al final de la hoja
async function appendRow(sheetName, values, token) {
  const res = await fetch(
    `${API_BASE}/${SPREADSHEET_ID}/values/${encodeURIComponent(sheetName)}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    {
      method: 'POST',
      headers: authHeaders(token),
      body: JSON.stringify({ values: [values] }),
    }
  );
  return handleResponse(res);
}

// Elimina una fila por su índice en los datos (sin contar cabecera, empieza en 0)
async function deleteDataRow(sheetName, dataRowIndex, token) {
  const ids = await getSheetIds(token);
  const sheetId = ids[sheetName];
  if (sheetId === undefined) throw new Error(`Hoja "${sheetName}" no encontrada`);

  const startIndex = dataRowIndex + 1; // +1 para saltar la fila de cabecera
  const res = await fetch(`${API_BASE}/${SPREADSHEET_ID}:batchUpdate`, {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify({
      requests: [
        {
          deleteDimension: {
            range: {
              sheetId,
              dimension: 'ROWS',
              startIndex,
              endIndex: startIndex + 1,
            },
          },
        },
      ],
    }),
  });
  return handleResponse(res);
}

// Escribe cabeceras si la hoja está vacía
async function ensureHeaders(sheetName, headers, token) {
  const rows = await getRows(sheetName, token);
  if (rows.length === 0) {
    await appendRow(sheetName, headers, token);
  }
}

// ── Serialización de Trabajadores ───────────────────────────

const WORKER_HEADERS = [
  'id', 'dni', 'name', 'cargo', 'location', 'status',
  'aptitude', 'restrictionDetail', 'emoType', 'emoDate',
  'emoValidity', 'emoExp', 'vacunas',
  'compliance_emo', 'compliance_epp', 'compliance_induccion',
];

function workerToRow(w) {
  return [
    String(w.id),
    w.dni,
    w.name,
    w.cargo,
    w.location,
    w.status,
    w.aptitude,
    w.restrictionDetail || '',
    w.emoType,
    w.emoDate,
    String(w.emoValidity),
    w.emoExp,
    JSON.stringify(w.vacunas || []),
    w.compliance.emo ? 'TRUE' : 'FALSE',
    w.compliance.epp,
    w.compliance.induccion ? 'TRUE' : 'FALSE',
  ];
}

function rowToWorker(row) {
  return {
    id: Number(row[0]),
    dni: row[1] || '',
    name: row[2] || '',
    cargo: row[3] || '',
    location: row[4] || '',
    status: row[5] || 'Activo',
    aptitude: row[6] || 'Apto',
    restrictionDetail: row[7] || '',
    emoType: row[8] || '',
    emoDate: row[9] || '',
    emoValidity: Number(row[10]) || 12,
    emoExp: row[11] || '',
    vacunas: (() => { try { return JSON.parse(row[12] || '[]'); } catch { return []; } })(),
    compliance: {
      emo: row[13] === 'TRUE',
      epp: row[14] || 'PENDIENTE',
      induccion: row[15] === 'TRUE',
    },
  };
}

// ── Serialización de KPIs ────────────────────────────────────

const KPI_HEADERS = ['id', 'month', 'year', 'area', 'metric', 'value', 'target'];

function kpiToRow(k) {
  return [String(k.id), k.month, String(k.year), k.area, k.metric, String(k.value), String(k.target)];
}

function rowToKPI(row) {
  return {
    id: Number(row[0]),
    month: row[1] || '',
    year: row[2] || '',
    area: row[3] || '',
    metric: row[4] || '',
    value: Number(row[5]),
    target: Number(row[6]),
  };
}

// ── Serialización de Documentos ──────────────────────────────

const DOC_HEADERS = ['id', 'name', 'type', 'area', 'status', 'rev'];

function docToRow(d) {
  return [String(d.id), d.name, d.type, d.area, d.status, d.rev || ''];
}

function rowToDoc(row) {
  return {
    id: row[0] || '',
    name: row[1] || '',
    type: row[2] || 'other',
    area: row[3] || '',
    status: row[4] || '',
    rev: row[5] || '',
  };
}

// ── API pública ───────────────────────────────────────────────

/**
 * Inicializa las cabeceras de las 3 hojas si están vacías.
 * Llamar una sola vez al autenticar.
 */
export async function initSheets(token) {
  _sheetIds = {}; // reset cache en cada nueva sesión
  await Promise.all([
    ensureHeaders('Trabajadores', WORKER_HEADERS, token),
    ensureHeaders('KPIs', KPI_HEADERS, token),
    ensureHeaders('Documentos', DOC_HEADERS, token),
  ]);
}

/**
 * Carga todos los datos de las 3 hojas en paralelo.
 * Retorna { workers, kpis, documents }
 */
export async function loadAllData(token) {
  const [wRows, kRows, dRows] = await Promise.all([
    getRows('Trabajadores', token),
    getRows('KPIs', token),
    getRows('Documentos', token),
  ]);

  return {
    workers: wRows.length > 1 ? wRows.slice(1).map(rowToWorker) : [],
    kpis: kRows.length > 1 ? kRows.slice(1).map(rowToKPI) : [],
    documents: dRows.length > 1 ? dRows.slice(1).map(rowToDoc) : [],
  };
}

// ── Trabajadores ─────────────────────────────────────────────

export async function addWorker(token, worker) {
  return appendRow('Trabajadores', workerToRow(worker), token);
}

export async function deleteWorker(token, workerId) {
  const rows = await getRows('Trabajadores', token);
  const idx = rows.slice(1).findIndex((r) => Number(r[0]) === workerId);
  if (idx === -1) throw new Error('Trabajador no encontrado');
  return deleteDataRow('Trabajadores', idx, token);
}

// ── KPIs ──────────────────────────────────────────────────────

export async function addKPI(token, kpi) {
  return appendRow('KPIs', kpiToRow(kpi), token);
}

export async function deleteKPI(token, kpiId) {
  const rows = await getRows('KPIs', token);
  const idx = rows.slice(1).findIndex((r) => Number(r[0]) === kpiId);
  if (idx === -1) throw new Error('KPI no encontrado');
  return deleteDataRow('KPIs', idx, token);
}

// ── Documentos ───────────────────────────────────────────────

export async function addDocument(token, doc) {
  return appendRow('Documentos', docToRow(doc), token);
}

export async function deleteDocument(token, docId) {
  const rows = await getRows('Documentos', token);
  const idx = rows.slice(1).findIndex((r) => r[0] === String(docId));
  if (idx === -1) throw new Error('Documento no encontrado');
  return deleteDataRow('Documentos', idx, token);
}
