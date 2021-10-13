'use strict';
import * as srcLike from '/movie page(현정)/src/like.js';
import * as srcColor from '/movie page(현정)/src/color.js';
// chevron
const rightArrow = document.querySelectorAll('.fa-chevron-right');
const leftArrow = document.querySelectorAll('.fa-chevron-left');
const apchRight = document.querySelector('.apchRight');
const apchLeft = document.querySelector('.apchLeft');
const ccchRight = document.querySelector('.ccchRight');
const ccchLeft = document.querySelector('.ccchLeft');
const gchRight = document.querySelector('.gchRight');
const gchLeft = document.querySelector('.gchLeft');
const vchRight = document.querySelector('.vchRight');
const vchLeft = document.querySelector('.vchLeft');
const clchRight = document.querySelector('.clchRight');
const clchLeft = document.querySelector('.clchLeft');
const chevron = document.querySelectorAll('.chevron');

// 슬라이드 container
const appearanceProductionUl = document.querySelector('.appearanceProduction');
const productionUl = document.querySelector('.production');
const commentContentSpace = document.querySelector('.commentContentSpace');
const galleryImages = document.querySelector('.galleryImages');
const videos = document.querySelector('.videos');
const collectionContentUl = document.querySelector('.collectionContentUl');

// icon
const faCaretDown = document.querySelector('.fa-caret-down');
const plusFirst = document.querySelector('.plusFirst');
const plusLater = document.querySelector('.plusLater');
const emptyBookMarkModal = document.querySelector('.emptyBookMarkModal');
const fullBookMarkModal = document.querySelector('.fullBookMarkModal');
const emptyBookMark = document.querySelector('.emptyBookMark');
const fullWatchingEye = document.querySelector('.fullWatchingEye');
const watchingEyeModal = document.querySelector('.watchingEyeModal');
const fullWatchingEyeModal = document.querySelector('.fullWatchingEyeModal');
const faBanModal = document.querySelector('.fa-ban-modal');
const faBanMark = document.querySelector('.fa-ban-mark');
const ccThumbs = document.querySelectorAll('.ccThumb');
const noneMembetFatimes = document.querySelector('noneMembetFatimes');
const star = document.querySelectorAll('.fa-star');

//modal.button
const markModal = document.querySelector('.markModal');
const mark = document.querySelector('.mark');
const mdCancel = document.querySelector('.mdCancel');
const topLeftCommentBtn = document.querySelector('.topLeftComment');

// modal
const mdWantToSeeMoreContainer = document.querySelector('.mdWantToSeeMoreContainer');
const modalBackGround = document.querySelector('.modalBackGround');
const mdWantToSeeMore = document.querySelector('.mdWantToSeeMore');
const mdNonMember = document.querySelector('.mdNonMember');
const mdLeftIconBox = document.querySelector('.mdLeftIconBox');
const mdRightIconBox = document.querySelector('.mdRightIconBox');
const mdLeftIconText = document.querySelector('.mdLeftIconText');
const mdRightIconText = document.querySelector('.mdRightIconText');
const markWatchingText = document.querySelector('.markWatchingText');
const markWantSeeText = document.querySelector('.markWantSeeText');
const mdNoThanksText = document.querySelector('.mdNoThanksText');
const mdNoThanks = document.querySelector('.mdNoThanks');
const markNoThanksText = document.querySelector('.markNoThanksText');
const mdNonMemberContainer = document.querySelector('.mdNonMemberContainer');
const mdCommentContainer = document.querySelector('.mdCommentContainer');
const mdCommentTopText = document.querySelector('.mdCommentTopText');
const commentInput = document.querySelector('.commentInput');
const mdComment = document.querySelector('.mdComment');
const mdCommentText = document.querySelector('.mdCommentText');

// button
const similarSeeMore = document.querySelector('.similarSeeMore');
const button = document.querySelectorAll('button');

// star
const star1 = document.querySelector('.star1');
const star2 = document.querySelector('.star2');
const star3 = document.querySelector('.star3');
const star4 = document.querySelector('.star4');
const star5 = document.querySelector('.star5');
const starText = document.querySelector('.estimateText');
const cancelStar = document.querySelector('.cancelStar');

