'use strict';

if (typeof CLASSICAL !== 'undefined' && CLASSICAL === true) {
    exports.add = function (el, className) {
        var cur = ' ' + el.className + ' ';
        if (cur.indexOf(' ' + className + ' ') === -1) {
            el.className += ' ' + className;
        }
    };
    exports.remove = function (el, className) {
        var cur = ' ' + el.className + ' ';
        if (cur.indexOf(' ' + className + ' ') > -1) {
            el.className = cur.replace(' ' + className + ' ', '');
        }
    };
    exports.has = function (el, className) {
        var cur = ' ' + el.className + ' ';
        return cur.indexOf(' ' + className + ' ') > -1;
    };
} else {
    exports.add = function (el, className) {
        el.classList.add(className);
    };
    exports.remove = function (el, className) {
        el.classList.remove(className);
    };
    exports.has = function (el, className) {
        el.classList.contains(className);
    };
}