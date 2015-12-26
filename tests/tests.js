/**
 * Creating dice face
 */
QUnit.test('Creating dice face', function(assert) {
  var diceFace = new JSDiceDealer.DiceFace(1);

  assert.notEqual(diceFace, null, 'not null');
  assert.notEqual(diceFace, undefined, 'not undefined');
});

/**
 * Setting dice value
 */
QUnit.test('Getting dice face value', function(assert) {
  var diceFace = new JSDiceDealer.DiceFace('pork');
  var diceFace2 = new JSDiceDealer.DiceFace(1);

  assert.equal(diceFace.getValue(), 'pork', 'getting string value');
  assert.equal(diceFace2.getValue(), 1, 'getting number value');
});

/**
 * Setting dice property
 */
QUnit.test('Getting dice face property', function(assert) {
  var diceFace = new JSDiceDealer.DiceFace('pork');

  diceFace.setProperty('color', 'green');
  diceFace.setProperty('value', 1);

  assert.equal(diceFace.getProperty('color'), 'green', 'getting string property');
  assert.equal(diceFace.getProperty('value'), 1, 'getting number property');
});

/**
 * Getting dice value
 */
QUnit.test('Getting dice value', function(assert) {
  var dice = new JSDiceDealer.Dice('test');
  var dice2 = new JSDiceDealer.Dice(123);

  assert.equal(dice.getName(), 'test', 'getting string name');
  assert.equal(dice2.getName(), 123, 'getting number name');
});

/**
 * Creating dice
 */
QUnit.test('Creating dice', function(assert) {
  var dice = new JSDiceDealer.Dice('test');

  assert.notEqual(dice, null, 'not null');
  assert.notEqual(dice, undefined, 'not undefined');
});

/**
 * Getting number of dice faces
 */
QUnit.test('Getting number of dice faces', function(assert) {
  var dice = new JSDiceDealer.Dice('test');
  assert.equal(dice.getNumberOfFaces(), 0, 'get number of faces (0)');

  var diceFace = new JSDiceDealer.DiceFace(1);
  dice.addFace(diceFace);
  assert.equal(dice.getNumberOfFaces(), 1, 'get number of faces (1)');

  var diceFace2 = new JSDiceDealer.DiceFace(2);
  var diceFace3 = new JSDiceDealer.DiceFace(3);
  dice.addFace(diceFace2);
  dice.addFace(diceFace3);

  assert.equal(dice.getNumberOfFaces(), 3, 'get number of faces (3)');
});



/**
 * Test throwing dices
 */
QUnit.test('Test getting faces', function(assert) {
  // create 6 dice faces
  var diceFace1 = new JSDiceDealer.DiceFace(1);
  var diceFace2 = new JSDiceDealer.DiceFace(2);
  var diceFace3 = new JSDiceDealer.DiceFace(3);
  var diceFace4 = new JSDiceDealer.DiceFace(4);
  var diceFace5 = new JSDiceDealer.DiceFace(5);
  var diceFace6 = new JSDiceDealer.DiceFace(6);

  // create dice
  var dice = new JSDiceDealer.Dice("d6");
  dice.addFace(diceFace1);
  dice.addFace(diceFace2);
  dice.addFace(diceFace3);
  dice.addFace(diceFace4);
  dice.addFace(diceFace5);
  dice.addFace(diceFace6);

  // get faces
  var faces = dice.getFaces();

  assert.equal(faces.length, 6, 'get faces length');
});

/**
 * Test throwing dices
 */
QUnit.test('Test throwing dices', function(assert) {
  var diceFaceValues = [1, 2, 3, 4, 5, 6];

  // create 6 dice faces
  var diceFace1 = new JSDiceDealer.DiceFace(1);
  var diceFace2 = new JSDiceDealer.DiceFace(2);
  var diceFace3 = new JSDiceDealer.DiceFace(3);
  var diceFace4 = new JSDiceDealer.DiceFace(4);
  var diceFace5 = new JSDiceDealer.DiceFace(5);
  var diceFace6 = new JSDiceDealer.DiceFace(6);

  // create dice
  var dice = new JSDiceDealer.Dice("d6");
  dice.addFace(diceFace1);
  dice.addFace(diceFace2);
  dice.addFace(diceFace3);
  dice.addFace(diceFace4);
  dice.addFace(diceFace5);
  dice.addFace(diceFace6);

  assert.equal(dice.getNumberOfFaces(), 6, 'get number of faces (6)');

  // throw dices a couple of times
  var diceFace = dice.throw();
  assert.notEqual(diceFace.getValue(), -1, 'dice value found (1)');

  diceFace = dice.throw();
  assert.notEqual(diceFace.getValue(), -1, 'dice value found (2)');

  diceFace = dice.throw();
  assert.notEqual(diceFace.getValue(), -1, 'dice value found (3)');

  diceFace = dice.throw();
  assert.notEqual(diceFace.getValue(), -1, 'dice value found (4)');

  diceFace = dice.throw();
  assert.notEqual(diceFace.getValue(), -1, 'dice value found (5)');

});
