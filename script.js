console.log("Amazon");

let right_btn=document.getElementById("right-button");
let left_btn=document.getElementById("left-button");
let home_img=document.getElementById("home-image");

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