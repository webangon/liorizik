var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});

var video_slide = document.querySelector('#uts-video-carousel')

if (video_slide != null) {
    var sd = new Splide('#uts-video-carousel', {
        perPage: 3,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
        classes: {
          arrows: 'splide__arrows',
          arrow: 'splide__arrow_vid',
          prev: 'splide__arrow--prev',
          next: 'splide__arrow--next',
        },
      }).mount(); 
} 

var sync_slide = document.querySelector('#uts-sync-carousel')

if (sync_slide != null) {

    var main = new Splide( '#main-slider', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  var thumbnails = new Splide( '#uts-sync-carousel', {
    gap         : 30,
    rewind      : true,
    pagination  : false,
    perPage    : 4,
    isNavigation: true,
    breakpoints : {
      600: {
        perPage: 2,
      },
    },
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();

}

var portfolio_carousel = document.querySelector('#uts-portfolio-carousel')

if (portfolio_carousel != null) {

      new Splide( '#uts-portfolio-carousel', {
    perPage    : 4,
    breakpoints: {
        640: {
            perPage: 1,
        },
    },
    classes: {
            arrows: 'splide__arrows',
            arrow : 'splide__arrow_vid',
            prev  : 'splide__arrow--prev',
            next  : 'splide__arrow--next',
    },        
} ).mount();

}


document.body.classList.remove('sidebar-open')
var body = document.querySelector('body')
document.querySelector('.side-close').onclick = function () {
    body.classList.remove('sidebar-open')
}

document.querySelector('.mobile-tap').onclick = function () {
    body.classList.add('sidebar-open')
}

document.querySelector('.menu .plus').onclick = function () {
    this.parentNode.nextSibling.classList.toggle('show-sub')
}

var mobile_expand = document.querySelectorAll('.mobile-navigation .is-parent')

mobile_expand.forEach((item, index) => {
    let _parent = item.querySelector(".plus");
    _parent.onclick = function () {
        this.parentNode.nextSibling.classList.toggle('show-sub')
    }

})


