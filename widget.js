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
    query: "#inside-this-element",
    widget: "kpi-graph",
    locale: "en",
    token: "891572f8-5405-4bb5-8129-9601dc724ac3"
  },
  {
    query: "#inside-this-element2",
    widget: "kpi-graph",
    locale: "en",
    token: "891572f8-5405-4bb5-8129-9601dc724ac3"
  },
  {
    query: "#inside-this-element3",
    widget: "kpi-graph",
    locale: "en",
    token: "acdaf1f4-8d26-4e6b-8b2d-f7745efd8aef"
  },
  {
    query: "#inside-this-element4",
    widget: "kpi-graph",
    locale: "en",
    token: "4dd12e67-3c34-4b74-80b1-eebf49e53415"
  },
  {
    query: "#inside-this-element5",
    widget: "kpi-graph",
    locale: "en",
    token: "bc4aa523-d7d0-46f3-8c7a-92df795676e8"
  },
  {
    query: "#inside-this-element6",
    widget: "kpi-graph",
    locale: "en",
    token: "55d5ac15-5472-40eb-805e-6877e1c79f2e"
  },
  {
    query: "#inside-this-element7",
    widget: "kpi-table",
    locale: "en",
    token: "81f0e082-b2dd-4a17-8689-92ef7f6b72e6"
  },
  {
    query: "#mfn-owner-list",
    widget: "wrapper-v2",
    locale: "en",
    token: "d5be8809-508d-4dfd-8ae1-ecd554aa75f2"
  }
]);

// Implements the MFN-JS Loader javascript file
if (!window._MFN) {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://widget.mfn.se/v1/serve/assets/js/mfn-loader-v0.1.3.js";
  s.async = true;
  document.getElementsByTagName("body")[0].appendChild(s);
}

