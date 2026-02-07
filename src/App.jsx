import React, { useState, useEffect } from 'react';
import { 
  Shield, Users, FileText, BarChart3, Bot, Plus, Search, 
  CheckCircle2, AlertTriangle, X, Activity, Calendar, 
  Menu, ChevronRight, UserPlus, TrendingUp, PieChart, 
  LayoutDashboard, FileCheck, MapPin, HardHat, GraduationCap,
  UploadCloud, BrainCircuit, Lightbulb
} from 'lucide-react';

// --- CONFIGURACIÓN Y UTILIDADES ---

const STORAGE_KEY = 'ssoma_data_v5_1';

const INITIAL_DATA = {
  kpis: [
    { id: 1, month: 'Enero', year: 2024, area: 'Seguridad', metric: 'Índice Frecuencia', value: 2.5, target: 3.0 },
    { id: 2, month: 'Enero', year: 2024, area: 'Salud', metric: 'Exámenes Médicos', value: 98, target: 100 },
  ],
  workers: [
    { 
      id: 101, dni: '74582101', name: 'Juan Perez Delgado', cargo: 'Operador Grúa', 
      location: 'Campamento',
      // Compliance actualizado: epp ahora es string ('ENTREGADO', 'PENDIENTE', 'NO_APLICA')
      compliance: { emo: true, epp: 'ENTREGADO', induccion: true },
      emoType: 'Periódico',
      emoDate: '2023-10-15',
      emoValidity: 12,
      emoExp: '2024-10-15', 
      vacunas: ['F. Amarilla', 'COVID-19'], amon: 0, inc: 2 
    },
    { 
      id: 102, dni: '45210369', name: 'Maria Gomez Ruiz', cargo: 'Ing. Residente', 
      location: 'Oficina',
      compliance: { emo: true, epp: 'NO_APLICA', induccion: true },
      emoType: 'Pre-ocupacional',
      emoDate: '2023-05-02',
      emoValidity: 24,
      emoExp: '2025-05-02', 
      vacunas: ['F. Amarilla'], amon: 1, inc: 5 
    }
  ],
  documents: [
    { id: 'S-001', name: 'Matriz IPERC Base', area: 'Seguridad', status: 'Aprobado', rev: '04/2024' },
    { id: 'H-001', name: 'Protocolo Ergonomía', area: 'Salud', status: 'En Revisión', rev: '01/2024' },
  ]
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, type = 'neutral' }) => {
  const styles = {
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-red-100 text-red-700',
    blue: 'bg-blue-100 text-blue-700',
    neutral: 'bg-slate-100 text-slate-600'
  };
  return (
    <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${styles[type] || styles.neutral}`}>
      {children}
    </span>
  );
};

const ProgressBar = ({ value, max = 100, color = 'bg-blue-500', label }) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs mb-1">
        <span className="font-bold text-slate-600">{label}</span>
        <span className="text-slate-400">{value} / {max}</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
        <div className={`${color} h-2.5 rounded-full transition-all duration-500`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });
  
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(null); 

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  // --- HANDLERS ---

  const handleAddWorker = (workerData) => {
    const emDate = new Date(workerData.emoDate);
    const validityMonths = parseInt(workerData.emoValidity);
    const expDate = new Date(emDate.setMonth(emDate.getMonth() + validityMonths));
    
    const newWorker = {
      ...workerData,
      id: Date.now(),
      emoExp: expDate.toISOString().split('T')[0],
      compliance: { 
        emo: true, 
        epp: workerData.eppStatus, // Usamos el estado seleccionado (ENTREGADO, PENDIENTE, NO_APLICA)
        induccion: workerData.hasInduccion 
      }, 
      amon: 0,
      inc: 0
    };
    setData(prev => ({ ...prev, workers: [newWorker, ...prev.workers] }));
    setModalOpen(null);
  };

  const handleAddKPI = (kpiData) => {
    const newKpi = { ...kpiData, id: Date.now() };
    setData(prev => ({ ...prev, kpis: [newKpi, ...prev.kpis] }));
    setModalOpen(null);
  };

  const handleAddDoc = (docData) => {
      const newDoc = { ...docData, id: Date.now() };
      setData(prev => ({...prev, documents: [newDoc, ...prev.documents]}));
      setModalOpen(null);
  }

  // --- VISTAS ---

  const DashboardOverview = () => {
    const totalWorkers = data.workers.length;
    // Cálculo: se considera OK si tiene EMO, Inducción y (EPP entregado o No Aplica)
    const compliantWorkers = data.workers.filter(w => 
      w.compliance.emo && 
      w.compliance.induccion && 
      (w.compliance.epp === 'ENTREGADO' || w.compliance.epp === 'NO_APLICA')
    ).length;
    
    return (
      <div className="space-y-6 animate-in fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Total Personal</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="text-4xl font-black text-slate-800">{totalWorkers}</span>
              <Users className="text-blue-500 mb-1" />
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Activos en directorio</p>
          </Card>
          <Card className="border-l-4 border-l-emerald-600">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Documentos Aprobados</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="text-4xl font-black text-slate-800">{data.documents.filter(d => d.status === 'Aprobado').length}</span>
              <FileCheck className="text-emerald-500 mb-1" />
            </div>
          </Card>
          <Card className="border-l-4 border-l-amber-500">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">EMOs por Vencer</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="text-4xl font-black text-slate-800">{data.workers.filter(w => new Date(w.emoExp) < new Date(new Date().setDate(new Date().getDate() + 30))).length}</span>
              <AlertTriangle className="text-amber-500 mb-1" />
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Próximos 30 días</p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <Card>
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><TrendingUp size={18} /> Resumen de KPIs</h3>
             <div className="space-y-3">
               {data.kpis.slice(0, 4).map(k => (
                 <div key={k.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                   <div>
                     <p className="text-xs font-bold text-slate-700">{k.metric}</p>
                     <p className="text-[10px] text-slate-400 uppercase">{k.area} - {k.month}</p>
                   </div>
                   <Badge type={k.value <= k.target ? 'success' : 'danger'}>{k.value} (Meta: {k.target})</Badge>
                 </div>
               ))}
             </div>
           </Card>
           <Card>
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Activity size={18} /> Cumplimiento SST</h3>
             <ProgressBar label="Inducciones Realizadas" value={data.workers.filter(w => w.compliance.induccion).length} max={totalWorkers} color="bg-indigo-500" />
             <ProgressBar label="EPP (Entregado/N.A)" value={compliantWorkers} max={totalWorkers} color="bg-blue-500" />
             <ProgressBar label="Aptitud Médica Vigente" value={data.workers.filter(w => new Date(w.emoExp) > new Date()).length} max={totalWorkers} color="bg-emerald-500" />
           </Card>
        </div>
      </div>
    );
  };

  const DecisionRoom = () => {
    const [analysisText, setAnalysisText] = useState('');
    const [methodology, setMethodology] = useState('auto');
    const [analysisResult, setAnalysisResult] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [fileName, setFileName] = useState(null);

    const apiKey = ""; 

    const handleFileSimulate = () => {
        setFileName("Informe_Incidente_001.pdf");
        setTimeout(() => alert("Documento cargado al contexto de análisis."), 500);
    };

    const runAnalysis = async () => {
        if(!analysisText && !fileName) return alert("Por favor describe el caso o adjunta un archivo.");
        setIsAnalyzing(true);
        
        const methodPrompt = methodology === 'auto' ? "la metodología más adecuada" : `la metodología ${methodology}`;
        const prompt = `Actúa como un Experto en Investigación de Accidentes y Toma de Decisiones Gerenciales. 
        Analiza el siguiente caso usando ${methodPrompt}.
        
        Caso/Contexto: "${analysisText}" ${fileName ? `(Referencia adicional del archivo ${fileName})` : ''}
        
        Si eliges BowTie, enfócate en barreras preventivas y de recuperación.
        Si eliges FRAM, analiza la resonancia funcional y variabilidad.
        Si eliges STAMP, enfócate en restricciones de seguridad y control.
        
        Tu respuesta debe tener:
        1. Resumen Ejecutivo.
        2. Análisis Causa-Raíz detallado.
        3. Plan de Acción Recomendado (Corto y Largo Plazo).
        4. Decisión Gerencial Sugerida.
        
        Usa formato Markdown.`;

        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            const data = await res.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            setAnalysisResult(text);
        } catch (e) {
            setAnalysisResult("Error al procesar el análisis. Verifica tu conexión.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
      <div className="space-y-6 animate-in zoom-in-95">
         <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold flex items-center gap-3"><BrainCircuit /> Sala de Decisiones & Análisis IA</h2>
            <p className="text-blue-200 text-sm mt-1">Sube documentos o describe situaciones para obtener análisis causa-raíz y soporte en la toma de decisiones.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="h-full flex flex-col">
                <h3 className="font-bold text-slate-800 mb-4">Datos del Caso</h3>
                <textarea 
                    className="w-full flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-none min-h-[150px]"
                    placeholder="Describe la situación, incidente o problema a resolver..."
                    value={analysisText}
                    onChange={e => setAnalysisText(e.target.value)}
                ></textarea>
                
                <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-dashed border-slate-300">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg text-blue-600 border border-slate-100">
                                {fileName ? <FileCheck size={20} className="text-emerald-500"/> : <FileText size={20} />}
                            </div>
                            <div className="text-xs">
                                <p className="font-bold text-slate-700">{fileName || "Adjuntar Evidencia"}</p>
                                <p className="text-slate-400">{fileName ? "Listo para análisis" : "Soporta PDF, Word, TXT"}</p>
                            </div>
                        </div>
                        <button onClick={handleFileSimulate} className="text-blue-600 hover:text-blue-800"><UploadCloud size={20} /></button>
                    </div>

                    <div className="flex gap-2">
                        <select 
                            className="flex-1 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 outline-none"
                            value={methodology}
                            onChange={e => setMethodology(e.target.value)}
                        >
                            <option value="auto">⚡ IA Decide Metodología</option>
                            <optgroup label="Clásicas">
                                <option value="5 Porqués">5 Porqués (Causas directas)</option>
                                <option value="Ishikawa">Espina de Pescado (Procesos)</option>
                                <option value="ICAM">ICAM (Incidentes complejos)</option>
                            </optgroup>
                            <optgroup label="Sistemas & Riesgos (Modernas)">
                                <option value="BowTie">BowTie (Barreras y Riesgos)</option>
                                <option value="FRAM">FRAM (Resonancia Funcional)</option>
                                <option value="STAMP">STAMP (Teoría de Sistemas)</option>
                            </optgroup>
                        </select>
                        <button 
                            onClick={runAnalysis}
                            disabled={isAnalyzing}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors disabled:opacity-50"
                        >
                            {isAnalyzing ? <Activity className="animate-spin" /> : <Lightbulb size={18} />}
                            Analizar
                        </button>
                    </div>
                </div>
            </Card>

            <Card className="h-full bg-slate-50 border-blue-100 min-h-[300px]">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Bot size={18} className="text-blue-600"/> Resultado del Análisis</h3>
                {analysisResult ? (
                    <div className="prose prose-sm prose-blue max-w-none overflow-y-auto max-h-[400px] pr-2">
                        <div dangerouslySetInnerHTML={{ __html: analysisResult.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-60">
                        <BrainCircuit size={48} className="mb-4" />
                        <p className="text-sm text-center max-w-xs">Ingresa los datos del caso y selecciona una metodología para recibir recomendaciones gerenciales.</p>
                    </div>
                )}
            </Card>
         </div>
      </div>
    );
  };

  const MasterWorkerDirectory = () => {
    const [filter, setFilter] = useState('');
    const filtered = data.workers.filter(w => 
      w.name.toLowerCase().includes(filter.toLowerCase()) || 
      w.dni.includes(filter)
    );

    const getEppBadge = (status) => {
        if (status === 'ENTREGADO') return <Badge type="success">EPP OK</Badge>;
        if (status === 'NO_APLICA') return <Badge type="neutral">N.A</Badge>;
        return <Badge type="warning">PENDIENTE</Badge>;
    };

    return (
       <div className="space-y-6 animate-in slide-in-from-bottom-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Directorio Maestro</h2>
              <p className="text-slate-500 text-sm">Gestión detallada de aptitud médica y requisitos legales.</p>
            </div>
            <div className="flex gap-3">
               <input 
                 type="text" 
                 placeholder="Buscar trabajador..." 
                 className="px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                 onChange={(e) => setFilter(e.target.value)}
               />
               <button onClick={() => setModalOpen('worker')} className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700">
                 <UserPlus size={16} /> Nuevo
               </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
             {filtered.map(w => {
               const isEmoExpired = new Date(w.emoExp) < new Date();
               
               return (
                 <div key={w.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b border-slate-50 pb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-bold text-lg">
                                {w.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800">{w.name}</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs font-bold text-slate-500 uppercase">{w.cargo}</span>
                                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 flex items-center gap-1"><MapPin size={10}/> {w.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                             {getEppBadge(w.compliance.epp)}
                             <Badge type={w.compliance.induccion ? 'success' : 'danger'}>INDUCCIÓN {w.compliance.induccion ? 'OK' : 'FALTA'}</Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                        <div className="bg-blue-50 p-3 rounded-xl">
                            <p className="font-bold text-blue-800 mb-1">Tipo de EMO</p>
                            <p className="text-blue-600">{w.emoType || 'No registrado'}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl">
                            <p className="font-bold text-slate-600 mb-1">Fecha Examen</p>
                            <p className="text-slate-500">{w.emoDate || '--/--/----'}</p>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl">
                            <p className="font-bold text-slate-600 mb-1">Vigencia</p>
                            <p className="text-slate-500">{w.emoValidity || '12'} Meses</p>
                        </div>
                        <div className={`${isEmoExpired ? 'bg-red-50' : 'bg-emerald-50'} p-3 rounded-xl`}>
                            <p className={`font-bold ${isEmoExpired ? 'text-red-800' : 'text-emerald-800'} mb-1`}>Estado Aptitud</p>
                            <p className={`font-bold ${isEmoExpired ? 'text-red-600' : 'text-emerald-600'}`}>
                                {isEmoExpired ? 'VENCIDO' : 'VIGENTE'} 
                                <span className="block text-[10px] opacity-75">Vence: {w.emoExp}</span>
                            </p>
                        </div>
                    </div>
                 </div>
               )
             })}
          </div>
       </div>
    );
  };

  const DocManager = () => {
    const [activeArea, setActiveArea] = useState('Todos');
    const filteredDocs = activeArea === 'Todos' ? data.documents : data.documents.filter(d => d.area === activeArea);

    return (
       <div className="space-y-6 animate-in fade-in">
          <div className="flex justify-between items-center">
             <h2 className="text-2xl font-bold text-slate-800">Centro Documental SGI</h2>
             <button onClick={() => setModalOpen('doc')} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800">
                <Plus size={16} /> Subir Doc
             </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
             {['Todos', 'Seguridad', 'Salud', 'Ambiente'].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveArea(tab)}
                 className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${activeArea === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
               >
                 {tab}
               </button>
             ))}
          </div>

          <Card className="overflow-hidden p-0">
             <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                   <tr>
                      <th className="px-6 py-4 font-bold text-xs uppercase">Documento</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase">Área</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase">Estado</th>
                      <th className="px-6 py-4 font-bold text-xs uppercase">Versión</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {filteredDocs.map(doc => (
                      <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                         <td className="px-6 py-4 font-medium text-slate-700 flex items-center gap-3">
                            <FileText size={16} className="text-blue-400" /> {doc.name}
                         </td>
                         <td className="px-6 py-4">
                            <span className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold uppercase text-slate-500">{doc.area}</span>
                         </td>
                         <td className="px-6 py-4">
                            <Badge type={doc.status === 'Aprobado' ? 'success' : (doc.status === 'Obsoleto' ? 'danger' : 'warning')}>{doc.status}</Badge>
                         </td>
                         <td className="px-6 py-4 text-slate-400 font-mono text-xs">{doc.rev}</td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </Card>
       </div>
    );
  };

  const AIConsultant = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const apiKey = ""; 

    const askAI = async () => {
      if (!prompt.trim()) return;
      setLoading(true);
      setResponse(null);

      try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: {
              parts: [{ text: "Eres un experto SSOMA. Responde de forma breve y técnica." }]
            }
          })
        });
        const data = await res.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        setResponse(text);
      } catch (e) {
        setResponse("Error de conexión.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in">
        <div className="text-center mb-8">
           <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
             <Bot size={32} />
           </div>
           <h2 className="text-2xl font-bold text-slate-800">Consultor General SSOMA</h2>
           <p className="text-slate-500 text-sm">Preguntas rápidas sobre normativa, EPPs o procedimientos estándar.</p>
        </div>
        <Card>
           <div className="flex gap-2">
               <input 
                 className="flex-1 border rounded-xl px-4 py-2" 
                 placeholder="Ej: ¿Cuál es la altura mínima para usar arnés?" 
                 value={prompt}
                 onChange={e => setPrompt(e.target.value)}
                 onKeyDown={e => e.key === 'Enter' && askAI()}
               />
               <button onClick={askAI} disabled={loading} className="bg-slate-900 text-white px-4 rounded-xl font-bold text-sm">
                   {loading ? '...' : 'Preguntar'}
               </button>
           </div>
           {response && <div className="mt-4 p-4 bg-slate-50 rounded-xl text-sm text-slate-700 leading-relaxed">{response}</div>}
        </Card>
      </div>
    );
  };

  // --- MODALES ACTUALIZADOS ---

  const WorkerModal = () => {
    const [form, setForm] = useState({ 
        name: '', dni: '', cargo: '', location: 'Oficina', 
        emoType: 'Pre-ocupacional', emoDate: '', emoValidity: '12',
        eppStatus: 'ENTREGADO', hasInduccion: false
    });
    return (
       <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
             <h3 className="font-bold text-lg mb-4">Registro Completo de Trabajador</h3>
             <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input placeholder="Nombre Completo" className="border rounded-lg p-2 text-sm" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    <input placeholder="DNI" className="border rounded-lg p-2 text-sm" value={form.dni} onChange={e => setForm({...form, dni: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input placeholder="Cargo" className="border rounded-lg p-2 text-sm" value={form.cargo} onChange={e => setForm({...form, cargo: e.target.value})} />
                    {/* Ubicación: Solo Oficina, Campamento u Otro */}
                    <select className="border rounded-lg p-2 text-sm" value={form.location} onChange={e => setForm({...form, location: e.target.value})}>
                        <option value="Oficina">Oficina</option>
                        <option value="Campamento">Campamento</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-xl space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase">Datos Médicos (EMO)</p>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-[10px] text-slate-400 block mb-1">Tipo Examen</label>
                            <select className="w-full border rounded-lg p-2 text-sm" value={form.emoType} onChange={e => setForm({...form, emoType: e.target.value})}>
                                <option>Pre-ocupacional</option><option>Periódico</option><option>Retiro</option><option>Reubicación</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[10px] text-slate-400 block mb-1">Fecha Realización</label>
                            <input type="date" className="w-full border rounded-lg p-2 text-sm" value={form.emoDate} onChange={e => setForm({...form, emoDate: e.target.value})} />
                        </div>
                    </div>
                    <div>
                        <label className="text-[10px] text-slate-400 block mb-1">Vigencia (Meses)</label>
                        <select className="w-full border rounded-lg p-2 text-sm" value={form.emoValidity} onChange={e => setForm({...form, emoValidity: e.target.value})}>
                            <option value="12">12 Meses (Estándar)</option>
                            <option value="24">24 Meses (Administrativo)</option>
                            <option value="6">6 Meses (Alto Riesgo)</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-[10px] text-slate-400 block mb-1 font-bold">Estado EPP</label>
                        <select 
                            className="w-full border rounded-lg p-2 text-sm" 
                            value={form.eppStatus} 
                            onChange={e => setForm({...form, eppStatus: e.target.value})}
                        >
                            <option value="ENTREGADO">Entregado / Conforme</option>
                            <option value="PENDIENTE">Pendiente / Cambio</option>
                            <option value="NO_APLICA">No Aplica / No Requiere</option>
                        </select>
                    </div>
                    <div className="flex items-center h-full pt-4">
                         <label className="flex items-center gap-2 p-3 border rounded-xl cursor-pointer hover:bg-slate-50 w-full">
                            <input type="checkbox" checked={form.hasInduccion} onChange={e => setForm({...form, hasInduccion: e.target.checked})} />
                            <span className="text-sm font-bold text-slate-700">Inducción SST</span>
                        </label>
                    </div>
                </div>
             </div>
             <div className="flex gap-2 mt-6">
                <button onClick={() => setModalOpen(null)} className="flex-1 py-3 text-slate-500 font-bold text-xs uppercase">Cancelar</button>
                <button onClick={() => handleAddWorker(form)} className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-bold text-xs uppercase shadow-lg shadow-blue-200">Registrar Ficha</button>
             </div>
          </div>
       </div>
    )
 }

 const DocModal = () => {
    const [form, setForm] = useState({ name: '', area: 'Seguridad', rev: '', status: 'En Revisión' });
    return (
       <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl">
             <h3 className="font-bold text-lg mb-4">Subir Documento</h3>
             <div className="space-y-3">
                <input placeholder="Nombre del Documento" className="w-full border rounded-lg p-2 text-sm" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                <select className="w-full border rounded-lg p-2 text-sm" value={form.area} onChange={e => setForm({...form, area: e.target.value})}>
                   <option>Seguridad</option><option>Salud</option><option>Ambiente</option>
                </select>
                <select className="w-full border rounded-lg p-2 text-sm" value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                   <option>En Revisión</option><option>Aprobado</option><option>Obsoleto</option>
                </select>
                <input placeholder="Versión / Revisión" className="w-full border rounded-lg p-2 text-sm" value={form.rev} onChange={e => setForm({...form, rev: e.target.value})} />
             </div>
             <div className="flex gap-2 mt-6">
                <button onClick={() => setModalOpen(null)} className="flex-1 py-2 text-slate-500 font-bold text-xs uppercase">Cancelar</button>
                <button onClick={() => handleAddDoc(form)} className="flex-1 py-2 bg-emerald-600 text-white rounded-lg font-bold text-xs uppercase">Subir</button>
             </div>
          </div>
       </div>
    )
 }

 const KPIModal = () => {
    const [form, setForm] = useState({ area: 'Seguridad', metric: '', value: '', target: '', month: 'Marzo', year: 2024 });
    return (
       <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl">
             <h3 className="font-bold text-lg mb-4">Registrar KPI Mensual</h3>
             <div className="space-y-3">
                <select className="w-full border rounded-lg p-2 text-sm" value={form.area} onChange={e => setForm({...form, area: e.target.value})}>
                   <option>Seguridad</option><option>Salud</option><option>Ambiente</option>
                </select>
                <input placeholder="Nombre Métrica (Ej: Accidentes)" className="w-full border rounded-lg p-2 text-sm" value={form.metric} onChange={e => setForm({...form, metric: e.target.value})} />
                <div className="flex gap-2">
                   <input type="number" placeholder="Valor Real" className="w-full border rounded-lg p-2 text-sm" value={form.value} onChange={e => setForm({...form, value: e.target.value})} />
                   <input type="number" placeholder="Meta" className="w-full border rounded-lg p-2 text-sm" value={form.target} onChange={e => setForm({...form, target: e.target.value})} />
                </div>
             </div>
             <div className="flex gap-2 mt-6">
                <button onClick={() => setModalOpen(null)} className="flex-1 py-2 text-slate-500 font-bold text-xs uppercase">Cancelar</button>
                <button onClick={() => handleAddKPI(form)} className="flex-1 py-2 bg-slate-900 text-white rounded-lg font-bold text-xs uppercase">Guardar</button>
             </div>
          </div>
       </div>
    )
 }

  // --- RENDER MAIN ---

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
      
      {/* Sidebar Overlay */}
      {!isSidebarOpen && <div className="fixed inset-0 bg-black/20 z-10 md:hidden" onClick={() => setSidebarOpen(true)}></div>}

      {/* Sidebar */}
      <aside className={`w-64 bg-white border-r border-slate-200 flex flex-col fixed md:relative z-20 h-full transition-all duration-300 ${!isSidebarOpen ? '-translate-x-full md:translate-x-0 md:w-20' : ''}`}>
         <div className="p-6 h-20 flex items-center gap-3 border-b border-slate-50">
           <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200 shrink-0"><Shield size={20} /></div>
           {isSidebarOpen && <span className="font-bold text-xs uppercase tracking-widest text-slate-800">SSOMA v5.1</span>}
         </div>

         <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
           {[
             { id: 'dashboard', icon: LayoutDashboard, label: 'Inicio' },
             { id: 'kpis', icon: BarChart3, label: 'Gestión KPIs' },
             { id: 'decision', icon: BrainCircuit, label: 'Analista IA' },
             { id: 'workers', icon: Users, label: 'Directorio' },
             { id: 'docs', icon: FileText, label: 'Documentos' },
             { id: 'ai', icon: Bot, label: 'Consultor General' },
           ].map(item => (
             <button
               key={item.id}
               onClick={() => { setActiveTab(item.id); if(window.innerWidth < 768) setSidebarOpen(false); }}
               className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all ${activeTab === item.id ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600'}`}
             >
               <item.icon size={20} />
               {isSidebarOpen && <span>{item.label}</span>}
             </button>
           ))}
         </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
           <div className="flex items-center gap-4">
             <button className="md:hidden" onClick={() => setSidebarOpen(!isSidebarOpen)}><Menu /></button>
             <h1 className="font-bold text-slate-800 uppercase tracking-widest text-xs hidden md:block">
               {activeTab === 'dashboard' ? 'Panel Principal' : 
                activeTab === 'kpis' ? 'Indicadores de Gestión' :
                activeTab === 'decision' ? 'Sala de Decisiones & Análisis' :
                activeTab === 'workers' ? 'Fichas de Personal' :
                activeTab === 'docs' ? 'Archivo Digital' : 'Asistente Virtual'}
             </h1>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 hidden sm:block">Sede: Selva Central</span>
              <div className="h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs">AD</div>
           </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
           {activeTab === 'dashboard' && <DashboardOverview />}
           {activeTab === 'decision' && <DecisionRoom />}
           {activeTab === 'workers' && <MasterWorkerDirectory />}
           {activeTab === 'docs' && <DocManager />}
           {activeTab === 'ai' && <AIConsultant />}
           
           {/* KPI Manager (Simplificado inline para ahorrar espacio o reusar lógica anterior) */}
           {activeTab === 'kpis' && (
             <div className="space-y-6 animate-in slide-in-from-right-4">
               <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-800">Gestión de KPIs</h2>
                  <button onClick={() => setModalOpen('kpi')} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800"><Plus size={16} /> Métrica</button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {data.kpis.map(k => (
                   <Card key={k.id} className="flex justify-between items-center">
                     <div>
                       <p className="text-xs font-bold text-slate-400 uppercase">{k.area}</p>
                       <p className="font-bold text-slate-800">{k.metric}</p>
                       <p className="text-xs text-slate-500">{k.month}</p>
                     </div>
                     <div className="text-right">
                       <span className={`text-xl font-bold ${k.value <= k.target ? 'text-emerald-600' : 'text-red-500'}`}>{k.value}</span>
                       <p className="text-[9px] text-slate-400">Meta: {k.target}</p>
                     </div>
                   </Card>
                 ))}
               </div>
             </div>
           )}
        </div>
      </main>

      {/* Modals Layer */}
      {modalOpen === 'kpi' && <KPIModal />}
      {modalOpen === 'worker' && <WorkerModal />}
      {modalOpen === 'doc' && <DocModal />}

    </div>
  );
}