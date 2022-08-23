import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {

  //emits:  

  //props:
  // @Input() testprop:number|null =null

  constructor() {}

  //data:
  time = new Date()
  isDark: boolean = false

  //created:
  ngOnInit(): void {
    setInterval(()=>{
      this.time = new Date()
    },1000)
  }

  //methods:
  onToggleDarkMode = () => {
          this.isDark = !this.isDark
  }

  //computed(getters):
  get seasonImgUrl() {
      const seasons = ['winter', 'spring', 'summer', 'autumn']
      const currMonth = Math.floor((this.time.getMonth() / 12) * 4)
      let nowSeason = seasons[currMonth]
      var imgUrl = `../../assets/img/${nowSeason}.png`

      return imgUrl
  }

  get timee(){
    return new Date(Date.now()).toLocaleTimeString()
  }

}
