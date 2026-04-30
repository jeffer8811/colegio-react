import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Columna 1: Branding y Redes */}
          <div className="footer-col brand-col">
            <h2 className="logo-text">Colegio <span>XYZ</span></h2>
            <p className="footer-description">
              Formando líderes con valores y excelencia académica en la ciudad blanca.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31 0 2.568.27 3.685.75V4.833c-.718-.344-1.533-.53-2.396-.53-1.637 0-3.047 1.254-3.23 2.862v3.1h4.152c-.105.81-.39 1.56-.81 2.22H10.584v9.51c0 1.1-.9 2-2 2s-2-.9-2-2V10.485H4.5v-3.1h2.084V4.86c0-2.67 2.17-4.84 4.84-4.84h1.101z" /><path d="M24 4.14c-1.63 0-3.11.66-4.18 1.73V0h-3.1v10.485c0 1.1.9 2 2 2s2-.9 2-2V7.124c.73.49 1.61.78 2.56.78h.72v-3.1h-.72c-.44-.01-.84-.13-1.19-.34.33-.28.71-.5 1.19-.5h.72v-3.1h-.72z" /></svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Contacto Rápido */}
          <div className="footer-col contact-col">
            <h3>Contacto</h3>
            <ul>
              <li>📍 Mariano Melgar, Arequipa</li>
              <li>📞 (054) 123-4567</li>
              <li>📱 900 000 000</li>
              <li>✉️ informes@colegioxyz.edu.pe</li>
            </ul>
          </div>

          {/* Columna 3: Mapa Pequeño */}
          <div className="footer-col map-col">
            <h3>Sede Principal</h3>
            <div className="mini-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30632.44!2d-71.53!3d-16.40!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1715000000000"
                width="100%"
                height="130"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mapa Colegio"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="footer-hr" />

        <div className="footer-bottom">
          <p>&copy; 2026 Colegio XYZ. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <a href="#">Privacidad</a>
            <a href="#">Libro de Reclamaciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;