'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "52c5b0fc5061fffaaabcfaeb68a3a169",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ef6b7d3e828971fe4adb69757d5b8c5d",
"version.json": "1473dd8dd1cc9c966783489bf2c2030e",
"app-cache-manager.js": "893748d26d5efbd3f03fd6ddb13074d1",
"favicon.png": "14ff5b3d576edbb0882f20832843375f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8801a3ec0e13f4b0ee88c5e6096fbf34",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/NOTICES": "c8c416b8f3b3ce1a71ec3a9ff1173d00",
"assets/AssetManifest.bin": "a6d3157002431dc9bd495343a45f7a32",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/AssetManifest.bin.json": "e9618594ab6e9a6d87816011c533690b",
"assets/resources/content/kanji_new.json": "2de24915653b8c298e4d12def5563b80",
"assets/resources/content/kanji.json": "5da540b75926f4f073903eed423a5182",
"assets/resources/content/vocabulary.json": "58b54133eefaeda2920f690548a62089",
"assets/resources/animations/trophy.riv": "130c6ec766b058a3e8fa119628e33d04",
"assets/resources/lang/en_US.json": "67af47a1fa4aafa6a6f772ea2ba9cbcd",
"assets/resources/lang/es_ES.json": "3b805906db6af136eb639a42f020aec9",
"assets/resources/img/kanji-drawing.jpeg": "1dcb067e1e52b13f9193daec6f129582",
"assets/resources/img/pagoda-temple.jpeg": "7c57970ce487f38248b09b2c49b2bb24",
"assets/resources/img/landing-page-image.jpeg": "fcbb8ed64ddb47f846c035dac544680f",
"assets/resources/img/flappy_neko/background/mountains_far.png": "b742aad37d8146667efe215f43fc146b",
"assets/resources/img/flappy_neko/background/mountains_near.png": "579729f53c7b581736e5d99da06ab2c3",
"assets/resources/img/flappy_neko/background/mountains_farest.png": "46ccb70af650e80a73424427674af883",
"assets/resources/img/flappy_neko/background/trees_nearest.png": "114c0681ccb0817ec770e5c42b163007",
"assets/resources/img/flappy_neko/life/life.png": "1a651684b060c78884c9cab30fa2de8b",
"assets/resources/img/flappy_neko/neko/neko_down.png": "d6b88ab177a24fb1ea80a2c4ecb482a7",
"assets/resources/img/flappy_neko/neko/neko_up.png": "c5ab44b958f820002e471af0e62147b1",
"assets/resources/img/flappy_neko/neko/neko_idle.png": "800783923c1be97a2cb37b01a5178386",
"assets/resources/img/flappy_neko/buttons/question_button_idle.png": "af932ffcb03a9fd16f4852c013154a07",
"assets/resources/img/flappy_neko/buttons/settings_button_idle.png": "b44ae52c6a5a335909f55c97c902c1ea",
"assets/resources/img/flappy_neko/buttons/settings_button_pressed.png": "eb0fcdeceedbeef75472122640b41138",
"assets/resources/img/flappy_neko/buttons/question_button_pressed.png": "0d79baa2d30c26b4fe0ac808ae48c6e8",
"assets/resources/img/flappy_neko/buttons/trophy_button_pressed.png": "11d8786f2932f0d4a3cf963fa6b9a97c",
"assets/resources/img/flappy_neko/buttons/trophy_button_idle.png": "c0fc732f22176300830bde56dd46e6f8",
"assets/resources/img/flappy_neko/seagull/seagull_down.png": "d7bac982c4f0a2c8b4aa1e7ac5c7c7cd",
"assets/resources/img/flappy_neko/seagull/seagull_up.png": "fd183c8663f24d255c80691139e5a5dd",
"assets/resources/img/flappy_neko/seagull/seagull_idle.png": "ec689055a5916709b716b233c94d475e",
"assets/resources/img/flappy_neko/cover/flappy_neko_cover.jpg": "4142b2e74aad0d3976d42aea4f554a82",
"assets/resources/img/jisho/jisho-logo.png": "3dc25fae57939e54c288a4c36ce8b0a8",
"assets/resources/img/acknowledgement.jpeg": "8d3f86462b3260da5b8602970b4f41bd",
"assets/resources/img/play-store-logo.png": "217b3ca828b0668cb272e8eef6290cec",
"assets/resources/img/forge.jpeg": "41864d5ef501d12311390c6478396d03",
"assets/resources/img/landing-page-image.png": "582fc1dd7b68b7ed7e4d396ff2307513",
"assets/resources/img/city.jpeg": "1d97eca8d45a6e80dd185433babaeeda",
"assets/resources/img/maneki-neko.jpeg": "4ad6078a125a2e8d81b9f875ea42b3eb",
"assets/resources/img/minigames.jpeg": "bbc8060f194473b83df4c15ffaa6a65c",
"assets/resources/img/colorful-city.jpeg": "a6d7ad5936e6965fe1f19f063474def9",
"assets/resources/img/world-globe.jpeg": "964b7c9b4e8d6b6e4a6146b4019a560b",
"assets/resources/img/content-manager.jpeg": "4cbdd77ec882510af0ee93f2f0a3cb75",
"assets/resources/img/days-of-week.jpeg": "97034fe18914aedd8469ed9fce2d547c",
"assets/resources/img/calendar.jpeg": "c164d5bc8016bfcece4f95f1c3272121",
"assets/resources/img/logo-round.png": "6a10863b58f0244049af87ce24e63783",
"assets/resources/img/carps.jpeg": "0035bb8a7e70fb8f4c2e3f53265e3440",
"assets/resources/img/panda.jpeg": "89c7d0d99343307a6f1121ce95ee6eb9",
"assets/resources/img/searcher.jpeg": "aa48b57dc015b6ff0dc466965edd2b7d",
"assets/resources/img/hanami.jpeg": "3a05672906d93037a5b825819b20df2f",
"assets/resources/img/village.jpeg": "5a0237e70c21779d21c4cc9f9c8d379a",
"assets/resources/img/university.jpeg": "ac63cd9368d3b4b32765fd6cef014307",
"assets/resources/img/thanks.jpeg": "66d0a57ed0ebe600fd92139d7f1f914d",
"assets/resources/img/badges/emerald-chalice-3d-2.png": "5ba429500defb7530fab82e4e1c2097f",
"assets/resources/img/badges/toolbox.png": "3aa8304055bf0fb92c583b4dab4cd144",
"assets/resources/img/badges/trophy-3d.png": "88762605d7c3992c331514d6de2440a7",
"assets/resources/img/badges/king-of-numbers-3d.png": "35590112ddf2f6f057bdeac8f34cef20",
"assets/resources/img/badges/baby-face-3d.png": "112b760d8b34f84132f365f9fcd9862d",
"assets/resources/img/badges/wise-face-3d.png": "2736d6832d3e874013b75504bea8599b",
"assets/resources/img/badges/teenager-face-3d.png": "4e6ef84232e0b7ef507c56d14f1fe180",
"assets/resources/img/badges/first-aid-kit-3d.png": "737cfd38d105464d8104210810fa7db8",
"assets/resources/img/badges/adult-face-3d.png": "65c1b7abce17c4167ef3d45bec7ff631",
"assets/resources/img/badges/ambulance-3d.png": "8817231b862cef28780324676049605b",
"assets/resources/img/badges/rocket-3d-4.png": "3c4cf5983323a045d05983ae69fad283",
"assets/resources/img/office-material.jpeg": "ccb1b515cafc792c87b09db84222fcfc",
"assets/resources/img/syllabus.jpeg": "15d997b05e340ec7ed23d0f4bb659ef3",
"assets/resources/img/months.jpeg": "e591968520ff3f4fd7e9ab707ae96439",
"assets/resources/img/abacus.jpeg": "74eea03f0de9a3734ff6cb35748992e5",
"assets/resources/img/transports.jpeg": "51b875a232a561a2355b0f3b0bef9c0e",
"assets/resources/img/verbs.jpeg": "a0a4c2ba019d0ca202d3666bda5984f9",
"assets/resources/img/food.jpeg": "c7757707d92195721eb56a5b103454e1",
"assets/resources/img/house-indoor.jpeg": "9ee77ead5c9e4f48936e7c47dfff9bc9",
"assets/fonts/MaterialIcons-Regular.otf": "dcb5db03c0860ee8e3414b6cbed531f4",
"assets/AssetManifest.json": "8bf111bed5fc5ae20ce393fdb15aa550",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"index.html": "1664fcf7405f5e61570b356270326561",
"/": "1664fcf7405f5e61570b356270326561",
"main.dart.js": "45b7f5e3b75b9f61ee8729cd343ec070"};
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
