// Check for Palindrome:
// Write a function isPalindrome that checks if a given string is a palindrome 
// (reads the same backward as forward).

const output2 = document.getElementById('output2');

function isPalindrome(str) {
    const h1 = document.createElement('h1');
    str = str.toLowerCase(); // convert to lowercase
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            h1.textContent = "false"; // characters don't match, not a palindrome
            output2.appendChild(h1);
            return false;
        }
        left++;
        right--;
    }
    h1.textContent = "true"; // all characters match, is palindrome
    output2.appendChild(h1);
    return true;
}

isPalindrome("racecar"); // true
isPalindrome("hello"); // false 