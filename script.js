
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = [&quot;Red&quot;, &quot;Green&quot;, &quot;White&quot;, &quot;Black&quot;]

var myColor = ["Red", "Green", "White", "Black"];
var result = myColor.join(", "); 
console.log(result); 

//Write a JavaScript function to create an array of arrays, un grouping the elements in an array
// produced by zip.
// Test Data :
// unzip([[&#39;a&#39;, 1, true], [&#39;b&#39;, 2, false]])
// unzip([[&#39;a&#39;, 1, true], [&#39;b&#39;, 2]])
// Expected Output:
// [[&quot;a&quot;,&quot;b&quot;],[1,2],[true,false]]
// [[&quot;a&quot;,&quot;b&quot;],[1,2],[true]]

function unzip(zippedArray) {
  if (!zippedArray || zippedArray.length === 0) {
    return [];
  }

  const unzipped = [];
  const maxLength = Math.max(...zippedArray.map(arr => arr.length));

  for (let i = 0; i < maxLength; i++) {
    unzipped.push([]);
    for (const subArray of zippedArray) {
      unzipped[i].push(subArray[i]);
    }
  }

  return unzipped;
}

console.log(unzip([['a', 1, true], ['b', 2, false]]));
console.log(unzip([['a', 1, true], ['b', 2]])); 

// 4.Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, &#39;a&#39;, &#39;a&#39;, &#39;a&#39;, 2, 3, &#39;a&#39;, 3, &#39;a&#39;, 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function mostFrequentItem(arr) {
  if (arr.length === 0) {
    return "The array is empty.";
  }

  let counts = {};
  let mostFrequent;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    counts[item] = (counts[item] || 0) + 1;
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      mostFrequent = item;
    }
  }

  return `${mostFrequent} ( ${maxCount} times )`;
}

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var result = mostFrequentItem(arr1);
console.log("Sample Output: " + result);


// 5.Write a JavaScript program to find all the unique values in a set of numbers.
// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]

function findUniqueValues(arr) {
  let uniqueValues = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueValues.includes(arr[i])) {
      uniqueValues.push(arr[i]);
    }
  }
  return uniqueValues;
}
console.log(findUniqueValues([1, 2, 2, 3, 4, 4, 5]));
console.log(findUniqueValues([1, 2, 3, 4, 5])); 
console.log(findUniqueValues([1, -2, -2, 3, 4, -5, -6, -5]));


// Write a JavaScript program to get the volume of a cylindrical with four decimal places using object
// classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  calculateVolume() {
    const pi = Math.PI;
    const volume = pi * Math.pow(this.radius, 2) * this.height;
    return volume.toFixed(4);
  }
}

const cylinder1 = new Cylinder(3, 5);
const volume1 = cylinder1.calculateVolume();
console.log(`The volume of the first cylinder is: ${volume1}`);

const cylinder2 = new Cylinder(4, 8);
const volume2 = cylinder2.calculateVolume();
console.log(`The volume of the second cylinder is: ${volume2}`);

// 7.Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : &quot;David Ray&quot;,
// class : &quot;VI&quot;,
// rollNo : 12 };
var student = {
  name: "David Ray",
  class: "VI",
  rollNo: 12
};

function getObjectLength(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

var length = getObjectLength(student);
console.log("The length of the object is: " + length);


// 8. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be
// sorted,

// Sample Data: [6,4,0, 3,-2,1]

function bubbleSort(arr) {
  var len = arr.length;
  var swapped;

  do {
    swapped = false;

    for (var i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the elements
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

var sampleData = [6, 4, 0, 3, -2, 1];
var sortedArray = bubbleSort(sampleData);
console.log("Sorted Array:", sortedArray);



