(function(angular) {
  'use strict';
angular.module('Person', [])
  .controller('personController', function personController() {
    this.firstName = "Arinze";
    this.lastName = "Christopher";
    this.dob = new Date();
    this.year = 2018
    this.gender = "Male";
    this.old_dob = new Date();
  

    this.getYear = function getYear(dob) {
      return this.year - this.dob.getFullYear();
    };
    this.getFullName = function getFullName(firstName, lastName) {
      return this.firstName + " " + this.lastName;
    };
    
    this.getMonth = function getMonth(dob) {
       var mill_sec = this.old_dob - this.dob ;
       var sec = mill_sec/1000;
       var day = sec/(3600*24);
       var year = day/365;
       return year;
      
    };
    // this.pay = function pay() {
    //   window.alert('Thanks!');
    // };
  });
})(window.angular);

/*
Copyright 2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/