// 비슷한 작품
const similarWork = document.querySelector('.similarWork');
const similarContentUl = document.querySelector('.similarContentUl');

const section2LeftContainer = document.querySelector('.section2LeftContainer');
const productionLi = document.querySelector('.productionList');
const numOfthumbsUp = document.querySelectorAll('.numOfthumbsUp');
const ccNums = document.querySelectorAll('.ccNum');
const ccComments = document.querySelectorAll('.ccComment');
const body = document.querySelector('body');


// 코멘트
const afterTrash = document.querySelector('.afterTrash');
const section2LeftTopContainer = document.querySelector('.section2LeftTopContainer');
const afterCommentContainer = document.querySelector('.afterCommentContainer');
let afterCommentText = document.querySelector('.afterCommentText');
const commentTextarea = document.querySelector('.commentTextarea');

// 전역변수
const leftSideWidth = 60.4;
const rightSideWidth = 25;
const similarContentUlWidth = 85.2;
let count = 0;




// function
// 슬라이드
function onLeftSideRightChevron(ul) {
    console.log('오');
    count = count - leftSideWidth;
    ul.style.transform = `translateX(${count}rem)`;
}

function onLeftSideLeftChevron(ul) {
    console.log('왼');
    count = count + leftSideWidth;
    ul.style.transform = `translateX(${count}rem)`;
}

function onCommentRightChevron(ul) {
    console.log('오');
    count = count - leftSideWidth + 2;
    ul.style.transform = `translateX(${count}rem)`;
}

function onCommentLeftChevron(ul) {
    console.log('왼');
    count = count + (leftSideWidth - 2);
    ul.style.transform = `translateX(${count}rem)`;
}

function onRightSideRightChevron(ul) {
    console.log('오');
    count = count - rightSideWidth;
    ul.style.transform = `translateX(${count}rem)`;
}

function onRightSideLeftChevron(ul) {
    console.log('오');
    count = count + rightSideWidth;
    ul.style.transform = `translateX(${count}rem)`;
}


// 더보기 버튼
function onSimilarSeeMoreBtn(){
    if(window.getComputedStyle(similarContentUl).visibility === "visible"){
        similarSeeMore.style.visibility = 'hidden';
    }
    count = count + similarContentUlWidth;
    similarContentUl.style.height = `calc(85.2rem + ${count}rem)`;
    similarWork.style.height = `calc(97.5rem + ${count}rem)`;
}

// 별점
function onStar(e, t){
    if(star1.classList.contains('fix')){
        cancelStar.style.display = 'block';
        if(star1.classList.contains('two')){
            cancelStar.style.left = '4rem';
            return;
        }
        if(star1.classList.contains('three')){
            cancelStar.style.left = '8.5rem';
            return;
        }
        if(star1.classList.contains('four')){
            cancelStar.style.left = '13rem';
            return;
        }
        if(star1.classList.contains('five')){
            cancelStar.style.left = '17.5rem';
            return;
        }
    }
    const target = e.target.lastElementChild;
    if(target.className === 'star1'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('one');
            starText.innerHTML = '싫어요';
        }
    }
    if(target.className === 'star2'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('two');
            starText.innerHTML = '별로예요';
        }
    }
    if(target.className === 'star3'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        star3.parentElement.classList.remove('far');
        star3.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('three');
            starText.innerHTML = '보통이에요';
        }
    }
    if(target.className === 'star4'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        star3.parentElement.classList.remove('far');
        star3.parentElement.classList.add('fas');
        star4.parentElement.classList.remove('far');
        star4.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('four');
            starText.innerHTML = '재밌어요';
        }
    }
    if(target.className === 'star5'){
        star1.parentElement.classList.remove('far');
        star1.parentElement.classList.add('fas');
        star2.parentElement.classList.remove('far');
        star2.parentElement.classList.add('fas');
        star3.parentElement.classList.remove('far');
        star3.parentElement.classList.add('fas');
        star4.parentElement.classList.remove('far');
        star4.parentElement.classList.add('fas');
        star5.parentElement.classList.remove('far');
        star5.parentElement.classList.add('fas');
        if(t){
            star1.classList.add('five');
            starText.innerHTML = '최고예요!';
        }
    }
}

