// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-b-227
description: >
    Object.defineProperties - 'set' property of 'descObj' is not
    present (8.10.5 step 8)
includes: [propertyHelper.js]
---*/

var data = "data";
var obj = {};

Object.defineProperties(obj, {
    descObj: {
        get: function () {
            return data;
        }
    }
});


assert(obj.hasOwnProperty("descObj"));
verifyNotWritable(obj, "descObj");

var desc = Object.getOwnPropertyDescriptor(obj, "descObj");
assert.sameValue(typeof (desc.set), "undefined")

