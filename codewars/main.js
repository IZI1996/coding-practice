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
function solve(arr,reslt){
 for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    // إذا كان العدد المقابل (السالب أو الموجب) موجودًا في المصفوفة
    if (arr.includes(-num)) {
      return num;  // يوجد عدد ومقابله
    }
  }
  return num;
};
console.log(solve([1, -1, 2, -2, 3]))
console.log(solve([-3, 1, 2, 3, -1, -4, -2]))