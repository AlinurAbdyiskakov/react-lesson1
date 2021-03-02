let state = true;
document.querySelector('#example-1 button').addEventListener('click',function(){
    state =!state;
    document.querySelector('#example-1 h1').innerText = state ? "on":"off";
});



let counter = 0;
document.querySelector('#example-2 button').addEventListener('click', function () {
    counter++;
    document.querySelector('#example-2 h1').innerText = counter;
});


let name = "";
document.querySelector(' #example-3 input').addEventListener('input', function () {
     name = this.value.trim();
        document.querySelector('#example-3 h1').innerText = `your name is"${name}"`;
    });

    let text= "";
let text1 = document.querySelector('#text-1');
let text2 = document.querySelector('#text-2');
let text3 = document.querySelector('#text-3');

text1.addEventListener('input',function(){
text = this.value;
text1.value = text;
text2.value = text;
text3.value = text;
});


text2.addEventListener('input',function(){
text = this.value;
text1.value = text;
text2.value = text;
text3.value = text;
});

let text3 = document.querySelector('#text-2');
text3.addEventListener('input',function(){
text = this.value;
text1.value = text;
text2.value = text;
text3.value = text;
});
