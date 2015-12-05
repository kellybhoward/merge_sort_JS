function merge_sort(array){
    //maybe check if super short, then do insertion or selection sort instead
    mSort(array, 0, array.length);
    return array;
}
function mSort(array, start, end){
    var size = end - start;
    if(size < 2) { return; } //exit case if array is 1 element
    var middle = start + Math.floor(size/2) //split in half

    mSort(array, start, middle); //keep splitting in half
    mSort(array, middle, end); // keep splitting in half
    merge(array, start, middle, end); //put them back together
}
function merge(array, start, middle, end){
    for(var i = start; i < middle; i++){
        if(array[i] > array[middle]){
            var v = array[i];
            array[i] = array[middle];
            while(middle + 1 < end && array[middle+1] < v){
                var temp = array[middle];
                array[middle] = array[middle+1];
                array[middle+1] = temp;
                ++middle;
            }
            array[middle] = v;
        }
    }
}
//check run time
var array = [3,2,87,54,34,12,76,34,23]; //run any array you want to test
console.time('mergeSort')
merge_sort(array);
console.timeEnd('mergeSort')
