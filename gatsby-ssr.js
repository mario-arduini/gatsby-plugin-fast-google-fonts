const React = require("react");

exports.onRenderBody = function ({ setHeadComponents }, options) {
  const link = options.link;

  const preconnect = React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: true,
  });

  const preload = React.createElement("link", {
    rel: "preload",
    href: link,
    as: "style",
  });

  const defaultLink = React.createElement("link", {
    rel: "stylesheet",
    href: link,
    media: "print",
    onLoad: function () {
      this.media = "all";
    },
  });

  const noScript = React.createElement("noscript", null, [
    React.createElement("link", {
      rel: "stylesheet",
      href: link,
    }),
  ]);

  setHeadComponents([preconnect, preload, defaultLink, noScript]);
};
