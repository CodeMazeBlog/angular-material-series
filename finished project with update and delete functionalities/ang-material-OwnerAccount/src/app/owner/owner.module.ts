import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing/owner-routing.module';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerDataComponent } from './owner-details/owner-data/owner-data.component';
import { AccountDataComponent } from './owner-details/account-data/account-data.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerUpdateComponent } from './owner-update/owner-update.component';
import { OwnerDeleteComponent } from './owner-delete/owner-delete.component';


@NgModule({
  declarations: [OwnerListComponent, OwnerDetailsComponent, OwnerDataComponent, AccountDataComponent, OwnerCreateComponent, OwnerUpdateComponent, OwnerDeleteComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OwnerModule { }
