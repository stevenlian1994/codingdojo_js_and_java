function userLanguages(users){
    var this_str
    for(var i = 0; i < users.length; i++){
        // each users languages
        this_str += users[i]['fname'] + ' ' + users[i]['lname'] + ' ' + 'knows'
        for(var j = 0; j < users[i]['languages'].length-1;j++){
            this_str += ' ' + users[i]['languages'][j] + ','
        }
        this_str += ' and ' + users[i]['languages'][j] + ' \n'
        // each users interests
        this_str += users[i]['fname'] + ' is also interested in'
        //flatten array of arrays
        interests = [].concat.apply([], Object.values(users[i]['interests']))
        for(var j = 0; j < interests.length-1;j++){
            this_str += ' ' + interests[j] + ','
        }
        this_str += ' and ' + interests[j] + ' \n'
    }
    return this_str
}

users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]

console.log(userLanguages(users))