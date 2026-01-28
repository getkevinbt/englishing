const __vite__mapDeps = (
    i,
    m = __vite__mapDeps,
    d = m.f ||
        (m.f = [
            "assets/StartView-CEY9G2SV.js",
            "assets/StartView-4C5_8oZm.css",
            "assets/LoginComponent-CtA4wbne.js",
            "assets/LoginComponent-DX-tBfCY.css",
            "assets/ForgotPasswordComponent-C6QjYO_G.js",
            "assets/ForgotPasswordComponent-DS3Yu34G.css",
            "assets/SignUpComponent-B2FMRVZC.js",
            "assets/SignUpComponent-D0Pv9uVP.css",
            "assets/HomeView-Bt4eqxjj.js",
            "assets/UnitsComponent-WB5ZBf-x.js",
            "assets/UnitButtonComponent-B-7UPn6p.js",
            "assets/UnitButtonComponent-BvGzn-ay.css",
            "assets/UnitsComponent-HH9uFWvW.css",
            "assets/UnitViewComponent-CpSGTF5z.js",
            "assets/UnitViewComponent-DhvDMJCZ.css",
            "assets/HomeView-DpqNkKlS.css",
            "assets/ExerciseViewComponent-CRbTg0ms.js",
            "assets/ExerciseViewComponent-Dz1khj1Q.css",
        ]),
) => i.map((i) => d[i]);
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        s(r);
    new MutationObserver((r) => {
        for (const o of r)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(r) {
        const o = {};
        return (
            r.integrity && (o.integrity = r.integrity),
            r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials"
                ? (o.credentials = "include")
                : r.crossOrigin === "anonymous"
                  ? (o.credentials = "omit")
                  : (o.credentials = "same-origin"),
            o
        );
    }
    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const o = n(r);
        fetch(r.href, o);
    }
})();
function Or(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
}
const ae = {},
    Zt = [],
    ut = () => {},
    xi = () => !1,
    _s = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Tr = (e) => e.startsWith("onUpdate:"),
    Ee = Object.assign,
    Pr = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
    },
    Lc = Object.prototype.hasOwnProperty,
    oe = (e, t) => Lc.call(e, t),
    j = Array.isArray,
    en = (e) => Un(e) === "[object Map]",
    cn = (e) => Un(e) === "[object Set]",
    oo = (e) => Un(e) === "[object Date]",
    z = (e) => typeof e == "function",
    he = (e) => typeof e == "string",
    ft = (e) => typeof e == "symbol",
    ce = (e) => e !== null && typeof e == "object",
    Ci = (e) => (ce(e) || z(e)) && z(e.then) && z(e.catch),
    Oi = Object.prototype.toString,
    Un = (e) => Oi.call(e),
    Fc = (e) => Un(e).slice(8, -1),
    Ti = (e) => Un(e) === "[object Object]",
    Nr = (e) =>
        he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    bn = Or(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    Es = (e) => {
        const t = Object.create(null);
        return (n) => t[n] || (t[n] = e(n));
    },
    Mc = /-\w/g,
    Ke = Es((e) => e.replace(Mc, (t) => t.slice(1).toUpperCase())),
    Uc = /\B([A-Z])/g,
    zt = Es((e) => e.replace(Uc, "-$1").toLowerCase()),
    ws = Es((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    js = Es((e) => (e ? `on${ws(e)}` : "")),
    Pt = (e, t) => !Object.is(e, t),
    Qn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t);
    },
    Pi = (e, t, n, s = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: s,
            value: n,
        });
    },
    os = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    },
    Bc = (e) => {
        const t = he(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t;
    };
let io;
const Ss = () =>
    io ||
    (io =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof window < "u"
                ? window
                : typeof global < "u"
                  ? global
                  : {});
function Ir(e) {
    if (j(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                r = he(s) ? Vc(s) : Ir(s);
            if (r) for (const o in r) t[o] = r[o];
        }
        return t;
    } else if (he(e) || ce(e)) return e;
}
const jc = /;(?![^(]*\))/g,
    kc = /:([^]+)/,
    Hc = /\/\*[^]*?\*\//g;
function Vc(e) {
    const t = {};
    return (
        e
            .replace(Hc, "")
            .split(jc)
            .forEach((n) => {
                if (n) {
                    const s = n.split(kc);
                    s.length > 1 && (t[s[0].trim()] = s[1].trim());
                }
            }),
        t
    );
}
function Dr(e) {
    let t = "";
    if (he(e)) t = e;
    else if (j(e))
        for (let n = 0; n < e.length; n++) {
            const s = Dr(e[n]);
            s && (t += s + " ");
        }
    else if (ce(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
}
const $c =
        "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    qc = Or($c);
function Ni(e) {
    return !!e || e === "";
}
function Kc(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let s = 0; n && s < e.length; s++) n = Wt(e[s], t[s]);
    return n;
}
function Wt(e, t) {
    if (e === t) return !0;
    let n = oo(e),
        s = oo(t);
    if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
    if (((n = ft(e)), (s = ft(t)), n || s)) return e === t;
    if (((n = j(e)), (s = j(t)), n || s)) return n && s ? Kc(e, t) : !1;
    if (((n = ce(e)), (s = ce(t)), n || s)) {
        if (!n || !s) return !1;
        const r = Object.keys(e).length,
            o = Object.keys(t).length;
        if (r !== o) return !1;
        for (const i in e) {
            const l = e.hasOwnProperty(i),
                c = t.hasOwnProperty(i);
            if ((l && !c) || (!l && c) || !Wt(e[i], t[i])) return !1;
        }
    }
    return String(e) === String(t);
}
function Lr(e, t) {
    return e.findIndex((n) => Wt(n, t));
}
const Ii = (e) => !!(e && e.__v_isRef === !0),
    Wc = (e) =>
        he(e)
            ? e
            : e == null
              ? ""
              : j(e) || (ce(e) && (e.toString === Oi || !z(e.toString)))
                ? Ii(e)
                    ? Wc(e.value)
                    : JSON.stringify(e, Di, 2)
                : String(e),
    Di = (e, t) =>
        Ii(t)
            ? Di(e, t.value)
            : en(t)
              ? {
                    [`Map(${t.size})`]: [...t.entries()].reduce(
                        (n, [s, r], o) => ((n[ks(s, o) + " =>"] = r), n),
                        {},
                    ),
                }
              : cn(t)
                ? { [`Set(${t.size})`]: [...t.values()].map((n) => ks(n)) }
                : ft(t)
                  ? ks(t)
                  : ce(t) && !j(t) && !Ti(t)
                    ? String(t)
                    : t,
    ks = (e, t = "") => {
        var n;
        return ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
    };
let Se;
class Li {
    constructor(t = !1) {
        ((this.detached = t),
            (this._active = !0),
            (this._on = 0),
            (this.effects = []),
            (this.cleanups = []),
            (this._isPaused = !1),
            (this.parent = Se),
            !t &&
                Se &&
                (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1));
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++)
                this.effects[t].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++)
                this.effects[t].resume();
        }
    }
    run(t) {
        if (this._active) {
            const n = Se;
            try {
                return ((Se = this), t());
            } finally {
                Se = n;
            }
        }
    }
    on() {
        ++this._on === 1 && ((this.prevScope = Se), (Se = this));
    }
    off() {
        this._on > 0 &&
            --this._on === 0 &&
            ((Se = this.prevScope), (this.prevScope = void 0));
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (
                this.effects.length = 0, n = 0, s = this.cleanups.length;
                n < s;
                n++
            )
                this.cleanups[n]();
            if (((this.cleanups.length = 0), this.scopes)) {
                for (n = 0, s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r &&
                    r !== this &&
                    ((this.parent.scopes[this.index] = r),
                    (r.index = this.index));
            }
            this.parent = void 0;
        }
    }
}
function Fi(e) {
    return new Li(e);
}
function Mi() {
    return Se;
}
function Gc(e, t = !1) {
    Se && Se.cleanups.push(e);
}
let fe;
const Hs = new WeakSet();
class Ui {
    constructor(t) {
        ((this.fn = t),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 5),
            (this.next = void 0),
            (this.cleanup = void 0),
            (this.scheduler = void 0),
            Se && Se.active && Se.effects.push(this));
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        this.flags & 64 &&
            ((this.flags &= -65),
            Hs.has(this) && (Hs.delete(this), this.trigger()));
    }
    notify() {
        (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || ji(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        ((this.flags |= 2), lo(this), ki(this));
        const t = fe,
            n = ze;
        ((fe = this), (ze = !0));
        try {
            return this.fn();
        } finally {
            (Hi(this), (fe = t), (ze = n), (this.flags &= -3));
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Ur(t);
            ((this.deps = this.depsTail = void 0),
                lo(this),
                this.onStop && this.onStop(),
                (this.flags &= -2));
        }
    }
    trigger() {
        this.flags & 64
            ? Hs.add(this)
            : this.scheduler
              ? this.scheduler()
              : this.runIfDirty();
    }
    runIfDirty() {
        or(this) && this.run();
    }
    get dirty() {
        return or(this);
    }
}
let Bi = 0,
    _n,
    En;
function ji(e, t = !1) {
    if (((e.flags |= 8), t)) {
        ((e.next = En), (En = e));
        return;
    }
    ((e.next = _n), (_n = e));
}
function Fr() {
    Bi++;
}
function Mr() {
    if (--Bi > 0) return;
    if (En) {
        let t = En;
        for (En = void 0; t; ) {
            const n = t.next;
            ((t.next = void 0), (t.flags &= -9), (t = n));
        }
    }
    let e;
    for (; _n; ) {
        let t = _n;
        for (_n = void 0; t; ) {
            const n = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (s) {
                    e || (e = s);
                }
            t = n;
        }
    }
    if (e) throw e;
}
function ki(e) {
    for (let t = e.deps; t; t = t.nextDep)
        ((t.version = -1),
            (t.prevActiveLink = t.dep.activeLink),
            (t.dep.activeLink = t));
}
function Hi(e) {
    let t,
        n = e.depsTail,
        s = n;
    for (; s; ) {
        const r = s.prevDep;
        (s.version === -1 ? (s === n && (n = r), Ur(s), zc(s)) : (t = s),
            (s.dep.activeLink = s.prevActiveLink),
            (s.prevActiveLink = void 0),
            (s = r));
    }
    ((e.deps = t), (e.depsTail = n));
}
function or(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (
            t.dep.version !== t.version ||
            (t.dep.computed &&
                (Vi(t.dep.computed) || t.dep.version !== t.version))
        )
            return !0;
    return !!e._dirty;
}
function Vi(e) {
    if (
        (e.flags & 4 && !(e.flags & 16)) ||
        ((e.flags &= -17), e.globalVersion === Tn) ||
        ((e.globalVersion = Tn),
        !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !or(e)))
    )
        return;
    e.flags |= 2;
    const t = e.dep,
        n = fe,
        s = ze;
    ((fe = e), (ze = !0));
    try {
        ki(e);
        const r = e.fn(e._value);
        (t.version === 0 || Pt(r, e._value)) &&
            ((e.flags |= 128), (e._value = r), t.version++);
    } catch (r) {
        throw (t.version++, r);
    } finally {
        ((fe = n), (ze = s), Hi(e), (e.flags &= -3));
    }
}
function Ur(e, t = !1) {
    const { dep: n, prevSub: s, nextSub: r } = e;
    if (
        (s && ((s.nextSub = r), (e.prevSub = void 0)),
        r && ((r.prevSub = s), (e.nextSub = void 0)),
        n.subs === e && ((n.subs = s), !s && n.computed))
    ) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep) Ur(o, !0);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zc(e) {
    const { prevDep: t, nextDep: n } = e;
    (t && ((t.nextDep = n), (e.prevDep = void 0)),
        n && ((n.prevDep = t), (e.nextDep = void 0)));
}
let ze = !0;
const $i = [];
function Et() {
    ($i.push(ze), (ze = !1));
}
function wt() {
    const e = $i.pop();
    ze = e === void 0 ? !0 : e;
}
function lo(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        const n = fe;
        fe = void 0;
        try {
            t();
        } finally {
            fe = n;
        }
    }
}
let Tn = 0;
class Jc {
    constructor(t, n) {
        ((this.sub = t),
            (this.dep = n),
            (this.version = n.version),
            (this.nextDep =
                this.prevDep =
                this.nextSub =
                this.prevSub =
                this.prevActiveLink =
                    void 0));
    }
}
class Br {
    constructor(t) {
        ((this.computed = t),
            (this.version = 0),
            (this.activeLink = void 0),
            (this.subs = void 0),
            (this.map = void 0),
            (this.key = void 0),
            (this.sc = 0),
            (this.__v_skip = !0));
    }
    track(t) {
        if (!fe || !ze || fe === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== fe)
            ((n = this.activeLink = new Jc(fe, this)),
                fe.deps
                    ? ((n.prevDep = fe.depsTail),
                      (fe.depsTail.nextDep = n),
                      (fe.depsTail = n))
                    : (fe.deps = fe.depsTail = n),
                qi(n));
        else if (n.version === -1 && ((n.version = this.version), n.nextDep)) {
            const s = n.nextDep;
            ((s.prevDep = n.prevDep),
                n.prevDep && (n.prevDep.nextDep = s),
                (n.prevDep = fe.depsTail),
                (n.nextDep = void 0),
                (fe.depsTail.nextDep = n),
                (fe.depsTail = n),
                fe.deps === n && (fe.deps = s));
        }
        return n;
    }
    trigger(t) {
        (this.version++, Tn++, this.notify(t));
    }
    notify(t) {
        Fr();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify();
        } finally {
            Mr();
        }
    }
}
function qi(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep) qi(s);
        }
        const n = e.dep.subs;
        (n !== e && ((e.prevSub = n), n && (n.nextSub = e)), (e.dep.subs = e));
    }
}
const is = new WeakMap(),
    $t = Symbol(""),
    ir = Symbol(""),
    Pn = Symbol("");
function ve(e, t, n) {
    if (ze && fe) {
        let s = is.get(e);
        s || is.set(e, (s = new Map()));
        let r = s.get(n);
        (r || (s.set(n, (r = new Br())), (r.map = s), (r.key = n)), r.track());
    }
}
function yt(e, t, n, s, r, o) {
    const i = is.get(e);
    if (!i) {
        Tn++;
        return;
    }
    const l = (c) => {
        c && c.trigger();
    };
    if ((Fr(), t === "clear")) i.forEach(l);
    else {
        const c = j(e),
            u = c && Nr(n);
        if (c && n === "length") {
            const a = Number(s);
            i.forEach((f, p) => {
                (p === "length" || p === Pn || (!ft(p) && p >= a)) && l(f);
            });
        } else
            switch (
                ((n !== void 0 || i.has(void 0)) && l(i.get(n)),
                u && l(i.get(Pn)),
                t)
            ) {
                case "add":
                    c
                        ? u && l(i.get("length"))
                        : (l(i.get($t)), en(e) && l(i.get(ir)));
                    break;
                case "delete":
                    c || (l(i.get($t)), en(e) && l(i.get(ir)));
                    break;
                case "set":
                    en(e) && l(i.get($t));
                    break;
            }
    }
    Mr();
}
function Xc(e, t) {
    const n = is.get(e);
    return n && n.get(t);
}
function Jt(e) {
    const t = se(e);
    return t === e ? t : (ve(t, "iterate", Pn), $e(e) ? t : t.map(we));
}
function vs(e) {
    return (ve((e = se(e)), "iterate", Pn), e);
}
const Qc = {
    __proto__: null,
    [Symbol.iterator]() {
        return Vs(this, Symbol.iterator, we);
    },
    concat(...e) {
        return Jt(this).concat(...e.map((t) => (j(t) ? Jt(t) : t)));
    },
    entries() {
        return Vs(this, "entries", (e) => ((e[1] = we(e[1])), e));
    },
    every(e, t) {
        return dt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
        return dt(this, "filter", e, t, (n) => n.map(we), arguments);
    },
    find(e, t) {
        return dt(this, "find", e, t, we, arguments);
    },
    findIndex(e, t) {
        return dt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
        return dt(this, "findLast", e, t, we, arguments);
    },
    findLastIndex(e, t) {
        return dt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
        return dt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
        return $s(this, "includes", e);
    },
    indexOf(...e) {
        return $s(this, "indexOf", e);
    },
    join(e) {
        return Jt(this).join(e);
    },
    lastIndexOf(...e) {
        return $s(this, "lastIndexOf", e);
    },
    map(e, t) {
        return dt(this, "map", e, t, void 0, arguments);
    },
    pop() {
        return dn(this, "pop");
    },
    push(...e) {
        return dn(this, "push", e);
    },
    reduce(e, ...t) {
        return co(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
        return co(this, "reduceRight", e, t);
    },
    shift() {
        return dn(this, "shift");
    },
    some(e, t) {
        return dt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
        return dn(this, "splice", e);
    },
    toReversed() {
        return Jt(this).toReversed();
    },
    toSorted(e) {
        return Jt(this).toSorted(e);
    },
    toSpliced(...e) {
        return Jt(this).toSpliced(...e);
    },
    unshift(...e) {
        return dn(this, "unshift", e);
    },
    values() {
        return Vs(this, "values", we);
    },
};
function Vs(e, t, n) {
    const s = vs(e),
        r = s[t]();
    return (
        s !== e &&
            !$e(e) &&
            ((r._next = r.next),
            (r.next = () => {
                const o = r._next();
                return (o.done || (o.value = n(o.value)), o);
            })),
        r
    );
}
const Yc = Array.prototype;
function dt(e, t, n, s, r, o) {
    const i = vs(e),
        l = i !== e && !$e(e),
        c = i[t];
    if (c !== Yc[t]) {
        const f = c.apply(e, o);
        return l ? we(f) : f;
    }
    let u = n;
    i !== e &&
        (l
            ? (u = function (f, p) {
                  return n.call(this, we(f), p, e);
              })
            : n.length > 2 &&
              (u = function (f, p) {
                  return n.call(this, f, p, e);
              }));
    const a = c.call(i, u, s);
    return l && r ? r(a) : a;
}
function co(e, t, n, s) {
    const r = vs(e);
    let o = n;
    return (
        r !== e &&
            ($e(e)
                ? n.length > 3 &&
                  (o = function (i, l, c) {
                      return n.call(this, i, l, c, e);
                  })
                : (o = function (i, l, c) {
                      return n.call(this, i, we(l), c, e);
                  })),
        r[t](o, ...s)
    );
}
function $s(e, t, n) {
    const s = se(e);
    ve(s, "iterate", Pn);
    const r = s[t](...n);
    return (r === -1 || r === !1) && Hr(n[0])
        ? ((n[0] = se(n[0])), s[t](...n))
        : r;
}
function dn(e, t, n = []) {
    (Et(), Fr());
    const s = se(e)[t].apply(e, n);
    return (Mr(), wt(), s);
}
const Zc = Or("__proto__,__v_isRef,__isVue"),
    Ki = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== "arguments" && e !== "caller")
            .map((e) => Symbol[e])
            .filter(ft),
    );
