// Simple script to check for unescaped entities
const fs = require('fs');

const files = [
  './src/app/page.tsx',
  './src/app/login/page.tsx'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    // Check for unescaped apostrophes in JSX text content (not in attributes or imports)
    const textContent = line.match(/>\s*[^<]*[^&]'[^a-z]/);
    if (textContent && !line.includes('import') && !line.includes('className')) {
      console.log(`${file}:${index + 1} - Potential unescaped apostrophe: ${line.trim()}`);
    }
  });
});