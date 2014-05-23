var words = require ('./words.js');

var TheBulk = function () {
  this.words = words;
  return this;
};

TheBulk.prototype.float = TheBulk.prototype.long = TheBulk.prototype.double = function () {
  return Math.random ()*100;
};

TheBulk.prototype.int = TheBulk.prototype.integer = function () {
  return Math.round (this.float.apply (this, arguments));
};

TheBulk.prototype.char = TheBulk.prototype.character = function () {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.round (Math.random ()*51)];
};

TheBulk.prototype.string = TheBulk.prototype.word = function () {
  return this.words[Math.round (Math.random ()*(this.words.length - 1))];
};

TheBulk.prototype.bool = TheBulk.prototype.boolean = function () {
  return [true, false][Math.round (Math.random ())];
};

TheBulk.prototype.obj = TheBulk.prototype.object = TheBulk.prototype.json = function () {
  var self = this;
  var generateObject = function (object, level) {
    if (level < 5) {
      var number = Math.round (Math.random ()*3 + 1);
      for (var i=1;i<=number;i++) {
        var down = (level > 1 && Math.random () < 1/(level+1));
        if (level === 1 || down) {
          object[self.string.call (self)] = generateObject ({}, level+1);
        } else {
          object[self.string.call (self)] = self.string.call (self);
        }
      };
    } else {
      object[self.string.call (self)] = self.string.call (self);
    }
    return object;
  };
  return generateObject ({}, 1);
};

TheBulk.prototype.more = TheBulk.prototype.array = function (fun) {
  return [null, null, null, null, null, null, null, null, null, null].map (fun, this);
};

module.exports = TheBulk;

