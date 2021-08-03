$(function(){
    $('header').load('inc.html header .head',select);

    function select(){
        $('header div a').on('click',function(){
            $(this).css('color','#c40352');
        });

                
        const mn1Ul = document.querySelectorAll('.mn-1 li');
        const hidMn = document.querySelectorAll('.hid-mn');

        for(let k=0; k<mn1Ul.length; k++){
            mn1Ul[k].addEventListener('mouseover',function(){
                hidMn[k].style = 'display:flex;';
                hidMn[k].addEventListener('mouseleave',function(){
                    hidMn[k].style = 'display:none;';
                })
            })
            
        }

    }
});

$(".slide-bg-img-slide").slick({
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3300,
    speed: 800,
    fade: true,
    cssEase: 'linear',
});
$('.slide-bg-img-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(33 * (nextSlide+1) + '%');
  });



const elDiv = document.querySelectorAll('.main > div');
    let elHei;
    let winHei = window.innerHeight;
        
    window.addEventListener('scroll',function(){
        for(let i=0; i<elDiv.length; i++){
            elHei = elDiv[i].offsetTop;

            if(elHei-winHei <= window.scrollY){
                elDiv[i].classList.add('active');
            }
        }
        
    })




const slides = document.querySelector('.slides');
const slideItem = slides.querySelectorAll('li');
const prevBtn = document.querySelectorAll('.btn-con2 a');

let itemWid = slideItem[0].offsetLeft * 2 + slideItem[0].offsetWidth;


let sIdx = 0;
slideItem[2].classList.add('active');
for(let i=0; i<prevBtn.length; i++){
    prevBtn[i].addEventListener('click',function(){
      if(i==1){
          if(sIdx<7)sIdx++;
      }else{
          if(sIdx>-2)sIdx--;
      }

      for(let j=0; j<slideItem.length; j++){
        slideItem[j].classList.remove('active');    
      }
      slideItem[sIdx+2].classList.add('active');

      slides.style=`transform:translateX(${-itemWid*sIdx}px)`;
  });
}
