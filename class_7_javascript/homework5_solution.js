//Looping a triangle 1
///////////////////////////////////////////////////////////////////////////////
function loopTriangle(rows)
{
    let row = "#";
    for (let i = 0; i < rows; i++)
    {
        console.log(row);
        row=row+"#";
    }
}


//fizzBuzz 2
///////////////////////////////////////////////////////////////////////////////
function fizzBuzz(toNum)
{
    for(let i = 0; i < toNum; i++)
    {
        if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");

        else if (i % 3 === 0) console.log("fizz");

        else if (i % 5 === 0) console.log("buzz");

        else console.log(i);
    }
}


//chessboard 3
///////////////////////////////////////////////////////////////////////////////
function chessboard(rows)
{
    let row_1 = " # # # #", row_2="# # # # ";
    for(let i = 0; i<rows; i++)
    {
        if(i%2==0) console.log(row_1);

        else console.log(row_2);
    }
}


// end of chapter 2 exercises
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//min 4
///////////////////////////////////////////////////////////////////////////////
function min(num1, num2)
{
    return num1<num2?num1:num2;
}


//is num even 5
///////////////////////////////////////////////////////////////////////////////
function isEven(num)
{
    if(num == 0) return true;

    else if (num == 1) return false;

    else if (num < 0) return isEven(num+2);

    else return isEven(num-2);
}


//count the chars of a string 6  
///////////////////////////////////////////////////////////////////////////////
function countChars(text, character)
{
    let count = 0;
    for(let c = 0; c < text.length; c++)
        if(text[c] === character)
            count++;

    return count;
}


// end of chapter 3 exercises
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


//range 7
///////////////////////////////////////////////////////////////////////////////
function range(start, end, step=1)
{
    let arr = [];

    if (step < 0 && start >= end)
    {
        for (let i = start; i >= end; i+=step)
            arr.push(i);
    }
    
    else if (step > 0 && start <= end)
    {
        for (let i = start; i <= end; i+=step)
            arr.push(i);
    }

    else return [];

    return arr;
}


//sum 8
///////////////////////////////////////////////////////////////////////////////
function sum(arr)
{
    let s = 0;
    for (let i = 0; i < arr.length; i++)
        s+=arr[i];

    return s;
}


//reverse array 9 
///////////////////////////////////////////////////////////////////////////////
function reverseArray(arr)
{
    let reverseArr = [];

    for (let i = arr.length-1; i >= 0 ; i--)
        reverseArr.push(arr[i]);
    
    return reverseArr;
}


//reverse array in place 10
///////////////////////////////////////////////////////////////////////////////
function reverseArrayInPlace(arr)
{
    for (let i = 0, j= arr.length-1; i < j ; i++,j--)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j]=temp;
    }
}


//A list 11
///////////////////////////////////////////////////////////////////////////////
function arrayToList(arr)
{
    let list = {value: NaN, rest:null};
    let ptr = list;
    for (let i = 0; i<arr.length; i++)
    {
        ptr.value=arr[i];
        if (i == arr.length-1) ptr.rest=null;
        else ptr.rest={value: NaN, rest:null};
        ptr=ptr.rest;
    }
    return list;
}

//12
///////////////////////////////////////////////////////////////////////////////
function listToArray(obj)
{
    let arr = [];
    ptr=obj;
    while(ptr)
    {
        arr.push(ptr.value);
        ptr=ptr.rest;
    }
    return arr;
}


// takes an element and a list and creates a new list that adds the 
// element to the front of the input list
///////////////////////////////////////////////////////////////////////////////
function prepend(value1, rest1)
{
    return {value:value1, rest: rest1};
}


// takes a list and a number and returns the element at the given position in 
// the list (with zero referring to the first element) or undefined when there
// is no such element(make it recursive)
///////////////////////////////////////////////////////////////////////////////
function nth(list,num)
{
    if (num === 0) return list.value;
    else return nth(list.rest,num-1);
}


//deep comparison 13
///////////////////////////////////////////////////////////////////////////////
function deepEqual(val1, val2)
{
    if (typeof(val1)===typeof(val2))
    {
        if(val1===null && val2===null) return true;
        if(val1===null || val2===null) return false;

        if (typeof(val1)==='object')
        {
            if(Object.keys(val1).length === Object.keys(val1).length)
            {
                let temp_bool=true;
                for (let key of Object.keys(val1))
                {
                    temp_bool = temp_bool && deepEqual(val1[key],val2[key]);
                    if (!temp_bool) return false;
                }
                return temp_bool;
            }
            else return false;
        }
        else return val1 === val2;
    }
    else return false;
}


// end of chapter 2 exercises
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


//test function calls
///////////////////////////////////////////////////////////////////////////////
console.log(prepend(value1, rest1));