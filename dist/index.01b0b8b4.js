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
})({"aj5i2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a6bc8e0d01b0b8b4";
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

},{}],"9ivDg":[function(require,module,exports) {
/**********************************************
 * @File Name: jquery.mb.YTPlayer.src.js
 * @Author: Matteo Bicocchi
 * @Date: 2020-03-16
 * @Email: matbicoc@gmail.com
 *
 * @Last Modified by: Matteo Bicocchi
 * @Last Modified time: 2020-03-18
 * @Copyright: 2020. Matteo Bicocchi
 *
 *  Open Lab s.r.l., Florence - Italy
 *  @blog:  http://pupunzi.open-lab.com
 *  @site:  http://pupunzi.com
 ****************************************************/ /* src-block */ alert("This is the 'jquery.mb.YTPlayer.src.js' javascript file and can't be included. Use the one you find in the 'dist' folder!");
/* end-src-block */ var ytp = ytp || {};
let YTPRndSuffix = new Date().getTime();
let YTPTimerLabels = {
    init: "YTPlayerInit_" + YTPRndSuffix,
    startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix
};
function onYouTubeIframeAPIReady() {
    if (ytp.YTAPIReady) return;
    ytp.YTAPIReady = true;
    jQuery(document).trigger("YTAPIReady");
}
let getYTPVideoID = function(url1) {
    let videoID1, playlistID1;
    if (url1.indexOf("youtu.be") > 0 || url1.indexOf("youtube.com/embed") > 0) {
        videoID1 = url1.substr(url1.lastIndexOf("/") + 1, url1.length);
        playlistID1 = videoID1.indexOf("?list=") > 0 ? videoID1.substr(videoID1.lastIndexOf("="), videoID1.length) : null;
        videoID1 = playlistID1 ? videoID1.substr(0, videoID1.lastIndexOf("?")) : videoID1;
    } else if (url1.indexOf("http") > -1) {
        //videoID = url.match( /([\/&]v\/([^&#]*))|([\\?&]v=([^&#]*))/ )[ 1 ];
        videoID1 = url1.match(/[\\?&]v=([^&#]*)/)[1];
        playlistID1 = url1.indexOf("list=") > 0 ? url1.match(/[\\?&]list=([^&#]*)/)[1] : null;
    } else {
        videoID1 = url1.length > 15 ? null : url1;
        playlistID1 = videoID1 ? null : url1;
    }
    return {
        videoID: videoID1,
        playlistID: playlistID1
    };
};
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        let v1 = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [
            parseInt(v1[1], 10),
            parseInt(v1[2], 10),
            parseInt(v1[3] || 0, 10)
        ];
    }
}
(function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "{{ version }}",
        build: "{{ buildnum }}",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        /*
		 * Default options for the player
		 */ defaults: {
            /**
			 videoURL (string)
			 the complete Youtube video URL or the short url or the videoID
			 */ videoURL: null,
            /**
			 containment (string)
			 default containment for the player
			 */ containment: "body",
            /**
			 ratio (string or number)
			 "auto", "16/9", "4/3" or number: 4/3, 16/9
			 */ ratio: "auto",
            /**
			 fadeOnStartTime (int)
			 fade in timing at video start
			 */ fadeOnStartTime: 1000,
            /**
			 startAt (int)
			 start second
			 */ startAt: 0,
            /**
			 stopAt (int)
			 stop second
			 */ stopAt: 0,
            /**
			 autoPlay (bool)
			 on page load video should start or pause
			 */ autoPlay: true,
            /**
			 delayAtStart (bool)
			 If the YT API don't fire the event the player will try to start anyway after...
			 */ delayAtStart: 1000,
            /**
			 coverImage (string)
			 The path to the image to be used as cover if the autoPlay option is set to false
			 */ coverImage: false,
            /**
			 loop (bool or int)
			 video should loop or not; if number it will loop for the specified times
			 */ loop: true,
            /**
			 addRaster (bool)
			 shows a raster image over the video (added via CSS)
			 You can change the raster image via CSS:
			 .YTPOverlay.raster { background: url(images/raster.png)}
			 */ addRaster: false,
            /**
			 mask (bool or object) the key is the second and the value is the path to the image
			 Ex: mask:{ 0:'assets/mask-1.png', 5:'assets/mask-2.png', 30: false, 50:'assets/mask-3.png'}
			 */ mask: false,
            /**
			 opacity (int)
			 0 to 1
			 */ opacity: 1,
            /**
			 quality (string)
			 @deprecated

			 setPlaybackQuality has been deprecated on the YT API and doesn't work anymore
			 “small”, “medium”, “large”, “hd720”, “hd1080”, “highres”, "default"
			 */ quality: "hd1080",
            /**
			 vol (int)
			 0 to 100
			 */ vol: 50,
            /**
			 mute (bool)
			 mute the video at start
			 */ mute: false,
            /**
			 showControls (bool)
			 shows the control bar at the bottom of the containment
			 */ showControls: true,
            /**
			 anchor (string)
			 center,top,bottom,left,right combined in pair
			 */ anchor: "center,center",
            /**
			 showAnnotations (bool)
			 display the annotations on video
			 */ showAnnotations: false,
            /**
			 cc_load_policy (bool)
			 display the subtitles
			 */ cc_load_policy: false,
            /**
			 showYTLogo (bool)
			 display the Youtube logotype inside the button bar
			 */ showYTLogo: true,
            /**
			 useOnMobile (bool)
			 activate the player also on mobile
			 */ useOnMobile: true,
            /**
			 playOnlyIfVisible (bool)
			 play the video only if the containment is on screen
			 */ playOnlyIfVisible: false,
            /**
			 onScreenPercentage (bool)
			 percentage of the player height the video should stop or start when visible
			 */ onScreenPercentage: 30,
            /**
			 * goFullScreenOnPlay (bool)
			 * if the player containment is set to "self" this allow the video to go fullscreen when played
			 */ goFullScreenOnPlay: false,
            /**
			 stopMovieOnBlur (bool)
			 stop the video if the window loose the focus
			 */ stopMovieOnBlur: true,
            /**
			 realfullscreen (bool)
			 the video when in full screen covers all the display
			 */ realFullscreen: true,
            /**
			 optimizeDisplay (bool)
			 The video always fit the containment without displaying the black strips
			 */ optimizeDisplay: true,
            /**
			 abundance (bool)
			 the abudance of the video size
			 */ abundance: 0.3,
            /**
			 gaTrack (bool)
			 track the video plays on GA
			 */ gaTrack: true,
            /**
			 remember_last_time (bool)
			 when the page is reloaded the video will start from the last position
			 */ remember_last_time: false,
            /**
			 addFilters (bool or string)
			 add one or more CSS filters as object to the video
			 Ex: {sepia: 50, hue_rotate : 220}
			 */ addFilters: false,
            /**
			 useNoCookie (bool)
			 use https://www.youtube-nocookie.com host to serve the video
			 */ useNoCookie: true,
            /**
			 onReady (function)
			 a callback function fired once the player is ready
			 */ onReady: function(player1) {},
            /**
			 onReady (function)
			 a callback function fired if there's an error
			 */ onError: function(player1, err1) {},
            /**
			 onEnd (function)
			 a callback function fired when the video ends
			 */ onEnd: function() {}
        },
        /**
		 *  @fontface icons
		 *  */ controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        locationProtocol: "https:",
        /**
		 * Applicable filters
		 */ defaultFilters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        /**
		 * build the player
		 * @param options
		 * @returns [players]
		 */ buildPlayer: function(options) {
            if (!ytp.YTAPIReady && typeof window.YT === "undefined") {
                jQuery("#YTAPI").remove();
                let tag = jQuery("<script>").attr({
                    "src": "https://www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    "id": "YTAPI"
                });
                jQuery("head").prepend(tag);
            } else setTimeout(function() {
                jQuery(document).trigger("YTAPIReady");
                ytp.YTAPIReady = true;
            }, 100);
            function isIframe() {
                let isIfr1 = false;
                try {
                    if (self.location.href !== top.location.href) isIfr1 = true;
                } catch (e1) {
                    isIfr1 = true;
                }
                return isIfr1;
            }
            return this.each(function() {
                let YTPlayer = this;
                let $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide();
                YTPlayer.loop = 0;
                YTPlayer.state = 0;
                YTPlayer.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters);
                YTPlayer.filtersEnabled = true;
                YTPlayer.id = YTPlayer.id || "YTP_" + new Date().getTime();
                $YTPlayer.addClass("mb_YTPlayer");
                /**
				 Set properties
				 */ let property = $YTPlayer.data("property") && typeof $YTPlayer.data("property") == "string" ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                if (typeof property !== "object") property = {};
                YTPlayer.opt = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property);
                YTPRndSuffix = getYTPVideoID(YTPlayer.opt.videoURL).videoID;
                YTPTimerLabels = {
                    init: "YTPlayerInit_" + YTPRndSuffix,
                    startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix
                };
                console.time(YTPTimerLabels.init);
                console.time(YTPTimerLabels.startPlaying);
                YTPlayer.opt.elementId = YTPlayer.id;
                if (YTPlayer.opt.vol === 0) {
                    YTPlayer.opt.vol = 1;
                    YTPlayer.opt.mute = true;
                }
                if (YTPlayer.opt.loop && typeof YTPlayer.opt.loop === "boolean") YTPlayer.opt.loop = 9999;
                /**
				 Disable fullScreen if is in an iframe or full-screen API is not available
				 */ let fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                YTPlayer.opt.realFullscreen = isIframe() || !fullScreenAvailable ? false : YTPlayer.opt.realFullscreen;
                /**
				 Manage annotations
				 */ YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3";
                /**
				 Manage show subtitle and caption
				 */ YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0";
                /**
				 Manage cover image
				 */ YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage;
                /**
				 Manage Quality
				 the setPlaybackQuality has been deprecated by YT
				 */ YTPlayer.opt.quality = "hd1080";
                /**
				 * todo: remove
				 Manage Opacity for IE < 10
				 */ if (jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9) YTPlayer.opt.opacity = 1;
                YTPlayer.opt.containment = YTPlayer.opt.containment === "self" ? $YTPlayer : jQuery(YTPlayer.opt.containment);
                YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                YTPlayer.opt.ratio = YTPlayer.opt.ratio === "auto" ? 16 / 9 : YTPlayer.opt.ratio;
                YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
                let origContainmentBackground = YTPlayer.opt.containment.css("background-image");
                origContainmentBackground = origContainmentBackground === "none" ? null : origContainmentBackground;
                YTPlayer.orig_containment_background = origContainmentBackground;
                if (!$YTPlayer.attr("id")) $YTPlayer.attr("id", "ytp_" + new Date().getTime());
                YTPlayer.playerID = "iframe_" + YTPlayer.id;
                YTPlayer.isAlone = false;
                YTPlayer.hasFocus = true;
                YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : false;
                /**
				 Check if it is a video list
				 */ YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : false;
                let start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID)) start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID));
                if (YTPlayer.opt.remember_last_time && start_from_last) {
                    YTPlayer.start_from_last = start_from_last;
                    jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID);
                }
                YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment);
                YTPlayer.isBackground = YTPlayer.opt.containment.is("body");
                if (YTPlayer.isBackground && ytp.backgroundIsInited) return;
                /**
				 Hide the placeholder if it's not the target of the player
				 */ if (YTPlayer.isPlayer) $YTPlayer.show();
                /**
				 create the overlay
				 */ YTPlayer.overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                $YTPlayer.changeCoverImage();
                /**
				 create the wrapper
				 */ YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                }).addClass("mbYTP_wrapper");
                /**
				 If is an inline player toggle play if the overlay is clicked
				 */ if (YTPlayer.isPlayer) {
                    let inlinePlayButtonCss = jQuery.browser.mobile ? "inlinePlayButtonMobile" : "inlinePlayButton";
                    YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play);
                    $YTPlayer.append(YTPlayer.inlinePlayButton);
                    YTPlayer.inlinePlayButton.on("click", function(e1) {
                        $YTPlayer.YTPPlay();
                        /**
						 * Hide the PLAY button on play
						 */ YTPlayer.inlinePlayButton.hide();
                        /**
						 * set the fullscreen on play
						 */ if (YTPlayer.opt.goFullScreenOnPlay) $YTPlayer.YTPFullscreen();
                        e1.stopPropagation();
                    });
                    if (YTPlayer.opt.autoPlay) YTPlayer.inlinePlayButton.hide();
                    YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay();
                        if (YTPlayer.opt.goFullScreenOnPlay) $YTPlayer.YTPFullscreen();
                    }).css({
                        cursor: "pointer"
                    });
                }
                /**
				 create the playerBox where the YT iframe will be placed
				 */ let playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    opacity: 1
                });
                YTPlayer.wrapper.append(playerBox);
                playerBox.after(YTPlayer.overlay);
                if (YTPlayer.isPlayer) {
                    YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer");
                    YTPlayer.inlineWrapper.css({
                        position: "relative",
                        maxWidth: YTPlayer.opt.containment.css("width")
                    });
                    YTPlayer.opt.containment.css({
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        height: 0
                    });
                    YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper);
                }
                /**
				 Loop all the elements inside the container and check if their position is not "static"
				 */ YTPlayer.opt.containment.children().not("script, style").each(function() {
                    if (jQuery(this).css("position") === "static") jQuery(this).css("position", "relative");
                });
                if (YTPlayer.isBackground) {
                    jQuery("body").css({
                        boxSizing: "border-box"
                    });
                    YTPlayer.wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    });
                } else if (YTPlayer.opt.containment.css("position") === "static") {
                    YTPlayer.opt.containment.css({
                        position: "relative"
                    });
                    $YTPlayer.show();
                }
                YTPlayer.opt.containment.prepend(YTPlayer.wrapper);
                if (!YTPlayer.isBackground) YTPlayer.overlay.on("mouseenter", function() {
                    if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.addClass("visible");
                }).on("mouseleave", function() {
                    if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.removeClass("visible");
                });
                if (jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) {
                    if (YTPlayer.opt.coverImage) {
                        YTPlayer.wrapper.css({
                            backgroundImage: "url(" + YTPlayer.opt.coverImage + ")",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            opacity: 1
                        });
                        YTPlayer.wrapper.css({
                            opacity: 1
                        });
                    }
                    return $YTPlayer;
                }
                /**
				 If is on device start playing on first touch
				 */ if (jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile) jQuery("body").one("touchstart", function() {
                    YTPlayer.player.playVideo();
                });
                jQuery(document).one("YTAPIReady", function() {
                    $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id);
                    ytp.YTAPIReady = true;
                });
                YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function() {
                    let YTPlayer1 = this;
                    let $YTPlayer1 = jQuery(YTPlayer1);
                    if (YTPlayer1.isBackground && ytp.backgroundIsInited || YTPlayer1.isInit) return;
                    if (YTPlayer1.isBackground) ytp.backgroundIsInited = true;
                    YTPlayer1.opt.autoPlay = typeof YTPlayer1.opt.autoPlay == "undefined" ? !!YTPlayer1.isBackground : YTPlayer1.opt.autoPlay;
                    YTPlayer1.opt.vol = YTPlayer1.opt.vol ? YTPlayer1.opt.vol : 100;
                    jQuery.mbYTPlayer.getDataFromAPI(YTPlayer1);
                    jQuery(YTPlayer1).on("YTPChanged", function(e1) {
                        if (YTPlayer1.isInit) return;
                        YTPlayer1.isInit = true;
                        /** Initialize the YT player ------------------------------------
						 * Youtube player variables
						 * @type {{modestbranding: number, autoplay: number, controls: number, showinfo: number, rel: number, enablejsapi: number, version: number, playerapiid: string, origin: string, allowfullscreen: boolean, iv_load_policy: (string|*|jQuery.mbYTPlayer.opt.showAnnotations), playsinline: number}}
						 */ let playerVars1 = {
                            "modestbranding": 1,
                            "autoplay": 0,
                            "controls": 0,
                            "showinfo": 0,
                            "rel": 0,
                            "enablejsapi": 1,
                            "version": 3,
                            "playerapiid": YTPlayer1.playerID,
                            "origin": "*",
                            "allowfullscreen": true,
                            "wmode": "transparent",
                            "iv_load_policy": YTPlayer1.opt.showAnnotations,
                            "cc_load_policy": YTPlayer1.opt.cc_load_policy,
                            "playsinline": jQuery.mbBrowser.mobile && !YTPlayer1.isPlayer ? 1 : 0,
                            /**
							 Check if the browser can play HTML5 videos
							 */ "html5": document.createElement("video").canPlayType ? 1 : 0
                        };
                        new YT.Player(YTPlayer1.playerID, {
                            //videoId: YTPlayer.videoID.toString(),
                            host: YTPlayer1.opt.useNoCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com",
                            playerVars: playerVars1,
                            events: {
                                "onReady": function(event1) {
                                    YTPlayer1.player = event1.target;
                                    YTPlayer1.player.loadVideoById({
                                        videoId: YTPlayer1.videoID.toString(),
                                        suggestedQuality: YTPlayer1.opt.quality
                                    });
                                    $YTPlayer1.trigger("YTPlayerIsReady_" + YTPlayer1.id);
                                },
                                /**
								 * on State Change
								 * @param event
								 *
								 * -1 (unstarted)
								 * 0 (ended)
								 * 1 (playing)
								 * 2 (paused)
								 * 3 (buffering)
								 * 5 (video cued)
								 */ "onStateChange": function(event1) {
                                    if (typeof event1.target.getPlayerState != "function") return;
                                    let state1 = event1.target.getPlayerState();
                                    if (YTPlayer1.preventTrigger || YTPlayer1.isStarting) {
                                        YTPlayer1.preventTrigger = false;
                                        return;
                                    }
                                    YTPlayer1.state = state1;
                                    // console.debug(YTPlayer.state);
                                    if (event1.data === YT.PlayerState.PLAYING) event1.target.setPlaybackQuality(YTPlayer1.opt.quality);
                                    let eventType1;
                                    switch(state1){
                                        /** unstarted */ case -1:
                                            eventType1 = "YTPUnstarted";
                                            break;
                                        /** unstarted */ case 0:
                                            eventType1 = "YTPRealEnd";
                                            break;
                                        /** play */ case 1:
                                            eventType1 = "YTPPlay";
                                            if (YTPlayer1.controlBar.length) YTPlayer1.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause);
                                            if (YTPlayer1.isPlayer) YTPlayer1.inlinePlayButton.hide();
                                            jQuery(document).off("mousedown.YTPstart");
                                            break;
                                        /** pause */ case 2:
                                            eventType1 = "YTPPause";
                                            if (YTPlayer1.controlBar.length) YTPlayer1.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                            if (YTPlayer1.isPlayer) YTPlayer1.inlinePlayButton.show();
                                            break;
                                        /** buffer */ case 3:
                                            // YTPlayer.player.setPlaybackQuality('default');
                                            YTPlayer1.player.setPlaybackQuality(YTPlayer1.opt.quality);
                                            eventType1 = "YTPBuffering";
                                            if (YTPlayer1.controlBar.length) YTPlayer1.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        /** cued */ case 5:
                                            eventType1 = "YTPCued";
                                            break;
                                        default:
                                            break;
                                    }
                                    /**
									 Trigger state events
									 */ let YTPEvent1 = jQuery.Event(eventType1);
                                    YTPEvent1.time = YTPlayer1.currentTime;
                                    jQuery(YTPlayer1).trigger(YTPEvent1);
                                },
                                /**
								 * onPlaybackQualityChange
								 * @param e
								 */ "onPlaybackQualityChange": function(e1) {
                                    let quality1 = e1.target.getPlaybackQuality();
                                    let YTPQualityChange1 = jQuery.Event("YTPQualityChange");
                                    YTPQualityChange1.quality = quality1;
                                    jQuery(YTPlayer1).trigger(YTPQualityChange1);
                                },
                                /**
								 * onError
								 * @param err
								 *
								 2 – The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.
								 5 – The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.
								 100 – The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.
								 101 – The owner of the requested video does not allow it to be played in embedded players.
								 150 – This error is the same as 101. It's just a 101 error in disguise!
								 */ "onError": function(err1) {
                                    if (typeof YTPlayer1.opt.onError == "function") YTPlayer1.opt.onError($YTPlayer1, err1);
                                    console.debug("error:", err1);
                                    switch(err1.data){
                                        case 2:
                                            console.error("video ID:: " + YTPlayer1.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                            break;
                                        case 5:
                                            console.error("video ID:: " + YTPlayer1.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                            break;
                                        case 100:
                                            console.error("video ID:: " + YTPlayer1.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                            break;
                                        case 101:
                                        case 150:
                                            console.error("video ID:: " + YTPlayer1.videoID + ": The video doesn't exist or The owner does not allow it to be played in embedded players.");
                                            break;
                                    }
                                    if (YTPlayer1.isList) jQuery(YTPlayer1).YTPPlayNext();
                                }
                            }
                        });
                        $YTPlayer1.on("YTPlayerIsReady_" + YTPlayer1.id, function() {
                            if (YTPlayer1.isReady) return this;
                            YTPlayer1.playerEl = YTPlayer1.player.getIframe();
                            jQuery(YTPlayer1.playerEl).unselectable();
                            $YTPlayer1.optimizeDisplay();
                            /**
							 * Optimize display on resize
							 */ jQuery(window).off("resize.YTP_" + YTPlayer1.id).on("resize.YTP_" + YTPlayer1.id, function() {
                                $YTPlayer1.optimizeDisplay();
                            });
                            /**
							 * Optimize display on orientation change
							 */ jQuery(window).off("orientationchange.YTP_" + YTPlayer1.id).on("orientationchange.YTP_" + YTPlayer1.id, function() {
                                $YTPlayer1.optimizeDisplay();
                            });
                            /**
							 * Set the time of the last visit progress
							 */ if (YTPlayer1.opt.remember_last_time) jQuery(window).on("unload.YTP_" + YTPlayer1.id, function() {
                                let current_time1 = YTPlayer1.player.getCurrentTime();
                                jQuery.mbCookie.set("YTPlayer_start_from" + YTPlayer1.videoID, current_time1, 0);
                            });
                            $YTPlayer1.YTPCheckForState();
                        });
                    });
                });
                $YTPlayer.off("YTPTime.mask");
                jQuery.mbYTPlayer.applyMask(YTPlayer);
                console.timeEnd(YTPTimerLabels.init);
                setTimeout(function() {
                    if (!ytp.YTAPIReady && typeof window.YT == "object") {
                        jQuery(document).trigger("YTAPIReady");
                        ytp.YTAPIReady = true;
                        console.error("YTPlayer: More then a call to the YT API has been detected");
                    }
                }, YTPlayer.opt.delayAtStart);
            });
        },
        /**
		 *
		 * @param YTPlayer
		 * @param perc
		 * @returns {boolean}
		 */ isOnScreen: function(YTPlayer1, perc1) {
            perc1 = perc1 || 10;
            let playerBox1 = YTPlayer1.wrapper;
            let winTop1 = jQuery(window).scrollTop();
            let winBottom1 = winTop1 + jQuery(window).height();
            let margin1 = playerBox1.height() * perc1 / 100;
            let elTop1 = playerBox1.offset().top + margin1;
            let elBottom1 = playerBox1.offset().top + (playerBox1.height() - margin1);
            return elBottom1 <= winBottom1 && elTop1 >= winTop1;
        },
        /**
		 * getDataFromAPI
		 * @param YTPlayer
		 */ getDataFromAPI: function(YTPlayer1) {
            YTPlayer1.videoData = jQuery.mbStorage.get("YTPlayer_data_" + YTPlayer1.videoID);
            if (YTPlayer1.videoData) {
                setTimeout(function() {
                    YTPlayer1.dataReceived = true;
                    let YTPChanged1 = jQuery.Event("YTPChanged");
                    YTPChanged1.time = YTPlayer1.currentTime;
                    YTPChanged1.videoId = YTPlayer1.videoID;
                    YTPChanged1.opt = YTPlayer1.opt;
                    //console.debug("videoData:",YTPlayer.videoData)
                    jQuery(YTPlayer1).trigger(YTPChanged1);
                    let YTPData1 = jQuery.Event("YTPData");
                    YTPData1.prop = {};
                    for(let x1 in YTPlayer1.videoData)if (YTPlayer1.videoData.hasOwnProperty(x1)) YTPData1.prop[x1] = YTPlayer1.videoData[x1];
                    jQuery(YTPlayer1).trigger(YTPData1);
                }, YTPlayer1.opt.fadeOnStartTime);
                YTPlayer1.hasData = true;
            } else if (jQuery.mbYTPlayer.apiKey) /**
				 * Get video info from API3 (needs api key)
				 * snippet,player,contentDetails,statistics,status
				 */ jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + YTPlayer1.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(data1) {
                YTPlayer1.dataReceived = true;
                let YTPChanged1 = jQuery.Event("YTPChanged");
                YTPChanged1.time = YTPlayer1.currentTime;
                YTPChanged1.videoId = YTPlayer1.videoID;
                jQuery(YTPlayer1).trigger(YTPChanged1);
                function parseYTPlayer_data1(data1) {
                    YTPlayer1.videoData = {};
                    YTPlayer1.videoData.id = YTPlayer1.videoID;
                    YTPlayer1.videoData.channelTitle = data1.channelTitle;
                    YTPlayer1.videoData.title = data1.title;
                    YTPlayer1.videoData.description = data1.description.length < 400 ? data1.description : data1.description.substring(0, 400) + " ...";
                    YTPlayer1.videoData.thumb_max = data1.thumbnails.maxres ? data1.thumbnails.maxres.url : null;
                    YTPlayer1.videoData.thumb_high = data1.thumbnails.high ? data1.thumbnails.high.url : null;
                    YTPlayer1.videoData.thumb_medium = data1.thumbnails.medium ? data1.thumbnails.medium.url : null;
                    jQuery.mbStorage.set("YTPlayer_data_" + YTPlayer1.videoID, YTPlayer1.videoData);
                }
                if (!data1.items[0]) {
                    YTPlayer1.videoData = {};
                    YTPlayer1.hasData = false;
                } else {
                    parseYTPlayer_data1(data1.items[0].snippet);
                    YTPlayer1.hasData = true;
                }
                let YTPData1 = jQuery.Event("YTPData");
                YTPData1.prop = {};
                for(let x1 in YTPlayer1.videoData)YTPData1.prop[x1] = YTPlayer1.videoData[x1];
                jQuery(YTPlayer1).trigger(YTPData1);
            }).fail(function(jqxhr1) {
                console.error("YT data error:: ", jqxhr1);
                YTPlayer1.hasData = false;
                let YTPChanged1 = jQuery.Event("YTPChanged");
                YTPChanged1.time = YTPlayer1.currentTime;
                YTPChanged1.videoId = YTPlayer1.videoID;
                jQuery(YTPlayer1).trigger(YTPChanged1);
            });
            else {
                setTimeout(function() {
                    let YTPChanged1 = jQuery.Event("YTPChanged");
                    YTPChanged1.time = YTPlayer1.currentTime;
                    YTPChanged1.videoId = YTPlayer1.videoID;
                    jQuery(YTPlayer1).trigger(YTPChanged1);
                }, 10);
                YTPlayer1.videoData = null;
            }
            YTPlayer1.opt.ratio = YTPlayer1.opt.ratio == "auto" ? 16 / 9 : YTPlayer1.opt.ratio;
            if (YTPlayer1.isPlayer && !YTPlayer1.opt.autoPlay) {
                YTPlayer1.loading = jQuery("<div/>").addClass("loading").html("Loading").hide();
                jQuery(YTPlayer1).append(YTPlayer1.loading);
                YTPlayer1.loading.fadeIn();
            }
        },
        /**
		 * removeStoredData
		 */ removeStoredData: function() {
            jQuery.mbStorage.remove();
        },
        /**
		 * getVideoData
		 * @returns {*|YTPlayer.videoData}
		 */ getVideoData: function() {
            let YTPlayer1 = this.get(0);
            return YTPlayer1.videoData;
        },
        /**
		 * getVideoID
		 * @returns {*|YTPlayer.videoID|boolean}
		 */ getVideoID: function() {
            let YTPlayer1 = this.get(0);
            return YTPlayer1.videoID || false;
        },
        /**
		 * getPlaylistID
		 * @returns {*|YTPlayer.videoID|boolean}
		 */ getPlaylistID: function() {
            let YTPlayer1 = this.get(0);
            return YTPlayer1.playlistID || false;
        },
        /**
		 * setVideoQuality
		 * @deprecated
		 *
		 * @param quality
		 * @returns {jQuery.mbYTPlayer}
		 */ setVideoQuality: function(quality1) {
            let YTPlayer1 = this.get(0);
            let time1 = YTPlayer1.player.getCurrentTime();
            jQuery(YTPlayer1).YTPPause();
            YTPlayer1.opt.quality = quality1;
            YTPlayer1.player.setPlaybackQuality(quality1);
            YTPlayer1.player.seekTo(time1); // or set to CurrentTime using player.getCurrentTime()
            jQuery(YTPlayer1).YTPPlay();
            return this;
        },
        /**
		 * getVideoQuality
		 * @returns {jQuery.mbYTPlayer}
		 */ getVideoQuality: function() {
            let YTPlayer1 = this.get(0);
            let quality1 = YTPlayer1.player.getPlaybackQuality();
            return quality1;
        },
        /**
		 * playlist
		 * @param videos -> Array or String (videoList ID)
		 * @param shuffle
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 *
		 * To retrieve a Youtube playlist the Youtube API key is required:
		 * https://console.developers.google.com/
		 * jQuery.mbYTPlayer.apiKey
		 */ playlist: function(videos1, shuffle1, callback1) {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            YTPlayer1.isList = true;
            if (shuffle1) videos1 = jQuery.shuffle(videos1);
            if (!YTPlayer1.videoID) {
                YTPlayer1.videos = videos1;
                YTPlayer1.videoCounter = 1;
                YTPlayer1.videoLength = videos1.length;
                jQuery(YTPlayer1).data("property", videos1[0]);
                jQuery(YTPlayer1).YTPlayer();
            }
            if (typeof callback1 == "function") jQuery(YTPlayer1).on("YTPChanged", function() {
                callback1(YTPlayer1);
            });
            jQuery(YTPlayer1).on("YTPEnd", function() {
                jQuery(YTPlayer1).YTPPlayNext();
            });
            return this;
        },
        /**
		 * playNext
		 * @returns {jQuery.mbYTPlayer}
		 */ playNext: function() {
            let YTPlayer1 = this.get(0);
            YTPlayer1.videoCounter++;
            if (YTPlayer1.videoCounter > YTPlayer1.videoLength) YTPlayer1.videoCounter = 1;
            jQuery(YTPlayer1).YTPPlayIndex(YTPlayer1.videoCounter);
            return this;
        },
        /**
		 * playPrev
		 * @returns {jQuery.mbYTPlayer}
		 */ playPrev: function() {
            let YTPlayer1 = this.get(0);
            YTPlayer1.videoCounter--;
            if (YTPlayer1.videoCounter <= 0) YTPlayer1.videoCounter = YTPlayer1.videoLength;
            jQuery(YTPlayer1).YTPPlayIndex(YTPlayer1.videoCounter);
            return this;
        },
        /**
		 * playIndex
		 * @param idx
		 * @returns {jQuery.mbYTPlayer}
		 */ playIndex: function(idx1) {
            let YTPlayer1 = this.get(0);
            if (YTPlayer1.checkForStartAt) {
                clearInterval(YTPlayer1.checkForStartAt);
                clearInterval(YTPlayer1.getState);
            }
            YTPlayer1.videoCounter = idx1;
            if (YTPlayer1.videoCounter >= YTPlayer1.videoLength) YTPlayer1.videoCounter = YTPlayer1.videoLength;
            let video1 = YTPlayer1.videos[YTPlayer1.videoCounter - 1];
            jQuery(YTPlayer1).YTPChangeVideo(video1);
            return this;
        },
        /**
		 * changeVideo
		 * @param opt
		 * @returns {jQuery.mbYTPlayer}
		 */ changeVideo: function(opt1) {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            YTPlayer1.opt.startAt = 0;
            YTPlayer1.opt.stopAt = 0;
            YTPlayer1.opt.mask = false;
            YTPlayer1.opt.mute = true;
            YTPlayer1.opt.autoPlay = true;
            YTPlayer1.opt.addFilters = false;
            YTPlayer1.opt.coverImage = false;
            YTPlayer1.hasData = false;
            YTPlayer1.hasChanged = true;
            YTPlayer1.player.loopTime = undefined;
            if (opt1) jQuery.extend(YTPlayer1.opt, opt1);
            YTPlayer1.videoID = getYTPVideoID(YTPlayer1.opt.videoURL).videoID;
            if (YTPlayer1.opt.loop && typeof YTPlayer1.opt.loop == "boolean") YTPlayer1.opt.loop = 9999;
            YTPlayer1.wrapper.css({
                background: "none"
            });
            jQuery(YTPlayer1.playerEl).CSSAnimate({
                opacity: 0
            }, YTPlayer1.opt.fadeOnStartTime, function() {
                jQuery.mbYTPlayer.getDataFromAPI(YTPlayer1);
                $YTPlayer1.YTPGetPlayer().loadVideoById({
                    videoId: YTPlayer1.videoID,
                    suggestedQuality: YTPlayer1.opt.quality
                });
                $YTPlayer1.YTPPause();
                $YTPlayer1.optimizeDisplay();
                if (YTPlayer1.checkForStartAt) {
                    clearInterval(YTPlayer1.checkForStartAt);
                    clearInterval(YTPlayer1.getState);
                }
                $YTPlayer1.YTPCheckForState();
            });
            let YTPChangeVideo1 = jQuery.Event("YTPChangeVideo");
            YTPChangeVideo1.time = YTPlayer1.currentTime;
            jQuery(YTPlayer1).trigger(YTPChangeVideo1);
            jQuery.mbYTPlayer.applyMask(YTPlayer1);
            return this;
        },
        /**
		 * getPlayer
		 * @returns {player}
		 */ getPlayer: function() {
            let YTPlayer1 = this.get(0);
            return !YTPlayer1.isReady ? null : YTPlayer1.player;
        },
        /**
		 * playerDestroy
		 * @returns {jQuery.mbYTPlayer}
		 */ playerDestroy: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            ytp.YTAPIReady = true;
            ytp.backgroundIsInited = false;
            YTPlayer1.isInit = false;
            YTPlayer1.videoID = null;
            YTPlayer1.isReady = false;
            YTPlayer1.wrapper.remove();
            jQuery("#controlBar_" + YTPlayer1.id).remove();
            clearInterval(YTPlayer1.checkForStartAt);
            clearInterval(YTPlayer1.getState);
            return this;
        },
        /**
		 * fullscreen
		 * @param real
		 * @returns {jQuery.mbYTPlayer}
		 */ fullscreen: function(real) {
            let YTPlayer = this.get(0);
            if (typeof real == "undefined") real = eval(YTPlayer.opt.realFullscreen);
            let controls = jQuery("#controlBar_" + YTPlayer.id);
            let fullScreenBtn = controls.find(".mb_OnlyYT");
            let videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                let fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    let isFullScreen1 = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    if (!isFullScreen1) {
                        YTPlayer.isAlone = false;
                        fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                        jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality);
                        videoWrapper.removeClass("YTPFullscreen");
                        videoWrapper.CSSAnimate({
                            opacity: YTPlayer.opt.opacity
                        }, YTPlayer.opt.fadeOnStartTime);
                        videoWrapper.css({
                            zIndex: 0
                        });
                        if (YTPlayer.isBackground) jQuery("body").after(controls);
                        else YTPlayer.wrapper.before(controls);
                        jQuery(window).resize();
                        jQuery(YTPlayer).trigger("YTPFullScreenEnd");
                    } else jQuery(YTPlayer).trigger("YTPFullScreenStart");
                });
            }
            if (!YTPlayer.isAlone) {
                function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    });
                }
                jQuery(document).on("mousemove.YTPlayer", function(e1) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    });
                    clearTimeout(YTPlayer.hideCursor);
                    if (!jQuery(e1.target).parents().is(".mb_YTPBar")) YTPlayer.hideCursor = setTimeout(hideMouse, 3000);
                });
                hideMouse();
                if (real) {
                    videoWrapper.css({
                        opacity: 0
                    });
                    videoWrapper.addClass("YTPFullscreen");
                    launchFullscreen(videoWrapper.get(0));
                    setTimeout(function() {
                        videoWrapper.CSSAnimate({
                            opacity: 1
                        }, YTPlayer.opt.fadeOnStartTime * 2);
                        videoWrapper.append(controls);
                        jQuery(YTPlayer).optimizeDisplay();
                        YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, true);
                    }, YTPlayer.opt.fadeOnStartTime);
                } else videoWrapper.css({
                    zIndex: 10000
                }).CSSAnimate({
                    opacity: 1
                }, YTPlayer.opt.fadeOnStartTime * 2);
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite);
                YTPlayer.isAlone = true;
            } else {
                jQuery(document).off("mousemove.YTPlayer");
                clearTimeout(YTPlayer.hideCursor);
                YTPlayer.overlay.css({
                    cursor: "auto"
                });
                if (real) cancelFullscreen();
                else {
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime);
                    videoWrapper.css({
                        zIndex: 0
                    });
                }
                fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT);
                YTPlayer.isAlone = false;
            }
            function RunPrefixMethod(obj1, method1) {
                let pfx1 = [
                    "webkit",
                    "moz",
                    "ms",
                    "o",
                    ""
                ];
                let p1 = 0, m1, t1;
                while(p1 < pfx1.length && !obj1[m1]){
                    m1 = method1;
                    if (pfx1[p1] == "") m1 = m1.substr(0, 1).toLowerCase() + m1.substr(1);
                    m1 = pfx1[p1] + m1;
                    t1 = typeof obj1[m1];
                    if (t1 != "undefined") {
                        pfx1 = [
                            pfx1[p1]
                        ];
                        return t1 == "function" ? obj1[m1]() : obj1[m1];
                    }
                    p1++;
                }
            }
            function launchFullscreen(element1) {
                RunPrefixMethod(element1, "RequestFullScreen");
            }
            function cancelFullscreen() {
                if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) RunPrefixMethod(document, "CancelFullScreen");
            }
            return this;
        },
        /**
		 * toggleLoops
		 * @returns {jQuery.mbYTPlayer}
		 */ toggleLoops: function() {
            let YTPlayer1 = this.get(0);
            let data1 = YTPlayer1.opt;
            if (data1.loop == 1) data1.loop = 0;
            else {
                if (data1.startAt) YTPlayer1.player.seekTo(data1.startAt);
                else YTPlayer1.player.playVideo();
                data1.loop = 1;
            }
            return this;
        },
        /**
		 * play
		 * @returns {jQuery.mbYTPlayer}
		 */ play: function() {
            let YTPlayer1 = this.get(0);
            let $YTPlayer1 = jQuery(YTPlayer1);
            if (!YTPlayer1.isReady) return this;
            setTimeout(function() {
                $YTPlayer1.YTPSetAbundance(YTPlayer1.opt.abundance);
            }, 300);
            YTPlayer1.player.playVideo();
            jQuery(YTPlayer1.playerEl).css({
                opacity: 1
            });
            YTPlayer1.wrapper.css({
                backgroundImage: "none"
            });
            YTPlayer1.wrapper.CSSAnimate({
                opacity: YTPlayer1.isAlone ? 1 : YTPlayer1.opt.opacity
            }, YTPlayer1.opt.fadeOnStartTime);
            let controls1 = jQuery("#controlBar_" + YTPlayer1.id);
            let playBtn1 = controls1.find(".mb_YTPPlayPause");
            playBtn1.html(jQuery.mbYTPlayer.controls.pause);
            YTPlayer1.state = 1;
            return this;
        },
        /**
		 * togglePlay
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */ togglePlay: function(callback1) {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            if (YTPlayer1.state == 1) this.YTPPause();
            else this.YTPPlay();
            if (typeof callback1 == "function") callback1(YTPlayer1.state);
            return this;
        },
        /**
		 * stop
		 * @returns {jQuery.mbYTPlayer}
		 */ stop: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            let controls1 = jQuery("#controlBar_" + YTPlayer1.id);
            let playBtn1 = controls1.find(".mb_YTPPlayPause");
            playBtn1.html(jQuery.mbYTPlayer.controls.play);
            YTPlayer1.player.stopVideo();
            return this;
        },
        /**
		 * pause
		 * @returns {jQuery.mbYTPlayer}
		 */ pause: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            if (YTPlayer1.opt.abundance < .2) this.YTPSetAbundance(.2);
            YTPlayer1.player.pauseVideo();
            YTPlayer1.state = 2;
            return this;
        },
        /**
		 * seekTo
		 * @param sec
		 * @returns {jQuery.mbYTPlayer}
		 */ seekTo: function(sec1) {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            YTPlayer1.player.seekTo(sec1, true);
            return this;
        },
        /**
		 *
		 * @returns {*}
		 */ getPlaybackRate: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            return YTPlayer1.player.getPlaybackRate();
        },
        /**
		 * setPlaybackRate
		 * @param val:Number
		 * 0.25, 0.5, 1, 1.5, 2
		 * @returns {jQuery.mbYTPlayer}
		 */ setPlaybackRate: function(val1) {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            YTPlayer1.player.setPlaybackRate(val1);
            return this;
        },
        /**
		 * setVolume
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */ setVolume: function(val1) {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            YTPlayer1.opt.vol = val1;
            this.YTPUnmute();
            YTPlayer1.player.setVolume(YTPlayer1.opt.vol);
            if (YTPlayer1.volumeBar && YTPlayer1.volumeBar.length) YTPlayer1.volumeBar.updateSliderVal(val1);
            return this;
        },
        /**
		 * getVolume
		 * @returns {*}
		 */ getVolume: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            return YTPlayer1.player.getVolume();
        },
        /**
		 * toggleVolume
		 * @returns {jQuery.mbYTPlayer}
		 */ toggleVolume: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            if (YTPlayer1.isMute) {
                if (!jQuery.mbBrowser.mobile) this.YTPSetVolume(YTPlayer1.opt.vol);
                this.YTPUnmute();
            } else this.YTPMute();
            return this;
        },
        /**
		 * mute
		 * @returns {jQuery.mbYTPlayer}
		 */ mute: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            if (YTPlayer1.isMute) return this;
            YTPlayer1.player.mute();
            YTPlayer1.isMute = true;
            YTPlayer1.player.setVolume(0);
            if (YTPlayer1.volumeBar && YTPlayer1.volumeBar.length && YTPlayer1.volumeBar.width() > 10) YTPlayer1.volumeBar.updateSliderVal(0);
            let controls1 = jQuery("#controlBar_" + YTPlayer1.id);
            let muteBtn1 = controls1.find(".mb_YTPMuteUnmute");
            muteBtn1.html(jQuery.mbYTPlayer.controls.unmute);
            jQuery(YTPlayer1).addClass("isMuted");
            if (YTPlayer1.volumeBar && YTPlayer1.volumeBar.length) YTPlayer1.volumeBar.addClass("muted");
            let YTPEvent1 = jQuery.Event("YTPMuted");
            YTPEvent1.time = YTPlayer1.currentTime;
            if (!YTPlayer1.preventTrigger) jQuery(YTPlayer1).trigger(YTPEvent1);
            return this;
        },
        /**
		 * unmute
		 * @returns {jQuery.mbYTPlayer}
		 */ unmute: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            if (!YTPlayer1.isMute) return this;
            YTPlayer1.player.unMute();
            YTPlayer1.isMute = false;
            jQuery(YTPlayer1).YTPSetVolume(YTPlayer1.opt.vol);
            if (YTPlayer1.volumeBar && YTPlayer1.volumeBar.length) YTPlayer1.volumeBar.updateSliderVal(YTPlayer1.opt.vol > 10 ? YTPlayer1.opt.vol : 10);
            let controls1 = jQuery("#controlBar_" + YTPlayer1.id);
            let muteBtn1 = controls1.find(".mb_YTPMuteUnmute");
            muteBtn1.html(jQuery.mbYTPlayer.controls.mute);
            jQuery(YTPlayer1).removeClass("isMuted");
            if (YTPlayer1.volumeBar && YTPlayer1.volumeBar.length) YTPlayer1.volumeBar.removeClass("muted");
            let YTPEvent1 = jQuery.Event("YTPUnmuted");
            YTPEvent1.time = YTPlayer1.currentTime;
            if (!YTPlayer1.preventTrigger) jQuery(YTPlayer1).trigger(YTPEvent1);
            return this;
        },
        /* FILTERS ---------------------------------------------------------------------------------------------------------*/ /**
		 * applyFilter
		 * @param filter
		 * @param value
		 * @returns {jQuery.mbYTPlayer}
		 */ applyFilter: function(filter1, value1) {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            if (!YTPlayer1.isReady) return this;
            YTPlayer1.filters[filter1].value = value1;
            if (YTPlayer1.filtersEnabled) $YTPlayer1.YTPEnableFilters();
        },
        /**
		 * applyFilters
		 * @param filters
		 * @returns {jQuery.mbYTPlayer}
		 */ applyFilters: function(filters1) {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            if (!YTPlayer1.isReady) {
                jQuery(YTPlayer1).on("YTPReady", function() {
                    $YTPlayer1.YTPApplyFilters(filters1);
                });
                return this;
            }
            for(let key1 in filters1)$YTPlayer1.YTPApplyFilter(key1, filters1[key1]);
            $YTPlayer1.trigger("YTPFiltersApplied");
        },
        /**
		 * toggleFilter
		 * @param filter
		 * @param value
		 * @returns {jQuery.mbYTPlayer}
		 */ toggleFilter: function(filter1, value1) {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            if (!YTPlayer1.isReady) return this;
            if (!YTPlayer1.filters[filter1].value) YTPlayer1.filters[filter1].value = value1;
            else YTPlayer1.filters[filter1].value = 0;
            if (YTPlayer1.filtersEnabled) jQuery(YTPlayer1).YTPEnableFilters();
            return this;
        },
        /**
		 * toggleFilters
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */ toggleFilters: function(callback1) {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            if (!YTPlayer1.isReady) return this;
            if (YTPlayer1.filtersEnabled) {
                jQuery(YTPlayer1).trigger("YTPDisableFilters");
                jQuery(YTPlayer1).YTPDisableFilters();
            } else {
                jQuery(YTPlayer1).YTPEnableFilters();
                jQuery(YTPlayer1).trigger("YTPEnableFilters");
            }
            if (typeof callback1 == "function") callback1(YTPlayer1.filtersEnabled);
            return this;
        },
        /**
		 * disableFilters
		 * @returns {jQuery.mbYTPlayer}
		 */ disableFilters: function() {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            if (!YTPlayer1.isReady) return this;
            let iframe1 = jQuery(YTPlayer1.playerEl);
            iframe1.css("-webkit-filter", "");
            iframe1.css("filter", "");
            YTPlayer1.filtersEnabled = false;
            return this;
        },
        /**
		 * enableFilters
		 * @returns {jQuery.mbYTPlayer}
		 */ enableFilters: function() {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            if (!YTPlayer1.isReady) return this;
            let iframe1 = jQuery(YTPlayer1.playerEl);
            let filterStyle1 = "";
            for(let key1 in YTPlayer1.filters)if (YTPlayer1.filters[key1].value) filterStyle1 += key1.replace("_", "-") + "(" + YTPlayer1.filters[key1].value + YTPlayer1.filters[key1].unit + ") ";
            iframe1.css("-webkit-filter", filterStyle1);
            iframe1.css("filter", filterStyle1);
            YTPlayer1.filtersEnabled = true;
            return this;
        },
        /**
		 * removeFilter
		 * @param filter
		 * @param callback
		 * @returns {jQuery.mbYTPlayer}
		 */ removeFilter: function(filter1, callback1) {
            let $YTPlayer1 = this;
            let YTPlayer1 = $YTPlayer1.get(0);
            if (!YTPlayer1.isReady) return this;
            if (typeof filter1 == "function") {
                callback1 = filter1;
                filter1 = null;
            }
            if (!filter1) {
                for(let key1 in YTPlayer1.filters)if (YTPlayer1.filters.hasOwnProperty(key1)) {
                    $YTPlayer1.YTPApplyFilter(key1, 0);
                    if (typeof callback1 == "function") callback1(key1);
                }
                YTPlayer1.filters = jQuery.extend(true, {}, jQuery.mbYTPlayer.defaultFilters);
            } else {
                $YTPlayer1.YTPApplyFilter(filter1, 0);
                if (typeof callback1 == "function") callback1(filter1);
            }
            let YTPEvent1 = jQuery.Event("YTPFiltersApplied");
            $YTPlayer1.trigger(YTPEvent1);
            return this;
        },
        /**
		 * getFilters
		 * @returns {filters}
		 */ getFilters: function() {
            let YTPlayer1 = this.get(0);
            if (!YTPlayer1.isReady) return this;
            return YTPlayer1.filters;
        },
        /* MASK ---------------------------------------------------------------------------------------------------------*/ /**
		 * addMask
		 * @param mask
		 * @returns {jQuery.mbYTPlayer}
		 */ addMask: function(mask1) {
            let YTPlayer1 = this.get(0);
            if (!mask1) mask1 = YTPlayer1.actualMask;
            let tempImg1 = jQuery("<img/>").attr("src", mask1).on("load", function() {
                YTPlayer1.overlay.CSSAnimate({
                    opacity: 0
                }, YTPlayer1.opt.fadeOnStartTime, function() {
                    YTPlayer1.hasMask = true;
                    tempImg1.remove();
                    YTPlayer1.overlay.css({
                        backgroundImage: "url(" + mask1 + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    });
                    YTPlayer1.overlay.CSSAnimate({
                        opacity: 1
                    }, YTPlayer1.opt.fadeOnStartTime);
                });
            });
            return this;
        },
        /**
		 * removeMask
		 * @returns {jQuery.mbYTPlayer}
		 */ removeMask: function() {
            let YTPlayer1 = this.get(0);
            YTPlayer1.overlay.CSSAnimate({
                opacity: 0
            }, YTPlayer1.opt.fadeOnStartTime, function() {
                YTPlayer1.hasMask = false;
                YTPlayer1.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                });
                YTPlayer1.overlay.CSSAnimate({
                    opacity: 1
                }, YTPlayer1.opt.fadeOnStartTime);
            });
            return this;
        },
        /**
		 * Apply mask
		 * @param YTPlayer
		 */ applyMask: function(YTPlayer1) {
            let $YTPlayer1 = jQuery(YTPlayer1);
            $YTPlayer1.off("YTPTime.mask");
            if (YTPlayer1.opt.mask) {
                if (typeof YTPlayer1.opt.mask == "string") {
                    $YTPlayer1.YTPAddMask(YTPlayer1.opt.mask);
                    YTPlayer1.actualMask = YTPlayer1.opt.mask;
                } else if (typeof YTPlayer1.opt.mask == "object") {
                    for(let time1 in YTPlayer1.opt.mask)if (YTPlayer1.opt.mask[time1]) img = jQuery("<img/>").attr("src", YTPlayer1.opt.mask[time1]);
                    if (YTPlayer1.opt.mask[0]) $YTPlayer1.YTPAddMask(YTPlayer1.opt.mask[0]);
                    $YTPlayer1.on("YTPTime.mask", function(e1) {
                        for(let time1 in YTPlayer1.opt.mask)if (e1.time == time1) {
                            if (!YTPlayer1.opt.mask[time1]) $YTPlayer1.YTPRemoveMask();
                            else {
                                $YTPlayer1.YTPAddMask(YTPlayer1.opt.mask[time1]);
                                YTPlayer1.actualMask = YTPlayer1.opt.mask[time1];
                            }
                        }
                    });
                }
            }
        },
        /**
		 * toggleMask
		 * @returns {jQuery.mbYTPlayer}
		 */ toggleMask: function() {
            let YTPlayer1 = this.get(0);
            let $YTPlayer1 = jQuery(YTPlayer1);
            if (YTPlayer1.hasMask) $YTPlayer1.YTPRemoveMask();
            else $YTPlayer1.YTPAddMask();
            return this;
        },
        /* CONTROLS --------------------------------------------------------------------------------------------------------*/ /**
		 * manageProgress
		 * @returns {{totalTime: number, currentTime: number}}
		 */ manageProgress: function() {
            let YTPlayer1 = this.get(0);
            let controls1 = jQuery("#controlBar_" + YTPlayer1.id);
            let progressBar1 = controls1.find(".mb_YTPProgress");
            let loadedBar1 = controls1.find(".mb_YTPLoaded");
            let timeBar1 = controls1.find(".mb_YTPseekbar");
            let totW1 = progressBar1.outerWidth();
            let currentTime1 = Math.floor(YTPlayer1.player.getCurrentTime());
            let totalTime1 = Math.floor(YTPlayer1.player.getDuration());
            let timeW1 = currentTime1 * totW1 / totalTime1;
            let startLeft1 = 0;
            let loadedW1 = YTPlayer1.player.getVideoLoadedFraction() * 100;
            loadedBar1.css({
                left: startLeft1,
                width: loadedW1 + "%"
            });
            timeBar1.css({
                left: 0,
                width: timeW1
            });
            return {
                totalTime: totalTime1,
                currentTime: currentTime1
            };
        },
        /**
		 * buildControls
		 * @param YTPlayer
		 */ buildControls: function(YTPlayer) {
            jQuery("#controlBar_" + YTPlayer.id).remove();
            if (!YTPlayer.opt.showControls) {
                YTPlayer.controlBar = false;
                return;
            }
            YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl;
            if (jQuery("#controlBar_" + YTPlayer.id).length) return;
            YTPlayer.controlBar = jQuery("<div/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 10000 : 1000
            }).hide().on("click", function(e1) {
                e1.stopPropagation();
            });
            let buttonBar = jQuery("<div/>").addClass("buttonBar");
            /**
			 *  play/pause button
			 * */ let playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function(e1) {
                e1.stopPropagation();
                jQuery(YTPlayer).YTPTogglePlay();
            });
            /**
			 *  mute/unmute button
			 * */ let MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function(e1) {
                e1.stopPropagation();
                jQuery(YTPlayer).YTPToggleVolume();
            });
            /**
			 *  volume bar
			 * */ let volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                display: "inline-block"
            });
            YTPlayer.volumeBar = volumeBar;
            /**
			 * time elapsed
			 * */ let idx = jQuery("<span/>").addClass("mb_YTPTime");
            let vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
            if (vURL.indexOf("http") < 0) vURL = "https://www.youtube.com/watch?v=" + YTPlayer.opt.videoURL;
            let movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                window.open(vURL, "viewOnYT");
            });
            let onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function(e1) {
                e1.stopPropagation();
                jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen);
            });
            let progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function(e1) {
                e1.stopPropagation();
                timeBar.css({
                    width: e1.clientX - timeBar.offset().left
                });
                YTPlayer.timeW = e1.clientX - timeBar.offset().left;
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
                let totalTime1 = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = timeBar.outerWidth() * totalTime1 / progressBar.outerWidth();
                YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), true);
                YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
            });
            let loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute");
            let timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar);
            buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx);
            if (YTPlayer.opt.showYTLogo) buttonBar.append(movieUrl);
            /**
			 * Full screen button
			 */ if (YTPlayer.isBackground || eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground) buttonBar.append(onlyVideo);
            YTPlayer.controlBar.append(buttonBar).append(progressBar);
            if (!YTPlayer.isBackground) {
                YTPlayer.controlBar.addClass("inlinePlayer");
                YTPlayer.wrapper.before(YTPlayer.controlBar);
            } else jQuery("body").after(YTPlayer.controlBar);
            /**
			 * Volume slider
			 */ volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function(el1) {
                    if (el1.value == 0) jQuery(YTPlayer).YTPMute();
                    else jQuery(YTPlayer).YTPUnmute();
                    YTPlayer.player.setVolume(el1.value);
                    if (!YTPlayer.isMute) YTPlayer.opt.vol = el1.value;
                }
            });
        },
        /**
		 * changeCoverImage
		 *
		 * @param imageURL
		 * @returns {jQuery.mbYTPlayer}
		 */ changeCoverImage: function(imageURL1) {
            let YTPlayer1 = this.get(0);
            if (YTPlayer1.opt.coverImage || YTPlayer1.orig_containment_background) {
                let bgndURL1 = imageURL1 || (YTPlayer1.opt.coverImage ? "url(" + YTPlayer1.opt.coverImage + ") center center" : YTPlayer1.orig_containment_background);
                if (bgndURL1) YTPlayer1.opt.containment.css({
                    background: bgndURL1,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                });
            }
            return this;
        },
        /* MANAGE PLAYER STATE ------------------------------------------------------------------------------------------*/ /**
		 * checkForState
		 */ checkForState: function() {
            let YTPlayer = this.get(0);
            let $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            let interval = 100;
            //Checking if player has been removed from the scene
            if (!jQuery.contains(document, YTPlayer)) {
                $YTPlayer.YTPPlayerDestroy();
                clearInterval(YTPlayer.getState);
                clearInterval(YTPlayer.checkForStartAt);
                return;
            }
            jQuery.mbYTPlayer.checkForStart(YTPlayer);
            YTPlayer.getState = setInterval(function() {
                let $YTPlayer = jQuery(YTPlayer);
                if (!YTPlayer.isReady) return;
                let prog = jQuery(YTPlayer).YTPManageProgress();
                let stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0;
                if (YTPlayer.currentTime != prog.currentTime) {
                    let YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime;
                    jQuery(YTPlayer).trigger(YTPEvent);
                }
                YTPlayer.currentTime = prog.currentTime;
                YTPlayer.totalTime = YTPlayer.player.getDuration();
                if (YTPlayer.player.getVolume() == 0) $YTPlayer.addClass("isMuted");
                else $YTPlayer.removeClass("isMuted");
                if (YTPlayer.opt.showControls) {
                    if (prog.totalTime) YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime));
                    else YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --");
                }
                /**
				 * Manage video pause on window blur
				 */ if (eval(YTPlayer.opt.stopMovieOnBlur)) {
                    if (!document.hasFocus()) {
                        if (YTPlayer.state == 1) {
                            YTPlayer.hasFocus = false;
                            YTPlayer.preventTrigger = true;
                            $YTPlayer.YTPPause();
                        }
                    } else if (document.hasFocus() && !YTPlayer.hasFocus && !(YTPlayer.state == -1 || YTPlayer.state == 0)) {
                        YTPlayer.hasFocus = true;
                        YTPlayer.preventTrigger = true;
                        $YTPlayer.YTPPlay();
                    }
                }
                /**
				 * Manage video pause if not on screen
				 */ if (YTPlayer.opt.playOnlyIfVisible) {
                    let isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                    if (!isOnScreen && YTPlayer.state == 1) {
                        YTPlayer.isOnScreen = false;
                        $YTPlayer.YTPPause();
                    } else if (isOnScreen && !YTPlayer.isOnScreen) {
                        YTPlayer.isOnScreen = true;
                        YTPlayer.player.playVideo();
                    }
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact) {
                    YTPlayer.controlBar.addClass("compact");
                    YTPlayer.isCompact = true;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                } else if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact) {
                    YTPlayer.controlBar.removeClass("compact");
                    YTPlayer.isCompact = false;
                    if (!YTPlayer.isMute && YTPlayer.volumeBar) YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol);
                }
                // the video is ended
                if (YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - YTPlayer.opt.fadeOnStartTime / 1000) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)) {
                    if (YTPlayer.isEnded) return;
                    YTPlayer.isEnded = true;
                    setTimeout(function() {
                        YTPlayer.isEnded = false;
                    }, 1000);
                    if (YTPlayer.isList) {
                        if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = undefined;
                            clearInterval(YTPlayer.getState);
                            let YTPEnd = jQuery.Event("YTPEnd");
                            YTPEnd.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd);
                            return;
                        }
                    } else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                        YTPlayer.player.loopTime = undefined;
                        YTPlayer.state = 2;
                        $YTPlayer.changeCoverImage(YTPlayer);
                        jQuery(YTPlayer).YTPPause();
                        YTPlayer.wrapper.CSSAnimate({
                            opacity: 0
                        }, YTPlayer.opt.fadeOnStartTime, function() {
                            if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                            $YTPlayer.changeCoverImage();
                            let YTPEnd1 = jQuery.Event("YTPEnd");
                            YTPEnd1.time = YTPlayer.currentTime;
                            jQuery(YTPlayer).trigger(YTPEnd1);
                            YTPlayer.player.seekTo(YTPlayer.opt.startAt, true);
                        });
                        return;
                    }
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1;
                    YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1;
                    YTPlayer.preventTrigger = true;
                    YTPlayer.state = 2;
                    YTPlayer.player.seekTo(YTPlayer.opt.startAt, true);
                }
            }, interval);
        },
        /**
		 * checkForStart
		 * @param YTPlayer
		 */ checkForStart: function(YTPlayer) {
            let $YTPlayer = jQuery(YTPlayer);
            /* If the player has been removed from scene destroy it */ if (!jQuery.contains(document, YTPlayer)) {
                $YTPlayer.YTPPlayerDestroy();
                return;
            }
            /* CREATE CONTROL BAR */ jQuery.mbYTPlayer.buildControls(YTPlayer);
            if (YTPlayer.overlay) {
                if (YTPlayer.opt.addRaster) {
                    let classN = YTPlayer.opt.addRaster == "dot" ? "raster-dot" : "raster";
                    YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN);
                } else YTPlayer.overlay.removeClass(function(index1, classNames1) {
                    // change the list into an array
                    let current_classes1 = classNames1.split(" "), // array of classes which are to be removed
                    classes_to_remove1 = [];
                    jQuery.each(current_classes1, function(index1, class_name1) {
                        // if the classname begins with bg add it to the classes_to_remove array
                        if (/raster.*/.test(class_name1)) classes_to_remove1.push(class_name1);
                    });
                    classes_to_remove1.push("retina");
                    // turn the array back into a string
                    return classes_to_remove1.join(" ");
                });
            }
            YTPlayer.preventTrigger = true;
            YTPlayer.state = 2;
            YTPlayer.preventTrigger = true;
            YTPlayer.player.mute();
            YTPlayer.player.playVideo();
            YTPlayer.isStarting = true;
            let startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            YTPlayer.preventTrigger = true;
            YTPlayer.checkForStartAt = setInterval(function() {
                YTPlayer.player.mute();
                YTPlayer.player.seekTo(startAt, true);
                let canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (jQuery.browser.mobile) canPlayVideo = true;
                if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    YTPlayer.start_from_last = null;
                    YTPlayer.preventTrigger = true;
                    $YTPlayer.YTPPause();
                    clearInterval(YTPlayer.checkForStartAt);
                    if (typeof YTPlayer.opt.onReady == "function") YTPlayer.opt.onReady(YTPlayer);
                    YTPlayer.isReady = true;
                    $YTPlayer.YTPRemoveFilter();
                    if (YTPlayer.opt.addFilters) $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters);
                    else $YTPlayer.YTPApplyFilters();
                    $YTPlayer.YTPEnableFilters();
                    let YTPready = jQuery.Event("YTPReady");
                    YTPready.time = YTPlayer.currentTime;
                    $YTPlayer.trigger(YTPready);
                    YTPlayer.state = 2;
                    if (!YTPlayer.opt.mute) {
                        if (YTPlayer.opt.autoPlay) {
                            console.debug("We muted the audio to make the video 'auto-play' according with the latest vendor policy. The audio will unmute at the first user interaction with the page");
                            YTPlayer.player.mute();
                            YTPlayer.forcedMuted = true;
                            /**
							 * If autoPlay is set to true and mute is set to false
							 * Browsers will not auto-play
							 * Start playing audio after the first click
							 */ jQuery(document).on("mousedown.YTPstartAudio", function() {
                                if (YTPlayer.forcedMuted) {
                                    console.debug("AAAAAAA");
                                    YTPlayer.player.unMute();
                                    YTPlayer.forcedMuted = false;
                                    jQuery(document).off("mousedown.YTPstartAudio");
                                }
                            });
                            jQuery(window).on("scroll", function() {
                                console.debug("AAAAA");
                            });
                        } else YTPlayer.player.unMute();
                    } else $YTPlayer.YTPMute();
                    if (typeof _gaq != "undefined" && eval(YTPlayer.opt.gaTrack)) _gaq.push([
                        "_trackEvent",
                        "YTPlayer",
                        "Play",
                        YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()
                    ]);
                    else if (typeof ga != "undefined" && eval(YTPlayer.opt.gaTrack)) ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                    if (YTPlayer.opt.autoPlay) {
                        let YTPStart = jQuery.Event("YTPStart");
                        YTPStart.time = YTPlayer.currentTime;
                        jQuery(YTPlayer).trigger(YTPStart);
                        YTPlayer.isStarting = false;
                        /* Fix for Safari freeze */ if (jQuery.mbBrowser.os.name === "mac" && jQuery.mbBrowser.safari) jQuery("body").one("mousedown.YTPstart", function() {
                            $YTPlayer.YTPPlay();
                        });
                        $YTPlayer.YTPPlay();
                        console.timeEnd(YTPTimerLabels.startPlaying);
                    } else {
                        YTPlayer.preventTrigger = true;
                        $YTPlayer.YTPPause();
                        if (YTPlayer.start_from_last) YTPlayer.player.seekTo(startAt, true);
                        setTimeout(function() {
                            YTPlayer.preventTrigger = true;
                            $YTPlayer.YTPPause();
                            if (!YTPlayer.isPlayer) {
                                if (!YTPlayer.opt.coverImage) {
                                    jQuery(YTPlayer.playerEl).CSSAnimate({
                                        opacity: 1
                                    }, YTPlayer.opt.fadeOnStartTime);
                                    YTPlayer.wrapper.CSSAnimate({
                                        opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                                    }, YTPlayer.opt.fadeOnStartTime);
                                } else {
                                    YTPlayer.wrapper.css({
                                        opacity: 0
                                    });
                                    setTimeout(function() {
                                        $YTPlayer.changeCoverImage();
                                    }, YTPlayer.opt.fadeOnStartTime);
                                }
                            }
                            YTPlayer.isStarting = false;
                        }, 500);
                        if (YTPlayer.controlBar.length) YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                    }
                    if (YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length) {
                        YTPlayer.loading.html("Ready");
                        setTimeout(function() {
                            YTPlayer.loading.fadeOut();
                        }, 100);
                    }
                    if (YTPlayer.controlBar && YTPlayer.controlBar.length) YTPlayer.controlBar.slideDown(1000);
                }
                if (jQuery.mbBrowser.os.name === "mac" && jQuery.mbBrowser.safari) {
                    YTPlayer.player.playVideo();
                    if (startAt >= 0) YTPlayer.player.seekTo(startAt, true);
                }
            }, 100);
            return $YTPlayer;
        },
        /* TIME METHODS -------------------------------------------------------------------------------------------*/ /**
		 * getTime
		 * @returns {string} time
		 */ getTime: function() {
            let YTPlayer1 = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer1.currentTime);
        },
        /**
		 * getTotalTime
		 * @returns {string} total time
		 */ getTotalTime: function() {
            let YTPlayer1 = this.get(0);
            return jQuery.mbYTPlayer.formatTime(YTPlayer1.totalTime);
        },
        /**
		 * formatTime
		 * @param s
		 * @returns {string}
		 */ formatTime: function(s1) {
            let min1 = Math.floor(s1 / 60);
            let sec1 = Math.floor(s1 - 60 * min1);
            return (min1 <= 9 ? "0" + min1 : min1) + " : " + (sec1 <= 9 ? "0" + sec1 : sec1);
        },
        /* PLAYER POSITION AND SIZE OPTIMIZATION-------------------------------------------------------------------------------------------*/ /**
		 * setAnchor
		 * @param anchor
		 */ setAnchor: function(anchor1) {
            let $YTplayer1 = this;
            $YTplayer1.optimizeDisplay(anchor1);
        },
        /**
		 * getAnchor
		 */ getAnchor: function() {
            let YTPlayer1 = this.get(0);
            return YTPlayer1.opt.anchor;
        },
        /**
		 * setAbundance
		 * @param val
		 * @param updateOptions
		 * @returns {jQuery.mbYTPlayer}
		 */ setAbundance: function(val1, updateOptions1) {
            let YTPlayer1 = this.get(0);
            let $YTPlayer1 = this;
            if (updateOptions1) YTPlayer1.opt.abundance = val1;
            $YTPlayer1.optimizeDisplay(YTPlayer1.opt.anchor, val1);
            return $YTPlayer1;
        },
        /**
		 * getAbundance
		 * @returns {*}
		 */ getAbundance: function() {
            let YTPlayer1 = this.get(0);
            return YTPlayer1.opt.abundance;
        },
        /**
		 * setOption
		 * @param opt
		 * @param val
		 * @returns {jQuery.mbYTPlayer}
		 */ setOption: function(opt1, val1) {
            let YTPlayer1 = this.get(0);
            let $YTPlayer1 = this;
            YTPlayer1.opt[opt1] = val1;
            return $YTPlayer1;
        }
    };
    /**
	 * optimizeDisplay
	 * @param anchor
	 * @param abundanceX
	 */ jQuery.fn.optimizeDisplay = function(anchor, abundanceX) {
        let YTPlayer = this.get(0);
        let vid = {};
        let el = YTPlayer.wrapper;
        let iframe = jQuery(YTPlayer.playerEl);
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor;
        // console.debug(YTPlayer.opt.anchor);
        YTPlayer.opt.anchor = typeof YTPlayer.opt.anchor != "undefined " ? YTPlayer.opt.anchor : "center,center";
        let YTPAlign = YTPlayer.opt.anchor.split(",");
        let ab = abundanceX ? abundanceX : YTPlayer.opt.abundance;
        if (YTPlayer.opt.optimizeDisplay) {
            let abundance = el.height() * ab;
            let win = {};
            win.width = el.outerWidth();
            win.height = el.outerHeight() + abundance;
            YTPlayer.opt.ratio = YTPlayer.opt.ratio === "auto" ? 16 / 9 : YTPlayer.opt.ratio;
            YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
            vid.width = win.width + abundance;
            vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio);
            vid.marginTop = Math.ceil(-((vid.height - win.height + abundance) / 2));
            vid.marginLeft = -(abundance / 2);
            let lowest = vid.height < win.height;
            if (lowest) {
                vid.height = win.height + abundance;
                vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio);
                vid.marginTop = -(abundance / 2);
                vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2));
            }
            for(let a in YTPAlign)if (YTPAlign.hasOwnProperty(a)) {
                let al = YTPAlign[a].replace(/ /g, "");
                switch(al){
                    case "top":
                        vid.marginTop = -abundance;
                        break;
                    case "bottom":
                        vid.marginTop = Math.ceil(-(vid.height - win.height) - abundance / 2);
                        break;
                    case "left":
                        vid.marginLeft = -abundance;
                        break;
                    case "right":
                        vid.marginLeft = Math.ceil(-(vid.width - win.width) + abundance / 2);
                        break;
                }
            }
        } else {
            vid.width = "100%";
            vid.height = "100%";
            vid.marginTop = 0;
            vid.marginLeft = 0;
        }
        iframe.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        });
    };
    /* UTILITIES -----------------------------------------------------------------------------------------------------------------------*/ /**
	 * shuffle
	 * @param arr
	 * @returns {Array|string|Blob|*}
	 *
	 */ jQuery.shuffle = function(arr1) {
        let newArray1 = arr1.slice();
        let len1 = newArray1.length;
        let i1 = len1;
        while(i1--){
            let p1 = parseInt(Math.random() * len1);
            let t1 = newArray1[i1];
            newArray1[i1] = newArray1[p1];
            newArray1[p1] = t1;
        }
        return newArray1;
    };
    /**
	 * Unselectable
	 * @returns {*}
	 */ jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on");
        });
    };
    /* EXTERNAL METHODS -----------------------------------------------------------------------------------------------------------------------*/ jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer;
    jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState;
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer;
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID;
    jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID;
    jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo;
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy;
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play;
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay;
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop;
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause;
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo;
    jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate;
    jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate;
    jQuery.fn.changeCoverImage = jQuery.mbYTPlayer.changeCoverImage;
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist;
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext;
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev;
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex;
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute;
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute;
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume;
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume;
    jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume;
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData;
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen;
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops;
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress;
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality;
    jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality;
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter;
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters;
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter;
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters;
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter;
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters;
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters;
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters;
    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime;
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime;
    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask;
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask;
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask;
    jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance;
    jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance;
    jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor;
    jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor;
    jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption;
})(jQuery, ytp);

},{}]},["aj5i2","9ivDg"], "9ivDg", "parcelRequire4ecb")

//# sourceMappingURL=index.01b0b8b4.js.map
