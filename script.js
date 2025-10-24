console.log("Amazon");

let right_btn=document.getElementById("right-button");
let left_btn=document.getElementById("left-button");
let home_img=document.getElementById("home-image");

let rect1=document.getElementById("rect1");
let rect2=document.getElementById("rect2");
let rect3=document.getElementById("rect3");
let rect_left_btn=document.getElementById("left-rect-btn");
let rect_right_btn=document.getElementById("right-rect-btn");

let img_arr=["Images/HomePage1.jpg","Images/HomePage2.jpg","Images/HomePage3.jpg","Images/HomePage.jpg"];

let i=0;

right_btn.addEventListener("click",()=>{
    home_img.style.backgroundImage=`url(${img_arr[i]})`;
    i+=1;
    if (i>3){
        i=0;
    }
});

let j=2;
left_btn.addEventListener("click",()=>{
    home_img.style.backgroundImage=`url(${img_arr[j]})`;
    j--;
    if (j<0){
        j=3
    }
});

rect_right_btn.addEventListener("click",()=>{
    let r1=Math.floor(Math.random()*3);
    let r2=Math.floor(Math.random()*3);
    let r3=Math.floor(Math.random()*3);
    console.log(r1);
    console.log(r2);
    console.log(r3);
    if (r1!=r2 && r2!=r3 && r1!=r3){
        rect1.style.zIndex=r1;
        rect2.style.zIndex=r2;
        rect3.style.zIndex=r3;
    }
    
})