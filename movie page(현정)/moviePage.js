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
const commentUl = document.querySelector('.commentContentSpace');
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

// button
const similarSeeMore = document.querySelector('.similarSeeMore');
const button = document.querySelectorAll('button');

// 비슷한 작품
const similarWork = document.querySelector('.similarWork');
const similarContentUl = document.querySelector('.similarContentUl');

const section2LeftContainer = document.querySelector('.section2LeftContainer');
const productionLi = document.querySelector('.productionList');
const numOfthumbsUp = document.querySelectorAll('.numOfthumbsUp');
const ccNums = document.querySelectorAll('.ccNum');
const ccComments = document.querySelectorAll('.ccComment');
const body = document.querySelector('body');


// 전역변수
const leftSideWidth = 60.4;
const rightSideWidth = 25;
const similarContentUlWidth = 85.2;
let count = 0;




// function
// 슬라이드
function onLeftSideRightChevron(ul) {
    count = count - leftSideWidth;
    ul.style.transform = `translateX(${count}rem)`;
}

function onLeftSideLeftChevron(ul) {
    count = count + leftSideWidth;
    ul.style.transform = `translateX(${count}rem)`;
}

function onCommentRightChevron(ul) {
    count = count - leftSideWidth + 2;
    ul.style.transform = `translateX(${count}rem)`;
}

function onCommentLeftChevron(ul) {
    count = count + (leftSideWidth - 2);
    ul.style.transform = `translateX(${count}rem)`;
}

function onRightSideRightChevron(ul) {
    count = count - rightSideWidth;
    ul.style.transform = `translateX(${count}rem)`;
}

function onRightSideLeftChevron(ul) {
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

function onCommentModal(e){
    const target = e.target;
    const text = target.parentElement.parentElement.lastElementChild.value;
    // if(text !== ''){
    //     console.log('?');
    //     mdCommentTopText.style.color = srcColor.hotPink;
    // }
    // if(text == ''){
    //     console.log('!');
    //     mdCommentTopText.style.color = srcColor.mediumGray;
    // }
}

function onCommentTextarea(e){
    const target = e.target;
    mdCommentContainer.addEventListener('keyup',()=>{
        if(target.placeholder !== ''){
            mdCommentTopText.style.color = srcColor.hotPink;
        }
        if(target.value == ''){
            // console.log('!');
            mdCommentTopText.style.color = srcColor.mediumGray;
        }
    })
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
                onCommentRightChevron(commentUl);
                break;
            case 'ccchLeft':
                onCommentLeftChevron(commentUl);
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
        }
    }
})

// comment
for(const ccThumb of ccThumbs){
    ccThumb.addEventListener('click', (e)=>{
        srcLike.onLikeBtn(e)}
    ); 
}

for(const numOfthumbUp of numOfthumbsUp){
    numOfthumbUp.addEventListener('click', (e) =>{
        srcLike.onNumOfLikes(e)}
    );
}

for(const ccNum of ccNums){
    ccNum.addEventListener('click', (e)=>{
        srcLike.onCommentBtn(e);
    })
}

for(const ccComment of ccComments){
    ccComment.addEventListener('click', (e)=>{
        srcLike.onNumOfComment(e);
    })
}

