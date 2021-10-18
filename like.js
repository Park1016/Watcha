'use strict'
// import * as srcColor from "./color.js";

export function onLikeBtn(e){
    const target = e.target;
    if(target.style.color == 'rgb(255, 47, 110)'){
        target.style.color = 'rgb(120,120,120)';
        let likeNumbers = parseInt(target.nextElementSibling.innerText)-1;
        target.nextElementSibling.innerText = likeNumbers;  
        if(target.parentElement.classList.contains('like0')){
            localStorage.setItem('like0', false);
        }
        if(target.parentElement.classList.contains('like1')){
            localStorage.setItem('like1', false);
        }
        if(target.parentElement.classList.contains('like2')){
            localStorage.setItem('like2', false);
        }    
    } else {
        target.style.color = 'rgb(255,47,110)';
        let likeNumbers = parseInt(target.nextElementSibling.innerText)+1;
        target.nextElementSibling.innerText = likeNumbers;
        if(target.parentElement.classList.contains('like0')){
            localStorage.setItem('like0', true);
        }
        if(target.parentElement.classList.contains('like1')){
            localStorage.setItem('like1', true);
        }
        if(target.parentElement.classList.contains('like2')){
            localStorage.setItem('like2', true);
        }
    }
}

export function onNumOfLikes(e){
    const target = e.target;
    if(target.previousElementSibling.style.color == 'rgb(255, 47, 110)'){
        target.previousElementSibling.style.color = 'rgb(120,120,120)';
        let likeNumbers = parseInt(target.innerText)-1;
        target.innerText = likeNumbers;      
        if(target.parentElement.classList.contains('like0')){
            localStorage.setItem('like0', false);
        }
        if(target.parentElement.classList.contains('like1')){
            localStorage.setItem('like1', false);
        }
        if(target.parentElement.classList.contains('like2')){
            localStorage.setItem('like2', false);
        }    
    } else {
        target.previousElementSibling.style.color = 'rgb(255,47,110)';
        let likeNumbers = parseInt(target.innerText)+1;
        target.innerText = likeNumbers;
        if(target.parentElement.classList.contains('like0')){
            localStorage.setItem('like0', true);
        }
        if(target.parentElement.classList.contains('like1')){
            localStorage.setItem('like1', true);
        }
        if(target.parentElement.classList.contains('like2')){
            localStorage.setItem('like2', true);
        }
    }
}

export function localLike(){
    const like0 = localStorage.getItem('like0');
    const like1 = localStorage.getItem('like1');
    const like2 = localStorage.getItem('like2');
    const thumb0 = document.querySelector('.thumb0');
    const thumb1 = document.querySelector('.thumb1');
    const thumb2 = document.querySelector('.thumb2');
    const thumb2Num = document.querySelector('.thumb2Num');
    
    if(like0 === 'true'){
        thumb0.style.color = 'rgb(255,47,110)';
        thumb0.nextElementSibling.innerText = parseInt(thumb0.nextElementSibling.innerText)+1;
    }
    if(like1 === 'true'){
        thumb1.style.color = 'rgb(255,47,110)';
        thumb1.nextElementSibling.innerText = parseInt(thumb1.nextElementSibling.innerText)+1;
    }
    if(thumb2 && like2 === 'true'){
        thumb2.style.color = 'rgb(255,47,110)';
        thumb2Num.innerText = parseInt(thumb2Num.innerText)+1;
    }
}
