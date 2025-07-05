const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './img';
const outputDir = './img/optimized';

// Function to recursively get all image files, excluding the output directory
function getFiles(dir, files = []) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    for (const dirent of dirents) {
        const res = path.resolve(dir, dirent.name);
        // Exclude the output directory itself
        if (res === path.resolve(outputDir)) {
            continue;
        }
        if (dirent.isDirectory()) {
            getFiles(res, files);
        } else if (dirent.isFile() && !dirent.name.startsWith('.') && /\.(png|jpg|jpeg|gif|webp|bmp)$/i.test(dirent.name)) {
            files.push(res);
        }
    }
    return files;
}

const imageFiles = getFiles(inputDir);

imageFiles.forEach(inputFile => {
    const relativePath = path.relative(inputDir, inputFile);
    const parsedPath = path.parse(relativePath);
    const outputSubDir = path.join(outputDir, parsedPath.dir);
    const outputFile = path.join(outputSubDir, parsedPath.name + '.webp');

    if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
    }

    sharp(inputFile)
        .webp({ quality: 80 })
        .toFile(outputFile, (err, info) => {
            if (err) {
                console.error(`Error optimizing ${inputFile}:`, err);
            } else {
                console.log(`Optimized ${inputFile} -> ${outputFile}`);
            }
        });
});
