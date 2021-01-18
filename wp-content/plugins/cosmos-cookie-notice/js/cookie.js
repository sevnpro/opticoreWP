window.onload=function() {
    var cn_time = 90, cn_version = 1610801239;
    var cn_script = [];
//JavaScript Cookie
    !function (e) {
        var n = !1;
        if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
            var o = window.Cookies, t = window.Cookies = e();
            t.noConflict = function () {
                return window.Cookies = o, t
            }
        }
    }(function () {
        function e() {
            for (var e = 0, n = {}; e < arguments.length; e++) {
                var o = arguments[e];
                for (var t in o) n[t] = o[t]
            }
            return n
        }

        return function n(o) {
            function t(n, r, i) {
                var c;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if ("number" == typeof (i = e({path: "/"}, t.defaults, i)).expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                        }
                        i.expires = i.expires ? i.expires.toUTCString() : "";
                        try {
                            c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                        } catch (e) {
                        }
                        r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                        var s = "";
                        for (var f in i) i[f] && (s += "; " + f, !0 !== i[f] && (s += "=" + i[f]));
                        return document.cookie = n + "=" + r + s
                    }
                    n || (c = {});
                    for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) {
                        var l = p[u].split("="), C = l.slice(1).join("=");
                        this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
                        try {
                            var g = l[0].replace(d, decodeURIComponent);
                            if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try {
                                C = JSON.parse(C)
                            } catch (e) {
                            }
                            if (n === g) {
                                c = C;
                                break
                            }
                            n || (c[g] = C)
                        } catch (e) {
                        }
                    }
                    return c
                }
            }

            return t.set = t, t.get = function (e) {
                return t.call(t, e)
            }, t.getJSON = function () {
                return t.apply({json: !0}, [].slice.call(arguments))
            }, t.defaults = {}, t.remove = function (n, o) {
                t(n, "", e(o, {expires: -1}))
            }, t.withConverter = n, t
        }(function () {
        })
    });
//Array from fix
    Array.from || (Array.from = function () {
        var r = Object.prototype.toString, t = function (t) {
            return "function" == typeof t || "[object Function]" === r.call(t)
        }, n = Math.pow(2, 53) - 1, e = function (r) {
            var t,
                e = (t = Number(r), isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t);
            return Math.min(Math.max(e, 0), n)
        };
        return function (r) {
            var n = Object(r);
            if (null == r) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var o, a = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== a) {
                if (!t(a)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (o = arguments[2])
            }
            for (var i, u = e(n.length), f = t(this) ? Object(new this(u)) : new Array(u), c = 0; c < u;) i = n[c], f[c] = a ? void 0 === o ? a(i, c) : a.call(o, i, c) : i, c += 1;
            return f.length = u, f
        }
    }());
//Slide toogle animation
    var DOMAnimations = {
        slideUp: function (e, t) {
            return void 0 === t && (t = 500), new Promise(function (o, r) {
                e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.transform = "translateZ(0)", e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout(function () {
                    e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), o(!1)
                }, t)
            })
        }, slideDown: function (e, t) {
            return void 0 === t && (t = 500), new Promise(function (o, r) {
                e.style.removeProperty("display");
                var i = window.getComputedStyle(e).display;
                "none" === i && (i = "block"), e.style.display = i;
                var s = e.offsetHeight;
                e.style.transform = "translateZ(1px)", e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.height = s + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout(function () {
                    e.style.removeProperty("height"), e.style.removeProperty("overflow")
                }, t)
            })
        }, slideToggle: function (e, t) {
            return void 0 === t && (t = 500), "none" === window.getComputedStyle(e).display ? this.slideDown(e, t) : this.slideUp(e, t)
        }
    };

//Async script loader
    function loadAsync(e, a) {
        if (null == e) a(); else {
            var n = document.createElement("script");
            n.async = !0, n.src = e, null !== a && (n.readyState ? n.onreadystatechange = function () {
                "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, a())
            } : n.onload = function () {
                a()
            }), document.getElementsByTagName("head")[0].appendChild(n)
        }
    }

//Default variable
    var cnSettingBtn = document.getElementById("cn-settings"),
        cnBody = document.getElementsByTagName('body')[0],
        cnBanner = document.querySelector(".cn-baner");

