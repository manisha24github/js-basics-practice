class Vehicle {
    // TODO
    constructor(name, color, wheels) {
      this.name = name;
      this.color = color;
      this.wheels = wheels;
    }
  
    getPropsString() {
      let prop1 = "name has a value of " + this.name;
      let prop2 = "color has a value of " + this.color;
      let prop3 = "number of wheels has a value of " + this.wheels;
      return prop1 + ", " + prop2 + ", " + prop3;
    }
  
    logTypeAndProps() {
      console.log("Vehicle specs : " + this.getPropsString());
    }
  }
  
  export default Vehicle;
  