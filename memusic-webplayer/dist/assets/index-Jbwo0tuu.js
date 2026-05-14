const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-z0YVMzfJ.js",
      "assets/ArtistCard-ClG1BOwI.js",
      "assets/Search-D2B-HYiH.js",
      "assets/SongList-D60ljWD0.js",
      "assets/PlaylistCard-D566d1jC.js",
      "assets/Library-BGbSOghf.js",
      "assets/AlbumView-ByXXfJfh.js",
      "assets/CinematicHeader-B03DhtP3.js",
      "assets/PlaylistView-txFFbOb9.js",
      "assets/ArtistView-1ISDklv5.js",
      "assets/ApiPlaylistView-BzYJ4eQ1.js",
    ]),
) => i.map((i) => d[i]);
var Yp = Object.defineProperty;
var Xp = (e) => {
  throw TypeError(e);
};
var Zp = (e, t, n) =>
  t in e
    ? Yp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var pe = (e, t, n) => Zp(e, typeof t != "symbol" ? t + "" : t, n);
var hr = (e, t, n) =>
  t.has(e)
    ? Xp("Cannot add the same private member more than once")
    : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n);
function eh(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const s in r)
        if (s !== "default" && !(s in e)) {
          const o = Object.getOwnPropertyDescriptor(r, s);
          o &&
            Object.defineProperty(
              e,
              s,
              o.get ? o : { enumerable: !0, get: () => r[s] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const o of s)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const o = {};
    return (
      s.integrity && (o.integrity = s.integrity),
      s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : s.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const o = n(s);
    fetch(s.href, o);
  }
})();
function xu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wu = { exports: {} },
  jo = {},
  ku = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var os = Symbol.for("react.element"),
  th = Symbol.for("react.portal"),
  nh = Symbol.for("react.fragment"),
  rh = Symbol.for("react.strict_mode"),
  sh = Symbol.for("react.profiler"),
  oh = Symbol.for("react.provider"),
  ih = Symbol.for("react.context"),
  ah = Symbol.for("react.forward_ref"),
  lh = Symbol.for("react.suspense"),
  ch = Symbol.for("react.memo"),
  uh = Symbol.for("react.lazy"),
  Ll = Symbol.iterator;
function dh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ll && e[Ll]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Cu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Su = Object.assign,
  _u = {};
function cr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = _u),
    (this.updater = n || Cu));
}
cr.prototype.isReactComponent = {};
cr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bu() {}
bu.prototype = cr.prototype;
function Ia(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = _u),
    (this.updater = n || Cu));
}
var Aa = (Ia.prototype = new bu());
Aa.constructor = Ia;
Su(Aa, cr.prototype);
Aa.isPureReactComponent = !0;
var Dl = Array.isArray,
  ju = Object.prototype.hasOwnProperty,
  La = { current: null },
  Eu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pu(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ju.call(t, r) && !Eu.hasOwnProperty(r) && (s[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) s.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    s.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) s[r] === void 0 && (s[r] = l[r]);
  return {
    $$typeof: os,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: La.current,
  };
}
function fh(e, t) {
  return {
    $$typeof: os,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Da(e) {
  return typeof e == "object" && e !== null && e.$$typeof === os;
}
function ph(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fl = /\/+/g;
function qo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ph("" + e.key)
    : t.toString(36);
}
function Is(e, t, n, r, s) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case os:
          case th:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + qo(i, 0) : r),
      Dl(s)
        ? ((n = ""),
          e != null && (n = e.replace(Fl, "$&/") + "/"),
          Is(s, t, n, "", function (u) {
            return u;
          }))
        : s != null &&
          (Da(s) &&
            (s = fh(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Fl, "$&/") + "/") +
                e,
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Dl(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var c = r + qo(o, l);
      i += Is(o, t, n, c, s);
    }
  else if (((c = dh(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(o = e.next()).done; )
      ((o = o.value), (c = r + qo(o, l++)), (i += Is(o, t, n, c, s)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return i;
}
function ms(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    Is(e, r, "", "", function (o) {
      return t.call(n, o, s++);
    }),
    r
  );
}
function hh(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  As = { transition: null },
  mh = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: As,
    ReactCurrentOwner: La,
  };
function Tu() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
  map: ms,
  forEach: function (e, t, n) {
    ms(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ms(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ms(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Da(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
Z.Component = cr;
Z.Fragment = nh;
Z.Profiler = sh;
Z.PureComponent = Ia;
Z.StrictMode = rh;
Z.Suspense = lh;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mh;
Z.act = Tu;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Su({}, e.props),
    s = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = La.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      ju.call(t, c) &&
        !Eu.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: os, type: e.type, key: s, ref: o, props: r, _owner: i };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: ih,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: oh, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = Pu;
Z.createFactory = function (e) {
  var t = Pu.bind(null, e);
  return ((t.type = e), t);
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: ah, render: e };
};
Z.isValidElement = Da;
Z.lazy = function (e) {
  return { $$typeof: uh, _payload: { _status: -1, _result: e }, _init: hh };
};
Z.memo = function (e, t) {
  return { $$typeof: ch, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = As.transition;
  As.transition = {};
  try {
    e();
  } finally {
    As.transition = t;
  }
};
Z.unstable_act = Tu;
Z.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return He.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
Z.useId = function () {
  return He.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return He.current.useRef(e);
};
Z.useState = function (e) {
  return He.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return He.current.useTransition();
};
Z.version = "18.3.1";
ku.exports = Z;
var y = ku.exports;
const Se = xu(y);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gh = y,
  yh = Symbol.for("react.element"),
  vh = Symbol.for("react.fragment"),
  xh = Object.prototype.hasOwnProperty,
  wh = gh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  kh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ru(e, t, n) {
  var r,
    s = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) xh.call(t, r) && !kh.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: yh,
    type: e,
    key: o,
    ref: i,
    props: s,
    _owner: wh.current,
  };
}
jo.Fragment = vh;
jo.jsx = Ru;
jo.jsxs = Ru;
wu.exports = jo;
var a = wu.exports,
  bi = {},
  Nu = { exports: {} },
  ot = {},
  Mu = { exports: {} },
  Iu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(S, z) {
    var j = S.length;
    S.push(z);
    e: for (; 0 < j; ) {
      var O = (j - 1) >>> 1,
        q = S[O];
      if (0 < s(q, z)) ((S[O] = z), (S[j] = q), (j = O));
      else break e;
    }
  }
  function n(S) {
    return S.length === 0 ? null : S[0];
  }
  function r(S) {
    if (S.length === 0) return null;
    var z = S[0],
      j = S.pop();
    if (j !== z) {
      S[0] = j;
      e: for (var O = 0, q = S.length, se = q >>> 1; O < se; ) {
        var X = 2 * (O + 1) - 1,
          L = S[X],
          W = X + 1,
          ee = S[W];
        if (0 > s(L, j))
          W < q && 0 > s(ee, L)
            ? ((S[O] = ee), (S[W] = j), (O = W))
            : ((S[O] = L), (S[X] = j), (O = X));
        else if (W < q && 0 > s(ee, j)) ((S[O] = ee), (S[W] = j), (O = W));
        else break e;
      }
    }
    return z;
  }
  function s(S, z) {
    var j = S.sortIndex - z.sortIndex;
    return j !== 0 ? j : S.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var c = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    v = !1,
    w = !1,
    x = !1,
    R = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(S) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= S)
        (r(u), (z.sortIndex = z.expirationTime), t(c, z));
      else break;
      z = n(u);
    }
  }
  function k(S) {
    if (((x = !1), g(S), !w))
      if (n(c) !== null) ((w = !0), A(b));
      else {
        var z = n(u);
        z !== null && N(k, z.startTime - S);
      }
  }
  function b(S, z) {
    ((w = !1), x && ((x = !1), m(F), (F = -1)), (v = !0));
    var j = p;
    try {
      for (
        g(z), f = n(c);
        f !== null && (!(f.expirationTime > z) || (S && !G()));
      ) {
        var O = f.callback;
        if (typeof O == "function") {
          ((f.callback = null), (p = f.priorityLevel));
          var q = O(f.expirationTime <= z);
          ((z = e.unstable_now()),
            typeof q == "function" ? (f.callback = q) : f === n(c) && r(c),
            g(z));
        } else r(c);
        f = n(c);
      }
      if (f !== null) var se = !0;
      else {
        var X = n(u);
        (X !== null && N(k, X.startTime - z), (se = !1));
      }
      return se;
    } finally {
      ((f = null), (p = j), (v = !1));
    }
  }
  var P = !1,
    E = null,
    F = -1,
    V = 5,
    B = -1;
  function G() {
    return !(e.unstable_now() - B < V);
  }
  function le() {
    if (E !== null) {
      var S = e.unstable_now();
      B = S;
      var z = !0;
      try {
        z = E(!0, S);
      } finally {
        z ? U() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var U;
  if (typeof h == "function")
    U = function () {
      h(le);
    };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(),
      M = T.port2;
    ((T.port1.onmessage = le),
      (U = function () {
        M.postMessage(null);
      }));
  } else
    U = function () {
      R(le, 0);
    };
  function A(S) {
    ((E = S), P || ((P = !0), U()));
  }
  function N(S, z) {
    F = R(function () {
      S(e.unstable_now());
    }, z);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (S) {
      S.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), A(b));
    }),
    (e.unstable_forceFrameRate = function (S) {
      0 > S || 125 < S
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < S ? Math.floor(1e3 / S) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (S) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var j = p;
      p = z;
      try {
        return S();
      } finally {
        p = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (S, z) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var j = p;
      p = S;
      try {
        return z();
      } finally {
        p = j;
      }
    }),
    (e.unstable_scheduleCallback = function (S, z, j) {
      var O = e.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? O + j : O))
          : (j = O),
        S)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = j + q),
        (S = {
          id: d++,
          callback: z,
          priorityLevel: S,
          startTime: j,
          expirationTime: q,
          sortIndex: -1,
        }),
        j > O
          ? ((S.sortIndex = j),
            t(u, S),
            n(c) === null &&
              S === n(u) &&
              (x ? (m(F), (F = -1)) : (x = !0), N(k, j - O)))
          : ((S.sortIndex = q), t(c, S), w || v || ((w = !0), A(b))),
        S
      );
    }),
    (e.unstable_shouldYield = G),
    (e.unstable_wrapCallback = function (S) {
      var z = p;
      return function () {
        var j = p;
        p = z;
        try {
          return S.apply(this, arguments);
        } finally {
          p = j;
        }
      };
    }));
})(Iu);
Mu.exports = Iu;
var Ch = Mu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sh = y,
  st = Ch;
function I(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Au = new Set(),
  Br = {};
function Pn(e, t) {
  (tr(e, t), tr(e + "Capture", t));
}
function tr(e, t) {
  for (Br[e] = t, e = 0; e < t.length; e++) Au.add(t[e]);
}
var Ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ji = Object.prototype.hasOwnProperty,
  _h =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ol = {},
  zl = {};
function bh(e) {
  return ji.call(zl, e)
    ? !0
    : ji.call(Ol, e)
      ? !1
      : _h.test(e)
        ? (zl[e] = !0)
        : ((Ol[e] = !0), !1);
}
function jh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Eh(e, t, n, r) {
  if (t === null || typeof t > "u" || jh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, s, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Fa = /[\-:]([a-z])/g;
function Oa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fa, Oa);
    Ae[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Fa, Oa);
    Ae[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Fa, Oa);
  Ae[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function za(e, t, n, r) {
  var s = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Eh(t, n, s, r) && (n = null),
    r || s === null
      ? bh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
        ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
        : ((t = s.attributeName),
          (r = s.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((s = s.type),
              (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bt = Sh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gs = Symbol.for("react.element"),
  Dn = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  $a = Symbol.for("react.strict_mode"),
  Ei = Symbol.for("react.profiler"),
  Lu = Symbol.for("react.provider"),
  Du = Symbol.for("react.context"),
  Ba = Symbol.for("react.forward_ref"),
  Pi = Symbol.for("react.suspense"),
  Ti = Symbol.for("react.suspense_list"),
  Ua = Symbol.for("react.memo"),
  Wt = Symbol.for("react.lazy"),
  Fu = Symbol.for("react.offscreen"),
  $l = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($l && e[$l]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ve = Object.assign,
  Go;
function br(e) {
  if (Go === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Go = (t && t[1]) || "";
    }
  return (
    `
` +
    Go +
    e
  );
}
var Ko = !1;
function Jo(e, t) {
  if (!e || Ko) return "";
  Ko = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          o = r.stack.split(`
`),
          i = s.length - 1,
          l = o.length - 1;
        1 <= i && 0 <= l && s[i] !== o[l];
      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (s[i] !== o[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || s[i] !== o[l])) {
                var c =
                  `
` + s[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    ((Ko = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? br(e) : "";
}
function Ph(e) {
  switch (e.tag) {
    case 5:
      return br(e.type);
    case 16:
      return br("Lazy");
    case 13:
      return br("Suspense");
    case 19:
      return br("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Jo(e.type, !1)), e);
    case 11:
      return ((e = Jo(e.type.render, !1)), e);
    case 1:
      return ((e = Jo(e.type, !0)), e);
    default:
      return "";
  }
}
function Ri(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Fn:
      return "Fragment";
    case Dn:
      return "Portal";
    case Ei:
      return "Profiler";
    case $a:
      return "StrictMode";
    case Pi:
      return "Suspense";
    case Ti:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Du:
        return (e.displayName || "Context") + ".Consumer";
      case Lu:
        return (e._context.displayName || "Context") + ".Provider";
      case Ba:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ua:
        return (
          (t = e.displayName || null),
          t !== null ? t : Ri(e.type) || "Memo"
        );
      case Wt:
        ((t = e._payload), (e = e._init));
        try {
          return Ri(e(t));
        } catch {}
    }
  return null;
}
function Th(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ri(t);
    case 8:
      return t === $a ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function cn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ou(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rh(e) {
  var t = Ou(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (i) {
          ((r = "" + i), o.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function ys(e) {
  e._valueTracker || (e._valueTracker = Rh(e));
}
function zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ou(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ni(e, t) {
  var n = t.checked;
  return ve({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = cn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function $u(e, t) {
  ((t = t.checked), t != null && za(e, "checked", t, !1));
}
function Mi(e, t) {
  $u(e, t);
  var n = cn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Ii(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ii(e, t.type, cn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Ul(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Ii(e, t, n) {
  (t !== "number" || Xs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var jr = Array.isArray;
function Gn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      ((s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + cn(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ai(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(I(91));
  return ve({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ql(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(I(92));
      if (jr(n)) {
        if (1 < n.length) throw Error(I(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: cn(n) };
}
function Bu(e, t) {
  var n = cn(t.value),
    r = cn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Vl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Uu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var vs,
  Qu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vs = vs || document.createElement("div"),
          vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vs.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ur(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Nh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rr).forEach(function (e) {
  Nh.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rr[t] = Rr[e]));
  });
});
function Vu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rr.hasOwnProperty(e) && Rr[e])
      ? ("" + t).trim()
      : t + "px";
}
function Hu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Vu(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s));
    }
}
var Mh = ve(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function Di(e, t) {
  if (t) {
    if (Mh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(I(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(I(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(I(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(I(62));
  }
}
function Fi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Oi = null;
function Qa(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zi = null,
  Kn = null,
  Jn = null;
function Hl(e) {
  if ((e = ls(e))) {
    if (typeof zi != "function") throw Error(I(280));
    var t = e.stateNode;
    t && ((t = No(t)), zi(e.stateNode, e.type, t));
  }
}
function Wu(e) {
  Kn ? (Jn ? Jn.push(e) : (Jn = [e])) : (Kn = e);
}
function qu() {
  if (Kn) {
    var e = Kn,
      t = Jn;
    if (((Jn = Kn = null), Hl(e), t)) for (e = 0; e < t.length; e++) Hl(t[e]);
  }
}
function Gu(e, t) {
  return e(t);
}
function Ku() {}
var Yo = !1;
function Ju(e, t, n) {
  if (Yo) return e(t, n);
  Yo = !0;
  try {
    return Gu(e, t, n);
  } finally {
    ((Yo = !1), (Kn !== null || Jn !== null) && (Ku(), qu()));
  }
}
function Qr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = No(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(I(231, t, typeof n));
  return n;
}
var $i = !1;
if (Ft)
  try {
    var gr = {};
    (Object.defineProperty(gr, "passive", {
      get: function () {
        $i = !0;
      },
    }),
      window.addEventListener("test", gr, gr),
      window.removeEventListener("test", gr, gr));
  } catch {
    $i = !1;
  }
function Ih(e, t, n, r, s, o, i, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Nr = !1,
  Zs = null,
  eo = !1,
  Bi = null,
  Ah = {
    onError: function (e) {
      ((Nr = !0), (Zs = e));
    },
  };
function Lh(e, t, n, r, s, o, i, l, c) {
  ((Nr = !1), (Zs = null), Ih.apply(Ah, arguments));
}
function Dh(e, t, n, r, s, o, i, l, c) {
  if ((Lh.apply(this, arguments), Nr)) {
    if (Nr) {
      var u = Zs;
      ((Nr = !1), (Zs = null));
    } else throw Error(I(198));
    eo || ((eo = !0), (Bi = u));
  }
}
function Tn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Yu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Wl(e) {
  if (Tn(e) !== e) throw Error(I(188));
}
function Fh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tn(e)), t === null)) throw Error(I(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var o = s.alternate;
    if (o === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === o.child) {
      for (o = s.child; o; ) {
        if (o === n) return (Wl(s), e);
        if (o === r) return (Wl(s), t);
        o = o.sibling;
      }
      throw Error(I(188));
    }
    if (n.return !== r.return) ((n = s), (r = o));
    else {
      for (var i = !1, l = s.child; l; ) {
        if (l === n) {
          ((i = !0), (n = s), (r = o));
          break;
        }
        if (l === r) {
          ((i = !0), (r = s), (n = o));
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = o.child; l; ) {
          if (l === n) {
            ((i = !0), (n = o), (r = s));
            break;
          }
          if (l === r) {
            ((i = !0), (r = o), (n = s));
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(I(189));
      }
    }
    if (n.alternate !== r) throw Error(I(190));
  }
  if (n.tag !== 3) throw Error(I(188));
  return n.stateNode.current === n ? e : t;
}
function Xu(e) {
  return ((e = Fh(e)), e !== null ? Zu(e) : null);
}
function Zu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Zu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ed = st.unstable_scheduleCallback,
  ql = st.unstable_cancelCallback,
  Oh = st.unstable_shouldYield,
  zh = st.unstable_requestPaint,
  Ce = st.unstable_now,
  $h = st.unstable_getCurrentPriorityLevel,
  Va = st.unstable_ImmediatePriority,
  td = st.unstable_UserBlockingPriority,
  to = st.unstable_NormalPriority,
  Bh = st.unstable_LowPriority,
  nd = st.unstable_IdlePriority,
  Eo = null,
  jt = null;
function Uh(e) {
  if (jt && typeof jt.onCommitFiberRoot == "function")
    try {
      jt.onCommitFiberRoot(Eo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vt = Math.clz32 ? Math.clz32 : Hh,
  Qh = Math.log,
  Vh = Math.LN2;
function Hh(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Qh(e) / Vh) | 0)) | 0);
}
var xs = 64,
  ws = 4194304;
function Er(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function no(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~s;
    l !== 0 ? (r = Er(l)) : ((o &= i), o !== 0 && (r = Er(o)));
  } else ((i = n & ~s), i !== 0 ? (r = Er(i)) : o !== 0 && (r = Er(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (o = t & -t), s >= o || (s === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - vt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
  return r;
}
function Wh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var i = 31 - vt(o),
      l = 1 << i,
      c = s[i];
    (c === -1
      ? (!(l & n) || l & r) && (s[i] = Wh(l, t))
      : c <= t && (e.expiredLanes |= l),
      (o &= ~l));
  }
}
function Ui(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function rd() {
  var e = xs;
  return ((xs <<= 1), !(xs & 4194240) && (xs = 64), e);
}
function Xo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function is(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vt(t)),
    (e[t] = n));
}
function Gh(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - vt(n),
      o = 1 << s;
    ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~o));
  }
}
function Ha(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vt(n),
      s = 1 << r;
    ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
  }
}
var ae = 0;
function sd(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var od,
  Wa,
  id,
  ad,
  ld,
  Qi = !1,
  ks = [],
  Zt = null,
  en = null,
  tn = null,
  Vr = new Map(),
  Hr = new Map(),
  Gt = [],
  Kh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Gl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      en = null;
      break;
    case "mouseover":
    case "mouseout":
      tn = null;
      break;
    case "pointerover":
    case "pointerout":
      Vr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Hr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, s, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [s],
      }),
      t !== null && ((t = ls(t)), t !== null && Wa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function Jh(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return ((Zt = yr(Zt, e, t, n, r, s)), !0);
    case "dragenter":
      return ((en = yr(en, e, t, n, r, s)), !0);
    case "mouseover":
      return ((tn = yr(tn, e, t, n, r, s)), !0);
    case "pointerover":
      var o = s.pointerId;
      return (Vr.set(o, yr(Vr.get(o) || null, e, t, n, r, s)), !0);
    case "gotpointercapture":
      return (
        (o = s.pointerId),
        Hr.set(o, yr(Hr.get(o) || null, e, t, n, r, s)),
        !0
      );
  }
  return !1;
}
function cd(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = Tn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yu(n)), t !== null)) {
          ((e.blockedOn = t),
            ld(e.priority, function () {
              id(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ls(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Vi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Oi = r), n.target.dispatchEvent(r), (Oi = null));
    } else return ((t = ls(n)), t !== null && Wa(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Kl(e, t, n) {
  Ls(e) && n.delete(t);
}
function Yh() {
  ((Qi = !1),
    Zt !== null && Ls(Zt) && (Zt = null),
    en !== null && Ls(en) && (en = null),
    tn !== null && Ls(tn) && (tn = null),
    Vr.forEach(Kl),
    Hr.forEach(Kl));
}
function vr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Qi ||
      ((Qi = !0),
      st.unstable_scheduleCallback(st.unstable_NormalPriority, Yh)));
}
function Wr(e) {
  function t(s) {
    return vr(s, e);
  }
  if (0 < ks.length) {
    vr(ks[0], e);
    for (var n = 1; n < ks.length; n++) {
      var r = ks[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Zt !== null && vr(Zt, e),
      en !== null && vr(en, e),
      tn !== null && vr(tn, e),
      Vr.forEach(t),
      Hr.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    ((r = Gt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); )
    (cd(n), n.blockedOn === null && Gt.shift());
}
var Yn = Bt.ReactCurrentBatchConfig,
  ro = !0;
function Xh(e, t, n, r) {
  var s = ae,
    o = Yn.transition;
  Yn.transition = null;
  try {
    ((ae = 1), qa(e, t, n, r));
  } finally {
    ((ae = s), (Yn.transition = o));
  }
}
function Zh(e, t, n, r) {
  var s = ae,
    o = Yn.transition;
  Yn.transition = null;
  try {
    ((ae = 4), qa(e, t, n, r));
  } finally {
    ((ae = s), (Yn.transition = o));
  }
}
function qa(e, t, n, r) {
  if (ro) {
    var s = Vi(e, t, n, r);
    if (s === null) (li(e, t, r, so, n), Gl(e, r));
    else if (Jh(s, e, t, n, r)) r.stopPropagation();
    else if ((Gl(e, r), t & 4 && -1 < Kh.indexOf(e))) {
      for (; s !== null; ) {
        var o = ls(s);
        if (
          (o !== null && od(o),
          (o = Vi(e, t, n, r)),
          o === null && li(e, t, r, so, n),
          o === s)
        )
          break;
        s = o;
      }
      s !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var so = null;
function Vi(e, t, n, r) {
  if (((so = null), (e = Qa(r)), (e = vn(e)), e !== null))
    if (((t = Tn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((so = e), null);
}
function ud(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($h()) {
        case Va:
          return 1;
        case td:
          return 4;
        case to:
        case Bh:
          return 16;
        case nd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Jt = null,
  Ga = null,
  Ds = null;
function dd() {
  if (Ds) return Ds;
  var e,
    t = Ga,
    n = t.length,
    r,
    s = "value" in Jt ? Jt.value : Jt.textContent,
    o = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[o - r]; r++);
  return (Ds = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Fs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Cs() {
  return !0;
}
function Jl() {
  return !1;
}
function it(e) {
  function t(n, r, s, o, i) {
    ((this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null));
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Cs
        : Jl),
      (this.isPropagationStopped = Jl),
      this
    );
  }
  return (
    ve(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Cs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Cs));
      },
      persist: function () {},
      isPersistent: Cs,
    }),
    t
  );
}
var ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ka = it(ur),
  as = ve({}, ur, { view: 0, detail: 0 }),
  em = it(as),
  Zo,
  ei,
  xr,
  Po = ve({}, as, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ja,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== xr &&
            (xr && e.type === "mousemove"
              ? ((Zo = e.screenX - xr.screenX), (ei = e.screenY - xr.screenY))
              : (ei = Zo = 0),
            (xr = e)),
          Zo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ei;
    },
  }),
  Yl = it(Po),
  tm = ve({}, Po, { dataTransfer: 0 }),
  nm = it(tm),
  rm = ve({}, as, { relatedTarget: 0 }),
  ti = it(rm),
  sm = ve({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  om = it(sm),
  im = ve({}, ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  am = it(im),
  lm = ve({}, ur, { data: 0 }),
  Xl = it(lm),
  cm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  um = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = dm[e]) ? !!t[e] : !1;
}
function Ja() {
  return fm;
}
var pm = ve({}, as, {
    key: function (e) {
      if (e.key) {
        var t = cm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? um[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ja,
    charCode: function (e) {
      return e.type === "keypress" ? Fs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fs(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  hm = it(pm),
  mm = ve({}, Po, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Zl = it(mm),
  gm = ve({}, as, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ja,
  }),
  ym = it(gm),
  vm = ve({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xm = it(vm),
  wm = ve({}, Po, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  km = it(wm),
  Cm = [9, 13, 27, 32],
  Ya = Ft && "CompositionEvent" in window,
  Mr = null;
Ft && "documentMode" in document && (Mr = document.documentMode);
var Sm = Ft && "TextEvent" in window && !Mr,
  fd = Ft && (!Ya || (Mr && 8 < Mr && 11 >= Mr)),
  ec = " ",
  tc = !1;
function pd(e, t) {
  switch (e) {
    case "keyup":
      return Cm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hd(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var On = !1;
function _m(e, t) {
  switch (e) {
    case "compositionend":
      return hd(t);
    case "keypress":
      return t.which !== 32 ? null : ((tc = !0), ec);
    case "textInput":
      return ((e = t.data), e === ec && tc ? null : e);
    default:
      return null;
  }
}
function bm(e, t) {
  if (On)
    return e === "compositionend" || (!Ya && pd(e, t))
      ? ((e = dd()), (Ds = Ga = Jt = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jm[e.type] : t === "textarea";
}
function md(e, t, n, r) {
  (Wu(r),
    (t = oo(t, "onChange")),
    0 < t.length &&
      ((n = new Ka("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var Ir = null,
  qr = null;
function Em(e) {
  jd(e, 0);
}
function To(e) {
  var t = Bn(e);
  if (zu(t)) return e;
}
function Pm(e, t) {
  if (e === "change") return t;
}
var gd = !1;
if (Ft) {
  var ni;
  if (Ft) {
    var ri = "oninput" in document;
    if (!ri) {
      var rc = document.createElement("div");
      (rc.setAttribute("oninput", "return;"),
        (ri = typeof rc.oninput == "function"));
    }
    ni = ri;
  } else ni = !1;
  gd = ni && (!document.documentMode || 9 < document.documentMode);
}
function sc() {
  Ir && (Ir.detachEvent("onpropertychange", yd), (qr = Ir = null));
}
function yd(e) {
  if (e.propertyName === "value" && To(qr)) {
    var t = [];
    (md(t, qr, e, Qa(e)), Ju(Em, t));
  }
}
function Tm(e, t, n) {
  e === "focusin"
    ? (sc(), (Ir = t), (qr = n), Ir.attachEvent("onpropertychange", yd))
    : e === "focusout" && sc();
}
function Rm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return To(qr);
}
function Nm(e, t) {
  if (e === "click") return To(t);
}
function Mm(e, t) {
  if (e === "input" || e === "change") return To(t);
}
function Im(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wt = typeof Object.is == "function" ? Object.is : Im;
function Gr(e, t) {
  if (wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!ji.call(t, s) || !wt(e[s], t[s])) return !1;
  }
  return !0;
}
function oc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ic(e, t) {
  var n = oc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = oc(n);
  }
}
function vd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? vd(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function xd() {
  for (var e = window, t = Xs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xs(e.document);
  }
  return t;
}
function Xa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Am(e) {
  var t = xd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    vd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Xa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          o = Math.min(r.start, s);
        ((r = r.end === void 0 ? o : Math.min(r.end, s)),
          !e.extend && o > r && ((s = r), (r = o), (o = s)),
          (s = ic(n, o)));
        var i = ic(n, r);
        s &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var Lm = Ft && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Hi = null,
  Ar = null,
  Wi = !1;
function ac(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wi ||
    zn == null ||
    zn !== Xs(r) ||
    ((r = zn),
    "selectionStart" in r && Xa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ar && Gr(Ar, r)) ||
      ((Ar = r),
      (r = oo(Hi, "onSelect")),
      0 < r.length &&
        ((t = new Ka("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function Ss(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $n = {
    animationend: Ss("Animation", "AnimationEnd"),
    animationiteration: Ss("Animation", "AnimationIteration"),
    animationstart: Ss("Animation", "AnimationStart"),
    transitionend: Ss("Transition", "TransitionEnd"),
  },
  si = {},
  wd = {};
Ft &&
  ((wd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $n.animationend.animation,
    delete $n.animationiteration.animation,
    delete $n.animationstart.animation),
  "TransitionEvent" in window || delete $n.transitionend.transition);
function Ro(e) {
  if (si[e]) return si[e];
  if (!$n[e]) return e;
  var t = $n[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wd) return (si[e] = t[n]);
  return e;
}
var kd = Ro("animationend"),
  Cd = Ro("animationiteration"),
  Sd = Ro("animationstart"),
  _d = Ro("transitionend"),
  bd = new Map(),
  lc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function dn(e, t) {
  (bd.set(e, t), Pn(t, [e]));
}
for (var oi = 0; oi < lc.length; oi++) {
  var ii = lc[oi],
    Dm = ii.toLowerCase(),
    Fm = ii[0].toUpperCase() + ii.slice(1);
  dn(Dm, "on" + Fm);
}
dn(kd, "onAnimationEnd");
dn(Cd, "onAnimationIteration");
dn(Sd, "onAnimationStart");
dn("dblclick", "onDoubleClick");
dn("focusin", "onFocus");
dn("focusout", "onBlur");
dn(_d, "onTransitionEnd");
tr("onMouseEnter", ["mouseout", "mouseover"]);
tr("onMouseLeave", ["mouseout", "mouseover"]);
tr("onPointerEnter", ["pointerout", "pointerover"]);
tr("onPointerLeave", ["pointerout", "pointerover"]);
Pn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Pn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Pn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Pn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Pn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Pn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  Om = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function cc(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Dh(r, t, void 0, e), (e.currentTarget = null));
}
function jd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== o && s.isPropagationStopped())) break e;
          (cc(s, l, u), (o = c));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== o && s.isPropagationStopped())
          )
            break e;
          (cc(s, l, u), (o = c));
        }
    }
  }
  if (eo) throw ((e = Bi), (eo = !1), (Bi = null), e);
}
function de(e, t) {
  var n = t[Yi];
  n === void 0 && (n = t[Yi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ed(t, e, 2, !1), n.add(r));
}
function ai(e, t, n) {
  var r = 0;
  (t && (r |= 4), Ed(n, e, r, t));
}
var _s = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[_s]) {
    ((e[_s] = !0),
      Au.forEach(function (n) {
        n !== "selectionchange" && (Om.has(n) || ai(n, !1, e), ai(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_s] || ((t[_s] = !0), ai("selectionchange", !1, t));
  }
}
function Ed(e, t, n, r) {
  switch (ud(t)) {
    case 1:
      var s = Xh;
      break;
    case 4:
      s = Zh;
      break;
    default:
      s = qa;
  }
  ((n = s.bind(null, t, n, e)),
    (s = void 0),
    !$i ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
        ? e.addEventListener(t, n, { passive: s })
        : e.addEventListener(t, n, !1));
}
function li(e, t, n, r, s) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === s || (l.nodeType === 8 && l.parentNode === s)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === s || (c.nodeType === 8 && c.parentNode === s))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = vn(l)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            r = o = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ju(function () {
    var u = o,
      d = Qa(n),
      f = [];
    e: {
      var p = bd.get(e);
      if (p !== void 0) {
        var v = Ka,
          w = e;
        switch (e) {
          case "keypress":
            if (Fs(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = hm;
            break;
          case "focusin":
            ((w = "focus"), (v = ti));
            break;
          case "focusout":
            ((w = "blur"), (v = ti));
            break;
          case "beforeblur":
          case "afterblur":
            v = ti;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Yl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = nm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ym;
            break;
          case kd:
          case Cd:
          case Sd:
            v = om;
            break;
          case _d:
            v = xm;
            break;
          case "scroll":
            v = em;
            break;
          case "wheel":
            v = km;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = am;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Zl;
        }
        var x = (t & 4) !== 0,
          R = !x && e === "scroll",
          m = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var h = u, g; h !== null; ) {
          g = h;
          var k = g.stateNode;
          if (
            (g.tag === 5 &&
              k !== null &&
              ((g = k),
              m !== null && ((k = Qr(h, m)), k != null && x.push(Jr(h, k, g)))),
            R)
          )
            break;
          h = h.return;
        }
        0 < x.length &&
          ((p = new v(p, w, null, n, d)), f.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Oi &&
            (w = n.relatedTarget || n.fromElement) &&
            (vn(w) || w[Ot]))
        )
          break e;
        if (
          (v || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = u),
              (w = w ? vn(w) : null),
              w !== null &&
                ((R = Tn(w)), w !== R || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = u)),
          v !== w)
        ) {
          if (
            ((x = Yl),
            (k = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Zl),
              (k = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (R = v == null ? p : Bn(v)),
            (g = w == null ? p : Bn(w)),
            (p = new x(k, h + "leave", v, n, d)),
            (p.target = R),
            (p.relatedTarget = g),
            (k = null),
            vn(d) === u &&
              ((x = new x(m, h + "enter", w, n, d)),
              (x.target = g),
              (x.relatedTarget = R),
              (k = x)),
            (R = k),
            v && w)
          )
            t: {
              for (x = v, m = w, h = 0, g = x; g; g = Ln(g)) h++;
              for (g = 0, k = m; k; k = Ln(k)) g++;
              for (; 0 < h - g; ) ((x = Ln(x)), h--);
              for (; 0 < g - h; ) ((m = Ln(m)), g--);
              for (; h--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                ((x = Ln(x)), (m = Ln(m)));
              }
              x = null;
            }
          else x = null;
          (v !== null && uc(f, p, v, x, !1),
            w !== null && R !== null && uc(f, R, w, x, !0));
        }
      }
      e: {
        if (
          ((p = u ? Bn(u) : window),
          (v = p.nodeName && p.nodeName.toLowerCase()),
          v === "select" || (v === "input" && p.type === "file"))
        )
          var b = Pm;
        else if (nc(p))
          if (gd) b = Mm;
          else {
            b = Rm;
            var P = Tm;
          }
        else
          (v = p.nodeName) &&
            v.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (b = Nm);
        if (b && (b = b(e, u))) {
          md(f, b, n, d);
          break e;
        }
        (P && P(e, p, u),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            Ii(p, "number", p.value));
      }
      switch (((P = u ? Bn(u) : window), e)) {
        case "focusin":
          (nc(P) || P.contentEditable === "true") &&
            ((zn = P), (Hi = u), (Ar = null));
          break;
        case "focusout":
          Ar = Hi = zn = null;
          break;
        case "mousedown":
          Wi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Wi = !1), ac(f, n, d));
          break;
        case "selectionchange":
          if (Lm) break;
        case "keydown":
        case "keyup":
          ac(f, n, d);
      }
      var E;
      if (Ya)
        e: {
          switch (e) {
            case "compositionstart":
              var F = "onCompositionStart";
              break e;
            case "compositionend":
              F = "onCompositionEnd";
              break e;
            case "compositionupdate":
              F = "onCompositionUpdate";
              break e;
          }
          F = void 0;
        }
      else
        On
          ? pd(e, n) && (F = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (F = "onCompositionStart");
      (F &&
        (fd &&
          n.locale !== "ko" &&
          (On || F !== "onCompositionStart"
            ? F === "onCompositionEnd" && On && (E = dd())
            : ((Jt = d),
              (Ga = "value" in Jt ? Jt.value : Jt.textContent),
              (On = !0))),
        (P = oo(u, F)),
        0 < P.length &&
          ((F = new Xl(F, e, null, n, d)),
          f.push({ event: F, listeners: P }),
          E ? (F.data = E) : ((E = hd(n)), E !== null && (F.data = E)))),
        (E = Sm ? _m(e, n) : bm(e, n)) &&
          ((u = oo(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Xl("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = E))));
    }
    jd(f, t);
  });
}
function Jr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      o = s.stateNode;
    (s.tag === 5 &&
      o !== null &&
      ((s = o),
      (o = Qr(e, n)),
      o != null && r.unshift(Jr(e, o, s)),
      (o = Qr(e, t)),
      o != null && r.push(Jr(e, o, s))),
      (e = e.return));
  }
  return r;
}
function Ln(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function uc(e, t, n, r, s) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      s
        ? ((c = Qr(n, o)), c != null && i.unshift(Jr(n, c, l)))
        : s || ((c = Qr(n, o)), c != null && i.push(Jr(n, c, l)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var zm = /\r\n?/g,
  $m = /\u0000|\uFFFD/g;
function dc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zm,
      `
`,
    )
    .replace($m, "");
}
function bs(e, t, n) {
  if (((t = dc(t)), dc(e) !== t && n)) throw Error(I(425));
}
function io() {}
var qi = null,
  Gi = null;
function Ki(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ji = typeof setTimeout == "function" ? setTimeout : void 0,
  Bm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  fc = typeof Promise == "function" ? Promise : void 0,
  Um =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof fc < "u"
        ? function (e) {
            return fc.resolve(null).then(e).catch(Qm);
          }
        : Ji;
function Qm(e) {
  setTimeout(function () {
    throw e;
  });
}
function ci(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(s), Wr(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  Wr(t);
}
function nn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function pc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dr = Math.random().toString(36).slice(2),
  bt = "__reactFiber$" + dr,
  Yr = "__reactProps$" + dr,
  Ot = "__reactContainer$" + dr,
  Yi = "__reactEvents$" + dr,
  Vm = "__reactListeners$" + dr,
  Hm = "__reactHandles$" + dr;
function vn(e) {
  var t = e[bt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[bt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pc(e); e !== null; ) {
          if ((n = e[bt])) return n;
          e = pc(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function ls(e) {
  return (
    (e = e[bt] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Bn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(I(33));
}
function No(e) {
  return e[Yr] || null;
}
var Xi = [],
  Un = -1;
function fn(e) {
  return { current: e };
}
function fe(e) {
  0 > Un || ((e.current = Xi[Un]), (Xi[Un] = null), Un--);
}
function ue(e, t) {
  (Un++, (Xi[Un] = e.current), (e.current = t));
}
var un = {},
  $e = fn(un),
  Ye = fn(!1),
  Sn = un;
function nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return un;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    o;
  for (o in n) s[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function Xe(e) {
  return ((e = e.childContextTypes), e != null);
}
function ao() {
  (fe(Ye), fe($e));
}
function hc(e, t, n) {
  if ($e.current !== un) throw Error(I(168));
  (ue($e, t), ue(Ye, n));
}
function Pd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(I(108, Th(e) || "Unknown", s));
  return ve({}, n, r);
}
function lo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || un),
    (Sn = $e.current),
    ue($e, e),
    ue(Ye, Ye.current),
    !0
  );
}
function mc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(I(169));
  (n
    ? ((e = Pd(e, t, Sn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(Ye),
      fe($e),
      ue($e, e))
    : fe(Ye),
    ue(Ye, n));
}
var It = null,
  Mo = !1,
  ui = !1;
function Td(e) {
  It === null ? (It = [e]) : It.push(e);
}
function Wm(e) {
  ((Mo = !0), Td(e));
}
function pn() {
  if (!ui && It !== null) {
    ui = !0;
    var e = 0,
      t = ae;
    try {
      var n = It;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((It = null), (Mo = !1));
    } catch (s) {
      throw (It !== null && (It = It.slice(e + 1)), ed(Va, pn), s);
    } finally {
      ((ae = t), (ui = !1));
    }
  }
  return null;
}
var Qn = [],
  Vn = 0,
  co = null,
  uo = 0,
  lt = [],
  ct = 0,
  _n = null,
  At = 1,
  Lt = "";
function mn(e, t) {
  ((Qn[Vn++] = uo), (Qn[Vn++] = co), (co = e), (uo = t));
}
function Rd(e, t, n) {
  ((lt[ct++] = At), (lt[ct++] = Lt), (lt[ct++] = _n), (_n = e));
  var r = At;
  e = Lt;
  var s = 32 - vt(r) - 1;
  ((r &= ~(1 << s)), (n += 1));
  var o = 32 - vt(t) + s;
  if (30 < o) {
    var i = s - (s % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (At = (1 << (32 - vt(t) + s)) | (n << s) | r),
      (Lt = o + e));
  } else ((At = (1 << o) | (n << s) | r), (Lt = e));
}
function Za(e) {
  e.return !== null && (mn(e, 1), Rd(e, 1, 0));
}
function el(e) {
  for (; e === co; )
    ((co = Qn[--Vn]), (Qn[Vn] = null), (uo = Qn[--Vn]), (Qn[Vn] = null));
  for (; e === _n; )
    ((_n = lt[--ct]),
      (lt[ct] = null),
      (Lt = lt[--ct]),
      (lt[ct] = null),
      (At = lt[--ct]),
      (lt[ct] = null));
}
var rt = null,
  nt = null,
  he = !1,
  yt = null;
function Nd(e, t) {
  var n = ut(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function gc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = nn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: At, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ut(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ea(e) {
  if (he) {
    var t = nt;
    if (t) {
      var n = t;
      if (!gc(e, t)) {
        if (Zi(e)) throw Error(I(418));
        t = nn(n.nextSibling);
        var r = rt;
        t && gc(e, t)
          ? Nd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (he = !1), (rt = e));
      }
    } else {
      if (Zi(e)) throw Error(I(418));
      ((e.flags = (e.flags & -4097) | 2), (he = !1), (rt = e));
    }
  }
}
function yc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function js(e) {
  if (e !== rt) return !1;
  if (!he) return (yc(e), (he = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ki(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (Zi(e)) throw (Md(), Error(I(418)));
    for (; t; ) (Nd(e, t), (t = nn(t.nextSibling)));
  }
  if ((yc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(I(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = nn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? nn(e.stateNode.nextSibling) : null;
  return !0;
}
function Md() {
  for (var e = nt; e; ) e = nn(e.nextSibling);
}
function rr() {
  ((nt = rt = null), (he = !1));
}
function tl(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var qm = Bt.ReactCurrentBatchConfig;
function wr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(I(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(I(147, e));
      var s = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var l = s.refs;
            i === null ? delete l[o] : (l[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(I(284));
    if (!n._owner) throw Error(I(290, e));
  }
  return e;
}
function Es(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      I(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function vc(e) {
  var t = e._init;
  return t(e._payload);
}
function Id(e) {
  function t(m, h) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [h]), (m.flags |= 16)) : g.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) (t(m, h), (h = h.sibling));
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      (h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling));
    return m;
  }
  function s(m, h) {
    return ((m = an(m, h)), (m.index = 0), (m.sibling = null), m);
  }
  function o(m, h, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < h ? ((m.flags |= 2), h) : g)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function i(m) {
    return (e && m.alternate === null && (m.flags |= 2), m);
  }
  function l(m, h, g, k) {
    return h === null || h.tag !== 6
      ? ((h = yi(g, m.mode, k)), (h.return = m), h)
      : ((h = s(h, g)), (h.return = m), h);
  }
  function c(m, h, g, k) {
    var b = g.type;
    return b === Fn
      ? d(m, h, g.props.children, k, g.key)
      : h !== null &&
          (h.elementType === b ||
            (typeof b == "object" &&
              b !== null &&
              b.$$typeof === Wt &&
              vc(b) === h.type))
        ? ((k = s(h, g.props)), (k.ref = wr(m, h, g)), (k.return = m), k)
        : ((k = Vs(g.type, g.key, g.props, null, m.mode, k)),
          (k.ref = wr(m, h, g)),
          (k.return = m),
          k);
  }
  function u(m, h, g, k) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== g.containerInfo ||
      h.stateNode.implementation !== g.implementation
      ? ((h = vi(g, m.mode, k)), (h.return = m), h)
      : ((h = s(h, g.children || [])), (h.return = m), h);
  }
  function d(m, h, g, k, b) {
    return h === null || h.tag !== 7
      ? ((h = Cn(g, m.mode, k, b)), (h.return = m), h)
      : ((h = s(h, g)), (h.return = m), h);
  }
  function f(m, h, g) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return ((h = yi("" + h, m.mode, g)), (h.return = m), h);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case gs:
          return (
            (g = Vs(h.type, h.key, h.props, null, m.mode, g)),
            (g.ref = wr(m, null, h)),
            (g.return = m),
            g
          );
        case Dn:
          return ((h = vi(h, m.mode, g)), (h.return = m), h);
        case Wt:
          var k = h._init;
          return f(m, k(h._payload), g);
      }
      if (jr(h) || mr(h))
        return ((h = Cn(h, m.mode, g, null)), (h.return = m), h);
      Es(m, h);
    }
    return null;
  }
  function p(m, h, g, k) {
    var b = h !== null ? h.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return b !== null ? null : l(m, h, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case gs:
          return g.key === b ? c(m, h, g, k) : null;
        case Dn:
          return g.key === b ? u(m, h, g, k) : null;
        case Wt:
          return ((b = g._init), p(m, h, b(g._payload), k));
      }
      if (jr(g) || mr(g)) return b !== null ? null : d(m, h, g, k, null);
      Es(m, g);
    }
    return null;
  }
  function v(m, h, g, k, b) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return ((m = m.get(g) || null), l(h, m, "" + k, b));
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case gs:
          return (
            (m = m.get(k.key === null ? g : k.key) || null),
            c(h, m, k, b)
          );
        case Dn:
          return (
            (m = m.get(k.key === null ? g : k.key) || null),
            u(h, m, k, b)
          );
        case Wt:
          var P = k._init;
          return v(m, h, g, P(k._payload), b);
      }
      if (jr(k) || mr(k)) return ((m = m.get(g) || null), d(h, m, k, b, null));
      Es(h, k);
    }
    return null;
  }
  function w(m, h, g, k) {
    for (
      var b = null, P = null, E = h, F = (h = 0), V = null;
      E !== null && F < g.length;
      F++
    ) {
      E.index > F ? ((V = E), (E = null)) : (V = E.sibling);
      var B = p(m, E, g[F], k);
      if (B === null) {
        E === null && (E = V);
        break;
      }
      (e && E && B.alternate === null && t(m, E),
        (h = o(B, h, F)),
        P === null ? (b = B) : (P.sibling = B),
        (P = B),
        (E = V));
    }
    if (F === g.length) return (n(m, E), he && mn(m, F), b);
    if (E === null) {
      for (; F < g.length; F++)
        ((E = f(m, g[F], k)),
          E !== null &&
            ((h = o(E, h, F)),
            P === null ? (b = E) : (P.sibling = E),
            (P = E)));
      return (he && mn(m, F), b);
    }
    for (E = r(m, E); F < g.length; F++)
      ((V = v(E, m, F, g[F], k)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? F : V.key),
          (h = o(V, h, F)),
          P === null ? (b = V) : (P.sibling = V),
          (P = V)));
    return (
      e &&
        E.forEach(function (G) {
          return t(m, G);
        }),
      he && mn(m, F),
      b
    );
  }
  function x(m, h, g, k) {
    var b = mr(g);
    if (typeof b != "function") throw Error(I(150));
    if (((g = b.call(g)), g == null)) throw Error(I(151));
    for (
      var P = (b = null), E = h, F = (h = 0), V = null, B = g.next();
      E !== null && !B.done;
      F++, B = g.next()
    ) {
      E.index > F ? ((V = E), (E = null)) : (V = E.sibling);
      var G = p(m, E, B.value, k);
      if (G === null) {
        E === null && (E = V);
        break;
      }
      (e && E && G.alternate === null && t(m, E),
        (h = o(G, h, F)),
        P === null ? (b = G) : (P.sibling = G),
        (P = G),
        (E = V));
    }
    if (B.done) return (n(m, E), he && mn(m, F), b);
    if (E === null) {
      for (; !B.done; F++, B = g.next())
        ((B = f(m, B.value, k)),
          B !== null &&
            ((h = o(B, h, F)),
            P === null ? (b = B) : (P.sibling = B),
            (P = B)));
      return (he && mn(m, F), b);
    }
    for (E = r(m, E); !B.done; F++, B = g.next())
      ((B = v(E, m, F, B.value, k)),
        B !== null &&
          (e && B.alternate !== null && E.delete(B.key === null ? F : B.key),
          (h = o(B, h, F)),
          P === null ? (b = B) : (P.sibling = B),
          (P = B)));
    return (
      e &&
        E.forEach(function (le) {
          return t(m, le);
        }),
      he && mn(m, F),
      b
    );
  }
  function R(m, h, g, k) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Fn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case gs:
          e: {
            for (var b = g.key, P = h; P !== null; ) {
              if (P.key === b) {
                if (((b = g.type), b === Fn)) {
                  if (P.tag === 7) {
                    (n(m, P.sibling),
                      (h = s(P, g.props.children)),
                      (h.return = m),
                      (m = h));
                    break e;
                  }
                } else if (
                  P.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Wt &&
                    vc(b) === P.type)
                ) {
                  (n(m, P.sibling),
                    (h = s(P, g.props)),
                    (h.ref = wr(m, P, g)),
                    (h.return = m),
                    (m = h));
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            g.type === Fn
              ? ((h = Cn(g.props.children, m.mode, k, g.key)),
                (h.return = m),
                (m = h))
              : ((k = Vs(g.type, g.key, g.props, null, m.mode, k)),
                (k.ref = wr(m, h, g)),
                (k.return = m),
                (m = k));
          }
          return i(m);
        case Dn:
          e: {
            for (P = g.key; h !== null; ) {
              if (h.key === P)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === g.containerInfo &&
                  h.stateNode.implementation === g.implementation
                ) {
                  (n(m, h.sibling),
                    (h = s(h, g.children || [])),
                    (h.return = m),
                    (m = h));
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            ((h = vi(g, m.mode, k)), (h.return = m), (m = h));
          }
          return i(m);
        case Wt:
          return ((P = g._init), R(m, h, P(g._payload), k));
      }
      if (jr(g)) return w(m, h, g, k);
      if (mr(g)) return x(m, h, g, k);
      Es(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = s(h, g)), (h.return = m), (m = h))
          : (n(m, h), (h = yi(g, m.mode, k)), (h.return = m), (m = h)),
        i(m))
      : n(m, h);
  }
  return R;
}
var sr = Id(!0),
  Ad = Id(!1),
  fo = fn(null),
  po = null,
  Hn = null,
  nl = null;
function rl() {
  nl = Hn = po = null;
}
function sl(e) {
  var t = fo.current;
  (fe(fo), (e._currentValue = t));
}
function ta(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xn(e, t) {
  ((po = e),
    (nl = Hn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ke = !0), (e.firstContext = null)));
}
function ft(e) {
  var t = e._currentValue;
  if (nl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hn === null)) {
      if (po === null) throw Error(I(308));
      ((Hn = e), (po.dependencies = { lanes: 0, firstContext: e }));
    } else Hn = Hn.next = e;
  return t;
}
var xn = null;
function ol(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function Ld(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), ol(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var qt = !1;
function il(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dd(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), re & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), ol(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function Os(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ha(e, n));
  }
}
function xc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (s = o = i) : (o = o.next = i), (n = n.next));
      } while (n !== null);
      o === null ? (s = o = t) : (o = o.next = t);
    } else s = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function ho(e, t, n, r) {
  var s = e.updateQueue;
  qt = !1;
  var o = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    l = s.shared.pending;
  if (l !== null) {
    s.shared.pending = null;
    var c = l,
      u = c.next;
    ((c.next = null), i === null ? (o = u) : (i.next = u), (i = c));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== i &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = c)));
  }
  if (o !== null) {
    var f = s.baseState;
    ((i = 0), (d = u = c = null), (l = o));
    do {
      var p = l.lane,
        v = l.eventTime;
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var w = e,
            x = l;
          switch (((p = t), (v = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                f = w.call(v, f, p);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (p = typeof w == "function" ? w.call(v, f, p) : w),
                p == null)
              )
                break e;
              f = ve({}, f, p);
              break e;
            case 2:
              qt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = s.effects),
          p === null ? (s.effects = [l]) : p.push(l));
      } else
        ((v = {
          eventTime: v,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = v), (c = f)) : (d = d.next = v),
          (i |= p));
      if (((l = l.next), l === null)) {
        if (((l = s.shared.pending), l === null)) break;
        ((p = l),
          (l = p.next),
          (p.next = null),
          (s.lastBaseUpdate = p),
          (s.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (c = f),
      (s.baseState = c),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = d),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do ((i |= s.lane), (s = s.next));
      while (s !== t);
    } else o === null && (s.shared.lanes = 0);
    ((jn |= i), (e.lanes = i), (e.memoizedState = f));
  }
}
function wc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(I(191, s));
        s.call(r);
      }
    }
}
var cs = {},
  Et = fn(cs),
  Xr = fn(cs),
  Zr = fn(cs);
function wn(e) {
  if (e === cs) throw Error(I(174));
  return e;
}
function al(e, t) {
  switch ((ue(Zr, t), ue(Xr, e), ue(Et, cs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e)));
  }
  (fe(Et), ue(Et, t));
}
function or() {
  (fe(Et), fe(Xr), fe(Zr));
}
function Fd(e) {
  wn(Zr.current);
  var t = wn(Et.current),
    n = Li(t, e.type);
  t !== n && (ue(Xr, e), ue(Et, n));
}
function ll(e) {
  Xr.current === e && (fe(Et), fe(Xr));
}
var ge = fn(0);
function mo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var di = [];
function cl() {
  for (var e = 0; e < di.length; e++)
    di[e]._workInProgressVersionPrimary = null;
  di.length = 0;
}
var zs = Bt.ReactCurrentDispatcher,
  fi = Bt.ReactCurrentBatchConfig,
  bn = 0,
  ye = null,
  Ee = null,
  Te = null,
  go = !1,
  Lr = !1,
  es = 0,
  Gm = 0;
function De() {
  throw Error(I(321));
}
function ul(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wt(e[n], t[n])) return !1;
  return !0;
}
function dl(e, t, n, r, s, o) {
  if (
    ((bn = o),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (zs.current = e === null || e.memoizedState === null ? Xm : Zm),
    (e = n(r, s)),
    Lr)
  ) {
    o = 0;
    do {
      if (((Lr = !1), (es = 0), 25 <= o)) throw Error(I(301));
      ((o += 1),
        (Te = Ee = null),
        (t.updateQueue = null),
        (zs.current = e0),
        (e = n(r, s)));
    } while (Lr);
  }
  if (
    ((zs.current = yo),
    (t = Ee !== null && Ee.next !== null),
    (bn = 0),
    (Te = Ee = ye = null),
    (go = !1),
    t)
  )
    throw Error(I(300));
  return e;
}
function fl() {
  var e = es !== 0;
  return ((es = 0), e);
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e), Te);
}
function pt() {
  if (Ee === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ee.next;
  var t = Te === null ? ye.memoizedState : Te.next;
  if (t !== null) ((Te = t), (Ee = e));
  else {
    if (e === null) throw Error(I(310));
    ((Ee = e),
      (e = {
        memoizedState: Ee.memoizedState,
        baseState: Ee.baseState,
        baseQueue: Ee.baseQueue,
        queue: Ee.queue,
        next: null,
      }),
      Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e));
  }
  return Te;
}
function ts(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function pi(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = Ee,
    s = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (s !== null) {
      var i = s.next;
      ((s.next = o.next), (o.next = i));
    }
    ((r.baseQueue = s = o), (n.pending = null));
  }
  if (s !== null) {
    ((o = s.next), (r = r.baseState));
    var l = (i = null),
      c = null,
      u = o;
    do {
      var d = u.lane;
      if ((bn & d) === d)
        (c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (c === null ? ((l = c = f), (i = r)) : (c = c.next = f),
          (ye.lanes |= d),
          (jn |= d));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (c === null ? (i = r) : (c.next = l),
      wt(r, t.memoizedState) || (Ke = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do ((o = s.lane), (ye.lanes |= o), (jn |= o), (s = s.next));
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function hi(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(I(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    o = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== s);
    (wt(o, t.memoizedState) || (Ke = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function Od() {}
function zd(e, t) {
  var n = ye,
    r = pt(),
    s = t(),
    o = !wt(r.memoizedState, s);
  if (
    (o && ((r.memoizedState = s), (Ke = !0)),
    (r = r.queue),
    pl(Ud.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ns(9, Bd.bind(null, n, r, s, t), void 0, null),
      Re === null)
    )
      throw Error(I(349));
    bn & 30 || $d(n, t, s);
  }
  return s;
}
function $d(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Bd(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Qd(t) && Vd(e));
}
function Ud(e, t, n) {
  return n(function () {
    Qd(t) && Vd(e);
  });
}
function Qd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wt(e, n);
  } catch {
    return !0;
  }
}
function Vd(e) {
  var t = zt(e, 1);
  t !== null && xt(t, e, 1, -1);
}
function kc(e) {
  var t = _t();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ts,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ym.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function ns(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hd() {
  return pt().memoizedState;
}
function $s(e, t, n, r) {
  var s = _t();
  ((ye.flags |= e),
    (s.memoizedState = ns(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Io(e, t, n, r) {
  var s = pt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ee !== null) {
    var i = Ee.memoizedState;
    if (((o = i.destroy), r !== null && ul(r, i.deps))) {
      s.memoizedState = ns(t, n, o, r);
      return;
    }
  }
  ((ye.flags |= e), (s.memoizedState = ns(1 | t, n, o, r)));
}
function Cc(e, t) {
  return $s(8390656, 8, e, t);
}
function pl(e, t) {
  return Io(2048, 8, e, t);
}
function Wd(e, t) {
  return Io(4, 2, e, t);
}
function qd(e, t) {
  return Io(4, 4, e, t);
}
function Gd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Io(4, 4, Gd.bind(null, t, e), n)
  );
}
function hl() {}
function Jd(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yd(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ul(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xd(e, t, n) {
  return bn & 21
    ? (wt(n, t) || ((n = rd()), (ye.lanes |= n), (jn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ke = !0)), (e.memoizedState = n));
}
function Km(e, t) {
  var n = ae;
  ((ae = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = fi.transition;
  fi.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((ae = n), (fi.transition = r));
  }
}
function Zd() {
  return pt().memoizedState;
}
function Jm(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ef(e))
  )
    tf(t, n);
  else if (((n = Ld(e, t, n, r)), n !== null)) {
    var s = Qe();
    (xt(n, e, r, s), nf(n, t, r));
  }
}
function Ym(e, t, n) {
  var r = on(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ef(e)) tf(t, s);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = o(i, n);
        if (((s.hasEagerState = !0), (s.eagerState = l), wt(l, i))) {
          var c = t.interleaved;
          (c === null
            ? ((s.next = s), ol(t))
            : ((s.next = c.next), (c.next = s)),
            (t.interleaved = s));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Ld(e, t, s, r)),
      n !== null && ((s = Qe()), xt(n, e, r, s), nf(n, t, r)));
  }
}
function ef(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function tf(e, t) {
  Lr = go = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function nf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ha(e, n));
  }
}
var yo = {
    readContext: ft,
    useCallback: De,
    useContext: De,
    useEffect: De,
    useImperativeHandle: De,
    useInsertionEffect: De,
    useLayoutEffect: De,
    useMemo: De,
    useReducer: De,
    useRef: De,
    useState: De,
    useDebugValue: De,
    useDeferredValue: De,
    useTransition: De,
    useMutableSource: De,
    useSyncExternalStore: De,
    useId: De,
    unstable_isNewReconciler: !1,
  },
  Xm = {
    readContext: ft,
    useCallback: function (e, t) {
      return ((_t().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: ft,
    useEffect: Cc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        $s(4194308, 4, Gd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return $s(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return $s(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = _t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Jm.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: kc,
    useDebugValue: hl,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = kc(!1),
        t = e[0];
      return ((e = Km.bind(null, e[1])), (_t().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        s = _t();
      if (he) {
        if (n === void 0) throw Error(I(407));
        n = n();
      } else {
        if (((n = t()), Re === null)) throw Error(I(349));
        bn & 30 || $d(r, t, n);
      }
      s.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (s.queue = o),
        Cc(Ud.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ns(9, Bd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Re.identifierPrefix;
      if (he) {
        var n = Lt,
          r = At;
        ((n = (r & ~(1 << (32 - vt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = es++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Gm++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zm = {
    readContext: ft,
    useCallback: Jd,
    useContext: ft,
    useEffect: pl,
    useImperativeHandle: Kd,
    useInsertionEffect: Wd,
    useLayoutEffect: qd,
    useMemo: Yd,
    useReducer: pi,
    useRef: Hd,
    useState: function () {
      return pi(ts);
    },
    useDebugValue: hl,
    useDeferredValue: function (e) {
      var t = pt();
      return Xd(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(ts)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Od,
    useSyncExternalStore: zd,
    useId: Zd,
    unstable_isNewReconciler: !1,
  },
  e0 = {
    readContext: ft,
    useCallback: Jd,
    useContext: ft,
    useEffect: pl,
    useImperativeHandle: Kd,
    useInsertionEffect: Wd,
    useLayoutEffect: qd,
    useMemo: Yd,
    useReducer: hi,
    useRef: Hd,
    useState: function () {
      return hi(ts);
    },
    useDebugValue: hl,
    useDeferredValue: function (e) {
      var t = pt();
      return Ee === null ? (t.memoizedState = e) : Xd(t, Ee.memoizedState, e);
    },
    useTransition: function () {
      var e = hi(ts)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Od,
    useSyncExternalStore: zd,
    useId: Zd,
    unstable_isNewReconciler: !1,
  };
function mt(e, t) {
  if (e && e.defaultProps) {
    ((t = ve({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function na(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ve({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var Ao = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      s = on(e),
      o = Dt(r, s);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = rn(e, o, s)),
      t !== null && (xt(t, e, s, r), Os(t, e, s)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      s = on(e),
      o = Dt(r, s);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = rn(e, o, s)),
      t !== null && (xt(t, e, s, r), Os(t, e, s)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qe(),
      r = on(e),
      s = Dt(n, r);
    ((s.tag = 2),
      t != null && (s.callback = t),
      (t = rn(e, s, r)),
      t !== null && (xt(t, e, r, n), Os(t, e, r)));
  },
};
function Sc(e, t, n, r, s, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Gr(n, r) || !Gr(s, o)
        : !0
  );
}
function rf(e, t, n) {
  var r = !1,
    s = un,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ft(o))
      : ((s = Xe(t) ? Sn : $e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? nr(e, s) : un)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ao),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function _c(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ao.enqueueReplaceState(t, t.state, null));
}
function ra(e, t, n, r) {
  var s = e.stateNode;
  ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), il(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (s.context = ft(o))
    : ((o = Xe(t) ? Sn : $e.current), (s.context = nr(e, o))),
    (s.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (na(e, t, o, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Ao.enqueueReplaceState(s, s.state, null),
      ho(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308));
}
function ir(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Ph(r)), (r = r.return));
    while (r);
    var s = n;
  } catch (o) {
    s =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function mi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var t0 = typeof WeakMap == "function" ? WeakMap : Map;
function sf(e, t, n) {
  ((n = Dt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (xo || ((xo = !0), (ha = r)), sa(e, t));
    }),
    n
  );
}
function of(e, t, n) {
  ((n = Dt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    ((n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        sa(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (sa(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function bc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new t0();
    var s = new Set();
    r.set(t, s);
  } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
  s.has(n) || (s.add(n), (e = m0.bind(null, e, t, n)), t.then(e, e));
}
function jc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ec(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Dt(-1, 1)), (t.tag = 2), rn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var n0 = Bt.ReactCurrentOwner,
  Ke = !1;
function Ue(e, t, n, r) {
  t.child = e === null ? Ad(t, null, n, r) : sr(t, e.child, n, r);
}
function Pc(e, t, n, r, s) {
  n = n.render;
  var o = t.ref;
  return (
    Xn(t, s),
    (r = dl(e, t, n, r, o, s)),
    (n = fl()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        $t(e, t, s))
      : (he && n && Za(t), (t.flags |= 1), Ue(e, t, r, s), t.child)
  );
}
function Tc(e, t, n, r, s) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Cl(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), af(e, t, o, r, s))
      : ((e = Vs(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & s))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gr), n(i, r) && e.ref === t.ref)
    )
      return $t(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = an(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function af(e, t, n, r, s) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Gr(o, r) && e.ref === t.ref)
      if (((Ke = !1), (t.pendingProps = r = o), (e.lanes & s) !== 0))
        e.flags & 131072 && (Ke = !0);
      else return ((t.lanes = e.lanes), $t(e, t, s));
  }
  return oa(e, t, n, r, s);
}
function lf(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(qn, tt),
        (tt |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(qn, tt),
          (tt |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ue(qn, tt),
        (tt |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(qn, tt),
      (tt |= r));
  return (Ue(e, t, s, n), t.child);
}
function cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function oa(e, t, n, r, s) {
  var o = Xe(n) ? Sn : $e.current;
  return (
    (o = nr(t, o)),
    Xn(t, s),
    (n = dl(e, t, n, r, o, s)),
    (r = fl()),
    e !== null && !Ke
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        $t(e, t, s))
      : (he && r && Za(t), (t.flags |= 1), Ue(e, t, n, s), t.child)
  );
}
function Rc(e, t, n, r, s) {
  if (Xe(n)) {
    var o = !0;
    lo(t);
  } else o = !1;
  if ((Xn(t, s), t.stateNode === null))
    (Bs(e, t), rf(t, n, r), ra(t, n, r, s), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var c = i.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ft(u))
      : ((u = Xe(n) ? Sn : $e.current), (u = nr(t, u)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && _c(t, i, r, u)),
      (qt = !1));
    var p = t.memoizedState;
    ((i.state = p),
      ho(t, r, i, s),
      (c = t.memoizedState),
      l !== r || p !== c || Ye.current || qt
        ? (typeof d == "function" && (na(t, n, d, r), (c = t.memoizedState)),
          (l = qt || Sc(t, n, l, r, p, c, u))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = u),
          (r = l))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((i = t.stateNode),
      Dd(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : mt(t.type, l)),
      (i.props = u),
      (f = t.pendingProps),
      (p = i.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = ft(c))
        : ((c = Xe(n) ? Sn : $e.current), (c = nr(t, c))));
    var v = n.getDerivedStateFromProps;
    ((d =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((l !== f || p !== c) && _c(t, i, r, c)),
      (qt = !1),
      (p = t.memoizedState),
      (i.state = p),
      ho(t, r, i, s));
    var w = t.memoizedState;
    l !== f || p !== w || Ye.current || qt
      ? (typeof v == "function" && (na(t, n, v, r), (w = t.memoizedState)),
        (u = qt || Sc(t, n, u, r, p, w, c) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, c),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, c)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = c),
        (r = u))
      : (typeof i.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ia(e, t, n, r, o, s);
}
function ia(e, t, n, r, s, o) {
  cf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (s && mc(t, n, !1), $t(e, t, o));
  ((r = t.stateNode), (n0.current = t));
  var l =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = sr(t, e.child, null, o)), (t.child = sr(t, null, l, o)))
      : Ue(e, t, l, o),
    (t.memoizedState = r.state),
    s && mc(t, n, !0),
    t.child
  );
}
function uf(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? hc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hc(e, t.context, !1),
    al(e, t.containerInfo));
}
function Nc(e, t, n, r, s) {
  return (rr(), tl(s), (t.flags |= 256), Ue(e, t, n, r), t.child);
}
var aa = { dehydrated: null, treeContext: null, retryLane: 0 };
function la(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function df(e, t, n) {
  var r = t.pendingProps,
    s = ge.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    ue(ge, s & 1),
    e === null)
  )
    return (
      ea(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Fo(i, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = la(n)),
              (t.memoizedState = aa),
              e)
            : ml(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((l = s.dehydrated), l !== null)))
    return r0(e, t, i, r, l, s, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (s = e.child), (l = s.sibling));
    var c = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = an(s, c)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      l !== null ? (o = an(l, o)) : ((o = Cn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? la(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = aa),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = an(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ml(e, t) {
  return (
    (t = Fo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ps(e, t, n, r) {
  return (
    r !== null && tl(r),
    sr(t, e.child, null, n),
    (e = ml(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function r0(e, t, n, r, s, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = mi(Error(I(422)))), Ps(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (s = t.mode),
          (r = Fo({ mode: "visible", children: r.children }, s, 0, null)),
          (o = Cn(o, s, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && sr(t, e.child, null, i),
          (t.child.memoizedState = la(i)),
          (t.memoizedState = aa),
          o);
  if (!(t.mode & 1)) return Ps(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var l = r.dgst;
    return (
      (r = l),
      (o = Error(I(419))),
      (r = mi(o, r, void 0)),
      Ps(e, t, i, r)
    );
  }
  if (((l = (i & e.childLanes) !== 0), Ke || l)) {
    if (((r = Re), r !== null)) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      ((s = s & (r.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== o.retryLane &&
          ((o.retryLane = s), zt(e, s), xt(r, e, s, -1)));
    }
    return (kl(), (r = mi(Error(I(421)))), Ps(e, t, i, r));
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = g0.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (nt = nn(s.nextSibling)),
      (rt = t),
      (he = !0),
      (yt = null),
      e !== null &&
        ((lt[ct++] = At),
        (lt[ct++] = Lt),
        (lt[ct++] = _n),
        (At = e.id),
        (Lt = e.overflow),
        (_n = t)),
      (t = ml(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Mc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ta(e.return, t, n));
}
function gi(e, t, n, r, s) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = s));
}
function ff(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    o = r.tail;
  if ((Ue(e, t, r.children, n), (r = ge.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Mc(e, n, t);
        else if (e.tag === 19) Mc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          ((e = n.alternate),
            e !== null && mo(e) === null && (s = n),
            (n = n.sibling));
        ((n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          gi(t, !1, s, n, o));
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && mo(e) === null)) {
            t.child = s;
            break;
          }
          ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
        }
        gi(t, !0, n, null, o);
        break;
      case "together":
        gi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function $t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (jn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(I(153));
  if (t.child !== null) {
    for (
      e = t.child, n = an(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = an(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function s0(e, t, n) {
  switch (t.tag) {
    case 3:
      (uf(t), rr());
      break;
    case 5:
      Fd(t);
      break;
    case 1:
      Xe(t.type) && lo(t);
      break;
    case 4:
      al(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      (ue(fo, r._currentValue), (r._currentValue = s));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? df(e, t, n)
            : (ue(ge, ge.current & 1),
              (e = $t(e, t, n)),
              e !== null ? e.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ff(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ue(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), lf(e, t, n));
  }
  return $t(e, t, n);
}
var pf, ca, hf, mf;
pf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
ca = function () {};
hf = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    ((e = t.stateNode), wn(Et.current));
    var o = null;
    switch (n) {
      case "input":
        ((s = Ni(e, s)), (r = Ni(e, r)), (o = []));
        break;
      case "select":
        ((s = ve({}, s, { value: void 0 })),
          (r = ve({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((s = Ai(e, s)), (r = Ai(e, r)), (o = []));
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = io);
    }
    Di(n, r);
    var i;
    n = null;
    for (u in s)
      if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var l = s[u];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Br.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = s != null ? s[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in c)
              c.hasOwnProperty(i) &&
                l[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]));
          } else (n || (o || (o = []), o.push(u, n)), (n = c));
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (o = o || []).push(u, c))
            : u === "children"
              ? (typeof c != "string" && typeof c != "number") ||
                (o = o || []).push(u, "" + c)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Br.hasOwnProperty(u)
                  ? (c != null && u === "onScroll" && de("scroll", e),
                    o || l === c || (o = []))
                  : (o = o || []).push(u, c));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
mf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function kr(e, t) {
  if (!he)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling));
  else
    for (s = e.child; s !== null; )
      ((n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function o0(e, t, n) {
  var r = t.pendingProps;
  switch ((el(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Fe(t), null);
    case 1:
      return (Xe(t.type) && ao(), Fe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        or(),
        fe(Ye),
        fe($e),
        cl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (js(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (ya(yt), (yt = null)))),
        ca(e, t),
        Fe(t),
        null
      );
    case 5:
      ll(t);
      var s = wn(Zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (hf(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(I(166));
          return (Fe(t), null);
        }
        if (((e = wn(Et.current)), js(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[bt] = t), (r[Yr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (de("cancel", r), de("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              de("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Pr.length; s++) de(Pr[s], r);
              break;
            case "source":
              de("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (de("error", r), de("load", r));
              break;
            case "details":
              de("toggle", r);
              break;
            case "input":
              (Bl(r, o), de("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                de("invalid", r));
              break;
            case "textarea":
              (Ql(r, o), de("invalid", r));
          }
          (Di(n, o), (s = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var l = o[i];
              i === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      bs(r.textContent, l, e),
                    (s = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      bs(r.textContent, l, e),
                    (s = ["children", "" + l]))
                : Br.hasOwnProperty(i) &&
                  l != null &&
                  i === "onScroll" &&
                  de("scroll", r);
            }
          switch (n) {
            case "input":
              (ys(r), Ul(r, o, !0));
              break;
            case "textarea":
              (ys(r), Vl(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = io);
          }
          ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Uu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e),
                      r.multiple
                        ? (i.multiple = !0)
                        : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[bt] = t),
            (e[Yr] = r),
            pf(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Fi(n, r)), n)) {
              case "dialog":
                (de("cancel", e), de("close", e), (s = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (de("load", e), (s = r));
                break;
              case "video":
              case "audio":
                for (s = 0; s < Pr.length; s++) de(Pr[s], e);
                s = r;
                break;
              case "source":
                (de("error", e), (s = r));
                break;
              case "img":
              case "image":
              case "link":
                (de("error", e), de("load", e), (s = r));
                break;
              case "details":
                (de("toggle", e), (s = r));
                break;
              case "input":
                (Bl(e, r), (s = Ni(e, r)), de("invalid", e));
                break;
              case "option":
                s = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = ve({}, r, { value: void 0 })),
                  de("invalid", e));
                break;
              case "textarea":
                (Ql(e, r), (s = Ai(e, r)), de("invalid", e));
                break;
              default:
                s = r;
            }
            (Di(n, s), (l = s));
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var c = l[o];
                o === "style"
                  ? Hu(e, c)
                  : o === "dangerouslySetInnerHTML"
                    ? ((c = c ? c.__html : void 0), c != null && Qu(e, c))
                    : o === "children"
                      ? typeof c == "string"
                        ? (n !== "textarea" || c !== "") && Ur(e, c)
                        : typeof c == "number" && Ur(e, "" + c)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Br.hasOwnProperty(o)
                          ? c != null && o === "onScroll" && de("scroll", e)
                          : c != null && za(e, o, c, i));
              }
            switch (n) {
              case "input":
                (ys(e), Ul(e, r, !1));
                break;
              case "textarea":
                (ys(e), Vl(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + cn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Gn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Gn(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = io);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Fe(t), null);
    case 6:
      if (e && t.stateNode != null) mf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(I(166));
        if (((n = wn(Zr.current)), wn(Et.current), js(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[bt] = t),
            (o = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                bs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  bs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[bt] = t),
            (t.stateNode = r));
      }
      return (Fe(t), null);
    case 13:
      if (
        (fe(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && nt !== null && t.mode & 1 && !(t.flags & 128))
          (Md(), rr(), (t.flags |= 98560), (o = !1));
        else if (((o = js(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(I(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(I(317));
            o[bt] = t;
          } else
            (rr(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Fe(t), (o = !1));
        } else (yt !== null && (ya(yt), (yt = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Pe === 0 && (Pe = 3) : kl())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        or(),
        ca(e, t),
        e === null && Kr(t.stateNode.containerInfo),
        Fe(t),
        null
      );
    case 10:
      return (sl(t.type._context), Fe(t), null);
    case 17:
      return (Xe(t.type) && ao(), Fe(t), null);
    case 19:
      if ((fe(ge), (o = t.memoizedState), o === null)) return (Fe(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) kr(o, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = mo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    kr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (ue(ge, (ge.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ce() > ar &&
            ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = mo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              kr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !he)
            )
              return (Fe(t), null);
          } else
            2 * Ce() - o.renderingStartTime > ar &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), kr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ge.current),
          ue(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        wl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? tt & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(I(156, t.tag));
}
function i0(e, t) {
  switch ((el(t), t.tag)) {
    case 1:
      return (
        Xe(t.type) && ao(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        or(),
        fe(Ye),
        fe($e),
        cl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ll(t), null);
    case 13:
      if (
        (fe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(I(340));
        rr();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (fe(ge), null);
    case 4:
      return (or(), null);
    case 10:
      return (sl(t.type._context), null);
    case 22:
    case 23:
      return (wl(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Ts = !1,
  ze = !1,
  a0 = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function Wn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        we(e, t, r);
      }
    else n.current = null;
}
function ua(e, t, n) {
  try {
    n();
  } catch (r) {
    we(e, t, r);
  }
}
var Ic = !1;
function l0(e, t) {
  if (((qi = ro), (e = xd()), Xa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            c = -1,
            u = 0,
            d = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var v;
              f !== n || (s !== 0 && f.nodeType !== 3) || (l = i + s),
                f !== o || (r !== 0 && f.nodeType !== 3) || (c = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (v = f.firstChild) !== null;
            )
              ((p = f), (f = v));
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === s && (l = i),
                p === o && ++d === r && (c = i),
                (v = f.nextSibling) !== null)
              )
                break;
              ((f = p), (p = f.parentNode));
            }
            f = v;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Gi = { focusedElem: e, selectionRange: n }, ro = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), ($ = e));
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    R = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : mt(t.type, x),
                      R,
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(I(163));
            }
        } catch (k) {
          we(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), ($ = e));
          break;
        }
        $ = t.return;
      }
  return ((w = Ic), (Ic = !1), w);
}
function Dr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var o = s.destroy;
        ((s.destroy = void 0), o !== void 0 && ua(t, n, o));
      }
      s = s.next;
    } while (s !== r);
  }
}
function Lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function da(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gf(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), gf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[bt], delete t[Yr], delete t[Yi], delete t[Vm], delete t[Hm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function yf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = io)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fa(e, t, n), e = e.sibling; e !== null; )
      (fa(e, t, n), (e = e.sibling));
}
function pa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pa(e, t, n), e = e.sibling; e !== null; )
      (pa(e, t, n), (e = e.sibling));
}
var Me = null,
  gt = !1;
function Vt(e, t, n) {
  for (n = n.child; n !== null; ) (vf(e, t, n), (n = n.sibling));
}
function vf(e, t, n) {
  if (jt && typeof jt.onCommitFiberUnmount == "function")
    try {
      jt.onCommitFiberUnmount(Eo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ze || Wn(n, t);
    case 6:
      var r = Me,
        s = gt;
      ((Me = null),
        Vt(e, t, n),
        (Me = r),
        (gt = s),
        Me !== null &&
          (gt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode)));
      break;
    case 18:
      Me !== null &&
        (gt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? ci(e.parentNode, n)
              : e.nodeType === 1 && ci(e, n),
            Wr(e))
          : ci(Me, n.stateNode));
      break;
    case 4:
      ((r = Me),
        (s = gt),
        (Me = n.stateNode.containerInfo),
        (gt = !0),
        Vt(e, t, n),
        (Me = r),
        (gt = s));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ze &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var o = s,
            i = o.destroy;
          ((o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ua(n, t, i),
            (s = s.next));
        } while (s !== r);
      }
      Vt(e, t, n);
      break;
    case 1:
      if (
        !ze &&
        (Wn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (l) {
          we(n, t, l);
        }
      Vt(e, t, n);
      break;
    case 21:
      Vt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ze = (r = ze) || n.memoizedState !== null), Vt(e, t, n), (ze = r))
        : Vt(e, t, n);
      break;
    default:
      Vt(e, t, n);
  }
}
function Lc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new a0()),
      t.forEach(function (r) {
        var s = y0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      }));
  }
}
function ht(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var o = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ((Me = l.stateNode), (gt = !1));
              break e;
            case 3:
              ((Me = l.stateNode.containerInfo), (gt = !0));
              break e;
            case 4:
              ((Me = l.stateNode.containerInfo), (gt = !0));
              break e;
          }
          l = l.return;
        }
        if (Me === null) throw Error(I(160));
        (vf(o, i, s), (Me = null), (gt = !1));
        var c = s.alternate;
        (c !== null && (c.return = null), (s.return = null));
      } catch (u) {
        we(s, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (xf(t, e), (t = t.sibling));
}
function xf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ht(t, e), St(e), r & 4)) {
        try {
          (Dr(3, e, e.return), Lo(3, e));
        } catch (x) {
          we(e, e.return, x);
        }
        try {
          Dr(5, e, e.return);
        } catch (x) {
          we(e, e.return, x);
        }
      }
      break;
    case 1:
      (ht(t, e), St(e), r & 512 && n !== null && Wn(n, n.return));
      break;
    case 5:
      if (
        (ht(t, e),
        St(e),
        r & 512 && n !== null && Wn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          Ur(s, "");
        } catch (x) {
          we(e, e.return, x);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            (l === "input" && o.type === "radio" && o.name != null && $u(s, o),
              Fi(l, i));
            var u = Fi(l, o);
            for (i = 0; i < c.length; i += 2) {
              var d = c[i],
                f = c[i + 1];
              d === "style"
                ? Hu(s, f)
                : d === "dangerouslySetInnerHTML"
                  ? Qu(s, f)
                  : d === "children"
                    ? Ur(s, f)
                    : za(s, d, f, u);
            }
            switch (l) {
              case "input":
                Mi(s, o);
                break;
              case "textarea":
                Bu(s, o);
                break;
              case "select":
                var p = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Gn(s, !!o.multiple, v, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Gn(s, !!o.multiple, o.defaultValue, !0)
                      : Gn(s, !!o.multiple, o.multiple ? [] : "", !1));
            }
            s[Yr] = o;
          } catch (x) {
            we(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ht(t, e), St(e), r & 4)) {
        if (e.stateNode === null) throw Error(I(162));
        ((s = e.stateNode), (o = e.memoizedProps));
        try {
          s.nodeValue = o;
        } catch (x) {
          we(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (ht(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (x) {
          we(e, e.return, x);
        }
      break;
    case 4:
      (ht(t, e), St(e));
      break;
    case 13:
      (ht(t, e),
        St(e),
        (s = e.child),
        s.flags & 8192 &&
          ((o = s.memoizedState !== null),
          (s.stateNode.isHidden = o),
          !o ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (vl = Ce())),
        r & 4 && Lc(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ze = (u = ze) || d), ht(t, e), (ze = u)) : ht(t, e),
        St(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for ($ = e, d = e.child; d !== null; ) {
            for (f = $ = d; $ !== null; ) {
              switch (((p = $), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dr(4, p, p.return);
                  break;
                case 1:
                  Wn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (x) {
                      we(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Wn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Fc(f);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), ($ = v)) : Fc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                ((s = f.stateNode),
                  u
                    ? ((o = s.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = Vu("display", i))));
              } catch (x) {
                we(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (x) {
                we(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (d === f && (d = null), (f = f.return));
          }
          (d === f && (d = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (ht(t, e), St(e), r & 4 && Lc(e));
      break;
    case 21:
      break;
    default:
      (ht(t, e), St(e));
  }
}
function St(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(I(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (Ur(s, ""), (r.flags &= -33));
          var o = Ac(e);
          pa(e, o, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Ac(e);
          fa(e, l, i);
          break;
        default:
          throw Error(I(161));
      }
    } catch (c) {
      we(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function c0(e, t, n) {
  (($ = e), wf(e));
}
function wf(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var s = $,
      o = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || Ts;
      if (!i) {
        var l = s.alternate,
          c = (l !== null && l.memoizedState !== null) || ze;
        l = Ts;
        var u = ze;
        if (((Ts = i), (ze = c) && !u))
          for ($ = s; $ !== null; )
            ((i = $),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Oc(s)
                : c !== null
                  ? ((c.return = i), ($ = c))
                  : Oc(s));
        for (; o !== null; ) (($ = o), wf(o), (o = o.sibling));
        (($ = s), (Ts = l), (ze = u));
      }
      Dc(e);
    } else
      s.subtreeFlags & 8772 && o !== null ? ((o.return = s), ($ = o)) : Dc(e);
  }
}
function Dc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ze || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ze)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : mt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && wc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wc(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Wr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(I(163));
          }
        ze || (t.flags & 512 && da(t));
      } catch (p) {
        we(t, t.return, p);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), ($ = n));
      break;
    }
    $ = t.return;
  }
}
function Fc(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), ($ = n));
      break;
    }
    $ = t.return;
  }
}
function Oc(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (c) {
            we(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              we(t, s, c);
            }
          }
          var o = t.return;
          try {
            da(t);
          } catch (c) {
            we(t, o, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            da(t);
          } catch (c) {
            we(t, i, c);
          }
      }
    } catch (c) {
      we(t, t.return, c);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      ((l.return = t.return), ($ = l));
      break;
    }
    $ = t.return;
  }
}
var u0 = Math.ceil,
  vo = Bt.ReactCurrentDispatcher,
  gl = Bt.ReactCurrentOwner,
  dt = Bt.ReactCurrentBatchConfig,
  re = 0,
  Re = null,
  be = null,
  Ie = 0,
  tt = 0,
  qn = fn(0),
  Pe = 0,
  rs = null,
  jn = 0,
  Do = 0,
  yl = 0,
  Fr = null,
  Ge = null,
  vl = 0,
  ar = 1 / 0,
  Mt = null,
  xo = !1,
  ha = null,
  sn = null,
  Rs = !1,
  Yt = null,
  wo = 0,
  Or = 0,
  ma = null,
  Us = -1,
  Qs = 0;
function Qe() {
  return re & 6 ? Ce() : Us !== -1 ? Us : (Us = Ce());
}
function on(e) {
  return e.mode & 1
    ? re & 2 && Ie !== 0
      ? Ie & -Ie
      : qm.transition !== null
        ? (Qs === 0 && (Qs = rd()), Qs)
        : ((e = ae),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ud(e.type))),
          e)
    : 1;
}
function xt(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (ma = null), Error(I(185)));
  (is(e, n, r),
    (!(re & 2) || e !== Re) &&
      (e === Re && (!(re & 2) && (Do |= n), Pe === 4 && Kt(e, Ie)),
      Ze(e, r),
      n === 1 && re === 0 && !(t.mode & 1) && ((ar = Ce() + 500), Mo && pn())));
}
function Ze(e, t) {
  var n = e.callbackNode;
  qh(e, t);
  var r = no(e, e === Re ? Ie : 0);
  if (r === 0)
    (n !== null && ql(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ql(n), t === 1))
      (e.tag === 0 ? Wm(zc.bind(null, e)) : Td(zc.bind(null, e)),
        Um(function () {
          !(re & 6) && pn();
        }),
        (n = null));
    else {
      switch (sd(r)) {
        case 1:
          n = Va;
          break;
        case 4:
          n = td;
          break;
        case 16:
          n = to;
          break;
        case 536870912:
          n = nd;
          break;
        default:
          n = to;
      }
      n = Pf(n, kf.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function kf(e, t) {
  if (((Us = -1), (Qs = 0), re & 6)) throw Error(I(327));
  var n = e.callbackNode;
  if (Zn() && e.callbackNode !== n) return null;
  var r = no(e, e === Re ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ko(e, r);
  else {
    t = r;
    var s = re;
    re |= 2;
    var o = Sf();
    (Re !== e || Ie !== t) && ((Mt = null), (ar = Ce() + 500), kn(e, t));
    do
      try {
        p0();
        break;
      } catch (l) {
        Cf(e, l);
      }
    while (!0);
    (rl(),
      (vo.current = o),
      (re = s),
      be !== null ? (t = 0) : ((Re = null), (Ie = 0), (t = Pe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = Ui(e)), s !== 0 && ((r = s), (t = ga(e, s)))), t === 1)
    )
      throw ((n = rs), kn(e, 0), Kt(e, r), Ze(e, Ce()), n);
    if (t === 6) Kt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !d0(s) &&
          ((t = ko(e, r)),
          t === 2 && ((o = Ui(e)), o !== 0 && ((r = o), (t = ga(e, o)))),
          t === 1))
      )
        throw ((n = rs), kn(e, 0), Kt(e, r), Ze(e, Ce()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(I(345));
        case 2:
          gn(e, Ge, Mt);
          break;
        case 3:
          if (
            (Kt(e, r), (r & 130023424) === r && ((t = vl + 500 - Ce()), 10 < t))
          ) {
            if (no(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              (Qe(), (e.pingedLanes |= e.suspendedLanes & s));
              break;
            }
            e.timeoutHandle = Ji(gn.bind(null, e, Ge, Mt), t);
            break;
          }
          gn(e, Ge, Mt);
          break;
        case 4:
          if ((Kt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - vt(r);
            ((o = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~o));
          }
          if (
            ((r = s),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * u0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ji(gn.bind(null, e, Ge, Mt), r);
            break;
          }
          gn(e, Ge, Mt);
          break;
        case 5:
          gn(e, Ge, Mt);
          break;
        default:
          throw Error(I(329));
      }
    }
  }
  return (Ze(e, Ce()), e.callbackNode === n ? kf.bind(null, e) : null);
}
function ga(e, t) {
  var n = Fr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = ko(e, t)),
    e !== 2 && ((t = Ge), (Ge = n), t !== null && ya(t)),
    e
  );
}
function ya(e) {
  Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
}
function d0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            o = s.getSnapshot;
          s = s.value;
          try {
            if (!wt(o(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Kt(e, t) {
  for (
    t &= ~yl,
      t &= ~Do,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - vt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function zc(e) {
  if (re & 6) throw Error(I(327));
  Zn();
  var t = no(e, 0);
  if (!(t & 1)) return (Ze(e, Ce()), null);
  var n = ko(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ui(e);
    r !== 0 && ((t = r), (n = ga(e, r)));
  }
  if (n === 1) throw ((n = rs), kn(e, 0), Kt(e, t), Ze(e, Ce()), n);
  if (n === 6) throw Error(I(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gn(e, Ge, Mt),
    Ze(e, Ce()),
    null
  );
}
function xl(e, t) {
  var n = re;
  re |= 1;
  try {
    return e(t);
  } finally {
    ((re = n), re === 0 && ((ar = Ce() + 500), Mo && pn()));
  }
}
function En(e) {
  Yt !== null && Yt.tag === 0 && !(re & 6) && Zn();
  var t = re;
  re |= 1;
  var n = dt.transition,
    r = ae;
  try {
    if (((dt.transition = null), (ae = 1), e)) return e();
  } finally {
    ((ae = r), (dt.transition = n), (re = t), !(re & 6) && pn());
  }
}
function wl() {
  ((tt = qn.current), fe(qn));
}
function kn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bm(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((el(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ao());
          break;
        case 3:
          (or(), fe(Ye), fe($e), cl());
          break;
        case 5:
          ll(r);
          break;
        case 4:
          or();
          break;
        case 13:
          fe(ge);
          break;
        case 19:
          fe(ge);
          break;
        case 10:
          sl(r.type._context);
          break;
        case 22:
        case 23:
          wl();
      }
      n = n.return;
    }
  if (
    ((Re = e),
    (be = e = an(e.current, null)),
    (Ie = tt = t),
    (Pe = 0),
    (rs = null),
    (yl = Do = jn = 0),
    (Ge = Fr = null),
    xn !== null)
  ) {
    for (t = 0; t < xn.length; t++)
      if (((n = xn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = s), (r.next = i));
        }
        n.pending = r;
      }
    xn = null;
  }
  return e;
}
function Cf(e, t) {
  do {
    var n = be;
    try {
      if ((rl(), (zs.current = yo), go)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var s = r.queue;
          (s !== null && (s.pending = null), (r = r.next));
        }
        go = !1;
      }
      if (
        ((bn = 0),
        (Te = Ee = ye = null),
        (Lr = !1),
        (es = 0),
        (gl.current = null),
        n === null || n.return === null)
      ) {
        ((Pe = 1), (rs = t), (be = null));
        break;
      }
      e: {
        var o = e,
          i = n.return,
          l = n,
          c = t;
        if (
          ((t = Ie),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            d = l,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate;
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = jc(i);
          if (v !== null) {
            ((v.flags &= -257),
              Ec(v, i, l, o, t),
              v.mode & 1 && bc(o, u, t),
              (t = v),
              (c = u));
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              (x.add(c), (t.updateQueue = x));
            } else w.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              (bc(o, u, t), kl());
              break e;
            }
            c = Error(I(426));
          }
        } else if (he && l.mode & 1) {
          var R = jc(i);
          if (R !== null) {
            (!(R.flags & 65536) && (R.flags |= 256),
              Ec(R, i, l, o, t),
              tl(ir(c, l)));
            break e;
          }
        }
        ((o = c = ir(c, l)),
          Pe !== 4 && (Pe = 2),
          Fr === null ? (Fr = [o]) : Fr.push(o),
          (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var m = sf(o, c, t);
              xc(o, m);
              break e;
            case 1:
              l = c;
              var h = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (sn === null || !sn.has(g))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var k = of(o, l, t);
                xc(o, k);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      bf(n);
    } catch (b) {
      ((t = b), be === n && n !== null && (be = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Sf() {
  var e = vo.current;
  return ((vo.current = yo), e === null ? yo : e);
}
function kl() {
  ((Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    Re === null || (!(jn & 268435455) && !(Do & 268435455)) || Kt(Re, Ie));
}
function ko(e, t) {
  var n = re;
  re |= 2;
  var r = Sf();
  (Re !== e || Ie !== t) && ((Mt = null), kn(e, t));
  do
    try {
      f0();
      break;
    } catch (s) {
      Cf(e, s);
    }
  while (!0);
  if ((rl(), (re = n), (vo.current = r), be !== null)) throw Error(I(261));
  return ((Re = null), (Ie = 0), Pe);
}
function f0() {
  for (; be !== null; ) _f(be);
}
function p0() {
  for (; be !== null && !Oh(); ) _f(be);
}
function _f(e) {
  var t = Ef(e.alternate, e, tt);
  ((e.memoizedProps = e.pendingProps),
    t === null ? bf(e) : (be = t),
    (gl.current = null));
}
function bf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = i0(n, t)), n !== null)) {
        ((n.flags &= 32767), (be = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((Pe = 6), (be = null));
        return;
      }
    } else if (((n = o0(n, t, tt)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function gn(e, t, n) {
  var r = ae,
    s = dt.transition;
  try {
    ((dt.transition = null), (ae = 1), h0(e, t, n, r));
  } finally {
    ((dt.transition = s), (ae = r));
  }
  return null;
}
function h0(e, t, n, r) {
  do Zn();
  while (Yt !== null);
  if (re & 6) throw Error(I(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(I(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Gh(e, o),
    e === Re && ((be = Re = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Rs ||
      ((Rs = !0),
      Pf(to, function () {
        return (Zn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = dt.transition), (dt.transition = null));
    var i = ae;
    ae = 1;
    var l = re;
    ((re |= 4),
      (gl.current = null),
      l0(e, n),
      xf(n, e),
      Am(Gi),
      (ro = !!qi),
      (Gi = qi = null),
      (e.current = n),
      c0(n),
      zh(),
      (re = l),
      (ae = i),
      (dt.transition = o));
  } else e.current = n;
  if (
    (Rs && ((Rs = !1), (Yt = e), (wo = s)),
    (o = e.pendingLanes),
    o === 0 && (sn = null),
    Uh(n.stateNode),
    Ze(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest }));
  if (xo) throw ((xo = !1), (e = ha), (ha = null), e);
  return (
    wo & 1 && e.tag !== 0 && Zn(),
    (o = e.pendingLanes),
    o & 1 ? (e === ma ? Or++ : ((Or = 0), (ma = e))) : (Or = 0),
    pn(),
    null
  );
}
function Zn() {
  if (Yt !== null) {
    var e = sd(wo),
      t = dt.transition,
      n = ae;
    try {
      if (((dt.transition = null), (ae = 16 > e ? 16 : e), Yt === null))
        var r = !1;
      else {
        if (((e = Yt), (Yt = null), (wo = 0), re & 6)) throw Error(I(331));
        var s = re;
        for (re |= 4, $ = e.current; $ !== null; ) {
          var o = $,
            i = o.child;
          if ($.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for ($ = u; $ !== null; ) {
                  var d = $;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dr(8, d, o);
                  }
                  var f = d.child;
                  if (f !== null) ((f.return = d), ($ = f));
                  else
                    for (; $ !== null; ) {
                      d = $;
                      var p = d.sibling,
                        v = d.return;
                      if ((gf(d), d === u)) {
                        $ = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = v), ($ = p));
                        break;
                      }
                      $ = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var R = x.sibling;
                    ((x.sibling = null), (x = R));
                  } while (x !== null);
                }
              }
              $ = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), ($ = i));
          else
            e: for (; $ !== null; ) {
              if (((o = $), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                ((m.return = o.return), ($ = m));
                break e;
              }
              $ = o.return;
            }
        }
        var h = e.current;
        for ($ = h; $ !== null; ) {
          i = $;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) ((g.return = i), ($ = g));
          else
            e: for (i = h; $ !== null; ) {
              if (((l = $), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, l);
                  }
                } catch (b) {
                  we(l, l.return, b);
                }
              if (l === i) {
                $ = null;
                break e;
              }
              var k = l.sibling;
              if (k !== null) {
                ((k.return = l.return), ($ = k));
                break e;
              }
              $ = l.return;
            }
        }
        if (
          ((re = s), pn(), jt && typeof jt.onPostCommitFiberRoot == "function")
        )
          try {
            jt.onPostCommitFiberRoot(Eo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((ae = n), (dt.transition = t));
    }
  }
  return !1;
}
function $c(e, t, n) {
  ((t = ir(n, t)),
    (t = sf(e, t, 1)),
    (e = rn(e, t, 1)),
    (t = Qe()),
    e !== null && (is(e, 1, t), Ze(e, t)));
}
function we(e, t, n) {
  if (e.tag === 3) $c(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $c(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          ((e = ir(n, e)),
            (e = of(t, e, 1)),
            (t = rn(t, e, 1)),
            (e = Qe()),
            t !== null && (is(t, 1, e), Ze(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function m0(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Re === e &&
      (Ie & n) === n &&
      (Pe === 4 || (Pe === 3 && (Ie & 130023424) === Ie && 500 > Ce() - vl)
        ? kn(e, 0)
        : (yl |= n)),
    Ze(e, t));
}
function jf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ws), (ws <<= 1), !(ws & 130023424) && (ws = 4194304))
      : (t = 1));
  var n = Qe();
  ((e = zt(e, t)), e !== null && (is(e, t, n), Ze(e, n)));
}
function g0(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), jf(e, n));
}
function y0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(I(314));
  }
  (r !== null && r.delete(t), jf(e, n));
}
var Ef;
Ef = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ye.current) Ke = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((Ke = !1), s0(e, t, n));
      Ke = !!(e.flags & 131072);
    }
  else ((Ke = !1), he && t.flags & 1048576 && Rd(t, uo, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Bs(e, t), (e = t.pendingProps));
      var s = nr(t, $e.current);
      (Xn(t, n), (s = dl(null, t, r, e, s, n)));
      var o = fl();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((o = !0), lo(t)) : (o = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            il(t),
            (s.updater = Ao),
            (t.stateNode = s),
            (s._reactInternals = t),
            ra(t, r, e, n),
            (t = ia(null, t, r, !0, o, n)))
          : ((t.tag = 0), he && o && Za(t), Ue(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bs(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = x0(r)),
          (e = mt(r, e)),
          s)
        ) {
          case 0:
            t = oa(null, t, r, e, n);
            break e;
          case 1:
            t = Rc(null, t, r, e, n);
            break e;
          case 11:
            t = Pc(null, t, r, e, n);
            break e;
          case 14:
            t = Tc(null, t, r, mt(r.type, e), n);
            break e;
        }
        throw Error(I(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : mt(r, s)),
        oa(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : mt(r, s)),
        Rc(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((uf(t), e === null)) throw Error(I(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (s = o.element),
          Dd(e, t),
          ho(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((s = ir(Error(I(423)), t)), (t = Nc(e, t, r, n, s)));
            break e;
          } else if (r !== s) {
            ((s = ir(Error(I(424)), t)), (t = Nc(e, t, r, n, s)));
            break e;
          } else
            for (
              nt = nn(t.stateNode.containerInfo.firstChild),
                rt = t,
                he = !0,
                yt = null,
                n = Ad(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((rr(), r === s)) {
            t = $t(e, t, n);
            break e;
          }
          Ue(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fd(t),
        e === null && ea(t),
        (r = t.type),
        (s = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = s.children),
        Ki(r, s) ? (i = null) : o !== null && Ki(r, o) && (t.flags |= 32),
        cf(e, t),
        Ue(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && ea(t), null);
    case 13:
      return df(e, t, n);
    case 4:
      return (
        al(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = sr(t, null, r, n)) : Ue(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : mt(r, s)),
        Pc(e, t, r, s, n)
      );
    case 7:
      return (Ue(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Ue(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Ue(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (o = t.memoizedProps),
          (i = s.value),
          ue(fo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (wt(o.value, i)) {
            if (o.children === s.children && !Ye.current) {
              t = $t(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                i = o.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (o.tag === 1) {
                      ((c = Dt(-1, n & -n)), (c.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        (d === null
                          ? (c.next = c)
                          : ((c.next = d.next), (d.next = c)),
                          (u.pending = c));
                      }
                    }
                    ((o.lanes |= n),
                      (c = o.alternate),
                      c !== null && (c.lanes |= n),
                      ta(o.return, n, t),
                      (l.lanes |= n));
                    break;
                  }
                  c = c.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(I(341));
                ((i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  ta(i, n, t),
                  (i = o.sibling));
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    ((o.return = i.return), (i = o));
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        (Ue(e, t, s.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        Xn(t, n),
        (s = ft(s)),
        (r = r(s)),
        (t.flags |= 1),
        Ue(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = mt(r, t.pendingProps)),
        (s = mt(r.type, s)),
        Tc(e, t, r, s, n)
      );
    case 15:
      return af(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : mt(r, s)),
        Bs(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), lo(t)) : (e = !1),
        Xn(t, n),
        rf(t, r, s),
        ra(t, r, s, n),
        ia(null, t, r, !0, e, n)
      );
    case 19:
      return ff(e, t, n);
    case 22:
      return lf(e, t, n);
  }
  throw Error(I(156, t.tag));
};
function Pf(e, t) {
  return ed(e, t);
}
function v0(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function ut(e, t, n, r) {
  return new v0(e, t, n, r);
}
function Cl(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function x0(e) {
  if (typeof e == "function") return Cl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ba)) return 11;
    if (e === Ua) return 14;
  }
  return 2;
}
function an(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ut(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vs(e, t, n, r, s, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Cl(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Fn:
        return Cn(n.children, s, o, t);
      case $a:
        ((i = 8), (s |= 8));
        break;
      case Ei:
        return (
          (e = ut(12, n, t, s | 2)),
          (e.elementType = Ei),
          (e.lanes = o),
          e
        );
      case Pi:
        return ((e = ut(13, n, t, s)), (e.elementType = Pi), (e.lanes = o), e);
      case Ti:
        return ((e = ut(19, n, t, s)), (e.elementType = Ti), (e.lanes = o), e);
      case Fu:
        return Fo(n, s, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Lu:
              i = 10;
              break e;
            case Du:
              i = 9;
              break e;
            case Ba:
              i = 11;
              break e;
            case Ua:
              i = 14;
              break e;
            case Wt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(I(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ut(i, n, t, s)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function Cn(e, t, n, r) {
  return ((e = ut(7, e, r, t)), (e.lanes = n), e);
}
function Fo(e, t, n, r) {
  return (
    (e = ut(22, e, r, t)),
    (e.elementType = Fu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function yi(e, t, n) {
  return ((e = ut(6, e, null, t)), (e.lanes = n), e);
}
function vi(e, t, n) {
  return (
    (t = ut(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function w0(e, t, n, r, s) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Xo(0)),
    (this.expirationTimes = Xo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Xo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null));
}
function Sl(e, t, n, r, s, o, i, l, c) {
  return (
    (e = new w0(e, t, n, l, c)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ut(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    il(o),
    e
  );
}
function k0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Tf(e) {
  if (!e) return un;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(I(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(I(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return Pd(e, n, t);
  }
  return t;
}
function Rf(e, t, n, r, s, o, i, l, c) {
  return (
    (e = Sl(n, r, !0, e, s, o, i, l, c)),
    (e.context = Tf(null)),
    (n = e.current),
    (r = Qe()),
    (s = on(n)),
    (o = Dt(r, s)),
    (o.callback = t ?? null),
    rn(n, o, s),
    (e.current.lanes = s),
    is(e, s, r),
    Ze(e, r),
    e
  );
}
function Oo(e, t, n, r) {
  var s = t.current,
    o = Qe(),
    i = on(s);
  return (
    (n = Tf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Dt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rn(s, t, i)),
    e !== null && (xt(e, s, i, o), Os(e, s, i)),
    i
  );
}
function Co(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function _l(e, t) {
  (Bc(e, t), (e = e.alternate) && Bc(e, t));
}
function C0() {
  return null;
}
var Nf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bl(e) {
  this._internalRoot = e;
}
zo.prototype.render = bl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(I(409));
  Oo(e, t, null, null);
};
zo.prototype.unmount = bl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (En(function () {
      Oo(null, e, null, null);
    }),
      (t[Ot] = null));
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ad();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
    (Gt.splice(n, 0, e), n === 0 && cd(e));
  }
};
function jl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function $o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Uc() {}
function S0(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Co(i);
        o.call(u);
      };
    }
    var i = Rf(t, r, e, 0, null, !1, !1, "", Uc);
    return (
      (e._reactRootContainer = i),
      (e[Ot] = i.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      En(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Co(c);
      l.call(u);
    };
  }
  var c = Sl(e, 0, !1, null, null, !1, !1, "", Uc);
  return (
    (e._reactRootContainer = c),
    (e[Ot] = c.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      Oo(t, c, n, r);
    }),
    c
  );
}
function Bo(e, t, n, r, s) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof s == "function") {
      var l = s;
      s = function () {
        var c = Co(i);
        l.call(c);
      };
    }
    Oo(t, i, e, s);
  } else i = S0(n, t, e, s, r);
  return Co(i);
}
od = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Er(t.pendingLanes);
        n !== 0 &&
          (Ha(t, n | 1), Ze(t, Ce()), !(re & 6) && ((ar = Ce() + 500), pn()));
      }
      break;
    case 13:
      (En(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var s = Qe();
          xt(r, e, 1, s);
        }
      }),
        _l(e, 1));
  }
};
Wa = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      xt(t, e, 134217728, n);
    }
    _l(e, 134217728);
  }
};
id = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Qe();
      xt(n, e, t, r);
    }
    _l(e, t);
  }
};
ad = function () {
  return ae;
};
ld = function (e, t) {
  var n = ae;
  try {
    return ((ae = e), t());
  } finally {
    ae = n;
  }
};
zi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Mi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = No(r);
            if (!s) throw Error(I(90));
            (zu(r), Mi(r, s));
          }
        }
      }
      break;
    case "textarea":
      Bu(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Gn(e, !!n.multiple, t, !1));
  }
};
Gu = xl;
Ku = En;
var _0 = { usingClientEntryPoint: !1, Events: [ls, Bn, No, Wu, qu, xl] },
  Cr = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  b0 = {
    bundleType: Cr.bundleType,
    version: Cr.version,
    rendererPackageName: Cr.rendererPackageName,
    rendererConfig: Cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Bt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Xu(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Cr.findFiberByHostInstance || C0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ns.isDisabled && Ns.supportsFiber)
    try {
      ((Eo = Ns.inject(b0)), (jt = Ns));
    } catch {}
}
ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _0;
ot.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!jl(t)) throw Error(I(200));
  return k0(e, t, null, n);
};
ot.createRoot = function (e, t) {
  if (!jl(e)) throw Error(I(299));
  var n = !1,
    r = "",
    s = Nf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Sl(e, 1, !1, null, null, n, !1, r, s)),
    (e[Ot] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new bl(t)
  );
};
ot.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(I(188))
      : ((e = Object.keys(e).join(",")), Error(I(268, e)));
  return ((e = Xu(t)), (e = e === null ? null : e.stateNode), e);
};
ot.flushSync = function (e) {
  return En(e);
};
ot.hydrate = function (e, t, n) {
  if (!$o(t)) throw Error(I(200));
  return Bo(null, e, t, !0, n);
};
ot.hydrateRoot = function (e, t, n) {
  if (!jl(e)) throw Error(I(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    o = "",
    i = Nf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Rf(t, null, e, 1, n ?? null, s, !1, o, i)),
    (e[Ot] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s));
  return new zo(t);
};
ot.render = function (e, t, n) {
  if (!$o(t)) throw Error(I(200));
  return Bo(null, e, t, !1, n);
};
ot.unmountComponentAtNode = function (e) {
  if (!$o(e)) throw Error(I(40));
  return e._reactRootContainer
    ? (En(function () {
        Bo(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ot] = null));
        });
      }),
      !0)
    : !1;
};
ot.unstable_batchedUpdates = xl;
ot.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$o(n)) throw Error(I(200));
  if (e == null || e._reactInternals === void 0) throw Error(I(38));
  return Bo(e, t, n, !1, r);
};
ot.version = "18.3.1-next-f1338f8080-20240426";
function Mf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf);
    } catch (e) {
      console.error(e);
    }
}
(Mf(), (Nu.exports = ot));
var El = Nu.exports,
  Qc = El;
((bi.createRoot = Qc.createRoot), (bi.hydrateRoot = Qc.hydrateRoot));
const j0 = "modulepreload",
  E0 = function (e) {
    return "/memusic-webplayer/dist/" + e;
  },
  Vc = {},
  hn = function (t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        l =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      s = Promise.allSettled(
        n.map((c) => {
          if (((c = E0(c)), c in Vc)) return;
          Vc[c] = !0;
          const u = c.endsWith(".css"),
            d = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : j0),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = c),
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            u)
          )
            return new Promise((p, v) => {
              (f.addEventListener("load", p),
                f.addEventListener("error", () =>
                  v(new Error(`Unable to preload CSS for ${c}`)),
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
    return s.then((i) => {
      for (const l of i || []) l.status === "rejected" && o(l.reason);
      return t().catch(o);
    });
  };
var Ne = [];
for (var xi = 0; xi < 256; ++xi) Ne.push((xi + 256).toString(16).slice(1));
function P0(e, t = 0) {
  return (
    Ne[e[t + 0]] +
    Ne[e[t + 1]] +
    Ne[e[t + 2]] +
    Ne[e[t + 3]] +
    "-" +
    Ne[e[t + 4]] +
    Ne[e[t + 5]] +
    "-" +
    Ne[e[t + 6]] +
    Ne[e[t + 7]] +
    "-" +
    Ne[e[t + 8]] +
    Ne[e[t + 9]] +
    "-" +
    Ne[e[t + 10]] +
    Ne[e[t + 11]] +
    Ne[e[t + 12]] +
    Ne[e[t + 13]] +
    Ne[e[t + 14]] +
    Ne[e[t + 15]]
  ).toLowerCase();
}
var Ms,
  T0 = new Uint8Array(16);
function R0() {
  if (
    !Ms &&
    ((Ms =
      typeof crypto < "u" &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !Ms)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
    );
  return Ms(T0);
}
var N0 =
  typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const Hc = { randomUUID: N0 };
function lr(e, t, n) {
  if (Hc.randomUUID && !e) return Hc.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || R0)();
  return ((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), P0(r));
}
function M0(e, t) {
  const [n, r] = y.useState(e);
  return (
    y.useEffect(() => {
      const s = setTimeout(() => {
        r(e);
      }, t);
      return () => {
        clearTimeout(s);
      };
    }, [e, t]),
    n
  );
}
const I0 = ["adventurer"],
  A0 = [
    "Max",
    "Mia",
    "Leo",
    "Zoe",
    "Sam",
    "Ava",
    "Ben",
    "Lily",
    "Tom",
    "Eva",
    "Alex",
    "Ruby",
    "Jack",
    "Chloe",
    "Oscar",
    "Ivy",
    "Finn",
    "Nora",
    "Kai",
    "Isla",
    "Owen",
    "Luna",
    "Milo",
    "Aria",
    "Caleb",
    "Ella",
    "Theo",
    "Grace",
    "Liam",
    "Sofia",
    "Noah",
    "Emma",
    "Oliver",
    "Amelia",
    "Abby",
    "Bear",
    "Coco",
    "Duke",
    "Felix",
    "Gizmo",
    "Hazel",
    "Jasper",
    "Kiki",
    "Loki",
    "Mochi",
    "Nico",
    "Ollie",
    "Penny",
    "Quinn",
    "Remy",
    "Sadie",
    "Toby",
    "Uma",
    "Vince",
    "Willow",
    "Xena",
    "Yara",
    "Zeke",
    "Angel",
    "Buddy",
    "Charlie",
    "Daisy",
    "Eddie",
    "Fiona",
    "George",
    "Holly",
    "Iggy",
    "Josie",
    "Kevin",
    "Lola",
    "Monty",
    "Nina",
    "Otis",
    "Piper",
    "Riley",
    "Simba",
    "Tessa",
    "Usher",
    "Violet",
    "Winston",
    "Xylo",
    "Yuki",
    "Zelda",
    "Apollo",
    "Bella",
    "Cooper",
    "Dexter",
    "Frankie",
    "Gigi",
    "Hank",
    "Indie",
    "Juno",
    "Kobe",
    "Lucy",
    "Murphy",
    "Nala",
    "Paco",
    "Rocco",
    "Stella",
    "Thor",
    "Vader",
    "Walter",
    "Zola",
    "Archie",
    "Bailey",
    "Chester",
    "Dobby",
    "Elsa",
    "Fred",
    "Gus",
    "Harper",
    "Izzy",
    "Jackson",
    "King",
    "Levi",
    "Mabel",
    "Nelson",
    "Orion",
    "Peanut",
    "Queenie",
    "Rosie",
    "Scout",
    "Teddy",
    "Ulysses",
    "Vinny",
    "Wally",
    "Yoshi",
    "Ziggy",
    "Bandit",
    "Casey",
    "Draco",
    "Echo",
    "Frida",
    "Ghost",
    "Houdini",
    "Jinx",
    "Klaus",
    "Lenny",
    "Marvin",
    "Nacho",
    "Ozzy",
    "Pickles",
    "Ranger",
    "Shadow",
    "Tito",
    "Vito",
    "Woody",
    "Zeus",
    "Axel",
    "Blue",
    "Clyde",
    "Anubis",
    "Bacchus",
    "Chaos",
    "Dionysus",
    "Eros",
    "Freya",
    "Hades",
    "Iris",
    "Janus",
    "Kronos",
    "Leto",
    "Morpheus",
    "Nike",
    "Orpheus",
    "Pan",
    "Rhea",
    "Selene",
    "Triton",
    "Uranus",
    "Zephyr",
  ],
  L0 = (e, t) =>
    `https://api.dicebear.com/9.x/${e}/svg?seed=${encodeURIComponent(t)}`,
  D0 = I0.flatMap((e) => A0.map((t) => L0(e, t))),
  F0 = (e) => {
    for (let t = e.length - 1; t > 0; t--) {
      const n = Math.floor(Math.random() * (t + 1));
      [e[t], e[n]] = [e[n], e[t]];
    }
    return e;
  },
  Wc = F0(Array.from(new Set(D0))),
  qc = [
    "Cosmic",
    "Groovy",
    "Funky",
    "Retro",
    "Electric",
    "Sonic",
    "Vivid",
    "Lazy",
    "Happy",
    "Stellar",
    "Digital",
    "Golden",
    "Crimson",
    "Silent",
    "Midnight",
  ],
  Gc = [
    "Panda",
    "Llama",
    "Wave",
    "Rhythm",
    "Beat",
    "Turtle",
    "Robot",
    "Cat",
    "Dolphin",
    "Voyager",
    "Jukebox",
    "Echo",
    "Ghost",
    "Dreamer",
    "Traveler",
  ],
  O0 = () => {
    const e = qc[Math.floor(Math.random() * qc.length)],
      t = Gc[Math.floor(Math.random() * Gc.length)];
    return `${e} ${t}`;
  },
  Pl = "welkin-music-v1-storage",
  z0 = 1e3,
  $0 = [
    { f: 60, type: "lowshelf" },
    { f: 230, type: "peaking" },
    { f: 910, type: "peaking" },
    { f: 3600, type: "peaking" },
    { f: 14e3, type: "highshelf" },
  ],
  Je = {
    version: 1,
    profile: {
      name: O0(),
      imageUrl: Wc[Math.floor(Math.random() * Wc.length)],
    },
    settings: {
      language: "en",
      player: {
        volume: 1,
        selectedQuality: "320kbps",
        isShuffle: !1,
        repeatMode: "off",
        eqSettings: $0.map(() => ({ gain: 0 })),
        isEqEnabled: !1,
        is8DEnabled: !1,
        isReverbEnabled: !1,
        reverbMix: 0.3,
      },
    },
    music: {
      favoriteSongs: [],
      favoriteAlbums: [],
      playlists: [],
      history: [],
      playlistHistory: [],
      favoriteApiPlaylists: [],
      favoriteArtists: [],
    },
    playerQueue: {
      currentQueue: [],
      currentIndex: -1,
      contextType: null,
      contextId: null,
      originalQueueUnshuffled: null,
    },
    searchHistory: [],
  },
  B0 = (e) => e && typeof e == "object" && !Array.isArray(e),
  Tl = (e, t) => {
    if (t == null || typeof e != typeof t) return e;
    if (Array.isArray(e))
      return Array.isArray(t) ? t.filter((n) => n != null) : e;
    if (B0(e)) {
      const n = {};
      return (
        Object.keys(e).forEach((r) => {
          n[r] = t[r] === void 0 ? e[r] : Tl(e[r], t[r]);
        }),
        n
      );
    }
    return t;
  },
  If = (e) => (
    e.settings.player.eqSettings.length !== 5 &&
      (e.settings.player.eqSettings = Je.settings.player.eqSettings),
    e.playerQueue.currentIndex >= e.playerQueue.currentQueue.length &&
      (e.playerQueue.currentIndex = -1),
    e
  ),
  U0 = () => {
    try {
      const e = localStorage.getItem(Pl);
      return e === null ? Je : If(Tl(Je, JSON.parse(e)));
    } catch (e) {
      return (console.error("Failed to load state, resetting.", e), Je);
    }
  },
  Hs = (e) => {
    try {
      localStorage.setItem(Pl, JSON.stringify(e));
    } catch (t) {
      if (t.name === "QuotaExceededError" || t.code === 22) {
        if (
          (console.warn("Storage quota exceeded. Pruning data..."),
          e.music.history.length > 10)
        ) {
          ((e.music.history = e.music.history.slice(
            0,
            Math.floor(e.music.history.length / 2),
          )),
            Hs(e));
          return;
        }
        if (e.searchHistory.length > 0) {
          ((e.searchHistory = []), Hs(e));
          return;
        }
        if (e.music.playlistHistory.length > 0) {
          ((e.music.playlistHistory = []), Hs(e));
          return;
        }
      }
      console.error("Failed to save state.", t);
    }
  },
  Q0 = () => {
    const [e, t] = y.useState(U0),
      n = M0(e, z0);
    (y.useEffect(() => {
      Hs(n);
    }, [n]),
      y.useEffect(() => {
        const s = (o) => {
          if (o.key === Pl && o.newValue)
            try {
              t(If(Tl(Je, JSON.parse(o.newValue))));
            } catch (i) {
              console.error("Failed to sync state.", i);
            }
        };
        return (
          window.addEventListener("storage", s),
          () => window.removeEventListener("storage", s)
        );
      }, []));
    const r = y.useCallback((s) => {
      t((o) => {
        try {
          const i =
            typeof structuredClone == "function"
              ? structuredClone(o)
              : JSON.parse(JSON.stringify(o));
          s(i);
          for (const l of Object.keys(Je)) i[l] === void 0 && (i[l] = Je[l]);
          return i;
        } catch (i) {
          return (console.error("State update error.", i), o);
        }
      });
    }, []);
    return [e, r];
  },
  Rn = y.createContext({}),
  V0 = ({ children: e, musicData: t, fullState: n, setAppState: r }) => {
    const s =
        t &&
        Array.isArray(t.favoriteSongs) &&
        Array.isArray(t.favoriteAlbums) &&
        Array.isArray(t.playlists) &&
        Array.isArray(t.history)
          ? t
          : Je.music,
      {
        favoriteSongs: o,
        favoriteAlbums: i,
        playlists: l,
        history: c,
        playlistHistory: u,
        favoriteApiPlaylists: d,
        favoriteArtists: f,
      } = s,
      p = (T) => {
        r((M) => {
          T(M.music);
        });
      },
      v = y.useCallback((T) => o.some((M) => M.id === T), [o]),
      w = (T) => {
        p((M) => {
          M.favoriteSongs.some((N) => N.id === T.id)
            ? (M.favoriteSongs = M.favoriteSongs.filter((N) => N.id !== T.id))
            : M.favoriteSongs.unshift(T);
        });
      },
      x = y.useCallback((T) => i.some((M) => M.id === T), [i]),
      R = (T) => {
        p((M) => {
          M.favoriteAlbums.some((N) => N.id === T.id)
            ? (M.favoriteAlbums = M.favoriteAlbums.filter((N) => N.id !== T.id))
            : M.favoriteAlbums.unshift(T);
        });
      },
      m = y.useCallback((T) => d.some((M) => M.id === T), [d]),
      h = (T) => {
        p((M) => {
          M.favoriteApiPlaylists.some((N) => N.id === T.id)
            ? (M.favoriteApiPlaylists = M.favoriteApiPlaylists.filter(
                (N) => N.id !== T.id,
              ))
            : M.favoriteApiPlaylists.unshift(T);
        });
      },
      g = y.useCallback((T) => f.some((M) => M.id === T), [f]),
      k = (T) => {
        const M = {
          id: T.id,
          name: T.name,
          role: "role" in T ? T.role : T.dominantType || T.type,
          type: T.type,
          image: T.image,
          url: T.url,
        };
        p((A) => {
          A.favoriteArtists.some((S) => S.id === T.id)
            ? (A.favoriteArtists = A.favoriteArtists.filter(
                (S) => S.id !== T.id,
              ))
            : A.favoriteArtists.unshift(M);
        });
      },
      b = (T, M, A = []) => {
        const N = { id: lr(), name: T, description: M, songs: A };
        return (
          p((S) => {
            S.playlists.unshift(N);
          }),
          N
        );
      },
      P = (T) => {
        p((M) => {
          ((M.playlists = M.playlists.filter((A) => A.id !== T)),
            (M.playlistHistory = M.playlistHistory.filter((A) => A !== T)));
        });
      },
      E = (T, M) => {
        p((A) => {
          const N = A.playlists.findIndex((S) => S.id === T);
          N > -1 && (A.playlists[N] = { ...A.playlists[N], ...M });
        });
      },
      F = (T, M) => {
        p((A) => {
          const N = A.playlists.find((S) => S.id === T);
          N && !N.songs.some((S) => S.id === M.id) && N.songs.push(M);
        });
      },
      V = (T, M) => {
        p((A) => {
          const N = A.playlists.find((S) => S.id === T);
          N && (N.songs = N.songs.filter((S) => S.id !== M));
        });
      },
      B = (T) => {
        p((M) => {
          M.history = [T, ...M.history.filter((A) => A.id !== T.id)].slice(
            0,
            50,
          );
        });
      },
      G = (T) => {
        p((M) => {
          M.playlistHistory = [
            T,
            ...M.playlistHistory.filter((A) => A !== T),
          ].slice(0, 10);
        });
      },
      le = () => JSON.stringify(n, null, 2),
      U = (T, M) => {
        try {
          const A = JSON.parse(T);
          return typeof A != "object" || A === null
            ? { success: !1, messageKey: "settings.data.importInvalidFormat" }
            : (r((N) => {
                (A.profile && (N.profile = { ...Je.profile, ...A.profile }),
                  A.settings &&
                    (N.settings = { ...Je.settings, ...A.settings }));
                const S = A.music || {};
                if (M === "replace") N.music = { ...Je.music, ...S };
                else {
                  const z = (j, O) => {
                    if (!Array.isArray(O)) return j;
                    const q = new Set(j.map((X) => X.id));
                    return [
                      ...O.filter((X) => X && X.id && !q.has(X.id)),
                      ...j,
                    ];
                  };
                  if (
                    ((N.music.favoriteSongs = z(
                      N.music.favoriteSongs,
                      S.favoriteSongs,
                    )),
                    (N.music.favoriteAlbums = z(
                      N.music.favoriteAlbums,
                      S.favoriteAlbums,
                    )),
                    (N.music.playlists = z(N.music.playlists, S.playlists)),
                    (N.music.favoriteApiPlaylists = z(
                      N.music.favoriteApiPlaylists,
                      S.favoriteApiPlaylists,
                    )),
                    (N.music.favoriteArtists = z(
                      N.music.favoriteArtists,
                      S.favoriteArtists,
                    )),
                    Array.isArray(S.history))
                  ) {
                    const j = [...S.history, ...N.music.history];
                    N.music.history = j
                      .filter(
                        (O, q, se) =>
                          O && O.id && q === se.findIndex((X) => X.id === O.id),
                      )
                      .slice(0, 50);
                  }
                  Array.isArray(S.playlistHistory) &&
                    (N.music.playlistHistory = [
                      ...new Set([...S.playlistHistory, ...S.playlistHistory]),
                    ].slice(0, 10));
                }
              }),
              {
                success: !0,
                messageKey:
                  M === "replace"
                    ? "settings.data.importReplaceSuccess"
                    : "settings.data.importMergeSuccess",
              });
        } catch (A) {
          return (
            console.error("Failed to import data", A),
            { success: !1, messageKey: "settings.data.importParseError" }
          );
        }
      };
    return a.jsx(Rn.Provider, {
      value: {
        favoriteSongs: o,
        favoriteAlbums: i,
        playlists: l,
        history: c,
        playlistHistory: u,
        favoriteApiPlaylists: d,
        favoriteArtists: f,
        isFavoriteSong: v,
        toggleFavoriteSong: w,
        isFavoriteAlbum: x,
        toggleFavoriteAlbum: R,
        isFavoriteApiPlaylist: m,
        toggleFavoriteApiPlaylist: h,
        isFavoriteArtist: g,
        toggleFavoriteArtist: k,
        createPlaylist: b,
        deletePlaylist: P,
        updatePlaylist: E,
        addSongToPlaylist: F,
        removeSongFromPlaylist: V,
        addToHistory: B,
        addToPlaylistHistory: G,
        importData: U,
        exportData: le,
      },
      children: e,
    });
  },
  H0 = {
    sidebar: {
      home: "Home",
      search: "Search",
      library: "Library",
      settings: "Settings",
      playlist: "Playlist",
    },
    player: {
      noSong: "No song selected",
      shuffle: "Shuffle",
      repeat: "Repeat: {{mode}}",
      download: "Download song",
      addToPlaylist: "Add to playlist",
      newPlaylist: "New Playlist",
      noPlaylists: "No playlists.",
      favorite: "Favorite song",
      showQueue: "Show queue",
      unmute: "Unmute",
      mute: "Mute",
      partyMode: "Party Mode",
    },
    home: {
      goodMorning: "Good morning",
      goodAfternoon: "Good afternoon",
      goodEvening: "Good evening",
      recommended: "Recommended For You",
      newReleases: "New Releases From Your Artists",
    },
    search: {
      placeholder: "Search for songs, albums, artists...",
      recent: "Recent Searches",
      noResults: "No results found.",
      noSongs: "No songs found for this query.",
      noAlbums: "No albums found for this query.",
      noArtists: "No artists found for this query.",
      noPlaylists: "No playlists found for this query.",
      prompt: "Search for your favorite music.",
      promptSubtitle: "Results will appear here.",
    },
    library: {
      all: "All",
      playlists: "Playlists",
      songs: "Songs",
      artists: "Artists",
      albums: "Albums",
      newPlaylist: "New Playlist",
      moreOptions: "More options",
      delete: "Delete",
      empty: "Your library is empty",
      emptySubtitle: "Save songs, albums, and artists to see them here.",
      recentPlaylists: "Recent Playlists",
      recentAlbums: "Recent Albums",
      recentArtists: "Recent Artists",
      recentSongs: "Recent Songs",
      deletePlaylistTitle: "Delete Playlist",
      deletePlaylistConfirm:
        'Are you sure you want to permanently delete "{{name}}"?',
      cancel: "Cancel",
      myPlaylists: "My Playlists",
      favoritePlaylists: "Favorite Playlists",
      noFavPlaylists: "You haven't favorited any public playlists yet.",
      sortBy: "Sort by: {{label}}",
      sort_date_added: "Date Added",
      sort_title_asc: "Title (A-Z)",
      sort_title_desc: "Title (Z-A)",
      noFavSongs: "You haven't favorited any songs yet.",
      noFavArtists: "You haven't followed any artists yet.",
      noFavAlbums: "You haven't favorited any albums yet.",
    },
    albumView: {
      album: "Album",
      songs: "{{count}} songs",
      duration: "{{duration}} min",
      removeFromFav: "Remove from favorites",
      addToFav: "Add to favorites",
      downloadAll: "Download all songs",
      moreOptions: "More options",
      addToQueue: "Add to Queue",
      playShuffle: "Play Shuffle",
      downloadM3U: "Download .m3u playlist",
      downloadPreparing: "Preparing Download",
      downloadFetching: "Fetching songs... ({{current}}/{{total}})",
      downloadFetching_plural: "Fetching song {{current}} of {{total}}...",
      downloadFailed: "Download Failed",
      downloadFailedMsg: "Could not download any songs for this album.",
      close: "Close",
      downloadCompressing: "Compressing Files",
      downloadCompressingMsg:
        "Creating your .zip file. This may take a moment...",
      downloadCompressingProgress: "Compressing... {{percent}}%",
      error: "Error",
      errorZip: "Failed to create .zip file.",
    },
    playlistView: {
      notFound: "Playlist not found. It may have been deleted.",
      addSongsPrompt: "Add at least 3 songs to get recommendations.",
      quickAddTitle: "Quick Add",
      quickAddSearch: "Search for songs to add",
      added: "Added",
      add: "Add",
      recommendations: "Recommended Songs",
      recommendationsSubtitle: "Based on what's in this playlist.",
      noRecs:
        "Could not fetch recommendations. The service might be temporarily unavailable.",
      playlist: "Playlist",
      deletePlaylistTitle: "Delete Playlist",
      deletePlaylistConfirm: 'Are you sure you want to delete "{{name}}"?',
      cancel: "Cancel",
      delete: "Delete",
      editDetailsTitle: "Edit Details",
      playlistName: "Nome da Playlist",
      description: "Description (optional)",
      save: "Save",
      choosePhoto: "Choose Photo",
      editDetails: "Edit details",
      addSongs: "Add songs",
      empty: "This playlist is empty.",
      songCount: "{{count}} song",
      songCount_plural: "{{count}} songs",
      noResultsFor: 'No results found for "{{query}}".',
      sort_default: "Default",
      sort_title: "Title",
      sort_duration: "Duration",
    },
    artistView: {
      verified: "Verified Artist",
      followers: "{{count}} followers",
      following: "Following",
      follow: "Follow",
      popular: "Popular",
      latestRelease: "Latest Release",
      albums: "Albums",
      about: "About",
      readMore: "Read More",
      showLess: "Show Less",
      fansLike: "Fans Also Like",
    },
    apiPlaylistView: {
      publicPlaylist: "Public Playlist",
      saveToLibrary: "Save to your library",
      alreadySaved: "Already in your library",
      favorite: "Favorite",
      more: "More...",
      addToQueue: "Add to Queue",
      downloadZip: "Download .zip",
      sortBy: "SORT BY",
      sort_default: "Default",
      sort_title: "Title",
      sort_duration: "Duration",
      title: "Title",
      noSongs: "Could not find songs for this playlist.",
      savedModalTitle: "Playlist Saved",
      savedModalMsg: '"{{name}}" has been added to your library.',
      close: "Close",
      viewInLibrary: "View in Library",
    },
    queue: {
      party: "Party",
      queue: "Queue",
      host: "Host",
      copyCode: "Copy Party Code",
      copied: "Copied!",
      online: "online",
      sendReaction: "Send Reaction",
      endParty: "End Party",
      leaveParty: "Leave Party",
      nowPlaying: "Now Playing",
      upNext: "Up Next",
      upNextAutoplay: "Up Next from Radio",
      previouslyPlayed: "Previously Played",
      empty: "Your Queue is Empty",
      emptySubtitle: "Add some songs to get started!",
      moveToTop: "Move to Top",
      moveToBottom: "Move to Bottom",
      removeFromQueue: "Remove from Queue",
      autoplay: "Radio & Autoplay",
      autoplaySubtitle: "We'll keep playing similar music when the queue ends.",
    },
    party: {
      notFound: "Party not found.",
      inactive: "This party seems to be inactive.",
      joined: "Joined party!",
    },
    songlist: {
      noSongs: "No songs to display.",
      menu: {
        goToRadio: "Go to radio",
        playNext: "Play Next",
        addToQueue: "Add to Queue",
      },
    },
    partyModal: {
      joinTitle: "Join Party",
      joinSubtitle: "Enter the 5-digit code to join.",
      back: "Back",
      joinButton: "Join Party",
      joining: "Joining...",
      createTitle: "Create a Party",
      createSubtitle: "Set the rules for your listening party.",
      collaborative: "Collaborative",
      collaborativeDesc: "Everyone can add, remove, and reorder songs.",
      djHost: "DJ Host",
      djHostDesc: "Only you control the music queue.",
      startButton: "Start Party",
      shareTitle: "Party Started!",
      shareSubtitle: "Share the code or link for friends to join.",
      partyCode: "Party Code",
      copyInvite: "Copy Invite Link",
      linkCopied: "Link Copied!",
      done: "Done",
      landingTitle: "Party Mode",
      landingSubtitle: "Listen to music together with friends, in real-time.",
      createCardTitle: "Create a Party",
      createCardDesc: "Be the host and invite your friends.",
      joinCardTitle: "Join a Party",
      joinCardDesc: "Got a code? Hop in here.",
    },
    settings: {
      title: "Settings",
      profile: {
        title: "Your Profile",
        description: "This is how you appear on Welkin.Music.",
        changePhoto: "Change Photo",
        editProfile: "Edit Profile",
        cancel: "Cancel",
        save: "Save",
        chooseAvatar: "Choose Profile Picture",
        random: "Random",
        upload: "Upload",
      },
      language: {
        title: "Language",
        description: "Choose the display language for the app.",
        english: "English",
        portuguese: "Portuguese",
      },
      quality: {
        title: "Audio Quality",
        description:
          "Select the streaming quality. Higher quality uses more data.",
        low: "Low",
        lowDesc: "Uses less data.",
        normal: "Normal",
        normalDesc: "Balance of quality and data.",
        high: "High",
        highDesc: "Best audio quality.",
      },
      data: {
        title: "Manage Data",
        description:
          "Back up your library to a file, or restore from a backup.",
        import: "Import Library",
        export: "Export Library",
        importTitle: "Import Your Library",
        importSubtitle: "Choose how to import from your backup file.",
        merge: "Merge",
        mergeDesc:
          "Add new items from the backup to your current library. No data will be deleted.",
        replace: "Replace",
        replaceDesc:
          "Warning: This will delete your current library before importing the backup.",
        importSuccess: "Import Successful",
        importFailure: "Import Failed",
        importInvalidFormat: "Invalid data format: not an object.",
        importReplaceSuccess: "Data replaced successfully.",
        importMergeSuccess: "Data merged successfully.",
        importParseError: "Failed to parse the file.",
      },
      effects: {
        title: "Audio Effects",
        description:
          "Customize your listening with an equalizer, spatial audio, and reverb.",
        enableEQ: "Enable Equalizer",
        presets: "Presets",
        reset: "Reset",
        preset_flat: "Flat",
        preset_pop: "Pop",
        preset_rock: "Rock",
        preset_jazz: "Jazz",
        preset_voice: "Voice Booster",
        enableReverb: "Enable Reverb",
        intensity: "Intensity",
        enable8D: "Enable 8D Audio",
        eightDDesc:
          "Experience immersive sound that moves around you. Best with headphones.",
      },
      about: {
        title: "About Welkin.Music",
        description: "Information about the project and its technologies.",
        version: "Version",
        p1: "This music player is a personal project designed to demonstrate modern web technologies and provide a fluid, account-free music listening experience.",
        p2: "All music data is sourced from the unofficial",
        p3: "All rights to the music belong to their respective owners.",
        sourceCode: "Source Code & Credits",
        tech: "Technologies Used",
      },
    },
    modals: {
      partyEnded: {
        title: "Party Ended",
        ok: "OK",
        endedByHost: 'The party "{{partyId}}" was ended by the host.',
        connectionLost:
          'Connection to the host of party "{{partyId}}" was lost.',
        ended: 'The party "{{partyId}}" has ended.',
      },
      createPlaylist: {
        title: "Create New Playlist",
        confirm: "Create",
        cancel: "Cancel",
        namePlaceholder: "Playlist Name",
        descPlaceholder: "Add an optional description",
      },
    },
  },
  W0 = {
    sidebar: {
      home: "Início",
      search: "Pesquisar",
      library: "Biblioteca",
      settings: "Definições",
      playlist: "Playlist",
    },
    player: {
      noSong: "Nenhuma música selecionada",
      shuffle: "Aleatório",
      repeat: "Repetir: {{mode}}",
      download: "Baixar música",
      addToPlaylist: "Adicionar à playlist",
      newPlaylist: "Nova Playlist",
      noPlaylists: "Nenhuma playlist.",
      favorite: "Música favorita",
      showQueue: "Mostrar fila",
      unmute: "Ativar som",
      mute: "Silenciar",
      partyMode: "Modo Festa",
    },
    home: {
      goodMorning: "Bom dia",
      goodAfternoon: "Boa tarde",
      goodEvening: "Boa noite",
      recommended: "Recomendado Para Você",
      newReleases: "Novos Lançamentos Dos Seus Artistas",
    },
    search: {
      placeholder: "Procure por músicas, álbuns, artistas...",
      recent: "Pesquisas Recentes",
      noResults: "Nenhum resultado encontrado.",
      noSongs: "Nenhuma música encontrada para esta pesquisa.",
      noAlbums: "Nenhum álbum encontrado para esta pesquisa.",
      noArtists: "Nenhum artista encontrado para esta pesquisa.",
      noPlaylists: "Nenhuma playlist encontrada para esta pesquisa.",
      prompt: "Procure pela sua música favorita.",
      promptSubtitle: "Os resultados aparecerão aqui.",
    },
    library: {
      all: "Tudo",
      playlists: "Playlists",
      songs: "Músicas",
      artists: "Artistas",
      albums: "Álbuns",
      newPlaylist: "Nova Playlist",
      moreOptions: "Mais opções",
      delete: "Apagar",
      empty: "A sua biblioteca está vazia",
      emptySubtitle: "Guarde músicas, álbuns e artistas para os ver aqui.",
      recentPlaylists: "Playlists Recentes",
      recentAlbums: "Álbuns Recentes",
      recentArtists: "Artistas Recentes",
      recentSongs: "Músicas Recentes",
      deletePlaylistTitle: "Apagar Playlist",
      deletePlaylistConfirm:
        'Tem a certeza que quer apagar permanentemente "{{name}}"?',
      cancel: "Cancelar",
      myPlaylists: "As Minhas Playlists",
      favoritePlaylists: "Playlists Favoritas",
      noFavPlaylists: "Ainda não favoritou nenhuma playlist pública.",
      sortBy: "Ordenar por: {{label}}",
      sort_date_added: "Data de Adição",
      sort_title_asc: "Título (A-Z)",
      sort_title_desc: "Título (Z-A)",
      noFavSongs: "Ainda não favoritou nenhuma música.",
      noFavArtists: "Ainda não seguiu nenhum artista.",
      noFavAlbums: "Ainda não favoritou nenhum álbum.",
    },
    albumView: {
      album: "Álbum",
      songs: "{{count}} músicas",
      duration: "{{duration}} min",
      removeFromFav: "Remover dos favoritos",
      addToFav: "Adicionar aos favoritos",
      downloadAll: "Baixar todas as músicas",
      moreOptions: "Mais opções",
      addToQueue: "Adicionar à Fila",
      playShuffle: "Tocar em Aleatório",
      downloadM3U: "Baixar playlist .m3u",
      downloadPreparing: "A Preparar o Download",
      downloadFetching: "A obter músicas... ({{current}}/{{total}})",
      downloadFetching_plural: "A obter música {{current}} de {{total}}...",
      downloadFailed: "Falha no Download",
      downloadFailedMsg:
        "Não foi possível baixar nenhuma música para este álbum.",
      close: "Fechar",
      downloadCompressing: "A Comprimir Ficheiros",
      downloadCompressingMsg:
        "A criar o seu ficheiro .zip. Isto pode demorar um momento...",
      downloadCompressingProgress: "A comprimir... {{percent}}%",
      error: "Erro",
      errorZip: "Falha ao criar o ficheiro .zip.",
    },
    playlistView: {
      notFound: "Playlist não encontrada. Pode ter sido apagada.",
      addSongsPrompt: "Adicione pelo menos 3 músicas para obter recomendações.",
      quickAddTitle: "Adição Rápida",
      quickAddSearch: "Procure por músicas para adicionar",
      added: "Adicionado",
      add: "Adicionar",
      recommendations: "Músicas Recomendadas",
      recommendationsSubtitle: "Com base no que está nesta playlist.",
      noRecs:
        "Não foi possível obter recomendações. O serviço pode estar temporariamente indisponível.",
      playlist: "Playlist",
      deletePlaylistTitle: "Apagar Playlist",
      deletePlaylistConfirm: 'Tem a certeza que quer apagar "{{name}}"?',
      cancel: "Cancelar",
      delete: "Apagar",
      editDetailsTitle: "Editar Detalhes",
      playlistName: "Nome da Playlist",
      description: "Descrição (opcional)",
      save: "Guardar",
      choosePhoto: "Escolher Foto",
      editDetails: "Editar detalhes",
      addSongs: "Adicionar músicas",
      empty: "Esta playlist está vazia.",
      songCount: "{{count}} música",
      songCount_plural: "{{count}} músicas",
      noResultsFor: 'Nenhum resultado encontrado para "{{query}}".',
      sort_default: "Padrão",
      sort_title: "Título",
      sort_duration: "Duração",
    },
    artistView: {
      verified: "Artista Verificado",
      followers: "{{count}} seguidores",
      following: "A Seguir",
      follow: "Seguir",
      popular: "Popular",
      latestRelease: "Último Lançamento",
      albums: "Álbuns",
      about: "Sobre",
      readMore: "Ler Mais",
      showLess: "Mostrar Menos",
      fansLike: "Os Fãs Também Gostam",
    },
    apiPlaylistView: {
      publicPlaylist: "Playlist Pública",
      saveToLibrary: "Guardar na sua biblioteca",
      alreadySaved: "Já na sua biblioteca",
      favorite: "Favorito",
      more: "Mais...",
      addToQueue: "Adicionar à Fila",
      downloadZip: "Baixar .zip",
      sortBy: "ORDENAR POR",
      sort_default: "Padrão",
      sort_title: "Título",
      sort_duration: "Duração",
      title: "Título",
      noSongs: "Não foi possível encontrar músicas para esta playlist.",
      savedModalTitle: "Playlist Guardada",
      savedModalMsg: '"{{name}}" foi adicionada à sua biblioteca.',
      close: "Fechar",
      viewInLibrary: "Ver na Biblioteca",
    },
    queue: {
      party: "Festa",
      queue: "Fila",
      host: "Anfitrião",
      copyCode: "Copiar Código da Festa",
      copied: "Copiado!",
      online: "online",
      sendReaction: "Enviar Reação",
      endParty: "Terminar Festa",
      leaveParty: "Sair da Festa",
      nowPlaying: "A Tocar Agora",
      upNext: "A Seguir",
      upNextAutoplay: "A Seguir na Rádio",
      previouslyPlayed: "Tocadas Anteriormente",
      empty: "A Sua Fila Está Vazia",
      emptySubtitle: "Adicione algumas músicas para começar!",
      moveToTop: "Mover para o Topo",
      moveToBottom: "Mover para o Fim",
      removeFromQueue: "Remover da Fila",
      autoplay: "Rádio & Autoplay",
      autoplaySubtitle: "A música continuará a tocar automaticamente.",
    },
    party: {
      notFound: "Festa não encontrada.",
      inactive: "Esta festa parece estar inativa.",
      joined: "Entrou na festa!",
    },
    songlist: {
      noSongs: "Nenhuma música para exibir.",
      menu: {
        goToRadio: "Ir para a rádio",
        playNext: "Tocar a Seguir",
        addToQueue: "Adicionar à Fila",
      },
    },
    partyModal: {
      joinTitle: "Entrar na Festa",
      joinSubtitle: "Insira o código de 5 dígitos para participar.",
      back: "Voltar",
      joinButton: "Entrar na Festa",
      joining: "A Entrar...",
      createTitle: "Criar uma Festa",
      createSubtitle: "Defina as regras para a sua festa de audição.",
      collaborative: "Colaborativo",
      collaborativeDesc: "Todos podem adicionar, remover e reordenar músicas.",
      djHost: "Anfitrião é o DJ",
      djHostDesc: "Apenas você pode controlar a fila de músicas.",
      startButton: "Começar Festa",
      shareTitle: "A Festa Começou!",
      shareSubtitle: "Partilhe o código ou link para os seus amigos entrarem.",
      partyCode: "Código da Festa",
      copyInvite: "Copiar Link de Convite",
      linkCopied: "Link Copiado!",
      done: "Concluído",
      landingTitle: "Modo Festa",
      landingSubtitle: "Ouça música em conjunto com amigos, em tempo real.",
      createCardTitle: "Criar uma Festa",
      createCardDesc: "Seja o anfitrião e convide os seus amigos.",
      joinCardTitle: "Entrar numa Festa",
      joinCardDesc: "Tem um código? Entre aqui.",
    },
    settings: {
      title: "Definições",
      profile: {
        title: "O Seu Perfil",
        description: "É assim que você aparece no Welkin.Music.",
        changePhoto: "Mudar foto",
        editProfile: "Editar Perfil",
        cancel: "Cancelar",
        save: "Guardar",
        chooseAvatar: "Escolha a Foto de Perfil",
        random: "Aleatório",
        upload: "Carregar",
      },
      language: {
        title: "Idioma",
        description: "Escolha o idioma de exibição para a aplicação.",
        english: "Inglês",
        portuguese: "Português",
      },
      quality: {
        title: "Qualidade do Áudio",
        description:
          "Selecione a qualidade do streaming. Uma qualidade superior utiliza mais dados.",
        low: "Baixa",
        lowDesc: "Usa menos dados.",
        normal: "Normal",
        normalDesc: "Equilíbrio entre qualidade e dados.",
        high: "Alta",
        highDesc: "Melhor qualidade de áudio.",
      },
      data: {
        title: "Gerenciar Dados",
        description:
          "Faça o backup da sua biblioteca para um ficheiro ou restaure-a a partir de um backup.",
        import: "Importar Biblioteca",
        export: "Exportar Biblioteca",
        importTitle: "Importar a Sua Biblioteca",
        importSubtitle: "Escolha como importar do seu ficheiro de backup.",
        merge: "Juntar",
        mergeDesc:
          "Adicionar novos itens do backup à sua biblioteca atual. Nenhum dado será apagado.",
        replace: "Substituir",
        replaceDesc:
          "Aviso: Isto irá apagar a sua biblioteca atual antes de importar o backup.",
        importSuccess: "Importação bem-sucedida",
        importFailure: "Falha na importação",
        importInvalidFormat: "Formato de dados inválido: não é um objeto.",
        importReplaceSuccess: "Dados substituídos com sucesso.",
        importMergeSuccess: "Dados mesclados com sucesso.",
        importParseError: "Falha ao analisar o ficheiro.",
      },
      effects: {
        title: "Efeitos de Áudio",
        description:
          "Personalize a sua experiência de audição com equalizador, áudio espacial e reverberação.",
        enableEQ: "Ativar Equalizador",
        presets: "Predefinições",
        reset: "Repor",
        preset_flat: "Plano",
        preset_pop: "Pop",
        preset_rock: "Rock",
        preset_jazz: "Jazz",
        preset_voice: "Amplificador de Voz",
        enableReverb: "Ativar Reverberação",
        intensity: "Intensidade",
        enable8D: "Ativar Áudio 8D",
        eightDDesc:
          "Experimente um som imersivo que se move à sua volta. Melhor com auscultadores.",
      },
      about: {
        title: "Sobre o Welkin.Music",
        description: "Informações sobre o projeto e as suas tecnologias.",
        version: "Versão",
        p1: "Este leitor de música é um projeto pessoal concebido para demonstrar tecnologias web modernas e proporcionar uma experiência de audição de música fluida e sem necessidade de conta.",
        p2: "Todos os dados musicais são obtidos a partir da API não oficial",
        p3: "Todos os direitos sobre a música pertencem aos seus respetivos proprietários.",
        sourceCode: "Código Fonte e Créditos",
        tech: "Tecnologias utilizadas",
      },
    },
    modals: {
      partyEnded: {
        title: "Festa Terminada",
        ok: "OK",
        endedByHost: 'A festa "{{partyId}}" foi terminada pelo anfitrião.',
        connectionLost:
          'A ligação ao anfitrião da festa "{{partyId}}" foi perdida.',
        ended: 'A festa "{{partyId}}" terminou.',
      },
      createPlaylist: {
        title: "Criar Nova Playlist",
        confirm: "Criar",
        cancel: "Cancelar",
        namePlaceholder: "Nome da Playlist",
        descPlaceholder: "Adicionar uma descrição opcional",
      },
    },
  },
  va = { en: H0, pt: W0 },
  Af = y.createContext({}),
  q0 = (e, t) => {
    const n = t.split(".").reduce((r, s) => {
      if (r && typeof r == "object" && !Array.isArray(r) && s in r) return r[s];
    }, e);
    if (typeof n != "string") {
      const r = t.split(".").reduce((s, o) => {
        if (s && typeof s == "object" && !Array.isArray(s) && o in s)
          return s[o];
      }, va.en);
      return typeof r == "string" ? r : t;
    }
    return n;
  },
  G0 = ({ children: e, language: t, setAppState: n }) => {
    const [r, s] = y.useState(va[t]);
    y.useEffect(() => {
      s(va[t]);
    }, [t]);
    const o = (l) => {
        n((c) => {
          c.settings.language = l;
        });
      },
      i = y.useCallback(
        (l, c) => {
          let u = q0(r, l);
          return (
            c &&
              Object.keys(c).forEach((d) => {
                u = u.replace(`{{${d}}}`, String(c[d]));
              }),
            u
          );
        },
        [r],
      );
    return a.jsx(Af.Provider, {
      value: { language: t, setLanguage: o, t: i },
      children: e,
    });
  },
  Le = () => y.useContext(Af),
  K0 = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        a.jsx("polyline", { points: "9 22 9 12 15 12 15 22" }),
      ],
    }),
  J0 = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        a.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      ],
    }),
  Y0 = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("rect", {
          x: "4",
          y: "4",
          width: "16",
          height: "16",
          rx: "2",
          ry: "2",
        }),
        a.jsx("line", { x1: "9", y1: "20", x2: "9", y2: "4" }),
        a.jsx("line", { x1: "15", y1: "20", x2: "15", y2: "4" }),
      ],
    }),
  X0 = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("circle", { cx: "12", cy: "12", r: "3" }),
        a.jsx("path", {
          d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
        }),
      ],
    }),
  Z0 = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M9 18V5l12-2v13" }),
        a.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        a.jsx("circle", { cx: "18", cy: "16", r: "3" }),
      ],
    }),
  Lf = Se.forwardRef(({ icon: e, label: t, isActive: n, onClick: r }, s) =>
    a.jsx("button", {
      ref: s,
      onClick: r,
      className: `group relative z-10 flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${n ? "text-white" : "text-gray-400 hover:text-white"}`,
      children: a.jsxs("div", {
        className: `flex items-center transition-transform duration-300 ease-out group-hover:translate-x-1 ${n ? "translate-x-1" : ""}`,
        children: [
          Se.cloneElement(e, {
            className: `w-6 h-6 mr-4 transition-colors duration-300 ${n ? "text-[#3A8FE0] drop-shadow-[0_0_5px_rgba(58,143,224,0.5)]" : ""}`,
          }),
          a.jsx("span", { className: "truncate tracking-wide", children: t }),
        ],
      }),
    }),
  );
Lf.displayName = "NavItem";
const eg = ({ playlist: e, onClick: t, style: n, className: r }) => {
    var i, l, c, u, d, f;
    const s =
        e.coverUrl ||
        ((c =
          (l = (i = e.songs[0]) == null ? void 0 : i.image) == null
            ? void 0
            : l.find((p) => p.quality === "50x50")) == null
          ? void 0
          : c.url) ||
        ((f =
          (d = (u = e.songs[0]) == null ? void 0 : u.image) == null
            ? void 0
            : d[0]) == null
          ? void 0
          : f.url),
      { t: o } = Le();
    return a.jsxs("button", {
      onClick: t,
      className: `w-full flex items-center text-left p-2 rounded-lg transition-all hover:bg-white/5 group ${r || ""}`,
      title: e.name,
      style: n,
      children: [
        s
          ? a.jsx("img", {
              src: s,
              alt: e.name,
              className:
                "w-10 h-10 rounded-md flex-shrink-0 object-cover opacity-80 group-hover:opacity-100 transition-opacity",
            })
          : a.jsx("div", {
              className:
                "w-10 h-10 bg-white/5 rounded-md flex items-center justify-center flex-shrink-0",
              children: a.jsx(Z0, { className: "w-5 h-5 text-gray-500" }),
            }),
        a.jsxs("div", {
          className: "ml-3 min-w-0",
          children: [
            a.jsx("p", {
              className:
                "font-semibold text-white truncate text-sm group-hover:text-[#3A8FE0] transition-colors",
              children: e.name,
            }),
            a.jsx("p", {
              className: "text-xs text-gray-500 truncate",
              children: o("sidebar.playlist"),
            }),
          ],
        }),
      ],
    });
  },
  tg = ({ activeView: e, setActiveView: t, navigateToPlaylist: n }) => {
    const { playlists: r, playlistHistory: s } = y.useContext(Rn),
      { t: o } = Le(),
      [i, l] = y.useState({ top: 0, height: 0, opacity: 0 }),
      [c, u] = y.useState(!1),
      d = y.useRef(null),
      f = y.useRef(null),
      p = y.useRef(null),
      v = y.useRef(null),
      w = y.useRef(null),
      x = ["library", "playlist", "album", "artist", "api_playlist"],
      R = y.useMemo(
        () => [
          {
            id: "home",
            ref: f,
            icon: a.jsx(K0, {}),
            label: o("sidebar.home"),
            isActive: e === "home",
            onClick: () => t("home"),
          },
          {
            id: "search",
            ref: p,
            icon: a.jsx(J0, {}),
            label: o("sidebar.search"),
            isActive: e === "search",
            onClick: () => t("search"),
          },
          {
            id: "library",
            ref: v,
            icon: a.jsx(Y0, {}),
            label: o("sidebar.library"),
            isActive: x.includes(e),
            onClick: () => t("library"),
          },
          {
            id: "settings",
            ref: w,
            icon: a.jsx(X0, {}),
            label: o("sidebar.settings"),
            isActive: e === "settings",
            onClick: () => t("settings"),
          },
        ],
        [e, t, o],
      );
    (y.useLayoutEffect(() => {
      const h = R.find((g) => g.isActive);
      h &&
        h.ref.current &&
        l({
          top: h.ref.current.offsetTop,
          height: h.ref.current.offsetHeight,
          opacity: 1,
        });
    }, [e, R, c]),
      y.useEffect(() => {
        const h = setTimeout(() => u(!0), 50);
        return () => clearTimeout(h);
      }, []));
    const m = y.useMemo(
      () => s.map((h) => r.find((g) => g.id === h)).filter((h) => h !== void 0),
      [s, r],
    );
    return a.jsxs("aside", {
      className:
        "w-64 glass-panel border-r border-white/5 p-4 flex-col h-full hidden md:flex z-20",
      children: [
        a.jsxs("nav", {
          ref: d,
          className: "relative flex flex-col space-y-1 pt-1",
          children: [
            a.jsx("div", {
              "aria-hidden": "true",
              className:
                "absolute left-0 w-full bg-white/5 rounded-lg shadow-inner border border-white/5",
              style: {
                ...i,
                transition: c
                  ? "top 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  : "none",
              },
            }),
            R.map((h) =>
              a.jsx(
                Lf,
                {
                  ref: h.ref,
                  icon: h.icon,
                  label: h.label,
                  isActive: h.isActive,
                  onClick: h.onClick,
                },
                h.id,
              ),
            ),
          ],
        }),
        a.jsx("hr", { className: "my-6 border-t border-white/5" }),
        a.jsx("h3", {
          className:
            "px-4 text-xs font-bold text-gray-500 uppercase tracking-widest mb-2",
          children: o("library.recentPlaylists"),
        }),
        a.jsx("div", {
          className: "flex-1 overflow-y-auto custom-scrollbar pr-1 space-y-1",
          children: m.map((h, g) =>
            a.jsx(
              eg,
              {
                playlist: h,
                onClick: () => n(h.id),
                className: "playlist-item-enter",
                style: { animationDelay: `${g * 50}ms` },
              },
              h.id,
            ),
          ),
        }),
      ],
    });
  },
  Df = [
    "https://lowkey-backend.vercel.app",
    "https://jiosaavn-api-privatecvc2.vercel.app",
    "https://jio-saavan-api.vercel.app",
    "https://jiosaavn-apix.arcadopredator.workers.dev",
  ];
let xa = 0;
const ng = () => Df[xa],
  rg = () => {
    xa = (xa + 1) % Df.length;
  },
  sg = 100,
  Ht = new Map(),
  og = (e) => new Promise((t) => setTimeout(t, e)),
  Ff = async (e, t = 3, n = 1e3) => {
    try {
      const r = `${ng()}${e}`,
        s = await fetch(So(r));
      if (!s.ok && (s.status >= 500 || s.status === 429))
        throw new Error(`Server/Network Error: ${s.status}`);
      return s;
    } catch (r) {
      if (t === 0) throw r;
      return (await og(n), rg(), Ff(e, t - 1, n * 2));
    }
  },
  So = (e) => {
    if (!e || typeof e != "string") return e || "";
    if (e.includes("/proxy?url=")) return e;
    let t = "/proxy";
    return (
      window.location.port === "5500" && (t = "http://localhost:8080/proxy"),
      t + "?url=" + encodeURIComponent(e)
    );
  },
  wa = (e) => {
    if (typeof e == "string")
      return (e.startsWith("http://") || e.startsWith("https://")) &&
        (e.includes("saavncdn") ||
          e.includes("saavn.com") ||
          e.includes("jiosaavn"))
        ? So(e)
        : e;
    if (Array.isArray(e)) return e.map(wa);
    if (e !== null && typeof e == "object") {
      const t = {};
      for (const n in e) t[n] = wa(e[n]);
      return t;
    }
    return e;
  },
  Ut = async (e, t) => {
    if (t && Ht.has(t)) {
      const n = Ht.get(t);
      return (Ht.delete(t), Ht.set(t, n), Promise.resolve(n));
    }
    try {
      const n = await Ff(e);
      if (!n.ok) throw new Error(`API request failed with status ${n.status}`);
      const r = await n.json(),
        s = wa(r);
      if (t) {
        if (Ht.size >= sg) {
          const o = Ht.keys().next().value;
          o && Ht.delete(o);
        }
        Ht.set(t, s);
      }
      return s;
    } catch (n) {
      throw n;
    }
  },
  Kc = (e, t = 1, n = 20) =>
    Ut(`/api/search/songs?query=${encodeURIComponent(e)}&page=${t}&limit=${n}`),
  ig = (e) => Ut(`/api/songs?ids=${e.join(",")}`),
  yv = (e, t = 1, n = 20) =>
    Ut(
      `/api/search/albums?query=${encodeURIComponent(e)}&page=${t}&limit=${n}`,
    ),
  vv = (e) => Ut(`/api/albums?id=${e}`, `album-${e}`),
  ag = (e) => Ut(`/api/artists?id=${e}`, `artist-${e}`),
  xv = (e, t = 1, n = 20) =>
    Ut(
      `/api/search/artists?query=${encodeURIComponent(e)}&page=${t}&limit=${n}`,
    ),
  wv = (e, t = 1, n = 20) =>
    Ut(
      `/api/search/playlists?query=${encodeURIComponent(e)}&page=${t}&limit=${n}`,
    ),
  lg = (e, t = 10) => Ut(`/api/songs/${e}/suggestions?limit=${t}`),
  cg = (e) => Ut(`/api/songs/${e}/lyrics`, `lyrics-${e}`),
  wi = (e) => {
    if (!e) return "";
    const t = document.createElement("textarea");
    return ((t.innerHTML = e), t.value);
  },
  Jc = [
    { f: 60, type: "lowshelf" },
    { f: 230, type: "peaking" },
    { f: 910, type: "peaking" },
    { f: 3600, type: "peaking" },
    { f: 14e3, type: "highshelf" },
  ],
  kt = y.createContext({}),
  ug = (e) => {
    const t = e.sampleRate,
      n = 2,
      r = 2,
      s = 2,
      o = t * n,
      i = e.createBuffer(s, o, t);
    for (let l = 0; l < s; l++) {
      const c = i.getChannelData(l);
      for (let u = 0; u < o; u++)
        c[u] = (Math.random() * 2 - 1) * Math.pow(1 - u / t / n, r);
    }
    return i;
  },
  ki = (e) => {
    var n, r;
    const t = [...e];
    for (let s = t.length - 1; s > 0; s--) {
      const o = Math.floor(Math.random() * (s + 1));
      [t[s], t[o]] = [t[o], t[s]];
    }
    for (let s = 1; s < t.length; s++)
      if (
        ((n = t[s].artists.primary[0]) == null ? void 0 : n.id) ===
        ((r = t[s - 1].artists.primary[0]) == null ? void 0 : r.id)
      ) {
        const o = t.findIndex((i, l) => {
          var c, u;
          return (
            l > s &&
            ((c = i.artists.primary[0]) == null ? void 0 : c.id) !==
              ((u = t[s].artists.primary[0]) == null ? void 0 : u.id)
          );
        });
        o !== -1 && ([t[s], t[o]] = [t[o], t[s]]);
      }
    return t;
  },
  dg = ({ children: e, playerSettings: t, playerQueue: n, setAppState: r }) => {
    const { addToHistory: s, addToPlaylistHistory: o } = y.useContext(Rn),
      [i, l] = y.useState(!1),
      [c, u] = y.useState(0),
      [d, f] = y.useState(0),
      [p, v] = y.useState(null),
      [w, x] = y.useState(!1),
      [R, m] = y.useState(!1),
      [h, g] = y.useState(null),
      [k, b] = y.useState(null),
      [P, E] = y.useState(null),
      [F, V] = y.useState(1),
      B = t || Je.settings.player,
      G = n || Je.playerQueue,
      {
        volume: le,
        selectedQuality: U,
        isShuffle: T,
        repeatMode: M,
        eqSettings: A,
        isEqEnabled: N,
        is8DEnabled: S,
        isReverbEnabled: z,
        reverbMix: j,
      } = B,
      {
        currentQueue: O,
        currentIndex: q,
        contextType: se,
        contextId: X,
        originalQueueUnshuffled: L,
      } = G,
      W = y.useRef(null),
      ee = y.useRef({
        context: null,
        source: null,
        eqNodes: [],
        panner: null,
        analyser: null,
        convolver: null,
        reverbWetGain: null,
        reverbDryGain: null,
        pannerOscillator: null,
        pannerGain: null,
        pannerDelay: null,
      }),
      me = y.useRef(null),
      J = O[q] || null,
      ie = (C) =>
        r((_) => {
          C(_.settings.player);
        }),
      oe = (C) =>
        r((_) => {
          C(_.playerQueue);
        });
    y.useEffect(() => {
      if (!W.current || ee.current.context) return;
      const C = () => {
          if (ee.current.context) return;
          const D = new (window.AudioContext || window.webkitAudioContext)();
          (b(D), D.state === "suspended" && D.resume());
          const H = D.createMediaElementSource(W.current),
            K = D.createPanner();
          K.panningModel = "HRTF";
          const te = D.createAnalyser();
          te.fftSize = 256;
          const ne = Jc.map((pr, Jp) => {
            const hs = D.createBiquadFilter();
            return (
              (hs.type = pr.type),
              (hs.frequency.value = pr.f),
              (hs.gain.value = N ? A[Jp].gain : 0),
              hs
            );
          });
          let ce = H;
          ne.forEach((pr) => {
            (ce.connect(pr), (ce = pr));
          });
          const Tt = D.createConvolver();
          Tt.buffer = ug(D);
          const Rt = D.createGain(),
            Nt = D.createGain();
          ((Rt.gain.value = 0),
            (Nt.gain.value = 1),
            ce.connect(Nt),
            ce.connect(Tt),
            Tt.connect(Rt),
            Nt.connect(K),
            Rt.connect(K));
          const Qt = D.createOscillator(),
            fr = D.createGain();
          fr.gain.value = 0;
          const ps = D.createDelay(5);
          ((Qt.frequency.value = 0.2),
            (ps.delayTime.value = 1 / 0.2 / 4),
            Qt.connect(fr),
            fr.connect(K.positionZ),
            fr.connect(ps),
            ps.connect(K.positionX),
            Qt.start(),
            K.connect(te),
            te.connect(D.destination),
            (ee.current = {
              context: D,
              source: H,
              eqNodes: ne,
              panner: K,
              analyser: te,
              convolver: Tt,
              reverbWetGain: Rt,
              reverbDryGain: Nt,
              pannerOscillator: Qt,
              pannerGain: fr,
              pannerDelay: ps,
            }),
            g(te));
        },
        _ = () => C();
      return (
        document.body.addEventListener("click", _, { once: !0 }),
        document.body.addEventListener("keydown", _, { once: !0 }),
        () => {
          (document.body.removeEventListener("click", _),
            document.body.removeEventListener("keydown", _));
        }
      );
    }, [A, N]);
    const Y = y.useCallback(() => {
      oe((C) => {
        C.currentIndex =
          C.currentQueue.length === 0
            ? -1
            : (C.currentIndex + 1) % C.currentQueue.length;
      });
    }, [oe]);
    y.useEffect(() => {
      if (!J || (J.downloadUrl && J.downloadUrl.length > 0)) return;
      let C = !1;
      return (
        ig([J.id])
          .then((_) => {
            var H;
            if (C) return;
            const D = _.success && _.data.length > 0 ? _.data[0] : null;
            D && ((H = D.downloadUrl) == null ? void 0 : H.length) > 0
              ? oe((K) => {
                  K.currentQueue = K.currentQueue.map((te) =>
                    te.id === J.id ? D : te,
                  );
                })
              : Y();
          })
          .catch(() => !C && Y()),
        () => {
          C = !0;
        }
      );
    }, [J, Y, oe]);
    const je = y.useCallback(async (C) => {
        var H, K, te;
        const _ = new Map([[C.id, C]]),
          D = (ne) =>
            ne.forEach((ce) => {
              _.has(ce.id) || _.set(ce.id, ce);
            });
        try {
          const ne = await lg(C.id, 15);
          ne.success && D(ne.data);
        } catch {}
        if (_.size < 5)
          try {
            const ne = (H = C.artists.primary[0]) == null ? void 0 : H.id;
            if (ne) {
              const ce = await ag(ne);
              ce.success &&
                (ce.data.topSongs && D(ce.data.topSongs),
                ce.data.singles && D(ce.data.singles));
            }
          } catch {}
        if (_.size < 5)
          try {
            const ne = (K = C.artists.primary[0]) == null ? void 0 : K.name;
            if (ne) {
              const ce = await Kc(ne, 1, 20);
              ce.success && D(ce.data.results);
            }
          } catch {}
        if (_.size < 3)
          try {
            const ne = `${C.name} ${((te = C.artists.primary[0]) == null ? void 0 : te.name) || ""}`,
              ce = await Kc(ne, 1, 10);
            ce.success && D(ce.data.results);
          } catch {}
        return Array.from(_.values()).sort(() => Math.random() - 0.5);
      }, []),
      ke = y.useCallback(
        async (C) => {
          try {
            const _ = await je(C);
            oe((D) => {
              const H = new Set(D.currentQueue.map((te) => te.id)),
                K = _.filter((te) => !H.has(te.id));
              if (K.length > 0) {
                const te = D.currentQueue.length;
                (D.currentQueue.push(...K), E((ne) => (ne === null ? te : ne)));
              } else D.currentQueue.length < 5 && D.currentQueue.push(..._);
            });
          } catch (_) {
            console.error(_);
          }
        },
        [je, oe],
      ),
      xe = y.useCallback(async () => {
        var _;
        if ((_ = W.current) != null && _.loop) return;
        q === O.length - 1 && M === "off" && J
          ? (await ke(J),
            oe((D) => {
              D.currentQueue.length > D.currentIndex + 1
                ? (D.currentIndex++, l(!0))
                : (l(!1), W.current && (W.current.currentTime = 0));
            }))
          : (oe((D) => {
              D.currentQueue.length > 0 &&
                (D.currentIndex = (D.currentIndex + 1) % D.currentQueue.length);
            }),
            l(!0));
      }, [M, q, O, J, oe, ke]);
    y.useEffect(() => {
      var K, te;
      const C = W.current;
      if (!C) return;
      const _ = () => f(C.currentTime),
        D = () => u(C.duration),
        H = () => {
          (me.current !== null &&
            ((C.currentTime = me.current), (me.current = null)),
            i && C.play().catch(() => l(!1)));
        };
      if (
        (C.addEventListener("timeupdate", _),
        C.addEventListener("loadedmetadata", D),
        C.addEventListener("canplay", H),
        C.addEventListener("ended", xe),
        J)
      ) {
        if (J.id !== C.dataset.songId || U !== C.dataset.quality) {
          const ne = (Tt) => {
              var Rt, Nt;
              return (Nt =
                (Rt = J.downloadUrl) == null
                  ? void 0
                  : Rt.find((Qt) => Qt.quality === Tt)) == null
                ? void 0
                : Nt.url;
            },
            ce =
              ne(U) ||
              ne("320kbps") ||
              ne("160kbps") ||
              ((K = J.downloadUrl[0]) == null ? void 0 : K.url);
          if (ce) {
            const Tt = ce.replace(/^http:/, "https:"),
              Rt =
                ((te = J.downloadUrl.find(
                  (Qt) => Qt.url.replace(/^http:/, "https:") === Tt,
                )) == null
                  ? void 0
                  : te.quality) || null,
              Nt = C.dataset.songId === J.id ? C.currentTime : 0;
            ((me.current = Nt),
              (C.src = Tt),
              (C.dataset.songId = J.id),
              (C.dataset.quality = U),
              v(Rt),
              C.load());
          } else Y();
        }
      } else
        (C.removeAttribute("src"),
          (C.dataset.songId = ""),
          v(null),
          i && l(!1));
      return (
        i && C.src ? C.play().catch(() => l(!1)) : C.pause(),
        (C.volume = le),
        (C.loop = M === "one"),
        (C.playbackRate = F),
        () => {
          (C.removeEventListener("timeupdate", _),
            C.removeEventListener("loadedmetadata", D),
            C.removeEventListener("canplay", H),
            C.removeEventListener("ended", xe));
        }
      );
    }, [J, U, i, le, M, xe, Y, F]);
    const Pt = () => {
        const C = !T;
        (ie((_) => {
          _.isShuffle = C;
        }),
          oe((_) => {
            var D;
            if (C) {
              if (_.currentQueue.length > 1) {
                _.originalQueueUnshuffled = [..._.currentQueue];
                const H = _.currentQueue[_.currentIndex],
                  K = _.currentQueue.filter((te) => te.id !== H.id);
                ((_.currentQueue = [H, ...ki(K)]), (_.currentIndex = 0));
              }
            } else if (_.originalQueueUnshuffled) {
              const H =
                (D = _.currentQueue[_.currentIndex]) == null ? void 0 : D.id;
              _.currentQueue = _.originalQueueUnshuffled;
              const K = _.currentQueue.findIndex((te) => te.id === H);
              ((_.currentIndex = K !== -1 ? K : 0),
                (_.originalQueueUnshuffled = null));
            }
          }));
      },
      at = (C) =>
        ie((_) => {
          _.repeatMode = C;
        }),
      Ct = () =>
        ie((C) => {
          C.isEqEnabled = !C.isEqEnabled;
        }),
      An = () =>
        ie((C) => {
          C.is8DEnabled = !C.is8DEnabled;
        }),
      Vo = () =>
        ie((C) => {
          C.isReverbEnabled = !C.isReverbEnabled;
        }),
      us = (C, _) =>
        ie((D) => {
          D.eqSettings[C].gain = _;
        }),
      Ho = () =>
        ie((C) => {
          C.eqSettings = Jc.map(() => ({ gain: 0 }));
        });
    (y.useEffect(() => {
      ee.current.eqNodes.forEach((C, _) => {
        C && A[_] && (C.gain.value = N ? A[_].gain : 0);
      });
    }, [A, N]),
      y.useEffect(() => {
        const { reverbWetGain: C, reverbDryGain: _, context: D } = ee.current;
        if (!C || !_ || !D) return;
        const H = z ? j : 0,
          K = 1 - (z ? j * 0.5 : 0);
        (C.gain.setTargetAtTime(H, D.currentTime, 0.015),
          _.gain.setTargetAtTime(K, D.currentTime, 0.015));
      }, [z, j]),
      y.useEffect(() => {
        const { pannerGain: C, context: _ } = ee.current;
        !C ||
          !_ ||
          C.gain.setTargetAtTime(S && i ? 2.5 : 0, _.currentTime, 0.5);
      }, [S, i]));
    const Dp = () =>
        ie((C) => {
          C.repeatMode === "off"
            ? (C.repeatMode = "all")
            : C.repeatMode === "all"
              ? (C.repeatMode = "one")
              : (C.repeatMode = "off");
        }),
      ds = y.useCallback(() => {
        J && l((C) => !C);
      }, [J]),
      Wo = y.useCallback(() => {
        oe((C) => {
          C.currentIndex =
            C.currentQueue.length === 0
              ? -1
              : (C.currentIndex - 1 + C.currentQueue.length) %
                C.currentQueue.length;
        });
      }, [oe]),
      Fp = y.useCallback(
        async (C, _, D) => {
          (E(null),
            oe((H) => {
              var te;
              if (
                C.id ===
                ((te = H.currentQueue[H.currentIndex]) == null ? void 0 : te.id)
              ) {
                l((ne) => !ne);
                return;
              }
              if (
                D.id === H.contextId &&
                D.type === H.contextType &&
                D.type !== "search"
              ) {
                const ne = H.currentQueue.findIndex((ce) => ce.id === C.id);
                if (ne !== -1) {
                  ((H.currentIndex = ne), l(!0));
                  return;
                }
              }
              let K = [..._];
              if (T) {
                H.originalQueueUnshuffled = [...K];
                const ne = K.filter((ce) => ce.id !== C.id);
                K = [C, ...ki(ne)];
              } else H.originalQueueUnshuffled = null;
              ((H.currentQueue = K),
                (H.contextType = D.type),
                (H.contextId = D.id),
                (H.currentIndex = K.findIndex((ne) => ne.id === C.id)),
                D.type === "playlist" && o(D.id),
                l(!0),
                s(C));
            }),
            _.length === 1 && ke(C));
        },
        [i, T, oe, s, o, ke],
      ),
      Op = y.useCallback(
        async (C) => {
          l(!1);
          const _ = await je(C),
            D = [C, ..._].filter(
              (H, K, te) => K === te.findIndex((ne) => ne.id === H.id),
            );
          (E(1),
            oe((H) => {
              (T
                ? ((H.originalQueueUnshuffled = [...D]),
                  (H.currentQueue = [D[0], ...ki(D.slice(1))]))
                : ((H.originalQueueUnshuffled = null), (H.currentQueue = D)),
                (H.contextType = "song"),
                (H.contextId = C.id),
                (H.currentIndex = 0));
            }),
            l(!0),
            s(C));
        },
        [T, oe, s, je],
      ),
      zp = y.useCallback((C) => {
        x((_) => (C !== void 0 ? C : !_));
      }, []),
      $p = y.useCallback((C) => {
        m((_) => (C !== void 0 ? C : !_));
      }, []),
      fs = y.useCallback((C) => {
        W.current && ((W.current.currentTime = C), f(C));
      }, []),
      Bp = (C) =>
        ie((_) => {
          _.volume = Math.max(0, Math.min(1, C));
        }),
      Up = (C) =>
        ie((_) => {
          _.selectedQuality = C;
        }),
      Qp = (C) =>
        ie((_) => {
          _.reverbMix = C;
        }),
      Vp = (C) => {
        (E((_) => (_ !== null ? _ + 1 : null)),
          oe((_) => {
            _.currentQueue.length === 0
              ? ((_.currentQueue = [C]),
                (_.currentIndex = 0),
                (_.contextType = "queue"),
                (_.contextId = "queue"),
                l(!0))
              : _.currentQueue.splice(_.currentIndex + 1, 0, C);
          }));
      },
      Hp = (C) => {
        oe((_) => {
          const D = C.filter((H) => !_.currentQueue.some((K) => K.id === H.id));
          (_.currentQueue.push(...D),
            _.currentIndex === -1 &&
              D.length > 0 &&
              ((_.currentIndex = _.currentQueue.length - D.length),
              (_.contextType = "queue"),
              (_.contextId = "queue"),
              l(!0)));
        });
      },
      Wp = (C, _) => {
        C !== _ &&
          (E(null),
          oe((D) => {
            const [H] = D.currentQueue.splice(C, 1);
            (D.currentQueue.splice(_, 0, H),
              (D.currentIndex = D.currentQueue.findIndex((K) => {
                var te;
                return (
                  K.id ===
                  ((te = D.currentQueue[D.currentIndex]) == null
                    ? void 0
                    : te.id)
                );
              })));
          }));
      },
      qp = (C) => {
        oe((_) => {
          const D = _.currentQueue.findIndex((K) => K.id === C);
          if (D === -1) return;
          P !== null && D < P && E((K) => (K !== null ? K - 1 : null));
          const H = D === _.currentIndex;
          (_.currentQueue.splice(D, 1),
            D < _.currentIndex
              ? _.currentIndex--
              : H &&
                _.currentQueue.length > 0 &&
                _.currentQueue.length <= _.currentIndex &&
                (_.currentIndex = 0),
            _.currentQueue.length === 0
              ? (l(!1),
                (_.currentIndex = -1),
                (_.contextId = null),
                (_.contextType = null),
                E(null))
              : H && W.current && (W.current.dataset.songId = ""));
        });
      },
      Gp = (C, _) => {
        (E(null),
          oe((D) => {
            const H = D.currentQueue.findIndex((te) => te.id === C);
            if (H === -1 || H === D.currentIndex) return;
            const [K] = D.currentQueue.splice(H, 1);
            D.currentQueue.splice(
              _ === "top" ? D.currentIndex + 1 : D.currentQueue.length,
              0,
              K,
            );
          }));
      };
    y.useEffect(() => {
      var C;
      "mediaSession" in navigator &&
        (J
          ? ((navigator.mediaSession.playbackState = i ? "playing" : "paused"),
            (navigator.mediaSession.metadata = new MediaMetadata({
              title: wi(J.name),
              artist: J.artists.primary.map((_) => wi(_.name)).join(", "),
              album: wi(J.album.name || ""),
              artwork:
                ((C = J.image) == null
                  ? void 0
                  : C.map((_) => ({
                      src: _.url.replace(/^http:/, "https:"),
                      sizes: _.quality,
                      type: "image/jpeg",
                    }))) || [],
            })),
            navigator.mediaSession.setActionHandler("play", ds),
            navigator.mediaSession.setActionHandler("pause", ds),
            navigator.mediaSession.setActionHandler("previoustrack", Wo),
            navigator.mediaSession.setActionHandler("nexttrack", Y),
            navigator.mediaSession.setActionHandler("seekbackward", (_) =>
              fs(Math.max(d - (_.seekOffset || 10), 0)),
            ),
            navigator.mediaSession.setActionHandler("seekforward", (_) =>
              fs(Math.min(d + (_.seekOffset || 10), c)),
            ))
          : ((navigator.mediaSession.metadata = null),
            (navigator.mediaSession.playbackState = "none"),
            [
              "play",
              "pause",
              "previoustrack",
              "nexttrack",
              "seekbackward",
              "seekforward",
            ].forEach((_) =>
              navigator.mediaSession.setActionHandler(_, null),
            )));
    }, [J, i, Wo, Y, ds, fs, d, c]);
    const Kp = {
      isPlaying: i,
      duration: c,
      currentTime: d,
      currentQuality: p,
      isQueueOpen: w,
      isLyricsOpen: R,
      analyser: h,
      audioContext: k,
      autoplayStartIndex: P,
      playbackRate: F,
      currentSong: J,
      currentQueue: O,
      volume: le,
      selectedQuality: U,
      isShuffle: T,
      repeatMode: M,
      eqSettings: A,
      isEqEnabled: N,
      is8DEnabled: S,
      isReverbEnabled: z,
      reverbMix: j,
      contextId: X,
      contextType: se,
      playSong: Fp,
      togglePlay: ds,
      seek: fs,
      setVolume: Bp,
      setSelectedQuality: Up,
      playNext: Y,
      playPrev: Wo,
      playRadio: Op,
      toggleQueue: zp,
      toggleLyrics: $p,
      addSongNext: Vp,
      addSongsToEnd: Hp,
      reorderQueue: Wp,
      removeSongFromQueue: qp,
      moveSongInQueue: Gp,
      toggleShuffle: Pt,
      cycleRepeatMode: Dp,
      toggle8D: An,
      setEqGain: us,
      resetEq: Ho,
      toggleEq: Ct,
      toggleReverb: Vo,
      setReverbMix: Qp,
      setPlaybackRate: V,
      setIsShuffle: (C) =>
        ie((_) => {
          _.isShuffle = C;
        }),
      setRepeatMode: at,
      setIsEqEnabled: (C) =>
        ie((_) => {
          _.isEqEnabled = C;
        }),
      setIs8DEnabled: (C) =>
        ie((_) => {
          _.is8DEnabled = C;
        }),
      setIsReverbEnabled: (C) =>
        ie((_) => {
          _.isReverbEnabled = C;
        }),
      setAppState: r,
    };
    return a.jsxs(kt.Provider, {
      value: Kp,
      children: [e, a.jsx("audio", { ref: W, crossOrigin: "anonymous" })],
    });
  },
  fg = ({ onConfirm: e, onCancel: t, initialSong: n }) => {
    const { playlists: r } = y.useContext(Rn),
      { t: s } = Le(),
      [o, i] = y.useState(`My Playlist #${r.length + 1}`),
      [l, c] = y.useState(
        n
          ? `Starts with "${n.name}" by ${n.artists.primary.map((f) => f.name).join(", ")}`
          : "",
      ),
      u = o.trim().length > 0,
      d = () => {
        u && e(o, l);
      };
    return a.jsxs(a.Fragment, {
      children: [
        a.jsxs("div", {
          className: "text-gray-300 mb-6 mt-4 space-y-4",
          children: [
            a.jsx("input", {
              type: "text",
              value: o,
              onChange: (f) => i(f.target.value),
              className:
                "w-full bg-white/10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A8FE0]",
              placeholder: s("modals.createPlaylist.namePlaceholder"),
              "aria-label": s("modals.createPlaylist.namePlaceholder"),
            }),
            a.jsx("textarea", {
              rows: 3,
              value: l,
              onChange: (f) => c(f.target.value),
              className:
                "w-full bg-white/10 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A8FE0]",
              placeholder: s("modals.createPlaylist.descPlaceholder"),
              "aria-label": s("modals.createPlaylist.descPlaceholder"),
            }),
          ],
        }),
        a.jsxs("div", {
          className: "flex justify-end space-x-4",
          children: [
            a.jsx("button", {
              onClick: t,
              className:
                "px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 font-semibold transition-colors",
              children: s("modals.createPlaylist.cancel"),
            }),
            a.jsx("button", {
              onClick: d,
              disabled: !u,
              className:
                "px-5 py-2.5 rounded-md bg-[#3A8FE0] text-white font-bold disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
              children: s("modals.createPlaylist.confirm"),
            }),
          ],
        }),
      ],
    });
  },
  Of = y.createContext({}),
  Yc = ({ isOpen: e, onClose: t, title: n, children: r, size: s = "md" }) => {
    const [o, i] = y.useState(!1);
    if ((y.useEffect(() => i(!0), []), !e || !o || !document.body)) return null;
    const l = { md: "max-w-md", lg: "max-w-lg", xl: "max-w-2xl" }[s];
    return El.createPortal(
      a.jsxs("div", {
        className:
          "fixed inset-0 z-[1000] flex items-center justify-center p-4",
        "aria-modal": "true",
        role: "dialog",
        children: [
          a.jsx("div", {
            className:
              "absolute inset-0 bg-[#050505]/80 backdrop-blur-2xl transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] animate-in fade-in",
            onClick: t,
          }),
          a.jsxs("div", {
            className: `relative bg-[#121212]/90 backdrop-blur-3xl rounded-[32px] shadow-[0_0_50px_rgba(0,0,0,0.6)] w-full max-h-[90vh] flex flex-col transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] animate-in fade-in zoom-in-95 scale-100 ${l} border border-white/10 ring-1 ring-white/5`,
            onClick: (c) => c.stopPropagation(),
            children: [
              n &&
                a.jsx("div", {
                  className: "px-8 py-6 border-b border-white/5 flex-shrink-0",
                  children: a.jsx("h2", {
                    className:
                      "text-2xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400",
                    children: n,
                  }),
                }),
              a.jsx("div", {
                className: "p-8 overflow-y-auto custom-scrollbar flex-1",
                children: r,
              }),
              a.jsx("button", {
                onClick: t,
                className:
                  "absolute top-6 right-6 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10",
                "aria-label": "Close modal",
                children: a.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 2.5,
                  stroke: "currentColor",
                  className: "w-6 h-6",
                  children: a.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M6 18L18 6M6 6l12 12",
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
      document.body,
    );
  };
function pg(e, t) {
  const [n, r] = y.useState(() => {
    if (typeof window > "u") return t;
    try {
      const o = window.localStorage.getItem(e);
      return o ? JSON.parse(o) : t;
    } catch (o) {
      return (console.log(o), t);
    }
  });
  return [
    n,
    (o) => {
      try {
        const i = o instanceof Function ? o(n) : o;
        (r(i),
          typeof window < "u" &&
            window.localStorage.setItem(e, JSON.stringify(i)));
      } catch (i) {
        console.log(i);
      }
    },
  ];
}
const Uo = y.createContext({}),
  hg = ({ children: e, profile: t, setAppState: n }) => {
    const r =
        t && typeof t.name == "string" && typeof t.imageUrl == "string"
          ? t
          : Je.profile,
      { name: s, imageUrl: o } = r,
      i = y.useCallback(
        (c) => {
          const u = c.trim();
          u &&
            n((d) => {
              d.profile.name = u;
            });
        },
        [n],
      ),
      l = y.useCallback(
        (c) => {
          n((u) => {
            u.profile.imageUrl = c;
          });
        },
        [n],
      );
    return a.jsx(Uo.Provider, {
      value: { name: s, imageUrl: o, updateName: i, updateImage: l },
      children: e,
    });
  };
class mg {
  constructor() {
    ((this.encoder = new TextEncoder()),
      (this._pieces = []),
      (this._parts = []));
  }
  append_buffer(t) {
    (this.flush(), this._parts.push(t));
  }
  append(t) {
    this._pieces.push(t);
  }
  flush() {
    if (this._pieces.length > 0) {
      const t = new Uint8Array(this._pieces);
      (this._parts.push(t), (this._pieces = []));
    }
  }
  toArrayBuffer() {
    const t = [];
    for (const n of this._parts) t.push(n);
    return gg(t).buffer;
  }
}
function gg(e) {
  let t = 0;
  for (const s of e) t += s.byteLength;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e) {
    const o = new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
    (n.set(o, r), (r += s.byteLength));
  }
  return n;
}
function zf(e) {
  return new yg(e).unpack();
}
function $f(e) {
  const t = new vg(),
    n = t.pack(e);
  return n instanceof Promise ? n.then(() => t.getBuffer()) : t.getBuffer();
}
class yg {
  constructor(t) {
    ((this.index = 0),
      (this.dataBuffer = t),
      (this.dataView = new Uint8Array(this.dataBuffer)),
      (this.length = this.dataBuffer.byteLength));
  }
  unpack() {
    const t = this.unpack_uint8();
    if (t < 128) return t;
    if ((t ^ 224) < 32) return (t ^ 224) - 32;
    let n;
    if ((n = t ^ 160) <= 15) return this.unpack_raw(n);
    if ((n = t ^ 176) <= 15) return this.unpack_string(n);
    if ((n = t ^ 144) <= 15) return this.unpack_array(n);
    if ((n = t ^ 128) <= 15) return this.unpack_map(n);
    switch (t) {
      case 192:
        return null;
      case 193:
        return;
      case 194:
        return !1;
      case 195:
        return !0;
      case 202:
        return this.unpack_float();
      case 203:
        return this.unpack_double();
      case 204:
        return this.unpack_uint8();
      case 205:
        return this.unpack_uint16();
      case 206:
        return this.unpack_uint32();
      case 207:
        return this.unpack_uint64();
      case 208:
        return this.unpack_int8();
      case 209:
        return this.unpack_int16();
      case 210:
        return this.unpack_int32();
      case 211:
        return this.unpack_int64();
      case 212:
        return;
      case 213:
        return;
      case 214:
        return;
      case 215:
        return;
      case 216:
        return ((n = this.unpack_uint16()), this.unpack_string(n));
      case 217:
        return ((n = this.unpack_uint32()), this.unpack_string(n));
      case 218:
        return ((n = this.unpack_uint16()), this.unpack_raw(n));
      case 219:
        return ((n = this.unpack_uint32()), this.unpack_raw(n));
      case 220:
        return ((n = this.unpack_uint16()), this.unpack_array(n));
      case 221:
        return ((n = this.unpack_uint32()), this.unpack_array(n));
      case 222:
        return ((n = this.unpack_uint16()), this.unpack_map(n));
      case 223:
        return ((n = this.unpack_uint32()), this.unpack_map(n));
    }
  }
  unpack_uint8() {
    const t = this.dataView[this.index] & 255;
    return (this.index++, t);
  }
  unpack_uint16() {
    const t = this.read(2),
      n = (t[0] & 255) * 256 + (t[1] & 255);
    return ((this.index += 2), n);
  }
  unpack_uint32() {
    const t = this.read(4),
      n = ((t[0] * 256 + t[1]) * 256 + t[2]) * 256 + t[3];
    return ((this.index += 4), n);
  }
  unpack_uint64() {
    const t = this.read(8),
      n =
        ((((((t[0] * 256 + t[1]) * 256 + t[2]) * 256 + t[3]) * 256 + t[4]) *
          256 +
          t[5]) *
          256 +
          t[6]) *
          256 +
        t[7];
    return ((this.index += 8), n);
  }
  unpack_int8() {
    const t = this.unpack_uint8();
    return t < 128 ? t : t - 256;
  }
  unpack_int16() {
    const t = this.unpack_uint16();
    return t < 32768 ? t : t - 65536;
  }
  unpack_int32() {
    const t = this.unpack_uint32();
    return t < 2 ** 31 ? t : t - 2 ** 32;
  }
  unpack_int64() {
    const t = this.unpack_uint64();
    return t < 2 ** 63 ? t : t - 2 ** 64;
  }
  unpack_raw(t) {
    if (this.length < this.index + t)
      throw new Error(
        `BinaryPackFailure: index is out of range ${this.index} ${t} ${this.length}`,
      );
    const n = this.dataBuffer.slice(this.index, this.index + t);
    return ((this.index += t), n);
  }
  unpack_string(t) {
    const n = this.read(t);
    let r = 0,
      s = "",
      o,
      i;
    for (; r < t; )
      ((o = n[r]),
        o < 160
          ? ((i = o), r++)
          : (o ^ 192) < 32
            ? ((i = ((o & 31) << 6) | (n[r + 1] & 63)), (r += 2))
            : (o ^ 224) < 16
              ? ((i =
                  ((o & 15) << 12) | ((n[r + 1] & 63) << 6) | (n[r + 2] & 63)),
                (r += 3))
              : ((i =
                  ((o & 7) << 18) |
                  ((n[r + 1] & 63) << 12) |
                  ((n[r + 2] & 63) << 6) |
                  (n[r + 3] & 63)),
                (r += 4)),
        (s += String.fromCodePoint(i)));
    return ((this.index += t), s);
  }
  unpack_array(t) {
    const n = new Array(t);
    for (let r = 0; r < t; r++) n[r] = this.unpack();
    return n;
  }
  unpack_map(t) {
    const n = {};
    for (let r = 0; r < t; r++) {
      const s = this.unpack();
      n[s] = this.unpack();
    }
    return n;
  }
  unpack_float() {
    const t = this.unpack_uint32(),
      n = t >> 31,
      r = ((t >> 23) & 255) - 127,
      s = (t & 8388607) | 8388608;
    return (n === 0 ? 1 : -1) * s * 2 ** (r - 23);
  }
  unpack_double() {
    const t = this.unpack_uint32(),
      n = this.unpack_uint32(),
      r = t >> 31,
      s = ((t >> 20) & 2047) - 1023,
      i = ((t & 1048575) | 1048576) * 2 ** (s - 20) + n * 2 ** (s - 52);
    return (r === 0 ? 1 : -1) * i;
  }
  read(t) {
    const n = this.index;
    if (n + t <= this.length) return this.dataView.subarray(n, n + t);
    throw new Error("BinaryPackFailure: read index out of range");
  }
}
class vg {
  getBuffer() {
    return this._bufferBuilder.toArrayBuffer();
  }
  pack(t) {
    if (typeof t == "string") this.pack_string(t);
    else if (typeof t == "number")
      Math.floor(t) === t ? this.pack_integer(t) : this.pack_double(t);
    else if (typeof t == "boolean")
      t === !0
        ? this._bufferBuilder.append(195)
        : t === !1 && this._bufferBuilder.append(194);
    else if (t === void 0) this._bufferBuilder.append(192);
    else if (typeof t == "object")
      if (t === null) this._bufferBuilder.append(192);
      else {
        const n = t.constructor;
        if (t instanceof Array) {
          const r = this.pack_array(t);
          if (r instanceof Promise)
            return r.then(() => this._bufferBuilder.flush());
        } else if (t instanceof ArrayBuffer) this.pack_bin(new Uint8Array(t));
        else if ("BYTES_PER_ELEMENT" in t) {
          const r = t;
          this.pack_bin(new Uint8Array(r.buffer, r.byteOffset, r.byteLength));
        } else if (t instanceof Date) this.pack_string(t.toString());
        else {
          if (t instanceof Blob)
            return t.arrayBuffer().then((r) => {
              (this.pack_bin(new Uint8Array(r)), this._bufferBuilder.flush());
            });
          if (n == Object || n.toString().startsWith("class")) {
            const r = this.pack_object(t);
            if (r instanceof Promise)
              return r.then(() => this._bufferBuilder.flush());
          } else throw new Error(`Type "${n.toString()}" not yet supported`);
        }
      }
    else throw new Error(`Type "${typeof t}" not yet supported`);
    this._bufferBuilder.flush();
  }
  pack_bin(t) {
    const n = t.length;
    if (n <= 15) this.pack_uint8(160 + n);
    else if (n <= 65535) (this._bufferBuilder.append(218), this.pack_uint16(n));
    else if (n <= 4294967295)
      (this._bufferBuilder.append(219), this.pack_uint32(n));
    else throw new Error("Invalid length");
    this._bufferBuilder.append_buffer(t);
  }
  pack_string(t) {
    const n = this._textEncoder.encode(t),
      r = n.length;
    if (r <= 15) this.pack_uint8(176 + r);
    else if (r <= 65535) (this._bufferBuilder.append(216), this.pack_uint16(r));
    else if (r <= 4294967295)
      (this._bufferBuilder.append(217), this.pack_uint32(r));
    else throw new Error("Invalid length");
    this._bufferBuilder.append_buffer(n);
  }
  pack_array(t) {
    const n = t.length;
    if (n <= 15) this.pack_uint8(144 + n);
    else if (n <= 65535) (this._bufferBuilder.append(220), this.pack_uint16(n));
    else if (n <= 4294967295)
      (this._bufferBuilder.append(221), this.pack_uint32(n));
    else throw new Error("Invalid length");
    const r = (s) => {
      if (s < n) {
        const o = this.pack(t[s]);
        return o instanceof Promise ? o.then(() => r(s + 1)) : r(s + 1);
      }
    };
    return r(0);
  }
  pack_integer(t) {
    if (t >= -32 && t <= 127) this._bufferBuilder.append(t & 255);
    else if (t >= 0 && t <= 255)
      (this._bufferBuilder.append(204), this.pack_uint8(t));
    else if (t >= -128 && t <= 127)
      (this._bufferBuilder.append(208), this.pack_int8(t));
    else if (t >= 0 && t <= 65535)
      (this._bufferBuilder.append(205), this.pack_uint16(t));
    else if (t >= -32768 && t <= 32767)
      (this._bufferBuilder.append(209), this.pack_int16(t));
    else if (t >= 0 && t <= 4294967295)
      (this._bufferBuilder.append(206), this.pack_uint32(t));
    else if (t >= -2147483648 && t <= 2147483647)
      (this._bufferBuilder.append(210), this.pack_int32(t));
    else if (t >= -9223372036854776e3 && t <= 9223372036854776e3)
      (this._bufferBuilder.append(211), this.pack_int64(t));
    else if (t >= 0 && t <= 18446744073709552e3)
      (this._bufferBuilder.append(207), this.pack_uint64(t));
    else throw new Error("Invalid integer");
  }
  pack_double(t) {
    let n = 0;
    t < 0 && ((n = 1), (t = -t));
    const r = Math.floor(Math.log(t) / Math.LN2),
      s = t / 2 ** r - 1,
      o = Math.floor(s * 2 ** 52),
      i = 2 ** 32,
      l = (n << 31) | ((r + 1023) << 20) | ((o / i) & 1048575),
      c = o % i;
    (this._bufferBuilder.append(203), this.pack_int32(l), this.pack_int32(c));
  }
  pack_object(t) {
    const n = Object.keys(t),
      r = n.length;
    if (r <= 15) this.pack_uint8(128 + r);
    else if (r <= 65535) (this._bufferBuilder.append(222), this.pack_uint16(r));
    else if (r <= 4294967295)
      (this._bufferBuilder.append(223), this.pack_uint32(r));
    else throw new Error("Invalid length");
    const s = (o) => {
      if (o < n.length) {
        const i = n[o];
        if (t.hasOwnProperty(i)) {
          this.pack(i);
          const l = this.pack(t[i]);
          if (l instanceof Promise) return l.then(() => s(o + 1));
        }
        return s(o + 1);
      }
    };
    return s(0);
  }
  pack_uint8(t) {
    this._bufferBuilder.append(t);
  }
  pack_uint16(t) {
    (this._bufferBuilder.append(t >> 8), this._bufferBuilder.append(t & 255));
  }
  pack_uint32(t) {
    const n = t & 4294967295;
    (this._bufferBuilder.append((n & 4278190080) >>> 24),
      this._bufferBuilder.append((n & 16711680) >>> 16),
      this._bufferBuilder.append((n & 65280) >>> 8),
      this._bufferBuilder.append(n & 255));
  }
  pack_uint64(t) {
    const n = t / 4294967296,
      r = t % 2 ** 32;
    (this._bufferBuilder.append((n & 4278190080) >>> 24),
      this._bufferBuilder.append((n & 16711680) >>> 16),
      this._bufferBuilder.append((n & 65280) >>> 8),
      this._bufferBuilder.append(n & 255),
      this._bufferBuilder.append((r & 4278190080) >>> 24),
      this._bufferBuilder.append((r & 16711680) >>> 16),
      this._bufferBuilder.append((r & 65280) >>> 8),
      this._bufferBuilder.append(r & 255));
  }
  pack_int8(t) {
    this._bufferBuilder.append(t & 255);
  }
  pack_int16(t) {
    (this._bufferBuilder.append((t & 65280) >> 8),
      this._bufferBuilder.append(t & 255));
  }
  pack_int32(t) {
    (this._bufferBuilder.append((t >>> 24) & 255),
      this._bufferBuilder.append((t & 16711680) >>> 16),
      this._bufferBuilder.append((t & 65280) >>> 8),
      this._bufferBuilder.append(t & 255));
  }
  pack_int64(t) {
    const n = Math.floor(t / 4294967296),
      r = t % 2 ** 32;
    (this._bufferBuilder.append((n & 4278190080) >>> 24),
      this._bufferBuilder.append((n & 16711680) >>> 16),
      this._bufferBuilder.append((n & 65280) >>> 8),
      this._bufferBuilder.append(n & 255),
      this._bufferBuilder.append((r & 4278190080) >>> 24),
      this._bufferBuilder.append((r & 16711680) >>> 16),
      this._bufferBuilder.append((r & 65280) >>> 8),
      this._bufferBuilder.append(r & 255));
  }
  constructor() {
    ((this._bufferBuilder = new mg()), (this._textEncoder = new TextEncoder()));
  }
}
let Bf = !0,
  Uf = !0;
function Tr(e, t, n) {
  const r = e.match(t);
  return r && r.length >= n && parseFloat(r[n], 10);
}
function Nn(e, t, n) {
  if (!e.RTCPeerConnection) return;
  if (
    !Object.getOwnPropertyDescriptor(EventTarget.prototype, "addEventListener")
      .writable
  ) {
    Rl("Unable to polyfill events");
    return;
  }
  const s = e.RTCPeerConnection.prototype,
    o = s.addEventListener;
  s.addEventListener = function (l, c) {
    if (l !== t) return o.apply(this, arguments);
    const u = (d) => {
      const f = n(d);
      f && (c.handleEvent ? c.handleEvent(f) : c(f));
    };
    return (
      (this._eventMap = this._eventMap || {}),
      this._eventMap[t] || (this._eventMap[t] = new Map()),
      this._eventMap[t].set(c, u),
      o.apply(this, [l, u])
    );
  };
  const i = s.removeEventListener;
  ((s.removeEventListener = function (l, c) {
    if (l !== t || !this._eventMap || !this._eventMap[t])
      return i.apply(this, arguments);
    if (!this._eventMap[t].has(c)) return i.apply(this, arguments);
    const u = this._eventMap[t].get(c);
    return (
      this._eventMap[t].delete(c),
      this._eventMap[t].size === 0 && delete this._eventMap[t],
      Object.keys(this._eventMap).length === 0 && delete this._eventMap,
      i.apply(this, [l, u])
    );
  }),
    Object.defineProperty(s, "on" + t, {
      get() {
        return this["_on" + t];
      },
      set(l) {
        (this["_on" + t] &&
          (this.removeEventListener(t, this["_on" + t]),
          delete this["_on" + t]),
          l && this.addEventListener(t, (this["_on" + t] = l)));
      },
      enumerable: !0,
      configurable: !0,
    }));
}
function xg(e) {
  return typeof e != "boolean"
    ? new Error("Argument type: " + typeof e + ". Please use a boolean.")
    : ((Bf = e),
      e ? "adapter.js logging disabled" : "adapter.js logging enabled");
}
function wg(e) {
  return typeof e != "boolean"
    ? new Error("Argument type: " + typeof e + ". Please use a boolean.")
    : ((Uf = !e),
      "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
}
function Rl() {
  if (typeof window == "object") {
    if (Bf) return;
    typeof console < "u" &&
      typeof console.log == "function" &&
      console.log.apply(console, arguments);
  }
}
function Nl(e, t) {
  Uf && console.warn(e + " is deprecated, please use " + t + " instead.");
}
function kg(e) {
  const t = { browser: null, version: null };
  if (typeof e > "u" || !e.navigator || !e.navigator.userAgent)
    return ((t.browser = "Not a browser."), t);
  const { navigator: n } = e;
  if (n.userAgentData && n.userAgentData.brands) {
    const r = n.userAgentData.brands.find((s) => s.brand === "Chromium");
    if (r) return { browser: "chrome", version: parseInt(r.version, 10) };
  }
  if (n.mozGetUserMedia)
    ((t.browser = "firefox"),
      (t.version = parseInt(Tr(n.userAgent, /Firefox\/(\d+)\./, 1))));
  else if (
    n.webkitGetUserMedia ||
    (e.isSecureContext === !1 && e.webkitRTCPeerConnection)
  )
    ((t.browser = "chrome"),
      (t.version =
        parseInt(Tr(n.userAgent, /Chrom(e|ium)\/(\d+)\./, 2)) || null));
  else if (e.RTCPeerConnection && n.userAgent.match(/AppleWebKit\/(\d+)\./))
    ((t.browser = "safari"),
      (t.version = parseInt(Tr(n.userAgent, /AppleWebKit\/(\d+)\./, 1))),
      (t.supportsUnifiedPlan =
        e.RTCRtpTransceiver &&
        "currentDirection" in e.RTCRtpTransceiver.prototype),
      (t._safariVersion = Tr(n.userAgent, /Version\/(\d+(\.?\d+))/, 1)));
  else return ((t.browser = "Not a supported browser."), t);
  return t;
}
function Xc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qf(e) {
  return Xc(e)
    ? Object.keys(e).reduce(function (t, n) {
        const r = Xc(e[n]),
          s = r ? Qf(e[n]) : e[n],
          o = r && !Object.keys(s).length;
        return s === void 0 || o ? t : Object.assign(t, { [n]: s });
      }, {})
    : e;
}
function ka(e, t, n) {
  !t ||
    n.has(t.id) ||
    (n.set(t.id, t),
    Object.keys(t).forEach((r) => {
      r.endsWith("Id")
        ? ka(e, e.get(t[r]), n)
        : r.endsWith("Ids") &&
          t[r].forEach((s) => {
            ka(e, e.get(s), n);
          });
    }));
}
function Zc(e, t, n) {
  const r = n ? "outbound-rtp" : "inbound-rtp",
    s = new Map();
  if (t === null) return s;
  const o = [];
  return (
    e.forEach((i) => {
      i.type === "track" && i.trackIdentifier === t.id && o.push(i);
    }),
    o.forEach((i) => {
      e.forEach((l) => {
        l.type === r && l.trackId === i.id && ka(e, l, s);
      });
    }),
    s
  );
}
const eu = Rl;
function Vf(e, t) {
  const n = e && e.navigator;
  if (!n.mediaDevices) return;
  const r = function (l) {
      if (typeof l != "object" || l.mandatory || l.optional) return l;
      const c = {};
      return (
        Object.keys(l).forEach((u) => {
          if (u === "require" || u === "advanced" || u === "mediaSource")
            return;
          const d = typeof l[u] == "object" ? l[u] : { ideal: l[u] };
          d.exact !== void 0 &&
            typeof d.exact == "number" &&
            (d.min = d.max = d.exact);
          const f = function (p, v) {
            return p
              ? p + v.charAt(0).toUpperCase() + v.slice(1)
              : v === "deviceId"
                ? "sourceId"
                : v;
          };
          if (d.ideal !== void 0) {
            c.optional = c.optional || [];
            let p = {};
            typeof d.ideal == "number"
              ? ((p[f("min", u)] = d.ideal),
                c.optional.push(p),
                (p = {}),
                (p[f("max", u)] = d.ideal),
                c.optional.push(p))
              : ((p[f("", u)] = d.ideal), c.optional.push(p));
          }
          d.exact !== void 0 && typeof d.exact != "number"
            ? ((c.mandatory = c.mandatory || {}),
              (c.mandatory[f("", u)] = d.exact))
            : ["min", "max"].forEach((p) => {
                d[p] !== void 0 &&
                  ((c.mandatory = c.mandatory || {}),
                  (c.mandatory[f(p, u)] = d[p]));
              });
        }),
        l.advanced && (c.optional = (c.optional || []).concat(l.advanced)),
        c
      );
    },
    s = function (l, c) {
      if (t.version >= 61) return c(l);
      if (
        ((l = JSON.parse(JSON.stringify(l))), l && typeof l.audio == "object")
      ) {
        const u = function (d, f, p) {
          f in d && !(p in d) && ((d[p] = d[f]), delete d[f]);
        };
        ((l = JSON.parse(JSON.stringify(l))),
          u(l.audio, "autoGainControl", "googAutoGainControl"),
          u(l.audio, "noiseSuppression", "googNoiseSuppression"),
          (l.audio = r(l.audio)));
      }
      if (l && typeof l.video == "object") {
        let u = l.video.facingMode;
        u = u && (typeof u == "object" ? u : { ideal: u });
        const d = t.version < 66;
        if (
          u &&
          (u.exact === "user" ||
            u.exact === "environment" ||
            u.ideal === "user" ||
            u.ideal === "environment") &&
          !(
            n.mediaDevices.getSupportedConstraints &&
            n.mediaDevices.getSupportedConstraints().facingMode &&
            !d
          )
        ) {
          delete l.video.facingMode;
          let f;
          if (
            (u.exact === "environment" || u.ideal === "environment"
              ? (f = ["back", "rear"])
              : (u.exact === "user" || u.ideal === "user") && (f = ["front"]),
            f)
          )
            return n.mediaDevices.enumerateDevices().then((p) => {
              p = p.filter((w) => w.kind === "videoinput");
              let v = p.find((w) =>
                f.some((x) => w.label.toLowerCase().includes(x)),
              );
              return (
                !v && p.length && f.includes("back") && (v = p[p.length - 1]),
                v &&
                  (l.video.deviceId = u.exact
                    ? { exact: v.deviceId }
                    : { ideal: v.deviceId }),
                (l.video = r(l.video)),
                eu("chrome: " + JSON.stringify(l)),
                c(l)
              );
            });
        }
        l.video = r(l.video);
      }
      return (eu("chrome: " + JSON.stringify(l)), c(l));
    },
    o = function (l) {
      return t.version >= 64
        ? l
        : {
            name:
              {
                PermissionDeniedError: "NotAllowedError",
                PermissionDismissedError: "NotAllowedError",
                InvalidStateError: "NotAllowedError",
                DevicesNotFoundError: "NotFoundError",
                ConstraintNotSatisfiedError: "OverconstrainedError",
                TrackStartError: "NotReadableError",
                MediaDeviceFailedDueToShutdown: "NotAllowedError",
                MediaDeviceKillSwitchOn: "NotAllowedError",
                TabCaptureError: "AbortError",
                ScreenCaptureError: "AbortError",
                DeviceCaptureError: "AbortError",
              }[l.name] || l.name,
            message: l.message,
            constraint: l.constraint || l.constraintName,
            toString() {
              return this.name + (this.message && ": ") + this.message;
            },
          };
    },
    i = function (l, c, u) {
      s(l, (d) => {
        n.webkitGetUserMedia(d, c, (f) => {
          u && u(o(f));
        });
      });
    };
  if (((n.getUserMedia = i.bind(n)), n.mediaDevices.getUserMedia)) {
    const l = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
    n.mediaDevices.getUserMedia = function (c) {
      return s(c, (u) =>
        l(u).then(
          (d) => {
            if (
              (u.audio && !d.getAudioTracks().length) ||
              (u.video && !d.getVideoTracks().length)
            )
              throw (
                d.getTracks().forEach((f) => {
                  f.stop();
                }),
                new DOMException("", "NotFoundError")
              );
            return d;
          },
          (d) => Promise.reject(o(d)),
        ),
      );
    };
  }
}
function Hf(e) {
  e.MediaStream = e.MediaStream || e.webkitMediaStream;
}
function Wf(e, t) {
  if (!(t.version > 102))
    if (
      typeof e == "object" &&
      e.RTCPeerConnection &&
      !("ontrack" in e.RTCPeerConnection.prototype)
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
        get() {
          return this._ontrack;
        },
        set(r) {
          (this._ontrack && this.removeEventListener("track", this._ontrack),
            this.addEventListener("track", (this._ontrack = r)));
        },
        enumerable: !0,
        configurable: !0,
      });
      const n = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        return (
          this._ontrackpoly ||
            ((this._ontrackpoly = (s) => {
              (s.stream.addEventListener("addtrack", (o) => {
                let i;
                e.RTCPeerConnection.prototype.getReceivers
                  ? (i = this.getReceivers().find(
                      (c) => c.track && c.track.id === o.track.id,
                    ))
                  : (i = { track: o.track });
                const l = new Event("track");
                ((l.track = o.track),
                  (l.receiver = i),
                  (l.transceiver = { receiver: i }),
                  (l.streams = [s.stream]),
                  this.dispatchEvent(l));
              }),
                s.stream.getTracks().forEach((o) => {
                  let i;
                  e.RTCPeerConnection.prototype.getReceivers
                    ? (i = this.getReceivers().find(
                        (c) => c.track && c.track.id === o.id,
                      ))
                    : (i = { track: o });
                  const l = new Event("track");
                  ((l.track = o),
                    (l.receiver = i),
                    (l.transceiver = { receiver: i }),
                    (l.streams = [s.stream]),
                    this.dispatchEvent(l));
                }));
            }),
            this.addEventListener("addstream", this._ontrackpoly)),
          n.apply(this, arguments)
        );
      };
    } else
      Nn(
        e,
        "track",
        (n) => (
          n.transceiver ||
            Object.defineProperty(n, "transceiver", {
              value: { receiver: n.receiver },
            }),
          n
        ),
      );
}
function qf(e) {
  if (
    typeof e == "object" &&
    e.RTCPeerConnection &&
    !("getSenders" in e.RTCPeerConnection.prototype) &&
    "createDTMFSender" in e.RTCPeerConnection.prototype
  ) {
    const t = function (s, o) {
      return {
        track: o,
        get dtmf() {
          return (
            this._dtmf === void 0 &&
              (o.kind === "audio"
                ? (this._dtmf = s.createDTMFSender(o))
                : (this._dtmf = null)),
            this._dtmf
          );
        },
        _pc: s,
      };
    };
    if (!e.RTCPeerConnection.prototype.getSenders) {
      e.RTCPeerConnection.prototype.getSenders = function () {
        return ((this._senders = this._senders || []), this._senders.slice());
      };
      const s = e.RTCPeerConnection.prototype.addTrack;
      e.RTCPeerConnection.prototype.addTrack = function (l, c) {
        let u = s.apply(this, arguments);
        return (u || ((u = t(this, l)), this._senders.push(u)), u);
      };
      const o = e.RTCPeerConnection.prototype.removeTrack;
      e.RTCPeerConnection.prototype.removeTrack = function (l) {
        o.apply(this, arguments);
        const c = this._senders.indexOf(l);
        c !== -1 && this._senders.splice(c, 1);
      };
    }
    const n = e.RTCPeerConnection.prototype.addStream;
    e.RTCPeerConnection.prototype.addStream = function (o) {
      ((this._senders = this._senders || []),
        n.apply(this, [o]),
        o.getTracks().forEach((i) => {
          this._senders.push(t(this, i));
        }));
    };
    const r = e.RTCPeerConnection.prototype.removeStream;
    e.RTCPeerConnection.prototype.removeStream = function (o) {
      ((this._senders = this._senders || []),
        r.apply(this, [o]),
        o.getTracks().forEach((i) => {
          const l = this._senders.find((c) => c.track === i);
          l && this._senders.splice(this._senders.indexOf(l), 1);
        }));
    };
  } else if (
    typeof e == "object" &&
    e.RTCPeerConnection &&
    "getSenders" in e.RTCPeerConnection.prototype &&
    "createDTMFSender" in e.RTCPeerConnection.prototype &&
    e.RTCRtpSender &&
    !("dtmf" in e.RTCRtpSender.prototype)
  ) {
    const t = e.RTCPeerConnection.prototype.getSenders;
    ((e.RTCPeerConnection.prototype.getSenders = function () {
      const r = t.apply(this, []);
      return (r.forEach((s) => (s._pc = this)), r);
    }),
      Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
        get() {
          return (
            this._dtmf === void 0 &&
              (this.track.kind === "audio"
                ? (this._dtmf = this._pc.createDTMFSender(this.track))
                : (this._dtmf = null)),
            this._dtmf
          );
        },
      }));
  }
}
function Gf(e, t) {
  if (
    t.version >= 67 ||
    !(
      typeof e == "object" &&
      e.RTCPeerConnection &&
      e.RTCRtpSender &&
      e.RTCRtpReceiver
    )
  )
    return;
  if (!("getStats" in e.RTCRtpSender.prototype)) {
    const r = e.RTCPeerConnection.prototype.getSenders;
    r &&
      (e.RTCPeerConnection.prototype.getSenders = function () {
        const i = r.apply(this, []);
        return (i.forEach((l) => (l._pc = this)), i);
      });
    const s = e.RTCPeerConnection.prototype.addTrack;
    (s &&
      (e.RTCPeerConnection.prototype.addTrack = function () {
        const i = s.apply(this, arguments);
        return ((i._pc = this), i);
      }),
      (e.RTCRtpSender.prototype.getStats = function () {
        const i = this;
        return this._pc.getStats().then((l) => Zc(l, i.track, !0));
      }));
  }
  if (!("getStats" in e.RTCRtpReceiver.prototype)) {
    const r = e.RTCPeerConnection.prototype.getReceivers;
    (r &&
      (e.RTCPeerConnection.prototype.getReceivers = function () {
        const o = r.apply(this, []);
        return (o.forEach((i) => (i._pc = this)), o);
      }),
      Nn(e, "track", (s) => ((s.receiver._pc = s.srcElement), s)),
      (e.RTCRtpReceiver.prototype.getStats = function () {
        const o = this;
        return this._pc.getStats().then((i) => Zc(i, o.track, !1));
      }));
  }
  if (
    !(
      "getStats" in e.RTCRtpSender.prototype &&
      "getStats" in e.RTCRtpReceiver.prototype
    )
  )
    return;
  const n = e.RTCPeerConnection.prototype.getStats;
  e.RTCPeerConnection.prototype.getStats = function () {
    if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
      const s = arguments[0];
      let o, i, l;
      return (
        this.getSenders().forEach((c) => {
          c.track === s && (o ? (l = !0) : (o = c));
        }),
        this.getReceivers().forEach(
          (c) => (c.track === s && (i ? (l = !0) : (i = c)), c.track === s),
        ),
        l || (o && i)
          ? Promise.reject(
              new DOMException(
                "There are more than one sender or receiver for the track.",
                "InvalidAccessError",
              ),
            )
          : o
            ? o.getStats()
            : i
              ? i.getStats()
              : Promise.reject(
                  new DOMException(
                    "There is no sender or receiver for the track.",
                    "InvalidAccessError",
                  ),
                )
      );
    }
    return n.apply(this, arguments);
  };
}
function Kf(e) {
  e.RTCPeerConnection.prototype.getLocalStreams = function () {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      Object.keys(this._shimmedLocalStreams).map(
        (i) => this._shimmedLocalStreams[i][0],
      )
    );
  };
  const t = e.RTCPeerConnection.prototype.addTrack;
  e.RTCPeerConnection.prototype.addTrack = function (i, l) {
    if (!l) return t.apply(this, arguments);
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    const c = t.apply(this, arguments);
    return (
      this._shimmedLocalStreams[l.id]
        ? this._shimmedLocalStreams[l.id].indexOf(c) === -1 &&
          this._shimmedLocalStreams[l.id].push(c)
        : (this._shimmedLocalStreams[l.id] = [l, c]),
      c
    );
  };
  const n = e.RTCPeerConnection.prototype.addStream;
  e.RTCPeerConnection.prototype.addStream = function (i) {
    ((this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      i.getTracks().forEach((u) => {
        if (this.getSenders().find((f) => f.track === u))
          throw new DOMException("Track already exists.", "InvalidAccessError");
      }));
    const l = this.getSenders();
    n.apply(this, arguments);
    const c = this.getSenders().filter((u) => l.indexOf(u) === -1);
    this._shimmedLocalStreams[i.id] = [i].concat(c);
  };
  const r = e.RTCPeerConnection.prototype.removeStream;
  e.RTCPeerConnection.prototype.removeStream = function (i) {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      delete this._shimmedLocalStreams[i.id],
      r.apply(this, arguments)
    );
  };
  const s = e.RTCPeerConnection.prototype.removeTrack;
  e.RTCPeerConnection.prototype.removeTrack = function (i) {
    return (
      (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
      i &&
        Object.keys(this._shimmedLocalStreams).forEach((l) => {
          const c = this._shimmedLocalStreams[l].indexOf(i);
          (c !== -1 && this._shimmedLocalStreams[l].splice(c, 1),
            this._shimmedLocalStreams[l].length === 1 &&
              delete this._shimmedLocalStreams[l]);
        }),
      s.apply(this, arguments)
    );
  };
}
function Jf(e, t) {
  if (!e.RTCPeerConnection) return;
  if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return Kf(e);
  const n = e.RTCPeerConnection.prototype.getLocalStreams;
  e.RTCPeerConnection.prototype.getLocalStreams = function () {
    const d = n.apply(this);
    return (
      (this._reverseStreams = this._reverseStreams || {}),
      d.map((f) => this._reverseStreams[f.id])
    );
  };
  const r = e.RTCPeerConnection.prototype.addStream;
  e.RTCPeerConnection.prototype.addStream = function (d) {
    if (
      ((this._streams = this._streams || {}),
      (this._reverseStreams = this._reverseStreams || {}),
      d.getTracks().forEach((f) => {
        if (this.getSenders().find((v) => v.track === f))
          throw new DOMException("Track already exists.", "InvalidAccessError");
      }),
      !this._reverseStreams[d.id])
    ) {
      const f = new e.MediaStream(d.getTracks());
      ((this._streams[d.id] = f), (this._reverseStreams[f.id] = d), (d = f));
    }
    r.apply(this, [d]);
  };
  const s = e.RTCPeerConnection.prototype.removeStream;
  ((e.RTCPeerConnection.prototype.removeStream = function (d) {
    ((this._streams = this._streams || {}),
      (this._reverseStreams = this._reverseStreams || {}),
      s.apply(this, [this._streams[d.id] || d]),
      delete this._reverseStreams[
        this._streams[d.id] ? this._streams[d.id].id : d.id
      ],
      delete this._streams[d.id]);
  }),
    (e.RTCPeerConnection.prototype.addTrack = function (d, f) {
      if (this.signalingState === "closed")
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError",
        );
      const p = [].slice.call(arguments, 1);
      if (p.length !== 1 || !p[0].getTracks().find((x) => x === d))
        throw new DOMException(
          "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
          "NotSupportedError",
        );
      if (this.getSenders().find((x) => x.track === d))
        throw new DOMException("Track already exists.", "InvalidAccessError");
      ((this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {}));
      const w = this._streams[f.id];
      if (w)
        (w.addTrack(d),
          Promise.resolve().then(() => {
            this.dispatchEvent(new Event("negotiationneeded"));
          }));
      else {
        const x = new e.MediaStream([d]);
        ((this._streams[f.id] = x),
          (this._reverseStreams[x.id] = f),
          this.addStream(x));
      }
      return this.getSenders().find((x) => x.track === d);
    }));
  function o(u, d) {
    let f = d.sdp;
    return (
      Object.keys(u._reverseStreams || []).forEach((p) => {
        const v = u._reverseStreams[p],
          w = u._streams[v.id];
        f = f.replace(new RegExp(w.id, "g"), v.id);
      }),
      new RTCSessionDescription({ type: d.type, sdp: f })
    );
  }
  function i(u, d) {
    let f = d.sdp;
    return (
      Object.keys(u._reverseStreams || []).forEach((p) => {
        const v = u._reverseStreams[p],
          w = u._streams[v.id];
        f = f.replace(new RegExp(v.id, "g"), w.id);
      }),
      new RTCSessionDescription({ type: d.type, sdp: f })
    );
  }
  ["createOffer", "createAnswer"].forEach(function (u) {
    const d = e.RTCPeerConnection.prototype[u],
      f = {
        [u]() {
          const p = arguments;
          return arguments.length && typeof arguments[0] == "function"
            ? d.apply(this, [
                (w) => {
                  const x = o(this, w);
                  p[0].apply(null, [x]);
                },
                (w) => {
                  p[1] && p[1].apply(null, w);
                },
                arguments[2],
              ])
            : d.apply(this, arguments).then((w) => o(this, w));
        },
      };
    e.RTCPeerConnection.prototype[u] = f[u];
  });
  const l = e.RTCPeerConnection.prototype.setLocalDescription;
  e.RTCPeerConnection.prototype.setLocalDescription = function () {
    return !arguments.length || !arguments[0].type
      ? l.apply(this, arguments)
      : ((arguments[0] = i(this, arguments[0])), l.apply(this, arguments));
  };
  const c = Object.getOwnPropertyDescriptor(
    e.RTCPeerConnection.prototype,
    "localDescription",
  );
  (Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
    get() {
      const u = c.get.apply(this);
      return u.type === "" ? u : o(this, u);
    },
  }),
    (e.RTCPeerConnection.prototype.removeTrack = function (d) {
      if (this.signalingState === "closed")
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError",
        );
      if (!d._pc)
        throw new DOMException(
          "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
          "TypeError",
        );
      if (!(d._pc === this))
        throw new DOMException(
          "Sender was not created by this connection.",
          "InvalidAccessError",
        );
      this._streams = this._streams || {};
      let p;
      (Object.keys(this._streams).forEach((v) => {
        this._streams[v].getTracks().find((x) => d.track === x) &&
          (p = this._streams[v]);
      }),
        p &&
          (p.getTracks().length === 1
            ? this.removeStream(this._reverseStreams[p.id])
            : p.removeTrack(d.track),
          this.dispatchEvent(new Event("negotiationneeded"))));
    }));
}
function Ca(e, t) {
  (!e.RTCPeerConnection &&
    e.webkitRTCPeerConnection &&
    (e.RTCPeerConnection = e.webkitRTCPeerConnection),
    e.RTCPeerConnection &&
      t.version < 53 &&
      [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate",
      ].forEach(function (n) {
        const r = e.RTCPeerConnection.prototype[n],
          s = {
            [n]() {
              return (
                (arguments[0] = new (
                  n === "addIceCandidate"
                    ? e.RTCIceCandidate
                    : e.RTCSessionDescription
                )(arguments[0])),
                r.apply(this, arguments)
              );
            },
          };
        e.RTCPeerConnection.prototype[n] = s[n];
      }));
}
function Yf(e, t) {
  t.version > 102 ||
    Nn(e, "negotiationneeded", (n) => {
      const r = n.target;
      if (
        !(
          (t.version < 72 ||
            (r.getConfiguration &&
              r.getConfiguration().sdpSemantics === "plan-b")) &&
          r.signalingState !== "stable"
        )
      )
        return n;
    });
}
const tu = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      fixNegotiationNeeded: Yf,
      shimAddTrackRemoveTrack: Jf,
      shimAddTrackRemoveTrackWithNative: Kf,
      shimGetSendersWithDtmf: qf,
      shimGetUserMedia: Vf,
      shimMediaStream: Hf,
      shimOnTrack: Wf,
      shimPeerConnection: Ca,
      shimSenderReceiverGetStats: Gf,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function Xf(e, t) {
  const n = e && e.navigator,
    r = e && e.MediaStreamTrack;
  if (
    ((n.getUserMedia = function (s, o, i) {
      (Nl("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
        n.mediaDevices.getUserMedia(s).then(o, i));
    }),
    !(
      t.version > 55 &&
      "autoGainControl" in n.mediaDevices.getSupportedConstraints()
    ))
  ) {
    const s = function (i, l, c) {
        l in i && !(c in i) && ((i[c] = i[l]), delete i[l]);
      },
      o = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
    if (
      ((n.mediaDevices.getUserMedia = function (i) {
        return (
          typeof i == "object" &&
            typeof i.audio == "object" &&
            ((i = JSON.parse(JSON.stringify(i))),
            s(i.audio, "autoGainControl", "mozAutoGainControl"),
            s(i.audio, "noiseSuppression", "mozNoiseSuppression")),
          o(i)
        );
      }),
      r && r.prototype.getSettings)
    ) {
      const i = r.prototype.getSettings;
      r.prototype.getSettings = function () {
        const l = i.apply(this, arguments);
        return (
          s(l, "mozAutoGainControl", "autoGainControl"),
          s(l, "mozNoiseSuppression", "noiseSuppression"),
          l
        );
      };
    }
    if (r && r.prototype.applyConstraints) {
      const i = r.prototype.applyConstraints;
      r.prototype.applyConstraints = function (l) {
        return (
          this.kind === "audio" &&
            typeof l == "object" &&
            ((l = JSON.parse(JSON.stringify(l))),
            s(l, "autoGainControl", "mozAutoGainControl"),
            s(l, "noiseSuppression", "mozNoiseSuppression")),
          i.apply(this, [l])
        );
      };
    }
  }
}
function Cg(e, t) {
  (e.navigator.mediaDevices && "getDisplayMedia" in e.navigator.mediaDevices) ||
    (e.navigator.mediaDevices &&
      (e.navigator.mediaDevices.getDisplayMedia = function (r) {
        if (!(r && r.video)) {
          const s = new DOMException(
            "getDisplayMedia without video constraints is undefined",
          );
          return ((s.name = "NotFoundError"), (s.code = 8), Promise.reject(s));
        }
        return (
          r.video === !0
            ? (r.video = { mediaSource: t })
            : (r.video.mediaSource = t),
          e.navigator.mediaDevices.getUserMedia(r)
        );
      }));
}
function Zf(e) {
  typeof e == "object" &&
    e.RTCTrackEvent &&
    "receiver" in e.RTCTrackEvent.prototype &&
    !("transceiver" in e.RTCTrackEvent.prototype) &&
    Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      },
    });
}
function Sa(e, t) {
  typeof e != "object" ||
    !(e.RTCPeerConnection || e.mozRTCPeerConnection) ||
    (!e.RTCPeerConnection &&
      e.mozRTCPeerConnection &&
      (e.RTCPeerConnection = e.mozRTCPeerConnection),
    t.version < 53 &&
      [
        "setLocalDescription",
        "setRemoteDescription",
        "addIceCandidate",
      ].forEach(function (n) {
        const r = e.RTCPeerConnection.prototype[n],
          s = {
            [n]() {
              return (
                (arguments[0] = new (
                  n === "addIceCandidate"
                    ? e.RTCIceCandidate
                    : e.RTCSessionDescription
                )(arguments[0])),
                r.apply(this, arguments)
              );
            },
          };
        e.RTCPeerConnection.prototype[n] = s[n];
      }));
}
function ep(e, t) {
  if (
    typeof e != "object" ||
    !(e.RTCPeerConnection || e.mozRTCPeerConnection) ||
    t.version >= 151
  )
    return;
  const n = {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate",
    },
    r = e.RTCPeerConnection.prototype.getStats;
  e.RTCPeerConnection.prototype.getStats = function () {
    const [o, i, l] = arguments;
    return this.signalingState === "closed"
      ? Promise.resolve(new Map())
      : r
          .apply(this, [o || null])
          .then((c) => {
            if (t.version < 53 && !i)
              try {
                c.forEach((u) => {
                  u.type = n[u.type] || u.type;
                });
              } catch (u) {
                if (u.name !== "TypeError") throw u;
                c.forEach((d, f) => {
                  c.set(f, Object.assign({}, d, { type: n[d.type] || d.type }));
                });
              }
            return c;
          })
          .then(i, l);
  };
}
function tp(e) {
  if (
    !(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) ||
    (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype)
  )
    return;
  const t = e.RTCPeerConnection.prototype.getSenders;
  t &&
    (e.RTCPeerConnection.prototype.getSenders = function () {
      const s = t.apply(this, []);
      return (s.forEach((o) => (o._pc = this)), s);
    });
  const n = e.RTCPeerConnection.prototype.addTrack;
  (n &&
    (e.RTCPeerConnection.prototype.addTrack = function () {
      const s = n.apply(this, arguments);
      return ((s._pc = this), s);
    }),
    (e.RTCRtpSender.prototype.getStats = function () {
      return this.track
        ? this._pc.getStats(this.track)
        : Promise.resolve(new Map());
    }));
}
function np(e) {
  if (
    !(typeof e == "object" && e.RTCPeerConnection && e.RTCRtpSender) ||
    (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)
  )
    return;
  const t = e.RTCPeerConnection.prototype.getReceivers;
  (t &&
    (e.RTCPeerConnection.prototype.getReceivers = function () {
      const r = t.apply(this, []);
      return (r.forEach((s) => (s._pc = this)), r);
    }),
    Nn(e, "track", (n) => ((n.receiver._pc = n.srcElement), n)),
    (e.RTCRtpReceiver.prototype.getStats = function () {
      return this._pc.getStats(this.track);
    }));
}
function rp(e) {
  !e.RTCPeerConnection ||
    "removeStream" in e.RTCPeerConnection.prototype ||
    (e.RTCPeerConnection.prototype.removeStream = function (n) {
      (Nl("removeStream", "removeTrack"),
        this.getSenders().forEach((r) => {
          r.track && n.getTracks().includes(r.track) && this.removeTrack(r);
        }));
    });
}
function sp(e) {
  e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
}
function op(e) {
  if (!(typeof e == "object" && e.RTCPeerConnection)) return;
  const t = e.RTCPeerConnection.prototype.addTransceiver;
  t &&
    (e.RTCPeerConnection.prototype.addTransceiver = function () {
      this.setParametersPromises = [];
      let r = arguments[1] && arguments[1].sendEncodings;
      (r === void 0 && (r = []), (r = [...r]));
      const s = r.length > 0;
      s &&
        r.forEach((i) => {
          if ("rid" in i && !/^[a-z0-9]{0,16}$/i.test(i.rid))
            throw new TypeError("Invalid RID value provided.");
          if (
            "scaleResolutionDownBy" in i &&
            !(parseFloat(i.scaleResolutionDownBy) >= 1)
          )
            throw new RangeError("scale_resolution_down_by must be >= 1.0");
          if ("maxFramerate" in i && !(parseFloat(i.maxFramerate) >= 0))
            throw new RangeError("max_framerate must be >= 0.0");
        });
      const o = t.apply(this, arguments);
      if (s) {
        const { sender: i } = o,
          l = i.getParameters();
        (!("encodings" in l) ||
          (l.encodings.length === 1 &&
            Object.keys(l.encodings[0]).length === 0)) &&
          ((l.encodings = r),
          (i.sendEncodings = r),
          this.setParametersPromises.push(
            i
              .setParameters(l)
              .then(() => {
                delete i.sendEncodings;
              })
              .catch(() => {
                delete i.sendEncodings;
              }),
          ));
      }
      return o;
    });
}
function ip(e) {
  if (!(typeof e == "object" && e.RTCRtpSender)) return;
  const t = e.RTCRtpSender.prototype.getParameters;
  t &&
    (e.RTCRtpSender.prototype.getParameters = function () {
      const r = t.apply(this, arguments);
      return (
        "encodings" in r ||
          (r.encodings = [].concat(this.sendEncodings || [{}])),
        r
      );
    });
}
function ap(e) {
  if (!(typeof e == "object" && e.RTCPeerConnection)) return;
  const t = e.RTCPeerConnection.prototype.createOffer;
  e.RTCPeerConnection.prototype.createOffer = function () {
    return this.setParametersPromises && this.setParametersPromises.length
      ? Promise.all(this.setParametersPromises)
          .then(() => t.apply(this, arguments))
          .finally(() => {
            this.setParametersPromises = [];
          })
      : t.apply(this, arguments);
  };
}
function lp(e) {
  if (!(typeof e == "object" && e.RTCPeerConnection)) return;
  const t = e.RTCPeerConnection.prototype.createAnswer;
  e.RTCPeerConnection.prototype.createAnswer = function () {
    return this.setParametersPromises && this.setParametersPromises.length
      ? Promise.all(this.setParametersPromises)
          .then(() => t.apply(this, arguments))
          .finally(() => {
            this.setParametersPromises = [];
          })
      : t.apply(this, arguments);
  };
}
const nu = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      shimAddTransceiver: op,
      shimCreateAnswer: lp,
      shimCreateOffer: ap,
      shimGetDisplayMedia: Cg,
      shimGetParameters: ip,
      shimGetStats: ep,
      shimGetUserMedia: Xf,
      shimOnTrack: Zf,
      shimPeerConnection: Sa,
      shimRTCDataChannel: sp,
      shimReceiverGetStats: np,
      shimRemoveStream: rp,
      shimSenderGetStats: tp,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function cp(e) {
  if (!(typeof e != "object" || !e.RTCPeerConnection)) {
    if (
      ("getLocalStreams" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.getLocalStreams = function () {
          return (
            this._localStreams || (this._localStreams = []),
            this._localStreams
          );
        }),
      !("addStream" in e.RTCPeerConnection.prototype))
    ) {
      const t = e.RTCPeerConnection.prototype.addTrack;
      ((e.RTCPeerConnection.prototype.addStream = function (r) {
        (this._localStreams || (this._localStreams = []),
          this._localStreams.includes(r) || this._localStreams.push(r),
          r.getAudioTracks().forEach((s) => t.call(this, s, r)),
          r.getVideoTracks().forEach((s) => t.call(this, s, r)));
      }),
        (e.RTCPeerConnection.prototype.addTrack = function (r, ...s) {
          return (
            s &&
              s.forEach((o) => {
                this._localStreams
                  ? this._localStreams.includes(o) || this._localStreams.push(o)
                  : (this._localStreams = [o]);
              }),
            t.apply(this, arguments)
          );
        }));
    }
    "removeStream" in e.RTCPeerConnection.prototype ||
      (e.RTCPeerConnection.prototype.removeStream = function (n) {
        this._localStreams || (this._localStreams = []);
        const r = this._localStreams.indexOf(n);
        if (r === -1) return;
        this._localStreams.splice(r, 1);
        const s = n.getTracks();
        this.getSenders().forEach((o) => {
          s.includes(o.track) && this.removeTrack(o);
        });
      });
  }
}
function up(e) {
  if (
    !(typeof e != "object" || !e.RTCPeerConnection) &&
    ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
      (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this._remoteStreams ? this._remoteStreams : [];
      }),
    !("onaddstream" in e.RTCPeerConnection.prototype))
  ) {
    Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
      get() {
        return this._onaddstream;
      },
      set(n) {
        (this._onaddstream &&
          (this.removeEventListener("addstream", this._onaddstream),
          this.removeEventListener("track", this._onaddstreampoly)),
          this.addEventListener("addstream", (this._onaddstream = n)),
          this.addEventListener(
            "track",
            (this._onaddstreampoly = (r) => {
              r.streams.forEach((s) => {
                if (
                  (this._remoteStreams || (this._remoteStreams = []),
                  this._remoteStreams.includes(s))
                )
                  return;
                this._remoteStreams.push(s);
                const o = new Event("addstream");
                ((o.stream = s), this.dispatchEvent(o));
              });
            }),
          ));
      },
    });
    const t = e.RTCPeerConnection.prototype.setRemoteDescription;
    e.RTCPeerConnection.prototype.setRemoteDescription = function () {
      const r = this;
      return (
        this._onaddstreampoly ||
          this.addEventListener(
            "track",
            (this._onaddstreampoly = function (s) {
              s.streams.forEach((o) => {
                if (
                  (r._remoteStreams || (r._remoteStreams = []),
                  r._remoteStreams.indexOf(o) >= 0)
                )
                  return;
                r._remoteStreams.push(o);
                const i = new Event("addstream");
                ((i.stream = o), r.dispatchEvent(i));
              });
            }),
          ),
        t.apply(r, arguments)
      );
    };
  }
}
function dp(e) {
  if (typeof e != "object" || !e.RTCPeerConnection) return;
  const t = e.RTCPeerConnection.prototype,
    n = t.createOffer,
    r = t.createAnswer,
    s = t.setLocalDescription,
    o = t.setRemoteDescription,
    i = t.addIceCandidate;
  ((t.createOffer = function (u, d) {
    const f = arguments.length >= 2 ? arguments[2] : arguments[0],
      p = n.apply(this, [f]);
    return d ? (p.then(u, d), Promise.resolve()) : p;
  }),
    (t.createAnswer = function (u, d) {
      const f = arguments.length >= 2 ? arguments[2] : arguments[0],
        p = r.apply(this, [f]);
      return d ? (p.then(u, d), Promise.resolve()) : p;
    }));
  let l = function (c, u, d) {
    const f = s.apply(this, [c]);
    return d ? (f.then(u, d), Promise.resolve()) : f;
  };
  ((t.setLocalDescription = l),
    (l = function (c, u, d) {
      const f = o.apply(this, [c]);
      return d ? (f.then(u, d), Promise.resolve()) : f;
    }),
    (t.setRemoteDescription = l),
    (l = function (c, u, d) {
      const f = i.apply(this, [c]);
      return d ? (f.then(u, d), Promise.resolve()) : f;
    }),
    (t.addIceCandidate = l));
}
function fp(e) {
  const t = e && e.navigator;
  if (t.mediaDevices && t.mediaDevices.getUserMedia) {
    const n = t.mediaDevices,
      r = n.getUserMedia.bind(n);
    t.mediaDevices.getUserMedia = (s) => r(pp(s));
  }
  !t.getUserMedia &&
    t.mediaDevices &&
    t.mediaDevices.getUserMedia &&
    (t.getUserMedia = function (r, s, o) {
      t.mediaDevices.getUserMedia(r).then(s, o);
    }.bind(t));
}
function pp(e) {
  return e && e.video !== void 0
    ? Object.assign({}, e, { video: Qf(e.video) })
    : e;
}
function hp(e) {
  if (!e.RTCPeerConnection) return;
  const t = e.RTCPeerConnection;
  ((e.RTCPeerConnection = function (r, s) {
    if (r && r.iceServers) {
      const o = [];
      for (let i = 0; i < r.iceServers.length; i++) {
        let l = r.iceServers[i];
        l.urls === void 0 && l.url
          ? (Nl("RTCIceServer.url", "RTCIceServer.urls"),
            (l = JSON.parse(JSON.stringify(l))),
            (l.urls = l.url),
            delete l.url,
            o.push(l))
          : o.push(r.iceServers[i]);
      }
      r.iceServers = o;
    }
    return new t(r, s);
  }),
    (e.RTCPeerConnection.prototype = t.prototype),
    "generateCertificate" in t &&
      Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
        get() {
          return t.generateCertificate;
        },
      }));
}
function mp(e) {
  typeof e == "object" &&
    e.RTCTrackEvent &&
    "receiver" in e.RTCTrackEvent.prototype &&
    !("transceiver" in e.RTCTrackEvent.prototype) &&
    Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
      get() {
        return { receiver: this.receiver };
      },
    });
}
function gp(e) {
  const t = e.RTCPeerConnection.prototype.createOffer;
  e.RTCPeerConnection.prototype.createOffer = function (r) {
    if (r) {
      typeof r.offerToReceiveAudio < "u" &&
        (r.offerToReceiveAudio = !!r.offerToReceiveAudio);
      const s = this.getTransceivers().find(
        (i) => i.receiver.track.kind === "audio",
      );
      (r.offerToReceiveAudio === !1 && s
        ? s.direction === "sendrecv"
          ? s.setDirection
            ? s.setDirection("sendonly")
            : (s.direction = "sendonly")
          : s.direction === "recvonly" &&
            (s.setDirection
              ? s.setDirection("inactive")
              : (s.direction = "inactive"))
        : r.offerToReceiveAudio === !0 &&
          !s &&
          this.addTransceiver("audio", { direction: "recvonly" }),
        typeof r.offerToReceiveVideo < "u" &&
          (r.offerToReceiveVideo = !!r.offerToReceiveVideo));
      const o = this.getTransceivers().find(
        (i) => i.receiver.track.kind === "video",
      );
      r.offerToReceiveVideo === !1 && o
        ? o.direction === "sendrecv"
          ? o.setDirection
            ? o.setDirection("sendonly")
            : (o.direction = "sendonly")
          : o.direction === "recvonly" &&
            (o.setDirection
              ? o.setDirection("inactive")
              : (o.direction = "inactive"))
        : r.offerToReceiveVideo === !0 &&
          !o &&
          this.addTransceiver("video", { direction: "recvonly" });
    }
    return t.apply(this, arguments);
  };
}
function yp(e) {
  typeof e != "object" ||
    e.AudioContext ||
    (e.AudioContext = e.webkitAudioContext);
}
const ru = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      shimAudioContext: yp,
      shimCallbacksAPI: dp,
      shimConstraints: pp,
      shimCreateOfferLegacy: gp,
      shimGetUserMedia: fp,
      shimLocalStreamsAPI: cp,
      shimRTCIceServerUrls: hp,
      shimRemoteStreamsAPI: up,
      shimTrackEventTransceiver: mp,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
var vp = { exports: {} };
(function (e) {
  const t = {};
  ((t.generateIdentifier = function () {
    return Math.random().toString(36).substring(2, 12);
  }),
    (t.localCName = t.generateIdentifier()),
    (t.splitLines = function (n) {
      return n
        .trim()
        .split(
          `
`,
        )
        .map((r) => r.trim());
    }),
    (t.splitSections = function (n) {
      return n
        .split(
          `
m=`,
        )
        .map(
          (s, o) =>
            (o > 0 ? "m=" + s : s).trim() +
            `\r
`,
        );
    }),
    (t.getDescription = function (n) {
      const r = t.splitSections(n);
      return r && r[0];
    }),
    (t.getMediaSections = function (n) {
      const r = t.splitSections(n);
      return (r.shift(), r);
    }),
    (t.matchPrefix = function (n, r) {
      return t.splitLines(n).filter((s) => s.indexOf(r) === 0);
    }),
    (t.parseCandidate = function (n) {
      let r;
      n.indexOf("a=candidate:") === 0
        ? (r = n.substring(12).split(" "))
        : (r = n.substring(10).split(" "));
      const s = {
        foundation: r[0],
        component: { 1: "rtp", 2: "rtcp" }[r[1]] || r[1],
        protocol: r[2].toLowerCase(),
        priority: parseInt(r[3], 10),
        ip: r[4],
        address: r[4],
        port: parseInt(r[5], 10),
        type: r[7],
      };
      for (let o = 8; o < r.length; o += 2)
        switch (r[o]) {
          case "raddr":
            s.relatedAddress = r[o + 1];
            break;
          case "rport":
            s.relatedPort = parseInt(r[o + 1], 10);
            break;
          case "tcptype":
            s.tcpType = r[o + 1];
            break;
          case "ufrag":
            ((s.ufrag = r[o + 1]), (s.usernameFragment = r[o + 1]));
            break;
          default:
            s[r[o]] === void 0 && (s[r[o]] = r[o + 1]);
            break;
        }
      return s;
    }),
    (t.writeCandidate = function (n) {
      const r = [];
      r.push(n.foundation);
      const s = n.component;
      (s === "rtp" ? r.push(1) : s === "rtcp" ? r.push(2) : r.push(s),
        r.push(n.protocol.toUpperCase()),
        r.push(n.priority),
        r.push(n.address || n.ip),
        r.push(n.port));
      const o = n.type;
      return (
        r.push("typ"),
        r.push(o),
        o !== "host" &&
          n.relatedAddress &&
          n.relatedPort !== void 0 &&
          (r.push("raddr"),
          r.push(n.relatedAddress),
          r.push("rport"),
          r.push(n.relatedPort)),
        n.tcpType &&
          n.protocol.toLowerCase() === "tcp" &&
          (r.push("tcptype"), r.push(n.tcpType)),
        (n.usernameFragment || n.ufrag) &&
          (r.push("ufrag"), r.push(n.usernameFragment || n.ufrag)),
        "candidate:" + r.join(" ")
      );
    }),
    (t.parseIceOptions = function (n) {
      return n.substring(14).split(" ");
    }),
    (t.parseRtpMap = function (n) {
      let r = n.substring(9).split(" ");
      const s = { payloadType: parseInt(r.shift(), 10) };
      return (
        (r = r[0].split("/")),
        (s.name = r[0]),
        (s.clockRate = parseInt(r[1], 10)),
        (s.channels = r.length === 3 ? parseInt(r[2], 10) : 1),
        (s.numChannels = s.channels),
        s
      );
    }),
    (t.writeRtpMap = function (n) {
      let r = n.payloadType;
      n.preferredPayloadType !== void 0 && (r = n.preferredPayloadType);
      const s = n.channels || n.numChannels || 1;
      return (
        "a=rtpmap:" +
        r +
        " " +
        n.name +
        "/" +
        n.clockRate +
        (s !== 1 ? "/" + s : "") +
        `\r
`
      );
    }),
    (t.parseExtmap = function (n) {
      const r = n.substring(9).split(" ");
      return {
        id: parseInt(r[0], 10),
        direction: r[0].indexOf("/") > 0 ? r[0].split("/")[1] : "sendrecv",
        uri: r[1],
        attributes: r.slice(2).join(" "),
      };
    }),
    (t.writeExtmap = function (n) {
      return (
        "a=extmap:" +
        (n.id || n.preferredId) +
        (n.direction && n.direction !== "sendrecv" ? "/" + n.direction : "") +
        " " +
        n.uri +
        (n.attributes ? " " + n.attributes : "") +
        `\r
`
      );
    }),
    (t.parseFmtp = function (n) {
      const r = {};
      let s;
      const o = n.substring(n.indexOf(" ") + 1).split(";");
      for (let i = 0; i < o.length; i++)
        ((s = o[i].trim().split("=")), (r[s[0].trim()] = s[1]));
      return r;
    }),
    (t.writeFmtp = function (n) {
      let r = "",
        s = n.payloadType;
      if (
        (n.preferredPayloadType !== void 0 && (s = n.preferredPayloadType),
        n.parameters && Object.keys(n.parameters).length)
      ) {
        const o = [];
        (Object.keys(n.parameters).forEach((i) => {
          n.parameters[i] !== void 0
            ? o.push(i + "=" + n.parameters[i])
            : o.push(i);
        }),
          (r +=
            "a=fmtp:" +
            s +
            " " +
            o.join(";") +
            `\r
`));
      }
      return r;
    }),
    (t.parseRtcpFb = function (n) {
      const r = n.substring(n.indexOf(" ") + 1).split(" ");
      return { type: r.shift(), parameter: r.join(" ") };
    }),
    (t.writeRtcpFb = function (n) {
      let r = "",
        s = n.payloadType;
      return (
        n.preferredPayloadType !== void 0 && (s = n.preferredPayloadType),
        n.rtcpFeedback &&
          n.rtcpFeedback.length &&
          n.rtcpFeedback.forEach((o) => {
            r +=
              "a=rtcp-fb:" +
              s +
              " " +
              o.type +
              (o.parameter && o.parameter.length ? " " + o.parameter : "") +
              `\r
`;
          }),
        r
      );
    }),
    (t.parseSsrcMedia = function (n) {
      const r = n.indexOf(" "),
        s = { ssrc: parseInt(n.substring(7, r), 10) },
        o = n.indexOf(":", r);
      return (
        o > -1
          ? ((s.attribute = n.substring(r + 1, o)),
            (s.value = n.substring(o + 1)))
          : (s.attribute = n.substring(r + 1)),
        s
      );
    }),
    (t.parseSsrcGroup = function (n) {
      const r = n.substring(13).split(" ");
      return { semantics: r.shift(), ssrcs: r.map((s) => parseInt(s, 10)) };
    }),
    (t.getMid = function (n) {
      const r = t.matchPrefix(n, "a=mid:")[0];
      if (r) return r.substring(6);
    }),
    (t.parseFingerprint = function (n) {
      const r = n.substring(14).split(" ");
      return { algorithm: r[0].toLowerCase(), value: r[1].toUpperCase() };
    }),
    (t.getDtlsParameters = function (n, r) {
      return {
        role: "auto",
        fingerprints: t
          .matchPrefix(n + r, "a=fingerprint:")
          .map(t.parseFingerprint),
      };
    }),
    (t.writeDtlsParameters = function (n, r) {
      let s =
        "a=setup:" +
        r +
        `\r
`;
      return (
        n.fingerprints.forEach((o) => {
          s +=
            "a=fingerprint:" +
            o.algorithm +
            " " +
            o.value +
            `\r
`;
        }),
        s
      );
    }),
    (t.parseCryptoLine = function (n) {
      const r = n.substring(9).split(" ");
      return {
        tag: parseInt(r[0], 10),
        cryptoSuite: r[1],
        keyParams: r[2],
        sessionParams: r.slice(3),
      };
    }),
    (t.writeCryptoLine = function (n) {
      return (
        "a=crypto:" +
        n.tag +
        " " +
        n.cryptoSuite +
        " " +
        (typeof n.keyParams == "object"
          ? t.writeCryptoKeyParams(n.keyParams)
          : n.keyParams) +
        (n.sessionParams ? " " + n.sessionParams.join(" ") : "") +
        `\r
`
      );
    }),
    (t.parseCryptoKeyParams = function (n) {
      if (n.indexOf("inline:") !== 0) return null;
      const r = n.substring(7).split("|");
      return {
        keyMethod: "inline",
        keySalt: r[0],
        lifeTime: r[1],
        mkiValue: r[2] ? r[2].split(":")[0] : void 0,
        mkiLength: r[2] ? r[2].split(":")[1] : void 0,
      };
    }),
    (t.writeCryptoKeyParams = function (n) {
      return (
        n.keyMethod +
        ":" +
        n.keySalt +
        (n.lifeTime ? "|" + n.lifeTime : "") +
        (n.mkiValue && n.mkiLength ? "|" + n.mkiValue + ":" + n.mkiLength : "")
      );
    }),
    (t.getCryptoParameters = function (n, r) {
      return t.matchPrefix(n + r, "a=crypto:").map(t.parseCryptoLine);
    }),
    (t.getIceParameters = function (n, r) {
      const s = t.matchPrefix(n + r, "a=ice-ufrag:")[0],
        o = t.matchPrefix(n + r, "a=ice-pwd:")[0];
      return s && o
        ? { usernameFragment: s.substring(12), password: o.substring(10) }
        : null;
    }),
    (t.writeIceParameters = function (n) {
      let r =
        "a=ice-ufrag:" +
        n.usernameFragment +
        `\r
a=ice-pwd:` +
        n.password +
        `\r
`;
      return (
        n.iceLite &&
          (r += `a=ice-lite\r
`),
        r
      );
    }),
    (t.parseRtpParameters = function (n) {
      const r = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: [],
          rtcp: [],
        },
        o = t.splitLines(n)[0].split(" ");
      r.profile = o[2];
      for (let l = 3; l < o.length; l++) {
        const c = o[l],
          u = t.matchPrefix(n, "a=rtpmap:" + c + " ")[0];
        if (u) {
          const d = t.parseRtpMap(u),
            f = t.matchPrefix(n, "a=fmtp:" + c + " ");
          switch (
            ((d.parameters = f.length ? t.parseFmtp(f[0]) : {}),
            (d.rtcpFeedback = t
              .matchPrefix(n, "a=rtcp-fb:" + c + " ")
              .map(t.parseRtcpFb)),
            r.codecs.push(d),
            d.name.toUpperCase())
          ) {
            case "RED":
            case "ULPFEC":
              r.fecMechanisms.push(d.name.toUpperCase());
              break;
          }
        }
      }
      t.matchPrefix(n, "a=extmap:").forEach((l) => {
        r.headerExtensions.push(t.parseExtmap(l));
      });
      const i = t.matchPrefix(n, "a=rtcp-fb:* ").map(t.parseRtcpFb);
      return (
        r.codecs.forEach((l) => {
          i.forEach((c) => {
            l.rtcpFeedback.find(
              (d) => d.type === c.type && d.parameter === c.parameter,
            ) || l.rtcpFeedback.push(c);
          });
        }),
        r
      );
    }),
    (t.writeRtpDescription = function (n, r) {
      let s = "";
      ((s += "m=" + n + " "),
        (s += r.codecs.length > 0 ? "9" : "0"),
        (s += " " + (r.profile || "UDP/TLS/RTP/SAVPF") + " "),
        (s +=
          r.codecs
            .map((i) =>
              i.preferredPayloadType !== void 0
                ? i.preferredPayloadType
                : i.payloadType,
            )
            .join(" ") +
          `\r
`),
        (s += `c=IN IP4 0.0.0.0\r
`),
        (s += `a=rtcp:9 IN IP4 0.0.0.0\r
`),
        r.codecs.forEach((i) => {
          ((s += t.writeRtpMap(i)),
            (s += t.writeFmtp(i)),
            (s += t.writeRtcpFb(i)));
        }));
      let o = 0;
      return (
        r.codecs.forEach((i) => {
          i.maxptime > o && (o = i.maxptime);
        }),
        o > 0 &&
          (s +=
            "a=maxptime:" +
            o +
            `\r
`),
        r.headerExtensions &&
          r.headerExtensions.forEach((i) => {
            s += t.writeExtmap(i);
          }),
        s
      );
    }),
    (t.parseRtpEncodingParameters = function (n) {
      const r = [],
        s = t.parseRtpParameters(n),
        o = s.fecMechanisms.indexOf("RED") !== -1,
        i = s.fecMechanisms.indexOf("ULPFEC") !== -1,
        l = t
          .matchPrefix(n, "a=ssrc:")
          .map((p) => t.parseSsrcMedia(p))
          .filter((p) => p.attribute === "cname"),
        c = l.length > 0 && l[0].ssrc;
      let u;
      const d = t.matchPrefix(n, "a=ssrc-group:FID").map((p) =>
        p
          .substring(17)
          .split(" ")
          .map((w) => parseInt(w, 10)),
      );
      (d.length > 0 && d[0].length > 1 && d[0][0] === c && (u = d[0][1]),
        s.codecs.forEach((p) => {
          if (p.name.toUpperCase() === "RTX" && p.parameters.apt) {
            let v = {
              ssrc: c,
              codecPayloadType: parseInt(p.parameters.apt, 10),
            };
            (c && u && (v.rtx = { ssrc: u }),
              r.push(v),
              o &&
                ((v = JSON.parse(JSON.stringify(v))),
                (v.fec = { ssrc: c, mechanism: i ? "red+ulpfec" : "red" }),
                r.push(v)));
          }
        }),
        r.length === 0 && c && r.push({ ssrc: c }));
      let f = t.matchPrefix(n, "b=");
      return (
        f.length &&
          (f[0].indexOf("b=TIAS:") === 0
            ? (f = parseInt(f[0].substring(7), 10))
            : f[0].indexOf("b=AS:") === 0
              ? (f = parseInt(f[0].substring(5), 10) * 1e3 * 0.95 - 50 * 40 * 8)
              : (f = void 0),
          r.forEach((p) => {
            p.maxBitrate = f;
          })),
        r
      );
    }),
    (t.parseRtcpParameters = function (n) {
      const r = {},
        s = t
          .matchPrefix(n, "a=ssrc:")
          .map((l) => t.parseSsrcMedia(l))
          .filter((l) => l.attribute === "cname")[0];
      s && ((r.cname = s.value), (r.ssrc = s.ssrc));
      const o = t.matchPrefix(n, "a=rtcp-rsize");
      ((r.reducedSize = o.length > 0), (r.compound = o.length === 0));
      const i = t.matchPrefix(n, "a=rtcp-mux");
      return ((r.mux = i.length > 0), r);
    }),
    (t.writeRtcpParameters = function (n) {
      let r = "";
      return (
        n.reducedSize &&
          (r += `a=rtcp-rsize\r
`),
        n.mux &&
          (r += `a=rtcp-mux\r
`),
        n.ssrc !== void 0 &&
          n.cname &&
          (r +=
            "a=ssrc:" +
            n.ssrc +
            " cname:" +
            n.cname +
            `\r
`),
        r
      );
    }),
    (t.parseMsid = function (n) {
      let r;
      const s = t.matchPrefix(n, "a=msid:");
      if (s.length === 1)
        return (
          (r = s[0].substring(7).split(" ")),
          { stream: r[0], track: r[1] }
        );
      const o = t
        .matchPrefix(n, "a=ssrc:")
        .map((i) => t.parseSsrcMedia(i))
        .filter((i) => i.attribute === "msid");
      if (o.length > 0)
        return ((r = o[0].value.split(" ")), { stream: r[0], track: r[1] });
    }),
    (t.parseSctpDescription = function (n) {
      const r = t.parseMLine(n),
        s = t.matchPrefix(n, "a=max-message-size:");
      let o;
      (s.length > 0 && (o = parseInt(s[0].substring(19), 10)),
        isNaN(o) && (o = 65536));
      const i = t.matchPrefix(n, "a=sctp-port:");
      if (i.length > 0)
        return {
          port: parseInt(i[0].substring(12), 10),
          protocol: r.fmt,
          maxMessageSize: o,
        };
      const l = t.matchPrefix(n, "a=sctpmap:");
      if (l.length > 0) {
        const c = l[0].substring(10).split(" ");
        return { port: parseInt(c[0], 10), protocol: c[1], maxMessageSize: o };
      }
    }),
    (t.writeSctpDescription = function (n, r) {
      let s = [];
      return (
        n.protocol !== "DTLS/SCTP"
          ? (s = [
              "m=" +
                n.kind +
                " 9 " +
                n.protocol +
                " " +
                r.protocol +
                `\r
`,
              `c=IN IP4 0.0.0.0\r
`,
              "a=sctp-port:" +
                r.port +
                `\r
`,
            ])
          : (s = [
              "m=" +
                n.kind +
                " 9 " +
                n.protocol +
                " " +
                r.port +
                `\r
`,
              `c=IN IP4 0.0.0.0\r
`,
              "a=sctpmap:" +
                r.port +
                " " +
                r.protocol +
                ` 65535\r
`,
            ]),
        r.maxMessageSize !== void 0 &&
          s.push(
            "a=max-message-size:" +
              r.maxMessageSize +
              `\r
`,
          ),
        s.join("")
      );
    }),
    (t.generateSessionId = function () {
      return Math.random().toString().substr(2, 22);
    }),
    (t.writeSessionBoilerplate = function (n, r, s) {
      let o;
      const i = r !== void 0 ? r : 2;
      return (
        n ? (o = n) : (o = t.generateSessionId()),
        `v=0\r
o=` +
          (s || "thisisadapterortc") +
          " " +
          o +
          " " +
          i +
          ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
      );
    }),
    (t.getDirection = function (n, r) {
      const s = t.splitLines(n);
      for (let o = 0; o < s.length; o++)
        switch (s[o]) {
          case "a=sendrecv":
          case "a=sendonly":
          case "a=recvonly":
          case "a=inactive":
            return s[o].substring(2);
        }
      return r ? t.getDirection(r) : "sendrecv";
    }),
    (t.getKind = function (n) {
      return t.splitLines(n)[0].split(" ")[0].substring(2);
    }),
    (t.isRejected = function (n) {
      return n.split(" ", 2)[1] === "0";
    }),
    (t.parseMLine = function (n) {
      const s = t.splitLines(n)[0].substring(2).split(" ");
      return {
        kind: s[0],
        port: parseInt(s[1], 10),
        protocol: s[2],
        fmt: s.slice(3).join(" "),
      };
    }),
    (t.parseOLine = function (n) {
      const s = t.matchPrefix(n, "o=")[0].substring(2).split(" ");
      return {
        username: s[0],
        sessionId: s[1],
        sessionVersion: parseInt(s[2], 10),
        netType: s[3],
        addressType: s[4],
        address: s[5],
      };
    }),
    (t.isValidSDP = function (n) {
      if (typeof n != "string" || n.length === 0) return !1;
      const r = t.splitLines(n);
      for (let s = 0; s < r.length; s++)
        if (r[s].length < 2 || r[s].charAt(1) !== "=") return !1;
      return !0;
    }),
    (e.exports = t));
})(vp);
var xp = vp.exports;
const er = xu(xp),
  Sg = eh({ __proto__: null, default: er }, [xp]);
function Ws(e) {
  if (
    !e.RTCIceCandidate ||
    (e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)
  )
    return;
  const t = e.RTCIceCandidate;
  ((e.RTCIceCandidate = function (r) {
    if (
      (typeof r == "object" &&
        r.candidate &&
        r.candidate.indexOf("a=") === 0 &&
        ((r = JSON.parse(JSON.stringify(r))),
        (r.candidate = r.candidate.substring(2))),
      r.candidate && r.candidate.length)
    ) {
      const s = new t(r),
        o = er.parseCandidate(r.candidate);
      for (const i in o) i in s || Object.defineProperty(s, i, { value: o[i] });
      return (
        (s.toJSON = function () {
          return {
            candidate: s.candidate,
            sdpMid: s.sdpMid,
            sdpMLineIndex: s.sdpMLineIndex,
            usernameFragment: s.usernameFragment,
          };
        }),
        s
      );
    }
    return new t(r);
  }),
    (e.RTCIceCandidate.prototype = t.prototype),
    Nn(
      e,
      "icecandidate",
      (n) => (
        n.candidate &&
          Object.defineProperty(n, "candidate", {
            value: new e.RTCIceCandidate(n.candidate),
            writable: "false",
          }),
        n
      ),
    ));
}
function _a(e) {
  !e.RTCIceCandidate ||
    (e.RTCIceCandidate && "relayProtocol" in e.RTCIceCandidate.prototype) ||
    Nn(e, "icecandidate", (t) => {
      if (t.candidate) {
        const n = er.parseCandidate(t.candidate.candidate);
        n.type === "relay" &&
          (t.candidate.relayProtocol = { 0: "tls", 1: "tcp", 2: "udp" }[
            n.priority >> 24
          ]);
      }
      return t;
    });
}
function qs(e, t) {
  if (!e.RTCPeerConnection) return;
  "sctp" in e.RTCPeerConnection.prototype ||
    Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
      get() {
        return typeof this._sctp > "u" ? null : this._sctp;
      },
    });
  const n = function (l) {
      if (!l || !l.sdp) return !1;
      const c = er.splitSections(l.sdp);
      return (
        c.shift(),
        c.some((u) => {
          const d = er.parseMLine(u);
          return (
            d && d.kind === "application" && d.protocol.indexOf("SCTP") !== -1
          );
        })
      );
    },
    r = function (l) {
      const c = l.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (c === null || c.length < 2) return -1;
      const u = parseInt(c[1], 10);
      return u !== u ? -1 : u;
    },
    s = function (l) {
      let c = 65536;
      return (
        t.browser === "firefox" &&
          (t.version < 57
            ? l === -1
              ? (c = 16384)
              : (c = 2147483637)
            : t.version < 60
              ? (c = t.version === 57 ? 65535 : 65536)
              : (c = 2147483637)),
        c
      );
    },
    o = function (l, c) {
      let u = 65536;
      t.browser === "firefox" && t.version === 57 && (u = 65535);
      const d = er.matchPrefix(l.sdp, "a=max-message-size:");
      return (
        d.length > 0
          ? (u = parseInt(d[0].substring(19), 10))
          : t.browser === "firefox" && c !== -1 && (u = 2147483637),
        u
      );
    },
    i = e.RTCPeerConnection.prototype.setRemoteDescription;
  e.RTCPeerConnection.prototype.setRemoteDescription = function () {
    if (((this._sctp = null), t.browser === "chrome" && t.version >= 76)) {
      const { sdpSemantics: c } = this.getConfiguration();
      c === "plan-b" &&
        Object.defineProperty(this, "sctp", {
          get() {
            return typeof this._sctp > "u" ? null : this._sctp;
          },
          enumerable: !0,
          configurable: !0,
        });
    }
    if (n(arguments[0])) {
      const c = r(arguments[0]),
        u = s(c),
        d = o(arguments[0], c);
      let f;
      u === 0 && d === 0
        ? (f = Number.POSITIVE_INFINITY)
        : u === 0 || d === 0
          ? (f = Math.max(u, d))
          : (f = Math.min(u, d));
      const p = {};
      (Object.defineProperty(p, "maxMessageSize", {
        get() {
          return f;
        },
      }),
        (this._sctp = p));
    }
    return i.apply(this, arguments);
  };
}
function Gs(e, t) {
  if (
    !(
      e.RTCPeerConnection &&
      "createDataChannel" in e.RTCPeerConnection.prototype
    ) ||
    (t.browser === "chrome" && t.version > 149) ||
    (t.browser === "firefox" && t.version > 60)
  )
    return;
  function n(s, o) {
    const i = s.send;
    s.send = function () {
      const c = arguments[0],
        u = c.length || c.size || c.byteLength;
      if (s.readyState === "open" && o.sctp && u > o.sctp.maxMessageSize)
        throw new TypeError(
          "Message too large (can send a maximum of " +
            o.sctp.maxMessageSize +
            " bytes)",
        );
      return i.apply(s, arguments);
    };
  }
  const r = e.RTCPeerConnection.prototype.createDataChannel;
  ((e.RTCPeerConnection.prototype.createDataChannel = function () {
    const o = r.apply(this, arguments);
    return (n(o, this), o);
  }),
    Nn(e, "datachannel", (s) => (n(s.channel, s.target), s)));
}
function ba(e) {
  if (
    !e.RTCPeerConnection ||
    "connectionState" in e.RTCPeerConnection.prototype
  )
    return;
  const t = e.RTCPeerConnection.prototype;
  (Object.defineProperty(t, "connectionState", {
    get() {
      return (
        { completed: "connected", checking: "connecting" }[
          this.iceConnectionState
        ] || this.iceConnectionState
      );
    },
    enumerable: !0,
    configurable: !0,
  }),
    Object.defineProperty(t, "onconnectionstatechange", {
      get() {
        return this._onconnectionstatechange || null;
      },
      set(n) {
        (this._onconnectionstatechange &&
          (this.removeEventListener(
            "connectionstatechange",
            this._onconnectionstatechange,
          ),
          delete this._onconnectionstatechange),
          n &&
            this.addEventListener(
              "connectionstatechange",
              (this._onconnectionstatechange = n),
            ));
      },
      enumerable: !0,
      configurable: !0,
    }),
    ["setLocalDescription", "setRemoteDescription"].forEach((n) => {
      const r = t[n];
      t[n] = function () {
        return (
          this._connectionstatechangepoly ||
            ((this._connectionstatechangepoly = (s) => {
              const o = s.target;
              if (o._lastConnectionState !== o.connectionState) {
                o._lastConnectionState = o.connectionState;
                const i = new Event("connectionstatechange", s);
                o.dispatchEvent(i);
              }
              return s;
            }),
            this.addEventListener(
              "iceconnectionstatechange",
              this._connectionstatechangepoly,
            )),
          r.apply(this, arguments)
        );
      };
    }));
}
function ja(e, t) {
  if (
    !e.RTCPeerConnection ||
    (t.browser === "chrome" && t.version >= 71) ||
    (t.browser === "safari" && t._safariVersion >= 13.1)
  )
    return;
  const n = e.RTCPeerConnection.prototype.setRemoteDescription;
  e.RTCPeerConnection.prototype.setRemoteDescription = function (s) {
    if (
      s &&
      s.sdp &&
      s.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1
    ) {
      const o = s.sdp
        .split(
          `
`,
        )
        .filter((i) => i.trim() !== "a=extmap-allow-mixed").join(`
`);
      e.RTCSessionDescription && s instanceof e.RTCSessionDescription
        ? (arguments[0] = new e.RTCSessionDescription({ type: s.type, sdp: o }))
        : (s.sdp = o);
    }
    return n.apply(this, arguments);
  };
}
function Ks(e, t) {
  if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
  const n = e.RTCPeerConnection.prototype.addIceCandidate;
  !n ||
    n.length === 0 ||
    (e.RTCPeerConnection.prototype.addIceCandidate = function () {
      return arguments[0]
        ? ((t.browser === "chrome" && t.version < 78) ||
            (t.browser === "firefox" && t.version < 68) ||
            t.browser === "safari") &&
          arguments[0] &&
          arguments[0].candidate === ""
          ? Promise.resolve()
          : n.apply(this, arguments)
        : (arguments[1] && arguments[1].apply(null), Promise.resolve());
    });
}
function Js(e, t) {
  if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return;
  const n = e.RTCPeerConnection.prototype.setLocalDescription;
  !n ||
    n.length === 0 ||
    (e.RTCPeerConnection.prototype.setLocalDescription = function () {
      let s = arguments[0] || {};
      if (typeof s != "object" || (s.type && s.sdp))
        return n.apply(this, arguments);
      if (((s = { type: s.type, sdp: s.sdp }), !s.type))
        switch (this.signalingState) {
          case "stable":
          case "have-local-offer":
          case "have-remote-pranswer":
            s.type = "offer";
            break;
          default:
            s.type = "answer";
            break;
        }
      return s.sdp || (s.type !== "offer" && s.type !== "answer")
        ? n.apply(this, [s])
        : (s.type === "offer" ? this.createOffer : this.createAnswer)
            .apply(this)
            .then((i) => n.apply(this, [i]));
    });
}
const _g = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      removeExtmapAllowMixed: ja,
      shimAddIceCandidateNullOrEmpty: Ks,
      shimConnectionState: ba,
      shimMaxMessageSize: qs,
      shimParameterlessSetLocalDescription: Js,
      shimRTCIceCandidate: Ws,
      shimRTCIceCandidateRelayProtocol: _a,
      shimSendThrowTypeError: Gs,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);
function bg(
  { window: e } = {},
  t = { shimChrome: !0, shimFirefox: !0, shimSafari: !0 },
) {
  const n = Rl,
    r = kg(e),
    s = {
      browserDetails: r,
      commonShim: _g,
      extractVersion: Tr,
      disableLog: xg,
      disableWarnings: wg,
      sdp: Sg,
    };
  switch (r.browser) {
    case "chrome":
      if (!tu || !Ca || !t.shimChrome)
        return (n("Chrome shim is not included in this adapter release."), s);
      if (r.version === null)
        return (n("Chrome shim can not determine version, not shimming."), s);
      (n("adapter.js shimming chrome."),
        (s.browserShim = tu),
        Ks(e, r),
        Js(e),
        Vf(e, r),
        Hf(e),
        Ca(e, r),
        Wf(e, r),
        Jf(e, r),
        qf(e),
        Gf(e, r),
        Yf(e, r),
        Ws(e),
        _a(e),
        ba(e),
        qs(e, r),
        Gs(e, r),
        ja(e, r));
      break;
    case "firefox":
      if (!nu || !Sa || !t.shimFirefox)
        return (n("Firefox shim is not included in this adapter release."), s);
      (n("adapter.js shimming firefox."),
        (s.browserShim = nu),
        Ks(e, r),
        Js(e),
        Xf(e, r),
        Sa(e, r),
        ep(e, r),
        Zf(e),
        rp(e),
        tp(e),
        np(e),
        sp(e),
        op(e),
        ip(e),
        ap(e),
        lp(e),
        Ws(e),
        ba(e),
        qs(e, r),
        Gs(e, r));
      break;
    case "safari":
      if (!ru || !t.shimSafari)
        return (n("Safari shim is not included in this adapter release."), s);
      (n("adapter.js shimming safari."),
        (s.browserShim = ru),
        Ks(e, r),
        Js(e),
        hp(e),
        gp(e),
        dp(e),
        cp(e),
        up(e),
        mp(e),
        fp(e),
        yp(e),
        Ws(e),
        _a(e),
        qs(e, r),
        Gs(e, r),
        ja(e, r));
      break;
    default:
      n("Unsupported browser!");
      break;
  }
  return s;
}
const su = bg({ window: typeof window > "u" ? void 0 : window });
function Mn(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
class wp {
  constructor() {
    ((this.chunkedMTU = 16300),
      (this._dataCount = 1),
      (this.chunk = (t) => {
        const n = [],
          r = t.byteLength,
          s = Math.ceil(r / this.chunkedMTU);
        let o = 0,
          i = 0;
        for (; i < r; ) {
          const l = Math.min(r, i + this.chunkedMTU),
            c = t.slice(i, l),
            u = { __peerData: this._dataCount, n: o, data: c, total: s };
          (n.push(u), (i = l), o++);
        }
        return (this._dataCount++, n);
      }));
  }
}
function jg(e) {
  let t = 0;
  for (const s of e) t += s.byteLength;
  const n = new Uint8Array(t);
  let r = 0;
  for (const s of e) (n.set(s, r), (r += s.byteLength));
  return n;
}
const Ci = su.default || su,
  Sr = new (class {
    isWebRTCSupported() {
      return typeof RTCPeerConnection < "u";
    }
    isBrowserSupported() {
      const e = this.getBrowser(),
        t = this.getVersion();
      return this.supportedBrowsers.includes(e)
        ? e === "chrome"
          ? t >= this.minChromeVersion
          : e === "firefox"
            ? t >= this.minFirefoxVersion
            : e === "safari"
              ? !this.isIOS && t >= this.minSafariVersion
              : !1
        : !1;
    }
    getBrowser() {
      return Ci.browserDetails.browser;
    }
    getVersion() {
      return Ci.browserDetails.version || 0;
    }
    isUnifiedPlanSupported() {
      const e = this.getBrowser(),
        t = Ci.browserDetails.version || 0;
      if (e === "chrome" && t < this.minChromeVersion) return !1;
      if (e === "firefox" && t >= this.minFirefoxVersion) return !0;
      if (
        !window.RTCRtpTransceiver ||
        !("currentDirection" in RTCRtpTransceiver.prototype)
      )
        return !1;
      let n,
        r = !1;
      try {
        ((n = new RTCPeerConnection()), n.addTransceiver("audio"), (r = !0));
      } catch {
      } finally {
        n && n.close();
      }
      return r;
    }
    toString() {
      return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
    }
    constructor() {
      ((this.isIOS =
        typeof navigator < "u"
          ? ["iPad", "iPhone", "iPod"].includes(navigator.platform)
          : !1),
        (this.supportedBrowsers = ["firefox", "chrome", "safari"]),
        (this.minFirefoxVersion = 59),
        (this.minChromeVersion = 72),
        (this.minSafariVersion = 605));
    }
  })(),
  Eg = (e) => !e || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e),
  kp = () => Math.random().toString(36).slice(2),
  ou = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" },
      {
        urls: [
          "turn:eu-0.turn.peerjs.com:3478",
          "turn:us-0.turn.peerjs.com:3478",
        ],
        username: "peerjs",
        credential: "peerjsp",
      },
    ],
    sdpSemantics: "unified-plan",
  };
class Pg extends wp {
  noop() {}
  blobToArrayBuffer(t, n) {
    const r = new FileReader();
    return (
      (r.onload = function (s) {
        s.target && n(s.target.result);
      }),
      r.readAsArrayBuffer(t),
      r
    );
  }
  binaryStringToArrayBuffer(t) {
    const n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r) & 255;
    return n.buffer;
  }
  isSecure() {
    return location.protocol === "https:";
  }
  constructor(...t) {
    (super(...t),
      (this.CLOUD_HOST = "0.peerjs.com"),
      (this.CLOUD_PORT = 443),
      (this.chunkedBrowsers = { Chrome: 1, chrome: 1 }),
      (this.defaultConfig = ou),
      (this.browser = Sr.getBrowser()),
      (this.browserVersion = Sr.getVersion()),
      (this.pack = $f),
      (this.unpack = zf),
      (this.supports = (function () {
        const n = {
          browser: Sr.isBrowserSupported(),
          webRTC: Sr.isWebRTCSupported(),
          audioVideo: !1,
          data: !1,
          binaryBlob: !1,
          reliable: !1,
        };
        if (!n.webRTC) return n;
        let r;
        try {
          ((r = new RTCPeerConnection(ou)), (n.audioVideo = !0));
          let s;
          try {
            ((s = r.createDataChannel("_PEERJSTEST", { ordered: !0 })),
              (n.data = !0),
              (n.reliable = !!s.ordered));
            try {
              ((s.binaryType = "blob"), (n.binaryBlob = !Sr.isIOS));
            } catch {}
          } catch {
          } finally {
            s && s.close();
          }
        } catch {
        } finally {
          r && r.close();
        }
        return n;
      })()),
      (this.validateId = Eg),
      (this.randomToken = kp));
  }
}
const qe = new Pg(),
  Tg = "PeerJS: ";
class Rg {
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    this._logLevel = t;
  }
  log(...t) {
    this._logLevel >= 3 && this._print(3, ...t);
  }
  warn(...t) {
    this._logLevel >= 2 && this._print(2, ...t);
  }
  error(...t) {
    this._logLevel >= 1 && this._print(1, ...t);
  }
  setLogFunction(t) {
    this._print = t;
  }
  _print(t, ...n) {
    const r = [Tg, ...n];
    for (const s in r)
      r[s] instanceof Error && (r[s] = "(" + r[s].name + ") " + r[s].message);
    t >= 3
      ? console.log(...r)
      : t >= 2
        ? console.warn("WARNING", ...r)
        : t >= 1 && console.error("ERROR", ...r);
  }
  constructor() {
    this._logLevel = 0;
  }
}
var Q = new Rg(),
  Ml = {},
  Ng = Object.prototype.hasOwnProperty,
  Ve = "~";
function ss() {}
Object.create &&
  ((ss.prototype = Object.create(null)), new ss().__proto__ || (Ve = !1));
function Mg(e, t, n) {
  ((this.fn = e), (this.context = t), (this.once = n || !1));
}
function Cp(e, t, n, r, s) {
  if (typeof n != "function")
    throw new TypeError("The listener must be a function");
  var o = new Mg(n, r || e, s),
    i = Ve ? Ve + t : t;
  return (
    e._events[i]
      ? e._events[i].fn
        ? (e._events[i] = [e._events[i], o])
        : e._events[i].push(o)
      : ((e._events[i] = o), e._eventsCount++),
    e
  );
}
function Ys(e, t) {
  --e._eventsCount === 0 ? (e._events = new ss()) : delete e._events[t];
}
function Be() {
  ((this._events = new ss()), (this._eventsCount = 0));
}
Be.prototype.eventNames = function () {
  var t = [],
    n,
    r;
  if (this._eventsCount === 0) return t;
  for (r in (n = this._events)) Ng.call(n, r) && t.push(Ve ? r.slice(1) : r);
  return Object.getOwnPropertySymbols
    ? t.concat(Object.getOwnPropertySymbols(n))
    : t;
};
Be.prototype.listeners = function (t) {
  var n = Ve ? Ve + t : t,
    r = this._events[n];
  if (!r) return [];
  if (r.fn) return [r.fn];
  for (var s = 0, o = r.length, i = new Array(o); s < o; s++) i[s] = r[s].fn;
  return i;
};
Be.prototype.listenerCount = function (t) {
  var n = Ve ? Ve + t : t,
    r = this._events[n];
  return r ? (r.fn ? 1 : r.length) : 0;
};
Be.prototype.emit = function (t, n, r, s, o, i) {
  var l = Ve ? Ve + t : t;
  if (!this._events[l]) return !1;
  var c = this._events[l],
    u = arguments.length,
    d,
    f;
  if (c.fn) {
    switch ((c.once && this.removeListener(t, c.fn, void 0, !0), u)) {
      case 1:
        return (c.fn.call(c.context), !0);
      case 2:
        return (c.fn.call(c.context, n), !0);
      case 3:
        return (c.fn.call(c.context, n, r), !0);
      case 4:
        return (c.fn.call(c.context, n, r, s), !0);
      case 5:
        return (c.fn.call(c.context, n, r, s, o), !0);
      case 6:
        return (c.fn.call(c.context, n, r, s, o, i), !0);
    }
    for (f = 1, d = new Array(u - 1); f < u; f++) d[f - 1] = arguments[f];
    c.fn.apply(c.context, d);
  } else {
    var p = c.length,
      v;
    for (f = 0; f < p; f++)
      switch ((c[f].once && this.removeListener(t, c[f].fn, void 0, !0), u)) {
        case 1:
          c[f].fn.call(c[f].context);
          break;
        case 2:
          c[f].fn.call(c[f].context, n);
          break;
        case 3:
          c[f].fn.call(c[f].context, n, r);
          break;
        case 4:
          c[f].fn.call(c[f].context, n, r, s);
          break;
        default:
          if (!d)
            for (v = 1, d = new Array(u - 1); v < u; v++)
              d[v - 1] = arguments[v];
          c[f].fn.apply(c[f].context, d);
      }
  }
  return !0;
};
Be.prototype.on = function (t, n, r) {
  return Cp(this, t, n, r, !1);
};
Be.prototype.once = function (t, n, r) {
  return Cp(this, t, n, r, !0);
};
Be.prototype.removeListener = function (t, n, r, s) {
  var o = Ve ? Ve + t : t;
  if (!this._events[o]) return this;
  if (!n) return (Ys(this, o), this);
  var i = this._events[o];
  if (i.fn)
    i.fn === n && (!s || i.once) && (!r || i.context === r) && Ys(this, o);
  else {
    for (var l = 0, c = [], u = i.length; l < u; l++)
      (i[l].fn !== n || (s && !i[l].once) || (r && i[l].context !== r)) &&
        c.push(i[l]);
    c.length ? (this._events[o] = c.length === 1 ? c[0] : c) : Ys(this, o);
  }
  return this;
};
Be.prototype.removeAllListeners = function (t) {
  var n;
  return (
    t
      ? ((n = Ve ? Ve + t : t), this._events[n] && Ys(this, n))
      : ((this._events = new ss()), (this._eventsCount = 0)),
    this
  );
};
Be.prototype.off = Be.prototype.removeListener;
Be.prototype.addListener = Be.prototype.on;
Be.prefixed = Ve;
Be.EventEmitter = Be;
Ml = Be;
var In = {};
Mn(In, "ConnectionType", () => ln);
Mn(In, "PeerErrorType", () => _e);
Mn(In, "BaseConnectionErrorType", () => Ea);
Mn(In, "DataConnectionErrorType", () => Il);
Mn(In, "SerializationType", () => Qo);
Mn(In, "SocketEventType", () => Xt);
Mn(In, "ServerMessageType", () => Oe);
var ln = (function (e) {
    return ((e.Data = "data"), (e.Media = "media"), e);
  })({}),
  _e = (function (e) {
    return (
      (e.BrowserIncompatible = "browser-incompatible"),
      (e.Disconnected = "disconnected"),
      (e.InvalidID = "invalid-id"),
      (e.InvalidKey = "invalid-key"),
      (e.Network = "network"),
      (e.PeerUnavailable = "peer-unavailable"),
      (e.SslUnavailable = "ssl-unavailable"),
      (e.ServerError = "server-error"),
      (e.SocketError = "socket-error"),
      (e.SocketClosed = "socket-closed"),
      (e.UnavailableID = "unavailable-id"),
      (e.WebRTC = "webrtc"),
      e
    );
  })({}),
  Ea = (function (e) {
    return (
      (e.NegotiationFailed = "negotiation-failed"),
      (e.ConnectionClosed = "connection-closed"),
      e
    );
  })({}),
  Il = (function (e) {
    return (
      (e.NotOpenYet = "not-open-yet"),
      (e.MessageToBig = "message-too-big"),
      e
    );
  })({}),
  Qo = (function (e) {
    return (
      (e.Binary = "binary"),
      (e.BinaryUTF8 = "binary-utf8"),
      (e.JSON = "json"),
      (e.None = "raw"),
      e
    );
  })({}),
  Xt = (function (e) {
    return (
      (e.Message = "message"),
      (e.Disconnected = "disconnected"),
      (e.Error = "error"),
      (e.Close = "close"),
      e
    );
  })({}),
  Oe = (function (e) {
    return (
      (e.Heartbeat = "HEARTBEAT"),
      (e.Candidate = "CANDIDATE"),
      (e.Offer = "OFFER"),
      (e.Answer = "ANSWER"),
      (e.Open = "OPEN"),
      (e.Error = "ERROR"),
      (e.IdTaken = "ID-TAKEN"),
      (e.InvalidKey = "INVALID-KEY"),
      (e.Leave = "LEAVE"),
      (e.Expire = "EXPIRE"),
      e
    );
  })({});
const Sp = "1.5.5";
class Ig extends Ml.EventEmitter {
  constructor(t, n, r, s, o, i = 5e3) {
    (super(),
      (this.pingInterval = i),
      (this._disconnected = !0),
      (this._messagesQueue = []));
    const l = t ? "wss://" : "ws://";
    this._baseUrl = l + n + ":" + r + s + "peerjs?key=" + o;
  }
  start(t, n) {
    this._id = t;
    const r = `${this._baseUrl}&id=${t}&token=${n}`;
    this._socket ||
      !this._disconnected ||
      ((this._socket = new WebSocket(r + "&version=" + Sp)),
      (this._disconnected = !1),
      (this._socket.onmessage = (s) => {
        let o;
        try {
          ((o = JSON.parse(s.data)), Q.log("Server message received:", o));
        } catch {
          Q.log("Invalid server message", s.data);
          return;
        }
        this.emit(Xt.Message, o);
      }),
      (this._socket.onclose = (s) => {
        this._disconnected ||
          (Q.log("Socket closed.", s),
          this._cleanup(),
          (this._disconnected = !0),
          this.emit(Xt.Disconnected));
      }),
      (this._socket.onopen = () => {
        this._disconnected ||
          (this._sendQueuedMessages(),
          Q.log("Socket open"),
          this._scheduleHeartbeat());
      }));
  }
  _scheduleHeartbeat() {
    this._wsPingTimer = setTimeout(() => {
      this._sendHeartbeat();
    }, this.pingInterval);
  }
  _sendHeartbeat() {
    if (!this._wsOpen()) {
      Q.log("Cannot send heartbeat, because socket closed");
      return;
    }
    const t = JSON.stringify({ type: Oe.Heartbeat });
    (this._socket.send(t), this._scheduleHeartbeat());
  }
  _wsOpen() {
    return !!this._socket && this._socket.readyState === 1;
  }
  _sendQueuedMessages() {
    const t = [...this._messagesQueue];
    this._messagesQueue = [];
    for (const n of t) this.send(n);
  }
  send(t) {
    if (this._disconnected) return;
    if (!this._id) {
      this._messagesQueue.push(t);
      return;
    }
    if (!t.type) {
      this.emit(Xt.Error, "Invalid message");
      return;
    }
    if (!this._wsOpen()) return;
    const n = JSON.stringify(t);
    this._socket.send(n);
  }
  close() {
    this._disconnected || (this._cleanup(), (this._disconnected = !0));
  }
  _cleanup() {
    (this._socket &&
      ((this._socket.onopen =
        this._socket.onmessage =
        this._socket.onclose =
          null),
      this._socket.close(),
      (this._socket = void 0)),
      clearTimeout(this._wsPingTimer));
  }
}
class _p {
  constructor(t) {
    this.connection = t;
  }
  startConnection(t) {
    const n = this._startPeerConnection();
    if (
      ((this.connection.peerConnection = n),
      this.connection.type === ln.Media &&
        t._stream &&
        this._addTracksToConnection(t._stream, n),
      t.originator)
    ) {
      const r = this.connection,
        s = { ordered: !!t.reliable },
        o = n.createDataChannel(r.label, s);
      (r._initializeDataChannel(o), this._makeOffer());
    } else this.handleSDP("OFFER", t.sdp);
  }
  _startPeerConnection() {
    Q.log("Creating RTCPeerConnection.");
    const t = new RTCPeerConnection(this.connection.provider.options.config);
    return (this._setupListeners(t), t);
  }
  _setupListeners(t) {
    const n = this.connection.peer,
      r = this.connection.connectionId,
      s = this.connection.type,
      o = this.connection.provider;
    (Q.log("Listening for ICE candidates."),
      (t.onicecandidate = (i) => {
        !i.candidate ||
          !i.candidate.candidate ||
          (Q.log(`Received ICE candidates for ${n}:`, i.candidate),
          o.socket.send({
            type: Oe.Candidate,
            payload: { candidate: i.candidate, type: s, connectionId: r },
            dst: n,
          }));
      }),
      (t.oniceconnectionstatechange = () => {
        switch (t.iceConnectionState) {
          case "failed":
            (Q.log("iceConnectionState is failed, closing connections to " + n),
              this.connection.emitError(
                Ea.NegotiationFailed,
                "Negotiation of connection to " + n + " failed.",
              ),
              this.connection.close());
            break;
          case "closed":
            (Q.log("iceConnectionState is closed, closing connections to " + n),
              this.connection.emitError(
                Ea.ConnectionClosed,
                "Connection to " + n + " closed.",
              ),
              this.connection.close());
            break;
          case "disconnected":
            Q.log(
              "iceConnectionState changed to disconnected on the connection with " +
                n,
            );
            break;
          case "completed":
            t.onicecandidate = () => {};
            break;
        }
        this.connection.emit("iceStateChanged", t.iceConnectionState);
      }),
      Q.log("Listening for data channel"),
      (t.ondatachannel = (i) => {
        Q.log("Received data channel");
        const l = i.channel;
        o.getConnection(n, r)._initializeDataChannel(l);
      }),
      Q.log("Listening for remote stream"),
      (t.ontrack = (i) => {
        Q.log("Received remote stream");
        const l = i.streams[0],
          c = o.getConnection(n, r);
        if (c.type === ln.Media) {
          const u = c;
          this._addStreamToMediaConnection(l, u);
        }
      }));
  }
  cleanup() {
    Q.log("Cleaning up PeerConnection to " + this.connection.peer);
    const t = this.connection.peerConnection;
    if (!t) return;
    ((this.connection.peerConnection = null),
      (t.onicecandidate =
        t.oniceconnectionstatechange =
        t.ondatachannel =
        t.ontrack =
          () => {}));
    const n = t.signalingState !== "closed";
    let r = !1;
    const s = this.connection.dataChannel;
    (s && (r = !!s.readyState && s.readyState !== "closed"),
      (n || r) && t.close());
  }
  async _makeOffer() {
    const t = this.connection.peerConnection,
      n = this.connection.provider;
    try {
      const r = await t.createOffer(this.connection.options.constraints);
      (Q.log("Created offer."),
        this.connection.options.sdpTransform &&
          typeof this.connection.options.sdpTransform == "function" &&
          (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp));
      try {
        (await t.setLocalDescription(r),
          Q.log("Set localDescription:", r, `for:${this.connection.peer}`));
        let s = {
          sdp: r,
          type: this.connection.type,
          connectionId: this.connection.connectionId,
          metadata: this.connection.metadata,
        };
        if (this.connection.type === ln.Data) {
          const o = this.connection;
          s = {
            ...s,
            label: o.label,
            reliable: o.reliable,
            serialization: o.serialization,
          };
        }
        n.socket.send({
          type: Oe.Offer,
          payload: s,
          dst: this.connection.peer,
        });
      } catch (s) {
        s !=
          "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer" &&
          (n.emitError(_e.WebRTC, s),
          Q.log("Failed to setLocalDescription, ", s));
      }
    } catch (r) {
      (n.emitError(_e.WebRTC, r), Q.log("Failed to createOffer, ", r));
    }
  }
  async _makeAnswer() {
    const t = this.connection.peerConnection,
      n = this.connection.provider;
    try {
      const r = await t.createAnswer();
      (Q.log("Created answer."),
        this.connection.options.sdpTransform &&
          typeof this.connection.options.sdpTransform == "function" &&
          (r.sdp = this.connection.options.sdpTransform(r.sdp) || r.sdp));
      try {
        (await t.setLocalDescription(r),
          Q.log("Set localDescription:", r, `for:${this.connection.peer}`),
          n.socket.send({
            type: Oe.Answer,
            payload: {
              sdp: r,
              type: this.connection.type,
              connectionId: this.connection.connectionId,
            },
            dst: this.connection.peer,
          }));
      } catch (s) {
        (n.emitError(_e.WebRTC, s),
          Q.log("Failed to setLocalDescription, ", s));
      }
    } catch (r) {
      (n.emitError(_e.WebRTC, r), Q.log("Failed to create answer, ", r));
    }
  }
  async handleSDP(t, n) {
    n = new RTCSessionDescription(n);
    const r = this.connection.peerConnection,
      s = this.connection.provider;
    Q.log("Setting remote description", n);
    const o = this;
    try {
      (await r.setRemoteDescription(n),
        Q.log(`Set remoteDescription:${t} for:${this.connection.peer}`),
        t === "OFFER" && (await o._makeAnswer()));
    } catch (i) {
      (s.emitError(_e.WebRTC, i), Q.log("Failed to setRemoteDescription, ", i));
    }
  }
  async handleCandidate(t) {
    Q.log("handleCandidate:", t);
    try {
      (await this.connection.peerConnection.addIceCandidate(t),
        Q.log(`Added ICE candidate for:${this.connection.peer}`));
    } catch (n) {
      (this.connection.provider.emitError(_e.WebRTC, n),
        Q.log("Failed to handleCandidate, ", n));
    }
  }
  _addTracksToConnection(t, n) {
    if (
      (Q.log(`add tracks from stream ${t.id} to peer connection`), !n.addTrack)
    )
      return Q.error(
        "Your browser does't support RTCPeerConnection#addTrack. Ignored.",
      );
    t.getTracks().forEach((r) => {
      n.addTrack(r, t);
    });
  }
  _addStreamToMediaConnection(t, n) {
    (Q.log(`add stream ${t.id} to media connection ${n.connectionId}`),
      n.addStream(t));
  }
}
class bp extends Ml.EventEmitter {
  emitError(t, n) {
    (Q.error("Error:", n), this.emit("error", new Ag(`${t}`, n)));
  }
}
class Ag extends Error {
  constructor(t, n) {
    (typeof n == "string" ? super(n) : (super(), Object.assign(this, n)),
      (this.type = t));
  }
}
class jp extends bp {
  get open() {
    return this._open;
  }
  constructor(t, n, r) {
    (super(),
      (this.peer = t),
      (this.provider = n),
      (this.options = r),
      (this._open = !1),
      (this.metadata = r.metadata));
  }
}
var Ta;
const zr = class zr extends jp {
  get type() {
    return ln.Media;
  }
  get localStream() {
    return this._localStream;
  }
  get remoteStream() {
    return this._remoteStream;
  }
  constructor(t, n, r) {
    (super(t, n, r),
      (this._localStream = this.options._stream),
      (this.connectionId =
        this.options.connectionId || zr.ID_PREFIX + qe.randomToken()),
      (this._negotiator = new _p(this)),
      this._localStream &&
        this._negotiator.startConnection({
          _stream: this._localStream,
          originator: !0,
        }));
  }
  _initializeDataChannel(t) {
    ((this.dataChannel = t),
      (this.dataChannel.onopen = () => {
        (Q.log(`DC#${this.connectionId} dc connection success`),
          this.emit("willCloseOnRemote"));
      }),
      (this.dataChannel.onclose = () => {
        (Q.log(`DC#${this.connectionId} dc closed for:`, this.peer),
          this.close());
      }));
  }
  addStream(t) {
    (Q.log("Receiving stream", t),
      (this._remoteStream = t),
      super.emit("stream", t));
  }
  handleMessage(t) {
    const n = t.type,
      r = t.payload;
    switch (t.type) {
      case Oe.Answer:
        (this._negotiator.handleSDP(n, r.sdp), (this._open = !0));
        break;
      case Oe.Candidate:
        this._negotiator.handleCandidate(r.candidate);
        break;
      default:
        Q.warn(`Unrecognized message type:${n} from peer:${this.peer}`);
        break;
    }
  }
  answer(t, n = {}) {
    if (this._localStream) {
      Q.warn(
        "Local stream already exists on this MediaConnection. Are you answering a call twice?",
      );
      return;
    }
    ((this._localStream = t),
      n && n.sdpTransform && (this.options.sdpTransform = n.sdpTransform),
      this._negotiator.startConnection({
        ...this.options._payload,
        _stream: t,
      }));
    const r = this.provider._getMessages(this.connectionId);
    for (const s of r) this.handleMessage(s);
    this._open = !0;
  }
  close() {
    (this._negotiator &&
      (this._negotiator.cleanup(), (this._negotiator = null)),
      (this._localStream = null),
      (this._remoteStream = null),
      this.provider &&
        (this.provider._removeConnection(this), (this.provider = null)),
      this.options && this.options._stream && (this.options._stream = null),
      this.open && ((this._open = !1), super.emit("close")));
  }
};
((Ta = new WeakMap()), hr(zr, Ta, (zr.ID_PREFIX = "mc_")));
let _o = zr;
class Lg {
  constructor(t) {
    this._options = t;
  }
  _buildRequest(t) {
    const n = this._options.secure ? "https" : "http",
      { host: r, port: s, path: o, key: i } = this._options,
      l = new URL(`${n}://${r}:${s}${o}${i}/${t}`);
    return (
      l.searchParams.set("ts", `${Date.now()}${Math.random()}`),
      l.searchParams.set("version", Sp),
      fetch(l.href, { referrerPolicy: this._options.referrerPolicy })
    );
  }
  async retrieveId() {
    try {
      const t = await this._buildRequest("id");
      if (t.status !== 200) throw new Error(`Error. Status:${t.status}`);
      return t.text();
    } catch (t) {
      Q.error("Error retrieving ID", t);
      let n = "";
      throw (
        this._options.path === "/" &&
          this._options.host !== qe.CLOUD_HOST &&
          (n =
            " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),
        new Error("Could not get an ID from the server." + n)
      );
    }
  }
  async listAllPeers() {
    try {
      const t = await this._buildRequest("peers");
      if (t.status !== 200) {
        if (t.status === 401) {
          let n = "";
          throw (
            this._options.host === qe.CLOUD_HOST
              ? (n =
                  "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.")
              : (n =
                  "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature."),
            new Error(
              "It doesn't look like you have permission to list peers IDs. " +
                n,
            )
          );
        }
        throw new Error(`Error. Status:${t.status}`);
      }
      return t.json();
    } catch (t) {
      throw (
        Q.error("Error retrieving list peers", t),
        new Error("Could not get list peers from the server." + t)
      );
    }
  }
}
var Ra, Na;
const yn = class yn extends jp {
  get type() {
    return ln.Data;
  }
  constructor(t, n, r) {
    (super(t, n, r),
      (this.connectionId = this.options.connectionId || yn.ID_PREFIX + kp()),
      (this.label = this.options.label || this.connectionId),
      (this.reliable = !!this.options.reliable),
      (this._negotiator = new _p(this)),
      this._negotiator.startConnection(
        this.options._payload || { originator: !0, reliable: this.reliable },
      ));
  }
  _initializeDataChannel(t) {
    ((this.dataChannel = t),
      (this.dataChannel.onopen = () => {
        (Q.log(`DC#${this.connectionId} dc connection success`),
          (this._open = !0),
          this.emit("open"));
      }),
      (this.dataChannel.onmessage = (n) => {
        Q.log(`DC#${this.connectionId} dc onmessage:`, n.data);
      }),
      (this.dataChannel.onclose = () => {
        (Q.log(`DC#${this.connectionId} dc closed for:`, this.peer),
          this.close());
      }));
  }
  close(t) {
    if (t != null && t.flush) {
      this.send({ __peerData: { type: "close" } });
      return;
    }
    (this._negotiator &&
      (this._negotiator.cleanup(), (this._negotiator = null)),
      this.provider &&
        (this.provider._removeConnection(this), (this.provider = null)),
      this.dataChannel &&
        ((this.dataChannel.onopen = null),
        (this.dataChannel.onmessage = null),
        (this.dataChannel.onclose = null),
        (this.dataChannel = null)),
      this.open && ((this._open = !1), super.emit("close")));
  }
  send(t, n = !1) {
    if (!this.open) {
      this.emitError(
        Il.NotOpenYet,
        "Connection is not open. You should listen for the `open` event before sending messages.",
      );
      return;
    }
    return this._send(t, n);
  }
  async handleMessage(t) {
    const n = t.payload;
    switch (t.type) {
      case Oe.Answer:
        await this._negotiator.handleSDP(t.type, n.sdp);
        break;
      case Oe.Candidate:
        await this._negotiator.handleCandidate(n.candidate);
        break;
      default:
        Q.warn("Unrecognized message type:", t.type, "from peer:", this.peer);
        break;
    }
  }
};
((Ra = new WeakMap()),
  (Na = new WeakMap()),
  hr(yn, Ra, (yn.ID_PREFIX = "dc_")),
  hr(yn, Na, (yn.MAX_BUFFERED_AMOUNT = 8388608)));
let bo = yn;
class Al extends bo {
  get bufferSize() {
    return this._bufferSize;
  }
  _initializeDataChannel(t) {
    (super._initializeDataChannel(t),
      (this.dataChannel.binaryType = "arraybuffer"),
      this.dataChannel.addEventListener("message", (n) =>
        this._handleDataMessage(n),
      ));
  }
  _bufferedSend(t) {
    (this._buffering || !this._trySend(t)) &&
      (this._buffer.push(t), (this._bufferSize = this._buffer.length));
  }
  _trySend(t) {
    if (!this.open) return !1;
    if (this.dataChannel.bufferedAmount > bo.MAX_BUFFERED_AMOUNT)
      return (
        (this._buffering = !0),
        setTimeout(() => {
          ((this._buffering = !1), this._tryBuffer());
        }, 50),
        !1
      );
    try {
      this.dataChannel.send(t);
    } catch (n) {
      return (
        Q.error(`DC#:${this.connectionId} Error when sending:`, n),
        (this._buffering = !0),
        this.close(),
        !1
      );
    }
    return !0;
  }
  _tryBuffer() {
    if (!this.open || this._buffer.length === 0) return;
    const t = this._buffer[0];
    this._trySend(t) &&
      (this._buffer.shift(),
      (this._bufferSize = this._buffer.length),
      this._tryBuffer());
  }
  close(t) {
    if (t != null && t.flush) {
      this.send({ __peerData: { type: "close" } });
      return;
    }
    ((this._buffer = []), (this._bufferSize = 0), super.close());
  }
  constructor(...t) {
    (super(...t),
      (this._buffer = []),
      (this._bufferSize = 0),
      (this._buffering = !1));
  }
}
class Si extends Al {
  close(t) {
    (super.close(t), (this._chunkedData = {}));
  }
  constructor(t, n, r) {
    (super(t, n, r),
      (this.chunker = new wp()),
      (this.serialization = Qo.Binary),
      (this._chunkedData = {}));
  }
  _handleDataMessage({ data: t }) {
    const n = zf(t),
      r = n.__peerData;
    if (r) {
      if (r.type === "close") {
        this.close();
        return;
      }
      this._handleChunk(n);
      return;
    }
    this.emit("data", n);
  }
  _handleChunk(t) {
    const n = t.__peerData,
      r = this._chunkedData[n] || { data: [], count: 0, total: t.total };
    if (
      ((r.data[t.n] = new Uint8Array(t.data)),
      r.count++,
      (this._chunkedData[n] = r),
      r.total === r.count)
    ) {
      delete this._chunkedData[n];
      const s = jg(r.data);
      this._handleDataMessage({ data: s });
    }
  }
  _send(t, n) {
    const r = $f(t);
    if (r instanceof Promise) return this._send_blob(r);
    if (!n && r.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(r);
      return;
    }
    this._bufferedSend(r);
  }
  async _send_blob(t) {
    const n = await t;
    if (n.byteLength > this.chunker.chunkedMTU) {
      this._sendChunks(n);
      return;
    }
    this._bufferedSend(n);
  }
  _sendChunks(t) {
    const n = this.chunker.chunk(t);
    Q.log(`DC#${this.connectionId} Try to send ${n.length} chunks...`);
    for (const r of n) this.send(r, !0);
  }
}
class Dg extends Al {
  _handleDataMessage({ data: t }) {
    super.emit("data", t);
  }
  _send(t, n) {
    this._bufferedSend(t);
  }
  constructor(...t) {
    (super(...t), (this.serialization = Qo.None));
  }
}
class Fg extends Al {
  _handleDataMessage({ data: t }) {
    const n = this.parse(this.decoder.decode(t)),
      r = n.__peerData;
    if (r && r.type === "close") {
      this.close();
      return;
    }
    this.emit("data", n);
  }
  _send(t, n) {
    const r = this.encoder.encode(this.stringify(t));
    if (r.byteLength >= qe.chunkedMTU) {
      this.emitError(Il.MessageToBig, "Message too big for JSON channel");
      return;
    }
    this._bufferedSend(r);
  }
  constructor(...t) {
    (super(...t),
      (this.serialization = Qo.JSON),
      (this.encoder = new TextEncoder()),
      (this.decoder = new TextDecoder()),
      (this.stringify = JSON.stringify),
      (this.parse = JSON.parse));
  }
}
var Ma;
const $r = class $r extends bp {
  get id() {
    return this._id;
  }
  get options() {
    return this._options;
  }
  get open() {
    return this._open;
  }
  get socket() {
    return this._socket;
  }
  get connections() {
    const t = Object.create(null);
    for (const [n, r] of this._connections) t[n] = r;
    return t;
  }
  get destroyed() {
    return this._destroyed;
  }
  get disconnected() {
    return this._disconnected;
  }
  constructor(t, n) {
    (super(),
      (this._serializers = {
        raw: Dg,
        json: Fg,
        binary: Si,
        "binary-utf8": Si,
        default: Si,
      }),
      (this._id = null),
      (this._lastServerId = null),
      (this._destroyed = !1),
      (this._disconnected = !1),
      (this._open = !1),
      (this._connections = new Map()),
      (this._lostMessages = new Map()));
    let r;
    if (
      (t && t.constructor == Object ? (n = t) : t && (r = t.toString()),
      (n = {
        debug: 0,
        host: qe.CLOUD_HOST,
        port: qe.CLOUD_PORT,
        path: "/",
        key: $r.DEFAULT_KEY,
        token: qe.randomToken(),
        config: qe.defaultConfig,
        referrerPolicy: "strict-origin-when-cross-origin",
        serializers: {},
        ...n,
      }),
      (this._options = n),
      (this._serializers = {
        ...this._serializers,
        ...this.options.serializers,
      }),
      this._options.host === "/" &&
        (this._options.host = window.location.hostname),
      this._options.path &&
        (this._options.path[0] !== "/" &&
          (this._options.path = "/" + this._options.path),
        this._options.path[this._options.path.length - 1] !== "/" &&
          (this._options.path += "/")),
      this._options.secure === void 0 && this._options.host !== qe.CLOUD_HOST
        ? (this._options.secure = qe.isSecure())
        : this._options.host == qe.CLOUD_HOST && (this._options.secure = !0),
      this._options.logFunction && Q.setLogFunction(this._options.logFunction),
      (Q.logLevel = this._options.debug || 0),
      (this._api = new Lg(n)),
      (this._socket = this._createServerConnection()),
      !qe.supports.audioVideo && !qe.supports.data)
    ) {
      this._delayedAbort(
        _e.BrowserIncompatible,
        "The current browser does not support WebRTC",
      );
      return;
    }
    if (r && !qe.validateId(r)) {
      this._delayedAbort(_e.InvalidID, `ID "${r}" is invalid`);
      return;
    }
    r
      ? this._initialize(r)
      : this._api
          .retrieveId()
          .then((s) => this._initialize(s))
          .catch((s) => this._abort(_e.ServerError, s));
  }
  _createServerConnection() {
    const t = new Ig(
      this._options.secure,
      this._options.host,
      this._options.port,
      this._options.path,
      this._options.key,
      this._options.pingInterval,
    );
    return (
      t.on(Xt.Message, (n) => {
        this._handleMessage(n);
      }),
      t.on(Xt.Error, (n) => {
        this._abort(_e.SocketError, n);
      }),
      t.on(Xt.Disconnected, () => {
        this.disconnected ||
          (this.emitError(_e.Network, "Lost connection to server."),
          this.disconnect());
      }),
      t.on(Xt.Close, () => {
        this.disconnected ||
          this._abort(_e.SocketClosed, "Underlying socket is already closed.");
      }),
      t
    );
  }
  _initialize(t) {
    ((this._id = t), this.socket.start(t, this._options.token));
  }
  _handleMessage(t) {
    const n = t.type,
      r = t.payload,
      s = t.src;
    switch (n) {
      case Oe.Open:
        ((this._lastServerId = this.id),
          (this._open = !0),
          this.emit("open", this.id));
        break;
      case Oe.Error:
        this._abort(_e.ServerError, r.msg);
        break;
      case Oe.IdTaken:
        this._abort(_e.UnavailableID, `ID "${this.id}" is taken`);
        break;
      case Oe.InvalidKey:
        this._abort(_e.InvalidKey, `API KEY "${this._options.key}" is invalid`);
        break;
      case Oe.Leave:
        (Q.log(`Received leave message from ${s}`),
          this._cleanupPeer(s),
          this._connections.delete(s));
        break;
      case Oe.Expire:
        this.emitError(_e.PeerUnavailable, `Could not connect to peer ${s}`);
        break;
      case Oe.Offer: {
        const o = r.connectionId;
        let i = this.getConnection(s, o);
        if (
          (i &&
            (i.close(),
            Q.warn(`Offer received for existing Connection ID:${o}`)),
          r.type === ln.Media)
        ) {
          const c = new _o(s, this, {
            connectionId: o,
            _payload: r,
            metadata: r.metadata,
          });
          ((i = c), this._addConnection(s, i), this.emit("call", c));
        } else if (r.type === ln.Data) {
          const c = new this._serializers[r.serialization](s, this, {
            connectionId: o,
            _payload: r,
            metadata: r.metadata,
            label: r.label,
            serialization: r.serialization,
            reliable: r.reliable,
          });
          ((i = c), this._addConnection(s, i), this.emit("connection", c));
        } else {
          Q.warn(`Received malformed connection type:${r.type}`);
          return;
        }
        const l = this._getMessages(o);
        for (const c of l) i.handleMessage(c);
        break;
      }
      default: {
        if (!r) {
          Q.warn(`You received a malformed message from ${s} of type ${n}`);
          return;
        }
        const o = r.connectionId,
          i = this.getConnection(s, o);
        i && i.peerConnection
          ? i.handleMessage(t)
          : o
            ? this._storeMessage(o, t)
            : Q.warn("You received an unrecognized message:", t);
        break;
      }
    }
  }
  _storeMessage(t, n) {
    (this._lostMessages.has(t) || this._lostMessages.set(t, []),
      this._lostMessages.get(t).push(n));
  }
  _getMessages(t) {
    const n = this._lostMessages.get(t);
    return n ? (this._lostMessages.delete(t), n) : [];
  }
  connect(t, n = {}) {
    if (((n = { serialization: "default", ...n }), this.disconnected)) {
      (Q.warn(
        "You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.",
      ),
        this.emitError(
          _e.Disconnected,
          "Cannot connect to new Peer after disconnecting from server.",
        ));
      return;
    }
    const r = new this._serializers[n.serialization](t, this, n);
    return (this._addConnection(t, r), r);
  }
  call(t, n, r = {}) {
    if (this.disconnected) {
      (Q.warn(
        "You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.",
      ),
        this.emitError(
          _e.Disconnected,
          "Cannot connect to new Peer after disconnecting from server.",
        ));
      return;
    }
    if (!n) {
      Q.error(
        "To call a peer, you must provide a stream from your browser's `getUserMedia`.",
      );
      return;
    }
    const s = new _o(t, this, { ...r, _stream: n });
    return (this._addConnection(t, s), s);
  }
  _addConnection(t, n) {
    (Q.log(`add connection ${n.type}:${n.connectionId} to peerId:${t}`),
      this._connections.has(t) || this._connections.set(t, []),
      this._connections.get(t).push(n));
  }
  _removeConnection(t) {
    const n = this._connections.get(t.peer);
    if (n) {
      const r = n.indexOf(t);
      r !== -1 && n.splice(r, 1);
    }
    this._lostMessages.delete(t.connectionId);
  }
  getConnection(t, n) {
    const r = this._connections.get(t);
    if (!r) return null;
    for (const s of r) if (s.connectionId === n) return s;
    return null;
  }
  _delayedAbort(t, n) {
    setTimeout(() => {
      this._abort(t, n);
    }, 0);
  }
  _abort(t, n) {
    (Q.error("Aborting!"),
      this.emitError(t, n),
      this._lastServerId ? this.disconnect() : this.destroy());
  }
  destroy() {
    this.destroyed ||
      (Q.log(`Destroy peer with ID:${this.id}`),
      this.disconnect(),
      this._cleanup(),
      (this._destroyed = !0),
      this.emit("close"));
  }
  _cleanup() {
    for (const t of this._connections.keys())
      (this._cleanupPeer(t), this._connections.delete(t));
    this.socket.removeAllListeners();
  }
  _cleanupPeer(t) {
    const n = this._connections.get(t);
    if (n) for (const r of n) r.close();
  }
  disconnect() {
    if (this.disconnected) return;
    const t = this.id;
    (Q.log(`Disconnect peer with ID:${t}`),
      (this._disconnected = !0),
      (this._open = !1),
      this.socket.close(),
      (this._lastServerId = t),
      (this._id = null),
      this.emit("disconnected", t));
  }
  reconnect() {
    if (this.disconnected && !this.destroyed)
      (Q.log(`Attempting reconnection to server with ID ${this._lastServerId}`),
        (this._disconnected = !1),
        this._initialize(this._lastServerId));
    else {
      if (this.destroyed)
        throw new Error(
          "This peer cannot reconnect to the server. It has already been destroyed.",
        );
      if (!this.disconnected && !this.open)
        Q.error(
          "In a hurry? We're still trying to make the initial connection!",
        );
      else
        throw new Error(
          `Peer ${this.id} cannot reconnect because it is not disconnected from the server!`,
        );
    }
  }
  listAllPeers(t = (n) => {}) {
    this._api
      .listAllPeers()
      .then((n) => t(n))
      .catch((n) => this._abort(_e.ServerError, n));
  }
};
((Ma = new WeakMap()), hr($r, Ma, ($r.DEFAULT_KEY = "peerjs")));
let Pa = $r;
var _i = Pa;
const Ep = _i.default || _i.Peer || _i,
  Pp = "welkin-music-party-v3-",
  Og = 2e3,
  zg = 15e3,
  $g = 10,
  Bg = 1e3,
  Tp = {
    host: "0.peerjs.com",
    port: 443,
    secure: !0,
    config: {
      iceServers: [
        { urls: "stun:stun.l.google.com:19302" },
        { urls: "stun:global.stun.twilio.com:3478" },
      ],
      sdpSemantics: "unified-plan",
    },
    pingInterval: 5e3,
    debug: 0,
  },
  iu = (e) => new Promise((t) => setTimeout(t, e)),
  Ug = () => {
    const e = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    return Array.from({ length: 5 }, () =>
      e.charAt(Math.floor(Math.random() * e.length)),
    ).join("");
  };
class Qg {
  constructor(t, n) {
    pe(this, "peer", null);
    pe(this, "connections", new Map());
    pe(this, "lastParticipantActivity", new Map());
    pe(this, "partyCode", "");
    pe(this, "myId");
    pe(this, "callbacks");
    pe(this, "heartbeatInterval", null);
    pe(this, "isDestroyed", !1);
    ((this.myId = t), (this.callbacks = n));
  }
  async start(t, n, r, s, o) {
    return (
      this.destroy(),
      (this.isDestroyed = !1),
      o && o("Initializing Network..."),
      this.createPeerSession(0, t, n, r, s, o)
    );
  }
  async createPeerSession(t, n, r, s, o, i) {
    if (t > 5)
      throw new Error(
        "Failed to secure a unique Party Code. Please try again.",
      );
    this.partyCode = Ug();
    const l = `${Pp}${this.partyCode}`;
    return new Promise((c, u) => {
      try {
        const d = new Ep(l, Tp);
        this.peer = d;
        const f = setTimeout(() => {
          d.open ||
            (d.destroy(), c(this.createPeerSession(t + 1, n, r, s, o, i)));
        }, 8e3);
        (d.on("open", () => {
          if ((clearTimeout(f), this.isDestroyed)) return;
          (i && i("Ready!"), this.startHeartbeatLoop());
          const p = {
            partyId: this.partyCode,
            hostId: this.myId,
            mode: n,
            participants: [{ id: this.myId, name: r, imageUrl: s, isHost: !0 }],
            isPlaying: o.isPlaying,
            currentSong: o.currentSong,
            currentQueue: o.currentQueue.map((v) => ({
              ...v,
              addedBy: this.myId,
            })),
            currentTime: o.currentTime,
            lastSeekTime: Date.now(),
            lastStateUpdate: Date.now(),
            hostPing: Date.now(),
            reactions: [],
          };
          (this.callbacks.onStateChange(p), c(this.partyCode));
        }),
          d.on("connection", (p) => this.handleIncomingConnection(p)),
          d.on("error", (p) => {
            (clearTimeout(f),
              p.type === "unavailable-id"
                ? (d.destroy(), c(this.createPeerSession(t + 1, n, r, s, o, i)))
                : [
                    "browser-incompatible",
                    "ssl-unavailable",
                    "socket-error",
                  ].includes(p.type) &&
                  u(new Error(`Network Error: ${p.type}`)));
          }),
          d.on("disconnected", () => {
            !this.isDestroyed && this.peer && this.peer.reconnect();
          }));
      } catch (d) {
        u(d);
      }
    });
  }
  handleIncomingConnection(t) {
    (t.on("open", () => {
      this.connections.set(t.connectionId, t);
      const r = this.callbacks.getCurrentState();
      if (r) {
        const s = JSON.parse(JSON.stringify(r));
        t.send({ type: "STATE_UPDATE", payload: s });
      }
    }),
      t.on("data", (r) => this.handleDataPacket(t, r)));
    const n = () => {
      this.connections.delete(t.connectionId);
    };
    (t.on("close", n), t.on("error", n));
  }
  startHeartbeatLoop() {
    (this.heartbeatInterval && clearInterval(this.heartbeatInterval),
      (this.heartbeatInterval = setInterval(() => {
        this.isDestroyed ||
          (this.connections.forEach((t, n) => {
            t.open || this.connections.delete(n);
          }),
          this.connections.size > 0 && this.broadcast(null));
      }, Og)));
  }
  handleDataPacket(t, n) {
    if (!n) return;
    if (
      (n.senderId && this.lastParticipantActivity.set(n.senderId, Date.now()),
      n.type === "PING")
    ) {
      try {
        t.send({
          type: "PONG",
          payload: { clientSentTime: n.payload, hostTime: Date.now() },
        });
      } catch {}
      return;
    }
    const r = this.callbacks.getCurrentState();
    if (!r) return;
    let s = { ...r },
      o = !1;
    switch (n.type) {
      case "JOIN":
        s.participants.some((i) => i.id === n.payload.id) ||
          (s.participants.push({ ...n.payload, isHost: !1 }), (o = !0));
        try {
          t.send({ type: "JOIN_ACK", payload: { success: !0 } });
        } catch {}
        break;
      case "LEAVE":
        ((s.participants = s.participants.filter((i) => i.id !== n.senderId)),
          (o = !0));
        break;
      case "ADD_SONG":
        if (s.mode === "collaborative") {
          const i = { ...n.payload, addedBy: n.senderId },
            l = s.currentQueue[s.currentQueue.length - 1];
          (!l || l.id !== i.id) &&
            ((s.currentQueue = [...s.currentQueue, i]),
            this.callbacks.onAddSongs([i]),
            (o = !0));
        }
        break;
      case "REMOVE_SONG":
        s.mode === "collaborative" &&
          s.currentQueue.findIndex(
            (l) => l.id === n.payload && l.addedBy === n.senderId,
          ) !== -1 &&
          this.callbacks.onRemoveSong(n.payload);
        break;
      case "REACTION":
        ((s.reactions = [
          ...s.reactions.slice(-20),
          { id: lr(), emoji: n.payload, senderId: n.senderId || "anon" },
        ]),
          (o = !0));
        break;
    }
    o && (this.callbacks.onStateChange(s), this.broadcast(s));
  }
  broadcast(t) {
    if (this.isDestroyed) return;
    const n = t ? { type: "STATE_UPDATE", payload: t } : { type: "HEARTBEAT" };
    this.connections.forEach((r) => {
      if (r.open)
        try {
          r.send(n);
        } catch {
          console.warn(`Failed to broadcast to ${r.connectionId}`);
        }
    });
  }
  destroy() {
    ((this.isDestroyed = !0), clearInterval(this.heartbeatInterval));
    try {
      this.broadcast(null);
    } catch {}
    if (
      (this.connections.forEach((t) => {
        try {
          t.close();
        } catch {}
      }),
      this.connections.clear(),
      this.peer)
    ) {
      try {
        this.peer.destroy();
      } catch {}
      this.peer = null;
    }
  }
}
class Vg {
  constructor(t, n) {
    pe(this, "peer", null);
    pe(this, "conn", null);
    pe(this, "myId");
    pe(this, "callbacks");
    pe(this, "timeOffset", null);
    pe(this, "isDestroyed", !1);
    pe(this, "partyCode", "");
    pe(this, "guestProfile", null);
    pe(this, "lastPacketTime", 0);
    pe(this, "monitorInterval", null);
    pe(this, "isRecovering", !1);
    pe(this, "reconnectAttempts", 0);
    ((this.myId = t), (this.callbacks = n));
  }
  async join(t, n, r) {
    return (
      this.destroy(),
      (this.isDestroyed = !1),
      (this.reconnectAttempts = 0),
      (this.partyCode = t),
      (this.guestProfile = { name: n, image: r }),
      this.initializePeerAndConnect()
    );
  }
  initializePeerAndConnect() {
    return new Promise((t, n) => {
      try {
        ((this.peer = new Ep(Tp)),
          this.peer.on("open", () => {
            this.connectToHost(t, n);
          }),
          this.peer.on("error", (r) => {
            ["browser-incompatible", "ssl-unavailable"].includes(r.type)
              ? n(new Error(`Device incompatible: ${r.type}`))
              : r.type === "peer-unavailable"
                ? n(new Error("Party not found. Check code or host status."))
                : n(new Error("Connection error. Please try again."));
          }),
          this.peer.on("disconnected", () => {
            !this.isDestroyed && this.peer && this.peer.reconnect();
          }));
      } catch (r) {
        n(r);
      }
    });
  }
  connectToHost(t, n) {
    if (this.isDestroyed || !this.peer || !this.peer.open) {
      n && n(new Error("Internal Peer Error"));
      return;
    }
    const r = `${Pp}${this.partyCode.toUpperCase()}`,
      s = this.peer.connect(r, { reliable: !0, serialization: "json" });
    this.conn = s;
    const o = setTimeout(() => {
      s &&
        !s.open &&
        (s.close(),
        n ? n(new Error("Host unresponsive.")) : this.triggerRecovery());
    }, 1e4);
    (s.on("open", () => {
      (clearTimeout(o),
        (this.isRecovering = !1),
        (this.reconnectAttempts = 0),
        (this.lastPacketTime = Date.now()),
        this.guestProfile &&
          this.send("JOIN", {
            id: this.myId,
            name: this.guestProfile.name,
            imageUrl: this.guestProfile.image,
          }),
        this.send("PING", Date.now()),
        this.setupConnectionListeners(),
        this.startConnectionMonitor(),
        t && t({ success: !0, messageKey: "party.joined" }));
    }),
      s.on("error", (i) => {
        console.warn("Connection Error:", i);
      }),
      s.on("close", () => {
        this.isDestroyed || this.triggerRecovery();
      }));
  }
  setupConnectionListeners() {
    this.conn &&
      this.conn.on("data", (t) => {
        if (((this.lastPacketTime = Date.now()), !!t))
          if (t.type === "PONG") {
            const n = Date.now(),
              { clientSentTime: r, hostTime: s } = t.payload;
            this.timeOffset = s + (n - r) / 2 - n;
          } else
            t.type === "STATE_UPDATE" &&
              t.payload &&
              this.callbacks.onStateUpdate(t.payload);
      });
  }
  startConnectionMonitor() {
    (this.monitorInterval && clearInterval(this.monitorInterval),
      (this.monitorInterval = setInterval(() => {
        if (this.isDestroyed) return;
        Date.now() - this.lastPacketTime > zg &&
          !this.isRecovering &&
          (console.warn("[Guest] Connection stale. Attempting recovery..."),
          this.triggerRecovery());
      }, 2e3)));
  }
  async triggerRecovery() {
    if (this.isDestroyed || this.isRecovering) return;
    if (((this.isRecovering = !0), this.conn)) {
      try {
        this.conn.close();
      } catch {}
      this.conn = null;
    }
    if (this.reconnectAttempts >= $g) {
      (this.callbacks.onConnectionLost(), this.destroy());
      return;
    }
    const t = Bg * Math.pow(1.5, this.reconnectAttempts);
    if ((this.reconnectAttempts++, await iu(t), this.peer)) {
      if (this.peer.disconnected) (this.peer.reconnect(), await iu(1e3));
      else if (this.peer.destroyed) {
        this.callbacks.onConnectionLost();
        return;
      }
    }
    (console.log(`[Guest] Reconnecting... Attempt ${this.reconnectAttempts}`),
      this.connectToHost());
  }
  send(t, n) {
    if (this.conn && this.conn.open)
      try {
        this.conn.send({ type: t, payload: n, senderId: this.myId });
      } catch (r) {
        console.warn("Send failed", r);
      }
  }
  destroy() {
    if (
      ((this.isDestroyed = !0), clearInterval(this.monitorInterval), this.conn)
    ) {
      try {
        (this.send("LEAVE", null), this.conn.close());
      } catch {}
      this.conn = null;
    }
    if (this.peer) {
      try {
        this.peer.destroy();
      } catch {}
      this.peer = null;
    }
    this.timeOffset = null;
  }
}
let au = 0;
const lu = (e, t, n) => {
    var v, w, x;
    if (n === null || !e) return;
    const {
      currentSong: r,
      isPlaying: s,
      currentTime: o,
      lastStateUpdate: i,
      partyId: l,
      currentQueue: c,
    } = e;
    if (
      (r == null ? void 0 : r.id) !==
        ((v = t.currentSong) == null ? void 0 : v.id) &&
      r
    ) {
      (console.log("[PartySync] Switching song to match host"),
        t.playSong(r, c, { type: "party", id: l }),
        t.playbackRate !== 1 && t.setPlaybackRate(1));
      return;
    }
    const u = Date.now(),
      d = i - n,
      f = Math.max(0, (u - d) / 1e3),
      p = s ? o + f : o;
    if (s !== t.isPlaying) {
      (r == null ? void 0 : r.id) ===
        ((w = t.currentSong) == null ? void 0 : w.id) &&
        (s && t.seek(p), t.togglePlay());
      return;
    }
    if (
      s &&
      t.isPlaying &&
      (r == null ? void 0 : r.id) ===
        ((x = t.currentSong) == null ? void 0 : x.id)
    ) {
      const R = p - t.currentTime,
        m = Math.abs(R);
      if (m < 0.35) {
        t.playbackRate !== 1 && t.setPlaybackRate(1);
        return;
      }
      if (m > 3) {
        u - au > 2e3 &&
          (console.log(`[PartySync] Large drift (${R.toFixed(2)}s). Seeking.`),
          t.seek(p),
          (au = u),
          t.playbackRate !== 1 && t.setPlaybackRate(1));
        return;
      }
      const h = R > 0 ? 1.06 : 0.94;
      Math.abs(t.playbackRate - h) > 0.01 && t.setPlaybackRate(h);
    }
  },
  et = y.createContext({}),
  Hg = ({ children: e }) => {
    const [t, n] = y.useState(null),
      [r] = pg("welkin-music-party-userId", lr()),
      { name: s, imageUrl: o } = y.useContext(Uo),
      i = y.useContext(kt),
      [l, c] = y.useState(null),
      u = y.useRef(null),
      d = y.useRef(null),
      f = y.useRef(i),
      p = y.useRef(t);
    (y.useEffect(() => {
      f.current = i;
    }, [i]),
      y.useEffect(() => {
        p.current = t;
      }, [t]));
    const v = (t == null ? void 0 : t.hostId) === r,
      w = () => c(null),
      x = {
        getCurrentState: () => p.current,
        onStateChange: (U) => n(U),
        onAddSongs: (U) => f.current.addSongsToEnd(U),
        onRemoveSong: (U) => f.current.removeSongFromQueue(U),
      },
      R = {
        onStateUpdate: (U) => {
          var T;
          U === null
            ? (c({
                key: "modals.partyEnded.endedByHost",
                replacements: {
                  partyId: ((T = p.current) == null ? void 0 : T.partyId) || "",
                },
              }),
              g())
            : n(U);
        },
        onConnectionLost: () => {
          var U;
          p.current &&
            (c({
              key: "modals.partyEnded.connectionLost",
              replacements: {
                partyId: ((U = p.current) == null ? void 0 : U.partyId) || "",
              },
            }),
            g());
        },
      },
      m = y.useCallback(
        async (U, T) => (
          d.current && d.current.destroy(),
          (u.current = new Qg(r, x)),
          await u.current.start(
            U,
            s,
            o,
            {
              isPlaying: i.isPlaying,
              currentSong: i.currentSong,
              currentQueue: i.currentQueue,
              currentTime: i.currentTime,
            },
            T,
          )
        ),
        [r, s, o, i],
      ),
      h = y.useCallback(
        async (U) => (
          u.current && u.current.destroy(),
          d.current && d.current.destroy(),
          (d.current = new Vg(r, R)),
          await d.current.join(U, s, o)
        ),
        [r, s, o],
      ),
      g = y.useCallback(() => {
        (u.current && (u.current.destroy(), (u.current = null)),
          d.current && (d.current.destroy(), (d.current = null)),
          n(null),
          i.setPlaybackRate(1));
      }, [i]),
      k = y.useCallback(() => {
        g();
      }, [g]);
    (y.useEffect(() => {
      if (!v || !t || !u.current) return;
      const U = setInterval(() => {
        const {
          currentSong: T,
          isPlaying: M,
          currentTime: A,
          currentQueue: N,
        } = f.current;
        n((S) => {
          var se, X;
          if (!S) return S;
          const z =
              ((se = S.currentSong) == null ? void 0 : se.id) !==
              (T == null ? void 0 : T.id),
            j = S.isPlaying !== M,
            O =
              S.currentQueue.length !== N.length ||
              (S.currentQueue.length > 0 &&
                N.length > 0 &&
                S.currentQueue[0].id !== N[0].id),
            q = {
              ...S,
              currentSong: T,
              isPlaying: M,
              currentTime: A,
              currentQueue: N.map((L) => ({ ...L, addedBy: L.addedBy || r })),
              hostPing: Date.now(),
            };
          if (z || j || O || Date.now() - S.lastStateUpdate > 1500) {
            const L = { ...q, lastStateUpdate: Date.now() };
            return ((X = u.current) == null || X.broadcast(L), L);
          }
          return q;
        });
      }, 250);
      return () => clearInterval(U);
    }, [v, t, r]),
      y.useEffect(() => {
        var M;
        if (v || !t || !d.current) return;
        const U = setInterval(() => {
            var A;
            lu(
              t,
              f.current,
              ((A = d.current) == null ? void 0 : A.timeOffset) || null,
            );
          }, 500),
          T = setInterval(() => {
            d.current && d.current.send("PING", Date.now());
          }, 2e3);
        return (
          lu(
            t,
            f.current,
            ((M = d.current) == null ? void 0 : M.timeOffset) || null,
          ),
          () => {
            (clearInterval(U),
              clearInterval(T),
              f.current.playbackRate !== 1 && f.current.setPlaybackRate(1));
          }
        );
      }, [v, t]));
    const b = () => {
        (v || (t == null ? void 0 : t.mode) === "collaborative") &&
          v &&
          i.togglePlay();
      },
      P = () => v && i.playNext(),
      E = () => v && i.playPrev(),
      F = (U) => v && i.seek(U),
      V = (U) => {
        var T;
        if (v) {
          const M = { ...U, addedBy: r };
          (i.addSongsToEnd([M]),
            n((A) => {
              var S;
              if (!A) return null;
              const N = { ...A, currentQueue: [...A.currentQueue, M] };
              return ((S = u.current) == null || S.broadcast(N), N);
            }));
        } else (T = d.current) == null || T.send("ADD_SONG", U);
      },
      B = (U) => {
        var T;
        v
          ? (i.removeSongFromQueue(U),
            n((M) => {
              var N;
              if (!M) return null;
              const A = {
                ...M,
                currentQueue: M.currentQueue.filter((S) => S.id !== U),
              };
              return ((N = u.current) == null || N.broadcast(A), A);
            }))
          : (T = d.current) == null || T.send("REMOVE_SONG", U);
      },
      G = (U, T) => {},
      le = (U) => {
        var T;
        v
          ? n((M) => {
              var S;
              if (!M) return null;
              const A = { id: lr(), emoji: U, senderId: r },
                N = { ...M, reactions: [...M.reactions.slice(-20), A] };
              return ((S = u.current) == null || S.broadcast(N), N);
            })
          : (T = d.current) == null || T.send("REACTION", U);
      };
    return a.jsx(et.Provider, {
      value: {
        partyState: t,
        isHost: v,
        myId: r,
        startParty: m,
        joinParty: h,
        leaveParty: g,
        endParty: k,
        seekPartyPlayer: F,
        togglePartyPlayer: b,
        playNextParty: P,
        playPrevParty: E,
        addSongToPartyQueue: V,
        removeSongFromPartyQueue: B,
        reorderPartyQueue: G,
        sendReaction: le,
        partyEndedMessage: l,
        clearPartyEndedMessage: w,
      },
      children: e,
    });
  },
  Wg = ({ setView: e, onClose: t, initialCode: n }) => {
    const { joinParty: r } = y.useContext(et),
      { t: s } = Le(),
      [o, i] = y.useState(n ? n.split("") : Array(5).fill("")),
      [l, c] = y.useState(""),
      [u, d] = y.useState(!1),
      f = y.useRef([]),
      p = y.useRef(!1),
      v = o.join("").length === 5,
      w = (h, g) => {
        var b;
        if (!/^[a-zA-Z0-9]*$/.test(g)) return;
        const k = [...o];
        ((k[h] = g.toUpperCase()),
          i(k),
          g && h < 4 && ((b = f.current[h + 1]) == null || b.focus()));
      },
      x = (h, g) => {
        var k;
        g.key === "Backspace" &&
          !o[h] &&
          h > 0 &&
          ((k = f.current[h - 1]) == null || k.focus());
      },
      R = (h) => {
        var k;
        h.preventDefault();
        const g = h.clipboardData.getData("text").toUpperCase().slice(0, 5);
        if (g.length > 0 && /^[A-Z0-9]+$/.test(g)) {
          const b = Array(5).fill("");
          (g.split("").forEach((P, E) => {
            E < 5 && (b[E] = P);
          }),
            i(b),
            (k = f.current[Math.min(4, g.length - 1)]) == null || k.focus());
        }
      },
      m = async () => {
        if (!(!v || u)) {
          ((p.current = !0), d(!0), c(""));
          try {
            const h = await r(o.join(""));
            h.success ? t() : c(h.errorMessage || s(h.messageKey));
          } catch (h) {
            c(h.message || s("party.inactive"));
          } finally {
            d(!1);
          }
        }
      };
    return (
      y.useEffect(() => {
        n && n.length === 5 && !p.current && m();
      }, [n]),
      a.jsxs("div", {
        className:
          "animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out",
        children: [
          a.jsx("h2", {
            className:
              "text-3xl font-black mb-3 text-center tracking-tight text-white",
            children: s("partyModal.joinTitle"),
          }),
          a.jsx("p", {
            className: "mb-8 text-center text-gray-400 text-sm",
            children: s("partyModal.joinSubtitle"),
          }),
          a.jsx("div", {
            className: "flex justify-center gap-3 mb-8",
            onPaste: R,
            children: Array.from({ length: 5 }).map((h, g) =>
              a.jsx(
                "input",
                {
                  ref: (k) => {
                    f.current[g] = k;
                  },
                  type: "text",
                  value: o[g],
                  onChange: (k) => w(g, k.target.value),
                  onKeyDown: (k) => x(g, k),
                  maxLength: 1,
                  className: `w-12 h-16 sm:w-14 sm:h-20 bg-black/20 border-2 rounded-lg text-center text-3xl font-bold uppercase transition-all duration-200 caret-transparent focus:outline-none
                            ${o[g] ? "border-[#3A8FE0] text-[#3A8FE0] bg-[#3A8FE0]/5" : "border-white/10 text-white focus:border-white/30 focus:bg-white/5"}`,
                  "aria-label": `Character ${g + 1} of party code`,
                },
                g,
              ),
            ),
          }),
          l &&
            a.jsx("div", {
              className:
                "mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center animate-in fade-in",
              children: l,
            }),
          a.jsxs("div", {
            className:
              "flex flex-col-reverse sm:flex-row gap-3 justify-between items-center",
            children: [
              a.jsx("button", {
                onClick: () => e("landing"),
                className:
                  "w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium transition-colors text-sm border border-white/5",
                children: s("partyModal.back"),
              }),
              a.jsx("button", {
                onClick: m,
                disabled: u || !v,
                className:
                  "w-full sm:w-auto px-10 py-3 rounded-xl bg-[#3A8FE0] text-white font-bold hover:bg-[#6CB4F0] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-[#3A8FE0]/20 hover:shadow-[#3A8FE0]/40 text-sm transform active:scale-95 duration-100 flex items-center justify-center gap-2",
                children: u
                  ? a.jsxs(a.Fragment, {
                      children: [
                        a.jsx("span", {
                          className:
                            "w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin",
                        }),
                        s("partyModal.joining"),
                      ],
                    })
                  : s("partyModal.joinButton"),
              }),
            ],
          }),
        ],
      })
    );
  },
  qg = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
        a.jsx("circle", { cx: "9", cy: "7", r: "4" }),
        a.jsx("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
        a.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
      ],
    }),
  Gg = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      children: a.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5",
      }),
    }),
  Kg = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("line", { x1: "1", y1: "1", x2: "23", y2: "23" }),
        a.jsx("path", { d: "M16.72 11.06A10.94 10.94 0 0 1 19 12.55" }),
        a.jsx("path", { d: "M5 12.55a10.94 10.94 0 0 1 5.17-2.39" }),
        a.jsx("path", { d: "M10.71 5.05A16 16 0 0 1 22.58 9" }),
        a.jsx("path", { d: "M1.42 9a15.91 15.91 0 0 1 4.7-2.88" }),
        a.jsx("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
        a.jsx("line", { x1: "12", y1: "20", x2: "12.01", y2: "20" }),
      ],
    }),
  Jg = ({ setView: e, setPartyId: t }) => {
    const { startParty: n } = y.useContext(et),
      { t: r } = Le(),
      [s, o] = y.useState("collaborative"),
      [i, l] = y.useState(null),
      [c, u] = y.useState(null),
      [d, f] = y.useState(!1),
      p = async () => {
        (f(!0), l(null), u("Initializing..."));
        try {
          const w = await n(s, (x) => {
            u(x);
          });
          (t(w), e("share"));
        } catch (w) {
          (console.error("Failed to create party", w),
            w.message === "CONNECTION_FAILED"
              ? l("CONNECTION_FAILED")
              : l(w.message || "Unknown error"));
        } finally {
          (f(!1), u(null));
        }
      };
    if (i === "CONNECTION_FAILED")
      return a.jsxs("div", {
        className:
          "animate-in fade-in zoom-in-95 duration-300 ease-out text-center flex flex-col items-center",
        children: [
          a.jsx("div", {
            className:
              "w-20 h-20 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-6",
            children: a.jsx(Kg, { className: "w-10 h-10 text-red-400" }),
          }),
          a.jsx("h2", {
            className: "text-2xl font-bold text-white mb-2",
            children: "Connection Blocked",
          }),
          a.jsx("p", {
            className: "text-gray-400 mb-8 text-sm leading-relaxed max-w-xs",
            children:
              "Your network seems to be restricting peer-to-peer connections. This is common with VPNs or corporate firewalls.",
          }),
          a.jsxs("div", {
            className: "flex gap-4 w-full justify-center",
            children: [
              a.jsx("button", {
                onClick: () => l(null),
                className:
                  "px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium transition-colors text-sm border border-white/5",
                children: "Cancel",
              }),
              a.jsx("button", {
                onClick: p,
                className:
                  "px-8 py-3 rounded-xl bg-[#3A8FE0] text-white font-bold hover:bg-[#6CB4F0] shadow-lg shadow-[#3A8FE0]/20 hover:shadow-[#3A8FE0]/40 transition-all text-sm",
                children: "Retry",
              }),
            ],
          }),
        ],
      });
    const v = ({
      title: w,
      description: x,
      icon: R,
      isSelected: m,
      onClick: h,
    }) =>
      a.jsxs("button", {
        onClick: h,
        className: `group relative flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all duration-200 ease-out focus:outline-none w-full h-full
             ${m ? "border-[#3A8FE0] bg-[#3A8FE0]/10 shadow-[0_0_20px_rgba(58,143,224,0.1)]" : "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20"}`,
        children: [
          a.jsx("div", {
            className: `absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${m ? "scale-100 opacity-100" : "scale-0 opacity-0"}`,
            children: a.jsx("div", {
              className:
                "w-full h-full bg-[#3A8FE0] rounded-full flex items-center justify-center shadow-md",
              children: a.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                className: "w-3.5 h-3.5 text-black",
                children: a.jsx("path", {
                  fillRule: "evenodd",
                  d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                  clipRule: "evenodd",
                }),
              }),
            }),
          }),
          a.jsx("div", {
            className: `w-16 h-16 mb-5 flex items-center justify-center rounded-2xl transition-colors duration-200 ${m ? "bg-[#3A8FE0] text-white" : "bg-white/10 text-gray-400 group-hover:text-white"}`,
            children: Se.cloneElement(R, { className: "w-8 h-8" }),
          }),
          a.jsx("h4", {
            className: `font-bold text-lg mb-2 transition-colors duration-200 ${m ? "text-white" : "text-gray-200 group-hover:text-white"}`,
            children: w,
          }),
          a.jsx("p", {
            className: "text-sm text-gray-400 leading-relaxed",
            children: x,
          }),
        ],
      });
    return a.jsxs("div", {
      className:
        "animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out",
      children: [
        a.jsx("h2", {
          className:
            "text-3xl font-black mb-3 text-center tracking-tight text-white",
          children: r("partyModal.createTitle"),
        }),
        a.jsx("p", {
          className: "mb-8 text-center text-gray-400 text-sm",
          children: r("partyModal.createSubtitle"),
        }),
        i &&
          a.jsx("div", {
            className:
              "mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center animate-in fade-in",
            children: i,
          }),
        a.jsxs("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",
          children: [
            a.jsx(v, {
              title: r("partyModal.collaborative"),
              description: r("partyModal.collaborativeDesc"),
              icon: a.jsx(qg, {}),
              isSelected: s === "collaborative",
              onClick: () => o("collaborative"),
            }),
            a.jsx(v, {
              title: r("partyModal.djHost"),
              description: r("partyModal.djHostDesc"),
              icon: a.jsx(Gg, {}),
              isSelected: s === "dj",
              onClick: () => o("dj"),
            }),
          ],
        }),
        a.jsxs("div", {
          className:
            "flex flex-col-reverse sm:flex-row gap-3 justify-between items-center",
          children: [
            a.jsx("button", {
              onClick: () => e("landing"),
              className:
                "w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium transition-colors text-sm border border-white/5",
              children: r("partyModal.back"),
            }),
            a.jsx("button", {
              onClick: p,
              disabled: d,
              className:
                "w-full sm:w-auto px-10 py-3 rounded-xl bg-[#3A8FE0] text-white font-bold hover:bg-[#6CB4F0] shadow-lg shadow-[#3A8FE0]/20 hover:shadow-[#3A8FE0]/40 transition-all text-sm transform active:scale-95 duration-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
              children: d
                ? a.jsxs(a.Fragment, {
                    children: [
                      a.jsx("span", {
                        className:
                          "w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin",
                      }),
                      a.jsx("span", { children: c || "Starting..." }),
                    ],
                  })
                : r("partyModal.startButton"),
            }),
          ],
        }),
      ],
    });
  },
  Rp = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      children: a.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
      }),
    }),
  Yg = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      children: a.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.186 2.25 2.25 0 00-3.933 2.186z",
      }),
    }),
  cu = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 2.5,
      stroke: "currentColor",
      children: a.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 12.75l6 6 9-13.5",
      }),
    }),
  Xg = ({ partyId: e, onClose: t }) => {
    const { t: n } = Le(),
      [r, s] = y.useState(null),
      o = `${window.location.origin}?party=${e}`,
      i = (l, c) => {
        navigator.clipboard.writeText(l).then(() => {
          (s(c), setTimeout(() => s(null), 2e3));
        });
      };
    return a.jsxs("div", {
      className:
        "animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out text-center",
      children: [
        a.jsx("div", {
          className:
            "mx-auto mb-6 w-20 h-20 rounded-full bg-[#3A8FE0]/10 flex items-center justify-center border border-[#3A8FE0]/20 animate-bounce-small",
          children: a.jsx(Yg, { className: "w-10 h-10 text-[#3A8FE0]" }),
        }),
        a.jsx("h2", {
          className: "text-3xl font-black mb-2 tracking-tight text-white",
          children: n("partyModal.shareTitle"),
        }),
        a.jsx("p", {
          className:
            "text-gray-400 mb-8 text-sm max-w-xs mx-auto leading-relaxed",
          children: n("partyModal.shareSubtitle"),
        }),
        a.jsxs("div", {
          className: "mb-8",
          children: [
            a.jsx("div", {
              className:
                "text-xs font-bold text-gray-500 uppercase tracking-widest mb-3",
              children: n("partyModal.partyCode"),
            }),
            a.jsxs("div", {
              onClick: () => i(e, "code"),
              className:
                "group relative inline-block bg-[#1a1a1a] px-10 py-5 rounded-2xl cursor-pointer border border-white/10 hover:border-[#3A8FE0]/50 transition-all duration-200 active:scale-95 shadow-inner",
              children: [
                a.jsx("p", {
                  className:
                    "font-mono text-5xl sm:text-6xl font-bold tracking-widest text-white drop-shadow-md",
                  children: e,
                }),
                a.jsxs("div", {
                  className: `absolute inset-0 bg-[#3A8FE0] rounded-2xl flex items-center justify-center text-black font-bold text-lg transition-opacity duration-200 ${r === "code" ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                  children: [
                    a.jsx(cu, { className: "w-6 h-6 mr-2" }),
                    n("queue.copied"),
                  ],
                }),
              ],
            }),
          ],
        }),
        a.jsx("div", {
          className: "flex justify-center mb-8",
          children: a.jsxs("button", {
            onClick: () => i(o, "link"),
            className: `flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 border text-sm w-full sm:w-auto transform active:scale-95
                    ${r === "link" ? "bg-green-500/10 border-green-500/50 text-green-400" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"}`,
            children: [
              r === "link"
                ? a.jsx(cu, { className: "w-5 h-5" })
                : a.jsx(Rp, { className: "w-5 h-5 text-gray-400" }),
              n(
                r === "link"
                  ? "partyModal.linkCopied"
                  : "partyModal.copyInvite",
              ),
            ],
          }),
        }),
        a.jsx("div", {
          className: "pt-6 border-t border-white/5",
          children: a.jsx("button", {
            onClick: t,
            className:
              "text-gray-500 hover:text-white font-medium text-sm transition-colors px-6 py-2",
            children: n("partyModal.done"),
          }),
        }),
      ],
    });
  },
  Zg = ({ setView: e }) => {
    const { t } = Le(),
      n = (r) =>
        a.jsx("svg", {
          ...r,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          children: a.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 013-3h.008a3 3 0 013 3v.75",
          }),
        });
    return a.jsxs("div", {
      className:
        "animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out",
      children: [
        a.jsx("h2", {
          className:
            "text-4xl font-black mb-4 text-center tracking-tighter text-white",
          children: t("partyModal.landingTitle"),
        }),
        a.jsx("p", {
          className:
            "text-gray-400 mb-10 text-center max-w-xs mx-auto leading-relaxed text-sm",
          children: t("partyModal.landingSubtitle"),
        }),
        a.jsxs("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
          children: [
            a.jsxs("button", {
              onClick: () => e("create"),
              className:
                "flex flex-col items-center p-8 rounded-3xl bg-[#163A6B] border border-white/5 hover:border-[#3A8FE0]/50 hover:bg-[#2f2f2f] transition-all duration-300 group text-center transform active:scale-[0.98] shadow-lg hover:shadow-xl",
              children: [
                a.jsx("div", {
                  className:
                    "w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center mb-5 border border-white/5 group-hover:border-[#3A8FE0]/30 transition-colors duration-300",
                  children: a.jsx(n, { className: "w-8 h-8 text-[#3A8FE0]" }),
                }),
                a.jsx("h3", {
                  className: "font-bold text-xl text-white mb-2",
                  children: t("partyModal.createCardTitle"),
                }),
                a.jsx("p", {
                  className:
                    "text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                  children: t("partyModal.createCardDesc"),
                }),
              ],
            }),
            a.jsxs("button", {
              onClick: () => e("join"),
              className:
                "flex flex-col items-center p-8 rounded-3xl bg-[#163A6B] border border-white/5 hover:border-white/30 hover:bg-[#2f2f2f] transition-all duration-300 group text-center transform active:scale-[0.98] shadow-lg hover:shadow-xl",
              children: [
                a.jsx("div", {
                  className:
                    "w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center mb-5 border border-white/5 group-hover:border-white/20 transition-colors duration-300",
                  children: a.jsx(Rp, { className: "w-8 h-8 text-white" }),
                }),
                a.jsx("h3", {
                  className: "font-bold text-xl text-white mb-2",
                  children: t("partyModal.joinCardTitle"),
                }),
                a.jsx("p", {
                  className:
                    "text-sm text-gray-400 group-hover:text-gray-300 transition-colors",
                  children: t("partyModal.joinCardDesc"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  ey = ({ onClose: e }) => {
    const [t, n] = y.useState("landing"),
      [r, s] = y.useState(""),
      [o, i] = y.useState("");
    y.useEffect(() => {
      const u = new URLSearchParams(window.location.search).get("party");
      u &&
        u.trim().length === 5 &&
        (n("join"),
        i(u.toUpperCase()),
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname,
        ));
    }, []);
    const l = () => {
      switch (t) {
        case "create":
          return a.jsx(Jg, { setView: n, setPartyId: s });
        case "join":
          return a.jsx(Wg, { setView: n, onClose: e, initialCode: o });
        case "share":
          return a.jsx(Xg, { partyId: r, onClose: e });
        case "landing":
        default:
          return a.jsx(Zg, { setView: n });
      }
    };
    return a.jsx("div", { className: "w-full max-w-xl p-2", children: l() });
  },
  ty = ({
    isOpen: e,
    onClose: t,
    triggerRef: n,
    children: r,
    width: s = "w-56",
    className: o = "",
  }) => {
    const i = y.useRef(null),
      [l, c] = y.useState({ opacity: 0, pointerEvents: "none" }),
      [u, d] = y.useState(!1);
    return (
      y.useEffect(() => d(!0), []),
      y.useLayoutEffect(() => {
        if (e && u && n.current) {
          const f = () => {
            if (!n.current || !i.current) return;
            const p = n.current.getBoundingClientRect(),
              v = i.current.getBoundingClientRect(),
              w = window.innerWidth,
              x = window.innerHeight;
            let R = p.bottom + 8,
              m = p.left,
              h = "top left";
            (R + v.height > x - 20 &&
              ((R = p.top - 8 - v.height), (h = h.replace("top", "bottom"))),
              m + v.width > w - 20 &&
                ((m = p.right - v.width + p.width),
                (h = h.replace("left", "right"))),
              m < 10 && (m = 10),
              c({
                position: "fixed",
                top: `${R}px`,
                left: `${m}px`,
                transformOrigin: h,
                opacity: 1,
                pointerEvents: "auto",
                zIndex: 1100,
              }));
          };
          return (
            f(),
            window.addEventListener("scroll", f, !0),
            window.addEventListener("resize", f),
            () => {
              (window.removeEventListener("scroll", f, !0),
                window.removeEventListener("resize", f));
            }
          );
        } else c({ opacity: 0, pointerEvents: "none" });
      }, [e, u, n]),
      y.useEffect(() => {
        const f = (p) => {
          e &&
            i.current &&
            !i.current.contains(p.target) &&
            n.current &&
            !n.current.contains(p.target) &&
            t();
        };
        return (
          e && document.addEventListener("mousedown", f),
          () => document.removeEventListener("mousedown", f)
        );
      }, [e, t, n]),
      !e || !u || !document.body
        ? null
        : El.createPortal(
            a.jsx("div", {
              ref: i,
              style: l,
              className: `fixed bg-[#0B1E3D]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] p-1.5 transition-all duration-200 animate-in fade-in zoom-in-95 ${s} ${o}`,
              onClick: (f) => f.stopPropagation(),
              children: r,
            }),
            document.body,
          )
    );
  },
  Np = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: a.jsx("path", { d: "M5 3l14 9-14 9V3z" }),
    }),
  Mp = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        a.jsx("rect", { x: "6", y: "4", width: "4", height: "16", rx: "2" }),
        a.jsx("rect", { x: "14", y: "4", width: "4", height: "16", rx: "2" }),
      ],
    }),
  ny = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        a.jsx("path", { d: "M5 4l10 8-10 8V4z" }),
        a.jsx("path", { d: "M19 5h-2v14h2V5z" }),
      ],
    }),
  ry = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        a.jsx("path", { d: "M19 4l-10 8 10 8V4z" }),
        a.jsx("path", { d: "M5 5h2v14H5V5z" }),
      ],
    }),
  sy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
        a.jsx("path", {
          d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07",
        }),
      ],
    }),
  oy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
        a.jsx("path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07" }),
      ],
    }),
  iy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
        a.jsx("line", { x1: "23", y1: "9", x2: "17", y2: "15" }),
        a.jsx("line", { x1: "17", y1: "9", x2: "23", y2: "15" }),
      ],
    }),
  ay = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        a.jsx("polyline", { points: "7 10 12 15 17 10" }),
        a.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" }),
      ],
    }),
  ly = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        a.jsx("circle", {
          className: "opacity-25",
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "4",
        }),
        a.jsx("path", {
          className: "opacity-75",
          fill: "currentColor",
          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
        }),
      ],
    }),
  cy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        a.jsx("line", { x1: "12", y1: "8", x2: "12", y2: "16" }),
        a.jsx("line", { x1: "8", y1: "12", x2: "16", y2: "12" }),
      ],
    }),
  Ip = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: a.jsx("path", {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
      }),
    }),
  uy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
        a.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
        a.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
        a.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
        a.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
        a.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" }),
      ],
    }),
  dy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }),
        a.jsx("path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }),
        a.jsx("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
        a.jsx("line", { x1: "12", y1: "20", x2: "12.01", y2: "20" }),
      ],
    }),
  fy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M16 3h5v5" }),
        a.jsx("path", { d: "M4 20L21 3" }),
        a.jsx("path", { d: "M21 16v5h-5" }),
        a.jsx("path", { d: "M15 15l6 6" }),
        a.jsx("path", { d: "M4 4l5 5" }),
      ],
    }),
  py = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "m17 2 4 4-4 4" }),
        a.jsx("path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }),
        a.jsx("path", { d: "m7 22-4-4 4-4" }),
        a.jsx("path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }),
      ],
    }),
  hy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", {
          d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
        }),
        a.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
        a.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "22" }),
        a.jsx("line", { x1: "8", y1: "22", x2: "16", y2: "22" }),
      ],
    }),
  uu = (e) => {
    if (isNaN(e)) return "0:00";
    const t = Math.floor(e / 60),
      n = Math.floor(e % 60);
    return `${t}:${n < 10 ? "0" : ""}${n}`;
  },
  _r = (e) => {
    if (!e) return "";
    const t = document.createElement("textarea");
    return ((t.innerHTML = e), t.value);
  },
  my = Se.memo(({ song: e, navigateToArtist: t }) => {
    var r, s, o, i;
    const n =
      ((s =
        (r = e.image) == null
          ? void 0
          : r.find((l) => l.quality === "150x150")) == null
        ? void 0
        : s.url) ||
      ((i = (o = e.image) == null ? void 0 : o[0]) == null ? void 0 : i.url);
    return a.jsxs("div", {
      className:
        "flex items-center space-x-4 min-w-0 overflow-hidden relative group p-2 rounded-xl transition-colors hover:bg-white/5",
      children: [
        a.jsx("div", {
          className:
            "absolute left-3 w-10 h-10 md:w-14 md:h-14 blur-xl opacity-60 rounded-full transition-opacity duration-700 animate-pulse",
          style: { backgroundImage: `url(${n})`, backgroundSize: "cover" },
        }),
        n &&
          a.jsx("div", {
            className: "relative z-10",
            children: a.jsx("img", {
              src: n,
              alt: _r(e.name),
              className:
                "w-12 h-12 md:w-14 md:h-14 rounded-lg shadow-lg flex-shrink-0 animate-image-appear object-cover border border-white/5 ring-1 ring-white/5",
              loading: "lazy",
            }),
          }),
        a.jsxs("div", {
          className: "flex-1 min-w-0 z-10 flex flex-col justify-center",
          children: [
            a.jsx("div", {
              className: "relative overflow-hidden mask-linear-fade",
              children: a.jsx("h3", {
                className:
                  "font-bold text-white truncate text-sm md:text-base leading-tight tracking-tight drop-shadow-sm cursor-default hover:text-[#3A8FE0] transition-colors",
                title: _r(e.name),
                children: _r(e.name),
              }),
            }),
            a.jsx("p", {
              className:
                "text-xs text-gray-400 truncate mt-0.5 font-medium tracking-wide",
              children: e.artists.primary.map((l, c) =>
                a.jsxs(
                  Se.Fragment,
                  {
                    children: [
                      a.jsx("span", {
                        onClick: (u) => {
                          (u.stopPropagation(), t(l.id));
                        },
                        className:
                          "hover:text-white hover:underline cursor-pointer transition-colors",
                        title: _r(l.name),
                        children: _r(l.name),
                      }),
                      c < e.artists.primary.length - 1 && ", ",
                    ],
                  },
                  l.id,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  }),
  gy = ({
    isPlaying: e,
    isShuffle: t,
    repeatMode: n,
    togglePlay: r,
    playPrev: s,
    playNext: o,
    toggleShuffle: i,
    cycleRepeatMode: l,
  }) => {
    const { t: c } = Le(),
      {
        partyState: u,
        isHost: d,
        togglePartyPlayer: f,
        playNextParty: p,
        playPrevParty: v,
      } = y.useContext(et),
      w = !u || d || u.mode === "collaborative",
      x = !u || d,
      R = () => {
        w && (u ? v() : s());
      },
      m = () => {
        w && (u ? p() : o());
      },
      h = () => {
        w && (u ? f() : r());
      };
    return a.jsxs("div", {
      className: `flex items-center gap-6 md:gap-8 ${w ? "" : "opacity-50 pointer-events-none"}`,
      children: [
        a.jsxs("button", {
          disabled: !x,
          onClick: i,
          title: c("player.shuffle"),
          className: `group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${t ? "text-[#3A8FE0]" : "text-gray-500 hover:text-white"}`,
          children: [
            a.jsx(fy, { className: "w-4 h-4" }),
            t &&
              a.jsx("span", {
                className:
                  "absolute -bottom-1 w-1 h-1 bg-[#3A8FE0] rounded-full shadow-[0_0_5px_#3A8FE0]",
              }),
          ],
        }),
        a.jsxs("div", {
          className: "flex items-center gap-4",
          children: [
            a.jsx("button", {
              disabled: !w,
              onClick: R,
              className:
                "text-gray-300 hover:text-white transition-all active:scale-90 hover:bg-white/5 p-2 rounded-full",
              children: a.jsx(ry, { className: "w-6 h-6 md:w-7 md:h-7" }),
            }),
            a.jsx("button", {
              disabled: !w,
              onClick: h,
              className:
                "relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all duration-300 active:scale-95 group border-2 border-transparent hover:border-[#3A8FE0]",
              children: e
                ? a.jsx(Mp, {
                    className:
                      "w-6 h-6 md:w-7 md:h-7 fill-black group-hover:fill-[#3A8FE0] transition-colors",
                  })
                : a.jsx(Np, {
                    className:
                      "w-6 h-6 md:w-7 md:h-7 fill-black group-hover:fill-[#3A8FE0] ml-1 transition-colors",
                  }),
            }),
            a.jsx("button", {
              disabled: !w,
              onClick: m,
              className:
                "text-gray-300 hover:text-white transition-all active:scale-90 hover:bg-white/5 p-2 rounded-full",
              children: a.jsx(ny, { className: "w-6 h-6 md:w-7 md:h-7" }),
            }),
          ],
        }),
        a.jsxs("button", {
          disabled: !x,
          onClick: l,
          title: c("player.repeat", { mode: n }),
          className: `group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${n !== "off" ? "text-[#3A8FE0]" : "text-gray-500 hover:text-white"}`,
          children: [
            a.jsx(py, { className: "w-4 h-4" }),
            n !== "off" &&
              a.jsx("span", {
                className:
                  "absolute -bottom-1 w-1 h-1 bg-[#3A8FE0] rounded-full shadow-[0_0_5px_#3A8FE0]",
              }),
            n === "one" &&
              a.jsx("span", {
                className:
                  "absolute -top-1 -right-1 text-[8px] font-bold bg-[#3A8FE0] text-white px-1 rounded-full leading-tight",
                children: "1",
              }),
          ],
        }),
      ],
    });
  },
  yy = ({ currentTime: e, duration: t, seek: n }) => {
    const r = y.useRef(null),
      [s, o] = y.useState(!1),
      [i, l] = y.useState(0),
      { partyState: c, isHost: u, seekPartyPlayer: d } = y.useContext(et),
      f = !c || u || c.mode === "collaborative",
      p = y.useMemo(() => {
        const x = s ? i : e;
        return t > 0 ? (x / t) * 100 : 0;
      }, [s, i, e, t]),
      v = y.useCallback(
        (x) => {
          if (!r.current || t <= 0) return 0;
          const R = r.current.getBoundingClientRect(),
            h = ((x - R.left) / R.width) * t;
          return Math.max(0, Math.min(h, t));
        },
        [t],
      ),
      w = (x) => {
        f && (x.preventDefault(), o(!0), l(v(x.clientX)));
      };
    return (
      y.useEffect(() => {
        if (!s) return;
        const x = (m) => l(v(m.clientX)),
          R = (m) => {
            o(!1);
            const h = v(m.clientX);
            c ? d(h) : n(h);
          };
        return (
          window.addEventListener("mousemove", x),
          window.addEventListener("mouseup", R),
          () => {
            (window.removeEventListener("mousemove", x),
              window.removeEventListener("mouseup", R));
          }
        );
      }, [s, v, n, c, d]),
      a.jsxs("div", {
        className:
          "w-full flex items-center space-x-3 mt-1 group/bar select-none",
        children: [
          a.jsx("span", {
            className:
              "text-xs font-medium text-gray-500 w-10 text-right tabular-nums tracking-wide",
            children: uu(s ? i : e),
          }),
          a.jsx("div", {
            ref: r,
            className: `flex-1 h-6 flex items-center cursor-pointer ${f ? "" : "cursor-not-allowed opacity-50"}`,
            onMouseDown: w,
            children: a.jsx("div", {
              className:
                "w-full h-1 bg-white/10 rounded-full relative overflow-visible group-hover/bar:h-1.5 transition-all duration-300",
              children: a.jsx("div", {
                className:
                  "absolute h-full bg-white rounded-full group-hover/bar:bg-[#3A8FE0] shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover/bar:shadow-[0_0_15px_rgba(58,143,224,0.5)] transition-all duration-100",
                style: { width: `${p}%` },
                children: a.jsx("div", {
                  className:
                    "absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 transform scale-0 group-hover/bar:scale-100",
                }),
              }),
            }),
          }),
          a.jsx("span", {
            className:
              "text-xs font-medium text-gray-500 w-10 text-left tabular-nums tracking-wide",
            children: uu(t),
          }),
        ],
      })
    );
  },
  vy = ({
    song: e,
    onDownload: t,
    isDownloading: n,
    onAddToPlaylist: r,
    onToggleFavorite: s,
    isHeartAnimating: o,
    handlePartyModeClick: i,
  }) => {
    const { t: l } = Le(),
      c = y.useContext(kt),
      u = y.useContext(Rn),
      { partyState: d } = y.useContext(et),
      [f, p] = y.useState(!1),
      v = y.useRef(null),
      w = y.useRef(null),
      [x, R] = y.useState(c.volume),
      { volume: m, setVolume: h, toggleLyrics: g, isLyricsOpen: k } = c,
      b = y.useMemo(() => m === 0, [m]);
    y.useEffect(() => {
      w.current &&
        w.current.style.setProperty("--volume-progress", `${m * 100}%`);
    }, [m]);
    const P = () => {
      b ? h(x > 0.05 ? x : 0.5) : (R(m), h(0));
    };
    return e
      ? a.jsxs("div", {
          className: "flex items-center justify-end gap-1 md:gap-2",
          children: [
            a.jsx("button", {
              onClick: () => g(),
              title: "Lyrics",
              className: `p-2 rounded-full transition-all duration-300 hover:bg-white/10 ${k ? "text-[#3A8FE0] bg-[#3A8FE0]/10 shadow-[0_0_10px_rgba(58,143,224,0.3)]" : "text-gray-400 hover:text-white"}`,
              children: a.jsx(hy, { className: "w-5 h-5" }),
            }),
            a.jsx("button", {
              onClick: i,
              title: l("player.partyMode"),
              className: `p-2 rounded-full transition-colors hover:bg-white/10 ${d ? "text-[#3A8FE0] bg-[#3A8FE0]/10" : "text-gray-400 hover:text-white"}`,
              children: a.jsx(dy, { className: "w-5 h-5" }),
            }),
            a.jsx("button", {
              onClick: t,
              disabled: n,
              title: l("player.download"),
              className:
                "p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors disabled:opacity-50",
              children: n
                ? a.jsx(ly, { className: "w-5 h-5 animate-spin" })
                : a.jsx(ay, { className: "w-5 h-5" }),
            }),
            a.jsx("button", {
              ref: v,
              onClick: () => p((E) => !E),
              title: l("player.addToPlaylist"),
              className: `p-2 rounded-full transition-colors hover:bg-white/10 ${f ? "text-white" : "text-gray-400 hover:text-white"}`,
              children: a.jsx(cy, {
                className: `w-5 h-5 transition-transform duration-300 ${f ? "rotate-[135deg]" : ""}`,
              }),
            }),
            a.jsx(ty, {
              isOpen: f,
              onClose: () => p(!1),
              triggerRef: v,
              children: a.jsxs("div", {
                className: "flex flex-col py-1",
                children: [
                  a.jsx("p", {
                    className:
                      "px-3 py-1.5 text-xs text-gray-400 font-bold uppercase",
                    children: l("player.addToPlaylist"),
                  }),
                  a.jsx("button", {
                    onClick: () => {
                      (r(), p(!1));
                    },
                    className:
                      "w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-white/10 text-white",
                    children: l("player.newPlaylist"),
                  }),
                  a.jsx("hr", { className: "my-1 border-white/10" }),
                  a.jsx("div", {
                    className: "max-h-48 overflow-y-auto custom-scrollbar",
                    children:
                      u.playlists.length > 0
                        ? u.playlists.map((E) =>
                            a.jsx(
                              "button",
                              {
                                onClick: () => {
                                  (u.addSongToPlaylist(E.id, e), p(!1));
                                },
                                className:
                                  "w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-white/10 truncate text-white",
                                children: E.name,
                              },
                              E.id,
                            ),
                          )
                        : a.jsx("p", {
                            className: "px-3 py-1.5 text-sm text-gray-500",
                            children: l("player.noPlaylists"),
                          }),
                  }),
                ],
              }),
            }),
            a.jsx("button", {
              onClick: s,
              title: l("player.favorite"),
              className:
                "p-2 rounded-full hover:bg-white/10 transition-colors group",
              children: a.jsx(Ip, {
                className: `w-5 h-5 transition-all ${o ? "scale-125" : "group-active:scale-90"} ${u.isFavoriteSong(e.id) ? "fill-[#3A8FE0] text-[#3A8FE0] drop-shadow-[0_0_8px_rgba(58,143,224,0.6)]" : "text-gray-400 group-hover:text-white"}`,
              }),
            }),
            a.jsx("button", {
              onClick: () => c.toggleQueue(),
              title: l("player.showQueue"),
              className: `p-2 rounded-full transition-colors hover:bg-white/10 ${c.isQueueOpen ? "text-[#3A8FE0] bg-[#3A8FE0]/10" : "text-gray-400 hover:text-white"}`,
              children: a.jsx(uy, { className: "w-5 h-5" }),
            }),
            a.jsxs("div", {
              className:
                "flex items-center group/volume ml-2 pl-2 border-l border-white/10 h-8",
              children: [
                a.jsx("button", {
                  onClick: P,
                  className:
                    "p-1.5 text-gray-400 hover:text-white transition-colors",
                  children: b
                    ? a.jsx(iy, { className: "w-5 h-5" })
                    : m > 0.5
                      ? a.jsx(sy, { className: "w-5 h-5" })
                      : a.jsx(oy, { className: "w-5 h-5" }),
                }),
                a.jsx("div", {
                  className:
                    "w-0 group-hover/volume:w-24 transition-all duration-300 overflow-hidden flex items-center mx-1",
                  children: a.jsx("input", {
                    ref: w,
                    type: "range",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    value: m,
                    onChange: (E) => c.setVolume(parseFloat(E.target.value)),
                    className: "volume-slider",
                    title: "Volume",
                  }),
                }),
              ],
            }),
          ],
        })
      : null;
  },
  xy = ({ navigateToArtist: e }) => {
    const { t } = Le(),
      n = y.useContext(kt),
      r = y.useContext(Rn),
      s = y.useContext(Of),
      { partyState: o, isHost: i, togglePartyPlayer: l } = y.useContext(et),
      [c, u] = y.useState(!1),
      [d, f] = y.useState(!1),
      p = i || !o ? n.currentSong : o.currentSong,
      v = i || !o ? n.isPlaying : o.isPlaying,
      w = i || !o ? n.currentTime : o.currentTime,
      x = (p == null ? void 0 : p.duration) ?? 0,
      R = async () => {
        var B;
        if (!p || c) return;
        const V =
          (B = p.downloadUrl.find((G) => G.quality === n.currentQuality)) ==
          null
            ? void 0
            : B.url;
        if (V) {
          u(!0);
          try {
            const le = await (await fetch(V)).blob(),
              U = window.URL.createObjectURL(le),
              T = document.createElement("a");
            ((T.style.display = "none"), (T.href = U));
            const M = p.name.endsWith(".mp3") ? "" : ".mp3";
            ((T.download = `${p.name} - ${p.artists.primary.map((A) => A.name).join(", ")}${M}`),
              document.body.appendChild(T),
              T.click(),
              window.URL.revokeObjectURL(U),
              T.remove());
          } catch (G) {
            console.error("Download failed:", G);
          } finally {
            u(!1);
          }
        }
      },
      m = () => {
        if (!p) return;
        (r.isFavoriteSong(p.id) || (f(!0), setTimeout(() => f(!1), 300)),
          r.toggleFavoriteSong(p));
      },
      h = () => {
        p &&
          s.showModal({
            title: t("modals.createPlaylist.title"),
            content: a.jsx(fg, {
              initialSong: p,
              onCancel: s.hideModal,
              onConfirm: (V, B) => {
                (r.createPlaylist(V, B, [p]), s.hideModal());
              },
            }),
          });
      },
      g = () => {
        o
          ? n.toggleQueue()
          : s.showModal({ content: a.jsx(ey, { onClose: s.hideModal }) });
      };
    if (!p)
      return a.jsx("div", {
        className:
          "h-full glass-panel-heavy border-t border-white/10 flex items-center justify-center",
        children: a.jsx("p", {
          className:
            "text-gray-500 font-medium tracking-wide text-sm uppercase",
          children: t("player.noSong"),
        }),
      });
    const k = x > 0 ? (w / x) * 100 : 0,
      b = r.isFavoriteSong(p.id),
      { togglePlay: P, ...E } = n,
      F = () => {
        o ? (i || o.mode === "collaborative") && l() : P();
      };
    return a.jsxs("div", {
      className:
        "relative h-full glass-panel-heavy px-4 md:px-8 grid grid-cols-[1fr_auto] md:grid-cols-[300px_1fr_300px] items-center gap-4 z-50 transition-all duration-300 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]",
      children: [
        a.jsx("div", {
          className:
            "absolute top-0 left-0 right-0 h-[2px] bg-white/5 md:hidden pointer-events-none",
          children: a.jsx("div", {
            className: "bg-[#3A8FE0] h-full shadow-[0_0_10px_#3A8FE0]",
            style: { width: `${k}%` },
          }),
        }),
        a.jsx("div", {
          className: "flex justify-start min-w-0",
          children: a.jsx(my, { song: p, navigateToArtist: e }),
        }),
        a.jsxs("div", {
          className:
            "hidden md:flex flex-col items-center justify-center w-full max-w-2xl mx-auto",
          children: [
            a.jsx(gy, { ...E, isPlaying: v, togglePlay: P }),
            a.jsx(yy, { currentTime: w, duration: x, seek: n.seek }),
          ],
        }),
        a.jsx("div", {
          className: "hidden md:flex justify-end",
          children: a.jsx(vy, {
            song: p,
            onDownload: R,
            isDownloading: c,
            onAddToPlaylist: h,
            onToggleFavorite: m,
            isHeartAnimating: d,
            handlePartyModeClick: g,
          }),
        }),
        a.jsxs("div", {
          className: "flex md:hidden items-center gap-4 pr-2",
          children: [
            a.jsx("button", {
              onClick: m,
              title: t("player.favorite"),
              className: "p-2",
              children: a.jsx(Ip, {
                className: `w-6 h-6 transition-all ${d ? "scale-125" : ""} ${b ? "fill-[#3A8FE0] text-[#3A8FE0] drop-shadow-[0_0_5px_rgba(58,143,224,0.5)]" : "text-gray-400"}`,
              }),
            }),
            a.jsx("button", {
              onClick: F,
              className: `w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-lg shadow-white/10 active:scale-95 border-2 border-transparent ${v ? "" : "border-[#3A8FE0]"}`,
              children: v
                ? a.jsx(Mp, { className: "w-6 h-6" })
                : a.jsx(Np, { className: "w-6 h-6 pl-0.5" }),
            }),
          ],
        }),
      ],
    });
  },
  wy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      children: [
        a.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M14.828 14.828a4.072 4.072 0 01-5.656 0M9 10.5h.008v.008H9v-.008zm6 0h.008v.008H15v-.008z",
        }),
        a.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        }),
      ],
    }),
  ky = () => {
    const {
        partyState: e,
        sendReaction: t,
        endParty: n,
        leaveParty: r,
        isHost: s,
      } = y.useContext(et),
      [o, i] = y.useState(!1),
      { t: l } = Le(),
      c = ["👍", "🔥", "❤️", "🎉", "😂", "👏", "🤯", "😎"];
    if (!e) return null;
    const u = (p) => {
        (t(p), i(!1));
      },
      d = [...(e.participants || [])].sort((p, v) =>
        p.isHost ? -1 : v.isHost ? 1 : p.name.localeCompare(v.name),
      ),
      f = e.participants.length;
    return a.jsxs("div", {
      children: [
        a.jsx("div", {
          className:
            "flex items-center -space-x-2 hover:space-x-0 transition-all duration-300 ease-in-out",
          children: d.map((p) =>
            a.jsx(
              "img",
              {
                src: p.imageUrl,
                alt: p.name,
                title: `${p.name}${p.isHost ? ` (${l("queue.host")})` : ""}`,
                className:
                  "w-10 h-10 rounded-full border-2 border-black/50 shadow-md transition-all duration-300 hover:scale-110 hover:z-10",
              },
              p.id,
            ),
          ),
        }),
        a.jsxs("div", {
          className: "flex items-center gap-2 mt-3",
          children: [
            a.jsxs("span", {
              className: "relative flex h-2.5 w-2.5",
              children: [
                a.jsx("span", {
                  className:
                    "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75",
                }),
                a.jsx("span", {
                  className:
                    "relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500",
                }),
              ],
            }),
            a.jsxs("p", {
              className: "text-xs text-gray-300",
              children: [
                a.jsx("span", {
                  className: "font-bold text-white",
                  children: f,
                }),
                " ",
                l("queue.online"),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "pt-4 mt-4 border-t border-white/10 relative",
          children: [
            o &&
              a.jsx("div", {
                className:
                  "absolute bottom-full mb-2 grid grid-cols-4 gap-2 bg-black/50 backdrop-blur-sm p-2 rounded-lg border border-white/10",
                children: c.map((p) =>
                  a.jsx(
                    "button",
                    {
                      onClick: () => u(p),
                      className:
                        "text-2xl p-2 rounded-lg hover:bg-white/20 transition-colors",
                      children: p,
                    },
                    p,
                  ),
                ),
              }),
            a.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                a.jsx("button", {
                  onClick: () => i((p) => !p),
                  className:
                    "w-11 h-11 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-colors border border-white/20",
                  title: l("queue.sendReaction"),
                  children: a.jsx(wy, { className: "w-6 h-6" }),
                }),
                a.jsx("button", {
                  onClick: s ? n : r,
                  className:
                    "flex-1 h-11 bg-red-700 rounded-full text-white text-sm font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-700/20 hover:shadow-red-600/30",
                  children: l(s ? "queue.endParty" : "queue.leaveParty"),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Cy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("circle", { cx: "12", cy: "12", r: "1" }),
        a.jsx("circle", { cx: "19", cy: "12", r: "1" }),
        a.jsx("circle", { cx: "5", cy: "12", r: "1" }),
      ],
    }),
  du = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        a.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Sy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
        a.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
        a.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
        a.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
        a.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
        a.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" }),
      ],
    }),
  _y = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M5 12.55a11 11 0 0 1 14.08 0" }),
        a.jsx("path", { d: "M1.42 9a16 16 0 0 1 21.16 0" }),
        a.jsx("path", { d: "M8.53 16.11a6 6 0 0 1 6.95 0" }),
        a.jsx("line", { x1: "12", y1: "20", x2: "12.01", y2: "20" }),
      ],
    }),
  by = Se.memo(
    ({
      song: e,
      isPlaying: t,
      onPlay: n,
      navigateToArtist: r,
      addedBy: s,
      isGhost: o = !1,
    }) => {
      var g, k, b, P;
      const { removeSongFromQueue: i, moveSongInQueue: l } = y.useContext(kt),
        {
          partyState: c,
          myId: u,
          isHost: d,
          removeSongFromPartyQueue: f,
        } = y.useContext(et),
        { t: p } = Le(),
        v =
          ((k =
            (g = e.image) == null
              ? void 0
              : g.find((E) => E.quality === "50x50")) == null
            ? void 0
            : k.url) ||
          ((P = (b = e.image) == null ? void 0 : b[0]) == null
            ? void 0
            : P.url),
        [w, x] = y.useState(!1),
        R = y.useRef(null);
      y.useEffect(() => {
        const E = (F) => {
          R.current && !R.current.contains(F.target) && x(!1);
        };
        return (
          document.addEventListener("mousedown", E),
          () => document.removeEventListener("mousedown", E)
        );
      }, []);
      const m = (E) => {
          (E(), x(!1));
        },
        h =
          d ||
          ((c == null ? void 0 : c.mode) === "collaborative" &&
            e.addedBy === u);
      return a.jsxs("div", {
        onClick: n,
        className: `flex items-center p-2 rounded-lg cursor-pointer transition-colors duration-200 ${o ? "bg-white/5 shadow-lg" : ""} ${t ? "bg-white/10" : "hover:bg-white/10"}`,
        children: [
          a.jsxs("div", {
            className: "relative flex-shrink-0 w-10 h-10 mr-3",
            children: [
              a.jsx("img", {
                src: v,
                alt: e.name,
                className:
                  "w-full h-full rounded-md object-cover animate-image-appear",
                loading: "lazy",
              }),
              s &&
                a.jsx("img", {
                  src: s.imageUrl,
                  title: `Added by ${s.name}`,
                  className:
                    "w-5 h-5 rounded-full absolute -bottom-1 -right-1 border-2 border-[#163A6B] shadow-md",
                }),
            ],
          }),
          a.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [
              a.jsx("p", {
                className: `font-semibold truncate ${t ? "text-[#3A8FE0]" : "text-white"}`,
                children: e.name,
              }),
              a.jsx("p", {
                className: "text-sm text-gray-400 truncate",
                children: e.artists.primary.map((E, F) =>
                  a.jsxs(
                    Se.Fragment,
                    {
                      children: [
                        a.jsx("span", {
                          onClick: (V) => {
                            (V.stopPropagation(), r(E.id));
                          },
                          className: "hover:underline cursor-pointer",
                          children: E.name,
                        }),
                        F < e.artists.primary.length - 1 && ", ",
                      ],
                    },
                    E.id,
                  ),
                ),
              }),
            ],
          }),
          !o &&
            (!c || h) &&
            a.jsxs("div", {
              className: "relative",
              ref: R,
              children: [
                a.jsx("button", {
                  onClick: (E) => {
                    (E.stopPropagation(), x((F) => !F));
                  },
                  className:
                    "p-2 rounded-full hover:bg-white/20 text-gray-400 hover:text-white",
                  children: a.jsx(Cy, { className: "w-5 h-5" }),
                }),
                w &&
                  a.jsxs("div", {
                    className:
                      "absolute bottom-full right-0 mb-2 w-48 bg-[#163A6B] border border-white/10 rounded-lg shadow-2xl p-2 z-50",
                    children: [
                      !c &&
                        a.jsx("button", {
                          onClick: () => m(() => l(e.id, "top")),
                          className:
                            "w-full text-left px-3 py-2 text-sm rounded-md hover:bg-white/10",
                          children: p("queue.moveToTop"),
                        }),
                      !c &&
                        a.jsx("button", {
                          onClick: () => m(() => l(e.id, "bottom")),
                          className:
                            "w-full text-left px-3 py-2 text-sm rounded-md hover:bg-white/10",
                          children: p("queue.moveToBottom"),
                        }),
                      a.jsx("button", {
                        onClick: () => m(() => (c ? f(e.id) : i(e.id))),
                        className:
                          "w-full text-left px-3 py-2 text-sm rounded-md hover:bg-white/10 text-red-400 hover:text-red-300",
                        children: p("queue.removeFromQueue"),
                      }),
                    ],
                  }),
              ],
            }),
        ],
      });
    },
  ),
  jy = Se.memo(
    ({
      song: e,
      index: t,
      isNowPlaying: n = !1,
      draggedIndex: r,
      dropTargetIndex: s,
      onDragStart: o,
      onDragEnter: i,
      onDragEnd: l,
      onDrop: c,
      onPlay: u,
      navigateToArtist: d,
      addedBy: f,
    }) => {
      const p = r === t,
        v = s === t && r !== t,
        { partyState: w, isHost: x } = y.useContext(et),
        R = !n && (!w || x || w.mode === "collaborative"),
        m = (h) => {
          if (!R) {
            h.preventDefault();
            return;
          }
          h.dataTransfer.effectAllowed = "move";
          const g = new Image();
          ((g.src =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
            h.dataTransfer.setDragImage(g, 0, 0),
            setTimeout(() => o(t), 0));
        };
      return a.jsxs("div", {
        draggable: R,
        onDragStart: m,
        onDragEnter: (h) => {
          p || (R && i(t));
        },
        onDragEnd: l,
        onDrop: (h) => {
          (h.preventDefault(), R && c(t));
        },
        onDragOver: (h) => h.preventDefault(),
        className: "touch-none",
        children: [
          a.jsx("div", {
            className: "w-full transition-all duration-200 ease-out",
            style: {
              height: v ? "2px" : "0px",
              opacity: v ? 1 : 0,
              margin: v ? "2px 0" : "0",
              backgroundColor: "#3A8FE0",
            },
          }),
          a.jsx("div", {
            className: `transition-opacity duration-200 ${p ? "opacity-40" : "opacity-100"}`,
            children: a.jsx(by, {
              song: e,
              isPlaying: n,
              onPlay: u,
              navigateToArtist: d,
              addedBy: f,
            }),
          }),
        ],
      });
    },
  ),
  fu = ({ navigateToArtist: e }) => {
    const {
        currentQueue: t,
        currentSong: n,
        playSong: r,
        reorderQueue: s,
        contextId: o,
        contextType: i,
        autoplayStartIndex: l,
        repeatMode: c,
      } = y.useContext(kt),
      { partyState: u, isHost: d, reorderPartyQueue: f } = y.useContext(et),
      { t: p } = Le(),
      [v, w] = y.useState(null),
      [x, R] = y.useState(null),
      m = u ? u.currentQueue || [] : t,
      h = u ? u.currentSong : n,
      g = u
        ? { type: "party", id: u.partyId }
        : { type: i || "queue", id: o || (h == null ? void 0 : h.id) || "" },
      k = h ? m.findIndex((N) => N.id === h.id) : -1,
      b = k !== -1 ? m.slice(k + 1) : m,
      P = k !== -1 ? m.slice(0, k) : [],
      F = !u && c === "off" && b.length === 0,
      V = (N) => w(N),
      B = (N) => {
        v !== null && v !== N && R(N);
      },
      G = (N) => {
        v !== null && (u ? f(v, N) : s(v, N), le());
      },
      le = () => {
        (w(null), R(null));
      },
      U = (N) => {
        N.id === (h == null ? void 0 : h.id) || (u && !d) || r(N, m, g);
      },
      T = {
        draggedIndex: v,
        dropTargetIndex: x,
        onDragStart: V,
        onDragEnter: B,
        onDrop: G,
        onDragEnd: le,
        navigateToArtist: e,
      },
      M = (N, S, z = !1) => {
        const j =
          u && "addedBy" in N
            ? u.participants.find((O) => O.id === N.addedBy)
            : void 0;
        return a.jsx(jy, {
          ...T,
          onPlay: () => U(N),
          song: N,
          index: S,
          isNowPlaying: z,
          addedBy: j,
        });
      },
      A = () =>
        a.jsxs("div", {
          className:
            "my-3 p-3 bg-white/5 border border-white/10 rounded-lg flex items-center space-x-3 animate-in fade-in",
          children: [
            a.jsx("div", {
              className: "p-2 bg-[#3A8FE0]/20 rounded-full flex-shrink-0",
              children: a.jsx(_y, { className: "w-5 h-5 text-[#3A8FE0]" }),
            }),
            a.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [
                a.jsx("p", {
                  className: "font-bold text-white text-sm",
                  children: p("queue.autoplay"),
                }),
                a.jsx("p", {
                  className:
                    "text-[10px] md:text-xs text-gray-400 leading-tight",
                  children: p("queue.autoplaySubtitle"),
                }),
              ],
            }),
          ],
        });
    return a.jsxs("div", {
      className: "flex-1 overflow-y-auto space-y-1 custom-scrollbar pr-1",
      children: [
        h &&
          k !== -1 &&
          a.jsxs("div", {
            className: "mb-4",
            children: [
              a.jsx("p", {
                className:
                  "text-sm font-bold uppercase text-gray-400 mb-2 px-2",
                children: p("queue.nowPlaying"),
              }),
              M(h, k, !0),
            ],
          }),
        b.length > 0 &&
          a.jsxs("div", {
            className: "mb-4",
            children: [
              a.jsx("p", {
                className:
                  "text-sm font-bold uppercase text-gray-400 mb-2 px-2",
                children: p("queue.upNext"),
              }),
              b.map((N, S) => {
                const z = k + 1 + S,
                  j = !u && l !== null && z === l;
                return a.jsxs(
                  Se.Fragment,
                  { children: [j && a.jsx(A, {}), M(N, z)] },
                  N.id + z,
                );
              }),
            ],
          }),
        F && a.jsx(A, {}),
        P.length > 0 &&
          a.jsxs("div", {
            className: "pt-4 border-t border-white/10 mt-4",
            children: [
              a.jsx("p", {
                className:
                  "text-sm font-bold uppercase text-gray-400 mb-2 px-2",
                children: p("queue.previouslyPlayed"),
              }),
              P.map((N, S) =>
                a.jsx(Se.Fragment, { children: M(N, S) }, N.id + S),
              ),
            ],
          }),
        m.length === 0 &&
          a.jsxs("div", {
            className:
              "flex flex-col items-center justify-center h-full text-center",
            children: [
              a.jsx(Sy, { className: "w-12 h-12 text-gray-600 mb-4" }),
              a.jsx("h3", {
                className: "font-bold text-gray-400",
                children: p("queue.empty"),
              }),
              a.jsx("p", {
                className: "text-sm text-gray-500",
                children: p("queue.emptySubtitle"),
              }),
            ],
          }),
      ],
    });
  },
  Ey = ({ navigateToArtist: e }) => {
    const { partyState: t } = y.useContext(et),
      { toggleQueue: n } = y.useContext(kt),
      { t: r } = Le(),
      [s, o] = y.useState(!1),
      i = () => {
        t != null &&
          t.partyId &&
          navigator.clipboard.writeText(t.partyId).then(() => {
            (o(!0), setTimeout(() => o(!1), 2e3));
          });
      };
    return a.jsx("aside", {
      className:
        "w-full bg-black/40 backdrop-blur-3xl p-6 flex flex-col h-full border-l border-white/10 shadow-2xl",
      children: t
        ? a.jsxs(a.Fragment, {
            children: [
              a.jsxs("div", {
                className:
                  "flex justify-between items-center mb-6 flex-shrink-0",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      a.jsx("h2", {
                        className:
                          "text-2xl font-bold text-white tracking-tight",
                        children: r("queue.party"),
                      }),
                      a.jsxs("button", {
                        onClick: i,
                        title: r("queue.copyCode"),
                        className:
                          "relative text-xs font-bold uppercase bg-[#3A8FE0]/20 text-[#3A8FE0] px-3 py-1 rounded-md hover:bg-[#3A8FE0]/30 transition-all duration-200 border border-[#3A8FE0]/20",
                        style: { minWidth: "70px" },
                        children: [
                          a.jsx("span", {
                            className: `transition-opacity duration-300 ${s ? "opacity-0" : "opacity-100"}`,
                            children: t.partyId,
                          }),
                          a.jsx("span", {
                            className: `absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${s ? "opacity-100" : "opacity-0"}`,
                            children: r("queue.copied"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  a.jsx("button", {
                    onClick: () => n(!1),
                    className:
                      "p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors",
                    children: a.jsx(du, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              a.jsx("div", {
                className: "flex-shrink-0 mb-6",
                children: a.jsx(ky, {}),
              }),
              a.jsx("hr", { className: "border-white/10 mb-6" }),
              a.jsx(fu, { navigateToArtist: e }),
            ],
          })
        : a.jsxs(a.Fragment, {
            children: [
              a.jsxs("div", {
                className:
                  "flex justify-between items-center mb-6 flex-shrink-0",
                children: [
                  a.jsx("h2", {
                    className: "text-2xl font-bold text-white tracking-tight",
                    children: r("queue.queue"),
                  }),
                  a.jsx("button", {
                    onClick: () => n(!1),
                    className:
                      "p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors",
                    children: a.jsx(du, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              a.jsx(fu, { navigateToArtist: e }),
            ],
          }),
    });
  },
  Py = ({ size: e = "large" }) => {
    const { analyser: t, isPlaying: n } = y.useContext(kt),
      r = y.useRef(null),
      s = y.useRef(null),
      o = y.useRef(null),
      i = e === "large",
      l = y.useRef([]),
      c = y.useRef([]),
      u = y.useRef(0),
      d = y.useRef(0),
      f = y.useRef(0),
      p = y.useRef([]),
      v = y.useRef(0),
      w = y.useRef(0);
    return (
      y.useEffect(() => {
        const x = r.current;
        if (!x || !t) return;
        const R = x.getContext("2d");
        if (!R) return;
        const m = t.frequencyBinCount,
          h = new Uint8Array(m),
          g = () => {
            if (
              ((s.current = requestAnimationFrame(g)),
              x.width === 0 || x.height === 0)
            )
              return;
            t.getByteFrequencyData(h);
            const k = x.width / 2,
              b = x.height / 2;
            R.clearRect(0, 0, x.width, x.height);
            const P =
                h.slice(0, Math.floor(m * 0.05)).reduce((j, O) => j + O, 0) /
                  Math.floor(m * 0.05) || 0,
              E =
                h
                  .slice(Math.floor(m * 0.2), Math.floor(m * 0.5))
                  .reduce((j, O) => j + O, 0) / Math.floor(m * 0.3) || 0,
              F =
                h.slice(Math.floor(m * 0.5), m).reduce((j, O) => j + O, 0) /
                  (m - Math.floor(m * 0.5)) || 0,
              V = 0.1;
            ((u.current += (P - u.current) * V),
              (d.current += (E - d.current) * V),
              (f.current += (F - f.current) * V),
              c.current.forEach((j) => {
                ((j.z -= 0.2),
                  j.z <= 0 &&
                    ((j.x = (Math.random() - 0.5) * x.width * 1.5),
                    (j.y = (Math.random() - 0.5) * x.height * 1.5),
                    (j.z = x.width)));
                const O = 128 / j.z,
                  q = j.x * O + k,
                  se = j.y * O + b;
                if (q > 0 && q < x.width && se > 0 && se < x.height) {
                  const X = (1 - j.z / x.width) * 2,
                    L = (1 - j.z / x.width) * (0.3 + (f.current / 255) * 0.7);
                  ((R.fillStyle = `rgba(58, 143, 224, ${L})`),
                    R.beginPath(),
                    R.arc(q, se, Math.max(0, X), 0, Math.PI * 2),
                    R.fill());
                }
              }));
            const B = x.width / 7 + (u.current / 255) * (x.width / 10),
              G = R.createRadialGradient(k, b, 0, k, b, B * 1.2),
              le = `hsl(209, 73%, ${55 + (f.current / 255) * 15}%)`;
            (G.addColorStop(0, le),
              G.addColorStop(0.6, "#0A2D6E"),
              G.addColorStop(
                1,
                `hsl(212, 74%, ${30 + (u.current / 255) * 10}%)`,
              ),
              (R.fillStyle = G),
              R.beginPath());
            const U = 128;
            for (let j = 0; j <= U; j++) {
              const O = (j / U) * Math.PI * 2,
                q =
                  Math.sin(O * 8 + Date.now() * 0.005) *
                  (d.current / 255) *
                  (x.width / 25),
                se = Math.floor((j / U) * (m * 0.5)) + Math.floor(m * 0.5),
                X = (h[se] / 255) * (x.width / 8) * (f.current / 255),
                L = B + q + X,
                W = k + Math.cos(O) * L,
                ee = b + Math.sin(O) * L;
              j === 0 ? R.moveTo(W, ee) : R.lineTo(W, ee);
            }
            (R.closePath(), R.fill());
            const T = (j = 1) => {
                const O = Math.random() * Math.PI * 2,
                  q = (0.2 + Math.random() * 0.5) * j,
                  se = B * (0.8 + Math.random() * 0.2),
                  X = 80 + Math.random() * 40,
                  L = 1 + Math.random() * 2;
                l.current.push({
                  x: k + Math.cos(O) * se,
                  y: b + Math.sin(O) * se,
                  vx: Math.cos(O) * q,
                  vy: Math.sin(O) * q,
                  initialRadius: L,
                  radius: L,
                  life: X,
                  maxLife: X,
                });
              },
              M = (u.current / 255) * 1.5;
            for (w.current += M; w.current > 1; ) (T(0.5), (w.current -= 1));
            (p.current.push(P), p.current.length > 30 && p.current.shift());
            const A = p.current.reduce((j, O) => j + O, 0) / p.current.length,
              N = 1.25,
              S = 120,
              z = Date.now();
            if (P > A * N && z - v.current > S) {
              v.current = z;
              const j = Math.min(2.5, (P - A) / 40),
                O = Math.floor(1 + j * 1.5);
              for (let q = 0; q < O; q++) T(1 + j * 0.5);
            }
            ((l.current = l.current.filter(
              (j) => j.life > 0 && j.radius > 0.1,
            )),
              l.current.forEach((j) => {
                j.life--;
                const O = k - j.x,
                  q = b - j.y,
                  se = Math.sqrt(O * O + q * q),
                  X = 0.18;
                ((j.vx += (O / se) * X),
                  (j.vy += (q / se) * X),
                  (j.vx *= 0.94),
                  (j.vy *= 0.94),
                  (j.x += j.vx),
                  (j.y += j.vy),
                  (j.radius = j.initialRadius * (j.life / j.maxLife)),
                  se < B * 1.1 && (j.radius *= 0.92),
                  (R.fillStyle = "#6CB4F0"),
                  R.beginPath(),
                  R.arc(j.x, j.y, Math.max(0, j.radius), 0, Math.PI * 2),
                  R.fill());
              }));
          };
        return (
          n
            ? g()
            : (s.current &&
                (cancelAnimationFrame(s.current), (s.current = null)),
              R.clearRect(0, 0, x.width, x.height),
              (l.current = []),
              (p.current = []),
              (u.current = 0),
              (d.current = 0),
              (f.current = 0),
              (w.current = 0)),
          () => {
            s.current && cancelAnimationFrame(s.current);
          }
        );
      }, [t, n]),
      y.useEffect(() => {
        var h;
        const x =
          (h = o.current) == null
            ? void 0
            : h.querySelector(".welkin-logo-part");
        if (!x) return;
        const R = (g, k) => {
            c.current = [];
            for (let P = 0; P < 100; P++)
              c.current.push({
                x: (Math.random() - 0.5) * g * 1.5,
                y: (Math.random() - 0.5) * k * 1.5,
                z: Math.random() * g,
              });
          },
          m = new ResizeObserver((g) => {
            window.requestAnimationFrame(() => {
              if (!g || g.length === 0) return;
              const { width: k, height: b } = g[0].contentRect;
              r.current &&
                ((r.current.width = k), (r.current.height = b), R(k, b));
            });
          });
        return (m.observe(x), () => m.disconnect());
      }, []),
      a.jsx("div", {
        className: `relative text-center cursor-default select-none flex items-center justify-center ${i ? "h-20" : "h-16"}`,
        children: a.jsxs("div", {
          ref: o,
          className: "flex items-baseline gap-0",
          style: {
            fontFamily: '"Inter", "Outfit", sans-serif',
            fontSize: i ? "28px" : "22px",
            lineHeight: "1",
          },
          children: [
            a.jsxs("div", {
              className: "relative welkin-logo-part",
              children: [
                a.jsx("span", {
                  className: `font-extrabold text-white tracking-tight transition-all duration-700 ease-in-out ${n ? "opacity-0 blur-lg scale-125" : "opacity-100 blur-0 scale-100"}`,
                  children: "Welkin",
                }),
                a.jsx("canvas", {
                  ref: r,
                  className: `absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${n ? "opacity-100 scale-100" : "opacity-0 scale-0"}`,
                }),
              ],
            }),
            a.jsx("span", {
              className: `text-[#3A8FE0] font-bold transition-all duration-700 ease-in-out ${n ? "opacity-80" : "opacity-100"}`,
              children: ".Music",
            }),
          ],
        }),
      })
    );
  },
  Ty = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: a.jsx("path", { d: "M15 18l-6-6 6-6" }),
    }),
  Ry = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: a.jsx("path", { d: "M9 18l6-6-6-6" }),
    }),
  pu = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        a.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      ],
    }),
  hu = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        a.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  mu = ({ canGoBack: e, canGoForward: t, goBack: n, goForward: r }) =>
    a.jsxs("div", {
      className: "flex items-center space-x-2",
      children: [
        a.jsx("button", {
          onClick: n,
          disabled: !e,
          className:
            "p-2 rounded-full bg-black/30 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-black/60 transition-all",
          "aria-label": "Go back",
          children: a.jsx(Ty, { className: "h-5 w-5" }),
        }),
        a.jsx("button", {
          onClick: r,
          disabled: !t,
          className:
            "p-2 rounded-full bg-black/30 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-black/60 transition-all",
          "aria-label": "Go forward",
          children: a.jsx(Ry, { className: "h-5 w-5" }),
        }),
      ],
    }),
  gu = ({ onSearch: e, searchHistory: t, setAppState: n, isMini: r }) => {
    const { t: s } = Le(),
      [o, i] = Se.useState(""),
      [l, c] = Se.useState(!1),
      u = Se.useRef(null);
    Se.useEffect(() => {
      const v = (w) => {
        u.current && !u.current.contains(w.target) && c(!1);
      };
      return (
        document.addEventListener("mousedown", v),
        () => document.removeEventListener("mousedown", v)
      );
    }, []);
    const d = (v) => {
        const w = v.trim();
        w &&
          (n((x) => {
            const R = w.toLowerCase();
            x.searchHistory = [
              w,
              ...x.searchHistory.filter((m) => m.toLowerCase() !== R),
            ].slice(0, 10);
          }),
          e(w),
          c(!1));
      },
      f = (v) => {
        (i(v), d(v));
      },
      p = (v, w) => {
        (v.stopPropagation(),
          n((x) => {
            x.searchHistory = x.searchHistory.filter((R) => R !== w);
          }));
      };
    return a.jsxs("div", {
      className: "relative w-full max-w-2xl group mx-auto z-50",
      ref: u,
      children: [
        a.jsxs("div", {
          className: `relative transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] transform ${l ? "scale-[1.02]" : "scale-100"}`,
          children: [
            a.jsx("div", {
              className: `absolute -inset-[1px] bg-gradient-to-r from-[#3A8FE0] via-[#6CB4F0] to-[#3A8FE0] rounded-2xl blur-md transition-opacity duration-700 ease-in-out ${l ? "opacity-30" : "opacity-0"}`,
            }),
            a.jsxs("div", {
              className: "relative",
              children: [
                a.jsx("input", {
                  type: "text",
                  value: o,
                  onChange: (v) => i(v.target.value),
                  onKeyDown: (v) => {
                    v.key === "Enter" && (v.preventDefault(), d(o));
                  },
                  onFocus: () => c(!0),
                  placeholder: s("search.placeholder"),
                  className: `w-full ${r ? "py-2 pl-10 pr-8 text-sm" : "py-4 pl-14 pr-12 text-lg"} font-medium placeholder-gray-500 text-white border transition-all duration-300 shadow-lg rounded-2xl
                            ${l ? "bg-[#0B1E3D] border-[#3A8FE0]/30 shadow-[0_10px_40px_-10px_rgba(58,143,224,0.2)]" : "bg-[#0B1E3D] border-white/5 hover:bg-[#202020] hover:border-white/10"}
                        `,
                }),
                a.jsx("div", {
                  className: `absolute inset-y-0 left-0 flex items-center ${r ? "pl-3" : "pl-5"} pointer-events-none transition-colors duration-300 ${l ? "text-[#3A8FE0]" : "text-gray-400"}`,
                  children: a.jsx(pu, {
                    className: `${r ? "h-4 w-4" : "h-6 w-6"}`,
                  }),
                }),
                o &&
                  a.jsx("button", {
                    onClick: () => i(""),
                    type: "button",
                    className:
                      "absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-white transition-colors",
                    "aria-label": "Clear search",
                    children: a.jsx(hu, { className: "w-5 h-5" }),
                  }),
              ],
            }),
          ],
        }),
        l &&
          o === "" &&
          t.length > 0 &&
          a.jsxs("div", {
            className:
              "absolute top-full left-0 right-0 mt-4 bg-[#0B1E3D]/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300",
            children: [
              a.jsx("div", {
                className:
                  "px-5 py-4 bg-white/5 border-b border-white/5 flex justify-between items-center",
                children: a.jsx("p", {
                  className:
                    "text-xs text-gray-400 font-bold uppercase tracking-widest",
                  children: s("search.recent"),
                }),
              }),
              a.jsx("div", {
                className: "max-h-80 overflow-y-auto custom-scrollbar p-2",
                children: t.map((v, w) =>
                  a.jsxs(
                    "div",
                    {
                      onClick: () => f(v),
                      className:
                        "group/item flex items-center justify-between w-full text-left px-4 py-3.5 rounded-xl text-gray-300 hover:bg-white/5 hover:text-white cursor-pointer transition-all duration-200",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center gap-4 overflow-hidden",
                          children: [
                            a.jsx("div", {
                              className:
                                "p-2 rounded-lg bg-white/5 text-gray-500 group-hover/item:text-[#3A8FE0] group-hover/item:bg-[#3A8FE0]/10 transition-colors",
                              children: a.jsx(pu, { className: "w-4 h-4" }),
                            }),
                            a.jsx("span", {
                              className: "truncate font-medium text-base",
                              children: v,
                            }),
                          ],
                        }),
                        a.jsx("button", {
                          onClick: (x) => p(x, v),
                          className:
                            "p-2 rounded-full opacity-0 group-hover/item:opacity-100 text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all transform hover:scale-110",
                          children: a.jsx(hu, { className: "w-4 h-4" }),
                        }),
                      ],
                    },
                    w,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  },
  Ny = ({
    canGoBack: e,
    canGoForward: t,
    goBack: n,
    goForward: r,
    onSearch: s,
    setActiveView: o,
    searchHistory: i,
    setAppState: l,
    isMini: c,
  }) => {
    const { imageUrl: u } = Se.useContext(Uo);
    return c
      ? a.jsx("header", {
          className:
            "h-16 bg-[#0B1E3D]/90 backdrop-blur-xl px-4 flex items-center gap-4 z-40 flex-shrink-0 border-b border-white/5",
          children: a.jsx("div", {
            className: "flex-1 min-w-0",
            children: a.jsx(gu, {
              onSearch: s,
              searchHistory: i,
              setAppState: l,
              isMini: !0,
            }),
          }),
        })
      : a.jsxs("header", {
          className:
            "h-24 bg-[#0B1E3D]/80 backdrop-blur-xl px-4 flex items-center gap-6 z-40 flex-shrink-0 border-b border-white/5 md:grid md:grid-cols-[16rem_1fr_auto] md:px-8 shadow-sm",
          children: [
            a.jsx("div", {
              className: "hidden md:flex items-center pl-2",
              children: a.jsx(Py, { size: "small" }),
            }),
            a.jsx("div", {
              className: "md:hidden",
              children: a.jsx(mu, {
                canGoBack: e,
                canGoForward: t,
                goBack: n,
                goForward: r,
              }),
            }),
            a.jsx("div", {
              className:
                "flex-1 min-w-0 md:flex md:justify-center px-2 md:px-12",
              children: a.jsx(gu, {
                onSearch: s,
                searchHistory: i,
                setAppState: l,
              }),
            }),
            a.jsxs("div", {
              className: "hidden md:flex justify-end items-center",
              children: [
                a.jsx(mu, {
                  canGoBack: e,
                  canGoForward: t,
                  goBack: n,
                  goForward: r,
                }),
                a.jsx("button", {
                  onClick: () => o("settings"),
                  className:
                    "ml-8 h-12 w-12 rounded-full p-[2px] bg-gradient-to-tr from-[#3A8FE0] to-purple-600 hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#3A8FE0]/20",
                  "aria-label": "Profile and settings",
                  children: a.jsx("div", {
                    className:
                      "h-full w-full rounded-full p-[2px] bg-[#0B1E3D]",
                    children: a.jsx("img", {
                      src: u,
                      alt: "Profile",
                      className: "h-full w-full rounded-full object-cover",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
  },
  Ap = () =>
    a.jsx("div", {
      className: "flex justify-center items-center p-8",
      children: a.jsx("div", {
        className:
          "w-12 h-12 border-4 border-[#3A8FE0] border-t-transparent rounded-full animate-spin",
      }),
    }),
  kv = ({ tabs: e, activeTab: t, onTabClick: n }) => {
    const [r, s] = y.useState({ left: 0, width: 0, opacity: 0 }),
      [o, i] = y.useState(!1),
      l = y.useRef([]),
      c = y.useRef(null);
    return (
      y.useEffect(() => {
        const u = e.findIndex((f) => f.id === t),
          d = l.current[u];
        if (d) {
          const { offsetLeft: f, offsetWidth: p } = d;
          s({ left: f, width: p, opacity: 1 });
        }
        if (!o && d) {
          const f = setTimeout(() => i(!0), 50);
          return () => clearTimeout(f);
        }
      }, [t, e, o]),
      a.jsxs("div", {
        ref: c,
        className: "relative flex space-x-1 bg-white/5 p-1 rounded-full",
        children: [
          a.jsx("div", {
            "aria-hidden": "true",
            className:
              "absolute h-[calc(100%-0.5rem)] top-1 bg-[#3A8FE0] rounded-full shadow-md",
            style: {
              ...r,
              transition: o
                ? "left 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            },
          }),
          e.map((u, d) =>
            a.jsx(
              "button",
              {
                ref: (f) => {
                  l.current[d] = f;
                },
                onClick: () => n(u.id),
                className: `relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none ${t === u.id ? "text-black" : "text-gray-300 hover:text-white"}`,
                children: u.label,
              },
              u.id,
            ),
          ),
        ],
      })
    );
  },
  My = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        a.jsx("polyline", { points: "9 22 9 12 15 12 15 22" }),
      ],
    }),
  Iy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        a.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      ],
    }),
  Ay = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("rect", {
          x: "4",
          y: "4",
          width: "16",
          height: "16",
          rx: "2",
          ry: "2",
        }),
        a.jsx("line", { x1: "9", y1: "20", x2: "9", y2: "4" }),
        a.jsx("line", { x1: "15", y1: "20", x2: "15", y2: "4" }),
      ],
    }),
  Ly = ({ icon: e, label: t, isActive: n, onClick: r }) =>
    a.jsxs("button", {
      onClick: r,
      className: `flex flex-col items-center justify-center gap-1 w-full h-full transition-colors duration-200 ${n ? "text-[#3A8FE0]" : "text-gray-400 hover:text-white"}`,
      children: [
        Se.cloneElement(e, { className: "w-6 h-6" }),
        a.jsx("span", { className: "text-xs font-medium", children: t }),
      ],
    }),
  Dy = ({ activeView: e, setActiveView: t }) => {
    const { imageUrl: n } = y.useContext(Uo),
      { t: r } = Le(),
      s = ["library", "playlist", "album", "artist", "api_playlist"],
      o = [
        {
          id: "home",
          icon: a.jsx(My, {}),
          label: r("sidebar.home"),
          view: "home",
        },
        {
          id: "search",
          icon: a.jsx(Iy, {}),
          label: r("sidebar.search"),
          view: "search",
        },
        {
          id: "library",
          icon: a.jsx(Ay, {}),
          label: r("sidebar.library"),
          view: "library",
        },
        {
          id: "settings",
          icon: a.jsx("img", {
            src: n,
            alt: "Profile",
            className: "w-6 h-6 rounded-full object-cover",
          }),
          label: r("settings.profile.title"),
          view: "settings",
        },
      ];
    return a.jsx("nav", {
      className:
        "fixed bottom-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-lg border-t border-white/10 z-30 flex items-center justify-around md:hidden",
      children: o.map((i) =>
        a.jsx(
          Ly,
          {
            icon: i.icon,
            label: i.label,
            isActive: i.view === "library" ? s.includes(e) : e === i.view,
            onClick: () => t(i.view),
          },
          i.id,
        ),
      ),
    });
  },
  Fy = () => {
    const { partyState: e } = y.useContext(et),
      [t, n] = y.useState([]),
      r = Se.useRef(null);
    return (
      y.useEffect(() => {
        if (e != null && e.reactions && e.reactions.length > 0) {
          const s = e.reactions[e.reactions.length - 1];
          if (s.id !== r.current) {
            r.current = s.id;
            const o = {
              id: s.id,
              emoji: s.emoji,
              x: Math.random() * 20 + 75,
              y: 95,
              size: Math.random() * 24 + 32,
              opacity: 1,
              vy: -1 - Math.random() * 0.8,
              vx: (Math.random() - 0.5) * 0.3,
              sway: Math.random() * Math.PI * 2,
              swaySpeed: 0.05 + Math.random() * 0.05,
              swayMagnitude: 0.15 + Math.random() * 0.1,
              rotation: Math.random() * 40 - 20,
              rotationSpeed: (Math.random() - 0.5) * 1.5,
              age: 0,
              maxAge: 100 + Math.random() * 50,
            };
            n((i) => [...i.slice(-15), o]);
          }
        }
      }, [e == null ? void 0 : e.reactions]),
      y.useEffect(() => {
        const s = setInterval(() => {
          n((o) =>
            o
              .map((i) => {
                const l = i.age / i.maxAge;
                return {
                  ...i,
                  age: i.age + 1,
                  y: i.y + i.vy,
                  vy: i.vy * 0.98 + 0.02,
                  x: i.x + i.vx + Math.sin(i.sway) * i.swayMagnitude,
                  sway: i.sway + i.swaySpeed,
                  vx: i.vx * 0.97,
                  rotation: i.rotation + i.rotationSpeed,
                  rotationSpeed: i.rotationSpeed * 0.97,
                  opacity: 1 - Math.pow(l, 2.5),
                };
              })
              .filter((i) => i.age < i.maxAge),
          );
        }, 33);
        return () => clearInterval(s);
      }, []),
      a.jsx("div", {
        className:
          "absolute inset-0 z-[100] pointer-events-none overflow-hidden",
        children: t.map((s) =>
          a.jsx(
            "div",
            {
              className: "absolute",
              style: {
                left: `${s.x}%`,
                top: `${s.y}%`,
                fontSize: `${s.size}px`,
                opacity: s.opacity,
                transform: `translateX(-50%) rotate(${s.rotation}deg)`,
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                willChange: "transform, opacity",
              },
              children: s.emoji,
            },
            s.id,
          ),
        ),
      })
    );
  },
  Oy = ({ songImage: e, isPlaying: t }) => {
    const [n, r] = y.useState(["", ""]),
      [s, o] = y.useState(0),
      i = y.useRef(null);
    return (
      y.useEffect(() => {
        if (e === i.current) return;
        let l = !1;
        const c = e;
        if (!c) {
          ((i.current = ""),
            r((d) => {
              const f = [...d],
                p = s === 0 ? 1 : 0;
              return ((f[p] = ""), f);
            }),
            o((d) => (d === 0 ? 1 : 0)));
          return;
        }
        const u = new Image();
        return (
          (u.src = c),
          (u.onload = () => {
            l ||
              ((i.current = c),
              r((d) => {
                const f = [...d],
                  p = s === 0 ? 1 : 0;
                return ((f[p] = c), f);
              }),
              o((d) => (d === 0 ? 1 : 0)));
          }),
          () => {
            l = !0;
          }
        );
      }, [e, s]),
      a.jsxs("div", {
        className: `cinematic-bg ${t ? "is-playing" : ""}`,
        children: [
          a.jsx("div", {
            className: "bg-layer-deep",
            style: {
              backgroundImage: n[0] ? `url(${n[0]})` : "none",
              opacity: s === 0 && n[0] ? 0.7 : 0,
            },
          }),
          a.jsx("div", {
            className: "bg-layer-light",
            style: {
              backgroundImage: n[0] ? `url(${n[0]})` : "none",
              opacity: s === 0 && n[0] ? 0.35 : 0,
            },
          }),
          a.jsx("div", {
            className: "bg-layer-deep",
            style: {
              backgroundImage: n[1] ? `url(${n[1]})` : "none",
              opacity: s === 1 && n[1] ? 0.7 : 0,
            },
          }),
          a.jsx("div", {
            className: "bg-layer-light",
            style: {
              backgroundImage: n[1] ? `url(${n[1]})` : "none",
              opacity: s === 1 && n[1] ? 0.35 : 0,
            },
          }),
          a.jsxs("div", {
            className: "orb-canvas",
            children: [
              a.jsx("div", { className: "orb orb-1" }),
              a.jsx("div", { className: "orb orb-2" }),
            ],
          }),
          a.jsx("div", { className: "film-grain" }),
          a.jsx("div", { className: "vignette" }),
        ],
      })
    );
  },
  zy = async (e, t, n, r) => {
    try {
      const s = new URL("https://lrclib.net/api/get");
      (s.searchParams.append("track_name", e),
        s.searchParams.append("artist_name", t),
        s.searchParams.append("album_name", n),
        s.searchParams.append("duration", r.toString()));
      const o = await fetch(So(s.toString()));
      if (!o.ok) throw new Error(`Lyrics not found: ${o.status}`);
      return await o.json();
    } catch (s) {
      try {
        const o = new URL("https://lrclib.net/api/search");
        o.searchParams.append("q", `${e} ${t}`);
        const i = await fetch(So(o.toString()));
        if (!i.ok) throw s;
        const c = (await i.json()).find((u) => Math.abs(u.duration - r) < 5);
        if (c) return c;
        throw s;
      } catch (o) {
        throw o;
      }
    }
  },
  $y = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        a.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  By = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M15 3h6v6" }),
        a.jsx("path", { d: "M9 21H3v-6" }),
        a.jsx("path", { d: "M21 3l-7 7" }),
        a.jsx("path", { d: "M3 21l7-7" }),
      ],
    }),
  Uy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M4 14h6v6" }),
        a.jsx("path", { d: "M20 10h-6V4" }),
        a.jsx("path", { d: "M14 10l7-7" }),
        a.jsx("path", { d: "M3 21l7-7" }),
      ],
    }),
  Qy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        a.jsx("circle", { cx: "12", cy: "12", r: "4" }),
        a.jsx("path", { d: "M12 12h.01" }),
      ],
    }),
  yu = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: a.jsx("path", {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
      }),
    }),
  Vy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", {
          d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm13 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-5Z",
        }),
        a.jsx("path", { d: "M21 14v-3a9 9 0 0 0-18 0v3" }),
        a.jsx("path", { d: "M12 12v.01" }),
      ],
    }),
  Hy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M4 10v4" }),
        a.jsx("path", { d: "M8 8v8" }),
        a.jsx("path", { d: "M12 3v18" }),
        a.jsx("path", { d: "M16 8v8" }),
        a.jsx("path", { d: "M20 10v4" }),
      ],
    }),
  Wy = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: a.jsx("path", { d: "M5 3l14 9-14 9V3z" }),
    }),
  qy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        a.jsx("rect", { x: "6", y: "4", width: "4", height: "16", rx: "2" }),
        a.jsx("rect", { x: "14", y: "4", width: "4", height: "16", rx: "2" }),
      ],
    }),
  Gy = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: a.jsx("path", { d: "M19 20L9 12l10-8v16zM5 19h2V5H5v14z" }),
    }),
  Ky = (e) =>
    a.jsx("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: a.jsx("path", { d: "M5 4l10 8-10 8V4zM19 5h-2v14h2V5z" }),
    }),
  Jy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "M16 3h5v5" }),
        a.jsx("path", { d: "M4 20L21 3" }),
        a.jsx("path", { d: "M21 16v5h-5" }),
        a.jsx("path", { d: "M15 15l6 6" }),
        a.jsx("path", { d: "M4 4l5 5" }),
      ],
    }),
  Yy = (e) =>
    a.jsxs("svg", {
      ...e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        a.jsx("path", { d: "m17 2 4 4-4 4" }),
        a.jsx("path", { d: "M3 11v-1a4 4 0 0 1 4-4h14" }),
        a.jsx("path", { d: "m7 22-4-4 4-4" }),
        a.jsx("path", { d: "M21 13v1a4 4 0 0 1-4 4H3" }),
      ],
    }),
  Xy = Se.memo(({ imageUrl: e }) =>
    a.jsxs("div", {
      className:
        "absolute inset-0 z-0 select-none pointer-events-none overflow-hidden bg-[#0B1E3D] transition-colors duration-1000",
      children: [
        a.jsx("div", {
          className:
            "absolute inset-[-20%] w-[140%] h-[140%] bg-cover bg-center animate-[deep-breathe_25s_infinite_alternate_ease-in-out] opacity-60 blur-[100px] brightness-50 saturate-150",
          style: { backgroundImage: `url(${e})` },
        }),
        a.jsxs("div", {
          className:
            "absolute inset-0 opacity-50 mix-blend-screen filter blur-[80px]",
          children: [
            a.jsx("div", {
              className:
                "absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] rounded-full animate-[orb-drift_25s_infinite_alternate_ease-in-out]",
              style: {
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)",
              },
            }),
            a.jsx("div", {
              className:
                "absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] rounded-full animate-[orb-drift_30s_infinite_alternate_ease-in-out_reverse]",
              style: {
                background:
                  "radial-gradient(circle, rgba(58, 143, 224, 0.4) 0%, transparent 70%)",
              },
            }),
          ],
        }),
        a.jsx("div", {
          className: "absolute inset-0 opacity-[0.08] mix-blend-overlay",
          style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          },
        }),
        a.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#0B1E3D_130%)] opacity-80",
        }),
        a.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-t from-[#0B1E3D] via-[#0B1E3D]/20 to-transparent",
        }),
      ],
    }),
  ),
  Zy = Se.memo(
    ({ isFullscreen: e, onToggleFullscreen: t, onClose: n, visible: r }) =>
      a.jsxs("div", {
        className: `flex items-center gap-2 md:gap-3 z-[100] absolute top-4 right-4 md:top-6 md:right-6 transition-opacity duration-500 ${r ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          a.jsx("button", {
            onClick: t,
            className: `p-2.5 md:p-3 rounded-full transition-all backdrop-blur-md border shadow-lg group hover:scale-105 active:scale-95 ${e ? "bg-black/20 hover:bg-black/40 text-white border-white/10" : "bg-black/40 hover:bg-black/60 text-gray-200 hover:text-white border-white/10"}`,
            title: e ? "Exit Fullscreen" : "Fullscreen",
            children: e
              ? a.jsx(Uy, { className: "w-4 h-4 md:w-5 md:h-5" })
              : a.jsx(By, { className: "w-4 h-4 md:w-5 md:h-5" }),
          }),
          a.jsx("button", {
            onClick: n,
            className: `p-2.5 md:p-3 rounded-full transition-all backdrop-blur-md border shadow-lg group hover:scale-105 active:scale-95 ${e ? "bg-black/20 hover:bg-black/40 text-white border-white/10" : "bg-black/40 hover:bg-black/60 text-gray-200 hover:text-white border-white/10"}`,
            title: "Close Lyrics",
            children: a.jsx($y, { className: "w-4 h-4 md:w-5 md:h-5" }),
          }),
        ],
      }),
  ),
  ev = ({
    is8D: e,
    toggle8D: t,
    isReverb: n,
    reverbMix: r,
    setReverbMix: s,
    toggleReverb: o,
    visible: i,
  }) => {
    const { analyser: l, isPlaying: c } = y.useContext(kt),
      u = y.useRef(null),
      d = y.useRef(null),
      f = y.useRef([]),
      p = y.useRef([]),
      v = y.useRef(0),
      w = y.useRef(0),
      x = y.useRef(0),
      R = y.useRef([]),
      m = y.useRef(0),
      h = y.useRef(0),
      g = () => {
        n ? (r <= 0.35 ? s(0.6) : r <= 0.65 ? s(0.9) : o()) : (s(0.3), o());
      };
    return (
      y.useEffect(() => {
        p.current = [];
        for (let E = 0; E < 100; E++)
          p.current.push({
            x: (Math.random() - 0.5) * 50 * 1.5,
            y: (Math.random() - 0.5) * 50 * 1.5,
            z: Math.random() * 50,
          });
      }, []),
      y.useEffect(() => {
        const k = u.current;
        if (!k) return;
        ((k.width = 50), (k.height = 50));
        const b = k.getContext("2d");
        if (!b) return;
        const P = l ? l.frequencyBinCount : 0,
          E = new Uint8Array(P),
          F = () => {
            if (
              ((d.current = requestAnimationFrame(F)),
              k.width === 0 || k.height === 0)
            )
              return;
            l && l.getByteFrequencyData(E);
            const V = k.width / 2,
              B = k.height / 2;
            b.clearRect(0, 0, k.width, k.height);
            const G =
                E.slice(0, Math.floor(P * 0.05)).reduce((L, W) => L + W, 0) /
                  Math.floor(P * 0.05) || 0,
              le =
                E.slice(Math.floor(P * 0.2), Math.floor(P * 0.5)).reduce(
                  (L, W) => L + W,
                  0,
                ) / Math.floor(P * 0.3) || 0,
              U =
                E.slice(Math.floor(P * 0.5), P).reduce((L, W) => L + W, 0) /
                  (P - Math.floor(P * 0.5)) || 0,
              T = 0.1;
            ((v.current += (G - v.current) * T),
              (w.current += (le - w.current) * T),
              (x.current += (U - x.current) * T),
              p.current.forEach((L) => {
                ((L.z -= 0.2),
                  L.z <= 0 &&
                    ((L.x = (Math.random() - 0.5) * k.width * 1.5),
                    (L.y = (Math.random() - 0.5) * k.height * 1.5),
                    (L.z = k.width)));
                const W = 128 / L.z,
                  ee = L.x * W + V,
                  me = L.y * W + B;
                if (ee > 0 && ee < k.width && me > 0 && me < k.height) {
                  const J = (1 - L.z / k.width) * 2,
                    ie = (1 - L.z / k.width) * (0.3 + (x.current / 255) * 0.7);
                  ((b.fillStyle = `rgba(58, 143, 224, ${ie})`),
                    b.beginPath(),
                    b.arc(ee, me, Math.max(0, J), 0, Math.PI * 2),
                    b.fill());
                }
              }));
            const M = k.width / 7 + (v.current / 255) * (k.width / 10),
              A = b.createRadialGradient(V, B, 0, V, B, M * 1.2),
              N = `hsl(25, 97%, ${55 + (x.current / 255) * 15}%)`;
            (A.addColorStop(0, N),
              A.addColorStop(0.6, "#3A8FE0"),
              A.addColorStop(
                1,
                `hsl(25, 100%, ${30 + (v.current / 255) * 10}%)`,
              ),
              (b.fillStyle = A),
              b.beginPath());
            const S = 128;
            for (let L = 0; L <= S; L++) {
              const W = (L / S) * Math.PI * 2,
                ee =
                  Math.sin(W * 8 + Date.now() * 0.005) *
                  (w.current / 255) *
                  (k.width / 25),
                me = Math.floor((L / S) * (P * 0.5)) + Math.floor(P * 0.5),
                J = (E[me] / 255) * (k.width / 8) * (x.current / 255),
                ie = M + ee + J,
                oe = V + Math.cos(W) * ie,
                Y = B + Math.sin(W) * ie;
              L === 0 ? b.moveTo(oe, Y) : b.lineTo(oe, Y);
            }
            (b.closePath(), b.fill());
            const z = (L = 1) => {
                const W = Math.random() * Math.PI * 2,
                  ee = (0.2 + Math.random() * 0.5) * L,
                  me = M * (0.8 + Math.random() * 0.2),
                  J = 80 + Math.random() * 40,
                  ie = 1 + Math.random() * 2;
                f.current.push({
                  x: V + Math.cos(W) * me,
                  y: B + Math.sin(W) * me,
                  vx: Math.cos(W) * ee,
                  vy: Math.sin(W) * ee,
                  initialRadius: ie,
                  radius: ie,
                  life: J,
                  maxLife: J,
                });
              },
              j = (v.current / 255) * 1.5;
            for (h.current += j; h.current > 1; ) (z(0.5), (h.current -= 1));
            (R.current.push(G), R.current.length > 30 && R.current.shift());
            const O = R.current.reduce((L, W) => L + W, 0) / R.current.length,
              q = 1.25,
              se = 120,
              X = Date.now();
            if (G > O * q && X - m.current > se) {
              m.current = X;
              const L = Math.min(2.5, (G - O) / 40),
                W = Math.floor(1 + L * 1.5);
              for (let ee = 0; ee < W; ee++) z(1 + L * 0.5);
            }
            ((f.current = f.current.filter(
              (L) => L.life > 0 && L.radius > 0.1,
            )),
              f.current.forEach((L) => {
                L.life--;
                const W = V - L.x,
                  ee = B - L.y,
                  me = Math.sqrt(W * W + ee * ee),
                  J = 0.18;
                ((L.vx += (W / me) * J),
                  (L.vy += (ee / me) * J),
                  (L.vx *= 0.94),
                  (L.vy *= 0.94),
                  (L.x += L.vx),
                  (L.y += L.vy),
                  (L.radius = L.initialRadius * (L.life / L.maxLife)),
                  me < M * 1.1 && (L.radius *= 0.92),
                  (b.fillStyle = "#3A8FE0"),
                  b.beginPath(),
                  b.arc(L.x, L.y, Math.max(0, L.radius), 0, Math.PI * 2),
                  b.fill());
              }));
          };
        return (
          c
            ? F()
            : (d.current &&
                (cancelAnimationFrame(d.current), (d.current = null)),
              b.clearRect(0, 0, k.width, k.height),
              (f.current = []),
              (R.current = []),
              (v.current = 0),
              (w.current = 0),
              (x.current = 0),
              (h.current = 0)),
          () => {
            d.current && cancelAnimationFrame(d.current);
          }
        );
      }, [l, c]),
      a.jsx("div", {
        className: `fixed top-6 left-6 z-50 group flex flex-col gap-2 transition-opacity duration-500 ${i ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: a.jsxs("div", {
          className:
            "relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden w-10 h-10 md:w-12 md:h-12 group-hover:h-[9.5rem] shadow-2xl flex flex-col items-center",
          children: [
            a.jsxs("div", {
              className:
                "w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0 z-20 cursor-pointer relative",
              children: [
                a.jsx("div", {
                  className: `absolute w-3 h-3 bg-[#3A8FE0] rounded-full shadow-[0_0_10px_#3A8FE0] transition-all duration-700 ease-in-out ${c ? "opacity-0 scale-150 blur-md" : "opacity-100 scale-100 blur-0"}`,
                }),
                a.jsx("canvas", {
                  ref: u,
                  className: `absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${c ? "opacity-100 scale-100" : "opacity-0 scale-0"}`,
                }),
              ],
            }),
            a.jsxs("div", {
              className:
                "flex flex-col gap-3 items-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pt-1 pb-4 z-10",
              children: [
                a.jsx("button", {
                  onClick: t,
                  title: "8D Audio",
                  className: `w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${e ? "bg-[#3A8FE0] border-[#3A8FE0] text-white shadow-[0_0_15px_rgba(58,143,224,0.6)]" : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30"}`,
                  children: a.jsx(Vy, { className: "w-5 h-5 fill-none" }),
                }),
                a.jsxs("button", {
                  onClick: g,
                  title: "Reverb",
                  className: `relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${n ? "bg-[#3A8FE0] border-[#3A8FE0] text-white shadow-[0_0_15px_rgba(58,143,224,0.6)]" : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30"}`,
                  children: [
                    a.jsx(Hy, { className: "w-5 h-5 fill-none" }),
                    n &&
                      a.jsxs("span", {
                        className: "absolute -right-1 -bottom-1 flex gap-0.5",
                        children: [
                          a.jsx("span", {
                            className: `w-1 h-1 rounded-full bg-white ${r >= 0.2 ? "opacity-100" : "opacity-30"}`,
                          }),
                          a.jsx("span", {
                            className: `w-1 h-1 rounded-full bg-white ${r >= 0.5 ? "opacity-100" : "opacity-30"}`,
                          }),
                          a.jsx("span", {
                            className: `w-1 h-1 rounded-full bg-white ${r >= 0.8 ? "opacity-100" : "opacity-30"}`,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  tv = ({
    currentSong: e,
    isPlaying: t,
    togglePlay: n,
    playPrev: r,
    playNext: s,
    isFavorite: o,
    onToggleFavorite: i,
    currentTime: l,
    duration: c,
    seek: u,
    isShuffle: d,
    toggleShuffle: f,
    repeatMode: p,
    cycleRepeatMode: v,
  }) => {
    var g, k, b, P;
    const w = y.useRef(null),
      x = (E) => {
        if (!w.current || c <= 0) return;
        const F = w.current.getBoundingClientRect(),
          V = (E.clientX - F.left) / F.width;
        u(V * c);
      },
      R = (E) => {
        if (isNaN(E)) return "0:00";
        const F = Math.floor(E / 60),
          V = Math.floor(E % 60);
        return `${F}:${V < 10 ? "0" : ""}${V}`;
      };
    if (!e) return null;
    const m =
        ((k =
          (g = e.image) == null
            ? void 0
            : g.find((E) => E.quality === "500x500")) == null
          ? void 0
          : k.url) ||
        ((P = (b = e.image) == null ? void 0 : b[0]) == null ? void 0 : P.url),
      h = c > 0 ? (l / c) * 100 : 0;
    return a.jsxs("div", {
      className:
        "flex flex-col gap-8 w-full max-w-md animate-in fade-in slide-in-from-left-8 duration-700 mx-auto",
      children: [
        a.jsxs("div", {
          className:
            "aspect-square w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group",
          children: [
            a.jsx("img", {
              src: m,
              alt: e.name,
              className: "w-full h-full object-cover",
            }),
            a.jsx("div", {
              className:
                "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors",
            }),
          ],
        }),
        a.jsx("div", {
          className: "space-y-1",
          children: a.jsxs("div", {
            className: "flex items-start justify-between gap-4",
            children: [
              a.jsxs("div", {
                className: "min-w-0",
                children: [
                  a.jsx("h2", {
                    className:
                      "text-3xl font-black text-white leading-tight line-clamp-2",
                    title: e.name,
                    children: e.name,
                  }),
                  a.jsx("p", {
                    className:
                      "text-lg text-gray-400 font-medium truncate mt-1",
                    children: e.artists.primary.map((E) => E.name).join(", "),
                  }),
                ],
              }),
              a.jsx("button", {
                onClick: i,
                className: `p-3 rounded-full transition-colors ${o ? "text-[#3A8FE0] bg-[#3A8FE0]/10" : "text-gray-400 hover:text-white hover:bg-white/10"}`,
                children: o
                  ? a.jsx(yu, { className: "w-7 h-7 fill-current" })
                  : a.jsx(yu, { className: "w-7 h-7" }),
              }),
            ],
          }),
        }),
        a.jsxs("div", {
          className: "space-y-4",
          children: [
            a.jsxs("div", {
              className:
                "group/bar relative h-1.5 w-full bg-white/10 rounded-full cursor-pointer touch-none hover:h-2 transition-all",
              onClick: x,
              ref: w,
              children: [
                a.jsx("div", {
                  className:
                    "absolute h-full bg-[#3A8FE0] rounded-full group-hover/bar:bg-[#6CB4F0] transition-all shadow-[0_0_10px_#3A8FE0]",
                  style: { width: `${h}%` },
                }),
                a.jsx("div", { className: "absolute -top-3 -bottom-3 w-full" }),
              ],
            }),
            a.jsxs("div", {
              className:
                "flex justify-between text-xs font-bold text-gray-500 font-mono tracking-widest",
              children: [
                a.jsx("span", { children: R(l) }),
                a.jsx("span", { children: R(c) }),
              ],
            }),
          ],
        }),
        a.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            a.jsx("button", {
              onClick: f,
              className: `p-2 transition-colors ${d ? "text-[#3A8FE0]" : "text-gray-500 hover:text-white"}`,
              children: a.jsx(Jy, { className: "w-5 h-5" }),
            }),
            a.jsxs("div", {
              className: "flex items-center gap-6",
              children: [
                a.jsx("button", {
                  onClick: r,
                  className:
                    "text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full",
                  children: a.jsx(Gy, { className: "w-8 h-8" }),
                }),
                a.jsx("button", {
                  onClick: n,
                  className:
                    "w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl",
                  children: t
                    ? a.jsx(qy, { className: "w-8 h-8" })
                    : a.jsx(Wy, { className: "w-8 h-8 ml-1" }),
                }),
                a.jsx("button", {
                  onClick: s,
                  className:
                    "text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full",
                  children: a.jsx(Ky, { className: "w-8 h-8" }),
                }),
              ],
            }),
            a.jsxs("button", {
              onClick: v,
              className: `p-2 transition-colors relative ${p !== "off" ? "text-[#3A8FE0]" : "text-gray-500 hover:text-white"}`,
              children: [
                a.jsx(Yy, { className: "w-5 h-5" }),
                p === "one" &&
                  a.jsx("span", {
                    className:
                      "absolute top-0 right-0 text-[8px] font-bold bg-[#3A8FE0] text-white px-0.5 rounded",
                    children: "1",
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  nv = Se.memo(({ lines: e, activeLineIndex: t, seek: n, isFullscreen: r }) => {
    const s = y.useRef(null);
    return (
      y.useEffect(() => {
        if (t !== -1 && s.current) {
          const o = s.current.children[t];
          if (o) {
            const i = s.current,
              l = o.offsetTop - i.clientHeight / 2 + o.clientHeight / 2;
            i.scrollTo({ top: l, behavior: "smooth" });
          }
        }
      }, [t]),
      a.jsx("div", {
        ref: s,
        className: `h-full overflow-y-auto custom-scrollbar-hidden px-4 md:px-20 py-[50vh] space-y-8 text-center w-full ${r ? "" : "mask-gradient-y"}`,
        children: e.map((o, i) => {
          const l = i === t,
            c = Math.abs(i - t) <= 1;
          return a.jsx(
            "div",
            {
              onClick: () => n(o.time),
              className: `
                            cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                            py-4 px-6 rounded-2xl origin-center will-change-[transform,opacity,filter]
                            text-3xl md:text-5xl font-bold leading-tight select-none max-w-5xl mx-auto tracking-tight
                            ${l ? "opacity-100 scale-110 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.35)] blur-0" : c ? "opacity-50 scale-100 text-gray-300 blur-[0.5px] hover:opacity-80 hover:blur-0" : "opacity-20 scale-95 text-gray-500 blur-[2px] hover:opacity-60 hover:blur-0"}
                        `,
              children: o.text,
            },
            i,
          );
        }),
      })
    );
  }),
  rv = ({ lines: e, isFullscreen: t }) =>
    a.jsxs("div", {
      className:
        "h-full overflow-y-auto custom-scrollbar px-6 md:px-12 py-20 text-center",
      children: [
        a.jsx("div", {
          className: "space-y-6 max-w-2xl mx-auto",
          children: e.map((n, r) =>
            a.jsx(
              "p",
              {
                className:
                  "text-xl md:text-2xl text-gray-300 font-medium leading-relaxed hover:text-white transition-colors",
                children: n,
              },
              r,
            ),
          ),
        }),
        a.jsx("p", {
          className:
            "mt-12 text-sm text-gray-600 font-bold uppercase tracking-widest",
          children: "Lyrics not synced",
        }),
      ],
    }),
  sv = () => {
    var me, J, ie, oe, Y;
    const {
        currentSong: e,
        isLyricsOpen: t,
        toggleLyrics: n,
        currentTime: r,
        duration: s,
        seek: o,
        isPlaying: i,
        togglePlay: l,
        playNext: c,
        playPrev: u,
        is8DEnabled: d,
        toggle8D: f,
        isReverbEnabled: p,
        toggleReverb: v,
        reverbMix: w,
        setReverbMix: x,
        isShuffle: R,
        toggleShuffle: m,
        repeatMode: h,
        cycleRepeatMode: g,
      } = y.useContext(kt),
      { isFavoriteSong: k, toggleFavoriteSong: b } = y.useContext(Rn),
      [P, E] = y.useState(null),
      [F, V] = y.useState([]),
      [B, G] = y.useState(!1),
      [le, U] = y.useState(null),
      [T, M] = y.useState(-1),
      [A, N] = y.useState("embedded"),
      [S, z] = y.useState(!0),
      j = y.useRef(null),
      O = y.useCallback(() => {
        (z(!0),
          j.current && clearTimeout(j.current),
          (A === "fullscreen" || A === "art") &&
            (j.current = setTimeout(() => {
              z(!1);
            }, 3e3)));
      }, [A]);
    (y.useEffect(() => {
      if (A === "fullscreen" || A === "art")
        return (
          window.addEventListener("mousemove", O),
          window.addEventListener("touchstart", O),
          window.addEventListener("click", O),
          O(),
          () => {
            (window.removeEventListener("mousemove", O),
              window.removeEventListener("touchstart", O),
              window.removeEventListener("click", O),
              j.current && clearTimeout(j.current));
          }
        );
      (z(!0), j.current && clearTimeout(j.current));
    }, [A, O]),
      y.useEffect(() => {
        t && (E(null), V([]), U(null), M(-1));
      }, [e == null ? void 0 : e.id, t]),
      y.useEffect(() => {
        const je = async () => {
          var ke;
          if (e) {
            (G(!0), U(null));
            try {
              const xe = await zy(
                e.name,
                ((ke = e.artists.primary[0]) == null ? void 0 : ke.name) || "",
                e.album.name || "",
                e.duration || 0,
              );
              if (xe && xe.syncedLyrics) {
                const Pt = q(xe.syncedLyrics);
                (E(Pt), G(!1));
                return;
              }
            } catch {}
            if (e.hasLyrics)
              try {
                const xe = await cg(e.id);
                if (xe.success && xe.data.lyrics) {
                  const at = xe.data.lyrics
                    .split(/<br\s*\/?>/i)
                    .map((Ct) => Ct.trim())
                    .filter((Ct) => Ct.length > 0);
                  (V(at), G(!1));
                  return;
                }
              } catch {}
            (U("Lyrics Unavailable"), G(!1));
          }
        };
        t && !P && F.length === 0 && !le && je();
      }, [e, t, P, F.length, le]));
    const q = (je) => {
      const ke = [],
        xe = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/;
      return (
        je
          .split(
            `
`,
          )
          .forEach((Pt) => {
            const at = Pt.match(xe);
            if (at) {
              const Ct = parseInt(at[1], 10),
                An = parseInt(at[2], 10),
                Vo = parseInt(at[3], 10),
                us = at[4].trim(),
                Ho = Ct * 60 + An + Vo / (at[3].length === 3 ? 1e3 : 100);
              us && ke.push({ time: Ho, text: us });
            }
          }),
        ke
      );
    };
    y.useEffect(() => {
      if (!P || P.length === 0) return;
      const je = 0.2;
      let ke = -1;
      for (let xe = 0; xe < P.length && P[xe].time <= r + je; xe++) ke = xe;
      ke !== T && M(ke);
    }, [r, P, T]);
    const se = y.useCallback(() => {
      e && b(e);
    }, [e, b]);
    if (!t) return null;
    const X =
        ((J =
          (me = e == null ? void 0 : e.image) == null
            ? void 0
            : me.find((je) => je.quality === "500x500")) == null
          ? void 0
          : J.url) ||
        ((oe = (ie = e == null ? void 0 : e.image) == null ? void 0 : ie[0]) ==
        null
          ? void 0
          : oe.url) ||
        "",
      L = A === "fullscreen" || A === "art",
      W = e ? k(e.id) : !1,
      ee = L
        ? "fixed inset-0 z-[200] bg-[#0B1E3D]"
        : "absolute inset-0 z-20 bg-[#0B1E3D]";
    return a.jsxs("div", {
      className: `${ee} flex flex-col transition-all duration-500 overflow-hidden`,
      children: [
        a.jsx(Xy, { imageUrl: X }),
        L &&
          a.jsx(ev, {
            is8D: d,
            toggle8D: f,
            isReverb: p,
            reverbMix: w,
            setReverbMix: x,
            toggleReverb: v,
            visible: S,
          }),
        a.jsx(Zy, {
          isFullscreen: L,
          onToggleFullscreen: () =>
            N((je) => (je === "embedded" ? "fullscreen" : "embedded")),
          onClose: () => n(!1),
          visible: A === "embedded" || S,
        }),
        a.jsxs("div", {
          className: `relative z-10 flex w-full h-full ${L ? "flex-col lg:flex-row" : "flex-col"}`,
          children: [
            L &&
              a.jsx("div", {
                className: `
                        transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
                        flex-col justify-center items-center
                        ${A === "art" ? "w-full scale-110 flex items-center" : "hidden lg:flex w-[45%] lg:w-[45%] xl:w-[40%] p-8 border-r border-white/5 bg-black/20"}
                        max-h-full min-h-0
                    `,
                children: a.jsx(tv, {
                  currentSong: e,
                  isPlaying: i,
                  togglePlay: l,
                  playPrev: u,
                  playNext: c,
                  isFavorite: W,
                  onToggleFavorite: se,
                  currentTime: r,
                  duration: s,
                  seek: o,
                  isShuffle: R,
                  toggleShuffle: m,
                  repeatMode: h,
                  cycleRepeatMode: g,
                }),
              }),
            a.jsxs("div", {
              className: `relative flex-1 flex flex-col min-h-0 ${L ? (A === "art" ? "hidden" : "lg:w-[55%] xl:w-[60%] w-full") : "w-full"}`,
              children: [
                L &&
                  !A &&
                  a.jsxs("div", {
                    className:
                      "flex-shrink-0 text-center px-6 transition-all duration-500 lg:hidden pt-20 pb-4",
                    children: [
                      a.jsx("div", {
                        className:
                          "w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group",
                        children: a.jsx("img", {
                          src: X,
                          alt: "Cover",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      a.jsx("h2", {
                        className:
                          "text-white font-black text-2xl truncate tracking-tight",
                        children: e == null ? void 0 : e.name,
                      }),
                      a.jsx("p", {
                        className: "text-white/60 text-lg font-bold",
                        children:
                          (Y = e == null ? void 0 : e.artists.primary[0]) ==
                          null
                            ? void 0
                            : Y.name,
                      }),
                    ],
                  }),
                a.jsx("div", {
                  className: "flex-1 relative min-h-0",
                  children: B
                    ? a.jsxs("div", {
                        className:
                          "absolute inset-0 flex flex-col items-center justify-center gap-6 animate-pulse",
                        children: [
                          a.jsx(Ap, {}),
                          a.jsx("p", {
                            className:
                              "text-white/40 text-sm font-bold tracking-[0.2em] uppercase",
                            children: "Syncing Lyrics",
                          }),
                        ],
                      })
                    : le
                      ? a.jsxs("div", {
                          className:
                            "absolute inset-0 flex flex-col items-center justify-center gap-6 opacity-0 animate-in zoom-in-95 fade-in duration-500 fill-mode-forwards p-8 text-center",
                          children: [
                            a.jsx("div", {
                              className:
                                "w-32 h-32 rounded-full border-2 border-white/5 flex items-center justify-center bg-white/5 shadow-2xl animate-[spin_12s_linear_infinite]",
                              children: a.jsx(Qy, {
                                className: "w-16 h-16 text-white/20",
                              }),
                            }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("h3", {
                                  className:
                                    "text-2xl font-bold text-white mb-2 tracking-tight",
                                  children: "Instrumental",
                                }),
                                a.jsx("p", {
                                  className:
                                    "text-lg text-white/40 font-medium",
                                  children: "Enjoy the vibe.",
                                }),
                              ],
                            }),
                          ],
                        })
                      : P
                        ? a.jsx(nv, {
                            lines: P,
                            activeLineIndex: T,
                            seek: o,
                            isFullscreen: L,
                          })
                        : a.jsx(rv, { lines: F, isFullscreen: L }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  vu = y.lazy(() =>
    hn(() => import("./Home-z0YVMzfJ.js"), __vite__mapDeps([0, 1])),
  ),
  ov = y.lazy(() =>
    hn(() => import("./Search-D2B-HYiH.js"), __vite__mapDeps([2, 3, 1, 4])),
  ),
  iv = y.lazy(() =>
    hn(() => import("./Library-BGbSOghf.js"), __vite__mapDeps([5, 3, 1, 4])),
  ),
  av = y.lazy(() =>
    hn(() => import("./AlbumView-ByXXfJfh.js"), __vite__mapDeps([6, 3, 7])),
  ),
  lv = y.lazy(() =>
    hn(() => import("./PlaylistView-txFFbOb9.js"), __vite__mapDeps([8, 7, 3])),
  ),
  cv = y.lazy(() =>
    hn(() => import("./ArtistView-1ISDklv5.js"), __vite__mapDeps([9, 3, 1, 7])),
  ),
  uv = y.lazy(() =>
    hn(() => import("./ApiPlaylistView-BzYJ4eQ1.js"), __vite__mapDeps([10, 7])),
  ),
  dv = y.lazy(() => hn(() => import("./Settings-CoCW1XIq.js"), []));
class fv extends y.Component {
  constructor(n) {
    super(n);
    pe(this, "state", { hasError: !1, error: null });
    pe(this, "props");
    pe(this, "handleReset", () => {
      try {
        localStorage.clear();
      } catch (n) {
        console.error("Failed to clear localStorage.", n);
      }
      window.location.reload();
    });
    this.props = n;
  }
  static getDerivedStateFromError(n) {
    let r;
    if (n instanceof Error) r = n;
    else {
      try {
        r = new Error(JSON.stringify(n));
      } catch {
        r = new Error(String(n));
      }
      (r.message === "{}" || r.message === "[object Object]") &&
        (r = new Error(
          "An unknown error occurred (non-Error object thrown). Check console for details.",
        ));
    }
    return { hasError: !0, error: r };
  }
  componentDidCatch(n, r) {
    console.error("Uncaught application error:", n, r);
  }
  render() {
    return this.state.hasError
      ? a.jsxs("div", {
          className:
            "h-screen w-screen bg-[#0B1E3D] text-white flex flex-col items-center justify-center p-8 text-center font-sans glass-panel",
          children: [
            a.jsx("h1", {
              className: "text-3xl font-bold text-red-500 mb-4",
              children: "Application Error",
            }),
            a.jsx("p", {
              className: "text-lg text-gray-300 mb-8 max-w-md",
              children:
                "Failed to load the app. Reloading or resetting usually fixes it.",
            }),
            a.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4",
              children: [
                a.jsx("button", {
                  onClick: () => window.location.reload(),
                  className:
                    "px-6 py-3 rounded-full bg-white/10 font-semibold hover:bg-white/20 transition-colors",
                  children: "Reload Page",
                }),
                a.jsx("button", {
                  onClick: this.handleReset,
                  className:
                    "px-6 py-3 rounded-full bg-[#1E6CC7] text-white font-bold hover:bg-[#3A8FE0] transition-colors shadow-lg shadow-blue-500/20",
                  children: "Reset App & Reload",
                }),
              ],
            }),
            this.state.error &&
              a.jsxs("details", {
                className:
                  "mt-10 text-left max-w-lg w-full bg-black/20 p-4 rounded-lg border border-white/5",
                children: [
                  a.jsx("summary", {
                    className: "cursor-pointer text-gray-400",
                    children: "Error Details",
                  }),
                  a.jsx("pre", {
                    className:
                      "mt-2 text-sm text-red-300 overflow-auto max-h-40 custom-scrollbar",
                    children: a.jsx("code", {
                      className: "text-xs",
                      children:
                        this.state.error.stack || this.state.error.message,
                    }),
                  }),
                ],
              }),
          ],
        })
      : this.props.children || null;
  }
}
const pv = () => {
    const [e, t] = Q0();
    return a.jsx(G0, {
      language: e.settings.language,
      setAppState: t,
      children: a.jsx(hg, {
        profile: e.profile,
        setAppState: t,
        children: a.jsx(V0, {
          musicData: e.music,
          setAppState: t,
          fullState: e,
          children: a.jsx(dg, {
            playerSettings: e.settings.player,
            playerQueue: e.playerQueue,
            setAppState: t,
            children: a.jsx(Hg, {
              children: a.jsx(fv, {
                children: a.jsx(hv, {
                  searchHistory: e.searchHistory,
                  setAppState: t,
                }),
              }),
            }),
          }),
        }),
      }),
    });
  },
  hv = ({ searchHistory: e, setAppState: t }) => {
    var me, J, ie, oe;
    const [n, r] = y.useState([{ key: lr(), view: "home" }]),
      [s, o] = y.useState(0),
      [i, l] = y.useState(null),
      {
        currentSong: c,
        isPlaying: u,
        isQueueOpen: d,
        toggleQueue: f,
        isLyricsOpen: p,
        toggleLyrics: v,
      } = y.useContext(kt),
      {
        partyState: w,
        partyEndedMessage: x,
        clearPartyEndedMessage: R,
      } = y.useContext(et),
      [m, h] = y.useState(!1),
      [g, k] = y.useState(null),
      { t: b } = Le(),
      [P, E] = y.useState(!1),
      F = y.useMemo(
        () =>
          new URLSearchParams(window.location.search).get("mini") === "true",
        [],
      );
    y.useEffect(() => {
      w && !P ? (E(!0), f(!0)) : !w && P && E(!1);
    }, [w, P, f]);
    const V = (Y) => {
        (k(Y), h(!0));
      },
      B = () => h(!1),
      G = y.useCallback(
        (Y, je = !1) => {
          var Ct, An;
          p && v(!1);
          const ke = n[s],
            xe =
              ke.view === Y.view &&
              ke.albumId === Y.albumId &&
              ke.playlistId === Y.playlistId &&
              ke.artistId === Y.artistId &&
              ((Ct = ke.apiPlaylist) == null ? void 0 : Ct.id) ===
                ((An = Y.apiPlaylist) == null ? void 0 : An.id) &&
              ke.searchQuery === Y.searchQuery;
          if (!je && xe) return;
          l("forward");
          const Pt = n.slice(0, s + (je ? 0 : 1)),
            at = { ...Y, key: lr() };
          (r([...Pt, at]), o(Pt.length));
        },
        [n, s, p, v],
      ),
      le = () => {
        s > 0 && (p && v(!1), l("backward"), o((Y) => Y - 1));
      },
      U = () => {
        s < n.length - 1 && (p && v(!1), l("forward"), o((Y) => Y + 1));
      },
      T = (Y) => G({ view: Y }),
      M = (Y) => G({ view: "album", albumId: Y }),
      A = (Y) => G({ view: "playlist", playlistId: Y }),
      N = (Y) => G({ view: "api_playlist", apiPlaylist: Y }),
      S = (Y) => G({ view: "artist", artistId: Y }),
      z = (Y) => {
        const je = n[s].view === "search";
        G({ view: "search", searchQuery: Y }, je);
      },
      j = n[s],
      O =
        i === "forward"
          ? "view-enter-forward"
          : i === "backward"
            ? "view-enter-backward"
            : "",
      q = s > 0,
      se = s < n.length - 1,
      X = () => {
        switch (j.view) {
          case "home":
            return a.jsx(vu, {
              setActiveView: T,
              navigateToAlbum: M,
              navigateToArtist: S,
              navigateToSearch: z,
              navigateToApiPlaylist: N,
              navigateToPlaylist: A,
            });
          case "search":
            return a.jsx(ov, {
              navigateToAlbum: M,
              navigateToArtist: S,
              navigateToApiPlaylist: N,
              initialQuery: j.searchQuery,
            });
          case "library":
            return a.jsx(iv, {
              setActiveView: T,
              navigateToAlbum: M,
              navigateToPlaylist: A,
              navigateToArtist: S,
              navigateToApiPlaylist: N,
            });
          case "album":
            return a.jsx(av, {
              albumId: j.albumId,
              setActiveView: T,
              navigateToArtist: S,
              navigateToPlaylist: A,
            });
          case "playlist":
            return a.jsx(lv, {
              playlistId: j.playlistId,
              setActiveView: T,
              navigateToArtist: S,
            });
          case "api_playlist":
            return a.jsx(uv, {
              playlist: j.apiPlaylist,
              setActiveView: T,
              navigateToArtist: S,
            });
          case "artist":
            return a.jsx(cv, {
              artistId: j.artistId,
              setActiveView: T,
              navigateToAlbum: M,
              navigateToArtist: S,
            });
          case "settings":
            return a.jsx(dv, {});
          default:
            return a.jsx(vu, {
              setActiveView: T,
              navigateToAlbum: M,
              navigateToArtist: S,
              navigateToSearch: z,
              navigateToApiPlaylist: N,
              navigateToPlaylist: A,
            });
        }
      },
      L = w ? w.currentSong : c,
      W =
        ((J =
          (me = L == null ? void 0 : L.image) == null
            ? void 0
            : me.find((Y) => Y.quality === "500x500")) == null
          ? void 0
          : J.url) ||
        ((oe = (ie = L == null ? void 0 : L.image) == null ? void 0 : ie[0]) ==
        null
          ? void 0
          : oe.url) ||
        "",
      ee = x ? b(x.key, x.replacements) : null;
    return a.jsx(Of.Provider, {
      value: { showModal: V, hideModal: B },
      children: a.jsxs("div", {
        className:
          "relative h-screen w-screen overflow-hidden text-gray-200 font-sans selection:bg-[#3A8FE0] selection:text-white",
        children: [
          a.jsx(Oy, { songImage: W, isPlaying: u }),
          a.jsxs("div", {
            className: "relative z-10 flex flex-col h-full",
            children: [
              a.jsx(Ny, {
                canGoBack: q,
                canGoForward: se,
                goBack: le,
                goForward: U,
                onSearch: z,
                activeView: j.view,
                setActiveView: T,
                searchHistory: e,
                setAppState: t,
                isMini: F,
              }),
              a.jsxs("div", {
                className: "flex flex-1 overflow-hidden relative",
                children: [
                  !F &&
                    a.jsx(tg, {
                      activeView: j.view,
                      setActiveView: T,
                      navigateToPlaylist: A,
                    }),
                  a.jsxs("div", {
                    className:
                      "relative flex-1 flex flex-col overflow-hidden min-w-0",
                    children: [
                      a.jsx("main", {
                        className:
                          "flex-1 overflow-y-auto custom-scrollbar pb-36 md:pb-0 relative z-0",
                        children: a.jsx(y.Suspense, {
                          fallback: a.jsx("div", {
                            className:
                              "flex justify-center items-center h-full",
                            children: a.jsx(Ap, {}),
                          }),
                          children: a.jsx(
                            "div",
                            {
                              className: O,
                              onAnimationEnd: () => l(null),
                              children: X(),
                            },
                            j.key,
                          ),
                        }),
                      }),
                      a.jsx(sv, {}),
                    ],
                  }),
                  a.jsx("div", {
                    className: `flex-shrink-0 overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-l border-white/5 glass-panel ${d ? "w-96" : "w-0"}`,
                    children: a.jsx(Ey, { navigateToArtist: S }),
                  }),
                ],
              }),
              a.jsx("div", {
                className: `z-50 shrink-0 transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${L ? "h-24 md:h-28" : "h-0"}`,
                children: a.jsx("div", {
                  className: `h-full transition-opacity duration-500 ${L ? "opacity-100" : "opacity-0"}`,
                  children: a.jsx(xy, { navigateToArtist: S }),
                }),
              }),
              !F && a.jsx(Dy, { activeView: j.view, setActiveView: T }),
            ],
          }),
          a.jsx(Fy, {}),
          a.jsx(Yc, {
            isOpen: m,
            onClose: B,
            title: g == null ? void 0 : g.title,
            size: g == null ? void 0 : g.size,
            children: g == null ? void 0 : g.content,
          }),
          a.jsxs(Yc, {
            isOpen: !!ee,
            onClose: R,
            title: b("modals.partyEnded.title"),
            children: [
              a.jsx("p", { className: "text-gray-300 mb-6", children: ee }),
              a.jsx("div", {
                className: "flex justify-end",
                children: a.jsx("button", {
                  onClick: R,
                  className:
                    "px-6 py-2 rounded-full bg-[#1E6CC7] text-white font-bold hover:bg-[#3A8FE0] transition-colors shadow-lg shadow-blue-500/20",
                  children: b("modals.partyEnded.ok"),
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  Lp = document.getElementById("root");
if (!Lp) throw new Error("Could not find root element to mount to");
const mv = bi.createRoot(Lp);
mv.render(a.jsx(Se.StrictMode, { children: a.jsx(pv, {}) }));
export {
  kv as A,
  fg as C,
  Ap as L,
  Of as M,
  kt as P,
  Se as R,
  ty as S,
  Rn as U,
  lg as a,
  vv as b,
  yv as c,
  xv as d,
  wv as e,
  El as f,
  ag as g,
  Uo as h,
  Wc as i,
  a as j,
  y as r,
  Kc as s,
  Le as u,
};
