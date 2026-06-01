import fs from 'fs';
import path from 'path';
import productos from '../src/data/productos.js';

const IMG_DIR = path.resolve('public', 'img');
const files = fs.readdirSync(IMG_DIR).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));

function normalizeText(s) {
  return (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .trim()
    .toLowerCase();
}

function tokensFrom(text) {
  return normalizeText(text).split(/\s+/).filter(Boolean);
}

function bestImageFor(nombre) {
  const pTokens = tokensFrom(nombre);
  if (pTokens.length === 0) return null;

  let best = null;
  let bestScore = 0;

  for (const file of files) {
    const base = file.replace(/\.[a-z]+$/i, '').replace(/_/g, ' ');
    const fTokens = tokensFrom(base);
    const common = pTokens.filter(t => fTokens.includes(t)).length;
    const score = common / pTokens.length;
    if (score > bestScore || (score === bestScore && fTokens.length >= (best ? best.tokensLength : 0))) {
      best = { file, score, tokensLength: fTokens.length };
      bestScore = score;
    }
  }

  if (best && best.score > 0) return `/img/${best.file}`;
  return null;
}

// find product with 'radiador'
const product = productos.find(p => /radiador/i.test(p.nombre));
console.log('Imported product:', product && { id: product.id, nombre: product.nombre, imagen: product.imagen });
const best = bestImageFor(product.nombre);
console.log('Computed best image from public/img:', best);

// print token analysis
console.log('product tokens:', tokensFrom(product.nombre));
for (const f of files) {
  if (/radiador/i.test(f) || /radiador/i.test(f.replace(/_/g,' '))) {
    console.log('candidate file:', f, 'tokens:', tokensFrom(f.replace(/\.[a-z]+$/i, '').replace(/_/g,' ')));
  }
}

// show any other products that got different imagen than computed
const diffs = productos
  .map(p => ({ id: p.id, nombre: p.nombre, imagen: p.imagen, computed: bestImageFor(p.nombre) }))
  .filter(x => x.imagen !== x.computed);

console.log('Products with different imagen than computed (sample up to 20):', diffs.slice(0,20));
