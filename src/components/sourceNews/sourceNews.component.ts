import {Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Article } from '../../models/Article';
import { Source } from '../../models/Source';

@Component({
	selector: 'source-news',
	templateUrl: './src/components/sourceNews/source-news.component.html',
})
// Display list of news from selected source
export class SourceNewsComponent implements OnInit {

	  sourceId: string;
	  source: Source;
	  articles: Article[];
	  private routeData: any;

	constructor(private newsProvider: NewsService, private route: ActivatedRoute) {}

	  ngOnInit() {
	  	this.route.params.subscribe(params => {
	  		this.sourceId = params.id;
	  		this.setSource(this.sourceId);
	  		this.loadSourceNews(this.sourceId, this.source);
	  	});
	  }

	  ngOnDestroy() {

	  }


	  loadSourceNews(sourceId: string, source: Source){
	  	this.newsProvider.fetchArticlesFromServer(sourceId, source).subscribe(articles => {
	  		this.articles = articles;
	  	});
	  }

	  setSource(sourceId: string) {
	  	this.newsProvider.getNewsSources().subscribe(sources =>{
	  		for (let source of sources) {
	  			if (source.id == sourceId) {
	  				this.source = source;
	  			}
	  		}
	  	});
	  }

}