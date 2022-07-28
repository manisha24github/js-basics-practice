import Vehicle from "./Vehicle";

class Car extends Vehicle {
  // TODO
  lockDoors() {}

  logTypeAndProps() {
    console.log("Car specs :" + this.getPropsString());
  }
}
export default Car;
