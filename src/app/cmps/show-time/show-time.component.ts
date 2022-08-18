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
  time = new Date(Date.now()).toLocaleTimeString()

  //created:
  ngOnInit(): void {
    setInterval(()=>{
      this.time = new Date(Date.now()).toLocaleTimeString()
    },1000)
  }

  //methods:

  //computed(getters):
  get timee(){
    return this.time
  }

}
