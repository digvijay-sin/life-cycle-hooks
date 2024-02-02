import { Component } from '@angular/core';
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

export class AppComponent {
  title = 'life-cycle-hooks';
  inputVal : string[] = ['Hello', 'Hi Dev'];

  public onBtnClicked(inputRef : HTMLInputElement){
      this.inputVal.push(inputRef.value);
  }

  public constructor() {
    console.log('App Component constructor is called')
  }
}
