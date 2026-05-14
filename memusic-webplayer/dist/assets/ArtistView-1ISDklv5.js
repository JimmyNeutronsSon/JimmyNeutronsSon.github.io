import {
  r as a,
  g as U,
  P as $,
  U as z,
  u as M,
  j as t,
  L as q,
} from "./index-Jbwo0tuu.js";
import { S as H } from "./SongList-D60ljWD0.js";
import { a as R, A as G } from "./ArtistCard-ClG1BOwI.js";
import { C as I } from "./CinematicHeader-B03DhtP3.js";
const J = (n) => {
    const [u, o] = a.useState(null),
      [d, e] = a.useState(!0),
      [x, l] = a.useState(null);
    return (
      a.useEffect(() => {
        n
          ? (async () => {
              (e(!0), l(null), o(null));
              try {
                const r = await U(n);
                r.success ? o(r.data) : l("Failed to fetch artist details.");
              } catch (r) {
                (console.error("Failed to fetch artist details:", r),
                  l("An error occurred while fetching artist details."));
              } finally {
                e(!1);
              }
            })()
          : (e(!1), o(null));
      }, [n]),
      { artist: u, loading: d, error: x }
    );
  },
  X = ({
    artistId: n,
    setActiveView: u,
    navigateToAlbum: o,
    navigateToArtist: d,
  }) => {
    var y, N, v, A, C, k, S, V, F;
    const { artist: e, loading: x, error: l } = J(n),
      {
        playSong: b,
        isPlaying: r,
        togglePlay: L,
        contextId: P,
      } = a.useContext($),
      { isFavoriteArtist: h, toggleFavoriteArtist: p } = a.useContext(z),
      { t: s } = M(),
      [g, E] = a.useState(!1);
    if (x)
      return t.jsx("div", {
        className: "flex items-center justify-center h-full",
        children: t.jsx(q, {}),
      });
    if (l || !e)
      return t.jsx("div", {
        className: "p-8 text-center text-gray-400",
        children: l || "Artist not found or failed to load.",
      });
    const c = ((y = e.topSongs) == null ? void 0 : y.slice(0, 5)) ?? [],
      j = P === e.id,
      B =
        ((v =
          (N = e.image) == null
            ? void 0
            : N.find((i) => i.quality === "500x500")) == null
          ? void 0
          : v.url) ||
        ((C = (A = e.image) == null ? void 0 : A[0]) == null ? void 0 : C.url),
      T = () => {
        j ? L() : c.length > 0 && b(c[0], c, { type: "artist", id: e.id });
      },
      m =
        ((S =
          (k = e.bio) == null ? void 0 : k.find((i) => i.title === "Bio")) ==
        null
          ? void 0
          : S.text) ||
        ((F = (V = e.bio) == null ? void 0 : V[0]) == null ? void 0 : F.text) ||
        "",
      w =
        m.split(" ").slice(0, 40).join(" ") +
        (m.split(" ").length > 40 ? "..." : ""),
      D = s("artistView.followers", {
        count: parseInt(e.fanCount || "0").toLocaleString(),
      });
    return t.jsxs("div", {
      className: "text-white pb-20",
      children: [
        t.jsx(I, {
          title: e.name,
          type: "Artist",
          imageUrl: B,
          isVerified: e.isVerified || !1,
          meta: D,
          isPlaying: r,
          isCurrentContext: j,
          onPlay: T,
          isFavorite: h(e.id),
          onToggleFavorite: () => p(e),
          children: t.jsx("button", {
            onClick: () => p(e),
            className: `px-6 py-3 font-bold rounded-full transition-colors border ${h(e.id) ? "bg-white/10 border-white/20 text-white" : "border-white/30 text-white hover:bg-white/10"}`,
            children: h(e.id)
              ? s("artistView.following")
              : s("artistView.follow"),
          }),
        }),
        t.jsxs("div", {
          className: "px-6 md:px-10 space-y-16 mt-8",
          children: [
            c.length > 0 &&
              t.jsxs("section", {
                className:
                  "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",
                children: [
                  t.jsx("h2", {
                    className: "text-2xl font-bold mb-6 tracking-tight",
                    children: s("artistView.popular"),
                  }),
                  t.jsx("div", {
                    className:
                      "bg-white/5 rounded-3xl border border-white/5 p-2 md:p-6 shadow-xl backdrop-blur-sm",
                    children: t.jsx(H, {
                      songs: c,
                      navigateToArtist: d,
                      context: { type: "artist", id: e.id },
                    }),
                  }),
                ],
              }),
            e.topAlbums &&
              e.topAlbums.length > 0 &&
              t.jsxs("section", {
                className:
                  "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200",
                children: [
                  t.jsx("div", {
                    className: "flex items-center justify-between mb-6",
                    children: t.jsx("h2", {
                      className: "text-2xl font-bold tracking-tight",
                      children: s("artistView.albums"),
                    }),
                  }),
                  t.jsx("div", {
                    className:
                      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6",
                    children: e.topAlbums.map((i, f) =>
                      t.jsx(
                        "div",
                        {
                          style: { animationDelay: `${f * 50}ms` },
                          className:
                            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards",
                          children: t.jsx(R, {
                            album: i,
                            onAlbumClick: o,
                            onArtistClick: d,
                          }),
                        },
                        i.id,
                      ),
                    ),
                  }),
                ],
              }),
            m &&
              t.jsxs("section", {
                className:
                  "grid grid-cols-1 md:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",
                children: [
                  t.jsxs("div", {
                    className: "md:col-span-2",
                    children: [
                      t.jsx("h2", {
                        className: "text-2xl font-bold mb-6 tracking-tight",
                        children: s("artistView.about"),
                      }),
                      t.jsxs("div", {
                        className:
                          "prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg",
                        children: [
                          t.jsx("p", { children: g ? m : w }),
                          m.length > w.length &&
                            t.jsx("button", {
                              onClick: () => E(!g),
                              className:
                                "text-[#3A8FE0] font-bold mt-2 hover:underline",
                              children: s(
                                g
                                  ? "artistView.showLess"
                                  : "artistView.readMore",
                              ),
                            }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("div", {
                    className:
                      "bg-white/5 rounded-3xl p-8 border border-white/5 h-fit",
                    children: [
                      t.jsx("h3", {
                        className:
                          "text-xs font-bold uppercase tracking-widest text-gray-500 mb-4",
                        children: "Artist Stats",
                      }),
                      t.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          t.jsxs("div", {
                            children: [
                              t.jsx("div", {
                                className: "text-3xl font-black text-white",
                                children: e.fanCount || "N/A",
                              }),
                              t.jsx("div", {
                                className: "text-sm text-gray-400",
                                children: "Total Followers",
                              }),
                            ],
                          }),
                          t.jsxs("div", {
                            children: [
                              t.jsx("div", {
                                className:
                                  "text-xl font-bold text-white capitalize",
                                children: e.dominantType || e.type,
                              }),
                              t.jsx("div", {
                                className: "text-sm text-gray-400",
                                children: "Artist Type",
                              }),
                            ],
                          }),
                          e.availableLanguages &&
                            t.jsxs("div", {
                              children: [
                                t.jsx("div", {
                                  className:
                                    "text-sm font-medium text-white capitalize",
                                  children: e.availableLanguages.join(", "),
                                }),
                                t.jsx("div", {
                                  className: "text-sm text-gray-400",
                                  children: "Languages",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            e.similarArtists &&
              e.similarArtists.length > 0 &&
              t.jsxs("section", {
                className:
                  "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 pb-10",
                children: [
                  t.jsx("h2", {
                    className: "text-2xl font-bold mb-6 tracking-tight",
                    children: s("artistView.fansLike"),
                  }),
                  t.jsx("div", {
                    className:
                      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6",
                    children: e.similarArtists.map((i, f) =>
                      t.jsx(
                        "div",
                        {
                          style: { animationDelay: `${f * 50}ms` },
                          className:
                            "animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards",
                          children: t.jsx(G, { artist: i, onArtistClick: d }),
                        },
                        i.id,
                      ),
                    ),
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  };
export { X as default };
