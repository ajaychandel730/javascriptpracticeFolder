class UndoAndRedo{

    constructor(){
        this.redoArr = []; 
        this.undo = [0];
    }

    addUndo(li) {
        if(this.undo.length > 50){
            this.undo.shift();
        };
        this.undo.push(li);
    };
  
     back(){
        if(this.undo.length == 1) return -1;
        const popEle = this.undo.pop();

        if(this.redoArr.length > 50){
            this.redoArr.unshift();
        }

        this.redoArr.push(popEle);
        return this.undo[this.undo.length-1];
    };
     
    go(){
        if(this.redoArr.length == 0) return-1;
        let popEle = this.redoArr.pop();
        this.addUndo(popEle);
        return popEle;
    };
}


const all_btn_op = document.querySelectorAll(".btn_op");
const cal_text= document.querySelector(".cal_center_text");
const undoAndRedo =  new UndoAndRedo();

function makeHistoryItem(span1Text, before, after){
    const  li = makeElement("li", "history_item");
    const  span1 = makeElement("span", "history_text1", span1Text);
    const span2 = makeElement("span", "history_text2");
    const icon = String.fromCodePoint(8594);
    span2.innerText = `(${before} ${icon} `;

    const span2Child1 = makeElement("span", "curr_cal_num", after);
    const span2Child2 = makeElement("span", "", ")");

    span2.appendChild(span2Child1);
    span2.appendChild(span2Child2);

    li.appendChild(span1);
    li.appendChild(span2);

    return li;
 };

  function addHistoryItem(span1Text, before, after){
    const list = document.querySelector(".history_list");
    const list_item = makeHistoryItem(span1Text, before, after);
    list.appendChild(list_item);
    undoAndRedo.addUndo(list_item);
  };
  
  // undo click handler
  function undoClickhandler(){
    let res = undoAndRedo.back();
    if(res == -1) return;
   const history_list =  document.querySelector(".history_list");
   history_list.removeChild(history_list.lastChild); 
   
   if(res == 0){
    cal_text.textContent = 0;
    return;
   };

   cal_text.textContent =  res.querySelector(".curr_cal_num").textContent;
  }

  // redoClickhandler
  function redoClickhandler(){
    let item = undoAndRedo.go();
    if(item == -1)return;
    const history_list =  document.querySelector(".history_list");
    history_list.appendChild(item);  
    cal_text.textContent = item.querySelector(".curr_cal_num").textContent;
  };

function op_btn_logic(event){
    const eleText = event.currentTarget.textContent;
    const num =  parseInt(eleText.slice(1));
    const curr = parseInt(cal_text.textContent);
    let newCurr = 0;

    if(eleText.includes("-")){
         newCurr = curr - num;
    }else{
        newCurr = curr + num;
    }

    cal_text.textContent = newCurr;
    addHistoryItem(eleText, curr, newCurr);
};

 function addClick(){
    for(let i = 0; i < all_btn_op.length; i++){
        all_btn_op[i].addEventListener("click", op_btn_logic);
    }
 };

 addClick();
  
 function makeElement(eleName, eleClass, eleText ){
   const ele = document.createElement(eleName);
   if(eleClass) ele.className = eleClass;
   if(eleText) ele.textContent= eleText;
   return ele;
 };

 const undo = document.querySelector(".undo_btn");
 const redo  = document.querySelector(".redo_btn");

 undo.addEventListener("click", undoClickhandler);
 redo.addEventListener("click", redoClickhandler);
