self.addEventListener("install", e => {
    // console.log("Install decode!");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo_2.jpg"]);
        })
    );
});


self.addEventListener("fetch", e => {
    // console.log(`Intercepting fetch request for: ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
