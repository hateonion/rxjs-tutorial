import { Observable, Observer } from "rxjs";

const observable: Observable<string> = Observable.create(it => {
  it.next("foo");
  it.next("bar");
});

const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

const observer: Observer<string> = {
  next: addItem,
  error: f => f,
  complete: console.log
};


observable.subscribe(observer)


