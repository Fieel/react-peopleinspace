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
            { // Regole per i file css
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader' // 2. injecting css into js
                    },
                    {
                        loader: 'css-loader'// 1. linting css
                    }
                ]
            },
            { // Regole per i file html
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader', // 3. setta il nome e crea il file
                        options: {
                            name: "[name].html"
                        }
                    },
                    {
                        loader: 'extract-loader' // 2. lo tiene come file separato
                    },
                    {
                        loader: 'html-loader' // 1. Linting html
                    }
                ]
            }

        ]
    }
}