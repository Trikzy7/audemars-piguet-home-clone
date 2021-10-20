const logo_header_black = document.querySelector('.logo_header_black');
const logo_header_white = document.querySelector('.logo_header_white');

 
 // ----------------------- CHANGE LOGO MOBILE
    if (window.innerWidth <= 770) {
        logo_header_black.src = 'img/mobile/home/header/logo/audemars-piguet-logo-mini-blue.svg' ;
        logo_header_white.src = 'img/mobile/home/header/logo/audemars-piguet-logo-mini-white.svg' ;
    }

    window.addEventListener('resize', ()=> {
        if (window.innerWidth <= 770) {
            logo_header_black.src = 'img/mobile/home/header/logo/audemars-piguet-logo-mini-blue.svg' ;
            logo_header_white.src = 'img/mobile/home/header/logo/audemars-piguet-logo-mini-white.svg' ;
        }
        else {
            logo_header_black.src = 'img/desktop/home/header/logo/audemars-piguet-logo-blue.svg' ;
            logo_header_white.src = 'img/desktop/home/header/logo/audemars-piguet-logo-white.svg' ;
        }
    })  




document.addEventListener('DOMContentLoaded', ()=> {




    const header = document.querySelector('.header');
    
    
    const toggle_btn = document.querySelector('.toggle_btn');
    const menu_nav_left = document.querySelector('.menu_nav_left');
    const menu_nav_right = document.querySelector('.menu_nav_right');
    const List_icon_header = document.querySelectorAll('.icon_header');



    const List_menu_nav_left_item_link = document.querySelectorAll('.menu_nav_left_item_link');
    const List_menu_nav_right_item_link = document.querySelectorAll('.menu_nav_right_item_link');




    const main_content_site = document.querySelector('.main_content_site');
    const popin_menu_open_container  = document.querySelector('.popin_menu_open_container'); 



    const body = document.querySelector('body');



    const all_footer_title_menu_nav = document.querySelectorAll('.footer_title_menu_nav');










    let is_open_menu = false;  // Pair --> Closed    Impaire --> Open


    toggle_btn.addEventListener('click', ()=> {

        is_open_menu = !is_open_menu;

        if(is_open_menu) {                      // Si on ouvre le menu
            toggle_btn.style.setProperty('--backColorToggleHeader', '#000000' );
            console.log('ouvert');

            // DECOMENT
            main_content_site.style.visibility = "hidden";
            popin_menu_open_container.style.visibility = "visible";
        }
        else if( window.scrollY == 0) {         // Si on ferme le menu et qu'on est à scroll 0
            toggle_btn.style.setProperty('--backColorToggleHeader', '#ffffff' );
            console.log('Fermé');

            // DECOMENT
            main_content_site.style.visibility = "visible";
            popin_menu_open_container.style.visibility = "hidden";
        }
        else {

            // DECOMENT
            main_content_site.style.visibility = "visible";
            popin_menu_open_container.style.visibility = "hidden";
        }
        

        toggle_btn.classList.toggle('toggle_btn_open');
        header.classList.toggle('header_active_white');

        logo_header_white.classList.toggle('header_active_logo_white_display_none');
        logo_header_black.classList.toggle('header_active_logo_black_display_block');

        List_icon_header.forEach(aIcon => {
            aIcon.classList.toggle('header_active_icon_black');
        })

        menu_nav_left.classList.toggle('header_active_display_none_nav');
        menu_nav_right.classList.toggle('header_active_display_none_nav');

        body.classList.toggle('body_hide_scrollbar');
        body.classList.toggle('body_overflow_hidden');


        popin_menu_open_container.scrollTo(0, 0) ;

    })







    // Quand on arrive sur le site --> Hide le popin menu   DECOMMENT 
    if (!is_open_menu) {
        main_content_site.style.visibility = "visible";

        popin_menu_open_container.style.visibility = "hidden";
    }







    if (window.scrollY > 0) {
        header.style.top = "-" + (header.offsetHeight).toString() + "px";
    }

    // -------------------- On gère le scroll
    let  lastScrollTop = 0;

    window.addEventListener('scroll', ()=> {

        // ---------------------- SHOW / HIDE MENU
        var scrollFromTop = window.scrollY;

        if ( scrollFromTop > lastScrollTop) {   // On descend
            header.style.top = "-" + (header.offsetHeight).toString() + "px";
        }
        else {                                  // On monte
            header.style.top = "0px";
        }

        lastScrollTop = scrollFromTop;

        






        if(is_open_menu) {              // SCROLL --> Menu ouvert -> En noir

            // Menu TOP = 0
            header.style.top = "0px";

            toggle_btn.style.setProperty('--backColorToggleHeader', '#000000' );



            // main_content_site.style.visibility = "hidden";

            // popin_menu_open_container.style.visibility = "visible";
        }
        else {                          // SCROLL --> Menu Fermé 
            if(window.scrollY == 0) {       // En blanc si le scroll == 0
                
                toggle_btn.style.setProperty('--backColorToggleHeader', '#ffffff' );

                
                header.classList.remove('header_scrolled_white');



                List_menu_nav_left_item_link.forEach(aItem => {
                    aItem.classList.remove('menu_nav_left_item_link_scrolled_black') ;
                })


                logo_header_white.classList.remove('header_scrolled_logo_white_display_none');
                logo_header_black.classList.remove('header_scrolled_logo_black_display_block');




                List_menu_nav_right_item_link.forEach(aItem => {
                    aItem.classList.remove('menu_nav_right_item_link_scrolled_black') ;
                })




                List_icon_header.forEach(aIcon => {
                    aIcon.classList.remove('header_scrolled_icon_black');
                })
            }
            else {                          // En noir si le scroll > 0
                
                // console.log("Mettre le header en blanc et les items en noir");
                toggle_btn.style.setProperty('--backColorToggleHeader', '#000000' );


                header.classList.add('header_scrolled_white');


                List_menu_nav_left_item_link.forEach(aItem => {
                    aItem.classList.add('menu_nav_left_item_link_scrolled_black') ;
                })



                logo_header_white.classList.add('header_scrolled_logo_white_display_none');
                logo_header_black.classList.add('header_scrolled_logo_black_display_block');




                List_menu_nav_right_item_link.forEach(aItem => {
                    aItem.classList.add('menu_nav_right_item_link_scrolled_black') ;
                })



                List_icon_header.forEach(aIcon => {
                    aIcon.classList.add('header_scrolled_icon_black');
                })
            }


            // main_content_site.style.visibility = "visible";

            // popin_menu_open_container.style.visibility = "hidden";
        }
        
    })





    all_footer_title_menu_nav.forEach(unTitle => {

        unTitle.addEventListener('click', function() {
            
            this.parentNode.querySelector('.footer_container_content_menu').classList.toggle('hide_footer_container_content_menu');
    
            this.querySelector('.footer_icon_accordeon_plus').classList.toggle('display_none');
            this.querySelector('.footer_icon_accordeon_minus').classList.toggle('display_block');
        })
    })



    

})






















