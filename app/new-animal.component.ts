import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Add an animal to the list</h2>
  <div class="animal-form">
    <label>Animal Species</label>
    <input #newSpecies>
    <br>
    <label>Name</label>
    <input #newName>
    <br>
    <label>Age</label>
    <input #newAge>
    <br>
    <label>Diet</label>
    <input #newDiet>
    <br>
    <label>Location</label>
    <input #newZooLocation>
    <br>
    <label>Number of Caretakers</label>
    <input #newCareTakerNumber>
    <br>
    <label>Sex</label>
    <input #newSex>
    <br>
    <label>Likes</label>
    <input #newLikes>
    <br>
    <label>Dislikes</label>
    <input #newDislikes>
    <br>
  </div>
  <br>
  <button class="animal-form btn btn-outline-secondary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newZooLocation.value, newCareTakerNumber.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newZooLocation.value=''; newCareTakerNumber.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, zooLocation: string, careTakerNumber: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, zooLocation, careTakerNumber, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
