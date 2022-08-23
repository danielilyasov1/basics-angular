import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  // test:number|null=55;
  targetTime = Date.now() + 1000 * 13

  playAudio() {
    let audio = new Audio('../../assets/sounds/ding.mp3')
    audio.play()
  }
}
