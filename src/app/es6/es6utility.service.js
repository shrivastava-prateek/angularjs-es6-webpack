export default class ES6Service {

    constructor() {

        console.log('==inside es6 service==');
    }

    toggleButton(flag){
        this.flag = !flag;
        return this.flag;
    }
} 

/* export default function(flag){
    this.flag = !flag;
    return this.flag;
} */