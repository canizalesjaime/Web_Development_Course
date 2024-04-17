function flatten(input_arr)
{
    let output_arr = [];

    function flatten_recursive(input_arr)
    {
        if (typeof(input_arr) !== 'object') output_arr.push_back(input_arr);

        else
        {
            for (let e of input_arr)
            {
                if (typeof(e) !== 'object') output_arr.push(e)
                
                else flatten_recursive(e);
            }
        }
    }

    flatten_recursive(input_arr);
    return output_arr;
}


// let in1 = [1,2,[3,4],7,8,[1,[1,15]], 77];
// console.log(flatten(in1));

let in2 = [1,2,4,3,5,['app', 'tom'], 9, [1,2], 'jack'];
console.log(flatten(in2));
