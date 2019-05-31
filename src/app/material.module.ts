/* Modul za registraciju Angular Material komponenti */

import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatIconModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule} from '@angular/material';




@NgModule ({
imports: [MatButtonModule],
exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
]
})

export class MaterialModule {

}