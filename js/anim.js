

document.addEventListener('DOMContentLoaded', ()=> {


    // controler
    var controller = new ScrollMagic.Controller();


    // Tween

        // SLIDER 1 
            // TITLE
    var slider1_title = TweenMax.fromTo(".title_section_slider1", 0.8, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y: 0, ease: Power2.easeInOut}
    
    
    )        // On fait l'anim sur ce qu'on veut

            // SLIDER
    var slider1_slider = TweenMax.fromTo(".slider1_slider", 0.8, 
            {opacity: 0, x: 75, y: 10, ease: Power2.easeInOut},
            {opacity: 1, x: 0, y:0, ease: Power2.easeInOut}


    )      


        // SLIDER 2
            // TITLE
    var slider2_title = TweenMax.fromTo(".title_section_slider2", 0.8, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y: 0, ease: Power2.easeInOut}


    )       

            // SLIDER
    var slider2_slider = TweenMax.fromTo(".slider2_slider", 0.8, 
            {opacity: 0, x: 75, y: 10, ease: Power2.easeInOut},
            {opacity: 1, x: 0, y:0, ease: Power2.easeInOut}


    )   



        // SLIDER 3
            // TITLE
    var slider3_title = TweenMax.fromTo(".title_section_slider3", 0.8, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y: 0, ease: Power2.easeInOut}


    )      

            // SLIDER
    var slider3_slider = TweenMax.fromTo(".slider3_slider", 0.8, 
            {opacity: 0, x: 75, y: 10, ease: Power2.easeInOut},
            {opacity: 1, x: 0, y:0, ease: Power2.easeInOut}


    )   




        // TXT IMG 1 
            // TITLE
    var section1_txt_img_title = TweenMax.fromTo(".section1_txt_img_title", 0.7, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y: 0, ease: Power2.easeInOut}

    )      

            // TXT
    var section1_txt_texte = TweenMax.fromTo(".section1_txt_texte", 1.1, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y:0, ease: Power2.easeInOut}

    )   


            // LINK
    var section1_slider_link_more_img_txt = TweenMax.fromTo(".section1_slider_link_more_img_txt", 1.5, 
            {opacity: 0, top: 75, ease: Power2.easeInOut},
            {opacity: 1, top:0, ease: Power2.easeInOut}
    
    )   



        // TXT IMG 2
            // TITLE
    var section2_txt_img_title = TweenMax.fromTo(".section2_txt_img_title", 0.7, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y: 0, ease: Power2.easeInOut}

    )      

            // TXT
    var section2_txt_texte = TweenMax.fromTo(".section2_txt_texte", 1.1, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y:0, ease: Power2.easeInOut}

    )   

            // LINK
    var section2_slider_link_more_img_txt = TweenMax.fromTo(".section2_slider_link_more_img_txt", 1.5, 
            {opacity: 0, top: 75, ease: Power2.easeInOut},
            {opacity: 1, top:0, ease: Power2.easeInOut}
    
    )   



       // TXT IMG 3
            // TITLE
    var section3_txt_img_title = TweenMax.fromTo(".section3_txt_img_title", 0.7, 
    {opacity: 0, y: 75, ease: Power2.easeInOut},
    {opacity: 1, y: 0, ease: Power2.easeInOut}

    )      

            // TXT
    var section3_txt_texte = TweenMax.fromTo(".section3_txt_texte", 1.1, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y:0, ease: Power2.easeInOut}

    )   


            // LINK
    var section3_slider_link_more_img_txt = TweenMax.fromTo(".section3_slider_link_more_img_txt", 1.5, 
            {opacity: 0, top: 75, ease: Power2.easeInOut},
            {opacity: 1, top:0, ease: Power2.easeInOut}
    
    )   








       // TXT IMG 3
        // TITLE
    var section4_txt_img_title = TweenMax.fromTo(".section4_txt_img_title", 0.7, 
            {opacity: 0, y: 75, ease: Power2.easeInOut},
            {opacity: 1, y: 0, ease: Power2.easeInOut}

    )      


                // LINK
    var section4_slider_link_more_img_txt = TweenMax.fromTo(".section4_slider_link_more_img_txt", 1.3, 
            {opacity: 0, top: 75, ease: Power2.easeInOut},
            {opacity: 1, top:0, ease: Power2.easeInOut}
    
    )   













    // Scene scrollMagic

        // ---------------------- SLIDER 1
            // TITLE
    var scene_slider1_title = new ScrollMagic.Scene({triggerElement: ".container_section_slider_new_watch", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(slider1_title)
                                    .addTo(controller)


            // SLIDER

    var scene_slider1_slider = new ScrollMagic.Scene({triggerElement: ".container_section_slider_new_watch", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(slider1_slider)
                                    .addTo(controller)




        // ---------------------- SLIDER 2
            // TITLE
        var scene_slider2_title = new ScrollMagic.Scene({triggerElement: ".container_section_slider_our_collection", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(slider2_title)
                                    .addTo(controller)


            // SLIDER

        var scene_slider2_slider = new ScrollMagic.Scene({triggerElement: ".container_section_slider_our_collection", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(slider2_slider)
                                    .addTo(controller)





        // ---------------------- SLIDER 3
            // TITLE
        var scene_slider3_title = new ScrollMagic.Scene({triggerElement: ".container_section_slider_discover_passion", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(slider3_title)
                                    .addTo(controller)


            // SLIDER

        var scene_slider3_slider = new ScrollMagic.Scene({triggerElement: ".container_section_slider_discover_passion", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(slider3_slider)
                                    .addTo(controller)













        // ---------------------- TXT IMG 1
            // TITLE
        var section1_img_txt_title = new ScrollMagic.Scene({triggerElement: ".container_section1_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section1_txt_img_title)
                                    .addTo(controller)


            // TEXTE
        var section1_img_txt_texte = new ScrollMagic.Scene({triggerElement: ".container_section1_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section1_txt_texte)
                                    .addTo(controller)


                
            // LINK
        var section1_img_txt_link = new ScrollMagic.Scene({triggerElement: ".container_section1_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section1_slider_link_more_img_txt)
                                    .addTo(controller)







       // ---------------------- TXT IMG 2
            // TITLE
        var section2_img_txt_title = new ScrollMagic.Scene({triggerElement: ".container_section2_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section2_txt_img_title)
                                    .addTo(controller)


        // TEXTE
        var section2_img_txt_texte = new ScrollMagic.Scene({triggerElement: ".container_section2_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section2_txt_texte)
                                    .addTo(controller)



        // LINK
        var section2_img_txt_link = new ScrollMagic.Scene({triggerElement: ".container_section2_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section2_slider_link_more_img_txt)
                                    .addTo(controller)






    //    // ---------------------- TXT IMG 3
            // TITLE
        var section3_img_txt_title = new ScrollMagic.Scene({triggerElement: ".container_section3_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section3_txt_img_title)
                                    .addTo(controller)


            // TEXTE
        var section3_img_txt_texte = new ScrollMagic.Scene({triggerElement: ".container_section3_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section3_txt_texte)
                                    .addTo(controller)



            // LINK
        var section3_img_txt_link = new ScrollMagic.Scene({triggerElement: ".container_section3_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section3_slider_link_more_img_txt)
                                    .addTo(controller)








    //    // ---------------------- TXT IMG 3
            // TITLE
        var section4_img_txt_title = new ScrollMagic.Scene({triggerElement: ".container_section4_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section4_txt_img_title)
                                    .addTo(controller)



            // LINK
        var section4_img_txt_link = new ScrollMagic.Scene({triggerElement: ".container_section4_txt_img", offset: -25})    // On définit l'element qui va trigger m'anim (offset va mettre plus haut)
                                    .triggerHook(0.4)
                                    .reverse(false)
                                    .setTween(section4_slider_link_more_img_txt)
                                    .addTo(controller)





})