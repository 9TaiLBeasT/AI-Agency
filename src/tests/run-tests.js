#!/usr/bin/env node

/**
 * RivRang Website Test Runner
 * Automated testing script for the redesigned website
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class RivRangTestRunner {
    constructor() {
        this.testResults = {
            total: 0,
            passed: 0,
            failed: 0,
            warnings: 0
        };
        this.startTime = Date.now();
    }

    log(message, type = 'info') {
        const timestamp = new Date().toLocaleTimeString();
        const colors = {
            info: '\x1b[36m',    // Cyan
            success: '\x1b[32m', // Green
            warning: '\x1b[33m', // Yellow
            error: '\x1b[31m',   // Red
            reset: '\x1b[0m'     // Reset
        };
        
        console.log(`${colors[type]}[${timestamp}] ${message}${colors.reset}`);
    }

    async runColorPaletteTests() {
        this.log('🎨 Running Color Palette Tests...', 'info');
        
        // Test 1: Check if CSS files contain RivRang brand colors
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            const tailwindConfig = fs.readFileSync(path.join(__dirname, '../../tailwind.config.js'), 'utf8');
            
            const brandColors = ['#a7f3d0', '#c4b5fd', '#bfdbfe', '#f8fafc', '#fce7f3'];
            let colorsFound = 0;
            
            brandColors.forEach(color => {
                if (cssContent.includes(color) || tailwindConfig.includes(color)) {
                    colorsFound++;
                }
            });
            
            if (colorsFound === brandColors.length) {
                this.recordTest('pass', 'All RivRang brand colors present in CSS');
            } else {
                this.recordTest('warning', `${colorsFound}/${brandColors.length} brand colors found`);
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to read CSS files: ' + error.message);
        }

        // Test 2: Check for gradient definitions
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes('linear-gradient') || cssContent.includes('radial-gradient')) {
                this.recordTest('pass', 'CSS gradients implemented');
            } else {
                this.recordTest('fail', 'No CSS gradients found');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check gradients: ' + error.message);
        }

        // Test 3: Check for CSS custom properties
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes('--color-') || cssContent.includes('var(--')) {
                this.recordTest('pass', 'CSS custom properties implemented');
            } else {
                this.recordTest('warning', 'Limited CSS custom properties usage');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check custom properties: ' + error.message);
        }
    }

    async runAnimationTests() {
        this.log('🎬 Running Animation Tests...', 'info');
        
        // Test 1: Check for animation definitions
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes('@keyframes') || cssContent.includes('animation:')) {
                this.recordTest('pass', 'CSS animations defined');
            } else {
                this.recordTest('warning', 'Limited CSS animations found');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check animations: ' + error.message);
        }

        // Test 2: Check for transform properties (GPU acceleration)
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes('transform:') || cssContent.includes('translate')) {
                this.recordTest('pass', 'CSS transforms implemented for GPU acceleration');
            } else {
                this.recordTest('warning', 'Limited CSS transforms usage');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check transforms: ' + error.message);
        }

        // Test 3: Check for transition properties
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes('transition:')) {
                this.recordTest('pass', 'CSS transitions implemented');
            } else {
                this.recordTest('warning', 'Limited CSS transitions found');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check transitions: ' + error.message);
        }
    }

    async runResponsiveTests() {
        this.log('📱 Running Responsive Design Tests...', 'info');
        
        // Test 1: Check for media queries
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            const tailwindConfig = fs.readFileSync(path.join(__dirname, '../../tailwind.config.js'), 'utf8');
            
            if (cssContent.includes('@media') || tailwindConfig.includes('screens')) {
                this.recordTest('pass', 'Responsive breakpoints defined');
            } else {
                this.recordTest('warning', 'Limited responsive design implementation');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check responsive design: ' + error.message);
        }

        // Test 2: Check for flexible layouts
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes('grid') || cssContent.includes('flex')) {
                this.recordTest('pass', 'Flexible layouts implemented');
            } else {
                this.recordTest('warning', 'Limited flexible layout usage');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check layouts: ' + error.message);
        }

        // Test 3: Check for viewport meta tag
        try {
            const htmlContent = fs.readFileSync(path.join(__dirname, '../../index.html'), 'utf8');
            
            if (htmlContent.includes('viewport') && htmlContent.includes('width=device-width')) {
                this.recordTest('pass', 'Viewport meta tag configured');
            } else {
                this.recordTest('fail', 'Viewport meta tag missing or incorrect');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check viewport: ' + error.message);
        }

        // Test 4: Check for overflow prevention
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes('overflow-x: hidden')) {
                this.recordTest('pass', 'Horizontal overflow prevented');
            } else {
                this.recordTest('warning', 'Check for potential horizontal overflow');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check overflow: ' + error.message);
        }
    }

    async runAccessibilityTests() {
        this.log('♿ Running Accessibility Tests...', 'info');
        
        // Test 1: Check for semantic HTML elements
        try {
            const appContent = fs.readFileSync(path.join(__dirname, '../App.tsx'), 'utf8');
            
            const semanticElements = ['<section', '<nav', '<header', '<main', '<footer'];
            let semanticFound = 0;
            
            semanticElements.forEach(element => {
                if (appContent.includes(element)) {
                    semanticFound++;
                }
            });
            
            if (semanticFound >= 3) {
                this.recordTest('pass', 'Semantic HTML elements used');
            } else {
                this.recordTest('warning', 'Limited semantic HTML usage');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check semantic HTML: ' + error.message);
        }

        // Test 2: Check for ARIA attributes
        try {
            const componentsDir = path.join(__dirname, '../components');
            let ariaFound = false;
            
            if (fs.existsSync(componentsDir)) {
                const files = fs.readdirSync(componentsDir, { recursive: true });
                
                for (const file of files) {
                    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                        const filePath = path.join(componentsDir, file);
                        const content = fs.readFileSync(filePath, 'utf8');
                        
                        if (content.includes('aria-') || content.includes('role=')) {
                            ariaFound = true;
                            break;
                        }
                    }
                }
            }
            
            if (ariaFound) {
                this.recordTest('pass', 'ARIA attributes implemented');
            } else {
                this.recordTest('warning', 'Consider adding more ARIA attributes');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check ARIA attributes: ' + error.message);
        }

        // Test 3: Check for focus styles
        try {
            const cssContent = fs.readFileSync(path.join(__dirname, '../index.css'), 'utf8');
            
            if (cssContent.includes(':focus') || cssContent.includes('focus-visible')) {
                this.recordTest('pass', 'Focus styles implemented');
            } else {
                this.recordTest('warning', 'Consider adding custom focus styles');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check focus styles: ' + error.message);
        }

        // Test 4: Check for alt text patterns
        try {
            const componentsDir = path.join(__dirname, '../components');
            let altTextFound = false;
            
            if (fs.existsSync(componentsDir)) {
                const files = fs.readdirSync(componentsDir, { recursive: true });
                
                for (const file of files) {
                    if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
                        const filePath = path.join(componentsDir, file);
                        const content = fs.readFileSync(filePath, 'utf8');
                        
                        if (content.includes('alt=')) {
                            altTextFound = true;
                            break;
                        }
                    }
                }
            }
            
            if (altTextFound) {
                this.recordTest('pass', 'Alt text attributes found');
            } else {
                this.recordTest('warning', 'Consider adding alt text for images');
            }
        } catch (error) {
            this.recordTest('fail', 'Failed to check alt text: ' + error.message);
        }
    }

    recordTest(status, message) {
        this.testResults.total++;
        
        if (status === 'pass') {
            this.testResults.passed++;
            this.log(`✅ ${message}`, 'success');
        } else if (status === 'fail') {
            this.testResults.failed++;
            this.log(`❌ ${message}`, 'error');
        } else if (status === 'warning') {
            this.testResults.warnings++;
            this.log(`⚠️  ${message}`, 'warning');
        }
    }

    async runAllTests() {
        this.log('🚀 Starting RivRang Website Test Suite...', 'info');
        this.log('', 'info');
        
        try {
            await this.runColorPaletteTests();
            this.log('', 'info');
            
            await this.runAnimationTests();
            this.log('', 'info');
            
            await this.runResponsiveTests();
            this.log('', 'info');
            
            await this.runAccessibilityTests();
            this.log('', 'info');
            
            this.generateReport();
        } catch (error) {
            this.log('Test suite failed: ' + error.message, 'error');
            process.exit(1);
        }
    }

    generateReport() {
        const duration = Date.now() - this.startTime;
        const passRate = ((this.testResults.passed / this.testResults.total) * 100).toFixed(1);
        
        this.log('📊 Test Results Summary', 'info');
        this.log('═'.repeat(50), 'info');
        this.log(`Total Tests: ${this.testResults.total}`, 'info');
        this.log(`Passed: ${this.testResults.passed}`, 'success');
        this.log(`Failed: ${this.testResults.failed}`, this.testResults.failed > 0 ? 'error' : 'info');
        this.log(`Warnings: ${this.testResults.warnings}`, this.testResults.warnings > 0 ? 'warning' : 'info');
        this.log(`Pass Rate: ${passRate}%`, passRate >= 80 ? 'success' : passRate >= 60 ? 'warning' : 'error');
        this.log(`Duration: ${duration}ms`, 'info');
        this.log('═'.repeat(50), 'info');
        
        // Generate recommendations
        if (this.testResults.failed > 0) {
            this.log('🔧 Recommendations:', 'warning');
            this.log('- Fix failing tests before deployment', 'warning');
            this.log('- Review error messages above for specific issues', 'warning');
        }
        
        if (this.testResults.warnings > 0) {
            this.log('💡 Suggestions:', 'info');
            this.log('- Address warnings to improve quality', 'info');
            this.log('- Consider implementing suggested enhancements', 'info');
        }
        
        if (passRate >= 90) {
            this.log('🎉 Excellent! Website is well optimized.', 'success');
        } else if (passRate >= 80) {
            this.log('👍 Good! Minor improvements recommended.', 'success');
        } else if (passRate >= 60) {
            this.log('⚠️  Needs improvement. Address failing tests.', 'warning');
        } else {
            this.log('🚨 Critical issues found. Immediate attention required.', 'error');
        }
        
        // Exit with appropriate code
        process.exit(this.testResults.failed > 0 ? 1 : 0);
    }
}

// Run tests if this script is executed directly
const isMainModule = import.meta.url === `file://${process.argv[1]}` || 
                     process.argv[1].endsWith('run-tests.js');

if (isMainModule) {
    const runner = new RivRangTestRunner();
    runner.runAllTests();
}

export default RivRangTestRunner;