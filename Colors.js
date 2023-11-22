var Links = {
    setColor (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length) {
        //     alist[i].style.color = color;
        //      i++;
        // }
        $('a').css('color',color)
    }
}

function openPop() {
    document.getElementById("popup_layer").style.display = "block";

}

function closePop() {
    document.getElementById("popup_layer").style.display = "none";
}
function mainlink() {
    window.location.href = "main.html#";
}
function codinglink() {
    window.location.href = "coding.html";
}


// function openPop() {
//     document.getElementById('popup_overlay').style.display = 'block';
//     document.getElementById('popup_layer').style.display = 'block';
// }

// function closePop() {
//     document.getElementById('popup_overlay').style.display = 'none';
//     document.getElementById('popup_layer').style.display = 'none';
// }