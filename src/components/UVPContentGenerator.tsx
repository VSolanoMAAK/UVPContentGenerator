'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Sparkles, Target, Users, MessageSquare, LayoutGrid, Video, Edit, Clock } from 'lucide-react';

// --- TUS DATOS ORIGINALES (ESTRUCTURA INTACTA) ---
const audiences: any = {
    'full-audience': {
      name: 'Audiencia General',
      description: 'Analíticos, Geniales y Sociales',
      subtitle: 'Líderes eficientes y asertivos que confían en otros, valoran tradición y ayudan a su comunidad',
      color: '#4F46E5',
      communication: {
        influence: ['Argumentos basados en eficiencia', 'Apela a liderazgo discreto', 'Muestra resultados concretos', 'Usa evidencia y casos verificables', 'Respeta tradición, impulsa modernidad'],
        writing: ['Eficiente y directa al punto', 'Habla de resultados y logros', 'Lenguaje pragmático y claro', 'Enfoca en efectividad comprobada', 'Enfatiza balance tradición-modernidad'],
        style: ['Colores profesionales y confiables', 'Diseño limpio y eficiente', 'Imágenes auténticas y discretas'],
        emojis: '🎯 ✅ 💼 🤝 ⚡ 🏆',
        keywords: 'Eficiencia | Logros | Liderazgo | Tradición | Resultados'
      },
      personas: {
        'pre-universitario': { name: 'Diego (16-17 años)', age: '16-17 años', goals: ['Elegir carrera con futuro laboral', 'Universidad confiable'], frustrations: ['Promesas falsas', 'Pérdida de tiempo'] },
        'universitario': { name: 'Emilio (20-23 años)', age: '20-23 años', goals: ['Trabajo bien remunerado', 'Desarrollo por mérito'], frustrations: ['Pérdida de tiempo', 'Falta de oportunidades'] },
        'padre-decisor': { name: 'Patricia (38-50 años)', age: '38-50 años', goals: ['Inversión con retorno', 'Universidad seria'], frustrations: ['Marketing engañoso', 'Falta de transparencia'] }
      }
    },
    'centennials-musicales': {
      name: 'Centennials Musicales',
      description: 'Ambiciosos y Sociales',
      color: '#EC4899',
      communication: {
        influence: ['Beneficios claros', 'Gratificación inmediata', 'Ser líder y cool', 'Prueba social', 'Hedonismo'],
        writing: ['Informal pero estructurado', 'Logros y experiencias', 'Humor ligero optimista', 'Directo sobre beneficios', 'CTAs claros'],
        style: ['Colores brillantes', 'Diseño dinámico', 'Imágenes sociales'],
        emojis: '🎉 👑 🔥 😎 🎵 🙌 💪 ✨',
        keywords: 'Social | Energético | Aspiracional'
      },
      personas: {
        'pre-universitario': { name: 'Sofía (16-17 años)', age: '16-17 años', goals: ['Estudiar lo que gusta', 'Vida universitaria increíble'], frustrations: ['Maltrato animal', 'Ansiedad'] },
        'universitario': { name: 'Valeria (19-23 años)', age: '19-23 años', goals: ['Maestría en el extranjero', 'Ir a Coachella'], frustrations: ['Presión académica', 'Ansiedad constante'] },
        'padre-decisor': { name: 'Rosa (38-50 años)', age: '38-50 años', goals: ['Calidad en presupuesto', 'Sin deudas'], frustrations: ['Altos costos', 'No poder darles todo'] }
      }
    },
    'jovenes-idealistas': {
      name: 'Jóvenes Idealistas',
      description: 'Organizados y Altruistas',
      color: '#10B981',
      communication: {
        influence: ['Base moral y ética', 'Responsabilidad social', 'Ayudar a otros', 'Autoridades creíbles', 'Propósito'],
        writing: ['Formal pero accesible', 'Impacto y propósito', 'Reflexivo y filosófico', 'Contribución social', 'Futuro y legado'],
        style: ['Colores profesionales', 'Diseño organizado', 'Comunidad y propósito'],
        emojis: '🌱 🤝 💚 🎯 📚 🌍 💡 ✊',
        keywords: 'Comunidad | Propósito | Responsable'
      },
      personas: {
        'pre-universitario': { name: 'Andrés (16-17 años)', age: '16-17 años', goals: ['Universidad de prestigio', 'Cambio social'], frustrations: ['Desigualdad', 'Corrupción'] },
        'universitario': { name: 'Mauricio (20-24 años)', age: '20-24 años', goals: ['Estudiar doctorado', 'Trabajar en CONEVAL'], frustrations: ['Pobreza estructural', 'Corrupción'] },
        'padre-decisor': { name: 'Roberto (40-52 años)', age: '40-52 años', goals: ['Educación de élite', 'Propósito social'], frustrations: ['Universidades sin sustancia', 'Falta de valores'] }
      }
    },
    'constructores-futuro': {
      name: 'Constructores de Futuro',
      description: 'Trabajadores y Humildes',
      color: '#F59E0B',
      communication: {
        influence: ['Estabilidad familiar', 'Responsabilidad', 'Resultados concretos', 'Evidencia confiable', 'Tradición y progreso'],
        writing: ['Directa y clara', 'Protección familiar', 'Lenguaje práctico', 'Beneficios para familia', 'Responsabilidad'],
        style: ['Colores cálidos', 'Diseño organizado', 'Imágenes familiares'],
        emojis: '👨‍👩‍👧‍👦 💼 🏠 ✅ 🎯 👍',
        keywords: 'Familia | Responsabilidad | Estabilidad'
      },
      personas: {
        'pre-universitario': { name: 'Luis (16-17 años)', age: '16-17 años', goals: ['Carrera práctica', 'Quedarse en Puebla'], frustrations: ['Inseguridad', 'Tener que irse'] },
        'universitario': { name: 'Pablo (20-26 años)', age: '20-26 años', goals: ['Carrera en Puebla', 'Propio negocio'], frustrations: ['Inseguridad', 'Falta de oportunidades'] },
        'padre-decisor': { name: 'Pablo (42-52 años)', age: '42-52 años', goals: ['Calidad educativa', 'Oportunidades internacionales'], frustrations: ['Inseguridad', 'Falta de valores'] }
      }
    },
    'comunidad-tech': {
      name: 'Comunidad Tech',
      description: 'Analíticos y Tech',
      color: '#8B5CF6',
      communication: {
        influence: ['Eficiencia', 'Liderazgo y logros', 'Innovación práctica', 'Datos y análisis', 'Impulsa éxito'],
        writing: ['Analítica basada en datos', 'Eficiencia y optimización', 'Técnico pero accesible', 'Resultados medibles', 'Mejora continua'],
        style: ['Colores tech', 'Diseño moderno', 'Imágenes innovación'],
        emojis: '💻 📊 🚀 🎯 💡 🏆',
        keywords: 'Tecnología | Eficiencia | Innovación'
      },
      personas: {
        'pre-universitario': { name: 'Daniel (16-17 años)', age: '16-17 años', goals: ['Ingeniería en Sistemas', 'Silicon Valley'], frustrations: ['Falta de ecosistema tech', 'Universidades desactualizadas'] },
        'universitario': { name: 'Javier (20-24 años)', age: '20-24 años', goals: ['Compañías tech Silicon Valley', 'Crear startup'], frustrations: ['Salarios bajos México', 'Brain drain'] },
        'padre-decisor': { name: 'Roberto (40-50 años)', age: '40-50 años', goals: ['Educación tech excelencia', 'Infraestructura tech'], frustrations: ['Universidades desactualizadas', 'Falta de laboratorios'] }
      }
    },
    'jarochos-universitarios': {
      name: 'Jarochos Universitarios',
      description: 'Sociales y Expresivos',
      color: '#EF4444',
      communication: {
        influence: ['Bienestar personal', 'Ambición y crecimiento', 'Casos de éxito', 'Testimonios de pares', 'Tradición y modernidad'],
        writing: ['Social y expresiva', 'Bienestar y desarrollo', 'Lenguaje universitario', 'Logros personales', 'Comunidad'],
        style: ['Colores vibrantes', 'Diseño dinámico', 'Estudiantes reales'],
        emojis: '🎓 📚 🚀 💪 🌟 👥',
        keywords: 'Bienestar | Ambición | Comunidad'
      },
      personas: {
        'pre-universitario': { name: 'Carlos (16-17 años)', age: '16-17 años', goals: ['Universidad Xalapa', 'Negocio propio'], frustrations: ['Lentitud burocrática', 'Tener que irse'] },
        'universitario': { name: 'Ricardo (20-25 años)', age: '20-25 años', goals: ['Negocio exitoso Veracruz', 'Vivir bien'], frustrations: ['Lentitud en todo', 'Burocracia'] },
        'padre-decisor': { name: 'Fernando (40-50 años)', age: '40-50 años', goals: ['Hijos en Xalapa', 'Legado familiar'], frustrations: ['Lentitud', 'Fuga de cerebros'] }
      }
    }
};

