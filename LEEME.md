# Bio-Bomba: Edición Clásica

Bomba estilo Keep Talking and Nobody Explodes: se gira para ver sus lados (número de serie, baterías, indicadores y puertos) y tiene 8 tipos de módulo más uno de vigilancia. El manual es siempre el mismo.

## Archivos
- `index.html` — la app completa (bomba, manual, historial y registro).
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` — para instalarla y usarla sin internet.

## Publicar en GitHub Pages
1. En tu repositorio `gabrielgjg.github.io`, presiona Add file > Upload files.
2. Arrastra la carpeta `bomba-clasica` completa y presiona Commit changes.
3. Abre `https://gabrielgjg.github.io/bomba-clasica/`.

## Registro en tu hoja única
Si esta computadora ya tiene guardada la URL de Bio-Bomba, la toma sola. Si no, pégala en «Registro en Google Sheets». Las rondas se guardan en la pestaña «BioBombaClasica», que se crea sola.

## Controles
- Flechas izquierda y derecha, o los botones ◀ ▶: girar la bomba.
- P: pausa.

## Actualizar
Si cambias `index.html`, cambia también `bbclasica-v5` por `bbclasica-v2` en `sw.js`.
