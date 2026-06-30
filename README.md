# Lomas de Intiyaco

Landing page en React + Vite para promocionar cabañas turísticas en Intiyaco, Córdoba, Argentina.

## Instalar dependencias

```bash
npm install
```

## Correr localmente

```bash
npm run dev
```

Vite mostrará una URL local, normalmente `http://localhost:5173`.

## Cambiar textos, datos, SEO y enlaces

Toda la información editable está en:

```text
src/data/siteData.js
```

Desde ese archivo podés cambiar:

- Nombre del sitio.
- Title, meta description, keywords y canonical URL.
- Dominio principal.
- Subtítulo y textos principales.
- Número y mensaje de WhatsApp.
- Instagram.
- Ubicación, coordenadas y links de Google Maps.
- Servicios.
- Cabañas.
- Preguntas frecuentes.
- Imágenes y textos alternativos para SEO/accesibilidad.
- Datos de Schema.org para el negocio.

El mensaje prearmado actual de WhatsApp es:

```text
Hola, quería consultar disponibilidad en Lomas de Intiyaco.
```

## Cargar imágenes

Crear esta carpeta si todavía no existe:

```text
public/images
```

Luego cargar las imágenes con estos nombres:

```text
hero.jpg
cabana-1.jpg
cabana-2.jpg
galeria-1.jpg
galeria-2.jpg
galeria-3.jpg
galeria-4.jpg
galeria-5.jpg
galeria-6.jpg
```

Si alguna imagen no existe, la web muestra un placeholder visual para que la página siga presentable.

## Search Console, sitemap y dominio propio

1. Configurar el dominio propio en el proveedor de hosting, por ejemplo Vercel, y verificar que cargue con HTTPS.
2. Actualizar `canonicalUrl` y `domain` en `src/data/siteData.js` con el dominio final.
3. Actualizar también las URLs absolutas de `public/sitemap.xml` y `public/robots.txt` para que coincidan con ese dominio.
4. Publicar el sitio y comprobar que estas rutas respondan correctamente:
   - `https://tu-dominio.com/sitemap.xml`
   - `https://tu-dominio.com/robots.txt`
5. Entrar a Google Search Console y agregar la propiedad del dominio o de la URL.
6. Completar la verificación que indique Google. En Vercel suele ser práctico usar un registro DNS TXT en el dominio.
7. En Search Console, ir a `Sitemaps` y enviar:

```text
https://tu-dominio.com/sitemap.xml
```

Después del primer deploy con dominio final, conviene inspeccionar la URL principal en Search Console y solicitar indexación.

## Build de producción

```bash
npm run build
```

El resultado queda en la carpeta `dist`.

## Desplegar en Vercel

1. Subir el proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. Importar el repositorio desde Vercel.
3. Usar la configuración automática de Vite:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

No requiere backend, base de datos ni variables de entorno para funcionar.
