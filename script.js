document.getElementById("first_of_top").addEventListener("click", function () {
    this.classList.toggle("active");
});
let index=0;
const container=document.querySelector(".a-card-set");
const cards = document.querySelectorAll(".a-card");

function showSlide(i){
    index=(i+cards.length)%cards.length;

    container.scrollTo({
        left:cards[index].offsetLeft,
        behavior:"smooth"
    });
}

document.querySelector(".next").addEventListener("click",()=>{
    showSlide(index+1);
});

document.querySelector(".prev").addEventListener("click",()=>{
    showSlide(index-1);
});

