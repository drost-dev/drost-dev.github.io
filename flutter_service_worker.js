'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c9173c4253ad9beefb974d6e76703447",
"index.html": "7036e7dd071a7b154187489dedc9691c",
"/": "7036e7dd071a7b154187489dedc9691c",
"main.dart.js": "0870edc566659a409b78422ba17b0222",
"version.json": "4e7e4e0e7f169de7b0956e5138bc03b7",
"assets/assets/images/logo.png": "b36c72e1f18df20c471ba9fd5ba53ed5",
"assets/assets/images/map.png": "2f68cb968aefd25ca96bafc2e0a94029",
"assets/assets/images/catalog1.png": "a174c2ce767924c2a5e4734f4c9e020b",
"assets/assets/images/product1.png": "c6f44f41f7c3556d915316a4c9cf7627",
"assets/assets/images/card.png": "423251e41104e8553014990da07691ad",
"assets/assets/images/avatar.png": "2a58650e60d72822995451b6c0dd2641",
"assets/assets/images/product2.png": "424cdb5a16058709897199e5d97be54f",
"assets/assets/images/product3.png": "01c631d669d066fc1b4c32d0b485e5a8",
"assets/assets/images/catalog2.png": "1fd2af7b51941a92a977b986ec086337",
"assets/assets/images/catalog3.png": "feaf2cf10bf3313c74c4f98b217e3a06",
"assets/assets/images/catalog4.png": "7958868e71e405f6232842e049edbf54",
"assets/assets/icons/arrow_left.png": "62df9b0356da73f7a2132cd0e85e2409",
"assets/assets/icons/eye.png": "fe28bdb0252a9ede849474bc9a0ed9df",
"assets/assets/icons/gps_arrow.png": "94bd561a604b5ee30700fce26943ae00",
"assets/assets/icons/arrow_next.png": "44bc48767077313d0eb89cb054d4316e",
"assets/assets/icons/delivery.png": "4e5e2967ce1911809f227d1c107fb5db",
"assets/assets/icons/search.png": "31ad91039dffe37e5ab1e44c040950b4",
"assets/assets/icons/filters.png": "d44b20ee3aeae835184b5d8f96d6eb7a",
"assets/assets/icons/arrow_down.png": "4b988d598fc3b39d5159e28400a328c9",
"assets/assets/icons/home.png": "950d92a9058d83f76ddbc6057b308420",
"assets/assets/icons/profile.png": "01dd4f173fccd44cc1c483e4cc9ee061",
"assets/assets/icons/cart.png": "9b685ffbc0c78386b96c4adb96c8221c",
"assets/assets/icons/location.png": "d3ceb5ef08d0a106a3b1c1ead5872fd3",
"assets/assets/icons/search_2x.png": "ba016596dbd936124dbfd9c9d4ec657d",
"assets/assets/icons/star.png": "82220f422bd27249fb40c189867ee3d1",
"assets/assets/icons/trash_bin.png": "376886b205cab89e7f80b96787287946",
"assets/assets/icons/clocks.png": "0adb270e5e6d8b031fe5eecdedc57e3a",
"assets/assets/icons/payment.png": "3f2c6740c4bac1224eec98d6241b08e4",
"assets/assets/icons/copy.png": "9726234684659f3aaf30aa4958fc14bf",
"assets/assets/icons/bell.png": "d8d047f0c24b86e4a4e6df537008e7d0",
"assets/assets/icons/filters_2x.png": "2af806b580a5d722b9a8a3931eb218fd",
"assets/assets/icons/location_2x.png": "e19a612f6acd8e28f9286eaf68987064",
"assets/assets/icons/cart_2x.png": "e977a8710cc8ae291924326ac2dc4728",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "a83a6c848fbe55a9e03fd7aad0aa7d66",
"assets/AssetManifest.bin": "d2bb87788cf90f01505661eda9a395ea",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "d2c21a5cfa6a3dbafb238b6ee9f13478",
"assets/NOTICES": "3c30a5953ae6ea6b69a44dde401a6993",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "1e31d669ea57ba66f376267e0003bd87",
"splash/img/light-1x.png": "1db2073b39ca5f5f76bdb8b946e17728",
"splash/img/light-2x.png": "578986df12d85ed1300082401455cfb6",
"splash/img/light-3x.png": "e0634e2d0da858f603340cb5b9cc59b0",
"splash/img/light-4x.png": "2aa79fa3ed4aaa1a6b903f9c97247c46",
"splash/img/dark-1x.png": "1db2073b39ca5f5f76bdb8b946e17728",
"splash/img/dark-2x.png": "578986df12d85ed1300082401455cfb6",
"splash/img/dark-3x.png": "e0634e2d0da858f603340cb5b9cc59b0",
"splash/img/dark-4x.png": "2aa79fa3ed4aaa1a6b903f9c97247c46"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
