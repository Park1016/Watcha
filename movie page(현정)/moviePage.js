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

//modal.button
const markModal = document.querySelector('.markModal');
const mark = document.querySelector('.mark');
const mdCancel = document.querySelector('.mdCancel');

// modal
const modalBackGround = document.querySelector('.modalBackGround');
const MDWantToSeeMore = document.querySelector('.MDWantToSeeMore');
const MDNonMember = document.querySelector('.MDNonMember');
const mdLeftIconBox = document.querySelector('.mdLeftIconBox');
const mdLeftIconText = document.querySelector('.mdLeftIconText');
const mdRightIconText = document.querySelector('.mdRightIconText');
const markWatchingText = document.querySelector('.markWatchingText');
const markWantSeeText = document.querySelector('.markWantSeeText');

// button
const similarSeeMore = document.querySelector('.similarSeeMore');
const button = document.querySelectorAll('button');

// 비슷한 작품
const similarWork = document.querySelector('.similarWork');
const similarContentUl = document.querySelector('.similarContentUl');



const section2LeftContainer = document.querySelector('.section2LeftContainer');
const productionLi = document.querySelector('.productionList');
const body = document.querySelector('body');


const leftSideWidth = 60.4;
const rightSideWidth = 25;
const similarContentUlWidth = 85.2;
let count = 0;


// function
// 슬라이드
function onProductionRightChevron() {
    count = count - leftSideWidth;
    productionUl.style.transform = `translateX(${count}rem)`;
}

function onProductionLeftChevron() {
    count = count + leftSideWidth;
    productionUl.style.transform = `translateX(${count}rem)`;
}

function onCommentRightChevron() {
    count = count - leftSideWidth;
    commentUl.style.transform = `translateX(${count}rem)`;
}

function onCommentLeftChevron() {
    count = count + leftSideWidth;
    commentUl.style.transform = `translateX(${count}rem)`;
}

function onGRightChevron() {
    count = count - rightSideWidth;
    galleryImages.style.transform = `translateX(${count}rem)`;
}

function onGLeftChevron() {
    count = count + rightSideWidth;
    galleryImages.style.transform = `translateX(${count}rem)`;
}

function onVRightChevron() {
    count = count - rightSideWidth;
    videos.style.transform = `translateX(${count}rem)`;
}

function onVLeftChevron() {
    count = count + rightSideWidth;
    videos.style.transform = `translateX(${count}rem)`;
}

function onClRightChevron() {
    count = count - leftSideWidth;
    collectionContentUl.style.transform = `translateX(${count}rem)`;
}

function onClLightChevron() {
    count = count + leftSideWidth;
    collectionContentUl.style.transform = `translateX(${count}rem)`;
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
    modalBackGround.style.display = 'block';
    MDWantToSeeMore.style.display = 'block';
}

function onMdCancelBtn(){
    modalBackGround.style.display = 'none';
    MDWantToSeeMore.style.display = 'none';
}

function markBtnPinkToGrayColorChange(){
    mark.style.backgroundColor = '#F6F6F6';
    mark.style.color = 'black';
    mark.style.border = 'none';
    markModal.style.backgroundColor = '#F6F6F6';
    markModal.style.color = 'black';
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

    fullToemptyBookMarkChange();
    markBtnPinkToGrayColorChange();
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
    noneFullWatchingEyeModal();
    showBookMark();
    markBtnPinkToGrayColorChange();
    emptyToFullBookMarkChange();
    onMdCancelBtn();
}


function onMarkBtn(){
    if(emptyBookMark.style.display == 'none' & fullWatchingEye.style.display == 'none'){
        onEmptyBookMarkModal();
        return;
    }
    onModalBtn();
}

function onfullBookMarkModal(){
    onMdCancelBtn();
    markBtnGrayToPinkColorChange();
    fullToemptyBookMarkChange();
    showPlus();
}

function onWatchingEyeModal(){
    eyeGrayToBlueColorChange();
}

function onFullWatchingEyeModal(){
    noneFullWatchingEyeModal();
    markBtnGrayToPinkColorChange();
    onMdCancelBtn();
    fullWatchingEye.style.display = 'none';
    plusFirst.style.display = 'inline';
}

// addEventListener
body.addEventListener('click', (e)=>{
    const targets = e.target.classList.value.split(" ");
    for(const target of targets){
        switch(target){
            case 'apchRight':
                onProductionRightChevron();
                break;
            case 'apchLeft':
                onProductionLeftChevron();
                break;
            case 'ccchRight':
                onCommentRightChevron();
                break;
            case 'ccchLeft':
                onCommentLeftChevron();
                break;
            case 'gchRight':
                onGRightChevron();
                break;
            case 'gchLeft':
                onGLeftChevron();
                break;
            case 'vchRight':
                onVRightChevron();
                break;
            case 'vchLeft':
                onVLeftChevron();
                break;
            case 'clchRight':
                onClRightChevron();
                break;
            case 'clchLeft':
                onClLightChevron();
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

            case 'fullBookMarkModal':
                onfullBookMarkModal();
                break;
            case 'emptyBookMarkModal':
                onEmptyBookMarkModal();
                break;
            case 'watchingEyeModal':
                onWatchingEyeModal();
                break;
            case 'fullWatchingEyeModal':
                onFullWatchingEyeModal();
                break;
        }
    }
})



