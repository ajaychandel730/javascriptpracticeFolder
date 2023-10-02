
const principal_amount  = document.getElementById("principal_amount");
const interest_rate = document.getElementById("inerest_rate") ;
const loan_years = document.getElementById("loan_length") ;
const form = document.querySelector(".container");
const res = document.querySelector(".result");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const p =  parseInt(principal_amount.value);
    const r = (parseInt(interest_rate.value) / 100) / 12;
    const n = (parseInt(loan_years.value) * 12);
    const pow = Math.pow(r+1, n);
    const ans = ((p * r * pow) / (pow -1)).toFixed(3);

    res.textContent = `your monthly mortgage will be $${ans}`;
});


