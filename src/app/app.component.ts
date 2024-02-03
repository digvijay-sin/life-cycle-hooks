import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'life-cycle-hooks';
  inputVal: string[] = ['Hello', 'Hi Dev'];
  toDestroy: boolean = false

  public onBtnClicked(inputRef: HTMLInputElement) {
    this.inputVal.push(inputRef.value);
  }

  public createAndDestroy(){
    this.toDestroy = !this.toDestroy;
  }

  public constructor() {
    console.log('App Component constructor is called')
    console.log(this.title)
    console.log(this.inputVal);
  }

  ngOnInit(): void {
    console.log('App  Oninit Hook called');
  }

  ngDoCheck() {
    console.log('App ngDoCheck Hook called')
  }
  
  ngAfterViewInit() {
    console.log('App ngAfterViewInit called');
  }

  ngAfterViewChecked(){
    console.log('App ngAfterViewChecked called');
  }
}