function ea(e) {
    ft(e) || (e = String(e));
    const t = se(this);
    return (ve(t, "has", e), t.hasOwnProperty(e));
}
class Wi {
    constructor(t = !1, n = !1) {
        ((this._isReadonly = t), (this._isShallow = n));
    }
    get(t, n, s) {
        if (n === "__v_skip") return t.__v_skip;
        const r = this._isReadonly,
            o = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw")
            return s === (r ? (o ? ua : Xi) : o ? Ji : zi).get(t) ||
                Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
                ? t
                : void 0;
        const i = j(t);
        if (!r) {
            let c;
            if (i && (c = Qc[n])) return c;
            if (n === "hasOwnProperty") return ea;
        }
        const l = Reflect.get(t, n, me(t) ? t : s);
        if ((ft(n) ? Ki.has(n) : Zc(n)) || (r || ve(t, "get", n), o)) return l;
        if (me(l)) {
            const c = i && Nr(n) ? l : l.value;
            return r && ce(c) ? cr(c) : c;
        }
        return ce(l) ? (r ? cr(l) : Bn(l)) : l;
    }
}
class Gi extends Wi {
    constructor(t = !1) {
        super(!1, t);
    }
    set(t, n, s, r) {
        let o = t[n];
        if (!this._isShallow) {
            const c = It(o);
            if (
                (!$e(s) && !It(s) && ((o = se(o)), (s = se(s))),
                !j(t) && me(o) && !me(s))
            )
                return (c || (o.value = s), !0);
        }
        const i = j(t) && Nr(n) ? Number(n) < t.length : oe(t, n),
            l = Reflect.set(t, n, s, me(t) ? t : r);
        return (
            t === se(r) &&
                (i ? Pt(s, o) && yt(t, "set", n, s) : yt(t, "add", n, s)),
            l
        );
    }
    deleteProperty(t, n) {
        const s = oe(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return (r && s && yt(t, "delete", n, void 0), r);
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return ((!ft(n) || !Ki.has(n)) && ve(t, "has", n), s);
    }
    ownKeys(t) {
        return (ve(t, "iterate", j(t) ? "length" : $t), Reflect.ownKeys(t));
    }
}
class ta extends Wi {
    constructor(t = !1) {
        super(!0, t);
    }
    set(t, n) {
        return !0;
    }
    deleteProperty(t, n) {
        return !0;
    }
}
const na = new Gi(),
    sa = new ta(),
    ra = new Gi(!0);
const lr = (e) => e,
    Kn = (e) => Reflect.getPrototypeOf(e);
function oa(e, t, n) {
    return function (...s) {
        const r = this.__v_raw,
            o = se(r),
            i = en(o),
            l = e === "entries" || (e === Symbol.iterator && i),
            c = e === "keys" && i,
            u = r[e](...s),
            a = n ? lr : t ? ls : we;
        return (
            !t && ve(o, "iterate", c ? ir : $t),
            {
                next() {
                    const { value: f, done: p } = u.next();
                    return p
                        ? { value: f, done: p }
                        : { value: l ? [a(f[0]), a(f[1])] : a(f), done: p };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function Wn(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
}
function ia(e, t) {
    const n = {
        get(r) {
            const o = this.__v_raw,
                i = se(o),
                l = se(r);
            e || (Pt(r, l) && ve(i, "get", r), ve(i, "get", l));
            const { has: c } = Kn(i),
                u = t ? lr : e ? ls : we;
            if (c.call(i, r)) return u(o.get(r));
            if (c.call(i, l)) return u(o.get(l));
            o !== i && o.get(r);
        },
        get size() {
            const r = this.__v_raw;
            return (!e && ve(se(r), "iterate", $t), r.size);
        },
        has(r) {
            const o = this.__v_raw,
                i = se(o),
                l = se(r);
            return (
                e || (Pt(r, l) && ve(i, "has", r), ve(i, "has", l)),
                r === l ? o.has(r) : o.has(r) || o.has(l)
            );
        },
        forEach(r, o) {
            const i = this,
                l = i.__v_raw,
                c = se(l),
                u = t ? lr : e ? ls : we;
            return (
                !e && ve(c, "iterate", $t),
                l.forEach((a, f) => r.call(o, u(a), u(f), i))
            );
        },
    };
    return (
        Ee(
            n,
            e
                ? {
                      add: Wn("add"),
                      set: Wn("set"),
                      delete: Wn("delete"),
                      clear: Wn("clear"),
                  }
                : {
                      add(r) {
                          !t && !$e(r) && !It(r) && (r = se(r));
                          const o = se(this);
                          return (
                              Kn(o).has.call(o, r) ||
                                  (o.add(r), yt(o, "add", r, r)),
                              this
                          );
                      },
                      set(r, o) {
                          !t && !$e(o) && !It(o) && (o = se(o));
                          const i = se(this),
                              { has: l, get: c } = Kn(i);
                          let u = l.call(i, r);
                          u || ((r = se(r)), (u = l.call(i, r)));
                          const a = c.call(i, r);
                          return (
                              i.set(r, o),
                              u
                                  ? Pt(o, a) && yt(i, "set", r, o)
                                  : yt(i, "add", r, o),
                              this
                          );
                      },
                      delete(r) {
                          const o = se(this),
                              { has: i, get: l } = Kn(o);
                          let c = i.call(o, r);
                          (c || ((r = se(r)), (c = i.call(o, r))),
                              l && l.call(o, r));
                          const u = o.delete(r);
                          return (c && yt(o, "delete", r, void 0), u);
                      },
                      clear() {
                          const r = se(this),
                              o = r.size !== 0,
                              i = r.clear();
                          return (o && yt(r, "clear", void 0, void 0), i);
                      },
                  },
        ),
        ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
            n[r] = oa(r, e, t);
        }),
        n
    );
}
function jr(e, t) {
    const n = ia(e, t);
    return (s, r, o) =>
        r === "__v_isReactive"
            ? !e
            : r === "__v_isReadonly"
              ? e
              : r === "__v_raw"
                ? s
                : Reflect.get(oe(n, r) && r in s ? n : s, r, o);
}
const la = { get: jr(!1, !1) },
    ca = { get: jr(!1, !0) },
    aa = { get: jr(!0, !1) };
const zi = new WeakMap(),
    Ji = new WeakMap(),
    Xi = new WeakMap(),
    ua = new WeakMap();
function fa(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function da(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : fa(Fc(e));
}
function Bn(e) {
    return It(e) ? e : kr(e, !1, na, la, zi);
}
function Qi(e) {
    return kr(e, !1, ra, ca, Ji);
}
function cr(e) {
    return kr(e, !0, sa, aa, Xi);
}
function kr(e, t, n, s, r) {
    if (!ce(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const o = da(e);
    if (o === 0) return e;
    const i = r.get(e);
    if (i) return i;
    const l = new Proxy(e, o === 2 ? s : n);
    return (r.set(e, l), l);
}
function Nt(e) {
    return It(e) ? Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function It(e) {
    return !!(e && e.__v_isReadonly);
}
function $e(e) {
    return !!(e && e.__v_isShallow);
}
function Hr(e) {
    return e ? !!e.__v_raw : !1;
}
function se(e) {
    const t = e && e.__v_raw;
    return t ? se(t) : e;
}
function Vr(e) {
    return (
        !oe(e, "__v_skip") && Object.isExtensible(e) && Pi(e, "__v_skip", !0),
        e
    );
}
const we = (e) => (ce(e) ? Bn(e) : e),
    ls = (e) => (ce(e) ? cr(e) : e);
function me(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function $r(e) {
    return Yi(e, !1);
}
function ha(e) {
    return Yi(e, !0);
}
function Yi(e, t) {
    return me(e) ? e : new pa(e, t);
}
class pa {
    constructor(t, n) {
        ((this.dep = new Br()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = n ? t : se(t)),
            (this._value = n ? t : we(t)),
            (this.__v_isShallow = n));
    }
    get value() {
        return (this.dep.track(), this._value);
    }
    set value(t) {
        const n = this._rawValue,
            s = this.__v_isShallow || $e(t) || It(t);
        ((t = s ? t : se(t)),
            Pt(t, n) &&
                ((this._rawValue = t),
                (this._value = s ? t : we(t)),
                this.dep.trigger()));
    }
}
function tn(e) {
    return me(e) ? e.value : e;
}
const ma = {
    get: (e, t, n) => (t === "__v_raw" ? e : tn(Reflect.get(e, t, n))),
    set: (e, t, n, s) => {
        const r = e[t];
        return me(r) && !me(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
    },
};
function Zi(e) {
    return Nt(e) ? e : new Proxy(e, ma);
}
function ga(e) {
    const t = j(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = ba(e, n);
    return t;
}
class ya {
    constructor(t, n, s) {
        ((this._object = t),
            (this._key = n),
            (this._defaultValue = s),
            (this.__v_isRef = !0),
            (this._value = void 0));
    }
    get value() {
        const t = this._object[this._key];
        return (this._value = t === void 0 ? this._defaultValue : t);
    }
    set value(t) {
        this._object[this._key] = t;
    }
    get dep() {
        return Xc(se(this._object), this._key);
    }
}
function ba(e, t, n) {
    const s = e[t];
    return me(s) ? s : new ya(e, t, n);
}
class _a {
    constructor(t, n, s) {
        ((this.fn = t),
            (this.setter = n),
            (this._value = void 0),
            (this.dep = new Br(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = Tn - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !n),
            (this.isSSR = s));
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && fe !== this))
            return (ji(this, !0), !0);
    }
    get value() {
        const t = this.dep.track();
        return (Vi(this), t && (t.version = this.dep.version), this._value);
    }
    set value(t) {
        this.setter && this.setter(t);
    }
}
function Ea(e, t, n = !1) {
    let s, r;
    return (z(e) ? (s = e) : ((s = e.get), (r = e.set)), new _a(s, r, n));
}
const Gn = {},
    cs = new WeakMap();
let jt;
function wa(e, t = !1, n = jt) {
    if (n) {
        let s = cs.get(n);
        (s || cs.set(n, (s = [])), s.push(e));
    }
}
function Sa(e, t, n = ae) {
    const {
            immediate: s,
            deep: r,
            once: o,
            scheduler: i,
            augmentJob: l,
            call: c,
        } = n,
        u = (O) => (r ? O : $e(O) || r === !1 || r === 0 ? bt(O, 1) : bt(O));
    let a,
        f,
        p,
        m,
        g = !1,
        _ = !1;
    if (
        (me(e)
            ? ((f = () => e.value), (g = $e(e)))
            : Nt(e)
              ? ((f = () => u(e)), (g = !0))
              : j(e)
                ? ((_ = !0),
                  (g = e.some((O) => Nt(O) || $e(O))),
                  (f = () =>
                      e.map((O) => {
                          if (me(O)) return O.value;
                          if (Nt(O)) return u(O);
                          if (z(O)) return c ? c(O, 2) : O();
                      })))
                : z(e)
                  ? t
                      ? (f = c ? () => c(e, 2) : e)
                      : (f = () => {
                            if (p) {
                                Et();
                                try {
                                    p();
                                } finally {
                                    wt();
                                }
                            }
                            const O = jt;
                            jt = a;
                            try {
                                return c ? c(e, 3, [m]) : e(m);
                            } finally {
                                jt = O;
                            }
                        })
                  : (f = ut),
        t && r)
    ) {
        const O = f,
            B = r === !0 ? 1 / 0 : r;
        f = () => bt(O(), B);
    }
    const v = Mi(),
        x = () => {
            (a.stop(), v && v.active && Pr(v.effects, a));
        };
    if (o && t) {
        const O = t;
        t = (...B) => {
            (O(...B), x());
        };
    }
    let T = _ ? new Array(e.length).fill(Gn) : Gn;
    const N = (O) => {
        if (!(!(a.flags & 1) || (!a.dirty && !O)))
            if (t) {
                const B = a.run();
                if (r || g || (_ ? B.some((Z, $) => Pt(Z, T[$])) : Pt(B, T))) {
                    p && p();
                    const Z = jt;
                    jt = a;
                    try {
                        const $ = [
                            B,
                            T === Gn ? void 0 : _ && T[0] === Gn ? [] : T,
                            m,
                        ];
                        ((T = B), c ? c(t, 3, $) : t(...$));
                    } finally {
                        jt = Z;
                    }
                }
            } else a.run();
    };
    return (
        l && l(N),
        (a = new Ui(f)),
        (a.scheduler = i ? () => i(N, !1) : N),
        (m = (O) => wa(O, !1, a)),
        (p = a.onStop =
            () => {
                const O = cs.get(a);
                if (O) {
                    if (c) c(O, 4);
                    else for (const B of O) B();
                    cs.delete(a);
                }
            }),
        t ? (s ? N(!0) : (T = a.run())) : i ? i(N.bind(null, !0), !0) : a.run(),
        (x.pause = a.pause.bind(a)),
        (x.resume = a.resume.bind(a)),
        (x.stop = x),
        x
    );
}
function bt(e, t = 1 / 0, n) {
    if (
        t <= 0 ||
        !ce(e) ||
        e.__v_skip ||
        ((n = n || new Map()), (n.get(e) || 0) >= t)
    )
        return e;
    if ((n.set(e, t), t--, me(e))) bt(e.value, t, n);
    else if (j(e)) for (let s = 0; s < e.length; s++) bt(e[s], t, n);
    else if (cn(e) || en(e))
        e.forEach((s) => {
            bt(s, t, n);
        });
    else if (Ti(e)) {
        for (const s in e) bt(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && bt(e[s], t, n);
    }
    return e;
}
function jn(e, t, n, s) {
    try {
        return s ? e(...s) : e();
    } catch (r) {
        Rs(r, t, n);
    }
}
function Xe(e, t, n, s) {
    if (z(e)) {
        const r = jn(e, t, n, s);
        return (
            r &&
                Ci(r) &&
                r.catch((o) => {
                    Rs(o, t, n);
                }),
            r
        );
    }
    if (j(e)) {
        const r = [];
        for (let o = 0; o < e.length; o++) r.push(Xe(e[o], t, n, s));
        return r;
    }
}
function Rs(e, t, n, s = !0) {
    const r = t ? t.vnode : null,
        { errorHandler: o, throwUnhandledErrorInProduction: i } =
            (t && t.appContext.config) || ae;
    if (t) {
        let l = t.parent;
        const c = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const a = l.ec;
            if (a) {
                for (let f = 0; f < a.length; f++)
                    if (a[f](e, c, u) === !1) return;
            }
            l = l.parent;
        }
        if (o) {
            (Et(), jn(o, null, 10, [e, c, u]), wt());
            return;
        }
    }
    va(e, n, r, s, i);
}
function va(e, t, n, s = !0, r = !1) {
    if (r) throw e;
    console.error(e);
}
const Oe = [];
let lt = -1;
const nn = [];
let Ct = null,
    Qt = 0;
const el = Promise.resolve();
let as = null;
function As(e) {
    const t = as || el;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ra(e) {
    let t = lt + 1,
        n = Oe.length;
    for (; t < n; ) {
        const s = (t + n) >>> 1,
            r = Oe[s],
            o = Nn(r);
        o < e || (o === e && r.flags & 2) ? (t = s + 1) : (n = s);
    }
    return t;
}
function qr(e) {
    if (!(e.flags & 1)) {
        const t = Nn(e),
            n = Oe[Oe.length - 1];
        (!n || (!(e.flags & 2) && t >= Nn(n))
            ? Oe.push(e)
            : Oe.splice(Ra(t), 0, e),
            (e.flags |= 1),
            tl());
    }
}
function tl() {
    as || (as = el.then(sl));
}
function Aa(e) {
    (j(e)
        ? nn.push(...e)
        : Ct && e.id === -1
          ? Ct.splice(Qt + 1, 0, e)
          : e.flags & 1 || (nn.push(e), (e.flags |= 1)),
        tl());
}
function ao(e, t, n = lt + 1) {
    for (; n < Oe.length; n++) {
        const s = Oe[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid) continue;
            (Oe.splice(n, 1),
                n--,
                s.flags & 4 && (s.flags &= -2),
                s(),
                s.flags & 4 || (s.flags &= -2));
        }
    }
}
function nl(e) {
    if (nn.length) {
        const t = [...new Set(nn)].sort((n, s) => Nn(n) - Nn(s));
        if (((nn.length = 0), Ct)) {
            Ct.push(...t);
            return;
        }
        for (Ct = t, Qt = 0; Qt < Ct.length; Qt++) {
            const n = Ct[Qt];
            (n.flags & 4 && (n.flags &= -2),
                n.flags & 8 || n(),
                (n.flags &= -2));
        }
        ((Ct = null), (Qt = 0));
    }
}
const Nn = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function sl(e) {
    try {
        for (lt = 0; lt < Oe.length; lt++) {
            const t = Oe[lt];
            t &&
                !(t.flags & 8) &&
                (t.flags & 4 && (t.flags &= -2),
                jn(t, t.i, t.i ? 15 : 14),
                t.flags & 4 || (t.flags &= -2));
        }
    } finally {
        for (; lt < Oe.length; lt++) {
            const t = Oe[lt];
            t && (t.flags &= -2);
        }
        ((lt = -1),
            (Oe.length = 0),
            nl(),
            (as = null),
            (Oe.length || nn.length) && sl());
    }
}
let Ue = null,
    rl = null;
function us(e) {
    const t = Ue;
    return ((Ue = e), (rl = (e && e.type.__scopeId) || null), t);
}
function xa(e, t = Ue, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && hs(-1);
        const o = us(t);
        let i;
        try {
            i = e(...r);
        } finally {
            (us(o), s._d && hs(1));
        }
        return i;
    };
    return ((s._n = !0), (s._c = !0), (s._d = !0), s);
}
function yp(e, t) {
    if (Ue === null) return e;
    const n = Ps(Ue),
        s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [o, i, l, c = ae] = t[r];
        o &&
            (z(o) && (o = { mounted: o, updated: o }),
            o.deep && bt(i),
            s.push({
                dir: o,
                instance: n,
                value: i,
                oldValue: void 0,
                arg: l,
                modifiers: c,
            }));
    }
    return e;
}
function Ft(e, t, n, s) {
    const r = e.dirs,
        o = t && t.dirs;
    for (let i = 0; i < r.length; i++) {
        const l = r[i];
        o && (l.oldValue = o[i].value);
        let c = l.dir[s];
        c && (Et(), Xe(c, n, 8, [e.el, l, e, t]), wt());
    }
}
const Ca = Symbol("_vte"),
    ol = (e) => e.__isTeleport,
    gt = Symbol("_leaveCb"),
    zn = Symbol("_enterCb");
function Oa() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map(),
    };
    return (
        pl(() => {
            e.isMounted = !0;
        }),
        ml(() => {
            e.isUnmounting = !0;
        }),
        e
    );
}
const He = [Function, Array],
    il = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: He,
        onEnter: He,
        onAfterEnter: He,
        onEnterCancelled: He,
        onBeforeLeave: He,
        onLeave: He,
        onAfterLeave: He,
        onLeaveCancelled: He,
        onBeforeAppear: He,
        onAppear: He,
        onAfterAppear: He,
        onAppearCancelled: He,
    },
    ll = (e) => {
        const t = e.subTree;
        return t.component ? ll(t.component) : t;
    },
    Ta = {
        name: "BaseTransition",
        props: il,
        setup(e, { slots: t }) {
            const n = Jr(),
                s = Oa();
            return () => {
                const r = t.default && ul(t.default(), !0);
                if (!r || !r.length) return;
                const o = cl(r),
                    i = se(e),
                    { mode: l } = i;
                if (s.isLeaving) return qs(o);
                const c = uo(o);
                if (!c) return qs(o);
                let u = ar(c, i, s, n, (f) => (u = f));
                c.type !== Te && In(c, u);
                let a = n.subTree && uo(n.subTree);
                if (a && a.type !== Te && !kt(a, c) && ll(n).type !== Te) {
                    let f = ar(a, i, s, n);
                    if ((In(a, f), l === "out-in" && c.type !== Te))
                        return (
                            (s.isLeaving = !0),
                            (f.afterLeave = () => {
                                ((s.isLeaving = !1),
                                    n.job.flags & 8 || n.update(),
                                    delete f.afterLeave,
                                    (a = void 0));
                            }),
                            qs(o)
                        );
                    l === "in-out" && c.type !== Te
                        ? (f.delayLeave = (p, m, g) => {
                              const _ = al(s, a);
                              ((_[String(a.key)] = a),
                                  (p[gt] = () => {
                                      (m(),
                                          (p[gt] = void 0),
                                          delete u.delayedLeave,
                                          (a = void 0));
                                  }),
                                  (u.delayedLeave = () => {
                                      (g(),
                                          delete u.delayedLeave,
                                          (a = void 0));
                                  }));
                          })
                        : (a = void 0);
                } else a && (a = void 0);
                return o;
            };
        },
    };
function cl(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Te) {
                t = n;
                break;
            }
    }
    return t;
}
const Pa = Ta;
function al(e, t) {
    const { leavingVNodes: n } = e;
    let s = n.get(t.type);
    return (s || ((s = Object.create(null)), n.set(t.type, s)), s);
}
function ar(e, t, n, s, r) {
    const {
            appear: o,
            mode: i,
            persisted: l = !1,
            onBeforeEnter: c,
            onEnter: u,
            onAfterEnter: a,
            onEnterCancelled: f,
            onBeforeLeave: p,
            onLeave: m,
            onAfterLeave: g,
            onLeaveCancelled: _,
            onBeforeAppear: v,
            onAppear: x,
            onAfterAppear: T,
            onAppearCancelled: N,
        } = t,
        O = String(e.key),
        B = al(n, e),
        Z = (D, q) => {
            D && Xe(D, s, 9, q);
        },
        $ = (D, q) => {
            const ee = q[1];
            (Z(D, q),
                j(D)
                    ? D.every((I) => I.length <= 1) && ee()
                    : D.length <= 1 && ee());
        },
        K = {
            mode: i,
            persisted: l,
            beforeEnter(D) {
                let q = c;
                if (!n.isMounted)
                    if (o) q = v || c;
                    else return;
                D[gt] && D[gt](!0);
                const ee = B[O];
                (ee && kt(e, ee) && ee.el[gt] && ee.el[gt](), Z(q, [D]));
            },
            enter(D) {
                let q = u,
                    ee = a,
                    I = f;
                if (!n.isMounted)
                    if (o) ((q = x || u), (ee = T || a), (I = N || f));
                    else return;
                let X = !1;
                const le = (D[zn] = (_e) => {
                    X ||
                        ((X = !0),
                        _e ? Z(I, [D]) : Z(ee, [D]),
                        K.delayedLeave && K.delayedLeave(),
                        (D[zn] = void 0));
                });
                q ? $(q, [D, le]) : le();
            },
            leave(D, q) {
                const ee = String(e.key);
                if ((D[zn] && D[zn](!0), n.isUnmounting)) return q();
                Z(p, [D]);
                let I = !1;
                const X = (D[gt] = (le) => {
                    I ||
                        ((I = !0),
                        q(),
                        le ? Z(_, [D]) : Z(g, [D]),
                        (D[gt] = void 0),
                        B[ee] === e && delete B[ee]);
                });
                ((B[ee] = e), m ? $(m, [D, X]) : X());
            },
            clone(D) {
                const q = ar(D, t, n, s, r);
                return (r && r(q), q);
            },
        };
    return K;
}
function qs(e) {
    if (xs(e)) return ((e = Dt(e)), (e.children = null), e);
}
function uo(e) {
    if (!xs(e)) return ol(e.type) && e.children ? cl(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && z(n.default)) return n.default();
    }
}
function In(e, t) {
    e.shapeFlag & 6 && e.component
        ? ((e.transition = t), In(e.component.subTree, t))
        : e.shapeFlag & 128
          ? ((e.ssContent.transition = t.clone(e.ssContent)),
            (e.ssFallback.transition = t.clone(e.ssFallback)))
          : (e.transition = t);
}
function ul(e, t = !1, n) {
    let s = [],
        r = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const l =
            n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === Ge
            ? (i.patchFlag & 128 && r++, (s = s.concat(ul(i.children, t, l))))
            : (t || i.type !== Te) && s.push(l != null ? Dt(i, { key: l }) : i);
    }
    if (r > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2;
    return s;
}
function fl(e, t) {
    return z(e) ? Ee({ name: e.name }, t, { setup: e }) : e;
}
function dl(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const fs = new WeakMap();
function wn(e, t, n, s, r = !1) {
    if (j(e)) {
        e.forEach((g, _) => wn(g, t && (j(t) ? t[_] : t), n, s, r));
        return;
    }
    if (Sn(s) && !r) {
        s.shapeFlag & 512 &&
            s.type.__asyncResolved &&
            s.component.subTree.component &&
            wn(e, t, n, s.component.subTree);
        return;
    }
    const o = s.shapeFlag & 4 ? Ps(s.component) : s.el,
        i = r ? null : o,
        { i: l, r: c } = e,
        u = t && t.r,
        a = l.refs === ae ? (l.refs = {}) : l.refs,
        f = l.setupState,
        p = se(f),
        m = f === ae ? xi : (g) => oe(p, g);
    if (u != null && u !== c) {
        if ((fo(t), he(u))) ((a[u] = null), m(u) && (f[u] = null));
        else if (me(u)) {
            u.value = null;
            const g = t;
            g.k && (a[g.k] = null);
        }
    }
    if (z(c)) jn(c, l, 12, [i, a]);
    else {
        const g = he(c),
            _ = me(c);
        if (g || _) {
            const v = () => {
                if (e.f) {
                    const x = g ? (m(c) ? f[c] : a[c]) : c.value;
                    if (r) j(x) && Pr(x, o);
                    else if (j(x)) x.includes(o) || x.push(o);
                    else if (g) ((a[c] = [o]), m(c) && (f[c] = a[c]));
                    else {
                        const T = [o];
                        ((c.value = T), e.k && (a[e.k] = T));
                    }
                } else
                    g
                        ? ((a[c] = i), m(c) && (f[c] = i))
                        : _ && ((c.value = i), e.k && (a[e.k] = i));
            };
            if (i) {
                const x = () => {
                    (v(), fs.delete(e));
                };
                ((x.id = -1), fs.set(e, x), Me(x, n));
            } else (fo(e), v());
        }
    }
}
function fo(e) {
    const t = fs.get(e);
    t && ((t.flags |= 8), fs.delete(e));
}
Ss().requestIdleCallback;
Ss().cancelIdleCallback;
const Sn = (e) => !!e.type.__asyncLoader,
    xs = (e) => e.type.__isKeepAlive;
function Na(e, t) {
    hl(e, "a", t);
}
function Ia(e, t) {
    hl(e, "da", t);
}
function hl(e, t, n = Re) {
    const s =
        e.__wdc ||
        (e.__wdc = () => {
            let r = n;
            for (; r; ) {
                if (r.isDeactivated) return;
                r = r.parent;
            }
            return e();
        });
    if ((Cs(t, s, n), n)) {
        let r = n.parent;
        for (; r && r.parent; )
            (xs(r.parent.vnode) && Da(s, t, n, r), (r = r.parent));
    }
}
function Da(e, t, n, s) {
    const r = Cs(t, e, s, !0);
    gl(() => {
        Pr(s[t], r);
    }, n);
}
function Cs(e, t, n = Re, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []),
            o =
                t.__weh ||
                (t.__weh = (...i) => {
                    Et();
                    const l = kn(n),
                        c = Xe(t, n, e, i);
                    return (l(), wt(), c);
                });
        return (s ? r.unshift(o) : r.push(o), o);
    }
}
const St =
        (e) =>
        (t, n = Re) => {
            (!Ln || e === "sp") && Cs(e, (...s) => t(...s), n);
        },
    La = St("bm"),
    pl = St("m"),
    Fa = St("bu"),
    Ma = St("u"),
    ml = St("bum"),
    gl = St("um"),
    Ua = St("sp"),
    Ba = St("rtg"),
    ja = St("rtc");
function ka(e, t = Re) {
    Cs("ec", e, t);
}
const yl = "components";
function Ha(e, t) {
    return _l(yl, e, !0, t) || e;
}
const bl = Symbol.for("v-ndc");
function bp(e) {
    return he(e) ? _l(yl, e, !1) || e : e || bl;
}
function _l(e, t, n = !0, s = !1) {
    const r = Ue || Re;
    if (r) {
        const o = r.type;
        {
            const l = Iu(o, !1);
            if (l && (l === t || l === Ke(t) || l === ws(Ke(t)))) return o;
        }
        const i = ho(r[e] || o[e], t) || ho(r.appContext[e], t);
        return !i && s ? o : i;
    }
}
function ho(e, t) {
    return e && (e[t] || e[Ke(t)] || e[ws(Ke(t))]);
}
function _p(e, t, n, s) {
    let r;
    const o = n,
        i = j(e);
    if (i || he(e)) {
        const l = i && Nt(e);
        let c = !1,
            u = !1;
        (l && ((c = !$e(e)), (u = It(e)), (e = vs(e))),
            (r = new Array(e.length)));
        for (let a = 0, f = e.length; a < f; a++)
            r[a] = t(c ? (u ? ls(we(e[a])) : we(e[a])) : e[a], a, void 0, o);
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, o);
    } else if (ce(e))
        if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, o));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let c = 0, u = l.length; c < u; c++) {
                const a = l[c];
                r[c] = t(e[a], a, c, o);
            }
        }
    else r = [];
    return r;
}
const ur = (e) => (e ? (kl(e) ? Ps(e) : ur(e.parent)) : null),
    vn = Ee(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => ur(e.parent),
        $root: (e) => ur(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => wl(e),
        $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
                qr(e.update);
            }),
        $nextTick: (e) => e.n || (e.n = As.bind(e.proxy)),
        $watch: (e) => au.bind(e),
    }),
    Ks = (e, t) => e !== ae && !e.__isScriptSetup && oe(e, t),
    Va = {
        get({ _: e }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: s,
                data: r,
                props: o,
                accessCache: i,
                type: l,
                appContext: c,
            } = e;
            let u;
            if (t[0] !== "$") {
                const m = i[t];
                if (m !== void 0)
                    switch (m) {
                        case 1:
                            return s[t];
                        case 2:
                            return r[t];
                        case 4:
                            return n[t];
                        case 3:
                            return o[t];
                    }
                else {
                    if (Ks(s, t)) return ((i[t] = 1), s[t]);
                    if (r !== ae && oe(r, t)) return ((i[t] = 2), r[t]);
                    if ((u = e.propsOptions[0]) && oe(u, t))
                        return ((i[t] = 3), o[t]);
                    if (n !== ae && oe(n, t)) return ((i[t] = 4), n[t]);
                    fr && (i[t] = 0);
                }
            }
            const a = vn[t];
            let f, p;
            if (a) return (t === "$attrs" && ve(e.attrs, "get", ""), a(e));
            if ((f = l.__cssModules) && (f = f[t])) return f;
            if (n !== ae && oe(n, t)) return ((i[t] = 4), n[t]);
            if (((p = c.config.globalProperties), oe(p, t))) return p[t];
        },
        set({ _: e }, t, n) {
            const { data: s, setupState: r, ctx: o } = e;
            return Ks(r, t)
                ? ((r[t] = n), !0)
                : s !== ae && oe(s, t)
                  ? ((s[t] = n), !0)
                  : oe(e.props, t) || (t[0] === "$" && t.slice(1) in e)
                    ? !1
                    : ((o[t] = n), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: n,
                    ctx: s,
                    appContext: r,
                    propsOptions: o,
                    type: i,
                },
            },
            l,
        ) {
            let c, u;
            return !!(
                n[l] ||
                (e !== ae && l[0] !== "$" && oe(e, l)) ||
                Ks(t, l) ||
                ((c = o[0]) && oe(c, l)) ||
                oe(s, l) ||
                oe(vn, l) ||
                oe(r.config.globalProperties, l) ||
                ((u = i.__cssModules) && u[l])
            );
        },
        defineProperty(e, t, n) {
            return (
                n.get != null
                    ? (e._.accessCache[t] = 0)
                    : oe(n, "value") && this.set(e, t, n.value, null),
                Reflect.defineProperty(e, t, n)
            );
        },
    };
