document.getElementById("first_of_top").addEventListener("click", function () {
    this.classList.toggle("active");
});
const nextBtn=document.getElementById('anext');
const prevBtn=document.getElementById('aprev');
const all_cards=document.getElementById('acs');
nextBtn.addEventListener('click', ()=>{
    const cardwidth=all_cards.querySelector('.a-card').clientWidth;
    all_cards.scrollBy({left:cardwidth+25, behavior: 'smooth'});
    clearInterval(slideInterval);
    slideInterval=setInterval(autoscroll,3000);
});

prevBtn.addEventListener('click', () => {
  const cardWidth = all_cards.querySelector('.a-card').clientWidth;
  all_cards.scrollBy({ left: -cardWidth-25, behavior: 'smooth' });
  clearInterval(slideInterval1);
  slideInterval=setInterval(autoscroll,3000);
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

const years=document.querySelectorAll('.aise');
function updatedesign(indexm1){
    years.forEach(year=> year.classList.remove('active'));
    years.forEach(year => {
        year.querySelector('.dot img').src = "picture/Ellipse 20.svg"; // default
    });
    years[indexm1].querySelector('.dot img').src = "picture/yellow_dot.svg";
    if (years[indexm1]) {
        years[indexm1].classList.add('active');
    }
}

const yearsp=document.querySelectorAll('.year');
function updatephone(indexm2){
    yearsp.forEach(year=>year.classList.remove('active'));
    if(yearsp[indexm2]){
        yearsp[indexm2].classList.add('active');
    }
}

const nextBtnm=document.getElementById('next_btn_m');
const prevBtnm=document.getElementById('prev_btn_m');
const all_cardsm=document.getElementById('mcs');
nextBtnm.addEventListener('click', ()=>{
    const cardwidth=all_cardsm.querySelector('.m-card').clientWidth;
    indexm++;
    if (indexm >= slidesm.length) indexm = 0;
    all_cardsm.scrollBy({left:cardwidth, behavior: 'smooth'});
    clearInterval(slideIntervalm);
    slideIntervalm=setInterval(autoscrollm,3000);
    updatedesign(indexm);
    updatephone(indexm);
});

prevBtnm.addEventListener('click', () => {
  const cardWidth = all_cardsm.querySelector('.m-card').clientWidth;
  indexm--;
  if (indexm < 0) indexm = slidesm.length - 1;
  all_cardsm.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  clearInterval(slideIntervalm);
  slideIntervalm=setInterval(autoscrollm,3000);
  updatedesign(indexm);
  updatephone(indexm);
});

let indexm=0;
const slidesm=document.querySelectorAll('.m-card');
function autoscrollm(){
    indexm++;
    if(indexm>=slidesm.length){
        indexm=0;
        // all_cards.scrollTo({ left: 0, behavior: 'smooth' });
    }
    const cardwidth=all_cardsm.querySelector('.m-card').clientWidth;
    all_cardsm.scrollTo({left:(cardwidth)*indexm, behavior: 'smooth'});
    updatedesign(indexm);
    updatephone(indexm);
}

let slideIntervalm=setInterval(autoscrollm,3000);

updatedesign(0);