// 이미지 변경은 아래와 같이 이미지 요소의 src를 변경하는 방식으로 하는 것을 권장합니다.
//someImageElement.src = "/images/image-1.png";

//버튼
const img = document.querySelector("#sampleimg");
const prevbtn = document.querySelector("#leftbtn");
const nextbtn = document.querySelector("#rightbtn");
const dot1 = document.querySelector("#dot1");
const dot2 = document.querySelector("#dot2");
const dot3 = document.querySelector("#dot3");
const dot4 = document.querySelector("#dot4");
const dot5 = document.querySelector("#dot5");

/**
 *  각 버튼별로 누르면 해당 버튼의 이미지가 뜨도록 한다.
 *  1번 버튼 ~ 5번 버튼까지
 * classList.add : 클래스명을 추가하되, 이미 있다면 추가하지 않음
 * classList.remove: 클래스명 삭제
*/

function img1(){
  img.src = "images/image-1.png";
  dot1.classList.add('active');
  dot2.classList.remove('active');
  dot3.classList.remove('active');
  dot4.classList.remove('active');
  dot5.classList.remove('active');
}
function img2(){
  img.src = "images/image-2.png";
  dot1.classList.remove('active');
  dot2.classList.add('active');
  dot3.classList.remove('active');
  dot4.classList.remove('active');
  dot5.classList.remove('active');
}
function img3(){
  img.src = "images/image-3.png";
  dot1.classList.remove('active');
  dot2.classList.remove('active');
  dot3.classList.add('active');
  dot4.classList.remove('active');
  dot5.classList.remove('active');

}
function img4(){
  img.src = "images/image-4.png";
  dot1.classList.remove('active');
  dot2.classList.remove('active');
  dot3.classList.remove('active');
  dot4.classList.add('active');
  dot5.classList.remove('active');
}
function img5(){
  img.src = "images/image-5.png";
  dot1.classList.remove('active');
  dot2.classList.remove('active');
  dot3.classList.remove('active');
  dot4.classList.remove('active');
  dot5.classList.add('active');
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

/**
 * prev, next 버튼
 * 현재 첫 이미지일 때 prev -> 마지막 이미지로 이동
 * 현재 마지막 이미지일 때 next -> 첫 이미지로 이동
 */

function next(){
  if(sampleimg.src=="images/image-1.png"){
    img2();
  }else if(sampleimg.src == "images/image-2.png"){
    img3();
  }else if(sampleimg.src == "images/image-3.png"){
    img4();
  }else if(sampleimg.src == "images/image-4.png"){
    img5();
  }else if(sampleimg.src == "images/image-5.png"){
    img1();
  }else {
    console.log("error");
  }
}

function prev(){
  if(sampleimg.src=="images/image-1.png"){
    img5();
  }else if(sampleimg.src == "images/image-2.png"){
    img1();
  }else if(sampleimg.src == "images/image-3.png"){
    img2();
  }else if(sampleimg.src == "images/image-4.png"){
    img3();
  }else if(sampleimg.src == "images/image-5.png"){
    img4();
  }else {
    console.log("error");
  }
}

prevbtn.addEventListener("click", prev);
nextbtn.addEventListener("click", next);