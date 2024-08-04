// let counter = document.querySelector(".counter");
// counter.innerHTML = '1000';
// let count = 1;
// // setinterval
// //setinterval a duita jinish theke 1.method 2.timehandler
// setInterval(() =>{
//     count++;
//     counter.innerHTML = count;
// },1);


// follow youtube channel
// 1.Traversy Media 
// 2.hitas chaudary
// 3.deb ed


//!ADVANCE NIYOM

let counters = document.querySelectorAll('.counter'); // Corrected selector
let time = 300;

counters.forEach(counter => {
    let updateCount = () => {
        let target = +counter.getAttribute('data-target'); // + correctly converts string to number
        let count = +counter.innerText;

        let increment = target / time;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment); // Corrected function name
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
let healthcondition = document.querySelector('.health');
setTimeout(() =>{
   let health = healthcondition.innerHTML = 'You are Fit!';
}, 2000);

//coursor point
new kursor({
    type: 1
})