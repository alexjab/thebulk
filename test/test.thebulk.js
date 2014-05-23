var mocha = require ('mocha');
var should = require ('should');

var TheBulk = require ('../thebulk.js');

describe ('TheBulk, a simple, content agnostic, bulk data generator', function () {
  describe ('TheBulk ()', function () {
    it ('should create a TheBulk object', function (done) {
      var thebulk = new TheBulk ();
      thebulk.should.be.type ('object');
      thebulk.should.have.property ('words');
      done ();
    });

  });

  describe ('TheBulk.float ()', function () {
    it ('should generate a float', function (done) {
      var thebulk = new TheBulk ();
      thebulk.float ().should.be.type ('number');
      thebulk.long ().should.be.type ('number');
      thebulk.double ().should.be.type ('number');
      (thebulk.float ().toString ().search (/\./)).should.not.equal (-1);
      (thebulk.float () >= 0).should.be.true;
      (thebulk.float () <= 100).should.be.true;
      done ();
    });
  });

  describe ('TheBulk.int ()', function () {
    it ('should generate an integer', function (done) {
      var thebulk = new TheBulk ();
      thebulk.int ().should.be.type ('number');
      thebulk.integer ().should.be.type ('number');
      (thebulk.int ().toString ().search (/\./)).should.equal (-1);
      (thebulk.int () >= 0).should.be.true;
      (thebulk.int () <= 100).should.be.true;
      done ();
    });
  });

  describe ('TheBulk.char ()', function () {
    it ('should generate a character from the latin alphabet', function (done) {
      var thebulk = new TheBulk ();
      thebulk.char ().should.be.type ('string');
      thebulk.character ().should.be.type ('string');
      thebulk.char ().length.should.equal (1);
      (thebulk.int ().toString ().search (/\./)).should.equal (-1);
      (thebulk.char () >= 'A').should.be.true;
      (thebulk.char () <= 'z').should.be.true;
      done ();
    });
  });

  describe ('TheBulk.string ()', function () {
    it ('should extract a word from a list', function (done) {
      var thebulk = new TheBulk ();
      thebulk.string ().should.be.type ('string');
      thebulk.words.should.containEql (thebulk.string ());
      thebulk.string ().length.should.be.above (1);
      thebulk.words = ['one', 'two', 'three'];
      thebulk.words.should.containEql (thebulk.string ());
      done ();
    });
  });

  describe ('TheBulk.bool ()', function () {
    it ('should generate a boolean', function (done) {
      var thebulk = new TheBulk ();
      thebulk.bool ().should.be.type ('boolean');
      thebulk.boolean ().should.be.type ('boolean');
      var bool = thebulk.bool ();
      (bool === true || bool === false).should.be.true;
      bool = thebulk.boolean ();
      (bool === true || bool === false).should.be.true;
      done ();
    });
  });

  describe ('TheBulk.obj ()', function () {
    it ('should generate an object', function (done) {
      var thebulk = new TheBulk ();
      thebulk.obj ().should.be.type ('object');
      thebulk.object ().should.be.type ('object');
      thebulk.json ().should.be.type ('object');
      thebulk.obj ().should.not.be.eql ({});
      thebulk.object ().should.not.be.eql ({});
      thebulk.json ().should.not.be.eql ({});
      done ();
    });
  });

  describe ('TheBulk.more ()', function () {
    it ('should generate a list of things', function (done) {
      var thebulk = new TheBulk ();
      thebulk.more (thebulk.bool).length.should.equal (10);
      thebulk.more (thebulk.int).forEach (function (num) {
        (typeof num).should.equal ('number');
      });
      thebulk.more (thebulk.float).forEach (function (num) {
        (typeof num).should.equal ('number');
      });
      thebulk.more (thebulk.char).forEach (function (char) {
        (typeof char).should.equal ('string');
        char.length.should.eql (1);
      });
      thebulk.more (thebulk.string).forEach (function (string) {
        (typeof string).should.equal ('string');
      });
      thebulk.more (thebulk.bool).forEach (function (bool) {
        (typeof bool).should.equal ('boolean');
      });
      thebulk.more (thebulk.obj).forEach (function (obj) {
        (typeof obj).should.equal ('object');
      });
      done ();
    });
  });

});
