thebulk
=======

[![NPM version](https://badge.fury.io/js/thebulk.svg)](http://badge.fury.io/js/thebulk)

A simple, content agnostic, bulk data generator for node.js

TheBulk generates bulk data for your programs, and frees you from the tedious task of comming up with dummy data.

Its primary use is in unit tests.

##TL;DR
`npm install thebulk`

```
var thebulk = require('thebulk');

thebulk.float();
thebulk.int();
thebulk.char();
thebulk.string();
thebulk.bool();
thebulk.obj();
```

##Methods
###TheBulk.float()
Returns a float betwean 0 and 100.

####Alias
`TheBulk.long()` and `TheBulk.double()`

####Example
```
thebulk.float();
// => 56.79826296400279
```

###TheBulk.int()
Returns an integer between 0 and 100;

####Alias
`TheBulk.integer()`

####Example
```
thebulk.int();
// => 12
```


###TheBulk.char()
Returns an uppercase or lowercase character.

####Alias
`TheBulk.character()`

####Example
```
thebulk.char();
// => 'v'
```

###TheBulk.string()
Returns a string, cherry-picked from a loaded list of words.

This list of words is from *A Scandal in Bohemia*, by Arthur Conan Doyle.
You can get it at http://www.gutenberg.org/ebooks/1661

####Example
```
thebulk.string();
// => 'introspective'
```

###TheBulk.bool()
Returns a boolean, i.e. either `true` or `false`.

####Alias
`TheBulk.boolean()`

####Example
```
thebulk.bool();
// => true
```

###TheBulk.obj()
Returns an object.

####Aliases
`TheBulk.object()` and `TheBulk.json()`

####Example
```
thebulk.obj ();
/* => {
  surprise: {
    substitution: 'hence',
      nice: 'then',
      shutter: 'have'
  },
    loathed: {
      glimpse: {
        briefly: 'mystery',
        while: 'catch',
        wish: 'delighted',
        excuses: 'fine'
      },
      deeply: 'made',
      who: 'attempt'
    },
    knot: {
      inches: 'entangled'
    }
  }
*/
```

###TheBulk.more(fun)
Returns a list of 10 things. You can use it in composition with any generating method from TheBulk, or with any other function as well.

Arguments:

 - `fun [function][Mandatory]`, a function that must `return` something.

####Alias
`TheBulk.array()`

####Examples
```
thebulk.more(thebulk.int);
// Generates a list of integers
// => [ 70, 98, 91, 80, 61, 43, 1, 20, 71, 93 ]

thebulk.more(thebulk.bool);
// Generates a list of booleans
// => [ false, false, true, true, false, false, false, true, false, true ]

thebulk.more(function () {return MagicHat.popStuffOut ();});
// Generates
// => [ dove, dove, rabbit, baloons, rabbit, cat, baloons, rabbit, rabbit, dove ]
```

##Testing
Testing is done using `mocha` (`npm install mocha -g`) and `should`.
```
make test
```
