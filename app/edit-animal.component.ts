import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="edit-form">
      <div *ngIf="childSelectedAnimal">
        <h5>Animal Details: </h5>
        <label>Edit Name</label>
        <input [(ngModel)]="childSelectedAnimal.name">
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
