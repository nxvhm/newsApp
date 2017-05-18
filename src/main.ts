import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NewsAppModule} from './app.module';
import { NewsService } from './services/news.service';

platformBrowserDynamic().bootstrapModule(NewsAppModule, NewsService);