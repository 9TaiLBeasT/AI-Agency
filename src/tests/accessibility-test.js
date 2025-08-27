/**
 * Accessibility Test Suite for RivRang Website
 * Tests color contrast, keyboard navigation, and ARIA compliance
 */

export class AccessibilityTester {
    constructor() {
        this.results = [];
    }

    // Test color contrast ratios
    testColorContrast() {
        const contrastTests = [
            { bg: '#6366f1', fg: '#ffffff', name: 'Purple Primary' },
            { bg: '#3b82f6', fg: '#ffffff', name: 'Blue Secondary' },
            { bg: '#f97316', fg: '#ffffff', name: 'Coral Accent' },
            { bg: '#14b8a6', fg: '#ffffff', name: 'Teal Accent' },
            { bg: '#000000', fg: '#ffffff', name: 'Black Background' }
        ];

        const results = contrastTests.map(test => {
            const ratio = this.calculateContrastRatio(test.bg, test.fg);
            const wcagAA = ratio >= 4.5;
            const wcagAAA = ratio >= 7;
            
            return {
                name: test.name,
                ratio: ratio.toFixed(2),
                wcagAA,
                wcagAAA,
                status: wcagAA ? 'pass' : 'fail'
            };
        });

        this.results.push({
            category: 'Color Contrast',
            tests: results,
            summary: {
                total: results.length,
                passed: results.filter(r => r.status === 'pass').length
            }
        });

        return results;
    }

    // Calculate WCAG contrast ratio
    calculateContrastRatio(color1, color2) {
        const getLuminance = (color) => {
            const rgb = parseInt(color.replace('#', ''), 16);
            const r = (rgb >> 16) & 0xff;
            const g = (rgb >> 8) & 0xff;
            const b = (rgb >> 0) & 0xff;
            
            const [rs, gs, bs] = [r, g, b].map(c => {
                c = c / 255;
                return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
            });
            
            return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
        };
        
        const lum1 = getLuminance(color1);
        const lum2 = getLuminance(color2);
        const brightest = Math.max(lum1, lum2);
        const darkest = Math.min(lum1, lum2);
        
        return (brightest + 0.05) / (darkest + 0.05);
    }

    // Test keyboard navigation
    testKeyboardNavigation() {
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const results = {
            totalFocusable: focusableElements.length,
            hasTabIndex: Array.from(focusableElements).some(el => el.hasAttribute('tabindex')),
            hasFocusStyles: this.checkFocusStyles(),
            status: focusableElements.length > 0 ? 'pass' : 'fail'
        };

        this.results.push({
            category: 'Keyboard Navigation',
            tests: [results],
            summary: {
                total: 1,
                passed: results.status === 'pass' ? 1 : 0
            }
        });

        return results;
    }

    // Check if focus styles are defined
    checkFocusStyles() {
        try {
            return Array.from(document.styleSheets).some(sheet => {
                try {
                    return Array.from(sheet.cssRules).some(rule => 
                        rule.selectorText && rule.selectorText.includes(':focus')
                    );
                } catch (e) {
                    return false;
                }
            });
        } catch (e) {
            return false;
        }
    }

    // Test ARIA attributes
    testARIACompliance() {
        const ariaElements = document.querySelectorAll('[aria-label], [aria-labelledby], [role]');
        const altTexts = document.querySelectorAll('img[alt]');
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        const results = {
            ariaElements: ariaElements.length,
            altTexts: altTexts.length,
            headingStructure: this.checkHeadingStructure(headings),
            landmarks: document.querySelectorAll('[role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], main, nav, header, footer').length,
            status: ariaElements.length > 0 || altTexts.length > 0 ? 'pass' : 'warning'
        };

        this.results.push({
            category: 'ARIA Compliance',
            tests: [results],
            summary: {
                total: 1,
                passed: results.status === 'pass' ? 1 : 0
            }
        });

        return results;
    }

    // Check heading structure
    checkHeadingStructure(headings) {
        const levels = Array.from(headings).map(h => parseInt(h.tagName.charAt(1)));
        let isValid = true;
        
        for (let i = 1; i < levels.length; i++) {
            if (levels[i] > levels[i-1] + 1) {
                isValid = false;
                break;
            }
        }
        
        return {
            total: headings.length,
            hasH1: levels.includes(1),
            validStructure: isValid
        };
    }

    // Run all accessibility tests
    async runAllTests() {
        console.log('🔍 Running Accessibility Tests...');
        
        const colorResults = this.testColorContrast();
        const keyboardResults = this.testKeyboardNavigation();
        const ariaResults = this.testARIACompliance();
        
        const summary = {
            totalCategories: this.results.length,
            totalTests: this.results.reduce((sum, cat) => sum + cat.summary.total, 0),
            totalPassed: this.results.reduce((sum, cat) => sum + cat.summary.passed, 0)
        };
        
        summary.passRate = ((summary.totalPassed / summary.totalTests) * 100).toFixed(1);
        
        return {
            results: this.results,
            summary,
            colorResults,
            keyboardResults,
            ariaResults
        };
    }

    // Generate accessibility report
    generateReport() {
        const report = this.runAllTests();
        
        console.log('\n♿ Accessibility Test Results');
        console.log('═'.repeat(40));
        
        report.results.forEach(category => {
            console.log(`\n${category.category}:`);
            console.log(`  Tests: ${category.summary.passed}/${category.summary.total} passed`);
        });
        
        console.log(`\nOverall Pass Rate: ${report.summary.passRate}%`);
        
        if (report.summary.passRate >= 90) {
            console.log('✅ Excellent accessibility compliance!');
        } else if (report.summary.passRate >= 70) {
            console.log('⚠️  Good accessibility, minor improvements needed');
        } else {
            console.log('🚨 Accessibility needs significant improvement');
        }
        
        return report;
    }
}

// Export for use in other modules
export default AccessibilityTester;