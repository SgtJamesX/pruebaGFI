import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfirmDialogModule,
    TableModule,
    ToastModule,
    DialogModule
  ],
  exports: [
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
