arr = [3,2,5,4,7,1]

const func = (arr) => {
    n = arr.length
    for(i=0;i<n;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
                var temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
            }
        }
    }
    return arr[1]
}

console.log(func(arr));
 
