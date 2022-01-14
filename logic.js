'use strict'

const logic = (arr) => {
    let value = /^[AEIOU]/
    let newArr = []
    arr.forEach((item)=>{
      if(value.test(item))
      {
        newArr.push(item)
      }
    })
    return newArr
  };

module.exports = logic