import "../scss/main.scss";

console.log("Theme loaded");

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");

    const link = li.querySelector("a");

    if (link.getAttribute("href") === "#" + current) {
      li.classList.add("active");
    }
  });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// document.querySelector(".hire-btn").addEventListener("click", function (e) {
//   e.preventDefault();

//   document.querySelector("#contact").scrollIntoView({
//     behavior: "smooth",
//   });
// });


// const form = document.getElementById("contactForm");

// form.addEventListener("submit", function(e){

//     e.preventDefault();

//     const formData = new FormData(form);

//     fetch("/wp-admin/admin-ajax.php?action=save_contact_form", {
//         method: "POST",
//         body: formData
//     })
//     .then(res => res.json())
//     .then(data => {

//         if(data.success){
//             alert("Message saved!");
//             form.reset(); // clear form
//         }

//     });

// });