nums1 = [1,2,3,4,1]
nums2 = [1,2,3,4]

var containsduplicate = function (nums1) {
    var s = new Set(nums1)
    console.log(s);
    if(s.size !== nums1.length){
        return true
    }
    else{
        return false
    }
    
}

console.log(containsduplicate(nums1));
