// setTimeout(()=>{
// console.log("two seconds are up")
// },2000)

const add = (a,b,callback)=>{
const sum = a+b
setTimeout(()=>{
    console.log('2 seconds are up')
callback(sum)
},2000)

}


add(1,3,(sum)=>{
console.log(sum)
})