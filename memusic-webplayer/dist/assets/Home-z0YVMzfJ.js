import {
  r as o,
  U as Z,
  P as O,
  u as ee,
  j as e,
  L as te,
  g as _,
  a as se,
  b as ae,
  R as Y,
} from "./index-Jbwo0tuu.js";
import { A as re, a as W } from "./ArtistCard-ClG1BOwI.js";
const H = (s) =>
    e.jsx("svg", {
      ...s,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: e.jsx("path", { d: "M5 3l14 9-14 9V3z" }),
    }),
  ne = (s) =>
    e.jsxs("svg", {
      ...s,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", { d: "M9 18V5l12-2v13" }),
        e.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        e.jsx("circle", { cx: "18", cy: "16", r: "3" }),
      ],
    }),
  oe = (s) =>
    e.jsxs("svg", {
      ...s,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", { d: "M5 12h14" }),
        e.jsx("path", { d: "M12 5l7 7-7 7" }),
      ],
    }),
  le = (s) =>
    e.jsx("svg", {
      ...s,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: e.jsx("path", { d: "M15 18l-6-6 6-6" }),
    }),
  ie = (s) =>
    e.jsx("svg", {
      ...s,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: e.jsx("path", { d: "M9 18l6-6-6-6" }),
    }),
  $ = ["1126967", "1117886", "1945440", "13434529", "3002873"],
  ce = ({ albums: s, activeIndex: g, onPlay: p, onClick: j, isMini: f }) =>
    s.length === 0
      ? null
      : e.jsxs("div", {
          className: `relative w-full ${f ? "h-[45vh]" : "h-[60vh] md:h-[70vh]"} flex items-center justify-center overflow-hidden py-10 px-4`,
          children: [
            e.jsx("div", {
              className:
                "relative w-full max-w-7xl h-full flex items-center justify-center",
              children: s.slice(0, 5).map((l, i) => {
                var c, y, S, A, v;
                let r = i - g;
                (r < -2 && (r += s.length), r > 2 && (r -= s.length));
                const n = r === 0;
                if (!(Math.abs(r) <= 2)) return null;
                const m =
                    ((y =
                      (c = l.image) == null
                        ? void 0
                        : c.find((w) => w.quality === "500x500")) == null
                      ? void 0
                      : y.url) ||
                    ((A = (S = l.image) == null ? void 0 : S[0]) == null
                      ? void 0
                      : A.url),
                  b = f
                    ? n
                      ? "w-[200px] h-[200px]"
                      : "w-[150px] h-[150px]"
                    : n
                      ? "w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
                      : "w-[240px] h-[240px] md:w-[350px] md:h-[350px]";
                return e.jsx(
                  "div",
                  {
                    onClick: () => (n ? j(l.id) : null),
                    className: `absolute transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer
                                ${n ? "z-30 opacity-100" : "z-10 opacity-40 hover:opacity-60"} ${b}
                            `,
                    style: {
                      transform: `translateX(${r * (f ? 50 : 60)}%) scale(${n ? 1 : 0.8}) rotateY(${r * -20}deg)`,
                      filter: n ? "none" : "blur(2px) grayscale(0.5)",
                    },
                    children: e.jsxs("div", {
                      className:
                        "relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 group",
                      children: [
                        e.jsx("img", {
                          src: m,
                          alt: l.name,
                          className:
                            "w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
                        }),
                        e.jsx("div", {
                          className: `absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 ${n ? "opacity-100" : "opacity-0"}`,
                          children: e.jsxs("div", {
                            className:
                              "absolute inset-0 p-8 flex flex-col justify-end",
                            children: [
                              e.jsx("h2", {
                                className: `font-black text-white leading-tight mb-1 drop-shadow-lg line-clamp-2 ${f ? "text-lg" : "text-2xl md:text-4xl"}`,
                                children: l.name,
                              }),
                              e.jsx("p", {
                                className: `text-white/70 font-medium ${f ? "text-xs mb-2" : "text-sm md:text-lg mb-4"}`,
                                children:
                                  (v = l.artists.primary[0]) == null
                                    ? void 0
                                    : v.name,
                              }),
                              e.jsx("button", {
                                onClick: (w) => {
                                  (w.stopPropagation(), p(l.id));
                                },
                                className: `self-start flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-xl rounded-full border border-white/20 transition-all active:scale-95 group/play ${f ? "w-10 h-10" : "w-12 h-12 md:w-16 md:h-16"}`,
                                children: e.jsx(H, {
                                  className: `${f ? "w-4 h-4" : "w-6 h-6 md:w-8 md:h-8"} text-white translate-x-0.5 group-hover/play:scale-110 transition-transform`,
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  },
                  l.id,
                );
              }),
            }),
            e.jsx("div", {
              className:
                "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-40",
              children: s
                .slice(0, 5)
                .map((l, i) =>
                  e.jsx(
                    "div",
                    {
                      className: `h-1.5 rounded-full transition-all duration-300 ${i === g ? "w-8 bg-[#3A8FE0]" : "w-1.5 bg-white/20"}`,
                    },
                    i,
                  ),
                ),
            }),
          ],
        }),
  de = Y.memo(({ item: s, onPlay: g, onClick: p }) => {
    var l, i, r, n, h, m, b, c, y, S, A;
    const j =
        "songs" in s
          ? s.coverUrl ||
            ((r =
              (i = (l = s.songs[0]) == null ? void 0 : l.image) == null
                ? void 0
                : i.find((v) => v.quality === "150x150")) == null
              ? void 0
              : r.url) ||
            ((m =
              (h = (n = s.songs[0]) == null ? void 0 : n.image) == null
                ? void 0
                : h[0]) == null
              ? void 0
              : m.url)
          : ((c =
              (b = s.image) == null
                ? void 0
                : b.find((v) => v.quality === "150x150")) == null
              ? void 0
              : c.url) ||
            ((S = (y = s.image) == null ? void 0 : y[0]) == null
              ? void 0
              : S.url),
      f = (v) => {
        (v.stopPropagation(), g());
      };
    return e.jsxs("div", {
      className:
        "group relative flex items-center p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-xl backdrop-blur-sm overflow-hidden",
      onClick: p,
      children: [
        e.jsxs("div", {
          className:
            "relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden shadow-lg",
          children: [
            j
              ? e.jsx("img", {
                  src: j,
                  alt: s.name,
                  className:
                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                  loading: "lazy",
                })
              : e.jsx("div", {
                  className:
                    "w-full h-full flex items-center justify-center bg-[#1a1a1a]",
                  children: e.jsx(ne, { className: "w-8 h-8 text-gray-600" }),
                }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors",
            }),
            e.jsx("button", {
              onClick: f,
              className:
                "absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]",
              children: e.jsx("div", {
                className:
                  "w-10 h-10 bg-[#3A8FE0] rounded-full flex items-center justify-center text-black shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300",
                children: e.jsx(H, { className: "w-5 h-5 ml-0.5" }),
              }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "ml-4 flex-1 min-w-0 pr-2",
          children: [
            e.jsx("p", {
              className:
                "font-bold text-white truncate text-base group-hover:text-[#3A8FE0] transition-colors",
              children: s.name,
            }),
            e.jsx("p", {
              className:
                "text-xs font-medium text-gray-400 mt-1 uppercase tracking-wider opacity-60",
              children:
                "songs" in s
                  ? "Playlist"
                  : ((A = s.artists.primary[0]) == null ? void 0 : A.name) ||
                    "Song",
            }),
          ],
        }),
      ],
    });
  }),
  V = Y.memo(({ song: s }) => {
    var f, l, i, r;
    const { playSong: g } = o.useContext(O),
      p =
        ((l =
          (f = s.image) == null
            ? void 0
            : f.find((n) => n.quality === "500x500")) == null
          ? void 0
          : l.url) ||
        ((r = (i = s.image) == null ? void 0 : i[0]) == null ? void 0 : r.url),
      j = (n) => {
        (n.stopPropagation(), g(s, [s], { type: "song", id: s.id }));
      };
    return e.jsxs("div", {
      className: "group relative w-44 md:w-56 flex-shrink-0 cursor-pointer",
      onClick: j,
      children: [
        e.jsxs("div", {
          className:
            "relative w-full aspect-square mb-4 overflow-hidden rounded-2xl shadow-lg border border-white/5",
          children: [
            e.jsx("img", {
              src: p,
              alt: s.name,
              className:
                "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110",
              loading: "lazy",
            }),
            e.jsx("div", {
              className:
                "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300",
            }),
            e.jsx("button", {
              onClick: j,
              className:
                "absolute bottom-4 right-4 w-12 h-12 bg-[#3A8FE0] rounded-full flex items-center justify-center text-black shadow-xl shadow-black/30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out",
              "aria-label": `Play ${s.name}`,
              children: e.jsx(H, { className: "w-6 h-6 ml-1" }),
            }),
          ],
        }),
        e.jsxs("div", {
          className: "px-1",
          children: [
            e.jsx("h4", {
              className:
                "font-bold text-white truncate text-base leading-tight group-hover:text-[#3A8FE0] transition-colors",
              children: s.name,
            }),
            e.jsx("p", {
              className:
                "text-sm text-gray-400 truncate mt-1 group-hover:text-gray-300 transition-colors",
              children: s.artists.primary.map((n) => n.name).join(", "),
            }),
          ],
        }),
      ],
    });
  }),
  M = ({ title: s, children: g }) => {
    const p = o.useRef(null),
      [j, f] = o.useState(!1),
      [l, i] = o.useState(!1),
      r = o.useCallback(() => {
        window.requestAnimationFrame(() => {
          const h = p.current;
          if (!h) return;
          const { scrollLeft: m, scrollWidth: b, clientWidth: c } = h;
          (f(m > 1), i(b > c && m < b - c - 1));
        });
      }, []);
    o.useEffect(() => {
      const h = p.current;
      if (!h) return;
      (r(), h.addEventListener("scroll", r, { passive: !0 }));
      const m = new ResizeObserver(r);
      return (
        m.observe(h),
        () => {
          (h.removeEventListener("scroll", r), m.disconnect());
        }
      );
    }, [r]);
    const n = (h) => {
      if (p.current) {
        const m = h === "left" ? -400 : 400;
        p.current.scrollBy({ left: m, behavior: "smooth" });
      }
    };
    return e.jsxs("section", {
      className: "relative",
      children: [
        e.jsxs("div", {
          className: "flex items-end justify-between mb-8 px-6 md:px-10",
          children: [
            e.jsx("h2", {
              className:
                "text-2xl md:text-3xl font-bold tracking-tight text-white",
              children: s,
            }),
            e.jsxs("div", {
              className: "hidden md:flex items-center gap-2",
              children: [
                e.jsx("div", { className: "h-[1px] w-12 bg-white/10" }),
                e.jsx("span", {
                  className:
                    "text-xs font-bold text-gray-500 uppercase tracking-widest",
                  children: "Scroll",
                }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "relative group",
          children: [
            e.jsx("div", {
              className: `absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0B1E3D] to-transparent z-10 pointer-events-none transition-opacity duration-500 ${j ? "opacity-100" : "opacity-0"}`,
            }),
            e.jsx("div", {
              className: `absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0B1E3D] to-transparent z-10 pointer-events-none transition-opacity duration-500 ${l ? "opacity-100" : "opacity-0"}`,
            }),
            e.jsx("button", {
              onClick: () => n("left"),
              className: `absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center z-20 transition-all duration-300 hover:bg-[#3A8FE0] hover:scale-110 shadow-xl ${j ? "opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0" : "opacity-0 pointer-events-none"}`,
              "aria-label": "Scroll left",
              children: e.jsx(le, { className: "w-6 h-6" }),
            }),
            e.jsx("button", {
              onClick: () => n("right"),
              className: `absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center z-20 transition-all duration-300 hover:bg-[#3A8FE0] hover:scale-110 shadow-xl ${l ? "opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0" : "opacity-0 pointer-events-none"}`,
              "aria-label": "Scroll right",
              children: e.jsx(ie, { className: "w-6 h-6" }),
            }),
            e.jsx("div", {
              ref: p,
              className:
                "flex space-x-6 overflow-x-auto pb-8 pt-2 custom-scrollbar-hidden px-6 md:px-10 scroll-smooth snap-x snap-mandatory",
              children: g,
            }),
          ],
        }),
      ],
    });
  },
  ue = ({
    setActiveView: s,
    navigateToAlbum: g,
    navigateToArtist: p,
    navigateToSearch: j,
    navigateToApiPlaylist: f,
    navigateToPlaylist: l,
  }) => {
    const {
        history: i,
        favoriteArtists: r,
        playlists: n,
        playlistHistory: h,
      } = o.useContext(Z),
      { playSong: m } = o.useContext(O),
      { t: b } = ee(),
      c = o.useMemo(
        () =>
          new URLSearchParams(window.location.search).get("mini") === "true",
        [],
      ),
      [y, S] = o.useState([]),
      [A, v] = o.useState([]),
      [w, G] = o.useState({ artists: [], albums: [], songs: [] }),
      [z, C] = o.useState({ releases: !0, recommendations: !0, spotlight: !0 }),
      [D, J] = o.useState(0);
    (o.useEffect(() => {
      (async () => {
        if (r.length === 0) {
          (S([]), C((a) => ({ ...a, releases: !1 })));
          return;
        }
        C((a) => ({ ...a, releases: !0 }));
        try {
          const u = r.slice(0, 5).map((d) => _(d.id)),
            E = (await Promise.all(u)).flatMap((d) =>
              d.success ? d.data.topAlbums || [] : [],
            ),
            k = new Map();
          (E.forEach((d) => {
            k.has(d.id) || k.set(d.id, d);
          }),
            S(
              Array.from(k.values())
                .sort((d, R) => (R.year || 0) - (d.year || 0))
                .slice(0, 10),
            ));
        } catch (a) {
          console.error(a);
        } finally {
          C((a) => ({ ...a, releases: !1 }));
        }
      })();
    }, [r]),
      o.useEffect(() => {
        (async () => {
          if (i.length === 0) {
            (v([]), C((a) => ({ ...a, recommendations: !1 })));
            return;
          }
          C((a) => ({ ...a, recommendations: !0 }));
          try {
            const u = i.slice(0, 5).map((d) => se(d.id, 5)),
              k = (await Promise.all(u))
                .flatMap((d) => (d.success ? d.data : []))
                .filter(
                  (d, R, F) =>
                    R === F.findIndex((L) => L.id === d.id) &&
                    !i.some((L) => L.id === d.id),
                );
            v(k.slice(0, 15));
          } catch {
            v([]);
          } finally {
            C((a) => ({ ...a, recommendations: !1 }));
          }
        })();
      }, [i]),
      o.useEffect(() => {
        (async () => {
          C((a) => ({ ...a, spotlight: !0 }));
          try {
            const a = ["527097", "512453", "612060", "614647"],
              [u] = await Promise.all([Promise.all(a.map((x) => _(x)))]),
              N = [],
              E = [],
              k = [];
            u.forEach((x) => {
              x.success &&
                (N.push(x.data),
                x.data.topAlbums && E.push(...x.data.topAlbums),
                x.data.topSongs && k.push(...x.data.topSongs));
            });
            const R = (await Promise.all($.map((x) => ae(x))))
                .filter((x) => x.success)
                .map((x) => x.data),
              F = E.filter((x) => !$.includes(x.id)),
              L = [...R, ...F.sort(() => 0.5 - Math.random())].slice(0, 20),
              X = k.sort(() => 0.5 - Math.random()).slice(0, 15);
            G({ artists: N, albums: L, songs: X });
          } catch (a) {
            console.error(a);
          } finally {
            C((a) => ({ ...a, spotlight: !1 }));
          }
        })();
      }, []));
    const q = o.useMemo(
        () =>
          h.map((t) => n.find((a) => a.id === t)).filter((t) => t !== void 0),
        [h, n],
      ),
      B = o.useMemo(
        () =>
          [...q, ...i]
            .filter((u, N, E) => N === E.findIndex((k) => k.id === u.id))
            .slice(0, 8),
        [i, q],
      ),
      K = () => {
        const t = new Date().getHours();
        return t < 12
          ? b("home.goodMorning")
          : t < 18
            ? b("home.goodAfternoon")
            : b("home.goodEvening");
      },
      Q = () =>
        new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
      T = z.releases || z.recommendations || z.spotlight,
      P = o.useMemo(() => {
        const t = w.albums.filter((u) => $.includes(u.id)),
          a =
            y.length > 0
              ? y.filter((u) => !$.includes(u.id))
              : w.albums.filter((u) => !$.includes(u.id));
        return [...t, ...a].slice(0, 10);
      }, [y, w.albums]);
    o.useEffect(() => {
      if (P.length <= 1) return;
      const t = setInterval(() => {
        J((a) => (a + 1) % Math.min(P.length, 5));
      }, 2e3);
      return () => clearInterval(t);
    }, [P]);
    const I = P[D] || null,
      U =
        y.length > 0
          ? y.filter((t) => t.id !== (I == null ? void 0 : I.id))
          : [];
    return e.jsx("div", {
      className: `text-white ${c ? "pb-10" : "pb-32"}`,
      children:
        T && !I
          ? e.jsx("div", {
              className: "flex justify-center items-center h-[80vh]",
              children: e.jsx(te, {}),
            })
          : e.jsxs("div", {
              className: c ? "space-y-4" : "space-y-16",
              children: [
                e.jsxs("div", {
                  className: c ? "px-2 pt-2" : "px-6 md:px-10 pt-8",
                  children: [
                    !c &&
                      e.jsxs("div", {
                        className:
                          "flex flex-col mb-8 animate-in fade-in slide-in-from-top-4 duration-700",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-sm font-bold text-[#3A8FE0] uppercase tracking-widest mb-1 opacity-80",
                            children: Q(),
                          }),
                          e.jsx("h1", {
                            className:
                              "text-4xl md:text-5xl font-bold tracking-tight",
                            children: K(),
                          }),
                        ],
                      }),
                    P.length > 0 &&
                      e.jsx("div", {
                        className:
                          "animate-in fade-in zoom-in-95 duration-1000",
                        children: e.jsx(ce, {
                          albums: P,
                          activeIndex: D,
                          onPlay: (t) => g(t),
                          onClick: (t) => g(t),
                          isMini: c,
                        }),
                      }),
                  ],
                }),
                !c &&
                  B.length > 0 &&
                  e.jsxs("section", {
                    className:
                      "px-6 md:px-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-3 mb-6",
                        children: [
                          e.jsx("h2", {
                            className: "text-2xl font-bold tracking-tight",
                            children: "Jump Back In",
                          }),
                          e.jsx(oe, { className: "w-5 h-5 text-gray-500" }),
                        ],
                      }),
                      e.jsx("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: B.map((t, a) => {
                          const u = !("songs" in t);
                          return e.jsx(
                            "div",
                            {
                              className:
                                "animate-in fade-in slide-in-from-bottom-4",
                              style: { animationDelay: `${a * 50}ms` },
                              children: e.jsx(de, {
                                item: t,
                                onClick: () =>
                                  u
                                    ? m(t, [t], { type: "song", id: t.id })
                                    : l(t.id),
                                onPlay: () => {
                                  if (u) m(t, [t], { type: "song", id: t.id });
                                  else {
                                    const N = t;
                                    N.songs.length > 0 &&
                                      m(N.songs[0], N.songs, {
                                        type: "playlist",
                                        id: N.id,
                                      });
                                  }
                                },
                              }),
                            },
                            t.id,
                          );
                        }),
                      }),
                    ],
                  }),
                !c &&
                  A.length > 0 &&
                  e.jsx("div", {
                    className:
                      "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200",
                    children: e.jsx(M, {
                      title: b("home.recommended"),
                      children: A.map((t) =>
                        e.jsx(
                          "div",
                          {
                            className: "snap-start",
                            children: e.jsx(V, { song: t }),
                          },
                          t.id,
                        ),
                      ),
                    }),
                  }),
                !c &&
                  w.artists.length > 0 &&
                  e.jsx("div", {
                    className:
                      "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",
                    children: e.jsx(M, {
                      title: "Hip-Hop Titans",
                      children: w.artists.map((t) =>
                        e.jsx(
                          "div",
                          {
                            className: "w-36 md:w-48 flex-shrink-0 snap-start",
                            children: e.jsx(re, {
                              artist: t,
                              onArtistClick: p,
                            }),
                          },
                          t.id,
                        ),
                      ),
                    }),
                  }),
                w.albums.length > 0 &&
                  e.jsx("div", {
                    className:
                      "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",
                    children: e.jsx(M, {
                      title: "Legendary Albums",
                      children: w.albums.map((t) =>
                        e.jsx(
                          "div",
                          {
                            className: "w-44 md:w-56 flex-shrink-0 snap-start",
                            children: e.jsx(W, {
                              album: t,
                              onAlbumClick: g,
                              onArtistClick: p,
                            }),
                          },
                          t.id,
                        ),
                      ),
                    }),
                  }),
                !c &&
                  w.songs.length > 0 &&
                  e.jsx("div", {
                    className:
                      "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",
                    children: e.jsx(M, {
                      title: "Hip-Hop Essentials",
                      children: w.songs.map((t) =>
                        e.jsx(
                          "div",
                          {
                            className: "snap-start",
                            children: e.jsx(V, { song: t }),
                          },
                          t.id,
                        ),
                      ),
                    }),
                  }),
                !c &&
                  U.length > 0 &&
                  e.jsx("div", {
                    className:
                      "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",
                    children: e.jsx(M, {
                      title: "New Releases",
                      children: U.map((t) =>
                        e.jsx(
                          "div",
                          {
                            className: "w-44 md:w-56 flex-shrink-0 snap-start",
                            children: e.jsx(W, {
                              album: t,
                              onAlbumClick: g,
                              onArtistClick: p,
                            }),
                          },
                          t.id,
                        ),
                      ),
                    }),
                  }),
              ],
            }),
    });
  };
export { ue as default };
