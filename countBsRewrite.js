var count =0
function countBs(s,ch){
    for(let i=0; i<s.length; i++){
        if(s[i]==ch){
            count++
        }
    }
    return count
}
console.log(countBs('ajgoBBjoejeiBdB','B'))