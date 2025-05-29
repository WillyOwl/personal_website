import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFavicon() {
  try {
    // Path to the profile image
    const profileImagePath = path.join(__dirname, 'public', 'images', 'profile.jpg');
    
    // Path for the output favicon
    const faviconPath = path.join(__dirname, 'public', 'favicon.ico');
    
    // Generate a 32x32 favicon from the profile image
    await sharp(profileImagePath)
      .resize(32, 32)
      .toFile(faviconPath);
    
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 