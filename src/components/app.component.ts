import {Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'news-app',
	templateUrl: './src/shared/templates/news-app-layout.component.html',
	styleUrls: ['./src/shared/styles/news-app.component.css'],
})


export class NewsAppComponent {
	constructor(public router: Router) {

	}

}