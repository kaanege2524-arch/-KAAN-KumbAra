const fs = require('fs');
let c = fs.readFileSync('public/index.html','utf8');

// Eski save fonksiyonunu bul ve sil
c = c.replace(
`async function save() {
  const d = JSON.stringify(S);
  try { await window.storage.set('kumbara-v3', d); } catch(_) {}
  try { await window.storage.set('kumbara-v3', d, true); } catch(_) {}
  try { localStorage.setItem('kumbara-v3', d); } catch(_) {}
}`,
'/* eski save silindi */'
);

fs.writeFileSync('public/index.html', c);
const count = (c.match(/async function save/g)||[]).length;
console.log('save fonksiyon sayisi:', count);
