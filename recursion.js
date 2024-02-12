function rec(a) {
    if (a === 0) {
        return true;  
    } else if (a === 1) {
        return false; 
    } else {
        return rec(a - 2); 
    }
}

console.log(rec(50)); 
console.log(rec(75));

