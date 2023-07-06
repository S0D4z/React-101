const { add, fizzBuzz } = require('./index')
// import { add } from ''
describe('Add', function() {
  test('1 + 2 should be 3', function() {
    // arr
    const num1 = 1
    const num2 = 2
    const expected = 3

    //act
    const result = add(num1, num2)

    //assert
    expect(expected).toEqual(result)
  })
})

describe('FizzBuzz', function() {
  test('1 should be 1', function() {
    // arr
    const input = 1
    const expected = '1'

    //act
    const result = fizzBuzz(input)

    //assert
    expect(expected).toEqual(result)
  })
  
  test('2 should be 2', function() {
    // arr
    const input = 2
    const expected = '2'

    //act
    const result = fizzBuzz(input)

    //assert
    expect(expected).toEqual(result)
  })

  test('3 should be Fizz', function() {
    // arr
    const input = 3
    const expected = 'Fizz'

    //act
    const result = fizzBuzz(input)

    //assert
    expect(expected).toEqual(result)
  })
})

