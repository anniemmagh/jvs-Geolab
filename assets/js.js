// var name="commschool";
// var name2=name;
// name="test";
// console.log(name2);

// var name="commschool";
// var names=[
//     'commschool1', 'commschool2','commschool3',null,123,
// ];
// console.log(names.length);
// var user=[
//     'ani',
//     'test@gmail.com',
//     20
// ];

// var user ={
// name: "ani",
// email: 'test@gmail.com',
// age:20,
// adresses:['tbilisi','aleksidze 10']
// };
// user.age=30;
// console.log(user['age']);//// analogiurad gamoitans user.age rom dagvewera egec
// console.log(user.adresses[1]);///masividan meore elementis amogeba
// var key='age';
// var user ={
//     name: "ani",
//     email: 'test@gmail.com',
//     age:20,
//     friends:[{
//         name:'user 1'
//         age:31
//     },
//     {
//         name:'user 2'
//         age:13
//     }
//     ]
//     };
//     // console.log(user.friends[1].name);///
//     console.log(user.friends[1]['age']);
// var key='age';
// var user ={
//     name: "ani",
//     email: 'test@gmail.com',
//     age:20
// };
// var user2=user;
// console.log(user2.age);

// var age=10;
// var name='giorgi';
// if(age>10 || name=='giorgi'){
// console.log('srulwlovani')
// }
// else{
// console.log('arasrulwlovani')
// console.log(age>=18);
// || ori swori xazi nishnavs "an-s" da &&- es "da-s"
// var age=18;
// var name="test";

// if (! age=='18'){
//     console.log('srulwlovani');
// }
// else {
//     console.log('arasrulwlovani');
// }
// console.log(!true);/// ! abrunebs sapirispiros
// var age=18;
// var name='test';
// console.log(
//     '3'+'4'
// )/// stringand - '' tu vwert, miayolebs ertmanets

for(i=0; i < 10; i++) { if ((i % 7) == 0) { print("Money") } else if ((i % 5) == 0) { print("Dolly") } }
///
var user = {};
user["name"] = "Tom";
user["age"] = 26;
user["display"] = function(){     
console.log(user.name);
console.log(user.age);
};

// მეთოდის გამოძახება
user["display"]();
////
var user = {
    name: "Tom",
    age: 26,
    display: function () {
    console.log(this.name);
    console.log(this.age);
    }
    };
    // მეთოდის გამოძახება
    user.display();
    /////
    var user = {
        "name": "Tom",
        "age": 26,
        "display": function () {
        console.log(user.name);
        console.log(user.age);
        }
        };
        // მეთოდის გამოძახება
        user.display();
        ///
        var user = {
            name: "Tom",
            age: 26,
            "full name": "Tom Johns",
            "display info": function () {
            console.log(user.name);
            console.log(user.age);
            }
            };
            console.log(user["full name"]);
            user["display info"]();
            ///////
            var user = {};
user.name = "Tom";
user.age = 26;
user.display = function () {
console.log(user.name);
console.log(user.age);
};

console.log(user.name); // Tom
delete user.name; // წავშალოთ თვისება
console.log(user.name); // undefined
////////
var country = {
    name: "გერმანია",
    language: "გერმანული",
    capital: {
    name: "ბერლინი",
    population: 3375000,
    year: 1237
    }
    };
    console.log("დედაქალაქი: " + country.capital.name); // Берлин
    console.log("მოსახლეობა: " + country["capital"]["population"]); // 3375000
    console.log("დაარსების წელი: " + country.capital["year"]); // 1237
//////////////
var country = {
    name: "შვეიცარია",
    languages: ["გერმანული", "ფრანგული", "იტალიური"],
    capital: {
    name: "ბერნი",
    population: 126598
    },
    cities: [
    { name: "ციურიხი", population: 378884 },
    { name: "ჟენევა", population: 188634 },
    { name: "ბაზელი", population: 164937 }
    ]
    };
    
    // country.languages ყველა ელემენტის გამოტანა
    document.write("<h3>შვეიცარიის ოფიციალური ენებია</h3>");
    for (var i = 0; i < country.languages.length; i++)
    document.write(country.languages[i] + "<br/>");
    
    // country.cities ყველა ელემენტის გამოტანა
    document.write("<h3>შვეიცარიის ქალაქებია</h3>");
    for (var i = 0; i < country.cities.length; i++)
    document.write(country.cities[i].name + "<br/>");
    