const PRODUCTOS = [
  // Motor y transmisión
  { id: 'm1', nombre: 'Bomba de aceite OEM', categoria: 'Motor y transmisión', precio: 18500, descripcion: 'Bomba de aceite para mantener la presión óptima del motor.', stock: 10, imagen: '/img/bomba_aceite_oem.webp' },
  { id: 'm2', nombre: 'Juego de correa y poleas', categoria: 'Motor y transmisión', precio: 7600, descripcion: 'Kit de correa y poleas de alta resistencia.', stock: 6, imagen: '/img/juego_correa_poleas.webp' },
  { id: 'm3', nombre: 'Termostato reforzado', categoria: 'Motor y transmisión', precio: 2200, descripcion: 'Termostato con mejor control térmico para motores exigidos.', stock: 14, imagen: '/img/termostato_reforzado.webp' },
  { id: 'm4', nombre: 'Radiador aluminio', categoria: 'Motor y transmisión', precio: 28900, descripcion: 'Radiador de aluminio para enfriamiento eficiente.', stock: 3, imagen: '/img/radiador_aluminio.webp' },
  { id: 'm5', nombre: 'Kit de sincronización', categoria: 'Motor y transmisión', precio: 15400, descripcion: 'Incluye cadena, tensores y guías para sincronización.', stock: 5, imagen: '/img/kit_sincronizacion.webp' },
  { id: 'm6', nombre: 'Palier CV completo', categoria: 'Motor y transmisión', precio: 11200, descripcion: 'Palier de transmisión con junta CV incluida.', stock: 7, imagen: '/img/palier_completo.webp' },
  { id: 'm7', nombre: 'Caja de cambios (reman.)', categoria: 'Motor y transmisión', precio: 78900, descripcion: 'Caja de cambios reacondicionada, probada y garantizada.', stock: 2, imagen: '/img/caja_cambios_reman.webp' },
  { id: 'm8', nombre: 'Selector de marchas', categoria: 'Motor y transmisión', precio: 3950, descripcion: 'Mecanismo selector para transmisión manual.', stock: 9, imagen: '/img/selector_marchas.webp' },
  { id: 'm9', nombre: 'Eje de transmisión', categoria: 'Motor y transmisión', precio: 16400, descripcion: 'Eje de transmisión equilibrado y soldado.', stock: 4, imagen: '/img/eje_transmision.webp' },
  { id: 'm10', nombre: 'Juego de cojinetes de cigüeñal', categoria: 'Motor y transmisión', precio: 6300, descripcion: 'Cojinetes de alta durabilidad para cigüeñal.', stock: 11, imagen: '/public/img/juego_cojinetes_ciguenal.webp' },
  { id: 'm11', nombre: 'Volante motor liviano', categoria: 'Motor y transmisión', precio: 21900, descripcion: 'Volante motor de aluminio para respuesta deportiva.', stock: 1, imagen: '/public/img/volante_motor_liviano.webp' },
  { id: 'm12', nombre: 'Palanca de embrague', categoria: 'Motor y transmisión', precio: 2200, descripcion: 'Palanca y mecanismo de embrague resistentes.', stock: 0, imagen: '/public/img/palanca_embrague.webp' },

  // Frenos y suspensión
  { id: 'f1', nombre: 'Juego pastillas delanteras', categoria: 'Frenos y suspensión', precio: 8900, descripcion: 'Pastillas con material de fricción optimizado.', stock: 12, imagen: '/src/assets/hero.png' },
  { id: 'f2', nombre: 'Disco ventilado 280mm', categoria: 'Frenos y suspensión', precio: 12400, descripcion: 'Disco ventilado para mayor disipación de calor.', stock: 8, imagen: '/src/assets/hero.png' },
  { id: 'f3', nombre: 'Pinza de freno completa', categoria: 'Frenos y suspensión', precio: 15800, descripcion: 'Pinza con pistón único, sellos reemplazables.', stock: 3, imagen: '/src/assets/hero.png' },
  { id: 'f4', nombre: 'Amortiguador delantero (par)', categoria: 'Frenos y suspensión', precio: 13800, descripcion: 'Amortiguadores para conducción confortable.', stock: 9, imagen: '/src/assets/hero.png' },
  { id: 'f5', nombre: 'Suspensión deportiva kit', categoria: 'Frenos y suspensión', precio: 45900, descripcion: 'Kit de muelles y amortiguadores para manejo deportivo.', stock: 2, imagen: '/src/assets/hero.png' },
  { id: 'f6', nombre: 'Cable de freno de mano', categoria: 'Frenos y suspensión', precio: 2100, descripcion: 'Cable resistente para freno de estacionamiento.', stock: 15, imagen: '/src/assets/hero.png' },
  { id: 'f7', nombre: 'Cojinete de rueda', categoria: 'Frenos y suspensión', precio: 4200, descripcion: 'Cojinete sellado para mayor vida útil.', stock: 18, imagen: '/src/assets/hero.png' },
  { id: 'f8', nombre: 'Bieleta de dirección', categoria: 'Frenos y suspensión', precio: 3300, descripcion: 'Bieleta para control preciso de la dirección.', stock: 10, imagen: '/src/assets/hero.png' },
  { id: 'f9', nombre: 'Disco trasero 260mm', categoria: 'Frenos y suspensión', precio: 9800, descripcion: 'Disco trasero macizo de larga duración.', stock: 6, imagen: '/src/assets/hero.png' },
  { id: 'f10', nombre: 'Latiguillo de freno reforzado', categoria: 'Frenos y suspensión', precio: 2700, descripcion: 'Latiguillo de alta presión con revestimiento.', stock: 20, imagen: '/src/assets/hero.png' },
  { id: 'f11', nombre: 'Silentblock de suspensión', categoria: 'Frenos y suspensión', precio: 1500, descripcion: 'Silentblock para reducir vibraciones.', stock: 25, imagen: '/src/assets/hero.png' },
  { id: 'f12', nombre: 'Soporte motor lateral', categoria: 'Frenos y suspensión', precio: 6400, descripcion: 'Soporte para motor y absorción de vibraciones.', stock: 0, imagen: '/src/assets/hero.png' },

  // Eléctrico y electrónico
  { id: 'e1', nombre: 'Batería AGM 60Ah', categoria: 'Eléctrico y electrónico', precio: 25900, descripcion: 'Batería AGM de alta descarga y larga vida.', stock: 7, imagen: '/public/img/bateria_agm_60ah.webp' },
  { id: 'e2', nombre: 'Alternador 90A', categoria: 'Eléctrico y electrónico', precio: 19800, descripcion: 'Alternador con regulador integrado.', stock: 4, imagen: '/public/img/alternador_90a.webp' },
  { id: 'e3', nombre: 'Motor de arranque', categoria: 'Eléctrico y electrónico', precio: 14200, descripcion: 'Motor de arranque con engranaje reforzado.', stock: 5, imagen: '/public/img/motor_arranque.webp' },
  { id: 'e4', nombre: 'Sensor MAP', categoria: 'Eléctrico y electrónico', precio: 3700, descripcion: 'Sensor MAP para control de mezcla aire/combustible.', stock: 13, imagen: '/public/img/sensor_map.webp' },
  { id: 'e5', nombre: 'Modulo ECU (reman.)', categoria: 'Eléctrico y electrónico', precio: 45900, descripcion: 'Unidad de control electrónico reprogramada.', stock: 1, imagen: '/public/img/modulo_ecu.webp' },
  { id: 'e6', nombre: 'Juego de bujías iridio', categoria: 'Eléctrico y electrónico', precio: 2890, descripcion: 'Bujías iridio para mejor chispa y ahorro.', stock: 30, imagen: '/public/img/juego_bujias_iridio.webp' },
  { id: 'e7', nombre: 'Sensor de temperatura', categoria: 'Eléctrico y electrónico', precio: 1200, descripcion: 'Sensor de temperatura del refrigerante.', stock: 16, imagen: '/src/assets/hero.png' },
  { id: 'e8', nombre: 'Cableado principal', categoria: 'Eléctrico y electrónico', precio: 5400, descripcion: 'Faisceau principal para modelos compatibles.', stock: 3, imagen: '/src/assets/hero.png' },
  { id: 'e9', nombre: 'Interruptor de arranque', categoria: 'Eléctrico y electrónico', precio: 1900, descripcion: 'Interruptor de encendido con llave original.', stock: 9, imagen: '/src/assets/hero.png' },
  { id: 'e10', nombre: 'Módulo faros LED', categoria: 'Eléctrico y electrónico', precio: 12990, descripcion: 'Conversión a LED con drivers incluidos.', stock: 2, imagen: '/src/assets/hero.png' },
  { id: 'e11', nombre: 'Relé multifunción', categoria: 'Eléctrico y electrónico', precio: 800, descripcion: 'Relé para circuitos electrónicos auxiliares.', stock: 40, imagen: '/src/assets/hero.png' },
  { id: 'e12', nombre: 'Sensor O2 (lambda)', categoria: 'Eléctrico y electrónico', precio: 4990, descripcion: 'Sensor de oxígeno para control de emisiones.', stock: 0, imagen: '/src/assets/hero.png' },

  // Carrocería
  { id: 'c1', nombre: 'Paragolpes delantero', categoria: 'Carrocería', precio: 19500, descripcion: 'Paragolpes pintado para reemplazo directo.', stock: 6, imagen: '/src/assets/hero.png' },
  { id: 'c2', nombre: 'Puerta delantera izquierda', categoria: 'Carrocería', precio: 45900, descripcion: 'Puerta completa con cerradura y guía.', stock: 2, imagen: '/src/assets/hero.png' },
  { id: 'c3', nombre: 'Capó reforzado', categoria: 'Carrocería', precio: 32900, descripcion: 'Capó de acero con tratamiento anticorrosión.', stock: 1, imagen: '/src/assets/hero.png' },
  { id: 'c4', nombre: 'Espejo lateral eléctrico', categoria: 'Carrocería', precio: 6200, descripcion: 'Espejo con ajuste eléctrico y calefacción.', stock: 0, imagen: '/src/assets/hero.png' },
  { id: 'c5', nombre: 'Juego manijas externas', categoria: 'Carrocería', precio: 2100, descripcion: 'Manijas cromadas para puertas.', stock: 18, imagen: '/src/assets/hero.png' },
  { id: 'c6', nombre: 'Junta paragolpes', categoria: 'Carrocería', precio: 750, descripcion: 'Junta de sellado para paragolpes.', stock: 50, imagen: '/src/assets/hero.png' },
  { id: 'c7', nombre: 'Aleta delantera derecha', categoria: 'Carrocería', precio: 12500, descripcion: 'Aleta metálica lista para pintar.', stock: 4, imagen: '/src/assets/hero.png' },
  { id: 'c8', nombre: 'Porta patente', categoria: 'Carrocería', precio: 450, descripcion: 'Porta patente trasero con iluminación.', stock: 30, imagen: '/src/assets/hero.png' },
  { id: 'c9', nombre: 'Tapa baúl', categoria: 'Carrocería', precio: 17900, descripcion: 'Tapa de baúl con amortiguadores incluidos.', stock: 2, imagen: '/src/assets/hero.png' },
  { id: 'c10', nombre: 'Retrovisor interior', categoria: 'Carrocería', precio: 950, descripcion: 'Retrovisor interior antideslumbrante.', stock: 14, imagen: '/src/assets/hero.png' },
  { id: 'c11', nombre: 'Embellecedor lateral', categoria: 'Carrocería', precio: 490, descripcion: 'Embellecedor plástico para lateral.', stock: 40, imagen: '/src/assets/hero.png' },
  { id: 'c12', nombre: 'Cristal delantero', categoria: 'Carrocería', precio: 25900, descripcion: 'Cristal parabrisas con banda de tintado.', stock: 0, imagen: '/src/assets/hero.png' },

  // Escape y admisión
  { id: 'ex1', nombre: 'Silencioso trasero', categoria: 'Escape y admisión', precio: 12200, descripcion: 'Silencioso con recubrimiento anticorrosión.', stock: 7, imagen: '/src/assets/hero.png' },
  { id: 'ex2', nombre: 'Colector de escape', categoria: 'Escape y admisión', precio: 20900, descripcion: 'Colector de escape en acero inoxidable.', stock: 2, imagen: '/src/assets/hero.png' },
  { id: 'ex3', nombre: 'Filtro de admisión deportivo', categoria: 'Escape y admisión', precio: 4590, descripcion: 'Filtro de alto flujo para mayor respuesta.', stock: 20, imagen: '/src/assets/hero.png' },
  { id: 'ex4', nombre: 'Catalizador (reman.)', categoria: 'Escape y admisión', precio: 65900, descripcion: 'Catalizador reacondicionado, homologado.', stock: 1, imagen: '/src/assets/hero.png' },
  { id: 'ex5', nombre: 'Tubo intermedio', categoria: 'Escape y admisión', precio: 8200, descripcion: 'Tubo intermedio con juntas incluidas.', stock: 9, imagen: '/src/assets/hero.png' },
  { id: 'ex6', nombre: 'Silenciador central', categoria: 'Escape y admisión', precio: 9800, descripcion: 'Reducción de ruido manteniendo rendimiento.', stock: 5, imagen: '/src/assets/hero.png' },
  { id: 'ex7', nombre: 'Sensor MAF', categoria: 'Escape y admisión', precio: 4990, descripcion: 'Sensor de flujo de masa para control de mezcla.', stock: 11, imagen: '/src/assets/hero.png' },
  { id: 'ex8', nombre: 'Colector de admisión', categoria: 'Escape y admisión', precio: 17400, descripcion: 'Colector de admisión para mejor llenado.', stock: 3, imagen: '/src/assets/hero.png' },
  { id: 'ex9', nombre: 'Junta colector escape', categoria: 'Escape y admisión', precio: 650, descripcion: 'Junta metálica resistente a temperaturas.', stock: 60, imagen: '/src/assets/hero.png' },
  { id: 'ex10', nombre: 'Silenciador final cromado', categoria: 'Escape y admisión', precio: 14200, descripcion: 'Silenciador con salida cromada estética.', stock: 4, imagen: '/src/assets/hero.png' },
  { id: 'ex11', nombre: 'Válvula EGR (reman.)', categoria: 'Escape y admisión', precio: 8200, descripcion: 'Válvula recertificada para control de emisiones.', stock: 0, imagen: '/src/assets/hero.png' },
  { id: 'ex12', nombre: 'Tubo flexible escape', categoria: 'Escape y admisión', precio: 2100, descripcion: 'Tubo flexible para absorber vibraciones.', stock: 22, imagen: '/src/assets/hero.png' },

  // Filtros y lubricantes
  { id: 'fl1', nombre: 'Filtro de aceite Premium', categoria: 'Filtros y lubricantes', precio: 2490, descripcion: 'Filtro de aceite con media filtrante de alto rendimiento.', stock: 30, imagen: '/src/assets/hero.png' },
  { id: 'fl2', nombre: 'Filtro de aire panel', categoria: 'Filtros y lubricantes', precio: 1540, descripcion: 'Filtro de aire OEM con flujo optimizado.', stock: 28, imagen: '/src/assets/hero.png' },
  { id: 'fl3', nombre: 'Filtro de combustible', categoria: 'Filtros y lubricantes', precio: 1980, descripcion: 'Filtro para circuito de combustible, antisedimentador.', stock: 18, imagen: '/src/assets/hero.png' },
  { id: 'fl4', nombre: 'Aceite sintético 5W40 (4L)', categoria: 'Filtros y lubricantes', precio: 5200, descripcion: 'Aceite sintético para protección a altas temperaturas.', stock: 40, imagen: '/src/assets/hero.png' },
  { id: 'fl5', nombre: 'Aceite 10W40 (4L)', categoria: 'Filtros y lubricantes', precio: 4800, descripcion: 'Aceite multigrado para motores diésel y nafta.', stock: 36, imagen: '/src/assets/hero.png' },
  { id: 'fl6', nombre: 'Kit cambio aceite', categoria: 'Filtros y lubricantes', precio: 3200, descripcion: 'Kit con junta de tapa y filtro de aceite.', stock: 25, imagen: '/src/assets/hero.png' },
  { id: 'fl7', nombre: 'Aditivo limpiador de inyectores', categoria: 'Filtros y lubricantes', precio: 1200, descripcion: 'Mejora la pulverización y limpieza de inyectores.', stock: 50, imagen: '/src/assets/hero.png' },
  { id: 'fl8', nombre: 'Refrigerante premix 5L', categoria: 'Filtros y lubricantes', precio: 2200, descripcion: 'Refrigerante listo para uso, protección anticorrosión.', stock: 24, imagen: '/src/assets/hero.png' },
  { id: 'fl9', nombre: 'Filtro habitáculo carbón', categoria: 'Filtros y lubricantes', precio: 1990, descripcion: 'Filtro para habitáculo con carbón activo.', stock: 12, imagen: '/src/assets/hero.png' },
  { id: 'fl10', nombre: 'Junta tapa válvulas', categoria: 'Filtros y lubricantes', precio: 650, descripcion: 'Junta de goma resistente a temperatura.', stock: 60, imagen: '/src/assets/hero.png' },
  { id: 'fl11', nombre: 'Aceite caja automática (5L)', categoria: 'Filtros y lubricantes', precio: 7200, descripcion: 'Aceite ATF para cajas automáticas compatibles.', stock: 8, imagen: '/src/assets/hero.png' },
  { id: 'fl12', nombre: 'Filtro de aceite diesel', categoria: 'Filtros y lubricantes', precio: 2740, descripcion: 'Filtro de alta capacidad para motores diesel.', stock: 16, imagen: '/public/img/filtro_aceite_diesel.webp' },

  // Accesorios
  { id: 'a1', nombre: 'Alfombrillas goma', categoria: 'Accesorios', precio: 1990, descripcion: 'Juego de alfombrillas anti-deslizantes a medida.', stock: 45, imagen: '/src/assets/hero.png' },
  { id: 'a2', nombre: 'Gancho remolque desmontable', categoria: 'Accesorios', precio: 14200, descripcion: 'Gancho con base desmontable y manual de instalación.', stock: 6, imagen: '/src/assets/hero.png' },
  { id: 'a3', nombre: 'Barras portaequipaje', categoria: 'Accesorios', precio: 8200, descripcion: 'Barras aerodinámicas para techo.', stock: 10, imagen: '/src/assets/hero.png' },
  { id: 'a4', nombre: 'Cámara de retroceso', categoria: 'Accesorios', precio: 6990, descripcion: 'Cámara con guía dinámica y visión nocturna.', stock: 14, imagen: '/src/assets/hero.png' },
  { id: 'a5', nombre: 'Kit limpieza tapizados', categoria: 'Accesorios', precio: 1290, descripcion: 'Kit profesional para limpieza de interiores.', stock: 30, imagen: '/src/assets/hero.png' },
  { id: 'a6', nombre: 'Víacrón Bluetooth', categoria: 'Accesorios', precio: 3490, descripcion: 'Manos libres Bluetooth con carga USB.', stock: 22, imagen: '/src/assets/hero.png' },
  { id: 'a7', nombre: 'Cubre volante antideslizante', categoria: 'Accesorios', precio: 790, descripcion: 'Funda de cuero sintético para volante.', stock: 60, imagen: '/src/assets/hero.png' },
  { id: 'a8', nombre: 'Iluminación LED interior', categoria: 'Accesorios', precio: 1550, descripcion: 'Tiras LED RGB para personalizar interior.', stock: 18, imagen: '/src/assets/hero.png' },
  { id: 'a9', nombre: 'Organizador de baúl', categoria: 'Accesorios', precio: 1190, descripcion: 'Organizador plegable para baúl.', stock: 28, imagen: '/src/assets/hero.png' },
  { id: 'a10', nombre: 'Cargador de batería 12V', categoria: 'Accesorios', precio: 4990, descripcion: 'Cargador inteligente para baterías de 12V.', stock: 9, imagen: '/src/assets/hero.png' },
  { id: 'a11', nombre: 'Extensión de seguro para techo', categoria: 'Accesorios', precio: 890, descripcion: 'Accesorio de seguridad para equipaje en techo.', stock: 40, imagen: '/src/assets/hero.png' },
  { id: 'a12', nombre: 'Kit emergencia carretera', categoria: 'Accesorios', precio: 1590, descripcion: 'Triángulo, chaleco y herramientas básicas.', stock: 35, imagen: '/src/assets/hero.png' }
];

