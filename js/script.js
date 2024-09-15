// Select all GIFs and pause them on the first frame (freezeframe!)
document.querySelectorAll('article img[src$=".gif"]').forEach(img => {
    img.classList.add('freezeframe');
});

// Then play GIFs on hover only
new Freezeframe({
    trigger: 'hover',
})