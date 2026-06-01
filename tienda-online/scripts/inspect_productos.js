import fs from 'fs';
import path from 'path';
import productos from '../src/data/productos.js';

const srcPath = path.resolve('src', 'data', 'productos.js');
const raw = fs.readFileSync(srcPath, 'utf8');

console.log('--- Raw snippet around m4 ---');
const idx = raw.indexOf("{ id: 'm4'");
if (idx !== -1) console.log(raw.slice(Math.max(0, idx-200), idx+200));
else console.log('m4 not found in raw file');

console.log('\n--- Imported product from module ---');
const imported = productos.find(p => p.id === 'm4');
console.log(imported);

console.log('\n--- First 20 products exported (id and imagen) ---');
console.log(productos.slice(0,20).map(p => ({id: p.id, nombre: p.nombre, imagen: p.imagen}))); 
