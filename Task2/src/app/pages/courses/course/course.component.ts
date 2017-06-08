import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../core/entities';

@Component({
	selector: 'course-item',
	templateUrl: 'course.template.html',
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class CourseComponent {
	@Input('course') public course: Course;
	@Output() public onDelete: EventEmitter<any> = new EventEmitter();

	constructor() {
	}

	public deleteCourse() {
		this.onDelete.emit(this.course.id);
	}
}
