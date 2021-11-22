const { readFile, writeFile } = require('fs');

const result = readFile('./content/first.txt', (err,data) =>{
console.log('start')    
if(err){
    console.log(`error in first cb ${err}`)
    return
}
const first = data
readFile ('./content/second.txt',(err,data) =>{
    console.log('prueba')
    if(err){
        console.log(`error in 2nd cb ${err}`)
        return
    }
    
    const second = data
    writeFile('./content/resultAsync.txt',`Hello this is the result${first} and ${second}`, (err,res)=>{
        if(err){
            console.log(`error in writing cb ${err}`)
            return
        }
    
    console.log('done with this task')
    })

})
}
)
console.log('starting next task')