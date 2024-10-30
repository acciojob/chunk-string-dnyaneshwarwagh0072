function stringChop(str, size) {
  if (!str) return []; // Handle null or empty string case
  
  let result = [];
  
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size)); // Slice each chunk and push to the array
  }
  
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // Convert size to integer
alert(stringChop(str, size));
