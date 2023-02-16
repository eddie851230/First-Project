// 開啟視窗
// 先宣告id為talkRoom的東西為talk
let talk = document.getElementById("talkRoom");
// console.log(talk);
// talk.onclick = show;

// 建立一個叫做show的含式，執行:讓talk的css中的left 改為0px
function show() {
  // alert('ok');
  talk.style.left = "0px";
}

// 關閉視窗
// 在宣告id 為crossicon的東西為byefriend
// 建立一個叫做hide的含式，執行:讓talk的css中的left 改為0px
crossicon.onclick = function (event) {
  event.cancelBubble = true;

  document.getElementById("talkRoom").style.left = "-300px";
};

// 點擊placeholder就會觸動顯示
function expandMore() {
  moreOptions.style.visibility = visible;
}

//---跑獨立照片視窗pic--------------------------------------
// // 宣告原視窗的圖為oriPic
// let oriPic = document.getElementById("originalpic");

// // 宣告整個視窗為wholeModal
// let wholeModal = document.getElementById("zoommodal");

// // 宣告展開的圖為
// let zoomerPic = document.getElementById("id-zoompic");

// // 點擊oriPic 的函式
// oriPic.onclick = function(){
//     wholeModal.style.display = 'flex';
//     zoomerPic.src=this.src;
// }
// // 宣告關閉視窗韓式
// let leavewindow = document.getElementById('closeicon');

// // 建立關閉視窗含是
// leavewindow.onclick = function(){
//     wholeModal.style.display="none";
// }

// ---------------------------------------------------------
// 建立單一函式開啟各別Modal
const triggers = document.getElementsByClassName("trigger");
const triggerArray = Array.from(triggers).entries();

let wholeModal = document.getElementById("zoommodal");
let zoomerPic = document.getElementById("id-zoompic");
const closeButtons = document.getElementById("closeicon");

// 建立迴圈:點選圖會選到對應的modal
for (let [index, trigger] of triggerArray) {
  const toggleModal = () => {
    wholeModal.classList.toggle("show-modal");
    zoomerPic.src = triggers[index].src;
    console.log(triggers[index].src);

    // wholeModal.style.display = 'flex';
  };
  trigger.addEventListener("click", toggleModal);
  closeButtons.addEventListener("click", toggleModal);
}
// -------------------------------------------------------

let typingtext = document.getElementsByClassName("typing");

typingtext[0].onfocus = function () {
  document.getElementsByClassName("moreOptions")[0].style.display = "block";
  // var bob = 0;
  // setTimeout(function () {
  //     bob = 1;
  //     if (bob) {
  //         document.onclick = function () {
  //             document.getElementsByClassName('moreOptions')[0].style.display = "none";
  //         }
  //     }
  // }, 1000)
};

typingtext[0].onblur = function () {
  document.getElementsByClassName("moreOptions")[0].style.display = "none";
};

typingtext[1].onfocus = function () {
  document.getElementsByClassName("moreOptions")[1].style.display = "block";
};
typingtext[1].onblur = function () {
  document.getElementsByClassName("moreOptions")[1].style.display = "none";
};
// 第二個輸入框
// typingtext[1].onfocus=function(){
//     document.getElementsByClassName('moreOptions')[1].style.display="block";
// };

// function flatback(){
//     var x = document.getElementsByClassName('moreOption');
//     x[1].style.display="none";
// };
