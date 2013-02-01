// timeout fix for Node.js
jasmine.getGlobal().setTimeout = function(funcToCall, millis) {
  if (jasmine.Clock.installed.setTimeout.apply) {
    return jasmine.Clock.installed.setTimeout.apply(this, arguments);
  } else {
    return jasmine.Clock.installed.setTimeout(funcToCall, millis);
  }
};

// TODO add other time-related Clock mocks: setInterval etc 

module.exports = {

  /**
   * call this in beforeEach method to add more available matchers
   * @param spec "this" within spec
   */
  addJasmineMatchers: function (spec) {
    spec.addMatchers({
      /**
       * Array contains all elements of another array
       * @param needles another array
       * @returns {Boolean} true/false
       */
      toContainAll: function(needles) {
        var haystack = this.actual;
        return needles.every(function (elem) {
          return haystack.some(function (sackElem) {
            return spec.env.equals_(elem, sackElem);
          });
        });
      }
    });
  },

  /**
   * filter jasmine spied function calls by first argument
   * @param calls calls array
   * @param firstArg value of first arg
   */
  getCallsFilteredByFirstArg: function (calls, firstArg){
    return _.filter(calls, function (elem) {
      return elem.args[0] === firstArg;
    });
  }
  
};

