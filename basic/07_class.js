// 세상에 있는 모든것은 객체로 표현 할 수 있다
// 객체지향프로그래밍

// class
// - 일종의 템플릿
// - 한 번만 선언
// - class에는 데이터가 없다

// object
// - class의 인스턴스
// - 복수 생성
// - 실제 데이터 존재
// class를 선언하는건 object를 만든다는것

// 1. 클래스 선언
class Car {
constructor(name, color){  //생성자
this.name = name  //필드
this.color = color  //필드
}



start() {
console.log(`${this.name} is start!!`);
}

stop() {
console.log(`${this.name}is stop~~`);
}

}

const myCar = new Car('sonata', 'white')


console.log(myCar.name)
console.log(myCar.color)
myCar.start()
myCar.stop()

const oldCar = new Car('pony', 'color')
console.log(oldCar.name);
console.log(oldCar.color);


// Getter and Stter
class Person{
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  get age(){
    return this._age

  }

  set age(value) {
    this._age = value < 0 ? 0 : value
  }
}

const boy = new Person('jonh', -2)
console.log(boy.name);
console.log(boy.age);

// 3.상속과 다양성
// extends
class phone{
  constructor(name, screen, color) {
  this.name = name
  this.screen = screen
  this.color = color
}

  on () {
    console.log(`${this.name} is turn on!!`);
  }

  off () {
    console.log(`${this.name} is turn off~~~~`);
  }
}

class Samsung extends Phone {}
const galaxy = new Samsung('Galaxy 10', 'led', 'white')
galaxy.on()
galaxy.off()


class Apple extends Phone{
  on () {
    supper.on()
    console.log(`아이폰이 켜졌습니다`);
  }

  off(){
    console.log(`아이폰이 꺼졌습니다`);

  }
}

const iphone = new Apple('iphone X', 'lcd', 'gray')

iphone.on()
iphone.off()
