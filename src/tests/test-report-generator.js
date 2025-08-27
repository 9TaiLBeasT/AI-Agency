/**
 * Test Report Generator for RivRang Website
 * Generates comprehensive HTML and JSON reports
 */

export class TestReportGenerator {
    constructor() {
        this.testResults = {
            timestamp: new Date().toISOString(),
            browser: this.getBrowserInfo(),
            viewport: this.getViewportInfo(),
            categories: []
        };
    }

    getBrowserInfo() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        
        if (ua.includes('Chrome')) browser = 'Chrome';
        else if (ua.includes('Firefox')) browser = 'Firefox';
        else if (ua.includes('Safari')) browser = 'Safari';
        else if (ua.includes('Edge')) browser = 'Edge';
        
        return {
            name: browser,
            userAgent: ua,
            version: navigator.appVersion
        };
    }

    getViewportInfo() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio || 1
        };
    }

    addTestCategory(category, tests, summary) {
        this.testResults.categories.push({
            name: category,
            tests,
            summary,
            timestamp: new Date().toISOString()
        });
    }

    generateHTMLReport() {
        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RivRang Website Test Report</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #000000, #1a1a2e);
            color: #ffffff;
            line-height: 1.6;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 30px;
            background: linear-gradient(135deg, #6366f1, #3b82f6);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
        }
        
        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .header .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .summary-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 25px;
            text-align: center;
            backdrop-filter: blur(10px);
        }
        
        .summary-card h3 {
            color: #6366f1;
            margin-bottom: 15px;
            font-size: 1.1rem;
        }
        
        .summary-value {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .summary-label {
            opacity: 0.7;
            font-size: 0.9rem;
        }
        
        .category-section {
            margin-bottom: 40px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 15px;
            padding: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .category-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 2px solid rgba(99, 102, 241, 0.3);
        }
        
        .category-title {
            font-size: 1.5rem;
            color: #6366f1;
        }
        
        .category-score {
            font-size: 1.2rem;
            font-weight: bold;
        }
        
        .test-grid {
            display: grid;
            gap: 15px;
        }
        
        .test-item {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 20px;
            border-left: 4px solid transparent;
        }
        
        .test-item.pass {
            border-left-color: #22c55e;
        }
        
        .test-item.fail {
            border-left-color: #ef4444;
        }
        
        .test-item.warning {
            border-left-color: #f59e0b;
        }
        
        .test-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        
        .test-name {
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .test-status {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            text-transform: uppercase;
        }
        
        .status-pass {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
            border: 1px solid #22c55e;
        }
        
        .status-fail {
            background: rgba(239, 68, 68, 0.2);
            color: #ef4444;
            border: 1px solid #ef4444;
        }
        
        .status-warning {
            background: rgba(245, 158, 11, 0.2);
            color: #f59e0b;
            border: 1px solid #f59e0b;
        }
        
        .test-details {
            opacity: 0.8;
            font-size: 0.9rem;
            margin-top: 10px;
        }
        
        .metadata {
            margin-top: 40px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 10px;
            font-size: 0.9rem;
            opacity: 0.7;
        }
        
        .progress-bar {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
            margin: 10px 0;
        }
        
        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #6366f1, #3b82f6);
            transition: width 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .summary-grid {
                grid-template-columns: 1fr 1fr;
            }
            
            .category-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎨 RivRang Website Test Report</h1>
            <div class="subtitle">Comprehensive testing results for color palette, animations, responsive design, and accessibility</div>
            <div style="margin-top: 15px; opacity: 0.8;">
                Generated on ${new Date(this.testResults.timestamp).toLocaleString()}
            </div>
        </div>
        
        ${this.generateSummarySection()}
        ${this.generateCategorySections()}
        ${this.generateMetadataSection()}
    </div>
    
    <script>
        // Add interactive features
        document.addEventListener('DOMContentLoaded', function() {
            // Animate progress bars
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 500);
            });
            
            // Add click handlers for test items
            const testItems = document.querySelectorAll('.test-item');
            testItems.forEach(item => {
                item.addEventListener('click', function() {
                    const details = this.querySelector('.test-details');
                    if (details) {
                        details.style.display = details.style.display === 'none' ? 'block' : 'none';
                    }
                });
            });
        });
    </script>
