import {Component} from 'angular2/core';
import {video} from './video';

@Component({
  selector: 'playlist',
  templateUrl:'app/ts/playlist.component.html'
  inputs: ['videos']
})

export class playlistComponent{

  onSelect(vid:Video){
  console.log(JSON.stringify(vid));
  }
}
