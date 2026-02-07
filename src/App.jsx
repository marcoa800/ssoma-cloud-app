import React, { useState, useEffect } from 'react';
import { 
  Shield, Users, FileText, BarChart3, Bot, Plus, Search, 
  CheckCircle2, AlertTriangle, X, Activity, Calendar, 
  Menu, ChevronRight, UserPlus, TrendingUp, PieChart, 
  LayoutDashboard, FileCheck, MapPin, HardHat, GraduationCap,
  UploadCloud, BrainCircuit, Lightbulb, Trash2, Download,
  FileSpreadsheet, File as FileIcon, Filter
} from 'lucide-react';

// --- CONFIGURACIÓN Y UTILIDADES ---

const STORAGE_KEY = 'ssoma_data_v6';

const INITIAL_DATA = {
  kpis: [
    { id: 1, month: 'Enero', year: '2024', area: 'Seguridad', metric: 'Índice Frecuencia', value: 2.5, target: 3.0 },
    { id: 2, month: 'Enero', year: '2024', area: 'Salud', metric: 'Exámenes Médicos', value: 98, target: 100 },
  ],
  workers: [
    { 
      id: 101, dni: '74582101', name: 'Juan Perez Delgado', cargo: 'Operador Grúa', 
      location: 'Campamento',
      status: 'Activo', // Nuevo: Activo / Cesado
      aptitude: 'Apto', // Nuevo: Apto, Restriccion, etc.
      restrictionDetail: '', 
      compliance: { emo: true, epp: 'ENTREGADO', induccion: true },
      emoType: 'Periódico',
      emoDate: '2023-10-15',
      emoValidity: 12,
      emoExp: '2024-10-15', 
      vacunas: ['F. Amarilla', 'COVID-19']
    },
    { 
      id: 102, dni: '45210369', name: 'Maria Gomez Ruiz', cargo: 'Ing. Residente', 
      location: 'Oficina',
      status: 'Activo',
      aptitude: 'Apto con Restricción',
      restrictionDetail: 'No levantar cargas > 15kg por lumbalgia',
      compliance: { emo: true, epp: 'NO_APLICA', induccion: true },
      emoType: 'Pre-ocupacional',
      emoDate: '2023-05-02',
      emoValidity: 24,
      emoExp: '2025-05-02', 
      vacunas: ['F. Amarilla']
    },
    { 
      id: 103, dni: '10293847', name: 'Carlos Ex-Trabajador', cargo: 'Ayudante', 
      location: 'Otro',
      status: 'Cesado',
      aptitude: 'Apto',
      restrictionDetail: '',
      compliance: { emo: true, epp: 'ENTREGADO', induccion: true },
      emoType: 'Retiro',
      emoDate: '2023-01-01',
      emoValidity: 12,
      emoExp: '2024-01-01', 
      vacunas: []
    }
  ],
  documents: [
    { id: 'S-001', name: 'Matriz IPERC Base.xlsx', type: 'excel', area: 'Seguridad', status: 'Aprobado', rev: '04/2024' },
    { id: 'H-001', name: 'Protocolo Ergonomía.pdf', type: 'pdf', area: 'Salud', status: 'En Revisión', rev: '01/2024' },
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
    neutral: 'bg-slate-100 text-slate-600',
    purple: 'bg-purple-100 text-purple-700',
    gray: 'bg-gray-100 text-gray-500 line-through'
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
        epp: workerData.eppStatus,
        induccion: workerData.hasInduccion 
      }
    };
    setData(prev => ({ ...prev, workers: [newWorker, ...prev.workers] }));
    setModalOpen(null);
  };

  const handleAddKPI = (kpiData) => {
    const newKpi = { ...kpiData, id: Date.now() };
    setData(prev => ({ ...prev, kpis: [newKpi, ...prev.kpis] }));
    setModalOpen(null);
  };

  const handleDeleteKPI = (id) => {
    if (confirm('¿Estás seguro de eliminar este indicador?')) {
        setData(prev => ({ ...prev, kpis: prev.kpis.filter(k => k.id !== id) }));
    }
  };

  const handleAddDoc = (docData) => {
      const newDoc = { ...docData, id: Date.now() };
      setData(prev => ({...prev, documents: [newDoc, ...prev.documents]}));
      setModalOpen(null);
  }

  // --- VISTAS ---

  const DashboardOverview = () => {
    const activeWorkers = data.workers.filter(w => w.status === 'Activo');
    const totalActive = activeWorkers.length;
    
    return (
      <div className="space-y-6 animate-in fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-600 bg-gradient-to-br from-white to-blue-50">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Personal Activo</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="text-4xl font-black text-slate-800">{totalActive}</span>
              <Users className="text-blue-500 mb-1" />
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Total en base de datos: {data.workers.length}</p>
          </Card>
          <Card className="border-l-4 border-l-purple-600">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">Aptos con Restricción</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="text-4xl font-black text-slate-800">{activeWorkers.filter(w => w.aptitude === 'Apto con Restricción').length}</span>
              <Activity className="text-purple-500 mb-1" />
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Requieren seguimiento médico</p>
          </Card>
          <Card className="border-l-4 border-l-amber-500">
            <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">EMOs por Vencer</h3>
            <div className="flex items-end justify-between mt-2">
              <span className="text-4xl font-black text-slate-800">{activeWorkers.filter(w => new Date(w.emoExp) < new Date(new Date().setDate(new Date().getDate() + 30))).length}</span>
              <AlertTriangle className="text-amber-500 mb-1" />
            </div>
            <p className="text-[10px] text-slate-400 mt-2">Próximos 30 días</p>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <Card>
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><TrendingUp size={18} /> Resumen de KPIs Recientes</h3>
             <div className="space-y-3">
               {data.kpis.slice(0, 4).map(k => (
                 <div key={k.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                   <div>
                     <p className="text-xs font-bold text-slate-700">{k.metric}</p>
                     <p className="text-[10px] text-slate-400 uppercase">{k.area} - {k.month} {k.year}</p>
                   </div>
                   <Badge type={k.value <= k.target ? 'success' : 'danger'}>{k.value} (Meta: {k.target})</Badge>
                 </div>
               ))}
             </div>
           </Card>
           <Card>
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Shield size={18} /> Cumplimiento SST (Activos)</h3>
             <ProgressBar label="Inducciones Realizadas" value={activeWorkers.filter(w => w.compliance.induccion).length} max={totalActive} color="bg-indigo-500" />
             <ProgressBar label="EPP (Entregado/N.A)" value={activeWorkers.filter(w => w.compliance.epp === 'ENTREGADO' || w.compliance.epp === 'NO_APLICA').length} max={totalActive} color="bg-blue-500" />
             <ProgressBar label="Aptitud Médica Vigente" value={activeWorkers.filter(w => new Date(w.emoExp) > new Date()).length} max={totalActive} color="bg-emerald-500" />
           </Card>
        </div>
      </div>
    );
  };

  const MasterWorkerDirectory = () => {
    const [filterText, setFilterText] = useState('');
    const [filterStatus, setFilterStatus] = useState('Activo'); // 'Todos', 'Activo', 'Cesado'
    const [filterAptitude, setFilterAptitude] = useState('Todos'); // 'Todos', 'Con Restricción', 'Observado'

    const filtered = data.workers.filter(w => {
        const matchesText = w.name.toLowerCase().includes(filterText.toLowerCase()) || w.dni.includes(filterText);
        const matchesStatus = filterStatus === 'Todos' ? true : w.status === filterStatus;
        const matchesAptitude = filterAptitude === 'Todos' ? true : 
                                (filterAptitude === 'Con Restricción' ? w.aptitude === 'Apto con Restricción' : w.aptitude === filterAptitude);
        return matchesText && matchesStatus && matchesAptitude;
    });

    const getEppBadge = (status) => {
        if (status === 'ENTREGADO') return <Badge type="success">EPP OK</Badge>;
        if (status === 'NO_APLICA') return <Badge type="neutral">N.A</Badge>;
        return <Badge type="warning">PENDIENTE</Badge>;
    };

    const getAptitudeBadge = (apt) => {
        if (apt === 'Apto') return <Badge type="success">APTO</Badge>;
        if (apt === 'Apto con Restricción') return <Badge type="purple">RESTRICCIÓN</Badge>;
        if (apt === 'No Apto') return <Badge type="danger">NO APTO</Badge>;
        return <Badge type="warning">OBSERVADO</Badge>;
    };

    return (
       <div className="space-y-6 animate-in slide-in-from-bottom-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">Directorio Maestro</h2>
              <p className="text-slate-500 text-sm">Gestión de personal, aptitud médica y estatus laboral.</p>
            </div>
            <button onClick={() => setModalOpen('worker')} className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700">
                 <UserPlus size={16} /> Registrar
            </button>
          </div>

          <Card className="bg-slate-50 border-none p-4">
             <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative w-full md:w-auto flex-1">
                   <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                   <input 
                     type="text" 
                     placeholder="Buscar por Nombre o DNI..." 
                     className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                     onChange={(e) => setFilterText(e.target.value)}
                   />
                </div>
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
                    <select className="px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white font-medium" value={filterStatus} onChange={e => setFilterStatus(e.target.value)}>
                        <option value="Activo">Solo Activos</option>
                        <option value="Cesado">Cesados</option>
                        <option value="Todos">Todos los Estados</option>
                    </select>
                    <select className="px-3 py-2 rounded-xl border border-slate-200 text-sm bg-white font-medium" value={filterAptitude} onChange={e => setFilterAptitude(e.target.value)}>
                        <option value="Todos">Toda Aptitud</option>
                        <option value="Con Restricción">Con Restricción</option>
                        <option value="Observado">Observados</option>
                        <option value="No Apto">No Aptos</option>
                    </select>
                </div>
             </div>
          </Card>

          <div className="grid grid-cols-1 gap-4">
             {filtered.map(w => {
               const isEmoExpired = new Date(w.emoExp) < new Date();
               
               return (
                 <div key={w.id} className={`bg-white p-5 rounded-2xl border shadow-sm transition-shadow ${w.status === 'Cesado' ? 'border-l-4 border-l-slate-300 opacity-75' : 'border-l-4 border-l-blue-500 hover:shadow-md'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 border-b border-slate-50 pb-4">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${w.status === 'Cesado' ? 'bg-slate-200 text-slate-500' : 'bg-blue-100 text-blue-600'}`}>
                                {w.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                    {w.name} 
                                    {w.status === 'Cesado' && <span className="text-[9px] bg-slate-200 text-slate-600 px-2 rounded-full uppercase">Cesado</span>}
                                </h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-xs font-bold text-slate-500 uppercase">{w.cargo}</span>
                                    <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 flex items-center gap-1"><MapPin size={10}/> {w.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-end">
                             {getAptitudeBadge(w.aptitude)}
                             {getEppBadge(w.compliance.epp)}
                             <Badge type={w.compliance.induccion ? 'success' : 'danger'}>INDUCCIÓN {w.compliance.induccion ? 'OK' : 'FALTA'}</Badge>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                        <div className="bg-slate-50 p-3 rounded-xl">
                            <p className="font-bold text-slate-600 mb-1">Tipo de EMO</p>
                            <p className="text-slate-500">{w.emoType}</p>
                        </div>
                        <div className={`${w.aptitude === 'Apto con Restricción' ? 'bg-purple-50' : 'bg-slate-50'} p-3 rounded-xl md:col-span-2`}>
                            <p className={`font-bold mb-1 ${w.aptitude === 'Apto con Restricción' ? 'text-purple-800' : 'text-slate-600'}`}>Detalle Aptitud</p>
                            <p className={`${w.aptitude === 'Apto con Restricción' ? 'text-purple-700 font-bold' : 'text-slate-500'}`}>
                                {w.aptitude === 'Apto con Restricción' ? w.restrictionDetail : 'Sin restricciones registradas'}
                            </p>
                        </div>
                        <div className={`${isEmoExpired ? 'bg-red-50' : 'bg-emerald-50'} p-3 rounded-xl`}>
                            <p className={`font-bold ${isEmoExpired ? 'text-red-800' : 'text-emerald-800'} mb-1`}>Vigencia Médica</p>
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

    const getIcon = (type) => {
        if(type === 'pdf') return <FileText size={20} className="text-red-500" />;
        if(type === 'excel') return <FileSpreadsheet size={20} className="text-emerald-600" />;
        if(type === 'word') return <FileText size={20} className="text-blue-600" />;
        return <FileIcon size={20} className="text-slate-400" />;
    };

    const handleDownload = (docName) => {
        alert(`Iniciando descarga de: ${docName} \n(Simulación: El backend enviaría el archivo aquí)`);
    };

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
                      <th className="px-6 py-4 font-bold text-xs uppercase">Acción</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {filteredDocs.map(doc => (
                      <tr key={doc.id} className="hover:bg-slate-50 transition-colors">
                         <td className="px-6 py-4 font-medium text-slate-700 flex items-center gap-3">
                            {getIcon(doc.type)} 
                            <div>
                                <p>{doc.name}</p>
                                <p className="text-[10px] text-slate-400">Rev: {doc.rev}</p>
                            </div>
                         </td>
                         <td className="px-6 py-4">
                            <span className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold uppercase text-slate-500">{doc.area}</span>
                         </td>
                         <td className="px-6 py-4">
                            <Badge type={doc.status === 'Aprobado' ? 'success' : (doc.status === 'Obsoleto' ? 'danger' : 'warning')}>{doc.status}</Badge>
                         </td>
                         <td className="px-6 py-4">
                            <button onClick={() => handleDownload(doc.name)} className="text-slate-400 hover:text-blue-600 transition-colors" title="Descargar">
                                <Download size={18} />
                            </button>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </Card>
       </div>
    );
  };

  // --- MODALES ACTUALIZADOS ---

  const WorkerModal = () => {
    const [form, setForm] = useState({ 
        name: '', dni: '', cargo: '', location: 'Oficina', status: 'Activo',
        emoType: 'Pre-ocupacional', emoDate: '', emoValidity: '12',
        aptitude: 'Apto', restrictionDetail: '',
        eppStatus: 'ENTREGADO', hasInduccion: false
    });

    return (
       <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
             <h3 className="font-bold text-lg mb-4">Ficha de Personal</h3>
             <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input placeholder="Nombre Completo" className="border rounded-lg p-2 text-sm" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    <input placeholder="DNI" className="border rounded-lg p-2 text-sm" value={form.dni} onChange={e => setForm({...form, dni: e.target.value})} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <input placeholder="Cargo" className="border rounded-lg p-2 text-sm col-span-2" value={form.cargo} onChange={e => setForm({...form, cargo: e.target.value})} />
                    <select className="border rounded-lg p-2 text-sm" value={form.location} onChange={e => setForm({...form, location: e.target.value})}>
                        <option value="Oficina">Oficina</option>
                        <option value="Campamento">Campamento</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase">Estado Laboral & Aptitud</p>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-[10px] text-slate-400 block mb-1">Estado</label>
                            <select className="w-full border rounded-lg p-2 text-sm font-bold" value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                                <option value="Activo">🟢 Activo</option>
                                <option value="Cesado">🔴 Cesado</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-[10px] text-slate-400 block mb-1">Aptitud Médica</label>
                            <select className="w-full border rounded-lg p-2 text-sm" value={form.aptitude} onChange={e => setForm({...form, aptitude: e.target.value})}>
                                <option value="Apto">Apto</option>
                                <option value="Apto con Restricción">Apto con Restricción</option>
                                <option value="Observado">Observado</option>
                                <option value="No Apto">No Apto</option>
                            </select>
                        </div>
                    </div>
                    {form.aptitude === 'Apto con Restricción' && (
                        <input 
                            placeholder="Detalle de la restricción (Ej: No trabajo en altura)" 
                            className="w-full border rounded-lg p-2 text-sm border-purple-200 bg-purple-50 focus:ring-purple-500" 
                            value={form.restrictionDetail}
                            onChange={e => setForm({...form, restrictionDetail: e.target.value})}
                        />
                    )}
                </div>
                
                <div className="bg-slate-50 p-4 rounded-xl space-y-3">
                    <p className="text-xs font-bold text-slate-500 uppercase">Detalle EMO</p>
                    <div className="grid grid-cols-3 gap-3">
                        <select className="border rounded-lg p-2 text-sm" value={form.emoType} onChange={e => setForm({...form, emoType: e.target.value})}>
                            <option>Pre-ocupacional</option><option>Periódico</option><option>Retiro</option>
                        </select>
                        <input type="date" className="border rounded-lg p-2 text-sm" value={form.emoDate} onChange={e => setForm({...form, emoDate: e.target.value})} />
                        <select className="border rounded-lg p-2 text-sm" value={form.emoValidity} onChange={e => setForm({...form, emoValidity: e.target.value})}>
                            <option value="12">12 Meses</option>
                            <option value="24">24 Meses</option>
                            <option value="6">6 Meses</option>
                        </select>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    <select className="border rounded-lg p-2 text-sm flex-1" value={form.eppStatus} onChange={e => setForm({...form, eppStatus: e.target.value})}>
                        <option value="ENTREGADO">EPP Entregado</option>
                        <option value="PENDIENTE">EPP Pendiente</option>
                        <option value="NO_APLICA">No Aplica</option>
                    </select>
                    <label className="flex items-center gap-2 cursor-pointer flex-1 justify-end">
                        <input type="checkbox" checked={form.hasInduccion} onChange={e => setForm({...form, hasInduccion: e.target.checked})} />
                        <span className="text-sm font-bold text-slate-700">Inducción SST</span>
                    </label>
                </div>
             </div>
             <div className="flex gap-2 mt-6">
                <button onClick={() => setModalOpen(null)} className="flex-1 py-3 text-slate-500 font-bold text-xs uppercase">Cancelar</button>
                <button onClick={() => handleAddWorker(form)} className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-bold text-xs uppercase shadow-lg shadow-blue-200">Guardar</button>
             </div>
          </div>
       </div>
    )
 }

 const DocModal = () => {
    const [form, setForm] = useState({ name: '', area: 'Seguridad', rev: '', status: 'En Revisión', type: 'pdf', file: null });

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const ext = file.name.split('.').pop().toLowerCase();
            let type = 'other';
            if (['pdf'].includes(ext)) type = 'pdf';
            if (['xls', 'xlsx', 'csv'].includes(ext)) type = 'excel';
            if (['doc', 'docx'].includes(ext)) type = 'word';
            
            setForm({ ...form, name: file.name, type: type, file: file });
        }
    };

    return (
       <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl">
             <h3 className="font-bold text-lg mb-4">Cargar Documento</h3>
             <div className="space-y-4">
                
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 cursor-pointer relative">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} accept=".pdf,.doc,.docx,.xls,.xlsx" />
                    <UploadCloud className="mx-auto text-blue-500 mb-2" />
                    <p className="text-xs font-bold text-slate-600">{form.file ? form.name : "Click para subir PDF/Word/Excel"}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <select className="w-full border rounded-lg p-2 text-sm" value={form.area} onChange={e => setForm({...form, area: e.target.value})}>
                        <option>Seguridad</option><option>Salud</option><option>Ambiente</option>
                    </select>
                    <select className="w-full border rounded-lg p-2 text-sm" value={form.status} onChange={e => setForm({...form, status: e.target.value})}>
                        <option>En Revisión</option><option>Aprobado</option><option>Obsoleto</option>
                    </select>
                </div>
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
    const [form, setForm] = useState({ area: 'Seguridad', metric: '', value: '', target: '', month: 'Enero', year: new Date().getFullYear() });
    return (
       <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-2xl">
             <h3 className="font-bold text-lg mb-4">Registrar KPI</h3>
             <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <select className="border rounded-lg p-2 text-sm" value={form.month} onChange={e => setForm({...form, month: e.target.value})}>
                        {['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'].map(m => <option key={m}>{m}</option>)}
                    </select>
                    <input type="number" className="border rounded-lg p-2 text-sm" value={form.year} onChange={e => setForm({...form, year: e.target.value})} />
                </div>
                <select className="w-full border rounded-lg p-2 text-sm" value={form.area} onChange={e => setForm({...form, area: e.target.value})}>
                   <option>Seguridad</option><option>Salud</option><option>Ambiente</option>
                </select>
                <input placeholder="Nombre Métrica (Ej: I. Frecuencia)" className="w-full border rounded-lg p-2 text-sm" value={form.metric} onChange={e => setForm({...form, metric: e.target.value})} />
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

  // --- RENDER MAIN (Igual que versión anterior, solo actualiza las llamadas a componentes) ---

  return (
    <div className="flex h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
      
      {/* Sidebar Overlay */}
      {!isSidebarOpen && <div className="fixed inset-0 bg-black/20 z-10 md:hidden" onClick={() => setSidebarOpen(true)}></div>}

      {/* Sidebar */}
      <aside className={`w-64 bg-white border-r border-slate-200 flex flex-col fixed md:relative z-20 h-full transition-all duration-300 ${!isSidebarOpen ? '-translate-x-full md:translate-x-0 md:w-20' : ''}`}>
         <div className="p-6 h-20 flex items-center gap-3 border-b border-slate-50">
           <div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-200 shrink-0"><Shield size={20} /></div>
           {isSidebarOpen && <span className="font-bold text-xs uppercase tracking-widest text-slate-800">SSOMA v6.0</span>}
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
                activeTab === 'workers' ? 'Fichas de Personal' :
                activeTab === 'docs' ? 'Archivo Digital' : 'Asistente IA'}
             </h1>
           </div>
           <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-slate-400 hidden sm:block">Sede: Selva Central</span>
              <div className="h-8 w-8 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-xs">AD</div>
           </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
           {activeTab === 'dashboard' && <DashboardOverview />}
           {activeTab === 'decision' && <div className="text-center p-10 text-slate-400">Módulo Sala Decisiones (Ver v5.1)</div>}
           {activeTab === 'workers' && <MasterWorkerDirectory />}
           {activeTab === 'docs' && <DocManager />}
           {activeTab === 'ai' && <div className="text-center p-10 text-slate-400">Módulo IA (Ver v5.1)</div>}
           
           {/* KPI Manager con Borrado */}
           {activeTab === 'kpis' && (
             <div className="space-y-6 animate-in slide-in-from-right-4">
               <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-slate-800">Gestión de KPIs</h2>
                  <button onClick={() => setModalOpen('kpi')} className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-slate-800"><Plus size={16} /> Métrica</button>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {data.kpis.map(k => (
                   <Card key={k.id} className="relative group">
                     <button 
                        onClick={() => handleDeleteKPI(k.id)}
                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                        title="Eliminar KPI"
                     >
                        <Trash2 size={16} />
                     </button>
                     <p className="text-xs font-bold text-slate-400 uppercase">{k.area}</p>
                     <p className="font-bold text-slate-800">{k.metric}</p>
                     <p className="text-xs text-slate-500 mb-2">{k.month} {k.year}</p>
                     <div className="flex items-center gap-2">
                       <span className={`text-xl font-bold ${k.value <= k.target ? 'text-emerald-600' : 'text-red-500'}`}>{k.value}</span>
                       <span className="text-[10px] text-slate-400">/ {k.target}</span>
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