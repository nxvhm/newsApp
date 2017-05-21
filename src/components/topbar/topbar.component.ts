import { Component } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'top-navigation',
  templateUrl: './src/components/topbar/topbar.component.html'
})

export class TopNavigationComponent {
	isCollapsed: boolean = true;

	toggleCollapse(): void {
	  this.isCollapsed = !this.isCollapsed;
	}
}