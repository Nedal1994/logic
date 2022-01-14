'use strict'

const Logic = require('./logic')
const Characters = require('./characters')

describe('Logic',()=>{

    it('Select the array elements that begins with vowels',()=>{

        let inputArray = ['Apple', 'Banana', 'Cucumber', 'Watermelon', 'Ice-cream', 'Orange', 'Eggplant', 'Egg']
        let test=Logic(inputArray)
        
        expect(test).toEqual(["Apple", "Ice-cream", "Orange", "Eggplant", "Egg"])

    })
    it('Select the array elements that has longer than 5 characters',()=>{

        let inputArray = ['Apple', 'Banana', 'Cucumber', 'Watermelon', 'Ice-cream', 'Orange', 'Eggplant', 'Egg']
        let test=Characters(inputArray)
        
        
        expect(test).toEqual(["Banana", "Cucumber", "Watermelon", "Ice-cream", "Orange", "Eggplant", "Egg"])

    })
  })