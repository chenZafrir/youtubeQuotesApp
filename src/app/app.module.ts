import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { AppComponent } from './app.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { PlayerComponent } from './player/player.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    PlayerComponent,
    QuotesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
