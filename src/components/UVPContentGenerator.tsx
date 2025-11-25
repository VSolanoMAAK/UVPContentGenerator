'use client';

// Se añaden Video y Edit a las importaciones de lucide-react
import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Sparkles, Target, Users, MessageSquare, LayoutGrid, Video, Edit } from 'lucide-react';

// --- DATOS EXISTENTES (Manteniendo la estructura detallada de tu archivo) ---
// **NOTA IMPORTANTE:** He mantenido los datos de audiences y platforms tal cual estaban en tu archivo original.
const audiences: any = {
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

// --- NUEVOS DATOS V2.0 (Para video y opciones) ---
const videoFormats: Record<string, string> = {
    'tiktok': 'TikTok',
    'reel': 'Instagram Reel',
    'universal': 'Universal (TikTok + Reel)'
};

const videoDurations: Record<string, string> = {
    '15-30': '15-30 segundos (Corto)',
    '30-60': '30-60 segundos (Estándar)',
    '60-90': '60-90 segundos (Largo)'
};

const topicOptions = [
    'Promoción de carrera específica',
    'Evento (Open House, Feria)',
    'Becas y financiamiento',
    'Instalaciones y tecnología',
    'Vida universitaria',
    'Testimonios y casos de éxito',
    'Proceso de admisión',
    'Otro (especificar en solicitud)'
];

// --- FUNCIONES DE GENERACIÓN V2.0 ---

// NOTA: Se utilizan las interfaces de datos de tu archivo original
const generateVideoScript = (
    audience: any,
    persona: any,
    comm: any,
    isYoung: boolean,
    videoDuration: string,
    videoFormat: string,
    customRequest: string,
    mainBenefit: string,
    customCTA: string
) => {
    const duration = videoDuration;
    const format = videoFormat;
    const request = customRequest;
    // Usamos el primer elemento de influence como beneficio por defecto
    const benefit = mainBenefit || comm.influence[0] || 'Un beneficio clave';
    const cta = customCTA || 'Más info en bio';

    const formatStyle: any = {
        'tiktok': {
            ritmo: 'ultra rápido (cortes cada 1-2s)',
            texto: 'Mucho texto + emojis',
            hook: 'Agresivo y disruptivo',
            musica: 'Trending sound (CRÍTICO)',
            cta: 'Comenta "INFO" para más',
            aesthetic: 'Crudo, auténtico, trendy'
        },
        'reel': {
            ritmo: 'fluido (cortes cada 2-3s)',
            texto: 'Menos texto, más limpio',
            hook: 'Aspiracional y estético',
            musica: 'Audio original o trending',
            cta: 'Guarda este reel',
            aesthetic: 'Cuidado, branded, pulido'
        },
        'universal': {
            ritmo: 'balanceado (cortes cada 2s)',
            texto: 'Texto moderado + emojis clave',
            hook: 'Impactante y versátil',
            musica: 'Trending que funcione en ambos',
            cta: 'Link en bio',
            aesthetic: 'Profesional pero accesible'
        }
    };

    const style = formatStyle[format];

    let hookTime, problemTime, solutionTime, ctaTime;
    if (duration === '15-30') {
        hookTime = '0-3s'; problemTime = '3-8s'; solutionTime = '8-12s'; ctaTime = '12-15s';
    } else if (duration === '30-60') {
        hookTime = '0-3s'; problemTime = '3-15s'; solutionTime = '15-25s'; ctaTime = '25-30s';
    } else {
        hookTime = '0-5s'; problemTime = '5-25s'; solutionTime = '25-55s'; ctaTime = '55-60s';
    }

    // Usamos la primera frustración disponible.
    const frustration = persona.frustrations[0] || 'la incertidumbre sobre el futuro';

    // GUION SIMPLE
    const simpleScript = `🎬 GUION ${videoFormats[format].toUpperCase()} - ${videoDurations[duration]}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 TEMA: ${request}
👤 AUDIENCIA: ${persona.name} (${persona.age})
🔑 BENEFICIO CLAVE: ${benefit}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎣 GANCHO (${hookTime}):
"¿${frustration}?" ${isYoung ? '😰' : '🤔'}
${format === 'tiktok' ? '[Música: Drop fuerte]' : '[Música: Inicio impactante]'}

⚠️ PROBLEMA (${problemTime}):
"${isYoung ? 'Sabemos' : 'Sabemos'} que ${frustration.toLowerCase()}..."
${format === 'tiktok' ? '❌ [Texto en pantalla: NO MÁS]' : ''}
${duration === '30-60' || duration === '60-90' ? `\n"Pero en UVP, esto cambia. Tenemos la ${benefit}"` : ''}

✅ SOLUCIÓN (${solutionTime}):
"En UVP, resolvemos esto con:"
${format === 'tiktok' ? '⚡' : '✨'} ${benefit}
${comm.influence[1] ? `${format === 'tiktok' ? '🎯' : '💫'} ${comm.influence[1]}` : ''}
${duration === '60-90' ? `${format === 'tiktok' ? '🔥' : '🌟'} ${comm.influence[2] || 'Resultados comprobables'}` : ''}

${duration === '60-90' ? `\n💬 TESTIMONIO/DATO (45-55s):\n"[Insertar dato específico o testimonio breve sobre logros]" - ${comm.writing[1]}\n` : ''}

📲 CTA (${ctaTime}):
"${cta} ${comm.emojis.split(' ')[0]}"
${style.cta}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 NOTAS DE PRODUCCIÓN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎵 Música: ${style.musica}
⚡ Ritmo: ${style.ritmo}
🎨 Estética: ${style.aesthetic}
🎭 Tono: ${comm.writing[0]}`;

    // GUION DETALLADO
    const detailedScript = `🎬 GUION DETALLADO ${videoFormats[format].toUpperCase()} - ${videoDurations[duration]}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 TEMA: ${request}
👤 AUDIENCIA: ${audience.name} - ${persona.name}
📱 PLATAFORMA: ${videoFormats[format]}
⏱️ DURACIÓN: ${videoDurations[duration]}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| TIEMPO | VISUAL | AUDIO/TEXTO | NOTAS |
| :---: | :--- | :--- | :--- |
| ${hookTime} | ${format === 'tiktok' ? 'Zoom rápido a persona' : 'Plano medio estético'} | **HOOK** "¿${frustration}?" | **CRÍTICO:** Gancho debe capturar la atención en <3s. |
| | ${format === 'tiktok' ? 'Cara preocupada' : 'Expresión pensativa'} | ${format === 'tiktok' ? '[Texto: ❌ NO MÁS]' : '[Subtítulo elegante]'} | Música: ${format === 'tiktok' ? 'Drop fuerte' : 'Inicio impactante'} |
| ${problemTime} | ${format === 'tiktok' ? 'Montaje rápido clips' : 'B-roll fluido campus'} | Narración: "${frustration.toLowerCase()} es real..." | Ritmo: ${style.ritmo} |
| | ${format === 'tiktok' ? 'Imágenes del problema' : 'Escenas cotidianas'} | **Tono:** ${comm.writing[0]} | Texto en pantalla: ${style.texto} |
| ${solutionTime} | ${format === 'tiktok' ? 'Cortes ultra rápidos' : 'Secuencia cohesiva'} | "En UVP, tienes la solución:" | Mostrar el beneficio |
| | - ${format === 'tiktok' ? 'Instalación clave 1' : 'Laboratorio tech'} | ✅ ${benefit} | ${comm.influence[1]} |
| | - ${format === 'tiktok' ? 'Instalación clave 2' : 'Estudiantes logrando metas'} | ✅ ${comm.influence[1]} | ${comm.influence[2]} |
| | ${format === 'tiktok' ? '[Texto grande: ✅ RESULTADOS]' : '[Overlays sutiles]'} | [Música: Pico aspiracional] | |
${duration === '60-90' ? `| 45-55s | ${format === 'reel' ? 'Testimonio elegante' : 'Testimonio rápido'} | Voz estudiante/egresado: "[Dato específico de éxito]" | **Dato:** Usar evidencia verificable |` : ''}
| ${ctaTime} | ${format === 'tiktok' ? 'Logo UVP animado' : 'Logo UVP elegante'} | **CTA** "${cta}" | Call to Action claro. |
| | ${format === 'tiktok' ? '+ Texto CTA grande' : '+ CTA sutil'} | ${style.cta} | Finalizar con el logo. |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 ESPECIFICACIONES TÉCNICAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎵 AUDIO: ${style.musica} | 💬 SUBTÍTULOS: **OBLIGATORIOS**
🎨 ESTILO: Estética ${style.aesthetic}. Colores: ${audience.color}.
📐 FORMATO: 9:16 (vertical).
🎯 CÓDIGOS DE COMUNICACIÓN: Usar ${comm.influence[0]}. Evitar ${audience.name === 'Audiencia General' ? 'Promesas exageradas' : 'Ser muy formal o aburrido'}.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    return {
        headline: `🎬 Guion de Video ${videoFormats[format]} - ${videoDurations[duration]}`,
        simpleScript: simpleScript,
        detailedScript: detailedScript,
        format: videoFormats[format],
        duration: videoDurations[duration],
        platform: videoFormats[format],
        emojis: comm.emojis,
        isVideo: true,
        body: simpleScript
    };
};

// Función para contenido regular (Post, Carrusel, Historia, Anuncio)
const generateRegularContent = (
    audience: any,
    persona: any,
    comm: any,
    isYoung: boolean,
    contentType: string,
    customRequest: string,
    contentTopic: string,
    mainBenefit: string,
    customCTA: string
) => {
    const request = customRequest;
    const topic = contentTopic || 'Educación Superior';
    const benefit = mainBenefit || comm.influence[0] || 'Un beneficio clave de la universidad';
    const cta = customCTA || `${isYoung ? 'Conoce' : 'Conozca'} más en bio 🔗`;

    let headline, body, visualSuggestions, hashtags;

    // Usamos el primer objetivo de la persona como base si no hay request
    const mainGoal = persona.goals[0] || 'tener una carrera exitosa';
    const frustration = persona.frustrations[0] || 'la falta de oportunidades';

    if (contentType === 'post-organico' || contentType === 'anuncio') {
        headline = `${request} | ${audience.name}`;
        body = `**¡ALERTA!** ¿${isYoung ? 'Estás' : 'Está'} buscando ${mainGoal.toLowerCase()}? ${comm.emojis.split(' ')[0]}

**El Problema:** Sabemos que ${frustration.toLowerCase()} es una preocupación real.
**La Solución UVP:** En lugar de eso, en UVP te ofrecemos:
1. ✅ ${benefit}
2. ✅ ${comm.influence[1] || 'Logros comprobables'}
3. ✅ ${comm.influence[2] || 'Un camino claro al éxito'}

**Tono:** ${comm.writing[0].toLowerCase()} y **focalizado en:** ${comm.writing[1].toLowerCase()}.

**¿Listo/a para dejar atrás ${frustration.toLowerCase()}?**
👉 ${cta}`;
        visualSuggestions = `📸 Imagen/Arte Sugerido:
- **Estilo:** ${comm.style[0]} y ${comm.style[2]}
- **Color Dominante:** ${audience.color} (para atraer la audiencia)
- **Muestra:** ${topic || request}
- **Regla:** Sin sobrecarga de texto. Profesional sin ostentación.`;
        hashtags = `#UVP #${audience.name.replace(/\s+/g, '')} #${topic.replace(/\s+/g, '') || 'Universidad'} #${comm.keywords.split(' | ')[0] || 'Educacion'}`;
    } else if (contentType === 'historia') {
        headline = `Historia: ${request}`;
        body = `SLIDE 1 (POLL/PREGUNTA): "¿Te preocupa ${frustration.toLowerCase()}?" ❌
SLIDE 2 (BENEFICIO): "En UVP, esto no pasa: ${benefit}" ✅
SLIDE 3 (RESULTADOS): "Nuestra clave: ${comm.influence[1]}" 🎯
SLIDE 4 (CTA): **¡Desliza para saber cómo ${mainGoal.toLowerCase()}!**
SLIDE 5 (LINK): "${cta}"`;
        visualSuggestions = `📱 Stories:
- Vertical 9:16.
- Usar stickers interactivos (Poll/Pregunta).
- **Tipografía:** ${comm.style[0]} - legible.
- **Color:** Usar tonos de ${audience.color}.`;
        hashtags = `No aplica (Stories)`;
    } else if (contentType === 'carrusel') {
        headline = `Carrusel Educativo: ${request}`;
        body = `SLIDE 1 (Título): "${request}" 💡
SLIDE 2 (Problema): "¿Te frustra ${frustration.toLowerCase()}?" 😠
SLIDE 3-5 (Solución UVP):
  - SLIDE 3: **Módulo 1:** ${benefit}
  - SLIDE 4: **Módulo 2:** ${comm.influence[1]}
  - SLIDE 5: **Módulo 3:** ${comm.influence[2]}
SLIDE 6 (CTA): ¡No dejes pasar esta oportunidad!
SLIDE 7 (Final): "${cta}"`;
        visualSuggestions = `🎨 Carrusel:
- **Estilo:** ${comm.style[1]} - Diseño estructurado.
- **Color:** ${audience.color} (para branding).
- Usar iconos consistentes en cada slide.`;
        hashtags = `#UVP #${audience.name.replace(/\s+/g, '')} #Carrusel #${topic.replace(/\s+/g, '')}`;
    }

    return {
        headline: headline,
        body: body,
        cta: cta,
        visualSuggestions: visualSuggestions,
        hashtags: hashtags,
        tone: comm.writing[0] || 'Eficiente y directa',
        emojis: comm.emojis || '',
        isVideo: false
    };
};

