'use strict';

angular.module('rngApp')
  .factory('$random', [function() {

    // Color Utility functions
    // Not part of the API. May expose later.


    return {

      /**
       * Returns a random integer N such that min <= N <= max
       * @param  {Int} min The minimum bound of the random integer (inclusive)
       * @param  {Int} max The maximum bound of the random integer (inclusive)
       * @return {Int}     A random integer n, min <= n <= max
       */
      randInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },

      /**
       * Returns a random number from a psuedo-range. Would be the same as using
       * choose(range(start, stop,[step])) except there is no memory allocated for
       * an array.
       *
       * Example: randRange(2,12,4) would return choose([2,6,10])
       *
       * @param  {Int} start The starting point for the range (inclusive)
       * @param  {Int} stop  The stopping point for the range (exclusive)
       * @param  {Int} step  Optional. Specifies the step between elements in the range
       * @return {Int}       The random choice in the range.
       */
      randRange: function (start, stop, step) {
        if(typeof step === 'undefined'){
          step = 1;
        }
        var nums = Math.floor((stop - start) / step) + 1;
        var i = Math.floor(Math.random() * nums);
        return step * i + start;
      },

      /**
       * Creates a sequence of random integers of length l, bounded by the min and max
       * @param  {Int} min The minimum bound of the random sequence (inclusive)
       * @param  {Int} max The maximum bound of the random sequence (exclusive)
       * @param  {Int} l The length of the sequence you wish to generate.
       * @return {Array}     A sequence of random integers of length l, between min and max
       */
      randSequence: function(min, max, l) {
        var seq = [];
        for(var i = 0; i <= l ; i++){
          seq.push(this.randInt(min, max));
        }
        return seq;
      },

      /**
       * Chooses a random number n in the Fibonacci Series, such that min <= n <= max.
       * @param  {Int} min Minimum bound of the fib series (inclusive)
       * @param  {Int} max Maximum bound of the fib series (inclusive)
       * @return {Int}     A fibonacci number between min and max
       */
      randFib: function (min, max) {
        return [min, max];
      },

      randPrime: function (min, max) {
        return [min, max];
      },

      uuid: function (prefix) {
        // return a UUID
        return prefix;
      },

      /*-----   COLOR METHODS   ---------------------------*/


      color: function () {
        // return false;
        var r,g,b,hex;
        r = this.randInt(0,255);
        g = this.randInt(0,255);
        b = this.randInt(0,255);
        hex = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        console.log(hex);
        return hex;
      },

      colors: function (n) {
        // Generate a sequence of colors with length n
        return n;
      },

      colorizeArray: function (list) {
        // Takes a list of colors and generates a random color for
        // each item in the array. Replaces the items in the array.
        return list;
      },

      colorHex: function () {

      },

      colorRGB: function () {

      },

      colorHSL: function () {

      },

      /*-----   LIST METHODS   ---------------------------*/

      /**
       * Returns a random element from the array provided.
       * @param  {Array} seq An array of items you want to choose a random element from
       * @return     The selected element in the Array.
       */
      choose: function (seq) {
        return seq[Math.floor(Math.random() * seq.length)];
      },

      /**
       * Shuffles the provided array but does not modify it. Uses the Fisher-Yates Algorithm
       * @param  {Array} list An array of items you wish to shuffle
       * @return {Array} The a new shuffled array.
       */
      shuffle: function (list) {
        var clone = list.slice(0);
        this.shuffleInplace(clone);
        return clone;
      },

      /**
       * Shuffles the provided array in place. Uses the Fisher-Yates Algorithm
       * @param  {Array} list An array of items you wish to shuffle
       * @return {Array} The same array that was provided, only shuffled.
       */
      shuffleInplace: function(list){
        var i = list.length, j, temp;
        if(i===0){ return; }

        while(--i) {
          j = Math.floor(Math.random() * (i + 1) );
          temp = list[i];
          list[i] = list[j];
          list[j] = temp;
        }
      }



    };

  }]);
