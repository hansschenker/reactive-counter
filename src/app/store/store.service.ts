import { Injectable, OnDestroy } from '@angular/core';

// rxjs
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { map, distinctUntilKeyChanged, scan, share } from 'rxjs/operators';

@Injectable()
export class Store<T> implements OnDestroy {
  private _store: BehaviorSubject<T>;
  private _stateUpdate = new Subject<T>();
  private _subs: Subscription = new Subscription();

  constructor() {
    this._store = new BehaviorSubject({} as T);
    this._subs.add(
      this._stateUpdate
        .pipe(
          scan((current, updated) => {
            return { ...current, ...updated };
          })
        )
        .subscribe(this._store)
    );
  }

  selectStateSlice(key: keyof T) {
    return this._store.pipe(
      distinctUntilKeyChanged(key),
      map((state) => state[key])
    );
  }

  updateState(newState: T) {
    this._stateUpdate.next(newState);
  }

  updateStateSlice(newState: T, key: keyof T) {
    //@ts-ignore
    this._stateUpdate.next(newState[key]);
  }

  stateChanges() {
    return this._store.asObservable();
  }
  ngOnDestroy() {
    this._subs.unsubscribe();
    console.log('Store unsubscribed');
  }
}
