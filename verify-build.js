#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🔍 Verifying build setup...');

// Check if problematic files exist
const problematicFiles = [
  'src/components/LocalBusinessSchema.tsx',
  'src/components/LocalSEO.tsx',
  'src/components/LocalSEOManager.tsx'
];

let hasProblematicFiles = false;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.error(`❌ Found problematic file: ${file}`);
    hasProblematicFiles = true;
  } else {
    console.log(`✅ Confirmed deleted: ${file}`);
  }
});

// Check Footer.tsx for Twitter import
const footerPath = 'src/components/Footer.tsx';
if (fs.existsSync(footerPath)) {
  const footerContent = fs.readFileSync(footerPath, 'utf8');
  if (footerContent.includes('Twitter')) {
    console.error('❌ Footer.tsx still contains Twitter import');
    hasProblematicFiles = true;
  } else {
    console.log('✅ Footer.tsx is clean (no Twitter import)');
  }
}

if (hasProblematicFiles) {
  console.error('❌ Build verification failed - problematic files found');
  process.exit(1);
}

// Try to build
try {
  console.log('🔨 Running TypeScript check...');
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript check passed');
  
  console.log('🔨 Running build...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
  
  console.log('🎉 All checks passed! Ready for deployment.');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}