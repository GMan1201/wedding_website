// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1FV33":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b83cae2cfbd5d521";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gTqqs":[function(require,module,exports) {
/*! yt-player. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ const EventEmitter = require("669a87dadad8af3b").EventEmitter;
const loadScript = require("b505a096fc8842e");
const YOUTUBE_IFRAME_API_SRC = "https://www.youtube.com/iframe_api";
const YOUTUBE_STATES = {
    "-1": "unstarted",
    0: "ended",
    1: "playing",
    2: "paused",
    3: "buffering",
    5: "cued"
};
const YOUTUBE_ERROR = {
    // The request contains an invalid parameter value. For example, this error
    // occurs if you specify a videoId that does not have 11 characters, or if the
    // videoId contains invalid characters, such as exclamation points or asterisks.
    INVALID_PARAM: 2,
    // The requested content cannot be played in an HTML5 player or another error
    // related to the HTML5 player has occurred.
    HTML5_ERROR: 5,
    // The video requested was not found. This error occurs when a video has been
    // removed (for any reason) or has been marked as private.
    NOT_FOUND: 100,
    // The owner of the requested video does not allow it to be played in embedded
    // players.
    UNPLAYABLE_1: 101,
    // This error is the same as 101. It's just a 101 error in disguise!
    UNPLAYABLE_2: 150
};
const loadIframeAPICallbacks = [];
/**
 * YouTube Player. Exposes a better API, with nicer events.
 * @param {HTMLElement|selector} element
 */ class YouTubePlayer extends EventEmitter {
    constructor(element, opts){
        super();
        const elem = typeof element === "string" ? document.querySelector(element) : element;
        if (elem.id) this._id = elem.id // use existing element id
        ;
        else this._id = elem.id = "ytplayer-" + Math.random().toString(16).slice(2, 8);
        this._opts = Object.assign({
            width: 640,
            height: 360,
            autoplay: false,
            captions: undefined,
            controls: true,
            keyboard: true,
            fullscreen: true,
            annotations: true,
            modestBranding: false,
            related: true,
            timeupdateFrequency: 1000,
            playsInline: true,
            start: 0
        }, opts);
        this.videoId = null;
        this.destroyed = false;
        this._api = null;
        this._autoplay = false // autoplay the first video?
        ;
        this._player = null;
        this._ready = false // is player ready?
        ;
        this._queue = [];
        this._interval = null;
        // Setup listeners for 'timeupdate' events. The YouTube Player does not fire
        // 'timeupdate' events, so they are simulated using a setInterval().
        this._startInterval = this._startInterval.bind(this);
        this._stopInterval = this._stopInterval.bind(this);
        this.on("playing", this._startInterval);
        this.on("unstarted", this._stopInterval);
        this.on("ended", this._stopInterval);
        this.on("paused", this._stopInterval);
        this.on("buffering", this._stopInterval);
        this._loadIframeAPI((err, api)=>{
            if (err) return this._destroy(new Error("YouTube Iframe API failed to load"));
            this._api = api;
            // If load(videoId, [autoplay, [size]]) was called before Iframe API
            // loaded, ensure it gets called again now
            if (this.videoId) this.load(this.videoId, this._autoplay, this._start);
        });
    }
    load(videoId, autoplay = false, start = 0) {
        if (this.destroyed) return;
        this.videoId = videoId;
        this._autoplay = autoplay;
        this._start = start;
        // If the Iframe API is not ready yet, do nothing. Once the Iframe API is
        // ready, `load(this.videoId)` will be called.
        if (!this._api) return;
        // If there is no player instance, create one.
        if (!this._player) {
            this._createPlayer(videoId);
            return;
        }
        // If the player instance is not ready yet, do nothing. Once the player
        // instance is ready, `load(this.videoId)` will be called. This ensures that
        // the last call to `load()` is the one that takes effect.
        if (!this._ready) return;
        // If the player instance is ready, load the given `videoId`.
        if (autoplay) this._player.loadVideoById(videoId, start);
        else this._player.cueVideoById(videoId, start);
    }
    play() {
        if (this._ready) this._player.playVideo();
        else this._queueCommand("play");
    }
    pause() {
        if (this._ready) this._player.pauseVideo();
        else this._queueCommand("pause");
    }
    stop() {
        if (this._ready) this._player.stopVideo();
        else this._queueCommand("stop");
    }
    seek(seconds) {
        if (this._ready) this._player.seekTo(seconds, true);
        else this._queueCommand("seek", seconds);
    }
    setVolume(volume) {
        if (this._ready) this._player.setVolume(volume);
        else this._queueCommand("setVolume", volume);
    }
    getVolume() {
        return this._ready && this._player.getVolume() || 0;
    }
    mute() {
        if (this._ready) this._player.mute();
        else this._queueCommand("mute");
    }
    unMute() {
        if (this._ready) this._player.unMute();
        else this._queueCommand("unMute");
    }
    isMuted() {
        return this._ready && this._player.isMuted() || false;
    }
    setSize(width, height) {
        if (this._ready) this._player.setSize(width, height);
        else this._queueCommand("setSize", width, height);
    }
    setPlaybackRate(rate) {
        if (this._ready) this._player.setPlaybackRate(rate);
        else this._queueCommand("setPlaybackRate", rate);
    }
    setPlaybackQuality(suggestedQuality) {
        if (this._ready) this._player.setPlaybackQuality(suggestedQuality);
        else this._queueCommand("setPlaybackQuality", suggestedQuality);
    }
    getPlaybackRate() {
        return this._ready && this._player.getPlaybackRate() || 1;
    }
    getAvailablePlaybackRates() {
        return this._ready && this._player.getAvailablePlaybackRates() || [
            1
        ];
    }
    getDuration() {
        return this._ready && this._player.getDuration() || 0;
    }
    getProgress() {
        return this._ready && this._player.getVideoLoadedFraction() || 0;
    }
    getState() {
        return this._ready && YOUTUBE_STATES[this._player.getPlayerState()] || "unstarted";
    }
    getCurrentTime() {
        return this._ready && this._player.getCurrentTime() || 0;
    }
    destroy() {
        this._destroy();
    }
    _destroy(err) {
        if (this.destroyed) return;
        this.destroyed = true;
        if (this._player) {
            this._player.stopVideo && this._player.stopVideo();
            this._player.destroy();
        }
        this.videoId = null;
        this._id = null;
        this._opts = null;
        this._api = null;
        this._player = null;
        this._ready = false;
        this._queue = null;
        this._stopInterval();
        this.removeListener("playing", this._startInterval);
        this.removeListener("paused", this._stopInterval);
        this.removeListener("buffering", this._stopInterval);
        this.removeListener("unstarted", this._stopInterval);
        this.removeListener("ended", this._stopInterval);
        if (err) this.emit("error", err);
    }
    _queueCommand(command, ...args) {
        if (this.destroyed) return;
        this._queue.push([
            command,
            args
        ]);
    }
    _flushQueue() {
        while(this._queue.length){
            const command = this._queue.shift();
            this[command[0]].apply(this, command[1]);
        }
    }
    _loadIframeAPI(cb) {
        // If API is loaded, there is nothing else to do
        if (window.YT && typeof window.YT.Player === "function") return cb(null, window.YT);
        // Otherwise, queue callback until API is loaded
        loadIframeAPICallbacks.push(cb);
        const scripts = Array.from(document.getElementsByTagName("script"));
        const isLoading = scripts.some((script)=>script.src === YOUTUBE_IFRAME_API_SRC);
        // If API <script> tag is not present in the page, inject it. Ensures that
        // if user includes a hardcoded <script> tag in HTML for performance, another
        // one will not be added
        if (!isLoading) loadScript(YOUTUBE_IFRAME_API_SRC).catch((err)=>{
            while(loadIframeAPICallbacks.length){
                const loadCb = loadIframeAPICallbacks.shift();
                loadCb(err);
            }
        });
        const prevOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = ()=>{
            if (typeof prevOnYouTubeIframeAPIReady === "function") prevOnYouTubeIframeAPIReady();
            while(loadIframeAPICallbacks.length){
                const loadCb = loadIframeAPICallbacks.shift();
                loadCb(null, window.YT);
            }
        };
    }
    _createPlayer(videoId) {
        if (this.destroyed) return;
        const opts = this._opts;
        this._player = new this._api.Player(this._id, {
            width: opts.width,
            height: opts.height,
            videoId: videoId,
            // (Not part of documented API) This parameter controls the hostname that
            // videos are loaded from. Set to `'https://www.youtube-nocookie.com'`
            // for enhanced privacy.
            host: opts.host,
            playerVars: {
                // This parameter specifies whether the initial video will automatically
                // start to play when the player loads. Supported values are 0 or 1. The
                // default value is 0.
                autoplay: opts.autoplay ? 1 : 0,
                // Setting the parameter's value to 1 causes closed captions to be shown
                // by default, even if the user has turned captions off. The default
                // behavior is based on user preference.
                cc_load_policy: opts.captions != null ? opts.captions !== false ? 1 : 0 : undefined,
                // Sets the player's interface language. The parameter value is an ISO
                // 639-1 two-letter language code or a fully specified locale. For
                // example, fr and fr-ca are both valid values. Other language input
                // codes, such as IETF language tags (BCP 47) might also be handled
                // properly.
                hl: opts.captions != null && opts.captions !== false ? opts.captions : undefined,
                // This parameter specifies the default language that the player will
                // use to display captions. Set the parameter's value to an ISO 639-1
                // two-letter language code.
                cc_lang_pref: opts.captions != null && opts.captions !== false ? opts.captions : undefined,
                // This parameter indicates whether the video player controls are
                // displayed. For IFrame embeds that load a Flash player, it also defines
                // when the controls display in the player as well as when the player
                // will load. Supported values are:
                //   - controls=0 – Player controls do not display in the player. For
                //                  IFrame embeds, the Flash player loads immediately.
                //   - controls=1 – (default) Player controls display in the player. For
                //                  IFrame embeds, the controls display immediately and
                //                  the Flash player also loads immediately.
                //   - controls=2 – Player controls display in the player. For IFrame
                //                  embeds, the controls display and the Flash player
                //                  loads after the user initiates the video playback.
                controls: opts.controls ? 2 : 0,
                // Setting the parameter's value to 1 causes the player to not respond to
                // keyboard controls. The default value is 0, which means that keyboard
                // controls are enabled.
                disablekb: opts.keyboard ? 0 : 1,
                // Setting the parameter's value to 1 enables the player to be
                // controlled via IFrame or JavaScript Player API calls. The default
                // value is 0, which means that the player cannot be controlled using
                // those APIs.
                enablejsapi: 1,
                // Setting this parameter to 0 prevents the fullscreen button from
                // displaying in the player. The default value is 1, which causes the
                // fullscreen button to display.
                fs: opts.fullscreen ? 1 : 0,
                // Setting the parameter's value to 1 causes video annotations to be
                // shown by default, whereas setting to 3 causes video annotations to not
                // be shown by default. The default value is 1.
                iv_load_policy: opts.annotations ? 1 : 3,
                // This parameter lets you use a YouTube player that does not show a
                // YouTube logo. Set the parameter value to 1 to prevent the YouTube logo
                // from displaying in the control bar. Note that a small YouTube text
                // label will still display in the upper-right corner of a paused video
                // when the user's mouse pointer hovers over the player.
                modestbranding: opts.modestBranding ? 1 : 0,
                // This parameter provides an extra security measure for the IFrame API
                // and is only supported for IFrame embeds. If you are using the IFrame
                // API, which means you are setting the enablejsapi parameter value to 1,
                // you should always specify your domain as the origin parameter value.
                origin: window.location.origin,
                // This parameter controls whether videos play inline or fullscreen in an
                // HTML5 player on iOS. Valid values are:
                //   - 0: This value causes fullscreen playback. This is currently the
                //        default value, though the default is subject to change.
                //   - 1: This value causes inline playback for UIWebViews created with
                //        the allowsInlineMediaPlayback property set to TRUE.
                playsinline: opts.playsInline ? 1 : 0,
                // This parameter indicates whether the player should show related
                // videos from the same channel (0) or from any channel (1) when
                // playback of the video ends. The default value is 1.
                rel: opts.related ? 1 : 0,
                // (Not part of documented API) Allow html elements with higher z-index
                // to be shown on top of the YouTube player.
                wmode: "opaque",
                // This parameter causes the player to begin playing the video at the given number
                // of seconds from the start of the video. The parameter value is a positive integer.
                // Note that similar to the seek function, the player will look for the closest
                // keyframe to the time you specify. This means that sometimes the play head may seek
                // to just before the requested time, usually no more than around two seconds.
                start: opts.start
            },
            events: {
                onReady: ()=>this._onReady(videoId),
                onStateChange: (data)=>this._onStateChange(data),
                onPlaybackQualityChange: (data)=>this._onPlaybackQualityChange(data),
                onPlaybackRateChange: (data)=>this._onPlaybackRateChange(data),
                onError: (data)=>this._onError(data)
            }
        });
    }
    /**
   * This event fires when the player has finished loading and is ready to begin
   * receiving API calls.
   */ _onReady(videoId) {
        if (this.destroyed) return;
        this._ready = true;
        // Once the player is ready, always call `load(videoId, [autoplay, [size]])`
        // to handle these possible cases:
        //
        //   1. `load(videoId, true)` was called before the player was ready. Ensure that
        //      the selected video starts to play.
        //
        //   2. `load(videoId, false)` was called before the player was ready. Now the
        //      player is ready and there's nothing to do.
        //
        //   3. `load(videoId, [autoplay])` was called multiple times before the player
        //      was ready. Therefore, the player was initialized with the wrong videoId,
        //      so load the latest videoId and potentially autoplay it.
        this.load(this.videoId, this._autoplay, this._start);
        this._flushQueue();
    }
    /**
   * Called when the player's state changes. We emit friendly events so the user
   * doesn't need to use YouTube's YT.PlayerState.* event constants.
   */ _onStateChange(data) {
        if (this.destroyed) return;
        const state = YOUTUBE_STATES[data.data];
        if (state) {
            // Send a 'timeupdate' anytime the state changes. When the video halts for any
            // reason ('paused', 'buffering', or 'ended') no further 'timeupdate' events
            // should fire until the video unhalts.
            if ([
                "paused",
                "buffering",
                "ended"
            ].includes(state)) this._onTimeupdate();
            this.emit(state);
            // When the video changes ('unstarted' or 'cued') or starts ('playing') then a
            // 'timeupdate' should follow afterwards (never before!) to reset the time.
            if ([
                "unstarted",
                "playing",
                "cued"
            ].includes(state)) this._onTimeupdate();
        } else throw new Error("Unrecognized state change: " + data);
    }
    /**
   * This event fires whenever the video playback quality changes. Possible
   * values are: 'small', 'medium', 'large', 'hd720', 'hd1080', 'highres'.
   */ _onPlaybackQualityChange(data) {
        if (this.destroyed) return;
        this.emit("playbackQualityChange", data.data);
    }
    /**
   * This event fires whenever the video playback rate changes.
   */ _onPlaybackRateChange(data) {
        if (this.destroyed) return;
        this.emit("playbackRateChange", data.data);
    }
    /**
   * This event fires if an error occurs in the player.
   */ _onError(data) {
        if (this.destroyed) return;
        const code = Number(data.data);
        // The HTML5_ERROR error occurs when the YouTube player needs to switch from
        // HTML5 to Flash to show an ad. Ignore it.
        if (code === YOUTUBE_ERROR.HTML5_ERROR) return;
        // The remaining error types occur when the YouTube player cannot play the
        // given video. This is not a fatal error. Report it as unplayable so the user
        // has an opportunity to play another video.
        if (code === YOUTUBE_ERROR.UNPLAYABLE_1 || code === YOUTUBE_ERROR.UNPLAYABLE_2 || code === YOUTUBE_ERROR.NOT_FOUND || code === YOUTUBE_ERROR.INVALID_PARAM) return this.emit("unplayable", this.videoId);
        // Unexpected error, does not match any known type
        this._destroy(new Error("YouTube Player Error. Unknown error code: " + code));
    }
    /**
   * This event fires when the time indicated by the `getCurrentTime()` method
   * has been updated.
   */ _onTimeupdate() {
        this.emit("timeupdate", this.getCurrentTime());
    }
    _startInterval() {
        this._interval = setInterval(()=>this._onTimeupdate(), this._opts.timeupdateFrequency);
    }
    _stopInterval() {
        clearInterval(this._interval);
        this._interval = null;
    }
}
module.exports = YouTubePlayer;

},{"669a87dadad8af3b":"1VQLm","b505a096fc8842e":"fjUY9"}]},["1FV33","gTqqs"], "gTqqs", "parcelRequire4ecb")

//# sourceMappingURL=index.fbd5d521.js.map
