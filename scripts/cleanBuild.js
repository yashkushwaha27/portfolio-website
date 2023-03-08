const { readdirSync, rmSync } = require('fs');
const path = require('path');
const dir = path.resolve(__dirname, '../build');

// Cleaning build folder
try {
  readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));
} catch(e) {
  console.warn('Unable to clean build folder!');
}
