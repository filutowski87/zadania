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