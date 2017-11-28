import { NgModule } from '@angular/core';
import { 
  MatInputModule,
  MatFormFieldModule, 
  MatDatepickerModule, 
  MatNativeDateModule,
  MatCardModule,
  MatExpansionModule,
  MatListModule,
  MatDialogModule
} from "@angular/material";

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
