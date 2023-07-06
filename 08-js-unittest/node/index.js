function add(a, b) {
  return a + b
}

function fizzBuzz(input) {
  if (input % 3 === 0) {
    return 'Fizz'
  }

  return `${input}`
}

// convert ตัวเลข -> ภาษาไทย
//  1 -> หนึ่ง
// 10 -> สิบ
// 11 -> สิบเอ็ด
// 20 -> ยี่สิบ
// 21 -> ยี่สิบเอ็ด
// 1000

module.exports = {
  add,
  fizzBuzz
}