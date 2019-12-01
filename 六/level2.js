class Father {
    constructor(name){
        this.name = name;
    }
            setage(age){
                this.age = age;
            }
            setheight(height){
                this.height = height;
            }
            getage(){
                return this.age;
            }
            getheight(){
                return this.height;
            }
}
class Child extends Father{
    constructor(name){
        super(name);
    }
}
let child = new Child("李华")
child.setage("18");
child.setheight("180cm")
console.log(child)