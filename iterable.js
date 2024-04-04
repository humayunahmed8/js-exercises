/*
 * Topic : iteratable and iterating 
 * 
 * যে জিনিসগুলো iterate বা যেগুলোর মধ্য দিয়ে step by step যাওয়া যায়। 
 * সেগুলোকে iterable বলা হয়। 
 * 
 * একটি অবজেক্টকে সরাসরি iterate করা যায়না। কিন্তু একটি array বা string কে সরাসরি 
 * iterate করা যায়। 
 * 
 * যে জিনিস গুলো iterable সেগুলোকে for of loop ব্যবহার করে iterate করা যায়। 
 * 
 * যে process এর মধ্য দিয়ে step by step iterate হয়, অর্থাৎ এই iterate হওয়াটাকে iterating বলে। 
*/

const myBio = {
  fullName : "Ahmed",
  company  : "WPPOOL"
}
console.log(myBio);


// একটি iteratable ও for of লুপ দিয়ে iterate করার উদাহরণ - 
const myBiography = ["Humayun Ahmed", "26", "WPPOOL"];

for(x of myBiography) {
  console.log(x);
}

