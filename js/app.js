'use strict';

var storePike = {
  hour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyTotals: [],
  maxCustPerHour: 65,
  minCustPerHour: 23,
  avgCookiePerSale: 6.3,
  // totalCookies: 0,
  avgCookBoughtPerHour: function() {
    var randNumCustomersPerHour = Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    var avgSalePerHour = Math.floor(randNumCustomersPerHour * this.avgCookiePerSale);
    this.totalCookies = this.totalCookies + this.avgSalePerHour;
    return avgSalePerHour;
  },
  populateHourlyTotals: function() {
    var avgContainer = document.getElementById('avgSalesPike');
    for (var i = 0; i < this.hour.length; i++) {
      var cookieSalesPerHour = this.avgCookBoughtPerHour();
      this.hourlyTotals.push(this.hour[i] + ':' + cookieSalesPerHour + ' cookies');
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyTotals[i];
      avgContainer.appendChild(liEl);
    }
    // var totalsLiEl = document.createElement('li');
    // this.avgContainer.push(totalsLiEl);
    // totalsLiEl.textContent = 'Totals : ' + this.totalCookies;   
  },
};

storePike.populateHourlyTotals();


var storeSeaTac = {
  hour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyTotals: [],
  maxCustPerHour: 24,
  minCustPerHour:3,
  avgCookiePerSale: 1.2,
  avgCookBoughtPerHour: function() {
    var randNumCustomersPerHour = Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    var avgSalePerHour = Math.floor(randNumCustomersPerHour * this.avgCookiePerSale);
    return avgSalePerHour;
  },
  populateHourlyTotals: function() {
    var avgContainer = document.getElementById('avgSeaTacSales');
    for (var i = 0; i < this.hour.length; i++) {
      var cookieSalesPerHour = this.avgCookBoughtPerHour();
      this.hourlyTotals.push(this.hour[i] + ':' + cookieSalesPerHour + ' cookies');
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyTotals[i];
      avgContainer.appendChild(liEl);
    }
  }

};
storeSeaTac.populateHourlyTotals();

var storeSeattleCenter = {
  hour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyTotals: [],
  maxCustPerHour: 38,
  minCustPerHour: 11,
  avgCookiePerSale: 3.7,
  avgCookBoughtPerHour: function() {
    var randNumCustomersPerHour = Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    var avgSalePerHour = Math.floor(randNumCustomersPerHour * this.avgCookiePerSale);
    return avgSalePerHour;
  },
  populateHourlyTotals: function() {
    var avgContainer = document.getElementById('avgSeattleCenterSales');
    for (var i = 0; i < this.hour.length; i++) {
      var cookieSalesPerHour = this.avgCookBoughtPerHour();
      this.hourlyTotals.push(this.hour[i] + ':' + cookieSalesPerHour + ' cookies');
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyTotals[i];
      avgContainer.appendChild(liEl);
    }
  }
};
storeSeattleCenter.populateHourlyTotals();

var storeCapHill = {
  hour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyTotals: [],
  maxCustPerHour: 38,
  minCustPerHour: 20,
  avgCookiePerSale: 2.3,
  avgCookBoughtPerHour: function() {
    var randNumCustomersPerHour = Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    var avgSalePerHour = Math.floor(randNumCustomersPerHour * this.avgCookiePerSale);
    return avgSalePerHour;
  },
  populateHourlyTotals: function() {
    var avgContainer = document.getElementById('avgCapHillSales');
    for (var i = 0; i < this.hour.length; i++) {
      var cookieSalesPerHour = this.avgCookBoughtPerHour();
      this.hourlyTotals.push(this.hour[i] + ':' + cookieSalesPerHour + ' cookies');
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyTotals[i];
      avgContainer.appendChild(liEl);
    }
  }
};
storeCapHill.populateHourlyTotals();


var storeAlki = {
  hour: ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  hourlyTotals: [],
  maxCustPerHour: 16,
  minCustPerHour: 2,
  avgCookiePerSale: 4.6,
  avgCookBoughtPerHour: function() {
    var randNumCustomersPerHour = Math.floor(Math.random() * this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour;
    var avgSalePerHour = Math.floor(randNumCustomersPerHour * this.avgCookiePerSale);
    return avgSalePerHour;
  },
  populateHourlyTotals: function() {
    var avgContainer = document.getElementById('avgAlkiSales');
    for (var i = 0; i < this.hour.length; i++) {
      var cookieSalesPerHour = this.avgCookBoughtPerHour();
      this.hourlyTotals.push(this.hour[i] + ':' + cookieSalesPerHour + ' cookies');
      var liEl = document.createElement('li');
      liEl.textContent = this.hourlyTotals[i];
      avgContainer.appendChild(liEl);
    }
  }
};
storeAlki.populateHourlyTotals();