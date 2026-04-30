import { useEffect } from "react";
import "../styles/nosotros.css";
import "../styles/animations.css";

function Nosotros() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .zoom-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="nosotros">

      {/* HERO */}
      <section className="hero-nosotros">
        <div className="overlay"></div>
        <div className="hero-content fade-up">
          <h1>Sobre Nosotros</h1>
          <p>Formando estudiantes con valores y excelencia</p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="section container-flex fade-up">
        <div className="text">
          <h2>Nuestra Historia</h2>
          <p>
            Desde hace más de 20 años, nuestro colegio se dedica a brindar una educación
            de calidad, enfocada en el desarrollo integral de nuestros estudiantes.
          </p>
          <p>
            Creemos en formar no solo estudiantes académicamente preparados, sino también
            personas con valores, liderazgo y compromiso social.
          </p>
        </div>

        <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b" />
      </section>

      {/* MISIÓN - VISIÓN */}
      <section className="section gray">
        <div className="grid-3">

          <div className="card zoom-in">
            <h3>Misión</h3>
            <p>Brindar educación integral de calidad formando líderes responsables.</p>
          </div>

          <div className="card zoom-in">
            <h3>Visión</h3>
            <p>Ser una institución referente en educación a nivel nacional.</p>
          </div>

          <div className="card zoom-in">
            <h3>Valores</h3>
            <p>Respeto, responsabilidad, disciplina y excelencia.</p>
          </div>

        </div>
      </section>

      {/* EQUIPO */}
      <section className="section">
        <h2 className="center fade-up">Nuestro Equipo</h2>

        <div className="grid-3">
          <div className="team-card zoom-in">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
            <h4>Director</h4>
            <p>Juan Pérez</p>
          </div>

          <div className="team-card zoom-in">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
            <h4>Coordinadora</h4>
            <p>María López</p>
          </div>

          <div className="team-card zoom-in">
            <img src="https://randomuser.me/api/portraits/men/65.jpg" />
            <h4>Docente</h4>
            <p>Carlos Ruiz</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta fade-up">
        <h2>¿Quieres ser parte de nuestro colegio?</h2>
        <button className="btn-primary">Ver Admisión</button>
      </section>

    </div>
  );
}

export default Nosotros;