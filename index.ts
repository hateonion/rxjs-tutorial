import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';


const addItem = (value: string) => {
  const parent = document.querySelector('ul');
  const ele = document.createElement('li');
  ele.textContent = value;
  parent.appendChild(ele);
}

