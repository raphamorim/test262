// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
  description: >
      `yield` is a reserved identifier in strict mode code and may not be used
      as an identifier.
  es6id: 12.1.1
  negative: SyntaxError
  flags: [onlyStrict]
 ---*/

var yield = 13;
