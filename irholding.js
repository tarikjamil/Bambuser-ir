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
    query: "#mfn-insider-positions",
    widget: "insider-positions",
    locale: "en",
    token: "265d97ab-fe37-43f6-a2b6-25773e6fa913"
  }
]);
