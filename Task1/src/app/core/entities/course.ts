export class Course {
public id: number;
public length: string;
public date: string;
public description: string;

constructor(id: number, length: string, date: string, description: string) {
		this.id = id;
		this.length = length;
		this.date = date;
		this.description = description;
	}
}
