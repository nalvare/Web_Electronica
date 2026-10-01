# Comunidad Electrónica UNSAM

Primera versión descargable del portal de Ingeniería Electrónica de la ECyT-UNSAM, preparada para Vercel.

## Ver el sitio antes de publicarlo

Descomprimí el ZIP y abrí `public/index.html` con tu navegador. Las páginas, los estilos, la búsqueda de materias y las descargas funcionan sin instalar programas y sin conexión. Los enlaces externos requieren internet.

Para probarlo con un servidor local, si tenés Node.js 20 o superior:

```bash
npm run build
npm start
```

Abrí http://localhost:4173. No es necesario ejecutar `npm install`: el proyecto no tiene dependencias.

## Publicar mediante GitHub y Vercel

1. Creá un repositorio en https://github.com/new. Podés elegir público o privado, según las condiciones de tu cuenta y la integración que uses.
2. En GitHub, usá **uploading an existing file** o **Add file → Upload files**. Arrastrá el contenido de la carpeta descomprimida: `package.json`, `vercel.json`, `build.mjs`, `serve.mjs`, y las carpetas `contenido`, `assets`, `documentos`, `public` y `herramientas`. Subí los archivos descomprimidos, no el ZIP. `package.json` debe quedar en la raíz del repositorio, no dentro de una carpeta extra.
3. Confirmá la carga con **Commit changes**.
4. En https://vercel.com/new, conectá GitHub e importá el repositorio.
5. Revisá estos ajustes. También están declarados en `vercel.json`:

| Ajuste | Valor |
| --- | --- |
| Framework Preset | Other |
| Root Directory | Raíz del repositorio |
| Build Command | npm run build |
| Output Directory | public |
| Variables de entorno | Ninguna |

6. Elegí **Deploy**. Vercel generará la URL del sitio.
7. Revisá las páginas y los cuatro documentos descargables antes de difundir el enlace.

Vercel permite importar repositorios y generar una nueva publicación al actualizar la rama de producción. Para trabajar con cambios sin publicarlos todavía, usá una rama distinta y revisá su vista previa antes de integrarla en `main`.

Documentación consultada el 1 de octubre de 2026:

- https://vercel.com/docs/git
- https://vercel.com/docs/builds/configure-a-build
- https://vercel.com/docs/project-configuration/vercel-json

El proyecto no presupone un plan de Vercel específico. Revisá las condiciones vigentes de colaboración y uso al configurar la cuenta. No compartan contraseñas: usen las invitaciones y permisos que correspondan a sus cuentas.

## Actualizar el contenido sin editar código

1. Abrí `herramientas/editor-local.html` en tu computadora.
2. Cargá una copia **actualizada** de `contenido/sitio.json`. Si Nico o Gabriel cambiaron el repositorio, descargá primero la nueva versión.
3. Editá la información general o agregá noticias, electivas, propuestas de PPS/PFI y actividades de CREA.
4. Marcá **Publicado** solamente cuando el contenido esté listo. Los elementos sin esa marca no aparecen en el sitio.
5. Elegí **Descargar sitio.json**. Reemplazá el archivo de la carpeta `contenido` por esa descarga, conservando el nombre `sitio.json`.
6. Actualizá ese mismo archivo en GitHub. En Vercel, cada publicación vuelve a generar las páginas desde los datos.

El editor es una herramienta local: no inicia sesión, no escribe en GitHub, no guarda en el servidor y no publica por sí solo. No se incluye en la carpeta pública del sitio. La versión inicial no tiene un panel administrativo alojado ni cuentas de estudiantes.

Para crear una vista local después de cambiar el contenido, ejecutá `npm run build`. Abrir el HTML ya generado sin reconstruir mostrará la versión anterior.

## Incorporar fotos y documentos

Los documentos de PPS están en `documentos/`. Se conservan sin modificaciones, en su formato original `.doc`. Pueden abrirse con Word o un editor compatible.

Para sumar documentos:

1. Guardá el archivo en `documentos/`, con un nombre sin espacios ni tildes. Ejemplo: `pfi-guia.pdf`.
2. Agregá el registro correspondiente en `contenido/sitio.json`. Ejemplo dentro de `documentosPFI`:

```json
{
  "titulo": "Guía de PFI",
  "descripcion": "Condiciones y procedimiento de presentación.",
  "archivo": "documentos/pfi-guia.pdf",
  "version": "Versión aprobada"
}
```

3. Para documentos del nuevo plan y transición, usá `documentosPlan` con la misma estructura.
4. Volvé a generar o publicar el sitio. Usá únicamente documentos que puedan difundirse.

Para fotos, podés guardar archivos en `assets/` y adaptar el diseño cuando cuenten con material seleccionado. El sitio actual usa dibujos SVG, sin fotos de ejemplo ni enlaces a imágenes externas.

## Organización del proyecto

| Archivo o carpeta | Función |
| --- | --- |
| contenido/sitio.json | Contactos, CREA, noticias, electivas, propuestas y documentos |
| contenido/plan.json | Tabla del plan publicado y referencia de la fuente |
| build.mjs | Genera las páginas HTML y copia los archivos públicos |
| assets/styles.css | Diseño y adaptación a celulares |
| assets/app.js | Menú móvil y filtros de materias |
| documentos/ | Archivos descargables originales |
| herramientas/editor-local.html | Editor local de contenido |
| public/ | Sitio generado, listo para abrir o alojar |
| vercel.json | Configuración de publicación |

## Fuentes y alcance

- Plan: página de Ingeniería Electrónica de la ECyT, consultada el 1 de octubre de 2026: https://www.unsam.edu.ar/escuelas/ecyt/89/ciencia/ingenieria-electronica
- PPS: reglamento V02 y anexos 1, 2 y 3 suministrados por Gabriel. El resumen identifica artículos y mantiene las descargas de los originales. No se mezcló con el borrador de reglamento nuevo.
- CREA: descripción y enlace de Instagram suministrados por Gabriel.
- WhatsApp: canal suministrado por Gabriel.
- PFI, electivas y oportunidades: se informa la ausencia de documentación/oferta publicada; no se crearon propuestas ficticias.

Esta entrega incluye ocho páginas, navegación móvil, tabla del plan con filtros, cuatro descargas de PPS, enlaces de contacto y editor local. El planificador de trayectorias, un foro y las cuentas con acceso al servidor quedan para una etapa posterior. Para sumar un foro existente, completá el campo `foro` de `contenido/sitio.json` con su URL HTTPS: aparecerá un acceso en Comunidad.

La tabla del plan permite consultar datos, pero no calcula habilitación académica. No integra SIU Guaraní ni almacena datos personales de estudiantes. No se incluyeron rastreadores ni servicios externos en el código.

Antes del lanzamiento, Gabriel y Nico deben revisar el resumen de PPS, confirmar los contactos y definir el nombre definitivo y la identidad visual. La marca gráfica IE es propia de esta maqueta y no reproduce un logo institucional.
