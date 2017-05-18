import { Routes } from '@angular/router';
import {IndexNewsComponent} from './components/indexNews.component';
import {SourceNewsComponent} from './components/sourceNews.component';
import {SourceListComponent} from './components/sourceList.component';


export const routes: Routes = [
	{ path: "", component: IndexNewsComponent},
	{ path: "source/:id", component: SourceNewsComponent},
	{ path: "sources", component: SourceListComponent}
];