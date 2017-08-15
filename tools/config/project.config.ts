import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

    PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
    FONTS_DEST = `${this.APP_DEST}/fonts`;
    CSS_FONTS_DEST = `${this.APP_DEST}/css/fonts`;
    CSS_FONTS_SRC: any = [];
    FONTS_SRC:string[] = [];
    constructor() {
        super();
        this.FONTS_SRC = [
            'node_modules/bootstrap/dist/fonts/**',
            'node_modules/font-awesome/fonts/**',
            'node_modules/cd-themify-icons/fonts/**',
        ];
        this.CSS_FONTS_SRC = [
            'node_modules/cd-themify-icons/fonts/**'
        ];
        this.APP_TITLE = 'Fynd Task';
        // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

        /* Enable typeless compiler runs (faster) between typed compiler runs. */
        // this.TYPED_COMPILE_INTERVAL = 5;

        // Add `NPM` third-party libraries to be injected/bundled.
        this.NPM_DEPENDENCIES = [
                ...this.NPM_DEPENDENCIES,
            {src: '@angular/material/prebuilt-themes/deeppurple-amber.css', inject: true, vendor: false },
            {src: 'hammerjs/hammer.min.js', inject: 'libs'},
            {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
            {src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs'},
            {src: 'bootstrap/dist/css/bootstrap.min.css', inject: true},
            { src: 'font-awesome/css/font-awesome.min.css', inject: true},
            { src: 'cd-themify-icons/index.css', inject: true },
            // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
            // {src: 'lodash/lodash.min.js', inject: 'libs'},
        ];

        // Add `local` third-party libraries to be injected/bundled.
        this.APP_ASSETS = [
                ...this.APP_ASSETS,
            { src: `${this.CSS_SRC}/styles.css`, inject: true, vendor: false },
            { src: `${this.CSS_SRC}/themes/theme-1.css`, inject: true, vendor: false },
            { src: `${this.CSS_SRC}/plugins.css`, inject: true, vendor: false },
            { src: `${this.CSS_SRC}/custom.css`, inject: true, vendor: false },
            { src: `${this.CSS_SRC}/loader.css`, inject: true, vendor: false },
            // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
            // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
        ];

        this.ROLLUP_INCLUDE_DIR = [
                ...this.ROLLUP_INCLUDE_DIR,
            //'node_modules/moment/**'
        ];

        this.ROLLUP_NAMED_EXPORTS = [
            ...this.ROLLUP_NAMED_EXPORTS,
            //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
        ];

        // Add packages (e.g. ng2-translate)
        let additionalPackages: ExtendPackages[] = [
            {
                name: 'ngx-cookie',
                // Path to the package's bundle
                path: 'node_modules/ngx-cookie/bundles/ngx-cookie.umd.js'

            },
            // {
            //     name:'@angular/material',
            //     path:'node_modules/@angular/material/bundles/material.umd.js',
            //     packageMeta:{
            //         defaultExtension: 'js'
            //     }
            // }
        ];

        this.addPackagesBundles(additionalPackages);

        /* Add proxy middleware */
        // this.PROXY_MIDDLEWARE = [
        //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
        // ];

        /* Add to or override NPM module configurations: */
        // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
    }

}
