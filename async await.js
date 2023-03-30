console.log("Person1:shows tickets");
console.log("Person2:shows tickets");
function promiseWifebringingTicks()
{
  return new Promise((res,rej)=>{
    setTimeout(()=>{
    res("Tickets");
  },3000)
  })
}
function getPopcorn()
{
  return new Promise((res,rej)=>{
    res("popcorn");
  })
}
function getButter()
{
  return new Promise((res,rej)=>{
    res("butter");
  })
}
function getColdDrink()
{
  return new Promise((res,rej)=>{
    res("coldDrink");
  })
}
async function fun()
{
  const ticks=await promiseWifebringingTicks();
  console.log(`wife: i have ${ticks}`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i'm hungry`);
  const popcorn=await getPopcorn();
  console.log(`husband: i got some ${popcorn}`);
  console.log(`husband: we should go in`);
  console.log(`wife: i need butter on my popcorn`);
  const butt=await getButter();
  console.log(`husband: i got some ${butt} on popcorn`);
  console.log(`husband: anything else ?`);
  const  cold=getColdDrink();
  console.log(`wife: i need ${cold} too`);
  console.log(`husband: let's go we are getting late`);
}
fun();
