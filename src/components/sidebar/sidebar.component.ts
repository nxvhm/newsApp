import { Component , Input, OnInit, OnDestroy} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Source } from  '../../models/Source';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';

@Component({
	selector: 'sources-sidebar',
	templateUrl: './src/components/sidebar/sources-sidebar.component.html',
})

export class SourcesSidebarComponent implements OnInit {

	sources: Source[];
	routeParams: {};

	@Input() filterSource: string;

	constructor(private provider: NewsService, private router: Router, private route: ActivatedRoute) {}


	ngOnInit(){
		this.routeParams = {};

		this.provider.getNewsSources().subscribe(sources => {
			this.sources = sources;
		});

		this.router.events
		.filter(event => event instanceof NavigationEnd)
		.map(() => this.route)
		.map(route => {
		    while (route.firstChild) route = route.firstChild;
		    return route;
		})
		.filter(route => route.outlet === 'primary')		
		.subscribe(event => {
				this.routeParams = event.params;
		});

	}

	onFilterSourceChange(value) {
		//console.log(this.filterSource);
	}

}