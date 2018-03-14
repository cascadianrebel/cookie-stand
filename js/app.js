'use strict';

var storeHours = ['6am', '7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'] ;
var tableArray = [];

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
  var totalCookies = 0;
  for (var i = 0; i < storeHours.length; i++) {
    var randNumCustomersPerHour = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour)) + this.minCustomersPerHour;
    var cookiesSoldPerHour = randNumCustomersPerHour * Math.floor(this.avgCookiesPerSale);
    this.totalCookies += cookiesSoldPerHour;
    this.hourlySales.push(cookiesSoldPerHour);
  }
  this.totalCookies = totalCookies;
};

var cookiesTable = document.getElementById('tableCookieSales');

StoreName.prototype.render = function() {
  //create tr
  var trElement = document.createElement('tr');
  //create td
  var tdElement = document.createElement('td');
  //create cell content
  tdElement.textContent = this.storeLocation;
  //append cell to row
  trElement.appendChild(tdElement);
  //create for loop to capture each hour
  for (var i = 0; i < storeHours.length; i++) {
  //create cell
    tdElement = document.createElement('td');
    //create cell content
    tdElement.textContent = this.hourlySales[i];
    //append content to row
    trElement.appendChild(tdElement);
    //append rows to table
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalCookies;
  trElement.appendChild(tdElement);

  cookiesTable.appendChild(trElement);
};

var pikeStore = new StoreName ('First and Pike', 65, 23, 6.3);
pikeStore.salesPerHour();
pikeStore.render();

var seaTacStore = new StoreName ('SeaTac', 24, 3, 3.7);
seaTacStore.salesPerHour();
seaTacStore.render();

var seattleCenterStore = new StoreName ('Seattle Center', 38, 11, 3.7);
seattleCenterStore.salesPerHour();
seattleCenterStore.render();

var capHillStore = new StoreName ('Capitol Hill', 38, 20, 2.3);
capHillStore.salesPerHour();
seattleCenterStore.render();

var alkiStore = new StoreName('Alki', 16, 2, 4.6);
alkiStore.salesPerHour();
alkiStore.render();
