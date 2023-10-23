'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f40956f9edf8094356bf71cad3ac4989",
"index.html": "b1f5b4591045d042dd4c350b7106dbdd",
"/": "b1f5b4591045d042dd4c350b7106dbdd",
"main.dart.js": "2daa6747c8535dae93e2cbbdad1f7d80",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cc0a2522aa816dc49b9051f332755ddd",
"assets/AssetManifest.json": "23f7484b3078d552d3cf84fac6c5ed9c",
"assets/NOTICES": "be60e9afb9db2333f28a8011577e64ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/army_logoo_horizontal.png": "a77b9ce21a33681fe7d4ea49a6b57bec",
"assets/assets/images/artist_coverr.png": "888e27c9f3d65dbde1255d8d54f61b89",
"assets/assets/images/starlogo.svg": "0ec7c7ba75ad6d87ed7e2b024bf7eb24",
"assets/assets/images/m12.jpeg": "79345ec63e3c430fc4b16b72ddeabac2",
"assets/assets/images/baycb.svg": "013903f87b692855b90f05d19d52bb7d",
"assets/assets/images/us_army_badge.svg": "233929b23f6a4f9d00790ac74309ae95",
"assets/assets/images/morethanfriendsthumbnail.png": "a673fc3f6479ca8cfbb1f81756c73559",
"assets/assets/images/repeat_one_icon.svg": "ea89b3fb5e93042cb1f5e3ecdb090a0f",
"assets/assets/images/army_logoo.png": "795620b5f7edc68fddd057fbf51f5e12",
"assets/assets/images/music2.png": "eca5d45569dbda147a0a247f7bb5bb2a",
"assets/assets/images/member.svg": "2a437e1c1b65ec534317288a1a61775d",
"assets/assets/images/m6.jpeg": "1dc9fba7ff27282c91598ba2226e7fa8",
"assets/assets/images/m7.jpeg": "62204a4e0ee697bd8d5eb3363ce3cfa9",
"assets/assets/images/launcher1.png": "2ac13cfb150dbe6bf4cc7a3b3a490c9e",
"assets/assets/images/pause_yellow.svg": "8192e72f36e361085e11e1730064ec1d",
"assets/assets/images/left_arrow_white.svg": "e484ef0d6752d9558c168b92993e3a5a",
"assets/assets/images/bookmark_icon.svg": "60c02927f0e1b3b14eb16ce16c9e7bb1",
"assets/assets/images/right_arrow.svg": "0c497b272fb2f3b00d1d92b3dd13e6bb",
"assets/assets/images/m13.jpeg": "0a4b0c32f949ed765761bf198f2e3305",
"assets/assets/images/pj_logo.svg": "be02c4dc3c6c8a9ef1e7559e94ac8f36",
"assets/assets/images/left_arrow.svg": "3889338aa49bd66906381cce5174ad79",
"assets/assets/images/m14.jpeg": "e43428cea3c61343535df6468945f1b9",
"assets/assets/images/member.png": "60be0af6ede042a6624177910d445a3c",
"assets/assets/images/videocover.png": "69575c029a001c99373251295202eef8",
"assets/assets/images/allyoucanbethumbnail.png": "f62d69045a97d8644a003ecd11d0c364",
"assets/assets/images/playlist.svg": "5947d14a1b2ab67fd6b52a71bd5f4f49",
"assets/assets/images/m15.jpeg": "af0b14efba5c48a6d23239481d2588a1",
"assets/assets/images/us_flag.svg": "4964a01c62f8ba7b8db5fdc34375e9c0",
"assets/assets/images/m1.jpeg": "82a8db06cf81e2e8886bf77c64065573",
"assets/assets/images/arrow_right_white.svg": "08f74ec691505ca0f4b23c010eae8a08",
"assets/assets/images/slicethumbnail.png": "ea929ab38d2a0b8dc60522ed4620c96a",
"assets/assets/images/m2.jpeg": "cc4d631e8c00506dc301775f8f684db4",
"assets/assets/images/setyourselfapart.png": "404be374a3a116c6e1919ba32d871e1f",
"assets/assets/images/repeat_icon.svg": "8d4f4b8586410bcae2e69102aee1b5e2",
"assets/assets/images/videocover2.png": "e04c7a65aa3d714183d0e6de48fe8f81",
"assets/assets/images/videocover3.png": "e1f1502934a2d3388448465d7256de72",
"assets/assets/images/m16.jpeg": "f86dd5050eed28c51cf04eb7fc2ec280",
"assets/assets/images/playing_random_icon.svg": "cd1a3dca152d12383b268bf38c897a82",
"assets/assets/images/on_stage.svg": "0c8537643b86d8ab85bc596859f30b86",
"assets/assets/images/career.svg": "2c52f6a488c8a267dedd24a65d33fb87",
"assets/assets/images/usarmy.png": "8f62866fb21d434b0ec4fc38e7d2d386",
"assets/assets/images/m3.jpeg": "a9a2e15d860d026eff1abfdc178e65b4",
"assets/assets/images/qr.png": "9894b80d62a77bf980024be54f7bcb82",
"assets/assets/images/m8.jpeg": "889869bfbf09dad13eb1a7c5454e5329",
"assets/assets/images/homeimage.png": "e764c434438b087b07b17418d87cf8bc",
"assets/assets/images/album1.png": "a4ddf734e10dcf3a51ba35e8e9626ce8",
"assets/assets/images/m10.jpeg": "79d23d16a719edfe242bb1d5bcb95a41",
"assets/assets/images/volume_icon.svg": "62413cb81e29fedc35baeeb6d0272ddd",
"assets/assets/images/m4.jpeg": "60ca4d424e5a399a3e65d95e5fa79b06",
"assets/assets/images/logo.svg": "810aa0c6c43ed20276f090b23c2836a2",
"assets/assets/images/songthumbnail.png": "6eeb61171acde7d7a9767d5fd2a0aede",
"assets/assets/images/m5.jpeg": "f9ef28074ce2dcbbc1a328a2d3b0d728",
"assets/assets/images/m11.jpeg": "f1067852397825b29e35720e6ec1bff7",
"assets/assets/images/armycover.png": "e4102b55c3f0f3619b3ef881cd15742f",
"assets/assets/images/m9.jpeg": "822b0e35ae3625545fc06eed012f108f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
