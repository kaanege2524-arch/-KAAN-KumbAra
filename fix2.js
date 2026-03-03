const fs = require('fs');
let c = fs.readFileSync('public/index.html','utf8');

// save fonksiyonunu bul ve fbDB kontrolünü düzelt
c = c.replace(
  'async function save() {\n  const d = JSON.stringify(S);\n  try { localStorage.setItem(\'kumbara-v3\', d); } catch(_) {}\n  if (fbDB) {',
  'async function save() {\n  const d = JSON.stringify(S);\n  try { localStorage.setItem(\'kumbara-v3\', d); } catch(_) {}\n  console.log(\'save fbDB:\', fbDB);\n  if (fbDB) {'
);

fs.writeFileSync('public/index.html', c);
console.log('done');
