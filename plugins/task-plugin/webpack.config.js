/*********************************************************************
* Copyright (c) 2018 Red Hat, Inc.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/che-theia-task-plugin-frontend.ts',
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'che-theia-task-plugin-frontend.js',
        
        libraryTarget: "var",
        library: "theia_che_theia_task_plugin",
                
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        
            "@theia/plugin": "theia.theia_che_theia_task_plugin",
            "@eclipse-che/plugin": "che.theia_che_theia_task_plugin"
        
	}
};
