function braces_valid(string){
    var this_dict = {
        '[' : ']',
        '{' : '}',
        '(' : ')',
    }
    var this_dict2 = {
        ']' : '[',
        '}' : '{',
        ')' : '(',
    }
    var this_arr = []
    for (var i = 0; i<string.length;i++){
        if(string[i] in this_dict){
            this_arr.push(string[i])
        }
        else if(string[i] in this_dict2){
            if(this_dict2[string[i]] != this_arr[this_arr.length-1]){
                return false;
            }
            else{
                this_arr.pop()
            }
        }
    }
    return true;
}

console.log(braces_valid("{{()}}[]"))

