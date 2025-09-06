let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        button.style.display = 'flex'; 
    } else {
        button.style.display = 'none'; 
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});