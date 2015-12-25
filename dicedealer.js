/*****************************************************************
 *
 * DiceDealer
 *
 * Written by Glennn De Backer <glenn at simplicity dot be>.
 *
 *****************************************************************/
/****************************
 * DiceDealer
 ****************************/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.DiceDealer = factory();
    }
}(this, function() {
    "use strict";

    var DiceDealer = {};

    /***************************************
     * DiceFace
     ***************************************/
    function DiceFace(value) {
      // store value
      this.value = value;
      this.property = {};
    };

    /**
     * Get value
     */
    DiceFace.prototype.getValue = function() {
        return this.value;
    };

    /**
     * Set dice face property
     */
    DiceFace.prototype.setProperty = function(propertyName, propertyValue) {
        this.property[propertyName] = propertyValue;
    }

    /**
     * Get dice face property
     */
    DiceFace.prototype.getProperty = function(propertyName) {
        return this.property[propertyName];
    }

    /***************************************
     * Dice
     ***************************************/
    function Dice(name) {
      this.name = name;
      this.faces = [];
    }

    /**
     * Get dice name
     */
    Dice.prototype.getName = function() {
      return this.name;
    }

    /**
     * Get number of faces
     */
    Dice.prototype.getNumberOfFaces = function() {
        return this.faces.length;
    }

    /**
     * Add dice face
     */
    Dice.prototype.addFace = function(diceFace) {
      this.faces.push(diceFace);
    }

    /**
     * Throw dice
     */
    Dice.prototype.throw = function(){
      // generate random index
      var randomIndex = Math.floor(Math.random() * this.getNumberOfFaces()) + 1

      // return random face
      return this.faces[--randomIndex];
    }

    DiceDealer.DiceFace = DiceFace;
    DiceDealer.Dice = Dice;

    return DiceDealer;
}));