window._MFN = [
  {
    // The selector of the element where the content of the news
    // archive should end up
    outlet: "#container",

    // Default language of the news items shown
    lang: "en",

    // 'selected' uses locale from lang, other options are 'en', 'sv' eg.
    // and so on
    l10nLang: "en",

    // The type of view
    type: "listview",

    // Feed ID, provided by MFN
    feed_id: "e1042451-924d-42e9-af3c-1fdb40842bae",

    // Path to the page where a single view version has been implemented
    single_view_url: "article",

    // Enable if you want to activate a disclaimer page for news items
    // of a specific tag

    disclaimer_redirect_tag: "cus:disclaimer",
    disclaimer_redirect_url: "disclaimer",

    // Default limit of items shown
    limit: "4",

    // Adds the preamble of the article
    show_preamble: true,

    // 'default' (:regulatory, sub:report:interim, sub:report:annual)
    // or add your own eg [{tag: ':regulatory'}]
    show_tags: [
      { tag: ":regulatory" },
      { tag: "sub:report:interim" },
      { tag: "sub:report:annual" }
    ],

    // Show attachments
    show_attachments: false,

    // Enable clickable tags
    clickable_tags: false,

    // Toolbar
    // Note: you can hide the toolbar by uncommenting it, and instead perhaps use 'tags' below for a default filter

    // Filter feed by the following tags
    // Typical use cases:
    // * Setting the default filtering in the toolbar
    // * For custom 'listview' without a toolbar where you want to choose what to filter by in code
    // tags: [':regulatory'],

    // Your own local to override text selection or add for
    // other l10n languages (For the toolbar text and tags)
    l10n: {
      Search: {
        sv: "Sök",
        en: "Search"
      },
      "Search placeholder": {
        sv: "Sök",
        en: "Search"
      }
    },

    // Show additional filter info, default: false
    show_info: false,
    // Show not found element, default: false
    show_notfound: false,

    // Override default 'not found' element
    // notfound_tmpl: {
    //  sv: '<div class="mfn-notfound"><span>Kunde inte hitta några nyhetsartiklar.</span></div>',//  en: '<div class="mfn-notfound"><span>Couldn\'t find any news articles.</span></div>',
    // },

    // Should most likely be true (Enables proxy attachments)
    use_proxied_attachment_urls: true,

    // Shows the date
    show_date: true,

    // Example of configuring locale and time zone,
    // Swedish timezone is default if date_setting is not set

    date_setting: {
      locale: "sen-US", // eg. for US 'en-US'
      option: {
        month: "short", // or 'long', 'short'
        year: "numeric", // or '2-digit'
        day: "numeric", // or '2-digit'
        timeZone: "Europe/Stockholm" // eg. 'America/New_York'
      }
    },

    // If you want to implement your own custom date formatter
    // you can add your own function
    // format_date: function(date) {
    //     return date.toLocaleTimeString('sv-SE', {
    //         month: 'long',
    //         year: 'numeric',
    //         day: 'numeric',
    //         timeZone: 'Europe/Stockholm'
    //     });
    // },

    post_processor: function (current, item) {
      var div = document.createElement("div");
      div.innerHTML = current;
      var d = div.querySelector(".mfn-sub-row");
      var t = div.querySelector(".mfn-title");
      div.firstElementChild.prepend(d);
      return div.innerHTML;
    }
  },
  {
    // The selector of the element where the content of the news
    // archive should end up
    outlet: "#container2",

    // Default language of the news items shown
    lang: "all",

    // 'selected' uses locale from lang, other options are 'en', 'sv'
    // and so on
    l10nLang: "en",

    // The type of view
    type: "listview",

    // Feed ID, provided by MFN
    feed_id: "e1042451-924d-42e9-af3c-1fdb40842bae",

    // Path to the page where a single view version has been implemented
    single_view_url: "single",

    // Enable if you want to activate a disclaimer page for news items
    // of a specific tag

    disclaimer_redirect_tag: "cus:disclaimer",
    disclaimer_redirect_url: "disclaimer",

    // Default limit of items shown
    limit: "10",

    // Adds the preamble of the article
    show_preamble: true,

    // 'default' (:regulatory, sub:report:interim, sub:report:annual)
    // or add your own eg [{tag: ':regulatory'}]
    show_tags: [
      { tag: ":regulatory" },
      { tag: "sub:report:interim" },
      { tag: "sub:report:annual" }
    ],

    // Show attachments
    show_attachments: true,

    // Enable clickable tags
    clickable_tags: true,

    // Toolbar
    // Note: you can hide the toolbar by uncommenting it, and instead perhaps use 'tags' below for a default filter
    toolbar: [
      {
        // show search
        item: "search",
        // placeholder text for input search field
        placeholder: "Search",
        // if true an Ajax search is added to the search bar
        live_search: true,
        // the debounce time for the ajax search if enabled
        live_search_delay: 300
      },
      // 'default' or [{tag: ':regulatory'},
      // {tag: 'sub:report:interim'}] etc.
      { item: "tags", tags: "default" },
      { item: "year", start: 2010 },
      { item: "lang", languages: ["sv", "en"] },
      { item: "clear" }
    ],

    // Filter feed by the following tags
    // Typical use cases:
    // * Setting the default filtering in the toolbar
    // * For custom 'listview' without a toolbar where you want to choose what to filter by in code
    // tags: [':regulatory'],

    // Your own local to override text selection or add for
    // other l10n languages (For the toolbar text and tags)
    l10n: {
      Search: {
        sv: "Sök",
        en: "Search"
      },
      "Search placeholder": {
        sv: "Sök",
        en: "Search"
      }
    },

    // Show additional filter info, default: false
    show_info: false,
    // Show not found element, default: false
    show_notfound: false,

    // Override default 'not found' element
    // notfound_tmpl: {
    //  sv: '<div class="mfn-notfound"><span>Kunde inte hitta några nyhetsartiklar.</span></div>',//  en: '<div class="mfn-notfound"><span>Couldn\'t find any news articles.</span></div>',
    // },

    // Should most likely be true (Enables proxy attachments)
    use_proxied_attachment_urls: true,

    // Shows the date
    show_date: true

    // Example of configuring locale and time zone,
    // Swedish timezone is default if date_setting is not set

    // date_setting: {
    //     locale: 'sv-SE', // eg. for US 'en-US'
    //         option: {
    //         month: 'numeric', // or 'long', 'short'
    //         year: 'numeric', // or '2-digit'
    //         day: 'numeric', // or '2-digit'
    //         timeZone: 'Europe/Stockholm' // eg. 'America/New_York'
    //     }
    // },

    // If you want to implement your own custom date formatter
    // you can add your own function
    // format_date: function(date) {
    //     return date.toLocaleTimeString('sv-SE', {
    //         month: 'long',
    //         year: 'numeric',
    //         day: 'numeric',
    //         timeZone: 'Europe/Stockholm'
    //     });
    // },

    // Example of implementing your own HTML for a news item
    // post_processor: function(current, item) {
    //  console.log(item)
    //     return '<div>' + item.content.title + '</div>'
    // }
  }
](function (widgets) {
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
    query: "#mfn-owner-list",
    widget: "wrapper-v2",
    locale: "en",
    token: "d5be8809-508d-4dfd-8ae1-ecd554aa75f2"
  },
  {
    query: "#container3",
    widget: "subscribe-v2",
    locale: "en",
    token: "8d99f9c2-6eed-4044-8ba0-64d68be1eb66"
  }
]);
