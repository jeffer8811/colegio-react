import { useEffect } from "react";
import "../styles/niveles.css";

function Niveles() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* HERO estilo Innova */}
      <section className="niveles-hero">
        <div className="hero-overlay">
          <h1>Niveles Educativos</h1>
          <p>Aprendizaje activo en cada etapa de formación</p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="niveles-container">

        {/* CARD 1 */}
        <div className="nivel-card fade-up">
          <img src="https://images.unsplash.com/photo-1588072432836-e10032774350" />
          <div>
            <h2>🧸 Inicial</h2>
            <p>Desarrollo de habilidades básicas mediante juego y creatividad.</p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="nivel-card fade-up">
          <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7" />
          <div>
            <h2>📘 Primaria</h2>
            <p>Formación académica sólida con enfoque en lectura y matemáticas.</p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="nivel-card fade-up">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" />
          <div>
            <h2>🎓 Secundaria</h2>
            <p>Preparación para estudios superiores y desarrollo vocacional.</p>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Niveles;