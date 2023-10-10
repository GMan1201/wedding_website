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
})({"iGVxF":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5f0eec1d04d3fcf9";
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

},{}],"5qs1A":[function(require,module,exports) {
/*jquery.mb.YTPlayer 04-12-2020
 _ jquery.mb.components 
 _ email: matbicoc@gmail.com 
 _ Copyright (c) 2001-2020. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */ var ytp = ytp || {};
let YTPRndSuffix = (new Date).getTime(), YTPTimerLabels = {
    init: "YTPlayerInit_" + YTPRndSuffix,
    startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix
};
function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"));
}
let getYTPVideoID = function(e1) {
    let r1, t1;
    return e1.indexOf("youtu.be") > 0 || e1.indexOf("youtube.com/embed") > 0 ? r1 = (t1 = (r1 = e1.substr(e1.lastIndexOf("/") + 1, e1.length)).indexOf("?list=") > 0 ? r1.substr(r1.lastIndexOf("="), r1.length) : null) ? r1.substr(0, r1.lastIndexOf("?")) : r1 : e1.indexOf("http") > -1 ? (r1 = e1.match(/[\\?&]v=([^&#]*)/)[1], t1 = e1.indexOf("list=") > 0 ? e1.match(/[\\?&]list=([^&#]*)/)[1] : null) : t1 = (r1 = e1.length > 15 ? null : e1) ? null : e1, {
        videoID: r1,
        playlistID: t1
    };
};
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        let e1 = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [
            parseInt(e1[1], 10),
            parseInt(e1[2], 10),
            parseInt(e1[3] || 0, 10)
        ];
    }
}
!function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.3.8",
        build: "7561",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            videoURL: null,
            containment: "body",
            ratio: "auto",
            fadeOnStartTime: 1e3,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            delayAtStart: 1e3,
            coverImage: !1,
            loop: !0,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "hd1080",
            vol: 50,
            mute: !1,
            showControls: !0,
            anchor: "center,center",
            showAnnotations: !1,
            cc_load_policy: !1,
            showYTLogo: !0,
            useOnMobile: !0,
            playOnlyIfVisible: !1,
            onScreenPercentage: 30,
            goFullScreenOnPlay: !1,
            stopMovieOnBlur: !0,
            realFullscreen: !0,
            optimizeDisplay: !0,
            abundance: .3,
            gaTrack: !0,
            remember_last_time: !1,
            addFilters: !1,
            useNoCookie: !0,
            onReady: function(e1) {},
            onError: function(e1, r1) {},
            onEnd: function() {}
        },
        controls: {
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
        defaultFilters: {
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
        buildPlayer: function(options) {
            if (ytp.YTAPIReady || void 0 !== window.YT) setTimeout(function() {
                jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0;
            }, 100);
            else {
                jQuery("#YTAPI").remove();
                let e = jQuery("<script>").attr({
                    src: "https://www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    id: "YTAPI"
                });
                jQuery("head").prepend(e);
            }
            function isIframe() {
                let e1 = !1;
                try {
                    self.location.href !== top.location.href && (e1 = !0);
                } catch (r1) {
                    e1 = !0;
                }
                return e1;
            }
            return this.each(function() {
                let YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide(), YTPlayer.loop = 0, YTPlayer.state = 0, YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters), YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                let property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "object" != typeof property && (property = {}), YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property), YTPRndSuffix = getYTPVideoID(YTPlayer.opt.videoURL).videoID, YTPTimerLabels = {
                    init: "YTPlayerInit_" + YTPRndSuffix,
                    startPlaying: "YTPlayerStartPlay_" + YTPRndSuffix
                }, console.time(YTPTimerLabels.init), console.time(YTPTimerLabels.startPlaying), YTPlayer.opt.elementId = YTPlayer.id, 0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1, YTPlayer.opt.mute = !0), YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
                let fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                YTPlayer.opt.realFullscreen = !(isIframe() || !fullScreenAvailable) && YTPlayer.opt.realFullscreen, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3", YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0", YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage, YTPlayer.opt.quality = "hd1080", jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1), YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio);
                let origContainmentBackground = YTPlayer.opt.containment.css("background-image");
                origContainmentBackground = "none" === origContainmentBackground ? null : origContainmentBackground, YTPlayer.orig_containment_background = origContainmentBackground, $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()), YTPlayer.playerID = "iframe_" + YTPlayer.id, YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID, YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : !!$YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                let start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)), YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), YTPlayer.isBackground && ytp.backgroundIsInited) return;
                if (YTPlayer.isPlayer && $YTPlayer.show(), YTPlayer.overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay"), $YTPlayer.changeCoverImage(), YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
                    position: "absolute",
                    zIndex: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    opacity: 0
                }).addClass("mbYTP_wrapper"), YTPlayer.isPlayer) {
                    let e = jQuery.browser.mobile ? "inlinePlayButtonMobile" : "inlinePlayButton";
                    YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.append(YTPlayer.inlinePlayButton), YTPlayer.inlinePlayButton.on("click", function(e1) {
                        $YTPlayer.YTPPlay(), YTPlayer.inlinePlayButton.hide(), YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen(), e1.stopPropagation();
                    }), YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(), YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay(), YTPlayer.opt.goFullScreenOnPlay && $YTPlayer.YTPFullscreen();
                    }).css({
                        cursor: "pointer"
                    });
                }
                let playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                if (playerBox.css({
                    position: "absolute",
                    zIndex: 0,
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    opacity: 1
                }), YTPlayer.wrapper.append(playerBox), playerBox.after(YTPlayer.overlay), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
                    position: "relative",
                    maxWidth: YTPlayer.opt.containment.css("width")
                }), YTPlayer.opt.containment.css({
                    position: "relative",
                    paddingBottom: "56.25%",
                    overflow: "hidden",
                    height: 0
                }), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)), YTPlayer.opt.containment.children().not("script, style").each(function() {
                    "static" === jQuery(this).css("position") && jQuery(this).css("position", "relative");
                }), YTPlayer.isBackground ? (jQuery("body").css({
                    boxSizing: "border-box"
                }), YTPlayer.wrapper.css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 0
                })) : "static" === YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({
                    position: "relative"
                }), $YTPlayer.show()), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function() {
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible");
                }).on("mouseleave", function() {
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible");
                }), jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile) return YTPlayer.opt.coverImage && (YTPlayer.wrapper.css({
                    backgroundImage: "url(" + YTPlayer.opt.coverImage + ")",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: 1
                }), YTPlayer.wrapper.css({
                    opacity: 1
                })), $YTPlayer;
                jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function() {
                    YTPlayer.player.playVideo();
                }), jQuery(document).one("YTAPIReady", function() {
                    $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id), ytp.YTAPIReady = !0;
                }), YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage), $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function() {
                    let e1 = this, r1 = jQuery(e1);
                    e1.isBackground && ytp.backgroundIsInited || e1.isInit || (e1.isBackground && (ytp.backgroundIsInited = !0), e1.opt.autoPlay = void 0 === e1.opt.autoPlay ? !!e1.isBackground : e1.opt.autoPlay, e1.opt.vol = e1.opt.vol ? e1.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(e1), jQuery(e1).on("YTPChanged", function(t1) {
                        if (e1.isInit) return;
                        e1.isInit = !0;
                        let a1 = {
                            modestbranding: 1,
                            autoplay: 0,
                            controls: 0,
                            showinfo: 0,
                            rel: 0,
                            enablejsapi: 1,
                            version: 3,
                            playerapiid: e1.playerID,
                            origin: "*",
                            allowfullscreen: !0,
                            wmode: "transparent",
                            iv_load_policy: e1.opt.showAnnotations,
                            cc_load_policy: e1.opt.cc_load_policy,
                            playsinline: jQuery.mbBrowser.mobile && !e1.isPlayer ? 1 : 0,
                            html5: document.createElement("video").canPlayType ? 1 : 0
                        };
                        new YT.Player(e1.playerID, {
                            host: e1.opt.useNoCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com",
                            playerVars: a1,
                            events: {
                                onReady: function(t1) {
                                    e1.player = t1.target, e1.player.loadVideoById({
                                        videoId: e1.videoID.toString(),
                                        suggestedQuality: e1.opt.quality
                                    }), r1.trigger("YTPlayerIsReady_" + e1.id);
                                },
                                onStateChange: function(r1) {
                                    if ("function" != typeof r1.target.getPlayerState) return;
                                    let t1, a1 = r1.target.getPlayerState();
                                    if (e1.preventTrigger || e1.isStarting) return void (e1.preventTrigger = !1);
                                    switch(e1.state = a1, r1.data === YT.PlayerState.PLAYING && r1.target.setPlaybackQuality(e1.opt.quality), a1){
                                        case -1:
                                            t1 = "YTPUnstarted";
                                            break;
                                        case 0:
                                            t1 = "YTPRealEnd";
                                            break;
                                        case 1:
                                            t1 = "YTPPlay", e1.controlBar.length && e1.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e1.isPlayer && e1.inlinePlayButton.hide(), jQuery(document).off("mousedown.YTPstart");
                                            break;
                                        case 2:
                                            t1 = "YTPPause", e1.controlBar.length && e1.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e1.isPlayer && e1.inlinePlayButton.show();
                                            break;
                                        case 3:
                                            e1.player.setPlaybackQuality(e1.opt.quality), t1 = "YTPBuffering", e1.controlBar.length && e1.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                            break;
                                        case 5:
                                            t1 = "YTPCued";
                                    }
                                    let o1 = jQuery.Event(t1);
                                    o1.time = e1.currentTime, jQuery(e1).trigger(o1);
                                },
                                onPlaybackQualityChange: function(r1) {
                                    let t1 = r1.target.getPlaybackQuality(), a1 = jQuery.Event("YTPQualityChange");
                                    a1.quality = t1, jQuery(e1).trigger(a1);
                                },
                                onError: function(t1) {
                                    switch("function" == typeof e1.opt.onError && e1.opt.onError(r1, t1), console.debug("error:", t1), t1.data){
                                        case 2:
                                            console.error("video ID:: " + e1.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                            break;
                                        case 5:
                                            console.error("video ID:: " + e1.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                            break;
                                        case 100:
                                            console.error("video ID:: " + e1.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                            break;
                                        case 101:
                                        case 150:
                                            console.error("video ID:: " + e1.videoID + ": The video doesn't exist or The owner does not allow it to be played in embedded players.");
                                    }
                                    e1.isList && jQuery(e1).YTPPlayNext();
                                }
                            }
                        }), r1.on("YTPlayerIsReady_" + e1.id, function() {
                            if (e1.isReady) return this;
                            e1.playerEl = e1.player.getIframe(), jQuery(e1.playerEl).unselectable(), r1.optimizeDisplay(), jQuery(window).off("resize.YTP_" + e1.id).on("resize.YTP_" + e1.id, function() {
                                r1.optimizeDisplay();
                            }), jQuery(window).off("orientationchange.YTP_" + e1.id).on("orientationchange.YTP_" + e1.id, function() {
                                r1.optimizeDisplay();
                            }), e1.opt.remember_last_time && jQuery(window).on("unload.YTP_" + e1.id, function() {
                                let r1 = e1.player.getCurrentTime();
                                jQuery.mbCookie.set("YTPlayer_start_from" + e1.videoID, r1, 0);
                            }), r1.YTPCheckForState();
                        });
                    }));
                }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer), console.timeEnd(YTPTimerLabels.init), setTimeout(function() {
                    ytp.YTAPIReady || "object" != typeof window.YT || (jQuery(document).trigger("YTAPIReady"), ytp.YTAPIReady = !0, console.error("YTPlayer: More then a call to the YT API has been detected"));
                }, YTPlayer.opt.delayAtStart);
            });
        },
        isOnScreen: function(e1, r1) {
            r1 = r1 || 10;
            let t1 = e1.wrapper, a1 = jQuery(window).scrollTop(), o1 = a1 + jQuery(window).height(), i1 = t1.height() * r1 / 100, n1 = t1.offset().top + i1;
            return t1.offset().top + (t1.height() - i1) <= o1 && n1 >= a1;
        },
        getDataFromAPI: function(e1) {
            e1.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e1.videoID), e1.videoData ? (setTimeout(function() {
                e1.dataReceived = !0;
                let r1 = jQuery.Event("YTPChanged");
                r1.time = e1.currentTime, r1.videoId = e1.videoID, r1.opt = e1.opt, jQuery(e1).trigger(r1);
                let t1 = jQuery.Event("YTPData");
                t1.prop = {};
                for(let r1 in e1.videoData)e1.videoData.hasOwnProperty(r1) && (t1.prop[r1] = e1.videoData[r1]);
                jQuery(e1).trigger(t1);
            }, e1.opt.fadeOnStartTime), e1.hasData = !0) : jQuery.mbYTPlayer.apiKey ? jQuery.getJSON("https://www.googleapis.com/youtube/v3/videos?id=" + e1.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(r1) {
                e1.dataReceived = !0;
                let t1 = jQuery.Event("YTPChanged");
                t1.time = e1.currentTime, t1.videoId = e1.videoID, jQuery(e1).trigger(t1), r1.items[0] ? (!function(r1) {
                    e1.videoData = {}, e1.videoData.id = e1.videoID, e1.videoData.channelTitle = r1.channelTitle, e1.videoData.title = r1.title, e1.videoData.description = r1.description.length < 400 ? r1.description : r1.description.substring(0, 400) + " ...", e1.videoData.thumb_max = r1.thumbnails.maxres ? r1.thumbnails.maxres.url : null, e1.videoData.thumb_high = r1.thumbnails.high ? r1.thumbnails.high.url : null, e1.videoData.thumb_medium = r1.thumbnails.medium ? r1.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e1.videoID, e1.videoData);
                }(r1.items[0].snippet), e1.hasData = !0) : (e1.videoData = {}, e1.hasData = !1);
                let a1 = jQuery.Event("YTPData");
                a1.prop = {};
                for(let r1 in e1.videoData)a1.prop[r1] = e1.videoData[r1];
                jQuery(e1).trigger(a1);
            }).fail(function(r1) {
                console.error("YT data error:: ", r1), e1.hasData = !1;
                let t1 = jQuery.Event("YTPChanged");
                t1.time = e1.currentTime, t1.videoId = e1.videoID, jQuery(e1).trigger(t1);
            }) : (setTimeout(function() {
                let r1 = jQuery.Event("YTPChanged");
                r1.time = e1.currentTime, r1.videoId = e1.videoID, jQuery(e1).trigger(r1);
            }, 10), e1.videoData = null), e1.opt.ratio = "auto" == e1.opt.ratio ? 16 / 9 : e1.opt.ratio, e1.isPlayer && !e1.opt.autoPlay && (e1.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e1).append(e1.loading), e1.loading.fadeIn());
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove();
        },
        getVideoData: function() {
            return this.get(0).videoData;
        },
        getVideoID: function() {
            return this.get(0).videoID || !1;
        },
        getPlaylistID: function() {
            return this.get(0).playlistID || !1;
        },
        setVideoQuality: function(e1) {
            let r1 = this.get(0), t1 = r1.player.getCurrentTime();
            return jQuery(r1).YTPPause(), r1.opt.quality = e1, r1.player.setPlaybackQuality(e1), r1.player.seekTo(t1), jQuery(r1).YTPPlay(), this;
        },
        getVideoQuality: function() {
            return this.get(0).player.getPlaybackQuality();
        },
        playlist: function(e1, r1, t1) {
            let a1 = this.get(0);
            return a1.isList = !0, r1 && (e1 = jQuery.shuffle(e1)), a1.videoID || (a1.videos = e1, a1.videoCounter = 1, a1.videoLength = e1.length, jQuery(a1).data("property", e1[0]), jQuery(a1).YTPlayer()), "function" == typeof t1 && jQuery(a1).on("YTPChanged", function() {
                t1(a1);
            }), jQuery(a1).on("YTPEnd", function() {
                jQuery(a1).YTPPlayNext();
            }), this;
        },
        playNext: function() {
            let e1 = this.get(0);
            return e1.videoCounter++, e1.videoCounter > e1.videoLength && (e1.videoCounter = 1), jQuery(e1).YTPPlayIndex(e1.videoCounter), this;
        },
        playPrev: function() {
            let e1 = this.get(0);
            return e1.videoCounter--, e1.videoCounter <= 0 && (e1.videoCounter = e1.videoLength), jQuery(e1).YTPPlayIndex(e1.videoCounter), this;
        },
        playIndex: function(e1) {
            let r1 = this.get(0);
            r1.checkForStartAt && (clearInterval(r1.checkForStartAt), clearInterval(r1.getState)), r1.videoCounter = e1, r1.videoCounter >= r1.videoLength && (r1.videoCounter = r1.videoLength);
            let t1 = r1.videos[r1.videoCounter - 1];
            return jQuery(r1).YTPChangeVideo(t1), this;
        },
        changeVideo: function(e1) {
            let r1 = this, t1 = r1.get(0);
            t1.opt.startAt = 0, t1.opt.stopAt = 0, t1.opt.mask = !1, t1.opt.mute = !0, t1.opt.autoPlay = !0, t1.opt.addFilters = !1, t1.opt.coverImage = !1, t1.hasData = !1, t1.hasChanged = !0, t1.player.loopTime = void 0, e1 && jQuery.extend(t1.opt, e1), t1.videoID = getYTPVideoID(t1.opt.videoURL).videoID, t1.opt.loop && "boolean" == typeof t1.opt.loop && (t1.opt.loop = 9999), t1.wrapper.css({
                background: "none"
            }), jQuery(t1.playerEl).CSSAnimate({
                opacity: 0
            }, t1.opt.fadeOnStartTime, function() {
                jQuery.mbYTPlayer.getDataFromAPI(t1), r1.YTPGetPlayer().loadVideoById({
                    videoId: t1.videoID,
                    suggestedQuality: t1.opt.quality
                }), r1.YTPPause(), r1.optimizeDisplay(), t1.checkForStartAt && (clearInterval(t1.checkForStartAt), clearInterval(t1.getState)), r1.YTPCheckForState();
            });
            let a1 = jQuery.Event("YTPChangeVideo");
            return a1.time = t1.currentTime, jQuery(t1).trigger(a1), jQuery.mbYTPlayer.applyMask(t1), this;
        },
        getPlayer: function() {
            let e1 = this.get(0);
            return e1.isReady ? e1.player : null;
        },
        playerDestroy: function() {
            let e1 = this.get(0);
            return e1.isReady ? (ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e1.isInit = !1, e1.videoID = null, e1.isReady = !1, e1.wrapper.remove(), jQuery("#controlBar_" + e1.id).remove(), clearInterval(e1.checkForStartAt), clearInterval(e1.getState), this) : this;
        },
        fullscreen: function(real) {
            let YTPlayer = this.get(0);
            void 0 === real && (real = eval(YTPlayer.opt.realFullscreen));
            let controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"), videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                let e = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(e).on(e, function() {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? jQuery(YTPlayer).trigger("YTPFullScreenStart") : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"));
                });
            }
            if (YTPlayer.isAlone) jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1;
            else {
                function hideMouse() {
                    YTPlayer.overlay.css({
                        cursor: "none"
                    });
                }
                jQuery(document).on("mousemove.YTPlayer", function(e1) {
                    YTPlayer.overlay.css({
                        cursor: "auto"
                    }), clearTimeout(YTPlayer.hideCursor), jQuery(e1.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3));
                }), hideMouse(), real ? (videoWrapper.css({
                    opacity: 0
                }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
                    videoWrapper.CSSAnimate({
                        opacity: 1
                    }, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0);
                }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
                    zIndex: 1e4
                }).CSSAnimate({
                    opacity: 1
                }, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0;
            }
            function RunPrefixMethod(e1, r1) {
                let t1, a1, o1 = [
                    "webkit",
                    "moz",
                    "ms",
                    "o",
                    ""
                ], i1 = 0;
                for(; i1 < o1.length && !e1[t1];){
                    if (t1 = r1, "" == o1[i1] && (t1 = t1.substr(0, 1).toLowerCase() + t1.substr(1)), "undefined" != (a1 = typeof e1[t1 = o1[i1] + t1])) return o1 = [
                        o1[i1]
                    ], "function" == a1 ? e1[t1]() : e1[t1];
                    i1++;
                }
            }
            function launchFullscreen(e1) {
                RunPrefixMethod(e1, "RequestFullScreen");
            }
            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen");
            }
            return this;
        },
        toggleLoops: function() {
            let e1 = this.get(0), r1 = e1.opt;
            return 1 == r1.loop ? r1.loop = 0 : (r1.startAt ? e1.player.seekTo(r1.startAt) : e1.player.playVideo(), r1.loop = 1), this;
        },
        play: function() {
            let e1 = this.get(0), r1 = jQuery(e1);
            return e1.isReady ? (setTimeout(function() {
                r1.YTPSetAbundance(e1.opt.abundance);
            }, 300), e1.player.playVideo(), jQuery(e1.playerEl).css({
                opacity: 1
            }), e1.wrapper.css({
                backgroundImage: "none"
            }), e1.wrapper.CSSAnimate({
                opacity: e1.isAlone ? 1 : e1.opt.opacity
            }, e1.opt.fadeOnStartTime), jQuery("#controlBar_" + e1.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause), e1.state = 1, this) : this;
        },
        togglePlay: function(e1) {
            let r1 = this.get(0);
            return r1.isReady ? (1 == r1.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e1 && e1(r1.state), this) : this;
        },
        stop: function() {
            let e1 = this.get(0);
            return e1.isReady ? (jQuery("#controlBar_" + e1.id).find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), e1.player.stopVideo(), this) : this;
        },
        pause: function() {
            let e1 = this.get(0);
            return e1.isReady ? (e1.opt.abundance < .2 && this.YTPSetAbundance(.2), e1.player.pauseVideo(), e1.state = 2, this) : this;
        },
        seekTo: function(e1) {
            let r1 = this.get(0);
            return r1.isReady ? (r1.player.seekTo(e1, !0), this) : this;
        },
        getPlaybackRate: function() {
            let e1 = this.get(0);
            return e1.isReady ? e1.player.getPlaybackRate() : this;
        },
        setPlaybackRate: function(e1) {
            let r1 = this.get(0);
            return r1.isReady ? (r1.player.setPlaybackRate(e1), this) : this;
        },
        setVolume: function(e1) {
            let r1 = this.get(0);
            return r1.isReady ? (r1.opt.vol = e1, this.YTPUnmute(), r1.player.setVolume(r1.opt.vol), r1.volumeBar && r1.volumeBar.length && r1.volumeBar.updateSliderVal(e1), this) : this;
        },
        getVolume: function() {
            let e1 = this.get(0);
            return e1.isReady ? e1.player.getVolume() : this;
        },
        toggleVolume: function() {
            let e1 = this.get(0);
            return e1.isReady ? (e1.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(e1.opt.vol), this.YTPUnmute()) : this.YTPMute(), this) : this;
        },
        mute: function() {
            let e1 = this.get(0);
            if (!e1.isReady) return this;
            if (e1.isMute) return this;
            e1.player.mute(), e1.isMute = !0, e1.player.setVolume(0), e1.volumeBar && e1.volumeBar.length && e1.volumeBar.width() > 10 && e1.volumeBar.updateSliderVal(0), jQuery("#controlBar_" + e1.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute), jQuery(e1).addClass("isMuted"), e1.volumeBar && e1.volumeBar.length && e1.volumeBar.addClass("muted");
            let r1 = jQuery.Event("YTPMuted");
            return r1.time = e1.currentTime, e1.preventTrigger || jQuery(e1).trigger(r1), this;
        },
        unmute: function() {
            let e1 = this.get(0);
            if (!e1.isReady) return this;
            if (!e1.isMute) return this;
            e1.player.unMute(), e1.isMute = !1, jQuery(e1).YTPSetVolume(e1.opt.vol), e1.volumeBar && e1.volumeBar.length && e1.volumeBar.updateSliderVal(e1.opt.vol > 10 ? e1.opt.vol : 10), jQuery("#controlBar_" + e1.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute), jQuery(e1).removeClass("isMuted"), e1.volumeBar && e1.volumeBar.length && e1.volumeBar.removeClass("muted");
            let r1 = jQuery.Event("YTPUnmuted");
            return r1.time = e1.currentTime, e1.preventTrigger || jQuery(e1).trigger(r1), this;
        },
        applyFilter: function(e1, r1) {
            let t1 = this.get(0);
            if (!t1.isReady) return this;
            t1.filters[e1].value = r1, t1.filtersEnabled && this.YTPEnableFilters();
        },
        applyFilters: function(e1) {
            let r1 = this, t1 = r1.get(0);
            if (!t1.isReady) return jQuery(t1).on("YTPReady", function() {
                r1.YTPApplyFilters(e1);
            }), this;
            for(let t1 in e1)r1.YTPApplyFilter(t1, e1[t1]);
            r1.trigger("YTPFiltersApplied");
        },
        toggleFilter: function(e1, r1) {
            let t1 = this.get(0);
            return t1.isReady ? (t1.filters[e1].value ? t1.filters[e1].value = 0 : t1.filters[e1].value = r1, t1.filtersEnabled && jQuery(t1).YTPEnableFilters(), this) : this;
        },
        toggleFilters: function(e1) {
            let r1 = this.get(0);
            return r1.isReady ? (r1.filtersEnabled ? (jQuery(r1).trigger("YTPDisableFilters"), jQuery(r1).YTPDisableFilters()) : (jQuery(r1).YTPEnableFilters(), jQuery(r1).trigger("YTPEnableFilters")), "function" == typeof e1 && e1(r1.filtersEnabled), this) : this;
        },
        disableFilters: function() {
            let e1 = this.get(0);
            if (!e1.isReady) return this;
            let r1 = jQuery(e1.playerEl);
            return r1.css("-webkit-filter", ""), r1.css("filter", ""), e1.filtersEnabled = !1, this;
        },
        enableFilters: function() {
            let e1 = this.get(0);
            if (!e1.isReady) return this;
            let r1 = jQuery(e1.playerEl), t1 = "";
            for(let r1 in e1.filters)e1.filters[r1].value && (t1 += r1.replace("_", "-") + "(" + e1.filters[r1].value + e1.filters[r1].unit + ") ");
            return r1.css("-webkit-filter", t1), r1.css("filter", t1), e1.filtersEnabled = !0, this;
        },
        removeFilter: function(e1, r1) {
            let t1 = this, a1 = t1.get(0);
            if (!a1.isReady) return this;
            if ("function" == typeof e1 && (r1 = e1, e1 = null), e1) t1.YTPApplyFilter(e1, 0), "function" == typeof r1 && r1(e1);
            else {
                for(let e1 in a1.filters)a1.filters.hasOwnProperty(e1) && (t1.YTPApplyFilter(e1, 0), "function" == typeof r1 && r1(e1));
                a1.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters);
            }
            let o1 = jQuery.Event("YTPFiltersApplied");
            return t1.trigger(o1), this;
        },
        getFilters: function() {
            let e1 = this.get(0);
            return e1.isReady ? e1.filters : this;
        },
        addMask: function(e1) {
            let r1 = this.get(0);
            e1 || (e1 = r1.actualMask);
            let t1 = jQuery("<img/>").attr("src", e1).on("load", function() {
                r1.overlay.CSSAnimate({
                    opacity: 0
                }, r1.opt.fadeOnStartTime, function() {
                    r1.hasMask = !0, t1.remove(), r1.overlay.css({
                        backgroundImage: "url(" + e1 + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), r1.overlay.CSSAnimate({
                        opacity: 1
                    }, r1.opt.fadeOnStartTime);
                });
            });
            return this;
        },
        removeMask: function() {
            let e1 = this.get(0);
            return e1.overlay.CSSAnimate({
                opacity: 0
            }, e1.opt.fadeOnStartTime, function() {
                e1.hasMask = !1, e1.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), e1.overlay.CSSAnimate({
                    opacity: 1
                }, e1.opt.fadeOnStartTime);
            }), this;
        },
        applyMask: function(e1) {
            let r1 = jQuery(e1);
            if (r1.off("YTPTime.mask"), e1.opt.mask) {
                if ("string" == typeof e1.opt.mask) r1.YTPAddMask(e1.opt.mask), e1.actualMask = e1.opt.mask;
                else if ("object" == typeof e1.opt.mask) {
                    for(let r1 in e1.opt.mask)e1.opt.mask[r1] && (img = jQuery("<img/>").attr("src", e1.opt.mask[r1]));
                    e1.opt.mask[0] && r1.YTPAddMask(e1.opt.mask[0]), r1.on("YTPTime.mask", function(t1) {
                        for(let a1 in e1.opt.mask)t1.time == a1 && (e1.opt.mask[a1] ? (r1.YTPAddMask(e1.opt.mask[a1]), e1.actualMask = e1.opt.mask[a1]) : r1.YTPRemoveMask());
                    });
                }
            }
        },
        toggleMask: function() {
            let e1 = this.get(0), r1 = jQuery(e1);
            return e1.hasMask ? r1.YTPRemoveMask() : r1.YTPAddMask(), this;
        },
        manageProgress: function() {
            let e1 = this.get(0), r1 = jQuery("#controlBar_" + e1.id), t1 = r1.find(".mb_YTPProgress"), a1 = r1.find(".mb_YTPLoaded"), o1 = r1.find(".mb_YTPseekbar"), i1 = t1.outerWidth(), n1 = Math.floor(e1.player.getCurrentTime()), l1 = Math.floor(e1.player.getDuration()), s1 = n1 * i1 / l1, u1 = 100 * e1.player.getVideoLoadedFraction();
            return a1.css({
                left: 0,
                width: u1 + "%"
            }), o1.css({
                left: 0,
                width: s1
            }), {
                totalTime: l1,
                currentTime: n1
            };
        },
        buildControls: function(YTPlayer) {
            if (jQuery("#controlBar_" + YTPlayer.id).remove(), !YTPlayer.opt.showControls) return void (YTPlayer.controlBar = !1);
            if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl, jQuery("#controlBar_" + YTPlayer.id).length) return;
            YTPlayer.controlBar = jQuery("<div/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                whiteSpace: "noWrap",
                position: YTPlayer.isBackground ? "fixed" : "absolute",
                zIndex: YTPlayer.isBackground ? 1e4 : 1e3
            }).hide().on("click", function(e1) {
                e1.stopPropagation();
            });
            let buttonBar = jQuery("<div/>").addClass("buttonBar"), playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function(e1) {
                e1.stopPropagation(), jQuery(YTPlayer).YTPTogglePlay();
            }), MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function(e1) {
                e1.stopPropagation(), jQuery(YTPlayer).YTPToggleVolume();
            }), volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                display: "inline-block"
            });
            YTPlayer.volumeBar = volumeBar;
            let idx = jQuery("<span/>").addClass("mb_YTPTime"), vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
            vURL.indexOf("http") < 0 && (vURL = "https://www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
            let movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                window.open(vURL, "viewOnYT");
            }), onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function(e1) {
                e1.stopPropagation(), jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realFullscreen);
            }), progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function(e1) {
                e1.stopPropagation(), timeBar.css({
                    width: e1.clientX - timeBar.offset().left
                }), YTPlayer.timeW = e1.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
                let r1 = Math.floor(YTPlayer.player.getDuration());
                YTPlayer.goto = timeBar.outerWidth() * r1 / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                    width: 0
                });
            }), loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"), timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
            progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realFullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                initialval: YTPlayer.opt.vol,
                scale: 100,
                orientation: "h",
                callback: function(e1) {
                    0 == e1.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e1.value), YTPlayer.isMute || (YTPlayer.opt.vol = e1.value);
                }
            });
        },
        changeCoverImage: function(e1) {
            let r1 = this.get(0);
            if (r1.opt.coverImage || r1.orig_containment_background) {
                let t1 = e1 || (r1.opt.coverImage ? "url(" + r1.opt.coverImage + ") center center" : r1.orig_containment_background);
                t1 && r1.opt.containment.css({
                    background: t1,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                });
            }
            return this;
        },
        checkForState: function() {
            let YTPlayer = this.get(0), $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            let interval = 100;
            if (!jQuery.contains(document, YTPlayer)) return $YTPlayer.YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt);
            jQuery.mbYTPlayer.checkForStart(YTPlayer), YTPlayer.getState = setInterval(function() {
                let $YTPlayer = jQuery(YTPlayer);
                if (!YTPlayer.isReady) return;
                let prog = jQuery(YTPlayer).YTPManageProgress(), stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    let e = jQuery.Event("YTPTime");
                    e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e);
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible) {
                    let e = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                    e || 1 != YTPlayer.state ? e && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0, YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1, $YTPlayer.YTPPause());
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - YTPlayer.opt.fadeOnStartTime / 1e3) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) >= stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function() {
                        YTPlayer.isEnded = !1;
                    }, 1e3), YTPlayer.isList) {
                        if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            let e = jQuery.Event("YTPEnd");
                            return e.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(e);
                        }
                    } else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.state = 2, $YTPlayer.changeCoverImage(YTPlayer), jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, YTPlayer.opt.fadeOnStartTime, function() {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play), $YTPlayer.changeCoverImage();
                        let e1 = jQuery.Event("YTPEnd");
                        e1.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e1), YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                }
            }, interval);
        },
        checkForStart: function(YTPlayer) {
            let $YTPlayer = jQuery(YTPlayer);
            if (!jQuery.contains(document, YTPlayer)) return void $YTPlayer.YTPPlayerDestroy();
            if (jQuery.mbYTPlayer.buildControls(YTPlayer), YTPlayer.overlay) {
                if (YTPlayer.opt.addRaster) {
                    let e = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
                    YTPlayer.overlay.addClass(YTPlayer.isRetina ? e + " retina" : e);
                } else YTPlayer.overlay.removeClass(function(e1, r1) {
                    let t1 = r1.split(" "), a1 = [];
                    return jQuery.each(t1, function(e1, r1) {
                        /raster.*/.test(r1) && a1.push(r1);
                    }), a1.push("retina"), a1.join(" ");
                });
            }
            YTPlayer.preventTrigger = !0, YTPlayer.state = 2, YTPlayer.preventTrigger = !0, YTPlayer.player.mute(), YTPlayer.player.playVideo(), YTPlayer.isStarting = !0;
            let startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            return YTPlayer.preventTrigger = !0, YTPlayer.checkForStartAt = setInterval(function() {
                YTPlayer.player.mute(), YTPlayer.player.seekTo(startAt, !0);
                let canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (jQuery.browser.mobile && (canPlayVideo = !0), YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    YTPlayer.start_from_last = null, YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), clearInterval(YTPlayer.checkForStartAt), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.isReady = !0, $YTPlayer.YTPRemoveFilter(), YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters(), $YTPlayer.YTPEnableFilters();
                    let YTPready = jQuery.Event("YTPReady");
                    if (YTPready.time = YTPlayer.currentTime, $YTPlayer.trigger(YTPready), YTPlayer.state = 2, YTPlayer.opt.mute ? $YTPlayer.YTPMute() : YTPlayer.opt.autoPlay ? (console.debug("We muted the audio to make the video 'auto-play' according with the latest vendor policy. The audio will unmute at the first user interaction with the page"), YTPlayer.player.mute(), YTPlayer.forcedMuted = !0, jQuery(document).on("mousedown.YTPstartAudio", function() {
                        YTPlayer.forcedMuted && (console.debug("AAAAAAA"), YTPlayer.player.unMute(), YTPlayer.forcedMuted = !1, jQuery(document).off("mousedown.YTPstartAudio"));
                    }), jQuery(window).on("scroll", function() {
                        console.debug("AAAAA");
                    })) : YTPlayer.player.unMute(), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push([
                        "_trackEvent",
                        "YTPlayer",
                        "Play",
                        YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()
                    ]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()), YTPlayer.opt.autoPlay) {
                        let e = jQuery.Event("YTPStart");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.isStarting = !1, "mac" === jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery("body").one("mousedown.YTPstart", function() {
                            $YTPlayer.YTPPlay();
                        }), $YTPlayer.YTPPlay(), console.timeEnd(YTPTimerLabels.startPlaying);
                    } else YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0), setTimeout(function() {
                        YTPlayer.preventTrigger = !0, $YTPlayer.YTPPause(), YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({
                            opacity: 0
                        }), setTimeout(function() {
                            $YTPlayer.changeCoverImage();
                        }, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({
                            opacity: 1
                        }, YTPlayer.opt.fadeOnStartTime), YTPlayer.wrapper.CSSAnimate({
                            opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                        }, YTPlayer.opt.fadeOnStartTime))), YTPlayer.isStarting = !1;
                    }, 500), YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                    YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"), setTimeout(function() {
                        YTPlayer.loading.fadeOut();
                    }, 100)), YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3);
                }
                "mac" === jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(), startAt >= 0 && YTPlayer.player.seekTo(startAt, !0));
            }, 100), $YTPlayer;
        },
        getTime: function() {
            let e1 = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e1.currentTime);
        },
        getTotalTime: function() {
            let e1 = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e1.totalTime);
        },
        formatTime: function(e1) {
            let r1 = Math.floor(e1 / 60), t1 = Math.floor(e1 - 60 * r1);
            return (r1 <= 9 ? "0" + r1 : r1) + " : " + (t1 <= 9 ? "0" + t1 : t1);
        },
        setAnchor: function(e1) {
            this.optimizeDisplay(e1);
        },
        getAnchor: function() {
            return this.get(0).opt.anchor;
        },
        setAbundance: function(e1, r1) {
            let t1 = this.get(0);
            return r1 && (t1.opt.abundance = e1), this.optimizeDisplay(t1.opt.anchor, e1), this;
        },
        getAbundance: function() {
            return this.get(0).opt.abundance;
        },
        setOption: function(e1, r1) {
            return this.get(0).opt[e1] = r1, this;
        }
    }, jQuery.fn.optimizeDisplay = function(anchor, abundanceX) {
        let YTPlayer = this.get(0), vid = {}, el = YTPlayer.wrapper, iframe = jQuery(YTPlayer.playerEl);
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        let YTPAlign = YTPlayer.opt.anchor.split(","), ab = abundanceX || YTPlayer.opt.abundance;
        if (YTPlayer.opt.optimizeDisplay) {
            let abundance = el.height() * ab, win = {};
            win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width + abundance, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-(vid.height - win.height + abundance) / 2), vid.marginLeft = -abundance / 2;
            let lowest = vid.height < win.height;
            lowest && (vid.height = win.height + abundance, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = -abundance / 2, vid.marginLeft = Math.ceil(-(vid.width - win.width) / 2));
            for(let e in YTPAlign)if (YTPAlign.hasOwnProperty(e)) {
                let r = YTPAlign[e].replace(/ /g, "");
                switch(r){
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
                }
            }
        } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
        iframe.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        });
    }, jQuery.shuffle = function(e1) {
        let r1 = e1.slice(), t1 = r1.length, a1 = t1;
        for(; a1--;){
            let e1 = parseInt(Math.random() * t1), o1 = r1[a1];
            r1[a1] = r1[e1], r1[e1] = o1;
        }
        return r1;
    }, jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on");
        });
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID, jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPGetPlaybackRate = jQuery.mbYTPlayer.getPlaybackRate, jQuery.fn.YTPSetPlaybackRate = jQuery.mbYTPlayer.setPlaybackRate, jQuery.fn.changeCoverImage = jQuery.mbYTPlayer.changeCoverImage, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPGetVideoQuality = jQuery.mbYTPlayer.getVideoQuality, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPGetAbundance = jQuery.mbYTPlayer.getAbundance, jQuery.fn.YTPSetAbundance = jQuery.mbYTPlayer.setAbundance, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.YTPSetOption = jQuery.mbYTPlayer.setOption;
}(jQuery, ytp);
var nAgt = navigator.userAgent;
function isTouchSupported() {
    var e1 = nAgt.msMaxTouchPoints, r1 = "ontouchstart" in document.createElement("div");
    return !(!e1 && !r1);
}
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function() {
    var e1 = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (e1.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e1.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e1.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e1.version = /Mac OS X ([\._\d]+)/.exec(nAgt)[1], e1.version = e1.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e1.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e1.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e1.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e1.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e1.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e1.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e1.version = "Unknown.Unknown"), e1.name = e1.name.toLowerCase(), e1.major_version = "Unknown", e1.minor_version = "Unknown", "Unknown.Unknown" != e1.version && (e1.major_version = parseFloat(e1.version.split(".")[0]), e1.minor_version = parseFloat(e1.version.split(".")[1])), e1;
}, nameOffset, verOffset, ix;
if (jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10), -1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3, end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end);
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
function uncamel(e1) {
    return e1.replace(/([A-Z])/g, function(e1) {
        return "-" + e1.toLowerCase();
    });
}
function setUnit(e1, r1) {
    return "string" != typeof e1 || e1.match(/^[\-0-9\.]+jQuery/) ? "" + e1 + r1 : e1;
}
function setFilter(e1, r1, t1) {
    var a1 = uncamel(r1), o1 = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e1[o1 + "filter"] = e1[o1 + "filter"] || "", t1 = setUnit(t1 > jQuery.CSS.filters[r1].max ? jQuery.CSS.filters[r1].max : t1, jQuery.CSS.filters[r1].unit), e1[o1 + "filter"] += a1 + "(" + t1 + ") ", delete e1[r1];
}
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function(e1, r1) {
    if ("stringstring" != typeof e1 + typeof r1) return !1;
    for(var t1 = e1.split("."), a1 = r1.split("."), o1 = 0, i1 = Math.max(t1.length, a1.length); o1 < i1; o1++){
        if (t1[o1] && !a1[o1] && 0 < parseInt(t1[o1]) || parseInt(t1[o1]) > parseInt(a1[o1])) return 1;
        if (a1[o1] && !t1[o1] && 0 < parseInt(a1[o1]) || parseInt(t1[o1]) < parseInt(a1[o1])) return -1;
    }
    return 0;
}, jQuery.support.CSStransition = function() {
    var e1 = (document.body || document.documentElement).style;
    return void 0 !== e1.transition || void 0 !== e1.WebkitTransition || void 0 !== e1.MozTransition || void 0 !== e1.MsTransition || void 0 !== e1.OTransition;
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(e1) {
        var r1 = jQuery.extend(!0, {}, e1);
        for(var t1 in jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "", r1){
            if ("transform" === t1 && (r1[jQuery.CSS.sfx + "transform"] = r1[t1], delete r1[t1]), "transform-origin" === t1 && (r1[jQuery.CSS.sfx + "transform-origin"] = e1[t1], delete r1[t1]), "filter" !== t1 || jQuery.browser.mozilla || (r1[jQuery.CSS.sfx + "filter"] = e1[t1], delete r1[t1]), "blur" === t1 && setFilter(r1, "blur", e1[t1]), "brightness" === t1 && setFilter(r1, "brightness", e1[t1]), "contrast" === t1 && setFilter(r1, "contrast", e1[t1]), "grayscale" === t1 && setFilter(r1, "grayscale", e1[t1]), "hueRotate" === t1 && setFilter(r1, "hueRotate", e1[t1]), "invert" === t1 && setFilter(r1, "invert", e1[t1]), "saturate" === t1 && setFilter(r1, "saturate", e1[t1]), "sepia" === t1 && setFilter(r1, "sepia", e1[t1]), "x" === t1) {
                var a1 = jQuery.CSS.sfx + "transform";
                r1[a1] = r1[a1] || "", r1[a1] += " translateX(" + setUnit(e1[t1], "px") + ")", delete r1[t1];
            }
            "y" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " translateY(" + setUnit(e1[t1], "px") + ")", delete r1[t1]), "z" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " translateZ(" + setUnit(e1[t1], "px") + ")", delete r1[t1]), "rotate" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " rotate(" + setUnit(e1[t1], "deg") + ")", delete r1[t1]), "rotateX" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " rotateX(" + setUnit(e1[t1], "deg") + ")", delete r1[t1]), "rotateY" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " rotateY(" + setUnit(e1[t1], "deg") + ")", delete r1[t1]), "rotateZ" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " rotateZ(" + setUnit(e1[t1], "deg") + ")", delete r1[t1]), "scale" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " scale(" + setUnit(e1[t1], "") + ")", delete r1[t1]), "scaleX" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " scaleX(" + setUnit(e1[t1], "") + ")", delete r1[t1]), "scaleY" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " scaleY(" + setUnit(e1[t1], "") + ")", delete r1[t1]), "scaleZ" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " scaleZ(" + setUnit(e1[t1], "") + ")", delete r1[t1]), "skew" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " skew(" + setUnit(e1[t1], "deg") + ")", delete r1[t1]), "skewX" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " skewX(" + setUnit(e1[t1], "deg") + ")", delete r1[t1]), "skewY" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " skewY(" + setUnit(e1[t1], "deg") + ")", delete r1[t1]), "perspective" === t1 && (r1[a1 = jQuery.CSS.sfx + "transform"] = r1[a1] || "", r1[a1] += " perspective(" + setUnit(e1[t1], "px") + ")", delete r1[t1]);
        }
        return r1;
    },
    getProp: function(e1) {
        var r1, t1 = [];
        for(r1 in e1)0 > t1.indexOf(r1) && t1.push(uncamel(r1));
        return t1.join(",");
    },
    animate: function(e1, r1, t1, a1, o1) {
        return this.each(function() {
            function i1() {
                n1.called = !0, n1.CSSAIsRunning = !1, l1.off(jQuery.CSS.transitionEnd + "." + n1.id), clearTimeout(n1.timeout), l1.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof o1 && o1.apply(n1), "function" == typeof n1.CSSqueue && (n1.CSSqueue(), n1.CSSqueue = null);
            }
            var n1 = this, l1 = jQuery(this);
            n1.id = n1.id || "CSSA_" + (new Date).getTime();
            var s1 = s1 || {
                type: "noEvent"
            };
            if (n1.CSSAIsRunning && n1.eventType == s1.type && !jQuery.browser.msie && 9 >= jQuery.browser.version) n1.CSSqueue = function() {
                l1.CSSAnimate(e1, r1, t1, a1, o1);
            };
            else if (n1.CSSqueue = null, n1.eventType = s1.type, 0 !== l1.length && e1) {
                if (e1 = jQuery.normalizeCss(e1), n1.CSSAIsRunning = !0, "function" == typeof r1 && (o1 = r1, r1 = jQuery.fx.speeds._default), "function" == typeof t1 && (a1 = t1, t1 = 0), "string" == typeof t1 && (o1 = t1, t1 = 0), "function" == typeof a1 && (o1 = a1, a1 = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof r1) for(var u1 in jQuery.fx.speeds){
                    if (r1 == u1) {
                        r1 = jQuery.fx.speeds[u1];
                        break;
                    }
                    r1 = jQuery.fx.speeds._default;
                }
                if (r1 || (r1 = jQuery.fx.speeds._default), "string" == typeof o1 && (a1 = o1, o1 = null), jQuery.support.CSStransition) {
                    var y1 = {
                        default: "ease",
                        in: "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    y1[a1] && (a1 = y1[a1]), l1.off(jQuery.CSS.transitionEnd + "." + n1.id), y1 = jQuery.CSS.getProp(e1);
                    var d1 = {};
                    jQuery.extend(d1, e1), d1[jQuery.CSS.sfx + "transition-property"] = y1, d1[jQuery.CSS.sfx + "transition-duration"] = r1 + "ms", d1[jQuery.CSS.sfx + "transition-delay"] = t1 + "ms", d1[jQuery.CSS.sfx + "transition-timing-function"] = a1, setTimeout(function() {
                        l1.one(jQuery.CSS.transitionEnd + "." + n1.id, i1), l1.css(d1);
                    }, 1), n1.timeout = setTimeout(function() {
                        n1.called || !o1 ? (n1.called = !1, n1.CSSAIsRunning = !1) : (l1.css(jQuery.CSS.sfx + "transition", ""), o1.apply(n1), n1.CSSAIsRunning = !1, "function" == typeof n1.CSSqueue && (n1.CSSqueue(), n1.CSSqueue = null));
                    }, r1 + t1 + 10);
                } else {
                    for(y1 in e1)"transform" === y1 && delete e1[y1], "filter" === y1 && delete e1[y1], "transform-origin" === y1 && delete e1[y1], "auto" === e1[y1] && delete e1[y1], "x" === y1 && (s1 = e1[y1], e1[u1 = "left"] = s1, delete e1[y1]), "y" === y1 && (s1 = e1[y1], e1[u1 = "top"] = s1, delete e1[y1]), "-ms-transform" !== y1 && "-ms-filter" !== y1 || delete e1[y1];
                    l1.delay(t1).animate(e1, r1, o1);
                }
            }
        });
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function(e1) {
    return this.each(function() {
        var r1 = jQuery(this), t1 = jQuery.normalizeCss(e1);
        r1.css(t1);
    });
}, function(e1) {
    e1.simpleSlider = {
        defaults: {
            initialval: 0,
            maxval: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: e1.browser.mobile ? "touchstart" : "mousedown",
            end: e1.browser.mobile ? "touchend" : "mouseup",
            move: e1.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function(r1) {
            return this.each(function() {
                var t1 = this, a1 = e1(t1);
                a1.addClass("simpleSlider"), t1.opt = {}, e1.extend(t1.opt, e1.simpleSlider.defaults, r1), e1.extend(t1.opt, a1.data()), console.debug(a1.data());
                var o1 = "h" == t1.opt.orientation ? "horizontal" : "vertical", i1 = e1("<div/>").addClass("level").addClass(o1);
                a1.prepend(i1), t1.level = i1, a1.css({
                    cursor: "default"
                }), "auto" == t1.opt.maxval && (t1.opt.maxval = e1(t1).outerWidth()), a1.updateSliderVal(), t1.opt.readonly || (a1.on(e1.simpleSlider.events.start, function(r1) {
                    e1.browser.mobile && (r1 = r1.changedTouches[0]), t1.canSlide = !0, a1.updateSliderVal(r1), "h" == t1.opt.orientation ? a1.css({
                        cursor: "col-resize"
                    }) : a1.css({
                        cursor: "row-resize"
                    }), t1.lastVal = t1.val, e1.browser.mobile || (r1.preventDefault(), r1.stopPropagation());
                }), e1(document).on(e1.simpleSlider.events.move, function(r1) {
                    e1.browser.mobile && (r1 = r1.changedTouches[0]), t1.canSlide && (e1(document).css({
                        cursor: "default"
                    }), a1.updateSliderVal(r1), e1.browser.mobile || (r1.preventDefault(), r1.stopPropagation()));
                }).on(e1.simpleSlider.events.end, function() {
                    e1(document).css({
                        cursor: "auto"
                    }), t1.canSlide = !1, a1.css({
                        cursor: "auto"
                    });
                }));
            });
        },
        updateSliderVal: function(r1) {
            var t1 = this.get(0);
            if (t1.opt) {
                t1.opt.initialval = "number" == typeof t1.opt.initialval ? t1.opt.initialval : t1.opt.initialval(t1);
                var a1 = e1(t1).outerWidth(), o1 = e1(t1).outerHeight();
                t1.x = "object" == typeof r1 ? r1.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof r1 ? r1 * a1 / t1.opt.maxval : t1.opt.initialval * a1 / t1.opt.maxval, t1.y = "object" == typeof r1 ? r1.clientY + document.body.scrollTop - this.offset().top : "number" == typeof r1 ? (t1.opt.maxval - t1.opt.initialval - r1) * o1 / t1.opt.maxval : t1.opt.initialval * o1 / t1.opt.maxval, t1.y = this.outerHeight() - t1.y, t1.scaleX = t1.x * t1.opt.maxval / a1, t1.scaleY = t1.y * t1.opt.maxval / o1, t1.outOfRangeX = t1.scaleX > t1.opt.maxval ? t1.scaleX - t1.opt.maxval : t1.scaleX < 0 ? t1.scaleX : 0, t1.outOfRangeY = t1.scaleY > t1.opt.maxval ? t1.scaleY - t1.opt.maxval : t1.scaleY < 0 ? t1.scaleY : 0, t1.outOfRange = "h" == t1.opt.orientation ? t1.outOfRangeX : t1.outOfRangeY, t1.value = void 0 !== r1 ? "h" == t1.opt.orientation ? t1.x >= this.outerWidth() ? t1.opt.maxval : t1.x <= 0 ? 0 : t1.scaleX : t1.y >= this.outerHeight() ? t1.opt.maxval : t1.y <= 0 ? 0 : t1.scaleY : "h" == t1.opt.orientation ? t1.scaleX : t1.scaleY, "h" == t1.opt.orientation ? t1.level.width(i1(t1.x, a1) + "%") : t1.level.height(i1(t1.y, o1)), t1.lastVal === t1.value && ("h" === t1.opt.orientation && (t1.x >= this.outerWidth() || t1.x <= 0) || "h" !== t1.opt.orientation && (t1.y >= this.outerHeight() || t1.y <= 0)) || ("function" == typeof t1.opt.callback && t1.opt.callback(t1), t1.lastVal = t1.value);
            }
            function i1(e1, r1) {
                return Math.floor(100 * e1 / r1);
            }
        }
    }, e1.fn.simpleSlider = e1.simpleSlider.init, e1.fn.updateSliderVal = e1.simpleSlider.updateSliderVal;
}(jQuery), function(e1) {
    e1.mbCookie = {
        set: function(e1, r1, t1, a1) {
            "object" == typeof r1 && (r1 = JSON.stringify(r1)), a1 = a1 ? "; domain=" + a1 : "";
            var o1 = new Date, i1 = "";
            0 < t1 && (o1.setTime(o1.getTime() + 864e5 * t1), i1 = "; expires=" + o1.toGMTString()), document.cookie = e1 + "=" + r1 + i1 + "; path=/" + a1;
        },
        get: function(e1) {
            e1 += "=";
            for(var r1 = document.cookie.split(";"), t1 = 0; t1 < r1.length; t1++){
                for(var a1 = r1[t1]; " " == a1.charAt(0);)a1 = a1.substring(1, a1.length);
                if (0 == a1.indexOf(e1)) try {
                    return JSON.parse(a1.substring(e1.length, a1.length));
                } catch (r1) {
                    return a1.substring(e1.length, a1.length);
                }
            }
            return null;
        },
        remove: function(r1) {
            e1.mbCookie.set(r1, "", -1);
        }
    }, e1.mbStorage = {
        set: function(e1, r1) {
            "object" == typeof r1 && (r1 = JSON.stringify(r1)), localStorage.setItem(e1, r1);
        },
        get: function(e1) {
            if (!localStorage[e1]) return null;
            try {
                return JSON.parse(localStorage[e1]);
            } catch (r1) {
                return localStorage[e1];
            }
        },
        remove: function(e1) {
            e1 ? localStorage.removeItem(e1) : localStorage.clear();
        }
    };
}(jQuery);

},{}]},["iGVxF","5qs1A"], "5qs1A", "parcelRequire4ecb")

//# sourceMappingURL=index.04d3fcf9.js.map
