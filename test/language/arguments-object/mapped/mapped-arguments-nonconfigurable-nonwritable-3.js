// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Mapped arguments object with non-configurable property
description: >
    Mapped arguments property is changed to non-configurable and
    non-writable. Perform property attribute changes with two
    [[DefineOwnProperty]] calls. Add intervening call to
    SetMutableBinding.
includes: [assert.js]
flags: [noStrict]
---*/

function argumentsNonConfigurableThenNonWritableWithInterveningSetMutableBinding(a) {
  Object.defineProperty(arguments, "0", {configurable: false});
  a = 2;
  Object.defineProperty(arguments, "0", {writable: false});
  assert.sameValue(a, 2);
  assert.sameValue(arguments[0], 1);

  // Postcondition: Arguments mapping is removed.
  a = 3;
  assert.sameValue(a, 3);
  assert.sameValue(arguments[0], 1);
}
argumentsNonConfigurableThenNonWritableWithInterveningSetMutableBinding(1);
