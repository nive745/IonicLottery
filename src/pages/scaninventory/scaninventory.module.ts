import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanInventoryPage } from './scaninventory';

@NgModule({
  declarations: [
    ScanInventoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanInventoryPage),
  ],
})
export class ScanInventoryModule {}
