var additionBtn = document.getElementById('addition');
 additionBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber+secondNumber;
    document.getElementById('result').value = result;

   };

var subtractionBtn = document.getElementById('subtraction');
subtractionBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber-secondNumber;
    document.getElementById('result').value = result;


};


var multiplicationBtn = document.getElementById('multiplication');
multiplicationBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber*secondNumber;
    document.getElementById('result').value = result;
};

var divisionBtn = document.getElementById('division');
divisionBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber/secondNumber;
    document.getElementById('result').value = result;
};


var remainderBtn = document.getElementById('remainder');
remainderBtn.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);
    var result = firstNumber%secondNumber;
    document.getElementById('result').value = result;
};









var  btnElement = document.getElementById('btn');
btnElement.onclick = function () {

    var firstNameValue = document.getElementById('firstName').value;

    var lastNameValue = document.getElementById('lastName').value;
    var fullName = firstNameValue+ ' ' +lastNameValue;

    // alert(fullName);

    document.getElementById('fullName').value = fullName;

};














// document.write('hello java script');
// alert('hello tonmoy!');
// console.log('hello tonmoy');


// document.write(document.getElementById('heading-one').innerHTML);

// rule of variable :-
// start with var
//  variable (A-Z, a-z, _, &, 0-9)
// No number in first
// var name;
// var NAME;
// var _name;
// var firatName;
// var $name;


// var x=40;
// var y=30;
//
// document.write(x+y);
// document.write('<br/>');
// document.write(x-y);
// document.write('<br/>');
// document.write(x*y);
// document.write('<br/>');
// document.write(x/y);
// document.write('<br/>');
// document.write(x%y);

// var firstName ="tonmoy";
// var firstName ="roy";
// var firstName ="provashish";
// document.write(firstName); //variable all time take update value so print provashish.

// var firstName ="Tonmoy";
// var lastName ="Roy";
// document.write('Full name is :'+firstName+' '+lastName); output is = Full name is Tonmoy Roy.

// var x='10';
// var y='20';
// document.write(x++);
// document.write('<br/>');
// document.write(x);
//
// document.write(++x);
// document.write('<br/>');
// document.write(x);

// document.write(x--);
// document.write('<br/>');
// document.write(x);

// document.write(--x);
// document.write('<br/>');
//

// var x=20;
// var y=20;
// document.write(x++);//20 //print 20 cause value of x is 20.
// document.write('<br/>');
// document.write(++x); //20+2=22 //cause first two plus so increase two.
// document.write('<br/>');
// document.write(x++); //22 //print 22 cause updated value of x is 22.
// document.write('<br/>');
// document.write(--x);//24-2=22 // update value of x is 24 cause x++ so 22+2=24.
// document.write('<br/>');
// document.write(x++); // 22 // cause last update value of x is 22 so print 22.


// var x='10';
// document.write(-x);// -10

// var x=40;
// var y=40;
// document.write(x+=y);// x = x+y
// document.write('<br/>');
// document.write(x-=y); //x = x-y
// document.write('<br/>');
// document.write(x*=y); //x = x*y
// document.write('<br/>');
// document.write(x/=y); //x = x/y
// document.write('<br/>');
// document.write(x%=y);


//conditional operation:
// var x =10;
// var y =20;
// document.write(x>y); //false
// document.write('<br/>');
// document.write(x>=y); //false
// document.write('<br/>');
// document.write(x<y); //true
// document.write('<br/>');
// document.write(x==y); //false
// document.write('<br/>');
// document.write(x!=y); //true
// document.write('<br/>');

//
// var x = 10;
// var y = 20;
// var z = 30;
// var a= false;
// document.write(!a);

// document.write((x<y)&&(y<z));//And operator behaviour.
// document.write((x<y)||(y>z));
// document.write((x<y)||(y>z));


//conditional statement:-

// var x = 10;
// var y = 20;
// // if (x<y){
// //     document.write('hello world');
// // }
// if (x<y){
//     document.write('my name is tonmoy');
// } else {
//     document.write('my name is provashish roy');
// }

// var x = 100; //here need conditional operator
// var y =20;
// var z =40;
//
// if (x<y){
//     document.write('Tonmoy roy');
// } else if(y>z){
//     document.write('provashish');
// }else if (z>x){
//     document.write('nisha');
// } else if (z<y){
//     document.write('tridha');
// } else{
//     document.write('hello world');
// }



// var x =10; //need variable when we need only one output true.
// switch (x) {
//     case 5:
//         document.write('bangladesh');
//         break;
//     case 10:
//         document.write('dhaka');
//         break;
//     case 15:
//         document.write('manikgonj');
//         break;
//
//     case 20:
//         document.write('naurpur');
//         break;
//     default:
//         document.write('nothing');
// }



//PRINT 55 to 70. 99 to 88
//         var x;
//         for (x=99; x>=88; x--){
//             document.write(x +"<br/>");
//         }

// var x = 10;
// while (x<15){
//     document.write('hello world<br/>');
//     x++;
// }


// var x =10;
// do {
//     document.write('hello world<br/>');
//     x++;
// }while (x>15)
//

// var data1 = new Array();
// var data2 = Array();
// var data3 = [];


// var data=[];
// data[0]=[5];
// data[1]=[10];
// data[2]=[30];
// data[3]=[40];
//
// data['name']='Tonmoy';
// data['email']='Tonmoy95@gmail.com ';
// data['age']='24';
//
// document.write(data['email']);


// var data= ['tonmoy','roy','provashish','nisha','surja'];

// for (var a in data){
//     document.write(data[a]+'<br/>');
// }

// var data= ['tonmoy','roy','provashish','nisha','surja'];
// document.write(data.length-1);



//print from html tag into JAVAscript.
//
// var paragraphElement = document.getElementsByTagName('p');
//
// for (var key = 0; key<paragraphElement.length; key++){
//     document.write(paragraphElement[key].innerHTML+ '<br/>');
// }


//function is a block of code = jar akta fixed kaj ase j kaj bar bar reuse kora jay
// Its can not work himself. Function have two type =build in and user define.
// Function have two part =definition and calling. { = carlee start } = carlee end.


// function demo() {
//     var firstName = 'tonmoy';
//     var lastName = 'roy';
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);

// document.write('<br/>===============<br/>');
// demo();
// document.write('<br/>.............................<br/>');
// demo();



// function demo(firstName, lastName) {
//
//     var fullName = firstName+ ' ' +lastName;
//     document.write(fullName);
// }
//
// document.write('<br/>===============<br/>');
// demo('tonmoy', 'roy');
// document.write('<br/>.............................<br/>');
// demo('nisha','das');
// document.write('<br/>.............................<br/>');
// demo('provashish','roy');
//