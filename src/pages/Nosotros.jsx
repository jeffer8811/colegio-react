import { useEffect } from "react";
import "../styles/nosotros.css";
import "../styles/animations.css";

// 1. Centralizamos la información (Más fácil de editar luego)
const INFO_CARDS = [
  { 
    title: "Misión", 
    desc: "Brindar educación integral de calidad formando líderes responsables.",
    icon: "🎯" // Puedes usar FontAwesome o SVGs luego
  },
  { 
    title: "Visión", 
    desc: "Ser una institución referente en educación a nivel nacional.",
    icon: "👁️" 
  },
  { 
    title: "Valores", 
    desc: "Respeto, responsabilidad, disciplina y excelencia.",
    icon: "⭐" 
  }
];

const TEAM = [
  { 
    name: "Juan Pérez", 
    role: "Director", 
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Más de 15 años liderando instituciones educativas con enfoque en valores."
  },
  { 
    name: "María López", 
    role: "Coordinadora", 
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Especialista en gestión curricular y acompañamiento pedagógico."
  },
  { 
    name: "Carlos Ruiz", 
    role: "Docente", 
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    bio: "Apasionado por la tecnología y la enseñanza didáctica de las ciencias."
  }
];

function Nosotros() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up, .zoom-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 }); // Se activa cuando el 10% del elemento es visible

    elements.forEach((el) => observer.observe(el));

    // Limpieza para evitar fugas de memoria
    return () => observer.disconnect();
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
          <p>Desde hace más de 20 años, nuestro colegio se dedica a brindar una educación de calidad...</p>
          <p>Creemos en formar personas con valores, liderazgo y compromiso social.</p>
        </div>
        <div className="image-container">
           <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b" alt="Instalaciones del colegio" />
        </div>
      </section>
{/* MISIÓN - VISIÓN - VALORES */}
<section className="section gray">
  <div className="grid-3">
    {INFO_CARDS.map((card, index) => (
      <div key={index} className="card-pillar zoom-in">
        <div className="icon-box">
          <span>{card.icon}</span>
        </div>
        <h3>{card.title}</h3>
        <div className="line-accent"></div>
        <p>{card.desc}</p>
      </div>
    ))}
  </div>
</section>

{/* EQUIPO (Con Efecto Flip) */}
<section className="section">
  <h2 className="center fade-up">Nuestro Equipo</h2>
  <div className="grid-3">
    {TEAM.map((member, index) => (
      <div key={index} className="flip-card zoom-in">
        <div className="flip-card-inner">
          
          {/* PARTE FRONTAL: Foto y Cargo */}
          <div className="flip-card-front">
            <img src={member.img} alt={member.name} />
            <h4>{member.role}</h4>
            <p>{member.name}</p>
          </div>

          {/* PARTE TRASERA: Información Extra */}
          <div className="flip-card-back">
            <h3>Sobre {member.name.split(' ')[0]}</h3>
            <p>{member.bio}</p>
            <div className="social-links-mini">
              {/* Aquí podrías poner iconos pequeños si quisieras */}
              <span>🎓 Especialista</span>
            </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  );
}

export default Nosotros;