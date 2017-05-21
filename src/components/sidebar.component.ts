import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { OnInit } from '@angular/core';
import { Source } from  '../models/Source';

@Component({
	selector: 'sources-sidebar',
	templateUrl: './src/shared/templates/sources-sidebar.component.html',
})

export class SourcesSidebarComponent implements OnInit {

	sources: Source[];

	constructor(private provider: NewsService) {}


	ngOnInit(){
		// this.sources = this.provider.getAvailableSources();
		this.provider.getNewsSources().subscribe(sources => {
			this.sources = sources;
		});
	}
}