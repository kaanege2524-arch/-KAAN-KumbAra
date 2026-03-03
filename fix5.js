const fs = require('fs');
let c = fs.readFileSync('public/index.html','utf8');

const oldLoad = `/* ── STORAGE ── */
/* eski save silindi */
async function load() {
  let d = null;
  if (IS_PARENT) {
    try { const r = await window.storage.get('kumbara-v3', true); if(r) d=r.value; } catch(_) {}
  } else {
    try { const r = await window.storage.get('kumbara-v3'); if(r) d=r.value; } catch(_) {}
    if (!d) { try { d = localStorage.getItem('kumbara-v3'); } catch(_) {} }
    if (!d) { try { d = localStorage.getItem('kumbara-v2'); } catch(_) {} }
  }
  if (d) { try { S = JSON.parse(d); } catch(_) {} }
}`;

if (c.includes(oldLoad)) {
  c = c.replace(oldLoad, '');
  console.log('Silindi!');
} else {
  console.log('Bulunamadi');
}

fs.writeFileSync('public/index.html', c);
console.log('load sayisi:', (c.match(/async function load/g)||[]).length);
