let modebtn=document.querySelector("button");
modebtn.innerText="Dark Mode";
let currmode="light";
let body=document.querySelector("body");

modebtn.addEventListener("blur", () => {
    if(currmode === "light"){
        currmode="dark";
        body.classList.add("dark");
        modebtn.innerText="Light Mode";
        body.classList.remove("light");
        console.log("dark");
    }
    else{
    currmode="light";
    body.classList.add("light");
    modebtn.innerText="Dark Mode";
    body.classList.remove("darkt");
    console.log("light");
}
});




// let fullname=prompt("Enter name");
// console.log(fullname);
// console.log("@"+fullname+"123");

//ARRAY


// let marks=[85,97,44,37,76,60];
// console.log(marks);
// let sum=0;
// for(let val of marks)
//   {
//     sum += val;    
//   }
// console.log(sum,sum/marks.length); 

// let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
// let val= companies.shift();
// console.log(companies);
// companies.splice(1,1,"ola");             // second 1 is for rempving the element
// console.log(companies);
// companies.push("amazon");
// console.log(companies);


//FUNCTIONS

// function roles()
// {
//     console.log("hello");
//     console.log("function printing");
// } 
// function sum(arg, arg1)
// {
//     console.log(arg + arg1);
// }
// sum(55.6, 1);                         // NaN  means not a number

// ARROW Function

// const arrowSum = (a,b) => {
//     return a+b;
// };
// console.log(arrowSum);

// const multi=(a,b) => {
//     return a*b;
// };
// console.log(multi(5,6));

// const printhello=() => {
//     console.log("Hello, how are you !!");
// };

// function countvowels(str)
// {
//     let count=0;
//     let p="AEIOUaeiou";
//     for(let i=0;i<str.length();i++)
//         {
//             if(p.indexOf(str.charAt(i)) >=0 )
//                 count += 1;
//         }
//  return count;
// }
// console.log(countvowels("hello"));


// function characters(str)
// {
//     for(const chr of str)
//         console.log(chr);
// }
// characters("SAhil");                 // === for equals


// forEach FUNCTION

// let arr=["pune","delhi","maharastra"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// })

// map function

// let nums=[4,5,6];
// nums.map((val) =>{
//     console.log(val);
// })


// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText="apna college";

// let divs=document.querySelectorAll(".box");
// console.log(divs);

// let b=document.createElement("button");
// b.innerText="Add to Cart";

// b.style.color="black";
// b.style.backgroundColor="red";

// let h3=document.querySelector("body");
// h3.before(b);

// let p=document.querySelector("p");
// p.classList.add("newclass");
 
// let btn=document.querySelector("button");
// btn.onclick=() => {
//     console.log("btn is clicked");
//     let a=5;
//     a++;
//     console.log(a);
// }