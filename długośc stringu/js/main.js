let nav = 'Uwielbiam JavaScript';
let nav2 = 'Jestem świetnym programistą';

function porownaj(arg1, arg2 ) {
    if (arg1.length > arg2.length) {
        return arg1;

    }else{ 
        return arg2;
    }
    
}
console.log(porownaj(nav, nav2));



const arr = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]
function sort(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j + 1]){
            let bubble = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = bubble;
        }
    }
}
console.log(arr);
}
sort(arr);