'use strict';
import * as srcLike from '/movie page(현정)/src/like.js';

let thumbsUp = document.querySelectorAll('.fa-thumbs-up');
let faComments = document.querySelectorAll('.fa-comment');
let numOfLikes = document.querySelectorAll('.numOfLikes');
let numOfComments = document.querySelectorAll('.numOfComments');
       
// addEventListener
for(const thumb of thumbsUp){
    thumb.addEventListener('click', (e)=>{
        srcLike.onLikeBtn(e)}
    ); 
}

for(const like of numOfLikes){
    like.addEventListener('click', (e) =>{
        srcLike.onNumOfLikes(e)}
    );
}

for(const comment of faComments){
    comment.addEventListener('click', (e)=>{
        srcLike.onCommentBtn(e);
    })
}

for(const numOfComment of numOfComments){
    numOfComment.addEventListener('click', (e)=>{
        srcLike.onNumOfComment(e);
    })
}





















// for(const like of likes){
//     for(const thumb of thumbsUp){
//         // function
//         function likeButtonGrayToPinkColorChange(){
//             like.style.backgroundColor = pinkColor;
//             like.style.color = whiteColor;
//             thumb.style.color = pinkColor; 
//         }
        
//         function likeButtonPinkToGrayColorChange(){
//             like.style.backgroundColor = whiteColor;
//             like.style.color = pinkColor;
//             thumb.style.color = '#787878';
//         }
        
        // function onLikeBtn(e){
        //     if(like.style.color == whiteColor){
        //         const thirdList = e.target.parentElement.previousElementSibling;
        //         console.log(thirdList);
        //         let numOfLikes = parseInt(thirdList.firstElementChild.nextElementSibling.innerText)-1;
        //         thirdList.firstElementChild.nextElementSibling.innerText = numOfLikes;
        //         likeButtonPinkToGrayColorChange();
        //         return;
        //     }else{
        //         like.style.color = whiteColor;
        //     }
        //     console.log('?');
        //     likeButtonGrayToPinkColorChange();
        //     const thirdList = e.target.parentElement.previousElementSibling;
        //     let numOfLikes = parseInt(thirdList.firstElementChild.nextElementSibling.innerText)+1;
       //     thirdList.firstElementChild.nextElementSibling.innerText = numOfLikes;
        // }
        
        
        
        // // addEventListener
        // like.addEventListener('click', (e)=>{
        //     onLikeBtn(e)}
        // ); 
// 
//     }
// }







// const lists = document.querySelectorAll("li");

// const listOptions = {};
// const listObserver = new IntersectionObserver((entries, listObserver) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;

//     const list = entry.target;
//     list.src = list.src.replace("w=10&", "w=800&");
//     listObserver.unobserve(entry.target);
//   });
// }, listOptions);

// images.forEach((list) => {
//   listObserver.observe(list);
// });