function po(e) {
    return j(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let fr = !0;
function $a(e) {
    const t = wl(e),
        n = e.proxy,
        s = e.ctx;
    ((fr = !1), t.beforeCreate && mo(t.beforeCreate, e, "bc"));
    const {
        data: r,
        computed: o,
        methods: i,
        watch: l,
        provide: c,
        inject: u,
        created: a,
        beforeMount: f,
        mounted: p,
        beforeUpdate: m,
        updated: g,
        activated: _,
        deactivated: v,
        beforeDestroy: x,
        beforeUnmount: T,
        destroyed: N,
        unmounted: O,
        render: B,
        renderTracked: Z,
        renderTriggered: $,
        errorCaptured: K,
        serverPrefetch: D,
        expose: q,
        inheritAttrs: ee,
        components: I,
        directives: X,
        filters: le,
    } = t;
    if ((u && qa(u, s, null), i))
        for (const G in i) {
            const Q = i[G];
            z(Q) && (s[G] = Q.bind(n));
        }
    if (r) {
        const G = r.call(n, n);
        ce(G) && (e.data = Bn(G));
    }
    if (((fr = !0), o))
        for (const G in o) {
            const Q = o[G],
                je = z(Q) ? Q.bind(n, n) : z(Q.get) ? Q.get.bind(n, n) : ut,
                Ze = !z(Q) && z(Q.set) ? Q.set.bind(n) : ut,
                ye = Ve({ get: je, set: Ze });
            Object.defineProperty(s, G, {
                enumerable: !0,
                configurable: !0,
                get: () => ye.value,
                set: (pe) => (ye.value = pe),
            });
        }
    if (l) for (const G in l) El(l[G], s, n, G);
    if (c) {
        const G = z(c) ? c.call(n) : c;
        Reflect.ownKeys(G).forEach((Q) => {
            Yn(Q, G[Q]);
        });
    }
    a && mo(a, e, "c");
    function Y(G, Q) {
        j(Q) ? Q.forEach((je) => G(je.bind(n))) : Q && G(Q.bind(n));
    }
    if (
        (Y(La, f),
        Y(pl, p),
        Y(Fa, m),
        Y(Ma, g),
        Y(Na, _),
        Y(Ia, v),
        Y(ka, K),
        Y(ja, Z),
        Y(Ba, $),
        Y(ml, T),
        Y(gl, O),
        Y(Ua, D),
        j(q))
    )
        if (q.length) {
            const G = e.exposed || (e.exposed = {});
            q.forEach((Q) => {
                Object.defineProperty(G, Q, {
                    get: () => n[Q],
                    set: (je) => (n[Q] = je),
                    enumerable: !0,
                });
            });
        } else e.exposed || (e.exposed = {});
    (B && e.render === ut && (e.render = B),
        ee != null && (e.inheritAttrs = ee),
        I && (e.components = I),
        X && (e.directives = X),
        D && dl(e));
}
function qa(e, t, n = ut) {
    j(e) && (e = dr(e));
    for (const s in e) {
        const r = e[s];
        let o;
        (ce(r)
            ? "default" in r
                ? (o = Je(r.from || s, r.default, !0))
                : (o = Je(r.from || s))
            : (o = Je(r)),
            me(o)
                ? Object.defineProperty(t, s, {
                      enumerable: !0,
                      configurable: !0,
                      get: () => o.value,
                      set: (i) => (o.value = i),
                  })
                : (t[s] = o));
    }
}
function mo(e, t, n) {
    Xe(j(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function El(e, t, n, s) {
    let r = s.includes(".") ? Ll(n, s) : () => n[s];
    if (he(e)) {
        const o = t[e];
        z(o) && Rn(r, o);
    } else if (z(e)) Rn(r, e.bind(n));
    else if (ce(e))
        if (j(e)) e.forEach((o) => El(o, t, n, s));
        else {
            const o = z(e.handler) ? e.handler.bind(n) : t[e.handler];
            z(o) && Rn(r, o, e);
        }
}
function wl(e) {
    const t = e.type,
        { mixins: n, extends: s } = t,
        {
            mixins: r,
            optionsCache: o,
            config: { optionMergeStrategies: i },
        } = e.appContext,
        l = o.get(t);
    let c;
    return (
        l
            ? (c = l)
            : !r.length && !n && !s
              ? (c = t)
              : ((c = {}),
                r.length && r.forEach((u) => ds(c, u, i, !0)),
                ds(c, t, i)),
        ce(t) && o.set(t, c),
        c
    );
}
function ds(e, t, n, s = !1) {
    const { mixins: r, extends: o } = t;
    (o && ds(e, o, n, !0), r && r.forEach((i) => ds(e, i, n, !0)));
    for (const i in t)
        if (!(s && i === "expose")) {
            const l = Ka[i] || (n && n[i]);
            e[i] = l ? l(e[i], t[i]) : t[i];
        }
    return e;
}
const Ka = {
    data: go,
    props: yo,
    emits: yo,
    methods: yn,
    computed: yn,
    beforeCreate: xe,
    created: xe,
    beforeMount: xe,
    mounted: xe,
    beforeUpdate: xe,
    updated: xe,
    beforeDestroy: xe,
    beforeUnmount: xe,
    destroyed: xe,
    unmounted: xe,
    activated: xe,
    deactivated: xe,
    errorCaptured: xe,
    serverPrefetch: xe,
    components: yn,
    directives: yn,
    watch: Ga,
    provide: go,
    inject: Wa,
};
function go(e, t) {
    return t
        ? e
            ? function () {
                  return Ee(
                      z(e) ? e.call(this, this) : e,
                      z(t) ? t.call(this, this) : t,
                  );
              }
            : t
        : e;
}
function Wa(e, t) {
    return yn(dr(e), dr(t));
}
function dr(e) {
    if (j(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t;
    }
    return e;
}
function xe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function yn(e, t) {
    return e ? Ee(Object.create(null), e, t) : t;
}
function yo(e, t) {
    return e
        ? j(e) && j(t)
            ? [...new Set([...e, ...t])]
            : Ee(Object.create(null), po(e), po(t ?? {}))
        : t;
}
function Ga(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ee(Object.create(null), e);
    for (const s in t) n[s] = xe(e[s], t[s]);
    return n;
}
function Sl() {
    return {
        app: null,
        config: {
            isNativeTag: xi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let za = 0;
function Ja(e, t) {
    return function (s, r = null) {
        (z(s) || (s = Ee({}, s)), r != null && !ce(r) && (r = null));
        const o = Sl(),
            i = new WeakSet(),
            l = [];
        let c = !1;
        const u = (o.app = {
            _uid: za++,
            _component: s,
            _props: r,
            _container: null,
            _context: o,
            _instance: null,
            version: Lu,
            get config() {
                return o.config;
            },
            set config(a) {},
            use(a, ...f) {
                return (
                    i.has(a) ||
                        (a && z(a.install)
                            ? (i.add(a), a.install(u, ...f))
                            : z(a) && (i.add(a), a(u, ...f))),
                    u
                );
            },
            mixin(a) {
                return (o.mixins.includes(a) || o.mixins.push(a), u);
            },
            component(a, f) {
                return f ? ((o.components[a] = f), u) : o.components[a];
            },
            directive(a, f) {
                return f ? ((o.directives[a] = f), u) : o.directives[a];
            },
            mount(a, f, p) {
                if (!c) {
                    const m = u._ceVNode || Pe(s, r);
                    return (
                        (m.appContext = o),
                        p === !0 ? (p = "svg") : p === !1 && (p = void 0),
                        e(m, a, p),
                        (c = !0),
                        (u._container = a),
                        (a.__vue_app__ = u),
                        Ps(m.component)
                    );
                }
            },
            onUnmount(a) {
                l.push(a);
            },
            unmount() {
                c &&
                    (Xe(l, u._instance, 16),
                    e(null, u._container),
                    delete u._container.__vue_app__);
            },
            provide(a, f) {
                return ((o.provides[a] = f), u);
            },
            runWithContext(a) {
                const f = qt;
                qt = u;
                try {
                    return a();
                } finally {
                    qt = f;
                }
            },
        });
        return u;
    };
}
let qt = null;
function Yn(e, t) {
    if (Re) {
        let n = Re.provides;
        const s = Re.parent && Re.parent.provides;
        (s === n && (n = Re.provides = Object.create(s)), (n[e] = t));
    }
}
function Je(e, t, n = !1) {
    const s = Jr();
    if (s || qt) {
        let r = qt
            ? qt._context.provides
            : s
              ? s.parent == null || s.ce
                  ? s.vnode.appContext && s.vnode.appContext.provides
                  : s.parent.provides
              : void 0;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && z(t) ? t.call(s && s.proxy) : t;
    }
}
function Xa() {
    return !!(Jr() || qt);
}
const vl = {},
    Rl = () => Object.create(vl),
    Al = (e) => Object.getPrototypeOf(e) === vl;
function Qa(e, t, n, s = !1) {
    const r = {},
        o = Rl();
    ((e.propsDefaults = Object.create(null)), xl(e, t, r, o));
    for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
    (n
        ? (e.props = s ? r : Qi(r))
        : e.type.props
          ? (e.props = r)
          : (e.props = o),
        (e.attrs = o));
}
function Ya(e, t, n, s) {
    const {
            props: r,
            attrs: o,
            vnode: { patchFlag: i },
        } = e,
        l = se(r),
        [c] = e.propsOptions;
    let u = !1;
    if ((s || i > 0) && !(i & 16)) {
        if (i & 8) {
            const a = e.vnode.dynamicProps;
            for (let f = 0; f < a.length; f++) {
                let p = a[f];
                if (Os(e.emitsOptions, p)) continue;
                const m = t[p];
                if (c)
                    if (oe(o, p)) m !== o[p] && ((o[p] = m), (u = !0));
                    else {
                        const g = Ke(p);
                        r[g] = hr(c, l, g, m, e, !1);
                    }
                else m !== o[p] && ((o[p] = m), (u = !0));
            }
        }
    } else {
        xl(e, t, r, o) && (u = !0);
        let a;
        for (const f in l)
            (!t || (!oe(t, f) && ((a = zt(f)) === f || !oe(t, a)))) &&
                (c
                    ? n &&
                      (n[f] !== void 0 || n[a] !== void 0) &&
                      (r[f] = hr(c, l, f, void 0, e, !0))
                    : delete r[f]);
        if (o !== l)
            for (const f in o) (!t || !oe(t, f)) && (delete o[f], (u = !0));
    }
    u && yt(e.attrs, "set", "");
}
function xl(e, t, n, s) {
    const [r, o] = e.propsOptions;
    let i = !1,
        l;
    if (t)
        for (let c in t) {
            if (bn(c)) continue;
            const u = t[c];
            let a;
            r && oe(r, (a = Ke(c)))
                ? !o || !o.includes(a)
                    ? (n[a] = u)
                    : ((l || (l = {}))[a] = u)
                : Os(e.emitsOptions, c) ||
                  ((!(c in s) || u !== s[c]) && ((s[c] = u), (i = !0)));
        }
    if (o) {
        const c = se(n),
            u = l || ae;
        for (let a = 0; a < o.length; a++) {
            const f = o[a];
            n[f] = hr(r, c, f, u[f], e, !oe(u, f));
        }
    }
    return i;
}
function hr(e, t, n, s, r, o) {
    const i = e[n];
    if (i != null) {
        const l = oe(i, "default");
        if (l && s === void 0) {
            const c = i.default;
            if (i.type !== Function && !i.skipFactory && z(c)) {
                const { propsDefaults: u } = r;
                if (n in u) s = u[n];
                else {
                    const a = kn(r);
                    ((s = u[n] = c.call(null, t)), a());
                }
            } else s = c;
            r.ce && r.ce._setProp(n, s);
        }
        i[0] &&
            (o && !l
                ? (s = !1)
                : i[1] && (s === "" || s === zt(n)) && (s = !0));
    }
    return s;
}
const Za = new WeakMap();
function Cl(e, t, n = !1) {
    const s = n ? Za : t.propsCache,
        r = s.get(e);
    if (r) return r;
    const o = e.props,
        i = {},
        l = [];
    let c = !1;
    if (!z(e)) {
        const a = (f) => {
            c = !0;
            const [p, m] = Cl(f, t, !0);
            (Ee(i, p), m && l.push(...m));
        };
        (!n && t.mixins.length && t.mixins.forEach(a),
            e.extends && a(e.extends),
            e.mixins && e.mixins.forEach(a));
    }
    if (!o && !c) return (ce(e) && s.set(e, Zt), Zt);
    if (j(o))
        for (let a = 0; a < o.length; a++) {
            const f = Ke(o[a]);
            bo(f) && (i[f] = ae);
        }
    else if (o)
        for (const a in o) {
            const f = Ke(a);
            if (bo(f)) {
                const p = o[a],
                    m = (i[f] = j(p) || z(p) ? { type: p } : Ee({}, p)),
                    g = m.type;
                let _ = !1,
                    v = !0;
                if (j(g))
                    for (let x = 0; x < g.length; ++x) {
                        const T = g[x],
                            N = z(T) && T.name;
                        if (N === "Boolean") {
                            _ = !0;
                            break;
                        } else N === "String" && (v = !1);
                    }
                else _ = z(g) && g.name === "Boolean";
                ((m[0] = _), (m[1] = v), (_ || oe(m, "default")) && l.push(f));
            }
        }
    const u = [i, l];
    return (ce(e) && s.set(e, u), u);
}
function bo(e) {
    return e[0] !== "$" && !bn(e);
}
const Kr = (e) => e === "_" || e === "_ctx" || e === "$stable",
    Wr = (e) => (j(e) ? e.map(ct) : [ct(e)]),
    eu = (e, t, n) => {
        if (t._n) return t;
        const s = xa((...r) => Wr(t(...r)), n);
        return ((s._c = !1), s);
    },
    Ol = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
            if (Kr(r)) continue;
            const o = e[r];
            if (z(o)) t[r] = eu(r, o, s);
            else if (o != null) {
                const i = Wr(o);
                t[r] = () => i;
            }
        }
    },
    Tl = (e, t) => {
        const n = Wr(t);
        e.slots.default = () => n;
    },
    Pl = (e, t, n) => {
        for (const s in t) (n || !Kr(s)) && (e[s] = t[s]);
    },
    tu = (e, t, n) => {
        const s = (e.slots = Rl());
        if (e.vnode.shapeFlag & 32) {
            const r = t._;
            r ? (Pl(s, t, n), n && Pi(s, "_", r, !0)) : Ol(t, s);
        } else t && Tl(e, t);
    },
    nu = (e, t, n) => {
        const { vnode: s, slots: r } = e;
        let o = !0,
            i = ae;
        if (s.shapeFlag & 32) {
            const l = t._;
            (l
                ? n && l === 1
                    ? (o = !1)
                    : Pl(r, t, n)
                : ((o = !t.$stable), Ol(t, r)),
                (i = t));
        } else t && (Tl(e, t), (i = { default: 1 }));
        if (o) for (const l in r) !Kr(l) && i[l] == null && delete r[l];
    },
    Me = yu;
function su(e) {
    return ru(e);
}
function ru(e, t) {
    const n = Ss();
    n.__VUE__ = !0;
    const {
            insert: s,
            remove: r,
            patchProp: o,
            createElement: i,
            createText: l,
            createComment: c,
            setText: u,
            setElementText: a,
            parentNode: f,
            nextSibling: p,
            setScopeId: m = ut,
            insertStaticContent: g,
        } = e,
        _ = (
            d,
            h,
            y,
            w = null,
            R = null,
            E = null,
            L = void 0,
            P = null,
            C = !!h.dynamicChildren,
        ) => {
            if (d === h) return;
            (d && !kt(d, h) && ((w = S(d)), pe(d, R, E, !0), (d = null)),
                h.patchFlag === -2 && ((C = !1), (h.dynamicChildren = null)));
            const { type: A, ref: V, shapeFlag: M } = h;
            switch (A) {
                case Ts:
                    v(d, h, y, w);
                    break;
                case Te:
                    x(d, h, y, w);
                    break;
                case Zn:
                    d == null && T(h, y, w, L);
                    break;
                case Ge:
                    I(d, h, y, w, R, E, L, P, C);
                    break;
                default:
                    M & 1
                        ? B(d, h, y, w, R, E, L, P, C)
                        : M & 6
                          ? X(d, h, y, w, R, E, L, P, C)
                          : (M & 64 || M & 128) &&
                            A.process(d, h, y, w, R, E, L, P, C, k);
            }
            V != null && R
                ? wn(V, d && d.ref, E, h || d, !h)
                : V == null && d && d.ref != null && wn(d.ref, null, E, d, !0);
        },
        v = (d, h, y, w) => {
            if (d == null) s((h.el = l(h.children)), y, w);
            else {
                const R = (h.el = d.el);
                h.children !== d.children && u(R, h.children);
            }
        },
        x = (d, h, y, w) => {
            d == null ? s((h.el = c(h.children || "")), y, w) : (h.el = d.el);
        },
        T = (d, h, y, w) => {
            [d.el, d.anchor] = g(d.children, h, y, w, d.el, d.anchor);
        },
        N = ({ el: d, anchor: h }, y, w) => {
            let R;
            for (; d && d !== h; ) ((R = p(d)), s(d, y, w), (d = R));
            s(h, y, w);
        },
        O = ({ el: d, anchor: h }) => {
            let y;
            for (; d && d !== h; ) ((y = p(d)), r(d), (d = y));
            r(h);
        },
        B = (d, h, y, w, R, E, L, P, C) => {
            (h.type === "svg"
                ? (L = "svg")
                : h.type === "math" && (L = "mathml"),
                d == null ? Z(h, y, w, R, E, L, P, C) : D(d, h, R, E, L, P, C));
        },
        Z = (d, h, y, w, R, E, L, P) => {
            let C, A;
            const { props: V, shapeFlag: M, transition: H, dirs: W } = d;
            if (
                ((C = d.el = i(d.type, E, V && V.is, V)),
                M & 8
                    ? a(C, d.children)
                    : M & 16 && K(d.children, C, null, w, R, Ws(d, E), L, P),
                W && Ft(d, null, w, "created"),
                $(C, d, d.scopeId, L, w),
                V)
            ) {
                for (const ue in V)
                    ue !== "value" && !bn(ue) && o(C, ue, null, V[ue], E, w);
                ("value" in V && o(C, "value", null, V.value, E),
                    (A = V.onVnodeBeforeMount) && ot(A, w, d));
            }
            W && Ft(d, null, w, "beforeMount");
            const ne = ou(R, H);
            (ne && H.beforeEnter(C),
                s(C, h, y),
                ((A = V && V.onVnodeMounted) || ne || W) &&
                    Me(() => {
                        (A && ot(A, w, d),
                            ne && H.enter(C),
                            W && Ft(d, null, w, "mounted"));
                    }, R));
        },
        $ = (d, h, y, w, R) => {
            if ((y && m(d, y), w))
                for (let E = 0; E < w.length; E++) m(d, w[E]);
            if (R) {
                let E = R.subTree;
                if (
                    h === E ||
                    (Ml(E.type) && (E.ssContent === h || E.ssFallback === h))
                ) {
                    const L = R.vnode;
                    $(d, L, L.scopeId, L.slotScopeIds, R.parent);
                }
            }
        },
        K = (d, h, y, w, R, E, L, P, C = 0) => {
            for (let A = C; A < d.length; A++) {
                const V = (d[A] = P ? Ot(d[A]) : ct(d[A]));
                _(null, V, h, y, w, R, E, L, P);
            }
        },
        D = (d, h, y, w, R, E, L) => {
            const P = (h.el = d.el);
            let { patchFlag: C, dynamicChildren: A, dirs: V } = h;
            C |= d.patchFlag & 16;
            const M = d.props || ae,
                H = h.props || ae;
            let W;
            if (
                (y && Mt(y, !1),
                (W = H.onVnodeBeforeUpdate) && ot(W, y, h, d),
                V && Ft(h, d, y, "beforeUpdate"),
                y && Mt(y, !0),
                ((M.innerHTML && H.innerHTML == null) ||
                    (M.textContent && H.textContent == null)) &&
                    a(P, ""),
                A
                    ? q(d.dynamicChildren, A, P, y, w, Ws(h, R), E)
                    : L || Q(d, h, P, null, y, w, Ws(h, R), E, !1),
                C > 0)
            ) {
                if (C & 16) ee(P, M, H, y, R);
                else if (
                    (C & 2 &&
                        M.class !== H.class &&
                        o(P, "class", null, H.class, R),
                    C & 4 && o(P, "style", M.style, H.style, R),
                    C & 8)
                ) {
                    const ne = h.dynamicProps;
                    for (let ue = 0; ue < ne.length; ue++) {
                        const ie = ne[ue],
                            Ne = M[ie],
                            Ie = H[ie];
                        (Ie !== Ne || ie === "value") && o(P, ie, Ne, Ie, R, y);
                    }
                }
                C & 1 && d.children !== h.children && a(P, h.children);
            } else !L && A == null && ee(P, M, H, y, R);
            ((W = H.onVnodeUpdated) || V) &&
                Me(() => {
                    (W && ot(W, y, h, d), V && Ft(h, d, y, "updated"));
                }, w);
        },
        q = (d, h, y, w, R, E, L) => {
            for (let P = 0; P < h.length; P++) {
                const C = d[P],
                    A = h[P],
                    V =
                        C.el &&
                        (C.type === Ge || !kt(C, A) || C.shapeFlag & 198)
                            ? f(C.el)
                            : y;
                _(C, A, V, null, w, R, E, L, !0);
            }
        },
        ee = (d, h, y, w, R) => {
            if (h !== y) {
                if (h !== ae)
                    for (const E in h)
                        !bn(E) && !(E in y) && o(d, E, h[E], null, R, w);
                for (const E in y) {
                    if (bn(E)) continue;
                    const L = y[E],
                        P = h[E];
                    L !== P && E !== "value" && o(d, E, P, L, R, w);
                }
                "value" in y && o(d, "value", h.value, y.value, R);
            }
        },
        I = (d, h, y, w, R, E, L, P, C) => {
            const A = (h.el = d ? d.el : l("")),
                V = (h.anchor = d ? d.anchor : l(""));
            let { patchFlag: M, dynamicChildren: H, slotScopeIds: W } = h;
            (W && (P = P ? P.concat(W) : W),
                d == null
                    ? (s(A, y, w),
                      s(V, y, w),
                      K(h.children || [], y, V, R, E, L, P, C))
                    : M > 0 && M & 64 && H && d.dynamicChildren
                      ? (q(d.dynamicChildren, H, y, R, E, L, P),
                        (h.key != null || (R && h === R.subTree)) &&
                            Nl(d, h, !0))
                      : Q(d, h, y, V, R, E, L, P, C));
        },
        X = (d, h, y, w, R, E, L, P, C) => {
            ((h.slotScopeIds = P),
                d == null
                    ? h.shapeFlag & 512
                        ? R.ctx.activate(h, y, w, L, C)
                        : le(h, y, w, R, E, L, C)
                    : _e(d, h, C));
        },
        le = (d, h, y, w, R, E, L) => {
            const P = (d.component = Cu(d, w, R));
            if ((xs(d) && (P.ctx.renderer = k), Ou(P, !1, L), P.asyncDep)) {
                if ((R && R.registerDep(P, Y, L), !d.el)) {
                    const C = (P.subTree = Pe(Te));
                    (x(null, C, h, y), (d.placeholder = C.el));
                }
            } else Y(P, d, h, y, R, E, L);
        },
        _e = (d, h, y) => {
            const w = (h.component = d.component);
            if (mu(d, h, y))
                if (w.asyncDep && !w.asyncResolved) {
                    G(w, h, y);
                    return;
                } else ((w.next = h), w.update());
            else ((h.el = d.el), (w.vnode = h));
        },
        Y = (d, h, y, w, R, E, L) => {
            const P = () => {
                if (d.isMounted) {
                    let { next: M, bu: H, u: W, parent: ne, vnode: ue } = d;
                    {
                        const st = Il(d);
                        if (st) {
                            (M && ((M.el = ue.el), G(d, M, L)),
                                st.asyncDep.then(() => {
                                    d.isUnmounted || P();
                                }));
                            return;
                        }
                    }
                    let ie = M,
                        Ne;
                    (Mt(d, !1),
                        M ? ((M.el = ue.el), G(d, M, L)) : (M = ue),
                        H && Qn(H),
                        (Ne = M.props && M.props.onVnodeBeforeUpdate) &&
                            ot(Ne, ne, M, ue),
                        Mt(d, !0));
                    const Ie = Eo(d),
                        nt = d.subTree;
                    ((d.subTree = Ie),
                        _(nt, Ie, f(nt.el), S(nt), d, R, E),
                        (M.el = Ie.el),
                        ie === null && gu(d, Ie.el),
                        W && Me(W, R),
                        (Ne = M.props && M.props.onVnodeUpdated) &&
                            Me(() => ot(Ne, ne, M, ue), R));
                } else {
                    let M;
                    const { el: H, props: W } = h,
                        { bm: ne, m: ue, parent: ie, root: Ne, type: Ie } = d,
                        nt = Sn(h);
                    (Mt(d, !1),
                        ne && Qn(ne),
                        !nt && (M = W && W.onVnodeBeforeMount) && ot(M, ie, h),
                        Mt(d, !0));
                    {
                        Ne.ce &&
                            Ne.ce._def.shadowRoot !== !1 &&
                            Ne.ce._injectChildStyle(Ie);
                        const st = (d.subTree = Eo(d));
                        (_(null, st, y, w, d, R, E), (h.el = st.el));
                    }
                    if ((ue && Me(ue, R), !nt && (M = W && W.onVnodeMounted))) {
                        const st = h;
                        Me(() => ot(M, ie, st), R);
                    }
                    ((h.shapeFlag & 256 ||
                        (ie && Sn(ie.vnode) && ie.vnode.shapeFlag & 256)) &&
                        d.a &&
                        Me(d.a, R),
                        (d.isMounted = !0),
                        (h = y = w = null));
                }
            };
            d.scope.on();
            const C = (d.effect = new Ui(P));
            d.scope.off();
            const A = (d.update = C.run.bind(C)),
                V = (d.job = C.runIfDirty.bind(C));
            ((V.i = d),
                (V.id = d.uid),
                (C.scheduler = () => qr(V)),
                Mt(d, !0),
                A());
        },
        G = (d, h, y) => {
            h.component = d;
            const w = d.vnode.props;
            ((d.vnode = h),
                (d.next = null),
                Ya(d, h.props, w, y),
                nu(d, h.children, y),
                Et(),
                ao(d),
                wt());
        },
        Q = (d, h, y, w, R, E, L, P, C = !1) => {
            const A = d && d.children,
                V = d ? d.shapeFlag : 0,
                M = h.children,
                { patchFlag: H, shapeFlag: W } = h;
            if (H > 0) {
                if (H & 128) {
                    Ze(A, M, y, w, R, E, L, P, C);
                    return;
                } else if (H & 256) {
                    je(A, M, y, w, R, E, L, P, C);
                    return;
                }
            }
            W & 8
                ? (V & 16 && ke(A, R, E), M !== A && a(y, M))
                : V & 16
                  ? W & 16
                      ? Ze(A, M, y, w, R, E, L, P, C)
                      : ke(A, R, E, !0)
                  : (V & 8 && a(y, ""), W & 16 && K(M, y, w, R, E, L, P, C));
        },
        je = (d, h, y, w, R, E, L, P, C) => {
            ((d = d || Zt), (h = h || Zt));
            const A = d.length,
                V = h.length,
                M = Math.min(A, V);
            let H;
            for (H = 0; H < M; H++) {
                const W = (h[H] = C ? Ot(h[H]) : ct(h[H]));
                _(d[H], W, y, null, R, E, L, P, C);
            }
            A > V ? ke(d, R, E, !0, !1, M) : K(h, y, w, R, E, L, P, C, M);
        },
        Ze = (d, h, y, w, R, E, L, P, C) => {
            let A = 0;
            const V = h.length;
            let M = d.length - 1,
                H = V - 1;
            for (; A <= M && A <= H; ) {
                const W = d[A],
                    ne = (h[A] = C ? Ot(h[A]) : ct(h[A]));
                if (kt(W, ne)) _(W, ne, y, null, R, E, L, P, C);
                else break;
                A++;
            }
            for (; A <= M && A <= H; ) {
                const W = d[M],
                    ne = (h[H] = C ? Ot(h[H]) : ct(h[H]));
                if (kt(W, ne)) _(W, ne, y, null, R, E, L, P, C);
                else break;
                (M--, H--);
            }
            if (A > M) {
                if (A <= H) {
                    const W = H + 1,
                        ne = W < V ? h[W].el : w;
                    for (; A <= H; )
                        (_(
                            null,
                            (h[A] = C ? Ot(h[A]) : ct(h[A])),
                            y,
                            ne,
                            R,
                            E,
                            L,
                            P,
                            C,
                        ),
                            A++);
                }
            } else if (A > H) for (; A <= M; ) (pe(d[A], R, E, !0), A++);
            else {
                const W = A,
                    ne = A,
                    ue = new Map();
                for (A = ne; A <= H; A++) {
                    const Fe = (h[A] = C ? Ot(h[A]) : ct(h[A]));
                    Fe.key != null && ue.set(Fe.key, A);
                }
                let ie,
                    Ne = 0;
                const Ie = H - ne + 1;
                let nt = !1,
                    st = 0;
                const fn = new Array(Ie);
                for (A = 0; A < Ie; A++) fn[A] = 0;
                for (A = W; A <= M; A++) {
                    const Fe = d[A];
                    if (Ne >= Ie) {
                        pe(Fe, R, E, !0);
                        continue;
                    }
                    let rt;
                    if (Fe.key != null) rt = ue.get(Fe.key);
                    else
                        for (ie = ne; ie <= H; ie++)
                            if (fn[ie - ne] === 0 && kt(Fe, h[ie])) {
                                rt = ie;
                                break;
                            }
                    rt === void 0
                        ? pe(Fe, R, E, !0)
                        : ((fn[rt - ne] = A + 1),
                          rt >= st ? (st = rt) : (nt = !0),
                          _(Fe, h[rt], y, null, R, E, L, P, C),
                          Ne++);
                }
                const no = nt ? iu(fn) : Zt;
                for (ie = no.length - 1, A = Ie - 1; A >= 0; A--) {
                    const Fe = ne + A,
                        rt = h[Fe],
                        so = h[Fe + 1],
                        ro = Fe + 1 < V ? so.el || so.placeholder : w;
                    fn[A] === 0
                        ? _(null, rt, y, ro, R, E, L, P, C)
                        : nt &&
                          (ie < 0 || A !== no[ie] ? ye(rt, y, ro, 2) : ie--);
                }
            }
        },
        ye = (d, h, y, w, R = null) => {
            const {
                el: E,
                type: L,
                transition: P,
                children: C,
                shapeFlag: A,
            } = d;
            if (A & 6) {
                ye(d.component.subTree, h, y, w);
                return;
            }
            if (A & 128) {
                d.suspense.move(h, y, w);
                return;
            }
            if (A & 64) {
                L.move(d, h, y, k);
                return;
            }
            if (L === Ge) {
                s(E, h, y);
                for (let M = 0; M < C.length; M++) ye(C[M], h, y, w);
                s(d.anchor, h, y);
                return;
            }
            if (L === Zn) {
                N(d, h, y);
                return;
            }
            if (w !== 2 && A & 1 && P)
                if (w === 0)
                    (P.beforeEnter(E), s(E, h, y), Me(() => P.enter(E), R));
                else {
                    const { leave: M, delayLeave: H, afterLeave: W } = P,
                        ne = () => {
                            d.ctx.isUnmounted ? r(E) : s(E, h, y);
                        },
                        ue = () => {
                            (E._isLeaving && E[gt](!0),
                                M(E, () => {
                                    (ne(), W && W());
                                }));
                        };
                    H ? H(E, ne, ue) : ue();
                }
            else s(E, h, y);
        },
        pe = (d, h, y, w = !1, R = !1) => {
            const {
                type: E,
                props: L,
                ref: P,
                children: C,
                dynamicChildren: A,
                shapeFlag: V,
                patchFlag: M,
                dirs: H,
                cacheIndex: W,
            } = d;
            if (
                (M === -2 && (R = !1),
                P != null && (Et(), wn(P, null, y, d, !0), wt()),
                W != null && (h.renderCache[W] = void 0),
                V & 256)
            ) {
                h.ctx.deactivate(d);
                return;
            }
            const ne = V & 1 && H,
                ue = !Sn(d);
            let ie;
            if (
                (ue && (ie = L && L.onVnodeBeforeUnmount) && ot(ie, h, d),
                V & 6)
            )
                tt(d.component, y, w);
            else {
                if (V & 128) {
                    d.suspense.unmount(y, w);
                    return;
                }
                (ne && Ft(d, null, h, "beforeUnmount"),
                    V & 64
                        ? d.type.remove(d, h, y, k, w)
                        : A && !A.hasOnce && (E !== Ge || (M > 0 && M & 64))
                          ? ke(A, h, y, !1, !0)
                          : ((E === Ge && M & 384) || (!R && V & 16)) &&
                            ke(C, h, y),
                    w && et(d));
            }
            ((ue && (ie = L && L.onVnodeUnmounted)) || ne) &&
                Me(() => {
                    (ie && ot(ie, h, d), ne && Ft(d, null, h, "unmounted"));
                }, y);
        },
        et = (d) => {
            const { type: h, el: y, anchor: w, transition: R } = d;
            if (h === Ge) {
                We(y, w);
                return;
            }
            if (h === Zn) {
                O(d);
                return;
            }
            const E = () => {
                (r(y), R && !R.persisted && R.afterLeave && R.afterLeave());
            };
            if (d.shapeFlag & 1 && R && !R.persisted) {
                const { leave: L, delayLeave: P } = R,
                    C = () => L(y, E);
                P ? P(d.el, E, C) : C();
            } else E();
        },
        We = (d, h) => {
            let y;
            for (; d !== h; ) ((y = p(d)), r(d), (d = y));
            r(h);
        },
        tt = (d, h, y) => {
            const {
                bum: w,
                scope: R,
                job: E,
                subTree: L,
                um: P,
                m: C,
                a: A,
            } = d;
            (_o(C),
                _o(A),
                w && Qn(w),
                R.stop(),
                E && ((E.flags |= 8), pe(L, d, h, y)),
                P && Me(P, h),
                Me(() => {
                    d.isUnmounted = !0;
                }, h));
        },
        ke = (d, h, y, w = !1, R = !1, E = 0) => {
            for (let L = E; L < d.length; L++) pe(d[L], h, y, w, R);
        },
        S = (d) => {
            if (d.shapeFlag & 6) return S(d.component.subTree);
            if (d.shapeFlag & 128) return d.suspense.next();
            const h = p(d.anchor || d.el),
                y = h && h[Ca];
            return y ? p(y) : h;
        };
    let U = !1;
    const F = (d, h, y) => {
            (d == null
                ? h._vnode && pe(h._vnode, null, null, !0)
                : _(h._vnode || null, d, h, null, null, null, y),
                (h._vnode = d),
                U || ((U = !0), ao(), nl(), (U = !1)));
        },
        k = {
            p: _,
            um: pe,
            m: ye,
            r: et,
            mt: le,
            mc: K,
            pc: Q,
            pbc: q,
            n: S,
            o: e,
        };
    return { render: F, hydrate: void 0, createApp: Ja(F) };
}
function Ws({ type: e, props: t }, n) {
    return (n === "svg" && e === "foreignObject") ||
        (n === "mathml" &&
            e === "annotation-xml" &&
            t &&
            t.encoding &&
            t.encoding.includes("html"))
        ? void 0
        : n;
}
function Mt({ effect: e, job: t }, n) {
    n ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function ou(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Nl(e, t, n = !1) {
    const s = e.children,
        r = t.children;
    if (j(s) && j(r))
        for (let o = 0; o < s.length; o++) {
            const i = s[o];
            let l = r[o];
            (l.shapeFlag & 1 &&
                !l.dynamicChildren &&
                ((l.patchFlag <= 0 || l.patchFlag === 32) &&
                    ((l = r[o] = Ot(r[o])), (l.el = i.el)),
                !n && l.patchFlag !== -2 && Nl(i, l)),
                l.type === Ts && l.patchFlag !== -1 && (l.el = i.el),
                l.type === Te && !l.el && (l.el = i.el));
        }
}
function iu(e) {
    const t = e.slice(),
        n = [0];
    let s, r, o, i, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const u = e[s];
        if (u !== 0) {
            if (((r = n[n.length - 1]), e[r] < u)) {
                ((t[s] = r), n.push(s));
                continue;
            }
            for (o = 0, i = n.length - 1; o < i; )
                ((l = (o + i) >> 1), e[n[l]] < u ? (o = l + 1) : (i = l));
            u < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0; ) ((n[o] = i), (i = t[i]));
    return n;
}
function Il(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Il(t);
}
function _o(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const lu = Symbol.for("v-scx"),
    cu = () => Je(lu);
function Rn(e, t, n) {
    return Dl(e, t, n);
}
function Dl(e, t, n = ae) {
    const { immediate: s, deep: r, flush: o, once: i } = n,
        l = Ee({}, n),
        c = (t && s) || (!t && o !== "post");
    let u;
    if (Ln) {
        if (o === "sync") {
            const m = cu();
            u = m.__watcherHandles || (m.__watcherHandles = []);
        } else if (!c) {
            const m = () => {};
            return ((m.stop = ut), (m.resume = ut), (m.pause = ut), m);
        }
    }
    const a = Re;
    l.call = (m, g, _) => Xe(m, a, g, _);
    let f = !1;
    (o === "post"
        ? (l.scheduler = (m) => {
              Me(m, a && a.suspense);
          })
        : o !== "sync" &&
          ((f = !0),
          (l.scheduler = (m, g) => {
              g ? m() : qr(m);
          })),
        (l.augmentJob = (m) => {
            (t && (m.flags |= 4),
                f && ((m.flags |= 2), a && ((m.id = a.uid), (m.i = a))));
        }));
    const p = Sa(e, t, l);
    return (Ln && (u ? u.push(p) : c && p()), p);
}
function au(e, t, n) {
    const s = this.proxy,
        r = he(e) ? (e.includes(".") ? Ll(s, e) : () => s[e]) : e.bind(s, s);
    let o;
    z(t) ? (o = t) : ((o = t.handler), (n = t));
    const i = kn(this),
        l = Dl(r, o.bind(s), n);
    return (i(), l);
}
function Ll(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s;
    };
}
const uu = (e, t) =>
    t === "modelValue" || t === "model-value"
        ? e.modelModifiers
        : e[`${t}Modifiers`] ||
          e[`${Ke(t)}Modifiers`] ||
          e[`${zt(t)}Modifiers`];
function fu(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || ae;
    let r = n;
    const o = t.startsWith("update:"),
        i = o && uu(s, t.slice(7));
    i &&
        (i.trim && (r = n.map((a) => (he(a) ? a.trim() : a))),
        i.number && (r = n.map(os)));
    let l,
        c = s[(l = js(t))] || s[(l = js(Ke(t)))];
    (!c && o && (c = s[(l = js(zt(t)))]), c && Xe(c, e, 6, r));
    const u = s[l + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        ((e.emitted[l] = !0), Xe(u, e, 6, r));
    }
}
const du = new WeakMap();
function Fl(e, t, n = !1) {
    const s = n ? du : t.emitsCache,
        r = s.get(e);
    if (r !== void 0) return r;
    const o = e.emits;
    let i = {},
        l = !1;
    if (!z(e)) {
        const c = (u) => {
            const a = Fl(u, t, !0);
            a && ((l = !0), Ee(i, a));
        };
        (!n && t.mixins.length && t.mixins.forEach(c),
            e.extends && c(e.extends),
            e.mixins && e.mixins.forEach(c));
    }
    return !o && !l
        ? (ce(e) && s.set(e, null), null)
        : (j(o) ? o.forEach((c) => (i[c] = null)) : Ee(i, o),
          ce(e) && s.set(e, i),
          i);
}
function Os(e, t) {
    return !e || !_s(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, "")),
          oe(e, t[0].toLowerCase() + t.slice(1)) || oe(e, zt(t)) || oe(e, t));
}
function Eo(e) {
    const {
            type: t,
            vnode: n,
            proxy: s,
            withProxy: r,
            propsOptions: [o],
            slots: i,
            attrs: l,
            emit: c,
            render: u,
            renderCache: a,
            props: f,
            data: p,
            setupState: m,
            ctx: g,
            inheritAttrs: _,
        } = e,
        v = us(e);
    let x, T;
    try {
        if (n.shapeFlag & 4) {
            const O = r || s,
                B = O;
            ((x = ct(u.call(B, O, a, f, m, p, g))), (T = l));
        } else {
            const O = t;
            ((x = ct(
                O.length > 1
                    ? O(f, { attrs: l, slots: i, emit: c })
                    : O(f, null),
            )),
                (T = t.props ? l : hu(l)));
        }
    } catch (O) {
        ((An.length = 0), Rs(O, e, 1), (x = Pe(Te)));
    }
    let N = x;
    if (T && _ !== !1) {
        const O = Object.keys(T),
            { shapeFlag: B } = N;
        O.length &&
            B & 7 &&
            (o && O.some(Tr) && (T = pu(T, o)), (N = Dt(N, T, !1, !0)));
    }
    return (
        n.dirs &&
            ((N = Dt(N, null, !1, !0)),
            (N.dirs = N.dirs ? N.dirs.concat(n.dirs) : n.dirs)),
        n.transition && In(N, n.transition),
        (x = N),
        us(v),
        x
    );
}
const hu = (e) => {
        let t;
        for (const n in e)
            (n === "class" || n === "style" || _s(n)) &&
                ((t || (t = {}))[n] = e[n]);
        return t;
    },
    pu = (e, t) => {
        const n = {};
        for (const s in e) (!Tr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
        return n;
    };
function mu(e, t, n) {
    const { props: s, children: r, component: o } = e,
        { props: i, children: l, patchFlag: c } = t,
        u = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return s ? wo(s, i, u) : !!i;
        if (c & 8) {
            const a = t.dynamicProps;
            for (let f = 0; f < a.length; f++) {
                const p = a[f];
                if (i[p] !== s[p] && !Os(u, p)) return !0;
            }
        }
    } else
        return (r || l) && (!l || !l.$stable)
            ? !0
            : s === i
              ? !1
              : s
                ? i
                    ? wo(s, i, u)
                    : !0
                : !!i;
    return !1;
}
function wo(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const o = s[r];
        if (t[o] !== e[o] && !Os(n, o)) return !0;
    }
    return !1;
}
function gu({ vnode: e, parent: t }, n) {
    for (; t; ) {
        const s = t.subTree;
        if (
            (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
            s === e)
        )
            (((e = t.vnode).el = n), (t = t.parent));
        else break;
    }
}
const Ml = (e) => e.__isSuspense;
function yu(e, t) {
    t && t.pendingBranch
        ? j(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : Aa(e);
}
const Ge = Symbol.for("v-fgt"),
    Ts = Symbol.for("v-txt"),
    Te = Symbol.for("v-cmt"),
    Zn = Symbol.for("v-stc"),
    An = [];
let Be = null;
function Ul(e = !1) {
    An.push((Be = e ? null : []));
}
function bu() {
    (An.pop(), (Be = An[An.length - 1] || null));
}
let Dn = 1;
function hs(e, t = !1) {
    ((Dn += e), e < 0 && Be && t && (Be.hasOnce = !0));
}
function Bl(e) {
    return (
        (e.dynamicChildren = Dn > 0 ? Be || Zt : null),
        bu(),
        Dn > 0 && Be && Be.push(e),
        e
    );
}
function _u(e, t, n, s, r, o) {
    return Bl(Gr(e, t, n, s, r, o, !0));
}
function Eu(e, t, n, s, r) {
    return Bl(Pe(e, t, n, s, r, !0));
}
function ps(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function kt(e, t) {
    return e.type === t.type && e.key === t.key;
}
const jl = ({ key: e }) => e ?? null,
    es = ({ ref: e, ref_key: t, ref_for: n }) => (
        typeof e == "number" && (e = "" + e),
        e != null
            ? he(e) || me(e) || z(e)
                ? { i: Ue, r: e, k: t, f: !!n }
                : e
            : null
    );
function Gr(
    e,
    t = null,
    n = null,
    s = 0,
    r = null,
    o = e === Ge ? 0 : 1,
    i = !1,
    l = !1,
) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && jl(t),
        ref: t && es(t),
        scopeId: rl,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Ue,
    };
    return (
        l
            ? (zr(c, n), o & 128 && e.normalize(c))
            : n && (c.shapeFlag |= he(n) ? 8 : 16),
        Dn > 0 &&
            !i &&
            Be &&
            (c.patchFlag > 0 || o & 6) &&
            c.patchFlag !== 32 &&
            Be.push(c),
        c
    );
}
const Pe = wu;
function wu(e, t = null, n = null, s = 0, r = null, o = !1) {
    if (((!e || e === bl) && (e = Te), ps(e))) {
        const l = Dt(e, t, !0);
        return (
            n && zr(l, n),
            Dn > 0 &&
                !o &&
                Be &&
                (l.shapeFlag & 6 ? (Be[Be.indexOf(e)] = l) : Be.push(l)),
            (l.patchFlag = -2),
            l
        );
    }
    if ((Du(e) && (e = e.__vccOpts), t)) {
        t = Su(t);
        let { class: l, style: c } = t;
        (l && !he(l) && (t.class = Dr(l)),
            ce(c) && (Hr(c) && !j(c) && (c = Ee({}, c)), (t.style = Ir(c))));
    }
    const i = he(e) ? 1 : Ml(e) ? 128 : ol(e) ? 64 : ce(e) ? 4 : z(e) ? 2 : 0;
    return Gr(e, t, n, s, r, i, o, !0);
}
function Su(e) {
    return e ? (Hr(e) || Al(e) ? Ee({}, e) : e) : null;
}
function Dt(e, t, n = !1, s = !1) {
    const { props: r, ref: o, patchFlag: i, children: l, transition: c } = e,
        u = t ? Ru(r || {}, t) : r,
        a = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: u,
            key: u && jl(u),
            ref:
                t && t.ref
                    ? n && o
                        ? j(o)
                            ? o.concat(es(t))
                            : [o, es(t)]
                        : es(t)
                    : o,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== Ge ? (i === -1 ? 16 : i | 16) : i,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Dt(e.ssContent),
            ssFallback: e.ssFallback && Dt(e.ssFallback),
            placeholder: e.placeholder,
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    return (c && s && In(a, c.clone(a)), a);
}
function vu(e = " ", t = 0) {
    return Pe(Ts, null, e, t);
}
function Ep(e, t) {
    const n = Pe(Zn, null, e);
    return ((n.staticCount = t), n);
}
function wp(e = "", t = !1) {
    return t ? (Ul(), Eu(Te, null, e)) : Pe(Te, null, e);
}
function ct(e) {
    return e == null || typeof e == "boolean"
        ? Pe(Te)
        : j(e)
          ? Pe(Ge, null, e.slice())
          : ps(e)
            ? Ot(e)
            : Pe(Ts, null, String(e));
}
function Ot(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Dt(e);
}
function zr(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (j(t)) n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), zr(e, r()), r._c && (r._d = !0));
            return;
        } else {
            n = 32;
            const r = t._;
            !r && !Al(t)
                ? (t._ctx = Ue)
                : r === 3 &&
                  Ue &&
                  (Ue.slots._ === 1
                      ? (t._ = 1)
                      : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        z(t)
            ? ((t = { default: t, _ctx: Ue }), (n = 32))
            : ((t = String(t)), s & 64 ? ((n = 16), (t = [vu(t)])) : (n = 8));
    ((e.children = t), (e.shapeFlag |= n));
}
function Ru(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class")
                t.class !== s.class && (t.class = Dr([t.class, s.class]));
            else if (r === "style") t.style = Ir([t.style, s.style]);
            else if (_s(r)) {
                const o = t[r],
                    i = s[r];
                i &&
                    o !== i &&
                    !(j(o) && o.includes(i)) &&
                    (t[r] = o ? [].concat(o, i) : i);
            } else r !== "" && (t[r] = s[r]);
    }
    return t;
}
function ot(e, t, n, s = null) {
    Xe(e, t, 7, [n, s]);
}
const Au = Sl();
let xu = 0;
function Cu(e, t, n) {
    const s = e.type,
        r = (t ? t.appContext : e.appContext) || Au,
        o = {
            uid: xu++,
            vnode: e,
            type: s,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Li(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Cl(s, r),
            emitsOptions: Fl(s, r),
            emit: null,
            emitted: null,
            propsDefaults: ae,
            inheritAttrs: s.inheritAttrs,
            ctx: ae,
            data: ae,
            props: ae,
            attrs: ae,
            slots: ae,
            refs: ae,
            setupState: ae,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (
        (o.ctx = { _: o }),
        (o.root = t ? t.root : o),
        (o.emit = fu.bind(null, o)),
        e.ce && e.ce(o),
        o
    );
}
let Re = null;
const Jr = () => Re || Ue;
let ms, pr;
{
    const e = Ss(),
        t = (n, s) => {
            let r;
            return (
                (r = e[n]) || (r = e[n] = []),
                r.push(s),
                (o) => {
                    r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
                }
            );
        };
    ((ms = t("__VUE_INSTANCE_SETTERS__", (n) => (Re = n))),
        (pr = t("__VUE_SSR_SETTERS__", (n) => (Ln = n))));
}
const kn = (e) => {
        const t = Re;
        return (
            ms(e),
            e.scope.on(),
            () => {
                (e.scope.off(), ms(t));
            }
        );
    },
    So = () => {
        (Re && Re.scope.off(), ms(null));
    };
function kl(e) {
    return e.vnode.shapeFlag & 4;
}
let Ln = !1;
function Ou(e, t = !1, n = !1) {
    t && pr(t);
    const { props: s, children: r } = e.vnode,
        o = kl(e);
    (Qa(e, s, o, t), tu(e, r, n || t));
    const i = o ? Tu(e, t) : void 0;
    return (t && pr(!1), i);
}
function Tu(e, t) {
    const n = e.type;
    ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Va)));
    const { setup: s } = n;
    if (s) {
        Et();
        const r = (e.setupContext = s.length > 1 ? Nu(e) : null),
            o = kn(e),
            i = jn(s, e, 0, [e.props, r]),
            l = Ci(i);
        if ((wt(), o(), (l || e.sp) && !Sn(e) && dl(e), l)) {
            if ((i.then(So, So), t))
                return i
                    .then((c) => {
                        vo(e, c);
                    })
                    .catch((c) => {
                        Rs(c, e, 0);
                    });
            e.asyncDep = i;
        } else vo(e, i);
    } else Hl(e);
}
function vo(e, t, n) {
    (z(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : ce(t) && (e.setupState = Zi(t)),
        Hl(e));
}
function Hl(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || ut);
    {
        const r = kn(e);
        Et();
        try {
            $a(e);
        } finally {
            (wt(), r());
        }
    }
}
const Pu = {
    get(e, t) {
        return (ve(e, "get", ""), e[t]);
    },
};
function Nu(e) {
    const t = (n) => {
        e.exposed = n || {};
    };
    return {
        attrs: new Proxy(e.attrs, Pu),
        slots: e.slots,
        emit: e.emit,
        expose: t,
    };
}
function Ps(e) {
    return e.exposed
        ? e.exposeProxy ||
              (e.exposeProxy = new Proxy(Zi(Vr(e.exposed)), {
                  get(t, n) {
                      if (n in t) return t[n];
                      if (n in vn) return vn[n](e);
                  },
                  has(t, n) {
                      return n in t || n in vn;
                  },
              }))
        : e.proxy;
}
function Iu(e, t = !0) {
    return z(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Du(e) {
    return z(e) && "__vccOpts" in e;
}
const Ve = (e, t) => Ea(e, t, Ln);
function Xr(e, t, n) {
    try {
        hs(-1);
        const s = arguments.length;
        return s === 2
            ? ce(t) && !j(t)
                ? ps(t)
                    ? Pe(e, null, [t])
                    : Pe(e, t)
                : Pe(e, null, t)
            : (s > 3
                  ? (n = Array.prototype.slice.call(arguments, 2))
                  : s === 3 && ps(n) && (n = [n]),
              Pe(e, t, n));
    } finally {
        hs(1);
    }
}
const Lu = "3.5.22";
let mr;
const Ro = typeof window < "u" && window.trustedTypes;
if (Ro)
    try {
        mr = Ro.createPolicy("vue", { createHTML: (e) => e });
    } catch {}
const Vl = mr ? (e) => mr.createHTML(e) : (e) => e,
    Fu = "http://www.w3.org/2000/svg",
    Mu = "http://www.w3.org/1998/Math/MathML",
    mt = typeof document < "u" ? document : null,
    Ao = mt && mt.createElement("template"),
    Uu = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, n, s) => {
            const r =
                t === "svg"
                    ? mt.createElementNS(Fu, e)
                    : t === "mathml"
                      ? mt.createElementNS(Mu, e)
                      : n
                        ? mt.createElement(e, { is: n })
                        : mt.createElement(e);
            return (
                e === "select" &&
                    s &&
                    s.multiple != null &&
                    r.setAttribute("multiple", s.multiple),
                r
            );
        },
        createText: (e) => mt.createTextNode(e),
        createComment: (e) => mt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => mt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "");
        },
        insertStaticContent(e, t, n, s, r, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (r && (r === o || r.nextSibling))
                for (
                    ;
                    t.insertBefore(r.cloneNode(!0), n),
                        !(r === o || !(r = r.nextSibling));
                );
            else {
                Ao.innerHTML = Vl(
                    s === "svg"
                        ? `<svg>${e}</svg>`
                        : s === "mathml"
                          ? `<math>${e}</math>`
                          : e,
                );
                const l = Ao.content;
                if (s === "svg" || s === "mathml") {
                    const c = l.firstChild;
                    for (; c.firstChild; ) l.appendChild(c.firstChild);
                    l.removeChild(c);
                }
                t.insertBefore(l, n);
            }
            return [
                i ? i.nextSibling : t.firstChild,
                n ? n.previousSibling : t.lastChild,
            ];
        },
    },
    vt = "transition",
    hn = "animation",
    Fn = Symbol("_vtc"),
    $l = {
        name: String,
        type: String,
        css: { type: Boolean, default: !0 },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String,
    },
    Bu = Ee({}, il, $l),
    ju = (e) => ((e.displayName = "Transition"), (e.props = Bu), e),
    Sp = ju((e, { slots: t }) => Xr(Pa, ku(e), t)),
    Ut = (e, t = []) => {
        j(e) ? e.forEach((n) => n(...t)) : e && e(...t);
    },
    xo = (e) => (e ? (j(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function ku(e) {
    const t = {};
    for (const I in e) I in $l || (t[I] = e[I]);
    if (e.css === !1) return t;
    const {
            name: n = "v",
            type: s,
            duration: r,
            enterFromClass: o = `${n}-enter-from`,
            enterActiveClass: i = `${n}-enter-active`,
            enterToClass: l = `${n}-enter-to`,
            appearFromClass: c = o,
            appearActiveClass: u = i,
            appearToClass: a = l,
            leaveFromClass: f = `${n}-leave-from`,
            leaveActiveClass: p = `${n}-leave-active`,
            leaveToClass: m = `${n}-leave-to`,
        } = e,
        g = Hu(r),
        _ = g && g[0],
        v = g && g[1],
        {
            onBeforeEnter: x,
            onEnter: T,
            onEnterCancelled: N,
            onLeave: O,
            onLeaveCancelled: B,
            onBeforeAppear: Z = x,
            onAppear: $ = T,
            onAppearCancelled: K = N,
        } = t,
        D = (I, X, le, _e) => {
            ((I._enterCancelled = _e),
                Bt(I, X ? a : l),
                Bt(I, X ? u : i),
                le && le());
        },
        q = (I, X) => {
            ((I._isLeaving = !1), Bt(I, f), Bt(I, m), Bt(I, p), X && X());
        },
        ee = (I) => (X, le) => {
            const _e = I ? $ : T,
                Y = () => D(X, I, le);
            (Ut(_e, [X, Y]),
                Co(() => {
                    (Bt(X, I ? c : o),
                        ht(X, I ? a : l),
                        xo(_e) || Oo(X, s, _, Y));
                }));
        };
    return Ee(t, {
        onBeforeEnter(I) {
            (Ut(x, [I]), ht(I, o), ht(I, i));
        },
        onBeforeAppear(I) {
            (Ut(Z, [I]), ht(I, c), ht(I, u));
        },
        onEnter: ee(!1),
        onAppear: ee(!0),
        onLeave(I, X) {
            I._isLeaving = !0;
            const le = () => q(I, X);
            (ht(I, f),
                I._enterCancelled ? (ht(I, p), No(I)) : (No(I), ht(I, p)),
                Co(() => {
                    I._isLeaving &&
                        (Bt(I, f), ht(I, m), xo(O) || Oo(I, s, v, le));
                }),
                Ut(O, [I, le]));
        },
        onEnterCancelled(I) {
            (D(I, !1, void 0, !0), Ut(N, [I]));
        },
        onAppearCancelled(I) {
            (D(I, !0, void 0, !0), Ut(K, [I]));
        },
        onLeaveCancelled(I) {
            (q(I), Ut(B, [I]));
        },
    });
}
function Hu(e) {
    if (e == null) return null;
    if (ce(e)) return [Gs(e.enter), Gs(e.leave)];
    {
        const t = Gs(e);
        return [t, t];
    }
}
function Gs(e) {
    return Bc(e);
}
function ht(e, t) {
    (t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
        (e[Fn] || (e[Fn] = new Set())).add(t));
}
function Bt(e, t) {
    t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
    const n = e[Fn];
    n && (n.delete(t), n.size || (e[Fn] = void 0));
}
function Co(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e);
    });
}
let Vu = 0;
function Oo(e, t, n, s) {
    const r = (e._endId = ++Vu),
        o = () => {
            r === e._endId && s();
        };
    if (n != null) return setTimeout(o, n);
    const { type: i, timeout: l, propCount: c } = $u(e, t);
    if (!i) return s();
    const u = i + "end";
    let a = 0;
    const f = () => {
            (e.removeEventListener(u, p), o());
        },
        p = (m) => {
            m.target === e && ++a >= c && f();
        };
    (setTimeout(() => {
        a < c && f();
    }, l + 1),
        e.addEventListener(u, p));
}
function $u(e, t) {
    const n = window.getComputedStyle(e),
        s = (g) => (n[g] || "").split(", "),
        r = s(`${vt}Delay`),
        o = s(`${vt}Duration`),
        i = To(r, o),
        l = s(`${hn}Delay`),
        c = s(`${hn}Duration`),
        u = To(l, c);
    let a = null,
        f = 0,
        p = 0;
    t === vt
        ? i > 0 && ((a = vt), (f = i), (p = o.length))
        : t === hn
          ? u > 0 && ((a = hn), (f = u), (p = c.length))
          : ((f = Math.max(i, u)),
            (a = f > 0 ? (i > u ? vt : hn) : null),
            (p = a ? (a === vt ? o.length : c.length) : 0));
    const m =
        a === vt &&
        /\b(?:transform|all)(?:,|$)/.test(s(`${vt}Property`).toString());
    return { type: a, timeout: f, propCount: p, hasTransform: m };
}
function To(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, s) => Po(n) + Po(e[s])));
}
function Po(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function No(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight;
}
function qu(e, t, n) {
    const s = e[Fn];
    (s && (t = (t ? [t, ...s] : [...s]).join(" ")),
        t == null
            ? e.removeAttribute("class")
            : n
              ? e.setAttribute("class", t)
              : (e.className = t));
}
const gs = Symbol("_vod"),
    ql = Symbol("_vsh"),
    vp = {
        name: "show",
        beforeMount(e, { value: t }, { transition: n }) {
            ((e[gs] = e.style.display === "none" ? "" : e.style.display),
                n && t ? n.beforeEnter(e) : pn(e, t));
        },
        mounted(e, { value: t }, { transition: n }) {
            n && t && n.enter(e);
        },
        updated(e, { value: t, oldValue: n }, { transition: s }) {
            !t != !n &&
                (s
                    ? t
                        ? (s.beforeEnter(e), pn(e, !0), s.enter(e))
                        : s.leave(e, () => {
                              pn(e, !1);
                          })
                    : pn(e, t));
        },
        beforeUnmount(e, { value: t }) {
            pn(e, t);
        },
    };
function pn(e, t) {
    ((e.style.display = t ? e[gs] : "none"), (e[ql] = !t));
}
const Ku = Symbol(""),
    Wu = /(?:^|;)\s*display\s*:/;
function Gu(e, t, n) {
    const s = e.style,
        r = he(n);
    let o = !1;
    if (n && !r) {
        if (t)
            if (he(t))
                for (const i of t.split(";")) {
                    const l = i.slice(0, i.indexOf(":")).trim();
                    n[l] == null && ts(s, l, "");
                }
            else for (const i in t) n[i] == null && ts(s, i, "");
        for (const i in n) (i === "display" && (o = !0), ts(s, i, n[i]));
    } else if (r) {
        if (t !== n) {
            const i = s[Ku];
            (i && (n += ";" + i), (s.cssText = n), (o = Wu.test(n)));
        }
    } else t && e.removeAttribute("style");
    gs in e && ((e[gs] = o ? s.display : ""), e[ql] && (s.display = "none"));
}
const Io = /\s*!important$/;
function ts(e, t, n) {
    if (j(n)) n.forEach((s) => ts(e, t, s));
    else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
    else {
        const s = zu(e, t);
        Io.test(n)
            ? e.setProperty(zt(s), n.replace(Io, ""), "important")
            : (e[s] = n);
    }
}
const Do = ["Webkit", "Moz", "ms"],
    zs = {};
function zu(e, t) {
    const n = zs[t];
    if (n) return n;
    let s = Ke(t);
    if (s !== "filter" && s in e) return (zs[t] = s);
    s = ws(s);
    for (let r = 0; r < Do.length; r++) {
        const o = Do[r] + s;
        if (o in e) return (zs[t] = o);
    }
    return t;
}
const Lo = "http://www.w3.org/1999/xlink";
function Fo(e, t, n, s, r, o = qc(t)) {
    s && t.startsWith("xlink:")
        ? n == null
            ? e.removeAttributeNS(Lo, t.slice(6, t.length))
            : e.setAttributeNS(Lo, t, n)
        : n == null || (o && !Ni(n))
          ? e.removeAttribute(t)
          : e.setAttribute(t, o ? "" : ft(n) ? String(n) : n);
}
function Mo(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Vl(n) : n);
        return;
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = n == null ? (e.type === "checkbox" ? "on" : "") : String(n);
        ((l !== c || !("_value" in e)) && (e.value = c),
            n == null && e.removeAttribute(t),
            (e._value = n));
        return;
    }
    let i = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean"
            ? (n = Ni(n))
            : n == null && l === "string"
              ? ((n = ""), (i = !0))
              : l === "number" && ((n = 0), (i = !0));
    }
    try {
        e[t] = n;
    } catch {}
    i && e.removeAttribute(r || t);
}
function _t(e, t, n, s) {
    e.addEventListener(t, n, s);
}
function Ju(e, t, n, s) {
    e.removeEventListener(t, n, s);
}
const Uo = Symbol("_vei");
function Xu(e, t, n, s, r = null) {
    const o = e[Uo] || (e[Uo] = {}),
        i = o[t];
    if (s && i) i.value = s;
    else {
        const [l, c] = Qu(t);
        if (s) {
            const u = (o[t] = ef(s, r));
            _t(e, l, u, c);
        } else i && (Ju(e, l, i, c), (o[t] = void 0));
    }
}
const Bo = /(?:Once|Passive|Capture)$/;
function Qu(e) {
    let t;
    if (Bo.test(e)) {
        t = {};
        let s;
        for (; (s = e.match(Bo)); )
            ((e = e.slice(0, e.length - s[0].length)),
                (t[s[0].toLowerCase()] = !0));
    }
    return [e[2] === ":" ? e.slice(3) : zt(e.slice(2)), t];
}
let Js = 0;
const Yu = Promise.resolve(),
    Zu = () => Js || (Yu.then(() => (Js = 0)), (Js = Date.now()));
