import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>

  `
})

export class AppComponent {
  selectedAnimal: Animal = null;
  masterAnimalList: Animal[] = [

  ];

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
