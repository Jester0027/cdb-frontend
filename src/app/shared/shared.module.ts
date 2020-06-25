import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AnimalAgePipe } from './pipes/animal-age.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingSpinnerComponent, AnimalAgePipe],
  exports: [LoadingSpinnerComponent, AnimalAgePipe]
})
export class SharedModule {}
