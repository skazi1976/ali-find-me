// Standalone pageview beacon for the vertical engines (baby / nails / home /
// pets / hair / deals) — they load their own JS, not app.js, so without this
// they were INVISIBLE in analytics. Fires once per session to /track so we can
// finally see their organic traffic and decide where to invest in SEO.
(function () {
  try {
    if (location.pathname.indexOf("admin") !== -1) return;
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
    var last = sessionStorage.getItem("ali_last_track");
    var now = Date.now();
    if (last && now - parseInt(last, 10) < 300000) return; // 5-min de-dupe (same key as app.js)
    sessionStorage.setItem("ali_last_track", String(now));
    var p = new URLSearchParams(location.search);
    var ref = p.get("utm_source") || (document.referrer ? new URL(document.referrer).hostname : "");
    var lang = (localStorage.getItem("ali_lang") || document.documentElement.lang || "he").slice(0, 2);
    fetch("https://ali-findme-api.ohadf1976.workers.dev/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lang: lang, page: location.pathname, ref: ref }),
      keepalive: true,
    }).catch(function () {});
  } catch (e) {}
})();
