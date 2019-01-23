const path = require('path');
const webpack = require('webpack');

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
        contentBase: "dist",// Dove il server trova i file statici fa servire
        overlay: true,// Attiva overlay errori nel brower
        hot: true, // Attiva l'hot reloading con express
        stats: {
            colors: true
        }
    },
    module: { // Tutte le funzionalità aggiuntive 
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader' // babel will handle js files, rules can be found in .babelrc
                    }
                ],
                exclude: /node_modules/
            },
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
                        loader: 'html-loader', // 1. Linting html
                        options: {
                            attrs: ["img:src"]// controlla gli attributi 'src' delle tag <img>
                        }
                    }
                ]
            },
            { // Regole per le immagini
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}