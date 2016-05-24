'use strict';

require('blear.polyfills.string');

if (typeof CLASSICAL !== 'undefined' && CLASSICAL === true) {
    exports.add = function (el, className) {
        className = String(className).trim();

        if (!className) {
            return;
        }

        var cur = ' ' + el.className + ' ';
        if (cur.indexOf(' ' + className + ' ') === -1) {
            el.className += ' ' + className;
        }
    };
    exports.remove = function (el, className) {
        className = String(className).trim();

        if (!className) {
            return;
        }

        var cur = ' ' + el.className + ' ';

        if (cur.indexOf(' ' + className + ' ') > -1) {
            el.className = cur.replace(' ' + className + ' ', '');
        }
    };
    exports.has = function (el, className) {
        className = String(className).trim();

        if (!className) {
            return false;
        }

        var cur = ' ' + el.className + ' ';
        return cur.indexOf(' ' + className + ' ') > -1;
    };
} else {
    exports.add = function (el, className) {
        className = String(className).trim();

        if (!className) {
            return;
        }

        el.classList.add(className);
    };
    exports.remove = function (el, className) {
        className = String(className).trim();

        if (!className) {
            return;
        }

        el.classList.remove(className);
    };
    exports.has = function (el, className) {
        className = String(className).trim();

        if (!className) {
            return false;
        }

        return el.classList.contains(className);
    };
}