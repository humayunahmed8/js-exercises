/*
 * Topic : JS Maps
 * 
 * Map (Data structure) এর ভেতর key-value pairs অনুযায়ী data থাকে। 
 * যেখানে key এর ডেটা টাইপ যে কোন কিছু হতে পারে। 
 * 
 * Map এবং object এর মধ্যে বেশ কিছু পার্থ্যক্য রয়েছে। 
 * 1. obejct ডিরেক্টলি iterate করা যায়না। iterate করতে হলে প্রপার্টি এক্সেস করতে হয়। কিন্তু map ডিরেক্টলি iterate করা যায়। 
 * 2. object এর কোন size property নেই / Map এর size property আছে। 
 * 3. object এর property/key অবশ্যই string হতে হবে / Map এর ক্ষেত্রে key যে কোন data type হতে পারে। 
 * 4. object এর property/key গুলো অর্ডার অনুযায়ী থাকেনা / Map এর ক্ষেত্রে key গুলা একটি নির্দিষ্ট অনুযায়ী কাজ করে 
 * 5. object এর ক্ষেত্রে new কিওয়ার্ড ব্যবহার করা বাধ্যতামূলক নয়। কিন্তু Map তৈরী করার ক্ষেত্রে new কিওয়ার্ড ব্যবহার করা বাধ্যতামূলক। যেমনঃ new Map()
 * 
 * 
 * 
 * 
 * প্রয়োজনীয় কিছু Map Method হচ্ছে : 
 * get() : Map এর ভেতরের একটেমকে বের করে আনার জন্য। 
 * set() : Map এর ভেতর নতুন আইটেম যুক্ত করার জন্য / array এর ক্ষেত্রে যেমন আমরা push method ইউস করি। 
 * delete() : Map এর ভেতর থেকে আইটেম রিমুভ করার জন্য / array এর ক্ষেত্রে রিমুভ করতে আমরা pop method ইউস করি। 
 * has() : Map এর ভেতর একটি নির্দিষ্ট ভ্যালুর existance চেক করার জন্য / array এর ক্ষেত্রে ভ্যালুর existance চেক করার জন্য আমরা Array includes() method ব্যবহার করি 
 * forEach : Map এর আইটেম গুলোকে iterate করার জন্য / একই ভাবে array কেও forEach মেথড ইউস করে iterate করা যায়। 
 * entries() : Map এর ভেতরের সবগুলো আইটেমকে বের করে নিয়ে আসা যায়, সেক্ষেত্রে for of loop ব্যবহার করতে হয়। 
 * 
 * 
 * 
 * Map এর একটি property হচ্ছে size
 * এটি ব্যবহার করে Map এর ভেতর আইটেম কতগুলো আছে চেক করা যায়। 
*/

// Create a Map 
const fruitsBox = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
])

// Add Item in a Map 
fruitsBox.set("graps", 100)
console.log(fruitsBox); // {'apples' => 500, 'bananas' => 300, 'oranges' => 200, 'graps' => 100}

// remove items from a Map
fruitsBox.delete("graps", 100);
console.log(fruitsBox); // {'apples' => 500, 'bananas' => 300, 'oranges' => 200}


// Iterate a Map with for of loop
for(x of fruitsBox) {
  console.log(x);
}

// Check key existance of a Map 
console.log(fruitsBox.has("bananas")) // true
console.log(fruitsBox.has("graps")) // false


// forEach() method invokes (calls) a function for each Map element
fruitsBox.forEach((currentValue, currentIndex) => {
  console.log(currentIndex + " - " +currentValue)
})

// We can use the Iterator object to access the elements
// The entries() method returns an iterator object with the [key, values] in a Map:
for(x of fruitsBox.entries()){
  console.log(x);
}

// Check how much items in a Map / Its will work array length 
console.log(fruitsBox.size); // 3