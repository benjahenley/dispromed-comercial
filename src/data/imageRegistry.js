/**
 * Registro central de imágenes.
 * Clave: imgId usado en los JSON de productos (images[] y models[]).
 * Valor: ruta pública de la imagen (relativa a /public).
 *
 * Para agregar una imagen:
 *  1. Colocar el archivo en public/products/…
 *  2. Agregar una entrada aquí con el imgId correspondiente.
 */
const imageRegistry = {
  // ── Suturas Atraumáticas – Absorbibles ──
  "sutucryl":
    "/products/hilos-de-suturas/absorbibles/sutura-de-poliglactina.webp",
  "sutucryl-antibacterial":
    "/products/hilos-de-suturas/absorbibles/sutura-de-poliglactina-con-triclosan.webp",
  "sutucryl-mono":
    "/products/hilos-de-suturas/absorbibles/sutura-de-poliglecaprone.webp",
  "pdo-ii":
    "/products/hilos-de-suturas/absorbibles/sutura-de-polidioxanona.webp",
  "sutusorb-antibacterial":
    "/products/hilos-de-suturas/absorbibles/sutura-de-acido-poliglicolico-con-triclosan.webp",
  "sutusorb":
    "/products/hilos-de-suturas/absorbibles/sutura-de-acido-poliglicólico.webp",

  // ── Suturas Atraumáticas – No absorbibles ──
  "sutusilk":
    "/products/hilos-de-suturas/no-absorbibles/sutura-de-seda.webp",
  "sutulene":
    "/products/hilos-de-suturas/no-absorbibles/sutura-de-polipropileno.webp",
  "sutubond":
    "/products/hilos-de-suturas/no-absorbibles/sutura-de-poliester.webp",
  "sutusteel":
    "/products/hilos-de-suturas/no-absorbibles/sutura-de-acero.webp",
  "sutulon":
    "/products/hilos-de-suturas/no-absorbibles/sutura-de-poliamida.webp",
  "sutufiber":
    "/products/hilos-de-suturas/no-absorbibles/sutura-de-polietileno.webp",
  "sutuen":
    "/products/hilos-de-suturas/no-absorbibles/sutura-de-lino-retorcido.webp",


  // ── Clips de polímero (producto) ──
  "clips-de-ligadura-polimericos-1":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/clips-de-ligadura-polimericos-1.webp",
  "clips-de-ligadura-polimericos-2":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/clips-de-ligadura-polimericos-2.webp",

  // ── Clips de polímero (modelos / subitems) ──
  "lc-1-6":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/subitems/lc-1-6.webp",
  "lc-2-6":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/subitems/lc-2-6.webp",
  "lc-3-6":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/subitems/lc-3-6.webp",
  "lc-4-6":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/subitems/lc-4-6.webp",

  // ── Grapadora cutánea ──
  "grapadora-cutanea-desechable-1":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/grapadora-cutanea-desechable-1.webp",
  "grapadora-cutanea-desechable-2":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/grapadora-cutanea-desechable-2.webp",

  // ── Cortadora lineal endoscópica -B ──
  "cortadora-lineal-endoscopica-B-1":
    "/products/suturas-mecanicas-y-laparoscopicas/laparoscopicas/cortadora-lineal-endoscopica-B-1.webp",
  "cortadora-lineal-endoscopica-B-2":
    "/products/suturas-mecanicas-y-laparoscopicas/laparoscopicas/cortadora-lineal-endoscopica-B-2.webp",
  "cortadora-lineal-endoscopica-B-3":
    "/products/suturas-mecanicas-y-laparoscopicas/laparoscopicas/cortadora-lineal-endoscopica-B-3.webp",
  "recargas-laparoscopicas":
    "/products/suturas-mecanicas-y-laparoscopicas/laparoscopicas/recargas-laparoscopicas.webp",

  // ── Grapadora cortadora curva ──
  "grapadora-cortadora-curva-desechable":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/grapadora-cortadora-curva-desechable.webp",

  // ── Grapadora cortadora lineal -B ──
  "grapadora-cortadora-lineal-B":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/grapadora-cortadora-lineal-B.webp",

  // ── Grapadora circular ──
  "grapadora-circular-desechable":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/grapadora-circular-desechable.webp",

  // ── Grapadora hemorroidal ──
  "grapadora-hemorroidal-desechable":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/grapadora-hemorroidal-desechable.webp",
  "grapadora-hemorroidal-desechable-2":
    "/products/suturas-mecanicas-y-laparoscopicas/convencional/grapadora-hemorroidal-desechable-2.webp",

  // ── Trocar ──
  "trocar-endoscopico-desechable":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/trocar-endoscopico-desechable.webp",

  // ── Aguja de Veress ──
  "aguja-de-veress":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/aguja-de-veress.webp",

  // ── Bolsa de espécimen ──
  "bolsa-desechable-para-extraccion":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/bolsa-desechable-para-extraccion.webp",

  // ── Túnel de asistencia manual ──
  "tunel-desechable-de-asistencia-manual":
    "/products/suturas-mecanicas-y-laparoscopicas/accesorios/tunel-desechable-de-asistencia-manual.webp",

  // ── Energía ──
  "sist-quir-radio-ultra":
    "/products/energia/sist-quir-radio-ultra.webp",
  "energia-ultrasonido":
    "/products/energia/Generador.png",
  "energia-generador":
    "/products/energia/generador.webp",

  // ── Barcat ──
  "btcbtr": "/products/barcat/btcbtr.webp",
  "bc66bc67": "/products/barcat/bc66bc67.webp",
  "bco24hs": "/products/barcat/bco24hs.webp",
  "bco50bco51": "/products/barcat/bco50bco51.webp",
  "bco58-1": "/products/barcat/bco58-1.webp",
  "bco58-2": "/products/barcat/bco58-2.webp",
  "bcybcr-1": "/products/barcat/bcybcr-1.webp",
  "bcybcr-2": "/products/barcat/bcybcr-2.webp",
  "bd206-1": "/products/barcat/bd206-1.webp",
  "bd206-2": "/products/barcat/bd206-2.webp",
  "bd207p-1": "/products/barcat/bd207p-1.webp",
  "bd207p-2": "/products/barcat/bd207p-2.webp",
  "be109-1": "/products/barcat/be109-1.webp",
  "be109-2": "/products/barcat/be109-2.webp",
  "binh27-1": "/products/barcat/binh27-1.webp",
  "binh27-2": "/products/barcat/binh27-2.webp",
  "bnep108-1": "/products/barcat/bnep108-1.webp",
  "bnep108-2": "/products/barcat/bnep108-2.webp",
  "bpro26-1": "/products/barcat/bpro26-1.webp",
  "bpro26-2": "/products/barcat/bpro26-2.webp",
  "bpro35-1": "/products/barcat/bpro35-1.webp",
  "bpro35-2": "/products/barcat/bpro35-2.webp",
  "bsb-1": "/products/barcat/bsb-1.webp",
  "bsb-2": "/products/barcat/bsb-2.webp",
  "bsdt227-1": "/products/barcat/bsdt227-1.webp",
  "bsdt227-2": "/products/barcat/bsdt227-2.webp",
  "bsl10-1": "/products/barcat/bsl10-1.webp",
  "bsl10-2": "/products/barcat/bsl10-2.webp",
  "bsn30-1": "/products/barcat/bsn30-1.webp",
  "bsn30-2": "/products/barcat/bsn30-2.webp",
  "bsn33-1": "/products/barcat/bsn33-1.webp",
  "bsn33-2": "/products/barcat/bsn33-2.webp",
  "bsnt97-1": "/products/barcat/bsnt97-1.png",
  "bsnt97-2": "/products/barcat/bsnt97-2.png",
  "bsr-1": "/products/barcat/bsr-1.webp",
  "bsr-2": "/products/barcat/bsr-2.webp",
  "bss29p-1": "/products/barcat/bss29p-1.webp",
  "bss29p-2": "/products/barcat/bss29p-2.webp",
  "bss30p-1": "/products/barcat/bss30p-1.webp",
  "bss30p-2": "/products/barcat/bss30p-2.webp",
  "bss32p-1": "/products/barcat/bss32p-1.webp",
  "bss32p-2": "/products/barcat/bss32p-2.webp",
  "bss3532p-1": "/products/barcat/bss3532p-1.webp",
  "bss3532p-2": "/products/barcat/bss3532p-2.webp",
  "btub63-1": "/products/barcat/btub63-1.webp",
  "btub63-2": "/products/barcat/btub63-2.webp",
};

export default imageRegistry;
