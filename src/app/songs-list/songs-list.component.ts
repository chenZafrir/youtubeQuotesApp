import { Component, EventEmitter, OnInit, ViewChildren } from '@angular/core';
import { ApiService } from '../services/apiService/api.service';
import { SongPlayerService } from '../services/songPlayerService/song-player.service'
import { ISong } from '../contracts/ISongs';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  public songs:Array<ISong> = [];
  public filteredSongs:Array<ISong> = [];
  public searchQuery: string;


  constructor(
    private apiService:ApiService,
    private songPlayerService:SongPlayerService) { }

  ngOnInit(): void {
    let getAllSongsSubscription = this.apiService.getAllSongs();
    getAllSongsSubscription.subscribe((_songs:Array<ISong>)=>{
      this.songs = _songs;
    })
  }

  public songClick(_song){
    this.songPlayerService.songChanged(_song);
  }
}