function ef(e, t) {
    const n = (s) => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        Xe(tf(s, n.value), t, 5, [s]);
    };
    return ((n.value = e), (n.attached = Zu()), n);
}
function tf(e, t) {
    if (j(t)) {
        const n = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                (n.call(e), (e._stopped = !0));
            }),
            t.map((s) => (r) => !r._stopped && s && s(r))
        );
    } else return t;
}
const jo = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) > 96 &&
        e.charCodeAt(2) < 123,
    nf = (e, t, n, s, r, o) => {
        const i = r === "svg";
        t === "class"
            ? qu(e, s, i)
            : t === "style"
              ? Gu(e, n, s)
              : _s(t)
                ? Tr(t) || Xu(e, t, n, s, o)
                : (
                        t[0] === "."
                            ? ((t = t.slice(1)), !0)
                            : t[0] === "^"
                              ? ((t = t.slice(1)), !1)
                              : sf(e, t, s, i)
                    )
                  ? (Mo(e, t, s),
                    !e.tagName.includes("-") &&
                        (t === "value" ||
                            t === "checked" ||
                            t === "selected") &&
                        Fo(e, t, s, i, o, t !== "value"))
                  : e._isVueCE && (/[A-Z]/.test(t) || !he(s))
                    ? Mo(e, Ke(t), s, o, t)
                    : (t === "true-value"
                          ? (e._trueValue = s)
                          : t === "false-value" && (e._falseValue = s),
                      Fo(e, t, s, i));
    };
function sf(e, t, n, s) {
    if (s)
        return !!(
            t === "innerHTML" ||
            t === "textContent" ||
            (t in e && jo(t) && z(n))
        );
    if (
        t === "spellcheck" ||
        t === "draggable" ||
        t === "translate" ||
        t === "autocorrect" ||
        t === "form" ||
        (t === "list" && e.tagName === "INPUT") ||
        (t === "type" && e.tagName === "TEXTAREA")
    )
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1;
    }
    return jo(t) && he(n) ? !1 : t in e;
}
const Lt = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return j(t) ? (n) => Qn(t, n) : t;
};
function rf(e) {
    e.target.composing = !0;
}
function ko(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const qe = Symbol("_assign"),
    Ho = {
        created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
            e[qe] = Lt(r);
            const o = s || (r.props && r.props.type === "number");
            (_t(e, t ? "change" : "input", (i) => {
                if (i.target.composing) return;
                let l = e.value;
                (n && (l = l.trim()), o && (l = os(l)), e[qe](l));
            }),
                n &&
                    _t(e, "change", () => {
                        e.value = e.value.trim();
                    }),
                t ||
                    (_t(e, "compositionstart", rf),
                    _t(e, "compositionend", ko),
                    _t(e, "change", ko)));
        },
        mounted(e, { value: t }) {
            e.value = t ?? "";
        },
        beforeUpdate(
            e,
            {
                value: t,
                oldValue: n,
                modifiers: { lazy: s, trim: r, number: o },
            },
            i,
        ) {
            if (((e[qe] = Lt(i)), e.composing)) return;
            const l =
                    (o || e.type === "number") && !/^0\d/.test(e.value)
                        ? os(e.value)
                        : e.value,
                c = t ?? "";
            l !== c &&
                ((document.activeElement === e &&
                    e.type !== "range" &&
                    ((s && t === n) || (r && e.value.trim() === c))) ||
                    (e.value = c));
        },
    },
    of = {
        deep: !0,
        created(e, t, n) {
            ((e[qe] = Lt(n)),
                _t(e, "change", () => {
                    const s = e._modelValue,
                        r = sn(e),
                        o = e.checked,
                        i = e[qe];
                    if (j(s)) {
                        const l = Lr(s, r),
                            c = l !== -1;
                        if (o && !c) i(s.concat(r));
                        else if (!o && c) {
                            const u = [...s];
                            (u.splice(l, 1), i(u));
                        }
                    } else if (cn(s)) {
                        const l = new Set(s);
                        (o ? l.add(r) : l.delete(r), i(l));
                    } else i(Kl(e, o));
                }));
        },
        mounted: Vo,
        beforeUpdate(e, t, n) {
            ((e[qe] = Lt(n)), Vo(e, t, n));
        },
    };
