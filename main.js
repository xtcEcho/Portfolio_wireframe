'use restrict';

//load header on every page
// function loadHeader() {
//     $('#header-placeholder')
//     .load('header.html')
//     .(()=>console.log(document.getElementById('hamburger')))
    
// }
//show description of project when hover on image
function showDescription() {
    $('.main-image').hover(
        () => {
            $('.detail-section').css(
                'opacity', '1.0'
            )
        },
        () => {
            $('.detail-section').css(
                'opacity', '0.0'
            )
        }
    )
}

function isInViewport(elem) {
    let bounding = elem.getBoundingClientRect();
    let top = bounding.top
    // console.log(top)
    return (top >= -3 && top <= 3)
}

//show project name only when project page in home page is in place
window.addEventListener('scroll', function(event){
    let items = document.getElementsByClassName('item')
    let names = document.getElementsByClassName('fp-detail')
    // console.log(items)
    for (let i = 0; i < items.length; i++){
        if (isInViewport(items[i])){
            names[i].style.opacity = 1.0
        } else {
            names[i].style.opacity = 0.0
        }
    }
})

let navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log(link.getAttribute('data-url'))
        setTimeout(function(){ 
            $('#nav-placeholder').css('display', 'none')
        }, 500);
        setTimeout(function(){
            window.location.href=link.getAttribute('data-url')
        }, 800)
        anime.timeline()
            .add({
                targets: '.nav-link',
                translateY: 0,
                easing: 'easeOutExpo',
                direction:'reverse',
                duration: 600,
            })
        anime.timeline()
            .add({
                targets: '#background',
                direction: 'reverse',
                easing: 'easeOutExpo',
                            // scale: 1/60,
                scale: 1/150,
                duration: 1500,
            })
        anime.timeline()
            .add({
                targets: '#icon',
                backgroundColor: "rgb(250,80,3)",
                duration: 1500, 
                easing: 'easeOutExpo',
                            // delay:500,
            })
            
        anime.timeline()
            .add({
                targets: '#logo',
                color: "rgb(53,53,53)",
                duration: 1500, 
                easing: 'easeOutExpo',
            })
        
    })
})

let hamburger = document.getElementById('icon')

hamburger.addEventListener('click', (event) =>{
    let display = $('#nav-placeholder').css('display')
    if (display === "none"){
        $('#nav-placeholder').css('display', "block")
        anime.timeline()
            .add({
                targets: '.nav-link',
                translateY: anime.stagger('14vh'),
                easing: 'easeOutExpo',
                duration: 1500,
            })
                // console.log($('.nav-link'))
        anime.timeline()
            .add({
                targets: '#background',
                easing: 'easeOutExpo',
                // translateX: "10%",
                // translateY: "-10%",
                // height: '150%',
                // width: '150%',
                scale: 150,
                duration: 1500,
            })

        anime.timeline()
            .add({
                targets: '#icon',
                backgroundColor: "rgb(255, 255, 255)",
                duration: 1500, 
                easing: 'easeOutExpo',
            }) 
       
        anime.timeline()
            .add({
                targets: '#logo',
                color: "rgb(255, 255, 255)",
                duration: 1500, 
                easing: 'easeOutExpo',
            })
        
    } else{
        // $('#nav-placeholder').css('display', 'none')
        setTimeout(function(){ 
            $('#nav-placeholder').css('display', 'none')
        }, 500);
        anime.timeline()
            .add({
                targets: '.nav-link',
                translateY: 0,
                easing: 'easeOutExpo',
                direction:'reverse',
                duration: 600,
            })
        anime.timeline()
            .add({
                targets: '#background',
                direction: 'reverse',
                easing: 'easeOutExpo',
                // scale: 1/60,
                scale: 1/150,
                duration: 1500,
            })
        anime.timeline()
            .add({
                targets: '#icon',
                backgroundColor: "rgb(250,80,3)",
                duration: 1500, 
                easing: 'easeOutExpo',
                // delay:500,
            })
        
        anime.timeline()
            .add({
                targets: '#logo',
                color: "rgb(53,53,53)",
                duration: 1500, 
                easing: 'easeOutExpo',
            })
        
    }
    
})

let proLinks = document.querySelectorAll('.main-image')
console.log(proLinks)
proLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        console.log('work')
        window.location.href=link.getAttribute('data-url')
    })
})

function play() {
    // loadHeader();
    showDescription();
    // clickNav();
}


$(play());