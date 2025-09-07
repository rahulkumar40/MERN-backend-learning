// code to read the content from a file

const fs = require('fs'); 

fs.readFile( 'input.text',(err,content)=>{
    if(err){
        console.log("Error" + err)
    }
    console.log("read content is : "+content)
})


console.log("hello from last ")



// const  c = fs.readFile('input.text');
// console.log("Read Content : " + c)

// code to write a 

fs.writeFile('output.text', "hello mysleve", err=>{
    if(err){
        console.log(err)
    }
    console.log("Written succefullsy")
})

console.log("Last doen")


//// aslkdfj ;lkajsd f;klajsd;f kajsd;lkfja;lskdfj
// const k = fs.writeFile('ouput.txt', "hello i Rahul");
// console.log(K)