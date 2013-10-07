/*global _, $test, module, test, expect, ok, deepEqual*/

module("", {
    setup: function() {
        this.e = jQuery.Event("keydown");
    },
    teardown: function() {
        this.e = null;
    }
});

test("A-Z", function() {
    expect(1);
    
    this.e.which = 68;
    this.e.shiftKey = true;
    
    deepEqual($.getChar(this.e), 68, "D");
});

test("a-z", function() {
    expect(1);
    
    this.e.which = 68;
    deepEqual($.getChar(this.e), 100, "d");
});

test("0-9", function() {
    expect(1);
    
    this.e.which = 57;
    deepEqual($.getChar(this.e), 57, "9");
});

test("Special Character Shift Key", function() {
    expect(21);
    var e = this.e;
    
    _.each({
            49: 33,
            50: 64,
            51: 35,
            52: 36,
            53: 37,
            54: 94,
            55: 38,
            56: 42,
            57: 40,
            48: 41,
            188: 60,
            190: 62,
            191: 63,
            186: 58,
            222: 34,
            219: 123,
            221: 125,
            220: 124,
            192: 126,
            189: 95,
            187: 43
        }, function(expected, input) {
            e.which = input;
            e.shiftKey = true;
            
            deepEqual($.getChar(e), expected, "'" + input + "' returns " + expected);
        }
    );
});

test("Ignored Keycodes", function() {
    expect(9);
    
    var e = this.e;
    
    _.each([16, 37, 38, 39, 40, 20, 17, 18, 91], function(code) {
        e.which = code;
        ok(!$.getChar(e), code + " is ignored");
    });
});

test("Exceptions", function() {
    expect(11);
    var e = this.e;
    
    _.each({
            186: 59, // ;
            187: 61, // =
            188: 44, // ,
            189: 45, // -
            190: 46, // .
            191: 47, // /
            192: 96, // `
            219: 91, // [
            220: 92, // \
            221: 93, // ]
            222: 39  // '
        }, function(expected, input) {
            e.which = input;
            
            deepEqual($.getChar(e), expected, "'" + input + "' returns " + expected);
        }
    );
});



