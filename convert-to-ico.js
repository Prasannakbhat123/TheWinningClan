const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

async function convertToIco() {
  try {
    const pngPath = path.join(process.cwd(), 'src', 'assets', 'twc-logo.png');
    const icoPath = path.join(process.cwd(), 'public', 'favicon.ico');
    
    // Read the PNG file
    const pngBuffer = fs.readFileSync(pngPath);
    
    // Convert to ICO
    const icoBuffer = await toIco([pngBuffer]);
    
    // Write the ICO file to public folder
    fs.writeFileSync(icoPath, icoBuffer);
    
    console.log('Successfully converted PNG to ICO!');
    console.log(`Favicon saved to: ${icoPath}`);
  } catch (error) {
    console.error('Error converting to ICO:', error);
    process.exit(1);
  }
}

convertToIco();

