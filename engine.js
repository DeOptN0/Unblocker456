// 1. Force Desktop User-Agent via Meta Tag
const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(meta);

// 2. Override Navigator properties to trick sites
Object.defineProperty(navigator, 'userAgent', {
    get: function() { return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"; }
});

// 3. Example: Inject a script to hide ads or fix layout
window.onload = function() {
    console.log("Blobby Engine Loaded");
    // Example: Hide elements with class 'ad-banner'
    const ads = document.querySelectorAll('.ad-banner');
    ads.forEach(ad => ad.style.display = 'none');
};
