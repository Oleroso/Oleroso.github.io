
const but1 = document.getElementById("b1");
const line1 = document.getElementById("l1");
const list1 = document.getElementById("list1");
const but2 = document.getElementById("b2");
const line2 = document.getElementById("l2");
const list2 = document.getElementById("list2");
const but3 = document.getElementById("b3");
const line3 = document.getElementById("l3");
const list3 = document.getElementById("list3");
const but4 = document.getElementById("b4");
const line4 = document.getElementById("l4");
const list4 = document.getElementById("list4");
const but5 = document.getElementById("b5");
const line5 = document.getElementById("l5");
const list5 = document.getElementById("list5");
const but6 = document.getElementById("b6");
const line6 = document.getElementById("l6");
const list6 = document.getElementById("list6");
const butr = document.getElementById("r");
const butc = document.getElementById("c");
const ans1 = document.getElementById("p1");
const ans2 = document.getElementById("p2");
const ans3 = document.getElementById("p3");
const ans4 = document.getElementById("p4");
const ans5 = document.getElementById("p5");
let an = 0,c1=0,c2=0,c3=-1,c4=1,c5=20,c6=-1;
butr.addEventListener("click", function ads() {
    line1.style.stroke="black";c1=0; but1.innerHTML = "First digit band";
    line2.style.stroke="black";c2=0; but2.innerHTML = "Second digit band";
    line3.style.stroke="antiquewhite";c3=-1; but3.innerHTML = "Third digit band";
    line4.style.stroke="black";c4=0; but4.innerHTML = "Multiplier";
    line5.style.stroke="antiquewhite";c5=20; but5.innerHTML = "Tolerance";
    line6.style.stroke="antiquewhite";c6=-1; but6.innerHTML = "Temperature coefficient";
    ans1.innerHTML = 0;
    ans2.innerHTML = 20;
    ans4.innerHTML = "Temperature coefficient not defined";
    ans3.innerHTML = " ";
    ans5.innerHTML = " ";
});
butc.addEventListener("click", function ads() {
    if(c3==-1){
        an=(c1*10+c2)*c4;
    }else{
        an=(c1*100+c2*10+c3)*c4;
    }
    ans1.innerHTML = an;
    ans2.innerHTML = c5;
    if(c6!=-1){
        ans3.innerHTML = c6;
        ans4.innerHTML = " Temperature coefficient is equal to ";
        ans5.innerHTML = " ppm/K";
    }else{
        ans4.innerHTML = "Temperature coefficient is not defined";
        ans3.innerHTML = " ";
        ans5.innerHTML = " ";
    }
});
but1.addEventListener("click", function ads() {
    list1.classList.toggle("list--visible");

});
document.getElementById("b11").addEventListener("click", function ads() {
    list1.classList.toggle("list--visible");
    line1.style.stroke="black";
    but1.innerHTML = "Black";
    c1=0;
});
document.getElementById("b12").addEventListener("click", function ads() {
    list1.classList.toggle("list--visible");
    line1.style.stroke="brown";
    but1.innerHTML = "Brown";
    c1=1;
});
document.getElementById("b13").addEventListener("click", function ads() {
    list1.classList.toggle("list--visible");
    line1.style.stroke="red"
    but1.innerHTML = "Red";
    c1=2;
;});
document.getElementById("b14").addEventListener("click", function ads() { 
    list1.classList.toggle("list--visible");
    line1.style.stroke="orange";
    but1.innerHTML = "Orange";
    c1=3;
});
document.getElementById("b15").addEventListener("click", function ads() { 
    list1.classList.toggle("list--visible");
    line1.style.stroke="yellow";
    but1.innerHTML = "Yellow";
    c1=4;
});
document.getElementById("b16").addEventListener("click", function ads() { 
    list1.classList.toggle("list--visible");
    line1.style.stroke="green";
    but1.innerHTML = "Green";
    c1=5;
});
document.getElementById("b17").addEventListener("click", function ads() { 
    list1.classList.toggle("list--visible");
    line1.style.stroke="blue";
    but1.innerHTML = "Blue";
    c1=6;
});
document.getElementById("b18").addEventListener("click", function ads() { 
    list1.classList.toggle("list--visible");
    line1.style.stroke="violet";
    but1.innerHTML = "Violet";
    c1=7;
});
document.getElementById("b19").addEventListener("click", function ads() { 
    list1.classList.toggle("list--visible");
    line1.style.stroke="grey";
    but1.innerHTML = "Grey";
    c1=8;
});
document.getElementById("b110").addEventListener("click", function ads() { 
    list1.classList.toggle("list--visible");
    line1.style.stroke="white";
    but1.innerHTML = "White";
    c1=9;
});
//=============================================================================================================
but2.addEventListener("click", function ads() {
    list2.classList.toggle("list--visible");

});
document.getElementById("b21").addEventListener("click", function ads() {
    list2.classList.toggle("list--visible");
    line2.style.stroke="black";
    but2.innerHTML = "Black";
    c2=0;
});
document.getElementById("b22").addEventListener("click", function ads() {
    list2.classList.toggle("list--visible");
    line2.style.stroke="brown";
    but2.innerHTML = "Brown";
    c2=1;
});
document.getElementById("b23").addEventListener("click", function ads() {
    list2.classList.toggle("list--visible");
    line2.style.stroke="red"
    but2.innerHTML = "Red";
    c2=2;
;});
document.getElementById("b24").addEventListener("click", function ads() { 
    list2.classList.toggle("list--visible");
    line2.style.stroke="orange";
    but2.innerHTML = "Orange";
    c2=3;
});
document.getElementById("b25").addEventListener("click", function ads() { 
    list2.classList.toggle("list--visible");
    line2.style.stroke="yellow";
    but2.innerHTML = "Yellow";
    c2=4;
});
document.getElementById("b26").addEventListener("click", function ads() { 
    list2.classList.toggle("list--visible");
    line2.style.stroke="green";
    but2.innerHTML = "Green";
    c2=5;
});
document.getElementById("b27").addEventListener("click", function ads() { 
    list2.classList.toggle("list--visible");
    line2.style.stroke="blue";
    but2.innerHTML = "Blue";
    c2=6;
});
document.getElementById("b28").addEventListener("click", function ads() { 
    list2.classList.toggle("list--visible");
    line2.style.stroke="violet";
    but2.innerHTML = "Violet";
    c2=7;
});
document.getElementById("b29").addEventListener("click", function ads() { 
    list2.classList.toggle("list--visible");
    line2.style.stroke="grey";
    but2.innerHTML = "Grey";
    c2=8;
});
document.getElementById("b210").addEventListener("click", function ads() { 
    list2.classList.toggle("list--visible");
    line2.style.stroke="white";
    but2.innerHTML = "White";
    c2=9;
});
//============================================================================================================
but3.addEventListener("click", function ads() {
    list3.classList.toggle("list--visible");

});
document.getElementById("b31").addEventListener("click", function ads() {
    list3.classList.toggle("list--visible");
    line3.style.stroke="black";
    but3.innerHTML = "Black";
    c3=0;
});
document.getElementById("b32").addEventListener("click", function ads() {
    list3.classList.toggle("list--visible");
    line3.style.stroke="brown";
    but3.innerHTML = "Brown";
    c3=1;
});
document.getElementById("b33").addEventListener("click", function ads() {
    list3.classList.toggle("list--visible");
    line3.style.stroke="red"
    but3.innerHTML = "Red";
    c3=2;
;});
document.getElementById("b34").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="orange";
    but3.innerHTML = "Orange";
    c3=3;
});
document.getElementById("b35").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="yellow";
    but3.innerHTML = "Yellow";
    c3=4;
});
document.getElementById("b36").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="green";
    but3.innerHTML = "Green";
    c3=5;
});
document.getElementById("b37").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="blue";
    but3.innerHTML = "Blue";
    c3=6;
});
document.getElementById("b38").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="violet";
    but3.innerHTML = "Violet";
    c3=7;
});
document.getElementById("b39").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="grey";
    but3.innerHTML = "Grey";
    c3=8;
});
document.getElementById("b310").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="white";
    but3.innerHTML = "White";
    c3=9;
});
document.getElementById("b311").addEventListener("click", function ads() { 
    list3.classList.toggle("list--visible");
    line3.style.stroke="antiquewhite";
    but3.innerHTML = "None";
    c3=-1;
});
//========================================================================================================
but4.addEventListener("click", function ads() {
    list4.classList.toggle("list--visible");
});
document.getElementById("b41").addEventListener("click", function ads() {
    list4.classList.toggle("list--visible");
    line4.style.stroke="black";
    but4.innerHTML = "Black";
    c4=1;
});
document.getElementById("b42").addEventListener("click", function ads() {
    list4.classList.toggle("list--visible");
    line4.style.stroke="brown";
    but4.innerHTML = "Brown";
    c4=10;
});
document.getElementById("b43").addEventListener("click", function ads() {
    list4.classList.toggle("list--visible");
    line4.style.stroke="red"
    but4.innerHTML = "Red";
    c4=100;
;});
document.getElementById("b44").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="orange";
    but4.innerHTML = "Orange";
    c4=1000;
});
document.getElementById("b45").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="yellow";
    but4.innerHTML = "Yellow";
    c4=10000;
});
document.getElementById("b46").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="green";
    but4.innerHTML = "Green";
    c4=100000;
});
document.getElementById("b47").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="blue";
    but4.innerHTML = "Blue";
    c4=1000000;
});
document.getElementById("b48").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="violet";
    but4.innerHTML = "Violet";
    c4=10000000;
});
document.getElementById("b49").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="grey";
    but4.innerHTML = "Grey";
    c4=100000000;
});
document.getElementById("b410").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="white";
    but4.innerHTML = "White";
    c4=1000000000;
});
document.getElementById("b411").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="gold";
    but4.innerHTML = "Gold";
    c4=0.1;
});
document.getElementById("b412").addEventListener("click", function ads() { 
    list4.classList.toggle("list--visible");
    line4.style.stroke="silver";
    but4.innerHTML = "Silver";
    c4=0.01;
});
//========================================================================================================
but5.addEventListener("click", function () {
    list5.classList.toggle("list--visible");
});
document.getElementById("b52").addEventListener("click", function ads() {
    list5.classList.toggle("list--visible");
    line5.style.stroke="brown";
    but5.innerHTML = "Brown";
    c5=1;
});
document.getElementById("b53").addEventListener("click", function ads() {
    list5.classList.toggle("list--visible");
    line5.style.stroke="red"
    but5.innerHTML = "Red";
    c5=2;
;});
//

