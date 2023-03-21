'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9081067b3f36a84e3f1f241cfdbcacc1",
".git/config": "88d7c5a09e46897a56e0157f9cbe9c6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b4e4c082222b20d6cec41ee0d389f00a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7036236ea71ee5202fb46e26a3418e74",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "91e72764b77d9bc8b7ee2e3ebfebc3da",
".git/logs/refs/heads/master": "91e72764b77d9bc8b7ee2e3ebfebc3da",
".git/logs/refs/remotes/namer/main": "547b1108e3b2a55f43b220b37359a66d",
".git/logs/refs/remotes/namer/master": "8e3b6569b27763c7b2c05a1186297942",
".git/objects/00/73b1b7f19b11261fd75009acdc0b76ce3bfe97": "bee9361294b6fe1f554e5648bb3171d5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/8115ddc33747804147f3f8503eade74452d9e3": "2e2b7eb0fe7bf4daee0b9da01de90910",
".git/objects/0e/1b8ced106b265e1eb16522b5bf5fbfea7f99f3": "946b1869515c5b9e082d6c878ac04279",
".git/objects/0f/7bd45db9f429d114f7ba39e9d172e0c85facca": "3c58135b19aff4aac8c40632b744151c",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/cc327ca64ca6982621c8b779f94a1fabfef114": "aff91b21a9481f9641a5e89b41d53716",
".git/objects/1a/35cacbc5c653b6c72e9cfa6b0d4ac76bc5e024": "8c68d4f2958466f052845f5d56ed6857",
".git/objects/1e/f3d83dace4b5e80e8259c78fe9e50c2298030f": "20f57e81e31444882012be1a9fbc6397",
".git/objects/23/16f6acc547198259725486924e1763d5326d12": "37d8d852432e760123f957decc529d00",
".git/objects/30/660ef246f0e6d29d1b4b04aac25b00f018fa4d": "68bf263c24a856e06ab4123e04bfc75e",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3d/34a7038140ec9fb0bfdbbf880310b32c006b8e": "a917ac20031c476d45f3fea239d7dab5",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/5dc8d4f9c36f42f19ffbfa0475f7e8efa2a044": "8f36c9dd62439c8d74f5d51fa8ccc462",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/60/4846be0c4fdd85764e068b29e0c6b0171ebe5b": "bea4b15b9d388ebfe6998e6b11dda1ab",
".git/objects/61/0ff731a30dd90df02cc19a4b37adf54cf9bfe5": "f912b4ea47fb7b970907d80eef3e937c",
".git/objects/61/37208644f1626c57966be9585dafb09981ded0": "53d53f9a0554f42e6f3ef6b4aecab047",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/72/d49e3058454089dd43aa77f49a4274633ae9fb": "9ef650d221fd811b558b06de53a15bc5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/5f7e81238b15228e5e5861b5444c8e5e3ec841": "6885f5c1e9f1cf26c1e9488381bda25c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/2a321357a71dd583c471e853f8a8d058ee95dd": "6b38beb37de3a9bef20e3186dc7001b4",
".git/objects/9d/772f11f3ff6ed63ccd188f100aef4a820c35c5": "6dd5d3b9b6e3b604681cc0c745e92667",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/ec1003202e1a27289aefa11b6ef28d49a92536": "3b6a8b0eaec9abdc1f17d5a9230b0de3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/ed2e9469b64c917084c77b16d9b15605c48378": "c71667686dfadc2c399e2fb08701d460",
".git/objects/bb/4aed6bc79002361d74b4c09b3237452a7cf5d9": "7f12dd68dbaac355921c847da7158f8b",
".git/objects/bc/ab170a77fe2647d266d59af2d153aeea2e89af": "7de065bf01f599ce2563d8824f68ec0c",
".git/objects/bf/d373d26f7452ba0a431e0bff2d4beb1167c8f1": "266fd79d7c83db14b8922f6c544bc32f",
".git/objects/c7/69bc5711006d82134a6b6c498ed6c36b6aded1": "fd65c8adce0ea1ed2afbd26bd0e212af",
".git/objects/d4/16a7b7bedda9306b35f6aa95b8ed9ab1281749": "6425799b768854be36615a5f7c59c383",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/37db41399f31ef422985bb475e0c40b1183f96": "b84a234b334cec7c66c7e6c9d0379dfd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/418a3adef956cef027ab1714bd184099dea89d": "156ead5fb037c441392a44a32fd7a7e1",
".git/objects/f5/0489ad9525e17e9a4b4f4252eab1c2aa98c8c2": "e086ec732ebf84453a8efaa2aecf6764",
".git/objects/f5/5d9dc7a9784932d860b23f7357a552ea89ac9a": "be4eef8781cb26fe1d7478498e7f916b",
".git/objects/f8/f1a56388ea716ec7f096b6b15d88e9b1a9035c": "eade5255ca0fa7b781715defb4627523",
".git/ORIG_HEAD": "a5876fba4a4108ca811c7b577636da6d",
".git/refs/heads/master": "b1db92b9dd09277bf9cff8fa1e595887",
".git/refs/remotes/namer/main": "788a3b8efb238e0e46e81ee066493da5",
".git/refs/remotes/namer/master": "b1db92b9dd09277bf9cff8fa1e595887",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "bbe49830d0a983ac5d23adf3b24e91b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/loader.gif": "ba3dfe312851e2510a4a05544e0c8d25",
"index.html": "1b730e244b344bce96e639ea56ac2d0b",
"/": "1b730e244b344bce96e639ea56ac2d0b",
"main.dart.js": "b4d4ba1c3f2a0781b0732fdeb47d40ae",
"manifest.json": "1c5fd603809cc1557a783b61ef51a666",
"README.md": "179f042561c5b5c090f68c8ceaa28df0",
"version.json": "e12d16673f638ed170a5f83edf27c036"
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
