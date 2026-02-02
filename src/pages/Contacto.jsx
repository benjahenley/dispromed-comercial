import { useMemo, useState } from "react";
import { Section } from "../components/Section";
import { SecondaryNavbar } from "../components/navbar/SecondaryNavbar";

function IconWrap({ children }) {
  return (
    <div className="h-11 w-11 rounded-2xl border border-ink/10 bg-brand-100/15 flex items-center justify-center shadow-sm">
      {children}
    </div>
  );
}

function IconPill({ children }) {
  return (
    <div className="h-11 w-11 shrink-0 rounded-2xl border border-ink/10 bg-brand-100/20 shadow-sm flex items-center justify-center">
      <div className="text-brand-300">{children}</div>
    </div>
  );
}

/* Icons */
function PhoneIcon() {
  return (
    <svg
      className="h-5 w-5"
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
  );
}

function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
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
  );
}

function PinIcon() {
  return (
    <svg
      className="h-5 w-5"
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
  );
}

function ClockIcon() {
  return (
    <svg
      className="h-5 w-5"
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
  );
}

export function ContactInfoSection() {
  return (
    <section className="rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl font-semibold tracking-tight text-ink">
        Información de contacto
      </h2>
      <p className="mt-2 text-sm text-ink/60">
        Elegí el canal que te resulte más cómodo.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <InfoCard
          title="Teléfono"
          href="tel:+541145661085"
          value="+54 11 4566-1085"
          icon={<PhoneIcon />}
        />

        <InfoCard
          title="Email"
          href="mailto:ventas@dispromedcomercial.com.ar"
          value="ventas@dispromedcomercial.com.ar"
          icon={<MailIcon />}
        />

        <InfoCard
          title="Dirección"
          value={
            <>
              Allende 3038
              <br />
              C.A.B.A.
            </>
          }
          icon={<PinIcon />}
        />

        <InfoCard
          title="Horario"
          value={
            <>
              Lu-Vié: 9:00 - 18:00
              <br />
              Sáb: 9:00 - 13:00
            </>
          }
          icon={<ClockIcon />}
        />
      </div>
    </section>
  );
}

function InfoCard({ title, value, href, icon }) {
  const Card = (
    <div className="group rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-brand-300/25 h-full">
      <div className="flex items-start gap-4">
        <IconPill>{icon}</IconPill>

        <div className="min-w-0">
          <p className="text-sm font-semibold text-ink">{title}</p>

          <div className="mt-1 text-sm leading-relaxed text-ink/70 wrap-break-word">
            {href ? (
              <span className="text-brand-300 font-medium group-hover:text-brand-400 transition-colors">
                {value}
              </span>
            ) : (
              value
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (!href) return Card;

  return (
    <a
      href={href}
      className="block focus:outline-none focus:ring-4 focus:ring-brand-300/20 rounded-2xl">
      {Card}
    </a>
  );
}

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const canSubmit = useMemo(() => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.subject.trim() &&
      formData.message.trim()
    );
  }, [formData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("sending");
    // Simulación
    await new Promise((r) => setTimeout(r, 700));
    setStatus("sent");

    // acá iría tu POST real
    // console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <SecondaryNavbar />

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 bg-linear-to-b from-brand-100/25 via-white to-white" />
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-100/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand-100/25 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-14">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
              Atención comercial
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
              Contacto
            </h1>
            <p className="mt-3 text-base sm:text-lg text-ink/70 leading-relaxed">
              Estamos para ayudarte. Escribinos y te respondemos a la brevedad.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 sm:py-14">
        <Section title="" subtitle="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Left: Info */}
            <div className="space-y-6">
              <ContactInfoSection />
              {/* Why choose us */}
              <div className="rounded-3xl border border-ink/10 bg-brand-100/10 p-6 sm:p-7">
                <h3 className="text-base font-semibold text-ink">
                  ¿Por qué elegirnos?
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-ink/70">
                  {[
                    "Más de 20 años de experiencia",
                    "Productos de primera calidad",
                    "Asesoramiento personalizado",
                    "Entrega rápida y confiable",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-ink/10 shadow-sm">
                        <svg
                          className="h-4 w-4 text-brand-300"
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
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-3xl border border-ink/10 bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink">
                    Enviá tu consulta
                  </h2>
                  <p className="mt-2 text-sm text-ink/60">
                    Respondemos rápido. Los campos con * son obligatorios.
                  </p>
                </div>

                {status === "sent" && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-300/30 bg-brand-100/20 px-3 py-1 text-xs font-medium text-brand-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                    Enviado
                  </span>
                )}
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-ink mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-4 focus:ring-brand-300/20 focus:border-brand-300/40"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-ink mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-4 focus:ring-brand-300/20 focus:border-brand-300/40"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-ink mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-4 focus:ring-brand-300/20 focus:border-brand-300/40"
                      placeholder="+54 11..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-ink mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-4 focus:ring-brand-300/20 focus:border-brand-300/40"
                      placeholder="¿En qué te ayudamos?"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-ink mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-ink/10 bg-white px-4 py-2.5 text-sm outline-none transition focus:ring-4 focus:ring-brand-300/20 focus:border-brand-300/40 resize-none"
                    placeholder="Contanos un poco más..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit || status === "sending"}
                  className="w-full rounded-2xl bg-brand-300 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-400 hover:shadow-md disabled:opacity-60 disabled:hover:bg-brand-300 disabled:hover:shadow-sm focus:outline-none focus:ring-4 focus:ring-brand-300/30">
                  {status === "sending" ? "Enviando..." : "Enviar consulta"}
                </button>

                <div className="flex items-center justify-between text-xs text-ink/50">
                  <span>* Campos obligatorios</span>
                  <span className="hidden sm:inline">
                    Tiempo estimado de respuesta: 24–48 hs
                  </span>
                </div>

                {status === "sent" && (
                  <div className="rounded-2xl border border-brand-300/25 bg-brand-100/15 p-4 text-sm text-ink/70">
                    <span className="font-medium text-ink">¡Listo!</span>{" "}
                    Recibimos tu consulta. Te vamos a responder a la brevedad.
                  </div>
                )}
              </form>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
