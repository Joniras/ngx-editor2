# NgxTextEditor

## Index ##

* [About](#about)
* [Setup](#setup)
* [Documentation](#documentation)
* [Issues](#issues)
* [Contributing](#contributing)
* [Deploy](#deploy)
* [Future Plans](#future-plans)
* [FAQ](#faq)

## About ## 

This is an Angular 2+ WYSIWYG component.  

## Setup

### Installation

For Angular 2-7: 

`npm install ngx-text-editor@^1.0.0 --save`

For Angular 8+:

`npm install ngx-text-editor --save`

### Documentation

Import `ngx-text-editor` module

```typescript
import { NgxEditorModule } from 'ngx-text-editor';

@NgModule({
  imports: [ NgxEditorModule ]
})
```

Import [font-awesome](https://github.com/FortAwesome/Font-Awesome) into your application

Then in HTML

```html
<app-ngx-text-editor [placeholder]="'Enter text here...'" [spellcheck]="true" [(ngModel)]="htmlContent"></app-ngx-text-editor>
```

For `ngModel` to work, You must import `FormsModule` from `@angular/forms`

## Issues ##

If you find any issues feel free to open a request in [the Issues tab](https://github.com/jrquick17/ionic4-auto-complete/issues). If I have the time I will try to solve any issues but cannot make any guarantees. Feel free to contribute yourself.

## Demo

Demo at stackblitz [ngx-text-editor](https://ngx-text-editor.stackblitz.io/)

## Documentation

Documentation is auto-generated using [compodoc][compodoc], and can be viewed here: [https://jrquick17.github.io/ngx-text-editor/](https://jrquick17.github.io/ngx-text-editor/)

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/lang/en/
[github]: https://jrquick17.github.io/
[wiki]:https://github.com/jrquick17/ngx-text-editor/wiki/ngxTextEditor
[compodoc]: https://compodoc.github.io/website/

## Contributing

A special thanks to all of our contributors! To contribute yourself just submit a [pull request](https://github.com/jrquick17/ngx-text-editor/pulls)!

* [jrquick17](https://github.com/jrquick17)
* [khernik93](https://github.com/khernik93)
* [mzsolt1](https://github.com/mzsolt1)
* [magicben](https://github.com/magicben)
* [Norddeutschland](https://github.com/Norddeutschland)
* [sibiraj-s](https://github.com/sibiraj-s)
* [ssuperczynski](https://github.com/)

## Deploy ##

* ### Generate Docs ###

   * Run `npm run docs:build`
   
* #### Update Version ###

   * Update version `package.json` files in both the root and `dist/` directory following [Semantic Versioning (2.0.0)](https://semver.org/).

* ### Build ###

    * Run `npm run build` from root.

* #### Test ###

    * Update `dist/package.json` to have `dependencies` to match root `package.json`.
    * Copy `dist/` contents into `demo/node_modules/ngx-text-editor/`
        * Run from root:  `cp -fr dist/* demo/node_modules/ngx-text-editor/`
    * Run `ionic serve` from `demo/`
    * Run `ionic build --prod` from `demo/`

* #### NPM Release ####

    * Run `npm publish` from `dist/` directory.

* #### Update Changelog ####

    * Add updates to `CHANGELOG.md` in root.

## Future Plans

* Add model for editorConfig 
* Support for Angular 8+
* Release on NPM
* Update README
* Update stackblitz
* Deploy demo website
