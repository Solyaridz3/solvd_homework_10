import { CustomHashTable } from "./CustomHashTable.js";

const table = new CustomHashTable();


table.insert("hello", 2);
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



table.delete("hello1");
table.delete("hello2");
table.delete("hello3");
table.delete("hello4");
table.delete("hello5");
table.delete("hello10");

table._print();

console.log(); // just a separation line
console.log(table.get("hello")); // 2
console.log(table.get("hello2")); // undefined
console.log(table.get("hello3")); // undefined
console.log(table.get("hello4")); // undefined
console.log(table.get("hello5")); // undefined
console.log(table.get("hello6")); // 12
console.log(table.get("hello7")); // 14
console.log(table.get("hello8")); // 16
console.log(table.get("hello9")); // 18
console.log(table.get("hello10")); // undefined
