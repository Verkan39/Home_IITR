document.getElementById("first_of_top").addEventListener("click", function () {
    this.classList.toggle("active");
});
// let index=0;
// const container=document.querySelector(".a-card-set");
// const cards = document.querySelectorAll(".a-card");

// function showSlide(i){
//     index=(i+cards.length)%cards.length;

//     container.scrollTo({
//         left:cards[index].offsetLeft,
//         behavior:"smooth"
//     });
// }

// document.querySelector(".next").addEventListener("click",()=>{
//     showSlide(index+1);
// });

// document.querySelector(".prev").addEventListener("click",()=>{
//     showSlide(index-1);
// });

const nextBtn=document.getElementById('anext');
const prevBtn=document.getElementById('aprev');
const all_cards=document.getElementById('acs');
nextBtn.addEventListener('click', ()=>{
    const cardwidth=all_cards.querySelector('.a-card').clientWidth;
    all_cards.scrollBy({left:cardwidth+25, behavior: 'smooth'});
});

prevBtn.addEventListener('click', () => {
  const cardWidth = all_cards.querySelector('.a-card').clientWidth;
  all_cards.scrollBy({ left: -cardWidth-25, behavior: 'smooth' });
});

let index=0;
const slides=document.querySelectorAll('.a-card');
function autoscroll(){
    index++;
    if(index>=slides.length){
        index=0;
        // all_cards.scrollTo({ left: 0, behavior: 'smooth' });
    }
    const cardwidth=all_cards.querySelector('.a-card').clientWidth;
    all_cards.scrollTo({left:(cardwidth+25)*index, behavior: 'smooth'});
}
let index1=0;
const imgs=document.querySelectorAll('.imgs_evnets');
const all_img=document.getElementById('event_pictures');
const width=imgs[0].offsetWidth;
let currentpos=0;
function autoscroll_events(){
    index1++;
    if(index1>=imgs.length){
        index1=0;
    }
    currentpos=(width)*index1;
    all_img.scrollTo({left:currentpos, behavior:'smooth'});
}
const eventNames=document.querySelectorAll('.events_iitr');
eventNames.forEach((name)=>{
    name.addEventListener("click", ()=>{
        const value=parseInt(name.getAttribute('index'));
        index1=value-1;
        console.log(index1);
        all_img.scrollTo({left:width*index1, behavior:'smooth'});
        clearInterval(slideInterval1);
        slideInterval1=setInterval(autoscroll_events,3000);
    });
});
// document.querySelector('.events_iitr').addEventListener("click",()=>{
//     const value=parseInt(document.querySelector('.events_iitr').getAttribute('index'));
//     all_img.scrollTo({ left:(width)*(value-1), behavior:'smooth'});
//     index1=value;
// })
let slideInterval=setInterval(autoscroll, 3000);
let slideInterval1=setInterval(autoscroll_events,3000);