//
document.getElementById("b56").addEventListener("click", function ads() { 
    list5.classList.toggle("list--visible");
    line5.style.stroke="green";
    but5.innerHTML = "Green";
    c5=0.5;
});
document.getElementById("b57").addEventListener("click", function ads() { 
    list5.classList.toggle("list--visible");
    line5.style.stroke="blue";
    but5.innerHTML = "Blue";
    c5=0.25;
});
document.getElementById("b58").addEventListener("click", function ads() { 
    list5.classList.toggle("list--visible");
    line5.style.stroke="violet";
    but5.innerHTML = "Violet";
    c5=0.1;
});
document.getElementById("b59").addEventListener("click", function ads() { 
    list5.classList.toggle("list--visible");
    line5.style.stroke="grey";
    but5.innerHTML = "Grey";
    c5=0.05;
});
document.getElementById("b511").addEventListener("click", function ads() { 
    list5.classList.toggle("list--visible");
    line5.style.stroke="gold";
    but5.innerHTML = "Gold";
    c5=5;
});
document.getElementById("b512").addEventListener("click", function ads() { 
    list5.classList.toggle("list--visible");
    line5.style.stroke="silver";
    but5.innerHTML = "Silver";
    c5=10;
});
document.getElementById("b513").addEventListener("click", function ads() { 
    list5.classList.toggle("list--visible");
    line5.style.stroke="antiquewhite";
    but5.innerHTML = "None";
    c5=20;
});
//========================================================================================================
but6.addEventListener("click", function ads() {
    list6.classList.toggle("list--visible");

});
document.getElementById("b61").addEventListener("click", function ads() {
    list6.classList.toggle("list--visible");
    line6.style.stroke="black";
    but6.innerHTML = "Black";
    c6=250;
});
document.getElementById("b62").addEventListener("click", function ads() {
    list6.classList.toggle("list--visible");
    line6.style.stroke="brown";
    but6.innerHTML = "Brown";
    c6=100;
});
document.getElementById("b63").addEventListener("click", function ads() {
    list6.classList.toggle("list--visible");
    line6.style.stroke="red"
    but6.innerHTML = "Red";
    c6=50;
;});
document.getElementById("b64").addEventListener("click", function ads() { 
    list6.classList.toggle("list--visible");
    line6.style.stroke="orange";
    but6.innerHTML = "Orange";
    c6=15;
});
document.getElementById("b65").addEventListener("click", function ads() { 
    list6.classList.toggle("list--visible");
    line6.style.stroke="yellow";
    but6.innerHTML = "Yellow";
    c6=25;
});
document.getElementById("b66").addEventListener("click", function ads() { 
    list6.classList.toggle("list--visible");
    line6.style.stroke="green";
    but6.innerHTML = "Green";
    c6=20;
});
document.getElementById("b67").addEventListener("click", function ads() { 
    list6.classList.toggle("list--visible");
    line6.style.stroke="blue";
    but6.innerHTML = "Blue";
    c6=10;
});
document.getElementById("b68").addEventListener("click", function ads() { 
    list6.classList.toggle("list--visible");
    line6.style.stroke="violet";
    but6.innerHTML = "Violet";
    c6=5;
});
document.getElementById("b69").addEventListener("click", function ads() { 
    list6.classList.toggle("list--visible");
    line6.style.stroke="grey";
    but6.innerHTML = "Grey";
    c6=1;
});
document.getElementById("b610").addEventListener("click", function ads() { 
    list6.classList.toggle("list--visible");
    line6.style.stroke="antiquewhite";
    but6.innerHTML = "None";
    c6=-1;
});
