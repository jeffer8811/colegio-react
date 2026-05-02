import { useEffect } from "react";
import "../styles/niveles.css";
import { useNavigate } from "react-router-dom";
const DATA_NIVELES = [
  {
    id: "inicial",
    title: "🧸 Inicial",
    desc: "Desarrollo de habilidades básicas mediante el juego, la exploración y la creatividad en un entorno seguro.",
    items: ["Estimulación temprana", "Psicomotricidad", "Talleres de arte"],
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350"
  },
  {
    id: "primaria",
    title: "📘 Primaria",
    desc: "Formación académica sólida con un enfoque bilingüe, razonamiento matemático y comprensión lectora.",
    items: ["Inglés intensivo", "Robótica educativa", "Deportes"],
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    id: "secundaria",
    title: "🎓 Secundaria",
    desc: "Preparación integral para estudios superiores, fortaleciendo el pensamiento crítico y la orientación vocacional.",
    items: ["Convenios universitarios", "Liderazgo", "Ciencia y tecnología"],
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  }
];

function Niveles() {
  
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.2 });

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navigate = useNavigate(); // Inicializamos el navegador

  // ... (tu código del useEffect se mantiene igual)

  const handleSaberMas = (id) => {
    // Esto redirigirá a /inicial, /primaria o /secundaria según el id
    navigate(`/${id}`);
  };
  return (
    <div className="niveles-page">
      {/* HERO */}
      <section className="niveles-hero">
        <div className="hero-overlay">
          <h1>Niveles Educativos</h1>
          <p>Nuestra propuesta pedagógica diseñada para cada etapa</p>
        </div>
      </section>

      {/* SECCIONES DIVIDIDAS */}
{DATA_NIVELES.map((nivel, index) => (
  <section 
    key={nivel.id} 
    className={`nivel-section ${index % 2 !== 0 ? "reverse" : ""} fade-up`}
  >
    <div className="nivel-content">
      <div className="nivel-text">
        <span className="badge">Nivel</span>
        <h2>{nivel.title}</h2>
        <p>{nivel.desc}</p>
<ul className="nivel-list">
  {nivel.items.map((item, i) => (
    <li key={i}>{item}</li> // <-- Sin el emoji aquí
  ))}
</ul>
        
        {/* BOTÓN ACTUALIZADO */}
        <button 
          className="btn-saber-mas" 
          onClick={() => handleSaberMas(nivel.id)}
        >
          Más información
        </button>

      </div>
      <div className="nivel-image">
        <img src={nivel.img} alt={nivel.title} />
      </div>
    </div>
  </section>
))}
    </div>
  );
}

export default Niveles;