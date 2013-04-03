/**!
 * name: jQuery getChar
 * repository: https://github.com/bpeacock/key-to-charCode
 * @author Brian Peacock
 * @version 0.1
 * Copyright 2013, Brian Peacock
 * Licensed under the MIT license.
 */

(function($) {
    $.extend({
        getChar: function(e) {
            console.log(e.which);
            
            /*** Conver to Char Code ***/
            var code = e.which;
            var exceptions = {
                186: 59,
                187: 61,
                188: 44,
                189: 45,
                190: 46,
                191: 47,
                192: 96,
                219: 91,
                220: 92,
                221: 93,
                222: 39
            }
            if(typeof exceptions[code] != 'undefined') code = exceptions[code];
            
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
                
                if(typeof special[ch] != 'undefined') ch = special[ch];
            }
            else {
                ch = ch.toLowerCase();
            }
            
            return ch.charCodeAt(0);
        }
    });
})(jQuery);
