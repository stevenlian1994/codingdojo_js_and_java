function binarySearch(arr, n){
    while(Math.floor(arr.length/2) != n){
        if(Math.floor(arr.length/2) > n){
            arr = arr.slice(0,Math.floor(arr.length/2))
        }
    }
    return true;
    // Math.floor(arr.length/2) 
}

console.log(binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 93))