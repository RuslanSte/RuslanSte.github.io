var MyItem = document.getElementsByClassName("timetable_el");
var el_1 = document.getElementsByClassName("timetable_el_list");
var heig = new Array();

for(i=0;i<7;i++){
    el_1[i].setAttribute("style", "display: block");
    heig[i] = el_1[i].clientHeight;
    el_1[i].setAttribute("style", "display: block; height: 0px");
}

MyItem[0].onclick = function(){
    if(el_1[0].getAttribute("style") !== "display: block; height: 0px"){
        el_1[0].setAttribute("style","display: block; height: 0px");
    }
    else{
        el_1[0].setAttribute("style","display: block; height: " + heig[0] + "px");
    }
}

MyItem[1].onclick = function(){
    if(el_1[1].getAttribute("style") !== "display: block; height: 0px"){
        el_1[1].setAttribute("style","display: block; height: 0px");
    }
    else{
        el_1[1].setAttribute("style","display: block; height: " + heig[1] + "px");
    }
}

MyItem[2].onclick = function(){
    if(el_1[2].getAttribute("style") !== "display: block; height: 0px"){
        el_1[2].setAttribute("style","display: block; height: 0px");
    }
    else{
        el_1[2].setAttribute("style","display: block; height: " + heig[2] + "px");
    }
}

MyItem[3].onclick = function(){
    if(el_1[3].getAttribute("style") !== "display: block; height: 0px"){
        el_1[3].setAttribute("style","display: block; height: 0px");
    }
    else{
        el_1[3].setAttribute("style","display: block; height: " + heig[3] + "px");
    }
}

MyItem[4].onclick = function(){
    if(el_1[4].getAttribute("style") !== "display: block; height: 0px"){
        el_1[4].setAttribute("style","display: block; height: 0px");
    }
    else{
        el_1[4].setAttribute("style","display: block; height: " + heig[4] + "px");
    }
}

MyItem[5].onclick = function(){
    if(el_1[5].getAttribute("style") !== "display: block; height: 0px"){
        el_1[5].setAttribute("style","display: block; height: 0px");
    }
    else{
        el_1[5].setAttribute("style","display: block; height: " + heig[5] + "px");
    }
}

MyItem[6].onclick = function(){
    if(el_1[6].getAttribute("style") !== "display: block; height: 0px"){
        el_1[6].setAttribute("style","display: block; height: 0px");
    }
    else{
        el_1[6].setAttribute("style","display: block; height: " + heig[6] + "px");
    }
}


var arrow_1 = document.getElementsByClassName("arrow_1");
var arrow_2 = document.getElementsByClassName("arrow_2");
var num = "";
var move;
var n, a;


for(i=1;i<6;i++){
    n = "img_" + i;
    move = document.getElementsByClassName(n);
    move[0].setAttribute("style", "left: " + 300*(i-1) + "px");
}

arrow_1[0].onclick = function(){
    move = document.getElementsByClassName("img_1");
    if(move[0].getAttribute("style") !== "left: 600px"){
        for(i=1;i<6;i++){
            n = "img_" + i;
            move = document.getElementsByClassName(n);
            a = move[0].getAttribute("style");
            let j = 6;
            num = "";
            console.log(num);
            while(a[j] !== "p"){
                num += a[j];
                j++;
            }
            num *= 1;
            num += 300;
            move[0].setAttribute("style", "left: " + num + "px");
            console.log(num);
        }
    }
}

arrow_2[0].onclick = function(){
    move = document.getElementsByClassName("img_5");
    if(move[0].getAttribute("style") !== "left: 600px"){
        for(i=1;i<6;i++){
            n = "img_" + i;
            move = document.getElementsByClassName(n);
            a = move[0].getAttribute("style");
            let j = 6;
            num = "";
            console.log(num);
            while(a[j] !== "p"){
                num += a[j];
                j++;
            }
            num *= 1;
            num -= 300;
            move[0].setAttribute("style", "left: " + num + "px");
            console.log(num);
        }
    }
}


