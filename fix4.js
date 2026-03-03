const fs = require('fs');
let c = fs.readFileSync('public/index.html','utf8');

// Eski STORAGE bloğunu sil
const start = c.indexOf('/* ── PARENT MODE ── */\n/* ── STORAGE ── */');
const end = c.indexOf('/* ── RENDER ALL ── */');
if (start !== -1 && end !== -1) {
  c = c.substring(0, start) + '/* ── RENDER ALL ── */\n' + c.substring(end + '/* ── RENDER ALL ── */\n'.length);
  console.log('Eski blok silindi');
} else {
  console.log('Blok bulunamadi, start:', start, 'end:', end);
}

fs.writeFileSync('public/index.html', c);
console.log('load sayisi:', (c.match(/async function load/g)||[]).length);
console.log('save sayisi:', (c.match(/async function save\(\)/g)||[]).length);
