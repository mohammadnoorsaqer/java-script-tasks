//1
const user=
{
    name:"Adam"
    ,
    age:25
    ,
    gender:'male'
}
console.log(`${user.name} ,${user.age} ,${user.gender}`)
//2
const user1=
{
    name:"Adam"
    ,
    age:25
    
}
user1.gender='female' // adding new property using dot notation 
console.log(`${user1.name} ,${user1.age} ${user1.gender} `)
let user2={}
user2["color"] = "blue";
console.log(user2["color"])
const user3=
{
    name:'JIM'
    ,
    age:25
}
console.log(user3.name)
console.log(user3["name"])
const user4=
{
    name:'PAM'
    ,
    age:30
}
for(let x in user4)
{
    console.log(x)
}
const user5=
{
    name:'kevin'
    ,
    age:30
}
console.log(Object.keys(user5))
const user6=
{
    name:'dewight'
    ,
    age:30
}
console.log(Object.values(user6))
const user7=
{
    name:'THANOS'
    ,
    age:30
    ,
    color:'purple'
}
for(const[key,value] of Object.entries(user7))
{
    console.log(`${key} this is the key ,${value} this is the value`)
}
const user8=
{
    movie:"SCREAM"
    ,
    releasedIN:2000
}
const user9=
{
    movie:"CHUCKY"
    ,
    releasedIN:1996
}
const merge_objects=Object.assign(user8,user9)
console.log(merge_objects)
const user10=
{
    movie:"AVENGERS"
}
Object.freeze(user10)
user10.movie='ATTACK ON TITANS'
console.log(user10.movie)
const user11=
{
    series:"THE OFFICE"
    ,
    releasedIN:'2005'
    ,
    series2:"BREAKING BAD"
}
Object.seal(user11)
user11.series='FRIENDS'
console.log(user11.series)
delete user11.series;; // its can't be deleted
console.log(user11.series)
