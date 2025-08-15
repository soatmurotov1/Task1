function task5(){
    let son = +prompt("Son kiriting")
    if(son% 3 == 0 && son% 5 == 0){
        alert(`FizzBuzz`)
        
    }else if( son% 3 == 0){
        alert(`Fizz`)
        
    }else if(son% 5 == 0){
        alert(`Buzz`)
        
    }else {
        alert(`Xato`)
    }
}
task5()