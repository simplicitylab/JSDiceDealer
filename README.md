# JSDiceDealer

JSDiceDealer is a small javascript game dice library that contains utilities for creating and handling dices. It is especially suited for creating web-based dice games.

## Usage

### Creating a dice

```javascript

// create 6 dice faces
var diceFace1 = new JSDiceDealer.DiceFace(1);
var diceFace2 = new JSDiceDealer.DiceFace(2);
var diceFace3 = new JSDiceDealer.DiceFace(3);
var diceFace4 = new JSDiceDealer.DiceFace(4);
var diceFace5 = new JSDiceDealer.DiceFace(5);
var diceFace6 = new JSDiceDealer.DiceFace(6);

// create d6 (normal) dice
var dice = new JSDiceDealer.Dice("d6");
dice.addFace(diceFace1);
dice.addFace(diceFace2);
dice.addFace(diceFace3);
dice.addFace(diceFace4);
dice.addFace(diceFace5);
dice.addFace(diceFace6);
```

### Throwing a dice

```javascript
// throw dice
var face = dice.throw();

// get thrown face 
console.log(face.getValue());
```
