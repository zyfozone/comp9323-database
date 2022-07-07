// customized configuration to webpack

const path = require('path')

module.exports = {
    // webpack configuration
    webpack: {
        // alias configuration
        alias:{
            // @ means the path of "src file"
            '@': path.resolve(__dirname, 'src')
        }
    }
}