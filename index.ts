import { Observable } from 'rxjs'; 

const observable = Observable.create(stream => {
  stream.next('foo');
  stream.next('bar');
  stream.complete();
  stream.next('foobar');
})


const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

observable.subscribe(addItem)


