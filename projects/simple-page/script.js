const run = () => {

    // sticky menu

    const mainNav = document.querySelector("#main-nav");
    let isSticky = false;
    let position = null;

    const main = document.querySelector("#main-container"); 

    // todo: scroll should be throttled
    document.addEventListener("scroll", () => {
        position = window.scrollY;

        if(!isSticky) {
            if(position > 160) {
                //add css class
                menuItems.classList.add("sticky");
                isSticky = true;
                document.body.classList.add("padding");
            }
        } else {
            if(position < 160) {
                menuItems.classList.remove("sticky");
                document.body.classList.remove("padding");
                isSticky = false;
            }
        }
    });

    // smooth scroll with offset
    // didnt have time to think about generic solution

    const servicesLink = document.querySelector("#anchor-services");
    const servicesHeader = document.querySelector("#services");

    servicesLink.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.history.pushState("", "", '#services');
        const position = servicesHeader.offsetTop;
        const offset = 60;
        window.scrollTo({
            top: position - offset,
            behavior: 'smooth'
        });
    })

    const homeLink = document.querySelector("#anchor-home");
    const homeHeader = document.querySelector("#home");

    homeLink.addEventListener("click", (ev) => {
        ev.preventDefault();
        window.history.pushState("", "", '#home');
        const position = homeHeader.offsetTop;
        const offset = 60;
        window.scrollTo({
            top: position - offset,
            behavior: 'smooth'
        });

    })

    // burger menu

    const menuToggle = document.querySelector("#menu-toggle");
    const menuItems = document.querySelector("#menu-items");
    let showMenu = false;

    menuToggle.addEventListener("click", () => {
        showMenu = !showMenu;
        if(showMenu) {
            menuItems.classList.add("show-menu");
        } else {
            menuItems.classList.remove("show-menu");
        }
    })

    menuItems.addEventListener("click", () => {
        menuItems.classList.remove("show-menu");
    })
    
}

document.addEventListener("DOMContentLoaded", run);

