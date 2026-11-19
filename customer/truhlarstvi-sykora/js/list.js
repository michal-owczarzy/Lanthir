/* VÝROBNÍ LIST: zákazník vybere, co chce vyrobit, nákres se narýsuje a kóty
   ukazují zadané rozměry. Na konci se složí text poptávky do e-mailu nebo SMS. */
(function () {
  var form = document.getElementById('formular');
  if (!form) return;
  var V = {
    kuchyne: { n: 'Kuchyňská linka', ph: [260, 220, 60], box: [30, 34, 290, 212], s:
      '<rect class="k" x="30" y="34" width="260" height="62"/><path class="k" d="M95 34v62M160 34v62M225 34v62M86 86v-10M104 86v-10M151 86v-10M169 86v-10M216 86v-10M234 86v-10"/>' +
      '<path class="k silna" d="M25 134h270"/><rect class="k" x="30" y="134" width="260" height="78"/><path class="k" d="M95 134v78M160 134v78M225 134v78M30 160h65M30 186h65M55 147h15M55 173h15M55 199h15M152 146v14M233 146v14"/><rect class="k" x="168" y="146" width="49" height="40" rx="2"/>' },
    skrin: { n: 'Vestavěná skříň', ph: [180, 250, 60], box: [70, 24, 250, 212], s:
      '<rect class="k" x="70" y="24" width="180" height="188"/><path class="k" d="M70 34h180M130 34v178M190 34v178M122 104v24M198 104v24"/><rect class="k" x="141" y="48" width="38" height="148" rx="2"/>' },
    schody: { n: 'Schodiště', ph: [90, 280, ''], box: [50, 2, 270, 212], s:
      '<path class="k silna" d="M50 212H90V182H126V152H162V122H198V92H234V62H270"/><path class="k silna" d="M78 130 270 2"/><path class="k" d="M78 212V130M108 182V110M144 152V86M180 122V62M216 92V38M252 62V14"/>' },
    dvere: { n: 'Dveře', ph: [80, 197, ''], box: [104, 22, 216, 212], s:
      '<path class="k silna" d="M104 212V22h112v190"/><rect class="k" x="113" y="31" width="94" height="181"/><rect class="k" x="123" y="46" width="62" height="62" rx="2"/><rect class="k" x="123" y="124" width="62" height="72" rx="2"/><path class="k silna" d="M190 118h12"/>' },
    stul: { n: 'Stůl', ph: [160, 76, 90], box: [46, 104, 274, 212], s:
      '<rect class="k silna" x="46" y="104" width="228" height="12" rx="2"/><path class="k" d="M62 116v18h196v-18M64 134v78M80 134v78M240 134v78M256 134v78"/>' },
    postel: { n: 'Postel', ph: [180, 100, 210], box: [44, 88, 278, 212], s:
      '<path class="k silna" d="M44 212V88h20v124M262 212V128h16v84"/><rect class="k" x="64" y="150" width="198" height="34"/><path class="k" d="M64 150v-14c0-5 3-8 8-8h190v22M74 128c0-9 7-13 18-13h22c8 0 11 5 11 13"/>' },
    jine: { n: 'Něco jiného', ph: ['', '', ''], box: [96, 58, 232, 212], s:
      '<path class="k" d="M96 92h106v120H96zM96 92l30-34h106l-30 34M202 212l30-34V58"/>' }
  };
  var poradi = ['kuchyne', 'skrin', 'schody', 'dvere', 'stul', 'postel', 'jine'];
  var stav = { co: 'kuchyne', mat: '', odst: '' };
  var co = document.getElementById('co'), svg = document.getElementById('vykres'), nazev = document.getElementById('v-nazev');
  var souhrn = document.getElementById('souhrn');
  var rS = document.getElementById('r-s'), rV = document.getElementById('r-v'), rH = document.getElementById('r-h');
  var popis = document.getElementById('popis'), jmeno = document.getElementById('jmeno'), tel = document.getElementById('telefon');
  var G = !!(window.gsap && SY.hasG) && !SY.RM;

  co.innerHTML = poradi.map(function (k) {
    return '<button type="button" class="cip" aria-pressed="' + (k === stav.co) + '" data-v="' + k + '">' + V[k].n.replace('Vestavěná skříň', 'Skříň').replace('Kuchyňská linka', 'Kuchyň') + '</button>';
  }).join('');

  function cislo(i) { var v = parseInt(String(i.value).replace(/\D/g, ''), 10); return isNaN(v) ? '' : v; }

  /* kóty: vodorovná pod nákresem, svislá vpravo, popisky s čísly ze vstupů */
  function koty() {
    var b = V[stav.co].box, x1 = b[0], y1 = b[1], x2 = b[2], y2 = b[3];
    var y = y2 + 20, x = x2 + 20;
    var s = cislo(rS), v = cislo(rV), h = cislo(rH);
    return '<path class="mira" d="M' + x1 + ' ' + (y2 + 6) + 'V' + (y + 6) + 'M' + x2 + ' ' + (y2 + 6) + 'V' + (y + 6) + 'M' + x1 + ' ' + y + 'H' + x2 + 'M' + (x1 - 4) + ' ' + (y + 4) + 'l8 -8M' + (x2 - 4) + ' ' + (y + 4) + 'l8 -8"/>' +
      '<path class="mira" d="M' + (x2 + 6) + ' ' + y1 + 'H' + (x + 6) + 'M' + (x2 + 6) + ' ' + y2 + 'H' + (x + 6) + 'M' + x + ' ' + y1 + 'V' + y2 + 'M' + (x - 4) + ' ' + (y1 + 4) + 'l8 -8M' + (x - 4) + ' ' + (y2 + 4) + 'l8 -8"/>' +
      '<text class="mira-t" id="t-s" x="' + (x1 + x2) / 2 + '" y="' + (y + 18) + '" text-anchor="middle">' + (s ? 'šířka ' + s + ' cm' : 'šířka') + '</text>' +
      '<text class="mira-t" id="t-v" transform="rotate(-90 ' + (x + 14) + ' ' + (y1 + y2) / 2 + ')" x="' + (x + 14) + '" y="' + ((y1 + y2) / 2 + 4) + '" text-anchor="middle">' + (v ? 'výška ' + v + ' cm' : 'výška') + '</text>' +
      '<text class="mira-t" id="t-h" x="8" y="0">' + (h ? 'hloubka ' + h + ' cm' : '') + '</text>';
  }

  function prepsatSouhrn() {
    var s = cislo(rS), v = cislo(rV), h = cislo(rH), c = [V[stav.co].n];
    var r = [s, v, h].filter(function (x) { return x !== ''; });
    if (r.length) c.push(r.join(' × ') + ' cm');
    if (stav.mat) c.push(stav.mat === 'masiv' ? 'masiv' : 'lamino');
    if (stav.odst) c.push(stav.odst + ' odstín');
    souhrn.textContent = c.join(' · ');
  }

  function vykreslit(animovat) {
    var d = V[stav.co];
    nazev.textContent = d.n;
    [rS, rV, rH].forEach(function (i, n) { i.placeholder = d.ph[n] === '' ? '' : String(d.ph[n]); });
    var html = '<path class="zem" d="M8 212H312"/>' + d.s + koty();
    if (!G || !animovat) { svg.innerHTML = html; prepsatSouhrn(); return; }
    gsap.to(svg, { opacity: 0, duration: .12, ease: 'power1.in', onComplete: function () {
      svg.innerHTML = html;
      var tahy = SY.cara(svg.querySelectorAll('.k')), miry = SY.cara(svg.querySelectorAll('.mira'));
      gsap.set(svg.querySelectorAll('.mira-t'), { opacity: 0 });
      gsap.set(svg, { opacity: 1 });
      gsap.timeline()
        .to(tahy, { strokeDashoffset: 0, duration: .55, stagger: .07, ease: 'power2.inOut' })
        .to(miry, { strokeDashoffset: 0, duration: .45, stagger: .1, ease: 'power2.out' }, '-=.2')
        .to(svg.querySelectorAll('.mira-t'), { opacity: 1, duration: .25 }, '-=.2');
      prepsatSouhrn();
    } });
  }

  /* přepínače: jeden zmáčknutý ve skupině */
  function skupina(el, klic, poZmene) {
    el.addEventListener('click', function (e) {
      var b = e.target.closest('.cip'); if (!b) return;
      el.querySelectorAll('.cip').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      stav[klic] = b.dataset.v;
      poZmene();
    });
  }
  skupina(co, 'co', function () { vykreslit(true); });
  skupina(document.getElementById('material'), 'mat', prepsatSouhrn);
  skupina(document.getElementById('odstin'), 'odst', prepsatSouhrn);

  /* rozměry: jen číslice, popisek kóty se přepíše a lehce cukne */
  [[rS, 't-s', 'šířka'], [rV, 't-v', 'výška'], [rH, 't-h', 'hloubka']].forEach(function (p) {
    p[0].addEventListener('input', function () {
      var c = p[0].value.replace(/\D/g, '').slice(0, 4);
      if (c !== p[0].value) p[0].value = c;
      var t = document.getElementById(p[1]);
      if (t) {
        t.textContent = c ? p[2] + ' ' + c + ' cm' : (p[1] === 't-h' ? '' : p[2]);
        if (G && c) gsap.fromTo(t, { opacity: .35 }, { opacity: 1, duration: .25, ease: 'power1.out' });
      }
      prepsatSouhrn();
    });
  });

  /* fotka nebo náčrtek: náhled v listu (odeslat se dá jen jako příloha e-mailu) */
  var foto = document.getElementById('foto'), fotoT = document.getElementById('foto-t');
  var nahled = document.getElementById('nahled'), nImg = document.getElementById('nahled-img');
  foto.addEventListener('change', function () {
    var f = foto.files && foto.files[0];
    if (!f) return;
    fotoT.textContent = f.name.length > 26 ? f.name.slice(0, 23) + '…' : f.name;
    var r = new FileReader();
    r.onload = function () {
      nImg.src = r.result; nImg.alt = 'Náhled: ' + f.name; nahled.classList.add('on');
      if (G) gsap.from(nahled, { opacity: 0, y: 10, duration: .35, ease: 'power2.out' });
    };
    r.readAsDataURL(f);
  });

  function zatrest(el) { el.classList.remove('chyba'); void el.offsetWidth; el.classList.add('chyba'); }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var kanal = (e.submitter && e.submitter.dataset.kanal) || 'mail';
    var s = cislo(rS), v = cislo(rV), h = cislo(rH);
    if (!popis.value.trim() && s === '' && v === '' && h === '') {
      zatrest(popis); zatrest(rS.closest('.rozmery'));
      SY.toast('Napište aspoň krátký popis nebo rozměry');
      popis.focus();
      return;
    }
    var radky = ['Dobrý den,', 'posílám poptávku z webu.', '', 'Co: ' + V[stav.co].n];
    var r = [];
    if (s !== '') r.push('šířka ' + s); if (v !== '') r.push('výška ' + v); if (h !== '') r.push('hloubka ' + h);
    if (r.length) radky.push('Rozměry: ' + r.join(', ') + ' cm');
    radky.push('Materiál: ' + (stav.mat === 'masiv' ? 'masivní dřevo' : stav.mat === 'lamino' ? 'lamino, dekor' : 'poraďte mi'));
    if (stav.odst) radky.push('Odstín: ' + stav.odst);
    if (popis.value.trim()) radky.push('Popis: ' + popis.value.trim());
    if (foto.files && foto.files[0]) radky.push('', 'Fotku přikládám.');
    radky.push('');
    if (jmeno.value.trim()) radky.push(jmeno.value.trim());
    if (tel.value.trim()) radky.push('Tel.: ' + tel.value.trim());
    var text = radky.join('\n');
    if (kanal === 'sms') {
      location.href = 'sms:' + SY.TEL + '?&body=' + encodeURIComponent(text);
      SY.toast('Otevírám SMS s poptávkou');
    } else {
      location.href = 'mailto:' + SY.MAIL + '?subject=' + encodeURIComponent('Poptávka: ' + V[stav.co].n) + '&body=' + encodeURIComponent(text);
      SY.toast(foto.files && foto.files[0] ? 'Otevírám e-mail, nezapomeňte přiložit fotku' : 'Otevírám e-mail s poptávkou');
    }
  });

  vykreslit(false);
  /* první nákres se narýsuje, až list dojede do zorného pole */
  if (G) {
    var tahy0 = SY.cara(svg.querySelectorAll('.k')), miry0 = SY.cara(svg.querySelectorAll('.mira'));
    gsap.set(svg.querySelectorAll('.mira-t'), { opacity: 0 });
    gsap.timeline({ scrollTrigger: { trigger: svg, start: 'top 75%', once: true } })
      .to(tahy0, { strokeDashoffset: 0, duration: .7, stagger: .08, ease: 'power2.inOut' })
      .to(miry0, { strokeDashoffset: 0, duration: .5, stagger: .1 }, '-=.25')
      .to(svg.querySelectorAll('.mira-t'), { opacity: 1, duration: .3 }, '-=.2');
  }
})();
