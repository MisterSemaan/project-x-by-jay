window.addEventListener('load', function () {
    const aside = document.querySelector("body>aside");
    aside.addEventListener('click', scrollCallBack, false);

    function scrollCallBack(event) {
        if (event.target.classList.contains("menu-item") || findAncestor(event.target, "menu-item")) {
            let hash;
            if (event.target.tagName === "A") {
                hash = event.target.hash;
                event.preventDefault();
            } else {
                hash = event.target.getElementsByTagName("a")[0].hash;
            }

            const posTop = document.querySelector(hash).offsetTop;
            TweenMax.to(window, 0.5, {scrollTo: posTop});

        }

    }
}, false);


function findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls)) ;
    return el;
}

const flags = document.getElementsByClassName('flag_link');


Array.prototype.forEach.call(flags, function(e){
    e.addEventListener('click', function(){
        const lang = e.getAttribute('data-lang');
        const languageSelect = document.querySelector("select.goog-te-combo");
        languageSelect.value = lang;
        languageSelect.dispatchEvent(new Event("change"));
    });
});