const ratings = [5,4,3];
let sum = 0;

const sumFunction = async(a,b) => a+b;

ratings.forEach(async(ratings)=>{
    sum = await sumFunction(sum,ratings);
});

console.log(sum);