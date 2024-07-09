document.querySelectorAll('.btn-group .btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.btn-group .btn').forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        this.classList.add('active');
        
        // Hide all content sections
        document.querySelectorAll('.content_section').forEach(section => section.classList.remove('active'));
        // Show the content section associated with the clicked button
        const contentId = 'content' + this.id.replace('button', '');
        document.getElementById(contentId).classList.add('active');
    });
});



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
