function greet(){
    return function(){
        console.log("Heelo Ji Node How ?")
    }
}

const result = greet();

result()