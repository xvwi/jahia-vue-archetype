// Karma configuration

module.exports = function(config) {
    config.set({
  
      // base path that will be used to resolve all patterns (eg. files, exclude)
      basePath: "src/main/typescript/",
  
  
      // frameworks to use
      // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
      frameworks: ["jasmine", "karma-typescript"],
  
  
      // list of files / patterns to load in the browser
      files: [
        "components/**/*.spec.ts",
        "components/**/*.ts"
      ],
  
      plugins: [
        require('karma-jasmine'),
        require('karma-typescript'),
        require('karma-phantomjs-launcher'),
        require('karma-mocha-reporter')
      ],
  
      /*
      karmaTypescriptConfig: {
        compilerOptions: {
          module: "commonjs"
        },
        tsconfig: "./tsconfig.json",
      },
      */
  
  
      // list of files / patterns to exclude
      exclude: [
          "node-modules",
          "components/**/*.d.ts"
      ],
  
  
      // preprocess matching files before serving them to the browser
      // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
      preprocessors: {
        "**/*.ts": "karma-typescript"
      },
  
  
      // test results reporter to use
      // possible values: 'dots', 'progress'
      // available reporters: https://npmjs.org/browse/keyword/karma-reporter
      reporters: ["mocha"],
  
      client: {
        captureConsole: false
      },
  
      // web server port
      port: 9876,
  
  
      // enable / disable colors in the output (reporters and logs)
      colors: true,
  
  
      // level of logging
      // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO,
  
  
      // enable / disable watching file and executing tests whenever any file changes
      autoWatch: true,
  
  
      // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
      browsers: ['PhantomJS'],
  
  
      // Continuous Integration mode
      // if true, Karma captures browsers, runs the tests and exits
      singleRun: false,
  
      // Concurrency level
      // how many browser should be started simultaneous
      concurrency: Infinity
    })
  };