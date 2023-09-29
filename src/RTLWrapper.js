import React, { useEffect } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "meaningless-key",
});

export default function RTLWrapper({ direction, children }) {
  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  return (
    <CacheProvider value={direction === "rtl" ? cacheRtl : emptyCache}>
      {children}
    </CacheProvider>
  );
}
