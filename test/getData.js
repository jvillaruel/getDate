const moment = require('moment')
const { each } = require('lodash') //ref: https://lodash.com/

class DateHelper {

  constructor() {
    // Formatter ref: https://momentjs.com/docs/#/parsing/string-format
    this.formats = [
      // "MM-DD-YYYY", //10-10-2022
      // "DD-MM-YYYY", //10-10-2022
      // "DD-MMMM-YYYY", //10-October-2022
      "DD-MMM-YYYY"
    ]
  }

  getLastDay(input) {
    // Lets convert the string to date format
    const formattedDate = this._convertToDate(input)
    // Lets do the transformation
    const getLastDay = this._getLastDateOfTheMonth(formattedDate)
    return getLastDay;
  }

  _convertToDate(input = '') {
    let temp = false
    if (input) {
      each(this.formats, (format) => {
        // Iterate the config until we got the correct date format
        // To make this more faster, just empose a strict date input format
        if (temp === false || !temp?.isValid()) {
          try {
            temp = moment(input, format)
          } catch (e) { } // supress the error.
        }

        if (temp?.isValid()) {
          // If its valid then stop the loop
          return true
        }
      })
    }

    return temp
  }

  _getLastDateOfTheMonth(input) {
    if (input === false) {
      return {
        error: {
          message: "Format Not Supported Yet.",
        }
      }
    }
    // console.log(input)
    return moment(input).endOf('month').format('DD');
    // return moment().endOf('month').format('DD')
  }
}

const DateHelperFn = new DateHelper();

// Inputs or Example Data
var input1 = "13-Oct-2022";
var input2 = "01-Feb-2019";
var input3 = "01-Feb-2020";


console.log(input1, ' Last Day is:', DateHelperFn.getLastDay(input1))
console.log(input2, ' Last Day is:', DateHelperFn.getLastDay(input2))
console.log(input3, ' Last Day is:', DateHelperFn.getLastDay(input3))

