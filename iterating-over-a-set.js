/*
 * Topic : Iterating Over a Set
 * 
 * Set (Data structure) হচ্ছে কতগুলো ভ্যালুর একটি ইউনিক কালেকশন 
 * 
 * Set এবং array এর মধ্যে একটি ফান্ডামেন্টাল পার্থ্যক্য হচ্ছে - একটি set এর ভেতর 
 * একই ভ্যালু দুইবার থাকতে পারেনা অর্থাৎ ভ্যালু ইউনিক হতে হবে। যদিও থাকেও সেটা 
 * কোন এরর না দেখিয়ে ব্রাউজারে প্রিন্ট হবেনা। কিন্তু array এর ভেতর একই ভ্যালু 
 * মাল্টিফল টাইম থাকতে পারে। 
 * 
 * array এর ক্ষেত্রে new কিওয়ার্ড ব্যবহার করা বাধ্যতামূলক নয়
 * কিন্তু Set তৈরী করার ক্ষেত্রে new কিওয়ার্ড ব্যবহার করা বাধ্যতামূলক। যেমনঃ new Set()
 * 
 * object এর ক্ষেত্রে property এর জায়গায় যে কোন data types ইউস করা যায়না। 
 * কিন্তু Set ক্ষেত্রে key and value pair কাজ করে। এবং key/property এর জায়গায়
 * যে কোন Data types ব্যবহার করা যায়। 
 * 
 * 
 * 
 * প্রয়োজনীয় কিছু Set Method হচ্ছে : 
 * add() : set এর ভেতর নতুন আইটেম যুক্ত করার জন্য / array এর ক্ষেত্রে যেমন আমরা push method ইউস করি। 
 * delete() : set এর ভেতর থেকে আইটেম রিমুভ করার জন্য / array এর ক্ষেত্রে রিমুভ করতে আমরা pop method ইউস করি। 
 * has() : set এর ভেতর একটি নির্দিষ্ট ভ্যালুর existance চেক করার জন্য / array এর ক্ষেত্রে ভ্যালুর existance চেক করার জন্য আমরা Array includes() method ব্যবহার করি 
 * forEach : set এর আইটেম গুলোকে iterate করার জন্য / একই ভাবে array কেও forEach মেথড ইউস করে iterate করা যায়। 
 * values() : set er ভেতরের সবগুলো আইটেমকে বের করে নিয়ে আসা যায়, সেক্ষেত্রে for of loop ব্যবহার করতে হয়। 
 * 
 * 
 * 
 * Set এর একটি property হচ্ছে size
 * এটি ব্যবহার করে set এর ভেতর আইটেম কতগুলো আছে চেক করা যায়। 
*/


// Create a Set 
const letters = new Set(["a", "b", "c"]);

// Add Item in a Set 
letters.add("d");
letters.add("e");

// remove items from a Set
letters.delete("e");

// Iterate a Set with for of loop
for(x of letters) {
  console.log(x);
}

// Check value existance of a Set 
console.log(letters.has("f")); //false
console.log(letters.has("a")); //true


// forEach() method invokes (calls) a function for each Set element
letters.forEach((currentValue) => {
  console.log(currentValue);
})

// We can use the Iterator object to access the elements
// values() method returns a new iterator object containing all the values in a Set
for(x of letters.values()){
  console.log(x);
}

// Check how much items in a Set / Its will work array length 
console.log(letters.size); // 4