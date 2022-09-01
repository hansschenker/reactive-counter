import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from './store.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [Store]
})
export class StoreModule { }
