// Internationalization (i18n) system
const translations = {
  en: {
    // Meta tags
    'meta.description': 'José Arizaga is a Data Engineer specializing in building scalable data pipelines and cloud-based data solutions.',
    'meta.keywords': 'Data Engineer, ETL, Data Pipelines, Cloud Solutions, Snowflake, Databricks, AWS, Real-time Data Engineering, Data Pipeline Optimization, AWS Data Solutions, Snowflake Migration, Databricks Consultant',
    'meta.title': 'José Arizaga - Data Engineer | Consulting & Mentoring',
    
    // Header
    'hero.subtitle': 'Building Scalable Data Pipelines and Cloud Solutions',
    'hero.description': 'Helping businesses build scalable data pipelines, optimize cloud architectures, and unlock actionable insights from complex data.',
    'button.consultation': 'Get Free Consultation',
    'button.viewwork': 'View My Work',
    'badge.snowpro': 'SnowPro Certified',
    'badge.databricks': 'Databricks Professional',
    'badge.experience': '5+ Years Experience',
    
    // About section
    'about.title': 'About Me',
    'about.p1': 'Hi! I\'m José, a Data Engineer certified in Snowflake, Databricks, and AWS, specializing in scalable data pipelines, cloud migrations, and high-performance data solutions.',
    'about.p2': 'I help organizations migrate legacy systems to modern cloud data architectures, automate complex ETL workflows, and achieve substantial performance gains and cost savings.',
    'about.p3': 'Experienced working with finance, retail, and healthcare industries across the US and LATAM.',
    'about.p4': 'Beyond my technical skills, I value clear communication, trust, practical problem-solving, and continuous learning.',
    
    // Results section
    'results.title': 'Results I\'ve Delivered',
    'results.performance': 'Reduced Snowflake query times by 60% through optimized query logic.',
    'results.cost': 'Saved over 40% on monthly AWS infrastructure costs with pipeline and ETL optimizations.',
    'results.processing': 'Delivered pipelines that process data 3 times faster, enabling near-real-time analytics.',
    
    // Skills section
    'skills.title': 'Key Skills',
    'skills.etl': 'Data Engineering & ETL (Snowflake, Databricks, Informatica PowerCenter)',
    'skills.cloud': 'Cloud Platforms (AWS, Azure)',
    'skills.programming': 'Programming & Automation (Python, SQL, Terraform, Git)',
    'skills.warehousing': 'Data Warehousing (Snowflake, Databricks Delta Lake)',
    'skills.streaming': 'Streaming & Real-time Data (Apache Spark Streaming, Kafka)',
    'skills.bi': 'BI & Data Visualization (Sigma, Tableau, PowerBI)',
    'skills.iac': 'Infrastructure as Code (Terraform, Databricks Asset Bundles)',
    
    // Certifications section
    'certifications.title': 'Certifications',
    'cert.snowpro': 'SnowPro Core Certification',
    'cert.databricks': 'Databricks Certified Data Engineer Professional',
    'cert.azure': 'Azure Fundamentals',
    
    // Projects section
    'projects.title': 'Projects',
    'project1.title': 'Near-Real-Time Analytics Pipeline',
    'project1.desc': 'Real-time sales analytics dashboard built with Kafka and Spark',
    'project2.title': 'Data Pipeline with AI/LLM integration for insights extraction',
    'project2.desc': 'Automated extraction of key insights from contracts using LLMs',
    'project3.title': 'Lakehouse modernization with SCD',
    'project3.desc': 'Migrated legacy data warehouses to Lakehouse architecture with historical tracking (SCD Type 2)',
    'coming.soon': 'Coming Soon',
    
    // Services section
    'services.title': 'How I Can Help You',
    'service1.title': 'Data Architecture Consulting',
    'service1.desc': 'Design and implement scalable data architectures that grow with your business needs.',
    'service1.feature1': 'Lakehouse modernization',
    'service1.feature2': 'Cloud migration strategy',
    'service1.feature3': 'Performance optimization',
    'service2.title': '1-on-1 Mentoring',
    'service2.desc': 'Accelerate your data engineering career with personalized guidance and hands-on projects.',
    'service2.feature1': 'Career roadmap planning',
    'service2.feature2': 'Technical skill development',
    'service2.feature3': 'Interview preparation',
    'service3.title': 'Technical Advisory & Hands-On Support',
    'service3.desc': 'Get expert help for specific data engineering challenges through technical advisory or targeted hands-on support.',
    'service3.feature1': 'Data quality audits',
    'service3.feature2': 'Performance troubleshooting',
    'service3.feature3': 'Data pipelines assessment',
    'popular.badge': 'Most Popular',
    
    // Contact section
    'contact.title': 'Ready to Transform Your Data?',
    'contact.description': 'Schedule a free 30-minute consultation to identify quick wins and strategies for your data challenges.',
    'button.bookconsultation': 'Book Free Consultation',
    'button.schedulecall': 'Schedule a Call',
    'contact.guarantee': 'Free consultation includes:',
    'contact.guarantee.desc': 'Problem assessment, solution overview, and next steps recommendation',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.follow': 'Follow me on'
  },
  
  es: {
    // Meta tags
    'meta.description': 'José Arizaga es un Ingeniero de Datos especializado en la construcción de pipelines de datos escalables y soluciones de datos en la nube.',
    'meta.keywords': 'Ingeniero de Datos, ETL, Pipelines de Datos, Soluciones en la Nube, Snowflake, Databricks, AWS, Ingeniería de Datos en Tiempo Real, Optimización de Pipelines de Datos, Soluciones de Datos en AWS, Migración a Snowflake, Consultor de Databricks',
    'meta.title': 'José Arizaga - Ingeniero de Datos | Consultoría y Mentoría',
    
    // Header
    'hero.subtitle': 'Construyendo pipelines de datos escalables y soluciones en la nube',
    'hero.description': 'Ayudo a las empresas a construir pipelines de datos escalables, optimizar arquitecturas en la nube y obtener insights accionables de datos complejos.',
    'button.consultation': 'Consulta Gratuita',
    'button.viewwork': 'Ver mi Trabajo',
    'badge.snowpro': 'SnowPro Core Certified',
    'badge.databricks': 'Databricks Certified Data Engineer Professional',
    'badge.experience': '5+ años de Experiencia',
    
    // About section
    'about.title': 'Sobre Mí',
    'about.p1': 'Hola! Soy José, un Ingeniero de Datos certificado en Snowflake, Databricks y AWS, especializado en pipelines de datos escalables, migraciones a la nube y soluciones de datos de alto rendimiento.',
    'about.p2': 'Ayudo a las organizaciones a migrar sistemas legacy a arquitecturas modernas de datos en la nube, automatizar flujos de trabajo ETL complejos y lograr importantes mejoras de rendimiento y ahorro de costos.',
    'about.p3': 'Experiencia trabajando con las industrias de finanzas, retail y salud en Estados Unidos y LATAM.',
    'about.p4': 'Más allá de mis habilidades técnicas, valoro la comunicación clara, la confianza, la resolución práctica de problemas y el aprendizaje continuo.',
    
    // Results section
    'results.title': 'Resultados que he Entregado',
    'results.performance': 'Reduje los tiempos de query en Snowflake en un 60% mediante la optimización de la lógica de queries.',
    'results.cost': 'Ahorro de más del 40% en costos mensuales de infraestructura en AWS con optimizaciones en pipelines y ETL.',
    'results.processing': 'Entregué pipelines que procesan datos 3 veces más rápido, permitiendo near real-time analytics.',
    
    // Skills section
    'skills.title': 'Habilidades Clave',
    'skills.etl': 'Ingeniería de Datos y ETL (Snowflake, Databricks, Informatica PowerCenter)',
    'skills.cloud': 'Plataformas en la Nube (AWS, Azure)',
    'skills.programming': 'Programación y Automatización (Python, SQL, Terraform, Git)',
    'skills.warehousing': 'Data Warehousing (Snowflake, Databricks Delta Lake)',
    'skills.streaming': 'Streaming y Datos en Tiempo Real (Apache Spark Streaming, Kafka)',
    'skills.bi': 'BI y Visualización de Datos (Sigma, Tableau, PowerBI)',
    'skills.iac': 'Infraestructura como Código (Terraform, Databricks Asset Bundles)',
    
    // Certifications section
    'certifications.title': 'Certificaciones',
    'cert.snowpro': 'Certificación SnowPro Core',
    'cert.databricks': 'Databricks Certified Data Engineer Professional',
    'cert.azure': 'Azure Fundamentals',
    
    // Projects section
    'projects.title': 'Proyectos',
    'project1.title': 'Pipeline de Analítica en Tiempo Casi Real',
    'project1.desc': 'Dashboard de analítica de ventas en tiempo real construido con Kafka y Spark.',
    'project2.title': 'Pipeline de Datos con integración IA/LLM para extracción de insights',
    'project2.desc': 'Extracción automatizada de insights clave de contratos usando LLMs',
    'project3.title': 'Modernización de Lakehouse con SCD',
    'project3.desc': 'Migración de data warehouses legacy a arquitectura Lakehouse con seguimiento histórico (SCD Type 2)',
    'coming.soon': 'Próximamente',
    
    // Services section
    'services.title': 'Cómo Puedo Ayudarte',
    'service1.title': 'Consultoría en Arquitectura de Datos',
    'service1.desc': 'Diseño e implementación de arquitecturas de datos escalables que crecen con las necesidades de tu negocio.',
    'service1.feature1': 'Modernización de Lakehouse',
    'service1.feature2': 'Estrategia de migración a la nube',
    'service1.feature3': 'Optimización de rendimiento',
    'service2.title': 'Mentoría 1-a-1',
    'service2.desc': 'Acelera tu carrera en ingeniería de datos con orientación personalizada y proyectos prácticos.',
    'service2.feature1': 'Planificación de hoja de ruta profesional',
    'service2.feature2': 'Desarrollo de habilidades técnicas',
    'service2.feature3': 'Preparación para entrevistas',
    'service3.title': 'Asesoría Técnica y Soporte Práctico',
    'service3.desc': 'Obtén ayuda experta para desafíos específicos de ingeniería de datos mediante asesoría técnica o soporte práctico enfocado.',
    'service3.feature1': 'Auditorías de calidad de datos',
    'service3.feature2': 'Solución de problemas de rendimiento',
    'service3.feature3': 'Evaluación de pipelines de datos',
    'popular.badge': 'Más Popular',
    
    // Contact section
    'contact.title': '¿Listo para transformar tus datos?',
    'contact.description': 'Agenda una consulta gratuita de 30 minutos para identificar oportunidades rápidas y estrategias para tus desafíos de datos.',
    'button.bookconsultation': 'Agendar Consulta Gratuita',
    'button.schedulecall': 'Programar una Llamada',
    'contact.guarantee': 'La consulta gratuita incluye:',
    'contact.guarantee.desc': 'Evaluación del problema, resumen de la solución y recomendación de próximos pasos',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.follow': 'Sígueme en'
  }
};

