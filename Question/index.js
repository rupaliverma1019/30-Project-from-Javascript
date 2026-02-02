// 2. Write a function that returns the sum of all numbers in an array.
let arr = [2,5,8,2,8,4];
let sum= 0;
for(let i = 0 ; i<arr.length; i++)
{
    sum = sum + arr[i]
}
console.log(sum)

// 3. Reverse a string without using built-in reverse()

let word = "hello";
let reverse= "";
for(let i = word.length-1 ; i>=0; i--)
{
    reverse = reverse+ word[i]
}

// 4. Find the largest number in an array.\

let arr1 = [ 2,6,1,8,5];
let max=arr1[0];
for(let i = 0 ; i < arr1.length; i++)
{
    if(arr1[i]>max)
    {
        max = arr1[i];
    }
}
console.log(max)
// 6. Remove duplicate values from an array.

// const arr3 = [1,2,3,4,5,5,3];

function palindrome()
{
    let str = "naman";
    let j = str.length-1;
    for(let i = 0 ; i<str.length; i++)
    {
        if(str[i] != str[j])
        {
            return false;
        }
        j--;
    }
   console.log()
}

// 10. Write a function to count the number of vowels in a string.

let str = "javascript"
let count = 0;
for(let i = 0; i<str.length; i++)
{
    if (str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' )
    {
        count = count+1;
    }
    console.log(count)
}

