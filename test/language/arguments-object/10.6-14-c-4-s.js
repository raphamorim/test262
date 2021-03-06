// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.6-14-c-4-s
description: >
    Strict Mode - TypeError is thrown when accessing the [[Set]]
    attribute in 'callee' under strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        var argObj = function () {
            return arguments;
        } ();

        try {
            argObj.callee = {};
            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);
