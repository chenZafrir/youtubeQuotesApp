import { Component, OnInit } from '@angular/core';
import { SongPlayerService } from '../services/songPlayerService/song-player.service';
import { ISong } from '../contracts/ISongs';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  public songQuotes:Array<any> = [];

  constructor(private songPlayerService: SongPlayerService) { }

  ngOnInit(): void {
    this.songPlayerService.songItem$.subscribe((song:ISong) => {
      this.songQuotes = song.quotes;
    })
  }

  public skipToOffset(offset: number){
    this.songPlayerService.quoteSelected(offset);
  }
}
