import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Source } from '../../models/Source';
@Component({
  selector: 'top-navigation',
  templateUrl: './src/components/topbar/topbar.component.html'
})

export class TopNavigationComponent implements OnInit {
	isCollapsed: boolean = true;
	sources: Source[];

	constructor(private newsProvider: NewsService) {

	}

	toggleCollapse(): void {
	  this.isCollapsed = !this.isCollapsed;
	}

	ngOnInit() {
		setTimeout(() => {
			this.newsProvider.getNewsSources().subscribe(
				sources => {
					this.sources = sources;
			});
		}, 700);
	}
}