parcelRequire = (function (e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    EVjC: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.menu = exports.iconOpenMenu = exports.iconCloseMenu = exports.buttonMenu = void 0);
        var e = document.querySelector('.header__nav');
        exports.menu = e;
        var o = document.querySelector('.header__nav-btn');
        exports.buttonMenu = o;
        var r = o.querySelector('.header__nav-ico-menu');
        exports.iconOpenMenu = r;
        var n = o.querySelector('.header__nav-ico-cross');
        exports.iconCloseMenu = n;
      },
      {},
    ],
    moGU: [
      function (require, module, exports) {
        'use strict';
        Object.defineProperty(exports, '__esModule', { value: !0 }), (exports.default = void 0);
        var e = function (e, s, o) {
            s.classList.toggle('header__nav-ico-menu_show'), o.classList.toggle('header__nav-ico-cross_show'), e.classList.toggle('header__nav_opened');
          },
          s = e;
        exports.default = s;
      },
      {},
    ],
    g2Hq: [
      function (require, module, exports) {
        'use strict';
        var e = require('./variables'),
          n = u(require('./menu'));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = function () {
          (0, n.default)(e.menu, e.iconOpenMenu, e.iconCloseMenu);
        };
        e.buttonMenu.addEventListener('click', r);
      },
      { './variables': 'EVjC', './menu': 'moGU' },
    ],
  },
  {},
  ['g2Hq'],
  null
);
//# sourceMappingURL=/lubimovka/scripts.e7c9c750.js.map
