// Program to implement iterative Binary Search
 
// A iterative binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1

function binarySearch(arr, x)
{  

    let h = 0;
    let t = arr.length - 1;
    let mid;

    while (t >= h) {
         mid = h + Math.floor((t - h) / 2);
  
        // If the element is present at the middle
        // itself
        if (arr[mid] == x){
            return mid;
        }
            
  
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x){
            t = mid - 1;
        }
             
        // Else the element can only be present
        // in right subarray
        else{
            h = mid + 1;
        }

        counter++;
            
    }
  
    // We reach here when element is not
    // present in array
    return -1;
}
 
