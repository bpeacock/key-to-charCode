/**!
 * name: jQuery getChar
 * repository: https://github.com/bpeacock/key-to-charCode
 * @author Brian Peacock
 * @version 0.3
 * Copyright 2013, Brian Peacock
 * Licensed under the MIT license.
 */

(function($) {
    $.extend({
        getChar: function(e) {
            /*** Convert to Char Code ***/
            var code = e.which;
            
            //Ignore Shift Key events & arrows
            var ignoredCodes = {
                16: true,
                37: true,
                38: true,
                39: true,
                40: true,
                20: true,
                17: true,
                18: true,
                91: true
            };
            
            if(ignoredCodes[code] === true) {
                return false;
            }
            
            //These are special cases that don't fit the ASCII mapping
            var exceptions = {
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
                222: 39, // '
                //numeric keypad
                96: '0'.charCodeAt(0),
                97: '1'.charCodeAt(0),
                98: '2'.charCodeAt(0),
                99: '3'.charCodeAt(0),
                100: '4'.charCodeAt(0),
                101: '5'.charCodeAt(0),
                102: '6'.charCodeAt(0),
                103: '7'.charCodeAt(0),
                104: '8'.charCodeAt(0),
                105: '9'.charCodeAt(0)
            };

            if(exceptions[code] !== undefined) {
                code = exceptions[code];
            }
            
            var ch = String.fromCharCode(code);
            
            /*** Handle Shift ***/
            if(e.shiftKey) {
                var special = {
                    1: '!',
                    2: '@',
                    3: '#',
                    4: '$',
                    5: '%',
                    6: '^',
                    7: '&',
                    8: '*',
                    9: '(',
                    0: ')',
                    ',': '<',
                    '.': '>',
                    '/': '?',
                    ';': ':',
                    "'": '"',
                    '[': '{',
                    ']': '}',
                    '\\': '|',
                    '`': '~',
                    '-': '_',
                    '=': '+'
                };

                if(special[ch] !== undefined) {
                    ch = special[ch];
                }
            }
            else {
                ch = ch.toLowerCase();
            }
            
            return ch.charCodeAt(0);
        }
    });
})(jQuery);
