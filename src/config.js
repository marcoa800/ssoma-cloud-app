// ============================================================
// CONFIGURACIÓN DE GOOGLE SHEETS
// ============================================================
// Antes de usar la app, completa estos dos valores:
//
// 1. CLIENT_ID:
//    - Ve a https://console.cloud.google.com
//    - Crea un proyecto (o usa uno existente)
//    - Habilita "Google Sheets API" en "APIs y servicios"
//    - Ve a "Credenciales" → "Crear credenciales" → "ID de cliente OAuth 2.0"
//    - Tipo: Aplicación web
//    - Orígenes de JavaScript autorizados:
//        http://localhost:5173         (desarrollo)
//        https://marcoa800.github.io  (producción)
//    - Copia el Client ID aquí
//
// 2. SPREADSHEET_ID:
//    - Crea una Google Sheet en https://sheets.google.com
//    - Crea 3 pestañas con estos nombres exactos:
//        Trabajadores
//        KPIs
//        Documentos
//    - Copia el ID de la URL (la parte entre /d/ y /edit):
//        https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit
// ============================================================

export const CLIENT_ID = '686952934453-tcd4uve7ler84bjc6374hhdmfpl4oam7.apps.googleusercontent.com';
export const SPREADSHEET_ID = '1pRdrW-_EwnjUXdhbonf94RFe0q6lOTnFcJbrX57wZuw';