// List of actual image filenames present in public/img (normalized by the renamer script)
const IMG_FILES = [
  'aceite_10w_40.webp', 'aceite_caja_automatica.webp', 'aceite_sintetico.webp', 'aleta_delantera_derecha.webp', 'alfombrillas_goma.webp', 'alternador_90_a.webp', 'amortiguador_delantero.webp', 'barras_portaequipaje.webp', 'bateria_60_ah.webp', 'bieleta_de_direccion.webp', 'cableado_principal.webp', 'cable_freno_de_mano.webp', 'camara_de_retroceso.webp', 'capo_reforzado.webp', 'cargador_de_bateria.webp', 'catalizador.webp', 'cojinete_de_rueda.webp', 'colector_de_admision.webp', 'colector_de_escape.webp', 'cristal_delantero.webp', 'cubre_volante.webp', 'disco_trasero.webp', 'disco_ventilado.webp', 'embellecedor_lateral.webp', 'espejo_lateral_electrico.webp', 'extension_de_seguro_para_techo.webp', 'filtroaceitediesel.webp', 'filtro_de_aceite_premium.webp', 'filtro_de_admision_deportivo.webp', 'filtro_de_aire_panel.webp', 'filtro_de_combustible.webp', 'filtro_habitaculo.webp', 'gancho_remolque.webp', 'iluminacion_led_interior.webp', 'interruptor_de_arranque.webp', 'juego_de_bujias.webp', 'juego_de_cojinetes_de_ciguenal.webp', 'juego_de_manijas_externas.webp', 'juego_pastillas_delanteras.webp', 'junta_colector_escape.webp', 'junta_paragolpes.webp', 'junta_tapa_valvulas.webp', 'kit_cambio_aceite.webp', 'kit_emergencia_carretera.webp', 'kit_limpieza_tapizados.webp', 'latiguillo_de_freno.webp', 'limpiador_de_inyectores.webp', 'modulo_ecu.webp', 'modulo_faros_led.webp', 'motor_de_arranque.webp', 'organizador_de_baul.webp', 'palanca_de_embrague.webp', 'paraglope_delantero.webp', 'pinza_de_freno.webp', 'porta_patente.webp', 'puerta_delantera_izquierda.webp', 'refrigerante_premium.webp', 'rele_multifuncion.webp', 'retrovisor_interior.webp', 'sensor_de_termperatura.webp', 'sensor_maf.webp', 'sensor_map.webp', 'sensor_o2.webp', 'silenciador_central.webp', 'silenciador_final_cromado.webp', 'silencioso_trasero.webp', 'silentblock_de_suspension.webp', 'soporte_motor_lateral.webp', 'suspension_deportiva.webp', 'tapa_baul.webp', 'tubo_flexible_escape.webp', 'tubo_intermedio.webp', 'valvula_egr.webp', 'viacron_bluetooth.webp', 'volante_de_motor_liviano.webp'
];

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

