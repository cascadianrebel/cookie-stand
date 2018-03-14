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
  // var totalCookies = 0;
  for (var i = 0; i < storeHours.length; i++) {
    var randNumCustomersPerHour = Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour) + this.minCustomersPerHour;
    var cookiesSoldPerHour = Math.floor(randNumCustomersPerHour * this.avgCookiesPerSale);
    this.hourlySales.push(cookiesSoldPerHour);
    this.totalCookies += cookiesSoldPerHour;
  }
};

var cookiesTable = document.getElementById('tableCookieSales');

StoreName.prototype.render = function() {
  //create tr
  var trElement = document.createElement('tr');
  //create th
  var thElement = document.createElement('th');
  //create td
  var tdElement = document.createElement('td');
  //create cell content
  thElement.textContent = this.storeLocation;
  //append cell to row
  trElement.appendChild(thElement);
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
  thElement = document.createElement('th');
  thElement.textContent = this.totalCookies;
  trElement.appendChild(thElement);

  cookiesTable.appendChild(trElement);
};

storeHours.render = function() {
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
};
storeHours.render();

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
capHillStore.render();

var alkiStore = new StoreName('Alki', 16, 2, 4.6);
alkiStore.salesPerHour();
alkiStore.render();

// totalCookies.render = function() {
//   var trElement = document.createElement('tr');
//   var tdElement = document.createElement('td');
//   trElement.appendChild(tdElement);
//   //add 'location' to table header
//   tdElement.textContent = 'Totals';
//   trElement.appendChild(tdElement);
//   //create for loop to capture each hour
//   for (var i = 0; i < storeHours.length; i++) {
//     for( var k = 0; k < StoreName.length; k++){
//       tdElement = document.createElement('td');
//       tdElement.textContent = this.totalCookies;
//       trElement.appendChild(tdElement);
//     }
//   }
//   trElement.appendChild(tdElement);

//   cookiesTable.appendChild(trElement);
// };
// totalCookies.render();