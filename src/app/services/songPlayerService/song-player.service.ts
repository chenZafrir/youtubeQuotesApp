import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SongPlayerService {

  public _songSelected = new Subject<any>();
  songItem$ = this._songSelected.asObservable();
  public _quoteSelected = new Subject<any>();
  offset$ = this._quoteSelected.asObservable();
  
  constructor() { }


  public songChanged(song){
    this._songSelected.next(song);
  }

  public quoteSelected(offset:number){
    this._quoteSelected.next(offset);
  }
}
