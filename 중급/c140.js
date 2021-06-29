function doJob(name, person){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            if(person.stamina > 50){
                person.stamina -= 30;
                resolve({
                    result:`${name} success`
                });
            }else {
                reject(new Error(`${name} failed`));
            }
        }, 1000);
    });
};

const sophy = {stamina: 100};
const execute =async function(){
    try{
        let v = await doJob('work', sophy);
        console.log(v.result);
        v = await doJob('study', sophy);
        console.log(v.result);
        v = await doJob('work', sophy);
        console.log(v.result);
        v = await doJob('study', sophy);
        console.log(v.result);
        
    }catch(e){
        console.log(e);
    }
}

execute();