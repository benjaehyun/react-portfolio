const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function processHobbyImages(inputDir = 'public/hobby', outputDir = 'public/hobby/processed') {
  try {
    // Create processed directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });
    
    // Get all images in hobby directory
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    const sizes = {
      sm: 640,
      md: 1024,
      lg: 1920
    };

    for (const file of imageFiles) {
      console.log(`\nProcessing ${file}...`);
      const inputPath = path.join(inputDir, file);
      const baseName = path.basename(file, path.extname(file));

      for (const [size, width] of Object.entries(sizes)) {
        const outputPath = path.join(outputDir, `${baseName}-${size}.webp`);

        await sharp(inputPath)
          .resize(width)
          .webp({ quality: 60 })
          .blur(2)
          .toFile(outputPath);
        
        console.log(`Created ${outputPath}`);
      }
    }
    
    console.log('\nAll images processed successfully!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// Process images in the hobby directory
processHobbyImages();