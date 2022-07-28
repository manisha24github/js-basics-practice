import Vehicle from "./Vehicle";

class Motorcycle extends Vehicle {
  // TODO
  logTypeAndProps() {
    console.log("Motorcycle specs :" + this.getPropsString());
  }
}

export default Motorcycle;