// Toggle sections
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        header.querySelector('i').classList.toggle('fa-chevron-up');
        header.querySelector('i').classList.toggle('fa-chevron-down');
    });
});

// Offline capability indicator function
function updateOnlineStatus() {
    const indicator = document.getElementById('offline-indicator');
    if (navigator.onLine) {
        indicator.style.display = 'none';
    } else {
        indicator.style.display = 'block';
    }
}

// Online/Offline event listeners
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Service worker registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
                updateOnlineStatus(); // Initial check
            })
            .catch(err => {
                console.error('ServiceWorker registration failed: ', err);
            });
    });
}

// Add installation prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});
