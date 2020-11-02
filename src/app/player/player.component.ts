import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SongPlayerService } from '../services/songPlayerService/song-player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public player: YT.Player;
  public songTitle = '';
  public id: string = '';

  constructor(
    private songPlayerService:SongPlayerService) {
     }

  ngOnInit(): void {
    this.songPlayerService.songItem$.subscribe(song => {
      this.id = song.youtubeId;
      this.songTitle = song.title;
      this.player.loadVideoById(this.id);
    })
    this.songPlayerService.offset$.subscribe(offset =>{
      this.player.loadVideoById(this.id,offset);
    })
  }
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
