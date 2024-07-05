// var state=[1,2,3,4,5];
// var copy=[...state];  //spread operator

// copy.pop();

var state={name:"Gaurav",age:24};
var copy={...state};
copy.name="Harshita";

state=copy;


// destructuring 

// var obj={name:"Gaurav",age:25,email:"gm3186126@gmail.com"};

// const {age,email}=obj;
// const{email}=obj;

// var obj={name:"string",social:{
//     facebook:{
//         first:"haha",
//         sec:"ahscasd",
//     },
// },
// };

// const{sec}=obj.social.facebook;

// var arr=[12,function(){},13];

// var [first, ,second]=arr;

// ham log component banate ,component matlab page ka hissa ,navbar,sidebar,cart,landing,second ab dikkat ye aati
// hai ki har hissa alag alag component 


// navbar- export
// sidebar-export
// cart-export


// main file-import navbar,sidebar,cart
//  export function Cart(){

//  }

//  export default Cart;

//  export function Abcd(){

//  }


// const abcd=()=>{
// console.log("abcd");
// }

// abcd();

// fat arrow fn with 1 parameter,bracket hata skte h 1 parameter mein
const abcd=val=>{
console.log(val);
}

abcd(12);

// fat arrow fn with implicit return,12 return without body
const efgh= ()=>"Gaurav";
// console.log(efgh()+1);
console.log("Hey " + efgh());

// how to return object using ({})
const abcde=()=>({name:"gaurav",age:12})
console.log(abcde());



// map filter ,Mostly used in react
// map filter --dono hi array par chlte hai,aur dono ka kaam hai array par 
// perform karna and "ek naya array return karna"
// var arr=[1,2,3,4,5];
// // map-har element par kuchh karo aur naye array mein rkho
// const ans=arr.map((val)=>{
//   return val*12;
// })

// map k andar return karne k wajah s elemnet naye array m place hote hai

// state ek array usme numbers hai aur aapko har numbers ko +1 karna hai

// var state=[1,2,3,4,5];
// const ans=state.map(elem=>elem+1);
// state=ans;


// ek array hai saare numbers jo 5 se bare ho unme 5 jod dena and baaki numbers waise k waise return karo naye array mein
var state=[11,22,3,4,5,6,7,9,8,10,11,13];
const result=state.map((elem)=>elem>5?elem+5:elem);

// map filter mein ke hi farak hai,map saare bande lautatat hai
// matlab ki count kam nhi hoga ,filter bando ko kam skta hai

// jab original array  ka siz kam naa hona ho tab map use karnege

// jab og array m se kam elemet use karna ho tab filter use karenge

var arr=[1,2,3,4,5,6];
const ans=arr.filter(elem=>elem>4?true:false);
const ans1=arr.filter(elem=>elem>4);

var arr=[
{name:"hasrsh",gender:"male"},
{name:"harshita",gender:"female"},
{name:"harshika",gender:"female"}

]

const ans3=arr.filter(elem=>elem.gender==="female")

var arr=[
    {product:"iphone",price:"1200000"},
    {product:"airpods",price:"500000"},
    {product:"charger",price:"3500"},
    {product:"munch",price:"5"},
    
    ]

    const ans4=arr.filter(elem=>elem.price<20);