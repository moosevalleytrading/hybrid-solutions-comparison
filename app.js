// Toggle sections
document.querySelectorAll('.section-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        header.querySelector('i').classList.toggle('fa-chevron-up');
        header.querySelector('i').classList.toggle('fa-chevron-down');
    });
});

// Register service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
