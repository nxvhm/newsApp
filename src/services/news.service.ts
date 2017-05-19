import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams} from '@angular/http'
import 'rxjs/add/operator/map';
import { SourceListInterface } from '../models/interfaces';


@Injectable()
export class NewsService {

	endpoints = {
		'sources' : 'https://newsapi.org/v1/sources',
		'articles' : 'https://newsapi.org/v1/articles'
	};
	
	localStorageSupported: boolean;

	storage: any;


	log() {
		console.log('Im loggin fn() for NewsService');
	}

	constructor(private http: Http) {
		this.localStorageSupported = typeof window['localStorage'] != "undefined" && window['localStorage'] != null;
		if( this.localStorageSupported ) {
			this.storage = window.localStorage;
		}
	}

	fetchSourcesFromServer(){
		let params = new URLSearchParams();    	
		params.set("apiKey", "ab49efb84d3d4ab789ec7b7f12a290d6");
		params.set('language', "en");
		let requestOptions = new RequestOptions();
		requestOptions.search = params;

		return this.http.get(this.endpoints['sources'], requestOptions).map(
			(response) => response.json()	
		);
	}

	updateSourcesList() {
		this.fetchSourcesFromServer().subscribe(
			(data) => {
				var dataExpiration = new Date();
				dataExpiration.setTime(dataExpiration.getTime() + (20*60*1000));
				this.storage.setItem('sourcesList', JSON.stringify({data:data, expiration: dataExpiration}));
			}
		);
	}

	getAvailableSources(){

		if (this.storage.getItem('sourcesList') == null) {

			this.updateSourcesList();
			
			return JSON.parse(this.storage.getItem('sourcesList'));

		} else {
			var listData = JSON.parse(this.storage.getItem('sourcesList'));

			var currentDate = new Date();

			if (currentDate > listData.expiration) {
				console.log('Update news sources in LS with API Call');
				this.updateSourcesList();
			}


			listData = JSON.parse(this.storage.getItem('sourcesList'));	
			
			return listData.data;		

		}
	}

	fetchArticlesFromServer(){
		let params = new URLSearchParams();    	
		params.set("apiKey", "ab49efb84d3d4ab789ec7b7f12a290d6");
		let requestOptions = new RequestOptions();
		requestOptions.search = params;

		return this.http.get(this.endpoints['articles'], requestOptions).map(
			(response) => response.json()	
		);
	
	}

}