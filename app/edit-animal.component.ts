import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="edit-form">
      <div *ngIf="childSelectedAnimal">
      <h4>Editing Details For: {{childSelectedAnimal.name}}</h4>
        <label>Edit Name</label>
        <input [(ngModel)]="childSelectedAnimal.name">
        <br>
        <label>Edit Age</label>
        <input [(ngModel)]="childSelectedAnimal.age">
        <br>
        <label>Edit Caretaker Number</label>
        <input [(ngModel)]="childSelectedAnimal.careTakerNumber">
        <br>
        <button (click)="doneButtonClicked()">Done Editing</button>
        <hr>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
