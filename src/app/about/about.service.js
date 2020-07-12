export default class AboutService {

    constructor() {

        console.log('==inside about service==');
    }

    toggleButton(flag){
        this.flag = !flag;
        return this.flag;
    }
}