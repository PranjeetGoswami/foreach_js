class counter {
    constructor(){
        this.sum = 0;
        this.count = 0;
    }
    add(array){
        array.forEach(function
            countEntry(entry){
                this.sum += entry;
                ++this.count;
        },this);
    }
}