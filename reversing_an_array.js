function Reverse(arr){
    let newArr=[]
    for(let i = (arr.length)-1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr
}
const reversedArr = Reverse([1,2,3,4,5])
console.log(reversedArr)

//---------------------------------------------------------------------------------

function ReverseArrayInPlace(arr){
    for(let i =0; i<Math.floor(arr.length/2); i++){
        let c = arr[i]
        arr[i]= arr[arr.length-1-i]
        arr[arr.length-1-i]=c
    }
    return arr
}
const reversedArr2 = ReverseArrayInPlace([1,2,3,4,5])
console.log(reversedArr2)

//---------------------------------------------------------------------------------