# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sidnat/lotide`

**Require it:**

`const _ = require('@sidnat/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`  : Assert if two compared arrays are equal.
* `assertEqual`        : Assert strict equality.
* `assertObjectsEqual` : Assert if two compared objects are equal.
* `countLetters`       : Returns an object of each letter and stores number of times it appears. 
* `countOnly`          : Count only the number of times the specified input appears.
* `eqArrays`           : Checks if two compared arrays are equal.
* `eqObjects`          : Checks if two compared objects are equal.
* `findKey`            : Finds a key in an object by using a callback function as second argument.
* `findKeyByValue`     : Finds a key in an objects by using value as second argument.
* `head`               : Returns the first element of an array.
* `letterPositions`    : Return an object of letters and their index positions.
* `map`                : Duplicate of JS method ".map".
* `middle`             : Returns the middle element/elements of an array.
* `tail`               : Returns the 2nd element and everything after that.
* `takeUntil`          : Returns everything until a specified limit value is matched.
* `without`            : Return a subset of a given array, removing unwanted element.