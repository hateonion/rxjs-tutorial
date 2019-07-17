import { Observable } from 'rxjs'; 

const observable = Observable.create(observer => {
  observer.next('Start');
  observer.next('Yeah');
  setInterval(()=> {
    observer.next('I am alive')
  }, 1000)
})

const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

const subscription = observable.subscribe(addItem);
setTimeout(()=> observable.subscribe((value) => addItem(`Subscriber2 ${value}`)), 2000);