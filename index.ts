import { AsyncSubject } from 'rxjs'; 
import { share } from 'rxjs/operators';

const subject = new AsyncSubject();

const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

const subscription = subject.subscribe(addItem);

subject.next('I am a Subject');
subject.next('I am also a Observable');
subject.next('And I am hot');

const subscription2 = subject.subscribe(value => addItem(`Subscriber2: ${value}`));

subject.complete();
subject.next('Heelo');