function Vo(e, { value: t, oldValue: n }, s) {
    e._modelValue = t;
    let r;
    if (j(t)) r = Lr(t, s.props.value) > -1;
    else if (cn(t)) r = t.has(s.props.value);
    else {
        if (t === n) return;
        r = Wt(t, Kl(e, !0));
    }
    e.checked !== r && (e.checked = r);
}
const lf = {
        created(e, { value: t }, n) {
            ((e.checked = Wt(t, n.props.value)),
                (e[qe] = Lt(n)),
                _t(e, "change", () => {
                    e[qe](sn(e));
                }));
        },
        beforeUpdate(e, { value: t, oldValue: n }, s) {
            ((e[qe] = Lt(s)), t !== n && (e.checked = Wt(t, s.props.value)));
        },
    },
    cf = {
        deep: !0,
        created(e, { value: t, modifiers: { number: n } }, s) {
            const r = cn(t);
            (_t(e, "change", () => {
                const o = Array.prototype.filter
                    .call(e.options, (i) => i.selected)
                    .map((i) => (n ? os(sn(i)) : sn(i)));
                (e[qe](e.multiple ? (r ? new Set(o) : o) : o[0]),
                    (e._assigning = !0),
                    As(() => {
                        e._assigning = !1;
                    }));
            }),
                (e[qe] = Lt(s)));
        },
        mounted(e, { value: t }) {
            $o(e, t);
        },
        beforeUpdate(e, t, n) {
            e[qe] = Lt(n);
        },
        updated(e, { value: t }) {
            e._assigning || $o(e, t);
        },
    };
function $o(e, t) {
    const n = e.multiple,
        s = j(t);
    if (!(n && !s && !cn(t))) {
        for (let r = 0, o = e.options.length; r < o; r++) {
            const i = e.options[r],
                l = sn(i);
            if (n)
                if (s) {
                    const c = typeof l;
                    c === "string" || c === "number"
                        ? (i.selected = t.some((u) => String(u) === String(l)))
                        : (i.selected = Lr(t, l) > -1);
                } else i.selected = t.has(l);
            else if (Wt(sn(i), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return;
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
    }
}
function sn(e) {
    return "_value" in e ? e._value : e.value;
}
function Kl(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
}
const Rp = {
    created(e, t, n) {
        Jn(e, t, n, null, "created");
    },
    mounted(e, t, n) {
        Jn(e, t, n, null, "mounted");
    },
    beforeUpdate(e, t, n, s) {
        Jn(e, t, n, s, "beforeUpdate");
    },
    updated(e, t, n, s) {
        Jn(e, t, n, s, "updated");
    },
};
function af(e, t) {
    switch (e) {
        case "SELECT":
            return cf;
        case "TEXTAREA":
            return Ho;
        default:
            switch (t) {
                case "checkbox":
                    return of;
                case "radio":
                    return lf;
                default:
                    return Ho;
            }
    }
}
function Jn(e, t, n, s, r) {
    const i = af(e.tagName, n.props && n.props.type)[r];
    i && i(e, t, n, s);
}
const uf = ["ctrl", "shift", "alt", "meta"],
    ff = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => "button" in e && e.button !== 0,
        middle: (e) => "button" in e && e.button !== 1,
        right: (e) => "button" in e && e.button !== 2,
        exact: (e, t) => uf.some((n) => e[`${n}Key`] && !t.includes(n)),
    },
    Ap = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            s = t.join(".");
        return (
            n[s] ||
            (n[s] = (r, ...o) => {
                for (let i = 0; i < t.length; i++) {
                    const l = ff[t[i]];
                    if (l && l(r, t)) return;
                }
                return e(r, ...o);
            })
        );
    },
    df = Ee({ patchProp: nf }, Uu);
let qo;
function hf() {
    return qo || (qo = su(df));
}
const pf = (...e) => {
    const t = hf().createApp(...e),
        { mount: n } = t;
    return (
        (t.mount = (s) => {
            const r = gf(s);
            if (!r) return;
            const o = t._component;
            (!z(o) && !o.render && !o.template && (o.template = r.innerHTML),
                r.nodeType === 1 && (r.textContent = ""));
            const i = n(r, !1, mf(r));
            return (
                r instanceof Element &&
                    (r.removeAttribute("v-cloak"),
                    r.setAttribute("data-v-app", "")),
                i
            );
        }),
        t
    );
};
function mf(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml";
}
function gf(e) {
    return he(e) ? document.querySelector(e) : e;
}
let Wl;
const Ns = (e) => (Wl = e),
    Gl = Symbol();
function gr(e) {
    return (
        e &&
        typeof e == "object" &&
        Object.prototype.toString.call(e) === "[object Object]" &&
        typeof e.toJSON != "function"
    );
}
var xn;
(function (e) {
    ((e.direct = "direct"),
        (e.patchObject = "patch object"),
        (e.patchFunction = "patch function"));
})(xn || (xn = {}));
function yf() {
    const e = Fi(!0),
        t = e.run(() => $r({}));
    let n = [],
        s = [];
    const r = Vr({
        install(o) {
            (Ns(r),
                (r._a = o),
                o.provide(Gl, r),
                (o.config.globalProperties.$pinia = r),
                s.forEach((i) => n.push(i)),
                (s = []));
        },
        use(o) {
            return (this._a ? n.push(o) : s.push(o), this);
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map(),
        state: t,
    });
    return r;
}
const zl = () => {};
function Ko(e, t, n, s = zl) {
    e.add(t);
    const r = () => {
        e.delete(t) && s();
    };
    return (!n && Mi() && Gc(r), r);
}
function Xt(e, ...t) {
    e.forEach((n) => {
        n(...t);
    });
}
const bf = (e) => e(),
    Wo = Symbol(),
    Xs = Symbol();
function yr(e, t) {
    e instanceof Map && t instanceof Map
        ? t.forEach((n, s) => e.set(s, n))
        : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const s = t[n],
            r = e[n];
        gr(r) && gr(s) && e.hasOwnProperty(n) && !me(s) && !Nt(s)
            ? (e[n] = yr(r, s))
            : (e[n] = s);
    }
    return e;
}
const _f = Symbol();
function Ef(e) {
    return !gr(e) || !Object.prototype.hasOwnProperty.call(e, _f);
}
const { assign: xt } = Object;
function wf(e) {
    return !!(me(e) && e.effect);
}
function Sf(e, t, n, s) {
    const { state: r, actions: o, getters: i } = t,
        l = n.state.value[e];
    let c;
    function u() {
        l || (n.state.value[e] = r ? r() : {});
        const a = ga(n.state.value[e]);
        return xt(
            a,
            o,
            Object.keys(i || {}).reduce(
                (f, p) => (
                    (f[p] = Vr(
                        Ve(() => {
                            Ns(n);
                            const m = n._s.get(e);
                            return i[p].call(m, m);
                        }),
                    )),
                    f
                ),
                {},
            ),
        );
    }
    return ((c = Jl(e, u, t, n, s, !0)), c);
}
function Jl(e, t, n = {}, s, r, o) {
    let i;
    const l = xt({ actions: {} }, n),
        c = { deep: !0 };
    let u,
        a,
        f = new Set(),
        p = new Set(),
        m;
    const g = s.state.value[e];
    (!o && !g && (s.state.value[e] = {}), $r({}));
    let _;
    function v(K) {
        let D;
        ((u = a = !1),
            typeof K == "function"
                ? (K(s.state.value[e]),
                  (D = { type: xn.patchFunction, storeId: e, events: m }))
                : (yr(s.state.value[e], K),
                  (D = {
                      type: xn.patchObject,
                      payload: K,
                      storeId: e,
                      events: m,
                  })));
        const q = (_ = Symbol());
        (As().then(() => {
            _ === q && (u = !0);
        }),
            (a = !0),
            Xt(f, D, s.state.value[e]));
    }
    const x = o
        ? function () {
              const { state: D } = n,
                  q = D ? D() : {};
              this.$patch((ee) => {
                  xt(ee, q);
              });
          }
        : zl;
    function T() {
        (i.stop(), f.clear(), p.clear(), s._s.delete(e));
    }
    const N = (K, D = "") => {
            if (Wo in K) return ((K[Xs] = D), K);
            const q = function () {
                Ns(s);
                const ee = Array.from(arguments),
                    I = new Set(),
                    X = new Set();
                function le(G) {
                    I.add(G);
                }
                function _e(G) {
                    X.add(G);
                }
                Xt(p, {
                    args: ee,
                    name: q[Xs],
                    store: B,
                    after: le,
                    onError: _e,
                });
                let Y;
                try {
                    Y = K.apply(this && this.$id === e ? this : B, ee);
                } catch (G) {
                    throw (Xt(X, G), G);
                }
                return Y instanceof Promise
                    ? Y.then((G) => (Xt(I, G), G)).catch(
                          (G) => (Xt(X, G), Promise.reject(G)),
                      )
                    : (Xt(I, Y), Y);
            };
            return ((q[Wo] = !0), (q[Xs] = D), q);
        },
        O = {
            _p: s,
            $id: e,
            $onAction: Ko.bind(null, p),
            $patch: v,
            $reset: x,
            $subscribe(K, D = {}) {
                const q = Ko(f, K, D.detached, () => ee()),
                    ee = i.run(() =>
                        Rn(
                            () => s.state.value[e],
                            (I) => {
                                (D.flush === "sync" ? a : u) &&
                                    K(
                                        {
                                            storeId: e,
                                            type: xn.direct,
                                            events: m,
                                        },
                                        I,
                                    );
                            },
                            xt({}, c, D),
                        ),
                    );
                return q;
            },
            $dispose: T,
        },
        B = Bn(O);
    s._s.set(e, B);
    const $ = ((s._a && s._a.runWithContext) || bf)(() =>
        s._e.run(() => (i = Fi()).run(() => t({ action: N }))),
    );
    for (const K in $) {
        const D = $[K];
        if ((me(D) && !wf(D)) || Nt(D))
            o ||
                (g && Ef(D) && (me(D) ? (D.value = g[K]) : yr(D, g[K])),
                (s.state.value[e][K] = D));
        else if (typeof D == "function") {
            const q = N(D, K);
            (($[K] = q), (l.actions[K] = D));
        }
    }
    return (
        xt(B, $),
        xt(se(B), $),
        Object.defineProperty(B, "$state", {
            get: () => s.state.value[e],
            set: (K) => {
                v((D) => {
                    xt(D, K);
                });
            },
        }),
        s._p.forEach((K) => {
            xt(
                B,
                i.run(() => K({ store: B, app: s._a, pinia: s, options: l })),
            );
        }),
        g && o && n.hydrate && n.hydrate(B.$state, g),
        (u = !0),
        (a = !0),
        B
    );
}
function vf(e, t, n) {
    let s;
    const r = typeof t == "function";
    s = r ? n : t;
    function o(i, l) {
        const c = Xa();
        return (
            (i = i || (c ? Je(Gl, null) : null)),
            i && Ns(i),
            (i = Wl),
            i._s.has(e) || (r ? Jl(e, t, s, i) : Sf(e, s, i)),
            i._s.get(e)
        );
    }
    return ((o.$id = e), o);
}
function xp(e, t) {
    return Array.isArray(t)
        ? t.reduce(
              (n, s) => (
                  (n[s] = function () {
                      return e(this.$pinia)[s];
                  }),
                  n
              ),
              {},
          )
        : Object.keys(t).reduce(
              (n, s) => (
                  (n[s] = function () {
                      const r = e(this.$pinia),
                          o = t[s];
                      return typeof o == "function" ? o.call(this, r) : r[o];
                  }),
                  n
              ),
              {},
          );
}
function Cp(e, t) {
    return Array.isArray(t)
        ? t.reduce(
              (n, s) => (
                  (n[s] = function (...r) {
                      return e(this.$pinia)[s](...r);
                  }),
                  n
              ),
              {},
          )
        : Object.keys(t).reduce(
              (n, s) => (
                  (n[s] = function (...r) {
                      return e(this.$pinia)[t[s]](...r);
                  }),
                  n
              ),
              {},
          );
}
function Op(e, t) {
    return Array.isArray(t)
        ? t.reduce(
              (n, s) => (
                  (n[s] = {
                      get() {
                          return e(this.$pinia)[s];
                      },
                      set(r) {
                          return (e(this.$pinia)[s] = r);
                      },
                  }),
                  n
              ),
              {},
          )
        : Object.keys(t).reduce(
              (n, s) => (
                  (n[s] = {
                      get() {
                          return e(this.$pinia)[t[s]];
                      },
                      set(r) {
                          return (e(this.$pinia)[t[s]] = r);
                      },
                  }),
                  n
              ),
              {},
          );
}
const Yt = typeof document < "u";
function Xl(e) {
    return (
        typeof e == "object" ||
        "displayName" in e ||
        "props" in e ||
        "__vccOpts" in e
    );
}
function Rf(e) {
    return (
        e.__esModule ||
        e[Symbol.toStringTag] === "Module" ||
        (e.default && Xl(e.default))
    );
}
const re = Object.assign;
function Qs(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = Qe(r) ? r.map(e) : e(r);
    }
    return n;
}
const Cn = () => {},
    Qe = Array.isArray;
function Go(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n;
}
const Ql = /#/g,
    Af = /&/g,
    xf = /\//g,
    Cf = /=/g,
    Of = /\?/g,
    Yl = /\+/g,
    Tf = /%5B/g,
    Pf = /%5D/g,
    Zl = /%5E/g,
    Nf = /%60/g,
    ec = /%7B/g,
    If = /%7C/g,
    tc = /%7D/g,
    Df = /%20/g;
function Qr(e) {
    return e == null
        ? ""
        : encodeURI("" + e)
              .replace(If, "|")
              .replace(Tf, "[")
              .replace(Pf, "]");
}
function Lf(e) {
    return Qr(e).replace(ec, "{").replace(tc, "}").replace(Zl, "^");
}
function br(e) {
    return Qr(e)
        .replace(Yl, "%2B")
        .replace(Df, "+")
        .replace(Ql, "%23")
        .replace(Af, "%26")
        .replace(Nf, "`")
        .replace(ec, "{")
        .replace(tc, "}")
        .replace(Zl, "^");
}
function Ff(e) {
    return br(e).replace(Cf, "%3D");
}
function Mf(e) {
    return Qr(e).replace(Ql, "%23").replace(Of, "%3F");
}
function Uf(e) {
    return Mf(e).replace(xf, "%2F");
}
function Mn(e) {
    if (e == null) return null;
    try {
        return decodeURIComponent("" + e);
    } catch {}
    return "" + e;
}
const Bf = /\/$/,
    jf = (e) => e.replace(Bf, "");
function Ys(e, t, n = "/") {
    let s,
        r = {},
        o = "",
        i = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return (
        (c = l >= 0 && c > l ? -1 : c),
        c >= 0 &&
            ((s = t.slice(0, c)),
            (o = t.slice(c, l > 0 ? l : t.length)),
            (r = e(o))),
        l >= 0 && ((s = s || t.slice(0, l)), (i = t.slice(l, t.length))),
        (s = $f(s ?? t, n)),
        { fullPath: s + o + i, path: s, query: r, hash: Mn(i) }
    );
}
function kf(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
}
function zo(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase())
        ? e
        : e.slice(t.length) || "/";
}
function Hf(e, t, n) {
    const s = t.matched.length - 1,
        r = n.matched.length - 1;
    return (
        s > -1 &&
        s === r &&
        rn(t.matched[s], n.matched[r]) &&
        nc(t.params, n.params) &&
        e(t.query) === e(n.query) &&
        t.hash === n.hash
    );
}
function rn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
}
function nc(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e) if (!Vf(e[n], t[n])) return !1;
    return !0;
}
function Vf(e, t) {
    return Qe(e) ? Jo(e, t) : Qe(t) ? Jo(t, e) : e === t;
}
function Jo(e, t) {
    return Qe(t)
        ? e.length === t.length && e.every((n, s) => n === t[s])
        : e.length === 1 && e[0] === t;
}
function $f(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        s = e.split("/"),
        r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let o = n.length - 1,
        i,
        l;
    for (i = 0; i < s.length; i++)
        if (((l = s[i]), l !== "."))
            if (l === "..") o > 1 && o--;
            else break;
    return n.slice(0, o).join("/") + "/" + s.slice(i).join("/");
}
const Rt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
};
let _r = (function (e) {
        return ((e.pop = "pop"), (e.push = "push"), e);
    })({}),
    Zs = (function (e) {
        return (
            (e.back = "back"),
            (e.forward = "forward"),
            (e.unknown = ""),
            e
        );
    })({});
function qf(e) {
    if (!e)
        if (Yt) {
            const t = document.querySelector("base");
            ((e = (t && t.getAttribute("href")) || "/"),
                (e = e.replace(/^\w+:\/\/[^\/]+/, "")));
        } else e = "/";
    return (e[0] !== "/" && e[0] !== "#" && (e = "/" + e), jf(e));
}
const Kf = /^[^#]+#/;
function Wf(e, t) {
    return e.replace(Kf, "#") + t;
}
function Gf(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        s = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: s.left - n.left - (t.left || 0),
        top: s.top - n.top - (t.top || 0),
    };
}
const Is = () => ({ left: window.scrollX, top: window.scrollY });
function zf(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            s = typeof n == "string" && n.startsWith("#"),
            r =
                typeof n == "string"
                    ? s
                        ? document.getElementById(n.slice(1))
                        : document.querySelector(n)
                    : n;
        if (!r) return;
        t = Gf(r, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style
        ? window.scrollTo(t)
        : window.scrollTo(
              t.left != null ? t.left : window.scrollX,
              t.top != null ? t.top : window.scrollY,
          );
}
function Xo(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
}
const Er = new Map();
function Jf(e, t) {
    Er.set(e, t);
}
function Xf(e) {
    const t = Er.get(e);
    return (Er.delete(e), t);
}
function Qf(e) {
    return typeof e == "string" || (e && typeof e == "object");
}
function sc(e) {
    return typeof e == "string" || typeof e == "symbol";
}
let de = (function (e) {
    return (
        (e[(e.MATCHER_NOT_FOUND = 1)] = "MATCHER_NOT_FOUND"),
        (e[(e.NAVIGATION_GUARD_REDIRECT = 2)] = "NAVIGATION_GUARD_REDIRECT"),
        (e[(e.NAVIGATION_ABORTED = 4)] = "NAVIGATION_ABORTED"),
        (e[(e.NAVIGATION_CANCELLED = 8)] = "NAVIGATION_CANCELLED"),
        (e[(e.NAVIGATION_DUPLICATED = 16)] = "NAVIGATION_DUPLICATED"),
        e
    );
})({});
const rc = Symbol("");
(de.MATCHER_NOT_FOUND + "",
    de.NAVIGATION_GUARD_REDIRECT + "",
    de.NAVIGATION_ABORTED + "",
    de.NAVIGATION_CANCELLED + "",
    de.NAVIGATION_DUPLICATED + "");
function on(e, t) {
    return re(new Error(), { type: e, [rc]: !0 }, t);
}
function pt(e, t) {
    return e instanceof Error && rc in e && (t == null || !!(e.type & t));
}
const Yf = ["params", "query", "hash"];
function Zf(e) {
    if (typeof e == "string") return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const n of Yf) n in e && (t[n] = e[n]);
    return JSON.stringify(t, null, 2);
}
function ed(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const n = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < n.length; ++s) {
        const r = n[s].replace(Yl, " "),
            o = r.indexOf("="),
            i = Mn(o < 0 ? r : r.slice(0, o)),
            l = o < 0 ? null : Mn(r.slice(o + 1));
        if (i in t) {
            let c = t[i];
            (Qe(c) || (c = t[i] = [c]), c.push(l));
        } else t[i] = l;
    }
    return t;
}
function Qo(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (((n = Ff(n)), s == null)) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue;
        }
        (Qe(s) ? s.map((r) => r && br(r)) : [s && br(s)]).forEach((r) => {
            r !== void 0 &&
                ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
        });
    }
    return t;
}
function td(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 &&
            (t[n] = Qe(s)
                ? s.map((r) => (r == null ? null : "" + r))
                : s == null
                  ? s
                  : "" + s);
    }
    return t;
}
const nd = Symbol(""),
    Yo = Symbol(""),
    Ds = Symbol(""),
    oc = Symbol(""),
    wr = Symbol("");
function mn() {
    let e = [];
    function t(s) {
        return (
            e.push(s),
            () => {
                const r = e.indexOf(s);
                r > -1 && e.splice(r, 1);
            }
        );
    }
    function n() {
        e = [];
    }
    return { add: t, list: () => e.slice(), reset: n };
}
function Tt(e, t, n, s, r, o = (i) => i()) {
    const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () =>
        new Promise((l, c) => {
            const u = (p) => {
                    p === !1
                        ? c(on(de.NAVIGATION_ABORTED, { from: n, to: t }))
                        : p instanceof Error
                          ? c(p)
                          : Qf(p)
                            ? c(
                                  on(de.NAVIGATION_GUARD_REDIRECT, {
                                      from: t,
                                      to: p,
                                  }),
                              )
                            : (i &&
                                  s.enterCallbacks[r] === i &&
                                  typeof p == "function" &&
                                  i.push(p),
                              l());
                },
                a = o(() => e.call(s && s.instances[r], t, n, u));
            let f = Promise.resolve(a);
            (e.length < 3 && (f = f.then(u)), f.catch((p) => c(p)));
        });
}
function er(e, t, n, s, r = (o) => o()) {
    const o = [];
    for (const i of e)
        for (const l in i.components) {
            let c = i.components[l];
            if (!(t !== "beforeRouteEnter" && !i.instances[l]))
                if (Xl(c)) {
                    const u = (c.__vccOpts || c)[t];
                    u && o.push(Tt(u, n, s, i, l, r));
                } else {
                    let u = c();
                    o.push(() =>
                        u.then((a) => {
                            if (!a)
                                throw new Error(
                                    `Couldn't resolve component "${l}" at "${i.path}"`,
                                );
                            const f = Rf(a) ? a.default : a;
                            ((i.mods[l] = a), (i.components[l] = f));
                            const p = (f.__vccOpts || f)[t];
                            return p && Tt(p, n, s, i, l, r)();
                        }),
                    );
                }
        }
    return o;
}
function sd(e, t) {
    const n = [],
        s = [],
        r = [],
        o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const l = t.matched[i];
        l && (e.matched.find((u) => rn(u, l)) ? s.push(l) : n.push(l));
        const c = e.matched[i];
        c && (t.matched.find((u) => rn(u, c)) || r.push(c));
    }
    return [n, s, r];
}
let rd = () => location.protocol + "//" + location.host;
function ic(e, t) {
    const { pathname: n, search: s, hash: r } = t,
        o = e.indexOf("#");
    if (o > -1) {
        let i = r.includes(e.slice(o)) ? e.slice(o).length : 1,
            l = r.slice(i);
        return (l[0] !== "/" && (l = "/" + l), zo(l, ""));
    }
    return zo(n, e) + s + r;
}
function od(e, t, n, s) {
    let r = [],
        o = [],
        i = null;
    const l = ({ state: p }) => {
        const m = ic(e, location),
            g = n.value,
            _ = t.value;
        let v = 0;
        if (p) {
            if (((n.value = m), (t.value = p), i && i === g)) {
                i = null;
                return;
            }
            v = _ ? p.position - _.position : 0;
        } else s(m);
        r.forEach((x) => {
            x(n.value, g, {
                delta: v,
                type: _r.pop,
                direction: v ? (v > 0 ? Zs.forward : Zs.back) : Zs.unknown,
            });
        });
    };
    function c() {
        i = n.value;
    }
    function u(p) {
        r.push(p);
        const m = () => {
            const g = r.indexOf(p);
            g > -1 && r.splice(g, 1);
        };
        return (o.push(m), m);
    }
    function a() {
        if (document.visibilityState === "hidden") {
            const { history: p } = window;
            if (!p.state) return;
            p.replaceState(re({}, p.state, { scroll: Is() }), "");
        }
    }
    function f() {
        for (const p of o) p();
        ((o = []),
            window.removeEventListener("popstate", l),
            window.removeEventListener("pagehide", a),
            document.removeEventListener("visibilitychange", a));
    }
    return (
        window.addEventListener("popstate", l),
        window.addEventListener("pagehide", a),
        document.addEventListener("visibilitychange", a),
        { pauseListeners: c, listen: u, destroy: f }
    );
}
function Zo(e, t, n, s = !1, r = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: r ? Is() : null,
    };
}
function id(e) {
    const { history: t, location: n } = window,
        s = { value: ic(e, n) },
        r = { value: t.state };
    r.value ||
        o(
            s.value,
            {
                back: null,
                current: s.value,
                forward: null,
                position: t.length - 1,
                replaced: !0,
                scroll: null,
            },
            !0,
        );
    function o(c, u, a) {
        const f = e.indexOf("#"),
            p =
                f > -1
                    ? (n.host && document.querySelector("base")
                          ? e
                          : e.slice(f)) + c
                    : rd() + e + c;
        try {
            (t[a ? "replaceState" : "pushState"](u, "", p), (r.value = u));
        } catch (m) {
            (console.error(m), n[a ? "replace" : "assign"](p));
        }
    }
    function i(c, u) {
        (o(
            c,
            re({}, t.state, Zo(r.value.back, c, r.value.forward, !0), u, {
                position: r.value.position,
            }),
            !0,
        ),
            (s.value = c));
    }
    function l(c, u) {
        const a = re({}, r.value, t.state, { forward: c, scroll: Is() });
        (o(a.current, a, !0),
            o(
                c,
                re({}, Zo(s.value, c, null), { position: a.position + 1 }, u),
                !1,
            ),
            (s.value = c));
    }
    return { location: s, state: r, push: l, replace: i };
}
function ld(e) {
    e = qf(e);
    const t = id(e),
        n = od(e, t.state, t.location, t.replace);
    function s(o, i = !0) {
        (i || n.pauseListeners(), history.go(o));
    }
    const r = re(
        { location: "", base: e, go: s, createHref: Wf.bind(null, e) },
        t,
        n,
    );
    return (
        Object.defineProperty(r, "location", {
            enumerable: !0,
            get: () => t.location.value,
        }),
        Object.defineProperty(r, "state", {
            enumerable: !0,
            get: () => t.state.value,
        }),
        r
    );
}
let Ht = (function (e) {
    return (
        (e[(e.Static = 0)] = "Static"),
        (e[(e.Param = 1)] = "Param"),
        (e[(e.Group = 2)] = "Group"),
        e
    );
})({});
var be = (function (e) {
    return (
        (e[(e.Static = 0)] = "Static"),
        (e[(e.Param = 1)] = "Param"),
        (e[(e.ParamRegExp = 2)] = "ParamRegExp"),
        (e[(e.ParamRegExpEnd = 3)] = "ParamRegExpEnd"),
        (e[(e.EscapeNext = 4)] = "EscapeNext"),
        e
    );
})(be || {});
const cd = { type: Ht.Static, value: "" },
    ad = /[a-zA-Z0-9_]/;
