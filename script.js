class Vechicle {
    constructor(name, color, wheels) {
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }

    getPropsString() {
        let prop1 = "name has a value of " + this.name;
        let prop2 = "color has a value of " + this.color;
        let prop3 = "number of wheels has a value of " + this.wheels;
        return prop1 + ', ' + prop2 + ', ' + prop3;
    }

    logTypeAndProps() {
        console.log("Vehicle specs : " + this.getPropsString());
    }
}
var v = new Vechicle("BMW", "red", 4);

v.logTypeAndProps();

// console.log("name: " , v.name);
// console.log("color: " , v.color);
// console.log("wheels: " , v.wheels);
// console.log(v.getPropsString())

