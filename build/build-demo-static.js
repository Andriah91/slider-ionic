const fs = require('fs');
const sass = require('sass');

// HTML
let indexContent = fs.readFileSync('./demo-vite/index.html', 'utf-8');
indexContent = indexContent
  .replace(/.\/images/g, '../assets/images')
  .replace('favicon', '../assets/favicon')
  .replace(
    '<title>',
    `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
  <link rel="stylesheet" href="./spring-slider.css">
  <link rel="stylesheet" href="./main.css">
  <title>`,
  )
  .replace(
    `<script type="module" src="/main.js"></script>`,
    `
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="./spring-slider.js"></script>
  <script src="./main.js"></script>
`,
  );

// CSS
const scssContentLib = fs
  .readFileSync('./demo-vite/spring-slider.scss', 'utf-8')
  .split('\n')
  .filter((l) => !l.startsWith('@import'))
  .join('\n');
const cssContentLib = sass.compileString(scssContentLib).css;

const scssContent = fs
  .readFileSync('./demo-vite/main.scss', 'utf-8')
  .split('\n')
  .filter((l) => !l.startsWith('@import'))
  .join('\n');
const cssContent = sass.compileString(scssContent).css;

// JS
let jsContentLib = fs.readFileSync('./demo-vite/spring-slider.js', 'utf-8');
jsContentLib = jsContentLib
  .split('\n')
  .filter((l) => !l.startsWith('import'))
  .join('\n')
  .replace('modules: [EffectCreative, ...(extendParams.modules || [])],', '')
  .replace('export default ', '');

let jsContent = fs.readFileSync('./demo-vite/main.js', 'utf-8');
jsContent = jsContent
  .split('\n')
  .filter(
    (line) =>
      !line.startsWith('import') &&
      !line.startsWith('/**') &&
      !line.startsWith(' */') &&
      !line.startsWith(' * ') &&
      line !== ' *',
  )
  .join('\n')
  .replace(/modules: \[([A-Z0-9a-z, ]*)\],/i, '');

// WRITE
fs.writeFileSync('./demo-static/index.html', indexContent);
fs.writeFileSync('./demo-static/spring-slider.css', cssContentLib);
fs.writeFileSync('./demo-static/main.css', cssContent);
fs.writeFileSync('./demo-static/spring-slider.js', jsContentLib);
fs.writeFileSync('./demo-static/main.js', jsContent);
