const path = require('path');



module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    modules: {
        rules: [{
            test: /test.js$/,
            use: 'mocha-loader',
            exclude: /node_modules/,
        }]
    }
};
