/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) constant time
  const unique = [];                // 1 * 1 = O(1) constant time
  for (
    let i = 0;                      // 1 * 1 = O(1) constant time
    i < words.length;               // 2 * n = O(2n) ~= O(n) linear time
    i++                             // 2 * n = O(2n) ~= O(n) linear time
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) linear time
    if (!seen[word]) {              // 3 * n = O(3n) ~= O(n) linear time
      seen[word] = true;            // 2 * n = O(2n) ~= O(n) linear time
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) linear time
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1) constant time
  for (
    let i = 0;                      // 1 * 1 = O(1) constant time
    i < words.length;               // 2 * n = O(2n) ~= O(n) linear time
    i++                             // 2 * n = O(2n) ~= O(n) linear time
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= O(n) linear time
    let isUnique = true;            // 1 * n = O(n) linear time
    for (
      let c = 0;                    // 1 * n = O(n) linear time
      c < i;                        // 1 * n * n = 1(n^2) ~= O(n^2) // n times for the outer loop and n times for the inner loop //
      c++                           // 2 * n * n = 2(n^2) ~= O(n^2) // quadratic time
    ) {
      const comparing = words[c];   // 2 * n * n = 2(n^2) ~= O(n^2) // quadratic time
      if (comparing === word) {     // 2 * n * n = 2(n^2) ~= O(n^2) // quadratic time
        isUnique = false;           // 1 * n * n = 2(n^2) ~= O(n^2) // quadratic time
      }
    }
    if (isUnique) {                 // 1 * n = O(n) linear time
      unique[unique.length] = word; // 3 * n = O(3n) ~= O(n) linear time
    }
  }
  return unique;                    // 1 * 1 = O(1) constant time
} // Big O Notation for uniqueQuadratic: O(n^2)
