var words = require ('./words.js');

var TheBulk = function () {
};

TheBulk.prototype.float = TheBulk.prototype.long = function () {
  return Math.random ()*100;
};

TheBulk.prototype.int = TheBulk.prototype.integer = function () {
  return Math.round (this.float.apply (this, arguments));
};

TheBulk.prototype.char = TheBulk.prototype.character = function () {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.round (Math.random ()*51)];
};

TheBulk.prototype.string = function () {
  return words[Math.round (Math.random ()*(words.length - 1))];
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
          object[self.string.call (this)] = generateObject ({}, level+1);
        } else {
          object[self.string.call (this)] = self.string.call (this);
        }
      };
    } else {
      object[self.string.call (this)] = self.string.call (this);
    }
    return object;
  };
  return generateObject ({}, 1);
};

exports.TheBulk = TheBulk;