function onStarLeave(e){
    if(star1.classList.contains('fix')){
        cancelStar.style.display = 'none';
        return;
    }
    const star = e.target;
    const target = e.target.lastElementChild;
    if(target.className === 'star1'){
        star.classList.remove('fas');
        star.classList.add('far');
    }
    if(target.className === 'star2'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
    }
    if(target.className === 'star3'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
    }
    if(target.className === 'star4'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
        star4.parentElement.classList.remove('fas');
        star4.parentElement.classList.add('far');
    }
    if(target.className === 'star5'){
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
        star4.parentElement.classList.remove('fas');
        star4.parentElement.classList.add('far');
        star5.parentElement.classList.remove('fas');
        star5.parentElement.classList.add('far');
    }
}

function onStarClick(e){
    if(star1.classList.contains('fix')){
        star1.classList.remove('fix');
        star1.classList.remove('one');
        star1.classList.remove('two');
        star1.classList.remove('three');
        star1.classList.remove('four');
        star1.classList.remove('five');
        cancelStar.style.left = '-0.5rem';
        cancelStar.style.display = 'none';
        starText.innerHTML = '평가하기';
        star1.parentElement.classList.remove('fas');
        star1.parentElement.classList.add('far');
        star2.parentElement.classList.remove('fas');
        star2.parentElement.classList.add('far');
        star3.parentElement.classList.remove('fas');
        star3.parentElement.classList.add('far');
        star4.parentElement.classList.remove('fas');
        star4.parentElement.classList.add('far');
        star5.parentElement.classList.remove('fas');
        star5.parentElement.classList.add('far');
        return;
    }
    onStar(e, true);
    star1.classList.add('fix');
    // starText.innerHTML = '별점 취소하기';
}


// modal
function onModalBtn(){
    modalBackGround.style.display = 'block'
    mdWantToSeeMore.style.display = 'block'
    mdWantToSeeMoreContainer.style.display = 'flex';
}

function onMdCancelBtn(){
    modalBackGround.style.display = 'none';
    mdWantToSeeMore.style.display = 'none';
    mdWantToSeeMoreContainer.style.display = 'none';
    mdNonMemberContainer.style.display = 'none';
    mdCommentContainer.style.display = 'none';
    mdCommentTopText.style.color = srcColor.mediumGray;
    commentTextarea.value = '';
}

function fabanCancel(){
    noneFabanMark();
    markBtnGrayToPinkColorChange();
    markWantSeeText.style.display = 'inline';
    plusFirst.style.display = 'inline';
}

function noneFabanMark(){
    faBanModal.style.color = '#787878';
    mdNoThanksText.style.color = 'black';
    markNoThanksText.style.display = 'none';
    faBanMark.style.display = 'none';
}

function showFabanMark(){
    plusFirst.style.display = 'none';
    plusLater.style.display = 'none';
    fullWatchingEye.style.display = 'none';
    emptyBookMark.style.display = 'none';
    faBanMark.style.display = 'inline';
    markWantSeeText.style.display = 'none';
    markWatchingText.style.display = 'none';
    markNoThanksText.style.display = 'inline';
}

function faBanModalColorChange(){
    mark.style.backgroundColor = '#fd99b7';
    mark.style.color = '#ffffff';
    mark.style.border = 'inline';
    mark.style.border = '1px #F8F8F8 solid';
    markModal.style.backgroundColor = '#fd99b7';
    markModal.style.color = '#ffffff';
    markModal.style.border = '1px #F8F8F8 solid';
    faCaretDown.style.color = '#ffffff';
    faBanMark.style.color = '#ffffff';
}

