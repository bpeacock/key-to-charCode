/**!
 * name: jQuery getChar
 * repository: https://github.com/bpeacock/key-to-charCode
 * @author Brian Peacock
 * @version 0.2
 * Copyright 2013, Brian Peacock
 * Licensed under the MIT license.
 */

(function($) {
    $.extend({
        getChar: function(e) {
            /*** Convert to Char Code ***/
            var code = e.which;
            
            //Ignore Shift Key events & arrows
            if([16, 37, 38, 39, 40, 20, 17, 18, 91].indexOf(code) > -1) return false;
            
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
                222: 39  // '
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
