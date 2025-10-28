# 🚀 Guía de Deployment

## Checklist Pre-Deploy

- ✅ Build exitoso sin errores
- ✅ Linter sin warnings ni errors
- ✅ Todos los componentes implementados
- ✅ Routing configurado correctamente
- ✅ .htaccess incluido para Apache
- ✅ Responsive en mobile, tablet y desktop
- ✅ Accesibilidad implementada
- ✅ Imágenes con lazy loading
- ✅ SEO meta tags configurados

## Pasos para Deploy en LatinCloud

### 1. Build de Producción

```bash
npm run build
```

Esto genera el directorio `dist/` con todos los archivos optimizados.

### 2. Verificar Build Local

```bash
npm run preview
```

Navega a http://localhost:4173 y verifica que todo funcione correctamente.

### 3. Subir a Servidor

Mediante FTP/SFTP, sube todo el contenido del directorio `dist/` a la raíz de tu hosting:

```
dist/
├── index.html          → /index.html
├── assets/            → /assets/
├── vite.svg           → /vite.svg
└── .htaccess          → /.htaccess
```

### 4. Configuración del Servidor

El archivo `.htaccess` ya está incluido y configurado para:

- Redirigir todas las rutas a `index.html` (SPA routing)
- Mantener acceso a archivos estáticos

Si el hosting no respeta el `.htaccess` automáticamente, asegurate de que esté en la raíz y que el módulo `mod_rewrite` de Apache esté activo.

### 5. Verificación Post-Deploy

Verifica las siguientes URLs en producción:

- ✅ `/` - Home carga correctamente
- ✅ `/productos` - Listado con filtros funciona
- ✅ `/productos/jeringa-descartable-5ml` - Detalle de producto
- ✅ `/catalogos` - Página de catálogos
- ✅ `/contacto` - Formulario de contacto
- ✅ `/novedades` - Listado de novedades
- ✅ Refresh en cualquier ruta interna no da 404

### 6. Testing en Producción

- [ ] Navegación entre páginas funciona
- [ ] Filtros de productos persisten en URL
- [ ] Mega-menú funciona en desktop
- [ ] Drawer funciona en mobile
- [ ] Imágenes cargan correctamente
- [ ] Links de contacto funcionan (tel: y mailto:)
- [ ] Responsive funciona en todos los tamaños

## Troubleshooting

### Error 404 en rutas internas

**Problema**: Al recargar una ruta como `/productos` obtenés 404.

**Solución**: Verifica que el archivo `.htaccess` esté en la raíz y que `mod_rewrite` esté habilitado en Apache.

### Estilos no se aplican

**Problema**: La página se ve sin estilos.

**Solución**: Verifica que la ruta `base: '/'` en `vite.config.js` coincida con la ubicación real en el servidor. Si el sitio está en un subdirectorio, ajusta el base.

### Imágenes no cargan

**Problema**: Las imágenes de Unsplash no cargan.

**Solución**: Las imágenes actuales son de Unsplash (requieren internet). Para producción, considera:

1. Descargar y hospedar las imágenes localmente en `/public/images/`
2. Actualizar las URLs en `products.json` y `HeroCarousel.jsx`

## Optimizaciones Adicionales (Opcional)

### 1. Comprimir Assets

Si el hosting no tiene compresión automática, considera usar:

- gzip para archivos estáticos
- Servir assets con headers de cache apropiados

### 2. CDN

Para mejor performance global, considera usar un CDN para servir los assets estáticos.

### 3. Analytics

Agregar Google Analytics o similar para trackear visitas:

```html
<!-- En index.html antes del </head> -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
```

### 4. Imágenes Propias

Reemplazar las imágenes de Unsplash con imágenes reales de productos:

1. Agregar imágenes a `public/images/products/`
2. Actualizar `src/data/products.json` con las nuevas rutas
3. Actualizar slides del hero en `src/components/HeroCarousel.jsx`

## Contacto de Soporte

Para issues técnicos post-deployment, revisar:

- Logs del servidor Apache
- Console del navegador para errores JS
- Network tab para verificar que todos los assets carguen

## URLs Importantes

- **Producción**: [TU_DOMINIO]
- **Repositorio**: [TU_REPO_GIT]
- **LatinCloud Panel**: [URL_PANEL_HOSTING]

---

**Fecha de último deploy**: _Pendiente_
**Versión**: 1.0.0
