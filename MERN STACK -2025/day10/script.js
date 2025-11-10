let per=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let value=Math.floor(Math.random()*10);
        console.log(value)
        if(value>5)resolve("Promise resolved sucessfully");
        else reject("promise rejected")
    },1000);
});

per.then((message)=>{
    console.log("sucess message : "+ message)
}).catch((error)=>{
    console.error("error message : " +error);
})
