const fs = require('fs');
let c = fs.readFileSync('public/index.html','utf8');
c = c.replace(
  'fbDB = firebase.database();',
  'firebase.initializeApp(FB_CONFIG);\n    fbDB = firebase.database();'
);
fs.writeFileSync('public/index.html', c);
const count = (c.match(/firebase.initializeApp/g)||[]).length;
console.log('initializeApp count:', count);
