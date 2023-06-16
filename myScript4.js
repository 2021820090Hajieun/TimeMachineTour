

let nowIndex=1;

const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imageTo1');
const bottomBtn02 = document.querySelector('#imageTo2');
const bottomBtn03 = document.querySelector('#imageTo3');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click',moveA);
bottomBtn02.addEventListener('click',moveB);
bottomBtn03.addEventListener('click',moveC);

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

/**
 * 첫번째 이미지로 이동합니다.
 */
function moveA()
{
    imageSlider.style.transform = 'translate(0px)';
    nowIndex =1;
}
/**
 * 두번째 이미지로 이동합니다.
 */
function moveB()
{
    imageSlider.style.transform = 'translate(-1020px)';
    nowIndex =2;
}

/**
 * 세번째 이미지로 이동합니다.
 */
function moveC()
{
    imageSlider.style.transform = 'translate(-2040px)';
    nowIndex =3;
}

function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }

    moveSlider(nowIndex);
}

function moveRight()
{
    if(nowIndex == 3)
    {
        nowIndex ==3;
    }
    else
    {
        nowIndex ++;
    }

    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
    }
}


