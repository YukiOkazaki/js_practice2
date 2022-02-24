let count = 180;
let min = 0;
let sec = 0;
let stp = null;

function get_form_time() {
    let minute = parseInt(document.getElementById("minute").value);
    let second = parseInt(document.getElementById("second").value);
    return minute * 60 + second;
}

// 1秒毎にcont_down関数を呼び出し
function count_start() {
    count = get_form_time();
    console.log(document.getElementById("minute"));
    stp = setInterval(count_down, 1000);
}

// カウンドダウン表示
function count_down() {
    if (count === 0) {
        let display = document.getElementById("timer");
        display.innerHTML = "TIME UP!";
    } else {
        count--;
        min = parseInt(count / 60);
        sec = count % 60;
        let count_down = document.getElementById("timer");
        count_down.innerHTML = ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
    }
}

function count_stop() {
    clearInterval(stp);
}

function count_reset() {
    count = get_form_time();
    min = parseInt(count / 60);
    sec = count % 60;
    let count_down = document.getElementById("timer");
    count_down.innerHTML = ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
}

// イベント管理
window.onload = function() {
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    start.addEventListener("click", count_start, false);
    stop.addEventListener("click", count_stop, false);
    reset.addEventListener("click", count_reset, false);
}