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
};

export default imageRegistry;
