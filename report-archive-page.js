(function (widgets) {
  var url = "https://widget.datablocks.se/api/rose";
  if (!window._MF) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = url + "/assets/js/loader-v4.js";
    document.getElementsByTagName("body")[0].appendChild(b);
  }
  window._MF = window._MF || {
    data: [],
    url: url,
    ready: !!0,
    render: function () {
      window._MF.ready = !0;
    },
    push: function (w) {
      window._MF.data.push(w);
    }
  };
  window._MF.push(widgets);
})([
  {
    query: "#report",
    widget: "archive",
    locale: "en",
    token: "ba244206-9a98-4d4d-8c4a-3ed6a453d630"
  }
]);

$(".mfn-archive tr .mfn-archive-item.mfn-archive-item-type-release img").attr(
  "src",
  "https://uploads-ssl.webflow.com/61695e44568be6e20a47bfbb/633bee87b85e90dc756d4b34_Vector2.svg"
);
