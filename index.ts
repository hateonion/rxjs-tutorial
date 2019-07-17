import { Subject } from 'rxjs'; 
import { share } from 'rxjs/operators';

const subject = new Subject();

const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

const subscription = subject.subscribe(addItem);

subject.next('I am a Subject');

const subscription2 = subject.subscribe(value => addItem(`Subscriber2: ${value}`));

subject.next('Heelo');