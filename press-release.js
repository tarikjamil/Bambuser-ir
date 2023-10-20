// Implements the MFN-JS Loader javascript file
if (!window._MFN) {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://widget.mfn.se/v1/serve/assets/js/mfn-loader-v0.1.4.js";
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
    single_view_url: "https://ir.bambuser.com/article",

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
    lang: "en",

    // 'selected' uses locale from lang, other options are 'en', 'sv'
    // and so on
    l10nLang: "en",

    // The type of view
    type: "listview",

    // Feed ID, provided by MFN
    feed_id: "e1042451-924d-42e9-af3c-1fdb40842bae",

    // Path to the page where a single view version has been implemented
    single_view_url: "https://bambuser-ir.webflow.io/article",

    // Enable if you want to activate a disclaimer page for news items
    // of a specific tag

    disclaimer_redirect_tag: "cus:disclaimer",
    disclaimer_redirect_url: "disclaimer",

    // Default limit of items shown
    limit: "500",

    // Adds the preamble of the article
    show_preamble: true,

    // 'default' (:regulatory, sub:report:interim, sub:report:annual)
    // or add your own eg [{tag: ':regulatory'}]
    show_tags: [{ tag: ":regulatory" }],

    // Show attachments
    show_attachments: false,

    // Enable clickable tags
    clickable_tags: false,

    // Filter feed by the following tags
    // Typical use cases:
    // * Setting the default filtering in the toolbar
    // * For custom 'listview' without a toolbar where you want to choose what to filter by in code
    tags: [":regulatory"],

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
  }
];
