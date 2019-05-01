function maxMinAvg(arr){
    var sum = 0;
    var min = arr[0]
    var max = arr[0]
    for (var i = 0; i<arr.length; i++){
        sum+=i;
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
    }
    var avg = sum/arr.length
    console.log('The minimum is ' + min + ', the maximum is ' + max + ', and the average is ' + avg)
}

maxMinAvg([0,-5,2,3])