//active page features.
document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar li a");
    const currentPath = window.location.pathname;
    navbarLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


//Animation of hidden and visisble
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.hidden-section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-section');
                entry.target.classList.remove('hidden-section');
            } else {
                entry.target.classList.add('hidden-section');
                entry.target.classList.remove('visible-section');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


//hidden and visisble feature for about page.
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('#aboutsection .hidden');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


//animation between changing of pages
document.addEventListener("DOMContentLoaded", () => {
    const contentWrapper = document.querySelector("#content-wrapper");
    const navbar = document.querySelector("#navbar");
    
    const addFadeIn = () => {
        contentWrapper.classList.add("fade-in");
    };

    const removeFadeIn = () => {
        contentWrapper.classList.remove("fade-in");
    };

    const slideInNavbar = () => {
        navbar.classList.add("slide-in");
        navbar.classList.remove("slide-out");
    };

    const slideOutNavbar = () => {
        navbar.classList.add("slide-out");
        navbar.classList.remove("slide-in");
    };

    addFadeIn();
    slideInNavbar();

    document.querySelectorAll("#navbar a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            removeFadeIn();
            slideOutNavbar();
            
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        });
    });
});


//code for contact us form things.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const messageDiv = document.getElementById("message");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("/contact", {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        createAlert("Thank you for contacting us!", "success");
        form.reset();
      })
      .catch((error) => {
        console.error("There has been a problem with your fetch operation:", error);
        createAlert("There was a problem submitting the form.", "error");
      });
  });

  function createAlert(message, type) {
    const alertDiv = document.createElement("div");
    alertDiv.className = `alert ${type}`;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  }
});


//footer page changing transitions
document.addEventListener('DOMContentLoaded', function() {
    function handleLinkClick(event) {
        event.preventDefault(); 
        const targetUrl = this.getAttribute('href'); 
        document.body.classList.add('fade-out'); 

        setTimeout(function() {
            window.location.href = targetUrl; 
        }, 300);
    }

    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => link.addEventListener('click', handleLinkClick));
});



//for crad animation of home
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    function checkCards() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (cardPosition < screenPosition) {
                card.classList.add('visible-card');
            }
        });
    }

    window.addEventListener('scroll', checkCards);
    checkCards();
});


//image slider script
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1, 
        spaceBetween: 30,
        effect: 'slide',
    });
});

