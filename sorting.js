function insertsort(arr){
    for(let i=1 ; i<arr.length;i++){
        let currentelement = arr[i];
        let lastindex = i-1 ;
        while(lastindex >= 0 && arr[lastindex] > currentelement){
            lastindex--;
        }
        arr[lastindex + 1 ]= currentelement ;
    }

    return arr ;
}