function ud(e) {
    if (!e) return [[]];
    if (e === "/") return [[cd]];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${u}": ${m}`);
    }
    let n = be.Static,
        s = n;
    const r = [];
    let o;
    function i() {
        (o && r.push(o), (o = []));
    }
    let l = 0,
        c,
        u = "",
        a = "";
    function f() {
        u &&
            (n === be.Static
                ? o.push({ type: Ht.Static, value: u })
                : n === be.Param ||
                    n === be.ParamRegExp ||
                    n === be.ParamRegExpEnd
                  ? (o.length > 1 &&
                        (c === "*" || c === "+") &&
                        t(
                            `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
                        ),
                    o.push({
                        type: Ht.Param,
                        value: u,
                        regexp: a,
                        repeatable: c === "*" || c === "+",
                        optional: c === "*" || c === "?",
                    }))
                  : t("Invalid state to consume buffer"),
            (u = ""));
    }
    function p() {
        u += c;
    }
    for (; l < e.length; ) {
        if (((c = e[l++]), c === "\\" && n !== be.ParamRegExp)) {
            ((s = n), (n = be.EscapeNext));
            continue;
        }
        switch (n) {
            case be.Static:
                c === "/"
                    ? (u && f(), i())
                    : c === ":"
                      ? (f(), (n = be.Param))
                      : p();
                break;
            case be.EscapeNext:
                (p(), (n = s));
                break;
            case be.Param:
                c === "("
                    ? (n = be.ParamRegExp)
                    : ad.test(c)
                      ? p()
                      : (f(),
                        (n = be.Static),
                        c !== "*" && c !== "?" && c !== "+" && l--);
                break;
            case be.ParamRegExp:
                c === ")"
                    ? a[a.length - 1] == "\\"
                        ? (a = a.slice(0, -1) + c)
                        : (n = be.ParamRegExpEnd)
                    : (a += c);
                break;
            case be.ParamRegExpEnd:
                (f(),
                    (n = be.Static),
                    c !== "*" && c !== "?" && c !== "+" && l--,
                    (a = ""));
                break;
            default:
                t("Unknown state");
                break;
        }
    }
    return (
        n === be.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`),
        f(),
        i(),
        r
    );
}
const ei = "[^/]+?",
    fd = { sensitive: !1, strict: !1, start: !0, end: !0 };
var Ce = (function (e) {
    return (
        (e[(e._multiplier = 10)] = "_multiplier"),
        (e[(e.Root = 90)] = "Root"),
        (e[(e.Segment = 40)] = "Segment"),
        (e[(e.SubSegment = 30)] = "SubSegment"),
        (e[(e.Static = 40)] = "Static"),
        (e[(e.Dynamic = 20)] = "Dynamic"),
        (e[(e.BonusCustomRegExp = 10)] = "BonusCustomRegExp"),
        (e[(e.BonusWildcard = -50)] = "BonusWildcard"),
        (e[(e.BonusRepeatable = -20)] = "BonusRepeatable"),
        (e[(e.BonusOptional = -8)] = "BonusOptional"),
        (e[(e.BonusStrict = 0.7000000000000001)] = "BonusStrict"),
        (e[(e.BonusCaseSensitive = 0.25)] = "BonusCaseSensitive"),
        e
    );
})(Ce || {});
const dd = /[.+*?^${}()[\]/\\]/g;
function hd(e, t) {
    const n = re({}, fd, t),
        s = [];
    let r = n.start ? "^" : "";
    const o = [];
    for (const u of e) {
        const a = u.length ? [] : [Ce.Root];
        n.strict && !u.length && (r += "/");
        for (let f = 0; f < u.length; f++) {
            const p = u[f];
            let m = Ce.Segment + (n.sensitive ? Ce.BonusCaseSensitive : 0);
            if (p.type === Ht.Static)
                (f || (r += "/"),
                    (r += p.value.replace(dd, "\\$&")),
                    (m += Ce.Static));
            else if (p.type === Ht.Param) {
                const { value: g, repeatable: _, optional: v, regexp: x } = p;
                o.push({ name: g, repeatable: _, optional: v });
                const T = x || ei;
                if (T !== ei) {
                    m += Ce.BonusCustomRegExp;
                    try {
                        `${T}`;
                    } catch (O) {
                        throw new Error(
                            `Invalid custom RegExp for param "${g}" (${T}): ` +
                                O.message,
                        );
                    }
                }
                let N = _ ? `((?:${T})(?:/(?:${T}))*)` : `(${T})`;
                (f || (N = v && u.length < 2 ? `(?:/${N})` : "/" + N),
                    v && (N += "?"),
                    (r += N),
                    (m += Ce.Dynamic),
                    v && (m += Ce.BonusOptional),
                    _ && (m += Ce.BonusRepeatable),
                    T === ".*" && (m += Ce.BonusWildcard));
            }
            a.push(m);
        }
        s.push(a);
    }
    if (n.strict && n.end) {
        const u = s.length - 1;
        s[u][s[u].length - 1] += Ce.BonusStrict;
    }
    (n.strict || (r += "/?"),
        n.end ? (r += "$") : n.strict && !r.endsWith("/") && (r += "(?:/|$)"));
    const i = new RegExp(r, n.sensitive ? "" : "i");
    function l(u) {
        const a = u.match(i),
            f = {};
        if (!a) return null;
        for (let p = 1; p < a.length; p++) {
            const m = a[p] || "",
                g = o[p - 1];
            f[g.name] = m && g.repeatable ? m.split("/") : m;
        }
        return f;
    }
    function c(u) {
        let a = "",
            f = !1;
        for (const p of e) {
            ((!f || !a.endsWith("/")) && (a += "/"), (f = !1));
            for (const m of p)
                if (m.type === Ht.Static) a += m.value;
                else if (m.type === Ht.Param) {
                    const { value: g, repeatable: _, optional: v } = m,
                        x = g in u ? u[g] : "";
                    if (Qe(x) && !_)
                        throw new Error(
                            `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`,
                        );
                    const T = Qe(x) ? x.join("/") : x;
                    if (!T)
                        if (v)
                            p.length < 2 &&
                                (a.endsWith("/")
                                    ? (a = a.slice(0, -1))
                                    : (f = !0));
                        else throw new Error(`Missing required param "${g}"`);
                    a += T;
                }
        }
        return a || "/";
    }
    return { re: i, score: s, keys: o, parse: l, stringify: c };
}
function pd(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const s = t[n] - e[n];
        if (s) return s;
        n++;
    }
    return e.length < t.length
        ? e.length === 1 && e[0] === Ce.Static + Ce.Segment
            ? -1
            : 1
        : e.length > t.length
          ? t.length === 1 && t[0] === Ce.Static + Ce.Segment
              ? 1
              : -1
          : 0;
}
function lc(e, t) {
    let n = 0;
    const s = e.score,
        r = t.score;
    for (; n < s.length && n < r.length; ) {
        const o = pd(s[n], r[n]);
        if (o) return o;
        n++;
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (ti(s)) return 1;
        if (ti(r)) return -1;
    }
    return r.length - s.length;
}
function ti(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
}
const md = { strict: !1, end: !0, sensitive: !1 };
function gd(e, t, n) {
    const s = hd(ud(e.path), n),
        r = re(s, { record: e, parent: t, children: [], alias: [] });
    return (
        t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r),
        r
    );
}
function yd(e, t) {
    const n = [],
        s = new Map();
    t = Go(md, t);
    function r(f) {
        return s.get(f);
    }
    function o(f, p, m) {
        const g = !m,
            _ = si(f);
        _.aliasOf = m && m.record;
        const v = Go(t, f),
            x = [_];
        if ("alias" in f) {
            const O = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const B of O)
                x.push(
                    si(
                        re({}, _, {
                            components: m ? m.record.components : _.components,
                            path: B,
                            aliasOf: m ? m.record : _,
                        }),
                    ),
                );
        }
        let T, N;
        for (const O of x) {
            const { path: B } = O;
            if (p && B[0] !== "/") {
                const Z = p.record.path,
                    $ = Z[Z.length - 1] === "/" ? "" : "/";
                O.path = p.record.path + (B && $ + B);
            }
            if (
                ((T = gd(O, p, v)),
                m
                    ? m.alias.push(T)
                    : ((N = N || T),
                      N !== T && N.alias.push(T),
                      g && f.name && !ri(T) && i(f.name)),
                cc(T) && c(T),
                _.children)
            ) {
                const Z = _.children;
                for (let $ = 0; $ < Z.length; $++)
                    o(Z[$], T, m && m.children[$]);
            }
            m = m || T;
        }
        return N
            ? () => {
                  i(N);
              }
            : Cn;
    }
    function i(f) {
        if (sc(f)) {
            const p = s.get(f);
            p &&
                (s.delete(f),
                n.splice(n.indexOf(p), 1),
                p.children.forEach(i),
                p.alias.forEach(i));
        } else {
            const p = n.indexOf(f);
            p > -1 &&
                (n.splice(p, 1),
                f.record.name && s.delete(f.record.name),
                f.children.forEach(i),
                f.alias.forEach(i));
        }
    }
    function l() {
        return n;
    }
    function c(f) {
        const p = Ed(f, n);
        (n.splice(p, 0, f), f.record.name && !ri(f) && s.set(f.record.name, f));
    }
    function u(f, p) {
        let m,
            g = {},
            _,
            v;
        if ("name" in f && f.name) {
            if (((m = s.get(f.name)), !m))
                throw on(de.MATCHER_NOT_FOUND, { location: f });
            ((v = m.record.name),
                (g = re(
                    ni(
                        p.params,
                        m.keys
                            .filter((N) => !N.optional)
                            .concat(
                                m.parent
                                    ? m.parent.keys.filter((N) => N.optional)
                                    : [],
                            )
                            .map((N) => N.name),
                    ),
                    f.params &&
                        ni(
                            f.params,
                            m.keys.map((N) => N.name),
                        ),
                )),
                (_ = m.stringify(g)));
        } else if (f.path != null)
            ((_ = f.path),
                (m = n.find((N) => N.re.test(_))),
                m && ((g = m.parse(_)), (v = m.record.name)));
        else {
            if (
                ((m = p.name
                    ? s.get(p.name)
                    : n.find((N) => N.re.test(p.path))),
                !m)
            )
                throw on(de.MATCHER_NOT_FOUND, {
                    location: f,
                    currentLocation: p,
                });
            ((v = m.record.name),
                (g = re({}, p.params, f.params)),
                (_ = m.stringify(g)));
        }
        const x = [];
        let T = m;
        for (; T; ) (x.unshift(T.record), (T = T.parent));
        return { name: v, path: _, params: g, matched: x, meta: _d(x) };
    }
    e.forEach((f) => o(f));
    function a() {
        ((n.length = 0), s.clear());
    }
    return {
        addRoute: o,
        resolve: u,
        removeRoute: i,
        clearRoutes: a,
        getRoutes: l,
        getRecordMatcher: r,
    };
}
function ni(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n;
}
function si(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: bd(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components:
            "components" in e
                ? e.components || null
                : e.component && { default: e.component },
    };
    return (Object.defineProperty(t, "mods", { value: {} }), t);
}
function bd(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
    return t;
}
function ri(e) {
    for (; e; ) {
        if (e.record.aliasOf) return !0;
        e = e.parent;
    }
    return !1;
}
function _d(e) {
    return e.reduce((t, n) => re(t, n.meta), {});
}
function Ed(e, t) {
    let n = 0,
        s = t.length;
    for (; n !== s; ) {
        const o = (n + s) >> 1;
        lc(e, t[o]) < 0 ? (s = o) : (n = o + 1);
    }
    const r = wd(e);
    return (r && (s = t.lastIndexOf(r, s - 1)), s);
}
function wd(e) {
    let t = e;
    for (; (t = t.parent); ) if (cc(t) && lc(e, t) === 0) return t;
}
function cc({ record: e }) {
    return !!(
        e.name ||
        (e.components && Object.keys(e.components).length) ||
        e.redirect
    );
}
function oi(e) {
    const t = Je(Ds),
        n = Je(oc),
        s = Ve(() => {
            const c = tn(e.to);
            return t.resolve(c);
        }),
        r = Ve(() => {
            const { matched: c } = s.value,
                { length: u } = c,
                a = c[u - 1],
                f = n.matched;
            if (!a || !f.length) return -1;
            const p = f.findIndex(rn.bind(null, a));
            if (p > -1) return p;
            const m = ii(c[u - 2]);
            return u > 1 && ii(a) === m && f[f.length - 1].path !== m
                ? f.findIndex(rn.bind(null, c[u - 2]))
                : p;
        }),
        o = Ve(() => r.value > -1 && xd(n.params, s.value.params)),
        i = Ve(
            () =>
                r.value > -1 &&
                r.value === n.matched.length - 1 &&
                nc(n.params, s.value.params),
        );
    function l(c = {}) {
        if (Ad(c)) {
            const u = t[tn(e.replace) ? "replace" : "push"](tn(e.to)).catch(Cn);
            return (
                e.viewTransition &&
                    typeof document < "u" &&
                    "startViewTransition" in document &&
                    document.startViewTransition(() => u),
                u
            );
        }
        return Promise.resolve();
    }
    return {
        route: s,
        href: Ve(() => s.value.href),
        isActive: o,
        isExactActive: i,
        navigate: l,
    };
}
function Sd(e) {
    return e.length === 1 ? e[0] : e;
}
const vd = fl({
        name: "RouterLink",
        compatConfig: { MODE: 3 },
        props: {
            to: { type: [String, Object], required: !0 },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: { type: String, default: "page" },
            viewTransition: Boolean,
        },
        useLink: oi,
        setup(e, { slots: t }) {
            const n = Bn(oi(e)),
                { options: s } = Je(Ds),
                r = Ve(() => ({
                    [li(
                        e.activeClass,
                        s.linkActiveClass,
                        "router-link-active",
                    )]: n.isActive,
                    [li(
                        e.exactActiveClass,
                        s.linkExactActiveClass,
                        "router-link-exact-active",
                    )]: n.isExactActive,
                }));
            return () => {
                const o = t.default && Sd(t.default(n));
                return e.custom
                    ? o
                    : Xr(
                          "a",
                          {
                              "aria-current": n.isExactActive
                                  ? e.ariaCurrentValue
                                  : null,
                              href: n.href,
                              onClick: n.navigate,
                              class: r.value,
                          },
                          o,
                      );
            };
        },
    }),
    Rd = vd;
function Ad(e) {
    if (
        !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
        !e.defaultPrevented &&
        !(e.button !== void 0 && e.button !== 0)
    ) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return;
        }
        return (e.preventDefault && e.preventDefault(), !0);
    }
}
function xd(e, t) {
    for (const n in t) {
        const s = t[n],
            r = e[n];
        if (typeof s == "string") {
            if (s !== r) return !1;
        } else if (
            !Qe(r) ||
            r.length !== s.length ||
            s.some((o, i) => o !== r[i])
        )
            return !1;
    }
    return !0;
}
function ii(e) {
    return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const li = (e, t, n) => e ?? t ?? n,
    Cd = fl({
        name: "RouterView",
        inheritAttrs: !1,
        props: { name: { type: String, default: "default" }, route: Object },
        compatConfig: { MODE: 3 },
        setup(e, { attrs: t, slots: n }) {
            const s = Je(wr),
                r = Ve(() => e.route || s.value),
                o = Je(Yo, 0),
                i = Ve(() => {
                    let u = tn(o);
                    const { matched: a } = r.value;
                    let f;
                    for (; (f = a[u]) && !f.components; ) u++;
                    return u;
                }),
                l = Ve(() => r.value.matched[i.value]);
            (Yn(
                Yo,
                Ve(() => i.value + 1),
            ),
                Yn(nd, l),
                Yn(wr, r));
            const c = $r();
            return (
                Rn(
                    () => [c.value, l.value, e.name],
                    ([u, a, f], [p, m, g]) => {
                        (a &&
                            ((a.instances[f] = u),
                            m &&
                                m !== a &&
                                u &&
                                u === p &&
                                (a.leaveGuards.size ||
                                    (a.leaveGuards = m.leaveGuards),
                                a.updateGuards.size ||
                                    (a.updateGuards = m.updateGuards))),
                            u &&
                                a &&
                                (!m || !rn(a, m) || !p) &&
                                (a.enterCallbacks[f] || []).forEach((_) =>
                                    _(u),
                                ));
                    },
                    { flush: "post" },
                ),
                () => {
                    const u = r.value,
                        a = e.name,
                        f = l.value,
                        p = f && f.components[a];
                    if (!p) return ci(n.default, { Component: p, route: u });
                    const m = f.props[a],
                        g = m
                            ? m === !0
                                ? u.params
                                : typeof m == "function"
                                  ? m(u)
                                  : m
                            : null,
                        v = Xr(
                            p,
                            re({}, g, t, {
                                onVnodeUnmounted: (x) => {
                                    x.component.isUnmounted &&
                                        (f.instances[a] = null);
                                },
                                ref: c,
                            }),
                        );
                    return ci(n.default, { Component: v, route: u }) || v;
                }
            );
        },
    });
function ci(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
}
const Od = Cd;
function Td(e) {
    const t = yd(e.routes, e),
        n = e.parseQuery || ed,
        s = e.stringifyQuery || Qo,
        r = e.history,
        o = mn(),
        i = mn(),
        l = mn(),
        c = ha(Rt);
    let u = Rt;
    Yt &&
        e.scrollBehavior &&
        "scrollRestoration" in history &&
        (history.scrollRestoration = "manual");
    const a = Qs.bind(null, (S) => "" + S),
        f = Qs.bind(null, Uf),
        p = Qs.bind(null, Mn);
    function m(S, U) {
        let F, k;
        return (
            sc(S) ? ((F = t.getRecordMatcher(S)), (k = U)) : (k = S),
            t.addRoute(k, F)
        );
    }
    function g(S) {
        const U = t.getRecordMatcher(S);
        U && t.removeRoute(U);
    }
    function _() {
        return t.getRoutes().map((S) => S.record);
    }
    function v(S) {
        return !!t.getRecordMatcher(S);
    }
    function x(S, U) {
        if (((U = re({}, U || c.value)), typeof S == "string")) {
            const y = Ys(n, S, U.path),
                w = t.resolve({ path: y.path }, U),
                R = r.createHref(y.fullPath);
            return re(y, w, {
                params: p(w.params),
                hash: Mn(y.hash),
                redirectedFrom: void 0,
                href: R,
            });
        }
        let F;
        if (S.path != null) F = re({}, S, { path: Ys(n, S.path, U.path).path });
        else {
            const y = re({}, S.params);
            for (const w in y) y[w] == null && delete y[w];
            ((F = re({}, S, { params: f(y) })), (U.params = f(U.params)));
        }
        const k = t.resolve(F, U),
            te = S.hash || "";
        k.params = a(p(k.params));
        const d = kf(s, re({}, S, { hash: Lf(te), path: k.path })),
            h = r.createHref(d);
        return re(
            {
                fullPath: d,
                hash: te,
                query: s === Qo ? td(S.query) : S.query || {},
            },
            k,
            { redirectedFrom: void 0, href: h },
        );
    }
    function T(S) {
        return typeof S == "string" ? Ys(n, S, c.value.path) : re({}, S);
    }
    function N(S, U) {
        if (u !== S) return on(de.NAVIGATION_CANCELLED, { from: U, to: S });
    }
    function O(S) {
        return $(S);
    }
    function B(S) {
        return O(re(T(S), { replace: !0 }));
    }
    function Z(S, U) {
        const F = S.matched[S.matched.length - 1];
        if (F && F.redirect) {
            const { redirect: k } = F;
            let te = typeof k == "function" ? k(S, U) : k;
            return (
                typeof te == "string" &&
                    ((te =
                        te.includes("?") || te.includes("#")
                            ? (te = T(te))
                            : { path: te }),
                    (te.params = {})),
                re(
                    {
                        query: S.query,
                        hash: S.hash,
                        params: te.path != null ? {} : S.params,
                    },
                    te,
                )
            );
        }
    }
    function $(S, U) {
        const F = (u = x(S)),
            k = c.value,
            te = S.state,
            d = S.force,
            h = S.replace === !0,
            y = Z(F, k);
        if (y)
            return $(
                re(T(y), {
                    state: typeof y == "object" ? re({}, te, y.state) : te,
                    force: d,
                    replace: h,
                }),
                U || F,
            );
        const w = F;
        w.redirectedFrom = U;
        let R;
        return (
            !d &&
                Hf(s, k, F) &&
                ((R = on(de.NAVIGATION_DUPLICATED, { to: w, from: k })),
                ye(k, k, !0, !1)),
            (R ? Promise.resolve(R) : q(w, k))
                .catch((E) =>
                    pt(E)
                        ? pt(E, de.NAVIGATION_GUARD_REDIRECT)
                            ? E
                            : Ze(E)
                        : Q(E, w, k),
                )
                .then((E) => {
                    if (E) {
                        if (pt(E, de.NAVIGATION_GUARD_REDIRECT))
                            return $(
                                re({ replace: h }, T(E.to), {
                                    state:
                                        typeof E.to == "object"
                                            ? re({}, te, E.to.state)
                                            : te,
                                    force: d,
                                }),
                                U || w,
                            );
                    } else E = I(w, k, !0, h, te);
                    return (ee(w, k, E), E);
                })
        );
    }
    function K(S, U) {
        const F = N(S, U);
        return F ? Promise.reject(F) : Promise.resolve();
    }
    function D(S) {
        const U = We.values().next().value;
        return U && typeof U.runWithContext == "function"
            ? U.runWithContext(S)
            : S();
    }
    function q(S, U) {
        let F;
        const [k, te, d] = sd(S, U);
        F = er(k.reverse(), "beforeRouteLeave", S, U);
        for (const y of k)
            y.leaveGuards.forEach((w) => {
                F.push(Tt(w, S, U));
            });
        const h = K.bind(null, S, U);
        return (
            F.push(h),
            ke(F)
                .then(() => {
                    F = [];
                    for (const y of o.list()) F.push(Tt(y, S, U));
                    return (F.push(h), ke(F));
                })
                .then(() => {
                    F = er(te, "beforeRouteUpdate", S, U);
                    for (const y of te)
                        y.updateGuards.forEach((w) => {
                            F.push(Tt(w, S, U));
                        });
                    return (F.push(h), ke(F));
                })
                .then(() => {
                    F = [];
                    for (const y of d)
                        if (y.beforeEnter)
                            if (Qe(y.beforeEnter))
                                for (const w of y.beforeEnter)
                                    F.push(Tt(w, S, U));
                            else F.push(Tt(y.beforeEnter, S, U));
                    return (F.push(h), ke(F));
                })
                .then(
                    () => (
                        S.matched.forEach((y) => (y.enterCallbacks = {})),
                        (F = er(d, "beforeRouteEnter", S, U, D)),
                        F.push(h),
                        ke(F)
                    ),
                )
                .then(() => {
                    F = [];
                    for (const y of i.list()) F.push(Tt(y, S, U));
                    return (F.push(h), ke(F));
                })
                .catch((y) =>
                    pt(y, de.NAVIGATION_CANCELLED) ? y : Promise.reject(y),
                )
        );
    }
    function ee(S, U, F) {
        l.list().forEach((k) => D(() => k(S, U, F)));
    }
    function I(S, U, F, k, te) {
        const d = N(S, U);
        if (d) return d;
        const h = U === Rt,
            y = Yt ? history.state : {};
        (F &&
            (k || h
                ? r.replace(S.fullPath, re({ scroll: h && y && y.scroll }, te))
                : r.push(S.fullPath, te)),
            (c.value = S),
            ye(S, U, F, h),
            Ze());
    }
    let X;
    function le() {
        X ||
            (X = r.listen((S, U, F) => {
                if (!tt.listening) return;
                const k = x(S),
                    te = Z(k, tt.currentRoute.value);
                if (te) {
                    $(re(te, { replace: !0, force: !0 }), k).catch(Cn);
                    return;
                }
                u = k;
                const d = c.value;
                (Yt && Jf(Xo(d.fullPath, F.delta), Is()),
                    q(k, d)
                        .catch((h) =>
                            pt(
                                h,
                                de.NAVIGATION_ABORTED | de.NAVIGATION_CANCELLED,
                            )
                                ? h
                                : pt(h, de.NAVIGATION_GUARD_REDIRECT)
                                  ? ($(re(T(h.to), { force: !0 }), k)
                                        .then((y) => {
                                            pt(
                                                y,
                                                de.NAVIGATION_ABORTED |
                                                    de.NAVIGATION_DUPLICATED,
                                            ) &&
                                                !F.delta &&
                                                F.type === _r.pop &&
                                                r.go(-1, !1);
                                        })
                                        .catch(Cn),
                                    Promise.reject())
                                  : (F.delta && r.go(-F.delta, !1), Q(h, k, d)),
                        )
                        .then((h) => {
                            ((h = h || I(k, d, !1)),
                                h &&
                                    (F.delta && !pt(h, de.NAVIGATION_CANCELLED)
                                        ? r.go(-F.delta, !1)
                                        : F.type === _r.pop &&
                                          pt(
                                              h,
                                              de.NAVIGATION_ABORTED |
                                                  de.NAVIGATION_DUPLICATED,
                                          ) &&
                                          r.go(-1, !1)),
                                ee(k, d, h));
                        })
                        .catch(Cn));
            }));
    }
    let _e = mn(),
        Y = mn(),
        G;
    function Q(S, U, F) {
        Ze(S);
        const k = Y.list();
        return (
            k.length ? k.forEach((te) => te(S, U, F)) : console.error(S),
            Promise.reject(S)
        );
    }
    function je() {
        return G && c.value !== Rt
            ? Promise.resolve()
            : new Promise((S, U) => {
                  _e.add([S, U]);
              });
    }
    function Ze(S) {
        return (
            G ||
                ((G = !S),
                le(),
                _e.list().forEach(([U, F]) => (S ? F(S) : U())),
                _e.reset()),
            S
        );
    }
    function ye(S, U, F, k) {
        const { scrollBehavior: te } = e;
        if (!Yt || !te) return Promise.resolve();
        const d =
            (!F && Xf(Xo(S.fullPath, 0))) ||
            ((k || !F) && history.state && history.state.scroll) ||
            null;
        return As()
            .then(() => te(S, U, d))
            .then((h) => h && zf(h))
            .catch((h) => Q(h, S, U));
    }
    const pe = (S) => r.go(S);
    let et;
    const We = new Set(),
        tt = {
            currentRoute: c,
            listening: !0,
            addRoute: m,
            removeRoute: g,
            clearRoutes: t.clearRoutes,
            hasRoute: v,
            getRoutes: _,
            resolve: x,
            options: e,
            push: O,
            replace: B,
            go: pe,
            back: () => pe(-1),
            forward: () => pe(1),
            beforeEach: o.add,
            beforeResolve: i.add,
            afterEach: l.add,
            onError: Y.add,
            isReady: je,
            install(S) {
                (S.component("RouterLink", Rd),
                    S.component("RouterView", Od),
                    (S.config.globalProperties.$router = tt),
                    Object.defineProperty(S.config.globalProperties, "$route", {
                        enumerable: !0,
                        get: () => tn(c),
                    }),
                    Yt &&
                        !et &&
                        c.value === Rt &&
                        ((et = !0), O(r.location).catch((k) => {})));
                const U = {};
                for (const k in Rt)
                    Object.defineProperty(U, k, {
                        get: () => c.value[k],
                        enumerable: !0,
                    });
                (S.provide(Ds, tt), S.provide(oc, Qi(U)), S.provide(wr, c));
                const F = S.unmount;
                (We.add(S),
                    (S.unmount = function () {
                        (We.delete(S),
                            We.size < 1 &&
                                ((u = Rt),
                                X && X(),
                                (X = null),
                                (c.value = Rt),
                                (et = !1),
                                (G = !1)),
                            F());
                    }));
            },
        };
    function ke(S) {
        return S.reduce((U, F) => U.then(() => D(F)), Promise.resolve());
    }
    return tt;
}
function Pd() {
    return Je(Ds);
}
const ac = vf("store", {
        state: () => ({
            exercises: {},
            openedExercise: null,
            openedUnit: null,
            solutionProgress: {},
            units: [],
            user: {},
        }),
        actions: {
            clearExercises() {
                this.exercises = {};
            },
            clearUnits() {
                this.units = {};
            },
            clearUser() {
                this.user = {};
            },
            getExercise(e, t) {
                const n = this.exercises[e];
                return n ? n.find((s) => s.id === t) : null;
            },
            getExercisesByUnit(e) {
                return this.exercises?.[e] || [];
            },
            getExerciseProgress(e, t) {
                if (t === null) return null;
                const n = this.solutionProgress?.[e];
                return (n && n[t]) || null;
            },
            setExercises(e, t) {
                (this.exercises || (this.exercises = {}),
                    (this.exercises[e] = t));
            },
            setOpened(e, t) {
                ((this.openedExercise = e), (this.openedUnit = e ? !1 : t));
            },
            setProgress(e, t) {
                (this.solutionProgress || (this.solutionProgress = {}),
                    t.forEach(
                        ({ completed: n, id: s, progress: r, type: o }) => {
                            ((this.solutionProgress[e] =
                                this.solutionProgress[e] || {}),
                                (this.solutionProgress[e][s] = {
                                    completed: n,
                                    progress: r,
                                    type: o,
                                }));
                        },
                    ));
            },
            setUnits(e) {
                this.units = e;
            },
            setUser({ solution_progress: e, ...t }) {
                this.user = t;
            },
            switchOpenedUnit(e) {
                this.openedUnit = e;
            },
            switchOpenedExercise(e) {
                this.openedExercise = e;
            },
            syncRouterToState(e) {
                const { unitId: t, exerciseId: n } = e.params;
                (t && (this.openedUnit = t),
                    n
                        ? (this.openedExercise = n)
                        : (this.openedExercise = null));
            },
            wordScrambleOperation(e, t, n, s, r) {
                Nd.WordScramble[n](this, e, t, s, r);
            },
            wordSearchOperation(e, t, n, s) {
                const r = s[0] - n[0] < 0 ? -1 : s[0] - n[0] > 0 ? 1 : 0,
                    o = s[1] - n[1] < 0 ? -1 : s[1] - n[1] > 0 ? 1 : 0;
                let i =
                        [
                            Math.abs(s[0] - n[0]),
                            Math.abs(s[1] - n[1]),
                        ].sort()[1] + 1,
                    l = "",
                    c = n[0],
                    u = n[1];
                for (; i--; )
                    ((l +=
                        this.solutionProgress[e][t].progress.letterPool[c][u]),
                        (c += r),
                        (u += o));
                const a = this.solutionProgress[e][t].progress.words.findIndex(
                    (f) => f.word === l,
                );
                ((this.solutionProgress[e][t].progress.words[a].start = n),
                    (this.solutionProgress[e][t].progress.words[a].end = s),
                    (this.solutionProgress[e][t].progress.words[a].solved =
                        !0));
            },
        },
    }),
    Nd = {
        WordScramble: {
            placeLetter: (e, t, n, s, r) => {
                const o = e.solutionProgress[t][n].progress[s].placed.findIndex(
                    (i) => i === "_",
                );
                e.solutionProgress[t][n].progress[s].placed[o] =
                    e.solutionProgress[t][n].progress[s].unplaced.splice(
                        r,
                        1,
                    )[0];
            },
            solve: (e, t, n, s) => {
                ((e.solutionProgress[t][n].progress[s].solved = !0),
                    (e.solutionProgress[t][n].completed = e.solutionProgress[t][
                        n
                    ].progress.every((o) => o.solved)));
                const r = e.exercises[t].findIndex((o) => n === o.id);
                e.exercises[t][r].toShow[s] =
                    e.solutionProgress[t][n].progress[s].placed;
            },
            unplaceLetter: (e, t, n, s, r) => {
                (e.solutionProgress[t][n].progress[s].unplaced.push(
                    e.solutionProgress[t][n].progress[s].placed[r],
                ),
                    (e.solutionProgress[t][n].progress[s].placed[r] = "_"));
            },
        },
    },
    Id = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [s, r] of t) n[s] = r;
        return n;
    },
    Dd = {
        setup() {
            const e = Pd(),
                t = ac();
            return { router: e, store: t };
        },
        watch: {
            $route: {
                handler(e) {
                    this.store.syncRouterToState(e);
                },
                immediate: !0,
            },
        },
    };
