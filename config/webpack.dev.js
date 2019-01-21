const path = require('path');

module.exports = {
    entry: { // File in entrata
        main: ['./src/main.js']
    },
    mode: 'development',
    output: { // File in uscita, usa p.es.'main' al posto di [name], preso dalle entry{}
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname,'../dist'), // Dove mettere i file in uscita
        publicPath: '/'// dove mettere i file output, partendo dalla path specifica sopra
    },
    devServer: {
        contentBase: "dist",
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' // injecting css into html
                    },
                    {
                        loader: 'css-loader'// linting css
                    }
                ]
            }
        ]
    }
}