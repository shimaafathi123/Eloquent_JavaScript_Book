function arrayToList(arr){
    let list=null
    for(let i=arr.length-1; i>=0; i--){
        list ={value:arr[i],rest:list}
    }
    return list
}

li = arrayToList([1,2,3])
console.log(li)

//----------------------------------------------------------------

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  li = listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
  )
  console.log(li)

//----------------------------------------------------------------