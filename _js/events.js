let rightM = document.getElementById("rightM");
let leftM = document.getElementById("leftM");
let noodle = document.getElementById("noodle");
let slogan = document.getElementById("slogan");
let btn = document.getElementById("btn");
let guaBao = document.getElementById("guaBao");
let bubbleTea = document.getElementById("bubbleTea");
let river = document.getElementById("river");
let baobao = document.getElementById("baobao");
// 新增事件監聽
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  rightM.style.top = value * 0.25 + "px";
  leftM.style.top = value * 0.15 + "px";
  noodle.style.top = value * 0.3 + "px";
  bubbleTea.style.left = value * -0.3 + "px";
  guaBao.style.left = value * 0.5 + "px";

  slogan.style.marginRight = value * 2 + "px";
  baobao.style.left = value * 0.6 + "px";
});
//--點擊左右方向鍵-----------------------------------------------------------
let slideIndex = 1;

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  //x=[img1,img2,img3,img4]
  // i  0    1    2    3
  //slideIndex  1    2    3    4
  if (n > x.length) {
    slideIndex = 1;
  } //4-1
  if (n < 1) {
    slideIndex = x.length;
  } //1-4
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
showDivs(slideIndex);
// _________________________________________________________________
// 自動跑馬
var autoindex = 0;

function carousel() {
  let x = document.getElementsByClassName("mySlides");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  autoindex++;
  if (autoindex > x.length) {
    autoindex = 1;
  }
  x[autoindex - 1].style.display = "block";
  setTimeout(carousel, 1500); // Change image every 2 seconds
}
carousel();
// setTimeout(carousel, 3000);
// ______________________________________________________________
// 活動商品
function openCity(evt, cityName) {
  var i;

  let tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
  console.log(cityName);
}

// ______________________________________________________________
// 抽獎的js
// 三個盒子分別有多個折價券
// 每次刷新頁面這些折價券會隨機分配給三個盒子

// 1.先為折價券的陣列定義(看有幾個class)

// 每一次刷新頁可以點擊兩次
// 第三次會跳出""今日抽獎次數已用完

// 禮物名單(直接寫在js)
var allPrizes = [
  "冬水堂6折券",
  "蛙城兩人同行一人免費",
  "月巴克咖啡壹千元提貨券",
  "買噹噹二千元提貨卡",
  "肯德鴨全家桶鴨兌換券",
];
// 設定箱子陣列
const presentList = document.getElementsByClassName("present");
const presentOrder = Array.from(presentList).entries();
// 定義初始值
var clickedTimes = 0;

// 設定抽中的禮物到span
var nameOfPrize = document.querySelector(".prizeName");
console.log(nameOfPrize);

// 第一次與第二次抽禮拜打開畫面與關閉
$(".present").click(function (e) {
  $(".fullPrizePage").css("display", "flex");
  e.stopPropagation();
});
$(window).click(function (e) {
  $(".fullPrizePage").css("display", "none");
  e.stopPropagation();
});
// 關閉全頻用盡次數畫面

$(window).click(function (e) {
  $(".overBG").css("display", "none");
  e.stopPropagation();
});

// 點擊完的警示畫面
var showNo = document.getElementById("showNo");
let chancebox = document.querySelector(".openbox-chance span");
let chancetime = 2;

// console.log(chancetime)
// 點擊條件
for (let [index] of presentOrder) {
  presentList[index].addEventListener("click", function () {
    if (clickedTimes < 2) {
      //確定在抽獎的數量內隨機取一數。
      var x = Math.floor(Math.random() * allPrizes.length);
      
      nameOfPrize.innerText = allPrizes[x];
      allPrizes.splice(x, 1);
      // console.log( allPrizes);
      chancetime -= 1;
      chancebox.innerText = chancetime;
      return (clickedTimes += 1);
    }
    showNo.style.display = "flex";
    return;
  });
}
