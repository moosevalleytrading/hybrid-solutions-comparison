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

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Service worker registration with GitHub Pages path
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/hybrid-solutions-comparison/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
                updateOnlineStatus();
            })
            .catch(err => {
                console.error('ServiceWorker registration failed: ', err);
            });
    });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
});
