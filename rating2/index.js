
// const rate = 3.4;

document.addEventListener('DOMContentLoaded', ()=>{
    stars.style.width = ` ${Math.round((rate * 100 / 5))}%`;
 });


 const stars = document.getElementsByClassName("star_child")[0];
 let flag = true;
 let count = 0;

 function betterFunnion(){
  let  flag = true;
  let count = 0;
  let st;
    return ()=>{
        if(flag){
            flag = false;
            console.log("click");
        }

        clearTimeout(st);
       st = setTimeout(()=>{
            flag = true;
            count++;
            console.log("timeout", count);
        }, 5000);
    }
 }

 const like = betterFunnion();