class I18n {
  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.init();
  }
  
  detectLanguage() {
    // Check if language preference is stored
    const savedLang = localStorage.getItem('preferred-language');
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }
    
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0]; // Get main language code (e.g., 'es' from 'es-ES')
    
    // Return detected language if available, otherwise default to English
    return translations[langCode] ? langCode : 'en';
  }
  
  init() {
    this.createLanguageSelector();
    this.translatePage();
    this.updateMetaTags();
    this.updateHtmlLang();
  }
  
  createLanguageSelector() {
    // Create language selector
    const langSelector = document.createElement('div');
    langSelector.className = 'language-selector';
    langSelector.innerHTML = `
      <select id="language-select">
        <option value="en" ${this.currentLanguage === 'en' ? 'selected' : ''}>🌐 EN</option>
        <option value="es" ${this.currentLanguage === 'es' ? 'selected' : ''}>🌐 ES</option>
      </select>
    `;
    
    // Insert at the beginning of the header
    const header = document.querySelector('header');
    header.insertBefore(langSelector, header.firstChild);
    
    // Add event listener
    document.getElementById('language-select').addEventListener('change', (e) => {
      this.setLanguage(e.target.value);
    });
  }
  
  setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
      localStorage.setItem('preferred-language', lang);
      this.translatePage();
      this.updateMetaTags();
      this.updateHtmlLang();
    }
  }
  
  translate(key) {
    return translations[this.currentLanguage][key] || translations['en'][key] || key;
  }
  
  translatePage() {
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translate(key);
      
      if (element.tagName === 'INPUT' && element.type === 'submit') {
        element.value = translation;
      } else {
        element.textContent = translation;
      }
    });
  }
  
  updateMetaTags() {
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', this.translate('meta.description'));
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', this.translate('meta.keywords'));
    }
    
    // Update title
    document.title = this.translate('meta.title');
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', this.translate('meta.title'));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', this.translate('meta.description'));
    }
  }
  
  updateHtmlLang() {
    document.documentElement.setAttribute('lang', this.currentLanguage);
  }
}

// Initialize i18n when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.i18n = new I18n();
});