/* Custom Interactive Logic for TM Creative Lab */

$(document).ready(function () {
    // 1. Preloader Logic
    if ($('#preloader-page').length) {
        setTimeout(function () {
            $('#preloader-page').fadeOut(1000, function () {
                $('#postload').show(); // Using show instead of fadeIn to avoid layout shifts if already visible
                initParticles();
                initAnimations();
            });
        }, 1500);
    } else {
        $('#postload').show();
        initParticles();
        initAnimations();
    }

    // 2. Materialize Initialization
    $('.sidenav').sidenav({
        edge: 'right'
    });
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();

    // 3. Particles.js Initialization - Softer for TM Lab
    function initParticles() {
        if ($('#particles-js').length) {
            particlesJS("particles-js", {
                "particles": {
                    "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
                    "color": { "value": "#760000" },
                    "shape": { "type": "circle" },
                    "opacity": { "value": 0.2, "random": true },
                    "size": { "value": 2, "random": true },
                    "line_linked": { "enable": true, "distance": 200, "color": "#760000", "opacity": 0.1, "width": 1 },
                    "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
                    "modes": { "grab": { "distance": 250, "line_linked": { "opacity": 0.3 } } }
                },
                "retina_detect": true
            });
        }
    }

    // 4. Branding Text Animation
    function initAnimations() {
        const texts = [
            "Estratégia com alma.",
            "Design com propósito.",
            "Conexão real.",
            "Comunicação verdadeira."
        ];
        let count = 0;
        const textElement = $('.main-text-change');

        if (textElement.length) {
            setInterval(() => {
                textElement.fadeOut(600, function () {
                    $(this).text(texts[count % texts.length]).fadeIn(600);
                    count++;
                });
            }, 4000);
        }
    }

    // 5. Smooth Scroll
    $('a[href^="#"]').on('click', function (event) {
        var href = $(this).attr('href');
        if (href.startsWith('#')) {
            var target = $(href);
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        }
    });

    // 6. Work Process Hover Logic (Axios Style)
    $('.rs-work-process .process-item').on('mouseenter', function () {
        $('.rs-work-process .process-item').removeClass('active');
        $(this).addClass('active');
    });

    // 7. Navbar Scroll Effect
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.nav-wrapper').css({
                'backdrop-filter': 'blur(20px)',
                'background': 'rgba(118, 0, 0, 0.9)',
                'border-bottom': '1px solid rgba(213, 92, 121, 0.1)'
            });
        } else {
            $('.nav-wrapper').css({
                'backdrop-filter': 'blur(12px)',
                'background': 'rgba(118, 0, 0, 0.8)',
                'border': '1px solid rgba(213, 92, 121, 0.2)'
            });
        }
    });
});
