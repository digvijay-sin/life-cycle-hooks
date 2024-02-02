import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CommonEngine } from '@angular/ssr';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnChanges, OnInit {

  @Input() message: string[]  = [];
  @ViewChild('tempRef') tempPara : ElementRef | undefined; // we can store the ref of element para using viewChild Decorator
  title = 'title'
  ngOnInit(): void {
    console.log('ngOnInit Hook is Called - Demo Component is created & input properties are updated')
    console.log(this.tempPara);
  } 
 
  public constructor(){
    console.log('Demo component constructor is called')
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Hook Called - data-bound input properties are updated ')
    console.log(changes);
  }

}