function markBtnWatchingColorChange(){
    mark.style.backgroundColor = '#D9D9D9';
    mark.style.color = 'black';
    mark.style.border = '1px #EBEBEB solid';
    markModal.style.backgroundColor = '#D9D9D9';
    markModal.style.color = 'black';
    markModal.style.border = '1px #EBEBEB solid';
    faCaretDown.style.color = '#F6F6F6';
}

function markBtnPinkToGrayColorChange(){
    mark.style.backgroundColor = '#F6F6F6';
    mark.style.color = 'black';
    mark.style.border = '1px #EBEBEB solid';
    markModal.style.backgroundColor = '#F6F6F6';
    markModal.style.color = 'black';
    markModal.style.border = '1px #EBEBEB solid';
    faCaretDown.style.color = '#D9D9D9';
}

function markBtnGrayToPinkColorChange(){
    mark.style.backgroundColor = '#ff2f6e';
    mark.style.color = '#ffffff';
    mark.style.border = 'inline';
    mark.style.borderRight = '1px #e71252 solid';
    markModal.style.backgroundColor = '#ff2f6e';
    markModal.style.color = '#ffffff';
    faCaretDown.style.color = '#ffffff';
    // mark.addEventListener('mouseover', ()=>{
    //     console.log('?');
    //     plusLater.style.transform = 'rotate(0.25turn)';
    // })
    // mark.addEventListener('mouseout', ()=>{
    //     plusLater.style.transform = 'rotate(0)';
    // })
}

function noneFullWatchingEyeModal() {
    noneFabanMark();
    watchingEyeModal.style.display = 'inline';
    fullWatchingEyeModal.style.display = 'none';
    markWantSeeText.style.display = 'inline';
    markWatchingText.style.display = 'none';
    mdRightIconText.style.color = 'black';
}

// 보는 중 눈모양 아이콘 누르면(파란색 아니고 회색일 때)
function eyeGrayToBlueColorChange(){
    watchingEyeModal.style.display = 'none';
    fullWatchingEyeModal.style.display = 'inline';
    mdRightIconText.style.color = '#00A0FF';
    plusFirst.style.display = 'none';
    plusLater.style.display = 'none';
    emptyBookMark.style.display = 'none';
    fullWatchingEye.style.display = 'inline';

    markWantSeeText.style.display = 'none';
    markWatchingText.style.display = 'inline';
    
    noneFabanMark();
    fullToemptyBookMarkChange();
    markBtnWatchingColorChange();
    onMdCancelBtn();
}

function emptyToFullBookMarkChange(){
    emptyBookMarkModal.style.display = 'none';
    fullBookMarkModal.style.display = 'inline';
    mdLeftIconText.style.color = '#ff2f6e';
}

function fullToemptyBookMarkChange(){
    fullBookMarkModal.style.display = 'none';
    emptyBookMarkModal.style.display = 'inline';
    mdLeftIconText.style.color = 'black';
}

function showBookMark(){
    fullWatchingEye.style.display = 'none';
    plusFirst.style.display = 'none';
    plusLater.style.display = 'none';
    emptyBookMark.style.display = 'inline';
}

function showPlus(){
    fullWatchingEye.style.display = 'none';
    emptyBookMark.style.display = 'none';
    plusLater.style.display = 'inline';
}

function onEmptyBookMarkModal(){
    if(emptyBookMarkModal.style.display == 'none'){
        onfullBookMarkModal();
        return;
    }
    noneFabanMark();
    noneFullWatchingEyeModal();
    showBookMark();
    markBtnPinkToGrayColorChange();
    emptyToFullBookMarkChange();
    onMdCancelBtn();
}


function onMarkBtn(){
    if(emptyBookMark.style.display == 'none'
    & fullWatchingEye.style.display == 'none'
    & markNoThanksText.style.display == 'none'){
        onEmptyBookMarkModal();
        return;
    }
    onModalBtn();
}

function onfullBookMarkModal(){
    noneFabanMark();
    onMdCancelBtn();
    markBtnGrayToPinkColorChange();
    fullToemptyBookMarkChange();
    showPlus();
}

