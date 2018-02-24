import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="age-select">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="young">Young Animals</option>
      <option value="mature">Mature Animals</option>
    </select>
  </div>

  <div class="animal-list">
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge"><strong>Species</strong>: {{currentAnimal.species}}<br><strong>Name</strong>: {{currentAnimal.name}}<br><strong>Age</strong>: {{currentAnimal.age}}<br><strong>Diet</strong>: {{currentAnimal.diet}}<br><strong>Location</strong>: {{currentAnimal.zooLocation}}<br><strong>Number of Caretakers</strong>: {{currentAnimal.careTakerNumber}}<br><strong>Sex</strong>: {{currentAnimal.sex}}<br><strong>Likes</strong>: {{currentAnimal.likes}}<br><strong>Dislikes</strong>: {{currentAnimal.dislikes}}<br>
      <button class="btn btn-outline-primary" (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
      </li>
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

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
