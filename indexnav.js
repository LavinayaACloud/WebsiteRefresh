const navigation = document.querySelector('.navigation');
const highlight = document.querySelector('.highlight');
const items = document.querySelectorAll('.navigation li');

//Set initial position for highlight
highlight.style.width = items[0].offsetWidth + 'px';
highlight.style.left = items[0].offsetLeft + 'px';

items.forEach((item, index) => {
    item.addEventListener('click', (e) => {
    e.preventDefault();

    const link = item.querySelector('a');
    const url = link?.href;
    const newTab = link?.target === "_blank";

    // Remove active class from all items
    items.forEach(el => el.classList.remove('active'));

    // Add active class to clicked item
    item.classList.add('active');

    // Move highlight
    highlight.style.width = item.offsetWidth + 'px';
    highlight.style.left = item.offsetLeft + 'px';

    // Delay navigation for animation
    setTimeout(() => {
        if (newTab) {
            window.open(url, "_blank");
        } else {
            window.location.href = url;
        }
    }, 300); // match your animation timing
});

    item.addEventListener('mouseenter', () => {
        if (!item.classList.contains('active')) {
        highlight.style.width = item.offsetWidth * 0.8 + 'px';
        highlight.style.left = item.offsetLeft + (item.offsetWidth * 0.1) + 'px';
        }
    });

    item.addEventListener('mouseleave', () => {
        const activeItem = document.querySelector('.navigation li.active');
        highlight.style.width = activeItem.offsetWidth + 'px';
        highlight.style.left = activeItem.offsetLeft + 'px';
    });
});

//Handle window resize
window.addEventListener('resize', () => {
    const activeItem = document.querySelector('.navigation li.active');
    highlight.style.width = activeItem.offsetWidth + 'px';
    highlight.style.left = activeItem.offsetLeft + 'px';
});