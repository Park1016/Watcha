'use strict'
// import * as srcColor from "./color.js";

export function onLikeBtn(e){
    const target = e.target;
    if(target.style.color == 'rgb(255, 47, 110)'){
        target.style.color = 'rgb(120,120,120)';
        let likeNumbers = parseInt(target.nextElementSibling.innerText)-1;
        target.nextElementSibling.innerText = likeNumbers;      
        return;
    }
    target.style.color = 'rgb(255,47,110)';
    let likeNumbers = parseInt(target.nextElementSibling.innerText)+1;
    target.nextElementSibling.innerText = likeNumbers;
}

export function onNumOfLikes(e){
    const target = e.target;
    if(target.previousElementSibling.style.color == 'rgb(255, 47, 110)'){
        target.previousElementSibling.style.color = 'rgb(120,120,120)';
        let likeNumbers = parseInt(target.innerText)-1;
        target.innerText = likeNumbers;      
        return;
    }   
    target.previousElementSibling.style.color = 'rgb(255,47,110)';
    let likeNumbers = parseInt(target.innerText)+1;
    target.innerText = likeNumbers;
}


export function onCommentBtn(e){
    const target = e.target;
    // console.log(target);
}


export function onNumOfComment(e){
    const target = e.target;
    // console.log(target);
}
