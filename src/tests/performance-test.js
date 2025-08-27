/**
 * Performance Test Suite for RivRang Website
 * Tests animation performance, memory usage, and loading times
 */

export class PerformanceTester {
    constructor() {
        this.results = [];
        this.startTime = performance.now();
    }

    // Test animation frame rate
    async testAnimationPerformance() {
        return new Promise((resolve) => {
            let frameCount = 0;
            let lastTime = performance.now();
            let fps = 0;
            let frameDrops = 0;
            
            const measureFPS = (currentTime) => {
                frameCount++;
                const deltaTime = currentTime - lastTime;
                
                if (deltaTime > 16.67) { // Frame took longer than 60fps
                    frameDrops++;
                }
                
                if (frameCount % 60 === 0) {
                    fps = Math.round(1000 / (deltaTime / 60));
                    lastTime = currentTime;
                }
                
                if (frameCount < 180) { // Test for 3 seconds at 60fps
                    requestAnimationFrame(measureFPS);
                } else {
                    const smoothness = ((frameCount - frameDrops) / frameCount * 100).toFixed(1);
                    
                    const result = {
                        fps,
                        frameDrops,
                        totalFrames: frameCount,
                        smoothness: parseFloat(smoothness),
                        status: fps >= 55 ? 'excellent' : fps >= 30 ? 'good' : 'poor'
                    };
                    
                    this.results.push({
                        category: 'Animation Performance',
                        test: 'FPS Measurement',
                        result,
                        status: result.status === 'excellent' || result.status === 'good' ? 'pass' : 'fail'
                    });
                    
                    resolve(result);
                }
            };
            
            requestAnimationFrame(measureFPS);
        });
    }

    // Test memory usage
    testMemoryUsage() {
        let result = {
            available: false,
            usage: 0,
            status: 'unknown'
        };
        
        if (performance.memory) {
            const memoryMB = Math.round(performance.memory.usedJSHeapSize / 1024 / 1024);
            const limitMB = Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024);
            const usagePercent = (memoryMB / limitMB * 100).toFixed(1);
            
            result = {
                available: true,
                usage: memoryMB,
                limit: limitMB,
                usagePercent: parseFloat(usagePercent),
                status: memoryMB < 50 ? 'excellent' : memoryMB < 100 ? 'good' : 'high'
            };
        }
        
        this.results.push({
            category: 'Memory Usage',
            test: 'Heap Size',
            result,
            status: result.status === 'excellent' || result.status === 'good' ? 'pass' : 'warning'
        });
        
