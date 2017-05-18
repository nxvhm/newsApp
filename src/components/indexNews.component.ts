import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { OnInit } from '@angular/core';

@Component({
	selector: 'index-news',
	templateUrl: './src/shared/templates/index-news.component.html',
})
// Display index news
export class IndexNewsComponent implements OnInit {
	constructor(private newsProvider: NewsService) {}

	logIt(){
		this.newsProvider.log();
	}

	  ngOnInit() {
	    this.logIt();
	  }
}