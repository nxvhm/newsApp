import { Routes } from '@angular/router';
import {IndexNewsComponent} from './components/indexNews/indexNews.component';
import {SourceNewsComponent} from './components/sourceNews/sourceNews.component';
import {SourceListComponent} from './components/sourcesList/sourceList.component';


export const routes: Routes = [
	{ path: "", component: SourceListComponent},
	{ path: "source/:id", component: SourceNewsComponent}
	//{ path: "sources", component: SourceListComponent}
];