const platforms: any = {
  facebook: { name: 'Facebook', color: '#1877F2', icon: '📘' },
  instagram: { name: 'Instagram', color: '#E4405F', icon: '📷' },
  tiktok: { name: 'TikTok', color: '#000000', icon: '🎵' },
  linkedin: { name: 'LinkedIn', color: '#0A66C2', icon: '💼' },
  twitter: { name: 'Twitter/X', color: '#1DA1F2', icon: '🐦' },
  whatsapp: { name: 'WhatsApp', color: '#25D366', icon: '💬' },
  twitch: { name: 'Twitch', color: '#9146FF', icon: '🎮' }
};

const contentTypes: Record<string, string> = {
  'post-organico': 'Post Orgánico',
  'historia': 'Historia/Story',
  'video-corto': 'Video Corto',
  'carrusel': 'Carrusel Educativo',
  'anuncio': 'Anuncio Pagado'
};

// --- NUEVAS OPCIONES V2 (Integradas) ---
const videoFormats: Record<string, string> = {
    'tiktok': 'TikTok',
    'reel': 'Instagram Reel',
    'universal': 'Universal (TikTok + Reel)'
};

const videoDurations: Record<string, string> = {
    '15-30': '15-30 seg (Corto)',
    '30-60': '30-60 seg (Estándar)',
    '60-90': '60-90 seg (Largo)'
};

