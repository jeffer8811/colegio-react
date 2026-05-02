import { useEffect } from "react";
import "../styles/niveles.css"; 
import "../styles/inicial.css";

const AREAS_ENFOQUE = [
  { title: "Psicomotricidad", desc: "Desarrollo de habilidades motoras finas y gruesas para un crecimiento sano.", icon: "🏃‍♂️" },
  { title: "Inglés Inicial", desc: "Primer contacto con el idioma mediante canciones, rimas y juegos.", icon: "🔤" },
  { title: "Arte Creativo", desc: "Expresión libre a través de pintura, música y manualidades divertidas.", icon: "🎨" },
  { title: "Socio-Emocional", desc: "Fomento de la autonomía, empatía y el compartir con sus compañeros.", icon: "🤝" }
];

function Inicial() {
  // Lógica de animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up, .zoom-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="inicial-page">
      {/* HERO SECTION */}
      <header className="inicial-intro fade-up">
        <div className="container">
          <span className="badge-age">Edades: 3, 4 y 5 años</span>
          <h1>Nivel Inicial: El Inicio de una Gran Aventura</h1>
          <p className="subtitle">
            Brindamos un entorno cálido donde los más pequeños aprenden jugando 
            y desarrollan su curiosidad natural en un espacio seguro.
          </p>
          <div className="scroll-indicator">↓</div>
        </div>
      </header>

      {/* METODOLOGÍA */}
      <section className="section-methodology white">
        <div className="container-flex fade-up">
          <div className="text-content">
            <span className="section-label">¿Cómo aprendemos?</span>
            <h2>Nuestra Metodología</h2>
            <p>
              Aplicamos el <strong>Aprendizaje Basado en el Juego (ABJ)</strong>. 
              Cada actividad está diseñada para estimular el pensamiento crítico 
              y la creatividad, respetando siempre el ritmo individual de cada niño.
            </p>
            <ul className="check-list">
              <li>Aulas interactivas con materiales didácticos modernos.</li>
              <li>Acompañamiento psicológico y psicomotriz permanente.</li>
              <li>Docentes especialistas con vocación y calidez humana.</li>
            </ul>
          </div>

          <div className="image-wrapper">
             <img 
               src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
               alt="Niños realizando actividades educativas" 
               className="main-img"
             />
             <div className="img-decoration"></div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE ENFOQUE */}
      <section className="section-areas gray">
        <div className="container">
          <h2 className="center fade-up">¿Qué potenciamos en clase?</h2>
          <div className="grid-areas">
            {AREAS_ENFOQUE.map((area, index) => (
              <article 
                key={index} 
                className="area-card zoom-in" 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="area-icon-container">
                  <span className="area-icon" role="img" aria-label={area.title}>
                    {area.icon}
                  </span>
                </div>
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HORARIOS / CTA */}
      <section className="cta-section fade-up">
        <div className="cta-card">
          <div className="cta-content">
            <h2>¡Forma parte de nuestra familia!</h2>
            <p className="time-info">Horario Escolar: <strong>8:00 AM - 1:00 PM</strong></p>
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

export default Inicial;