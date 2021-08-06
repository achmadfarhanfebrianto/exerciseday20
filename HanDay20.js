
//Exercise 10
// const express = require("express");

// const app = express();
// const port = 3010;

// app.get("/profile", (req, res) => {
//  const profile = [
//    { name: "Dani", height: 1.70, weight : 70 },
//    { name: "Dini", height: 1.65, weight : 65  },
//  ];

//  res.json(profile);
// });

// app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`);
// });


//Exercise 11
// const express = require("express");

// const app = express();
// const port = 3010;

// app.get("/bmi", (req, res) => {
//  const bmi = [
//    { name: "Dani", height: 1.70, weight : 70 },
//    { name: "Dini", height: 1.65, weight : 65  },
//  ];
//  function totalBMI(weight, height) {
//     return weight / (height **2);
//   }
  
//   function cekBMI(databmi) {
//     if (databmi < 18.5) {
//         return"Kategori = Underweight";
//     } else if (databmi < 25) {
//         return"Kategori = Normal";
//     } else if (databmi < 30) {
//         return"Kategori = Overweight";
//     } else {
//         return"Kategori = Obesitas";
//     }
//   }
//   for (const databmi of bmi) {
//     let dataBMI = totalBMI(databmi.weight, databmi.height);
//     let dataKategori = cekBMI(dataBMI);
//     databmi.isiBMI = dataBMI;
//     databmi.Kategori = dataKategori;
// }
//  res.json(bmi);
// });

// app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`);
// });

//Exercise 12
// const express = require("express");

// const app = express();
// const port = 3010;

// function totalBMI(weight, height) {
//     return weight / (height **2);
//   }
  
//   function cekBMI(databmi) {
//     if (databmi < 18.5) {
//         return"Kategori = Underweight";
//     } else if (databmi < 25) {
//         return"Kategori = Normal";
//     } else if (databmi < 30) {
//         return"Kategori = Overweight";
//     } else {
//         return"Kategori = Obesitas";
//     }
//   }

// app.post("/bmi", (req, res) => {
//     let name = req.body.name;
//     let height = req.body.height;
//     let weight = req.body.weight;
//     const dataBMI = totalBMI(databmi.weight, databmi.height);
//     const dataKategori = cekBMI(dataBMI);



// res.json({ name: name,
//         height: height,
//         weight: weight,
//         dataBMI: dataBMI,
//         dataKategori: dataKategori,
//     });
// });


// app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`);
// });

// Exercise 13

// const express = require("express");
// const app = express();
// const port = 3010;
// app.use(express.json());

// const currency = {
//     IDR: 14350, 
//     SGD: 1.35, 
//     MYR: 1.645, 
//     JPY: 109.8, 
//     USD: 1
//   }



// Exercise 14
// function totalBMI(weight, height) {
//     return weight / (height **2);
//   }
  
//   function cekBMI(databmi) {
//     if (databmi < 18.5) {
//         return"Kategori = Underweight";
//     } else if (databmi < 25) {
//         return"Kategori = Normal";
//     } else if (databmi < 30) {
//         return"Kategori = Overweight";
//     } else {
//         return"Kategori = Obesitas";
//     }
//   }
//   module.exports={
//    totalBMI, cekBMI
// }

