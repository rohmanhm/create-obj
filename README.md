# create-obj

> Create a new object with only keep truthy key value

## Install

```
$ npm install create-obj
```

Or

```
$ yarn add create-obj
```

## Usage

```js
import { CreateObj } from 'create-obj';
// Or
const { CreateObj } = require('create-obj');

const object = {
  className: 'only-this-obj-key-will-persist',
  disabled: '',
  autoComplete: false,
  checked: undefined,
  spellCheck: null,
};
const newObject = createObject(object);
//=> {className: 'only-this-obj-key-will-persist'}
```

## API

### CreateObj(source)

#### source

Type: `object`

Source object to re-create properties from.

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

## Related

- [filter-obj](https://github.com/sindresorhus/filter-obj) - Filter object keys and values into a new object
