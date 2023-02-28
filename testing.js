// const d = new Date();
// console.log(d.getDate())
// const funct = (d) =>
// { const date = d.getDate().toString().padStart(2,"0");
//  const month = d.getMonth().toString().padStart(2,"0");
//  const year = d.getFullYear().toString().padStart(2,"0");
//  const h = d.getHours().toString().padStart(2,"0");
//  const m = d.getMinutes().toString().padStart(2,"0");
//   return `${date} ${month} ${year} ${h} ${m} `;
// }
// console.log(funct(d))

//
// const d = new Date();
// console.log(d.getDate())
// const funct = (d) =>
// {
//   const day = d.getDay()
//   const dayTitle = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"];
//
//   const month = d.getMonth();
//   const mounthTitle = ["Января","Февраля","Марта","Апреля","Мая","Июня","Августа", "Октября", "Ноября","Декабря"];
//
//   const date = d.getDate().toString().padStart(2,"0");
//
//   const year = d.getFullYear().toString().padStart(2,"0");
//
//
//   const h = d.getHours().toString().padStart(2,"0");
//   const m = d.getMinutes().toString().padStart(2,"0");
//
//   return `${dayTitle[day]}, ${date} ${mounthTitle[month]} ${year}, ${h}:${m} `;
// }
// console.log(funct(d))



let d1 = new Date("2022-01-01");
let d2 = new Date("2023-01-01");
let d3 = new Date("2021-09-26T15:57:51.295Z");

console.log(d3.getTime() >= d1.getTime() && d3.getTime() <= d2.getTime())































