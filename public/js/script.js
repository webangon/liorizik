var lightboxVideo = GLightbox({
    selector: '.glightbox3'
});

var video_slide = document.querySelector('#course-carousel')

if (video_slide != null) {
  new Splide( '#course-carousel', {
    perPage    : 5,
    gap         : 30,
    pagination  : false,
    breakpoints: {
        1024: {
            perPage: 2,
        },                    
        640: {
            perPage: 1,
        },
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

var has_more = document.querySelector('.showMore')

if (has_more != null) {
    var course_expand = document.querySelector('.criclmLft')
    document.querySelector('.showMore').onclick = function () {
        course_expand.classList.toggle('show')
    }
}





