import {
  r as d,
  b as Y,
  u as ee,
  M as te,
  P as se,
  U as ne,
  j as e,
  L as oe,
  R as le,
  S as re,
} from "./index-Jbwo0tuu.js";
import { S as ie } from "./SongList-D60ljWD0.js";
import { C as ae } from "./CinematicHeader-B03DhtP3.js";
const ce = (r) => {
    const [k, w] = d.useState(null),
      [v, t] = d.useState(!0),
      [C, x] = d.useState(null);
    return (
      d.useEffect(() => {
        r
          ? (async () => {
              (t(!0), x(null));
              try {
                const h = await Y(r);
                h.success ? w(h.data) : x("Failed to fetch album details.");
              } catch (h) {
                (console.error("Failed to fetch album details:", h),
                  x("An error occurred while fetching album details."));
              } finally {
                t(!1);
              }
            })()
          : (t(!1), w(null));
      }, [r]),
      { album: k, loading: v, error: C }
    );
  },
  de = (r) =>
    e.jsxs("svg", {
      ...r,
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
  P = (r) =>
    e.jsxs("svg", {
      ...r,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        e.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
        e.jsx("polyline", { points: "7 10 12 15 17 10" }),
        e.jsx("line", { x1: "12", x2: "12", y1: "15", y2: "3" }),
      ],
    }),
  ue = (r) =>
    e.jsxs("svg", {
      ...r,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
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
  me = (r) =>
    e.jsx("svg", {
      ...r,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2.5,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: e.jsx("path", {
        d: "M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5",
      }),
    }),
  ge = ({
    albumId: r,
    setActiveView: k,
    navigateToArtist: w,
    navigateToPlaylist: v,
  }) => {
    var L, F, U, S, R;
    const { album: t, loading: C, error: x } = ce(r),
      { t: n } = ee(),
      [h, p] = d.useState(!1),
      M = d.useRef(null),
      { showModal: g, hideModal: N } = d.useContext(te),
      {
        playSong: V,
        addSongsToEnd: E,
        isPlaying: O,
        togglePlay: T,
        selectedQuality: B,
        contextId: D,
      } = d.useContext(se),
      { isFavoriteAlbum: I, toggleFavoriteAlbum: q } = d.useContext(ne);
    if (C)
      return e.jsx("div", {
        className: "flex items-center justify-center h-full",
        children: e.jsx(oe, {}),
      });
    if (x || !t)
      return e.jsx("div", {
        className: "p-8 text-center text-gray-400",
        children: x || "Album not found or failed to load.",
      });
    const A = D === t.id,
      z = () => {
        A
          ? T()
          : t.songs &&
            t.songs.length > 0 &&
            V(t.songs[0], t.songs, { type: "album", id: t.id });
      },
      Q = () => {
        (t != null && t.songs && E(t.songs), p(!1));
      },
      W = () => {
        if (t != null && t.songs && t.songs.length > 0) {
          const s = [...t.songs];
          for (let o = s.length - 1; o > 0; o--) {
            const a = Math.floor(Math.random() * (o + 1));
            [s[o], s[a]] = [s[a], s[o]];
          }
          V(s[0], s, { type: "album", id: t.id });
        }
        p(!1);
      },
      H = async () => {
        var u, c;
        if (!(t != null && t.songs) || t.songs.length === 0) return;
        const s = new JSZip();
        let o = 0;
        const a = t.songs.length;
        g({
          title: n("albumView.downloadPreparing"),
          content: e.jsx("p", {
            children: n("albumView.downloadFetching", { current: 0, total: a }),
          }),
        });
        for (const l of t.songs) {
          const m =
            ((u = l.downloadUrl.find((i) => i.quality === "320kbps")) == null
              ? void 0
              : u.url) || ((c = l.downloadUrl[0]) == null ? void 0 : c.url);
          if (m)
            try {
              const b = await (
                  await fetch(m.replace(/^http:/, "https:"))
                ).blob(),
                y = `${l.artists.primary.map((j) => j.name).join(", ")} - ${l.name}.mp3`;
              (s.file(y, b),
                o++,
                g({
                  title: n("albumView.downloadPreparing"),
                  content: e.jsxs("div", {
                    className: "space-y-2",
                    children: [
                      e.jsx("p", {
                        children: n("albumView.downloadFetching_plural", {
                          current: o,
                          total: a,
                        }),
                      }),
                      e.jsx("div", {
                        className: "w-full bg-gray-600 rounded-full h-2.5",
                        children: e.jsx("div", {
                          className: "bg-[#3A8FE0] h-2.5 rounded-full",
                          style: { width: `${(o / a) * 100}%` },
                        }),
                      }),
                    ],
                  }),
                }));
            } catch (i) {
              console.error(`Failed to download ${l.name}:`, i);
            }
        }
        if (o === 0) {
          g({
            title: n("albumView.downloadFailed"),
            content: e.jsxs(e.Fragment, {
              children: [
                e.jsx("p", {
                  className: "text-gray-300 mb-6",
                  children: n("albumView.downloadFailedMsg"),
                }),
                e.jsx("div", {
                  className: "flex justify-end",
                  children: e.jsx("button", {
                    onClick: N,
                    className:
                      "px-4 py-2 rounded-md bg-white/10 hover:bg-white/20",
                    children: n("albumView.close"),
                  }),
                }),
              ],
            }),
          });
          return;
        }
        (g({
          title: n("albumView.downloadCompressing"),
          content: e.jsx("p", {
            children: n("albumView.downloadCompressingMsg"),
          }),
        }),
          s
            .generateAsync({ type: "blob" }, (l) => {
              g({
                title: n("albumView.downloadCompressing"),
                content: e.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    e.jsx("p", {
                      children: n("albumView.downloadCompressingProgress", {
                        percent: l.percent.toFixed(0),
                      }),
                    }),
                    e.jsx("div", {
                      className: "w-full bg-gray-600 rounded-full h-2.5",
                      children: e.jsx("div", {
                        className: "bg-[#3A8FE0] h-2.5 rounded-full",
                        style: { width: `${l.percent}%` },
                      }),
                    }),
                  ],
                }),
              });
            })
            .then((l) => {
              const m = URL.createObjectURL(l),
                i = document.createElement("a");
              ((i.style.display = "none"),
                (i.href = m),
                (i.download = `${t.name}.zip`),
                document.body.appendChild(i),
                i.click(),
                URL.revokeObjectURL(m),
                i.remove(),
                N());
            })
            .catch((l) => {
              (console.error("Failed to generate zip", l),
                g({
                  title: n("albumView.error"),
                  content: e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("p", {
                        className: "text-gray-300 mb-6",
                        children: n("albumView.errorZip"),
                      }),
                      e.jsx("div", {
                        className: "flex justify-end",
                        children: e.jsx("button", {
                          onClick: N,
                          className:
                            "px-4 py-2 rounded-md bg-white/10 hover:bg-white/20",
                          children: n("albumView.close"),
                        }),
                      }),
                    ],
                  }),
                }));
            }));
      },
      X = () => {
        if (!t || !t.songs) return;
        let s = `#EXTM3U
`;
        t.songs.forEach((c) => {
          var y, j, $;
          const l = c.duration ?? -1,
            m = c.artists.primary.map((f) => f.name).join(", "),
            i = c.name,
            b =
              ((y = c.downloadUrl.find((f) => f.quality === B)) == null
                ? void 0
                : y.url) ||
              ((j = c.downloadUrl.find((f) => f.quality === "320kbps")) == null
                ? void 0
                : j.url) ||
              (($ = c.downloadUrl[0]) == null ? void 0 : $.url);
          b &&
            ((s += `#EXTINF:${l},${m} - ${i}
`),
            (s += `${b.replace(/^http:/, "https:")}
`));
        });
        const o = new Blob([s], { type: "audio/x-mpegurl" }),
          a = URL.createObjectURL(o),
          u = document.createElement("a");
        ((u.href = a),
          (u.download = `${t.name}.m3u`),
          document.body.appendChild(u),
          u.click(),
          document.body.removeChild(u),
          URL.revokeObjectURL(a),
          p(!1));
      },
      Z =
        ((L = t.songs) == null
          ? void 0
          : L.reduce((s, o) => s + (o.duration || 0), 0)) || 0,
      J = (s) => {
        const o = Math.floor(s / 60);
        return n("albumView.duration", { duration: o });
      },
      _ =
        ((U =
          (F = t.image) == null
            ? void 0
            : F.find((s) => s.quality === "500x500")) == null
          ? void 0
          : U.url) ||
        ((R = (S = t.image) == null ? void 0 : S[0]) == null ? void 0 : R.url),
      G = e.jsx("span", {
        children: t.artists.primary.map((s, o) =>
          e.jsxs(
            le.Fragment,
            {
              children: [
                e.jsx("span", {
                  onClick: (a) => {
                    (a.stopPropagation(), w(s.id));
                  },
                  className:
                    "hover:text-white hover:underline cursor-pointer transition-colors font-bold",
                  children: s.name,
                }),
                o < t.artists.primary.length - 1 && ", ",
              ],
            },
            s.id,
          ),
        ),
      }),
      K = `${t.year} • ${n("albumView.songs", { count: t.songCount || 0 })} • ${J(Z)}`;
    return e.jsxs("div", {
      className: "text-white pb-20",
      children: [
        e.jsx(ae, {
          title: t.name,
          type: n("albumView.album"),
          subtitle: G,
          imageUrl: _,
          meta: K,
          isPlaying: O,
          isCurrentContext: A,
          onPlay: z,
          isFavorite: I(t.id),
          onToggleFavorite: () => q(t),
          children: e.jsx("button", {
            ref: M,
            onClick: (s) => {
              (s.stopPropagation(), p((o) => !o));
            },
            className:
              "p-3 rounded-full hover:bg-white/10 transition-all active:scale-90 text-gray-300 hover:text-white",
            children: e.jsx(de, { className: "w-7 h-7" }),
          }),
        }),
        e.jsx(re, {
          isOpen: h,
          onClose: () => p(!1),
          triggerRef: M,
          width: "w-64",
          children: e.jsxs("div", {
            className: "flex flex-col py-1",
            children: [
              e.jsxs("button", {
                onClick: Q,
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(ue, { className: "w-4 h-4" }),
                  n("albumView.addToQueue"),
                ],
              }),
              e.jsxs("button", {
                onClick: W,
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(me, { className: "w-4 h-4" }),
                  n("albumView.playShuffle"),
                ],
              }),
              e.jsx("div", { className: "h-px bg-white/10 my-1 mx-2" }),
              e.jsxs("button", {
                onClick: () => {
                  (H(), p(!1));
                },
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(P, { className: "w-4 h-4" }),
                  n("albumView.downloadAll"),
                ],
              }),
              e.jsxs("button", {
                onClick: X,
                className:
                  "w-full flex items-center gap-3 text-left px-3 py-2 text-sm rounded-lg hover:bg-white/10 text-gray-200 transition-colors",
                children: [
                  e.jsx(P, { className: "w-4 h-4" }),
                  n("albumView.downloadM3U"),
                ],
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "px-6 md:px-12 mt-8",
          children: e.jsx("div", {
            className:
              "bg-white/5 rounded-[2rem] border border-white/5 p-2 md:p-6 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",
            children: e.jsx(ie, {
              songs: t.songs || [],
              navigateToArtist: w,
              navigateToPlaylist: v,
              context: { type: "album", id: t.id },
            }),
          }),
        }),
      ],
    });
  };
export { ge as default };
