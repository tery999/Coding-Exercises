function createPhoneNumber(numbers){
  let first = numbers.slice(0,3);
  let second = numbers.slice(3,6);
  let third = numbers.slice(6);
  let phoneNum = "("+first.join("")+")" +" "+second.join("") +"-"+third.join("");
  return phoneNum
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));