// 이미지 변경은 아래와 같이 이미지 요소의 src를 변경하는 방식으로 하는 것을 권장합니다.
//someImageElement.src = "/images/image-1.png";

//버튼
const img = document.querySelector("#sampleimg");
const leftBtn = document.querySelector("#leftbtn");
const rightBtn = document.querySelector("#rightbtn");
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");
const dot5 = document.querySelector("#dot5");

/**
 *  각 버튼별로 누르면 해당 버튼의 이미지가 뜨도록 한다.
 *  1번 버튼 ~ 5번 버튼까지
*/

function img1(){
  img.src = "images/image-1.png";
}
function img2(){
  img.src = "images/image-2.png";
}
function img3(){
  img.src = "images/image-3.png";
}
function img4(){
  img.src = "images/image-4.png";
}
function img5(){
  img.src = "images/image-5.png";
}

/**
 * 각 버튼에 이벤트 작성하기
 * 각 버튼을 누르면 해당 function이 작동
 * 이미지의 변경
 */
dot1.addEventListener("click", img1);
dot2.addEventListener("click", img2);
dot3.addEventListener("click", img3);
dot4.addEventListener("click", img4);
dot5.addEventListener("click", img5);
