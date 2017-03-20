import { Observable } from 'rxjs';

let numbers = [1, 23, 4]
let sourse = Observable.from(numbers);

class MyObserver {
  next(value) {
    console.log(`value: ${value}`)
  }
  error(error) {
    console.log(`error: ${error}`);
  }
  complete() {
    console.log(`complete`);
  }
}

sourse.subscribe(new MyObserver())
