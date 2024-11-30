// Wait for the document to be fully loaded
$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
    });

    // Back to top button functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#backToTop').fadeIn();
        } else {
            $('#backToTop').fadeOut();
        }
    });

    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    // Sample collection data
    const collections = [
        {
            name: "Model: L'Élégance du Rios",
            description: "Timeless elegance meets modern sophistication",
            price: "$299",
            image: "images/rioswatchcropped.jpg"
        }
    ];

    // Populate collection section
    const collectionContainer = $('#collection .row');
    collections.forEach(watch => {
        collectionContainer.append(`
            <div class="col-md-4 mx-auto">
                <div class="card collection-card">
                    <img src="${watch.image}" class="card-img-top" alt="${watch.name}">
                    <div class="card-body">
                        <h5 class="card-title">${watch.name}</h5>
                        <p class="card-text">${watch.description}</p>
                        <p class="card-text"><strong>${watch.price}</strong></p>
                        <a href="#" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        `);
    });

    // Sample testimonials data
    const testimonials = [
        {
            name: "John Smith",
            text: "The craftsmanship of my Rios Watch Co timepiece is exceptional. It's more than just a watch - it's a piece of art.",
            role: "CEO, Tech Innovations"
        },
        {
            name: "Sarah Johnson",
            text: "I've never received more compliments on a watch. The attention to detail is remarkable.",
            role: "Fashion Designer"
        },
        {
            name: "Michael Chu",
            text: "The perfect blend of traditional watchmaking and modern design. Worth every penny.",
            role: "Watch Collector"
        }
    ];

    // Populate testimonials carousel
    const testimonialContainer = $('#testimonialCarousel .carousel-inner');
    testimonials.forEach((testimonial, index) => {
        testimonialContainer.append(`
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <div class="testimonial-card text-center">
                    <p class="mb-4">"${testimonial.text}"</p>
                    <h5 class="mb-1">${testimonial.name}</h5>
                    <p class="text-muted">${testimonial.role}</p>
                </div>
            </div>
        `);
    });
});
