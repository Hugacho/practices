var name = 'Hugo Bravo'; // String
name = 'Matias'; // Sobreescribe el valor, cambia 'Hugo Bravo' por Matias
var number = 0.34; // Number
var myBoolean = false; // false or true
var thing; // is going to be undefined
var otherVar;
otherVar = 'Other var';
var thisIsNull = null;

//console.log(name, number, myBoolean, thing, otherVar, thisIsNull);

var fruits = ['Anana', 'Pera', 'Uva', 'Kiwi']; //'Anana, Pera, Uva, Kiwi';
var listOfNumbers = [13, 21, 32, 45, 34, 90, 1, -100, 3.14];

var others = [20, true, 'Soy una cadena', null, undefined, 'Soy otra cadena', 459.334235, false, [3, 4, [6, 70, 450], 8]];

var arrayOfArrays = [fruits, listOfNumbers, others];

 //console.log(arrayOfArrays[2][8][2][2]); // Tarea: imprimir en consola el elemento cuyo valor es 450 !! Realizada¡¡

//var hugo = 'Hugo Bravo, 45 años, hubravo@gmail.com';
var hugo = {
    name: 'Hugo',
    lastname: 'Bravo',
    age: 45,
    email: 'hubravo@gmail.com'
};
// console.log(hugo['name']); // hugo.name


// Completar el array de objetos con los datos de los compañeros de clase
var alumns = [
    {
        name: 'Hugo',
        lastname: 'Bravo',
        age: 45,
        email: 'hubravo@gmail.com',
        tel: 153128293,
        isStudentInRollingCode: true,
        hobbies: ['manejar', 'estudiar'],
        address: 'Pje. Baltazar Aqguirre 876',
        workAddress: 'La calle',
        favoriteSport: ['Padel','Rugby','Futbol'],
    },
    {
        name: 'Martin',
        lastname: 'Barros',
        age: 35,
        email: 'tincho@gmail.com',
        tel: 156738494,
        isStudentInRollingCode: true,
        hobbies: ['salir','Beber','Garotas'],
        address: 'Pabrllon 6 Celda 10 Cucheta de abajo',
        workAddress: 'Mejico y Rep. de Libano',
        favoriteSport: ['Voley','Futbol'], 
    },
    {
        name: 'Andrea',
        lastname: 'Puentes',
        age: 35,
        email: 'andy@gmail.com',
        tel: 154728272,
        isStudentInRollingCode: true,
        hobbies: ['Bailar','estudiar','Vender Bollo con chicha'],
        address: 'General Paz 434',
        workAddress: 'Plaza Independencia a la par del gomero',
        favoriteSport: ['descansa','salir',], 
    }, 

    {
        name: 'Fiorella',
        lastname: 'De Felicce',
        age: 40,
        email: ' peresozafiorella@gmail.com',
        tel: 0800-444-0800,
        isStudentInRollingCode: true,
        hobbies: ['Dormir','Roncar','Tomar','TuStucas'],
        address: 'Arriba del Gomero',
        workAddress: 'Bajo las Sabanas hasta las 16',
        favoriteSport: ['dormirrrrrr','Sumo','Boxeo'], 
    }    
];

console.log(alumns);

var app = document.getElementById('app');
var i = 0;
window.setInterval(() => {
    app.innerHTML = new Date().toLocaleTimeString();
    i++;
}, 1000);