// --- COMPONENTE PRINCIPAL (Integrando nuevos estados y JSX) ---

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

    // --- NUEVOS ESTADOS V2.0 ---
    const [videoFormat, setVideoFormat] = useState('');
    const [videoDuration, setVideoDuration] = useState('');
    const [customRequest, setCustomRequest] = useState('');
    const [contentTopic, setContentTopic] = useState('');
    const [mainBenefit, setMainBenefit] = useState('');
    const [customCTA, setCustomCTA] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    // ---------------------------

    const selectedAudienceData = useMemo(() => audiences[selectedAudience], [selectedAudience]);
    const selectedPersonaData = useMemo(() => selectedAudienceData?.personas[selectedPersona], [selectedAudienceData, selectedPersona]);
    const isYoung = selectedPersonaData?.age.includes('16-17') || selectedPersonaData?.age.includes('18-24');

    const generateContent = useCallback(() => {
        if (!selectedAudience || !selectedPersona || !selectedPlatform || !contentType || !customRequest.trim()) {
            alert('Por favor completa: Audiencia, Buyer Persona, Plataforma, Tipo de Contenido y la Solicitud Principal.');
            return;
        }

        if (contentType === 'video-corto' && (!videoFormat || !videoDuration)) {
            alert('Por favor selecciona formato y duración del video.');
            return;
        }

        setIsGenerating(true);

        setTimeout(() => {
            const audience = audiences[selectedAudience];
            const persona = audience.personas[selectedPersona];
            const comm = audience.communication;

            let content;

            if (contentType === 'video-corto') {
                content = generateVideoScript(
                    audience,
                    persona,
                    comm,
                    isYoung,
                    videoDuration,
                    videoFormat,
                    customRequest,
                    mainBenefit,
                    customCTA
                );
            } else {
                content = generateRegularContent(
                    audience,
                    persona,
                    comm,
                    isYoung,
                    contentType,
                    customRequest,
                    contentTopic,
                    mainBenefit,
                    customCTA
                );
            }

            setGeneratedContent(content);
            setIsGenerating(false);
        }, 800);
    }, [selectedAudience, selectedPersona, selectedPlatform, contentType, customRequest, videoFormat, videoDuration, contentTopic, mainBenefit, customCTA, isYoung]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('¡Copiado al portapapeles!');
        }).catch(() => {
            alert('Error al copiar. Por favor intenta de nuevo.');
        });
    };

    return (
        // Se cambian las clases de estilo 'glass' por un estilo más limpio (v2.0)
        <main className="min-h-screen p-4 md:p-6 bg-gray-50 text-gray-800">
            <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto space-y-6">
                
                {/* Header */}
                <motion.header variants={item} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-purple-100 border border-purple-200">
                            <Sparkles className="w-8 h-8 text-purple-600" />
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900">UVP Content Generator v2.0</h1>
                            <p className="text-sm md:text-base text-gray-600">Generador de Contenidos basado en Audiencias y Buyer Personas</p>
                        </div>
                    </div>
                </motion.header>

                {/* Selección de Audiencia y Plataforma (Mantenemos la estructura de 4 columnas) */}
                <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    {/* Audiencia */}
                    <motion.div whileHover={hoverPop} className="bg-white rounded-xl shadow-md p-6">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3"><Users className="w-5 h-5 text-blue-600" /> Audiencia *</label>
                        <select value={selectedAudience} onChange={(e) => { setSelectedAudience(e.target.value); setSelectedPersona(''); setGeneratedContent(null); }} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                            <option value="">Seleccionar...</option>
                            {Object.entries(audiences).map(([key, aud]: any) => (<option key={key} value={key}>{aud.name}</option>))}
                        </select>
                    </motion.div>

                    {/* Buyer Persona */}
                    <motion.div whileHover={hoverPop} className="bg-white rounded-xl shadow-md p-6">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3"><Target className="w-5 h-5 text-green-600" /> Buyer Persona *</label>
                        <select value={selectedPersona} onChange={(e) => { setSelectedPersona(e.target.value); setGeneratedContent(null); }} disabled={!selectedAudience} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none disabled:bg-gray-100 disabled:opacity-70">
                            <option value="">Seleccionar...</option>
                            {selectedAudience && Object.entries(audiences[selectedAudience].personas).map(([key, persona]: any) => (<option key={key} value={key}>{persona.name}</option>))}
                        </select>
                    </motion.div>

                    {/* Plataforma */}
                    <motion.div whileHover={hoverPop} className="bg-white rounded-xl shadow-md p-6">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3"><MessageSquare className="w-5 h-5 text-purple-600" /> Plataforma *</label>
                        <select value={selectedPlatform} onChange={(e) => { setSelectedPlatform(e.target.value); setGeneratedContent(null); }} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none">
                            <option value="">Seleccionar...</option>
                            {Object.entries(platforms).map(([key, plat]: any) => (<option key={key} value={key}>{plat.icon} {plat.name}</option>))}
                        </select>
                    </motion.div>

                    {/* Tipo de Contenido */}
                    <motion.div whileHover={hoverPop} className="bg-white rounded-xl shadow-md p-6">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3"><LayoutGrid className="w-5 h-5 text-orange-600" /> Tipo de Contenido *</label>
                        <select value={contentType} onChange={(e) => { setContentType(e.target.value); setVideoFormat(''); setVideoDuration(''); setGeneratedContent(null); }} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none">
                            <option value="">Seleccionar...</option>
                            {Object.entries(contentTypes).map(([key, type]) => (<option key={key} value={key}>{type}</option>))}
                        </select>
                    </motion.div>
                </motion.section>

                {/* Opciones de Video (NUEVAS) */}
                <AnimatePresence>
                    {contentType === 'video-corto' && (
                        <motion.section key="video-options" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Formato de Video */}
                            <motion.div whileHover={hoverPop} className="bg-white rounded-xl shadow-md p-6">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3"><Video className="w-5 h-5 text-pink-600" /> Formato de Video *</label>
                                <select value={videoFormat} onChange={(e) => setVideoFormat(e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none">
                                    <option value="">Seleccionar...</option>
                                    {Object.entries(videoFormats).map(([key, format]) => (<option key={key} value={key}>{format}</option>))}
                                </select>
                            </motion.div>

                            {/* Duración */}
                            <motion.div whileHover={hoverPop} className="bg-white rounded-xl shadow-md p-6">
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">⏱️ Duración *</label>
                                <select value={videoDuration} onChange={(e) => setVideoDuration(e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none">
                                    <option value="">Seleccionar...</option>
                                    {Object.entries(videoDurations).map(([key, dur]) => (<option key={key} value={key}>{dur}</option>))}
                                </select>
                            </motion.div>
                        </motion.section>
                    )}
                </AnimatePresence>
                
                {/* Campos Personalizados (NUEVOS) */}
                <motion.section variants={item} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Edit className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-xl font-bold text-gray-900">Personaliza tu Contenido</h2>
                    </div>

                    {/* Solicitud Principal (Textarea) */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            📝 Solicitud Principal * (Describe qué contenido necesitas)
                        </label>
                        <textarea
                            value={customRequest}
                            onChange={(e) => { setCustomRequest(e.target.value); setGeneratedContent(null); }}
                            placeholder='Ejemplo: "Promocionar la carrera de Ingeniería Industrial destacando que tenemos laboratorios con tecnología de punta y 90% de empleabilidad"'
                            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-indigo-500 focus:outline-none min-h-[120px] resize-y"
                            maxLength={500}
                        />
                        <p className="text-xs text-gray-500 mt-1">{customRequest.length}/500 caracteres</p>
                    </div>

                    {/* Campos Opcionales */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🎯 Tema (opcional)
                            </label>
                            <select
                                value={contentTopic}
                                onChange={(e) => setContentTopic(e.target.value)}
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                            >
                                <option value="">Seleccionar tema...</option>
                                {topicOptions.map((topic, idx) => (
                                    <option key={idx} value={topic}>{topic}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                ⭐ Beneficio Principal (opcional)
                            </label>
                            <input
                                type="text"
                                value={mainBenefit}
                                onChange={(e) => setMainBenefit(e.target.value)}
                                placeholder="Ej: 90% empleabilidad"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                                maxLength={100}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                📲 CTA Personalizado (opcional)
                            </label>
                            <input
                                type="text"
                                value={customCTA}
                                onChange={(e) => setCustomCTA(e.target.value)}
                                placeholder="Ej: Agenda tu visita"
                                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
                                maxLength={80}
                            />
                        </div>
                    </div>
                </motion.section>

                {/* Botón Generar (Centrado) */}
                <motion.div variants={item} className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={generateContent}
                        disabled={isGenerating}
                        className={`${
                            isGenerating ? 'bg-gray-400' : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-2xl hover:scale-105'
                        } text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform transition-all duration-200 flex items-center gap-2 mx-auto disabled:opacity-60 disabled:cursor-not-allowed`}
                    >
                        <Sparkles className="w-6 h-6" />
                        {isGenerating ? 'Generando Contenido...' : 'Generar Contenido Personalizado'}
                    </motion.button>
                </motion.div>

                <AnimatePresence>
                    {selectedAudience && selectedPersona && (
                        <motion.section key="resume" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ type: 'spring', stiffness: 120, damping: 16 }} className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">📋 Resumen de Selección</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div style={{ borderLeft: `4px solid ${selectedAudienceData.color}` }} className="pl-4">
                                    <p className="text-sm text-gray-600">Audiencia</p>
                                    <p className="font-bold text-gray-900">{selectedAudienceData.name}</p>
                                    <p className="text-sm text-gray-600 mt-1">{selectedAudienceData.description}</p>
                                </div>
                                <div className="pl-4 border-l-4 border-green-500/60">
                                    <p className="text-sm text-gray-600">Buyer Persona</p>
                                    <p className="font-bold text-gray-900">{selectedPersonaData?.name}</p>
                                    <p className="text-sm text-gray-600 mt-1">{selectedPersonaData?.age}</p>
                                </div>
                                <div className="pl-4 border-l-4 border-purple-500/60">
                                    <p className="text-sm text-gray-600">Plataforma y Formato</p>
                                    <p className="font-bold text-gray-900">{selectedPlatform && platforms[selectedPlatform]?.name}</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {contentType && contentTypes[contentType]}
                                        {contentType === 'video-corto' && videoFormat && ` - ${videoFormats[videoFormat]}`}
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                {/* Contenido Generado (Adaptado para manejar Video/Regular) */}
                <AnimatePresence>
                    {generatedContent && (
                        <motion.section key="content" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ type: 'spring', stiffness: 110, damping: 18 }} className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">✨ Contenido Generado</h2>
                                <button
                                    onClick={() => copyToClipboard(generatedContent.isVideo ?
                                        `${generatedContent.simpleScript}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n${generatedContent.detailedScript}` :
                                        `${generatedContent.headline}\n\n${generatedContent.body}\n\n${generatedContent.cta}\n\n${generatedContent.visualSuggestions}\n\n${generatedContent.hashtags}`
                                    )}
                                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <Copy className="w-4 h-4" /> Copiar Todo
                                </button>
                            </div>
                            
                            <div className="space-y-6">
                                {generatedContent.isVideo ? (
                                    <>
                                        {/* Guion Simple */}
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-700">📱 Guion Simple</h3>
                                                <button onClick={() => copyToClipboard(generatedContent.simpleScript)} className="text-blue-600 hover:underline text-sm">Copiar</button>
                                            </div>
                                            <pre className="text-gray-900 whitespace-pre-wrap font-mono text-sm leading-relaxed">{generatedContent.simpleScript}</pre>
                                        </div>

                                        {/* Guion Detallado */}
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-700">🎬 Guion Detallado (Producción)</h3>
                                                <button onClick={() => copyToClipboard(generatedContent.detailedScript)} className="text-blue-600 hover:underline text-sm">Copiar</button>
                                            </div>
                                            {/* Usamos overflow-x-auto para que la tabla no rompa el diseño en móvil */}
                                            <pre className="text-gray-900 whitespace-pre-wrap font-mono text-xs overflow-x-auto p-2 leading-relaxed">{generatedContent.detailedScript}</pre>
                                        </div>
                                    </>
                                ) : (
                                    // Output para contenido regular
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-700">📌 Título/Headline</h3>
                                                <button onClick={() => copyToClipboard(generatedContent.headline)} className="text-blue-600 hover:underline text-sm">Copiar</button>
                                            </div>
                                            <p className="text-gray-900 font-semibold">{generatedContent.headline}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 lg:col-span-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-700">📝 Cuerpo del Mensaje</h3>
                                                <button onClick={() => copyToClipboard(generatedContent.body)} className="text-blue-600 hover:underline text-sm">Copiar</button>
                                            </div>
                                            <p className="text-gray-900 whitespace-pre-line leading-relaxed">{generatedContent.body}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-700">🎯 Call-to-Action (CTA)</h3>
                                                <button onClick={() => copyToClipboard(generatedContent.cta)} className="text-blue-600 hover:underline text-sm">Copiar</button>
                                            </div>
                                            <p className="text-gray-900 font-semibold">{generatedContent.cta}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-700">🎨 Sugerencias Visuales</h3>
                                            <button onClick={() => copyToClipboard(generatedContent.visualSuggestions)} className="text-blue-600 hover:underline text-sm">Copiar</button>
                                            </div>
                                            <p className="text-gray-900 whitespace-pre-line">{generatedContent.visualSuggestions}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-bold text-gray-700">#️⃣ Hashtags</h3>
                                                <button onClick={() => copyToClipboard(generatedContent.hashtags)} className="text-blue-600 hover:underline text-sm">Copiar</button>
                                            </div>
                                            <p className="text-blue-600 font-medium">{generatedContent.hashtags}</p>
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200"><h3 className="font-bold mb-2 text-gray-700">🎭 Tono de Comunicación</h3><p className="text-gray-900">{generatedContent.tone}</p></div>
                                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200"><h3 className="font-bold mb-2 text-gray-700">😊 Emojis Recomendados</h3><p className="text-2xl">{generatedContent.emojis}</p></div>
                                    </div>
                                )}
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>

                <motion.footer variants={item} className="text-center text-gray-500 py-6">
                    <p className="text-sm">UVP Content Generator v2.0 | Con IA personalizada por audiencias</p>
                </motion.footer>
            </motion.div>
        </main>
    );
};

export default UVPContentGenerator;
