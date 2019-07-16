import { Observable } from 'rxjs'; 

const observable = Observable.create(observer => {
  observer.next('foo');
  observer.next('bar');
  observer.complete();
  observer.next('foobar');
})


const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

observable.subscribe(addItem, f=>f, ()=> addItem('complete'));


