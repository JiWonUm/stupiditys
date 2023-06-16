let nowIndex = 1;

const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');
//const bottomBtn04 = document.querySelector('#imgTo4');
//const bottomBtn05 = document.querySelector('#imgTo5');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click', moveA);
bottomBtn02.addEventListener('click', moveB);
bottomBtn03.addEventListener('click', moveC);
//bottomBtn04.addEventListener('click', moveD);
//bottomBtn05.addEventListener('click', moveE);

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
    imageSlider.style.transform = 'translate(-1000px)';
    nowIndex =2;
}

/**
 * 세번째 이미지로 이동합니다.
 */
function moveC()
{
    imageSlider.style.transform = 'translate(-2000px)';
    nowIndex =3;
}

/**
 * 네번째 이미지로 이동합니다.
 */
function moveD()
{
    imageSlider.style.transform = 'translate(-300px)';
    nowIndex =4;
}

/**
 * 다섯번째 이미지로 이동합니다.
 */
function moveE()
{
    imageSlider.style.transform = 'translate(-4000px)';
    nowIndex =5;
}


function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex =3;
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
        nowIndex =1;
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
        case 4:
            moveD();
        break;
        case 5:
            moveE();
        break;
    }
}

var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(){
    targetID = this.getAttribute('href');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}


