var count =0
function countBs(s){
    for(let i=0; i<s.length; i++){
        if(s[i]=='B'){
            count++
        }
    }
    return count
}
console.log(countBs('ajgoBBjoejeiBdB'))