const topicOptions = [
    'Promoción de carrera',
    'Evento / Open House',
    'Becas y financiamiento',
    'Instalaciones',
    'Vida universitaria',
    'Admisiones',
    'Otro'
];

// --- FUNCIONES DE GENERACIÓN (Lógica Nueva) ---
const generateVideoScript = (audience: any, persona: any, comm: any, isYoung: boolean, videoDuration: string, videoFormat: string, customRequest: string) => {
    const duration = videoDuration || '30-60';
    const format = videoFormat || 'universal';
    const request = customRequest;
    const frustration = persona.frustrations[0];
    const benefit = comm.influence[0];

    const formatStyle: any = {
        'tiktok': { ritmo: '⚡ Rápido (cortes 1-2s)', hook: 'Disruptivo', musica: 'Trending Sound' },
        'reel': { ritmo: '✨ Fluido (cortes 2-3s)', hook: 'Aspiracional', musica: 'Audio Original/Trend' },
        'universal': { ritmo: '⚖️ Balanceado', hook: 'Versátil', musica: 'Pop/Trending' }
    };
    const style = formatStyle[format];

    const detailedScript = `🎬 GUION ${videoFormats[format]?.toUpperCase() || 'VIDEO'} - ${duration}
------------------------------------------------------------------
📍 TEMA: ${request}
👤 PERSONA: ${persona.name}
------------------------------------------------------------------

1. HOOK (0-3s): 
VISUAL: ${format === 'tiktok' ? 'Zoom a cara preocupada' : 'Plano medio estético'}
AUDIO: "¿${frustration}?" ${isYoung ? '😰' : '🤔'}
TEXTO: ❌ NO MÁS DUDA

2. PROBLEMA (3-10s):
VISUAL: Clips rápidos de la situación frustrante.
AUDIO: "Sabemos que ${frustration.toLowerCase()} es real..."
NOTA: Ritmo ${style.ritmo}

3. SOLUCIÓN UVP (10-25s):
VISUAL: Transición dinámica a instalaciones/clases UVP.
AUDIO: "Pero en UVP, esto cambia: ${benefit}"
TEXTO: ✅ ${comm.keywords.split('|')[0]}

4. CTA (Final):
VISUAL: Logo UVP + Texto grande.
AUDIO: "Más info en el link de la bio"
------------------------------------------------------------------
🎵 MÚSICA: ${style.musica} | 🎭 TONO: ${comm.writing[0]}
`;
    return {
        headline: `🎬 Guion de Video (${format})`,
        body: detailedScript, // Usamos body para mostrar el guion completo en el UI existente
        cta: 'Ver link en bio',
        visualSuggestions: `Estilo: ${style.hook}\nRitmo: ${style.ritmo}\nEstética: ${comm.style[0]}`,
        hashtags: `#UVP #${audience.name.replace(/\s+/g,'')} #Video`,
        tone: comm.writing[0],
        emojis: comm.emojis,
        isVideo: true
    };
};

