const circle = {
  radius: 2,
  get area() {
    return this.radius * this.radius * Math.PI;
  },
  set Radius(value) {
    if (typeof value !== "number" || !(value > 0))
      console.log("Please enter a positive integer");

    this.radius = value;
  },
};

console.log(circle);

circle.Radius = 5;

console.log(circle);
