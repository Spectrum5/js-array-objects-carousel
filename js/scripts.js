//array immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let imagesList = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg'
];

let items = document.querySelector('.items');
let active = 0; 
for (let i = 0; i < imagesList.length; i++){
    items.innerHTML +=
    `<div class="item"><img src="${imagesList[i]}" alt=""></div>`;             
}           
document.querySelector('.item').classList.add('d-block');
let img = document.querySelectorAll('.item');

document.querySelector('.after').addEventListener("click" , function(){
console.log(img);
img[active].classList.remove('d-block');
if(active == img.length-1){
    active = 0;
}
else{
    active++;
    }
    img[active].classList.add('d-block');
});

document.querySelector('.before').addEventListener("click" , function(){

    console.log(img);
    img[active].classList.remove('d-block');
    if(active == 0){   
        active = img.length-1;
        }
        else{
            active--;
        }
        img[active].classList.add('d-block');
    });