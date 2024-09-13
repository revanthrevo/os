(() => {
    "use strict";
    var e = {
            475: (e, t, n) => {
                n.d(t, {
                    Z: () => a
                });
                var o = n(81),
                    r = n.n(o),
                    i = n(645),
                    l = n.n(i)()(r());
                l.push([e.id, ".dtwidget-chat-container {\n  position: fixed;\n  z-index: 100000;\n  top: auto;\n  bottom: 20px;\n  right: 20px;\n  display: flex;\n  align-items: center;\n  color: black;\n  background: white;\n  padding: 6px 10px;\n  font-size: 16px;\n  font-weight: 700;\n  border-radius: 24px;\n  cursor: pointer;\n  user-select: none;\n  max-height: 42px;\n  box-shadow: 0px 1px 20px 0px rgb(0 0 0 / 10%);\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  -webkit-user-select: none; /* Safari */\n}\n\n.dtwidget-chat-container:hover {\n  scale: 1.05;\n  transition: ease 0.2s;\n}\n\n.dtwidget-chat-container > span {\n  margin-left: 4px;\n}\n", ""]);
                const a = l
            },
            776: (e, t, n) => {
                n.d(t, {
                    Z: () => a
                });
                var o = n(81),
                    r = n.n(o),
                    i = n(645),
                    l = n.n(i)()(r());
                l.push([e.id, '.dtwidget-chatmodal-container {\n  position: fixed;\n  z-index: 10000000;\n  font-family: "Avenir Next", serif;\n  top: auto;\n  right: 20px;\n  color: #000000;\n  background: #ffffff;\n  border-radius: 24px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 350px;\n  height: auto;\n  max-width: 380px;\n  width: 100%;\n  box-sizing: border-box;\n  box-shadow: 0px 1px 20px 0px rgb(0 0 0 / 10%);\n}\n\n.dtwidget-chatmodal-header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 24px;\n}\n\n.dtwidget-chatmodal-header > img {\n  max-height: 75px;\n  max-width: 200px;\n  width: auto;\n}\n\n.dtwidget-chatmodal-header > span {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.dtwidget-chatmodal-body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1 0;\n  width: 100%;\n}\n\n.dt-widget-form-field {\n  resize: none;\n  margin-bottom: 20px;\n  font-size: 16px;\n}\n\n.dt-widget-form-field > .dt-widget-form-field-label {\n  display: block;\n  font-weight: 700;\n  font-size: 16px;\n  margin-bottom: 8px;\n}\n\n.dt-widget-form-field > .dt-widget-field-box {\n  display: flex;\n  font-size: 16px;\n  padding: 12px 8px;\n  border-radius: 4px;\n  width: calc(100% - 18px);\n  outline: none;\n  resize: none;\n  border: 1px solid rgb(195, 192, 192);\n  font-family: "Avenir Next", serif;\n}\n\n.dt-widget-form-field .dt-widget-field-box-info {\n  color: #646464;\n  font-size: 16px;\n}\n\n.dt-widget-form-field .url-input {\n  border: none;\n  border-radius: 0;\n  outline: none;\n  font-size: 16px;\n  background: transparent;\n  width: 100%;\n  font-family: "Avenir Next", serif;\n}\n\n.dtwidget-chatmodal-body > form > div > textarea,\n.dtwidget-chatmodal-body > [data-form="dt"] > div > textarea {\n  padding: 12px;\n  border-radius: 4px;\n  margin-bottom: 12px;\n  color: #000000;\n  background-color: #f0f0f0;\n  outline: none;\n  border: none;\n  width: 100%;\n  flex: 1;\n  font-size: 16px;\n  resize: none;\n}\n\n.dtwidget-chatmodal-body > form > div > textarea:only-child,\n.dtwidget-chatmodal-body > [data-form="dt"] > div > textarea:only-child {\n  height: calc(100% - 24px);\n}\n\n.dtwidget-chatmodal-body > form,\n.dtwidget-chatmodal-body > [data-form="dt"] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  flex: 1;\n}\n\n.dtwidget-chatmodal-body > form > div,\n.dtwidget-chatmodal-body > [data-form="dt"] > div {\n  flex: 1;\n}\n\n.dtwidget-chatmodal-body > form > button,\n.dtwidget-chatmodal-body > form > [data-role="button"],\n.dtwidget-chatmodal-body > [data-form="dt"] > button,\n.dtwidget-chatmodal-body > [data-form="dt"] > [data-role="button"] {\n  border-radius: 8px;\n  background-color: rgba(52, 166, 67, 1);\n  color: #ffffff;\n  flex: 0;\n  outline: none;\n  border: none;\n  box-shadow: none;\n  padding: 16px 24px;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n}\n\n.dtwidget-chatmodal-footer {\n  display: flex;\n  flex: 0;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  margin-top: 20px;\n  height: 25px;\n}\n\n.dtwidget-chatmodal-footer > a > svg {\n  margin-right: 4px;\n  vertical-align: middle;\n}\n\n.dtwidget-chatmodal-footer > a {\n  color: #a6a6a6;\n  text-decoration: none;\n  cursor: pointer;\n  margin-left: 4px;\n  border-bottom: none;\n  display: inline-block;\n}\n\n.dtwidget-chatmodal-footer > a > span {\n  color: rgba(52, 166, 67, 1);\n  text-decoration: underline;\n}\n\n.dt-form-element-container {\n  max-height: calc(100vh - 400px);\n  overflow: auto;\n}\n\n.dtwidget-chatmodal-header-container {\n  display: flex;\n  flex: 0;\n}\n\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container {\n  width: 100%;\n}\n\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container\n  .dtwidget-chatmodal-header {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container\n  .dtwidget-chatmodal-header-product-picture {\n  width: 75px;\n  height: auto;\n  min-height: 37.5px;\n  object-fit: cover;\n}\n\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container\n  .dtwidget-chatmodal-header-product-details {\n  width: calc(100% - 75px);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container\n  .dtwidget-chatmodal-header-product-details\n  .dtwidget-chatmodal-header-product-name {\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 0px;\n  line-height: 21px;\n}\n\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container\n  .dtwidget-chatmodal-header-product-details\n  .dtwidget-chatmodal-header-product-price {\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 6px;\n  line-height: 18px;\n}\n\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container\n  .dtwidget-chatmodal-header-product-details\n  .dtwidget-chatmodal-header-product-name,\n.dtwidget-chatmodal-header-container.dtwidget-chatmodal-header-product-container\n  .dtwidget-chatmodal-header-product-details\n  .dtwidget-chatmodal-header-product-price {\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  word-wrap: break-word;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  padding-left: 16px;\n  text-align: left;\n}\n\n.dtwidget-chatmodal-header-container .dtwidget-chatmodal-close {\n  display: none;\n}\n\n@media only screen and (max-width: 599px) {\n  .dtwidget-chatmodal-container {\n    max-width: calc(100% - 42px);\n  }\n\n  .dtwidget-chatmodal-close {\n    display: block;\n    position: absolute;\n    top: 24px;\n    right: 24px;\n    bottom: auto;\n  }\n}\n\n@media only screen and (max-height: 549px) {\n  .dtwidget-chatmodal-container {\n    height: calc(100% - 92px);\n    max-height: 100%;\n    min-height: unset;\n    overflow: auto;\n  }\n\n  .dt-form-element-container {\n    max-height: unset;\n    overflow: auto;\n  }\n}\n\n.dt-widget-choices-error {\n  height: 12px;\n  display: block;\n  margin-top: 6px;\n  color: rgb(203, 68, 68);\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 600;\n}\n\n.dt-widget-choices-error-visible {\n  display: block;\n}\n\n.dt-widget-choices-error-hidden {\n  display: none;\n}\n\n.invisible-link {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 0;\n}\n', ""]);
                const a = l
            },
            729: (e, t, n) => {
                n.d(t, {
                    Z: () => a
                });
                var o = n(81),
                    r = n.n(o),
                    i = n(645),
                    l = n.n(i)()(r());
                l.push([e.id, ".dt-widget-choices-container {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.dt-widget-choice-button {\n  display: inline-block;\n  padding: 10px 24px;\n  color: #242424;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  margin-right: 16px;\n  border: 1px solid #d3d3d3;\n  border-radius: 4px;\n}\n\n.dt-widget-choice-button-selected {\n  color: rgb(22, 86, 58);\n  border: 1px solid rgb(101, 150, 129);\n  background: #e8f4ee;\n}\n", ""]);
                const a = l
            },
            406: (e, t, n) => {
                n.d(t, {
                    Z: () => a
                });
                var o = n(81),
                    r = n.n(o),
                    i = n(645),
                    l = n.n(i)()(r());
                l.push([e.id, ".doubletick-widget-container {\n  font-family: inherit;\n}\n", ""]);
                const a = l
            },
            645: e => {
                e.exports = function (e) {
                    var t = [];
                    return t.toString = function () {
                        return this.map((function (t) {
                            var n = "",
                                o = void 0 !== t[5];
                            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), o && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), o && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                        })).join("")
                    }, t.i = function (e, n, o, r, i) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var l = {};
                        if (o)
                            for (var a = 0; a < this.length; a++) {
                                var c = this[a][0];
                                null != c && (l[c] = !0)
                            }
                        for (var d = 0; d < e.length; d++) {
                            var s = [].concat(e[d]);
                            o && l[s[0]] || (void 0 !== i && (void 0 === s[5] || (s[1] = "@layer".concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {").concat(s[1], "}")), s[5] = i), n && (s[2] ? (s[1] = "@media ".concat(s[2], " {").concat(s[1], "}"), s[2] = n) : s[2] = n), r && (s[4] ? (s[1] = "@supports (".concat(s[4], ") {").concat(s[1], "}"), s[4] = r) : s[4] = "".concat(r)), t.push(s))
                        }
                    }, t
                }
            },
            81: e => {
                e.exports = function (e) {
                    return e[1]
                }
            },
            379: e => {
                var t = [];

                function n(e) {
                    for (var n = -1, o = 0; o < t.length; o++)
                        if (t[o].identifier === e) {
                            n = o;
                            break
                        } return n
                }

                function o(e, o) {
                    for (var i = {}, l = [], a = 0; a < e.length; a++) {
                        var c = e[a],
                            d = o.base ? c[0] + o.base : c[0],
                            s = i[d] || 0,
                            u = "".concat(d, " ").concat(s);
                        i[d] = s + 1;
                        var _ = n(u),
                            p = {
                                css: c[1],
                                media: c[2],
                                sourceMap: c[3],
                                supports: c[4],
                                layer: c[5]
                            };
                        if (-1 !== _) t[_].references++, t[_].updater(p);
                        else {
                            var f = r(p, o);
                            o.byIndex = a, t.splice(a, 0, {
                                identifier: u,
                                updater: f,
                                references: 1
                            })
                        }
                        l.push(u)
                    }
                    return l
                }

                function r(e, t) {
                    var n = t.domAPI(t);
                    return n.update(e),
                        function (t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                                n.update(e = t)
                            } else n.remove()
                        }
                }
                e.exports = function (e, r) {
                    var i = o(e = e || [], r = r || {});
                    return function (e) {
                        e = e || [];
                        for (var l = 0; l < i.length; l++) {
                            var a = n(i[l]);
                            t[a].references--
                        }
                        for (var c = o(e, r), d = 0; d < i.length; d++) {
                            var s = n(i[d]);
                            0 === t[s].references && (t[s].updater(), t.splice(s, 1))
                        }
                        i = c
                    }
                }
            },
            569: e => {
                var t = {};
                e.exports = function (e, n) {
                    var o = function (e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                            t[e] = n
                        }
                        return t[e]
                    }(e);
                    if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    o.appendChild(n)
                }
            },
            216: e => {
                e.exports = function (e) {
                    var t = document.createElement("style");
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
                }
            },
            565: (e, t, n) => {
                e.exports = function (e) {
                    var t = n.nc;
                    t && e.setAttribute("nonce", t)
                }
            },
            795: e => {
                e.exports = function (e) {
                    if ("undefined" == typeof document) return {
                        update: function () {},
                        remove: function () {}
                    };
                    var t = e.insertStyleElement(e);
                    return {
                        update: function (n) {
                            ! function (e, t, n) {
                                var o = "";
                                n.supports && (o += "@supports (".concat(n.supports, ") {")), n.media && (o += "@media ".concat(n.media, " {"));
                                var r = void 0 !== n.layer;
                                r && (o += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), o += n.css, r && (o += "}"), n.media && (o += "}"), n.supports && (o += "}");
                                var i = n.sourceMap;
                                i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(o, e, t.options)
                            }(t, e, n)
                        },
                        remove: function () {
                            ! function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e)
                            }(t)
                        }
                    }
                }
            },
            589: e => {
                e.exports = function (e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e))
                    }
                }
            }
        },
        t = {};

    function n(o) {
        var r = t[o];
        if (void 0 !== r) return r.exports;
        var i = t[o] = {
            id: o,
            exports: {}
        };
        return e[o](i, i.exports, n), i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
            enumerable: !0,
            get: t[o]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.nc = void 0, (() => {
        var e, t, o, r, i, l, a, c = {},
            d = [],
            s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
            u = Array.isArray;

        function _(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function p(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function f(t, n, o) {
            var r, i, l, a = {};
            for (l in n) "key" == l ? r = n[l] : "ref" == l ? i = n[l] : a[l] = n[l];
            if (arguments.length > 2 && (a.children = arguments.length > 3 ? e.call(arguments, 2) : o), "function" == typeof t && null != t.defaultProps)
                for (l in t.defaultProps) void 0 === a[l] && (a[l] = t.defaultProps[l]);
            return h(t, a, r, i, null)
        }

        function h(e, n, r, i, l) {
            var a = {
                type: e,
                props: n,
                key: r,
                ref: i,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == l ? ++o : l
            };
            return null == l && null != t.vnode && t.vnode(a), a
        }

        function m(e) {
            return e.children
        }

        function g(e, t) {
            this.props = e, this.context = t
        }

        function v(e, t) {
            if (null == t) return e.__ ? v(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__d || n.__e;
            return "function" == typeof e.type ? v(e) : null
        }

        function y(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    } return y(e)
            }
        }

        function w(e) {
            (!e.__d && (e.__d = !0) && r.push(e) && !b.__r++ || i !== t.debounceRendering) && ((i = t.debounceRendering) || l)(b)
        }

        function b() {
            var e, t, n, o, i, l, c, d, s;
            for (r.sort(a); e = r.shift();) e.__d && (t = r.length, o = void 0, i = void 0, l = void 0, d = (c = (n = e).__v).__e, (s = n.__P) && (o = [], i = [], (l = _({}, c)).__v = c.__v + 1, I(s, c, l, n.__n, void 0 !== s.ownerSVGElement, null != c.__h ? [d] : null, o, null == d ? v(c) : d, c.__h, i), A(o, c, i), c.__e != d && y(c)), r.length > t && r.sort(a));
            b.__r = 0
        }

        function x(e, t, n, o, r, i, l, a, s, _, p) {
            var f, g, y, w, b, x, k, E, S, P = 0,
                O = o && o.__k || d,
                A = O.length,
                L = A,
                $ = t.length;
            for (n.__k = [], f = 0; f < $; f++) null != (w = n.__k[f] = null == (w = t[f]) || "boolean" == typeof w || "function" == typeof w ? null : "string" == typeof w || "number" == typeof w || "bigint" == typeof w ? h(null, w, null, null, w) : u(w) ? h(m, {
                children: w
            }, null, null, null) : w.__b > 0 ? h(w.type, w.props, w.key, w.ref ? w.ref : null, w.__v) : w) ? (w.__ = n, w.__b = n.__b + 1, -1 === (E = N(w, O, k = f + P, L)) ? y = c : (y = O[E] || c, O[E] = void 0, L--), I(e, w, y, r, i, l, a, s, _, p), b = w.__e, (g = w.ref) && y.ref != g && (y.ref && B(y.ref, null, w), p.push(g, w.__c || b, w)), null != b && (null == x && (x = b), (S = y === c || null === y.__v) ? -1 == E && P-- : E !== k && (E === k + 1 ? P++ : E > k ? L > $ - k ? P += E - k : P-- : P = E < k && E == k - 1 ? E - k : 0), k = f + P, "function" != typeof w.type || E === k && y.__k !== w.__k ? "function" == typeof w.type || E === k && !S ? void 0 !== w.__d ? (s = w.__d, w.__d = void 0) : s = b.nextSibling : s = T(e, b, s) : s = C(w, s, e), "function" == typeof n.type && (n.__d = s))) : (y = O[f]) && null == y.key && y.__e && (y.__e == s && (y.__ = o, s = v(y)), H(y, y, !1), O[f] = null);
            for (n.__e = x, f = A; f--;) null != O[f] && ("function" == typeof n.type && null != O[f].__e && O[f].__e == n.__d && (n.__d = O[f].__e.nextSibling), H(O[f], O[f]))
        }

        function C(e, t, n) {
            for (var o, r = e.__k, i = 0; r && i < r.length; i++)(o = r[i]) && (o.__ = e, t = "function" == typeof o.type ? C(o, t, n) : T(n, o.__e, t));
            return t
        }

        function k(e, t) {
            return t = t || [], null == e || "boolean" == typeof e || (u(e) ? e.some((function (e) {
                k(e, t)
            })) : t.push(e)), t
        }

        function T(e, t, n) {
            return null == n || n.parentNode !== e ? e.insertBefore(t, null) : t == n && null != t.parentNode || e.insertBefore(t, n), t.nextSibling
        }

        function N(e, t, n, o) {
            var r = e.key,
                i = e.type,
                l = n - 1,
                a = n + 1,
                c = t[n];
            if (null === c || c && r == c.key && i === c.type) return n;
            if (o > (null != c ? 1 : 0))
                for (; l >= 0 || a < t.length;) {
                    if (l >= 0) {
                        if ((c = t[l]) && r == c.key && i === c.type) return l;
                        l--
                    }
                    if (a < t.length) {
                        if ((c = t[a]) && r == c.key && i === c.type) return a;
                        a++
                    }
                }
            return -1
        }

        function E(e, t, n) {
            "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || s.test(t) ? n : n + "px"
        }

        function S(e, t, n, o, r) {
            var i;
            e: if ("style" === t)
                if ("string" == typeof n) e.style.cssText = n;
                else {
                    if ("string" == typeof o && (e.style.cssText = o = ""), o)
                        for (t in o) n && t in n || E(e.style, t, "");
                    if (n)
                        for (t in n) o && n[t] === o[t] || E(e.style, t, n[t])
                }
            else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o ? n.u = o.u : (n.u = Date.now(), e.addEventListener(t, i ? O : P, i)) : e.removeEventListener(t, i ? O : P, i);
            else if ("dangerouslySetInnerHTML" !== t) {
                if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n))
            }
        }

        function P(e) {
            var n = this.l[e.type + !1];
            if (e.t) {
                if (e.t <= n.u) return
            } else e.t = Date.now();
            return n(t.event ? t.event(e) : e)
        }

        function O(e) {
            return this.l[e.type + !0](t.event ? t.event(e) : e)
        }

        function I(e, n, o, r, i, l, a, c, d, s) {
            var p, f, h, v, y, w, b, C, k, T, N, E, S, P, O, I = n.type;
            if (void 0 !== n.constructor) return null;
            null != o.__h && (d = o.__h, c = n.__e = o.__e, n.__h = null, l = [c]), (p = t.__b) && p(n);
            e: if ("function" == typeof I) try {
                if (C = n.props, k = (p = I.contextType) && r[p.__c], T = p ? k ? k.props.value : p.__ : r, o.__c ? b = (f = n.__c = o.__c).__ = f.__E : ("prototype" in I && I.prototype.render ? n.__c = f = new I(C, T) : (n.__c = f = new g(C, T), f.constructor = I, f.render = $), k && k.sub(f), f.props = C, f.state || (f.state = {}), f.context = T, f.__n = r, h = f.__d = !0, f.__h = [], f._sb = []), null == f.__s && (f.__s = f.state), null != I.getDerivedStateFromProps && (f.__s == f.state && (f.__s = _({}, f.__s)), _(f.__s, I.getDerivedStateFromProps(C, f.__s))), v = f.props, y = f.state, f.__v = n, h) null == I.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);
                else {
                    if (null == I.getDerivedStateFromProps && C !== v && null != f.componentWillReceiveProps && f.componentWillReceiveProps(C, T), !f.__e && (null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(C, f.__s, T) || n.__v === o.__v)) {
                        for (n.__v !== o.__v && (f.props = C, f.state = f.__s, f.__d = !1), n.__e = o.__e, n.__k = o.__k, n.__k.forEach((function (e) {
                                e && (e.__ = n)
                            })), N = 0; N < f._sb.length; N++) f.__h.push(f._sb[N]);
                        f._sb = [], f.__h.length && a.push(f);
                        break e
                    }
                    null != f.componentWillUpdate && f.componentWillUpdate(C, f.__s, T), null != f.componentDidUpdate && f.__h.push((function () {
                        f.componentDidUpdate(v, y, w)
                    }))
                }
                if (f.context = T, f.props = C, f.__P = e, f.__e = !1, E = t.__r, S = 0, "prototype" in I && I.prototype.render) {
                    for (f.state = f.__s, f.__d = !1, E && E(n), p = f.render(f.props, f.state, f.context), P = 0; P < f._sb.length; P++) f.__h.push(f._sb[P]);
                    f._sb = []
                } else
                    do {
                        f.__d = !1, E && E(n), p = f.render(f.props, f.state, f.context), f.state = f.__s
                    } while (f.__d && ++S < 25);
                f.state = f.__s, null != f.getChildContext && (r = _(_({}, r), f.getChildContext())), h || null == f.getSnapshotBeforeUpdate || (w = f.getSnapshotBeforeUpdate(v, y)), x(e, u(O = null != p && p.type === m && null == p.key ? p.props.children : p) ? O : [O], n, o, r, i, l, a, c, d, s), f.base = n.__e, n.__h = null, f.__h.length && a.push(f), b && (f.__E = f.__ = null)
            } catch (e) {
                n.__v = null, (d || null != l) && (n.__e = c, n.__h = !!d, l[l.indexOf(c)] = null), t.__e(e, n, o)
            } else null == l && n.__v === o.__v ? (n.__k = o.__k, n.__e = o.__e) : n.__e = L(o.__e, n, o, r, i, l, a, d, s);
            (p = t.diffed) && p(n)
        }

        function A(e, n, o) {
            for (var r = 0; r < o.length; r++) B(o[r], o[++r], o[++r]);
            t.__c && t.__c(n, e), e.some((function (n) {
                try {
                    e = n.__h, n.__h = [], e.some((function (e) {
                        e.call(n)
                    }))
                } catch (e) {
                    t.__e(e, n.__v)
                }
            }))
        }

        function L(t, n, o, r, i, l, a, d, s) {
            var _, f, h, m = o.props,
                g = n.props,
                y = n.type,
                w = 0;
            if ("svg" === y && (i = !0), null != l)
                for (; w < l.length; w++)
                    if ((_ = l[w]) && "setAttribute" in _ == !!y && (y ? _.localName === y : 3 === _.nodeType)) {
                        t = _, l[w] = null;
                        break
                    } if (null == t) {
                if (null === y) return document.createTextNode(g);
                t = i ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, g.is && g), l = null, d = !1
            }
            if (null === y) m === g || d && t.data === g || (t.data = g);
            else {
                if (l = l && e.call(t.childNodes), f = (m = o.props || c).dangerouslySetInnerHTML, h = g.dangerouslySetInnerHTML, !d) {
                    if (null != l)
                        for (m = {}, w = 0; w < t.attributes.length; w++) m[t.attributes[w].name] = t.attributes[w].value;
                    (h || f) && (h && (f && h.__html == f.__html || h.__html === t.innerHTML) || (t.innerHTML = h && h.__html || ""))
                }
                if (function (e, t, n, o, r) {
                        var i;
                        for (i in n) "children" === i || "key" === i || i in t || S(e, i, null, n[i], o);
                        for (i in t) r && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || S(e, i, t[i], n[i], o)
                    }(t, g, m, i, d), h) n.__k = [];
                else if (x(t, u(w = n.props.children) ? w : [w], n, o, r, i && "foreignObject" !== y, l, a, l ? l[0] : o.__k && v(o, 0), d, s), null != l)
                    for (w = l.length; w--;) null != l[w] && p(l[w]);
                d || ("value" in g && void 0 !== (w = g.value) && (w !== t.value || "progress" === y && !w || "option" === y && w !== m.value) && S(t, "value", w, m.value, !1), "checked" in g && void 0 !== (w = g.checked) && w !== t.checked && S(t, "checked", w, m.checked, !1))
            }
            return t
        }

        function B(e, n, o) {
            try {
                "function" == typeof e ? e(n) : e.current = n
            } catch (e) {
                t.__e(e, o)
            }
        }

        function H(e, n, o) {
            var r, i;
            if (t.unmount && t.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || B(r, null, n)), null != (r = e.__c)) {
                if (r.componentWillUnmount) try {
                    r.componentWillUnmount()
                } catch (e) {
                    t.__e(e, n)
                }
                r.base = r.__P = null, e.__c = void 0
            }
            if (r = e.__k)
                for (i = 0; i < r.length; i++) r[i] && H(r[i], n, o || "function" != typeof e.type);
            o || null == e.__e || p(e.__e), e.__ = e.__e = e.__d = void 0
        }

        function $(e, t, n) {
            return this.constructor(e, n)
        }
        e = d.slice, t = {
            __e: function (e, t, n, o) {
                for (var r, i, l; t = t.__;)
                    if ((r = t.__c) && !r.__) try {
                        if ((i = r.constructor) && null != i.getDerivedStateFromError && (r.setState(i.getDerivedStateFromError(e)), l = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, o || {}), l = r.__d), l) return r.__E = r
                    } catch (t) {
                        e = t
                    }
                throw e
            }
        }, o = 0, g.prototype.setState = function (e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, n), this.props)), e && _(n, e), null != e && this.__v && (t && this._sb.push(t), w(this))
        }, g.prototype.forceUpdate = function (e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), w(this))
        }, g.prototype.render = m, r = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, a = function (e, t) {
            return e.__v.__b - t.__v.__b
        }, b.__r = 0;
        var U, M, z, R, W = 0,
            D = [],
            Z = [],
            j = t.__b,
            F = t.__r,
            q = t.diffed,
            V = t.__c,
            G = t.unmount;

        function J(e, n) {
            t.__h && t.__h(M, e, W || n), W = 0;
            var o = M.__H || (M.__H = {
                __: [],
                __h: []
            });
            return e >= o.__.length && o.__.push({
                __V: Z
            }), o.__[e]
        }

        function K(e) {
            return W = 1,
                function (e, t, n) {
                    var o = J(U++, 2);
                    if (o.t = e, !o.__c && (o.__ = [n ? n(t) : ae(void 0, t), function (e) {
                            var t = o.__N ? o.__N[0] : o.__[0],
                                n = o.t(t, e);
                            t !== n && (o.__N = [n, o.__[1]], o.__c.setState({}))
                        }], o.__c = M, !M.u)) {
                        var r = function (e, t, n) {
                            if (!o.__c.__H) return !0;
                            var r = o.__c.__H.__.filter((function (e) {
                                return e.__c
                            }));
                            if (r.every((function (e) {
                                    return !e.__N
                                }))) return !i || i.call(this, e, t, n);
                            var l = !1;
                            return r.forEach((function (e) {
                                if (e.__N) {
                                    var t = e.__[0];
                                    e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (l = !0)
                                }
                            })), !(!l && o.__c.props === e) && (!i || i.call(this, e, t, n))
                        };
                        M.u = !0;
                        var i = M.shouldComponentUpdate,
                            l = M.componentWillUpdate;
                        M.componentWillUpdate = function (e, t, n) {
                            if (this.__e) {
                                var o = i;
                                i = void 0, r(e, t, n), i = o
                            }
                            l && l.call(this, e, t, n)
                        }, M.shouldComponentUpdate = r
                    }
                    return o.__N || o.__
                }(ae, e)
        }

        function X(e, n) {
            var o = J(U++, 3);
            !t.__s && le(o.__H, n) && (o.__ = e, o.i = n, M.__H.__h.push(o))
        }

        function Q(e) {
            return W = 5, Y((function () {
                return {
                    current: e
                }
            }), [])
        }

        function Y(e, t) {
            var n = J(U++, 7);
            return le(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
        }

        function ee(e, t) {
            return W = 8, Y((function () {
                return e
            }), t)
        }

        function te() {
            for (var e; e = D.shift();)
                if (e.__P && e.__H) try {
                    e.__H.__h.forEach(re), e.__H.__h.forEach(ie), e.__H.__h = []
                } catch (n) {
                    e.__H.__h = [], t.__e(n, e.__v)
                }
        }
        t.__b = function (e) {
            M = null, j && j(e)
        }, t.__r = function (e) {
            F && F(e), U = 0;
            var t = (M = e.__c).__H;
            t && (z === M ? (t.__h = [], M.__h = [], t.__.forEach((function (e) {
                e.__N && (e.__ = e.__N), e.__V = Z, e.__N = e.i = void 0
            }))) : (t.__h.forEach(re), t.__h.forEach(ie), t.__h = [], U = 0)), z = M
        }, t.diffed = function (e) {
            q && q(e);
            var n = e.__c;
            n && n.__H && (n.__H.__h.length && (1 !== D.push(n) && R === t.requestAnimationFrame || ((R = t.requestAnimationFrame) || oe)(te)), n.__H.__.forEach((function (e) {
                e.i && (e.__H = e.i), e.__V !== Z && (e.__ = e.__V), e.i = void 0, e.__V = Z
            }))), z = M = null
        }, t.__c = function (e, n) {
            n.some((function (e) {
                try {
                    e.__h.forEach(re), e.__h = e.__h.filter((function (e) {
                        return !e.__ || ie(e)
                    }))
                } catch (o) {
                    n.some((function (e) {
                        e.__h && (e.__h = [])
                    })), n = [], t.__e(o, e.__v)
                }
            })), V && V(e, n)
        }, t.unmount = function (e) {
            G && G(e);
            var n, o = e.__c;
            o && o.__H && (o.__H.__.forEach((function (e) {
                try {
                    re(e)
                } catch (e) {
                    n = e
                }
            })), o.__H = void 0, n && t.__e(n, o.__v))
        };
        var ne = "function" == typeof requestAnimationFrame;

        function oe(e) {
            var t, n = function () {
                    clearTimeout(o), ne && cancelAnimationFrame(t), setTimeout(e)
                },
                o = setTimeout(n, 100);
            ne && (t = requestAnimationFrame(n))
        }

        function re(e) {
            var t = M,
                n = e.__c;
            "function" == typeof n && (e.__c = void 0, n()), M = t
        }

        function ie(e) {
            var t = M;
            e.__c = e.__(), M = t
        }

        function le(e, t) {
            return !e || e.length !== t.length || t.some((function (t, n) {
                return t !== e[n]
            }))
        }

        function ae(e, t) {
            return "function" == typeof t ? t(e) : t
        }

        function ce(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function de(e, t) {
            for (var n in e)
                if ("__source" !== n && !(n in t)) return !0;
            for (var o in t)
                if ("__source" !== o && e[o] !== t[o]) return !0;
            return !1
        }

        function se(e) {
            this.props = e
        }(se.prototype = new g).isPureReactComponent = !0, se.prototype.shouldComponentUpdate = function (e, t) {
            return de(this.props, e) || de(this.state, t)
        };
        var ue = t.__b;
        t.__b = function (e) {
            e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ue && ue(e)
        };
        var _e = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

        function pe(e) {
            function t(t) {
                var n = ce({}, t);
                return delete n.ref, e(n, t.ref || null)
            }
            return t.$$typeof = _e, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
        }
        var fe = t.__e;
        t.__e = function (e, t, n, o) {
            if (e.then)
                for (var r, i = t; i = i.__;)
                    if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
            fe(e, t, n, o)
        };
        var he = t.unmount;

        function me(e, t, n) {
            return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function (e) {
                "function" == typeof e.__c && e.__c()
            })), e.__c.__H = null), null != (e = ce({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map((function (e) {
                return me(e, t, n)
            }))), e
        }

        function ge(e, t, n) {
            return e && n && (e.__v = null, e.__k = e.__k && e.__k.map((function (e) {
                return ge(e, t, n)
            })), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e
        }

        function ve() {
            this.__u = 0, this.t = null, this.__b = null
        }

        function ye(e) {
            var t = e.__.__c;
            return t && t.__a && t.__a(e)
        }

        function we() {
            this.u = null, this.o = null
        }
        t.unmount = function (e) {
            var t = e.__c;
            t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), he && he(e)
        }, (ve.prototype = new g).__c = function (e, t) {
            var n = t.__c,
                o = this;
            null == o.t && (o.t = []), o.t.push(n);
            var r = ye(o.__v),
                i = !1,
                l = function () {
                    i || (i = !0, n.__R = null, r ? r(a) : a())
                };
            n.__R = l;
            var a = function () {
                    if (!--o.__u) {
                        if (o.state.__a) {
                            var e = o.state.__a;
                            o.__v.__k[0] = ge(e, e.__c.__P, e.__c.__O)
                        }
                        var t;
                        for (o.setState({
                                __a: o.__b = null
                            }); t = o.t.pop();) t.forceUpdate()
                    }
                },
                c = !0 === t.__h;
            o.__u++ || c || o.setState({
                __a: o.__b = o.__v.__k[0]
            }), e.then(l, l)
        }, ve.prototype.componentWillUnmount = function () {
            this.t = []
        }, ve.prototype.render = function (e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div"),
                        o = this.__v.__k[0].__c;
                    this.__v.__k[0] = me(this.__b, n, o.__O = o.__P)
                }
                this.__b = null
            }
            var r = t.__a && f(m, null, e.fallback);
            return r && (r.__h = null), [f(m, null, t.__a ? null : e.children), r]
        };
        var be = function (e, t, n) {
            if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                for (n = e.u; n;) {
                    for (; n.length > 3;) n.pop()();
                    if (n[1] < n[0]) break;
                    e.u = n = n[2]
                }
        };
        (we.prototype = new g).__a = function (e) {
            var t = this,
                n = ye(t.__v),
                o = t.o.get(e);
            return o[0]++,
                function (r) {
                    var i = function () {
                        t.props.revealOrder ? (o.push(r), be(t, e, o)) : r()
                    };
                    n ? n(i) : i()
                }
        }, we.prototype.render = function (e) {
            this.u = null, this.o = new Map;
            var t = k(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
            return e.children
        }, we.prototype.componentDidUpdate = we.prototype.componentDidMount = function () {
            var e = this;
            this.o.forEach((function (t, n) {
                be(e, n, t)
            }))
        };
        var xe = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
            Ce = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
            ke = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
            Te = /[A-Z0-9]/g,
            Ne = "undefined" != typeof document,
            Ee = function (e) {
                return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
            };
        g.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function (e) {
            Object.defineProperty(g.prototype, e, {
                configurable: !0,
                get: function () {
                    return this["UNSAFE_" + e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        }));
        var Se = t.event;

        function Pe() {}

        function Oe() {
            return this.cancelBubble
        }

        function Ie() {
            return this.defaultPrevented
        }
        t.event = function (e) {
            return Se && (e = Se(e)), e.persist = Pe, e.isPropagationStopped = Oe, e.isDefaultPrevented = Ie, e.nativeEvent = e
        };
        var Ae = {
                enumerable: !1,
                configurable: !0,
                get: function () {
                    return this.class
                }
            },
            Le = t.vnode;
        t.vnode = function (e) {
            "string" == typeof e.type && function (e) {
                var t = e.props,
                    n = e.type,
                    o = {};
                for (var r in t) {
                    var i = t[r];
                    if (!("value" === r && "defaultValue" in t && null == i || Ne && "children" === r && "noscript" === n || "class" === r || "className" === r)) {
                        var l = r.toLowerCase();
                        "defaultValue" === r && "value" in t && null == t.value ? r = "value" : "download" === r && !0 === i ? i = "" : "ondoubleclick" === l ? r = "ondblclick" : "onchange" !== l || "input" !== n && "textarea" !== n || Ee(t.type) ? "onfocus" === l ? r = "onfocusin" : "onblur" === l ? r = "onfocusout" : ke.test(r) ? r = l : -1 === n.indexOf("-") && Ce.test(r) ? r = r.replace(Te, "-$&").toLowerCase() : null === i && (i = void 0) : l = r = "oninput", "oninput" === l && o[r = l] && (r = "oninputCapture"), o[r] = i
                    }
                }
                "select" == n && o.multiple && Array.isArray(o.value) && (o.value = k(t.children).forEach((function (e) {
                    e.props.selected = -1 != o.value.indexOf(e.props.value)
                }))), "select" == n && null != o.defaultValue && (o.value = k(t.children).forEach((function (e) {
                    e.props.selected = o.multiple ? -1 != o.defaultValue.indexOf(e.props.value) : o.defaultValue == e.props.value
                }))), t.class && !t.className ? (o.class = t.class, Object.defineProperty(o, "className", Ae)) : (t.className && !t.class || t.class && t.className) && (o.class = o.className = t.className), e.props = o
            }(e), e.$$typeof = xe, Le && Le(e)
        };
        var Be = t.__r;
        t.__r = function (e) {
            Be && Be(e), e.__c
        };
        var He = t.diffed;
        t.diffed = function (e) {
            He && He(e);
            var t = e.props,
                n = e.__e;
            null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value)
        };
        const $e = () => f("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 48 48",
            width: "30px",
            height: "30px",
            "fill-rule": "evenodd",
            "clip-rule": "evenodd"
        }, f("path", {
            fill: "#fff",
            d: "M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
        }), f("path", {
            fill: "#fff",
            d: "M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
        }), f("path", {
            fill: "#cfd8dc",
            d: "M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
        }), f("path", {
            fill: "#40c351",
            d: "M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
        }), f("path", {
            fill: "#fff",
            "fill-rule": "evenodd",
            d: "M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z",
            "clip-rule": "evenodd"
        }));
        var Ue = n(379),
            Me = n.n(Ue),
            ze = n(795),
            Re = n.n(ze),
            We = n(569),
            De = n.n(We),
            Ze = n(565),
            je = n.n(Ze),
            Fe = n(216),
            qe = n.n(Fe),
            Ve = n(589),
            Ge = n.n(Ve),
            Je = n(475),
            Ke = {};
        Ke.styleTagTransform = Ge(), Ke.setAttributes = je(), Ke.insert = De().bind(null, "head"), Ke.domAPI = Re(), Ke.insertStyleElement = qe(), Me()(Je.Z, Ke), Je.Z && Je.Z.locals && Je.Z.locals;
        const Xe = pe(((e, t) => {
                let {
                    isOpen: n,
                    setIsOpen: o,
                    config: r
                } = e;
                return f("div", {
                    className: "dtwidget-chat-container",
                    onClick: () => {
                        !n && r.chatWidgetOpened && r.chatWidgetOpened(), n && r.chatWidgetClosed && r.chatWidgetClosed(), o(!n)
                    },
                    style: {
                        backgroundColor: r.styles.chatButtonColor,
                        top: r.styles?.top,
                        bottom: r.styles?.bottom,
                        left: r.styles?.left,
                        right: r.styles?.right
                    },
                    ref: t,
                    id: "dt-chatButton"
                }, f($e, null), f("span", null, r.text?.chatButtonTitle || "CHAT"))
            })),
            Qe = () => f("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "#000000",
                viewBox: "0 0 24 24",
                width: "24px",
                height: "24px"
            }, f("path", {
                d: "M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
            })),
            Ye = () => f("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                width: "24px",
                height: "24px"
            }, f("g", {
                id: "surface118337060"
            }, f("path", {
                style: " stroke:none;fill-rule:nonzero;fill:rgb(92.941177%,76.078433%,30.19608%);fill-opacity:1;",
                d: "M 12.5 1 C 12.289062 1 12.105469 1.128906 12.03125 1.324219 L 6.15625 12.46875 C 6.054688 12.628906 6 12.8125 6 13 C 6 13.550781 6.449219 14 7 14 L 12 14 L 12 22.5 C 12 22.777344 12.222656 23 12.5 23 C 12.6875 23 12.859375 22.894531 12.945312 22.730469 L 18.867188 11.503906 L 18.863281 11.5 C 18.953125 11.347656 19 11.175781 19 11 C 19 10.449219 18.550781 10 18 10 L 13 10 L 13 1.5 C 13 1.222656 12.777344 1 12.5 1 Z M 12.5 1 "
            }))),
            et = "https://api.doubletick.io",
            tt = "https://s3.amazonaws.com/quicksales",
            nt = "https://do9uy4stciz2v.cloudfront.net",
            ot = "https://s3.ap-south-1.amazonaws.com/quicksell-logos",
            rt = "https://d1h96izmtdkx5o.cloudfront.net";
        let it = function (e) {
            return e.GET = "GET", e.POST = "POST", e
        }({});
        const lt = {},
            at = async (e, t) => {
                let {
                    method: n = it.GET,
                    url: o = "",
                    body: r = ""
                } = e;
                if (t && lt[t]) return lt[t];
                const i = `${et}${o}`,
                    l = await fetch(i, {
                        method: n,
                        ...r ? {
                            body: r
                        } : {},
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((e => e.json()));
                return t && (lt[t] = l), l
            };
        let ct = function (e) {
                return e.INPUT = "INPUT", e.TEXTAREA = "TEXTAREA", e.URL = "URL", e.CHOICES = "CHOICES", e
            }({}),
            dt = function (e) {
                return e.BOTTOM_RIGHT = "br", e.BOTTOM_LEFT = "bl", e
            }({});
        const st = e => {
            if (!Array.isArray(e)) return "";
            const t = e.reduce(((e, t) => {
                let {
                    key: n,
                    value: o
                } = t;
                return null != o && (Array.isArray(o) && (o = JSON.stringify(o)), e.push(`${n}=${encodeURIComponent(o)}`)), e
            }), []);
            return t.length > 0 ? `?${t.join("&")}` : ""
        };
        var ut = n(776),
            _t = {};
        _t.styleTagTransform = Ge(), _t.setAttributes = je(), _t.insert = De().bind(null, "head"), _t.domAPI = Re(), _t.insertStyleElement = qe(), Me()(ut.Z, _t), ut.Z && ut.Z.locals && ut.Z.locals;
        var pt = n(729),
            ft = {};
        ft.styleTagTransform = Ge(), ft.setAttributes = je(), ft.insert = De().bind(null, "head"), ft.domAPI = Re(), ft.insertStyleElement = qe(), Me()(pt.Z, ft), pt.Z && pt.Z.locals && pt.Z.locals;
        const ht = pe(((e, t) => {
                let {
                    className: n,
                    options: o,
                    selected: r,
                    onSelect: i,
                    choiceStyles: l,
                    selectedChoiceStyles: a
                } = e;
                return o && o.length ? f("div", {
                    className: `${n} dt-widget-choices-container`,
                    ref: t
                }, o.map((e => f("p", {
                    key: e.value,
                    tabIndex: 0,
                    role: "button",
                    title: e.label,
                    className: "dt-widget-choice-button " + (r === e.value ? "dt-widget-choice-button-selected" : ""),
                    style: r === e.value ? a : l,
                    onClick: () => i(e.value),
                    onKeyDown: t => {
                        "Enter" === t.key && i(e.value)
                    }
                }, e.label)))) : null
            })),
            mt = ht,
            gt = "20px",
            vt = pe(((e, t) => {
                let {
                    setIsOpen: n,
                    config: o,
                    isOpen: r,
                    handleSetConfig: i
                } = e;
                const [l, a] = K(""), {
                    crmWidgetId: c,
                    language: d = "en_US",
                    companyLogoUrl: s,
                    companyId: u,
                    companyName: _,
                    phoneNumber: p,
                    productId: h,
                    productPictureUrl: g,
                    productName: v,
                    productPrice: y,
                    hideDoubleTickPoweredBy: w
                } = o, [b, x] = K(null), [C, k] = K(null), [T, N] = K(!1), [E, S] = K(!1), [P, O] = K({}), [I, A] = K({}), L = Q(i), B = Q(n);
                L.current = i, B.current = n;
                const H = !(!h || !g && !v && !y),
                    $ = ee((async () => {
                        if (c && !b) {
                            N(!0), S(!1);
                            try {
                                const e = await (async e => {
                                    try {
                                        return await at({
                                            url: `/v1/widgets/${e}`
                                        }, "widgetDetails")
                                    } catch (e) {
                                        return null
                                    }
                                })(c);
                                if (u || c || p) try {
                                    await (async (e, t, n) => {
                                        try {
                                            return at({
                                                url: "/v1/widgets/log",
                                                method: it.POST,
                                                body: JSON.stringify({
                                                    companyId: e,
                                                    widgetId: t,
                                                    phoneNumber: n,
                                                    url: window.location.href,
                                                    lastWebsiteOpenTimestamp: (new Date).toISOString()
                                                })
                                            }, void 0)
                                        } catch (e) {
                                            return null
                                        }
                                    })(u, c, p)
                                } catch (e) {}
                                e && x(e)
                            } catch (e) {
                                S(!0)
                            }
                            N(!1)
                        }
                    }), [c, b]),
                    U = Q($);
                U.current = $, X((() => {
                    U.current && U.current()
                }), []), X((() => {
                    if (!L.current || !b) return;
                    const {
                        businessName: e,
                        chatButtonTitle: t,
                        positionOnPage: n,
                        defaultMessage: o,
                        logoUrl: r,
                        messagePlaceholder: i,
                        autoOpenDelay: l,
                        theme: a
                    } = b, {
                        backgroundColor: c,
                        textColor: d,
                        chatBtnColor: s,
                        chatBtnTextColor: u,
                        inputBoxColor: _,
                        inputBoxTextColor: p,
                        choiceBackgroundColor: f,
                        choiceBorderColor: h,
                        choiceTextColor: m
                    } = a || {};
                    let g, v, y, w;
                    n === dt.BOTTOM_LEFT ? (v = gt, y = gt, w = "auto", g = "auto") : n === dt.BOTTOM_RIGHT && (w = gt, y = gt, v = "auto", g = "auto"), L.current({
                        text: {
                            ...t ? {
                                buttonText: t
                            } : {},
                            ...e ? {
                                headerTitle: e
                            } : {},
                            ...i ? {
                                messagePlaceholder: i
                            } : {},
                            ...o ? {
                                defaultMessage: o
                            } : {},
                            ...e ? {
                                headerTitle: e
                            } : {}
                        },
                        styles: {
                            ...c ? {
                                backgroundColor: c
                            } : {},
                            ...d ? {
                                primaryTextColor: d
                            } : {},
                            ...u ? {
                                buttonTextColor: u
                            } : {},
                            ...s ? {
                                buttonColor: s
                            } : {},
                            ...p ? {
                                inputBoxTextColor: p
                            } : {},
                            ..._ ? {
                                inputBoxBackgroundColor: _
                            } : {},
                            ...f ? {
                                choiceBackgroundColor: f
                            } : {},
                            ...h ? {
                                choiceBorderColor: h
                            } : {},
                            ...m ? {
                                choiceTextColor: m
                            } : {},
                            ...void 0 !== typeof g ? {
                                top: g
                            } : {},
                            ...void 0 !== typeof y ? {
                                bottom: y
                            } : {},
                            ...void 0 !== typeof v ? {
                                left: v
                            } : {},
                            ...void 0 !== typeof w ? {
                                right: w
                            } : {}
                        },
                        ...r ? {
                            companyLogoUrl: r
                        } : {},
                        ...l > 0 ? {
                            autoOpenDelay: l
                        } : {}
                    })
                }), [b]);
                X((() => {
                    const e = document.getElementById("dt-chatButton");
                    if (!e || !e.offsetTop || !e.clientHeight) return;
                    const t = document.getElementById("dtwidget-main");
                    t && (window.innerHeight - e.offsetTop > 360 ? t.style.top = `${e.offsetTop+e.clientHeight+10}px` : t.style.bottom = window.innerHeight - e.offsetTop + 10 + "px")
                }), [o.styles]), X((() => {
                    a(o.text?.defaultMessage || "")
                }), [o.text?.defaultMessage]);
                const M = () => {
                        o.chatWidgetClosed && o.chatWidgetClosed(), n(!1)
                    },
                    z = (e, t) => {
                        const n = t.target.value || "",
                            {
                                label: o
                            } = e;
                        O((e => ({
                            ...e,
                            [o]: n
                        })))
                    },
                    R = (e, t) => {
                        let {
                            label: n
                        } = e;
                        if (!I[n]) return;
                        const o = t.target.value || "";
                        A((e => ({
                            ...e,
                            [n]: !o
                        })))
                    };
                return f("div", {
                    className: "dtwidget-chatmodal-container",
                    id: "dtwidget-main",
                    style: {
                        backgroundColor: o.styles.backgroundColor,
                        color: o.styles.primaryTextColor,
                        display: r ? "flex" : "none",
                        right: o.styles.right,
                        left: o.styles.left
                    },
                    ref: t
                }, f("div", {
                    className: "dtwidget-chatmodal-header-container" + (H ? " dtwidget-chatmodal-header-product-container" : "")
                }, f("div", {
                    className: "dtwidget-chatmodal-header"
                }, H ? f(m, null, !!g && f("img", {
                    src: g.replace(tt, nt),
                    alt: v,
                    className: "dtwidget-chatmodal-header-product-picture"
                }), (!!v || !!y) && f("div", {
                    className: "dtwidget-chatmodal-header-product-details"
                }, !!v && f("div", {
                    className: "dtwidget-chatmodal-header-product-name"
                }, v), !!y && f("div", {
                    className: "dtwidget-chatmodal-header-product-price"
                }, y))) : f(m, null, s && f("img", {
                    src: s.replace(ot, rt),
                    alt: `${_} logo`
                }), f("span", {
                    style: {
                        textAlign: "center",
                        marginTop: "10px",
                        width: "100%"
                    }
                }, o.text.headerTitle || _))), f("div", {
                    onClick: M,
                    className: "dtwidget-chatmodal-close"
                }, f(Qe, null))), f("div", {
                    className: "dtwidget-chatmodal-body"
                }, f("div", {
                    "data-form": "dt"
                }, f("div", {
                    className: "dt-form-element-container"
                }, T ? f("div", null, "loading...") : E ? f("div", {
                    className: "content-container error"
                }, "Something went wrong try again later.") : b?.config ? (() => {
                    if (!b || !b.config) return null;
                    const {
                        elements: e
                    } = b.config;
                    return e?.map((e => {
                        const t = ((e, t) => {
                            const {
                                type: n,
                                label: r
                            } = e, i = {
                                borderColor: "rgb(195, 192, 192)",
                                backgroundColor: o.styles.inputBoxBackgroundColor,
                                color: o.styles.inputBoxTextColor
                            }, l = {
                                borderColor: o.styles.choiceBorderColor,
                                backgroundColor: o.styles.choiceBackgroundColor,
                                color: o.styles.choiceTextColor
                            };
                            t && (i.borderColor = "red");
                            let a = null;
                            switch (n) {
                                case ct.INPUT:
                                    a = f("input", {
                                        className: "dt-widget-field-box dt-widget-field-box-input",
                                        style: i,
                                        placeholder: e.placeholder,
                                        value: P[e.label],
                                        type: "text",
                                        onKeyDown: t => R(e, t),
                                        onChange: t => z(e, t)
                                    });
                                    break;
                                case ct.CHOICES:
                                    a = f(mt, {
                                        options: e.options,
                                        choiceStyles: {},
                                        selectedChoiceStyles: l,
                                        selected: P[e.label],
                                        onSelect: t => ((e, t) => {
                                            const {
                                                label: n
                                            } = e;
                                            A((e => ({
                                                ...e,
                                                [n]: !t
                                            }))), O((e => ({
                                                ...e,
                                                [n]: t
                                            })))
                                        })(e, t)
                                    });
                                    break;
                                case ct.TEXTAREA:
                                    a = f("textarea", {
                                        rows: 4,
                                        placeholder: e.placeholder,
                                        style: i,
                                        className: "dt-widget-field-box dt-widget-field-box-textarea",
                                        value: P[e[r]],
                                        onKeyDown: t => R(e, t),
                                        onChange: t => z(e, t)
                                    });
                                    break;
                                case ct.URL:
                                    a = f("div", {
                                        className: "dt-widget-field-box dt-widget-field-box-url",
                                        style: {
                                            ...i,
                                            alignItems: "center"
                                        }
                                    }, f("span", {
                                        className: "dt-widget-field-box-info",
                                        style: {
                                            color: o.styles.inputBoxTextColor
                                        }
                                    }, "https://"), f("input", {
                                        className: "input url-input",
                                        type: "text",
                                        placeholder: e.placeholder,
                                        style: {
                                            color: o.styles.inputBoxTextColor
                                        },
                                        value: P[e[r]],
                                        onKeyDown: t => R(e, t),
                                        onChange: t => z(e, t)
                                    }));
                                    break;
                                default:
                                    a = null
                            }
                            return f(m, null, a, f("p", {
                                className: "dt-widget-choices-error " + (t ? "dt-widget-choices-error-visible" : "dt-widget-choices-error-hidden")
                            }, n === ct.CHOICES ? "Please select an option" : `Please enter ${r?.toLowerCase()}`))
                        })(e, !!I && I[e.label]);
                        return t ? f("div", {
                            className: "dt-widget-form-field",
                            key: e.label
                        }, f("label", {
                            className: "dt-widget-form-field-label"
                        }, e.label), t) : null
                    }))
                })() : f("textarea", {
                    placeholder: o.text?.messagePlaceholder || `Send a message to ${_}`,
                    rows: 4,
                    onInput: e => {
                        a((() => e.target.value))
                    },
                    value: l,
                    autoFocus: r,
                    style: {
                        backgroundColor: o.styles.inputBoxBackgroundColor,
                        color: o.styles.inputBoxTextColor
                    }
                })), f("a", {
                    "data-role": "button",
                    target: "_blank",
                    rel: "opener referrer nofollow",
                    href: p ? `https://api.whatsapp.com/send?phone=${p.replace(/\+/g,"").replace(/\s/g,"")}&text=${encodeURIComponent(l)}&lang=${d}` : void 0,
                    disabled: T || E,
                    onClick: async e => {
                        if (!p) return;
                        let t = l,
                            n = {};
                        if (b) {
                            e.stopPropagation(), e.preventDefault();
                            try {
                                if (({
                                        message: t,
                                        values: n
                                    } = await (async () => {
                                        if (!b || !c) return {
                                            message: l,
                                            values: {}
                                        };
                                        const {
                                            elements: e
                                        } = b.config || {}, t = {
                                            Location: window.location.href,
                                            ...P
                                        }, {
                                            queryParams: n
                                        } = o;
                                        n && n.forEach((e => {
                                            let {
                                                key: n,
                                                value: o
                                            } = e;
                                            t[n] = o
                                        }));
                                        try {
                                            const e = decodeURIComponent(window.location.href).split("?")[1];
                                            e && e.split("&").forEach((e => {
                                                if (!e) return;
                                                const [n, o] = e.split("=");
                                                t[n] = o
                                            }))
                                        } catch (e) {}
                                        if (e) {
                                            const n = e.reduce(((e, n) => {
                                                let {
                                                    type: o,
                                                    label: r,
                                                    required: i
                                                } = n;
                                                return !i && "boolean" == typeof i || P[r] ? (o === ct.URL && t[r] && (t[r] = `https://${t[r]}`), e) : (e[r] = !0, e)
                                            }), {});
                                            if (Object.keys(n).length) return A(n), {
                                                message: "",
                                                values: {}
                                            }
                                        }
                                        const r = await (async e => {
                                            let {
                                                response: t,
                                                widgetId: n,
                                                widgetResponseId: o
                                            } = e;
                                            try {
                                                return await at({
                                                    url: "/v1/widgets/widgets-response",
                                                    method: it.POST,
                                                    body: JSON.stringify({
                                                        response: t,
                                                        widgetId: n,
                                                        widgetResponseId: o
                                                    })
                                                })
                                            } catch (e) {
                                                return null
                                            }
                                        })({
                                            widgetId: c,
                                            response: t,
                                            ...C ? {
                                                widgetResponseId: C.id
                                            } : {}
                                        });
                                        if (!r) return {
                                            message: l,
                                            values: t
                                        };
                                        const {
                                            inquiryCode: i
                                        } = r;
                                        return i && k(r), i ? {
                                            message: `${l}\n\nInquiry code: #${i}`,
                                            values: t
                                        } : {
                                            message: l,
                                            values: t
                                        }
                                    })()), !t) return;
                                (e => {
                                    const t = ((e, t, n) => window.open(e, t, n))(e, "_blank", void 0);
                                    "function" == typeof t?.focus ? t?.focus() : (e => {
                                        const t = document.createElement("a");
                                        t.href = e, t.target = new RegExp(/^((?!chrome|android).)*safari/i).test(navigator.userAgent) || new RegExp(/Instagram/).test(navigator.userAgent) ? "_top" : "_blank", t.rel = "opener";
                                        const n = new MouseEvent("click", {
                                            view: window,
                                            bubbles: !0,
                                            cancelable: !0
                                        });
                                        t.dispatchEvent(n)
                                    })(e)
                                })(`https://api.whatsapp.com/send?phone=${p.replace(/\+/g,"").replace(/\s/g,"")}&text=${encodeURIComponent(t)}&lang=${d}`)
                            } catch (e) {}
                        }
                        o.chatButtonClicked && o.chatButtonClicked(n), M()
                    },
                    style: {
                        backgroundColor: o.styles.buttonColor,
                        color: o.styles.buttonTextColor,
                        lineHeight: "135%"
                    }
                }, H && o.text?.inquiryText ? o.text?.inquiryText : o.text?.buttonText ? o.text?.buttonText : _ ? `Chat with ${_}` : "Chat with us"))), f("div", {
                    className: "dtwidget-chatmodal-footer",
                    style: {
                        display: w || b?.isWhiteLabelled ? "none" : void 0
                    }
                }, f("a", {
                    href: `https://doubletick.io/${st(o?.queryParams||[])}`,
                    target: "_blank",
                    onClick: () => {
                        o.chatPoweredByClicked && o.chatPoweredByClicked()
                    }
                }, f(Ye, null), "powered by ", f("span", null, "DoubleTick.io")), f("a", {
                    href: "https://doubletick.io/whatsapp-business-api",
                    target: "_blank",
                    className: "invisible-link"
                }, "Whatsapp Business API")))
            })),
            yt = vt;
        var wt = n(406),
            bt = {};
        bt.styleTagTransform = Ge(), bt.setAttributes = je(), bt.insert = De().bind(null, "head"), bt.domAPI = Re(), bt.insertStyleElement = qe(), Me()(wt.Z, bt), wt.Z && wt.Z.locals && wt.Z.locals;

        function xt(e) {
            let {
                appConfig: t,
                instanceName: n
            } = e;
            const [o, r] = K(!t.minimized), [i, l] = K(!!t.disabled), [a, c] = K(t), d = Q(null), s = Q(null);
            X((() => {
                a.autoOpenDelay && setTimeout((() => {
                    r(!0)
                }), a.autoOpenDelay)
            }), []);
            const u = ee((() => {
                    c(t)
                }), []),
                _ = ee((e => {
                    c((t => ({
                        ...t,
                        ...e,
                        ...e.styles ? {
                            styles: {
                                ...t.styles,
                                ...e.styles
                            }
                        } : {},
                        ...e.text ? {
                            text: {
                                ...t.text,
                                ...e.text
                            }
                        } : {}
                    })))
                }), []);
            var p, h;
            return X((() => {
                window && n && (window[n] = {
                    setIsOpen: r,
                    setHideWidget: l,
                    setConfig: _,
                    resetConfig: u,
                    widgetVersion: "0.55"
                }, window.dispatchEvent(new CustomEvent("DtWidgetLoaded")))
            }), [n, r, l, _, u]), X((() => {
                const e = e => {
                    if (p && p.length > 0)
                        for (const t of p)
                            if (!t.current || "function" != typeof t.current.contains || t.current.contains(e.target)) return;
                    "function" == typeof h && h(e)
                };
                return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
                    document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e)
                }
            }), [p = [d, s], h = () => {
                o && a.chatWidgetClosed && a.chatWidgetClosed(), r(!1)
            }]), f("div", {
                className: "doubletick-widget-container",
                style: {
                    display: i || t.disabled ? "none" : "block"
                }
            }, f(yt, {
                config: a,
                setIsOpen: r,
                isOpen: o,
                handleSetConfig: _,
                ref: d
            }), f(Xe, {
                isOpen: o,
                config: a,
                setIsOpen: r,
                ref: s
            }))
        }
        const Ct = "dt";
        ((e, t, n, o) => {
            let r = Ct;
            try {
                r = n?.attributes?.getNamedItem("id")?.value ?? Ct
            } catch (e) {}
            const i = e[r];
            if (!i || !i.q) throw new Error(`Widget didn't find LoaderObject for instance [${r}]. The loading script was either modified, no call to 'init' method was done or there is conflicting object defined in \`window.${r}\` .`);
            if (e[`loaded-${r}`]) throw new Error(`Widget with name [${r}] was already loaded. This means you have multiple instances with same identifier (e.g. '${Ct}')`);
            let l;
            for (let n = 0; n < i.q.length; n++) {
                const a = i.q[n],
                    c = a[0];
                if (0 === n && "init" !== c) throw new Error(`Failed to start Widget [${r}]. 'init' must be called before other methods.`);
                if (0 === n || "init" !== c) switch (c) {
                    case "init": {
                        ["phoneNumber"].forEach((e => {
                            if (!a[1][e]) throw new Error(`Failed to start Widget [${r}]. The 'init' method must be called with "phoneNumber" properties.`)
                        }));
                        const n = Object.assign(t, a[1]);
                        n.debug && console.log(`Starting widget [${r}]`, n);
                        const i = n.element ?? e.document.body;
                        l = i.appendChild(e.document.createElement("div")), l.setAttribute("id", `doubleTickWidget-${r}`), o(l, n, r), e[`loaded-${r}`] = !0;
                        break
                    }
                    default:
                        console.warn(`Unsupported method [${c}]`, a[1])
                }
            }
            e[r] = function (e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                "event" === e ? l?.dispatchEvent(new CustomEvent("widget-event", {
                    detail: {
                        name: n?.[0]
                    }
                })) : console.warn(`Unsupported method [${e}]`, n)
            }
        })(window, {
            debug: !1,
            minimized: !0,
            text: {},
            styles: {},
            companyName: ""
        }, window.document.currentScript, ((n, o, r) => function (n, o, r) {
            var i, l, a, d;
            t.__ && t.__(n, o), l = (i = "function" == typeof r) ? null : r && r.__k || o.__k, a = [], d = [], I(o, n = (!i && r || o).__k = f(m, null, [n]), l || c, c, void 0 !== o.ownerSVGElement, !i && r ? [r] : l ? null : o.firstChild ? e.call(o.childNodes) : null, a, !i && r ? r : l ? l.__e : o.firstChild, i, d), A(a, n, d)
        }(f(xt, {
            appConfig: o,
            instanceName: r
        }), n)))
    })()
})();