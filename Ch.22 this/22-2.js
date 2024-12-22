function Circle(radius) {
  // 생성 되기 이전 시점이므로 어떤 인스턴스를 생성할지 모름
  // ????.radius = radius;
}

Circle.prototype.getDiameter = function () {
  // 생성 되기 이전 시점이므로 어떤 인스턴스를 생성할지 모름
  // return 2 * ????.radius;
};

const circle = new Circle(5);