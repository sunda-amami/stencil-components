(function() {
  if (
    // No Reflect, no classes, no need for shim because native custom elements
    // require ES2015 classes or Reflect.
    window.Reflect === undefined ||
    window.customElements === undefined
  ) {
    return;
  }
  const BuiltInHTMLElement = HTMLElement;
  window.HTMLElement = /** @this {!Object} */ function HTMLElement() {
    return Reflect.construct(
        BuiltInHTMLElement, [], /** @type {!Function} */ (this.constructor));
  };
  HTMLElement.prototype = BuiltInHTMLElement.prototype;
  HTMLElement.prototype.constructor = HTMLElement;
  Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
})();

export * from '../dist/esm/polyfills/index.js';
export * from '../dist/esm/legacy/loader.mjs';