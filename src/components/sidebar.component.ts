import { Component , Input, OnInit} from '@angular/core';
import { NewsService } from '../services/news.service';
import { Source } from  '../models/Source';

@Component({
	selector: 'sources-sidebar',
	templateUrl: './src/shared/templates/sources-sidebar.component.html',
})

export class SourcesSidebarComponent implements OnInit {

	sources: Source[];

	@Input() filterSource: string;

	constructor(private provider: NewsService) {
		this.filterSource = "";
	}


	ngOnInit(){
		// this.sources = this.provider.getAvailableSources();
		this.provider.getNewsSources().subscribe(sources => {
			this.sources = sources;
		});
	}

	onFilterSourceChange(value) {
		console.log(this.filterSource);
	}
}