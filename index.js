// template_b80pczh
// service_4pe60tk
// BLPJwREvxb2RlmsRh

const logoAnimation = document.getElementById("svglogoanimation"); 
const bkgdVideo = document.getElementById("backgroundvideo");

setTimeout(() => {
    logoAnimation.classList.add("fade-out");

    setTimeout(() => {
        logoAnimation.remove();
        bkgdVideo.play();
    }, 300);
}, 11000);


let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    } else {
        document.body.classList.remove("dark-theme")
    }
}

/*=========== ↓ Contact Modal and Email Processing ↓ ===========*/ 

function toggleModal() {
    const form = document.getElementById("contact__form");
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");

    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
        return;
    }

    // Reset the contact form
    form.reset();
    form.style.display = "block";

    // Hide loading and success overlays
    loading.classList.remove("modal__overlay--visible");
    success.classList.remove("modal__overlay--visible");

    isModalOpen = true;
    document.body.classList.add("modal--open");
}

function contact(event) {
    event.preventDefault();

    const form = event.target;
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");

    loading.classList.add("modal__overlay--visible");

    emailjs
        .sendForm(
            "service_4pe60tk",
            "template_prcb3t9",
            form,
            "BLPJwREvxb2RlmsRh"
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            form.style.display = "none";
            success.classList.add("modal__overlay--visible");
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");

            alert(
                "Email temporarily unavailable. Please email me at: pchangdesigner@gmail.com"
            );
        });
}


/*=========== ↓ Lightbox ↓ ===========*/ 

const lightbox = document.getElementById("lightbox");
const mainImage = document.getElementById("lightbox-image");
const thumbsContainer = document.getElementById("lightbox-thumbs");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const closeBtn = document.getElementById("close");

const galleries = {
  logology: [
    "assets/logos/casanovacrew.svg",
    "assets/logos/mountaindentallab.svg",
    "assets/logos/gardensun.svg",
    "assets/logos/mojoemusic.png",
    "assets/logos/protoprism.png",
    "assets/logos/kshamica.svg",
    "assets/logos/ptalogo.svg",
    "assets/logos/harmonikmmmproject.png",
    "assets/logos/dentricity.svg",
    "assets/logos/2wnty3.svg",
    "assets/logos/lemonz.svg",
    "assets/logos/pandaconstruction.svg",
    "assets/logos/infannette.svg"
  ],
  
  graphicdesign: [
    "assets/graphics/lumaflex-01.png",
    "assets/graphics/lumaflex-04.png",
    "assets/graphics/lumaflex-02.png",
    "assets/graphics/lumaflex-03.png",
    "assets/graphics/lumaflex-05.png",
    "assets/graphics/aduro-01.png",
    "assets/graphics/aduro-02.png",
    "assets/graphics/aduro-03.png",
    "assets/graphics/energylounger-01.png",
    "assets/graphics/energylounger-02.png",
    "assets/graphics/energylounger-03.png",
    "assets/graphics/casanovacrewbanners.png",
    "assets/graphics/engeltshirt01.png",
    "assets/graphics/engeltshirt02.png",
    "assets/graphics/mdltricouponmailer.png",
    "assets/graphics/starseedsummit.png",
    "assets/graphics/cosmicreuniontrinity.png",
    "assets/graphics/greggbradeninterview.png",
    "assets/graphics/richarddolaninterview.png",
    "assets/graphics/rainbowlightbody.png", 
    "assets/graphics/thedebtillusion.png",
    "assets/graphics/greerthedeepstate.png",
    "assets/graphics/drgreerremoteviewing.png",
    "assets/graphics/mayabiotics.png",
    "assets/graphics/kshamica01.png",
    "assets/graphics/kshamica02.png",
    "assets/graphics/infannette01.png",
    "assets/graphics/infannette02.png"
  ]
};

let currentGallery = [];
let currentIndex = 0;

// OPEN LIGHTBOX
document.querySelectorAll("[data-gallery]").forEach((trigger) => {
  trigger.addEventListener("click", () => {

    const name = trigger.dataset.gallery;
    currentGallery = galleries[name];
    currentIndex = 0;

    renderThumbs();
    updateImage();

    lightbox.classList.add("active");
  });
});

// RENDER THUMBNAILS
function renderThumbs() {
  thumbsContainer.innerHTML = "";

  currentGallery.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;

    if (index === 0) img.classList.add("active");

    img.addEventListener("click", () => {
      currentIndex = index;
      updateImage();
    });

    thumbsContainer.appendChild(img);
  });
}

// UPDATE MAIN IMAGE
function updateImage() {
  mainImage.src = currentGallery[currentIndex];

  document.querySelectorAll(".lightbox-thumbs img")
    .forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
}

// NAVIGATION
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentGallery.length;
  updateImage();
});

// CLOSE
closeBtn.addEventListener("click", () => {
    closeLightbox();
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeLightbox(); 
  }
});

function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.classList.add("closing");

    setTimeout(() => {
        lightbox.classList.remove("closing");
    }, 500);
}


/*=========== ↓ Burger Navigation Menu ↓ ===========*/ 

function openMenu() {
    const navList = document.querySelector('.nav__link--list');
    const hamburger = document.querySelector('.nav__hamburger');

    const isOpen = navList.classList.toggle('open');

    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
}

document.querySelectorAll('.nav__link--anchor').forEach(link => {
    link.addEventListener('click', () => {
        const navList = document.querySelector('.nav__link--list');
        const hamburger = document.querySelector('.nav__hamburger');

        navList.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

















