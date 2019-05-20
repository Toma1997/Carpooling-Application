/* Modul za registraciju Angular Material komponenti */

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

@NgModule ({
imports: [MatButtonModule],
exports: [MatButtonModule]
})

export class MaterialModule {

}