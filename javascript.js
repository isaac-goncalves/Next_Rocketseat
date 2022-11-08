
function snailSort(ints, s) {

    let first = 100;
    let last = 100;

    const result = [];

    for (var i = 0; i < ints.length; i++) {

        for (var j = 0; j < ints.length; j++) {

            const sum = ints[i] + ints[j];

            if (sum == s && i != j & i < j) {
                
                if (j < last) {
                    
                    first = i;
                    last = j;
                    
                    console.log("Index " + i + " + " + j + " = " + sum);
                    console.log(ints[i] + " + " + ints[j]+ " = " + sum);
                }
            }
        }
    }
    
    result.push(first);
    result.push(last);
    return result;
    
}

const result = snailSort([10, 5, 2, 3, 7, 5], 10);
console.log(result);