import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="animal-form">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="young">Young Aniamls</option>
      <option value="mature">Mature Animals</option>
    </select>
  </div>

  <div class="animal-list">
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.species}}<br>{{currentAnimal.name}}<br>{{currentAnimal.age}}<br>{{currentAnimal.diet}}<br>{{currentAnimal.zooLocation}}<br>{{currentAnimal.careTakerNumber}}<br>{{currentAnimal.sex}}<br>{{currcurrentAnimal.likes}}<br>{{currentAnimal.dislikes}}</li>
    </ul>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
