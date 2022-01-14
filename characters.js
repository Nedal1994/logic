'use strict'

const characters = (arr) => {
    let value = /^[BCEIOW]/
    let newArr = []
    arr.forEach((item)=>{
      if(value.test(item))
      {
        newArr.push(item)
      }
    })
    return newArr
  };

module.exports = characters