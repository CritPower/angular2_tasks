import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Course } from '../../../core/entities';

@Component({
	selector: 'course-item',
	templateUrl: 'course.template.html',
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
	@Input() public course: Course;

	constructor() {
	}
}
