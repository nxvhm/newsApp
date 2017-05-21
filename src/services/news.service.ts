import { Http, RequestOptions, URLSearchParams} from '@angular/http'
import { Injectable } 	from '@angular/core';
import { Observable } 	from 'rxjs/Observable';
import { Source } from  '../models/Source';
import { Article } from  '../models/Article';

import 'rxjs/add/operator/map';

@Injectable()
export class NewsService {

	endpoints = {
		'sources' : 'https://newsapi.org/v1/sources',
		'articles' : 'https://newsapi.org/v1/articles'
	};

	private apiKey: string;
	storage: any;


	log() {
		console.log('Im loggin fn() for NewsService');
	}

	constructor(private http: Http) {
		this.storage = window.localStorage;
		this.apiKey = "ab49efb84d3d4ab789ec7b7f12a290d6";
	}

	/**
	 * Get available news sources 
	 * Check if data available in localStorage otherwise call api and save
	 * result in localStorage
	 * @return {Observable<Source[]>} List of Sources
	 */
	getNewsSources() : Observable<Source[]>{

		var storageData = this.storage.getItem('sourcesList');

		// If sources are in localStorage return them as observable
		if (storageData != null && storageData != undefined && storageData != 'null') {

			var listData = JSON.parse(storageData);
			var currentDate = new Date();
			if (currentDate < new Date(listData.expiration)) {
				return Observable.create(
					observer => {
						observer.next(listData.data); 
						observer.complete();
				});
			}
		}
		
		// Get Sources from API and save them in localStorage
		let params = new URLSearchParams();   

		params.set("apiKey", this.apiKey);
		params.set('language', "en");

		let requestOptions = new RequestOptions();
		requestOptions.search = params;

		return this.http.get(this.endpoints['sources'], requestOptions).map(
			(response) => {

				var data = response.json().sources;

				this.saveInStorage('sourcesList', data);

				return data;
			}
		);
	}
	/**
	 * [fetchArticlesFromServer description]
	 * @param  {string} sourceId = "bbc-news" [description]
	 * @param  {string} sortBy   = "latest"   [description]
	 * @return {Observable<Article[]>} [description]
	 */
	fetchArticlesFromServer(sourceId = "bbc-news", sortBy = "top") : Observable<Article[]>{
		var storageKey = sourceId + "-" + sortBy + "-articles",
			storageData = this.storage.getItem(storageKey);

		if (storageData != null && storageData != undefined && storageData != 'null') {

			var articlesData = JSON.parse(storageData);
			var currentDate = new Date();
			if (currentDate < new Date(articlesData.expiration)) {
				console.log('Load articles from LS ', storageKey);
				return Observable.create(
					observer => {
						observer.next(articlesData.data); 
						observer.complete();
				});
			}
		}

		let params = new URLSearchParams();    	

		params.set("apiKey", this.apiKey);
		params.set("source", sourceId);
		params.set("sortBy", sortBy);
		
		let requestOptions = new RequestOptions();
		requestOptions.search = params;
		
		console.log('Load articles from API ', storageKey);

		return this.http.get(this.endpoints['articles'], requestOptions).map(
			(response) => {
				var data = response.json().articles;
				this.saveInStorage(storageKey, data);
				return data;
		});
	
	}

	/**
	 * [saveInStorage description]
	 * @param {string} key  [description]
	 * @param {any}    data [description]
	 */
	saveInStorage(key: string, data: any) {
		var expiration = new Date;
		expiration.setTime(expiration.getTime() + (20*60*1000));
		this.storage.setItem(key, JSON.stringify({data: data, expiration: expiration}));

	}

}