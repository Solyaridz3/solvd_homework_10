import { CustomHashTable } from "./CustomHashTable.js";

const table = new CustomHashTable();


table.insert("hello", 2);
table.insert("hello", 3);
table.insert("hello2", 4);
table.insert("hello3", 6);
table.insert("hello4", 8);
table.insert("hello5", 10);
table.insert("hello6", 12);
table.insert("hello7", 14);
table.insert("hello8", 16);
table.insert("hello9", 18);
table.insert("hello10", 20);
table.insert("hello11", 22)
table.insert("hello12", 24)
table.insert("hello13", 26)
table.insert("hello14", 28)
table.insert("hello15", 30)
table.insert("hello16", 32)
table.insert("hello17", 34)
table.insert("hello18", 36)
table.insert("hello19", 38)
table.insert("hello20", 40)
table.insert("hello21", 42)
table.insert("hello22", 44)
table.insert("hello23", 46)
table.insert("hello24", 48)
table.insert("hello25", 50)
table.insert("hello26", 52)
table.insert("hello27", 54)
table.insert("hello28", 56)
table.insert("hello29", 58)
table.insert("hello30", 60)



table.delete("hello1");
table.delete("hello2");
table.delete("hello3");
table.delete("hello4");
table.delete("hello5");
table.delete("hello10");

table._print();

// for(const el of table.table){
//     console.log(el);

// }

// console.log(table.get("hello")); // 33
// console.log(table.get("hello2")); // undefined
// console.log(table.get("hello3")); // 6
// console.log(table.get("hello4")); // 8
// console.log(table.get("hello5")); // 10
// console.log(table.get("hello6")); // 12
// console.log(table.get("hello7")); //undefined
// console.log(table.get("hello8")); // undefined
// console.log(table.get("hello9")); // undefined
// console.log(table.get("hello10")); // undefined