function onWatchingEyeModal(){
    if(watchingEyeModal.style.display == 'none'){
        onFullWatchingEyeModal();
        return;
    }
    noneFabanMark();
    eyeGrayToBlueColorChange();
}

function onFullWatchingEyeModal(){
    noneFullWatchingEyeModal();
    markBtnGrayToPinkColorChange();
    onMdCancelBtn();
    fullWatchingEye.style.display = 'none';
    plusFirst.style.display = 'inline';
}

function onFaBanModal() {
    if(mdNoThanksText.style.color == 'black'){
        faBanModal.style.color = '#ff2f6e';
        mdNoThanksText.style.color = '#ff2f6e';
        fullWatchingEyeModal.style.display = 'none';
        watchingEyeModal.style.display = 'inline';
        mdRightIconText.style.color = 'black';
        fullToemptyBookMarkChange();
        faBanModalColorChange();
        showFabanMark();
        onMdCancelBtn();
        return;
    }else{
        mdNoThanksText.style.color = 'black';
    }
    fabanCancel();
    onMdCancelBtn();
}

function onTopLeftCommentBtn(){
    modalBackGround.style.display = 'block';
    mdCommentContainer.style.display = 'flex';
}

// comment

function onCommentModal(e){
    const target = e.target;
    let text = target.parentElement.parentElement.lastElementChild.value;
    afterCommentText.innerText = text;
    const commentContentList = `<li class="commentContentList">
                                    <div class="commentContent">
                                        <div class="ccTop">
                                            <span class="ccTopLeft">
                                                <img class="ccTopImg" src="https://picsum.photos/200/200/" alt="이미지가 없습니다">
                                                <span class="ccTopName">이름</span>
                                            </span>
                                            <span class="ccTopRight">
                                                <i class="fas fa-star"></i>
                                                <span class="starScope">3.0</span>
                                            </span>
                                        </div>
                                        <div class="ccText">
                                            <a href="comment page/commentPage.html" class="ccTextInner">
                                                ${text}
                                            </a>
                                        </div>
                                        <div class="ccNumOfLikeComment">
                                            <span class="ccNumOfLike">
                                                <i class="fas fa-thumbs-up ccThumb"></i>
                                                <span class="numOfthumbsUp">0</span>
                                            </span>
                                            <span class="ccNumOfComment">
                                                <i class="fas fa-comment ccNum"></i>
                                                <span class="ccComment">0</span>
                                            </span>
                                        </div>
                                    </div>
                                </li>`;
    commentContentSpace.insertAdjacentHTML('afterbegin', commentContentList);
    console.log(text);
    commentTextarea.value = '';
    text = '';
    console.log(text);
    mdCommentText.innerText = '코멘트 수정하기';
    modalBackGround.style.display = 'none';
    mdCommentContainer.style.display = 'none';
    section2LeftTopContainer.style.display = 'none';
    afterCommentContainer.style.display = 'flex';
}


function onCommentTextarea(e){
    const target = e.target;
    mdCommentContainer.addEventListener('keyup',()=>{
        if(target.placeholder !== ''){
            mdCommentTopText.style.color = srcColor.hotPink;
        }
        if(target.value == ''){
            mdCommentTopText.style.color = srcColor.mediumGray;
        }
    })
}

function onDeleteComment(e){
    mdCommentText.innerText = '코멘트 작성하기';
    afterCommentContainer.style.display = 'none';
    section2LeftTopContainer.style.display = 'flex';
    const target = e.target.parentElement;
    let text = target.parentElement.previousElementSibling.lastElementChild;
    text = '';
    console.log(text);
}