        return result;
    }

    // Test GPU acceleration availability
    testGPUAcceleration() {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        let result = {
            available: false,
            renderer: 'Software',
            status: 'unavailable'
        };
        
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            const renderer = debugInfo ? 
                gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : 
                gl.getParameter(gl.RENDERER);
            
            result = {
                available: true,
                renderer,
                vendor: gl.getParameter(gl.VENDOR),
                version: gl.getParameter(gl.VERSION),
                status: 'available'
            };
        }
        
        this.results.push({
            category: 'GPU Acceleration',
            test: 'WebGL Support',
            result,
            status: result.available ? 'pass' : 'warning'
        });
        
        return result;
    }

    // Test CSS animation performance
    async testCSSAnimationPerformance() {
        return new Promise((resolve) => {
            // Create test animation element
            const testElement = document.createElement('div');
            testElement.style.cssText = `
                position: fixed;
                top: -100px;
                left: -100px;
                width: 50px;
                height: 50px;
                background: linear-gradient(45deg, #6366f1, #f97316);
                border-radius: 50%;
                animation: testAnimation 2s linear infinite;
                z-index: -1;
            `;
            
            // Add keyframes
            const style = document.createElement('style');
            style.textContent = `
                @keyframes testAnimation {
                    0% { transform: translateX(0px) rotate(0deg) scale(1); }
                    25% { transform: translateX(100px) rotate(90deg) scale(1.2); }
                    50% { transform: translateX(200px) rotate(180deg) scale(1); }
                    75% { transform: translateX(100px) rotate(270deg) scale(0.8); }
                    100% { transform: translateX(0px) rotate(360deg) scale(1); }
                }
            `;
            
            document.head.appendChild(style);
            document.body.appendChild(testElement);
            
            // Monitor performance
            let frameCount = 0;
            let startTime = performance.now();
            
            const monitorAnimation = () => {
                frameCount++;
                
                if (frameCount < 120) { // Monitor for 2 seconds
                    requestAnimationFrame(monitorAnimation);
                } else {
                    const endTime = performance.now();
                    const duration = endTime - startTime;
                    const avgFPS = Math.round((frameCount / duration) * 1000);
                    
                    // Cleanup
                    document.body.removeChild(testElement);
                    document.head.removeChild(style);
                    
                    const result = {
                        duration: Math.round(duration),
                        avgFPS,
                        frameCount,
                        status: avgFPS >= 55 ? 'excellent' : avgFPS >= 30 ? 'good' : 'poor'
                    };
                    
                    this.results.push({
                        category: 'CSS Animation Performance',
                        test: 'Complex Animation',
                        result,
                        status: result.status === 'excellent' || result.status === 'good' ? 'pass' : 'fail'
                    });
                    
                    resolve(result);
                }
            };
            
            requestAnimationFrame(monitorAnimation);
        });
    }

    // Test loading performance
    testLoadingPerformance() {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const result = {
            domContentLoaded: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart) : 0,
            loadComplete: navigation ? Math.round(navigation.loadEventEnd - navigation.fetchStart) : 0,
            firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
            status: 'measured'
        };
        
        // Evaluate performance
        if (result.firstContentfulPaint > 0) {
            if (result.firstContentfulPaint < 1500) {
                result.status = 'excellent';
            } else if (result.firstContentfulPaint < 2500) {
                result.status = 'good';
            } else {
                result.status = 'poor';
            }
        }
        
        this.results.push({
            category: 'Loading Performance',
            test: 'Page Load Metrics',
            result,
            status: result.status === 'excellent' || result.status === 'good' ? 'pass' : 'warning'
        });
        
        return result;
    }

    // Run all performance tests
    async runAllTests() {
        console.log('⚡ Running Performance Tests...');
        
        const animationPerf = await this.testAnimationPerformance();
        const memoryUsage = this.testMemoryUsage();
        const gpuAcceleration = this.testGPUAcceleration();
        const cssAnimationPerf = await this.testCSSAnimationPerformance();
        const loadingPerf = this.testLoadingPerformance();
        
        const summary = {
            totalTests: this.results.length,
            passed: this.results.filter(r => r.status === 'pass').length,
            warnings: this.results.filter(r => r.status === 'warning').length,
            failed: this.results.filter(r => r.status === 'fail').length
        };
        
        summary.passRate = ((summary.passed / summary.totalTests) * 100).toFixed(1);
        
        return {
            results: this.results,
            summary,
            animationPerf,
            memoryUsage,
            gpuAcceleration,
            cssAnimationPerf,
            loadingPerf
        };
    }

    // Generate performance report
    async generateReport() {
        const report = await this.runAllTests();
        
        console.log('\n⚡ Performance Test Results');
        console.log('═'.repeat(40));
        
        report.results.forEach(test => {
            const status = test.status === 'pass' ? '✅' : test.status === 'warning' ? '⚠️' : '❌';
            console.log(`${status} ${test.category}: ${test.test}`);
        });
        
        console.log(`\nOverall Performance: ${report.summary.passRate}% (${report.summary.passed}/${report.summary.totalTests})`);
        
        if (report.summary.passRate >= 90) {
            console.log('🚀 Excellent performance!');
        } else if (report.summary.passRate >= 70) {
            console.log('👍 Good performance, minor optimizations possible');
        } else {
            console.log('⚠️ Performance needs improvement');
        }
        
        return report;
    }
}

export default PerformanceTester;