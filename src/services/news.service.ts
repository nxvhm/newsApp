import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams} from '@angular/http'
import 'rxjs/add/operator/map';
import { SourceListInterface } from '../models/interfaces';


@Injectable()
export class NewsService {

	endpoints = {
		'sources' : 'https://newsapi.org/v1/sources'
	};

	log() {
		console.log('Im loggin fn() for NewsService');
	}

	constructor(private http: Http) {

	}

	fetchAvailableSources(){
		
		let params = new URLSearchParams();    	
		params.set("apiKey", "ab49efb84d3d4ab789ec7b7f12a290d6");
		params.set('language', "en");
		let requestOptions = new RequestOptions();
		requestOptions.search = params;

		return this.http.get(this.endpoints['sources'], requestOptions).map(
			(response) => response.json()	
		);
	}
}