# Dispromed Comercial - Catálogo de Productos

Sitio web catálogo para Dispromed Comercial, distribuidora especializada en insumos médicos y equipamiento hospitalario.

## 🚀 Stack Tecnológico

- **React 19** - Librería UI
- **Vite 7** - Build tool y dev server
- **React Router v6** - Enrutamiento
- **Tailwind CSS v4** - Estilos
- **Embla Carousel** - Carrusel del hero

## 📋 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Navegación con mega-menú (desktop) y drawer (mobile)
- ✅ Filtros de productos por categoría y subcategoría
- ✅ Paginación mediante URL params
- ✅ Lazy loading de imágenes y rutas
- ✅ Accesibilidad (a11y) con roles ARIA y navegación por teclado
- ✅ SEO-friendly con meta tags
- ✅ Optimización de performance con React.lazy + Suspense
- ✅ SPA con fallback para Apache (.htaccess incluido)

## 🎨 Paleta de Colores

**Uso estricto de estos colores únicamente:**

- `brand-100`: #89ff54
- `brand-200`: #62b93c
- `brand-300`: #469720
- `brand-400`: #2f6a15
- `ink`: #101215 (textos)
- `white`: #ffffff

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Navbar.jsx
│   ├── MegaMenu.jsx
│   ├── Drawer.jsx
│   ├── CategorySidebar.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── Pagination.jsx
│   ├── Breadcrumbs.jsx
│   ├── HeroCarousel.jsx
│   ├── Section.jsx
│   └── Footer.jsx
├── pages/              # Páginas
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Catalogos.jsx
│   ├── Contacto.jsx
│   └── Novedades.jsx
├── data/               # Datos estáticos
│   ├── products.json
│   └── categories.json
├── lib/                # Utilidades
│   ├── types.js
│   ├── useQueryState.js
│   └── filters.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🛠️ Instalación y Desarrollo

### Requisitos

- Node.js 18+
- npm 9+

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build de Producción

```bash
npm run build
```

Los archivos optimizados se generan en el directorio `dist/`.

### Preview de Producción

```bash
npm run preview
```

### Linter

```bash
npm run lint
```

## 🌐 Rutas

- `/` - Home (Hero, Sobre Nosotros, Líneas Destacadas, Novedades)
- `/productos` - Listado de productos con filtros
- `/productos/:slug` - Detalle de producto
- `/catalogos` - Catálogos descargables
- `/contacto` - Información de contacto y formulario
- `/novedades` - Noticias y actualizaciones

## 🔍 Funcionalidades de Filtrado

La página de productos soporta los siguientes parámetros URL:

- `?category=descartables` - Filtrar por categoría
- `?category=instrumental&sub=suturas` - Filtrar por categoría y subcategoría
- `?sort=title-asc` - Ordenar A-Z (o title-desc para Z-A)
- `?limit=12` - Cantidad de productos por página
- `?offset=0` - Offset para paginación

## 📦 Datos

Los productos y categorías se cargan desde archivos JSON estáticos:

- `src/data/products.json` - 10 productos de ejemplo
- `src/data/categories.json` - Categorías y subcategorías

### Estructura de Producto

```json
{
  "id": "1",
  "slug": "producto-ejemplo",
  "title": "Título del Producto",
  "description": "Descripción opcional",
  "image": "URL de imagen",
  "category": "Categoría",
  "subcategory": "Subcategoría opcional",
  "priceDisplay": "Consultar",
  "badges": ["Badge 1", "Badge 2"],
  "table": {
    "headers": ["Característica", "Valor"],
    "rows": [
      ["Prop 1", "Valor 1"],
      ["Prop 2", "Valor 2"]
    ]
  }
}
```

## 🚀 Deploy en LatinCloud (Apache)

### Configuración

1. Build del proyecto:

```bash
npm run build
```

2. Subir contenido de `dist/` al servidor via FTP/SFTP

3. El archivo `.htaccess` ya está incluido en `public/` y se copia automáticamente al build

### .htaccess

El archivo `.htaccess` ya está configurado para redirigir todas las rutas a `index.html` (necesario para SPA):

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## 📱 Responsive

- **Mobile**: Drawer lateral para navegación, filtros en dropdowns, 1 producto por fila
- **Tablet**: 2 productos por fila
- **Desktop**: Mega-menú, sidebar de filtros fija, hasta 3 productos por fila

## ♿ Accesibilidad

- Navegación por teclado funcionando
- Focus states visibles
- Roles y atributos ARIA apropiados
- Labels en todos los controles de formulario
- Alt text descriptivo en imágenes
- Contraste de colores cumple WCAG AA

## 📞 Información de Contacto

**Dispromed Comercial**

- Dirección: Allende 3038 - CABA - Argentina
- Teléfono: [+54 11 4566-1085](tel:+541145661085)
- Email: [ventas@dispromedcomercial.com.ar](mailto:ventas@dispromedcomercial.com.ar)

## 📝 Notas de Implementación

- Sin backend: todos los datos son estáticos (JSON)
- Sin carrito de compras: catálogo informativo solamente
- Formulario de contacto es demo (no envía emails)
- Imágenes de hero son temporales de Unsplash
- Botones de descarga de catálogos muestran alert (pendiente implementación real)

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Ejecuta ESLint

## 📄 Licencia

Copyright © 2025 Dispromed Comercial. Todos los derechos reservados.
