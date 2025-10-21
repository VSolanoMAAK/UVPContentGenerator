'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Sparkles, Target, Users, MessageSquare, LayoutGrid } from 'lucide-react';

// Audiences (inyectado desde tu script)
const audiences = {
    'full-audience': {
      name: 'Audiencia General',
      description: 'Analíticos, Geniales y Sociales',
      subtitle: 'Líderes eficientes y asertivos que confían en otros, valoran tradición y ayudan a su comunidad',
      color: '#4F46E5',
      demographics: {
        age: '18-24 años (40.89%)',
        location: 'Puebla capital (67%), Cholula (23%)',
        nse: 'Mixto',
        occupation: 'Estudiantes'
      },
      psychographics: [
        'Analíticos y cautelosos',
        'Reservados y modestos',
        'Pragmáticos',
        'Cuestionadores',
        'Buscan eficiencia',
        'Balance tradición-modernidad'
      ],
      platforms: {
        primary: 'Instagram (41%)',
        secondary: 'WhatsApp (59%)',
        device: 'Móvil (89%)',
        activeTime: 'Miércoles 12-17hrs'
      },
      interests: ['Baile (38%)', 'Música (34%)', 'Deportes (28%)'],
      influencers: ['Loret de Mola', 'Carmen Aristegui', 'López-Dóriga'],
      brands: ['UDLAP (45%)', 'Aristegui Noticias (40%)', 'El Universal (37%)'],
      communication: {
        influence: [
          'Argumentos basados en eficiencia',
          'Apela a liderazgo discreto',
          'Muestra resultados concretos',
          'Usa evidencia y casos verificables',
          'Respeta tradición, impulsa modernidad'
        ],
        writing: [
          'Eficiente y directa al punto',
          'Habla de resultados y logros',
          'Lenguaje pragmático y claro',
          'Enfoca en efectividad comprobada',
          'Enfatiza balance tradición-modernidad'
        ],
        style: [
          'Colores profesionales y confiables',
          'Diseño limpio y eficiente',
          'Imágenes auténticas y discretas',
          'Profesional sin ostentación',
          'Balance entre serio y accesible'
        ],
        emojis: '🎯 ✅ 💼 🤝 ⚡ 🏆',
        keywords: 'Eficiencia | Logros | Liderazgo | Tradición | Resultados'
      },
      personas: {
        'pre-universitario': {
          name: 'Diego (16-17 años)',
          age: '16-17 años',
          occupation: 'Estudiante de preparatoria',
          bio: 'Reservado pero sociable cuando es necesario, analiza cuidadosamente qué universidad elegir',
          goals: ['Elegir carrera con futuro laboral comprobado', 'Universidad que cumpla lo que promete', 'Conseguir resultados tangibles'],
          frustrations: ['Promesas falsas de universidades', 'Pérdida de tiempo', 'Falta de información clara'],
          platforms: ['Instagram', 'WhatsApp']
        },
        'universitario': {
          name: 'Emilio (20-23 años)',
          age: '20-23 años',
          occupation: 'Estudiante universitario',
          bio: 'Analítico, pragmático y enfocado en resultados. No se deja impresionar fácilmente',
          goals: ['Trabajo bien remunerado', 'Desarrollo profesional basado en mérito', 'Estabilidad económica'],
          frustrations: ['Pérdida de tiempo', 'Promesas vacías', 'Falta de oportunidades laborales reales'],
          platforms: ['Instagram', 'LinkedIn', 'WhatsApp']
        },
        'padre-decisor': {
          name: 'Patricia (38-50 años)',
          age: '38-50 años',
          occupation: 'Profesionista/Comerciante',
          bio: 'Extremadamente cautelosa, cuestiona todo antes de invertir en educación de sus hijos',
          goals: ['Inversión con retorno comprobable', 'Resultados tangibles', 'Universidad seria y confiable'],
          frustrations: ['Marketing engañoso', 'Falta de transparencia en empleabilidad', 'Promesas que no se cumplen'],
          platforms: ['Facebook', 'WhatsApp']
        }
      }
    },
    'centennials-musicales': {
      name: 'Centennials Musicales',
      description: 'Ambiciosos y Sociales',
      subtitle: 'Líderes naturales que buscan emociones, logros y conexión social',
      color: '#EC4899',
      demographics: {
        age: '18-24 años (47.03%)',
        gender: 'Mujeres (54%)',
        location: 'Puebla capital',
        nse: 'C-',
        occupation: 'Estudiantes'
      },
      psychographics: [
        'Extrovertidas y sociales',
        'Impulsivas - actúan luego piensan',
        'Buscan placer y experiencias',
        'Ansiosas y preocupadas',
        'Les importa lo que piensen de ellas',
        'Líderes naturales con alta autoestima'
      ],
      platforms: {
        primary: 'TikTok',
        secondary: 'Instagram',
        device: 'Móvil (92%)',
        activeTime: 'Lunes 18-23hrs'
      },
      interests: ['Música (41%)', 'Baile (33%)', 'Social (27%)', 'Conciertos y festivales'],
      influencers: ['Exa FM', 'Rythm FM', 'jezzini', 'Soy tu EX'],
      brands: ['UPAEP', 'The New York Times'],
      communication: {
        influence: [
          'Argumentos con beneficios claros',
          'Enfoca en aquí y ahora - gratificación inmediata',
          'Presenta como forma de ser líder y cool',
          'Usa prueba social y lealtad grupal',
          'Apela al hedonismo y disfrute'
        ],
        writing: [
          'Informal pero estructurado',
          'Habla sobre logros y experiencias',
          'Usa humor ligero y tono optimista',
          'Directo sobre los beneficios',
          'Llamados a la acción claros'
        ],
        style: [
          'Colores brillantes y energéticos',
          'Diseño estructurado pero dinámico',
          'Imágenes sociales y representacionales',
          'Estimulante y emocionalmente activante',
          'Elementos modernos y trendy'
        ],
        emojis: '🎉 👑 🔥 😎 🎵 🙌 💪 ✨',
        keywords: 'Social | Energético | Aspiracional | Colorido | Auténtico'
      },
      personas: {
        'pre-universitario': {
          name: 'Sofía (16-17 años)',
          age: '16-17 años',
          occupation: 'Estudiante de preparatoria',
          bio: 'Muy social y extrovertida, usa TikTok todo el día, consciente de causas sociales',
          goals: ['Estudiar algo que le guste', 'Vida universitaria increíble', 'Ir a festivales internacionales'],
          frustrations: ['Maltrato animal', 'Injusticia social', 'Falta de dinero para conciertos', 'Ansiedad por exámenes'],
          platforms: ['TikTok', 'Instagram', 'WhatsApp']
        },
        'universitario': {
          name: 'Valeria (19-23 años)',
          age: '19-23 años',
          occupation: 'Estudiante universitaria',
          bio: 'Feminista activa, muy social, sale a Cholula cada fin de semana, busca experiencias',
          goals: ['Estudiar maestría en el extranjero', 'Ir a Coachella', 'Trabajar en causas sociales'],
          frustrations: ['Maltrato animal', 'Presión académica', 'Falta de dinero', 'Ansiedad constante'],
          platforms: ['TikTok', 'Instagram', 'WhatsApp']
        },
        'padre-decisor': {
          name: 'Rosa (38-50 años)',
          age: '38-50 años',
          occupation: 'Empleada administrativa',
          bio: 'NSE C-, cuida cada peso, busca calidad a precio accesible para educación de sus hijas',
          goals: ['Educación de calidad dentro del presupuesto', 'Que sus hijas se gradúen sin endeudarse', 'Ver a sus hijas exitosas'],
          frustrations: ['Altos costos universitarios', 'No poder darles todo', 'Universidades que no cumplen', 'Deudas'],
          platforms: ['Facebook', 'WhatsApp']
        }
      }
    },
    'jovenes-idealistas': {
      name: 'Jóvenes Idealistas',
      description: 'Organizados y Altruistas',
      subtitle: 'Líderes responsables que buscan propósito y contribuir al bien común',
      color: '#10B981',
      demographics: {
        age: '18-24 años (32.99%)',
        gender: 'Hombres (67%)',
        location: 'Cholula',
        nse: 'A/B',
        occupation: 'Estudiantes'
      },
      psychographics: [
        'Reflexivos y filosóficos',
        'Piensan antes de actuar',
        'Organizados y disciplinados',
        'Buscan propósito y significado',
        'Altruistas',
        'Humildes y modestos'
      ],
      platforms: {
        primary: 'LinkedIn',
        secondary: 'Twitter/X',
        device: 'Móvil (85%)',
        activeTime: 'Miércoles 18-23hrs'
      },
      interests: ['Política (40%)', 'Viajes (35%)', 'Finanzas (29%)'],
      influencers: ['Animal Político', 'El País', 'MVS Noticias'],
      brands: ['Colmex', 'CIDE', 'FCE'],
      communication: {
        influence: [
          'Argumentos con base moral y ética',
          'Apela al deber y responsabilidad social',
          'Presenta como forma de ayudar a otros',
          'Usa evidencia y autoridades creíbles',
          'Enfoca en estabilidad y propósito'
        ],
        writing: [
          'Formal pero accesible y genuino',
          'Habla sobre impacto y propósito',
          'Usa lenguaje reflexivo y filosófico',
          'Directo sobre la contribución social',
          'Habla de futuro y legado'
        ],
        style: [
          'Colores profesionales y serios',
          'Diseño organizado y estructurado',
          'Imágenes de comunidad y propósito',
          'Reconfortante y confiable',
          'Elementos tradicionales con toque moderno'
        ],
        emojis: '🌱 🤝 💚 🎯 📚 🌍 💡 ✊',
        keywords: 'Comunidad | Propósito | Responsable | Natural | Auténtico'
      },
      personas: {
        'pre-universitario': {
          name: 'Andrés (16-17 años)',
          age: '16-17 años',
          occupation: 'Estudiante de preparatoria privada',
          bio: 'Reflexivo, organizado, lee noticias internacionales, debate temas de actualidad',
          goals: ['Estudiar en universidad de prestigio', 'Economía/política/relaciones internacionales', 'Trabajar en instituciones de cambio social'],
          frustrations: ['Desigualdad y pobreza', 'Corrupción política', 'Conformismo de su generación', 'Política basada en popularidad'],
          platforms: ['LinkedIn', 'Twitter/X']
        },
        'universitario': {
          name: 'Mauricio (20-24 años)',
          age: '20-24 años',
          occupation: 'Estudiante universitario',
          bio: 'Muy informado, reflexivo, conversaciones profundas sobre democracia y cambio climático',
          goals: ['Estudiar doctorado', 'Trabajar en CONEVAL o think tanks', 'Contribuir al cambio social', 'Generar investigación de impacto'],
          frustrations: ['Pobreza y desigualdad', 'Corrupción sistémica', 'Políticas públicas mal diseñadas', 'Polarización del debate'],
          platforms: ['LinkedIn', 'Twitter/X']
        },
        'padre-decisor': {
          name: 'Roberto (40-52 años)',
          age: '40-52 años',
          occupation: 'Empresario/Profesionista de alto nivel',
          bio: 'NSE A/B, valora educación con propósito social, reflexivo, deliberado en decisiones',
          goals: ['Educación de élite con propósito social', 'Hijos en instituciones de prestigio', 'Que se conviertan en líderes responsables', 'Oportunidades internacionales'],
          frustrations: ['Universidades sin sustancia', 'Falta de formación en valores', 'Instituciones que solo buscan lucro', 'Baja calidad educativa'],
          platforms: ['LinkedIn', 'Twitter/X', 'El País']
        }
      }
    },
    'constructores-futuro': {
      name: 'Constructores de Futuro',
      description: 'Trabajadores Incansables y Humildes',
      subtitle: 'Responsables dedicados que priorizan el bienestar familiar y combinan tradición con modernidad',
      color: '#F59E0B',
      demographics: {
        age: '18-24 años (36.86%)',
        gender: 'Hombres (60%)',
        location: 'Puebla capital',
        nse: 'A/B',
        occupation: 'Estudiantes/Profesionistas independientes'
      },
      psychographics: [
        'Trabajadores incansables',
        'Humildes y modestos',
        'Organizados y disciplinados',
        'Extrovertidos y sociables',
        'Buscan estabilidad y seguridad',
        'Balance tradición-modernidad'
      ],
      platforms: {
        primary: 'Facebook',
        secondary: 'WhatsApp',
        device: 'Móvil (90%)',
        activeTime: 'Miércoles 18-23hrs'
      },
      interests: ['Baile (53%)', 'Música (31%)', 'Deportes (24%)'],
      influencers: ['TV Azteca Puebla', 'Juan Carlos Valerio', 'El Sol de Puebla'],
      brands: ['Latinus', 'ESPN', 'Tránsito Municipal'],
      communication: {
        influence: [
          'Argumentos de estabilidad familiar',
          'Apela a responsabilidad y protección',
          'Muestra resultados concretos',
          'Usa evidencia confiable',
          'Respeta tradición, abraza progreso'
        ],
        writing: [
          'Directa y clara, sin complicaciones',
          'Habla de protección familiar',
          'Lenguaje práctico y concreto',
          'Enfoca beneficios para la familia',
          'Enfatiza responsabilidad y confianza'
        ],
        style: [
          'Colores cálidos y confiables',
          'Diseño limpio y organizado',
          'Imágenes familiares y auténticas',
          'Reconfortante y profesional',
          'Elementos tradicionales con toque moderno'
        ],
        emojis: '👨‍👩‍👧‍👦 💼 🏠 ✅ 🎯 👍',
        keywords: 'Familia | Responsabilidad | Hogar | Estabilidad | Confianza'
      },
      personas: {
        'pre-universitario': {
          name: 'Luis (16-17 años)',
          age: '16-17 años',
          occupation: 'Estudiante de preparatoria',
          bio: 'Trabajador, organizado, poblano de corazón, valora tradición familiar pero busca progresar',
          goals: ['Carrera práctica con salida laboral', 'Quedarse en Puebla', 'Trabajo estable', 'Ayudar a su familia'],
          frustrations: ['Inseguridad en Puebla', 'Falta de oportunidades locales', 'Tener que irse de Puebla'],
          platforms: ['Facebook', 'WhatsApp']
        },
        'universitario': {
          name: 'Pablo (20-26 años)',
          age: '20-26 años',
          occupation: 'Estudiante universitario/Joven profesional',
          bio: 'Poblano orgulloso, trabajador incansable, estudia y trabaja, extrovertido y sociable',
          goals: ['Consolidar carrera en Puebla', 'Tener su propio negocio', 'Formar familia estable', 'Dar mejor futuro a sus hijos'],
          frustrations: ['Inseguridad en Puebla', 'Falta de oportunidades bien remuneradas', 'Corrupción', 'Falta de reconocimiento'],
          platforms: ['Facebook', 'WhatsApp']
        },
        'padre-decisor': {
          name: 'Pablo (42-52 años)',
          age: '42-52 años',
          occupation: 'Empresario/Profesionista independiente',
          bio: 'Empresario poblano, orgulloso de su origen, valora estabilidad y tradición familiar',
          goals: ['Hijos en universidades de calidad', 'Oportunidades internacionales', 'Que continúen negocio familiar', 'Dejar legado'],
          frustrations: ['Inseguridad en Puebla', 'Universidades que no preparan', 'Falta de valores', 'Corrupción'],
          platforms: ['Facebook', 'Twitter/X']
        }
      }
    },
    'comunidad-tech': {
      name: 'Comunidad Tech',
      description: 'Analíticos, Geniales y Sociales',
      subtitle: 'Líderes asertivos y trabajadores que buscan eficiencia y valoran el éxito',
      color: '#8B5CF6',
      demographics: {
        age: '18-24 años (41.18%)',
        gender: 'Hombres (57%)',
        location: 'Puebla/Cholula',
        nse: 'A/B',
        occupation: 'Estudiantes'
      },
      psychographics: [
        'Introvertidos',
        'Analíticos y estructurados',
        'Contrarian thinking',
        'Ambiciosos con enfoque internacional',
        'Pragmáticos',
        'Líderes asertivos pero reservados'
      ],
      platforms: {
        primary: 'Twitch',
        secondary: 'TikTok',
        device: 'Móvil (91%)',
        activeTime: 'Lunes 18-23hrs'
      },
      interests: ['Tecnología (39%)', 'Juegos (34%)', 'Negocios (28%)'],
      influencers: ['CNN Internacional', 'National Geographic', 'MTV'],
      brands: ['PrepaTec', 'TEC', 'ChistesTec'],
      communication: {
        influence: [
          'Argumentos basados en eficiencia',
          'Apela al liderazgo y logros',
          'Muestra innovación práctica',
          'Usa datos y análisis concretos',
          'Respeta tradición, impulsa éxito'
        ],
        writing: [
          'Analítica y basada en datos',
          'Habla de eficiencia y optimización',
          'Lenguaje técnico pero accesible',
          'Enfoca en resultados medibles',
          'Enfatiza mejora continua'
        ],
        style: [
          'Colores profesionales y tech',
          'Diseño moderno y estructurado',
          'Imágenes de innovación',
          'Profesional y dinámico',
          'Balance entre serio y social'
        ],
        emojis: '💻 📊 🚀 🎯 💡 🏆',
        keywords: 'Tecnología | Eficiencia | Liderazgo | Innovación | Análisis'
      },
      personas: {
        'pre-universitario': {
          name: 'Daniel (16-17 años)',
          age: '16-17 años',
          occupation: 'Estudiante de preparatoria',
          bio: 'Introvertido, apasionado por tecnología y videojuegos, pasa horas en Twitch y YouTube tech',
          goals: ['Estudiar Ingeniería en Sistemas/Computación', 'Trabajar en Silicon Valley', 'Crear su propia startup'],
          frustrations: ['Violencia e inseguridad', 'Falta de ecosistema tech en México', 'Universidades desactualizadas tecnológicamente'],
          platforms: ['Twitch', 'TikTok', 'Discord']
        },
        'universitario': {
          name: 'Javier (20-24 años)',
          age: '20-24 años',
          occupation: 'Estudiante universitario',
          bio: 'Introvertido pero asertivo, aspira a trabajar en Silicon Valley, gamer, lee sobre IA y blockchain',
          goals: ['Trabajar en compañías tech de Silicon Valley', 'Ganar salario internacional', 'Crear startup tecnológica'],
          frustrations: ['Violencia e inseguridad', 'Salarios tech bajos en México', 'Brain drain', 'Falta de cultura tech empresarial'],
          platforms: ['Twitch', 'TikTok', 'Discord', 'Reddit']
        },
        'padre-decisor': {
          name: 'Roberto (40-50 años)',
          age: '40-50 años',
          occupation: 'Profesionista tech/Director de TI',
          bio: 'Entiende de tecnología, valora educación tech de calidad, analítico en decisiones',
          goals: ['Educación tech de excelencia', 'Infraestructura tecnológica de punta', 'Convenios con empresas tech globales', 'Intercambios internacionales'],
          frustrations: ['Universidades desactualizadas', 'Falta de laboratorios modernos', 'Profesores sin experiencia', 'Planes de estudio obsoletos'],
          platforms: ['LinkedIn', 'Twitter/X', 'Tech blogs']
        }
      }
    },
    'jarochos-universitarios': {
      name: 'Jarochos Universitarios',
      description: 'Trabajadores, Sociales y Expresivos',
      subtitle: 'Estudiantes ambiciosos que buscan bienestar personal mientras ayudan a otros',
      color: '#EF4444',
      demographics: {
        age: '18-24 años (42.34%)',
        gender: 'Hombres (59%)',
        location: 'Xalapa, Veracruz',
        nse: 'A/B',
        occupation: 'Estudiantes'
      },
      psychographics: [
        'Extrovertidos, alegres y expresivos',
        'Alta autoestima',
        'No les gusta el cambio',
        'Trabajadores y ambiciosos',
        'Empáticos y leales',
        'Orgullosos de ser veracruzanos'
      ],
      platforms: {
        primary: 'Instagram',
        secondary: 'Facebook',
        device: 'Móvil (90%)',
        activeTime: 'Jueves 18-23hrs'
      },
      interests: ['Baile (41%)', 'Música (40%)', 'Deportes (28%)'],
      influencers: ['TVMÁS RTV', 'XEU Noticias', 'El Dictamen'],
      brands: ['Anáhuac Veracruz campus Xalapa', 'Al Calor Político', 'Vialidad Xalapa VX'],
      communication: {
        influence: [
          'Argumentos sobre bienestar personal',
          'Apela a ambición y crecimiento',
          'Muestra casos de éxito alcanzables',
          'Usa testimonios de pares exitosos',
          'Respeta tradición, impulsa modernidad'
        ],
        writing: [
          'Social, expresiva y cercana',
          'Habla de bienestar y desarrollo',
          'Lenguaje universitario y actual',
          'Enfoca en logros personales',
          'Enfatiza comunidad y pertenencia'
        ],
        style: [
          'Colores vibrantes universitarios',
          'Diseño moderno y dinámico',
          'Imágenes de estudiantes reales',
          'Profesional pero juvenil',
          'Balance entre serio y social'
        ],
        emojis: '🎓 📚 🚀 💪 🌟 👥',
        keywords: 'Bienestar | Ambición | Comunidad | Crecimiento | Éxito'
      },
      personas: {
        'pre-universitario': {
          name: 'Carlos (16-17 años)',
          age: '16-17 años',
          occupation: 'Estudiante de preparatoria',
          bio: 'Jarocho de corazón, extrovertido, alegre, le gusta bailar salsa y son jarocho',
          goals: ['Estudiar en universidad de prestigio en Xalapa', 'Tener negocio propio', 'Quedarse en Veracruz', 'Vivir bien'],
          frustrations: ['Lentitud burocrática', 'Falta de oportunidades en Veracruz', 'Tener que irse del estado', 'Inseguridad'],
          platforms: ['Instagram', 'Facebook']
        },
        'universitario': {
          name: 'Ricardo (20-25 años)',
          age: '20-25 años',
          occupation: 'Estudiante universitario',
          bio: 'Muy sociable, le apasionan los autos deportivos, alegre, expresivo, sale a bares cada fin de semana',
          goals: ['Tener negocio exitoso en Veracruz', 'Vivir bien económicamente', 'Comprar autos deportivos', 'Formar familia', 'Ser reconocido'],
          frustrations: ['La lentitud en todo', 'Falta de dinamismo empresarial', 'Oportunidades limitadas', 'Burocracia excesiva'],
          platforms: ['Instagram', 'Facebook']
        },
        'padre-decisor': {
          name: 'Fernando (40-50 años)',
          age: '40-50 años',
          occupation: 'Empresario local',
          bio: 'Empresario jarocho, extrovertido, conectado con comunidad empresarial, valora tradiciones veracruzanas',
          goals: ['Hijos en universidades de calidad en Xalapa', 'Que se queden en Veracruz', 'Negocios exitosos en el estado', 'Dejar legado familiar'],
          frustrations: ['Lentitud burocrática', 'Falta de universidades de élite', 'Hijos que se van y no regresan', 'Fuga de cerebros'],
          platforms: ['Instagram', 'Facebook']
        }
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
  const [selectedAudience, setSelectedAudience] = useState('');
  const [selectedPersona, setSelectedPersona] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [contentType, setContentType] = useState('');
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const generateContent = () => {
    if (!selectedAudience || !selectedPersona || !selectedPlatform || !contentType) {
      alert('Por favor selecciona todos los campos');
      return;
    }
    const audience: any = (audiences as any)[selectedAudience];
    const persona: any = audience.personas[selectedPersona];
    const platform = (platforms as any)[selectedPlatform];
    const comm = audience.communication;

    const content = {
      headline: `${persona.goals?.[0] || 'Objetivo principal'} - ${audience.name}`,
      body: `¿Buscas una universidad que realmente ${(persona.goals?.[0]||'cumpla lo que promete').toLowerCase()}?\n\n✅ ${comm.influence?.[0]||''}\n✅ ${comm.influence?.[2]||''}\n\nEn UVP entendemos que ${(persona.frustrations?.[0]||'la incertidumbre').toLowerCase()} es una preocupación real.`,
      cta: `Conoce más en el enlace de nuestra bio 🔗`,
      visualSuggestions: `📸 Imagen sugerida:\n- ${comm.style?.[0]||''}\n- ${comm.style?.[1]||''}\n- ${comm.style?.[2]||''}`,
      hashtags: `#UVP #${audience.name.replace(/\s+/g,'')} #${(persona.name||'Persona').split(' ')[0]} #EducaciónSuperior #Universidad`,
      tone: (comm.writing?.[0]||'') + ' - ' + (comm.writing?.[2]||''),
      emojis: comm.emojis || ''
    };
    setGeneratedContent(content);
  };

  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text ?? '');

  return (
    <main className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto space-y-6">
        <motion.header variants={item} className="glass p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-tr from-fuchsia-500/30 to-indigo-500/30 border border-white/10">
              <Sparkles className="w-8 h-8 text-fuchsia-300" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">UVP Content Generator</h1>
              <p className="text-slate-300">Generador de Contenidos basado en Audiencias y Buyer Personas</p>
            </div>
          </div>
        </motion.header>

        <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div whileHover={hoverPop} className="glass p-6">
            <label className="label"><Users className="w-5 h-5 text-blue-300" /> Audiencia</label>
            <select value={selectedAudience} onChange={(e) => { setSelectedAudience(e.target.value); setSelectedPersona(''); }} className="input">
              <option value="">Seleccionar...</option>
              {Object.entries(audiences as any).map(([key, aud]: any) => (<option key={key} value={key}>{aud.name}</option>))}
            </select>
          </motion.div>

          <motion.div whileHover={hoverPop} className="glass p-6">
            <label className="label"><Target className="w-5 h-5 text-emerald-300" /> Buyer Persona</label>
            <select value={selectedPersona} onChange={(e) => setSelectedPersona(e.target.value)} disabled={!selectedAudience} className="input disabled:opacity-60">
              <option value="">Seleccionar...</option>
              {selectedAudience && Object.entries((audiences as any)[selectedAudience].personas).map(([key, persona]: any) => (<option key={key} value={key}>{persona.name}</option>))}
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

        <motion.div variants={item} className="text-center">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={generateContent} className="btn-primary">
            <Sparkles className="w-5 h-5" /> Generar Contenido
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {selectedAudience && selectedPersona && (
            <motion.section key="resume" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="glass p-6">
              <h3 className="text-xl font-bold mb-4">Resumen de Selección</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div style={{ borderLeft: `4px solid ${(audiences as any)[selectedAudience].color}` }} className="pl-4">
                  <p className="text-sm text-slate-300">Audiencia</p>
                  <p className="font-bold">{(audiences as any)[selectedAudience].name}</p>
                  <p className="text-sm text-slate-300 mt-1">{(audiences as any)[selectedAudience].description}</p>
                </div>
                <div className="pl-4 border-l-4 border-emerald-400/60">
                  <p className="text-sm text-slate-300">Buyer Persona</p>
                  <p className="font-bold">{(audiences as any)[selectedAudience].personas[selectedPersona].name}</p>
                  <p className="text-sm text-slate-300 mt-1">{(audiences as any)[selectedAudience].personas[selectedPersona].age}</p>
                </div>
                <div className="pl-4 border-l-4 border-fuchsia-400/60">
                  <p className="text-sm text-slate-300">Plataforma y Contenido</p>
                  <p className="font-bold">{selectedPlatform && (platforms as any)[selectedPlatform]?.name}</p>
                  <p className="text-sm text-slate-300 mt-1">{contentType && (contentTypes as any)[contentType]}</p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {generatedContent && (
            <motion.section key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: 'spring', stiffness: 110, damping: 18 }} className="glass p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Contenido Generado</h2>
                <button onClick={() => navigator.clipboard.writeText(JSON.stringify(generatedContent, null, 2))} className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 hover:bg-white/20 transition inline-flex items-center gap-2">
                  <Copy className="w-4 h-4" /> Copiar Todo
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="glass p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">📌 Título/Headline</h3>
                    <button onClick={() => navigator.clipboard.writeText(generatedContent.headline)} className="text-indigo-300 hover:underline text-sm">Copiar</button>
                  </div>
                  <p className="font-semibold">{generatedContent.headline}</p>
                </div>
                <div className="glass p-4 lg:col-span-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">📝 Cuerpo del Mensaje</h3>
                    <button onClick={() => navigator.clipboard.writeText(generatedContent.body)} className="text-indigo-300 hover:underline text-sm">Copiar</button>
                  </div>
                  <p className="whitespace-pre-line">{generatedContent.body}</p>
                </div>
                <div className="glass p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">🎯 Call-to-Action (CTA)</h3>
                    <button onClick={() => navigator.clipboard.writeText(generatedContent.cta)} className="text-indigo-300 hover:underline text-sm">Copiar</button>
                  </div>
                  <p className="font-semibold">{generatedContent.cta}</p>
                </div>
                <div className="glass p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">🎨 Sugerencias Visuales</h3>
                  <button onClick={() => navigator.clipboard.writeText(generatedContent.visualSuggestions)} className="text-indigo-300 hover:underline text-sm">Copiar</button>
                  </div>
                  <p className="whitespace-pre-line">{generatedContent.visualSuggestions}</p>
                </div>
                <div className="glass p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">#️⃣ Hashtags</h3>
                    <button onClick={() => navigator.clipboard.writeText(generatedContent.hashtags)} className="text-indigo-300 hover:underline text-sm">Copiar</button>
                  </div>
                  <p className="text-indigo-300 font-medium">{generatedContent.hashtags}</p>
                </div>
                <div className="glass p-4"><h3 className="font-bold mb-2">🎭 Tono de Comunicación</h3><p>{generatedContent.tone}</p></div>
                <div className="glass p-4"><h3 className="font-bold mb-2">😊 Emojis Recomendados</h3><p className="text-2xl">{generatedContent.emojis}</p></div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <motion.footer variants={item} className="text-center text-slate-300 py-6">
          <p className="text-sm">Generador de Contenidos UVP • Glass UI + Micro‑animaciones (Framer Motion)</p>
        </motion.footer>
      </motion.div>
    </main>
  );
};

export default UVPContentGenerator;
