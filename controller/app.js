//This is a pretty basic bot. This will work on the request-response mapping.

var config = require("../config.json")

process.stdin.on('data', (data)=>{
    let op = search(data);
    console.log(op)
}) 


function search(data){
    const arr  = [...config.in]
    return config.out[arr.indexOf(data.toString().trim())]
}