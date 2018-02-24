import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 class="border">Zoo Animal Tracker</h1>
    <p class="jumbotron">Enter information about an animal in the form below and it will appear in a list. The list can currently be filtered by animal age for young (< 2 years) or mature animals (2 or more years old). <br> <br> Details for an animal (name, age, and number of caretakers) can be changed by clicking the edit button below the information for that animal.<p>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>

  `
})

export class AppComponent {
  selectedAnimal: Animal = null;
  masterAnimalList: Animal[] = [

  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
