const p = new Promise((resolve, reject)=>{
   setTimeout(() => {
    resolve("Promise Resooved Value !!!")
   }, 5000);
    
});

 async function handlePromise () {
    const val = await p;
    console.log("namste LawdaScript");
    console.log(val);
 };
 handlePromise();
 