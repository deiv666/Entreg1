

let vacationCalc = document.getElementById('vacationCalc')

    vacationCalc.addEventListener('submit', calcExpense)

function calcExpense(as){
    as.preventDefault();
    let destiny = document.getElementById('destiny').value;
    let budget = document.getElementById('budget').value;
    let acomodation = document.getElementById('acomodation').value;
    let transport = document.getElementById('transport').value;
    let food = document.getElementById('food').value;


    let expenses= parseInt(acomodation) + parseInt(transport) + parseInt(food);
    let balance= budget - expenses;
    UI(destiny, budget, balance)
}

function UI(destiny, budget, balance){
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')
    dataPrint.innerHTML = `
      <div class="container-data row">
      <div class="col s4">
        <h6>${destiny}</h6>
      </div>
      <div class="col s4">
        <h6>${budget}</h6>
      </div>
      <div class="col s4">
        <h6>${balance}</h6>
      </div>
    
      </div>
    `
    result.appendChild(dataPrint)
    reset();
}

function reset(){
    document.getElementById('vacationCalc').reset()
}