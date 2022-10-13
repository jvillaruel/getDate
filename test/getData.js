const moment = require('moment')
const { each } = require('lodash') //ref: https://lodash.com/

const getLastDay = input => moment(moment(input, 'DD-MMM-YYYY')).endOf('month').format('DD');

// Inputs or Example Data
var input1 = "13-Oct-2022";
var input2 = "01-Feb-2019";
var input3 = "01-Feb-2020";


console.log(input1, ' Last Day is:', getLastDay(input1))
console.log(input2, ' Last Day is:', getLastDay(input2))
console.log(input3, ' Last Day is:', getLastDay(input3))

