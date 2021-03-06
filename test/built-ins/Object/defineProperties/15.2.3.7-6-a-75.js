// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-75
description: >
    Object.defineProperties will not throw TypeError if P.configurable
    is false, P.writalbe is false, P.value is NaN and properties.value
    is NaN (8.12.9 step 10.a.ii.1)
includes: [propertyHelper.js]
---*/


var obj = {};
var accessed = false;

Object.defineProperty(obj, "foo", {
    value: NaN,
    writable: false,
    configurable: false
});

Object.defineProperties(obj, {
    foo: {
        value: NaN
    }
});

verifyNotEnumerable(obj, "foo");
verifyNotWritable(obj, "foo");
verifyNotConfigurable(obj, "foo");

