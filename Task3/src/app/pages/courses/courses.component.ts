import { Component, OnInit, OnDestroy } from '@angular/core';

import { CourseService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'courses',
	styleUrls: ['./courses.component.scss'],
	templateUrl: './courses.template.html'
})
export class CoursesComponent implements OnInit, OnDestroy {
	private courseList: Course[];
	private isLoading: boolean;
	private searchValue: string;

	constructor(private courseService: CourseService) {
		console.log('Courses page constructor');

		this.isLoading = false;
		this.courseList = [];
		this.searchValue = '';
	}

	public ngOnInit() {
		console.log('Courses page init');

		this.isLoading = true;
		this.courseList = this.courseService.getCourses();
		this.isLoading = false;
	}

	public ngOnDestroy() {
		console.log('ngOnDestroy was invoked!');
	}

	public deleteCourse(courseId: number) {
		this.courseService.deleteCourse(courseId);
	}

	public findCourse() {
		if (this.searchValue !== '') {
			console.log('Are you looking for: ' + this.searchValue + '?');
		} else {
			console.log('Add some info for searching!');
		}
	}
}
