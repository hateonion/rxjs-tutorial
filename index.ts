import { Observable, interval } from 'rxjs'; 
import { map } from 'rxjs/operators';

const observable = interval(1000).pipe(map(value => value * 10));

const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

const subscription = observable.subscribe(addItem);