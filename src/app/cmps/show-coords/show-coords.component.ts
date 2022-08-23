import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-coords',
  templateUrl: './show-coords.component.html',
  styleUrls: ['./show-coords.component.scss']
})
export class ShowCoordsComponent implements OnInit {

  x: number = 0
  y: number = 0

  constructor() { }

  ngOnInit(): void {
      window.addEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove = ({ x, y }: MouseEvent) => {
      this.x = x
      this.y = y
  }

}
