import { useEffect } from "react";
import "../styles/secundaria.css";

const ENFOQUE_SECUNDARIA = [
  { title: "Nivel Pre", desc: "Ciclos de preparación intensiva con simulacros tipo admisión para las mejores universidades.", icon: "🏛️" },
  { title: "Liderazgo", desc: "Programa de habilidades blandas, oratoria y debate para formar ciudadanos globales.", icon: "📢" },
  { title: "Robótica y TIC", desc: "Laboratorios de innovación tecnológica con proyectos en Arduino, Python y Diseño 3D.", icon: "🤖" },
  { title: "Orientación", desc: "Acompañamiento psicológico con tests vocacionales y convenios con universidades.", icon: "🗺️" }
];

function Secundaria() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .zoom-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="secundaria-page">
      {/* HERO SECTION MEJORADO */}
      <section className="hero-secundaria fade-up">
        <div className="container">
          <span className="badge">Excelencia Académica</span>
          <h1>Secundaria: Liderazgo y Futuro Universitario</h1>
          <p className="subtitle">
            Formamos jóvenes íntegros con pensamiento crítico, preparados para destacar en las universidades más exigentes.
          </p>
        </div>
      </section>

      {/* SECCIÓN PREPARACIÓN PARA EL ÉXITO */}
      <section className="section white fade-up">
        <div className="container-flex reverse">
          <div className="text">
            <span className="section-label">Hacia la Universidad</span>
            <h2>Preparación Pre-U de Alto Rendimiento</h2>
            <p>
              Nuestro currículo integra contenidos pre-universitarios desde 3ro de secundaria, permitiendo que nuestros alumnos egresen con una base sólida en ciencias y letras.
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <strong>95%</strong>
                <p>Ingreso Directo</p>
              </div>
              <div className="stat-item">
                <strong>B2</strong>
                <p>Certificación Cambridge</p>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Estudiantes liderando" />
            <div className="img-decoration"></div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROPUESTA DE VALOR (CARDS) */}
      <section className="section gray">
        <h2 className="center">Nuestros Pilares de Formación</h2>
        <div className="grid-4">
          {ENFOQUE_SECUNDARIA.map((item, i) => (
            <div key={i} className="card-pillar zoom-in">
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN EXTRA: TALLERES EXTRACURRICULARES */}
      <section className="section white fade-up">
        <div className="container-flex">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80" alt="Talleres secundaria" />
          </div>
          <div className="text">
            <h2>Talleres de Especialización</h2>
            <p>Fomentamos el talento más allá de las aulas con espacios diseñados para la creatividad y el deporte:</p>
            <ul className="nivel-list">
              <li>Manejo de Proyectos con Metodologías Ágiles.</li>
              <li>Taller de Debate y Oratoria Competitiva.</li>
              <li>Deportes de alta competencia (Básquet, Vóley, Fútbol).</li>
              <li>Ensamble Musical y Artes Visuales.</li>
            </ul>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Secundaria;