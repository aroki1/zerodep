if ("navigation" in window) {
  const routes = ["/", "/about/", "/projects/", "/blog/", "/contact/"];
  const defaultRoute = "/blog/";
  const navigationApi = window.navigation;

  const cleanPath = (url) => {
    const path = new URL(url, window.location.href).pathname;

    if (path === "/") {
      return path;
    }

    if (path.endsWith("/")) {
      return path;
    }

    return path + "/";
  };

  const sectionPath = (url) => {
    const pathParts = cleanPath(url).split("/").filter(Boolean);
    const section = pathParts[0];

    if (!section) {
      return "/";
    }

    return "/" + section + "/";
  };

  const routeIndex = (url) => {
    const index = routes.indexOf(sectionPath(url));

    if (index !== -1) {
      return index;
    }

    return routes.indexOf(defaultRoute);
  };

  const routeDepth = (url) => {
    const path = cleanPath(url).replace(/\/$/, "");

    if (!path) {
      return 1;
    }

    return path.split("/").length;
  };

  const getTransitionType = (fromEntry, toEntry) => {
    if (!fromEntry || !toEntry) {
      return "";
    }

    const fromIndex = routeIndex(fromEntry.url);
    const toIndex = routeIndex(toEntry.url);
    const fromDepth = routeDepth(fromEntry.url);
    const toDepth = routeDepth(toEntry.url);

    if (fromDepth === 1 && toDepth > 1) {
      return "deeper";
    }

    if (fromDepth > 1 && toDepth === 1) {
      return "shallower";
    }

    if (fromIndex < toIndex) {
      return "forwards";
    }

    if (fromIndex > toIndex) {
      return "backwards";
    }

    if (fromDepth < toDepth) {
      return "deeper";
    }

    if (fromDepth > toDepth) {
      return "shallower";
    }

    return "";
  };

  const addTransitionType = (viewTransition, fromEntry, toEntry) => {
    if (!viewTransition || !viewTransition.types) {
      return;
    }

    const type = getTransitionType(fromEntry, toEntry);

    if (type) {
      viewTransition.types.add(type);
    }
  };

  window.addEventListener("pageswap", (event) => {
    if (!event.activation) {
      return;
    }

    addTransitionType(
      event.viewTransition,
      event.activation.from || navigationApi.currentEntry,
      event.activation.entry,
    );
  });

  window.addEventListener("pagereveal", (event) => {
    if (!navigationApi.activation) {
      return;
    }

    addTransitionType(
      event.viewTransition,
      navigationApi.activation.from,
      navigationApi.activation.entry,
    );
  });
}