</body>
</html>`;
        
        return html;
    }

    generateSummarySection() {
        const totalTests = this.testResults.categories.reduce((sum, cat) => sum + (cat.summary?.total || 0), 0);
        const totalPassed = this.testResults.categories.reduce((sum, cat) => sum + (cat.summary?.passed || 0), 0);
        const totalFailed = this.testResults.categories.reduce((sum, cat) => sum + (cat.summary?.failed || 0), 0);
        const totalWarnings = this.testResults.categories.reduce((sum, cat) => sum + (cat.summary?.warnings || 0), 0);
        const passRate = totalTests > 0 ? ((totalPassed / totalTests) * 100).toFixed(1) : 0;

        return `
        <div class="summary-grid">
            <div class="summary-card">
                <h3>Total Tests</h3>
                <div class="summary-value">${totalTests}</div>
                <div class="summary-label">Executed</div>
            </div>
            <div class="summary-card">
                <h3>Passed</h3>
                <div class="summary-value" style="color: #22c55e;">${totalPassed}</div>
                <div class="summary-label">Successful</div>
            </div>
            <div class="summary-card">
                <h3>Failed</h3>
                <div class="summary-value" style="color: #ef4444;">${totalFailed}</div>
                <div class="summary-label">Critical Issues</div>
            </div>
            <div class="summary-card">
                <h3>Warnings</h3>
                <div class="summary-value" style="color: #f59e0b;">${totalWarnings}</div>
                <div class="summary-label">Improvements</div>
            </div>
            <div class="summary-card">
                <h3>Pass Rate</h3>
                <div class="summary-value" style="color: ${passRate >= 80 ? '#22c55e' : passRate >= 60 ? '#f59e0b' : '#ef4444'};">${passRate}%</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${passRate}%;"></div>
                </div>
            </div>
        </div>`;
    }

    generateCategorySections() {
        return this.testResults.categories.map(category => {
            const passRate = category.summary?.total > 0 ? 
                ((category.summary.passed / category.summary.total) * 100).toFixed(1) : 0;
            
            return `
            <div class="category-section">
                <div class="category-header">
                    <h2 class="category-title">${category.name}</h2>
                    <div class="category-score">${category.summary?.passed || 0}/${category.summary?.total || 0} (${passRate}%)</div>
                </div>
                <div class="test-grid">
                    ${this.generateTestItems(category.tests)}
                </div>
            </div>`;
        }).join('');
    }

    generateTestItems(tests) {
        if (!Array.isArray(tests)) return '';
        
        return tests.map(test => {
            const status = test.status || 'unknown';
            const statusClass = status === 'pass' ? 'pass' : status === 'fail' ? 'fail' : 'warning';
            const statusText = status === 'pass' ? 'PASS' : status === 'fail' ? 'FAIL' : 'WARN';
            
            return `
            <div class="test-item ${statusClass}">
                <div class="test-header">
                    <div class="test-name">${test.name || test.test || 'Unknown Test'}</div>
                    <div class="test-status status-${statusClass}">${statusText}</div>
                </div>
                ${test.details ? `<div class="test-details">${test.details}</div>` : ''}
                ${test.result && typeof test.result === 'object' ? 
                    `<div class="test-details">${JSON.stringify(test.result, null, 2)}</div>` : ''}
            </div>`;
        }).join('');
    }

    generateMetadataSection() {
        return `
        <div class="metadata">
            <h3>Test Environment</h3>
            <p><strong>Browser:</strong> ${this.testResults.browser.name} (${this.testResults.browser.version})</p>
            <p><strong>Viewport:</strong> ${this.testResults.viewport.width}x${this.testResults.viewport.height}</p>
            <p><strong>Device Pixel Ratio:</strong> ${this.testResults.viewport.devicePixelRatio}</p>
            <p><strong>Test Date:</strong> ${new Date(this.testResults.timestamp).toLocaleString()}</p>
            <p><strong>User Agent:</strong> ${this.testResults.browser.userAgent}</p>
        </div>`;
    }

    generateJSONReport() {
        return JSON.stringify(this.testResults, null, 2);
    }

    downloadReport(format = 'html') {
        const content = format === 'html' ? this.generateHTMLReport() : this.generateJSONReport();
        const mimeType = format === 'html' ? 'text/html' : 'application/json';
        const filename = `rivrang-test-report-${new Date().toISOString().split('T')[0]}.${format}`;
        
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    displayReport() {
        const reportWindow = window.open('', '_blank');
        reportWindow.document.write(this.generateHTMLReport());
        reportWindow.document.close();
    }
}

export default TestReportGenerator;