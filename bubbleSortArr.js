let arr = [20,1,841,23,10,40,41,89,154,62,34,81];

//O(N^2)
function bblSort(arr){
    for(let i = 0; i < arr.length; i++){
        //Last i elements are already in place
        for(let j = 0; j < (arr.length - i -1); j++){
            /*checking if the item at present iteration
            is greater than next iteration*/
            if(arr[j] > arr[j+1]){
                //if true swap em
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

console.log(bblSort(arr));