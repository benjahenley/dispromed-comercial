import { useState } from "react";
import { Section } from "../components/Section";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Formulario enviado (simulación). En producción, esto enviaría los datos a un backend."
    );
    console.log("Form data:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumbs items={[{ label: "Contacto" }]} />

        <Section
          title="Contacto"
          subtitle="Estamos para ayudarte. Comunicate con nosotros por cualquiera de estos medios.">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-ink/70">
                      Allende 3038
                      <br />
                      Ciudad Autónoma de Buenos Aires
                      <br />
                      Argentina
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <a
                      href="tel:+541145661085"
                      className="text-brand-300 hover:text-brand-400 transition-colors">
                      +54 11 4566-1085
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:ventas@dispromedcomercial.com.ar"
                      className="text-brand-300 hover:text-brand-400 transition-colors">
                      ventas@dispromedcomercial.com.ar
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-100/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horario de Atención</h4>
                    <p className="text-ink/70">
                      Lunes a Viernes: 9:00 - 18:00
                      <br />
                      Sábados: 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-brand-100/10">
                <h4 className="font-semibold mb-2">¿Por qué elegirnos?</h4>
                <ul className="space-y-2 text-sm text-ink/70">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Más de 20 años de experiencia
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Productos de primera calidad
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Asesoramiento personalizado
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Entrega rápida y confiable
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Envianos tu Consulta</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-ink/10 focus:outline-none focus:ring-2 focus:ring-brand-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-300 text-white px-6 py-3 hover:bg-brand-400 transition-colors font-medium">
                  Enviar consulta
                </button>

                <p className="text-sm text-ink/60 text-center">
                  * Campos obligatorios
                </p>
              </form>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
