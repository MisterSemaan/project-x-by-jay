window.addEventListener('load', function () {

    const menu_items = document.querySelectorAll("aside .menu-item");

    //ugly version:
    /*for(i=0;i<menu_items.length; i++){
        menu_items[i].addEventListener('click',function(){
            //do something
        },false);
    }*/

    //better version:
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