const countdown = new Promise((resolve, reject) =>{
        setTimeout(resolve,1000);

})
const countdown2 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*2);

})
const countdown3 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*3);

})
const countdown4 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*4);

})
const countdown5 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*5);

})
const countdown6 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*6);

})
const countdown7 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*7);

})
const countdown8 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*8);

})
const countdown9 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*9);

})
const countdown0 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*10);

})
const countdown11 = new Promise((resolve, reject) =>{
    setTimeout(resolve,1000*11);

})

countdown.then(()=>{document.querySelector("h1").innerHTML="10"});

countdown2.then(()=>{document.querySelector("h1").innerHTML="9"});

countdown3.then(()=>{document.querySelector("h1").innerHTML="8"});

countdown4.then(()=>{document.querySelector("h1").innerHTML="7"});

countdown5.then(()=>{document.querySelector("h1").innerHTML="6"});

countdown6.then(()=>{document.querySelector("h1").innerHTML="5"});

countdown7.then(()=>{document.querySelector("h1").innerHTML="4"});

countdown8.then(()=>{document.querySelector("h1").innerHTML="3"});

countdown9.then(()=>{document.querySelector("h1").innerHTML="2"});

countdown0.then(()=>{document.querySelector("h1").innerHTML="1"});

countdown11.then(()=>{document.querySelector("h1").innerHTML="Happy Independence Day";document.querySelector("body").style.backgroundColor = "orange";});