const generateRegularContent = (audience: any, persona: any, comm: any, isYoung: boolean, contentType: string, customRequest: string) => {
    const request = customRequest;
    const benefit = comm.influence[0];
    const cta = `${isYoung ? 'Conoce' : 'Conozca'} más en bio 🔗`;

    let body = '';
    if (contentType === 'carrusel') {
        body = `SLIDE 1: ${request}\nSLIDE 2: ¿${persona.frustrations[0]}?\nSLIDE 3: La solución UVP: ${benefit}\nSLIDE 4: ${comm.influence[1]}\nSLIDE 5: ${cta}`;
    } else {
        body = `¿Buscas ${request.toLowerCase()}?\n\n✅ ${benefit}\n✅ ${comm.influence[1]}\n\nEn UVP entendemos que ${persona.frustrations[0].toLowerCase()} es real.\n\n${cta}`;
    }

    return {
        headline: `${request} | ${audience.name}`,
        body: body,
        cta: cta,
        visualSuggestions: `📸 Imagen:\n- ${comm.style[0]}\n- Muestra: ${request}`,
        hashtags: `#UVP #${audience.name.replace(/\s+/g, '')}`,
        tone: comm.writing[0],
        emojis: comm.emojis,
        isVideo: false
    };
};

// --- COMPONENTE PRINCIPAL ---

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.08 } }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } }
};

const hoverPop = { scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 20 } };

