jasmine-node-sugar
==================

Some additional methods that make my life easier when testing with Jasmine (1.0.28) in Node.js  
I decided not to push this one to npm while there are only a few insignificant features which probably will be fixed in the next Jasmine release.

### Usage

- add this repo as dependency in `package.json`:
 
```javascript
  "devDependencies": {
    "jasmine-node": "1.0.28",
    "jasmine-node-sugar": "git://github.com/bestander/jasmine-node-sugar.git#master"
  },
```

- require this module in your `spec` file
- call `jasmine-node-sugar.addJasmineMatchers` in `beforeEach` method of your suite/spec


### License MIT
