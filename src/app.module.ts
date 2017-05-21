import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NewsAppComponent } from './components/app.component';
import { IndexNewsComponent } from './components/indexNews/indexNews.component';
import { SourceNewsComponent } from './components/sourceNews/sourceNews.component';
import { SourceListComponent } from './components/sourcesList/sourceList.component';
import { SourcesSidebarComponent } from './components/sidebar.component';
import { TopNavigationComponent } from './components/topbar/topbar.component';
import {routes} from './app.routes';

import { NewsService } from './services/news.service';

@NgModule({
	imports: [
		BrowserModule, RouterModule.forRoot(routes), 
		HttpModule,
	],
	declarations: [
		TopNavigationComponent,
		SourcesSidebarComponent,
		NewsAppComponent, 
		IndexNewsComponent, 
		SourceNewsComponent, 
		SourceListComponent,
	],
	providers: [ NewsService ],
	bootstrap: [NewsAppComponent]
})

export class NewsAppModule{}