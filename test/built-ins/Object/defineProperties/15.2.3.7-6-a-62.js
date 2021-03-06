// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-62
description: >
    Object.defineProperties - desc.enumerable and P.enumerable are two
    boolean values with different values (8.12.9 step 6)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", { 
    value: 10, 
    enumerable: false, 
    configurable: true 
});

Object.defineProperties(obj, {
    foo: {
        enumerable: true
    }
});
verifyEqualTo(obj, "foo", 10);

verifyNotWritable(obj, "foo");

verifyEnumerable(obj, "foo");

verifyConfigurable(obj, "foo");
