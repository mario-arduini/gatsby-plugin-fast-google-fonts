const React = require("react");

exports.onRenderBody = function ({ setHeadComponents }, options) {
  const link = options.link;

  const preconnect = React.createElement("link", {
    key: "preconnect",
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "",
  });

  const preload = React.createElement("link", {
    key: "preload",
    rel: "preload",
    href: link,
    as: "style",
  });

  const defaultLink = React.createElement("link", {
    key: "default",
    rel: "stylesheet",
    href: link,
    media: "print",
    onLoad: function () {
      this.media = "all";
    },
  });

  const noScript = React.createElement("noscript", { key: "noscriptdefault" }, [
    React.createElement("link", {
      key: "noscriptlink",
      rel: "stylesheet",
      href: link,
    }),
  ]);

  setHeadComponents([preconnect, preload, defaultLink, noScript]);
};
