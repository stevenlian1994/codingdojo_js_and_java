function bubblesort(arr){
    var placeholder
    var h = 0
    var this_bool = true
    for (var i = 0;i<arr.length-h;i++){
        h++
        for (var j=0;j<arr.length-h;j++){
            if(arr[j]>arr[j+1]){
                placeholder = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = placeholder
                this_bool = false;
            }
        }
        if(this_bool == true){
            console.log(h)
            console.log('fast exit woo')
            return arr
        } else{
            this_bool = true;
        }
    }
    return arr
}
console.log(bubblesort([3,5,6,6,0,2,11,2,2,3,4,5,6,10])) 

