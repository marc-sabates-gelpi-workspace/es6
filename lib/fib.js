'use strict';
var fib = (function(){
    const CACHE_SIZE = 200;
    var cache = new Array(CACHE_SIZE);

    return (function fibonacci(num){
	if(num<2){ return num; }
	else{
	    if(cache[num] !== undefined){ 
                return cache[num];
            }
            var value = fibonacci(num-1) + fibonacci(num-2);
            if(num<CACHE_SIZE) cache[num] = value; 
            return value;
	}
    });
})();

var fibArrow = (function(){
    const CACHE_SIZE = 200;
    var cache = new Array(CACHE_SIZE);
    
    var fArrowRec = num => {
        if(num<2){ return num; }
	else{
	    if(cache[num] !== undefined){ 
                return cache[num];
            }
            var value = fArrowRec(num-1) + fArrowRec(num-2);
            if(num<CACHE_SIZE) cache[num] = value; 
            return value;
	}
    };
    return fArrowRec;
})();


//This version doesn't even calculates the fibonacci serie for
//fibNumbers array is not updated for each calculation.. the output is [0,1,0,0,0,0,...]
var fibArray = (function(){
    const SIZE = 200;
    var fibNumbers = new Array(SIZE);

    fibNumbers.fill(0);
    fibNumbers = fibNumbers.map((num, index, arr) => {
        if(index<2){
            return index;
        }else{
            return arr[index-1]+arr[index-2];
        }
    });

    console.log(fibNumbers);
    
})();
