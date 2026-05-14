import {
  u as oe,
  r as n,
  M as ie,
  P as te,
  U as _,
  j as e,
  S as le,
  f as ae,
  s as ce,
  L as se,
  R as ne,
  a as de,
} from "./index-Jbwo0tuu.js";
import { C as xe } from "./CinematicHeader-B03DhtP3.js";
import { S as ue } from "./SongList-D60ljWD0.js";
const he = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("polyline", { points: "3 6 5 6 21 6" }),
        e.jsx("path", {
          d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
        }),
      ],
    }),
  G = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", x2: "12", y1: "15", y2: "3" }),
      ],
    }),
  me = (t) =>
    e.jsx("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: e.jsx("path", {
        d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z",
      }),
    }),
  we = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      ],
    }),
  fe = (t) =>
    e.jsx("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: e.jsx("path", {
        d: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
      }),
    }),
  ge = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
        e.jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
        e.jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
        e.jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
        e.jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
        e.jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" }),
      ],
    }),
  pe = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("circle", { cx: "12", cy: "12", r: "1" }),
        e.jsx("circle", { cx: "19", cy: "12", r: "1" }),
        e.jsx("circle", { cx: "5", cy: "12", r: "1" }),
      ],
    }),
  je = ({ playlist: t, setActiveView: a, onOpenQuickAdd: w }) => {
    var $, A, z, q, Z, K, X;
    const { t: s } = oe(),
      [b, c] = n.useState(!1),
      y = n.useRef(null),
      { showModal: h, hideModal: d } = n.useContext(ie),
      {
        playSong: i,
        addSongsToEnd: p,
        isPlaying: r,
        togglePlay: j,
        selectedQuality: f,
        contextId: F,
      } = n.useContext(te),
      { deletePlaylist: k, updatePlaylist: S } = n.useContext(_),
      N = F === t.id,
      M = () => {
        N
          ? j()
          : t.songs &&
            t.songs.length > 0 &&
            i(t.songs[0], t.songs, { type: "playlist", id: t.id });
      },
      m = () => {
        (c(!1),
          h({
            title: s("playlistView.deletePlaylistTitle"),
            content: e.jsxs(e.Fragment, {
              children: [
                e.jsx("p", {
                  className: "text-gray-300 mb-6",
                  children: s("playlistView.deletePlaylistConfirm", {
                    name: t.name,
                  }),
                }),
                e.jsxs("div", {
                  className: "flex justify-end space-x-4",
                  children: [
                    e.jsx("button", {
                      onClick: d,
                      className:
                        "px-4 py-2 rounded-md bg-white/10 hover:bg-white/20",
                      children: s("playlistView.cancel"),
                    }),
                    e.jsx("button", {
                      onClick: () => {
                        (k(t.id), d(), a("library"));
                      },
                      className:
                        "px-4 py-2 rounded-md bg-red-600 text-white font-bold hover:bg-red-500",
                      children: s("playlistView.delete"),
                    }),
                  ],
                }),
              ],
            }),
          }));
      },
      C = () => {
        let l = t.name,
          x = t.description;
        h({
          title: s("playlistView.editDetailsTitle"),
          content: e.jsxs(e.Fragment, {
            children: [
              e.jsxs("div", {
                className: "space-y-4 text-gray-300 mb-6 mt-4",
                children: [
                  e.jsx("input", {
                    type: "text",
                    defaultValue: l,
                    onChange: (v) => (l = v.target.value),
                    className:
                      "w-full bg-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3A8FE0]",
                    placeholder: s("playlistView.playlistName"),
                  }),
                  e.jsx("textarea", {
                    rows: 3,
                    defaultValue: x,
                    onChange: (v) => (x = v.target.value),
                    className:
                      "w-full bg-white/10 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3A8FE0]",
                    placeholder: s("playlistView.description"),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex justify-end space-x-4",
                children: [
                  e.jsx("button", {
                    onClick: d,
                    className:
                      "px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-bold",
                    children: s("playlistView.cancel"),
                  }),
                  e.jsx("button", {
                    onClick: () => {
                      (S(t.id, { name: l, description: x }), d());
                    },
                    className:
                      "px-6 py-2 rounded-lg bg-[#3A8FE0] text-white font-bold shadow-lg shadow-[#3A8FE0]/20",
                    children: s("playlistView.save"),
                  }),
                ],
              }),
            ],
          }),
        });
      },
      o = (l) => {
        const x = new FileReader();
        ((x.onload = (v) => {
          var R;
          const B = (R = v.target) == null ? void 0 : R.result;
          S(t.id, { coverUrl: B });
        }),
          x.readAsDataURL(l));
      },
      g = () => {
        (t != null && t.songs && p(t.songs), c(!1));
      },
      T = () => {
        if (t != null && t.songs && t.songs.length > 0) {
          const l = [...t.songs];
          for (let x = l.length - 1; x > 0; x--) {
            const v = Math.floor(Math.random() * (x + 1));
            [l[x], l[v]] = [l[v], l[x]];
          }
          i(l[0], l, { type: "playlist", id: t.id });
        }
        c(!1);
      },
      L = async () => {
        var B, R;
        if (!(t != null && t.songs) || t.songs.length === 0) return;
        const l = new JSZip();
        let x = 0;
        const v = t.songs.length;
        h({
          title: s("albumView.downloadPreparing"),
          content: e.jsx("p", {
            children: s("albumView.downloadFetching", { current: 0, total: v }),
          }),
        });
        for (const P of t.songs) {
          const D =
            ((B = P.downloadUrl.find((V) => V.quality === "320kbps")) == null
              ? void 0
              : B.url) || ((R = P.downloadUrl[0]) == null ? void 0 : R.url);
          if (D)
            try {
              const Q = await (
                await fetch(D.replace(/^http:/, "https:"))
              ).blob();
              (l.file(
                `${P.artists.primary.map((H) => H.name).join(", ")} - ${P.name}.mp3`,
                Q,
              ),
                x++,
                h({
                  title: s("albumView.downloadPreparing"),
                  content: e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("p", {
                        children: s("albumView.downloadFetching_plural", {
                          current: x,
                          total: v,
                        }),
                      }),
                      e.jsx("div", {
                        className: "w-full bg-gray-600 rounded-full h-1",
                        children: e.jsx("div", {
                          className: "bg-[#3A8FE0] h-1 rounded-full",
                          style: { width: `${(x / v) * 100}%` },
                        }),
                      }),
                    ],
                  }),
                }));
            } catch (V) {
              console.error(`Download failed for ${P.name}:`, V);
            }
        }
        if (x === 0) {
          h({
            title: s("albumView.downloadFailed"),
            content: e.jsx("p", { children: s("albumView.downloadFailedMsg") }),
          });
          return;
        }
        (h({
          title: s("albumView.downloadCompressing"),
          content: e.jsx("p", {
            children: s("albumView.downloadCompressingMsg"),
          }),
        }),
          l
            .generateAsync({ type: "blob" }, (P) => {
              h({
                title: s("albumView.downloadCompressing"),
                content: e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx("p", {
                      children: s("albumView.downloadCompressingProgress", {
                        percent: P.percent.toFixed(0),
                      }),
                    }),
                    e.jsx("div", {
                      className: "w-full bg-gray-600 rounded-full h-1",
                      children: e.jsx("div", {
                        className: "bg-[#3A8FE0] h-1 rounded-full",
                        style: { width: `${P.percent}%` },
                      }),
                    }),
                  ],
                }),
              });
            })
            .then((P) => {
              const D = URL.createObjectURL(P),
                V = document.createElement("a");
              ((V.href = D),
                (V.download = `${t.name}.zip`),
                document.body.appendChild(V),
                V.click(),
                URL.revokeObjectURL(D),
                V.remove(),
                d());
            })
            .catch((P) => {
              h({
                title: s("albumView.error"),
                content: e.jsx("p", { children: s("albumView.errorZip") }),
              });
            }));
      },
      I = () => {
        if (!t || !t.songs) return;
        let l = `#EXTM3U
`;
        t.songs.forEach((R) => {
          var H, J, Y;
          const P = R.duration ?? -1,
            D = R.artists.primary.map((O) => O.name).join(", "),
            V = R.name,
            Q =
              ((H = R.downloadUrl.find((O) => O.quality === f)) == null
                ? void 0
                : H.url) ||
              ((J = R.downloadUrl.find((O) => O.quality === "320kbps")) == null
                ? void 0
                : J.url) ||
              ((Y = R.downloadUrl[0]) == null ? void 0 : Y.url);
          Q &&
            ((l += `#EXTINF:${P},${D} - ${V}
`),
            (l += `${Q.replace(/^http:/, "https:")}
`));
        });
        const x = new Blob([l], { type: "audio/x-mpegurl" }),
          v = URL.createObjectURL(x),
          B = document.createElement("a");
        ((B.href = v),
          (B.download = `${t.name}.m3u`),
          document.body.appendChild(B),
          B.click(),
          document.body.removeChild(B),
          URL.revokeObjectURL(v),
          c(!1));
      },
      E =
        (($ = t.songs) == null
          ? void 0
          : $.reduce((l, x) => l + (x.duration || 0), 0)) || 0,
      U = (l) => {
        const x = Math.floor(l / 3600),
          v = Math.floor((l % 3600) / 60);
        return `${x > 0 ? x + " hr " : ""}${v} min`;
      },
      u =
        t.coverUrl ||
        ((q =
          (z = (A = t.songs[0]) == null ? void 0 : A.image) == null
            ? void 0
            : z.find((l) => l.quality === "500x500")) == null
          ? void 0
          : q.url) ||
        ((X =
          (K = (Z = t.songs[0]) == null ? void 0 : Z.image) == null
            ? void 0
            : K[0]) == null
          ? void 0
          : X.url),
      W = `${t.songs.length} songs • ${U(E)}`;
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(xe, {
          title: t.name,
          description: t.description,
          type: s("playlistView.playlist"),
          imageUrl: u,
          meta: W,
          isPlaying: r,
          isCurrentContext: N,
          onPlay: M,
          isFavorite: !0,
          onToggleFavorite: () => {},
          isEditable: !0,
          onEditTitle: C,
          onImageUpload: o,
          children: [
            e.jsx("button", {
              ref: y,
              onClick: (l) => {
                (l.stopPropagation(), c((x) => !x));
              },
              className:
                "w-12 h-12 rounded-full border border-transparent hover:bg-white/5 flex items-center justify-center transition-all text-gray-400 hover:text-white",
              children: e.jsx(pe, { className: "w-6 h-6" }),
            }),
            e.jsxs("button", {
              onClick: w,
              className:
                "flex items-center gap-2 px-6 py-3 font-bold rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white transition-all ml-2",
              children: [
                e.jsx(we, { className: "w-5 h-5" }),
                e.jsx("span", { children: s("playlistView.addSongs") }),
              ],
            }),
          ],
        }),
        e.jsx(le, {
          isOpen: b,
          onClose: () => c(!1),
          triggerRef: y,
          width: "w-64",
          children: e.jsxs("div", {
            className: "flex flex-col py-1",
            children: [
              e.jsxs("button", {
                onClick: g,
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(ge, { className: "w-4 h-4" }),
                  s("albumView.addToQueue"),
                ],
              }),
              e.jsxs("button", {
                onClick: T,
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(fe, { className: "w-4 h-4" }),
                  s("albumView.playShuffle"),
                ],
              }),
              e.jsx("div", { className: "h-px bg-white/10 my-1 mx-2" }),
              e.jsxs("button", {
                onClick: () => {
                  (C(), c(!1));
                },
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(me, { className: "w-4 h-4" }),
                  s("playlistView.editDetails"),
                ],
              }),
              e.jsxs("button", {
                onClick: () => {
                  (L(), c(!1));
                },
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(G, { className: "w-4 h-4" }),
                  s("apiPlaylistView.downloadZip"),
                ],
              }),
              e.jsxs("button", {
                onClick: I,
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(G, { className: "w-4 h-4" }),
                  s("albumView.downloadM3U"),
                ],
              }),
              e.jsx("div", { className: "h-px bg-white/10 my-1 mx-2" }),
              e.jsxs("button", {
                onClick: m,
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors",
                children: [
                  e.jsx(he, { className: "w-4 h-4" }),
                  s("playlistView.delete"),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  ve = (t) =>
    e.jsx("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
      }),
    }),
  be = (t) =>
    e.jsx("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 2,
      stroke: "currentColor",
      children: e.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
      }),
    }),
  ye = ({ playlist: t, navigateToArtist: a }) => {
    const [w, s] = n.useState("default"),
      [b, c] = n.useState(!1),
      y = n.useRef(null);
    n.useEffect(() => {
      const d = (i) => {
        y.current && !y.current.contains(i.target) && c(!1);
      };
      return (
        document.addEventListener("mousedown", d),
        () => document.removeEventListener("mousedown", d)
      );
    }, []);
    const h = n.useMemo(() => {
      if (!(t != null && t.songs)) return [];
      const d = [...t.songs];
      switch (w) {
        case "title":
          return d.sort((i, p) => i.name.localeCompare(p.name));
        case "duration":
          return d.sort((i, p) => (i.duration || 0) - (p.duration || 0));
        default:
          return t.songs;
      }
    }, [t == null ? void 0 : t.songs, w]);
    return e.jsx(e.Fragment, {
      children:
        t.songs && t.songs.length > 0
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsxs("div", {
                  className:
                    "flex justify-between items-center text-gray-400 border-b border-white/10 pb-2 mb-2 px-4 text-sm uppercase font-semibold",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-x-4",
                      children: [
                        e.jsx("span", {
                          className: "text-center w-5",
                          children: "#",
                        }),
                        e.jsx("span", { children: "Title" }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-x-4",
                      children: [
                        e.jsxs("div", {
                          className: "relative",
                          ref: y,
                          children: [
                            e.jsxs("button", {
                              onClick: () => c((d) => !d),
                              className:
                                "flex items-center gap-2 text-xs hover:text-white",
                              children: [
                                e.jsx("span", { children: "SORT BY" }),
                                e.jsx(be, { className: "w-4 h-4" }),
                              ],
                            }),
                            b &&
                              e.jsxs("div", {
                                className:
                                  "absolute top-full right-0 mt-2 w-40 bg-[#163A6B] border border-white/10 rounded-lg shadow-2xl p-2 z-30",
                                children: [
                                  e.jsx("button", {
                                    onClick: () => {
                                      (s("default"), c(!1));
                                    },
                                    className: `w-full text-left px-3 py-2 text-sm rounded-md hover:bg-white/10 ${w === "default" ? "text-[#3A8FE0]" : ""}`,
                                    children: "Default",
                                  }),
                                  e.jsx("button", {
                                    onClick: () => {
                                      (s("title"), c(!1));
                                    },
                                    className: `w-full text-left px-3 py-2 text-sm rounded-md hover:bg-white/10 ${w === "title" ? "text-[#3A8FE0]" : ""}`,
                                    children: "Title",
                                  }),
                                  e.jsx("button", {
                                    onClick: () => {
                                      (s("duration"), c(!1));
                                    },
                                    className: `w-full text-left px-3 py-2 text-sm rounded-md hover:bg-white/10 ${w === "duration" ? "text-[#3A8FE0]" : ""}`,
                                    children: "Duration",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        e.jsx("span", {
                          title: "Duration",
                          children: e.jsx(ve, { className: "w-5 h-5" }),
                        }),
                        e.jsx("div", { className: "w-5" }),
                      ],
                    }),
                  ],
                }),
                e.jsx(ue, {
                  songs: h,
                  playlistId: t.id,
                  navigateToArtist: a,
                  context: { type: "playlist", id: t.id },
                }),
              ],
            })
          : e.jsx("div", {
              className: "text-center py-10",
              children: e.jsx("p", {
                className: "text-gray-400",
                children: "This playlist is empty.",
              }),
            }),
    });
  },
  re = () => {
    const { isPlaying: t, togglePlay: a } = n.useContext(te),
      [w, s] = n.useState(null),
      [b, c] = n.useState(!1),
      [y, h] = n.useState(0),
      d = n.useRef(null),
      i = n.useCallback(() => {
        const r = d.current;
        (r && (r.paused || r.pause(), (r.currentTime = 0), (r.src = "")),
          c(!1),
          s(null),
          h(0));
      }, []);
    (n.useEffect(() => {
      d.current = new Audio();
      const r = d.current,
        j = () => c(!0),
        f = () => c(!1),
        F = () => i(),
        k = () => {
          if (r && !r.paused) {
            const N = r.currentTime;
            N >= 30 ? i() : h((N / 30) * 100);
          }
        },
        S = () => h(0);
      return (
        r.addEventListener("play", j),
        r.addEventListener("pause", f),
        r.addEventListener("ended", F),
        r.addEventListener("timeupdate", k),
        r.addEventListener("loadeddata", S),
        () => {
          (r.removeEventListener("play", j),
            r.removeEventListener("pause", f),
            r.removeEventListener("ended", F),
            r.removeEventListener("timeupdate", k),
            r.removeEventListener("loadeddata", S),
            r && !r.paused && (r.pause(), (r.src = "")));
        }
      );
    }, [i]),
      n.useEffect(() => {
        t && b && i();
      }, [t, b, i]));
    const p = n.useCallback(
      (r, j) => {
        var k, S;
        r.stopPropagation();
        const f = d.current;
        if (!f) return;
        if (w === j.id)
          f.paused ? (t && a(), f.play().catch(console.error)) : f.pause();
        else {
          t && a();
          const N =
            ((k = j.downloadUrl.find((M) => M.quality === "96kbps")) == null
              ? void 0
              : k.url) || ((S = j.downloadUrl[0]) == null ? void 0 : S.url);
          N
            ? (s(j.id),
              c(!0),
              h(0),
              (f.src = N.replace(/^http:/, "https:")),
              f.load(),
              f.play().catch((M) => {
                (console.error("Preview play failed:", M),
                  M.name !== "AbortError" && i());
              }))
            : (console.warn("No preview URL for song:", j.name), i());
        }
      },
      [t, a, w, i],
    );
    return {
      previewingSongId: w,
      isPreviewPlaying: b,
      previewProgress: y,
      handlePreview: p,
    };
  },
  ke = (t) =>
    e.jsx("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: e.jsx("path", { d: "M5 3l14 9-14 9V3z" }),
    }),
  Ne = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        e.jsx("rect", { x: "6", y: "4", width: "4", height: "16", rx: "2" }),
        e.jsx("rect", { x: "14", y: "4", width: "4", height: "16", rx: "2" }),
      ],
    }),
  Ce = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", { d: "M9 18V5l12-2v13" }),
        e.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        e.jsx("circle", { cx: "18", cy: "16", r: "3" }),
      ],
    }),
  ee = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("circle", { cx: "11", cy: "11", r: "8" }),
        e.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
      ],
    }),
  Le = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        e.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ],
    }),
  Pe = (t) =>
    e.jsx("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 3,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: e.jsx("polyline", { points: "20 6 9 17 4 12" }),
    }),
  Se = ({
    playlistId: t,
    playlistSongs: a,
    navigateToArtist: w,
    onClose: s,
  }) => {
    const { addSongToPlaylist: b } = n.useContext(_),
      {
        previewingSongId: c,
        isPreviewPlaying: y,
        previewProgress: h,
        handlePreview: d,
      } = re(),
      [i, p] = n.useState(""),
      [r, j] = n.useState([]),
      [f, F] = n.useState(!1),
      [k, S] = n.useState(new Set()),
      N = n.useRef(null),
      M = i.trim().length > 0;
    (n.useEffect(() => {
      var o;
      (o = N.current) == null || o.focus();
    }, []),
      n.useEffect(() => {
        if (!M) {
          j([]);
          return;
        }
        F(!0);
        const o = setTimeout(async () => {
          try {
            const g = await ce(i, 1, 10);
            g.success && j(g.data.results);
          } catch (g) {
            console.error("Search failed", g);
          } finally {
            F(!1);
          }
        }, 300);
        return () => clearTimeout(o);
      }, [i, M]));
    const m = (o) => {
        (b(t, o), S((g) => new Set(g).add(o.id)));
      },
      C = (o) => {
        var U, u, W, $;
        const g = k.has(o.id) || a.some((A) => A.id === o.id),
          T =
            ((u =
              (U = o.image) == null
                ? void 0
                : U.find((A) => A.quality === "150x150")) == null
              ? void 0
              : u.url) ||
            (($ = (W = o.image) == null ? void 0 : W[0]) == null
              ? void 0
              : $.url),
          L = c === o.id,
          I = 141,
          E = I - (I * h) / 100;
        return e.jsxs(
          "div",
          {
            className:
              "group flex items-center p-3 rounded-2xl hover:bg-white/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 border border-transparent hover:border-white/5",
            children: [
              e.jsxs("div", {
                className:
                  "w-14 h-14 rounded-xl mr-4 flex-shrink-0 relative overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow",
                children: [
                  T
                    ? e.jsx("img", {
                        src: T,
                        alt: o.name,
                        className: "w-full h-full object-cover",
                        loading: "lazy",
                      })
                    : e.jsx("div", {
                        className:
                          "w-full h-full bg-white/5 flex items-center justify-center rounded-xl",
                        children: e.jsx(Ce, {
                          className: "w-6 h-6 text-gray-500",
                        }),
                      }),
                  L &&
                    e.jsx("div", {
                      className:
                        "absolute inset-0 bg-black/40 backdrop-blur-[1px]",
                    }),
                  L &&
                    e.jsx("svg", {
                      className: "absolute inset-0 w-full h-full p-1",
                      viewBox: "0 0 40 40",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      style: { filter: "drop-shadow(0 0 3px #3A8FE0)" },
                      children: e.jsx("path", {
                        d: "M20 1.5 L34 1.5 A4.5 4.5 0 0 1 38.5 6 L38.5 34 A4.5 4.5 0 0 1 34 38.5 L6 38.5 A4.5 4.5 0 0 1 1.5 34 L1.5 6 A4.5 4.5 0 0 1 6 1.5 L19.999 1.5",
                        stroke: "#3A8FE0",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        style: {
                          strokeDasharray: I,
                          strokeDashoffset: E,
                          transition: "stroke-dashoffset 0.1s linear",
                        },
                      }),
                    }),
                  e.jsx("button", {
                    onClick: (A) => d(A, o),
                    "aria-label": L && y ? "Pause preview" : "Play preview",
                    className: `absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 ${L ? "opacity-100" : "opacity-0 group-hover:opacity-100 bg-black/40"}`,
                    children:
                      L && y
                        ? e.jsx(Ne, { className: "w-6 h-6 drop-shadow-md" })
                        : e.jsx(ke, { className: "w-6 h-6 drop-shadow-md" }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0 pr-4",
                children: [
                  e.jsx("p", {
                    className:
                      "font-bold text-white text-base truncate group-hover:text-[#3A8FE0] transition-colors",
                    children: o.name,
                  }),
                  e.jsx("p", {
                    className:
                      "text-sm text-gray-400 truncate flex items-center gap-1",
                    children: o.artists.primary.map((A, z) =>
                      e.jsxs(
                        ne.Fragment,
                        {
                          children: [
                            e.jsx("span", {
                              onClick: (q) => {
                                (q.stopPropagation(), w(A.id));
                              },
                              className:
                                "hover:text-white hover:underline cursor-pointer transition-colors",
                              children: A.name,
                            }),
                            z < o.artists.primary.length - 1 && ", ",
                          ],
                        },
                        A.id,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("button", {
                onClick: () => m(o),
                disabled: g,
                className: `h-10 px-5 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ease-out 
                        ${g ? "bg-green-500 text-black w-28 cursor-default" : "bg-white/10 text-white hover:bg-white/20 w-20 hover:scale-105 active:scale-95"}`,
                children: [
                  e.jsx("span", {
                    className: `absolute transition-all duration-300 ${g ? "opacity-0 scale-50" : "opacity-100 scale-100"}`,
                    children: "Add",
                  }),
                  e.jsxs("span", {
                    className: `absolute flex items-center gap-1 transition-all duration-300 ${g ? "opacity-100 scale-100" : "opacity-0 scale-150"}`,
                    children: [e.jsx(Pe, { className: "w-4 h-4" }), " Added"],
                  }),
                ],
              }),
            ],
          },
          o.id,
        );
      };
    return e.jsxs("div", {
      className: "flex flex-col h-full bg-[#0B1E3D]/95 backdrop-blur-3xl",
      children: [
        e.jsx("div", {
          className: "relative p-6 shrink-0 border-b border-white/5",
          children: e.jsxs("div", {
            className:
              "flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-2 pl-4 focus-within:ring-2 focus-within:ring-[#3A8FE0]/50 focus-within:bg-black/40 transition-all duration-300",
            children: [
              e.jsx(ee, { className: "h-6 w-6 text-[#3A8FE0]" }),
              e.jsx("input", {
                ref: N,
                type: "text",
                value: i,
                onChange: (o) => p(o.target.value),
                placeholder: "Search for songs to add...",
                className:
                  "w-full bg-transparent border-none text-xl font-medium text-white placeholder-gray-500 focus:outline-none h-12",
              }),
              i &&
                e.jsx("button", {
                  onClick: () => p(""),
                  className:
                    "p-2 rounded-xl text-gray-500 hover:text-white hover:bg-white/10 transition-colors mr-1",
                  children: e.jsx(Le, { className: "h-5 w-5" }),
                }),
            ],
          }),
        }),
        e.jsx("div", {
          className:
            "flex-1 overflow-y-auto custom-scrollbar relative px-4 pb-4",
          children: M
            ? e.jsxs(e.Fragment, {
                children: [
                  f
                    ? e.jsx("div", {
                        className:
                          "absolute inset-0 flex items-center justify-center z-10",
                        children: e.jsx(se, {}),
                      })
                    : null,
                  r.length > 0
                    ? e.jsxs("div", {
                        className: "space-y-2 pt-2",
                        children: [
                          e.jsx("div", {
                            className:
                              "text-xs font-bold text-gray-500 uppercase tracking-widest px-3 mb-2",
                            children: "Results",
                          }),
                          r.map(C),
                        ],
                      })
                    : !f &&
                      e.jsx("div", {
                        className:
                          "flex flex-col items-center justify-center h-64 text-gray-500 animate-in fade-in",
                        children: e.jsxs("p", {
                          className: "text-lg",
                          children: ['No results found for "', i, '"'],
                        }),
                      }),
                ],
              })
            : e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center h-full text-gray-500/30 space-y-4",
                children: [
                  e.jsx(ee, { className: "w-16 h-16 opacity-20" }),
                  e.jsx("p", {
                    className: "text-base font-medium",
                    children: "Start typing to find music",
                  }),
                ],
              }),
        }),
        e.jsx("div", {
          className: "p-4 border-t border-white/5 flex justify-end",
          children: e.jsx("button", {
            onClick: s,
            className:
              "px-6 py-2.5 rounded-full text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-colors",
            children: "Done",
          }),
        }),
      ],
    });
  },
  Me = ({ isOpen: t, onClose: a, ...w }) => {
    const [s, b] = n.useState(!1);
    return (
      n.useEffect(() => b(!0), []),
      !t || !s || !document.body
        ? null
        : ae.createPortal(
            e.jsxs("div", {
              className:
                "fixed inset-0 z-[1200] flex items-center justify-center p-4",
              onClick: a,
              children: [
                e.jsx("div", {
                  className:
                    "absolute inset-0 bg-[#000000]/80 backdrop-blur-md animate-in fade-in duration-300",
                }),
                e.jsx("div", {
                  className:
                    "relative bg-[#0B1E3D] rounded-[32px] shadow-[0_0_60px_rgba(58,143,224,0.15)] w-full max-w-2xl flex flex-col overflow-hidden transform transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] animate-in zoom-in-90 scale-100 border border-white/10",
                  style: { height: "75vh", maxHeight: "800px" },
                  onClick: (c) => c.stopPropagation(),
                  children: e.jsx(Se, { ...w, onClose: a }),
                }),
              ],
            }),
            document.body,
          )
    );
  },
  Ee = (t) =>
    e.jsx("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: e.jsx("path", { d: "M5 3l14 9-14 9V3z" }),
    }),
  Ae = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: [
        e.jsx("rect", { x: "6", y: "4", width: "4", height: "16", rx: "2" }),
        e.jsx("rect", { x: "14", y: "4", width: "4", height: "16", rx: "2" }),
      ],
    }),
  Re = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", { d: "M9 18V5l12-2v13" }),
        e.jsx("circle", { cx: "6", cy: "18", r: "3" }),
        e.jsx("circle", { cx: "18", cy: "16", r: "3" }),
      ],
    }),
  Ve = (t) =>
    e.jsxs("svg", {
      ...t,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", {
          d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        }),
        e.jsx("path", { d: "M3 3v5h5" }),
        e.jsx("path", {
          d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
        }),
        e.jsx("path", { d: "M16 16h5v5" }),
      ],
    }),
  Fe = ({
    playlistId: t,
    playlistSongs: a,
    navigateToArtist: w,
    previewingSongId: s,
    isPreviewPlaying: b,
    previewProgress: c,
    handlePreview: y,
  }) => {
    const { addSongToPlaylist: h } = n.useContext(_),
      [d, i] = n.useState([]),
      [p, r] = n.useState(!1),
      [j, f] = n.useState(null),
      F = n.useCallback(async () => {
        if (!(!a || a.length === 0)) {
          (r(!0), f(null));
          try {
            const m = new Map();
            for (const u of a) u && u.id && m.set(u.id, u);
            const C = Array.from(m.values());
            if (C.length === 0) {
              r(!1);
              return;
            }
            const g = [...C]
                .sort(() => 0.5 - Math.random())
                .slice(0, 5)
                .map((u) => de(u.id, 5)),
              L = (await Promise.all(g)).flatMap((u) =>
                u.success ? u.data : [],
              ),
              I = new Set(
                a.map((u) => (u == null ? void 0 : u.id)).filter(Boolean),
              ),
              U = L.filter(
                (u, W) =>
                  W === L.findIndex(($) => $.id === u.id) && !I.has(u.id),
              ).sort(() => 0.5 - Math.random());
            i(U.slice(0, 20));
          } catch (m) {
            (console.error("Failed to fetch recommendations", m),
              f("Could not fetch recommendations."));
          } finally {
            r(!1);
          }
        }
      }, [a]);
    (n.useEffect(() => {
      i([]);
    }, [t]),
      n.useEffect(() => {
        d.length === 0 && a && a.length > 0 && !p && F();
      }, [t]));
    const k = n.useMemo(
        () =>
          a
            ? d.filter((m) => !a.some((C) => C && C.id === m.id)).slice(0, 10)
            : [],
        [d, a],
      ),
      S = (m) => {
        h(t, m);
      },
      N = () => {
        F();
      },
      M = (m) => {
        var L, I;
        const C =
            (I =
              (L = m.image) == null
                ? void 0
                : L.find((E) => E.quality === "50x50")) == null
              ? void 0
              : I.url,
          o = s === m.id,
          g = 141,
          T = g - (g * c) / 100;
        return e.jsxs(
          "div",
          {
            className:
              "flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-2",
            children: [
              e.jsxs("div", {
                className: "w-10 h-10 rounded-md mr-3 flex-shrink-0 relative",
                children: [
                  C
                    ? e.jsx("img", {
                        src: C,
                        alt: m.name,
                        className:
                          "w-full h-full object-cover rounded-md animate-image-appear",
                        loading: "lazy",
                      })
                    : e.jsx("div", {
                        className:
                          "w-full h-full bg-white/5 flex items-center justify-center rounded-md",
                        children: e.jsx(Re, {
                          className: "w-6 h-6 text-gray-500",
                        }),
                      }),
                  o &&
                    e.jsx("svg", {
                      className: "absolute inset-0 w-full h-full",
                      viewBox: "0 0 40 40",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      style: { filter: "drop-shadow(0 0 3px #6CB4F0)" },
                      children: e.jsx("path", {
                        d: "M20 1.5 L34 1.5 A4.5 4.5 0 0 1 38.5 6 L38.5 34 A4.5 4.5 0 0 1 34 38.5 L6 38.5 A4.5 4.5 0 0 1 1.5 34 L1.5 6 A4.5 4.5 0 0 1 6 1.5 L19.999 1.5",
                        stroke: "#6CB4F0",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        style: { strokeDasharray: g, strokeDashoffset: T },
                      }),
                    }),
                  e.jsx("button", {
                    onClick: (E) => y(E, m),
                    "aria-label": o && b ? "Pause preview" : "Play preview",
                    className: `absolute inset-0 bg-black/50 flex items-center justify-center text-white rounded-md transition-opacity ${o ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`,
                    children:
                      o && b
                        ? e.jsx(Ae, { className: "w-5 h-5" })
                        : e.jsx(Ee, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  e.jsx("p", {
                    className: "font-semibold text-white truncate",
                    children: m.name,
                  }),
                  e.jsx("p", {
                    className: "text-sm text-gray-400 truncate",
                    children: m.artists.primary.map((E, U) =>
                      e.jsxs(
                        ne.Fragment,
                        {
                          children: [
                            e.jsx("span", {
                              onClick: (u) => {
                                (u.stopPropagation(), w(E.id));
                              },
                              className: "hover:underline cursor-pointer",
                              children: E.name,
                            }),
                            U < m.artists.primary.length - 1 && ", ",
                          ],
                        },
                        E.id,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsx("button", {
                onClick: () => S(m),
                className:
                  "px-4 py-1.5 text-sm font-bold rounded-full transition-colors bg-white/10 text-white hover:bg-white/20 hover:scale-105 active:scale-95",
                children: "Add",
              }),
            ],
          },
          m.id,
        );
      };
    return !a || a.length === 0
      ? e.jsx("div", {
          className: "mt-12 pt-8 border-t border-white/10 text-center",
          children: e.jsx("p", {
            className: "text-gray-500 text-sm",
            children: "Add some songs to start getting recommendations.",
          }),
        })
      : e.jsxs("div", {
          className: "mt-12 pt-8 border-t border-white/10",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h3", {
                      className: "text-2xl font-bold text-white",
                      children: "Recommended Songs",
                    }),
                    e.jsx("p", {
                      className: "text-gray-400 text-sm mt-1",
                      children: "Based on the vibes of this playlist.",
                    }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: N,
                  disabled: p,
                  className:
                    "flex items-center space-x-2 px-3 py-1.5 rounded-md text-gray-400 hover:text-white transition-all text-sm font-medium hover:bg-white/5",
                  children: [
                    e.jsx(Ve, {
                      className: `w-4 h-4 ${p ? "animate-spin" : ""}`,
                    }),
                    e.jsx("span", {
                      children: p ? "Refreshing..." : "Refresh",
                    }),
                  ],
                }),
              ],
            }),
            p && k.length === 0
              ? e.jsx("div", { className: "py-8", children: e.jsx(se, {}) })
              : j
                ? e.jsx("div", {
                    className: "text-center py-8 text-red-400 text-sm",
                    children: j,
                  })
                : k.length > 0
                  ? e.jsx("div", { className: "space-y-2", children: k.map(M) })
                  : e.jsx("div", {
                      className: "text-center py-8 text-gray-500 text-sm",
                      children: "No new recommendations found. Try refreshing!",
                    }),
          ],
        });
  },
  Te = ({ playlistId: t, setActiveView: a, navigateToArtist: w }) => {
    const [s, b] = n.useState(null),
      [c, y] = n.useState(!1),
      { playlists: h } = n.useContext(_),
      {
        previewingSongId: d,
        isPreviewPlaying: i,
        previewProgress: p,
        handlePreview: r,
      } = re();
    return (
      n.useEffect(() => {
        const j = h.find((f) => f.id === t) || null;
        b(j);
      }, [t, h]),
      s
        ? e.jsxs("div", {
            className: "text-white",
            children: [
              e.jsx(je, {
                playlist: s,
                setActiveView: a,
                onOpenQuickAdd: () => y(!0),
              }),
              e.jsxs("div", {
                className: "px-4 sm:px-8 pb-8",
                children: [
                  e.jsx(ye, { playlist: s, navigateToArtist: w }),
                  e.jsx(Fe, {
                    playlistId: s.id,
                    playlistSongs: s.songs,
                    navigateToArtist: w,
                    previewingSongId: d,
                    isPreviewPlaying: i,
                    previewProgress: p,
                    handlePreview: r,
                  }),
                ],
              }),
              e.jsx(Me, {
                isOpen: c,
                onClose: () => y(!1),
                playlistId: s.id,
                playlistSongs: s.songs,
                navigateToArtist: w,
              }),
            ],
          })
        : e.jsx("div", {
            className: "p-8 text-center text-gray-400",
            children: "Playlist not found. It may have been deleted.",
          })
    );
  };
export { Te as default };
