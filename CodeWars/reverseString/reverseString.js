function solution(str){
  let strArr = str.split("");
    let finalStr = [];

    strArr.forEach(element => {
        finalStr.unshift(element)
    });

    return finalStr.join("");
}

console.log(solution("hello"))