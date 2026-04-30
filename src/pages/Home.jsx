import { useEffect } from "react";
import "../styles/home.css";
import "../styles/nosotros.css";
import "../styles/animations.css";

function Home() {
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

    // 🔥 cleanup (IMPORTANTE)
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);


return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
<section className="hero">
  {/* Imagen de fondo optimizada */}
  <div className="hero-bg-image"></div>
  <div className="overlay"></div>

  <div className="container hero-flex">
    <div className="hero-glass-card fade-up">
      <span className="badge">Admisiones 2026 Abiertas</span>
      <h1>Colegio XYZ</h1>
      <p>Innovación educativa para un mundo globalizado.</p>
      <div className="buttons">
        <button className="btn-primary main-cta">Postula Ahora</button>
        <button className="btn-secondary">Saber más</button>
      </div>
    </div>

    <div className="hero-gallery zoom-in">
      <div className="gallery-item item-1">
        <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000" alt="Aula Moderna" />
      </div>
      <div className="gallery-item item-2">
        <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000" alt="Deportes" />
      </div>
      <div className="gallery-item item-3">
        <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000" alt="Biblioteca" />
      </div>
    </div>
  </div>
</section>

{/* ACCESOS RÁPIDOS - Mejorado */}
<section className="section container">
  <h2 className="fade-up">Nuestros Pilares</h2>
  <div className="grid">
    {/* Pilar 1 */}
    <div className="card zoom-in card-1">
      <div className="icon-wrapper">🎓</div>
      <h3>Niveles</h3>
      <p>Desde Inicial hasta Secundaria con enfoque bilingüe y personalizado.</p>
      <a href="/niveles" className="card-link">Ver más →</a>
    </div>

    {/* Pilar 2 */}
    <div className="card zoom-in card-2">
      <div className="icon-wrapper">📝</div>
      <h3>Admisión</h3>
      <p>Conoce los requisitos y fechas para el ciclo académico 2026.</p>
      <a href="/admision" className="card-link">Ver más →</a>
    </div>

    {/* Pilar 3 */}
    <div className="card zoom-in card-3">
      <div className="icon-wrapper">📍</div>
      <h3>Sedes</h3>
      <p>Ubicaciones estratégicas con infraestructura de vanguardia.</p>
      <a href="/contacto" className="card-link">Ver más →</a>
    </div>
  </div>
</section>

      {/* SOBRE NOSOTROS - Estilo alternado */}
      <section className="section gray split-section">
        <div className="container flex-container">
          <div className="text-side fade-up">
            <h2>Más de 20 años de excelencia</h2>
            <p>En Colegio XYZ, no solo enseñamos, inspiramos a nuestros estudiantes a descubrir su propósito.</p>
            <ul className="benefits-list">
              <li>✅ Tecnología en el aula</li>
              <li>✅ Programa deportivo de alto nivel</li>
              <li>✅ Formación en valores cristianos</li>
            </ul>
          </div>
          <div className="image-side zoom-in">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVsWqtbExVuEGeg6Rz8hP9ibfB0Q5FicMpg&s" alt="Estudiantes" />
          </div>
        </div>
      </section>
      {/* SECCIÓN DE CONTACTO FINAL */}
<section className="section contact-footer fade-up">
  <div className="container">
    <div className="contact-card">
      <h2>¿Listo para formar parte de nuestra familia?</h2>
      <p>Déjanos tus datos y un asesor educativo se pondrá en contacto contigo.</p>
      <form className="home-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <button type="submit" className="btn-primary">Enviar información</button>
      </form>
    </div>
  </div>
</section>
      {/* El formulario lo mantenemos abajo, pero con un diseño más limpio en CSS */}
      {/* BOTONES FLOTANTES EN STACK */}
<div className="whatsapp-sidebar-bottom">
  <a 
    href="https://wa.me/51900000000" 
    className="whatsapp-side-link" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Chat en WhatsApp"
  >
    <svg 
      viewBox="0 0 24 24" 
      width="28" 
      height="28" 
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <span>Escríbenos</span>
  </a>
</div>
    </div>
    
  );
}
export default Home;