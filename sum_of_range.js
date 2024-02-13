function range (start,end){
    const arr =[]
    for(let i=start ; i<=end; i++){
        arr.push(i)
    }
    return arr
}
const arr = range(1,10)
console.log(arr)

//-------------------------------------------------------------------
function range1 (start,end){
    const arr =[]
    let sum=0
    for(let i=start ; i<=end; i++){
        arr.push(i)
        sum+=i
    }
    return sum
}
const sum = range1(1,10)
console.log(sum)
//-------------------------------------------------------------------
function rangeByStep (start,end,step){
    const arr0 =[]
    for(let i=start ; i<=end; i+=step){
        arr0.push(i)
    }
    return arr0
}
const arr0 = rangeByStep(1,10,2)
console.log(arr0)