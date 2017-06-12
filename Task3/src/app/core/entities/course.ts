export class Course {
	public id: number;
	public title: string;
	public duration: number;
	public creationDate: string;
	public description: string;

	constructor(
		id: number,
		title: string,
		duration: number,
		creationDate: string,
		description: string) {
		this.id = id;
		this.title = title;
		this.duration = duration;
		this.creationDate = creationDate;
		this.description = description;
	}
}
