#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🧹 Running pre-build cleanup...');

// Files to ensure are deleted
const filesToDelete = [
  'src/components/LocalBusinessSchema.tsx',
  'src/components/LocalSEO.tsx',
  'src/components/LocalSEOManager.tsx'
];

filesToDelete.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`🗑️  Deleting problematic file: ${file}`);
    fs.unlinkSync(file);
  } else {
    console.log(`✅ File already deleted: ${file}`);
  }
});

// Check and fix Footer.tsx if needed
const footerPath = 'src/components/Footer.tsx';
if (fs.existsSync(footerPath)) {
  let footerContent = fs.readFileSync(footerPath, 'utf8');
  
  // Remove Twitter import if it exists
  if (footerContent.includes('Twitter')) {
    console.log('🔧 Fixing Footer.tsx - removing Twitter import');
    footerContent = footerContent.replace(/,\s*Twitter/g, '');
    footerContent = footerContent.replace(/Twitter,\s*/g, '');
    footerContent = footerContent.replace(/import\s*{\s*Twitter\s*}\s*from\s*['"][^'"]*['"];?\s*/g, '');
    fs.writeFileSync(footerPath, footerContent);
    console.log('✅ Footer.tsx fixed');
  } else {
    console.log('✅ Footer.tsx is already clean');
  }
}

console.log('✅ Pre-build cleanup completed');