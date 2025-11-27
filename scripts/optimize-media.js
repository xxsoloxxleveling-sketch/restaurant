import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegPath);

const publicDir = path.join(process.cwd(), 'public');
const videosDir = path.join(publicDir, 'videos');

// Helper to get file size in MB
const getFileSizeMB = (filePath) => {
    const stats = fs.statSync(filePath);
    return (stats.size / (1024 * 1024)).toFixed(2);
};

// Optimize Images
const optimizeImages = async () => {
    console.log('🖼️  Optimizing Images...');
    const files = fs.readdirSync(publicDir);

    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(publicDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

            // Skip if WebP already exists and is newer
            if (fs.existsSync(outputPath) && fs.statSync(outputPath).mtime > fs.statSync(inputPath).mtime) {
                continue;
            }

            console.log(`   Processing: ${file} (${getFileSizeMB(inputPath)} MB)`);

            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`   ✅ Converted to: ${path.basename(outputPath)} (${getFileSizeMB(outputPath)} MB)`);
            } catch (err) {
                console.error(`   ❌ Error converting ${file}:`, err);
            }
        }
    }
};

// Optimize Videos
const optimizeVideos = async () => {
    console.log('\n🎥 Optimizing Videos...');
    if (!fs.existsSync(videosDir)) return;

    const files = fs.readdirSync(videosDir);

    for (const file of files) {
        if (file.match(/\.mp4$/i) && !file.includes('_optimized')) {
            const inputPath = path.join(videosDir, file);
            const tempPath = path.join(videosDir, file.replace('.mp4', '_temp.mp4'));

            console.log(`   Processing: ${file} (${getFileSizeMB(inputPath)} MB)`);

            await new Promise((resolve, reject) => {
                ffmpeg(inputPath)
                    .outputOptions([
                        '-c:v libx264',
                        '-crf 28', // Higher CRF = Lower Quality/Size (Range 0-51, 23 is default, 28 is good for web)
                        '-preset slow',
                        '-c:a aac',
                        '-b:a 128k',
                        '-movflags +faststart'
                    ])
                    .output(tempPath)
                    .on('end', () => {
                        // Replace original with optimized
                        fs.unlinkSync(inputPath);
                        fs.renameSync(tempPath, inputPath);
                        console.log(`   ✅ Optimized: ${file} (${getFileSizeMB(inputPath)} MB)`);
                        resolve();
                    })
                    .on('error', (err) => {
                        console.error(`   ❌ Error optimizing ${file}:`, err);
                        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                        reject(err);
                    })
                    .run();
            });
        }
    }
};

const run = async () => {
    await optimizeImages();
    await optimizeVideos();
    console.log('\n✨ Media Optimization Complete!');
};

run();
