import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseService } from '../../core/services';
import { Course } from '../../core/entities';

@Component({
	selector: 'courses',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./courses.component.scss')],
	template: require('./courses.template.html')
})
export class CoursesComponent implements OnInit, OnDestroy {
	private courseServiceSubscription: Subscription;
	private courseList: Course[];
	private isLoading: boolean = false;

	constructor(private courseService: CourseService) {
		console.log('Courses page constructor');

		this.courseList = [];
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
}
