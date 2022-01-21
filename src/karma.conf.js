module.exports = (config) => {
    config.set({
        basePath: '/',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadlessCI'],
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox'],
            }
        },
        singleRun: false,
        restartOnFileChange: true

        //files: [
        //  { pattern: '../app/**/*.ts', included: true },
        //{ pattern: '**/*.ts', included: true }
        //],
        //...
    });
}