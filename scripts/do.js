var MyItem = document.querySelector("img");

MyItem.onclick = function() {
    var MySrc = MyItem.getAttribute("src");
    if(MySrc === "imgs/post_5bd02f48e3b92.jpg"){
        MyItem.setAttribute('src','imgs/koshka-s-udivlennymi-kruglymi-glazami.jpg')
    }
    else{
        MyItem.setAttribute('src','imgs/post_5bd02f48e3b92.jpg')
    }
}


var MyButton = document.querySelector('button');
var DelButton = document.querySelector('h2');
var MyHead = document.querySelector('h1');

function setName(){
    var NewName = prompt('Please enter your name');
    localStorage.setItem('name', NewName);
}

if(localStorage.getItem('name') !== null){
    MyHead.textContent = localStorage.getItem('name') + ' like KITTY!';
}

MyButton.onclick = function(){
    setName();
}

DelButton.onclick = function(){
    localStorage.removeItem('name');
}