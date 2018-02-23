import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Add an animal to the list</h2>
  <div class="animal-form">
    <label>Animal Species</label>
    <input #newSpecies>
    <label>Animal Name</label>
    <input #newName>
    <label>Animal Age</label>
    <input #newAge>
    <label>Animal Diet</label>
    <input #newDiet>
    <label>Animal Location</label>
    <input #newZooLocation>
    <label>Number of Caretakers</label>
    <input #newCareTakerNumber>
    <label>Animal Sex</label>
    <input #newSex>
    <label>Animal Likes</label>
    <input #newLikes>
    <label>Animal Dislikes</label>
    <input #newDislikes>
  </div>
  <br>
  <button class="animal form btn btn-outline-secondary" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newZooLocation.value, newCareTakerNumber.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newZooLocation.value=''; newCareTakerNumber.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';"></button>  
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, zooLocation: string, careTakerNumber: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, zooLocation, careTakerNumber, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
