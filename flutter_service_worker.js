'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "0e52b4f9d65504ff1e619e09e8a82cc0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "929a184f6f2d13e95bb0725c1649679c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17aaedbf1cf810cd2a6c5a2126b7f158",
".git/logs/refs/heads/master": "17aaedbf1cf810cd2a6c5a2126b7f158",
".git/logs/refs/remotes/origin/HEAD": "41b9d399d94b80b26bca539e30b33ba8",
".git/logs/refs/remotes/origin/master": "574f57a970d9dead46383257a2ed9c6e",
".git/objects/01/2182332bac2dbe9a382b4f2621d59b52e484fe": "d7fe7f17f57134d66c9a626b7233881f",
".git/objects/05/d80ae5ad7997b376b53f125e4acc894dab71ca": "6bf401db15ba3110281f92d9c2590795",
".git/objects/16/5da67191b73406e15fc3e6cf7cda3c195dc735": "86cfac30d97fb45bba2f4417782645d6",
".git/objects/1e/25fb4841dbfcbc6e4fa75d9417a4113ba250bc": "e91280155bc02e320c2a664e7fefc7b5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/e11e0e6dac478fc505be7ace3d3e23bcb0433b": "8aec7c55abbadb5a8f31f6d111b55060",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/07b607c8386ff15e74ac2f1e8dc9fa806c52a4": "db121d2148157551b56efc21c790e449",
".git/objects/40/0e82b63bf71082b427920862b3e1737a9bbb34": "0347732bce15732bd1d5d66852ec05e1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/fa706343911b50cb8362ca357d5679e576faed": "a57dd60c342f8ca413ee9c436039d4ff",
".git/objects/7a/3be9d32927539b09fb33b2d1194ffaf877d03b": "450c9201acbb06d33be5e6685ca762b9",
".git/objects/83/120afeb939041be65d4315a1a998d147969612": "6631739fa58fc4241f6f5fa3f9db6030",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ab1b9301fc3377566579acca1822ed9ff5aa0f": "196706ba6fa39f134008ae0d36a61dab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/d5309d75b18879e0ca998ac3a2df6095436c20": "a173389c02c208f93ec25c8a902d3e56",
".git/objects/96/25e045fc3b75e59ca4caebe0abdd721f2051d6": "5e064c9f7b5fdcef881d0696514e8144",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a2/101e67e21c235ae9825ff54806d2849e1748ac": "ba10805593d658637e98887b717f57e6",
".git/objects/a2/c2c501d92cade4609fbff2a20d058036a0f07d": "5799cad65f96fe00122233a5625d5041",
".git/objects/a5/3efdf92300d180241adcd14d81d15a734c4e08": "cdce04155deb291d95d5b2a8a45a186e",
".git/objects/a5/e6a3dc9b53b1cfa351da5e58bd6bc7112594df": "2809c0fee21d146c851b74e6be1080da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/cb/5dc0f573d7b6fdf3edd083662d92227965de98": "15f6e2716a0dc96d813bc51ad8712982",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/ea39c2182bfd796c646d25b15f3ab3b85c3132": "727fe1e4fefccf9eb60485d5c7f7f5c3",
".git/objects/e5/8977869fc4a6a20b81c17bf9c22818ff5b4e19": "9381edc2eebf00b59d49ea227ec527f4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1bb5703f3a94589cfac66224577374a3229c55": "6373bea64eddbe8fc71269b9bfd46530",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f5/f7a83ccddf836007e466b064ce4a021573ee85": "b6ba63581ad19ea6d87ea7f8f888693d",
".git/refs/heads/master": "461f39f72210b34db751e4115b4ec055",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "461f39f72210b34db751e4115b4ec055",
"assets/AssetManifest.bin": "bb26937fd5c029ca35f841a832028963",
"assets/AssetManifest.bin.json": "1323cef78b91a03228f7fe8653590305",
"assets/AssetManifest.json": "9235bab921dafc3ddf1accefa3934ed5",
"assets/assets/report_cards.json": "399271369bcf9be1c944110393d41594",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eff7ac1ae7035362b46e8db3e0e874a8",
"assets/NOTICES": "bc283f7393889b47561c463ebc24bc47",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "30196f57ec3bce4c6d3f5055bb1c700a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c4a62ef942dc6afb7ef8765506fd9b4",
"/": "9c4a62ef942dc6afb7ef8765506fd9b4",
"main.dart.js": "e55ca7b9be1b93181e535e4101890730",
"manifest.json": "df34fae6793f4b29f0af741e6500d1d0",
"RankLab-webapp/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"RankLab-webapp/.git/config": "c2f4b67cb035616397d9ebda44bed5d3",
"RankLab-webapp/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"RankLab-webapp/.git/FETCH_HEAD": "99cf87938672b2ef540975a0556374b8",
"RankLab-webapp/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"RankLab-webapp/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"RankLab-webapp/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"RankLab-webapp/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"RankLab-webapp/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"RankLab-webapp/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"RankLab-webapp/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"RankLab-webapp/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"RankLab-webapp/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"RankLab-webapp/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"RankLab-webapp/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"RankLab-webapp/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"RankLab-webapp/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"RankLab-webapp/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"RankLab-webapp/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"RankLab-webapp/.git/index": "897ca9b5e2bb0734a57ff1af1b4d66c9",
"RankLab-webapp/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"RankLab-webapp/.git/logs/HEAD": "1c70d1e9c76d4daff692b1c55662cc1f",
"RankLab-webapp/.git/logs/refs/heads/main": "1c70d1e9c76d4daff692b1c55662cc1f",
"RankLab-webapp/.git/logs/refs/remotes/origin/HEAD": "0ead4902343d6b6d4ff7498fc2ca8b1f",
"RankLab-webapp/.git/logs/refs/remotes/origin/main": "dc8aabb5b0ab21433588f09c6dbd2031",
"RankLab-webapp/.git/objects/93/c66f73d55d54c361993b170be845db585bdf97": "427e0ef1d23e89b684234888389c0ffb",
"RankLab-webapp/.git/objects/b2/cf562d0a10226e0c6a3b67ba9d79524c68ade3": "55f390b535051ed574fd3d729d15709a",
"RankLab-webapp/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"RankLab-webapp/.git/objects/e0/83c1591630f6fdeea2fe267bebe0f6154e3697": "f253fb84579aae7886c2553b8cb9d8a2",
"RankLab-webapp/.git/refs/heads/main": "02107d6e1fe4f5c291e08c2d677fc079",
"RankLab-webapp/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"RankLab-webapp/.git/refs/remotes/origin/main": "02107d6e1fe4f5c291e08c2d677fc079",
"RankLab-webapp/LICENSE": "92ff1ae19d9e073a276051283ee2ae28",
"version.json": "9169efc0101869e17dd633fefdc948d2"};
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
