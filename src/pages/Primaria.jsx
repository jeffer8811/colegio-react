import { useEffect } from "react";

import "../styles/primaria.css";

const PILARES_PRIMARIA = [
  { title: "Pensamiento Lógico", desc: "Matemáticas aplicadas a la resolución de problemas reales y razonamiento cuantitativo.", icon: "🧮" },
  { title: "Plan Lector", desc: "Comprensión lectora avanzada y análisis crítico de textos literarios y científicos.", icon: "📚" },
  { title: "Inglés Bilingüe", desc: "Certificaciones internacionales (Cambridge) y uso fluido del idioma en contextos sociales.", icon: "🇺🇸" },
  { title: "Ciencia y Tecnología", desc: "Proyectos de robótica, indagación científica y fundamentos de programación.", icon: "🧪" }
];

const VALORES = [
  { nombre: "Responsabilidad", color: "#0056b3" },
  { nombre: "Respeto", color: "#ffc107" },
  { nombre: "Solidaridad", color: "#28a745" },
  { nombre: "Integridad", color: "#dc3545" }
];

function Primaria() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-up, .step-card, .value-tag").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="primaria-page">
      {/* HERO SECTION */}
      <section className="hero-primaria-alt fade-up">
        <div className="container">
          <div className="hero-content">
            <span className="badge-primaria">Admisiones 2026 Abiertas</span>
            <h1>Educación Primaria: <br/><span>Liderazgo y Valores</span></h1>
            <p>Formamos estudiantes autónomos con capacidad crítica y un sólido dominio de herramientas tecnológicas.</p>
            <div className="hero-stats">
              <div className="stat"><strong>+15</strong><span>Talleres</span></div>
              <div className="stat"><strong>100%</strong><span>Bilingüe</span></div>
              <div className="stat"><strong>STEAM</strong><span>Metodología</span></div>
            </div>
          </div>
        </div>

      </section>

      {/* SECCIÓN EXCELENCIA ACADÉMICA */}
      <section className="section-excelencia fade-up">
        <div className="container-flex">
          <div className="image-blob-container">
            <div className="blob-bg"></div>
            <img 
              src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260" 
              alt="Estudiantes primaria" 
              className="img-primaria"
            />
            <div className="floating-card">
              <p>🚀 <strong>Enfoque STEAM</strong></p>
              <span>Ciencia, Tecnología, Ingeniería, Arte y Matemáticas.</span>
            </div>
          </div>
          <div className="text-info">
            <span className="subtitle-label">Nuestro Modelo Educativo</span>
            <h2>Aprendizaje Basado en Proyectos</h2>
            <p>En el nivel primaria, nuestros estudiantes no solo memorizan, sino que investigan y crean soluciones a problemas reales mediante proyectos colaborativos.</p>
            
            <div className="features-grid">
              <div className="feat-item"><strong>Digital:</strong> Uso de tablets para investigación guiada.</div>
              <div className="feat-item"><strong>Deportivo:</strong> Natación, fútbol y básquetbol.</div>
              <div className="feat-item"><strong>Artístico:</strong> Talleres de teatro y música.</div>
              <div className="feat-item"><strong>Emocional:</strong> Coaching para el desarrollo de la autoestima.</div>
            </div>

            <div className="values-container">
              <h4>Formación en Valores:</h4>
              <div className="values-row">
                {VALORES.map((v, i) => (
                  <span key={i} className="value-tag" style={{borderLeft: `4px solid ${v.color}`}}>{v.nombre}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PILARES EDUCATIVOS */}
      <section className="section-steps">
        <div className="container">
          <div className="center-header">
            <h2>Pilares del Éxito Escolar</h2>
            <p>Nuestra currícula está diseñada para superar los estándares nacionales.</p>
          </div>
          <div className="steps-container">
            {PILARES_PRIMARIA.map((pilar, i) => (
              <div key={i} className="step-card" style={{"--i": i}}>
                <div className="step-number">{i + 1}</div>
                <div className="step-icon">{pilar.icon}</div>
                <h3>{pilar.title}</h3>
                <p>{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* HORARIOS / CTA */}
      <section className="cta-section fade-up">
        <div className="cta-card">
          <div className="cta-content">
            <h2>¡Forma parte de nuestra familia!</h2>
            <p className="time-info">Horario Escolar: <strong>8:00 AM - 3:00 PM</strong></p>
            <div className="cta-buttons">
              <button className="btn-primary">Matrícula 2026</button>
              <button className="btn-outline">Descargar Plan Curricular</button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Primaria;