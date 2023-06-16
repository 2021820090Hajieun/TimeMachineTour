let imageDate = [
    "img/wormhole2.jpg"
];

let imageName = [
    "WormHole 웜홀"
];

let myThumbnails = document.querySelectorAll(".thumbnail");

let imageTag = document.querySelectorAll(".imageTag");
let thumbTexts = document.querySelectorAll(".textField");
let thumbTexts1 = document.querySelectorAll(".textField1");

for(let i=0; i<myThumbnails.length; i++)
{
    imageTag[i].src = imageDate[i];
    thumbTexts[i].textContent =imageName[i];

    myThumbnails[i].addEventListener('mouseover',overFn);
    myThumbnails[i].addEventListener('mouseout',outFn);
}

function overFn(e)
{
    console.log(e.composedPath());
    e.composedPath()[1].querySelector(".imageTag").classList.add('on');
    e.composedPath()[0].classList('on');
}

function outFn(e)
{
    console.log("out");
    e.composedPath()[1].querySelector("imageTag2").classList.remove('on');
    e.composedPath()[0].classList.remove('on');
}

let imageDate2 = [
    "img/dnwndls.jpg"
];

let imageName2 = [
    "Tourism 관광"
];

let myThumbnails2 = document.querySelectorAll(".thumbnail2");

let imageTag2 = document.querySelectorAll(".imageTag2");
let thumbTexts2 = document.querySelectorAll(".textField2");
let thumbTexts3 = document.querySelectorAll(".textField3");

for(let i=0; i<myThumbnails2.length; i++)
{
    imageTag2[i].src = imageDate2[i];
    thumbTexts2[i].textContent =imageName2[i];

    myThumbnails2[i].addEventListener('mouseover',overFn);
    myThumbnails2[i].addEventListener('mouseout',outFn);
}

function overFn(e)
{
    console.log(e.composedPath());
    e.composedPath()[1].querySelector(".imageTag2").classList.add('on');
    e.composedPath()[0].classList('on');
}

function outFn(e)
{
    console.log("out");
    e.composedPath()[1].querySelector("imageTag2").classList.remove('on');
    e.composedPath()[0].classList.remove('on');
}

/*--------------*/

let imageDate3 = [
    "img/wormhole3.jpg"
];

let imageName3 = [
    "What is a 'Wormhole'? 웜홀이란?"
];

let myThumbnails3 = document.querySelectorAll(".thumbnail3");

let imageTag3 = document.querySelectorAll(".imageTag3");
let thumbTexts4 = document.querySelectorAll(".textField4");


for(let i=0; i<myThumbnails3.length; i++)
{
    imageTag3[i].src = imageDate3[i];
    thumbTexts3[i].textContent =imageName3[i];

    myThumbnails3[i].addEventListener('mouseover',overFn);
    myThumbnails3[i].addEventListener('mouseout',outFn);
}

function overFn(e)
{
    console.log(e.composedPath());
    e.composedPath()[1].querySelector(".imageTag3").classList.add('on');
    e.composedPath()[0].classList('on');
}

function outFn(e)
{
    console.log("out");
    e.composedPath()[1].querySelector("imageTag3").classList.remove('on');
    e.composedPath()[0].classList.remove('on');
}