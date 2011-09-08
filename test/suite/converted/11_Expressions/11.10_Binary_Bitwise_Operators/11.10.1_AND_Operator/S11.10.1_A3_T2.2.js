// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x & y returns ToNumber(x) & ToNumber(y)
 *
 * @section: 11.10.1;
 * @path: 11_Expressions/11.10_Binary_Bitwise_Operators/11.10.1_AND_Operator/S11.10.1_A3_T2.2.js;
 * @description: Type(x) is different from Type(y) and both types vary between Number (primitive or object) and String (primitive and object);
 */

//CHECK#1
if (("1" & 1) !== 1) {
  $ERROR('#1: ("1" & 1) === 1. Actual: ' + (("1" & 1)));
}

//CHECK#2
if ((1 & "1") !== 1) {
  $ERROR('#2: (1 & "1") === 1. Actual: ' + ((1 & "1")));
}

//CHECK#3
if ((new String("1") & 1) !== 1) {
  $ERROR('#3: (new String("1") & 1) === 1. Actual: ' + ((new String("1") & 1)));
}

//CHECK#4
if ((1 & new String("1")) !== 1) {
  $ERROR('#4: (1 & new String("1")) === 1. Actual: ' + ((1 & new String("1"))));
}

//CHECK#5
if (("1" & new Number(1)) !== 1) {
  $ERROR('#5: ("1" & new Number(1)) === 1. Actual: ' + (("1" & new Number(1))));
}

//CHECK#6
if ((new Number(1) & "1") !== 1) {
  $ERROR('#6: (new Number(1) & "1") === 1. Actual: ' + ((new Number(1) & "1")));
}

//CHECK#7
if ((new String("1") & new Number(1)) !== 1) {
  $ERROR('#7: (new String("1") & new Number(1)) === 1. Actual: ' + ((new String("1") & new Number(1))));
}

//CHECK#8
if ((new Number(1) & new String("1")) !== 1) {
  $ERROR('#8: (new Number(1) & new String("1")) === 1. Actual: ' + ((new Number(1) & new String("1"))));
}

//CHECK#9
if (("x" & 1) !== 0) {
  $ERROR('#9: ("x" & 1) === 0. Actual: ' + (("x" & 1)));
}

//CHECK#10
if ((1 & "x") !== 0) {
  $ERROR('#10: (1 & "x") === 0. Actual: ' + ((1 & "x")));
}
