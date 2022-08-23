import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
    // PROPS
    // @input:
    @Input() targetTime!: number

    // EMMIT
    // @output:
    @Output() due = new EventEmitter<void>()

    constructor() { }


    // DATA
    time!: number
    intervalId!: number
    isFinal = false

    // CREATED
    ngOnInit(): void {
        this.time = this.targetTime - Date.now()
        this.intervalId = window.setInterval(this.setTime, 1000)
    }

    // COMPUTED
    get timeDisplay() {
        return this.time
    }

    // METHODS
    setTime = () => {
        this.time = this.targetTime - Date.now()
        if (this.time < 11000) this.isFinal = true
        if (this.time <= 1000) {
            clearInterval(this.intervalId)
            this.due.emit()
        }
    }


}
