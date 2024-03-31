const district = ['Feni', 'Cumilla', 'Chattagram', 'Dhaka'];

/* একটি array এর ভেতর কয়টি আইটেম আছে সেটা বের করার জন্য 
 * array.length 
 *
 * 
*/

console.log(district.length); // 4 

/* একটি array কে string এ কনভার্ট করার জন্য 
 * array.string() 
 *
 * 
*/

console.log(district.toString()); //Feni,Cumilla,Chattagram,Dhaka

/* একটি array থেকে নির্দিষ্ট key দিয়ে একটি আইটেমকে বের করে নিয়ে আসা 
 * array.at() 
 *
 * 
*/

console.log(district.at(1)); //Cumilla

/* একটি array এর সবগুলো আইটেম কে string এ কনভার্ট করতে  
 * array.join()
 *
 * এক্ষেত্রে প্রত্যেকটি string এর মাঝখানে যে কোন text যুক্ত করা যেতে পারে
 * 
*/

console.log(district.join("*")) // Feni*Cumilla*Chattagram*Dhaka

/* একটি array থেকে নির্দিষ্ট একটি আইটেম remove করে দিতে   
 * array.pop()
 *
 * 
*/

const removeOneItemFromArray = district.pop(); //Dhaka

console.log(district); //['Feni', 'Cumilla', 'Chattagram'] 


/* একটি array এর শেষে নতুন একটি আইটেম add করতে    
 * array.push()
 *
 * 
*/

const addItemArray = district.push("Rajshahi");

console.log(district); //['Feni', 'Cumilla', 'Chattagram', 'Rajshahi']

/* একটি array এর প্রথম আইটেম remove করতে 
 * array.shift()
 *
 * 
*/

const removeFirstItemFromArray = district.shift();

console.log(district); // ['Cumilla', 'Chattagram', 'Rajshahi']


/* একটি array এর প্রথম আইটেম add করতে 
 * array.unshift()
 *
 * 
*/

const addFirstItemFromArray = district.unshift("Pabna");

console.log(district); //['Pabna', 'Cumilla', 'Chattagram', 'Rajshahi']



/* দুইটি array কে মার্জ করে একটি করার জন্য 
 * array.concat() 
 * অর্থাৎ concat মেথড ইউস করে দুইটি array কে জোড়া দিয়ে একটি করা হয় 
*/

const districtTwo = ['Khulna', 'Bogura', 'Kishoreganj'];

const mergeArray = district.concat(districtTwo);

console.log(mergeArray);



/* একটি array কে alphabetically sort করার জন্য 
 * array.sort()
 * 
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sortAlphabetically = fruits.toSorted();
console.log(sortAlphabetically); // ['Apple', 'Banana', 'Mango', 'Orange']
console.log(fruits);


/* 
 * একটি array কে বিপরীত দিক থেকে ঘুরিয়ে দেখার জন্য 
 * array.reverse()
 * 
*/

const arrayReverse = fruits.reverse();

console.log(arrayReverse); //['Orange', 'Mango', 'Banana', 'Apple']


