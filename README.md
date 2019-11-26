# ngx-text-editor

![](example.png)

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

* Visit the [demo](https://ngx-text-editor.jrquick.com) to see it in action!
* Visit [my website](https://jrquick.com) for other cool projects!

## Setup

### Installation

For Angular 8+:

`npm install @joniras/ngx-editor2 --save`

### Documentation

Import `ngx-text-editor` module

```typescript
import { NgxTextEditorModule } from 'ngx-text-editor';

@NgModule({
  imports: [ NgxTextEditorModule ]
})
```

Then in HTML

```html
<ngx-text-editor [placeholder]="'Enter text here...'" [spellcheck]="true" [(ngModel)]="htmlContent"></ngx-text-editor>
```

For `ngModel` to work, You must import `FormsModule` from `@angular/forms`

## Issues ##

If you find any issues feel free to open a request in [the Issues tab](https://github.com/Joniras/ngx-editor2/issues). If I have the time I will try to solve any issues but cannot make any guarantees. Feel free to contribute yourself.


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
* [Joniras](https://github.com/joniras)

## Deploy ##

* ### Generate Docs ###

   * Run `npm run docs:build`
   
* #### Update Version ###

   * Update version `package.json` file in the root directory following [Semantic Versioning (2.0.0)](https://semver.org/).

* ### Build ###

    * Run `npm run build` from root.

* #### Test ###

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
* Update stackblitz
* Update color picker
