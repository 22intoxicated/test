
function GetIncome() {
    let income = document.getElementById('income');

    return parseInt(income.value) || 0
}
function GetDeduction() {

}

function Calculate() {

    let income = GetIncome();
    alert(`income ${income}`)

}

const calculate_btn = document.getElementById('calculate');

calculate_btn.addEventListener('click', Calculate);