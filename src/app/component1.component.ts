import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  template: `
    <p>
      component1 Works!
    </p>
    Enter Text <input id="component1" #component1 value="{{text}}">
    <button (click)="setText(component1.value)">Click</button>
    <app-component2 [text]="text"></app-component2>
  `,
  styles: []
})
export class Component1Component {
  @Input() text:string;

  setText(text:string):void{
      this.text=text;
  }

}
