import productos from '../src/data/productos.js';
import fs from 'fs';
import path from 'path';

const names = [
  'Aceite 10W40',
  'Batería AGM',
  'Bomba de aceite',
  'Caja de cambios',
  'Eje de transmisión',
  'Filtro de aceite diesel',
  'Juego de correa y poleas',
  'Kit de sincronización',
  'Palier CV completo',
  'Radiador aluminio',
  'Selector de marchas'
];

// normalize helper similar to src/data/productos.js
function normalizeText(s) {
  return (s || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/gi, ' ')
    .trim()
    .toLowerCase();
}

const IMG_DIR = path.resolve('public', 'img');
const files = fs.existsSync(IMG_DIR) ? fs.readdirSync(IMG_DIR).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f)) : [];

function tokensFrom(text) {
  return normalizeText(text).split(/\s+/).filter(Boolean);
}

function bestImageForName(nombre) {
  const pTokens = tokensFrom(nombre);
  if (pTokens.length === 0) return null;
  const baseCandidate = normalizeText(nombre).replace(/\s+/g, '_');
  for (const ext of ['.webp', '.png', '.jpg', '.jpeg']) {
    const cand = baseCandidate + ext;
    if (files.includes(cand)) return `/img/${cand}`;
  }
  // fallback token matching
  let best = null;
  let bestScore = 0;
  for (const file of files) {
    const base = file.replace(/\.[a-z]+$/i, '').replace(/_/g, ' ');
    const fTokens = tokensFrom(base);
    const common = pTokens.filter(t => fTokens.includes(t)).length;
    const score = pTokens.length > 0 ? common / pTokens.length : 0;
    if (score > bestScore || (score === bestScore && fTokens.length >= (best ? best.tokensLength : 0))) {
      best = { file, score, tokensLength: fTokens.length };
      bestScore = score;
    }
  }
  if (best && best.score > 0) return `/img/${best.file}`;
  return null;
}

for (const q of names) {
  const regex = new RegExp(q.split(/\s+/).map(s => s.replace(/[^a-zA-Z0-9]/g,'')).join('.*'), 'i');
  const prod = productos.find(p => regex.test(p.nombre));
  const computed = bestImageForName(prod ? prod.nombre : q);
  console.log('---');
  console.log('Query:', q);
  if (!prod) { console.log('Product not found'); continue; }
  console.log({ id: prod.id, nombre: prod.nombre, imagen_actual: prod.imagen, imagen_computada: computed });
}
