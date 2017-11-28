import { NgModule } from '@angular/core';
import { 
  MatInputModule,
  MatFormFieldModule, 
  MatDatepickerModule, 
  MatNativeDateModule,
  MatCardModule,
  MatExpansionModule
} from "@angular/material";

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule
  ]
})
export class MaterialModule { }