//On setting button click
    cnSettingBtn.addEventListener("click", function () {
        var _self = this;
        _self.disabled = true;
        if (document.getElementById("cn-save")) {
            cnBanner.classList.add("cn-banner-hidden");
            _self.disabled = false;
            cnBody.classList.add("cn-modal-open");
        } else {
            var request = new XMLHttpRequest();

            request.addEventListener('load', function () {
                var modal = document.createElement("div");
                modal.className = "cn-modal-wrap";
                modal.innerHTML = this.response;
                cnBody.appendChild(modal);
                cnModalInit();
                cnBanner.classList.add("cn-banner-hidden");
                _self.disabled = false;
                setTimeout(function () {
                    cnBody.classList.add("cn-modal-open");
                }, 44);
            });
            request.addEventListener('error', function () {
                alert("An error has occurred! Refresh the page.");
            });

            request.open('POST', cn_args.ajaxurl, true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
            request.send('action=modal_loader');
        }
    });

    function cnModalInit() {
        //On close button click
        document.getElementById("cn-close").addEventListener("click", function () {
            cnBody.classList.remove("cn-modal-open");
            cnBanner.classList.remove("cn-banner-hidden");
        });

        //On save button click
        document.getElementById("cn-save").addEventListener("click", function () {
            cnBody.classList.remove("cn-modal-open");
            cnBanner.classList.remove("cn-banner-hidden");
        });

        //Open option details
        Array.from(document.querySelectorAll(".cn-details")).forEach(function (details) {
            details.addEventListener("click", function () {
                var _parent = this.parentNode;
                _parent.classList.toggle('cn-details-open');
                DOMAnimations.slideToggle(_parent.querySelector(".cn-option-list"));
            });
        });

        //On category checkbox change
        Array.from(document.querySelectorAll(".cn-checkbox-cat")).forEach(function (chechbox) {
            chechbox.addEventListener("change", function (event) {
                if (event.target.checked) {
                    Array.from(this.parentNode.parentNode.querySelectorAll(".cn-checkbox-sub")).forEach(function (el) {
                        el.checked = true;
                    });
                } else {
                    Array.from(this.parentNode.parentNode.querySelectorAll(".cn-checkbox-sub")).forEach(function (el) {
                        el.checked = false;
                    });
                }
            });
        });
    }

//Load all scripts
    function loadAllScripts() {
        cn_script.forEach(function (script) {
            loadAsync(script.link, script.callback);
        });
    }

//On accept button click
    document.getElementById("cn-accept").addEventListener("click", function () {
        if (document.getElementById("cn-save")) {
            var checked = [];
            Array.from(document.querySelectorAll(".cn-checkbox-sub")).forEach(function (chechbox, index) {
                if (chechbox.checked)
                    checked.push(index);
            });
            if (cn_script.length == checked.length) {
                Cookies.set('cn_' + cn_version, {
                    'cookie': true
                }, {expires: cn_time});
                document.querySelector(".cn-baner").classList.add("cn-banner-hidden");
                loadAllScripts();
            } else if (checked.length > 0) {
                Cookies.set('cn_' + cn_version, {
                    'cookie': false,
                    'load': checked
                }, {expires: cn_time});
                document.querySelector(".cn-baner").classList.add("cn-banner-hidden");
                cn_script.forEach(function (script, index) {
                    if (checked.indexOf(index) >= 0) {
                        loadAsync(script.link, script.callback);
                    }
                });
            } else {
                document.querySelector(".cn-baner").classList.add("cn-banner-hidden");
            }
        } else {
            Cookies.set('cn_' + cn_version, {
                'cookie': true
            }, {expires: cn_time});
            document.querySelector(".cn-baner").classList.add("cn-banner-hidden");
            loadAllScripts();
        }
    });

//Load scripts
    var cn_cookie = Cookies.getJSON('cn_' + cn_version);

    if (!cn_cookie) {
        document.querySelector(".cn-baner").style.display = 'block';
    } else {
        if (cn_cookie.cookie) {
            loadAllScripts();
        } else {
            cn_script.forEach(function (script, index) {
                if (cn_cookie.load.indexOf(index) >= 0) {
                    loadAsync(script.link, script.callback);
                }
            });
        }
    }
};
