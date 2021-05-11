// const likes = document.querySelectorAll('.like');
let thumbsUp = document.querySelectorAll('.fa-thumbs-up');
let faComments = document.querySelector('.fa-comment');
let numOfLikes = document.querySelector('.numOfLikes');
let numOfComments = document.querySelector('.numOfComments');

const whiteColor = 'rgb(242, 242, 242)';
const pinkColor = 'rgb(255, 47, 110)';
const grayColor = 'rgb(120, 120, 120)';

for(const thumb of thumbsUp){
    // function
    function onLikeBtn(e){
        const target = e.target;
        if(target.style.color == pinkColor){
            target.style.color = grayColor;
            let likeNumbers = parseInt(target.nextElementSibling.innerText)-1;
            target.nextElementSibling.innerText = likeNumbers;      
            return;
        }else{
            thumb.style.color == pinkColor;
        }   
        target.style.color = pinkColor;
        let likeNumbers = parseInt(target.nextElementSibling.innerText)+1;
        target.nextElementSibling.innerText = likeNumbers;
    }
}

// for(const faComment of faComments){
//     function commentBtnGrayToPinkColorChange(){ 
//         faComment.style.color = pinkColor; 
//     }
    
//     function commentBtnPinkToGrayColorChange(){
//         faComment.style.color = grayColor;
//     }

//     function onCommentBtn(e){
//         const target = e.target;
//         if(comment.style.color == pinkColor){
//             commentBtnPinkToGrayColorChange();
//             console.log(e.target.nextElementSibling.innerText);
//             let commentNumbers = parseInt(e.target.nextElementSibling.innerText)-1;
//             e.target.nextElementSibling.innerText = commentNumbers;
//             console.log(commentNumbers);
            
//             return;
//         }else{
//             comment.style.color == pinkColor;
//         }
//         console.log('?');
//         commentBtnGrayToPinkColorChange();
//         let commentNumbers = parseInt(e.target.nextElementSibling.innerText)+1;
//         e.target.nextElementSibling.innerText = commentNumbers;    
//     }
// }


        
// addEventListener
for(const thumb of thumbsUp){
    thumb.addEventListener('click', (e)=>{
        onLikeBtn(e)}
    ); 
}

for(const numOfLike of numOfLikes){
    numOfLike.addEventListener('click', (e)=>{
        onLikeBtn(e);
    })
}

// for(const faComment of faComments){
//     faComment.addEventListener('click', (e)=>{
//         onCommentBtn(e);
//     })
// }

// for(const numOfComment of numOfComments){
//     numOfComment.addEventListener('click', (e)=>{
//         onCommentBtn(e);
//     })
// }



















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
