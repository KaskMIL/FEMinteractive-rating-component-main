const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const submit = document.getElementById("submit");
const firstCard = document.getElementById("firstCard");
const secondCard = document.getElementById("secondCard");
const count = document.getElementById("count");

let pressed = 0;


one.addEventListener("click", e => {
    pressed = 1;
    one.classList.add("active");
    if(two.classList.contains("active")){
        two.classList.remove("active");
    };
    if(three.classList.contains("active")){
        three.classList.remove("active");
    };
    if(four.classList.contains("active")){
        four.classList.remove("active")
    };
    if(five.classList.contains("active")){
        five.classList.remove("active");
    };
});

two.addEventListener("click", e => {
    pressed = 2;
    one.classList.add("active");
    two.classList.add("active");
    if(three.classList.contains("active")){
        three.classList.remove("active");
    };
    if(four.classList.contains("active")){
        four.classList.remove("active")
    };
    if(five.classList.contains("active")){
        five.classList.remove("active");
    };
});

three.addEventListener("click", e => {
    pressed = 3;
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    if(four.classList.contains("active")){
        four.classList.remove("active")
    };
    if(five.classList.contains("active")){
        five.classList.remove("active");
    };
});

four.addEventListener("click", e => {
    pressed = 4;
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    if(five.classList.contains("active")){
        five.classList.remove("active");
    };
});

five.addEventListener("click", e => {
    pressed = 5;
    one.classList.add("active");
    two.classList.add("active");
    three.classList.add("active");
    four.classList.add("active");
    five.classList.add("active");
});

submit.addEventListener("click", e => {
    firstCard.classList.add("hide");
    secondCard.classList.remove("hide");
    count.textContent = `You selected ${pressed} out of 5`
})

