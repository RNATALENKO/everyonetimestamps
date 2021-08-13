let arr = require('./testa');
console.log('before sort', arr);

arr.sort((a,b)=>{
    if(a.timestamp < b.timestamp){
        return -1; 
    }
    else{
        return 1;
    }
})

console.log('after sort', arr);