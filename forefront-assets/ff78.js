/* Forefront · capa de diseño y conversión para Tiendanube (tema Ipanema) · v7.4
   Se carga por GTM solo en la tienda demo. Zareva Studio · nov 2026 */
(function () {
  if (window.__FF) return; window.__FF = 1;
  var HOSTS = ['forefrontdemo.mitiendanube.com', 'www.institutoforefront.com', 'institutoforefront.com', 'institutoforefront.mitiendanube.com'];
  if (HOSTS.indexOf(location.hostname) < 0 && !window.FF_FORCE) return;
  var REAL = !/forefrontdemo/.test(location.hostname);
  if (REAL && /^\/cursos-2027(\/|$)/.test(location.pathname)) return;

  var CDN = 'https://dcdn-us.mitiendanube.com/stores/008/494/753/products/';
  if (REAL) CDN = 'https://cdn.jsdelivr.net/gh/ornelladod-art/threshold-site@71b1fff/forefront-assets/img/';
  var PH = {
    profe: 'ff-profe-cf7fa8be04844e5b5d17943264893162', risas: 'ff-risas-9eaef192a8dc3fa56d17943264935563',
    mesa: 'ff-mesa-e7fdf7150fe1205f5717943264959666', mate: 'ff-mate-80489b795cb9fbce6817943264948520',
    pareja: 'ff-pareja-81a8dc2984931553c617943264947806', juego: 'ff-juego-fff14036316e2d722817943264956268',
    charla: 'ff-charla-08af5dce20b5d287e917943264875303', tea: 'ff-tea-c1e8e6ae181610270f17943264895060',
    cookies: 'ff-cookies-3736b4bd261937d9ba17943264961793', grupo2: 'ff-grupo2-060551b744ebf5ebcb17943264945820',
    grupo1: 'ff-grupo1-4c7080504610e09c1d17943264961313', smile2: 'ff-smile2-9d557d36e99f9b044117943264955819',
    smile1: 'ff-smile1-ae13076445989d19a917943264947996', hal4: 'ff-hal4-9268c4b39f4cc9624e17943264927554',
    hal3: 'ff-hal3-d268702c16c6530fc817943264934871', hal2: 'ff-hal2-c9e55184b06a46dd0017943264933226',
    hal1: 'ff-hal1-353f12357857a14fd917943264928679', hal0: 'ff-hal0-da71581bc64c6bd9c217943264931228',
    ebPack: 'ff-ebook-pack1-1194cb86a1ea62291517943271236150', ebPack2: 'ff-ebook-pack3-90f30eb8d9d165674917943271236438',
    ebGra: 'ff-ebook-gra1-3d44ce41254fb59b4a17943271526484', ebTrv: 'ff-ebook-trv1-850e65eced3c5a4b0417943271714797'
  };
  var NEW = {
    cvVer: 'd-cov-verano-7a327f32de92ff5ed317943310297348', cvAnP: 'd-cov-anualp-42b21bfce66dce5d8317943310297264',
    cvAnO: 'd-cov-anualo-e341f63da5caea5a7a17943310296957', cvAct: 'd-cov-actos-83407fce1120c0c25017943310297799',
    clase: 'd-clase-7b616e348545acc52b17943310300642', pkVer: 'd-pack-ver-7640ed4cea2503851e17943310300635',
    pkAnu: 'd-pack-anu-cb7efa373d94609b9217943310296890', online: 'd-online-095d57fafe0bd1ddfc17943310296415',
    niveles: 'd-niveles-d174dfde305fe88acb17943310297789', incP: 'd-inc-p-b74f8412cdd2744b8617943310297761',
    incO: 'd-inc-o-783220ca7db21c99cf17943310297194', ebTrv: 'd-eb-trv-62ecd5c63310be23cf17943310300498',
    ebPack: 'd-eb-pack-a1633ca49bb27eee8d17943310297129', ebInt: 'd-eb-int-569eeefd17daf1b96517943310297716',
    ebHow: 'd-eb-how-2ae075169eb9be84c917943310296377', ebGra: 'd-eb-gra-ddb2cd83ff25236be017943310296108',
    m01: 'mat-p01-0f4bf0eef4121812b417943310295361', m05: 'mat-p05-582f512ccd04ab92b417943310298549',
    m06: 'mat-p06-d28e9059475aa7309d17943310298711', m12: 'mat-p12-baf7563af604cbe68617943310298260',
    m15: 'mat-p15-51007fe3224628186d17943310297308', m17: 'mat-p17-dcc38ddf2df346b6c617943310298911',
    m21: 'mat-p21-ca45de24a2f6370f7e17943310298168', m22: 'mat-p22-48790dd9186f1f90bc17943310298255',
    m26: 'mat-p26-0e8500e35b8a11c47817943310297251', m39: 'mat-p39-945cc6311fac35c56017943310295554',
    igCk1: 'ig-cookies-1-e3683754dc283237b217943303223368', igCk2: 'ig-cookies-2-7b33e47b859942bc6217943303220994',
    igCk3: 'ig-cookies-3-b12ac8e5b0039bd75217943303219503', igCk4: 'ig-cookies-4-8264876f33b33e1de117943303218986',
    igHa1: 'ig-halloween-1-f3ed9f59cfc445acde17943303222571', igHa2: 'ig-halloween-2-eea7eaf58f4129c12117943303227338',
    igHa3: 'ig-halloween-3-e4d792eb29db67b5b217943303222959', igHa4: 'ig-halloween-4-2f4b2c8b280c63942c17943303224427',
    igHa5: 'ig-halloween-5-404a7c7dfea07eb45e17943303223636',
    igCr1: 'ig-crochet-1-6c7b7bbebc8a4e14dc17943303223232', igCr2: 'ig-crochet-2-5927e0e6c54e63704117943303224952',
    igCr3: 'ig-crochet-3-1794dba40914e11afa17943303223452', igCr4: 'ig-crochet-4-c36cf6c6c4b01694fc17943303224733',
    igCr5: 'ig-crochet-5-6d47c9cb165a41032e17943303222370',
    igDe1: 'ig-desayuno-1-79a53dcaf9373b243017943303220094', igDe2: 'ig-desayuno-2-c5e462c91b4293bfaf17943303225413',
    igDe3: 'ig-desayuno-3-0d1551c023338d0fc817943303224867', igDe4: 'ig-desayuno-4-3ba4e2e4a9a7c2cd3717943303225910',
    igDe5: 'ig-desayuno-5-1de39ff4dc2df58df117943303225749',
    igTe1: 'ig-tenis-1-8cd9a5e1dd0f3f58f517943303222618', igTe2: 'ig-tenis-2-a9f283ca2351d3d97b17943303223447',
    igTe3: 'ig-tenis-3-b04254889a19affda317943303222037', igTe4: 'ig-tenis-4-6ca9928a85a34b288e17943303225244',
    igTe5: 'ig-tenis-5-ae310496a0e09518a917943303227835', igTe6: 'ig-tenis-6-9f7f8fa6eb7da6d2e617943303222552',
    igTe7: 'ig-tenis-7-efc0d9dea553850d2417943303221380'
  };
  for (var nk in NEW) PH[nk] = NEW[nk];
  var TN = 'https://acdn-us.mitiendanube.com/stores/006/674/683/products/', TNH = {"ig-cookies-1-e3683754dc283237b217943303223368":"ig-cookies-1-e3683754dc283237b217943303223368-1024-1024-51c84f6509ba538dec17945937385752","ig-cookies-2-7b33e47b859942bc6217943303220994":"ig-cookies-2-7b33e47b859942bc6217943303220994-1024-1024-0b6f4aa931c610c88617945937389162","ig-cookies-3-b12ac8e5b0039bd75217943303219503":"ig-cookies-3-b12ac8e5b0039bd75217943303219503-1024-1024-8c7598ffd930047d0317945937391819","ig-cookies-4-8264876f33b33e1de117943303218986":"ig-cookies-4-8264876f33b33e1de117943303218986-1024-1024-79da0fc677815fe86c17945937394506","ig-crochet-1-6c7b7bbebc8a4e14dc17943303223232":"ig-crochet-1-6c7b7bbebc8a4e14dc17943303223232-1024-1024-867dcf33e1ba5e1ad217945937397487","ig-crochet-2-5927e0e6c54e63704117943303224952":"ig-crochet-2-5927e0e6c54e63704117943303224952-1024-1024-ab0916ab51fae1d3ef17945937400776","ig-crochet-3-1794dba40914e11afa17943303223452":"ig-crochet-3-1794dba40914e11afa17943303223452-1024-1024-ccaa8ddfe58bd50ad817945937404022","ig-crochet-4-c36cf6c6c4b01694fc17943303224733":"ig-crochet-4-c36cf6c6c4b01694fc17943303224733-1024-1024-0422c707c2be03480b17945937407178","ig-crochet-5-6d47c9cb165a41032e17943303222370":"ig-crochet-5-6d47c9cb165a41032e17943303222370-1024-1024-8917cad24a8f3ee6f217945937410419","ig-desayuno-1-79a53dcaf9373b243017943303220094":"ig-desayuno-1-79a53dcaf9373b243017943303220094-1024-1024-325d59272bec84a76717945937413732","ig-desayuno-2-c5e462c91b4293bfaf17943303225413":"ig-desayuno-2-c5e462c91b4293bfaf17943303225413-1024-1024-cb82ffce3b66f5c9b517945937416745","ig-desayuno-3-0d1551c023338d0fc817943303224867":"ig-desayuno-3-0d1551c023338d0fc817943303224867-1024-1024-101fbb85dbebf1d93017945937419674","ig-desayuno-4-3ba4e2e4a9a7c2cd3717943303225910":"ig-desayuno-4-3ba4e2e4a9a7c2cd3717943303225910-1024-1024-ba58c4e9c76db04ad717945937422949","ig-desayuno-5-1de39ff4dc2df58df117943303225749":"ig-desayuno-5-1de39ff4dc2df58df117943303225749-1024-1024-808da91ff583b41ade17945937426340","ig-halloween-1-f3ed9f59cfc445acde17943303222571":"ig-halloween-1-f3ed9f59cfc445acde17943303222571-1024-1024-19f8793554dd1834d217945937429621","ig-halloween-2-eea7eaf58f4129c12117943303227338":"ig-halloween-2-eea7eaf58f4129c12117943303227338-1024-1024-977b8c6bf88cfc193217945937433260","ig-halloween-3-e4d792eb29db67b5b217943303222959":"ig-halloween-3-e4d792eb29db67b5b217943303222959-1024-1024-480dfbde484027077917945937436212","ig-halloween-4-2f4b2c8b280c63942c17943303224427":"ig-halloween-4-2f4b2c8b280c63942c17943303224427-1024-1024-29f6c17efc6b2aee7d17945937439202","ig-halloween-5-404a7c7dfea07eb45e17943303223636":"ig-halloween-5-404a7c7dfea07eb45e17943303223636-1024-1024-e594b5166b0ba0391c17945937442388","ig-tenis-1-8cd9a5e1dd0f3f58f517943303222618":"ig-tenis-1-8cd9a5e1dd0f3f58f517943303222618-1024-1024-6e0df26e050a8b69ad17945937445233","ig-tenis-2-a9f283ca2351d3d97b17943303223447":"ig-tenis-2-a9f283ca2351d3d97b17943303223447-1024-1024-11f117ba5f70f799dc17945937448638","ig-tenis-3-b04254889a19affda317943303222037":"ig-tenis-3-b04254889a19affda317943303222037-1024-1024-5e8574462786a16f6017945937452645","ig-tenis-4-6ca9928a85a34b288e17943303225244":"ig-tenis-4-6ca9928a85a34b288e17943303225244-1024-1024-8b0da0f654bd691a2c17945937455822","ig-tenis-5-ae310496a0e09518a917943303227835":"ig-tenis-5-ae310496a0e09518a917943303227835-1024-1024-f7003a5fa6de8d98da17945937458991","ig-tenis-6-9f7f8fa6eb7da6d2e617943303222552":"ig-tenis-6-9f7f8fa6eb7da6d2e617943303222552-1024-1024-adbac8e63c240ad89417945937462529","ig-tenis-7-efc0d9dea553850d2417943303221380":"ig-tenis-7-efc0d9dea553850d2417943303221380-1024-1024-68982a5620f47abbb117945937465681","mat-p01-0f4bf0eef4121812b417943310295361":"mat-p01-0f4bf0eef4121812b417943310295361-1024-1024-c268644aeaf56d937c17945937468719","mat-p05-582f512ccd04ab92b417943310298549":"mat-p05-582f512ccd04ab92b417943310298549-1024-1024-fc5f157bd6b41bdef917945937471663","mat-p06-d28e9059475aa7309d17943310298711":"mat-p06-d28e9059475aa7309d17943310298711-1024-1024-9ed8102ed8e6d243bf17945937474878","mat-p12-baf7563af604cbe68617943310298260":"mat-p12-baf7563af604cbe68617943310298260-1024-1024-e20445951325e5f09b17945937478019","mat-p15-51007fe3224628186d17943310297308":"mat-p15-51007fe3224628186d17943310297308-1024-1024-9ca8d2c3886169b01c17945937481306","mat-p17-dcc38ddf2df346b6c617943310298911":"mat-p17-dcc38ddf2df346b6c617943310298911-1024-1024-21dfd3716b35d7de6617945937484146","mat-p21-ca45de24a2f6370f7e17943310298168":"mat-p21-ca45de24a2f6370f7e17943310298168-1024-1024-d82e63c015840e454c17945937487572","mat-p22-48790dd9186f1f90bc17943310298255":"mat-p22-48790dd9186f1f90bc17943310298255-1024-1024-86cd6bbe4b7015f42717945937490567","mat-p26-0e8500e35b8a11c47817943310297251":"mat-p26-0e8500e35b8a11c47817943310297251-1024-1024-8459bb578be68d84cf17945937493710","mat-p39-945cc6311fac35c56017943310295554":"mat-p39-945cc6311fac35c56017943310295554-1024-1024-5495947dccd6cae1ba17945937496473"};
  function img(k, s) { if (/^https?:/.test(k)) return k; var v = PH[k], b = (REAL && TNH[v]) ? TN + TNH[v] : CDN + v; return b + (s === 'm' ? '-640-0' : '-1024-1024') + '.webp'; }
  var MB = 'https://cdn.jsdelivr.net/gh/ornelladod-art/threshold-site@9bf3b20/forefront-assets/mat/'; var MAT = [[MB+'preint-packlikeapro.webp', 'Mini class · Pack like a pro (Pre-intermedio)'], [MB+'slang-pagina.webp', 'Actividad de clase · Slang Study'], ['m05', 'Unidad 1 · AI: benefits or drawbacks?'], [MB+'inter-emilyinparis.webp', 'Series en clase · Emily in Paris (Intermedio)'], [MB+'textabbr-pagina.webp', 'Actividad de clase · Text Abbreviations'], ['m12', 'Mini class · Los trucos para que gastemos más'], ['m22', 'Reading · La conversación sobre el sueldo'], ['m26', 'Mini class · Leyes raras del mundo'], ['m15', 'Unidad 2 · Travel dilemmas'], ['m17', 'Reading · El viaje perfecto'], ['m21', 'Unidad 3 · Money and work'], ['m06', 'Reading · A first person account'], ['m39', 'Grammar · Time expressions'], ['m01', 'Portada · Intermedio']];
  var DYN = [
    { k: 'hal', t: '🎃 Halloween', d: 'Una clase temática con disfraces, juegos y vocabulario de Halloween.', im: ['igHa1', 'igHa2', 'igHa3', 'igHa4', 'igHa5'], u: 'https://www.instagram.com/p/Dfcj69NDIap/' },
    { k: 'ck', t: '🍪 Baking cookies', d: 'Seguimos una receta en inglés y cocinamos juntos.', im: ['igCk1', 'igCk2', 'igCk3', 'igCk4'], u: 'https://www.instagram.com/p/DY5R07iDa2g/' },
    { k: 'cr', t: '🧶 Crochet', d: 'Un taller de crochet en inglés, de la mano de Sabri.', im: ['igCr1', 'igCr2', 'igCr3', 'igCr4', 'igCr5'], u: 'https://www.instagram.com/p/DQZ-DqvDaX8/' },
    { k: 'de', t: '☕ Desayuno', d: 'Un desayuno compartido para charlar en inglés.', im: ['igDe1', 'igDe2', 'igDe3', 'igDe4', 'igDe5'], u: 'https://www.instagram.com/p/DPmeN3RAiva/' },
    { k: 'te', t: '🎾 Tenis', d: 'Una clase de tenis en inglés con Julián, profe de tenis.', im: ['igTe1', 'igTe2', 'igTe3', 'igTe4', 'igTe5', 'igTe6', 'igTe7'], u: 'https://www.instagram.com/p/DOt00-UjIDY/' }
  ];

  /* portadas en motion (HTML animado, claro) */
  function mgWrap(inner) { return '<div class="mg"><div class="grid"></div><div class="blob a"></div><div class="blob b"></div><img class="lg" src="' + CFG.logo + '" alt="Forefront">' + inner + '</div>'; }
  function mgH(a, b, c) { return '<h3><span><i>' + a + '</i></span><span><i>' + b + '</i></span>' + (c ? '<span><i><em>' + c + '</em></i></span>' : '') + '</h3>'; }
  function mgMeta(x) { return '<div class="meta">' + x.map(function (t) { return '<b>' + t + '</b>'; }).join('') + '</div>'; }
  var MG = null;
  function mgI() { if (MG) return MG; MG = {
    ver: mgWrap('<div class="stk"><small>FEBRERO</small><b>2027</b><small>5 CLASES</small></div><div class="mgk">Curso de verano</div>' + mgH('Inglés', 'para adultos,', 'en febrero.') + '<span class="bb p b1">Hi! 👋</span><span class="bb c r b2">How was your week?</span><span class="bb g b3">Let\'s practice!</span>' + mgMeta(['Del 1/02 al 5/03', 'Presencial u online', 'Grupos reducidos'])),
    anP: mgWrap('<div class="stk" style="background:var(--pink)"><small>MARZO A</small><b>DIC</b><small>2027</small></div><div class="mgk">Curso anual · Presencial</div>' + mgH('Tu clase', 'de inglés,', 'en Rosario.') + '<span class="bb n b1">Coffee or mate? ☕</span><span class="bb p r b2">Mate, please!</span><span class="bb c b3">Let\'s start 🙌</span>' + mgMeta(['Arranca el 8/03', '1 clase por semana', 'Mendoza 2223'])),
    anO: mgWrap('<div class="live"><i></i>EN VIVO</div><div class="mgk">Curso anual · Online</div><h3 style="font-size:10.5cqw"><span><i>Inglés en vivo,</i></span><span><i><em>con tu grupo.</em></i></span></h3><div class="chat" style="top:48cqw"><div class="msg l"><small>PROFE</small>What did you do this weekend?</div><div class="msg rt"><small>VOS</small>I went to the river with my family!</div><div class="msg ok">✓ Great! Past simple 👏</div></div>' + mgMeta(['Arranca el 8/03', 'Por Zoom', 'Queda grabada'])),
    act: mgWrap('<div class="stk" style="background:var(--green)"><small>NIVELES</small><b>6–10</b><small>VERANO</small></div><div class="mgk">Inicial · Verano 2027</div>' + mgH('Terminá', 'Inicial', 'en el verano.') + '<span class="bb c b1">Almost there! 🚀</span><span class="bb p r b2">Level up!</span><span class="bb g b3">Pre-Intermediate 👋</span>' + mgMeta(['Del 4/01 al 5/03', '8 clases + examen'])),
    clase: mgWrap('<div class="mgk">Así es una clase</div><h3 style="font-size:9.5cqw"><span><i>Hablás desde</i></span><span><i><em>el minuto uno.</em></i></span></h3><div class="steps">' +
      [['var(--red)', 'Mate o café, y a charlar', 'Contás tu semana en inglés'], ['var(--pink)', 'Una situación real', 'Un viaje, una reunión, un restaurante'], ['var(--cyan)', 'Juegos y role plays', 'En parejas y en grupo'], ['var(--green)', 'Práctica corta', 'Para no perder el ritmo']].map(function (x, i) { return '<div><i style="background:' + x[0] + '">' + (i + 1) + '</i><p style="margin:0"><b>' + x[1] + '</b><span>' + x[2] + '</span></p></div>'; }).join('') + '</div>')
  }; return MG; }
  /* reels de dinámicas */
  function reelsHTML() {
    return '<section class="ff-reels"><div class="w"><span class="ey">Fuera del aula</span><h2 class="D h2">Así son <em>nuestras dinámicas</em></h2><p class="lead">Encuentros para practicar inglés haciendo otra cosa. Tocá uno para verlo en Instagram.</p><div class="rl">' +
      DYN.map(function (d) { return '<a class="rc" href="' + d.u + '" target="_blank" rel="noopener" aria-label="' + d.t.replace(/^\S+ /, '') + ' en Instagram"><div class="bars">' + d.im.map(function () { return '<i><u></u></i>'; }).join('') + '</div>' + d.im.map(function (k, i) { return '<img ' + (i ? 'loading="lazy" ' : '') + 'class="' + (i ? '' : 'on') + '" src="' + img(k, 'm') + '" alt="">'; }).join('') + '<div class="cap"><b>' + d.t + '</b><span>' + d.d + '</span><em>Ver en Instagram ↗</em></div></a>'; }).join('') + '</div></div></section>';
  }
  function bindReels(root) {
    $$('.ff-reels .rc', root).forEach(function (c, ci) {
      var ims = $$('img', c), bs = $$('.bars i', c), i = 0;
      function show(n) { ims.forEach(function (im, j) { im.classList.toggle('on', j === n); }); bs.forEach(function (b, j) { b.className = j < n ? 'done' : (j === n ? 'run' : ''); }); }
      show(0);
      setTimeout(function () { setInterval(function () { i = (i + 1) % ims.length; show(i); }, 2600); }, ci * 450);
    });
  }
  function thHTML() { return '<div class="w" style="padding-bottom:50px"><div class="ff-th"><a href="' + CFG.threshold + '" target="_blank" rel="noopener"><div><small>THRESHOLD ENGLISH</small><b>¿Buscás algo más premium y personalizado, por un objetivo puntual?</b><span>Programa 1 a 1 con un plan a tu medida: trabajo, examen, mudanza o entrevista.</span></div><span class="go">Conocer Threshold →</span></a></div></div>'; }

  /* carrusel genérico (scroll-snap + flechas + puntos) */
  function gal(keys, cls, alt) {
    return '<div class="ff-gal ' + (cls || '') + '"><div class="tr">' + keys.map(function (k, i) { return k.charAt(0) === '#' ? '<figure>' + ebPl(k.slice(1)) + '</figure>' : k.charAt(0) === '@' ? '<figure>' + mgI()[k.slice(1)] + '</figure>' : '<figure><img ' + (i ? 'loading="lazy" ' : '') + 'src="' + img(k) + '" alt="' + (alt || 'Instituto Forefront') + '"></figure>'; }).join('') + '</div>' +
      (keys.length > 1 ? '<button type="button" class="ar l" aria-label="Anterior">‹</button><button type="button" class="ar r" aria-label="Siguiente">›</button><div class="dots">' + keys.map(function (k, i) { return '<i class="' + (i ? '' : 'on') + '"></i>'; }).join('') + '</div>' : '') + '</div>';
  }
  function bindGal(root) {
    $$('.ff-gal', root).forEach(function (g) {
      var tr = $('.tr', g), ds = $$('.dots i', g);
      function go(d) { tr.scrollBy({ left: d * tr.clientWidth * (g.classList.contains('multi') ? .8 : 1), behavior: 'smooth' }); }
      var l = $('.ar.l', g), r = $('.ar.r', g); if (l) l.onclick = function () { go(-1); }; if (r) r.onclick = function () { go(1); };
      tr.addEventListener('scroll', function () { var f = tr.children[0]; if (!f || !ds.length) return; var i = Math.round(tr.scrollLeft / (f.offsetWidth + 12)); ds.forEach(function (d, j) { d.classList.toggle('on', j === Math.min(i, ds.length - 1)); }); }, { passive: true });
      ds.forEach(function (d, i) { d.onclick = function () { var f = tr.children[i]; if (f) tr.scrollTo({ left: f.offsetLeft - tr.offsetLeft, behavior: 'smooth' }); }; });
    });
  }
  /* visor ampliado para el material */
  function lightbox(src, cap) {
    var x = h('<div class="ff ff-lb"><figure><img src="' + src + '" alt="' + (cap || '') + '"><figcaption>' + (cap || '') + '</figcaption></figure><button type="button" aria-label="Cerrar">×</button></div>');
    x.onclick = function (e) { if (e.target === x || e.target.tagName === 'BUTTON') x.remove(); };
    document.body.appendChild(x);
  }
  function matHTML() {
    return '<div class="ff-pages">' + MAT.map(function (m) { return '<button type="button" data-lb="' + img(m[0]) + '" data-cap="' + m[1] + '"><img loading="lazy" src="' + img(m[0], 'm') + '" alt="Material Forefront: ' + m[1] + '"><span>' + m[1] + '</span></button>'; }).join('') + '</div>';
  }
  function bindLB(root) { $$('[data-lb]', root).forEach(function (b) { b.onclick = function () { lightbox(b.dataset.lb, b.dataset.cap); }; }); }
  function dynHTML() {
    return '<div class="ff-dyn"><div class="tabs" role="tablist">' + DYN.map(function (d, i) { return '<button type="button" data-dyn="' + i + '" class="' + (i ? '' : 'on') + '">' + d.t + '</button>'; }).join('') + '</div>' +
      DYN.map(function (d, i) { return '<div class="pn' + (i ? '' : ' on') + '" data-pn="' + i + '"><p>' + d.d + ' <a href="' + d.u + '" target="_blank" rel="noopener">Ver el posteo →</a></p>' + gal(d.im, 'multi', d.t.replace(/^\S+ /, '') + ' en Forefront') + '</div>'; }).join('') + '</div>';
  }
  function bindDyn(root) {
    $$('.ff-dyn', root).forEach(function (w) {
      $$('[data-dyn]', w).forEach(function (b) { b.onclick = function () { $$('[data-dyn]', w).forEach(function (x) { x.classList.toggle('on', x === b); }); $$('[data-pn]', w).forEach(function (p) { p.classList.toggle('on', p.dataset.pn === b.dataset.dyn); }); }; });
    });
  }

  var CFG = {
    wa: '5493416643673',
    calPresencial: '#entrevista-presencial',   // TODO: link del calendario presencial
    calOnline: '#entrevista-online',           // TODO: link del calendario online
    examen: 'https://docs.google.com/forms/d/e/1FAIpQLSeNWHOENU2XS1drDLT0SuBaACctjfdo5OiyszTNLubUuJXQiQ/viewform?usp=header',
    ig: 'https://instagram.com/institutoforefront',
    threshold: 'https://thresholdenglish.com/',
    addr: 'Mendoza 2223, Rosario', addr2: 'entre Alvear y Bv. Oroño',
    disc: 0.8,
    deadline: '2026-11-30T23:59:59-03:00', deadlineTxt: '30/11',
    logo: 'https://acdn-us.mitiendanube.com/stores/006/674/683/themes/common/logo-1381240065-1756824719-142120fccd6b21c4c8060a313b022e831756824719-480-0.webp',
    yt: 'O2QL6klmQLM', heroVid: 'https://cdn.jsdelivr.net/gh/ornelladod-art/threshold-site@ed276a8/forefront-assets/',            // TODO: id del video de YouTube (no listado) para el banner
    slides: ['risas', 'cookies', 'smile2', 'mesa'],
    urls: {
      verano: '/productos/curso-de-verano-2027/', veranoO: '/productos/curso-de-verano-2027-online/', anualP: '/productos/curso-anual-2027-presencial/',
      anualO: '/productos/curso-anual-2027-online/', actos: '/productos/inicial-verano-niveles-6-a-10/',
      nivel: '/nivelacion/', pack: '/productos/pack-english-essentials/',
      gra: '/productos/ebook-english-grammar/', trv: '/productos/ebook-english-for-travelers/',
      job: '/productos/ebook-interviews-f40jg/', bus: '/productos/ebook-business-meetings-ydh57/'
    },
    pid: { verano: 380121630, anualP: 380122368, anualO: 380122470, actos: 380121786, pack: 380128190, gra: 380128195, trv: 380128197 }
  };
  if (REAL) {
    CFG.pid = { verano: 380264204, veranoO: 380771787, anualP: 380264271, anualO: 380264324, actos: 380264336, pack: 312187094, gra: 319995204, trv: 318273073, job: 312164903, bus: 317018603 };
    CFG.urls.pack = '/productos/pack-english-essentials-h2cfr/'; CFG.urls.gra = '/productos/ebook-english-grammar-1kfc6/'; CFG.urls.trv = '/productos/ebook-viajeros-ewol4/';
  }
  var COURSE_IDS = [CFG.pid.verano, CFG.pid.veranoO, CFG.pid.anualP, CFG.pid.anualO, CFG.pid.actos];
  var EBOOKS = {
    'pack-english-essentials': { k: 'pack', img: 'ebPack', gal: ['ebPack', 'ebInt', 'ebGra', 'ebTrv', 'ebHow'], price: 100000, was: 250000, short: 'Pack English Essentials', what: '4 ebooks: Job Interviews, Business Meetings, English for Travelers y English Grammar.' },
    'ebook-english-grammar': { k: 'gra', img: 'ebGra', gal: ['ebGra', 'ebHow', 'ebPack'], price: 25000, was: 50000, short: 'English Grammar', what: 'La gramática esencial de A1 a B1, con ejercicios y respuestas.' },
    'ebook-english-for-travelers': { k: 'trv', img: 'ebTrv', gal: ['ebTrv', 'ebHow', 'ebPack'], price: 25000, was: 50000, short: 'English for Travelers', what: 'Frases, diálogos y vocabulario para viajar sin trabarte.' }
  };
  EBOOKS['ebook-interviews'] = { k: 'job', pl: 'job', gal: ['#job', 'ebHow', 'ebPack'], price: 25000, was: 50000, short: 'Job Interviews', what: 'Para presentarte, contar tu experiencia y responder con seguridad en una entrevista laboral en inglés.' };
  EBOOKS['ebook-business-meetings'] = { k: 'bus', pl: 'bus', gal: ['#bus', 'ebHow', 'ebPack'], price: 25000, was: 50000, short: 'Business Meetings', what: 'Para opinar, proponer, pedir aclaraciones y cerrar acuerdos en reuniones de trabajo en inglés.' };
  EBOOKS['ebook-interviews-f40jg'] = EBOOKS['ebook-interviews']; EBOOKS['ebook-business-meetings-ydh57'] = EBOOKS['ebook-business-meetings'];
  EBOOKS['pack-english-essentials-h2cfr'] = EBOOKS['pack-english-essentials']; EBOOKS['ebook-english-grammar-1kfc6'] = EBOOKS['ebook-english-grammar']; EBOOKS['ebook-viajeros-ewol4'] = EBOOKS['ebook-english-for-travelers'];


  /* placas de ebook en HTML (Job Interviews y Business Meetings) */
  var EBPL = {
    job: { tag: 'ENTREVISTAS', bg: '#DF242C', st: '#0C1C4F', t: 'Job<em>Interviews</em>', d: 'Para presentarte y responder con seguridad.', c1: 'INTERVIEW', c2: 'Tell me about', c3: 'MON 10:00 · ROOM 3', cc: '#DF242C', ch: ['📲 Te llega por mail', '💼 Entrevistas laborales'] },
    bus: { tag: 'REUNIONES', bg: '#1E2A48', st: '#DF242C', t: 'Business<em>Meetings</em>', d: 'Para opinar, proponer y cerrar acuerdos.', c1: 'AGENDA · 10:00', c2: 'Next steps', c3: '✓ ACTION POINTS', cc: '#1E2A48', ch: ['📲 Te llega por mail', '💼 Reuniones de trabajo'] }
  };
  function ebPl(k) {
    var p = EBPL[k]; if (!p) return '';
    return '<div class="ebp" role="img" aria-label="Ebook ' + p.t.replace(/<[^>]+>/g, ' ') + '"><div class="lab">EBOOK · PDF</div><div class="tag">' + p.tag + '</div>' +
      '<div class="bk" style="background:' + p.bg + '"><div class="in"><div class="k">FOREFRONT EBOOKS</div><b class="t">' + p.t + '</b><p>' + p.d + '</p></div>' +
      '<div class="cd"><i style="background:' + p.st + '"></i><div><small>' + p.c1 + '</small><span style="color:' + p.cc + '">' + p.c2 + '</span><small class="s">' + p.c3 + '</small></div></div>' +
      '<img class="lg" src="' + CFG.logo + '" alt=""><span class="pdf">PDF</span></div>' +
      '<div class="ch">' + p.ch.map(function (c) { return '<span>' + c + '</span>'; }).join('') + '</div></div>';
  }

  /* ---------- utilidades ---------- */
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function h(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstElementChild; }
  function money(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }
  function wa(t) { return 'https://wa.me/' + CFG.wa + (t ? '?text=' + encodeURIComponent(t) : ''); }
  if (CFG.calPresencial.charAt(0) === '#') CFG.calPresencial = wa('Hola! Quiero pedir una entrevista de nivelación presencial. ¿Qué días y horarios tienen?');
  if (CFG.calOnline.charAt(0) === '#') CFG.calOnline = wa('Hola! Quiero pedir una entrevista de nivelación online. ¿Qué días y horarios tienen?');
  function ss(k, v) { try { if (v === undefined) return sessionStorage.getItem(k); if (v === null) sessionStorage.removeItem(k); else sessionStorage.setItem(k, v); } catch (e) { return null; } }
  var TPL = (window.LS && LS.template) || '';
  var PATH = location.pathname.replace(/\/+$/, '/');
  var DL = new Date(CFG.deadline).getTime();
  function left() { var d = Math.max(0, DL - Date.now()); return { d: Math.floor(d / 864e5), h: Math.floor(d / 36e5) % 24, m: Math.floor(d / 6e4) % 60, s: Math.floor(d / 1e3) % 60, over: d <= 0 }; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function cdHTML(cls) { return '<span class="ff-cd ' + (cls || '') + '"><b data-u="d">0</b><i>días</i><b data-u="h">00</b><i>h</i><b data-u="m">00</b><i>min</i><b data-u="s">00</b><i>seg</i></span>'; }
  function tick() {
    var t = left();
    $$('.ff-cd').forEach(function (c) { $$('b', c).forEach(function (b) { var u = b.dataset.u; b.textContent = u === 'd' ? t.d : pad(t[u]); }); });
  }
  function addToCart(pid, then) {
    var fd = new FormData(); fd.append('add_to_cart', pid); fd.append('quantity', '1');
    return fetch('/comprar/', { method: 'POST', body: fd, headers: { 'X-Requested-With': 'XMLHttpRequest' }, credentials: 'same-origin' })
      .then(function (r) { return r.json(); })
      .then(function () { ss('ffOpenCart', '1'); if (then) then(); else location.reload(); })
      .catch(function () { location.href = '/comprar/'; });
  }
  function ld(obj) { var s = document.createElement('script'); s.type = 'application/ld+json'; s.textContent = JSON.stringify(obj); document.head.appendChild(s); }

  /* ---------- estilos ---------- */
  var CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Montserrat:wght@400;500;600;700;800&display=swap');
:root{--navy:#0E1B4D;--navy2:#16286B;--blue:#2A47B8;--red:#E1252D;--red2:#B9141B;--cream:#F7F3EC;--paper:#FFFDF9;--ink:#121833;--mute:#5A6178;--line:#E6E0D4;--green:#178A50;--gold:#C9A66B;--r:22px}
html body{background:var(--cream)!important;color:var(--ink);font-family:Montserrat,Arial,sans-serif}
body.ff-on .js-header,body.ff-on #ns-section-footer,body.ff-on .js-nubesdk-slot{display:none!important}
body.ff-on #MainContent{padding-top:0!important}
.ff *{box-sizing:border-box}
.ff{font-family:Montserrat,Arial,sans-serif;color:var(--ink);line-height:1.55;font-size:16.5px}
.ff a{color:inherit;text-decoration:none}
.ff img{max-width:100%;display:block}
.ff .w{max-width:1200px;margin:0 auto;padding:0 20px}
.ff .D{font-family:Fraunces,Georgia,serif;font-weight:600;letter-spacing:-.02em;line-height:1.02}
.ff .D em{font-style:italic;font-weight:500;color:var(--red)}
.ff .ey{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--red)}
.ff .ey:before{content:'';width:26px;height:2px;background:currentColor}
.ff .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;border:0;border-radius:999px;padding:17px 30px;font:700 16px Montserrat,Arial;cursor:pointer;transition:transform .15s,box-shadow .15s,background .15s;text-align:center;line-height:1.2}
.ff .btn:hover{transform:translateY(-2px)}
.ff .btn-red{background:var(--red);color:#fff!important;box-shadow:0 14px 30px -10px rgba(225,37,45,.6)}
.ff .btn-red:hover{background:var(--red2)}
.ff .btn-navy{background:var(--navy);color:#fff!important}
.ff .btn-line{background:transparent;color:var(--navy)!important;box-shadow:inset 0 0 0 2px var(--navy)}
.ff .btn-glass{background:rgba(255,255,255,.14);color:#fff!important;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.55);backdrop-filter:blur(6px)}
.ff .btn-white{background:#fff;color:var(--navy)!important}
.ff .btn-wa{background:#1FA855;color:#fff!important}
.ff section{padding:96px 0}
.ff .h2{font-size:clamp(36px,5.4vw,64px);color:var(--navy);margin:16px 0 18px;text-wrap:balance}
.ff .lead{font-size:18px;color:var(--mute);max-width:640px}
@media(max-width:900px){.ff section{padding:68px 0}.ff .lead{font-size:16.5px}}
/* contador */
.ff-cd{display:inline-flex;align-items:baseline;gap:3px;font-variant-numeric:tabular-nums}
.ff-cd b{font-weight:800}.ff-cd i{font-style:normal;font-size:.72em;opacity:.75;margin-right:6px}
.ff-top{background:var(--red);color:#fff;font-size:13.5px;font-weight:600;padding:10px 14px;text-align:center;line-height:1.35}
.ff-top a{display:inline-flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px 12px}
.ff-top .ff-cd{background:rgba(0,0,0,.18);border-radius:8px;padding:3px 10px}
.ff-top u{font-weight:800;text-underline-offset:3px}
/* header */
.ff-hd{position:sticky;top:0;z-index:60;background:rgba(247,243,236,.92);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.ff-hd .w{display:flex;align-items:center;gap:26px;height:76px}
.ff-hd img{height:40px;width:auto}
.ff-hd nav{display:flex;gap:26px;margin-left:10px;font-weight:600;font-size:15px}
.ff-hd nav a:hover{color:var(--red)}
.ff-hd .sp{flex:1}
.ff-hd .cart{position:relative;width:48px;height:48px;border-radius:50%;border:1.5px solid var(--line);display:flex;align-items:center;justify-content:center;background:#fff;cursor:pointer}
.ff-hd .cart b{position:absolute;top:-4px;right:-4px;background:var(--red);color:#fff;font-size:11px;border-radius:999px;min-width:20px;height:20px;display:flex;align-items:center;justify-content:center;padding:0 5px}
.ff-hd .burger{display:none;width:48px;height:48px;border:0;background:none;cursor:pointer}
.ff-mnav{display:none}
@media(max-width:960px){.ff-hd nav,.ff-hd .hide-m{display:none}.ff-hd .burger{display:block}.ff-hd .w{height:64px;gap:10px}.ff-hd img{height:32px}
.ff-mnav.open{display:block;position:fixed;inset:0;top:64px;background:var(--cream);z-index:59;padding:22px 20px;overflow:auto}
.ff-mnav a{display:block;font-family:Fraunces,Georgia,serif;font-size:32px;color:var(--navy);padding:12px 0;border-bottom:1px solid var(--line)}
.ff-mnav .btn{margin-top:20px;width:100%;font-family:Montserrat;font-size:17px;border:0;padding:18px;color:#fff}}
/* hero video */
.ff-hero{position:relative;min-height:min(88vh,820px);display:flex;align-items:flex-end;color:#fff;overflow:hidden;padding:0!important;background:var(--navy)}
.ff-hero .pst{position:absolute;inset:0;background:center/cover;opacity:0;transition:opacity 1.6s ease;animation:ffkb 14s ease-in-out infinite alternate}
.ff-hero .pst.on{opacity:1}
@keyframes ffkb{from{transform:scale(1.02)}to{transform:scale(1.12)}}
.ff-hero .yt{position:absolute;inset:0;overflow:hidden;pointer-events:none;opacity:0;transition:opacity 1s}
.ff-hero .yt.on{opacity:1}
.ff-hero .yt iframe{position:absolute;top:50%;left:50%;width:max(100%,177.78vh);height:max(100%,56.25vw);transform:translate(-50%,-50%);border:0}
.ff-hero .yt .hv{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.ff-hero:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(14,27,77,.25) 0%,rgba(14,27,77,.15) 35%,rgba(10,18,52,.88) 100%),linear-gradient(90deg,rgba(10,18,52,.55),transparent 60%)}
.ff-hero .w{position:relative;z-index:2;width:100%;padding-top:120px;padding-bottom:64px}
.ff-hero .tag{display:inline-flex;align-items:center;gap:10px;font-size:12.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border-radius:999px;padding:9px 16px}
.ff-hero .tag i{width:8px;height:8px;border-radius:50%;background:#FF5960;animation:ffp 1.4s infinite}
@keyframes ffp{50%{opacity:.25}}
.ff-hero h1{font-size:clamp(52px,9vw,124px);margin:22px 0 6px;max-width:980px}
.ff .ff-hero h1 em{color:#fff;font-weight:500}
.ff-hero h1 .u{background:linear-gradient(transparent 88%,var(--red) 88%,var(--red) 96%,transparent 96%);padding:0 .04em}
.ff-hero .sub{font-size:clamp(17px,2vw,21px);max-width:640px;opacity:.95;margin:18px 0 0}
.ff-hero .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:32px}
.ff-hero .proof{display:flex;gap:28px;flex-wrap:wrap;margin-top:42px;padding-top:22px;border-top:1px solid rgba(255,255,255,.22);font-size:14px}
.ff-hero .proof b{display:block;font-family:Fraunces,Georgia,serif;font-size:30px;font-weight:600;line-height:1.1}
@media(max-width:700px){.ff-hero{min-height:92vh}.ff-hero .w{padding-bottom:40px}.ff-hero .cta .btn{width:100%}.ff-hero .proof{gap:18px}.ff-hero .proof b{font-size:24px}}
/* pasos inscripción */
.ff-how{background:var(--paper);padding:34px 0!important;border-bottom:1px solid var(--line)}
.ff-how .g{display:grid;grid-template-columns:auto 1fr 1fr 1fr;gap:26px;align-items:center}
.ff-how .t{font-family:Fraunces,Georgia,serif;font-size:26px;color:var(--navy);line-height:1.1}
.ff-how .s{display:flex;gap:14px;align-items:flex-start}
.ff-how .s i{flex:none;font-style:normal;width:44px;height:44px;border-radius:50%;background:var(--navy);color:#fff;font-weight:800;font-size:18px;display:flex;align-items:center;justify-content:center}
.ff-how .s b{display:block;font-size:16.5px;color:var(--navy)}
.ff-how .s span{font-size:14.5px;color:var(--mute)}
@media(max-width:900px){.ff-how .g{grid-template-columns:1fr;gap:18px}}
/* método */
.ff-met .g{display:grid;grid-template-columns:1.15fr 1fr;gap:20px;margin-top:44px}
.ff-met .big{position:relative;border-radius:28px;overflow:hidden;min-height:520px;background:center/cover;color:#fff;display:flex;align-items:flex-end}
.ff-met .big:after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 35%,rgba(10,18,52,.9))}
.ff-met .big div{position:relative;z-index:1;padding:34px}
.ff-met .emo{font-size:40px;line-height:1}
.ff-met h3{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:34px;line-height:1.05;margin:12px 0 8px}
.ff-met p{margin:0;font-size:16px}
.ff-met .col{display:grid;gap:20px}
.ff-met .c{border-radius:28px;padding:32px}
.ff-met .c.a{background:var(--navy);color:#fff}
.ff-met .c.a p{opacity:.85}
.ff-met .c.b{background:#FBE7E3;color:var(--ink)}
.ff-met .c.b h3{color:var(--red2)}
@media(max-width:900px){.ff-met .g{grid-template-columns:1fr}.ff-met .big{min-height:420px}.ff-met h3{font-size:28px}}
.ff-vs{margin-top:22px;border-radius:28px;overflow:hidden;background:var(--paper);border:1px solid var(--line)}
.ff-vs table{width:100%;border-collapse:collapse;font-size:15.5px}
.ff-vs th,.ff-vs td{padding:16px 22px;text-align:left;border-bottom:1px solid var(--line)}
.ff-vs th{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--mute);font-weight:800}
.ff-vs th.us{color:var(--red)}
.ff-vs td:nth-child(2){color:var(--mute)}
.ff-vs td:nth-child(3){font-weight:700;color:var(--navy);background:#FFF8F2}
.ff-vs tr:last-child td{border-bottom:0}
.ff-tbl{overflow-x:auto}
/* cursos */
.ff-cur{background:var(--paper)}
.ff-cur .head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
.ff-urg{display:inline-flex;align-items:center;gap:12px;background:#FFF0EE;color:var(--red2);border-radius:16px;padding:12px 18px;font-weight:700;font-size:14.5px}
.ff-urg .ff-cd{font-size:16px}
.ff-pack{position:relative;margin-top:40px;display:grid;grid-template-columns:1fr 1.1fr;border-radius:32px;overflow:hidden;background:var(--navy);color:#fff;box-shadow:0 40px 80px -40px rgba(14,27,77,.6)}
.ff-pack .ph{background:center 65%/cover;min-height:440px;position:relative}
.ff-pack .ph>span{position:absolute;left:20px;top:20px;background:var(--red);color:#fff;font-size:12px;font-weight:800;letter-spacing:.1em;border-radius:999px;padding:9px 15px}
.ff-pack .tx{padding:44px}
.ff-pack .k{font-size:12.5px;font-weight:800;letter-spacing:.14em;color:#FF8E93}
.ff-pack h3{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:clamp(34px,4vw,50px);line-height:1;margin:12px 0 10px}
.ff-pack h3 em{font-style:italic;font-weight:500;color:#FF8E93}
.ff-pack p{opacity:.85;margin:0 0 18px;font-size:16px}
.ff-pack ul{list-style:none;margin:0 0 22px;padding:0;display:grid;gap:9px;font-size:15.5px}
.ff-pack li:before{content:'✓';display:inline-flex;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.14);align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-right:10px}
.ff-pack .pr{display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap;padding-top:20px;border-top:1px solid rgba(255,255,255,.18)}
.ff-pack .pr b{font-size:44px;font-weight:800;line-height:1;letter-spacing:-.02em}
.ff-pack .pr small{display:block;font-size:12.5px;opacity:.75;font-weight:600;margin-top:6px}
.ff-pack .sv{background:var(--green);color:#fff;border-radius:10px;padding:8px 12px;font-size:13.5px;font-weight:800}
.ff-pack .btn{margin-top:24px;width:100%;font-size:17px;padding:19px}
@media(max-width:900px){.ff-pack{grid-template-columns:1fr}.ff-pack .ph{min-height:240px}.ff-pack .tx{padding:28px 22px}.ff-pack .pr b{font-size:36px}}
.ff-mb{display:flex;gap:4px;margin:4px 0 22px}
.ff-mb i{flex:1;font-style:normal;text-align:center;font-size:10.5px;font-weight:800;padding:5px 0;border-radius:6px;background:rgba(255,255,255,.1);color:rgba(255,255,255,.45)}
.ff-mb i.on{background:#fff;color:var(--navy)}
.ff-opts{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:18px}
.ff-opt{display:flex;flex-direction:column;background:#fff;border:1px solid var(--line);border-radius:24px;padding:26px;transition:transform .2s,box-shadow .2s}
.ff-opt:hover{transform:translateY(-3px);box-shadow:0 24px 50px -30px rgba(14,27,77,.4)}
.ff-opt .k{font-size:11.5px;font-weight:800;letter-spacing:.12em;color:var(--red)}
.ff-opt h4{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:28px;line-height:1.05;color:var(--navy);margin:10px 0 8px}
.ff-opt p{font-size:15px;color:var(--mute);margin:0 0 18px}
.ff-opt .pr{margin-top:auto;font-size:13px;color:var(--mute)}
.ff-opt .pr b{display:block;font-size:26px;color:var(--ink);font-weight:800}
.ff-opt .go{margin-top:16px;font-weight:700;color:var(--red);font-size:15px}
@media(max-width:900px){.ff-opts{grid-template-columns:1fr}}
.ff-note{margin-top:18px;font-size:14.5px;color:var(--mute)}.ff-note a{color:var(--red);font-weight:700;text-decoration:underline}
/* modalidades */
.ff-mod .g{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:44px}
.ff-mod .m{border-radius:28px;overflow:hidden;background:#fff;border:1px solid var(--line);display:flex;flex-direction:column}
.ff-mod .m .ph{height:260px;background:center/cover}
.ff-mod .m .tx{padding:30px}
.ff-mod .m .k{display:inline-block;font-size:11.5px;font-weight:800;letter-spacing:.12em;border-radius:999px;padding:6px 13px;background:var(--navy);color:#fff}
.ff-mod .m.o .k{background:var(--red)}
.ff-mod .m h3{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:36px;line-height:1.05;color:var(--navy);margin:14px 0 4px}
.ff-mod .m .wh{font-weight:600;font-size:15px;color:var(--mute)}
.ff-mod .m ul{list-style:none;padding:0;margin:20px 0 0;display:grid;gap:12px;font-size:15.5px}
.ff-mod .m li{display:flex;gap:12px}
.ff-mod .m li span{flex:none;font-size:20px;line-height:1.2}
.ff-mod .m .id{margin-top:22px;border-radius:14px;padding:14px 16px;font-size:14.5px;font-weight:600;background:var(--cream)}
@media(max-width:900px){.ff-mod .g{grid-template-columns:1fr}.ff-mod .m h3{font-size:30px}.ff-mod .m .ph{height:200px}}
/* comunidad */
.ff-com{background:var(--navy);color:#fff}
.ff-com .h2{color:#fff}.ff-com .lead{color:rgba(255,255,255,.78)}
.ff-com .ey{color:#FF8E93}
.ff-mos{display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:220px;gap:14px;margin-top:44px}
.ff-mos figure{margin:0;position:relative;border-radius:20px;overflow:hidden;background:#1d2c6e center/cover}
.ff-mos figure.t{grid-row:span 2}.ff-mos figure.w2{grid-column:span 2}
.ff-mos figcaption{position:absolute;left:12px;bottom:12px;right:12px;background:rgba(255,255,255,.95);color:var(--ink);border-radius:12px;padding:9px 12px;font-size:13.5px;font-weight:700}
@media(max-width:900px){.ff-mos{grid-template-columns:1fr 1fr;grid-auto-rows:170px}.ff-mos figure.w2{grid-column:span 2}}
.ff-hal{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;margin-top:14px;padding-bottom:8px}
.ff-hal img{flex:none;width:250px;border-radius:16px;scroll-snap-align:start}
/* clase */
.ff-cls .g{display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:start;margin-top:10px}
.ff-cls .ph{border-radius:28px;overflow:hidden;aspect-ratio:4/5;background:center/cover;position:sticky;top:100px}
.ff-tl{position:relative;margin-top:30px;padding-left:28px}
.ff-tl:before{content:'';position:absolute;left:7px;top:8px;bottom:8px;width:2px;background:var(--line)}
.ff-tl>div{position:relative;padding:0 0 28px}
.ff-tl>div:before{content:'';position:absolute;left:-27px;top:6px;width:16px;height:16px;border-radius:50%;background:var(--cream);border:3px solid var(--red)}
.ff-tl small{font-size:12.5px;font-weight:800;letter-spacing:.1em;color:var(--red)}
.ff-tl b{display:block;font-family:Fraunces,Georgia,serif;font-weight:600;font-size:24px;color:var(--navy);margin:2px 0 4px}
.ff-tl span{color:var(--mute);font-size:15.5px}
.ff-onl{background:#EAF0FF;border-radius:18px;padding:18px 20px;font-size:15.5px;color:var(--navy)}
.ff-onl b{display:block;font-size:16.5px;margin-bottom:2px}
@media(max-width:900px){.ff-cls .g{grid-template-columns:1fr;gap:26px}.ff-cls .ph{position:static;aspect-ratio:4/3}}
/* material */
.ff-mat{background:var(--paper)}
.ff-mat .g{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.ff-mat .pics{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.ff-mat .pics div{border-radius:20px;background:center/cover;aspect-ratio:3/4}
.ff-mat .pics div:nth-child(2){margin-top:40px}
.ff-mat .two{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:26px}
.ff-mat .two div{border-radius:18px;padding:20px;background:#fff;border:1px solid var(--line)}
.ff-mat .two b{display:block;font-size:17px;color:var(--navy);margin:6px 0 4px}
.ff-mat .two span{font-size:14.5px;color:var(--mute)}
@media(max-width:900px){.ff-mat .g{grid-template-columns:1fr;gap:30px}.ff-mat .two{grid-template-columns:1fr}}
/* ebooks */
.ff-eb .g{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:18px;margin-top:40px}
.ff-ebc{display:flex;flex-direction:column;background:#fff;border:1px solid var(--line);border-radius:24px;overflow:hidden}
.ff-ebc .im{display:block;aspect-ratio:1;background:#CFE6FA center/contain no-repeat}
.ff-ebc.main .im{aspect-ratio:4/3}
.ff-ebc .tx{padding:22px;display:flex;flex-direction:column;flex:1}
.ff-ebc h4{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:24px;color:var(--navy);margin:0 0 6px;line-height:1.1}
.ff-ebc p{font-size:14.5px;color:var(--mute);margin:0 0 14px}
.ff-ebc .pr{margin-top:auto;display:flex;align-items:baseline;gap:10px;flex-wrap:wrap}
.ff-ebc .pr b{font-size:24px;font-weight:800}.ff-ebc .pr s{color:var(--mute);font-size:14px}
.ff-ebc .pr em{font-style:normal;background:var(--red);color:#fff;font-size:12px;font-weight:800;border-radius:6px;padding:3px 7px}
.ff-ebc .bt{display:flex;gap:8px;margin-top:14px}
.ff-ebc .bt .btn{flex:1;padding:14px 12px;font-size:14.5px}
.ff-ebc .tip{font-size:13px;color:var(--green);font-weight:700;margin-top:10px}
@media(max-width:900px){.ff-eb .g{grid-template-columns:1fr}}
/* placas de ebook HTML */
.ebp{container-type:inline-size;position:relative;width:100%;aspect-ratio:1;overflow:hidden;background:#F7F2EC;font-family:Montserrat,Arial,sans-serif}
.ebp *{box-sizing:border-box}
.ebp .lab{position:absolute;left:6.45cqw;top:6.45cqw;font-weight:800;font-size:2.05cqw;line-height:1;letter-spacing:.22em;color:#C8323A}
.ebp .tag{position:absolute;right:6.45cqw;top:6.45cqw;background:#0C1C4F;color:#fff;font-weight:800;font-size:1.86cqw;line-height:1;letter-spacing:.12em;padding:1.46cqw 2.44cqw;border-radius:3cqw}
.ebp .bk{position:absolute;left:24.4cqw;top:12.9cqw;width:51.3cqw;height:68.4cqw;border-radius:.6cqw 2.15cqw 2.15cqw .6cqw;transform:rotate(-1.6deg);box-shadow:0 3.9cqw 4.9cqw -2.3cqw rgba(20,30,70,.38),0 6.8cqw 8.8cqw -3.9cqw rgba(20,30,70,.28);overflow:hidden}
.ebp .bk:before{content:"";position:absolute;left:0;top:0;bottom:0;width:1.56cqw;background:rgba(0,0,0,.18)}
.ebp .in{position:absolute;left:6.64cqw;top:6.45cqw;right:4.5cqw}
.ebp .k{font-weight:700;font-size:1.66cqw;line-height:1;letter-spacing:.2em;color:rgba(255,255,255,.88)}
.ebp .t{display:block;font-family:Fraunces,Georgia,serif;font-weight:600;color:#fff;font-size:7.8cqw;line-height:.98;margin-top:2.9cqw;letter-spacing:-.01em}
.ebp .t em{font-style:italic;font-weight:500;display:block}
.ebp p{font-weight:600;font-size:2cqw;line-height:1.38;color:rgba(255,255,255,.92);margin:2.54cqw 0 0;max-width:32.2cqw}
.ebp .cd{position:absolute;left:34.2cqw;top:44.1cqw;width:22.5cqw;height:11.9cqw;display:flex;background:#fff;border-radius:1.37cqw;box-shadow:0 1.76cqw 2.9cqw -1.17cqw rgba(0,0,0,.35);overflow:hidden}
.ebp .cd i{flex:0 0 2.9cqw}
.ebp .cd div{padding:1.56cqw 1.76cqw;white-space:nowrap}
.ebp .cd small{display:block;font-weight:800;font-size:1.46cqw;line-height:1;letter-spacing:.12em;color:#0C1C4F}
.ebp .cd span{display:block;font:italic 500 2.64cqw/1.05 Fraunces,Georgia,serif;margin-top:.88cqw}
.ebp .cd small.s{font-weight:700;font-size:1.27cqw;letter-spacing:.06em;color:#6B7180;margin-top:1.17cqw}
.ebp .lg{position:absolute;left:6.64cqw;bottom:4.9cqw;width:8.4cqw;height:auto!important;max-width:none;filter:brightness(0) invert(1)}
.ebp .pdf{position:absolute;right:5.1cqw;bottom:6cqw;font-weight:800;font-size:1.46cqw;line-height:1;letter-spacing:.18em;color:rgba(255,255,255,.85)}
.ebp .ch{position:absolute;left:0;right:0;top:89cqw;display:flex;justify-content:center;gap:1.37cqw}
.ebp .ch span{background:#fff;border-radius:3cqw;padding:1.37cqw 2.34cqw;font-weight:700;font-size:2.05cqw;line-height:1;color:#0C1C4F;box-shadow:0 .6cqw 1.76cqw rgba(12,28,79,.08);white-space:nowrap}
.ff-gal figure .ebp{height:100%}
.ff-ebc .im.pl{background:none!important;overflow:hidden}
/* grilla de ebooks: el pack arriba a lo ancho y los 4 ebooks abajo */
.ff-eb .g.g5{grid-template-columns:repeat(4,1fr)}
.ff-eb .g.g5 .ff-ebc.main{grid-column:1/-1;flex-direction:row}
.ff-eb .g.g5 .ff-ebc.main .im{flex:0 0 52%;aspect-ratio:4/3}
.ff-eb .g.g5 .ff-ebc.main .tx{padding:34px 36px;justify-content:center}
.ff-eb .g.g5 .ff-ebc.main h4{font-size:34px}
.ff-eb .g.g5 .ff-ebc.main p{font-size:16px}
.ff-eb .g.g5 .ff-ebc.main .pr{margin-top:6px}
.ff-eb .g.g5 .ff-ebc.main .bt{max-width:380px}
.ff-eb .g.g5 .ff-ebc h4{font-size:22px}
@media(max-width:1100px){.ff-eb .g.g5{grid-template-columns:repeat(2,1fr)}}
@media(max-width:900px){.ff-eb .g.g5{grid-template-columns:1fr}.ff-eb .g.g5 .ff-ebc.main{flex-direction:column}.ff-eb .g.g5 .ff-ebc.main .im{flex:none}.ff-eb .g.g5 .ff-ebc.main .tx{padding:22px}.ff-eb .g.g5 .ff-ebc.main h4{font-size:24px}}

/* nivel cta */
.ff-lvl{position:relative;overflow:hidden;background:var(--red);color:#fff;border-radius:32px;padding:56px;display:grid;grid-template-columns:1.3fr 1fr;gap:34px;align-items:center}
.ff-lvl h2{font-size:clamp(38px,5vw,62px);margin:12px 0}
.ff .ff-lvl h2 em{color:#fff}
.ff-lvl p{opacity:.92;font-size:17px;margin:0}
.ff-lvl .bt{display:grid;gap:12px}
.ff-lvl .ey{color:#fff}
@media(max-width:900px){.ff-lvl{grid-template-columns:1fr;padding:34px 24px}}
/* threshold */
.ff-th{padding:28px 0 0!important}
.ff-th a{display:flex;align-items:center;gap:20px;justify-content:space-between;flex-wrap:wrap;border:1px solid var(--gold);background:linear-gradient(120deg,#151515,#2a2418);color:#F4EBDD;border-radius:22px;padding:24px 30px}
.ff-th small{font-size:11.5px;letter-spacing:.18em;font-weight:800;color:var(--gold)}
.ff-th b{display:block;font-family:Fraunces,Georgia,serif;font-weight:500;font-style:italic;font-size:24px;line-height:1.2;margin-top:4px}
.ff-th span{font-size:14.5px;opacity:.8}
.ff-th .go{font-weight:700;font-size:15px;color:var(--gold);white-space:nowrap}
/* faq */
.ff-faq{max-width:860px}
.ff-faq details{border-bottom:1px solid var(--line);padding:20px 0}
.ff-faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:16px;font-weight:700;font-size:17.5px;color:var(--navy)}
.ff-faq summary::-webkit-details-marker{display:none}
.ff-faq summary:after{content:'+';color:var(--red);font-size:24px;line-height:1}
.ff-faq details[open] summary:after{content:'–'}
.ff-faq p{color:var(--mute);margin:10px 0 0;font-size:16px}
/* footer */
.ff-ft{background:#091237;color:#C5CBE3;padding:64px 0 32px;font-size:14.5px}
.ff-ft .g{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:30px}
.ff-ft h5{color:#fff;font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;margin:0 0 12px}
.ff-ft a{display:block;padding:4px 0}.ff-ft a:hover{color:#fff}
.ff-ft .big{font-family:Fraunces,Georgia,serif;font-size:34px;color:#fff;line-height:1.05;margin:16px 0}
.ff-ft .big em{font-style:italic;color:#FF8E93}
.ff-ft .bt{border-top:1px solid rgba(255,255,255,.12);margin-top:40px;padding-top:18px;font-size:12.5px;opacity:.7}
@media(max-width:900px){.ff-ft .g{grid-template-columns:1fr 1fr}.ff-ft .g>div:first-child{grid-column:1/-1}}
.ff-waf{position:fixed;right:18px;bottom:18px;z-index:70;width:58px;height:58px;border-radius:50%;background:#1FA855;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 26px rgba(0,0,0,.25)}
body.ff-prod .ff-waf{bottom:100px}
@media(min-width:901px){body.ff-prod .ff-waf{bottom:18px}}
/* ficha */
.ff-pb{position:relative;color:#fff;background:var(--navy);overflow:hidden}
.ff-pb .bg{position:absolute;inset:0;background:center/cover}
.ff-pb:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(14,27,77,.96) 0%,rgba(14,27,77,.82) 45%,rgba(14,27,77,.25) 100%)}
.ff-pb .strip{position:relative;z-index:2;background:var(--red);text-align:center;font-size:13px;font-weight:800;letter-spacing:.06em;padding:9px 12px}
.ff-pb .w{position:relative;z-index:2;padding-top:44px;padding-bottom:48px}
.ff-pb .mod{display:inline-block;background:var(--red);font-size:12px;font-weight:800;letter-spacing:.1em;border-radius:8px;padding:6px 12px}
.ff-pb .big{font-family:Montserrat;font-weight:800;font-size:clamp(44px,7vw,84px);line-height:.95;letter-spacing:-.02em;margin:16px 0 14px;text-transform:uppercase}
.ff-pb .big span{display:inline-block;background:var(--red);padding:2px 14px;border-radius:10px;margin-top:6px}
.ff-pb .meta{font-size:16px;font-weight:600;opacity:.95}
.ff-dl{background:#FFE9E7;color:var(--red2)}
.ff-dl .w{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;padding-top:12px;padding-bottom:12px;font-weight:700;font-size:15px}
.ff-dl .ff-cd{font-size:15px}
.ff-pd{padding:34px 0 64px}
.ff-pd .g{display:grid;grid-template-columns:.85fr 1.15fr;gap:48px;align-items:start}
.ff-pd .vis{position:sticky;top:100px;display:grid;gap:12px}
.ff-pd .vis .main{border-radius:26px;aspect-ratio:4/5;background:#ddd center/cover}
.ff-pd .vis .th{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.ff-pd .vis .th div{border-radius:14px;aspect-ratio:1;background:center/cover}
.ff-pd .vis .why{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.ff-pd .vis .why div{background:#fff;border-radius:16px;padding:14px 10px;font-size:13px;font-weight:600;text-align:center;border:1px solid var(--line)}
.ff-pd .vis .why b{display:block;font-family:Fraunces,Georgia,serif;font-size:26px;color:var(--red);font-weight:600}
.ff-pd .bc{font-size:13px;color:var(--mute);margin-bottom:10px}.ff-pd .bc a{text-decoration:underline}
.ff-pd h1{font-family:Montserrat;font-weight:800;font-size:clamp(26px,3vw,34px);line-height:1.15;color:var(--navy);margin:0 0 8px;letter-spacing:-.01em}
.ff-proof{font-size:14.5px;color:var(--mute);font-weight:600;margin-bottom:18px}
.ff-proof b{color:var(--navy)}
.ff-price{background:#F1FBF5;border:2px solid var(--green);border-radius:20px;padding:18px 20px}
.ff-price s{color:#6B7385;font-size:21px;font-weight:700;text-decoration-thickness:2px}
.ff-prow{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.ff-price .ff-prow .k{background:var(--green);color:#fff;border-radius:10px;padding:6px 10px;font-size:12px;line-height:1.3;letter-spacing:.04em}
.ff-price .ff-prow .k small{display:block;font-weight:700;letter-spacing:0;font-size:11.5px;opacity:.95}
.ff-plan .pp small{line-height:1.35;display:block}
.ff-price .t{font-size:44px;font-weight:800;line-height:1.05;letter-spacing:-.02em}
.ff-price .k{color:var(--green);font-weight:800;font-size:13px;letter-spacing:.06em}
.ff-price .l{font-size:14.5px;color:var(--mute);margin-top:4px}
.ff-step{margin-top:28px}
.ff-step .st{display:flex;align-items:center;gap:12px;font-weight:800;font-size:19px;color:var(--navy);margin-bottom:14px}
.ff-step .st i{font-style:normal;flex:none;width:32px;height:32px;border-radius:50%;background:var(--navy);color:#fff;font-size:15px;display:flex;align-items:center;justify-content:center}
.ff-step .st .ok{margin-left:auto;font-size:13px;color:var(--green);font-weight:800}
.ff-seg{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.ff-seg button,.ff-lv button,.ff-hr button{border:2px solid var(--line);background:#fff;border-radius:16px;padding:15px;text-align:left;cursor:pointer;font:inherit;color:var(--ink)}
.ff-seg button b{display:block;font-size:17px;color:var(--navy)}
.ff-seg button span,.ff-lv button span{font-size:13.5px;color:var(--mute)}
.ff-seg button.on,.ff-lv button.on,.ff-hr button.on{border-color:var(--navy);background:#EEF2FC;box-shadow:0 0 0 3px rgba(42,71,184,.14)}
.ff-plan{position:relative;display:block;width:100%;text-align:left;border:2px solid var(--line);background:#fff;border-radius:20px;padding:18px;margin-bottom:12px;cursor:pointer;font:inherit;color:var(--ink);transition:border-color .15s}
.ff-plan.big{padding:26px 20px 20px}
.ff-plan.on{border-color:var(--red);background:#FFF6F5;box-shadow:0 0 0 4px rgba(225,37,45,.12)}
.ff-plan .tag{position:absolute;top:-12px;left:16px;background:var(--red);color:#fff;font-size:11px;font-weight:800;letter-spacing:.06em;border-radius:999px;padding:5px 12px}
.ff-plan .r{display:flex;justify-content:space-between;gap:12px;align-items:flex-start}
.ff-plan .nm{font-weight:800;font-size:17px;color:var(--navy)}
.ff-plan.big .nm{font-size:21px}
.ff-plan .ds{font-size:14px;color:var(--mute);margin-top:4px}
.ff-plan .sv{display:inline-block;margin-top:8px;background:var(--green);color:#fff;font-size:12.5px;font-weight:800;border-radius:8px;padding:4px 9px}
.ff-plan .pp{text-align:right;white-space:nowrap}
.ff-plan .pp b{display:block;font-size:20px;font-weight:800}
.ff-plan.big .pp b{font-size:25px}
.ff-plan .pp small{font-size:11.5px;color:var(--mute)}
.ff-plan .ff-mb i{background:#EEF0F5;color:#9AA3B8}.ff-plan .ff-mb i.on{background:var(--navy);color:#fff}.ff-plan.on .ff-mb i.on{background:var(--red)}
.ff-plan .ff-mb{margin:12px 0 0}
.ff-oo{font-size:12px;font-weight:800;letter-spacing:.1em;color:var(--mute);margin:8px 0 10px}
.ff-lv,.ff-hr{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.ff-lv button b{display:block;font-size:15.5px;color:var(--navy)}
.ff-lv button[disabled],.ff-hr button[disabled]{opacity:.38;cursor:not-allowed}
.ff-help{font-size:14.5px;margin-top:12px;color:var(--mute)}.ff-help a{color:var(--red);font-weight:700;text-decoration:underline}
.ff-hr button small{display:block;font-size:13px;font-weight:700;color:var(--mute)}
.ff-hr button b{display:block;font-size:20px;font-weight:800;margin:2px 0}
.ff-hr button span{font-size:12.5px;color:var(--mute)}
.ff-hr .empty{grid-column:1/-1;background:#fff;border:1.5px dashed var(--line);border-radius:14px;padding:16px;font-size:14.5px;color:var(--mute)}
.ff-ups{margin-top:14px;background:#FFF8E8;border:1.5px solid #F1D48A;border-radius:16px;padding:16px;font-size:15px}
.ff-ups b{color:var(--navy)}
.ff-ups button{margin-top:10px;border:0;background:var(--navy);color:#fff;border-radius:999px;padding:11px 18px;font:700 14.5px Montserrat;cursor:pointer}
.ff-buy{margin-top:26px}
.ff-buy .btn{width:100%;font-size:18px;padding:20px}
.ff-sum{font-size:14px;color:var(--mute);margin-top:10px;text-align:center}
.ff-next{margin-top:22px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:18px 20px}
.ff-next b{display:block;color:var(--navy);margin-bottom:8px}
.ff-next ol{margin:0;padding-left:20px;display:grid;gap:6px;font-size:14.5px;color:var(--mute)}
.ff-trust{display:grid;gap:8px;margin-top:16px;font-size:14.5px;font-weight:600;color:var(--navy)}
.ff-alt{margin-top:16px;font-size:14.5px;color:var(--mute)}.ff-alt a{color:var(--red);font-weight:700;text-decoration:underline}
.ff-bar{position:fixed;left:0;right:0;bottom:0;z-index:65;background:#fff;border-top:1px solid var(--line);box-shadow:0 -10px 24px rgba(0,0,0,.08);padding:10px 14px calc(10px + env(safe-area-inset-bottom,0px));display:none;align-items:center;gap:12px}
.ff-bar .p{flex:1;min-width:0;font-size:12px;color:var(--mute);line-height:1.25}.ff-bar .p span{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ff-bar .p b{display:block;font-size:20px;color:var(--ink)}
.ff-bar .btn{padding:15px 22px;font-size:16px}
@media(max-width:900px){.ff-pd .g{grid-template-columns:1fr;gap:6px}.ff-pd .vis{position:static}.ff-pd .vis .main,.ff-pd .vis .th,.ff-pd .vis .why{display:none}.ff-bar{display:flex}.ff-pb .w{padding-top:30px;padding-bottom:30px}.ff-pb:after{background:linear-gradient(90deg,rgba(14,27,77,.95),rgba(14,27,77,.6))}.ff-lv,.ff-hr{grid-template-columns:1fr 1fr}.ff-price .t{font-size:38px}}
.ff-qa{padding:10px 0 80px}
.ff-qa .q{border-bottom:1px solid var(--line);padding:18px 0}
.ff-qa .q b{display:block;font-size:16.5px;color:var(--ink)}
.ff-qa .q p{margin:8px 0 0;padding-left:16px;border-left:3px solid var(--line);color:var(--mute);font-size:15.5px}
.ff-qa .q p small{display:block;font-size:12px;color:#9AA0B4;margin-top:4px}
body.ff-prod #single-product,body.ff-prod .js-product-detail,body.ff-prod #ns-section-main_product,body.ff-prod #ns-section-product_list,body.ff-prod [data-store="product-related"],body.ff-prod .section-product-related{position:absolute!important;left:-99999px!important;top:0;width:1px;height:1px;overflow:hidden}
body.ff-home #MainContent>*:not(.ff),body.ff-cat #MainContent>*:not(.ff),body.ff-pg #MainContent>*:not(.ff){display:none!important}
/* nivelación */
.ff-nv-h{background:var(--navy);color:#fff;padding:80px 0 80px}
.ff-nv-h h1{font-size:clamp(48px,7vw,96px);margin:16px 0}
.ff .ff-nv-h h1 em{color:#FF8E93}
.ff-nv-h p{font-size:19px;opacity:.88;max-width:640px}
.ff-nv-h .ey{color:#FF8E93}
.ff-ways{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:-44px}
.ff-way{background:#fff;border-radius:24px;padding:28px;border:1px solid var(--line);box-shadow:0 24px 50px -30px rgba(14,27,77,.35);display:flex;flex-direction:column}
.ff-way.rec{box-shadow:0 0 0 2.5px var(--red),0 24px 50px -30px rgba(14,27,77,.35)}
.ff-way .k{font-size:11.5px;font-weight:800;letter-spacing:.1em;color:var(--red)}
.ff-way h3{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:30px;line-height:1.05;color:var(--navy);margin:10px 0 8px}
.ff-way p{font-size:15.5px;color:var(--mute);margin:0 0 20px}
.ff-way .btn{margin-top:auto}
@media(max-width:900px){.ff-ways{grid-template-columns:1fr;margin-top:24px}}
.ff-quiz{background:#fff;border-radius:26px;border:1px solid var(--line);padding:32px;max-width:800px}
.ff-quiz .q{margin-bottom:24px}
.ff-quiz .q b{display:block;font-size:18px;color:var(--navy);margin-bottom:12px}
.ff-quiz .ops{display:flex;flex-wrap:wrap;gap:8px}
.ff-quiz .ops button{border:2px solid var(--line);background:#fff;border-radius:999px;padding:11px 16px;font:600 15px Montserrat,Arial;cursor:pointer;color:var(--ink)}
.ff-quiz .ops button.on{border-color:var(--navy);background:#EEF2FC;color:var(--navy)}
.ff-res{display:none;margin-top:10px;background:var(--navy);color:#fff;border-radius:22px;padding:26px}
.ff-res.show{display:block}
.ff-res .D{font-size:40px;margin:6px 0 10px}
.ff-lvt{width:100%;border-collapse:collapse;background:#fff;font-size:15px}
.ff-lvt td,.ff-lvt th{padding:15px 18px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
.ff-lvt th{background:var(--navy);color:#fff;font-size:12px;letter-spacing:.1em;text-transform:uppercase}
.ff-lvt td:first-child{font-weight:800;color:var(--navy);white-space:nowrap}
.ff-tblw{overflow-x:auto;border-radius:20px;border:1px solid var(--line)}
/* carrito */
#modal-cart{font-family:Montserrat,Arial,sans-serif}
#modal-cart .btn-primary{background:var(--red)!important;border-color:var(--red)!important;border-radius:999px!important;font-weight:700!important;font-size:17px!important}
.ff-cup{margin:14px 0;display:grid;gap:10px;font-family:Montserrat,Arial,sans-serif}
.ff-cup .c{display:flex;gap:12px;align-items:center;border:1.5px solid var(--line);border-radius:16px;padding:12px;background:#FFFBF4}
.ff-cup .c img{width:62px;height:62px;border-radius:10px;object-fit:cover;flex:none}
.ff-cup .c div{flex:1;font-size:13.5px;line-height:1.35;color:var(--ink)}
.ff-cup .c b{display:block;font-size:14px;color:var(--navy)}
.ff-cup .c em{font-style:normal;color:var(--green);font-weight:800}
.ff-cup .c button,.ff-cup .c a.b{flex:none;border:0;background:var(--navy);color:#fff;border-radius:999px;padding:10px 14px;font:700 13px Montserrat;cursor:pointer}
.ff-cup .hint{font-size:12.5px;color:var(--mute);text-align:center}
`;
  CSS += String.raw`
.ff-waf{border:0;cursor:pointer;width:auto;height:58px;border-radius:999px;padding:0 18px 0 15px;gap:10px;color:#fff;font:700 15px Montserrat,Arial}
.ff-waf .lb{white-space:nowrap}
@media(max-width:600px){.ff-waf .lb{display:none}.ff-waf{width:58px;padding:0}}
.ff-wap{position:fixed;right:18px;bottom:88px;z-index:80;width:min(360px,calc(100vw - 32px));background:#fff;border-radius:22px;box-shadow:0 30px 60px -20px rgba(9,18,55,.45);overflow:hidden;opacity:0;transform:translateY(12px) scale(.98);pointer-events:none;transition:opacity .2s,transform .2s}
.ff-wap.open{opacity:1;transform:none;pointer-events:auto}
body.ff-prod .ff-wap{bottom:170px}
@media(min-width:901px){body.ff-prod .ff-wap{bottom:88px}}
.ff-wap .hd{position:relative;background:#1FA855;color:#fff;padding:18px 48px 18px 20px}
.ff-wap .hd b{display:block;font-size:19px}
.ff-wap .hd span{display:block;font-size:14.5px;opacity:.95;margin-top:4px;line-height:1.4}
.ff-wap .x{position:absolute;right:10px;top:10px;width:34px;height:34px;border-radius:50%;border:0;background:rgba(255,255,255,.2);color:#fff;font-size:22px;line-height:1;cursor:pointer}
.ff-wap .ops{display:grid;gap:8px;padding:14px}
.ff-wap .ops a{display:flex;align-items:center;gap:12px;border:1.5px solid var(--line);border-radius:14px;padding:14px;font-weight:700;font-size:16px;color:var(--navy)}
.ff-wap .ops a:hover{border-color:#1FA855;background:#F1FBF5}
.ff-wap .ops i{font-style:normal;font-size:20px}
.ff-wap .ops em{margin-left:auto;font-style:normal;color:#1FA855;font-size:22px}
.ff-wap .ft{font-size:12.5px;color:var(--mute);text-align:center;padding:0 14px 14px}
body.ff-landing .ff-more,body.ff-landing .ff-alt{display:none!important}

/* ===== v6: más simple y legible ===== */
.ff{font-size:17.5px}
.ff .lead{font-size:19px;color:#3F4660}
.ff .ey{font-size:13.5px}
.ff .btn{min-height:56px;font-size:17px}
.ff-hd nav{font-size:16.5px;gap:30px}
.ff-hero .nv{margin:18px 0 0;font-size:17px}.ff-hero .nv a{text-decoration:underline;font-weight:700}
.ff-ch{max-width:760px}
.ff-cc3{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:18px;margin-top:34px;align-items:stretch}
.ff-cc3 .cc{position:relative;display:flex;flex-direction:column;background:#fff;border:2px solid var(--line);border-radius:28px;padding:30px 26px 26px;color:var(--ink);overflow:hidden;transition:transform .15s,box-shadow .15s}
.ff-cc3 .cc:hover{transform:translateY(-3px);box-shadow:0 26px 50px -30px rgba(14,27,77,.45)}
.ff-cc3 .cc small{font-size:13px;font-weight:800;letter-spacing:.1em;color:var(--red)}
.ff-cc3 .cc h3{font:600 clamp(34px,3.4vw,46px)/1 Fraunces,Georgia,serif;color:var(--navy);margin:10px 0 10px;letter-spacing:-.02em}
.ff-cc3 .cc p{font-size:16.5px;color:#4A5170;margin:0 0 18px}
.ff-cc3 .pz{margin-top:auto;display:grid;gap:10px}
.ff-cc3 .pz>div{background:var(--cream);border-radius:16px;padding:14px 16px}
.ff-cc3 .pz span{display:block;font-size:14.5px;font-weight:700;color:#4A5170}
.ff-cc3 .pz b{display:block;font-size:30px;font-weight:800;color:var(--ink);letter-spacing:-.02em;line-height:1.15}
.ff-cc3 .pz b i{font-style:normal;font-size:16px;font-weight:700;color:#4A5170}
.ff-cc3 .pz em{display:block;font-style:normal;font-size:13.5px;font-weight:700;color:var(--green);margin-top:4px}
.ff-cc3 .pz .alt b{font-size:24px}
.ff-cc3 .pz .alt.rec{background:#EAF7EE!important;border:2px solid #BFE5CB}
.ff-cc3 .cc.ver .pz .alt.rec{background:#fff!important}
.ff-pnm{font-size:14px;font-weight:800;letter-spacing:.06em;color:var(--navy);margin-bottom:2px}
.ff-cov{font-size:15.5px;font-weight:600;color:var(--ink);margin:6px 0 8px}
.ff-plan .bd{font-size:14.5px;font-weight:700;color:var(--navy);background:#F1F3F9;border-radius:10px;padding:8px 10px;margin-top:10px}
.ff-plan .pp small:first-child{display:block;font-weight:700}
.ff-cc3 .go{margin-top:18px;display:flex;align-items:center;justify-content:center;min-height:56px;border-radius:999px;background:var(--navy);color:#fff;font-weight:800;font-size:17px}
.ff-cc3 .cc.ver{background:linear-gradient(150deg,#FF7A45 0%,#F2464B 45%,#E8217A 100%);border-color:transparent;color:#fff;box-shadow:0 34px 60px -30px rgba(232,33,122,.7)}
.ff-cc3 .cc.ver small,.ff-cc3 .cc.ver p{color:#fff}
.ff-cc3 .cc.ver h3{color:#fff;font-size:clamp(46px,4.6vw,64px)}
.ff-cc3 .cc.ver .pz>div{background:rgba(255,255,255,.95)}
.ff-cc3 .cc.ver .go{background:#fff;color:#C8102E}
.ff-cc3 .cc.ver .rib{align-self:flex-start;background:#fff;color:#D92B3A;font-weight:800;font-size:13px;letter-spacing:.08em;border-radius:999px;padding:8px 14px;margin-bottom:14px}
.ff-cc3 .cc.ver .sun{position:absolute;right:-18px;top:-18px;width:150px;height:150px;animation:ffSpin 30s linear infinite;opacity:.9}
@keyframes ffSpin{to{transform:rotate(360deg)}}
@media(max-width:960px){.ff-cc3{grid-template-columns:1fr}}
.ff-note{font-size:16.5px;margin-top:20px}.ff-note a{color:var(--red);font-weight:700;text-decoration:underline}
.ff-mods2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
.ff-mods2 div{background:#fff;border:1px solid var(--line);border-radius:20px;padding:20px 22px}
.ff-mods2 b{display:block;font-size:19px;color:var(--navy);margin-bottom:4px}
.ff-mods2 span{font-size:16px;color:#4A5170}
@media(max-width:700px){.ff-mods2{grid-template-columns:1fr}}
.ff-sub{font:600 clamp(28px,3.4vw,38px)/1.05 Fraunces,Georgia,serif;color:var(--navy);margin:50px 0 0}
.ff-pages{display:grid;grid-template-columns:repeat(5,1fr);overflow:visible;padding:14px 0 0}
.ff-pages button:nth-child(n+6){display:none}
@media(max-width:900px){.ff-pages{grid-template-columns:1fr 1fr;gap:14px}.ff-pages button:nth-child(n+5){display:none}}
@media(max-width:900px){.ff-reels .rl{display:grid;grid-template-columns:1fr 1fr;overflow:visible}.ff-reels .rc{flex:none}.ff-reels .rc:nth-child(5){display:none}}
.ff-tl4 span,.ff-how li span{font-size:16.5px}
.ff-tl4 small{font-size:13px}
/* ficha */
.ff-pb.ver{background:linear-gradient(120deg,#FF7A45 0%,#F2464B 50%,#E8217A 100%)}
.ff-pb.ver:after{opacity:.5}
.ff-pb.ver .mod{background:#fff;color:#D92B3A}
.ff-pb.ver .big span{background:var(--navy)}
.ff-step .st{font-size:21px}
.ff-step .st i{width:36px;height:36px;font-size:17px}
.ff-plan .nm{font-size:19px}.ff-plan.big .nm{font-size:22px}
.ff-plan .ds{font-size:15.5px}
.ff-seg button b{font-size:19px}.ff-seg button span,.ff-lv button span{font-size:15px}
.ff-lv button b{font-size:17px}
.ff-hr button b{font-size:22px}.ff-hr button small{font-size:14.5px}.ff-hr button span{font-size:14px}
.ff-more{display:block;width:100%;border:2px dashed var(--line);background:transparent;border-radius:16px;padding:14px;font:700 16px Montserrat,Arial;color:var(--navy);cursor:pointer;margin-bottom:12px}
.ff-cont{width:100%;margin-top:6px}
.ff-help{font-size:16px}
.ff-dl .w{font-size:16px}
.mg{--navy:#0E1B4D;--red:#E1252D;--pink:#E8217A;--cyan:#1C8FB8;--green:#2FA43E;container-type:inline-size;position:relative;aspect-ratio:1;overflow:hidden;background:#F7F3EC;border-radius:24px;font-family:Montserrat,Arial,sans-serif;color:var(--navy)}
.mg *{box-sizing:border-box}
.mg .grid{position:absolute;inset:0;background-image:radial-gradient(rgba(14,27,77,.09) .28cqw,transparent .3cqw);background-size:4cqw 4cqw}
.mg .blob{position:absolute;border-radius:50%;filter:blur(6cqw);opacity:.55;animation:mgFloat 9s ease-in-out infinite alternate}
.mg .blob.a{width:55cqw;height:55cqw;background:#FFD6E6;right:-14cqw;top:-12cqw}
.mg .blob.b{width:45cqw;height:45cqw;background:#CDEBF6;left:-14cqw;bottom:-10cqw;animation-delay:-4s}
.mg .lg{position:absolute;left:7cqw;top:6.5cqw;height:7cqw}
.mg .mgk{position:absolute;left:7cqw;top:17cqw;font-weight:800;font-size:2.3cqw;letter-spacing:.2em;color:var(--red);text-transform:uppercase;opacity:0;animation:mgIn .7s .2s forwards}
.mg h3{position:absolute;left:7cqw;top:22cqw;margin:0;font:600 11cqw/0.98 Fraunces,Georgia,serif;letter-spacing:-.03em;width:86cqw}
.mg h3 span{display:block;overflow:hidden;padding-bottom:.12em;margin-bottom:-.12em}
.mg h3 span i{display:block;font-style:normal;transform:translateY(105%);animation:mgUp .8s cubic-bezier(.2,.8,.2,1) forwards}
.mg h3 span:nth-child(2) i{animation-delay:.12s}.mg h3 span:nth-child(3) i{animation-delay:.24s}
.mg h3 em{font-style:italic;font-weight:500;color:var(--red)}
.mg .meta{position:absolute;left:7cqw;bottom:7cqw;display:flex;flex-wrap:wrap;gap:1.6cqw;width:86cqw}
.mg .meta b{font-weight:700;font-size:2.3cqw;border-radius:99px;padding:1.5cqw 2.4cqw;white-space:nowrap;background:#fff;box-shadow:0 .4cqw 0 rgba(14,27,77,.08);opacity:0;transform:translateY(3cqw);animation:mgIn .6s forwards}
.mg .meta b:first-child{background:var(--red);color:#fff}
.mg .meta b:nth-child(1){animation-delay:.9s}.mg .meta b:nth-child(2){animation-delay:1.05s}.mg .meta b:nth-child(3){animation-delay:1.2s}
.mg .bb{position:absolute;font:600 3.2cqw Fraunces,Georgia,serif;color:#fff;border-radius:3cqw;padding:1.8cqw 3cqw;white-space:nowrap;opacity:0;transform:scale(.4);transform-origin:20% 100%;animation:mgPop 6s infinite}
.mg .bb:after{content:'';position:absolute;left:3.6cqw;bottom:-2cqw;border:1.2cqw solid transparent;border-top:1.6cqw solid currentColor;border-bottom:0}
.mg .bb.p{background:var(--pink);color:#fff}.mg .bb.p:after{border-top-color:var(--pink)}
.mg .bb.c{background:var(--cyan)}.mg .bb.c:after{border-top-color:var(--cyan)}
.mg .bb.g{background:var(--green)}.mg .bb.g:after{border-top-color:var(--green)}
.mg .bb.n{background:var(--navy)}.mg .bb.n:after{border-top-color:var(--navy)}
.mg .bb.r{transform-origin:80% 100%}.mg .bb.r:after{left:auto;right:3.6cqw}
.mg .b1{right:7cqw;bottom:35cqw;animation-delay:1.4s}
.mg .b2{right:24cqw;bottom:25cqw;animation-delay:2s}
.mg .b3{right:8cqw;bottom:15.5cqw;animation-delay:2.6s}
.mg .stk{position:absolute;right:7cqw;top:6cqw;width:18cqw;height:18cqw;border-radius:50%;background:var(--navy);color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;transform:rotate(-10deg) scale(0);animation:mgStamp .7s .5s cubic-bezier(.3,1.6,.5,1) forwards}
.mg .stk small{font-weight:800;font-size:1.7cqw;letter-spacing:.14em}
.mg .stk b{font:600 6.5cqw/1 Fraunces,Georgia,serif}
/* chat (online) */
.mg .chat{position:absolute;left:7cqw;right:7cqw;top:47cqw;display:flex;flex-direction:column;gap:2.2cqw}
.mg .msg{max-width:74%;font-weight:600;font-size:3cqw;line-height:1.3;border-radius:3cqw;padding:2.4cqw 3.2cqw;opacity:0;transform:translateY(3cqw);animation:mgChat 7s infinite}
.mg .msg small{display:block;font-weight:800;font-size:1.9cqw;letter-spacing:.12em;opacity:.75;margin-bottom:.6cqw}
.mg .msg.l{background:#fff;align-self:flex-start;border-bottom-left-radius:.8cqw;box-shadow:0 .5cqw 1.4cqw rgba(14,27,77,.08)}
.mg .msg.rt{background:var(--navy);color:#fff;align-self:flex-end;border-bottom-right-radius:.8cqw}
.mg .msg.ok{background:#E3F4E6;color:#17602A;align-self:flex-start}
.mg .msg:nth-child(1){animation-delay:.6s}.mg .msg:nth-child(2){animation-delay:1.6s}.mg .msg:nth-child(3){animation-delay:2.6s}
.mg .live{position:absolute;right:7cqw;top:7.5cqw;display:flex;align-items:center;gap:1.2cqw;background:#fff;border-radius:99px;padding:1.4cqw 2.4cqw;font-weight:800;font-size:2.1cqw;letter-spacing:.14em;color:var(--red);box-shadow:0 .4cqw 0 rgba(14,27,77,.08)}
.mg .live i{width:1.6cqw;height:1.6cqw;border-radius:50%;background:var(--red);animation:mgBlink 1.2s infinite}
@keyframes mgUp{to{transform:none}}
@keyframes mgIn{to{opacity:1;transform:none}}
@keyframes mgStamp{to{transform:rotate(-10deg) scale(1)}}
@keyframes mgPop{0%{opacity:0;transform:scale(.4)}8%{opacity:1;transform:scale(1.06)}12%,80%{opacity:1;transform:scale(1)}88%,100%{opacity:0;transform:scale(.9) translateY(-2cqw)}}
@keyframes mgChat{0%{opacity:0;transform:translateY(3cqw)}7%,82%{opacity:1;transform:none}92%,100%{opacity:0;transform:translateY(-2cqw)}}
@keyframes mgFloat{to{transform:translate(4cqw,5cqw) scale(1.1)}}
@keyframes mgBlink{50%{opacity:.25}}
@media (prefers-reduced-motion:reduce){.mg *{animation-duration:.01s!important;animation-iteration-count:1!important;opacity:1!important;transform:none!important}}
.ff-gal figure .mg{border-radius:0;width:100%;height:100%}
.ff-pd .ff-gal .ar,.ff-gal .ar{top:auto;bottom:14px;transform:none}
.ff .mg img.lg{width:auto!important;height:7cqw!important;object-fit:contain!important;max-width:none}
.ff .mg h3{color:#0E1B4D;padding:0;margin:0;text-transform:none;font:600 11cqw/.98 Fraunces,Georgia,serif;letter-spacing:-.03em}
.ff .mg p,.ff .mg b,.ff .mg span{letter-spacing:normal}
.mg .steps{position:absolute;left:7cqw;right:7cqw;top:46cqw;display:grid;gap:2cqw}
.mg .steps div{display:flex;align-items:center;gap:3cqw;background:#fff;border-radius:3cqw;padding:2.4cqw 3cqw;box-shadow:0 .5cqw 1.4cqw rgba(14,27,77,.07);padding:1.8cqw 2.6cqw!important;opacity:0;transform:translateX(-4cqw);animation:mgIn .6s forwards}
.mg .steps div:nth-child(1){animation-delay:.5s}.mg .steps div:nth-child(2){animation-delay:.8s}.mg .steps div:nth-child(3){animation-delay:1.1s}.mg .steps div:nth-child(4){animation-delay:1.4s}
.mg .steps i{flex:none;font-style:normal;width:8cqw;height:8cqw;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font:600 3.6cqw Fraunces,Georgia,serif}
.mg .steps b{display:block;font:600 3.6cqw/1.1 Fraunces,Georgia,serif}
.mg .steps span{font-size:2.4cqw;color:#5A6178;font-weight:600}

.ff .mgph{height:auto!important;min-height:0!important;background:#F7F3EC!important;display:flex;align-items:center}
.ff .mgph .mg{width:100%;border-radius:0}
.ff-pack .mgph{position:relative}
.ff-pack .mgph>span{z-index:3}
body.ff-prod #ns-section-alternative_products,body.ff-prod .section-related-products,body.ff-prod [data-store^="related-products"],body.ff-prod [id^="ns-section-complementary"]{display:none!important}
/* reels */
.ff-reels{padding:70px 0 10px!important}
.ff-reels .h2{font-size:clamp(30px,4vw,46px)}
.ff-reels .rl{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:26px}
.ff-reels .rc{position:relative;aspect-ratio:9/16;border-radius:22px;overflow:hidden;background:#0E1B4D;display:block;box-shadow:0 24px 40px -26px rgba(14,27,77,.6)}
.ff-reels .rc img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transform:scale(1.08);transition:opacity .7s,transform 3.2s ease-out}
.ff-reels .rc img.on{opacity:1;transform:scale(1)}
.ff-reels .bars{position:absolute;left:10px;right:10px;top:10px;z-index:2;display:flex;gap:4px}
.ff-reels .bars i{flex:1;height:3px;border-radius:2px;background:rgba(255,255,255,.35);overflow:hidden}
.ff-reels .bars u{display:block;height:100%;width:0;background:#fff}
.ff-reels .bars i.done u{width:100%}
.ff-reels .bars i.run u{animation:ffBar 2.6s linear forwards}
@keyframes ffBar{to{width:100%}}
.ff-reels .cap{position:absolute;left:0;right:0;bottom:0;z-index:2;padding:60px 14px 14px;background:linear-gradient(transparent,rgba(9,18,55,.92));color:#fff}
.ff-reels .cap b{display:block;font-size:16px}
.ff-reels .cap span{display:block;font-size:12.5px;opacity:.85;line-height:1.35;margin-top:4px}
.ff-reels .cap em{display:inline-block;font-style:normal;font-size:12px;font-weight:800;margin-top:8px;background:#fff;color:#0E1B4D;border-radius:99px;padding:5px 10px}
@media(max-width:900px){.ff-reels .rl{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:8px}.ff-reels .rc{flex:0 0 58%;scroll-snap-align:start}}

/* ===== v4 ===== */
.ff-hero{min-height:min(86vh,780px)}
.ff-hero.no-yt{background:radial-gradient(120% 90% at 85% 20%,#1E3290 0%,var(--navy) 55%,#091237 100%)}
.ff-hero.no-yt:after{background:linear-gradient(90deg,rgba(9,18,55,.92) 0%,rgba(9,18,55,.6) 48%,rgba(9,18,55,0) 75%)}
.ff-hero .dots{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1.6px,transparent 1.6px);background-size:28px 28px}
.ff-hero .pg{position:absolute;right:4%;top:50%;width:min(46vw,620px);height:560px;transform:translateY(-46%)}
.ff-hero .pg img{position:absolute;width:56%;border-radius:10px;box-shadow:0 40px 70px -20px rgba(0,0,0,.6);background:#fff}
.ff-hero .pg .p0{left:0;top:40px;transform:rotate(-8deg)}
.ff-hero .pg .p1{left:24%;top:0;transform:rotate(2deg);z-index:2}
.ff-hero .pg .p2{left:46%;top:60px;transform:rotate(9deg)}
.ff-hero .bub{position:absolute;z-index:3;font:600 22px Fraunces,Georgia,serif;color:#fff;border-radius:22px;padding:14px 22px;box-shadow:0 18px 30px -12px rgba(0,0,0,.45)}
.ff-hero .bub:after{content:'';position:absolute;bottom:-12px;left:26px;border:12px solid transparent;border-top-color:inherit;border-bottom:0}
.ff-hero .b1{background:#E8217A;border-color:#E8217A;left:-4%;top:6%;font-style:italic}
.ff-hero .b2{background:#1C8FB8;border-color:#1C8FB8;right:0;bottom:4%}
.ff-hero:after{z-index:1}
.ff-hero.no-yt .pg{z-index:0}
@media(min-width:901px){.ff-hero.no-yt h1{max-width:58%;font-size:clamp(52px,6.4vw,100px)}.ff-hero.no-yt .sub{max-width:52%}}
.ff-pack .ph{background-position:center;background-size:contain;background-repeat:no-repeat;background-color:#0E1B4D}
.ff-mod .m .ph{background-size:contain!important;background-repeat:no-repeat;background-color:#0E1B4D;height:320px}
.ff-ebc .im{background-color:#F7F3EC!important;background-size:contain}
.ff-cmp .th>div:not(.hd):before{content:'✕';display:inline-block;width:26px;color:#FF6B72;font-weight:800}
@media(max-width:900px){.ff-hero .pg{position:relative;right:auto;top:auto;transform:none;width:100%;height:300px;margin-top:20px;order:2}.ff-hero.no-yt{flex-direction:column;align-items:stretch}.ff-hero.no-yt .w{padding-top:56px;padding-bottom:20px}.ff-hero.no-yt:after{display:none}.ff-hero .pg img{width:50%}.ff-hero .bub{font-size:17px;padding:10px 16px}}
/* pasos */
.ff-how{background:var(--paper);padding:64px 0!important;border-bottom:1px solid var(--line)}
.ff-how .hd h2{font-size:clamp(30px,4vw,46px);color:var(--navy);margin:12px 0 30px}
.ff-how .hd h2 em{color:var(--red)}
.ff-how ol{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;counter-reset:s}
.ff-how li{position:relative;background:#fff;border:1px solid var(--line);border-radius:22px;padding:26px 24px 24px;display:flex;flex-direction:column;gap:6px}
.ff-how li i{font-style:normal;width:46px;height:46px;border-radius:50%;background:var(--red);color:#fff;font:800 19px Montserrat;display:flex;align-items:center;justify-content:center;margin-bottom:8px}
.ff-how li b{font-size:19px;color:var(--navy)}
.ff-how li span{font-size:15.5px;color:var(--mute)}
.ff-how li a{color:var(--red);font-weight:700;text-decoration:underline}
.ff-how li:not(:last-child):after{content:'→';position:absolute;right:-14px;top:36px;z-index:2;width:26px;height:26px;border-radius:50%;background:var(--navy);color:#fff;font-size:14px;display:flex;align-items:center;justify-content:center}
@media(max-width:900px){.ff-how ol{grid-template-columns:1fr}.ff-how li{flex-direction:row;flex-wrap:wrap;align-items:center;column-gap:14px}.ff-how li i{margin:0}.ff-how li span{flex-basis:100%;padding-left:60px;margin-top:-6px}.ff-how li:not(:last-child):after{display:none}}
/* pilares */
.ff-met .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:40px}
.ff-met .pl{background:#fff;border:1px solid var(--line);border-radius:26px;padding:30px}
.ff-met .pl h3{color:var(--navy)}
.ff-met .pl p{color:var(--mute)}
@media(max-width:900px){.ff-met .g3{grid-template-columns:1fr}}
/* comparativa */
.ff-cmp{background:var(--navy);color:#fff}
.ff-cmp .h2{color:#fff}.ff .ff-cmp .h2 em{color:#FF8E93}.ff-cmp .ey{color:#FF8E93}
.ff-cmp .cmp{display:grid;grid-template-columns:1fr 1.15fr;gap:0;margin-top:40px;align-items:center}
.ff-cmp .col{border-radius:28px;padding:30px}
.ff-cmp .col>div:not(.hd){padding:17px 0;border-bottom:1px solid rgba(255,255,255,.12);font-size:17px}
.ff-cmp .col>div:last-child{border-bottom:0}
.ff-cmp .hd{font-size:13px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;height:52px;display:flex;align-items:center}
.ff-cmp .th{background:rgba(255,255,255,.05);color:rgba(255,255,255,.62);border-radius:28px 0 0 28px}

.ff-cmp .us{background:#fff;color:var(--navy);box-shadow:0 40px 80px -30px rgba(0,0,0,.6);padding:38px 34px;transform:scale(1.02)}
.ff-cmp .us img{height:44px}
.ff-cmp .us>div:not(.hd){border-color:var(--line);font-weight:700;font-size:18px}
@media(max-width:900px){.ff-cmp .cmp{grid-template-columns:1fr;gap:14px}.ff-cmp .th{border-radius:24px;order:2}.ff-cmp .us{transform:none;padding:26px 22px}.ff-cmp .col>div:not(.hd){font-size:16px}}
/* comunidad */
.ff-dyn{margin-top:34px}
.ff-dyn .tabs{display:flex;gap:8px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none}
.ff-dyn .tabs button{flex:none;border:1.5px solid rgba(255,255,255,.3);background:transparent;color:inherit;border-radius:999px;padding:11px 18px;font:700 15px Montserrat;cursor:pointer}
.ff-dyn .tabs button.on{background:#fff;color:var(--navy);border-color:#fff}
.ff-info .ff-dyn .tabs button{border-color:var(--line);color:var(--navy)}
.ff-info .ff-dyn .tabs button.on{background:var(--navy);color:#fff;border-color:var(--navy)}
.ff-dyn .pn{display:none}.ff-dyn .pn.on{display:block}
.ff-dyn .pn p{margin:16px 0 16px;font-size:16px;opacity:.9}
.ff-dyn .pn p a{font-weight:700;text-decoration:underline;white-space:nowrap}
/* galería */
.ff-gal{position:relative}
.ff-gal .tr{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;border-radius:24px}
.ff-gal .tr::-webkit-scrollbar{display:none}
.ff-gal figure{margin:0;flex:0 0 100%;scroll-snap-align:start;border-radius:24px;overflow:hidden;background:#fff;aspect-ratio:1}
.ff-gal figure img{width:100%;height:100%;object-fit:cover}
.ff-gal.multi figure{flex-basis:calc(33.333% - 8px);aspect-ratio:1}
.ff-gal .ar{position:absolute;top:50%;transform:translateY(-50%);width:46px;height:46px;border-radius:50%;border:0;background:rgba(255,255,255,.95);color:var(--navy);font-size:28px;line-height:1;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.18);display:flex;align-items:center;justify-content:center}
.ff-gal .ar.l{left:10px}.ff-gal .ar.r{right:10px}
.ff-gal .dots{display:flex;justify-content:center;gap:7px;margin-top:12px}
.ff-gal .dots i{width:8px;height:8px;border-radius:50%;background:rgba(14,27,77,.22);cursor:pointer;transition:width .2s}
.ff-gal .dots i.on{width:22px;border-radius:5px;background:var(--red)}
.ff-com .ff-gal .dots i{background:rgba(255,255,255,.3)}.ff-com .ff-gal .dots i.on{background:#fff}
@media(max-width:900px){.ff-gal.multi figure{flex-basis:78%}.ff-gal .ar{display:none}}
/* clase */
.ff-tl4{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:30px}
.ff-tl4>div{background:#fff;border:1px solid var(--line);border-radius:22px;padding:24px 22px;border-top:4px solid var(--red)}
.ff-tl4 small{font-size:12px;font-weight:800;letter-spacing:.1em;color:var(--red)}
.ff-tl4 b{display:block;font-family:Fraunces,Georgia,serif;font-weight:600;font-size:22px;color:var(--navy);margin:8px 0 6px;line-height:1.1}
.ff-tl4 span{color:var(--mute);font-size:15px}
.ff-cls .ff-onl{margin-top:16px}
@media(max-width:900px){.ff-tl4{grid-template-columns:1fr 1fr}}
@media(max-width:520px){.ff-tl4{grid-template-columns:1fr}}
/* material */
.ff-pages{display:flex;gap:16px;overflow-x:auto;scroll-snap-type:x mandatory;padding:14px 4px 22px;margin-top:22px}
.ff-pages button{flex:0 0 230px;scroll-snap-align:start;border:0;background:none;padding:0;cursor:zoom-in;text-align:left;font:inherit;color:var(--ink)}
.ff-pages img{width:100%;aspect-ratio:640/905;object-fit:cover;border-radius:8px;box-shadow:0 18px 34px -16px rgba(14,27,77,.45);transition:transform .2s;background:#fff}
.ff-pages button:hover img{transform:translateY(-6px) rotate(-1deg)}
.ff-pages span{display:block;font-size:13.5px;font-weight:700;color:var(--navy);margin-top:12px;line-height:1.3}
.ff-mat .two{max-width:760px}
.ff-lb{position:fixed;inset:0;z-index:9999;background:rgba(9,18,55,.92);display:flex;align-items:center;justify-content:center;padding:20px}
.ff-lb figure{margin:0;max-height:100%;display:flex;flex-direction:column;align-items:center}
.ff-lb img{max-height:calc(100vh - 90px);max-width:100%;border-radius:8px;background:#fff}
.ff-lb figcaption{color:#fff;font-weight:700;margin-top:12px;font-size:15px;text-align:center}
.ff-lb button{position:absolute;right:18px;top:14px;width:46px;height:46px;border-radius:50%;border:0;background:#fff;color:var(--navy);font-size:28px;cursor:pointer}
/* ficha v4 */
.ff-pb{background:radial-gradient(110% 120% at 90% 0%,#1E3290 0%,var(--navy) 60%)}
.ff-pb:after{background:radial-gradient(rgba(255,255,255,.06) 1.6px,transparent 1.6px) 0 0/28px 28px}
.ff-pd .vis{gap:14px}
.ff-pd .vis .ff-gal figure{box-shadow:0 30px 60px -36px rgba(14,27,77,.5)}
.ff-info{padding:20px 0 30px}
.ff-info .blk{padding:44px 0;border-top:1px solid var(--line)}
.ff-info .h2{font-size:clamp(30px,4vw,46px)}
.ff-info .inc{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:22px}
.ff-info .inc div{background:#fff;border:1px solid var(--line);border-radius:20px;padding:22px}
.ff-info .inc i{font-style:normal;font-size:28px;display:block}
.ff-info .inc b{display:block;font-size:17px;color:var(--navy);margin:10px 0 4px}
.ff-info .inc span{font-size:14.5px;color:var(--mute)}
.ff-info .ff-dyn{color:var(--ink)}
@media(max-width:900px){.ff-pd .vis{position:static;order:2;margin-top:26px}.ff-pd .vis .why{display:grid}.ff-info .inc{grid-template-columns:1fr 1fr}.ff-info .blk{padding:34px 0}}
@media(max-width:520px){.ff-info .inc{grid-template-columns:1fr 1fr;gap:10px}.ff-info .inc div{padding:16px}.ff-info .inc b{font-size:15px}.ff-info .inc span{font-size:13px}.ff-hero .proof{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;font-size:12.5px}.ff-hero .proof b{font-size:21px}}
`;
  function addCSS() { var s = document.createElement('style'); s.id = 'ff-css'; s.textContent = CSS + MOBCSS.replace('HEROIMG', img('risas')); document.head.appendChild(s); }
  var MOBCSS = "\n.ff-top .l2{display:none}\n@media(max-width:640px){\n.ff-demo{font-size:11px!important;padding:5px 10px!important}.ff-dlx{display:none}\n.ff-top{padding:7px 10px;font-size:12px}\n.ff-top a{flex-wrap:nowrap;gap:6px;white-space:nowrap}\n.ff-top .l1{display:none}.ff-top .l2{display:inline}\n.ff-top u{display:none}\n.ff-top .ff-cd{padding:2px 7px;font-size:12px}\n.ff-top .ff-cd b[data-u=s],.ff-top .ff-cd b[data-u=s]+i{display:none}\n.ff-hero{min-height:0!important}\n.ff-hero.has-yt{background:#0E1B4D url(HEROIMG) center/cover}\n.ff-hero.has-yt .yt iframe{width:max(100%,177.78vh)!important;height:max(100%,56.25vw)!important}\n.ff-hero .w{padding-top:150px!important;padding-bottom:26px!important}\n.ff-hero h1{font-size:42px!important;margin-top:16px}\n.ff-hero .sub{font-size:16.5px;margin-top:12px}\n.ff-hero .cta{margin-top:22px;gap:10px}\n.ff-hero .proof{margin-top:26px;padding-top:16px}\n.ff-hero .proof b{font-size:21px}\n.ff-pb .strip{display:none}\n.ff-pb .w{padding-top:22px!important;padding-bottom:24px!important}\n.ff-pb .big{font-size:36px;margin:12px 0 10px}\n.ff-pb .meta{font-size:14px}\n.ff-waf{width:50px!important;height:50px!important;right:12px;bottom:14px}\nbody.ff-prod .ff-waf{bottom:92px}\n.ff-tblw{overflow:visible}\n.ff-lvt,.ff-lvt tbody,.ff-lvt tr,.ff-lvt td{display:block;width:auto}\n.ff-lvt tr:first-child{display:none}\n.ff-lvt tr{border-bottom:1px solid var(--line);padding:12px 0}\n.ff-lvt td{border:0;padding:3px 16px;font-size:14.5px}\n.ff-lvt td:first-child{white-space:normal;font-size:16px}\n.ff{font-size:15.5px}.ff p{font-size:15.5px}.ff .lead{font-size:16.5px!important}.ff h2,.ff .h2{font-size:28px!important;line-height:1.12}.ff section:not(.ff-hero){padding-top:46px!important;padding-bottom:46px!important}.ff-cc3 .cc{padding:22px 18px 20px!important}.ff-cc3 .cc h3{font-size:30px}.ff .btn{font-size:15px;padding:13px 18px}.ff-pd .g{grid-template-columns:minmax(0,1fr)!important}.ff-pd .g>*{min-width:0}html,body{overflow-x:hidden;max-width:100%}\n}\nhtml{-webkit-text-size-adjust:100%;text-size-adjust:100%}\n";

  /* ---------- header / footer ---------- */
  function cartCount() { try { var c = LS.cart; return (c && (c.items || []).reduce(function (a, i) { return a + (i.quantity || 0); }, 0)) || 0; } catch (e) { return 0; } }
  function openCart() {
    var t = $('[data-component="cart-button"] .js-modal-open-private') || $('[data-component="cart-button"]') || $('[data-toggle="#modal-cart"]');
    if (t) { t.click(); return; }
    location.href = '/comprar/';
  }
  var ICO = {
    cart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0E1B4D" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/></svg>',
    wa: '<svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.2z"/></svg>',
    burger: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0E1B4D" stroke-width="2.4"><path d="M3 7h18M3 12h18M3 17h18"/></svg>'
  };
  function header() {
    var t = left();
    var top = h('<div class="ff ff-top"><a href="/#cursos">' + (t.over ? 'Inscripciones 2027 abiertas · <u>Ver cursos</u>' : '<span class="l1">⏳ Precio de preinscripción 2027 · termina en</span><span class="l2">⏳ Preinscripción · termina en</span>' + cdHTML() + '<u>Ver precios →</u>') + '</a></div>');
    var nav = '<a href="/#cursos">Cursos y precios</a><a href="' + CFG.urls.nivel + '">¿Qué nivel tengo?</a><a href="/#preguntas">Preguntas</a>';
    var hd = h(`<div class="ff ff-hd"><div class="w">
      <a href="/" aria-label="Forefront, inicio"><img src="${CFG.logo}" alt="Instituto Forefront · Inglés para adultos"></a>
      <nav>${nav}</nav><div class="sp"></div>
      <a class="btn btn-wa hide-m" href="${wa('Hola! Quiero info de los cursos 2027')}" data-wap="1" style="padding:13px 20px;font-size:15px">WhatsApp</a><a class="btn btn-red hide-m" href="/#cursos" style="padding:13px 22px;font-size:15px">Inscribirme</a>
      <button class="cart" type="button" aria-label="Ver carrito">${ICO.cart}<b class="ff-cc">${cartCount()}</b></button>
      <button class="burger" type="button" aria-label="Abrir menú">${ICO.burger}</button>
    </div></div>`);
    var mn = h('<div class="ff ff-mnav">' + nav + '<a class="btn btn-red" href="/#cursos">Inscribirme</a><a class="btn btn-wa" href="' + wa('Hola! Quiero info de los cursos 2027') + '" target="_blank">Consultar por WhatsApp</a></div>');
    $('.cart', hd).onclick = openCart;
    $('.burger', hd).onclick = function () { mn.classList.toggle('open'); };
    $$('a', mn).forEach(function (a) { a.onclick = function () { mn.classList.remove('open'); }; });
    document.body.insertBefore(mn, document.body.firstChild);
    document.body.insertBefore(hd, document.body.firstChild);
    document.body.insertBefore(top, document.body.firstChild);
    var cc = $('.ff-cc', hd); if (!cartCount()) cc.style.display = 'none';
    var WAO = [['📝', 'Quiero anotarme a un curso', 'Hola! Quiero anotarme a un curso 2027'], ['🤔', 'No sé qué nivel tengo', 'Hola! No sé qué nivel de inglés tengo, me ayudan?'], ['💳', 'Tengo una duda de precios o pagos', 'Hola! Tengo una consulta sobre precios y formas de pago'], ['💻', 'Quiero info del curso online', 'Hola! Quiero info del curso online en vivo'], ['💬', 'Otra consulta', 'Hola! Tengo una consulta']];
    var wap = h(`<div class="ff ff-wap" role="dialog" aria-label="Escribinos por WhatsApp"><div class="hd"><b>¡Hola! 👋</b><span>¿En qué te podemos ayudar? Elegí una opción y te respondemos por WhatsApp.</span><button type="button" class="x" aria-label="Cerrar">×</button></div>
      <div class="ops">${WAO.map(function (o) { return '<a href="' + wa(o[2]) + '" target="_blank" rel="noopener"><i>' + o[0] + '</i>' + o[1] + '<em>›</em></a>'; }).join('')}</div>
      <div class="ft">Te responde el equipo de Forefront</div></div>`);
    var waf = h(`<button type="button" class="ff ff-waf" aria-label="Escribinos por WhatsApp">${ICO.wa}<span class="lb">¿Dudas? Escribinos</span></button>`);
    function wapToggle(open) { wap.classList.toggle('open', open === undefined ? !wap.classList.contains('open') : open); }
    waf.onclick = function () { wapToggle(); };
    $('.x', wap).onclick = function () { wapToggle(false); };
    document.addEventListener('click', function (e) { if (wap.classList.contains('open') && !wap.contains(e.target) && !waf.contains(e.target) && !e.target.closest('[data-wap]')) wapToggle(false); });
    document.addEventListener('click', function (e) { var t = e.target.closest('[data-wap]'); if (t) { e.preventDefault(); wapToggle(true); } });
    document.body.appendChild(wap); document.body.appendChild(waf);
  }
  function footer() {
    document.body.appendChild(h(`<footer class="ff ff-ft"><div class="w"><div class="g">
      <div><img src="${CFG.logo}" alt="Forefront" style="height:42px;filter:brightness(0) invert(1)"><div class="big">Inglés para adultos,<br><em>con gente como vos.</em></div><div>${CFG.addr} · ${CFG.addr2}<br>Presencial en Rosario u online en vivo.</div></div>
      <div><h5>Cursos 2027</h5><a href="${CFG.urls.verano}">Verano presencial</a><a href="${CFG.urls.veranoO}">Verano online</a><a href="${CFG.urls.anualP}">Anual presencial</a><a href="${CFG.urls.anualO}">Anual online</a><a href="${CFG.urls.pack}">Ebooks</a></div>
      <div><h5>Instituto</h5><a href="/#metodo">Método Forefront</a><a href="/#comunidad">Comunidad</a><a href="${CFG.urls.nivel}">Nivelación gratis</a><a href="/#preguntas">Preguntas frecuentes</a></div>
      <div><h5>Contacto</h5><a href="${wa()}" target="_blank">WhatsApp</a><a href="${CFG.ig}" target="_blank">Instagram</a><a href="${CFG.threshold}" target="_blank">Threshold · programa 1 a 1</a></div>
    </div><div class="bt">© Instituto Forefront · Inglés para adultos desde los 18 años · Rosario, Santa Fe</div></div></footer>`));
  }

  /* ---------- datos de cursos ---------- */
  var PLAN = {
    'Solo verano': { ord: 1, big: 1, nm: 'Solo el curso de verano', cov: 'febrero: 5 clases, del 1/02 al 5/03', ds: 'Las 5 clases de febrero. Si después seguís en marzo, la matrícula te queda con 50% OFF ($57.500).', mb: [0] },
    'Pack verano + 5 meses del anual': { ord: 2, big: 1, nm: 'Verano + curso anual con marzo a julio ya pagos', cov: 'el verano y las cuotas de marzo a julio del curso anual (el anual dura de marzo a diciembre)', rest: 'marzo a julio', tag: 'RECOMENDADO · TE AHORRÁS LA MATRÍCULA', ds: 'Hacés el verano y dejás pagos los primeros 5 meses del anual (marzo a julio). El anual sigue hasta diciembre: de agosto en adelante pagás la cuota mes a mes.', sv: 'Te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses', mb: [0, 1, 2, 3, 4, 5] },
    'Pack verano + anual completo': { ord: 3, nm: 'Verano + todo el anual', cov: 'febrero a diciembre (verano + todo el anual)', rest: 'marzo a diciembre', ds: 'Todo 2027 resuelto, de febrero a diciembre.', sv: 'Te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses', mb: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    'Verano + inscripción al anual': { ord: 4, nm: 'Verano + reservar mi lugar de marzo', cov: 'febrero + tu lugar reservado para marzo (matrícula con 50% OFF)', rest: 'matrícula con 50% OFF', ds: 'Hacés febrero y dejás tu lugar de marzo reservado. Por hacer el verano, la matrícula tiene 50% OFF: $57.500 en vez de $115.000.', mb: [0], rs: 1 },
    'Pack 5 meses (marzo a julio)': { ord: 1, big: 1, nm: 'Curso anual · pagás marzo a julio juntos', cov: 'las cuotas de marzo a julio del curso anual (dura hasta diciembre), sin matrícula', tag: 'RECOMENDADO · TE AHORRÁS LA MATRÍCULA', ds: 'Pagás 5 meses juntos y no pagás matrícula. El curso sigue hasta diciembre: de agosto en adelante pagás la cuota mes a mes.', sv: 'Te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses', mb: [1, 2, 3, 4, 5] },
    'Inscripción (cuota mes a mes)': { ord: 2, big: 1, nm: 'Mes a mes', cov: 'la matrícula. Después pagás la cuota cada mes: $121.000 en efectivo o por transferencia pagando del 1 al 7', ds: 'Hoy pagás la matrícula y después la cuota cada mes. Pagando del 1 al 7 de cada mes tenés descuento: la cuota queda en $121.000 en efectivo o por transferencia.', mb: [], mm: 1 },
    'Pack anual (marzo a diciembre)': { ord: 3, nm: 'Marzo a diciembre, pagando todo el año', cov: 'marzo a diciembre, sin matrícula', ds: 'Todo el año resuelto, sin matrícula.', sv: 'Te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses', mb: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
  };
  var LVL = {
    'Inicial desde cero': 'Nunca estudiaste o te acordás muy poco', 'Inicial': 'Nunca estudiaste o te acordás muy poco',
    'Revisión Inicial': 'Hiciste Inicial o lo dejaste a la mitad',
    'Revisión Pre-Intermedio': 'Tenés las bases y querés soltarte', 'Pre-Intermedio': 'Tenés las bases y querés soltarte',
    'Revisión Intermedio': 'Te comunicás y buscás más fluidez', 'Intermedio': 'Te comunicás y buscás más fluidez',
    'Intermedio Avanzado': 'Te comunicás con soltura y querés perfeccionarte',
    'Conversación': 'Entendés bien y querés hablar con naturalidad'
  };
  var MONTHS = ['F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  function mbar(p) {
    if (!p || (!p.mb.length && !p.rs)) return '';
    return '<div class="ff-mb">' + MONTHS.map(function (m, i) { return '<i class="' + (p.mb.indexOf(i) >= 0 ? 'on' : '') + '">' + m + '</i>'; }).join('') + '</div>';
  }

  /* ---------- FAQ (home + fichas) ---------- */
  var FAQ = [
    ['¿Los cursos son solo para adultos?', 'Sí. Forefront es un instituto dedicado a adultos, desde los 18 años. La metodología, el material y las dinámicas están pensados para cómo aprende un adulto.'],
    ['¿Cuántos alumnos hay por clase?', 'Trabajamos con grupos reducidos de adultos, para que todos hablen en todas las clases y el profe pueda acompañar a cada uno.'],
    ['No sé qué nivel tengo, ¿qué hago?', 'Es lo más común. Comunicate con nosotros por WhatsApp o pedí una entrevista de nivelación, presencial u online, y te decimos en qué grupo entrar.'],
    ['¿Las clases online son grabadas?', 'No: son en vivo por Zoom, con profe y compañeros, y tienen las mismas dinámicas y juegos que en el aula. Además cada clase queda grabada para que la repases.'],
    ['¿Qué material usan?', 'Material propio, hecho para adultos. Está incluido: en presencial es un cuadernillo impreso y personalizado; en online, el mismo material en PDF. No tenés que comprar libros aparte.'],
    ['¿Y si falto a una clase?', 'Te compartimos la grabación de la clase del grupo online del mismo nivel, así no te atrasás.'],
    ['¿Hay clase de prueba?', 'No, porque los grupos son reducidos y el material se entrega desde el primer día. Podés pedir una entrevista gratis para conocer cómo trabajamos.'],
    ['¿Qué es un pack?', 'Es una forma de pagar el curso: abonás 5 meses o el año junto y te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses. Los packs no tienen devolución.'],
    ['¿Cómo pago?', 'Con tarjeta en hasta 3 cuotas sin interés, o con 20% de descuento en efectivo o por transferencia. Si pagás el anual mes a mes, pagando del 1 al 7 de cada mes tenés descuento: la cuota queda en $121.000 en efectivo o por transferencia.'],
    ['¿Cuánto sale la matrícula?', 'La matrícula es de $115.000. Si hacés el curso de verano, tenés 50% OFF: te queda en $57.500. Con los packs (5 meses o anual) no pagás matrícula.'],
    ['¿Aumentan los precios?', 'Dos veces al año, en junio y septiembre, según el IPC. Con el pack te ahorrás esos aumentos y la matrícula ($115.000).'],
    ['¿Dan certificado?', 'Sí, al aprobar los exámenes de agosto y diciembre te damos un certificado de nivel.']
  ];
  function faqHTML(list) { return '<div class="ff-faq">' + (list || FAQ).map(function (x, i) { return '<details' + (i ? '' : ' open') + '><summary>' + x[0] + '</summary><p>' + x[1] + '</p></details>'; }).join('') + '</div>'; }
  function faqLD(list) { ld({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: (list || FAQ).map(function (x) { return { '@type': 'Question', name: x[0], acceptedAnswer: { '@type': 'Answer', text: x[1] } }; }) }); }

  /* ---------- bloques ---------- */
  function coursesHTML(h1) {
    return `<div class="ff-ch"><span class="ey">Cursos 2027</span>${h1 ? '<h1 class="D h2">Elegí tu <em>curso</em></h1>' : '<h2 class="D h2">Elegí tu <em>curso</em></h2>'}
      <p class="lead">Son 3 opciones. Precios en efectivo o por transferencia (20% OFF), o con tarjeta en 3 cuotas sin interés.</p></div>
    <div class="ff-cc3">
      <a class="cc ver" href="${CFG.urls.verano}">
        <span class="rib">☀️ EMPEZÁ EN FEBRERO</span>
        <svg class="sun" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="26" fill="rgba(255,255,255,.95)"/><g stroke="rgba(255,255,255,.85)" stroke-width="7" stroke-linecap="round">${[0,45,90,135,180,225,270,315].map(function(a){var r=a*Math.PI/180;return '<line x1="'+(60+38*Math.cos(r)).toFixed(1)+'" y1="'+(60+38*Math.sin(r)).toFixed(1)+'" x2="'+(60+52*Math.cos(r)).toFixed(1)+'" y2="'+(60+52*Math.sin(r)).toFixed(1)+'"/>';}).join('')}</g></svg>
        <small>CURSO DE VERANO · FEBRERO 2027</small>
        <h3>Verano</h3>
        <p>5 clases, del 1/02 al 5/03. Para arrancar de cero o repasar antes del anual. Presencial u online.</p>
        <div class="pz"><div><span>Curso de verano (solo febrero)</span><b>${money(175000)}</b></div><div class="alt rec"><span>⭐ O seguí hasta julio: febrero a julio</span><b>${money(775000)}</b><em>Te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses</em></div></div>
        <span class="go">Ver horarios y anotarme →</span></a>
      <a class="cc" href="${CFG.urls.anualP}">
        <small>CURSO ANUAL · PRESENCIAL</small>
        <h3>Anual en Rosario</h3>
        <p>Una clase por semana, de marzo a diciembre, en nuestra sede de ${CFG.addr}.</p>
        <div class="pz"><div><span>Cuota mensual</span><b>${money(121000)}<i>/mes</i></b><em>Pagando del 1 al 7 de cada mes (con descuento) · + matrícula</em></div><div class="alt rec"><span>⭐ O pagá 5 meses juntos (marzo a julio)</span><b>${money(600000)}</b><em>Te ahorrás la matrícula ($115.000) y los aumentos por IPC</em></div></div>
        <span class="go">Ver horarios y anotarme →</span></a>
      <a class="cc" href="${CFG.urls.anualO}">
        <small>CURSO ANUAL · ONLINE EN VIVO</small>
        <h3>Anual online</h3>
        <p>Una clase por semana por Zoom, en vivo con tu grupo. Cada clase queda grabada.</p>
        <div class="pz"><div><span>Cuota mensual</span><b>${money(121000)}<i>/mes</i></b><em>Pagando del 1 al 7 de cada mes (con descuento) · + matrícula</em></div><div class="alt rec"><span>⭐ O pagá 5 meses juntos (marzo a julio)</span><b>${money(600000)}</b><em>Te ahorrás la matrícula ($115.000) y los aumentos por IPC</em></div></div>
        <span class="go">Ver horarios y anotarme →</span></a>
    </div>
    <p class="ff-note">¿Querés hacer el verano desde tu casa? → <a href="${CFG.urls.veranoO}">Verano online en vivo</a></p>`;
  }
  function ebooksHTML(h1) {
    function card(slug, main) {
      var e = EBOOKS[slug], u = CFG.urls[e.k];
      return `<div class="ff-ebc ${main ? 'main' : ''}">${e.pl ? '<a class="im pl" href="' + u + '" aria-label="' + e.short + '">' + ebPl(e.pl) + '</a>' : '<a class="im" href="' + u + '" style="background-image:url(\'' + img(e.img, 'm') + '\')" aria-label="' + e.short + '"></a>'}<div class="tx">
        <h4>${e.short}</h4><p>${e.what}</p>
        <div class="pr"><b>${money(e.price)}</b><s>${money(e.was)}</s><em>-${Math.round((1 - e.price / e.was) * 100)}%</em></div>
        <div class="bt"><button class="btn btn-red" type="button" data-add="${CFG.pid[e.k]}">Agregar</button><a class="btn btn-line" href="${u}">Ver más</a></div>
        ${main ? '<div class="tip">✓ Si te anotás a un curso, tenés 5% off extra en el pack</div>' : ''}</div></div>`;
    }
    return `<span class="ey">Ebooks Forefront</span>${h1 ? '<h1 class="D h2">' : '<h2 class="D h2">'}Empezá hoy, <em>a tu ritmo</em>${h1 ? '</h1>' : '</h2>'}
      <p class="lead">Material en PDF para practicar por tu cuenta o acompañar el curso: inglés para entrevistas, reuniones, viajes y gramática, en 10 a 15 minutos por día.</p>
      <div class="g g5">${card('pack-english-essentials', 1)}${card('ebook-english-grammar')}${card('ebook-english-for-travelers')}${card('ebook-interviews')}${card('ebook-business-meetings')}</div>`;
  }
  function bindAdd(root) {
    $$('[data-add]', root).forEach(function (b) { b.onclick = function () { b.disabled = true; b.textContent = 'Agregando…'; addToCart(b.dataset.add); }; });
  }

  /* ---------- HOME ---------- */
  function home() {
    document.body.classList.add('ff-home');
    var m = $('#MainContent'); if (!m) return;
    var html = `<div class="ff">
    <section class="ff-hero ${CFG.yt ? 'has-yt' : 'no-yt'}">
      ${CFG.yt ? '<div class="yt"><video class="hv" muted autoplay loop playsinline preload="auto" poster="' + img('risas') + '" src="' + CFG.heroVid + (innerWidth < 700 ? 'hero-celular.mp4' : 'hero.mp4') + '"></video></div>' : '<div class="dots"></div><div class="pg">' + ['m12', 'm05', 'm26'].map(function (k, i) { return '<img class="p' + i + '" src="' + img(k, 'm') + '" alt="Material propio de Forefront">'; }).join('') + '<span class="bub b1">Hi!</span><span class="bub b2">How was your week?</span></div>'}
      <div class="w">
        <span class="tag"><i></i>Inscripciones 2027 abiertas</span>
        <h1 class="D">Inglés para adultos, <em class="u">con gente como vos.</em></h1>
        <p class="sub">Clases en grupos reducidos, donde hablás desde la primera clase. Presencial en Rosario u online en vivo.</p>
        <div class="cta"><a class="btn btn-red" href="#cursos">Ver cursos y precios</a><a class="btn btn-wa" href="${wa('Hola! Quiero info de los cursos 2027')}" target="_blank">Consultar por WhatsApp</a></div>
        <p class="nv">¿No sabés tu nivel? <a href="${wa('Hola! No sé qué nivel de inglés tengo, me ayudan?')}" target="_blank">Comunicate con nosotros</a></p>
        <div class="proof"><div><b>+300</b>alumnos adultos por año</div><div><b>5</b>niveles, de cero a conversación</div><div><b>Presencial</b>u online en vivo</div></div>
      </div>
    </section>

    <section class="ff-cur" id="cursos"><div class="w">${coursesHTML()}</div></section>

    <section class="ff-how"><div class="w">
      <div class="hd"><span class="ey">Cómo anotarte</span><h2 class="D">Tres pasos y <em>listo</em></h2></div>
      <ol>
        <li><i>1</i><b>Elegí tu curso</b><span>Verano, anual presencial o anual online.</span></li>
        <li><i>2</i><b>Elegí nivel y horario</b><span>¿No sabés tu nivel? <a href="${wa('Hola! No sé qué nivel de inglés tengo, me ayudan?')}" target="_blank">Comunicate con nosotros</a>.</span></li>
        <li><i>3</i><b>Pagá online</b><span>20% OFF en efectivo o por transferencia, o tarjeta en 3 cuotas sin interés.</span></li>
      </ol>
    </div></section>

    <section class="ff-cmp" id="metodo"><div class="w">
      <span class="ey">Por qué Forefront</span>
      <h2 class="D h2">Forefront vs. <em>un curso típico</em></h2>
      <div class="cmp">
        <div class="col th"><div class="hd">Un curso típico</div>
          <div>Libro estándar que comprás aparte</div><div>Mucha gramática y poco uso</div><div>Muchos alumnos por clase</div><div>Clase y te vas</div><div>Pensado para cualquier edad</div></div>
        <div class="col us"><div class="hd"><img src="${CFG.logo}" alt="Forefront"></div>
          <div>✓ Material propio, incluido y hecho para adultos</div><div>✓ Hablás desde la primera clase</div><div>✓ Grupos reducidos</div><div>✓ Dinámicas, juegos y una comunidad</div><div>✓ 100% para adultos, desde los 18</div></div>
      </div>
    </div></section>

    <section class="ff-cls" id="como"><div class="w">
      <span class="ey">Cómo es estudiar en Forefront</span><h2 class="D h2">Hablás desde <em>el minuto uno</em></h2>
      <div class="ff-tl4">
        <div><small>01 · AL LLEGAR</small><b>Mate o café, y a charlar</b><span>Contás tu semana en inglés, sin presión.</span></div>
        <div><small>02 · EL TEMA</small><b>Una situación real</b><span>Un viaje, una reunión, un pedido en un restaurante.</span></div>
        <div><small>03 · LA PRÁCTICA</small><b>Juegos y role plays</b><span>En parejas y en grupo, y el profe te corrige en el momento.</span></div>
        <div><small>04 · PARA LA SEMANA</small><b>Práctica corta</b><span>Ejercicios extra para no perder el ritmo.</span></div>
      </div>
      <div class="ff-mods2">
        <div><b>📍 Presencial</b><span>En ${CFG.addr}. Material impreso y personalizado, mate y café en cada clase.</span></div>
        <div><b>💻 Online en vivo</b><span>Por Zoom, con las mismas dinámicas y juegos. Material en PDF y la clase queda grabada.</span></div>
      </div>
      <h3 class="ff-sub">Nuestro material</h3>
      <p class="lead" style="margin-top:6px">Lo escribimos nosotros, con temas de adultos: trabajo, plata, viajes, tecnología. Está incluido.</p>
      ${matHTML()}
    </div></section>

    ${reelsHTML()}

    <section id="preguntas" style="background:var(--paper)"><div class="w">
      <span class="ey">Preguntas frecuentes</span><h2 class="D h2">Lo que <em>todos preguntan</em></h2>${faqHTML()}
      <div style="margin-top:30px;display:flex;gap:12px;flex-wrap:wrap"><a class="btn btn-red" href="#cursos">Ver cursos 2027</a><a class="btn btn-wa" href="${wa('Hola! Tengo una consulta sobre los cursos 2027')}" target="_blank">Preguntar por WhatsApp</a></div>
    </div></section>
    <section style="padding-top:60px"><div class="w"><div class="ff-lvl">
      <div><span class="ey">Nivelación</span><h2 class="D">¿No sabés <em>tu nivel?</em></h2><p>Es lo más común, sobre todo si estudiaste hace años. Comunicate con nosotros y te decimos en qué grupo entrar.</p></div>
      <div class="bt"><a class="btn btn-white" href="${wa('Hola! No sé qué nivel de inglés tengo, me ayudan?')}" target="_blank">Escribinos por WhatsApp</a><a class="btn btn-glass" href="${CFG.urls.nivel}">Pedir una entrevista de nivelación</a></div>
    </div></div></section>
    <section class="ff-eb" id="ebooks"><div class="w">${ebooksHTML()}</div></section>
    ${thHTML()}
    </div>`;
    m.insertBefore(h(html), m.firstChild);
    bindAdd(m); bindGal(m); bindDyn(m); bindLB(m); bindReels(m);
    if (CFG.yt) { var hv = $('.ff-hero .hv', m), y = $('.ff-hero .yt', m); if (hv) { hv.muted = true; hv.addEventListener('playing', function () { y.classList.add('on'); }); var pp = hv.play(); if (pp && pp.catch) pp.catch(function () {}); } }
    ld({ '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: 'Instituto Forefront', description: 'Instituto de inglés para adultos en Rosario, con clases presenciales y online en vivo en grupos reducidos.', url: location.origin + '/', logo: CFG.logo, address: { '@type': 'PostalAddress', streetAddress: 'Mendoza 2223', addressLocality: 'Rosario', addressRegion: 'Santa Fe', addressCountry: 'AR' }, sameAs: [CFG.ig] });
    faqLD();
  }

  /* ---------- CATEGORÍA ---------- */
  function category() {
    document.body.classList.add('ff-cat');
    var m = $('#MainContent'); if (!m) return;
    if (/^\/ebooks\/?$/.test(PATH)) m.insertBefore(h(`<div class="ff"><section class="ff-eb" id="ebooks"><div class="w">${ebooksHTML(1)}</div></section><section class="ff-cur" style="padding-top:0"><div class="w">${coursesHTML()}</div></section></div>`), m.firstChild);
    else m.insertBefore(h(`<div class="ff"><section class="ff-cur"><div class="w">${coursesHTML(1)}</div></section><section class="ff-eb" style="padding-top:0"><div class="w">${ebooksHTML()}</div></section></div>`), m.firstChild);
    bindAdd(m);
  }

  /* ---------- FICHA DE EBOOK ---------- */
  function ebookPage(slug) {
    var e = EBOOKS[slug];
    document.body.classList.add('ff-prod');
    var g = $$('#single-product img, .js-product-detail img').map(function (i) { return i.getAttribute('data-srcset') || i.getAttribute('srcset') || i.src; }).filter(Boolean);
    var t = left();
    var wrap = h(`<div class="ff"><div class="ff-pd"><div class="w"><div class="g">
      <div class="vis">${gal(e.gal, '', e.short)}</div>
      <div><div class="bc"><a href="/">Inicio</a> / <a href="/ebooks/">Ebooks</a></div>
        <span class="ey">Ebook en PDF</span><h1>${(document.querySelector('h1') || {}).textContent || e.short}</h1>
        <div class="ff-proof">📲 Lo recibís por mail después de pagar · Listo para el celular o para imprimir</div>
        <div class="ff-price"><s>${money(e.was)}</s><div class="t">${money(e.price)}</div><div class="k">PRECIO PROMOCIONAL · -${Math.round((1 - e.price / e.was) * 100)}%</div><div class="l">En efectivo o por transferencia ${money(e.price * CFG.disc)} · o 3 cuotas sin interés de ${money(e.price / 3)}</div></div>
        <p style="font-size:16.5px;margin:22px 0 0">${e.what}</p>
        ${e.k === 'pack' ? '<div class="ff-ups">🎓 <b>¿Te anotás a un curso?</b> Si sumás el pack junto con cualquier curso 2027, tenés <b>5% off extra</b>.</div>' : '<div class="ff-ups">📚 <b>¿Querés los 4?</b> El <a href="' + CFG.urls.pack + '" style="text-decoration:underline;font-weight:700">Pack English Essentials</a> trae los 4 ebooks por ' + money(100000) + '.</div>'}
        <div class="ff-buy"><button class="btn btn-red" type="button" data-add="${CFG.pid[e.k]}">Comprar ahora</button></div>
        <div class="ff-trust"><div>✓ Pago seguro con tarjeta o transferencia</div><div>✓ Te llega por mail apenas se acredita el pago</div></div>
      </div></div></div></div>
      ${reelsHTML()}${thHTML()}
      <div class="ff-bar"><div class="p"><span>${e.short}</span><b>${money(e.price)}</b></div><button class="btn btn-red" type="button" data-add="${CFG.pid[e.k]}">Comprar</button></div></div>`);
    var m = $('#MainContent'); m.insertBefore(wrap, m.firstChild);
    bindAdd(wrap); bindGal(wrap); bindReels(wrap);
  }

  /* ---------- FICHA DE CURSO ---------- */
  var QA = {
    ver: [['¿Cuándo empieza el curso de verano?', 'Del 1 de febrero al 5 de marzo de 2027: 5 clases, una por semana, de 2 h 30.'], ['¿Sirve si nunca estudié inglés?', 'Sí. Hay grupos de Inicial desde cero, pensados para adultos que nunca estudiaron o se acuerdan muy poco.'], ['¿Qué conviene más, solo verano o el pack?', 'Si ya sabés que vas a seguir en marzo, el pack verano + 5 meses: te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses. La mayoría elige esa opción.'], ['¿Puedo hacerlo online desde otra provincia?', 'Sí. Las clases online son en vivo por Zoom, con las mismas dinámicas que en el aula, y quedan grabadas.'], ['¿Hasta cuándo puedo acceder a este precio?', 'Podés acceder al precio de preinscripción hasta el ' + CFG.deadlineTxt + '. Después sube.']],
    anu: [['¿Cuándo empieza el anual?', 'La semana del 8 de marzo de 2027 y termina en diciembre. Es una clase por semana de 2 horas.'], ['¿Puedo pagar mes a mes?', 'Sí: pagás la matrícula y después la cuota cada mes. Pagando del 1 al 7 de cada mes tenés descuento: la cuota queda en $121.000 en efectivo o por transferencia. Con el pack te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses.'], ['¿Qué incluye?', 'Clases en grupos reducidos, material propio incluido, práctica extra, seguimiento por WhatsApp y certificado de nivel al aprobar los exámenes de agosto y diciembre.'], ['¿Y si un día no puedo ir?', 'Te compartimos la grabación de la clase del grupo online del mismo nivel, así no te atrasás.'], ['¿Cómo sé mi nivel?', 'Pedí una entrevista de nivelación gratis, presencial u online. Te decimos en qué grupo entrar.']],
    act: [['¿Para quién es?', 'Para alumnos que cursan Inicial y quieren completar los niveles 6 a 10 antes del anual.'], ['¿Cuándo es?', 'Del 4 de enero al 5 de marzo: 8 clases de 2 h 30 y semana de examen.'], ['¿Qué beneficio tiene?', 'La inscripción al anual 2027 te queda 100% bonificada y arrancás en Pre-Intermedio.']]
  };
  function product() {
    var slug = PATH.split('/').filter(Boolean).pop();
    if (EBOOKS[slug]) return ebookPage(slug);
    var box = $('.js-product-detail[data-variants]') || $('#single-product [data-variants]');
    if (!box) return;
    var V = JSON.parse(box.getAttribute('data-variants'));
    var sels = $$('select.js-variation-option', box);
    var nameEl = $('h1', box) || $('h1');
    var title = (nameEl && nameEl.textContent.trim()) || document.title;
    var isVer = /^curso-de-verano-2027(-online)?$/.test(slug), isAnu = /curso-anual-2027/.test(slug), isAct = slug === 'inicial-verano-niveles-6-a-10', isOnl = /online/.test(slug);
    var S = { mod: null, plan: null, lvl: null, hr: null, ok: false, more: false };
    function parseHr(v) { var p = (v || '').split(' · '); return { dia: (p[0] || '').split(' ')[0], hora: (p[0] || '').split(' ').slice(1).join(' '), mod: p[1] || '', profe: (p[2] || '').replace('Profe ', '') }; }
    var hrIdx = isAct ? 0 : 2, lvlIdx = isAct ? -1 : 1, planIdx = isAct ? -1 : 0;
    var mods = []; V.forEach(function (v) { var m = parseHr(v['option' + hrIdx]).mod; if (m && mods.indexOf(m) < 0) mods.push(m); });
    if (mods.length === 1) S.mod = mods[0];
    var plans = []; if (planIdx >= 0) V.forEach(function (v) { if (plans.indexOf(v.option0) < 0) plans.push(v.option0); });
    plans.sort(function (a, b) { return ((PLAN[a] || {}).ord || 9) - ((PLAN[b] || {}).ord || 9); });
    if (plans.length) S.plan = plans[0];
    var hasSolo = V.some(function (v) { return v.option0 === 'Solo verano'; });
    var QS = {}; location.search.replace(/^\?/, '').split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) QS[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
    if (isVer && !isOnl && /online/i.test(QS.modo || '') && CFG.urls.veranoO) { location.replace(CFG.urls.veranoO + location.search); return; }
    var OFERTAS = { 'verano': 'Solo verano', 'verano-julio': 'Pack verano + 5 meses del anual', 'verano-anual': 'Pack verano + anual completo', 'verano-reserva': 'Verano + inscripción al anual', '5meses': 'Pack 5 meses (marzo a julio)', 'mensual': 'Inscripción (cuota mes a mes)', 'anual': 'Pack anual (marzo a diciembre)' };
    var lock = OFERTAS[QS.oferta];
    if (lock && plans.indexOf(lock) >= 0) { S.plan = lock; S.ok = true; S.more = true; plans = [lock]; document.body.classList.add('ff-landing'); } else lock = null;
    if (QS.modo) { var mq = /online/i.test(QS.modo) ? 'Online' : 'Presencial'; if (mods.indexOf(mq) >= 0) { S.mod = mq; mods = [mq]; document.body.classList.add('ff-landing'); } }
    var lvls = []; if (lvlIdx >= 0) V.forEach(function (v) { if (lvls.indexOf(v.option1) < 0) lvls.push(v.option1); });
    function priceOf(plan) { var v = V.find(function (x) { return planIdx < 0 || x.option0 === plan; }); return v ? v.price_number : 0; }
    function match() { return V.find(function (v) { return (planIdx < 0 || v.option0 === S.plan) && (lvlIdx < 0 || v['option' + lvlIdx] === S.lvl) && v['option' + hrIdx] === S.hr; }); }
    function hrsFor() {
      var out = [];
      V.forEach(function (v) {
        if (planIdx >= 0 && v.option0 !== S.plan) return;
        if (lvlIdx >= 0 && v['option' + lvlIdx] !== S.lvl) return;
        var x = parseHr(v['option' + hrIdx]); if (S.mod && x.mod !== S.mod) return;
        out.push({ v: v['option' + hrIdx], x: x, ok: v.available !== false });
      });
      var ord = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      out.sort(function (a, b) { return ord.indexOf(a.x.dia) - ord.indexOf(b.x.dia) || a.x.hora.localeCompare(b.x.hora); });
      return out;
    }
    function lvlAvail(l) { return V.some(function (v) { return v['option' + lvlIdx] === l && (!S.mod || parseHr(v['option' + hrIdx]).mod === S.mod); }); }

    document.body.classList.add('ff-prod');
    var GAL = isVer ? (isOnl ? ['@ver', '@anO', 'incO', 'pkVer', '@clase', 'niveles', 'm12', 'm05'] : ['@ver', 'pkVer', '@clase', 'niveles', 'incP', 'm12', 'm05']) : isAct ? ['@act', '@clase', 'incP', 'm01', 'm05'] : isOnl ? ['@anO', 'incO', 'pkAnu', '@clase', 'niveles', 'm12', 'm26'] : ['@anP', 'pkAnu', '@clase', 'incP', 'niveles', 'm12', 'm26'];
    var INC = isOnl ? [['🎥', 'En vivo por Zoom', 'Con profe y compañeros. No son videos grabados.'], ['🎲', 'Mismas dinámicas', 'Los mismos juegos y role plays que en el aula.'], ['⏯️', 'Queda grabada', 'Para repasar cuando quieras.'], ['📄', 'Material en PDF', 'Material propio, incluido.'], ['💬', 'Seguimiento', 'Práctica extra entre clase y clase.'], ['🎓', 'Certificado', 'Con los exámenes de agosto y diciembre.']]
      : [['👥', 'Grupos reducidos', 'Hablás en todas las clases.'], ['📘', 'Material impreso', 'Propio y personalizado, incluido.'], ['🧉', 'Mate y café', 'En cada clase, en nuestra sede.'], ['💻', 'Opción online', 'Si un día no podés venir, tenés la grabación.'], ['💬', 'Seguimiento', 'Práctica extra entre clase y clase.'], ['🎓', 'Certificado', isAct ? 'Al aprobar el examen de marzo.' : 'Con los exámenes de agosto y diciembre.']];
    var modTxt = isOnl ? 'ONLINE EN VIVO' : (isAnu || (mods.length === 1 && mods[0] === 'Presencial') ? 'PRESENCIAL · ROSARIO' : (QS.modo && mods.length === 1 ? (S.mod === 'Online' ? 'ONLINE EN VIVO' : 'PRESENCIAL · ROSARIO') : 'PRESENCIAL U ONLINE'));
    var meta = isVer ? 'Verano 2027 · Grupos reducidos · Arranca el 1/02' : isAct ? 'Niveles 6 a 10 · Del 4/01 al 5/03' : 'Anual 2027 · Grupos reducidos · Arranca el 8/03';
    var t = left();
    var qa = isVer ? QA.ver : isAct ? QA.act : QA.anu;
    var wrap = h(`<div class="ff">
      <div class="ff-pb ${isVer ? 'ver' : ''}"><div class="strip">20% OFF EN EFECTIVO O TRANSFERENCIA · 3 CUOTAS SIN INTERÉS</div>
        <div class="w"><span class="mod">${modTxt}</span><div class="big">Inglés para<br><span>adultos</span></div><div class="meta">${meta}</div></div></div>
      ${t.over ? '' : '<div class="ff-dl"><div class="w"><span>⏳ Podés acceder a este precio de preinscripción hasta el ' + CFG.deadlineTxt + '. Después sube.</span></div></div>'}
      <div class="ff-pd"><div class="w"><div class="g">
        <div class="vis">${gal(GAL, '', title)}<div class="why"><div><b>+300</b>alumnos por año</div><div><b>5</b>niveles</div><div><b>100%</b>para adultos</div></div></div>
        <div>
          <div class="bc"><a href="/">Inicio</a> / <a href="/#cursos">Cursos 2027</a></div>
          <h1>${title}</h1>
          <div class="ff-proof">👥 <b>+300 alumnos adultos por año</b> eligen Forefront · Grupos reducidos</div><div class="ff-cap" style="margin:10px 0 4px;padding:10px 12px;border:1px solid rgba(200,30,40,.25);border-radius:10px;background:rgba(200,30,40,.05)"><div style="font-size:14px"><b style="color:#c81e28">🔥 Ya está ocupado el 50% de los lugares</b> · los grupos son reducidos y quedan pocos lugares por horario</div><div style="height:8px;border-radius:99px;background:rgba(0,0,0,.08);margin-top:8px;overflow:hidden"><div style="width:50%;height:100%;background:#c81e28;border-radius:99px"></div></div></div>
          <div class="ff-price"><div class="ff-pnm"></div><div class="ff-plw" style="font-size:13px;opacity:.8;margin:4px 0 2px">Precio de lista <s class="ff-pl"></s> · pagando en efectivo o transferencia queda en:</div><div class="ff-prow"><div class="t ff-pt"></div><div class="k">EFECTIVO O TRANSFERENCIA · 20% OFF<small>Precio final, el descuento ya está aplicado</small></div></div><div class="ff-cov"></div><div class="l">o 3 cuotas sin interés de <b class="ff-pc"></b> con tarjeta</div></div>
          <div class="ff-steps-wrap"></div>
          <div class="ff-buy"><button class="btn btn-red ff-go" type="button">Inscribirme</button><div class="ff-sum"></div></div>
          <div class="ff-next"><b>Qué pasa después</b><ol><li>Pagás en efectivo, por transferencia o con tarjeta (hasta 3 cuotas).</li><li>Tu lugar en el grupo queda reservado.</li><li>Te contactamos para darte la bienvenida antes de empezar.</li></ol></div>
          <div class="ff-trust"><div>🔒 Pago seguro</div><div>💬 ¿Dudas? <a href="${wa('Hola! Tengo una duda sobre ' + title)}" target="_blank" style="text-decoration:underline">Escribinos por WhatsApp</a></div></div>
          <div class="ff-alt"></div>
        </div>
      </div></div></div>
      <div class="ff-info"><div class="w">
        <div class="blk"><span class="ey">Qué incluye</span><h2 class="D h2">Todo lo que necesitás, <em>en el curso</em></h2>
          <div class="inc">${INC.map(function (x) { return '<div><i>' + x[0] + '</i><b>' + x[1] + '</b><span>' + x[2] + '</span></div>'; }).join('')}</div></div>
        <div class="blk"><span class="ey">Así es una clase</span><h2 class="D h2">Hablás desde <em>el minuto uno</em></h2>
          <div class="ff-tl4"><div><small>01 · AL LLEGAR</small><b>Mate o café, y a charlar</b><span>Contás tu semana en inglés, sin presión.</span></div><div><small>02 · EL TEMA</small><b>Una situación real</b><span>Un viaje, una reunión, un pedido en un restaurante.</span></div><div><small>03 · LA PRÁCTICA</small><b>Juegos y role plays</b><span>En parejas y en grupo, con corrección en el momento.</span></div><div><small>04 · PARA LA SEMANA</small><b>Práctica corta</b><span>Ejercicios extra para no perder el ritmo.</span></div></div></div>
        <div class="blk"><span class="ey">El material</span><h2 class="D h2">Así es <em>nuestro material</em></h2><p class="lead">${isOnl ? 'En PDF, para la pantalla o para imprimir.' : 'Impreso y personalizado, incluido en el curso.'} Tocá una página para verla grande.</p>${matHTML()}</div>
      </div></div>
      <div class="ff-qa"><div class="w" style="max-width:900px"><span class="ey">Preguntas y respuestas</span><h2 class="D h2" style="font-size:clamp(30px,4vw,44px)">Lo que nos preguntan sobre este curso</h2>
        ${qa.map(function (x) { return '<div class="q"><b>' + x[0] + '</b><p>' + x[1] + '<small>Respuesta de Forefront</small></p></div>'; }).join('')}
        <div style="margin-top:24px"><a class="btn btn-wa" href="${wa('Hola! Tengo una pregunta sobre ' + title)}" target="_blank">Hacer otra pregunta</a></div></div></div>
      ${reelsHTML()}${thHTML()}
      <div class="ff-bar"><div class="p"><span class="ff-bn"></span><b class="ff-bp"></b></div><button class="btn btn-red ff-go2" type="button">Inscribirme</button></div>
    </div>`);
    var m = $('#MainContent'); m.insertBefore(wrap, m.firstChild);
    var steps = $('.ff-steps-wrap', wrap);
    bindGal(wrap); bindDyn(wrap); bindLB(wrap); bindReels(wrap);
    function render() {
      var n = 0, out = '';
      if (mods.length > 1) {
        n++; out += `<div class="ff-step"><div class="st"><i>${n}</i>¿Cómo querés cursar?${S.mod ? '<span class="ok">✓ Listo</span>' : ''}</div><div class="ff-seg">
          <button type="button" data-mod="Presencial" class="${S.mod === 'Presencial' ? 'on' : ''}"><b>📍 Presencial</b><span>En nuestra sede, ${CFG.addr}</span></button>
          <button type="button" data-mod="Online" class="${S.mod === 'Online' ? 'on' : ''}"><b>💻 Online en vivo</b><span>Por Zoom, y queda grabada</span></button></div></div>`;
      }
      var gate = mods.length < 2 || !!S.mod;
      if (plans.length && gate) {
        if (S.plan && !(PLAN[S.plan] || {}).big) S.more = true;
        n++; out += `<div class="ff-step"><div class="st"><i>${n}</i>${lock ? 'Tu opción' : isVer ? '¿Hasta cuándo querés cursar?' : '¿Cómo querés pagarlo?'}${S.ok ? '<span class="ok">✓ Listo</span>' : ''}</div>`;
        var shownOther = false;
        plans.forEach(function (p) {
          var d = PLAN[p] || { ds: '', mb: [] }, pr = priceOf(p), tt = pr * CFG.disc;
          var soloP = hasSolo ? priceOf('Solo verano') * CFG.disc : 0;
          var bd = (soloP && d.rest && tt > soloP) ? 'Verano ' + money(soloP) + ' + ' + d.rest + ' ' + money(tt - soloP) : '';
          if (!d.big && !S.more) { if (!shownOther) { out += '<button type="button" class="ff-more" data-more="1">Ver otras opciones ▾</button>'; shownOther = true; } return; }
          if (!d.big && !shownOther) { out += '<div class="ff-oo">OTRAS OPCIONES</div>'; shownOther = true; }
          out += `<button type="button" class="ff-plan ${d.big ? 'big' : ''} ${S.plan === p ? 'on' : ''}" data-plan="${p.replace(/"/g, '&quot;')}">${d.tag ? '<span class="tag">' + d.tag + '</span>' : ''}
            <div class="r"><div><div class="nm">${d.nm || p}</div><div class="ds">${d.ds}</div>${d.sv ? '<span class="sv">' + d.sv + '</span>' : ''}</div>
            <div class="pp"><small>hoy pagás</small><b>${money(tt)}</b><small>${d.mm ? 'matrícula · ' : ''}efectivo o<br>transferencia</small></div></div>${bd ? '<div class="bd">= ' + bd + '</div>' : ''}${d.big ? mbar(d) : ''}</button>`;
        });
        if (!lock && (S.plan === 'Solo verano' || S.plan === 'Inscripción (cuota mes a mes)')) {
          var best = isVer ? 'Pack verano + 5 meses del anual' : 'Pack 5 meses (marzo a julio)';
          out += `<div class="ff-ups" style="display:${S.ok ? 'block' : 'block'}">💡 <b>${isVer ? '¿Ya sabés que seguís en marzo?' : '¿Vas a cursar hasta julio?'}</b> Con el ${isVer ? 'pack verano + 5 meses' : 'pack 5 meses'} te ahorrás la matrícula ($115.000) y los aumentos por IPC de esos meses.<br><button type="button" data-plan="${best}">Cambiar al pack</button></div>`;
        }
        if (!S.ok) out += '<button type="button" class="btn btn-navy ff-cont" data-ok="1">Continuar con esta opción</button>';
        out += '</div>';
      }
      if (plans.length && !S.ok) gate = false;
      if (lvls.length && gate) {
        n++; out += `<div class="ff-step"><div class="st"><i>${n}</i>¿En qué nivel estás?${S.lvl ? '<span class="ok">✓ Listo</span>' : ''}</div><div class="ff-lv">` +
          lvls.map(function (l) { var ok = lvlAvail(l); return `<button type="button" data-lvl="${l}" class="${S.lvl === l ? 'on' : ''}" ${ok ? '' : 'disabled'}><b>${l}</b><span>${ok ? (LVL[l] || '') : 'Sin grupos en esta modalidad'}</span></button>`; }).join('') +
          `</div><div class="ff-help">¿No sabés tu nivel? <a href="${wa('Hola! No sé qué nivel de inglés tengo, me ayudan?')}" target="_blank">Comunicate con nosotros</a>.</div></div>`;
      }
      if (lvls.length && !S.lvl) gate = false;
      if (gate) {
      n++; out += `<div class="ff-step"><div class="st"><i>${n}</i>¿Qué día te queda mejor?${S.hr ? '<span class="ok">✓ Listo</span>' : ''}</div><div class="ff-hr">`;
      var hs = (lvlIdx < 0 || S.lvl) && (mods.length < 2 || S.mod) ? hrsFor() : null;
      if (!hs) out += `<div class="empty">👆 Primero elegí ${mods.length > 1 && !S.mod ? 'cómo querés cursar' + (lvlIdx >= 0 && !S.lvl ? ' y tu nivel' : '') : 'tu nivel'}, y acá te aparecen los horarios.</div>`;
      else if (!hs.length) out += '<div class="empty">No hay grupos de este nivel en esta modalidad. Probá la otra modalidad o escribinos.</div>';
      else out += hs.map(function (o) { return `<button type="button" data-hr="${o.v}" class="${S.hr === o.v ? 'on' : ''}" ${o.ok ? '' : 'disabled'}><small>${o.x.dia}</small><b>${o.x.hora}</b><span>${o.x.mod} · Profe ${o.x.profe}${o.ok ? '' : ' · Completo'}</span></button>`; }).join('');
      out += '</div>' + (hs && hs.length ? '<div class="ff-help">Los grupos son reducidos: cuando un horario se completa, se cierra.</div>' : '') + '</div>';
      }
      steps.innerHTML = out;
      var v = match(), base = v ? v.price_number : priceOf(S.plan), pnm = '', dP = PLAN[S.plan] || {};
      pnm = plans.length ? 'HOY PAGÁS · ' + (dP.nm || S.plan) : 'HOY PAGÁS';
      var covTxt = dP.cov ? 'Cubre ' + dP.cov + '.' : '';
      if (hasSolo && dP.rest) { var sp = priceOf('Solo verano') * CFG.disc; covTxt += ' Verano ' + money(sp) + ' + ' + dP.rest + ' ' + money(base * CFG.disc - sp) + '.'; }
      $('.ff-cov', wrap).textContent = covTxt;
      $('.ff-pnm', wrap).textContent = pnm;
      $('.ff-pt', wrap).textContent = money(base * CFG.disc);
      $('.ff-pl', wrap).textContent = money(base);
      $('.ff-pc', wrap).textContent = money(base / 3);
      $('.ff-bp', wrap).textContent = money(base * CFG.disc);
      $('.ff-bn', wrap).textContent = (pnm || title) + ' · efectivo o transferencia';
      var ready = !!v;
      [$('.ff-go', wrap), $('.ff-go2', wrap)].forEach(function (b) { b.textContent = ready ? 'Inscribirme' : (mods.length > 1 && !S.mod ? 'Elegí cómo cursar' : (plans.length && !S.ok ? 'Elegí hasta cuándo' : (lvlIdx >= 0 && !S.lvl ? 'Elegí tu nivel' : 'Elegí tu horario'))); });
      $('.ff-sum', wrap).textContent = v ? '✓ ' + [(PLAN[S.plan] || {}).nm || S.plan, S.lvl, S.hr].filter(Boolean).join(' · ') : 'Completá los pasos de arriba para inscribirte';
      var alt = $('.ff-alt', wrap);
      if (isAnu) alt.innerHTML = isOnl ? `¿Preferís venir al instituto? Mirá el <a href="${CFG.urls.anualP}">anual presencial en Rosario</a>.` : `¿No estás en Rosario o preferís desde tu casa? Mirá el <a href="${CFG.urls.anualO}">anual online en vivo</a>.`;
      else if (isVer) alt.innerHTML = isOnl ? `¿Preferís venir al instituto? Mirá el <a href="${CFG.urls.verano}">verano presencial en Rosario</a>.` : `¿No estás en Rosario o preferís desde tu casa? Mirá el <a href="${CFG.urls.veranoO}">verano online en vivo</a>.`;
      else alt.innerHTML = `¿No sabés tu nivel? <a href="${wa('Hola! No sé qué nivel de inglés tengo, me ayudan?')}" target="_blank">Comunicate con nosotros</a>.`;
    }
    steps.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b || b.disabled) return;
      if (b.dataset.mod) { S.mod = b.dataset.mod; if (S.lvl && !lvlAvail(S.lvl)) S.lvl = null; S.hr = null; }
      if (b.dataset.more) { S.more = true; }
      if (b.dataset.ok) { S.ok = true; }
      if (b.dataset.plan) { S.plan = b.dataset.plan; S.ok = true; S.hr = S.hr && hrsFor().some(function (o) { return o.v === S.hr; }) ? S.hr : null; }
      if (b.dataset.lvl) { S.lvl = b.dataset.lvl; S.hr = null; }
      if (b.dataset.hr) S.hr = b.dataset.hr;
      render();
      if (b.dataset.ok || b.dataset.plan || b.dataset.mod || b.dataset.lvl) { var nx = $$('.ff-step', wrap).pop(); if (nx && window.innerWidth < 900) nx.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      if (false) { var t2 = $('.ff-hr', wrap); if (t2 && window.innerWidth < 900) t2.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      if (b.dataset.hr && window.innerWidth < 900) $('.ff-buy', wrap).scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    function buy() {
      var v = match();
      if (!v) { var lst = $$('.ff-step', wrap).pop(); (lst || steps).scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
      var vals = [v.option0, v.option1, v.option2];
      sels.forEach(function (s, i) { if (vals[i] != null) { s.value = vals[i]; s.dispatchEvent(new Event('change', { bubbles: true })); } });
      setTimeout(function () {
        var btn = $('.js-addtocart:not(.js-addtocart-placeholder)', box) || $('input[type=submit].js-addtocart', box) || $('[data-store="product-buy-button"]', box);
        if (btn) btn.click(); else { var f = $('form', box); if (f) f.submit(); }
        setTimeout(openCart, 1800);
      }, 350);
    }
    $('.ff-go', wrap).onclick = buy; $('.ff-go2', wrap).onclick = buy;
    render();
    if (QS.pagar) { var pv = V.find(function (x) { return String(x.id) === String(QS.pagar); }); if (pv) { var pvals = [pv.option0, pv.option1, pv.option2]; setTimeout(function () { sels.forEach(function (s, i) { if (pvals[i] != null) { s.value = pvals[i]; s.dispatchEvent(new Event('change', { bubbles: true })); } }); setTimeout(function () { var bt = $('.js-addtocart:not(.js-addtocart-placeholder)', box) || $('input[type=submit].js-addtocart', box) || $('[data-store="product-buy-button"]', box); if (bt) bt.click(); setTimeout(openCart, 1800); }, 400); }, 700); } }
    var p0 = priceOf(S.plan);
    ld({ '@context': 'https://schema.org', '@type': 'Course', name: title, description: meta + '. Curso de inglés para adultos en grupos reducidos, presencial en Rosario u online en vivo.', inLanguage: 'es', provider: { '@type': 'EducationalOrganization', name: 'Instituto Forefront', sameAs: location.origin + '/' }, offers: { '@type': 'Offer', price: Math.round(p0 * CFG.disc), priceCurrency: 'ARS', availability: 'https://schema.org/InStock', url: location.href, category: 'Paid' }, hasCourseInstance: { '@type': 'CourseInstance', courseMode: isOnl ? 'online' : (isAnu ? 'onsite' : 'blended'), location: isOnl ? undefined : CFG.addr } });
    faqLD(qa);
  }

  /* ---------- CARRITO: ofertas ---------- */
  function cartUpsell() {
    var list = $('#modal-cart .js-ajax-cart-list'); if (!list) return;
    var ids = $$('.js-cart-item', list).map(function (i) { return +((i.getAttribute('data-store') || '').replace('cart-item-', '')); });
    var txt = list.textContent || '';
    var hasCourse = ids.some(function (i) { return COURSE_IDS.indexOf(i) >= 0; });
    var key = ids.join(',') + '|' + /Solo verano/.test(txt);
    var box = $('.ff-cup', list.parentNode);
    if (box && box.dataset.k === key) return;
    if (box) box.remove();
    if (!ids.length) return;
    var out = '';
    if ((ids.indexOf(CFG.pid.verano) >= 0 || ids.indexOf(CFG.pid.veranoO) >= 0) && /Solo verano/.test(txt)) out += `<div class="c"><img src="${img('pkVer', 'm')}" alt=""><div><b>¿Seguís en marzo?</b>Pasate al pack verano + 5 meses: <em>te ahorrás la matrícula ($115.000)</em> y los aumentos por IPC.</div><a class="b" href="${ids.indexOf(CFG.pid.veranoO) >= 0 ? CFG.urls.veranoO : CFG.urls.verano}">Ver pack</a></div>`;
    if (!hasCourse) out += `<div class="c"><img src="${img('cvVer', 'm')}" alt=""><div><b>¿Y si además hablás en clase?</b>Cursos 2027 con precio de preinscripción hasta el ${CFG.deadlineTxt}.</div><a class="b" href="/#cursos">Ver cursos</a></div>`;
    box = h('<div class="ff-cup" data-k="' + key + '">' + out + '<div class="hint">🔒 Último paso: tocá el botón de abajo para pagar en efectivo, por transferencia o con tarjeta</div></div>');
    list.parentNode.insertBefore(box, list.nextSibling);
    bindAdd(box);
  }

  /* ---------- NIVELACIÓN ---------- */
  function nivelacion() {
    document.body.classList.add('ff-pg');
    var m = $('#MainContent'); if (!m) return;
    var rows = [
      ['Inicial (A1)', 'Nunca estudiaste o sabés muy poco.', 'Presente simple, continuo y perfecto; pasado simple y continuo; futuro con will / going to; comparativos y superlativos; verbos modales.'],
      ['Pre-Intermedio (A2)', 'Tenés las bases y querés comunicarte con más seguridad.', 'Tiempos presentes, pasados y futuros; condicionales 0, 1, 2 y 3; voz pasiva.'],
      ['Intermedio (B1)', 'Te comunicás y querés más fluidez y estructuras más complejas.', 'Perfecto continuo; futuro continuo y perfecto; condicionales mixtos; word formation; phrasal verbs.'],
      ['Intermedio Avanzado (B2)', 'Te comunicás con soltura y querés perfeccionarte.', 'Todo lo anterior más reported speech y relative clauses.'],
      ['Conversación (B2–C1)', 'Entendés bien y querés hablar con naturalidad.', 'Libro propio, artículos, series, TED Talks, debates y role plays. No es solo charlar: seguís puliendo.']
    ];
    var html = `<div class="ff">
      <div class="ff-nv-h"><div class="w"><span class="ey">Nivelación gratis</span><h1 class="D">¿No sabés <em>tu nivel?</em></h1><p>Es lo más común, sobre todo si estudiaste hace años. Te ayudamos a encontrar el grupo justo: ni tan fácil que te aburras, ni tan difícil que te frustres.</p></div></div>
      <section style="padding-top:0" id="entrevista"><div class="w"><div class="ff-ways">
        <div class="ff-way rec"><span class="k">RECOMENDADO · 15 MINUTOS</span><h3>Entrevista presencial</h3><p>Una charla en nuestra sede de ${CFG.addr}. Te decimos exactamente en qué grupo entrar y conocés el instituto.</p><a class="btn btn-red" href="${CFG.calPresencial}" target="_blank">Elegir día y horario</a></div>
        <div class="ff-way"><span class="k">GRATIS · POR VIDEOLLAMADA</span><h3>Entrevista online</h3><p>La misma charla, desde donde estés. Ideal si vas a cursar online o no podés venir.</p><a class="btn btn-navy" href="${CFG.calOnline}" target="_blank">Elegir día y horario</a></div>
        <div class="ff-way"><span class="k">25 A 30 MINUTOS</span><h3>Examen escrito</h3><p>Un formulario para hacer tranquilo, sin traductor ni IA. Lo revisamos y te escribimos con nuestra recomendación.</p><a class="btn btn-line" href="${CFG.examen}" target="_blank">Hacer el examen</a></div>
      </div></div></section>
      <section id="test" style="padding-top:10px"><div class="w">
        <span class="ey">Test rápido · 1 minuto</span><h2 class="D h2">Una primera <em>orientación</em></h2>
        <p class="lead" style="margin-bottom:24px">Respondé 4 preguntas y te decimos por dónde arrancar. Es una orientación: para confirmarlo, pedí tu entrevista.</p>
        <div class="ff-quiz">
          <div class="q" data-q="0"><b>1. ¿Estudiaste inglés antes?</b><div class="ops"><button data-v="0">Nunca</button><button data-v="1">Un poco, en el colegio</button><button data-v="2">Sí, en un instituto o con profe</button></div></div>
          <div class="q" data-q="1"><b>2. ¿Cuánto tiempo, en total?</b><div class="ops"><button data-v="0">Menos de 1 año</button><button data-v="1">1 o 2 años</button><button data-v="2">3 o 4 años</button><button data-v="3">5 años o más</button></div></div>
          <div class="q" data-q="2"><b>3. ¿Qué temas te acordás?</b><div class="ops" data-multi="1"><button data-v="1">Pasado simple</button><button data-v="1">Present perfect</button><button data-v="1">Condicionales</button><button data-v="1">Voz pasiva</button><button data-v="1">Phrasal verbs / reported speech</button></div></div>
          <div class="q" data-q="3"><b>4. Hoy, con el inglés…</b><div class="ops"><button data-v="0">Empiezo prácticamente de cero</button><button data-v="1">Entiendo cosas simples</button><button data-v="2">Me defiendo, pero me trabo al hablar</button><button data-v="3">Hablo con bastante soltura</button></div></div>
          <button class="btn btn-red ff-calc" type="button">Ver mi resultado</button>
          <div class="ff-res"><span class="ey" style="color:#FF8E93">Te recomendamos arrancar en</span><div class="D ff-rl"></div><p class="ff-rt" style="opacity:.9;margin:0 0 18px"></p>
            <div style="display:flex;gap:10px;flex-wrap:wrap"><a class="btn btn-white" href="#entrevista">Confirmarlo con una entrevista</a><a class="btn btn-red" href="/#cursos">Ver cursos 2027</a></div></div>
        </div>
      </div></section>
      <section style="background:var(--paper)"><div class="w"><span class="ey">Niveles Forefront</span><h2 class="D h2">Qué se ve en <em>cada nivel</em></h2>
        <div class="ff-tblw"><table class="ff-lvt"><tr><th>Nivel</th><th>Para quién</th><th>Temas</th></tr>${rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>'; }).join('')}</table></div>
        <p class="lead" style="margin-top:16px;font-size:15px">En verano hay cursos de <b>revisión</b> de cada nivel: si ya estudiaste, repasás tu nivel en febrero y empezás el anual en el que sigue.</p>
      </div></section>
    </div>`;
    m.insertBefore(h(html), m.firstChild);
    var A = {};
    $$('.ff-quiz .q', m).forEach(function (q) {
      var multi = $('.ops', q).dataset.multi;
      $$('button', q).forEach(function (b) {
        b.type = 'button';
        b.onclick = function () {
          if (multi) b.classList.toggle('on');
          else { $$('button', q).forEach(function (x) { x.classList.remove('on'); }); b.classList.add('on'); }
          A[q.dataset.q] = multi ? $$('button.on', q).length : +b.dataset.v;
        };
      });
    });
    $('.ff-calc', m).onclick = function () {
      var s0 = A[0] || 0, s = s0 + (A[1] || 0) + (A[2] || 0) + (A[3] || 0) * 1.5, r;
      if (s0 === 0 || s <= 1.5) r = ['Inicial', 'Arrancás con bases firmes, con material pensado para adultos. Si ya estudiaste algo, lo confirmamos en una entrevista.'];
      else if (s <= 5) r = ['Revisión Inicial', 'Tenés algo de base. Un repaso de Inicial en el verano te deja listo para el anual.'];
      else if (s <= 8.5) r = ['Pre-Intermedio', 'Tenés las bases: te sirve la revisión de Pre-Intermedio en verano, o Pre-Intermedio en el anual.'];
      else if (s <= 11.5) r = ['Intermedio', 'Te comunicás: Intermedio es tu lugar para ganar fluidez.'];
      else r = ['Intermedio Avanzado o Conversación', 'Tenés un buen nivel. Te conviene confirmar con una entrevista cuál de los dos te queda mejor.'];
      $('.ff-rl', m).textContent = r[0]; $('.ff-rt', m).textContent = r[1];
      var res = $('.ff-res', m); res.classList.add('show'); res.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };
  }

  /* ---------- arranque ---------- */
  function boot() {
    if (!document.body) return setTimeout(boot, 30);
    addCSS(); document.body.classList.add('ff-on');
    if (REAL) { var wst = document.createElement('style'); wst.textContent = 'body.ff-on>a.btn-whatsapp,body.ff-on .js-btn-fixed-bottom.btn-whatsapp{display:none!important}body.ff-prod .p-layer,body.ff-prod .p-overlay,body:has(#modal-cart.modal-show) .p-layer,body:has(#modal-cart.modal-show) .p-overlay,body:has(#modal-cart[style*=block]) .p-layer{display:none!important}'; document.head.appendChild(wst); }
    if (/forefrontdemo\./.test(location.hostname)) {
      var rb = document.querySelector('meta[name="robots"]'); if (!rb) { rb = document.createElement('meta'); rb.name = 'robots'; document.head.appendChild(rb); } rb.content = 'noindex, nofollow';
    }
    header(); footer();
    if (/forefrontdemo\./.test(location.hostname)) {
      var demo = h('<div class="ff" style="background:#0E1B4D;color:#fff;font:600 13px/1.35 Montserrat,Arial,sans-serif;text-align:center;padding:8px 14px">🧪 Versión de prueba<span class="ff-dlx"> de la web nueva</span> · inscripciones por <a href="' + wa() + '" target="_blank" style="color:#fff;text-decoration:underline">WhatsApp</a></div>');
      demo.className += ' ff-demo';
      document.body.insertBefore(demo, document.body.firstChild);
    }
    try {
      if (TPL === 'home' || PATH === '/') home();
      else if (TPL === 'product' || /^\/productos\/[^/]+\/$/.test(PATH)) product();
      else if (/^\/nivelacion\/?$/.test(PATH)) nivelacion();
      else if (TPL === 'category' || /^\/(productos|cursos-2027|ebooks)\/?$/.test(PATH)) category();
    } catch (e) { console.error('[FF]', e); }
    tick(); setInterval(tick, 1000);
    setInterval(function () { cartUpsell(); var n = $$('#modal-cart .js-cart-item').length, cc = $('.ff-cc'); if (cc) { cc.textContent = n; cc.style.display = n ? 'flex' : 'none'; } }, 800);
    if (ss('ffOpenCart')) { ss('ffOpenCart', null); setTimeout(openCart, 600); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  /* auto-actualización: si hay una versión nueva publicada, la toma y recarga una vez */
  setTimeout(function () {
    try {
      fetch('/ff-code/?v=' + Date.now(), { credentials: 'same-origin', cache: 'no-store' }).then(function (r) { return r.text(); }).then(function (html) {
        var d = new DOMParser().parseFromString(html, 'text/html'), p = d.getElementById('ffcode') || d.querySelector('pre'); if (!p) return;
        var b = atob(p.textContent.replace(/\s+/g, '')), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
        var code = new TextDecoder().decode(u), cur = ss('ffcode');
        if (code && cur && code !== cur && code.indexOf('Forefront') >= 0) { ss('ffcode', code); if (!ss('ffReloaded')) { ss('ffReloaded', '1'); location.reload(); } }
        else ss('ffReloaded', null);
      }).catch(function () {});
    } catch (e) {}
  }, 1500);
})();
