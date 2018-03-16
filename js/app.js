'use strict';

var storeHours = ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] ;
var tableArray = [];

var cookiesTable = document.getElementById('tableCookieSales');

//Access the form so we can attach the event listener
var storeForm = document.getElementById('storeForm');

function StoreName (storeLocation, maxCustomersPerHour, minCustomersPerHour, avgCookiesPerSale) {
  this.storeLocation = storeLocation;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.minCustomersPerHour = minCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.totalCookies = 0;
  this.hourlySales = [];
  tableArray.push(this);
}

StoreName.prototype.salesPerHour = function() {
  for (var i = 0; i < storeHours.length; i++) {
    var randNumCustomersPerHour = Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour;
    var cookiesSoldPerHour = Math.floor(randNumCustomersPerHour * this.avgCookiesPerSale);
    this.totalCookies += cookiesSoldPerHour;
    this.hourlySales.push(cookiesSoldPerHour);
  }
};

StoreName.prototype.render = function() {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  var tdElement = document.createElement('td');
  thElement.textContent = this.storeLocation;
  trElement.appendChild(thElement);

  for (var i = 0; i < storeHours.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = this.hourlySales[i];
    trElement.appendChild(tdElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = this.totalCookies;
  trElement.appendChild(thElement);

  cookiesTable.appendChild(trElement);
};

function storeHoursHeader() {
  var trElement = document.createElement('tr');
  var tdElement = document.createElement('td');
  var thElement = document.createElement('th');
  //add 'location' to table header
  thElement.textContent = 'Location';
  trElement.appendChild(thElement);
  //create for loop to capture each hour
  for (var i = 0; i < storeHours.length; i++) {
    tdElement = document.createElement('td');
    tdElement.textContent = storeHours[i];
    trElement.appendChild(tdElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Totals';
  trElement.appendChild(thElement);

  cookiesTable.appendChild(trElement);
}

function renderAllSalesPerHour () {
  for (var i in tableArray){
    console.log(tableArray[i]);
    tableArray[i].salesPerHour();
  }
}

function renderAllStores() {
  for(var i in tableArray){
    tableArray[i].render();
  }
}

function tableFooter (){
  var tdElement = document.createElement('td');
  var trElement = document.createElement('tr');

  tdElement.textContent = 'Totals';
  trElement.appendChild(tdElement);

  var grandTotal =0;

  for (var i in storeHours) {

    var hourTotal =0;

    for (var k in tableArray) {
      hourTotal += tableArray[k].hourlySales[i];
    }
    grandTotal += hourTotal;
    tdElement = document.createElement('td');
    tdElement.textContent = hourTotal;
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = grandTotal;
  trElement.appendChild(tdElement);

  cookiesTable.appendChild(trElement);
}

function addNewStore(event) {
  event.preventDefault();

  var newStoreLocation = event.target.storeLocal.value;
  var newMaxCustomersPerHour = event.target.maxCustomers.value;
  var newMinCustomersPerHour = event.target.minCustomers.value;
  var newAvgCookiesPerSales = event.target.avgCookies.value;

  var newStoreName = new StoreName(newStoreLocation, newMaxCustomersPerHour,newMinCustomersPerHour, newAvgCookiesPerSales);

  newStoreName.salesPerHour();

  cookiesTable.innerHTML = '';

  storeHoursHeader();
  renderAllStores();
  tableFooter();
}
//when using the constructor, you're creating a new "instance"
new StoreName ('First and Pike', 65, 23, 6.3);
new StoreName ('SeaTac', 24, 3, 3.7);
new StoreName ('Seattle Center', 38, 11, 3.7);
new StoreName ('Capitol Hill', 38, 20, 2.3);
new StoreName('Alki', 16, 2, 4.6);

//add event listener
storeForm.addEventListener('submit', addNewStore);

storeHoursHeader();
renderAllSalesPerHour();
renderAllStores();
tableFooter();
