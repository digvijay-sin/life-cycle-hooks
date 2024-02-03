import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
   ContentChild, DoCheck, ElementRef, Input, OnChanges, 
   OnInit, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss'
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

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
    console.log('ngOnChanges Hook called - data-bound input properties are updated ')
    console.log(changes);  
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
    // @ContentChild paraContent property is updated just after the projected content has fully initialized or just before the ngAfterContentInit is invoked
    console.log(this.paraContent);
  }
  // For every change in the view of the component the @ContentChild & @ContentChildren annotated property are updated first after then this hook is called for that change detection cycle
  ngAfterContentChecked(){
    console.log('Demo ngAfterContentChecked Hook called');
    console.log(this.tempPara);
    console.log(this.paraContent);
  }
  // This hook is invoked after the view template of this component and the view template of its all child component has been initailized
  ngAfterViewInit(){
    console.log('Demo ngAfterViewInit called')
    // @ViewChild and @ViewChildren annotated properties are updated before raising/calling this hook
    console.log(this.tempPara);
  }
  // For every change in the view of the component the @ViewChild & @ViewChildren annotated property are updated first after then this hook is called for that change detection cycle
  ngAfterViewChecked(){
    console.log('Demo ngAfterViewChecked called');
    console.log(this.tempPara);
  }
  // This hook is great for clean up work like unsbuscribe from an observable or detach event handler etc. as this hook is called right before the component is destroyed
  ngOnDestroy(){
    console.log('Demo ngOnDestroy Hook called')
  }
   
}
