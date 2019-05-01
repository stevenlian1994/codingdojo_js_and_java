function coinChange(n){
    this_dict = {}
    if (typeof(n) == 'object'){
        n = convertChange(n)
    }
    if (n>=100){
        this_dict['dollars'] = Math.floor(n/100) 
        n=n%100
    }
    if (n>=25){
        this_dict['quarters'] = Math.floor(n/25) 
        n=n%25
    }
    if (n>=10){
        this_dict['dimes'] = Math.floor(n/10) 
        n=n%10
    }
    if (n>=5){
        this_dict['nickles'] = Math.floor(n/5) 
        n=n%5
    }
    if (n>=1){
        this_dict['pennies'] = Math.floor(n/1) 
        n=n%1
    }
    return this_dict
}
function convertChange(dict){
    var sum = 0
    if ('dollars' in dict){
        sum += dict['dollars']*100
    }
    if ('quarters' in dict){
        sum += dict['quarters']*25
    }
    if ('dimes' in dict){
        sum += dict['dimes']*10
    }
    if ('nickles' in dict){
        sum += dict['nickles']*5
    }
    if ('pennies' in dict){
        sum += dict['pennies']
    }
    return sum
}

console.log(coinChange(330))
console.log(coinChange({dollars: 2, dimes: 15, pennies: 5}))