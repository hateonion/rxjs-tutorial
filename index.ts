import { Observable } from 'rxjs'; 
import { share } from 'rxjs/operators';

const observable = Observable.create(hot => {
  hot.next('Start');
  hot.next('Yeah');
  setInterval(()=> {
    hot.next('I am alive')
  }, 1000)
}).pipe(share());

const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

const subscription = observable.subscribe(addItem);
setTimeout(()=> observable.subscribe((value) => addItem(`Subscriber2 ${value}`)), 2000);