function Ld(e, t, n, s, r, o) {
    const i = Ha("routerView");
    return (
        Ul(),
        _u(
            Ge,
            null,
            [t[0] || (t[0] = Gr("nav", { class: "nav_bar" }, null, -1)), Pe(i)],
            64,
        )
    );
}
const Fd = Id(Dd, [["render", Ld]]),
    Md = "modulepreload",
    Ud = function (e) {
        return "/" + e;
    },
    ai = {},
    At = function (t, n, s) {
        let r = Promise.resolve();
        if (n && n.length > 0) {
            let c = function (u) {
                return Promise.all(
                    u.map((a) =>
                        Promise.resolve(a).then(
                            (f) => ({ status: "fulfilled", value: f }),
                            (f) => ({ status: "rejected", reason: f }),
                        ),
                    ),
                );
            };
            document.getElementsByTagName("link");
            const i = document.querySelector("meta[property=csp-nonce]"),
                l = i?.nonce || i?.getAttribute("nonce");
            r = c(
                n.map((u) => {
                    if (((u = Ud(u)), u in ai)) return;
                    ai[u] = !0;
                    const a = u.endsWith(".css"),
                        f = a ? '[rel="stylesheet"]' : "";
                    if (document.querySelector(`link[href="${u}"]${f}`)) return;
                    const p = document.createElement("link");
                    if (
                        ((p.rel = a ? "stylesheet" : Md),
                        a || (p.as = "script"),
                        (p.crossOrigin = ""),
                        (p.href = u),
                        l && p.setAttribute("nonce", l),
                        document.head.appendChild(p),
                        a)
                    )
                        return new Promise((m, g) => {
                            (p.addEventListener("load", m),
                                p.addEventListener("error", () =>
                                    g(
                                        new Error(
                                            `Unable to preload CSS for ${u}`,
                                        ),
                                    ),
                                ));
                        });
                }),
            );
        }
        function o(i) {
            const l = new Event("vite:preloadError", { cancelable: !0 });
            if (((l.payload = i), window.dispatchEvent(l), !l.defaultPrevented))
                throw i;
        }
        return r.then((i) => {
            for (const l of i || []) l.status === "rejected" && o(l.reason);
            return t().catch(o);
        });
    },
    ys = async () => {
        const e = localStorage.getItem("authToken");
        if (!e) return null;
        const { token: t, expiresAt: n } = JSON.parse(e);
        return new Date().getTime() >= n ? (Sr(), null) : t;
    },
    Bd = async () => ys() !== null,
    Sr = () => localStorage.removeItem("authToken"),
    jd = (e, t) =>
        localStorage.setItem(
            "authToken",
            JSON.stringify({ token: e, expiresAt: t }),
        );
function uc(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: kd } = Object.prototype,
    { getPrototypeOf: Yr } = Object,
    { iterator: Ls, toStringTag: fc } = Symbol,
    Fs = ((e) => (t) => {
        const n = kd.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Ye = (e) => ((e = e.toLowerCase()), (t) => Fs(t) === e),
    Ms = (e) => (t) => typeof t === e,
    { isArray: an } = Array,
    ln = Ms("undefined");
function Hn(e) {
    return (
        e !== null &&
        !ln(e) &&
        e.constructor !== null &&
        !ln(e.constructor) &&
        De(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const dc = Ye("ArrayBuffer");
function Hd(e) {
    let t;
    return (
        typeof ArrayBuffer < "u" && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && dc(e.buffer)),
        t
    );
}
const Vd = Ms("string"),
    De = Ms("function"),
    hc = Ms("number"),
    Vn = (e) => e !== null && typeof e == "object",
    $d = (e) => e === !0 || e === !1,
    ns = (e) => {
        if (Fs(e) !== "object") return !1;
        const t = Yr(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(fc in e) &&
            !(Ls in e)
        );
    },
    qd = (e) => {
        if (!Vn(e) || Hn(e)) return !1;
        try {
            return (
                Object.keys(e).length === 0 &&
                Object.getPrototypeOf(e) === Object.prototype
            );
        } catch {
            return !1;
        }
    },
    Kd = Ye("Date"),
    Wd = Ye("File"),
    Gd = Ye("Blob"),
    zd = Ye("FileList"),
    Jd = (e) => Vn(e) && De(e.pipe),
    Xd = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == "function" && e instanceof FormData) ||
                (De(e.append) &&
                    ((t = Fs(e)) === "formdata" ||
                        (t === "object" &&
                            De(e.toString) &&
                            e.toString() === "[object FormData]"))))
        );
    },
    Qd = Ye("URLSearchParams"),
    [Yd, Zd, eh, th] = ["ReadableStream", "Request", "Response", "Headers"].map(
        Ye,
    ),
    nh = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $n(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > "u") return;
    let s, r;
    if ((typeof e != "object" && (e = [e]), an(e)))
        for (s = 0, r = e.length; s < r; s++) t.call(null, e[s], s, e);
    else {
        if (Hn(e)) return;
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            i = o.length;
        let l;
        for (s = 0; s < i; s++) ((l = o[s]), t.call(null, e[l], l, e));
    }
}
function pc(e, t) {
    if (Hn(e)) return null;
    t = t.toLowerCase();
    const n = Object.keys(e);
    let s = n.length,
        r;
    for (; s-- > 0; ) if (((r = n[s]), t === r.toLowerCase())) return r;
    return null;
}
const Vt =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : typeof window < "u"
                ? window
                : global,
    mc = (e) => !ln(e) && e !== Vt;
function vr() {
    const { caseless: e, skipUndefined: t } = (mc(this) && this) || {},
        n = {},
        s = (r, o) => {
            const i = (e && pc(n, o)) || o;
            ns(n[i]) && ns(r)
                ? (n[i] = vr(n[i], r))
                : ns(r)
                  ? (n[i] = vr({}, r))
                  : an(r)
                    ? (n[i] = r.slice())
                    : (!t || !ln(r)) && (n[i] = r);
        };
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && $n(arguments[r], s);
    return n;
}
const sh = (e, t, n, { allOwnKeys: s } = {}) => (
        $n(
            t,
            (r, o) => {
                n && De(r) ? (e[o] = uc(r, n)) : (e[o] = r);
            },
            { allOwnKeys: s },
        ),
        e
    ),
    rh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    oh = (e, t, n, s) => {
        ((e.prototype = Object.create(t.prototype, s)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: t.prototype }),
            n && Object.assign(e.prototype, n));
    },
    ih = (e, t, n, s) => {
        let r, o, i;
        const l = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (r = Object.getOwnPropertyNames(e), o = r.length; o-- > 0; )
                ((i = r[o]),
                    (!s || s(i, e, t)) &&
                        !l[i] &&
                        ((t[i] = e[i]), (l[i] = !0)));
            e = n !== !1 && Yr(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    lh = (e, t, n) => {
        ((e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length));
        const s = e.indexOf(t, n);
        return s !== -1 && s === n;
    },
    ch = (e) => {
        if (!e) return null;
        if (an(e)) return e;
        let t = e.length;
        if (!hc(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    ah = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < "u" && Yr(Uint8Array)),
    uh = (e, t) => {
        const s = (e && e[Ls]).call(e);
        let r;
        for (; (r = s.next()) && !r.done; ) {
            const o = r.value;
            t.call(e, o[0], o[1]);
        }
    },
    fh = (e, t) => {
        let n;
        const s = [];
        for (; (n = e.exec(t)) !== null; ) s.push(n);
        return s;
    },
    dh = Ye("HTMLFormElement"),
    hh = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, r) {
            return s.toUpperCase() + r;
        }),
    ui = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    ph = Ye("RegExp"),
    gc = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            s = {};
        ($n(n, (r, o) => {
            let i;
            (i = t(r, o, e)) !== !1 && (s[o] = i || r);
        }),
            Object.defineProperties(e, s));
    },
    mh = (e) => {
        gc(e, (t, n) => {
            if (De(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
                return !1;
            const s = e[n];
            if (De(s)) {
                if (((t.enumerable = !1), "writable" in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'",
                        );
                    });
            }
        });
    },
    gh = (e, t) => {
        const n = {},
            s = (r) => {
                r.forEach((o) => {
                    n[o] = !0;
                });
            };
        return (an(e) ? s(e) : s(String(e).split(t)), n);
    },
    yh = () => {},
    bh = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function _h(e) {
    return !!(e && De(e.append) && e[fc] === "FormData" && e[Ls]);
}
const Eh = (e) => {
        const t = new Array(10),
            n = (s, r) => {
                if (Vn(s)) {
                    if (t.indexOf(s) >= 0) return;
                    if (Hn(s)) return s;
                    if (!("toJSON" in s)) {
                        t[r] = s;
                        const o = an(s) ? [] : {};
                        return (
                            $n(s, (i, l) => {
                                const c = n(i, r + 1);
                                !ln(c) && (o[l] = c);
                            }),
                            (t[r] = void 0),
                            o
                        );
                    }
                }
                return s;
            };
        return n(e, 0);
    },
    wh = Ye("AsyncFunction"),
    Sh = (e) => e && (Vn(e) || De(e)) && De(e.then) && De(e.catch),
    yc = ((e, t) =>
        e
            ? setImmediate
            : t
              ? ((n, s) => (
                    Vt.addEventListener(
                        "message",
                        ({ source: r, data: o }) => {
                            r === Vt && o === n && s.length && s.shift()();
                        },
                        !1,
                    ),
                    (r) => {
                        (s.push(r), Vt.postMessage(n, "*"));
                    }
                ))(`axios@${Math.random()}`, [])
              : (n) => setTimeout(n))(
        typeof setImmediate == "function",
        De(Vt.postMessage),
    ),
    vh =
        typeof queueMicrotask < "u"
            ? queueMicrotask.bind(Vt)
            : (typeof process < "u" && process.nextTick) || yc,
    Rh = (e) => e != null && De(e[Ls]),
    b = {
        isArray: an,
        isArrayBuffer: dc,
        isBuffer: Hn,
        isFormData: Xd,
        isArrayBufferView: Hd,
        isString: Vd,
        isNumber: hc,
        isBoolean: $d,
        isObject: Vn,
        isPlainObject: ns,
        isEmptyObject: qd,
        isReadableStream: Yd,
        isRequest: Zd,
        isResponse: eh,
        isHeaders: th,
        isUndefined: ln,
        isDate: Kd,
        isFile: Wd,
        isBlob: Gd,
        isRegExp: ph,
        isFunction: De,
        isStream: Jd,
        isURLSearchParams: Qd,
        isTypedArray: ah,
        isFileList: zd,
        forEach: $n,
        merge: vr,
        extend: sh,
        trim: nh,
        stripBOM: rh,
        inherits: oh,
        toFlatObject: ih,
        kindOf: Fs,
        kindOfTest: Ye,
        endsWith: lh,
        toArray: ch,
        forEachEntry: uh,
        matchAll: fh,
        isHTMLForm: dh,
        hasOwnProperty: ui,
        hasOwnProp: ui,
        reduceDescriptors: gc,
        freezeMethods: mh,
        toObjectSet: gh,
        toCamelCase: hh,
        noop: yh,
        toFiniteNumber: bh,
        findKey: pc,
        global: Vt,
        isContextDefined: mc,
        isSpecCompliantForm: _h,
        toJSONObject: Eh,
        isAsyncFn: wh,
        isThenable: Sh,
        setImmediate: yc,
        asap: vh,
        isIterable: Rh,
    };
function J(e, t, n, s, r) {
    (Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = "AxiosError"),
        t && (this.code = t),
        n && (this.config = n),
        s && (this.request = s),
        r && ((this.response = r), (this.status = r.status ? r.status : null)));
}
b.inherits(J, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: b.toJSONObject(this.config),
            code: this.code,
            status: this.status,
        };
    },
});
const bc = J.prototype,
    _c = {};
[
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL",
].forEach((e) => {
    _c[e] = { value: e };
});
Object.defineProperties(J, _c);
Object.defineProperty(bc, "isAxiosError", { value: !0 });
J.from = (e, t, n, s, r, o) => {
    const i = Object.create(bc);
    b.toFlatObject(
        e,
        i,
        function (a) {
            return a !== Error.prototype;
        },
        (u) => u !== "isAxiosError",
    );
    const l = e && e.message ? e.message : "Error",
        c = t == null && e ? e.code : t;
    return (
        J.call(i, l, c, n, s, r),
        e &&
            i.cause == null &&
            Object.defineProperty(i, "cause", { value: e, configurable: !0 }),
        (i.name = (e && e.name) || "Error"),
        o && Object.assign(i, o),
        i
    );
};
const Ah = null;
function Rr(e) {
    return b.isPlainObject(e) || b.isArray(e);
}
function Ec(e) {
    return b.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function fi(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (r, o) {
                  return ((r = Ec(r)), !n && o ? "[" + r + "]" : r);
              })
              .join(n ? "." : "")
        : t;
}
function xh(e) {
    return b.isArray(e) && !e.some(Rr);
}
const Ch = b.toFlatObject(b, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function Us(e, t, n) {
    if (!b.isObject(e)) throw new TypeError("target must be an object");
    ((t = t || new FormData()),
        (n = b.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (_, v) {
                return !b.isUndefined(v[_]);
            },
        )));
    const s = n.metaTokens,
        r = n.visitor || a,
        o = n.dots,
        i = n.indexes,
        c = (n.Blob || (typeof Blob < "u" && Blob)) && b.isSpecCompliantForm(t);
    if (!b.isFunction(r)) throw new TypeError("visitor must be a function");
    function u(g) {
        if (g === null) return "";
        if (b.isDate(g)) return g.toISOString();
        if (b.isBoolean(g)) return g.toString();
        if (!c && b.isBlob(g))
            throw new J("Blob is not supported. Use a Buffer instead.");
        return b.isArrayBuffer(g) || b.isTypedArray(g)
            ? c && typeof Blob == "function"
                ? new Blob([g])
                : Buffer.from(g)
            : g;
    }
    function a(g, _, v) {
        let x = g;
        if (g && !v && typeof g == "object") {
            if (b.endsWith(_, "{}"))
                ((_ = s ? _ : _.slice(0, -2)), (g = JSON.stringify(g)));
            else if (
                (b.isArray(g) && xh(g)) ||
                ((b.isFileList(g) || b.endsWith(_, "[]")) && (x = b.toArray(g)))
            )
                return (
                    (_ = Ec(_)),
                    x.forEach(function (N, O) {
                        !(b.isUndefined(N) || N === null) &&
                            t.append(
                                i === !0
                                    ? fi([_], O, o)
                                    : i === null
                                      ? _
                                      : _ + "[]",
                                u(N),
                            );
                    }),
                    !1
                );
        }
        return Rr(g) ? !0 : (t.append(fi(v, _, o), u(g)), !1);
    }
    const f = [],
        p = Object.assign(Ch, {
            defaultVisitor: a,
            convertValue: u,
            isVisitable: Rr,
        });
    function m(g, _) {
        if (!b.isUndefined(g)) {
            if (f.indexOf(g) !== -1)
                throw Error("Circular reference detected in " + _.join("."));
            (f.push(g),
                b.forEach(g, function (x, T) {
                    (!(b.isUndefined(x) || x === null) &&
                        r.call(t, x, b.isString(T) ? T.trim() : T, _, p)) ===
                        !0 && m(x, _ ? _.concat(T) : [T]);
                }),
                f.pop());
        }
    }
    if (!b.isObject(e)) throw new TypeError("data must be an object");
    return (m(e), t);
}
function di(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
        return t[s];
    });
}
function Zr(e, t) {
    ((this._pairs = []), e && Us(e, this, t));
}
const wc = Zr.prototype;
wc.append = function (t, n) {
    this._pairs.push([t, n]);
};
wc.toString = function (t) {
    const n = t
        ? function (s) {
              return t.call(this, s, di);
          }
        : di;
    return this._pairs
        .map(function (r) {
            return n(r[0]) + "=" + n(r[1]);
        }, "")
        .join("&");
};
function Oh(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+");
}
function Sc(e, t, n) {
    if (!t) return e;
    const s = (n && n.encode) || Oh;
    b.isFunction(n) && (n = { serialize: n });
    const r = n && n.serialize;
    let o;
    if (
        (r
            ? (o = r(t, n))
            : (o = b.isURLSearchParams(t)
                  ? t.toString()
                  : new Zr(t, n).toString(s)),
        o)
    ) {
        const i = e.indexOf("#");
        (i !== -1 && (e = e.slice(0, i)),
            (e += (e.indexOf("?") === -1 ? "?" : "&") + o));
    }
    return e;
}
class hi {
    constructor() {
        this.handlers = [];
    }
    use(t, n, s) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: s ? s.synchronous : !1,
                runWhen: s ? s.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        b.forEach(this.handlers, function (s) {
            s !== null && t(s);
        });
    }
}
const vc = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Th = typeof URLSearchParams < "u" ? URLSearchParams : Zr,
    Ph = typeof FormData < "u" ? FormData : null,
    Nh = typeof Blob < "u" ? Blob : null,
    Ih = {
        isBrowser: !0,
        classes: { URLSearchParams: Th, FormData: Ph, Blob: Nh },
        protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    eo = typeof window < "u" && typeof document < "u",
    Ar = (typeof navigator == "object" && navigator) || void 0,
    Dh =
        eo &&
        (!Ar || ["ReactNative", "NativeScript", "NS"].indexOf(Ar.product) < 0),
    Lh =
        typeof WorkerGlobalScope < "u" &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == "function",
    Fh = (eo && window.location.href) || "https://englishing.onrender.com",
    Mh = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: eo,
                hasStandardBrowserEnv: Dh,
                hasStandardBrowserWebWorkerEnv: Lh,
                navigator: Ar,
                origin: Fh,
            },
            Symbol.toStringTag,
            { value: "Module" },
        ),
    ),
    Ae = { ...Mh, ...Ih };
