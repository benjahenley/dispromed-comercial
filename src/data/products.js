export const products = [
  {
    id: "clips-de-polimero",
    navProductId: "clips-de-polimero",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "accesorios",
    title: "Clips de ligadura poliméricos",
    description: `Los clips de ligadura son dispositivos implantables, están diseñados para sujetar de forma segura el vaso sanguíneo o tejido para proporcionar una oclusión completa de forma atraumática. Se utilizan en procedimientos cardiotorácicos, vasculares, gastrointestinales, urológicos, ginecológicos y bariátricos.`,
    characteristics: {
      title: "Características",
      items: [
        "Las ranuras laterales y transversales permiten una fijación segura en la estructura y aumenta la resistencia al clip formado.",
        "La sección transversal triangular maximiza el contacto de superficie a superficie entre la pinza y la mandíbula.",
        "Cierre preciso de punta a punta con agarre firme a los vasos sanguíneos.",
        "Tamaño del clip: pequeño, mediano, mediano-grande, grande",
        "Clip/Cartuchos: 6",
        "Cartuchos/Caja: 20",
        "Clips/Caja: 120",
        "Código del producto : MLT100, MLT200, MLT300, MLT400",
      ]
    },
    models: [
      { title: "LC-4-6", imgPath: "", alt: "" },
      { title: "LC-1-6", imgPath: "", alt: "" },
      { title: "LC-2-6", imgPath: "", alt: "" },
      { title: "LC-3-6", imgPath: "", alt: "" }],

    // Table visible in the PDF image on page 1
    table: {
      headers: ["Código", "Largo", "Color", "Medida"],
      rows: [
        ["CA C 27*9 S", "270", "Verde", "ML"],
        ["CA C 27*9 M", "270", "Violeta", "L"],
        ["CA C 27*9 L", "270", "Dorado", "XL"],
        ["CA C 27*70 S", "270", "Verde", "ML"],
        ["CA C 27*70 M", "270", "Violeta", "L"],
        ["CA C 27*70 L", "270", "Dorado", "XL"],
        ["CA B 5-S", "330", "VERDE", "ML"],
        ["CA B 10-M", "330", "VIOLETA", "L"],
        ["CA B 10-L", "330", "DORADO", "XL"],
      ],
    },

    imageCount: 9,
    images: Array.from({ length: 9 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "grapadora-cutanea-desechable-removedor",
    navProductId: null, // not in your navbar list
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "convecional",

    title: "Grapadora cutánea desechable y removedor:",
    description: `Se utiliza para el cierre de heridas cutáneas y la sutura de la piel
superficial en incisiones quirúrgicas.
Diseñada ergonómicamente para adaptarse a la mano, lo que facilita su
uso durante la cirugía.
Incluye un indicador de cantidad de grapas, que muestra claramente las
grapas restantes.
Grapadora cutánea desechable y removedor:
La grapadora de piel desechable con grapas de acero inoxidable 316L tiene
aplicaciones en cirugías abdominales, ginecológicas, ortopédicas y
torácicas para el cierre de la piel. Una vez que la piel ha tenido la
oportunidad de curarse, las grapas se retiran con un extractor de grapas.
La cabeza de la grapadora tiene un ángulo que proporciona una visión clara
para asegurar la colocación precisa de la grapa y permite que los pasadores
grapen fácilmente el tejido.
Características:
Diseño ergonómico
Longitud óptima
Carcasa transparente con
indicador
Longitud adecuada de la corona
de grapas
Beneficios:
Fácil manejo para el resultado
deseado
Sujeta tejidos más gruesos
Mejor visibilidad del recuento de
grapas
Asegura heridas más amplias`,

    imageCount: 2,
    images: Array.from({ length: 2 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "lineal-cortante-endoscopica",
    navProductId: "lineal-cortante-endoscopica",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "laparoscopicas",

    title:
      "Cortadora lineal endoscópica desechable con grapadora y recarga -B:",
    description: `El grosor del tejido varia en todo el cuerpo, por lo que el proceso de selección de
cartuchos con una compresión adecuada ha sido una necesidad crítica para los
cirujanos que realizan cirugías abdominales y torácicas.
Presentamos el cortador lineal endoscópico y las recargas MIRUST con una
tecnología de recarga distintiva que ofrece distintas alturas de grapas para
adaptarse a diferentes espesores de tejidos con una compresión
adecuada, una tensión tisular mínima y una perfusión óptima.
El cortador lineal endoscópico MIRUSM es una pistola universal con recargas de
45 mm y 60 mm. Ofrece un diseño ergonóico con precisión en la articulación de
la mandíbula y formación constante de líneas de grapas para una anastomosis a
prueba de fugas.
Cortadora lineal endoscópica desechable
con grapadora y recarga -B:`,

    // Table visible in the PDF image on page 3
    table: {
      headers: [
        "Código",
        "Longitud de Recarga (mm)",
        "Altura de Grapa (mm)",
        "Color",
      ],
      rows: [
        ["DER B 45G", "45", "2.5/2.5/2.5", "Gris"],
        ["DER B 45T", "45", "2.0/2.5/3.0", "Tostado"],
        ["DER B 45P", "45", "3.0/3.5/4.0", "Púrpura"],
        ["DER B 45B", "45", "4.0/4.5/5.0", "Negro"],
        ["DER B 60T", "60", "2.0/2.5/3.0", "Tostado"],
        ["DER B 60P", "60", "3.0/3.5/4.0", "Púrpura"],
        ["DER B 60B", "60", "4.0/4.5/5.0", "Negro"],
        ["DER HB 45T Punta angulada", "45", "2.0/2.5/3.0", "Tostado"],
        ["DER HB 45P Punta angulada", "45", "3.0/3.5/4.0", "Púrpura"],
        ["DER HB 45B Punta angulada", "45", "4.0/4.5/5.0", "Negro"],
        ["DER HB 60L Punta angulada", "60", "2.5/2.5/2.5", "Blanco"],
        ["DER HB 60T Punta angulada", "60", "2.0/2.5/3.0", "Tostado"],
        ["DER HB 60P Punta angulada", "60", "3.0/3.5/4.0", "Púrpura"],
        ["DER HB 60B Punta angulada", "60", "4.0/4.5/5.0", "Negro"],
      ],
    },

    imageCount: 3,
    images: Array.from({ length: 3 }, () => ({ src: "", alt: "" })),

    descriptionPages: {
      D: [
        `Se utiliza en cirugías torácicas, abdominales, pediátricas y en
endoscopía ginecológica.
Cuenta con un sistema de doble compresión, que permite una mejor
formación de las grapas.
Diseñada para operarse con una sola mano y con un mayor ángulo de
movimiento.
Posee un sistema de disparo en 3 pasos y retorno manual en 1 paso, lo
que la hace más segura durante el procedimiento.
Cortadora lineal endoscópica desechable
con grapadora y recarga -D:
La compresión óptima del tejido es clave para lograr una formación
consistente de una línea de grapas en forma de B que garantice la
seguridad de la herida y una hemoostasia adecuada.
Presentamos el cortador lineal endoscópico y recargas MIRUS que ofrece,
una articulación de la mandíbula única, controlada proximalmente y sin
restricciones, de 0° a 45° en ambos lados. Cada recarga tiene una nueva
cuchilla para una sección transversal precisa y para evitar la contaminación
cruzada`,
        `Se utiliza en cirugías torácicas, abdominales, pediátricas y en endoscopía
ginecológica.
Cuenta con un sistema de doble compresión, que permite una mejor
formación de las grapas.
Diseñada para operarse con una sola mano y con un mayor ángulo de
movimiento.
Posee un sistema de disparo en 3 pasos y retorno manual en 1 paso, lo que la
hace más segura durante el procedimiento.
Cortadora lineal endoscópica desechable
con grapadora y recarga -D:
Cortadora lineal endoscópica desechable
con grapadora y recarga -D`,
      ],
    },

    imageCount_D: 6,
    images_D: Array.from({ length: 6 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "curva-cortante",
    navProductId: "curva-cortante",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "convecional",

    title: "Grapadora cortadora curva desechable:",
    description: `Se utiliza para la transección, resección y/o creación de anastomosis, con
aplicación en múltiples procedimientos quirúrgicos abiertos o
mínimamente invasivos: gastrointestinales, de tejido muscular,
ginecológicos, urológicos y torácicos.
Cuenta con un diseño especial de cabeza curva, que permite posicionarla
fácilmente en zonas bajas y es ideal para cavidades pélvicas estrechas.
Incluye una junta cortable que emite una señal sonora clara tras cada
disparo, confirmando que el corte y la sutura se han completado
correctamente.
Grapadora cortadora curva desechable:`,

    table: {
      headers: ["Código", "Grapa (QTY)", "Altura de Grapa (mm)"],
      rows: [["DCC B-40G", "40", "4.8 ± 0.3"]],
    },

    imageCount: 1,
    images: Array.from({ length: 1 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "lineal-cortante",
    navProductId: "lineal-cortante",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "convecional",

    title: "Grapadora cortadora lineal desechable con recarga -B:",
    description: `La cortadora lineal modo recargable MIRUS medidas 60, 80 y 100, forman
dos filas de grapas de titanio de doble scalonamiento y, al mismo tiempo,
cortan y separan el tejido entre las dos filas dobles. El cortador lineal
cargable MIRUS, tienen recargas que están disponibles en medidas de 60
mm y 80 mm con dos tamaños ferentes para adaptarse a diversos grosores
de tejido.
Grapadora cortadora lineal desechable
con recarga -B:
El cortador lineal MIRUS es:
Fiable: Mecanismo para la formación de grapas. Bloqueo de seguridad para
prevenir la descarga de dispositivos.
Flexible: Contiene dos cargas diferentes para diferentes espesores de
tejido.
Fácil de usar: se usa con una mano. La posición de bloqueo tiene en cuenta
el reposicionamiento del tejido.
60 ml
80ml
100ml`,

    table: {
      headers: [
        "Código - Grapadora",
        "Código - Recarga",
        "Longitud de Corte ±3 (mm)",
        "Tamaño de Grapa A±0.2 mm",
        "Grapas (CANT.)",
        "Color",
        "Recargas",
      ],
      rows: [
        ["DLC B-60B", "DCR B-60B", "63", "3.8", "64", "Azul", "3.8mm"],
        ["DLC B-60G", "DCR B-60G", "63", "4.8", "64", "Verde", "4.8mm"],
        ["DLC B-80B", "DCR B-80B", "83", "3.8", "84", "Azul", "3.8mm"],
        ["DLC B-80G", "DCR B-80G", "83", "4.8", "84", "Verde", "4.8mm"],
        ["DLC B-100B", "DCR B-100B", "103", "3.8", "104", "Azul", "3.8mm"],
        ["DLC B-100G", "DCR B-100G", "103", "4.8", "104", "Verde", "4.8mm"],
      ],
    },

    imageCount: 2,
    images: Array.from({ length: 2 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "circulares",
    navProductId: "circulares",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "convecional",

    title: "Grapadora Circular Desechable:",
    description: `Grapadora Circular Desechable:
La grapadora circular de MIRUS, tiene un diseño circular que refleja tres
décadas de experiencias extraídas de los principales cirujanos que fueron
bariátricos, colorrectales y médicos de todo el mundo. Con la tecnología
de consolidación de grapas de 4.0mm, la grapadora circular MIRUS brinda
un rendimiento de fácil uso y es muy adaptable.
Nuestra grapadora intraluminal contiene un indicador de compresión de
tejido y mide el tejido comprimido en posiciones particulares dentro de
una escala. Cuando se encuentra con el tejido las grapadoras proporcionan
una capa para una conexión perfecta. En el arranque las capas de tejido
son reguladas y con ello las grapas de altura se ajustan automáticamente y
ofrecen una disposición pareja de grapas.
Clavos de titanio importados de alta resistencia, para garantizar la
estabilidad de la anastomosis postoperatoria.
Yunque formado de una sola pieza, que asegura una mejor forma en “B”
.`,

    // Table visible in the PDF image on page 8 (kept exactly as shown)
    table: {
      headers: [
        "Grapadora",
        "Descripción",
        "Longitud Abierta",
        "Longitud cerrada",
        "Diámetro de corte",
        "Diámetro del cabezal",
        "Fila de grapas",
        "Cantidad de grapas",
      ],
      rows: [
        [
          "MCS-21R3",
          "MIRUS DISP GRAPADORA CIRCULAR 3 FILA 21",
          "4.5MM",
          "1.0 - 2.5 MM",
          "12",
          "21",
          "3",
          "21",
        ],
        [
          "MCS-25R3",
          "MIRUS DISP GRAPADORA CIRCULAR 3 FILA 25",
          "4.5MM",
          "1.0 - 2.5 MM",
          "16",
          "16",
          "3",
          "33",
        ],
        [
          "MCS-29R3",
          "MIRUS DISP GRAPADORA CIRCULAR 3 FILA 29",
          "4.5MM",
          "1.0 - 2.5 MM",
          "20",
          "29",
          "3",
          "36",
        ],
        [
          "MCS-32R3",
          "MIRUS DISP GRAPADORA CIRCULAR 3 FILA 31",
          "4.5MM",
          "1.0 - 2.5 MM",
          "21",
          "31",
          "3",
          "36",
        ],
      ],
    },

    imageCount: 1,
    images: Array.from({ length: 1 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "hemorroidales",
    navProductId: "hemorroidales",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "convecional",

    title: "Grapadora Hemorroidal Desechable-B:",
    description: `Grapadora Hemorroidal Desechable-B:
Tiene interés sobre los procedimientos tradicionales, porque su metodología se
realiza encima de la línea dentada dentro de la vía rectal, incluyendo en menos
nervios.
El mecanismo de la grapadora PPH proporciona dos filas de grapas de titanio en
tamaño de 34 mm en diámetro, que están conectadas a la vía rectal para la
transección y resección del interior del tejido.
Los accesorios que contiene son; anoscopio y dilatador. El anoscopio está
diseñado para ayudar en la aplicación y en al estructura de cadena del bolso
cual va por encima de la línea dentada. Esto consiste en ayudarte y lo que hace
es que toma una sutura de cuerda de bolsa circunferencial que está dentro del
recto.
Base de grapa integrada de
acero inoxidable.
Grapas de titanio.
Hebilla fija.
Mayor profundidad y volumen de
cartucho de grapas.
DHS`,

    // Table visible in the PDF image on page 9
    table: {
      headers: [
        "Código",
        "D.E. (mm)",
        "D.I. ±0.5 (mm)",
        "Altura de Grapa (mm)",
        "Grapas (CANT.)",
      ],
      rows: [
        ["DHS B-32", "32", "23", "4,8", "32"],
        ["DHS B-34", "34", "25", "4,8", "34"],
      ],
    },

    imageCount: 6,
    images: Array.from({ length: 6 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "trocares",
    navProductId: "trocares",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "accesorios",

    title: "Trocar endoscopio desechable sin cuchilla",
    description: `Características:
Entrada óptica
Permite la visualización de capas de tejido durante la inserción
Ala de pájaro
Punta de ala de pájaro única para una inserción fácil y suave Separa el
tejido en vez de cortarlo
Sello interior y exterior
Mantiene la insuflación y acepta una amplia gama de tamaños de
instrumentos
Hilo de estabilidad
Retención de la pared abdominal para mínimos deslizamientos del trocar
Obturador
Diseño robusto para inserción en la pared abdominal con menos fuerza
Serie Kangaroo
Trócar
El trocar endoscópico desechable consiste en un sistema de acceso que
permite que el procedimeinto aparoscópico no tenga problemas.
Procedimientos minimamente invasivos, abdominales, torácicos y
ginecológicos.
Con un simple movimiento de torsión, la punta sin alas de "Bird Wing"
separa el tejido en lugar de cortarlo. Lo que genera una herida más
pequeña, menos traumatismo y un cierre más fácil.
Trocar endoscopio desechable sin cuchilla`,

    // Table visible in the PDF image on page 10
    table: {
      headers: ["Código", "Tamaño (mm)", "Longitud de CANULA (mm)"],
      rows: [
        ["AVTC 5-100", "5", "100"],
        ["AVTC 10-100", "10", "100"],
        ["AVTC 12-100", "12", "100"],
        ["AVTC 15-100", "15", "100"],
      ],
    },

    imageCount: 1,
    images: Array.from({ length: 1 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "aguja-de-veress",
    navProductId: null, // not in your navbar list
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "accesorios",

    title: "Aguja de Veress",
    description: `Aguja de Veress
Los colores rojo y verde indican una mayor
retroalimentación visual al ingresar a la cavidad abdominal.`,

    // Table visible in the PDF image on page 11
    table: {
      headers: ["Código", "Longitud de Trabajo ±5 (mm)"],
      rows: [
        ["VN-120", "120"],
        ["VN-150", "150"],
      ],
    },

    imageCount: 1,
    images: Array.from({ length: 1 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "bolsa-de-especimen",
    navProductId: "bolsa-de-especimen",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "accesorios",

    title: "Bolsa Desechable para Extracción de Muestras:",
    description: `Diseño con anillo flexible que reduce el riesgo de daño en los tejidos.
Disponible en varios tamaños, incluido extra grande, ofreciendo más
opciones para la cirugía.
Bolsa Desechable para Extracción de Muestras:
Se utiliza en cirugías endoscópicas y de pequeña incisión, así como en
cirugías laparoscópicas ginecológicas sin suspensión de neumoperitoneo.`,

    imageCount: 1,
    images: Array.from({ length: 1 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "retractor-de-heridas",
    navProductId: "retractor-de-heridas",
    categoryId: "suturas-mecanicas-y-laparoscopia",
    subcategoryId: "accesorios",

    title: "Túnel Desechable de Asistencia Manual:",
    description: `Túnel Desechable de Asistencia Manual:
Se utiliza en cirugías endoscópicas y de pequeña incisión, así como en
cirugías laparoscópicas ginecológicas sin suspensión de neumoperitoneo.`,

    imageCount: 1,
    images: Array.from({ length: 1 }, () => ({ src: "", alt: "" })),
  },

  {
    id: "ligadura-de-titanio-la-hoja-de-las-tijeras",
    navProductId: null, // not in your navbar list
    categoryId: "selladores-de-vasos",
    subcategoryId: "ultrasonido",

    title: "LIGADURA DE TITANIO LA HOJA DE LAS TIJERAS",
    description: `LIGADURA DE TITANIO LA HOJA DE LAS TIJERAS`,

    imageCount: 7,
    images: Array.from({ length: 7 }, () => ({ src: "", alt: "" })),
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductsByNavProductId(navProductId) {
  return products.filter((p) => p.navProductId === navProductId);
}
