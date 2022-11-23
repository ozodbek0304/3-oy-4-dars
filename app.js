// let n = 30;
// console.log(String(n));
// console.log(n + "");
// console.log(n.toString(10));
// console.log(n);
// value => true, false
// console.log(Boolean (-Infinity));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(!!"12");
// truthy, falsy
// falsey => false, 0, -0, NaN;


// let s = "Lorem  ipsum dolor sit amet";
// console.log(s.charAt(4));
// console.log(s.concat("qoshimcha"));
// console.log(s.endsWith("ot."));
// console.log(s.includes("or d"));
// console.log(s.indexOf("L", 1));
// console.log(s.lastIndexOf("o"));
// console.log(s.length);
// console.log(s.repeat(3));
// console.log(s.replace("O", "a"));
// console.log(s.replaceAll("o", "a"));
// console.log(s.slice(2, 7));
// console.log(s.split(" "));
// console.log(s.trim());
// console.log(s.trimStart());
// console.log(s.trimEnd());




// let Masofa = +prompt("Masofani kiriting");
// console.log = (Masofa); 
// alert(
//     "Odam:"
//     + Math.floor(Masofa / 3.6) + "\n" +
//     "Velosopid:"
//     + Math.floor(Masofa / 20) + "\n" +
//     "Mashina:"
//     + Math.floor(Masofa / 70) + "\n" +
//     "Samaliyot:"
//     + Math.floor(Masofa / 1000) + "\n",

// )


// let maxsus =+ prompt( new Date());
// //let now = Date.now(); // 1970-01-01T00:00:00Z

// // console.log(now);
// // console.log(now / 1000);
// // console.log(now / 1000 / 60);
// // console.log(now / 1000 / 60 / 60);
// // console.log(now / 1000 / 60 / 60 / 24);
// // console.log(now / 1000 / 60 / 60 / 24 / 365.25);

// console.log(( maxsus) / 1000 / 60 / 60 / 24 / 365.25);
// console.log(( maxsus) / 1000 / 60 / 60 / 24);
// console.log(( maxsus) / 1000 / 60 / 60);
// console.log(( maxsus) / 1000 / 60);
// console.log(( maxsus) / 1000);
// console.log((maxsus));




let Ism = prompt('Ismingizni kiriting:');
let Yosh = +prompt("Yoshingizni kiriting");

let TugilganYil =(2022-Yosh);
let Hafta = ((Yosh*365.25)/7);
let Kun =Yosh*365.25;
let Soat= Yosh*365.25*24;
let Daqiqa = Yosh * 365.25 * 24 * 60; 
let Soniya =Yosh * 365.25 * 24 * 60*60;
let MilliSekund = Yosh * 365.25 * 24 * 60 * 60 * 1000;

alert(
  `Ismingiz:${Ism}.
Yoshingiz:${Yosh}.
Keyingi sahifaga o'tish uchun 'OK' tugmasini bosing ➡️`
);
alert(
  "TugilganYilingiz:"
  + Math.floor(TugilganYil) + "\n" +

  "Necha Hafta yashaganingiz:"
  + Math.floor(Hafta)  + "\n" +
  
  "Necha Kun yashaganingiz:"
  + Math.floor(Kun) + "\n" +
  
  "Necha Soat yashaganingiz:"
  + Math.floor(Soat) + "\n" +
  
  "Necha Daqiqa yashaganingiz:"
  + Math.floor(Daqiqa) + "\n" +
  
  "Necha Soniya yashaganingiz:"
  + Math.floor(Soniya) + "\n" +
  
  "Necha MilliSekund yashaganingiz:"
  + Math.floor(MilliSekund) + "\n"
)











