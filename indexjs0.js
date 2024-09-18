const testimonials = document.querySelectorAll(".testimonial-slide");
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.add("hidden");
  });
  testimonials[index].classList.remove("hidden");
}

document.getElementById("next").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.getElementById("prev").addEventListener("click", () => {
  currentTestimonial =
    (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Show the first testimonial on load
showTestimonial(currentTestimonial);
