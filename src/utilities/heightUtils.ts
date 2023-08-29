// Based on https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript

export const getPixelsScrolled = () => {
  const h = document.documentElement;
  const b = document.body;
  return h.scrollTop || b.scrollTop;
};

export const getPageHeight = () => {
  const h = document.documentElement;
  const b = document.body;
  return (h.scrollHeight || b.scrollHeight) - h.clientHeight;
};
