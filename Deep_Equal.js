function deepEqual(a, b) {
      // items are identical
    if (a === b) {

      return true;
    } 
    // items are objects - do a deep property value compare
    else if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
      let keys = Object.keys(a).concat(Object.keys(b));
      for (p of keys) {
        if (typeof a[p] === 'object' && typeof b[p] === 'object') {
          if (deepEqual(a[p], b[p]) === false) {
            return false;
          }
        } else if (a[p] !== b[p]) {
          return false;
        }
      }
      return true;
    } else {
     return false; 
    }
  }

obj1 = {fn:"Raji",ls:"Lucky"}
obj2 = {fn:"sri",number:3816}

str1 = "I do"
str2 = 9966
str3 = "procatinate"
console.log(deepEqual(obj1,obj2))
console.log(deepEqual(str2,str1))
console.log(deepEqual(str1,str1))