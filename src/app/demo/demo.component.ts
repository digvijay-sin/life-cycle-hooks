import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component,
   ContentChild, DoCheck, ElementRef, Input, OnChanges, 
   OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked{

  @Input() message: string[]  = [];
  @ViewChild('tempRef') tempPara : ElementRef | undefined; // we can store the ref of element <p></p> using viewChild Decorator
  @ContentChild('temp') paraContent : ElementRef | undefined; // we can store the ref of projected content using contentChild Decorator

   title = 'title' 
 
  public constructor(){
    console.log('Demo component constructor is called')
    console.log(this.title);
    console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log('ngOnChanges Hook called - data-bound input properties are updated ')
    // console.log(changes);  
  }

  ngOnInit(): void {
    console.log('Demo ngOnInit Hook called ')
    console.log(this.tempPara);
  } 
  // Run for every change detection cycle
  ngDoCheck(){
    console.log('Demo ngDoCheck Hook called');
    console.log(this.tempPara);
    console.log(this.paraContent);
  }
  // this is called after the projected content has been fully initalized and is even called when there is no content to be projected
  ngAfterContentInit(){ 
    console.log('Demo ngAfterContentInit Hook called')
    console.log(this.tempPara);
    console.log(this.paraContent);
  }

  ngAfterContentChecked(){
    console.log('Demo ngAfterContentChecked Hook called');
    console.log(this.paraContent);
  }

}
