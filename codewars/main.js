// ex1
function century(year) {
    const reslt=year/100
    if(Number.isInteger(reslt) ){
    return reslt
    }else{
        return Math.floor(reslt+1)
    }

  }
  console.log(century(2000))
//   ex2
function oddCount(n){
    let arr=[]
for(let i=0;i<=n;i++){
    if(i%2==1){
        arr.push(i) 
    }  
}
return arr
}
console.log(oddCount(7))

// ex3
function evalObject(value){
    var result = 0;
    switch(value.operation){
      case'+': 
      return result = value.a + value.b;
      case'-': 
      return result = value.a - value.b;
      case'/':
      return result = value.a / value.b;
      case'*':
      return result = value.a * value.b;
      case'%': 
      return result = value.a % value.b;
      case'^':
      return result = Math.pow(value.a, value.b);
    }
    return result;
  }
  const obj={
    a:1,
    b:2,
    operation:'+'
  }



  console.log("thisis"+evalObject({a:1,b:5,operation:'+'}))


  // ex 4
  function correctPolishLetters (string,result) {
    let regex = /[ąĄćĆęĘłŁńŃóÓśŚźŹżŻ]/g;
    
     result = string.replace(regex,  (match) => {
      // You can add a function here to handle replacements for each match
      const replacements = {
          'ą': 'a',
          'ć': 'c',
          'ę': 'e',
          'ł': 'l',
          'ń': 'n',
          'ó': 'o',
          'ś': 's',
          'ź': 'z',
          'ż': 'z',
          'Ą': 'A',
          'Ć': 'C',
          'Ę': 'E',
          'Ł': 'L',
          'Ń': 'N',
          'Ó': 'O',
          'Ś': 'S',
          'Ź': 'Z',
          'Ż': 'Z'
      };
      return replacements[match] || match; 
    });
return result

  }
    console.log(correctPolishLetters ("Jędrzej Błądziński"))
  
// ex 5


Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return this.split(' ').map((v) => v.slice(0,1).toUpperCase()+v.slice(1)).join(' ');;
   }
  }
);


let str = 'most trees are blue';
let result = str.toJadenCase();
console.log(result); 

// ex 6

function solve(arr,foundMatch) {

  for (let i = 0; i < arr.length; i++) {
     foundMatch = false;  

    for (let j = 0 ; j < arr.length; j++) {
        if (i!= j && arr[i] === -(arr[j])) { 
           foundMatch= true;
           break          
        }
    }
    if (!foundMatch ){
      return arr[i];
    } 
}
return null; 

}

console.log(solve([1,-1,2,-2,3,3]))
console.log(solve([-3, 1, 2,3 , -1, -4, -2]))
// ex 7
function uniqueInOrder(text) {
  let result = [];

  // Step 1: Loop through the string and collect unique consecutive characters
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== text[i - 1]) {  // Only add the character if it is different from the previous one
      result.push(text[i]);
    }
  }

  console.log("Unique Consecutive Characters: ", result);  // Check the intermediate result

  // Step 2: Count occurrences of each character
  const counts = {};
  result.forEach((char) => {
    counts[char] = (counts[char] || 0) + 1;
  });


  // Step 3: Filter characters with counts greater than 2
  const filter = Object.keys(counts).filter((char) => counts[char] > 2);

}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));  // Expected Output: ['A', 'B']
console.log(uniqueInOrder('1,2,2,3,3')); 


//8



function allNines(x,m=1) {
  while (true) {
    let dd = x * m;

    // الشرط الصحيح بدون "x < 4000" ولا "n"
    if (/^9+$/.test(dd.toString())) {
      return m;
    }

    if (m > 10000) {
      return -1;
    }

    m++;
  }
}

console.log(allNines(13)); // يجب أن يرجع 9 لأن 11 * 9 = 99