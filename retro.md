# Restrospectiva - Sprint 2
## 1. Comenzar a hacer
- Uso continuo de Live Server: Probar las vistas y enlaces de forma local con la extensión de Live Server en VS Code para detectar errores de renderizado y rutas al instante.
- Validación visual preventiva: Probar el comportamiento de las tarjetas y contenedores en diferentes resoluciones móviles desde las herramientas de desarrollador del navegador antes de dar por terminada una maqueta.
## 2. Hacer más
- Reutilización de clases CSS: Aprovechar aún más las clases globales y centralizadas en `styles.css` para unificar el diseño de componentes similares (como formularios de login/registro y contenedores de productos).
- Seguimiento detallado en Trello: Mantener el tablero de trabajo actualizado tarjeta por tarjeta a medida que avanzamos con los entregables.

## 3. Continuar haciendo
- Metodología Mobile First: Diseñar y maquetar pensando primero en dispositivos móviles para garantizar una excelente experiencia de usuario (UX).
- Mantenimiento de la hoja de estilos unificada: Centralizar todo el CSS del proyecto en un único archivo (`styles.css`) para mantener el código escalable y ordenado.
- Estructura limpia de archivos: Organizar correctamente los HTML dentro de su carpeta correspondientes (`views/`) y los recursos en sus carpetas locales.

## 4. Hacer menos
- Ajustes manuales repetitivos: Evitar escribir código CSS duplicado para elementos que comparten el mismo formato visual (por ejemplo, entre `login.html` y `register.html`).
- Uso de imágenes con dimensiones desiguales: Evitar cargar imágenes sin haber estandarizado o preparado previamente sus proporciones para no generar distorsiones visuales.

## 5. Dejar de hacer
- Uso de rutas absolutas locales (`/`): Dejar de utilizar barras iniciales absolutas que puedan fallar al abrir archivos localmente (`file://`), priorizando siempre rutas relativas (`../`).
- Postergar ajustes visuales secundarios: No acumular detalles estéticos o correcciones de imágenes para el final del sprint.