// addEventListener
body.addEventListener('click', (e)=>{
    const targets = e.target.classList.value.split(" ");
    for(const target of targets){
        switch(target){
            case 'apchRight':
                onLeftSideRightChevron(productionUl);
                break;
            case 'apchLeft':
                onLeftSideLeftChevron(productionUl);
                break;
            case 'ccchRight':
                onCommentRightChevron(commentContentSpace);
                break;
            case 'ccchLeft':
                onCommentLeftChevron(commentContentSpace);
                break;
            case 'clchRight':
                onLeftSideRightChevron(collectionContentUl);
                break;
            case 'clchLeft':
                onLeftSideLeftChevron(collectionContentUl);
                break;
            case 'gchRight':
                onRightSideRightChevron(galleryImages);
                break;
            case 'gchLeft':
                onRightSideLeftChevron(galleryImages);
                break;
            case 'vchRight':
                onRightSideRightChevron(videos);
                break;
            case 'vchLeft':
                onRightSideLeftChevron(videos);
                break;

            
            case 'similarSeeMore':
                onSimilarSeeMoreBtn();
                break;

            case 'fa-caret-down':
                onModalBtn();
                break;
            case 'markModal':
                onModalBtn();
                break;
            case 'markNoThanksText':
                onModalBtn();
                break;

            case 'mdCancel':
                onMdCancelBtn();
                break;

            case 'mark':
                onMarkBtn();
                break;
            case 'markWantSeeText':
                onMarkBtn();
                break;
            case 'markWatchingText':
                onMarkBtn();
                break;
            case 'fa-ban-mark':
                onMarkBtn();
                break;

            case 'fullBookMarkModal':
                onfullBookMarkModal();
                break;

            case 'mdLeftIconBox':
                onEmptyBookMarkModal();
                break;
            case 'emptyBookMarkModal':
                onEmptyBookMarkModal();
                break;
            case 'mdLeftIconText':
                onEmptyBookMarkModal();
                break;

            case 'mdRightIconBox':
                onWatchingEyeModal();
                break;
            case 'watchingEyeModal':
                onWatchingEyeModal();
                break;
            case 'mdRightIconText':
                onWatchingEyeModal();
                break;

            case 'fullWatchingEyeModal':
                onFullWatchingEyeModal();
                break;     

            case 'mdNoThanks':
                onFaBanModal();
                break;
            case 'mdNoThanksText':
                onFaBanModal();
                break;
            case 'fa-ban-modal':
                onFaBanModal();
                break;

            case 'topLeftComment':
                onTopLeftCommentBtn();
                break;
            case 'mdWriteComment':
                onTopLeftCommentBtn();
                break;
            case 'mdCommentText':
                onTopLeftCommentBtn();
                break;
            case 'faComment':
                onTopLeftCommentBtn();
                break;

            case 'noneMembetFatimes':
                onMdCancelBtn();
                break;
            case 'mdCommentFaTimes':
                onMdCancelBtn();
                break;

            case 'mdCommentTopText':
                onCommentModal(e);
                break;

            case 'commentTextarea':
                onCommentTextarea(e);
                break;

            case 'fa-trash-alt':
                onDeleteComment(e);
                break;
            case 'afterTrashText':
                onDeleteComment(e);
                break;

            case 'ccThumb':
                srcLike.onLikeBtn(e);
                break;
            case 'numOfthumbsUp':
                srcLike.onNumOfLikes(e);
                break;
            case 'ccNum':
                srcLike.onCommentBtn(e);
                break;
            case 'ccComment':
                srcLike.onNumOfComment(e);
                break;

            case 'star1':
                onStar(e);
                break;
            case 'star2':
                onStar(e);
                break;
            case 'star3':
                onStar(e);
                break;
            case 'star4':
                onStar(e);
                break;
            case 'star5':
                onStar(e);
                break;
        }
    }
})

for(let item of star){
    item.addEventListener('click', (e)=>{onStarClick(e)});
    item.addEventListener('mouseenter', (e)=>{onStar(e)});
    item.addEventListener('mouseleave', (e)=>{onStarLeave(e)})
}

// comment
// for(const numOfthumbUp of numOfthumbsUp){
//     numOfthumbUp.addEventListener('click', (e) =>{
//         srcLike.onNumOfLikes(e)}
//     );
// }
// for(const ccNum of ccNums){
//     ccNum.addEventListener('click', (e)=>{
//         srcLike.onCommentBtn(e);
//     })
// }
// for(const ccComment of ccComments){
//     ccComment.addEventListener('click', (e)=>{
//         srcLike.onNumOfComment(e);
//     })
// }

