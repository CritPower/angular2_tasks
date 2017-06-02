import { Injectable } from '@angular/core';
import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Course } from '../../entities';

@Injectable()
export class CourseService {

	private courseListUrl: string = 'https://demo8950809.mockable.io/';

	constructor(private http: Http) {
	}

	public getCourses (): Observable<Course[]> {
		return this.http.get(this.courseListUrl)
			.map((response: Response) => response.json())
			.map((courses: Course[]) => {
				// change return value structure here if you want
				return courses;
			});
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}
}
