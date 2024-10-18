/**
* Template Name: Moderna
* Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Dynamically Change Service Content
   */
  const services = {
    dryvan: {
      image: 'assets/img/cargodite/CargoDryvan (1).jpg',
      title: 'Dryvan Freightload',
      description: `
        Our Dryvan FreightLoad service ensures safe and reliable transport of your goods across the nation. 
        We prioritize security and efficiency in every delivery.
      `
    },
    refrigerated: {
      image: 'assets/img/cargodite/termo.jpg',
      title: 'Refrigerated Freightload',
      description: `
        When it comes to temperature-sensitive goods, our refrigerated freightload service offers the precision 
        and control that you need.
      `
    },
    warehousing: {
      image: 'assets/img/cargodite/warehouse.jpeg',
      title: 'Warehousing distribution',
      description: `
        Our warehousing distribution services offer seamless integration with your supply chain, providing storage 
        solutions and efficient distribution.
      `
    },
    crossborder: {
      image: 'assets/img/cargodite/importexport.jpg',
      title: 'Crossborder drayage',
      description: `
        Our crossborder drayage services facilitate smooth transportation of goods across borders, ensuring 
        compliance with all regulations.
      `
    }
  };

  /**
   * Dynamically Change Service Content
   */
  const servicios = {
    seca: {
      image: '../assets/img/cargodite/CargoDryvan (1).jpg',
      title: 'Carga en caja seca',
      description: `
        Nuestro servicio de carga en caja seca garantiza el transporte seguro y 
        confiable de sus mercancías en todo el país. Priorizamos la seguridad y la eficiencia en cada entrega.
      `
    },
    refrigerada: {
      image: '../assets/img/cargodite/termo.jpg',
      title: 'Caja refrigerada',
      description: `
        When it comes to temperature-sensitive goods, our refrigerated freightload service offers the precision 
        and control that you need.
      `
    },
    almacenamiento: {
      image: '../assets/img/cargodite/warehouse.jpeg',
      title: 'Bodega y Distribución',
      description: `
        Nuestros servicios de distribución y almacenamiento ofrecen una integración perfecta con su cadena de suministro, 
        brindando soluciones eficientes.
      `
    },
    cruce: {
      image: '../assets/img/cargodite/importexport.jpg',
      title: 'Cruce fronterizo entre México y Estados Unidos',
      description: `
        Nuestros servicios de transporte fronterizo facilitan el transporte fluido de mercancías a través de las fronteras, 
        garantizando el cumplimiento de todas las normativas.
      `
    }
  };

  // Handle click events on service links
document.querySelectorAll('.service-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove active class from all links
    document.querySelectorAll('.service-link').forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    this.classList.add('active');

    // Get the service key from the clicked link
    const serviceKey = this.getAttribute('data-service');
    const lang=this.getAttribute('data-lang')

    const service=lang==='en'?services[serviceKey] : servicios [serviceKey]

    // Update content based on the selected service
    document.getElementById('service-image').src = service.image;
    document.getElementById('service-title').textContent = service.title;
    document.getElementById('service-description').innerHTML = service.description;      
  });
});

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Auto generate the carousel indicators
   */
  document.querySelectorAll('.carousel-indicators').forEach((carouselIndicator) => {
    carouselIndicator.closest('.carousel').querySelectorAll('.carousel-item').forEach((carouselItem, index) => {
      if (index === 0) {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}" class="active"></li>`;
      } else {
        carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest('.carousel').id}" data-bs-slide-to="${index}"></li>`;
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

})();