function loop(value, testFunction, updateFunction, bodyFunction){
    for(let start=value; testFunction(start); start=updateFunction(start)){
        bodyFunction(start)
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
