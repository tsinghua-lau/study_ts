//引入一个包

const path  = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

//webpack中所有的配置信息都因该写在module.exports中
module.exports = {
    //入口文件
    entry:"./src/index.ts",
    //指定打包文件所在目录
    output:{
        //指定打包的目录
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js", 
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
            watch: true
        }
    },
    mode: 'development', // 设置mode
    //指定webpack打包时使用的模块
    module:{    
        
        rules:[
            {
                //test指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                //要排除的文件
                exclude:/node-modules/

            }
        ]

    },

    plugins:[
        // new HTMLWebpackPlugin(),//打包后生成index.html
        new HTMLWebpackPlugin({
            // title: "这是一个自定义的title"
            template: "./src/index.html"
        }),
    ]

};