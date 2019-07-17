import { Observable } from 'rxjs'; 

const observable = Observable.create(observer => {
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
const subscription2 =  observable.subscribe((value) => addItem(`Subscriber2 ${value}`));

subscription.add(subscription2);

setTimeout(() => subscription.unsubscribe(), 3000)




