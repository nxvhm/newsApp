import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { OnInit } from '@angular/core';

@Component({
	selector: 'sources-sidebar',
	templateUrl: './src/shared/templates/sources-sidebar.component.html',
})

export class SourcesSidebarComponent implements OnInit {

	sources = [];

	constructor(private provider: NewsService) {}


	ngOnInit(){
		this.sources = this.provider.getAvailableSources();
	}
}