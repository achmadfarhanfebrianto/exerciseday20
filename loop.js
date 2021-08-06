
//loop
// let datapasien = [{
//         nama : "Dino",
//         height : 1.7,
//         weight : 70,
//     },
//     {
//         nama : "Dini",
//         height : 1.63,
//         weight : 65,
//     },
//     {
//         nama : "Danu",
//         height : 1.81,
//         weight : 75,
    
//     },
//     {
//         nama : "Dona",
//         height : 1.54,
//         weight : 42,
    
//     }
// ]  
//     for (data of datapasien){
       
      
//     let bmi = data.weight / (data.height**2);
//     console.log("Nama = " + data.nama, "Total BMI = " + bmi)
    
//     if (bmi < 18.5) {
//         console.log("Kategori = Underweight");
//     } else if (bmi < 25) {
//         console.log("Kategori = Normal");
//     } else if (bmi < 30) {
//         console.log("Kategori = Overweight");
//     } else {
//         console.log("Kategori = Obesitas");
//     }
// }

//function
function totalBMI(weight, height) {
    return weight / (height **2);
  }
  
  function cekBMI(databmi) {
    if (databmi < 18.5) {
        return"Kategori = Underweight";
    } else if (databmi < 25) {
        return"Kategori = Normal";
    } else if (databmi < 30) {
        return"Kategori = Overweight";
    } else {
        return"Kategori = Obesitas";
    }
  }
  let datapasien = [
    {
    nama : "Dino",
    height : 1.7,
    weight : 70,
    },
    {
    nama : "Dini",
    height : 1.63,
    weight : 70,
    },
    {
    nama : "Danu",
    height : 1.81,
    weight : 75,
            
    },
    {
     nama : "Dona",
     height : 1.54,
     weight : 42,

     }
  ];
  

//   for (const hasilBMI of datapasien) {
//     console.log(cekBMI(totalBMI(hasilBMI.weight, hasilBMI.height)));
//   }

//JSON
  for (const databmi of datapasien) {
      let dataBMI = totalBMI(databmi.weight, databmi.height);
      let dataKategori = cekBMI(dataBMI);
      databmi.isiBMI = dataBMI;
      databmi.Kategori = dataKategori;
  }

console.log(JSON.stringify(datapasien));
