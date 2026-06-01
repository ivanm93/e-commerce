import productos from '../src/data/productos.js';

function report() {
  const byName = productos.find(p => /radiador/i.test(p.nombre));
  console.log('Product matching /radiador/i:', byName && { id: byName.id, nombre: byName.nombre, imagen: byName.imagen });

  // list all products that point to the same image
  if (byName && byName.imagen) {
    const same = productos.filter(p => p.imagen === byName.imagen).map(p => ({ id: p.id, nombre: p.nombre }));
    console.log(`Products using same imagen (${byName.imagen}):`, same);
  }

  // list products whose imagen path looks suspicious (not /img/ or /src/assets)
  const suspicious = productos.filter(p => p.imagen && !p.imagen.startsWith('/img/') && !p.imagen.startsWith('/src/assets'))
    .map(p => ({ id: p.id, nombre: p.nombre, imagen: p.imagen }));
  console.log('Products with suspicious imagen paths:', suspicious);

  // show a few examples where imagen uses /img/
  const imgExamples = productos.slice(0, 10).map(p => ({ id: p.id, nombre: p.nombre, imagen: p.imagen }));
  console.log('First 10 products (id/nombre/imagen):', imgExamples);
}

report();
