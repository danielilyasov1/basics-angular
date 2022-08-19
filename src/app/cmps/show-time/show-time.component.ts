import { Component, Input, OnInit } from '@angular/core';

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
  isDark = false

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
  get season() {
      const seasons = ['winter', 'spring', 'summer', 'autumn']
      const currMonth = Math.floor((this.time.getMonth() / 12) * 4)
      return seasons[currMonth]
  }
  get timee(){
    return new Date(Date.now()).toLocaleTimeString()
  }

}
