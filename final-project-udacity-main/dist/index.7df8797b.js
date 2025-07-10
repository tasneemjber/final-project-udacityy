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
})({"dmWxA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e6961c0f7df8797b";
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

},{}],"efPRf":[function(require,module,exports) {
//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for the navigation menu and the initial loading of the project.
//These are all the functions that render the pages
var _cardSetsPageJs = require("./cardSetsPage.js");
var _aboutPageJs = require("./aboutPage.js");
var _homePageJs = require("./homePage.js");
// Navigation logic
const addListenerToNavigation = ()=>{
    addNavListener("cardSetPage", (0, _cardSetsPageJs.renderCardSetsPage));
    addNavListener("aboutPage", (0, _aboutPageJs.renderAboutPage));
    addNavListener("homePage", (0, _homePageJs.renderHomePage));
};
// Helper function to add event listeners to navigation items
const addNavListener = (elementId, callback)=>{
    const element = document.getElementById(elementId);
    if (element) element.addEventListener("click", (e)=>{
        e.preventDefault();
        callback();
    });
};
// Initialize the page
// Load the home page
(0, _homePageJs.renderHomePage)();
// Add event listeners to navigation items
addListenerToNavigation();

},{"./cardSetsPage.js":"dOKkQ","./aboutPage.js":"gPL03","./homePage.js":"cUxZn"}],"dOKkQ":[function(require,module,exports) {
//DO NOT CHANGE ANYTHING IN THIS FILE//
// Our application contains flashcard study sets.
// This file is responsible for loading the page that
// displays the collection of sets.
// Users can click on a set to view and interact with the flashcards.
// Loads data for card sets
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCardSetsPage", ()=>renderCardSetsPage);
var _dataJs = require("../data/data.js");
// Function responsible for rendering flashcards page
var _cardsPageJs = require("./cardsPage.js");
// Function responsible for creating the form to create a new study set.
var _createSetJs = require("./createSet.js");
// Functions responsible for creating the pages header
//and a toggle button used to toggle the forms visibility
var _utilityRenderFunctionsJs = require("./utilityRenderFunctions.js");
const renderCardSetsPage = ()=>{
    // Creates a container for the pages contents
    const container = document.createElement("div");
    container.setAttribute("data-cy", "card-sets-page");
    container.className = "cardPageContainer";
    // Creates the header for the page
    const pageHeader = (0, _utilityRenderFunctionsJs.createHeader)("h2", "Study Set Library", "study-set-header");
    // Function creates the element representing the study card set
    const sets = createCardSets();
    // Function responsible for creating the form to create a new study set.
    const form = (0, _createSetJs.createSetForm)((0, _dataJs.cardSets));
    // Sets the form to be invisible
    //Creates a button that will toggle the forms visibility
    const toggleFormButton = (0, _utilityRenderFunctionsJs.createToggleButton)("Add New Set", form);
    // Attribute used for selecting the forms during Cypress tests.
    toggleFormButton.setAttribute("data-cy", "toggle_form");
    //Appends all the content to the pages container
    container.append(pageHeader, sets, toggleFormButton, form);
    //Gets the main section of the dom
    const main = document.querySelector("main");
    // Clears the main section of any existing content.
    main.innerHTML = "";
    //Appends content to the DOM
    main.append(container);
};
// Render the study set preview card
// Includes the study sets title and number of terms
// Takes the current study set and the sets container as arguments
const createSetPreviewCard = (set, setContainer)=>{
    // Container for study set
    const setCard = document.createElement("ul");
    setCard.className = "cardSets";
    // Dynamic attribute used to select a study set during testing.
    setCard.setAttribute("data-cy", set.id);
    // Creates the Study Sets Title element
    const liTitle = document.createElement("li");
    liTitle.textContent = set.title;
    // Creates the Study Sets Number of Terms element
    const liNumberOfTerms = document.createElement("li");
    liNumberOfTerms.textContent = `Terms: ${set.cards.length}`;
    // Adds an event listener to the study set.
    // On click, the current page will clear, and the full study set will be rendered.
    setCard.addEventListener("click", ()=>{
        document.querySelector("main").innerHTML = "";
        (0, _cardsPageJs.renderFlashCards)(set.cards);
    });
    // Appends elements to the set preview
    setCard.append(liTitle, liNumberOfTerms);
    // Appends the preview to the container
    setContainer.append(setCard);
};
// Iterates through the study sets and dynamically creates their DOM elements.
const createCardSets = ()=>{
    // Creates a container for the sets
    const setContainer = document.createElement("ul");
    setContainer.className = "setContainer";
    // Iterates though the sets and creates their dom elements dynamically
    (0, _dataJs.cardSets).forEach((set)=>createSetPreviewCard(set, setContainer));
    return setContainer;
};

},{"../data/data.js":"5O7z8","./cardsPage.js":"f2sCg","./createSet.js":"9qivU","./utilityRenderFunctions.js":"6NtUA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f2sCg":[function(require,module,exports) {
//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for rendering the full flashcard set,
// with buttons to navigate between cards, a form to create new cards,
// and a button to shuffle the cards.
// This function is responsible for generating the form used to create a new card.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSide", ()=>renderSide);
parcelHelpers.export(exports, "generateFlashCard", ()=>generateFlashCard);
parcelHelpers.export(exports, "renderFlashCards", ()=>renderFlashCards);
var _createCard = require("./createCard");
// This function is responsible for shuffling the flashcard
var _shuffle = require("./shuffle");
// Functions responsible for creating toggle button used to toggle the forms visibility
var _utilityRenderFunctionsJs = require("./utilityRenderFunctions.js");
// The flash cards have two sides
// This generates one side of a flashcard card
const renderSide = (text, className)=>{
    // Creates a container element for the card
    const div = document.createElement("div");
    // Creates the paragraph that will hold the text content
    const p = document.createElement("p");
    p.textContent = text;
    div.className = className;
    //Appends the content to the container
    div.append(p);
    return div;
};
// This generates the flashcard elements
// Takes a card as an argument
const generateFlashCard = (card)=>{
    // Creates the Term side
    const termSide = renderSide(card.term, "term");
    // Creates the description side
    const descriptionSide = renderSide(card.description, "description");
    // Creates an inner card that will help with the Flash Card animation
    const innerCard = document.createElement("div");
    innerCard.className = "innerCard";
    innerCard.append(termSide, descriptionSide);
    // Creates a container for the card
    const cardContainer = document.createElement("div");
    cardContainer.className = "cardContainer";
    cardContainer.append(innerCard);
    return cardContainer;
};
// Renders the flashcards to the DOM one card at a time
// Includes next and previous buttons.
// Takes a study set and a current index as arguments
const renderFlashCards = (set, index = 0)=>{
    // Clear the main content area
    const main = document.querySelector("main");
    main.innerHTML = "";
    // Creates a container for the page
    const container = document.createElement("div");
    container.className = "cardPageContainer";
    // If we are not at the end of the study set
    // Create the flash card at the current index
    if (set.length !== 0) {
        const currentCard = generateFlashCard(set[index]);
        // creates Previous button
        const previousBtn = createNavigationButton("Previous", ()=>{
            // If the current index is 0, set the index to the last item in the set.
            // Allows us to loop to the end of the set
            index = index > 0 ? index - 1 : set.length - 1;
            renderFlashCards(set, index);
        });
        //Creates next button
        const nextBtn = createNavigationButton("Next", ()=>{
            // If the current index is at the last item in the set, set the index to 0.
            // Allows us to loop to the start of the set
            index = index < set.length - 1 ? index + 1 : 0;
            renderFlashCards(set, index);
        });
        //Creates a container for out buttons
        const nextAndPrevBtn = document.createElement("div");
        nextAndPrevBtn.append(previousBtn, nextBtn);
        nextAndPrevBtn.className = "nextAndPrevBtnContainer";
        //Appends card and buttons to the page container
        container.append(currentCard, nextAndPrevBtn);
    }
    // Generates from for creating cards
    const form = (0, _createCard.renderCardForm)(set);
    // Sets form to be invisible
    form.className = "notVisible";
    // Creates button for toggling the form
    const addCardBtn = (0, _utilityRenderFunctionsJs.createToggleButton)("Add New Card", form);
    addCardBtn.setAttribute("data-cy", "toggle_form");
    // Creates button for shuffling the cards
    const shuffleBtn = document.createElement("button");
    shuffleBtn.textContent = "Shuffle Cards";
    // Adds an event listener to the shuffle button.
    // On click, the flashcards will be shuffled.
    shuffleBtn.addEventListener("click", ()=>shuffleCards(set));
    // Appends cards form and shuffle button to the page containers
    container.append(shuffleBtn, addCardBtn, form);
    // Appends the container to the dom
    main.append(container);
};
// Creates a navigation button
const createNavigationButton = (text, onClick)=>{
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.addEventListener("click", onClick);
    return btn;
};
const shuffleCards = (set)=>{
    const shuffledCards = (0, _shuffle.shuffle)(set);
    renderFlashCards(shuffledCards);
};

},{"./createCard":"jgHGM","./shuffle":"7tJ4o","./utilityRenderFunctions.js":"6NtUA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jgHGM":[function(require,module,exports) {
//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for the form that creates a new flashcard.
// This function is responsible for rendering a flashcard.
// It will be called upon form submission to render the newly created card.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCardForm", ()=>renderCardForm);
var _cardsPageJs = require("./cardsPage.js");
// This function is responsible for showing an error
var _errorsJs = require("./errors.js");
// These functions generate elements for our form and our header element
var _utilityRenderFunctionsJs = require("./utilityRenderFunctions.js");
// This function will generate the create card form
const renderCardForm = (set)=>{
    // Create a header for the form
    const h3 = (0, _utilityRenderFunctionsJs.createHeader)("h3", "Create Cards", "create_cards");
    // Creates form element
    const cardForm = document.createElement("form");
    // Sets an attribute that will be used to select the form during testing
    cardForm.setAttribute("data-cy", "card_form");
    // Creates a label for the Term input
    const termLabel = (0, _utilityRenderFunctionsJs.createLabel)("Term", "termInput");
    // Creates input for the term
    const termInput = (0, _utilityRenderFunctionsJs.createInput)("termInput");
    // Creates label for description
    const descriptionLabel = (0, _utilityRenderFunctionsJs.createLabel)("Description", "descriptionInput");
    // Creates input for description
    const descriptionInput = (0, _utilityRenderFunctionsJs.createInput)("descriptionInput");
    //Creates submit input
    const addCardBtn = (0, _utilityRenderFunctionsJs.createSubmitButton)("Add Card");
    // Handle form submission ane errors
    cardForm.addEventListener("submit", (e)=>{
        // Prevents forms default behavior
        e.preventDefault();
        // Gets the input values from term and description
        const term = e.target.termInput.value;
        const description = e.target.descriptionInput.value;
        // Handles error if user enters an empty string in any of the inputs
        if (!term && !description) (0, _errorsJs.showError)("TERM AND DESCRIPTION CANNOT BE EMPTY");
        else if (!term) (0, _errorsJs.showError)("TERM CANNOT BE EMPTY");
        else if (!description) (0, _errorsJs.showError)("DESCRIPTION CANNOT BE EMPTY");
        else addCard(term, description, set);
    });
    // Append form elements to the form
    cardForm.append(termLabel, termInput, descriptionLabel, descriptionInput, addCardBtn);
    // Creates a container for the form elements and header
    const container = document.createElement("div");
    container.append(h3, cardForm);
    return container;
};
// Function to add a new card to the data set
const addCard = (term, description, set)=>{
    set.push({
        term,
        description
    });
    (0, _cardsPageJs.renderFlashCards)(set, set.length - 1); // Render the new card
};

},{"./cardsPage.js":"f2sCg","./errors.js":"dC1Wn","./utilityRenderFunctions.js":"6NtUA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dC1Wn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showError", ()=>showError);
const showError = (message)=>{
    const form = document.querySelector("form");
    const existingError = document.querySelector(".error");
    if (!existingError) {
        const error = document.createElement("p");
        error.textContent = message;
        error.style.color = "red";
        error.className = "error";
        error.setAttribute("data-cy", "form-error");
        form.appendChild(error);
    } else if (existingError.textContent !== message) existingError.textContent = message;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6NtUA":[function(require,module,exports) {
//TODO
//Note: You will not be able to run parcel without first fixing these errors
// Check for ESLint errors and format with Prettier.
// This file contains a number of helper functions that create DOM elements.
// These functions help prevent code repetition.
// While the functions are mostly correct, there are some errors, the code is messy and hard to read.
// Add configuration with ESLint for rules that disallow 'var', unused variables, require a semicolon  
// and at least two other rules: https://eslint.org/docs/latest/rules/
// Use ESLint to identify the errors and Prettier to format the code.
// Create a general element with specified text// Create a general element with specified text
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createElement", ()=>createElement);
parcelHelpers.export(exports, "createImage", ()=>createImage);
parcelHelpers.export(exports, "createHeader", ()=>createHeader);
parcelHelpers.export(exports, "createToggleButton", ()=>createToggleButton);
parcelHelpers.export(exports, "createLabel", ()=>createLabel);
parcelHelpers.export(exports, "createInput", ()=>createInput);
parcelHelpers.export(exports, "createSubmitButton", ()=>createSubmitButton);
const createElement = (elementType, text)=>{
    const element = document.createElement(elementType);
    element.textContent = text;
    return element;
};
const createImage = (url, alt)=>{
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    return img;
};
const createHeader = (headerType, text, dataCy)=>{
    const header = document.createElement(headerType);
    header.textContent = text;
    header.setAttribute("data-cy", dataCy);
    return header;
};
const createToggleButton = (text, element)=>{
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", ()=>{
        element.classList.toggle("notVisible");
    });
    return button;
};
const createLabel = (text, htmlFor)=>{
    const label = document.createElement("label");
    label.textContent = text;
    label.setAttribute("for", htmlFor);
    return label;
};
const createInput = (name)=>{
    const input = document.createElement("input");
    input.name = name;
    input.id = name;
    return input;
};
const createSubmitButton = (value)=>{
    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = value;
    submit.setAttribute("data-cy", "create-set-submit");
    return submit;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7tJ4o":[function(require,module,exports) {
//TODO
//Note: You will not be able to run parcel without first fixing these errors
//Note: Complete TODO in utilityRenderFunctions.js first. 
// Check for ESLint errors and format with Prettier.
// This function is responsible for shuffling the flashcards.
// While the function is mostly correct, there are some errors.
// Use ESLint to identify the errors and Prettier to format the code.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
const shuffle = (cards)=>{
    let current = cards.length;
    let newCardsArray = [
        ...cards
    ];
    while(current !== 0){
        let randomIndex = Math.floor(Math.random() * current);
        current--;
        [newCardsArray[current], newCardsArray[randomIndex]] = [
            newCardsArray[randomIndex],
            newCardsArray[current]
        ];
    }
    return newCardsArray;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qivU":[function(require,module,exports) {
//DO NOT CHANGE ANYTHING IN THIS FILE//
//// This file is responsible for generating the form used to create a new study set.
// This function will be used to render the new study set on submit
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSetForm", ()=>createSetForm);
var _cardSetsPageJs = require("./cardSetsPage.js");
// This function will render errors
var _errorsJs = require("./errors.js");
// These function create elements for our form
var _utilityRenderFunctionsJs = require("./utilityRenderFunctions.js");
// This function generates the form for creating new study sets
const createSetForm = (setCards)=>{
    // Generates the new form element
    const form = document.createElement("form");
    // Sets an attribute that will be used to select the form during testing
    form.setAttribute("data-cy", "set_form");
    // Sets the form to invisible
    form.className = "notVisible";
    //Creates the label for the title input
    const label = (0, _utilityRenderFunctionsJs.createLabel)("Card Set Title", "titleInput");
    // Creates the input fot the title
    const input = (0, _utilityRenderFunctionsJs.createInput)("titleInput");
    const submitButton = (0, _utilityRenderFunctionsJs.createSubmitButton)("Submit Set");
    // Adds an event listener to the form.
    // On submission, a new study set will be created.
    form.addEventListener("submit", (e)=>submitSet(e, setCards));
    //Adds elements to the form
    form.append(label, input, submitButton);
    return form;
};
// This function creates a new study set.
// It assigns a title to the set and initializes an empty array for cards,
// which can be added later on the flashcards page.
const submitSet = (e, setCards)=>{
    // Prevents default form behavior and screen refresh
    e.preventDefault();
    //Get value form title input
    const title = e.target.titleInput.value;
    // Errors if user entered an empty string
    if (!title) (0, _errorsJs.showError)("TITLE CANNOT BE EMPTY");
    else {
        //Creates set object
        const id = setCards.length ? setCards[setCards.length - 1].id + 1 : 1;
        //Adds set data
        setCards.push({
            id,
            title,
            cards: []
        });
        //Adds new card set to DOM
        (0, _cardSetsPageJs.renderCardSetsPage)();
    }
};

},{"./cardSetsPage.js":"dOKkQ","./errors.js":"dC1Wn","./utilityRenderFunctions.js":"6NtUA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPL03":[function(require,module,exports) {
//DO NOT CHANGE ANYTHING IN THIS FILE//
//This file is responsible for rendering the About page,
//including loading any content about the application and organization.
//This imports helper functions
//This imports the image
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderAboutPage", ()=>renderAboutPage);
var _aboutImagePng = require("../images/aboutImage.png");
var _aboutImagePngDefault = parcelHelpers.interopDefault(_aboutImagePng);
// This function creates a header element
var _utilityRenderFunctionsJs = require("./utilityRenderFunctions.js");
const renderAboutPage = ()=>{
    // Clear the main content area
    const main = document.querySelector("main");
    main.innerHTML = "";
    // Create the outer container for the about section
    const containerOuter = document.createElement("div");
    containerOuter.className = "aboutContainer";
    // Create the text container for the heading, subheading, and paragraph
    const textContainer = document.createElement("div");
    textContainer.className = "textContainer";
    // Create and set up the heading
    const heading = (0, _utilityRenderFunctionsJs.createHeader)("h2", "About Study Night", "about_page");
    // Create and set up the subheading
    const subHeading = (0, _utilityRenderFunctionsJs.createElement)("h3", "Flash Cards Anywhere Anytime");
    // Create and set up the paragraph
    let text = "Whether you're studying at night or during the day, Study Night's flashcard application is designed to help you grow your skills in any subject. Whether you're preparing for an exam or learning a new language, Study Night makes it easy to create flashcard sets that are available anytime, anywhere.\n\nStudy Night was created by experienced educators and developers who are passionate about helping students achieve their goals and making learning more accessible.";
    const aboutP = (0, _utilityRenderFunctionsJs.createElement)("p", text);
    // Create and set up the image
    const aboutImage = (0, _utilityRenderFunctionsJs.createImage)((0, _aboutImagePngDefault.default), "Child Studying");
    // Append the text elements to the text container
    textContainer.append(heading, subHeading, aboutP);
    // Append the text container and image to the outer container
    containerOuter.append(textContainer, aboutImage);
    // Append the outer container to the main content area
    main.append(containerOuter);
};

},{"../images/aboutImage.png":"fUb9Q","./utilityRenderFunctions.js":"6NtUA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fUb9Q":[function(require,module,exports) {
module.exports = require("32215f2cb72b77d1").getBundleURL("jNp9W") + "aboutImage.a29a2f02.png" + "?" + Date.now();

},{"32215f2cb72b77d1":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"cUxZn":[function(require,module,exports) {
//DO NOT CHANGE ANYTHING IN THIS FILE//
// This file is responsible for loading the home page
//Imports image for homepage
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHomePage", ()=>renderHomePage);
var _homePagePng = require("../images/homePage.png");
var _homePagePngDefault = parcelHelpers.interopDefault(_homePagePng);
//Helper functions
var _utilityRenderFunctionsJs = require("./utilityRenderFunctions.js");
//Renders home page
const renderHomePage = ()=>{
    //Gets main element
    const main = document.querySelector("main");
    main.innerHTML = "";
    //Creates header element
    const header = (0, _utilityRenderFunctionsJs.createHeader)("h1", "Study Night", "home_header");
    //Creates subheader element
    const subHeading = (0, _utilityRenderFunctionsJs.createElement)("h2", "A Digital Study Solution for the Modern World");
    //Creates elements
    const image = (0, _utilityRenderFunctionsJs.createImage)((0, _homePagePngDefault.default), "Desk of laptops");
    //Container for elements
    const homeContainer = document.createElement("div");
    homeContainer.className = "homeContainer";
    homeContainer.append(header, subHeading, image);
    main.append(homeContainer);
};

},{"../images/homePage.png":"daxM8","./utilityRenderFunctions.js":"6NtUA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"daxM8":[function(require,module,exports) {
module.exports = require("4a441ccf3c9a503e").getBundleURL("jNp9W") + "homePage.dd7e2837.png" + "?" + Date.now();

},{"4a441ccf3c9a503e":"lgJ39"}]},["dmWxA","efPRf"], "efPRf", "parcelRequireccf0")

//# sourceMappingURL=index.7df8797b.js.map
