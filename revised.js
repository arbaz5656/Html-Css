// alert("Welcome");
// console.log("Hello World");
// document.write("Hello World")

// prompt("Enter the number","25")

// confirm("Confirm!")


// var name="Arbaz"
// document.write(name);

// var n=document.getElementById("g");
// console.log(n);

// alert("hello");
// console.log("Hello");
// document.write("Hello World");

// var a=7;
// var b="7";

// // var c=a==b;
// let c=a===b;
// document.write(c);
// document.write(typeof(a));
// document.write(typeof(b));


// Dom
// cahnge html text using js
var variable=document.getElementById('demo').innerHTML="Hello Arbaz";
// document.write(variable)


// cahnge css using js 

document.getElementById("demo").style.color="red";

function func(){
var i=document.getElementsByClassName("name")[0].value;
alert(i);
}

var tag=document.getElementsByTagName('marquee');
for(var i=0;i<tag.length;i++){
    tag[i].style.background="lightgreen";
}