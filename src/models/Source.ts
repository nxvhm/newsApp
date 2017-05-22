export class Source {
	constructor(
		public category: string,
		public country: string,
		public description: string,
		public id: string,
		public language: string,
		public name: string,
		public sortBysAvailable: any,
		public url: string,
		public urlsToLogos: any
	){}

	getLogo() {
		return ' 1 ';
	}
}