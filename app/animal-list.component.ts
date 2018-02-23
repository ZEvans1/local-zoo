import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div>
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="young">Young Animals</option>
      <option value="mature">Mature Animals</option>
    </select>
  </div>

  <div>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">Species: {{currentAnimal.species}}<br>Name: {{currentAnimal.name}}<br>Age: {{currentAnimal.age}}<br>Diet: {{currentAnimal.diet}}<br>Location: {{currentAnimal.zooLocation}}<br>Number of Caretakers: {{currentAnimal.careTakerNumber}}<br>Sex: {{currentAnimal.sex}}<br>Likes: {{currentAnimal.likes}}<br>Dislikes: {{currentAnimal.dislikes}}<br>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal</button>
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
