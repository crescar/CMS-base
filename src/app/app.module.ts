import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Menu1Component } from './menus/menu1/menu1.component';
import { Menu2Component } from './menus/menu2/menu2.component';
import { Header1Component } from './headers/header1/header1.component';
import { Header2Component } from './headers/header2/header2.component';
import { Card1Component } from './cards/card1/card1.component';
import { Card2Component } from './cards/card2/card2.component';
import { ComponenLoadDirective } from './directivas/componen-load.directive';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    Menu1Component,
    Menu2Component,
    Header1Component,
    Header2Component,
    Card1Component,
    Card2Component,
    ComponenLoadDirective,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
