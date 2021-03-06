import {Component} from '@angular/core';
import { NewsService } from '../../services/news.service';
import { OnInit } from '@angular/core';

@Component({
	selector: 'sources-list',
	templateUrl: './src/components/sourcesList/sources-list.component.html',
})
// Displaying available news sources
export class SourceListComponent implements OnInit{

	sources = [];

	constructor(private newsProvider: NewsService) {

	}


	/**
	 * [ngOnInit description]
	 * Check if sources list is available in localStorage and not expired
	 * if available  bind it to view, else retrieve the list from
	 * api
	 */
	ngOnInit() {
		this.newsProvider.getNewsSources().subscribe(sources => {
			this.sources = sources;
		});
	}
}