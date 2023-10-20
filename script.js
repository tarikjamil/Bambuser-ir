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
    query: "#container3",
    widget: "subscribe-v2",
    locale: "en",
    token: "8d99f9c2-6eed-4044-8ba0-64d68be1eb66"
  }
]);
