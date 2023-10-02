const hour = document.querySelector(".hour");
const min = document.querySelector(".mintues");
const sec = document.querySelector(".seconds");
const startbtn = document.querySelector(".start");
const reset = document.querySelector(".reset");


function handleClick() {
    let id;
  
    return function (event) {

      id = setInterval(() => {
        let secNum = sec.value;
        let minNum = min.value;
        let hourNum = hour.value;
  
        if (secNum > 0) {
          sec.value = --secNum;
          return;
        }
  
        if (secNum == 0) {
          if (minNum > 0) {
            min.value = --minNum;
            sec.value = 60;
            return;
          }
  
          if (hourNum > 0) {
            hour.value = --hourNum;
            min.value = 60;
            sec.value = 60;
          }
  
          if (hour == 0) {
            clearInterval(id);
          }
        }
      }, 1000);
    };
  };


startbtn.addEventListener("click", handleClick());
