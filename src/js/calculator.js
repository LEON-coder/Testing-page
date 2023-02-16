const valueAgreementSum = document.querySelector(".sum-agreement-lising");
const valueAgreementPay = document.querySelector(".sum-agreement-payment");
const valueagreementTime = document.querySelector(".sum-agreement-time");


const costCar = document.querySelector("#cost_car");
const firstSum = document.querySelector("#first_sum");
const timeDuringlising = document.querySelector("#time-during-lising");
const blockSumMonth = document.querySelector(".block__sum_month");
const blockSumSum = document.querySelector(".block__sum_sum");

function Calculate() {
    valueAgreementSum.innerHTML = costCar.value; 
    valueAgreementPay.innerHTML = firstSum.value;
    valueagreementTime.innerHTML = timeDuringlising.value;
}
    






    