function bestImageFor(product) {
  const nombre = product && product.nombre ? product.nombre : '';
  const origImagen = product && product.imagen ? product.imagen : null;
  const pTokens = tokensFrom(nombre);
  if (pTokens.length === 0 && !origImagen) return null;

  // 1) If product already has an image pointing to public/img or /img, prefer it when present in IMG_FILES
  if (origImagen) {
    // accept forms like '/public/img/foo.png' or '/img/foo.png' or 'public/img/foo.png'
    const m = String(origImagen).replace(/^\//, '').replace(/^public\//, ''); // 'img/foo.png'
    if (m.startsWith('img/')) {
      const filename = m.replace(/^img\//, '');
      if (IMG_FILES.includes(filename)) return `/img/${filename}`;
      // also try normalizing filename (extension change)
      const base = filename.replace(/\.[a-z]+$/i, '');
      for (const ext of ['.webp', '.png', '.jpg', '.jpeg']) {
        const cand = base + ext;
        if (IMG_FILES.includes(cand)) return `/img/${cand}`;
      }
    }
  }

  // 2) Try exact normalized filename with common extensions (deterministic)
  const baseCandidate = normalizeText(nombre).replace(/\s+/g, '_');
  for (const ext of ['.webp', '.png', '.jpg', '.jpeg']) {
    const cand = baseCandidate + ext;
    if (IMG_FILES.includes(cand)) return `/img/${cand}`;
  }

  // 3) Fallback to token intersection scoring
  let best = null;
  let bestScore = 0;

  for (const file of IMG_FILES) {
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

const FINAL_PRODUCTOS = PRODUCTOS.map((p) => ({
  ...p,
  // If the product explicitly points to an /img/ path, keep it (manual override).
  imagen: p && p.imagen && String(p.imagen).startsWith('/img/')
    ? p.imagen
    : (bestImageFor(p) || '/src/assets/hero.png'),
}));

// Ordenar alfabéticamente por nombre (locale aware, español)
const SORTED_PRODUCTOS = FINAL_PRODUCTOS.slice().sort((a, b) =>
  String(a.nombre).localeCompare(String(b.nombre), 'es', { sensitivity: 'base' })
);

export default SORTED_PRODUCTOS;
