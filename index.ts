import { Observable, of } from 'rxjs'; 
import { share, switchMap, } from 'rxjs/operators';
import {fromFetch} from 'rxjs/fetch';

const coldObservable = of('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty').pipe(switchMap(url => fromFetch(url)), share());

const sub1 = coldObservable.subscribe(console.log);
const sub2 = coldObservable.subscribe(console.log);