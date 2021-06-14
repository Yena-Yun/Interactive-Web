let scrollTop = 0;
let imageAll;
let totalNum = 0;


window.onload = function () {
    progressBar = document.getElementsByClassName("progressBar")[0];
    imageAll = document.querySelectorAll(".parallax_image");
    //alert(imageAll.length);
    totalNum = imageAll.length;

    // window.addEventListener('resize', stageResize, false);
    window.addEventListener('scroll', scrollFunc);

    //stageResize();
}

function scrollFunc(e) {
    // scrollTop = document.documentElement.scrollTop;
    scrollTop = this.scrollY;

    //let per = Math.ceil(scrollTop / (_documentHum - _windowHNum) * 100);
    //progressBar.style.width = per + "%";

    for (var i = 0; i < totalNum; i++) {
        // 이미지는 0,1,2,3,4,5가 차례대로 들어가되,
        // (5 * (totalNum - i)) 부분에서 수치만 바꿔주는 식
        imageAll[i].style.transform = "perspective(400px) translateZ(" +
            scrollTop / (5 * (totalNum - i)) + "px)";
            // totalNum이 없으면 제일 천천히 움직여야 할 'CODING ELEVEN'이 제일 빨리 움직이게 되어버림
        console.log(scrollTop, i);
    }
}

// function stageResize() {
//     _documentHum = document.body.offsetHeight;
//     _windowHNum = window.outerHeight;
// }