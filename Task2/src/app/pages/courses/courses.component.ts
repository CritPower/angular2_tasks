import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'courses',
	providers: [],
	styleUrls: ['./courses.component.scss'],
	templateUrl: './courses.template.html'
})
export class CoursesComponent implements OnInit, OnDestroy {
	private courseServiceSubscription: Subscription;
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
		this.courseServiceSubscription = this.courseService.getCourses().subscribe((res: Course[]) => {
			this.courseList = res;
			this.isLoading = false;
		});
	}

	public ngOnDestroy() {
		this.courseServiceSubscription.unsubscribe();
	}

	public deleteCourse($event) {
		this.courseList.forEach((course: Course, index: number) => {
			if (course.id === $event) {
				this.courseList.splice(index, 1);
				console.log('Course with id: ' + $event + ' was deleted!');
			}
		});
	}

	public findCourse() {
		if (this.searchValue !== '') {
			console.log('Are you looking for: ' + this.searchValue + '?');
		} else {
			console.log('Add some info for searching!');
		}
	}
}
