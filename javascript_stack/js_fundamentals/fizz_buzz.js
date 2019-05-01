function fizzbuzz(n){
    var this_string = ''
    var this_type = typeof(n)
    if (this_type == 'string'){
        console.log('Parameter must be a positive number')
    }
    if(n<0){
        console.log('Parameter must be a positive number')
    }
    for (var i = 1; i<n; i++){
        if(i%15==0){
            this_string += 'FizzBuzz, '
        }
        else if(i%3==0){
            this_string += 'Fizz, '
        }
        else if(i%5==0){
            this_string += 'Buzz, '
        }
        else {
            this_string += i + ', '
        }
    }
    if(n%15==0){
        this_string += 'and FizzBuzz.'
    }
    else if(n%3==0){
        this_string += 'and Fizz.'
    }
    else if(n%5==0){
        this_string += 'and Buzz.'
    }
    else {
        this_string += 'and ' + i
    }
    console.log(this_string)
}

fizzbuzz(15)
// fizzbuzz('hello')
// fizzbuzz(-6)