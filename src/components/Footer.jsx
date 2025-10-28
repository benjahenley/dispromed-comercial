import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-ink text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Allende 3038 - CABA - Argentina</li>
              <li>
                <a
                  href="tel:+541145661085"
                  className="hover:text-brand-100 transition-colors">
                  +54 11 4566-1085
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventas@dispromedcomercial.com.ar"
                  className="hover:text-brand-100 transition-colors">
                  ventas@dispromedcomercial.com.ar
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-brand-100 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/productos"
                  className="hover:text-brand-100 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogos"
                  className="hover:text-brand-100 transition-colors">
                  Catálogos
                </Link>
              </li>
              <li>
                <Link
                  to="/novedades"
                  className="hover:text-brand-100 transition-colors">
                  Novedades
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-brand-100 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Sobre Nosotros */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Dispromed Comercial</h3>
            <p className="text-sm text-white/80">
              Distribuidora especializada en insumos médicos y equipamiento
              hospitalario. Comprometidos con la calidad y el servicio.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/60">
          <p>
            &copy; {new Date().getFullYear()} Dispromed Comercial. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
