import { Observable, of } from 'rxjs'; 
import { share, switchMap, } from 'rxjs/operators';
import {fromFetch} from 'rxjs/fetch';

// const hotObservable = of('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty').pipe(switchMap(url => fromFetch(url)), share());

// const sub1 = hotObservable.subscribe(console.log);
// const sub2 = hotObservable.subscribe(console.log);

const codeObservable = of('https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty').pipe(switchMap(url => fromFetch(url)));

const sub1 = codeObservable.subscribe(console.log);
const sub2 = codeObservable.subscribe(console.log);