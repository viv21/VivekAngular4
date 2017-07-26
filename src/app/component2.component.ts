import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component2',
  template: `
    <p>
      component2 Works!
    </p>
    Enter Text <input id="component2" #component2 value="{{text}}">
  `,
  styles: []
})
export class Component2Component {
@Input() text:string
}