function Uh(e, t) {
    return Us(e, new Ae.classes.URLSearchParams(), {
        visitor: function (n, s, r, o) {
            return Ae.isNode && b.isBuffer(n)
                ? (this.append(s, n.toString("base64")), !1)
                : o.defaultVisitor.apply(this, arguments);
        },
        ...t,
    });
}
function Bh(e) {
    return b
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function jh(e) {
    const t = {},
        n = Object.keys(e);
    let s;
    const r = n.length;
    let o;
    for (s = 0; s < r; s++) ((o = n[s]), (t[o] = e[o]));
    return t;
}
function Rc(e) {
    function t(n, s, r, o) {
        let i = n[o++];
        if (i === "__proto__") return !0;
        const l = Number.isFinite(+i),
            c = o >= n.length;
        return (
            (i = !i && b.isArray(r) ? r.length : i),
            c
                ? (b.hasOwnProp(r, i) ? (r[i] = [r[i], s]) : (r[i] = s), !l)
                : ((!r[i] || !b.isObject(r[i])) && (r[i] = []),
                  t(n, s, r[i], o) && b.isArray(r[i]) && (r[i] = jh(r[i])),
                  !l)
        );
    }
    if (b.isFormData(e) && b.isFunction(e.entries)) {
        const n = {};
        return (
            b.forEachEntry(e, (s, r) => {
                t(Bh(s), r, n, 0);
            }),
            n
        );
    }
    return null;
}
function kh(e, t, n) {
    if (b.isString(e))
        try {
            return ((t || JSON.parse)(e), b.trim(e));
        } catch (s) {
            if (s.name !== "SyntaxError") throw s;
        }
    return (n || JSON.stringify)(e);
}
const qn = {
    transitional: vc,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [
        function (t, n) {
            const s = n.getContentType() || "",
                r = s.indexOf("application/json") > -1,
                o = b.isObject(t);
            if (
                (o && b.isHTMLForm(t) && (t = new FormData(t)), b.isFormData(t))
            )
                return r ? JSON.stringify(Rc(t)) : t;
            if (
                b.isArrayBuffer(t) ||
                b.isBuffer(t) ||
                b.isStream(t) ||
                b.isFile(t) ||
                b.isBlob(t) ||
                b.isReadableStream(t)
            )
                return t;
            if (b.isArrayBufferView(t)) return t.buffer;
            if (b.isURLSearchParams(t))
                return (
                    n.setContentType(
                        "application/x-www-form-urlencoded;charset=utf-8",
                        !1,
                    ),
                    t.toString()
                );
            let l;
            if (o) {
                if (s.indexOf("application/x-www-form-urlencoded") > -1)
                    return Uh(t, this.formSerializer).toString();
                if (
                    (l = b.isFileList(t)) ||
                    s.indexOf("multipart/form-data") > -1
                ) {
                    const c = this.env && this.env.FormData;
                    return Us(
                        l ? { "files[]": t } : t,
                        c && new c(),
                        this.formSerializer,
                    );
                }
            }
            return o || r
                ? (n.setContentType("application/json", !1), kh(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || qn.transitional,
                s = n && n.forcedJSONParsing,
                r = this.responseType === "json";
            if (b.isResponse(t) || b.isReadableStream(t)) return t;
            if (t && b.isString(t) && ((s && !this.responseType) || r)) {
                const i = !(n && n.silentJSONParsing) && r;
                try {
                    return JSON.parse(t, this.parseReviver);
                } catch (l) {
                    if (i)
                        throw l.name === "SyntaxError"
                            ? J.from(
                                  l,
                                  J.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response,
                              )
                            : l;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: Ae.classes.FormData, Blob: Ae.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
        },
    },
};
b.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
    qn.headers[e] = {};
});
const Hh = b.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
    ]),
    Vh = (e) => {
        const t = {};
        let n, s, r;
        return (
            e &&
                e
                    .split(
                        `
`,
                    )
                    .forEach(function (i) {
                        ((r = i.indexOf(":")),
                            (n = i.substring(0, r).trim().toLowerCase()),
                            (s = i.substring(r + 1).trim()),
                            !(!n || (t[n] && Hh[n])) &&
                                (n === "set-cookie"
                                    ? t[n]
                                        ? t[n].push(s)
                                        : (t[n] = [s])
                                    : (t[n] = t[n] ? t[n] + ", " + s : s)));
                    }),
            t
        );
    },
    pi = Symbol("internals");
function gn(e) {
    return e && String(e).trim().toLowerCase();
}
function ss(e) {
    return e === !1 || e == null ? e : b.isArray(e) ? e.map(ss) : String(e);
}
function $h(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; (s = n.exec(e)); ) t[s[1]] = s[2];
    return t;
}
const qh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tr(e, t, n, s, r) {
    if (b.isFunction(s)) return s.call(this, t, n);
    if ((r && (t = n), !!b.isString(t))) {
        if (b.isString(s)) return t.indexOf(s) !== -1;
        if (b.isRegExp(s)) return s.test(t);
    }
}
function Kh(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function Wh(e, t) {
    const n = b.toCamelCase(" " + t);
    ["get", "set", "has"].forEach((s) => {
        Object.defineProperty(e, s + n, {
            value: function (r, o, i) {
                return this[s].call(this, t, r, o, i);
            },
            configurable: !0,
        });
    });
}
let Le = class {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, s) {
        const r = this;
        function o(l, c, u) {
            const a = gn(c);
            if (!a) throw new Error("header name must be a non-empty string");
            const f = b.findKey(r, a);
            (!f ||
                r[f] === void 0 ||
                u === !0 ||
                (u === void 0 && r[f] !== !1)) &&
                (r[f || c] = ss(l));
        }
        const i = (l, c) => b.forEach(l, (u, a) => o(u, a, c));
        if (b.isPlainObject(t) || t instanceof this.constructor) i(t, n);
        else if (b.isString(t) && (t = t.trim()) && !qh(t)) i(Vh(t), n);
        else if (b.isObject(t) && b.isIterable(t)) {
            let l = {},
                c,
                u;
            for (const a of t) {
                if (!b.isArray(a))
                    throw TypeError(
                        "Object iterator must return a key-value pair",
                    );
                l[(u = a[0])] = (c = l[u])
                    ? b.isArray(c)
                        ? [...c, a[1]]
                        : [c, a[1]]
                    : a[1];
            }
            i(l, n);
        } else t != null && o(n, t, s);
        return this;
    }
    get(t, n) {
        if (((t = gn(t)), t)) {
            const s = b.findKey(this, t);
            if (s) {
                const r = this[s];
                if (!n) return r;
                if (n === !0) return $h(r);
                if (b.isFunction(n)) return n.call(this, r, s);
                if (b.isRegExp(n)) return n.exec(r);
                throw new TypeError("parser must be boolean|regexp|function");
            }
        }
    }
    has(t, n) {
        if (((t = gn(t)), t)) {
            const s = b.findKey(this, t);
            return !!(
                s &&
                this[s] !== void 0 &&
                (!n || tr(this, this[s], s, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const s = this;
        let r = !1;
        function o(i) {
            if (((i = gn(i)), i)) {
                const l = b.findKey(s, i);
                l && (!n || tr(s, s[l], l, n)) && (delete s[l], (r = !0));
            }
        }
        return (b.isArray(t) ? t.forEach(o) : o(t), r);
    }
    clear(t) {
        const n = Object.keys(this);
        let s = n.length,
            r = !1;
        for (; s--; ) {
            const o = n[s];
            (!t || tr(this, this[o], o, t, !0)) && (delete this[o], (r = !0));
        }
        return r;
    }
    normalize(t) {
        const n = this,
            s = {};
        return (
            b.forEach(this, (r, o) => {
                const i = b.findKey(s, o);
                if (i) {
                    ((n[i] = ss(r)), delete n[o]);
                    return;
                }
                const l = t ? Kh(o) : String(o).trim();
                (l !== o && delete n[o], (n[l] = ss(r)), (s[l] = !0));
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const n = Object.create(null);
        return (
            b.forEach(this, (s, r) => {
                s != null &&
                    s !== !1 &&
                    (n[r] = t && b.isArray(s) ? s.join(", ") : s);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n)
            .join(`
`);
    }
    getSetCookie() {
        return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
        return "AxiosHeaders";
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
        const s = new this(t);
        return (n.forEach((r) => s.set(r)), s);
    }
    static accessor(t) {
        const s = (this[pi] = this[pi] = { accessors: {} }).accessors,
            r = this.prototype;
        function o(i) {
            const l = gn(i);
            s[l] || (Wh(r, i), (s[l] = !0));
        }
        return (b.isArray(t) ? t.forEach(o) : o(t), this);
    }
};
Le.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization",
]);
b.reduceDescriptors(Le.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(s) {
            this[n] = s;
        },
    };
});
b.freezeMethods(Le);
function nr(e, t) {
    const n = this || qn,
        s = t || n,
        r = Le.from(s.headers);
    let o = s.data;
    return (
        b.forEach(e, function (l) {
            o = l.call(n, o, r.normalize(), t ? t.status : void 0);
        }),
        r.normalize(),
        o
    );
}
function Ac(e) {
    return !!(e && e.__CANCEL__);
}
function un(e, t, n) {
    (J.call(this, e ?? "canceled", J.ERR_CANCELED, t, n),
        (this.name = "CanceledError"));
}
b.inherits(un, J, { __CANCEL__: !0 });
function xc(e, t, n) {
    const s = n.config.validateStatus;
    !n.status || !s || s(n.status)
        ? e(n)
        : t(
              new J(
                  "Request failed with status code " + n.status,
                  [J.ERR_BAD_REQUEST, J.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n,
              ),
          );
}
function Gh(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || "";
}
function zh(e, t) {
    e = e || 10;
    const n = new Array(e),
        s = new Array(e);
    let r = 0,
        o = 0,
        i;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (c) {
            const u = Date.now(),
                a = s[o];
            (i || (i = u), (n[r] = c), (s[r] = u));
            let f = o,
                p = 0;
            for (; f !== r; ) ((p += n[f++]), (f = f % e));
            if (((r = (r + 1) % e), r === o && (o = (o + 1) % e), u - i < t))
                return;
            const m = a && u - a;
            return m ? Math.round((p * 1e3) / m) : void 0;
        }
    );
}
function Jh(e, t) {
    let n = 0,
        s = 1e3 / t,
        r,
        o;
    const i = (u, a = Date.now()) => {
        ((n = a), (r = null), o && (clearTimeout(o), (o = null)), e(...u));
    };
    return [
        (...u) => {
            const a = Date.now(),
                f = a - n;
            f >= s
                ? i(u, a)
                : ((r = u),
                  o ||
                      (o = setTimeout(() => {
                          ((o = null), i(r));
                      }, s - f)));
        },
        () => r && i(r),
    ];
}
const bs = (e, t, n = 3) => {
        let s = 0;
        const r = zh(50, 250);
        return Jh((o) => {
            const i = o.loaded,
                l = o.lengthComputable ? o.total : void 0,
                c = i - s,
                u = r(c),
                a = i <= l;
            s = i;
            const f = {
                loaded: i,
                total: l,
                progress: l ? i / l : void 0,
                bytes: c,
                rate: u || void 0,
                estimated: u && l && a ? (l - i) / u : void 0,
                event: o,
                lengthComputable: l != null,
                [t ? "download" : "upload"]: !0,
            };
            e(f);
        }, n);
    },
    mi = (e, t) => {
        const n = e != null;
        return [
            (s) => t[0]({ lengthComputable: n, total: e, loaded: s }),
            t[1],
        ];
    },
    gi =
        (e) =>
        (...t) =>
            b.asap(() => e(...t)),
    Xh = Ae.hasStandardBrowserEnv
        ? ((e, t) => (n) => (
              (n = new URL(n, Ae.origin)),
              e.protocol === n.protocol &&
                  e.host === n.host &&
                  (t || e.port === n.port)
          ))(
              new URL(Ae.origin),
              Ae.navigator && /(msie|trident)/i.test(Ae.navigator.userAgent),
          )
        : () => !0,
    Qh = Ae.hasStandardBrowserEnv
        ? {
              write(e, t, n, s, r, o) {
                  const i = [e + "=" + encodeURIComponent(t)];
                  (b.isNumber(n) &&
                      i.push("expires=" + new Date(n).toGMTString()),
                      b.isString(s) && i.push("path=" + s),
                      b.isString(r) && i.push("domain=" + r),
                      o === !0 && i.push("secure"),
                      (document.cookie = i.join("; ")));
              },
              read(e) {
                  const t = document.cookie.match(
                      new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
                  );
                  return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                  this.write(e, "", Date.now() - 864e5);
              },
          }
        : {
              write() {},
              read() {
                  return null;
              },
              remove() {},
          };
function Yh(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zh(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Cc(e, t, n) {
    let s = !Yh(t);
    return e && (s || n == !1) ? Zh(e, t) : t;
}
const yi = (e) => (e instanceof Le ? { ...e } : e);
function Gt(e, t) {
    t = t || {};
    const n = {};
    function s(u, a, f, p) {
        return b.isPlainObject(u) && b.isPlainObject(a)
            ? b.merge.call({ caseless: p }, u, a)
            : b.isPlainObject(a)
              ? b.merge({}, a)
              : b.isArray(a)
                ? a.slice()
                : a;
    }
    function r(u, a, f, p) {
        if (b.isUndefined(a)) {
            if (!b.isUndefined(u)) return s(void 0, u, f, p);
        } else return s(u, a, f, p);
    }
    function o(u, a) {
        if (!b.isUndefined(a)) return s(void 0, a);
    }
    function i(u, a) {
        if (b.isUndefined(a)) {
            if (!b.isUndefined(u)) return s(void 0, u);
        } else return s(void 0, a);
    }
    function l(u, a, f) {
        if (f in t) return s(u, a);
        if (f in e) return s(void 0, u);
    }
    const c = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: l,
        headers: (u, a, f) => r(yi(u), yi(a), f, !0),
    };
    return (
        b.forEach(Object.keys({ ...e, ...t }), function (a) {
            const f = c[a] || r,
                p = f(e[a], t[a], a);
            (b.isUndefined(p) && f !== l) || (n[a] = p);
        }),
        n
    );
}
const Oc = (e) => {
        const t = Gt({}, e);
        let {
            data: n,
            withXSRFToken: s,
            xsrfHeaderName: r,
            xsrfCookieName: o,
            headers: i,
            auth: l,
        } = t;
        if (
            ((t.headers = i = Le.from(i)),
            (t.url = Sc(
                Cc(t.baseURL, t.url, t.allowAbsoluteUrls),
                e.params,
                e.paramsSerializer,
            )),
            l &&
                i.set(
                    "Authorization",
                    "Basic " +
                        btoa(
                            (l.username || "") +
                                ":" +
                                (l.password
                                    ? unescape(encodeURIComponent(l.password))
                                    : ""),
                        ),
                ),
            b.isFormData(n))
        ) {
            if (Ae.hasStandardBrowserEnv || Ae.hasStandardBrowserWebWorkerEnv)
                i.setContentType(void 0);
            else if (b.isFunction(n.getHeaders)) {
                const c = n.getHeaders(),
                    u = ["content-type", "content-length"];
                Object.entries(c).forEach(([a, f]) => {
                    u.includes(a.toLowerCase()) && i.set(a, f);
                });
            }
        }
        if (
            Ae.hasStandardBrowserEnv &&
            (s && b.isFunction(s) && (s = s(t)), s || (s !== !1 && Xh(t.url)))
        ) {
            const c = r && o && Qh.read(o);
            c && i.set(r, c);
        }
        return t;
    },
    ep = typeof XMLHttpRequest < "u",
    tp =
        ep &&
        function (e) {
            return new Promise(function (n, s) {
                const r = Oc(e);
                let o = r.data;
                const i = Le.from(r.headers).normalize();
                let {
                        responseType: l,
                        onUploadProgress: c,
                        onDownloadProgress: u,
                    } = r,
                    a,
                    f,
                    p,
                    m,
                    g;
                function _() {
                    (m && m(),
                        g && g(),
                        r.cancelToken && r.cancelToken.unsubscribe(a),
                        r.signal && r.signal.removeEventListener("abort", a));
                }
                let v = new XMLHttpRequest();
                (v.open(r.method.toUpperCase(), r.url, !0),
                    (v.timeout = r.timeout));
                function x() {
                    if (!v) return;
                    const N = Le.from(
                            "getAllResponseHeaders" in v &&
                                v.getAllResponseHeaders(),
                        ),
                        B = {
                            data:
                                !l || l === "text" || l === "json"
                                    ? v.responseText
                                    : v.response,
                            status: v.status,
                            statusText: v.statusText,
                            headers: N,
                            config: e,
                            request: v,
                        };
                    (xc(
                        function ($) {
                            (n($), _());
                        },
                        function ($) {
                            (s($), _());
                        },
                        B,
                    ),
                        (v = null));
                }
                ("onloadend" in v
                    ? (v.onloadend = x)
                    : (v.onreadystatechange = function () {
                          !v ||
                              v.readyState !== 4 ||
                              (v.status === 0 &&
                                  !(
                                      v.responseURL &&
                                      v.responseURL.indexOf("file:") === 0
                                  )) ||
                              setTimeout(x);
                      }),
                    (v.onabort = function () {
                        v &&
                            (s(new J("Request aborted", J.ECONNABORTED, e, v)),
                            (v = null));
                    }),
                    (v.onerror = function (O) {
                        const B = O && O.message ? O.message : "Network Error",
                            Z = new J(B, J.ERR_NETWORK, e, v);
                        ((Z.event = O || null), s(Z), (v = null));
                    }),
                    (v.ontimeout = function () {
                        let O = r.timeout
                            ? "timeout of " + r.timeout + "ms exceeded"
                            : "timeout exceeded";
                        const B = r.transitional || vc;
                        (r.timeoutErrorMessage && (O = r.timeoutErrorMessage),
                            s(
                                new J(
                                    O,
                                    B.clarifyTimeoutError
                                        ? J.ETIMEDOUT
                                        : J.ECONNABORTED,
                                    e,
                                    v,
                                ),
                            ),
                            (v = null));
                    }),
                    o === void 0 && i.setContentType(null),
                    "setRequestHeader" in v &&
                        b.forEach(i.toJSON(), function (O, B) {
                            v.setRequestHeader(B, O);
                        }),
                    b.isUndefined(r.withCredentials) ||
                        (v.withCredentials = !!r.withCredentials),
                    l && l !== "json" && (v.responseType = r.responseType),
                    u &&
                        (([p, g] = bs(u, !0)),
                        v.addEventListener("progress", p)),
                    c &&
                        v.upload &&
                        (([f, m] = bs(c)),
                        v.upload.addEventListener("progress", f),
                        v.upload.addEventListener("loadend", m)),
                    (r.cancelToken || r.signal) &&
                        ((a = (N) => {
                            v &&
                                (s(!N || N.type ? new un(null, e, v) : N),
                                v.abort(),
                                (v = null));
                        }),
                        r.cancelToken && r.cancelToken.subscribe(a),
                        r.signal &&
                            (r.signal.aborted
                                ? a()
                                : r.signal.addEventListener("abort", a))));
                const T = Gh(r.url);
                if (T && Ae.protocols.indexOf(T) === -1) {
                    s(
                        new J(
                            "Unsupported protocol " + T + ":",
                            J.ERR_BAD_REQUEST,
                            e,
                        ),
                    );
                    return;
                }
                v.send(o || null);
            });
        },
    np = (e, t) => {
        const { length: n } = (e = e ? e.filter(Boolean) : []);
        if (t || n) {
            let s = new AbortController(),
                r;
            const o = function (u) {
                if (!r) {
                    ((r = !0), l());
                    const a = u instanceof Error ? u : this.reason;
                    s.abort(
                        a instanceof J
                            ? a
                            : new un(a instanceof Error ? a.message : a),
                    );
                }
            };
            let i =
                t &&
                setTimeout(() => {
                    ((i = null),
                        o(new J(`timeout ${t} of ms exceeded`, J.ETIMEDOUT)));
                }, t);
            const l = () => {
                e &&
                    (i && clearTimeout(i),
                    (i = null),
                    e.forEach((u) => {
                        u.unsubscribe
                            ? u.unsubscribe(o)
                            : u.removeEventListener("abort", o);
                    }),
                    (e = null));
            };
            e.forEach((u) => u.addEventListener("abort", o));
            const { signal: c } = s;
            return ((c.unsubscribe = () => b.asap(l)), c);
        }
    },
    sp = function* (e, t) {
        let n = e.byteLength;
        if (n < t) {
            yield e;
            return;
        }
        let s = 0,
            r;
        for (; s < n; ) ((r = s + t), yield e.slice(s, r), (s = r));
    },
    rp = async function* (e, t) {
        for await (const n of op(e)) yield* sp(n, t);
    },
    op = async function* (e) {
        if (e[Symbol.asyncIterator]) {
            yield* e;
            return;
        }
        const t = e.getReader();
        try {
            for (;;) {
                const { done: n, value: s } = await t.read();
                if (n) break;
                yield s;
            }
        } finally {
            await t.cancel();
        }
    },
    bi = (e, t, n, s) => {
        const r = rp(e, t);
        let o = 0,
            i,
            l = (c) => {
                i || ((i = !0), s && s(c));
            };
        return new ReadableStream(
            {
                async pull(c) {
                    try {
                        const { done: u, value: a } = await r.next();
                        if (u) {
                            (l(), c.close());
                            return;
                        }
                        let f = a.byteLength;
                        if (n) {
                            let p = (o += f);
                            n(p);
                        }
                        c.enqueue(new Uint8Array(a));
                    } catch (u) {
                        throw (l(u), u);
                    }
                },
                cancel(c) {
                    return (l(c), r.return());
                },
            },
            { highWaterMark: 2 },
        );
    },
    _i = 64 * 1024,
    { isFunction: Xn } = b,
    ip = (({ Request: e, Response: t }) => ({ Request: e, Response: t }))(
        b.global,
    ),
    { ReadableStream: Ei, TextEncoder: wi } = b.global,
    Si = (e, ...t) => {
        try {
            return !!e(...t);
        } catch {
            return !1;
        }
    },
    lp = (e) => {
        e = b.merge.call({ skipUndefined: !0 }, ip, e);
        const { fetch: t, Request: n, Response: s } = e,
            r = t ? Xn(t) : typeof fetch == "function",
            o = Xn(n),
            i = Xn(s);
        if (!r) return !1;
        const l = r && Xn(Ei),
            c =
                r &&
                (typeof wi == "function"
                    ? (
                          (g) => (_) =>
                              g.encode(_)
                      )(new wi())
                    : async (g) =>
                          new Uint8Array(await new n(g).arrayBuffer())),
            u =
                o &&
                l &&
                Si(() => {
                    let g = !1;
                    const _ = new n(Ae.origin, {
                        body: new Ei(),
                        method: "POST",
                        get duplex() {
                            return ((g = !0), "half");
                        },
                    }).headers.has("Content-Type");
                    return g && !_;
                }),
            a = i && l && Si(() => b.isReadableStream(new s("").body)),
            f = { stream: a && ((g) => g.body) };
        r &&
            ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(
                (g) => {
                    !f[g] &&
                        (f[g] = (_, v) => {
                            let x = _ && _[g];
                            if (x) return x.call(_);
                            throw new J(
                                `Response type '${g}' is not supported`,
                                J.ERR_NOT_SUPPORT,
                                v,
                            );
                        });
                },
            );
        const p = async (g) => {
                if (g == null) return 0;
                if (b.isBlob(g)) return g.size;
                if (b.isSpecCompliantForm(g))
                    return (
                        await new n(Ae.origin, {
                            method: "POST",
                            body: g,
                        }).arrayBuffer()
                    ).byteLength;
                if (b.isArrayBufferView(g) || b.isArrayBuffer(g))
                    return g.byteLength;
                if ((b.isURLSearchParams(g) && (g = g + ""), b.isString(g)))
                    return (await c(g)).byteLength;
            },
            m = async (g, _) => {
                const v = b.toFiniteNumber(g.getContentLength());
                return v ?? p(_);
            };
        return async (g) => {
            let {
                    url: _,
                    method: v,
                    data: x,
                    signal: T,
                    cancelToken: N,
                    timeout: O,
                    onDownloadProgress: B,
                    onUploadProgress: Z,
                    responseType: $,
                    headers: K,
                    withCredentials: D = "same-origin",
                    fetchOptions: q,
                } = Oc(g),
                ee = t || fetch;
            $ = $ ? ($ + "").toLowerCase() : "text";
            let I = np([T, N && N.toAbortSignal()], O),
                X = null;
            const le =
                I &&
                I.unsubscribe &&
                (() => {
                    I.unsubscribe();
                });
            let _e;
            try {
                if (
                    Z &&
                    u &&
                    v !== "get" &&
                    v !== "head" &&
                    (_e = await m(K, x)) !== 0
                ) {
                    let ye = new n(_, {
                            method: "POST",
                            body: x,
                            duplex: "half",
                        }),
                        pe;
                    if (
                        (b.isFormData(x) &&
                            (pe = ye.headers.get("content-type")) &&
                            K.setContentType(pe),
                        ye.body)
                    ) {
                        const [et, We] = mi(_e, bs(gi(Z)));
                        x = bi(ye.body, _i, et, We);
                    }
                }
                b.isString(D) || (D = D ? "include" : "omit");
                const Y = o && "credentials" in n.prototype,
                    G = {
                        ...q,
                        signal: I,
                        method: v.toUpperCase(),
                        headers: K.normalize().toJSON(),
                        body: x,
                        duplex: "half",
                        credentials: Y ? D : void 0,
                    };
                X = o && new n(_, G);
                let Q = await (o ? ee(X, q) : ee(_, G));
                const je = a && ($ === "stream" || $ === "response");
                if (a && (B || (je && le))) {
                    const ye = {};
                    ["status", "statusText", "headers"].forEach((tt) => {
                        ye[tt] = Q[tt];
                    });
                    const pe = b.toFiniteNumber(
                            Q.headers.get("content-length"),
                        ),
                        [et, We] = (B && mi(pe, bs(gi(B), !0))) || [];
                    Q = new s(
                        bi(Q.body, _i, et, () => {
                            (We && We(), le && le());
                        }),
                        ye,
                    );
                }
                $ = $ || "text";
                let Ze = await f[b.findKey(f, $) || "text"](Q, g);
                return (
                    !je && le && le(),
                    await new Promise((ye, pe) => {
                        xc(ye, pe, {
                            data: Ze,
                            headers: Le.from(Q.headers),
                            status: Q.status,
                            statusText: Q.statusText,
                            config: g,
                            request: X,
                        });
                    })
                );
            } catch (Y) {
                throw (
                    le && le(),
                    Y &&
                    Y.name === "TypeError" &&
                    /Load failed|fetch/i.test(Y.message)
                        ? Object.assign(
                              new J("Network Error", J.ERR_NETWORK, g, X),
                              { cause: Y.cause || Y },
                          )
                        : J.from(Y, Y && Y.code, g, X)
                );
            }
        };
    },
    cp = new Map(),
    Tc = (e) => {
        let t = e ? e.env : {};
        const { fetch: n, Request: s, Response: r } = t,
            o = [s, r, n];
        let i = o.length,
            l = i,
            c,
            u,
            a = cp;
        for (; l--; )
            ((c = o[l]),
                (u = a.get(c)),
                u === void 0 && a.set(c, (u = l ? new Map() : lp(t))),
                (a = u));
        return u;
    };
Tc();
const xr = { http: Ah, xhr: tp, fetch: { get: Tc } };
b.forEach(xr, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", { value: t });
        } catch {}
        Object.defineProperty(e, "adapterName", { value: t });
    }
});
const vi = (e) => `- ${e}`,
    ap = (e) => b.isFunction(e) || e === null || e === !1,
    Pc = {
        getAdapter: (e, t) => {
            e = b.isArray(e) ? e : [e];
            const { length: n } = e;
            let s, r;
            const o = {};
            for (let i = 0; i < n; i++) {
                s = e[i];
                let l;
                if (
                    ((r = s),
                    !ap(s) &&
                        ((r = xr[(l = String(s)).toLowerCase()]), r === void 0))
                )
                    throw new J(`Unknown adapter '${l}'`);
                if (r && (b.isFunction(r) || (r = r.get(t)))) break;
                o[l || "#" + i] = r;
            }
            if (!r) {
                const i = Object.entries(o).map(
                    ([c, u]) =>
                        `adapter ${c} ` +
                        (u === !1
                            ? "is not supported by the environment"
                            : "is not available in the build"),
                );
                let l = n
                    ? i.length > 1
                        ? `since :
` +
                          i.map(vi).join(`
`)
                        : " " + vi(i[0])
                    : "as no adapter specified";
                throw new J(
                    "There is no suitable adapter to dispatch the request " + l,
                    "ERR_NOT_SUPPORT",
                );
            }
            return r;
        },
        adapters: xr,
    };
function sr(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new un(null, e);
}
function Ri(e) {
    return (
        sr(e),
        (e.headers = Le.from(e.headers)),
        (e.data = nr.call(e, e.transformRequest)),
        ["post", "put", "patch"].indexOf(e.method) !== -1 &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1),
        Pc.getAdapter(
            e.adapter || qn.adapter,
            e,
        )(e).then(
            function (s) {
                return (
                    sr(e),
                    (s.data = nr.call(e, e.transformResponse, s)),
                    (s.headers = Le.from(s.headers)),
                    s
                );
            },
            function (s) {
                return (
                    Ac(s) ||
                        (sr(e),
                        s &&
                            s.response &&
                            ((s.response.data = nr.call(
                                e,
                                e.transformResponse,
                                s.response,
                            )),
                            (s.response.headers = Le.from(
                                s.response.headers,
                            )))),
                    Promise.reject(s)
                );
            },
        )
    );
}
const Nc = "1.12.2",
    Bs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
    (e, t) => {
        Bs[e] = function (s) {
            return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
        };
    },
);
const Ai = {};
Bs.transitional = function (t, n, s) {
    function r(o, i) {
        return (
            "[Axios v" +
            Nc +
            "] Transitional option '" +
            o +
            "'" +
            i +
            (s ? ". " + s : "")
        );
    }
    return (o, i, l) => {
        if (t === !1)
            throw new J(
                r(i, " has been removed" + (n ? " in " + n : "")),
                J.ERR_DEPRECATED,
            );
        return (
            n &&
                !Ai[i] &&
                ((Ai[i] = !0),
                console.warn(
                    r(
                        i,
                        " has been deprecated since v" +
                            n +
                            " and will be removed in the near future",
                    ),
                )),
            t ? t(o, i, l) : !0
        );
    };
};
Bs.spelling = function (t) {
    return (n, s) => (console.warn(`${s} is likely a misspelling of ${t}`), !0);
};
function up(e, t, n) {
    if (typeof e != "object")
        throw new J("options must be an object", J.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let r = s.length;
    for (; r-- > 0; ) {
        const o = s[r],
            i = t[o];
        if (i) {
            const l = e[o],
                c = l === void 0 || i(l, o, e);
            if (c !== !0)
                throw new J(
                    "option " + o + " must be " + c,
                    J.ERR_BAD_OPTION_VALUE,
                );
            continue;
        }
        if (n !== !0) throw new J("Unknown option " + o, J.ERR_BAD_OPTION);
    }
}
const rs = { assertOptions: up, validators: Bs },
    it = rs.validators;
let Kt = class {
    constructor(t) {
        ((this.defaults = t || {}),
            (this.interceptors = { request: new hi(), response: new hi() }));
    }
    async request(t, n) {
        try {
            return await this._request(t, n);
        } catch (s) {
            if (s instanceof Error) {
                let r = {};
                Error.captureStackTrace
                    ? Error.captureStackTrace(r)
                    : (r = new Error());
                const o = r.stack ? r.stack.replace(/^.+\n/, "") : "";
                try {
                    s.stack
                        ? o &&
                          !String(s.stack).endsWith(
                              o.replace(/^.+\n.+\n/, ""),
                          ) &&
                          (s.stack +=
                              `
` + o)
                        : (s.stack = o);
                } catch {}
            }
            throw s;
        }
    }
    _request(t, n) {
        (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = Gt(this.defaults, n)));
        const { transitional: s, paramsSerializer: r, headers: o } = n;
        (s !== void 0 &&
            rs.assertOptions(
                s,
                {
                    silentJSONParsing: it.transitional(it.boolean),
                    forcedJSONParsing: it.transitional(it.boolean),
                    clarifyTimeoutError: it.transitional(it.boolean),
                },
                !1,
            ),
            r != null &&
                (b.isFunction(r)
                    ? (n.paramsSerializer = { serialize: r })
                    : rs.assertOptions(
                          r,
                          { encode: it.function, serialize: it.function },
                          !0,
                      )),
            n.allowAbsoluteUrls !== void 0 ||
                (this.defaults.allowAbsoluteUrls !== void 0
                    ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
                    : (n.allowAbsoluteUrls = !0)),
            rs.assertOptions(
                n,
                {
                    baseUrl: it.spelling("baseURL"),
                    withXsrfToken: it.spelling("withXSRFToken"),
                },
                !0,
            ),
            (n.method = (
                n.method ||
                this.defaults.method ||
                "get"
            ).toLowerCase()));
        let i = o && b.merge(o.common, o[n.method]);
        (o &&
            b.forEach(
                ["delete", "get", "head", "post", "put", "patch", "common"],
                (g) => {
                    delete o[g];
                },
            ),
            (n.headers = Le.concat(i, o)));
        const l = [];
        let c = !0;
        this.interceptors.request.forEach(function (_) {
            (typeof _.runWhen == "function" && _.runWhen(n) === !1) ||
                ((c = c && _.synchronous), l.unshift(_.fulfilled, _.rejected));
        });
        const u = [];
        this.interceptors.response.forEach(function (_) {
            u.push(_.fulfilled, _.rejected);
        });
        let a,
            f = 0,
            p;
        if (!c) {
            const g = [Ri.bind(this), void 0];
            for (
                g.unshift(...l),
                    g.push(...u),
                    p = g.length,
                    a = Promise.resolve(n);
                f < p;
            )
                a = a.then(g[f++], g[f++]);
            return a;
        }
        p = l.length;
        let m = n;
        for (; f < p; ) {
            const g = l[f++],
                _ = l[f++];
            try {
                m = g(m);
            } catch (v) {
                _.call(this, v);
                break;
            }
        }
        try {
            a = Ri.call(this, m);
        } catch (g) {
            return Promise.reject(g);
        }
        for (f = 0, p = u.length; f < p; ) a = a.then(u[f++], u[f++]);
        return a;
    }
    getUri(t) {
        t = Gt(this.defaults, t);
        const n = Cc(t.baseURL, t.url, t.allowAbsoluteUrls);
        return Sc(n, t.params, t.paramsSerializer);
    }
};
b.forEach(["delete", "get", "head", "options"], function (t) {
    Kt.prototype[t] = function (n, s) {
        return this.request(
            Gt(s || {}, { method: t, url: n, data: (s || {}).data }),
        );
    };
});
b.forEach(["post", "put", "patch"], function (t) {
    function n(s) {
        return function (o, i, l) {
            return this.request(
                Gt(l || {}, {
                    method: t,
                    headers: s ? { "Content-Type": "multipart/form-data" } : {},
                    url: o,
                    data: i,
                }),
            );
        };
    }
    ((Kt.prototype[t] = n()), (Kt.prototype[t + "Form"] = n(!0)));
});
let fp = class Ic {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (o) {
            n = o;
        });
        const s = this;
        (this.promise.then((r) => {
            if (!s._listeners) return;
            let o = s._listeners.length;
            for (; o-- > 0; ) s._listeners[o](r);
            s._listeners = null;
        }),
            (this.promise.then = (r) => {
                let o;
                const i = new Promise((l) => {
                    (s.subscribe(l), (o = l));
                }).then(r);
                return (
                    (i.cancel = function () {
                        s.unsubscribe(o);
                    }),
                    i
                );
            }),
            t(function (o, i, l) {
                s.reason || ((s.reason = new un(o, i, l)), n(s.reason));
            }));
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1);
    }
    toAbortSignal() {
        const t = new AbortController(),
            n = (s) => {
                t.abort(s);
            };
        return (
            this.subscribe(n),
            (t.signal.unsubscribe = () => this.unsubscribe(n)),
            t.signal
        );
    }
    static source() {
        let t;
        return {
            token: new Ic(function (r) {
                t = r;
            }),
            cancel: t,
        };
    }
};
function dp(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function hp(e) {
    return b.isObject(e) && e.isAxiosError === !0;
}
const Cr = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(Cr).forEach(([e, t]) => {
    Cr[t] = e;
});
function Dc(e) {
    const t = new Kt(e),
        n = uc(Kt.prototype.request, t);
    return (
        b.extend(n, Kt.prototype, t, { allOwnKeys: !0 }),
        b.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (r) {
            return Dc(Gt(e, r));
        }),
        n
    );
}
const ge = Dc(qn);
ge.Axios = Kt;
ge.CanceledError = un;
ge.CancelToken = fp;
ge.isCancel = Ac;
ge.VERSION = Nc;
ge.toFormData = Us;
ge.AxiosError = J;
ge.Cancel = ge.CanceledError;
ge.all = function (t) {
    return Promise.all(t);
};
ge.spread = dp;
ge.isAxiosError = hp;
ge.mergeConfig = Gt;
ge.AxiosHeaders = Le;
ge.formToJSON = (e) => Rc(b.isHTMLForm(e) ? new FormData(e) : e);
ge.getAdapter = Pc.getAdapter;
ge.HttpStatusCode = Cr;
ge.default = ge;
const {
        Axios: Np,
        AxiosError: Ip,
        CanceledError: Dp,
        isCancel: Lp,
        CancelToken: Fp,
        VERSION: Mp,
        all: Up,
        Cancel: Bp,
        isAxiosError: jp,
        spread: kp,
        toFormData: Hp,
        AxiosHeaders: Vp,
        HttpStatusCode: $p,
        formToJSON: qp,
        getAdapter: Kp,
        mergeConfig: Wp,
    } = ge,
    at = ge.create({
        baseURL: "https://englishing.onrender.com",
        timeout: 1e4,
        headers: { "Content-Type": "application/json" },
    }),
    pp = {
        signUpEmail: (e) => at.post("/api/auth/sign_up/email", e),
        signUpCode: (e) => at.post("/api/auth/sign_up/code", e),
        signUpPassword: (e) => at.post("/api/auth/sign_up/password", e),
        login: (e) => at.post("/api/auth/login", e),
        tokenVerification: (e) =>
            at.get("/api/auth/token_verification", { headers: { jwt: e } }),
    },
    Gp = {
        userProfile: (e) =>
            at.get("/api/user/profile", { headers: { jwt: e } }),
    },
    zp = {
        getAllUnits: (e) => at.get("/api/unit", { headers: { jwt: e } }),
        getUnitById: (e, t) =>
            at.get(`/api/unit/${t}`, { headers: { jwt: e } }),
    },
    Jp = {
        checkAnswer: (e, t, n, s) =>
            at.post(`/api/exercise/check_answer/${t}/${n}`, s, {
                headers: { jwt: e },
            }),
        getExerciseById: (e, t, n) =>
            at.get(`/api/exercise/${t}/${n}`, { headers: { jwt: e } }),
    },
    mp = [
        {
            path: "/",
            name: "start",
            redirect: "login",
            component: () =>
                At(
                    () => import("./StartView-CEY9G2SV.js"),
                    __vite__mapDeps([0, 1]),
                ),
            children: [
                {
                    path: "login",
                    name: "login",
                    component: () =>
                        At(
                            () => import("./LoginComponent-CtA4wbne.js"),
                            __vite__mapDeps([2, 3]),
                        ),
                },
                {
                    path: "forgot",
                    name: "forgot",
                    component: () =>
                        At(
                            () =>
                                import("./ForgotPasswordComponent-C6QjYO_G.js"),
                            __vite__mapDeps([4, 5]),
                        ),
                },
                {
                    path: "sign_up",
                    name: "sign_up",
                    component: () =>
                        At(
                            () => import("./SignUpComponent-B2FMRVZC.js"),
                            __vite__mapDeps([6, 7]),
                        ),
                },
            ],
        },
        {
            path: "/home",
            name: "home",
            redirect: { name: "units-viewer" },
            component: () =>
                At(
                    () => import("./HomeView-Bt4eqxjj.js"),
                    __vite__mapDeps([8, 9, 10, 11, 12, 13, 14, 15]),
                ),
            meta: { requiresAuth: !0 },
            children: [
                {
                    path: "unit",
                    name: "units-viewer",
                    component: () =>
                        At(
                            () => import("./UnitsComponent-WB5ZBf-x.js"),
                            __vite__mapDeps([9, 10, 11, 12]),
                        ),
                    children: [
                        {
                            path: ":unitId",
                            name: "single-unit-view",
                            component: () =>
                                At(
                                    () =>
                                        import("./UnitViewComponent-CpSGTF5z.js"),
                                    __vite__mapDeps([13, 10, 11, 14]),
                                ),
                            props: !0,
                            children: [
                                {
                                    path: ":type/:exerciseId",
                                    name: "single-exercise-view",
                                    component: () =>
                                        At(
                                            () =>
                                                import("./ExerciseViewComponent-CRbTg0ms.js"),
                                            __vite__mapDeps([16, 17]),
                                        ),
                                    props: (e) => ({
                                        exerciseId: e.params.exerciseId,
                                        type: e.params.type,
                                        unitId: e.params.unitId,
                                    }),
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        { path: "/:pathMatch(.*)*", redirect: "login" },
    ],
    to = Td({ history: ld("/"), routes: mp });
let On = !1,
    rr = null;
const gp = async () => {
    if ((rr && clearTimeout(rr), !(await Bd())))
        throw new Error("invalid token");
    const {
        data: { expiresAt: e, msg: t, token: n },
    } = await pp.tokenVerification(await ys());
    if (t === "token renewed") jd(n, e);
    else if (t !== "token validated") return to.push({ name: "login" });
    ((On = !0),
        (rr = setTimeout(() => {
            On = !1;
        }, 54e4)));
};
to.beforeEach(async (e, t, n) => {
    const s = e.matched.some((l) => l.meta.requiresAuth),
        r = ac(),
        o = e.matched.some((l) => l.name === "single-exercise-view"),
        i = e.matched.some((l) => l.name === "single-unit-view");
    if ((r.setOpened(o, i), s)) {
        if (!(await ys())) {
            n({ name: "login" });
            return;
        }
        if (On) {
            n();
            return;
        }
        try {
            (await gp(), n());
        } catch {
            (Sr(), (On = !1), n({ name: "login" }));
        }
    } else (e.name === "login" && (await ys()) && (Sr(), (On = !1)), n());
});
pf(Fd).use(to).use(yf()).mount("#app");
export {
    _p as A,
    zp as B,
    Jp as C,
    xa as D,
    bp as E,
    Ge as F,
    Sp as T,
    Id as _,
    Pe as a,
    Ep as b,
    _u as c,
    Gr as d,
    Ho as e,
    Rp as f,
    Ap as g,
    of as h,
    pp as i,
    vu as j,
    wp as k,
    xp as l,
    Cp as m,
    Dr as n,
    Ul as o,
    Eu as p,
    Ir as q,
    Ha as r,
    jd as s,
    Wc as t,
    ac as u,
    vp as v,
    yp as w,
    Gp as x,
    ys as y,
    Op as z,
};
