import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { LoggingService } from './services/logging.service';
import { initializeApp } from 'firebase/app'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { FilterPipe } from './filter.pipe';

const firebaseConfig = {
	apiKey: 'AIzaSyB9SJGNXRkZtrkAMHaw6yUQdXXFZKFSyuQ',
	authDomain: 'nn-angular-92468.firebaseapp.com',
	databaseURL:
		'https://nn-angular-92468-default-rtdb.firebaseio.com',
	projectId: 'nn-angular-92468',
	storageBucket: 'nn-angular-92468.appspot.com',
	messagingSenderId: '703240735716',
	appId: '1:703240735716:web:2e399d5961e5fd638455f1',
}

const app = initializeApp(firebaseConfig);

const APP_ROUTES: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'directory',
		component: DirectoryComponent
	},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(APP_ROUTES),
	FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent], 
})
export class AppModule { }
