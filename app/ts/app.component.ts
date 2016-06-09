import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {playlistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [playlistComponent]
})

export class AppComponent {
mainHeading = Config.MAIN_HEADING;
videos:Array<Video>;

  constructor(){
    this.videos = [
      new Video(1, "1965 bug project, first views.", "dbgnu8DddKE", "1965 Bug First Views"),
      new Video(2, "1965 bug time lapse", "OpLSe-K45Bs", "1965 Volkswagen Beetle, Project pick up time-lapse"),
    ]
  }
}