const UVPContentGenerator: React.FC = () => {
  // Estados Originales
  const [selectedAudience, setSelectedAudience] = useState('');
  const [selectedPersona, setSelectedPersona] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [contentType, setContentType] = useState('');
  
  // Nuevos Estados (V2)
  const [videoFormat, setVideoFormat] = useState('');
  const [videoDuration, setVideoDuration] = useState('');
  const [customRequest, setCustomRequest] = useState('');
  const [contentTopic, setContentTopic] = useState('');

  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateContent = () => {
    // Validación mejorada
    if (!selectedAudience || !selectedPersona || !selectedPlatform || !contentType) {
      alert('Por favor completa: Audiencia, Buyer Persona, Plataforma y Tipo de Contenido.');
      return;
    }

    // Si hay solicitud personalizada, debe estar llena
    const requestFinal = customRequest.trim() || contentTopic || 'Información general';
    
    if (contentType === 'video-corto' && (!videoFormat || !videoDuration)) {
        alert('Para video, por favor selecciona Formato y Duración.');
        return;
    }

    const audience: any = audiences[selectedAudience];
    const persona: any = audience.personas[selectedPersona];
    const comm = audience.communication;
    const isYoung = persona.age.includes('16') || persona.age.includes('20');

    let content;
    if (contentType === 'video-corto') {
        content = generateVideoScript(audience, persona, comm, isYoung, videoDuration, videoFormat, requestFinal);
    } else {
        content = generateRegularContent(audience, persona, comm, isYoung, contentType, requestFinal);
    }
    setGeneratedContent(content);
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text ?? '');

  return (
    <main className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto space-y-6">
        
        {/* HEADER ORIGINAL */}
        <motion.header variants={item} className="glass p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-tr from-fuchsia-500/30 to-indigo-500/30 border border-white/10">
              <Sparkles className="w-8 h-8 text-fuchsia-300" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">UVP Content Generator v2.0</h1>
              <p className="text-slate-300">Generador con Inteligencia de Audiencias y Guiones de Video</p>
            </div>
          </div>
        </motion.header>

        {/* SELECTORES PRINCIPALES (GRID ORIGINAL) */}
        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div whileHover={hoverPop} className="glass p-6">
            <label className="label"><Users className="w-5 h-5 text-blue-300" /> Audiencia</label>
            <select value={selectedAudience} onChange={(e) => { setSelectedAudience(e.target.value); setSelectedPersona(''); }} className="input">
              <option value="">Seleccionar...</option>
              {Object.entries(audiences).map(([key, aud]: any) => (<option key={key} value={key}>{aud.name}</option>))}
            </select>
          </motion.div>

          <motion.div whileHover={hoverPop} className="glass p-6">
            <label className="label"><Target className="w-5 h-5 text-emerald-300" /> Buyer Persona</label>
            <select value={selectedPersona} onChange={(e) => setSelectedPersona(e.target.value)} disabled={!selectedAudience} className="input disabled:opacity-60">
              <option value="">Seleccionar...</option>
              {selectedAudience && Object.entries(audiences[selectedAudience].personas).map(([key, persona]: any) => (<option key={key} value={key}>{persona.name}</option>))}
            </select>
          </motion.div>

          <motion.div whileHover={hoverPop} className="glass p-6">
            <label className="label"><MessageSquare className="w-5 h-5 text-purple-300" /> Plataforma</label>
            <select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)} className="input">
              <option value="">Seleccionar...</option>
              {Object.entries(platforms).map(([key, plat]: any) => (<option key={key} value={key}>{plat.icon} {plat.name}</option>))}
            </select>
          </motion.div>

          <motion.div whileHover={hoverPop} className="glass p-6">
            <label className="label"><LayoutGrid className="w-5 h-5 text-amber-300" /> Tipo de Contenido</label>
            <select value={contentType} onChange={(e) => setContentType(e.target.value)} className="input">
              <option value="">Seleccionar...</option>
              {Object.entries(contentTypes).map(([key, type]) => (<option key={key} value={key}>{type}</option>))}
            </select>
          </motion.div>
        </motion.section>

        {/* SECCIÓN NUEVA: OPCIONES DE VIDEO (SOLO APARECE SI ES VIDEO) */}
        <AnimatePresence>
            {contentType === 'video-corto' && (
                <motion.section 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                     <motion.div className="glass p-6">
                        <label className="label"><Video className="w-5 h-5 text-pink-400" /> Formato Video</label>
                        <select value={videoFormat} onChange={(e) => setVideoFormat(e.target.value)} className="input">
                            <option value="">Seleccionar...</option>
                            {Object.entries(videoFormats).map(([key, val]) => (<option key={key} value={key}>{val}</option>))}
                        </select>
                     </motion.div>
                     <motion.div className="glass p-6">
                        <label className="label"><Clock className="w-5 h-5 text-blue-400" /> Duración</label>
                        <select value={videoDuration} onChange={(e) => setVideoDuration(e.target.value)} className="input">
                            <option value="">Seleccionar...</option>
                            {Object.entries(videoDurations).map(([key, val]) => (<option key={key} value={key}>{val}</option>))}
                        </select>
                     </motion.div>
                </motion.section>
            )}
        </AnimatePresence>

        {/* SECCIÓN NUEVA: PERSONALIZACIÓN (INTEGRADA AL DISEÑO DARK) */}
        <motion.section variants={item} className="glass p-6">
            <div className="flex items-center gap-2 mb-4 text-indigo-300">
                <Edit className="w-5 h-5" />
                <h3 className="font-bold">Personaliza tu Contenido</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <label className="label mb-2 block">📝 Solicitud Principal (¿Qué quieres comunicar?)</label>
                    <textarea 
                        value={customRequest}
                        onChange={(e) => setCustomRequest(e.target.value)}
                        placeholder="Ej: Promocionar Ingeniería Industrial destacando laboratorios..."
                        className="input w-full h-24 py-3 resize-none"
                    />
                </div>
                <div>
                    <label className="label mb-2 block">🎯 Tema Rápido</label>
                    <select value={contentTopic} onChange={(e) => setContentTopic(e.target.value)} className="input w-full mb-4">
                        <option value="">Opcional...</option>
                        {topicOptions.map((t, i) => <option key={i} value={t}>{t}</option>)}
                    </select>
                    <p className="text-xs text-slate-400">Llena la solicitud principal O selecciona un tema rápido.</p>
                </div>
            </div>
        </motion.section>

        {/* BOTÓN GENERAR (ESTILO ORIGINAL) */}
        <motion.div variants={item} className="text-center">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={generateContent} className="btn-primary">
            <Sparkles className="w-5 h-5" /> Generar Contenido V2
          </motion.button>
        </motion.div>

        {/* RESULTADOS (ADAPTADO PARA MOSTRAR GUIONES LARGOS) */}
        <AnimatePresence>
          {generatedContent && (
            <motion.section key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: 'spring', stiffness: 110, damping: 18 }} className="glass p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Contenido Generado</h2>
                <button onClick={() => navigator.clipboard.writeText(generatedContent.body)} className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition inline-flex items-center gap-2">
                  <Copy className="w-4 h-4" /> Copiar Principal
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Headline */}
                <div className="glass p-4 lg:col-span-2">
                  <h3 className="font-bold mb-2 text-indigo-300">📌 Título / Concepto</h3>
                  <p className="font-semibold text-lg">{generatedContent.headline}</p>
                </div>

                {/* Cuerpo / Guion (Área Principal) */}
                <div className="glass p-4 lg:col-span-2 bg-black/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-indigo-300">{generatedContent.isVideo ? '🎬 Guion Detallado' : '📝 Cuerpo del Mensaje'}</h3>
                    <button onClick={() => navigator.clipboard.writeText(generatedContent.body)} className="text-xs text-white/50 hover:text-white">Copiar</button>
                  </div>
                  <pre className="whitespace-pre-wrap font-mono text-sm text-slate-200 leading-relaxed">
                    {generatedContent.body}
                  </pre>
                </div>

                {/* Detalles Adicionales */}
                <div className="glass p-4">
                  <h3 className="font-bold mb-2 text-indigo-300">🎯 Call-to-Action</h3>
                  <p className="font-semibold">{generatedContent.cta}</p>
                </div>
                <div className="glass p-4">
                  <h3 className="font-bold mb-2 text-indigo-300">🎨 Visuales</h3>
                  <p className="whitespace-pre-line text-sm">{generatedContent.visualSuggestions}</p>
                </div>
                <div className="glass p-4">
                   <h3 className="font-bold mb-2 text-indigo-300">#️⃣ Hashtags</h3>
                   <p className="text-blue-300 text-sm">{generatedContent.hashtags}</p>
                </div>
                <div className="glass p-4">
                    <h3 className="font-bold mb-2 text-indigo-300">🎭 Tono</h3>
                    <p>{generatedContent.tone} {generatedContent.emojis}</p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <motion.footer variants={item} className="text-center text-slate-300 py-6">
          <p className="text-sm">Generador de Contenidos UVP v2.0 • Glass UI + Next.js</p>
        </motion.footer>
      </motion.div>
    </main>
  );
};

export default UVPContentGenerator;
