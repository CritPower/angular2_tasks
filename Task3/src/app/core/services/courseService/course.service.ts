import { Course } from '../../entities';

export class CourseService {
	private courses: Course[];

	constructor() {
		this.courses = new Array<Course>();
		this.courses.push(new Course(1, 'How to Webpack', 90, '10/10/2010', 'Webpack is awsome!'));
		this.courses.push(new Course(2, 'How to TypeScript', 90, '10/10/2010', 'TypeScript is awsome!'));
		this.courses.push(new Course(3, 'How to Angular intro', 90, '10/10/2010', 'Angular is awsome!'));
		this.courses.push(new Course(4, 'How to Components', 90, '10/10/2010', 'Components is awsome!'));
		this.courses.push(new Course(5, 'How to Modules', 90, '10/10/2010', 'Modules is awsome!'));
		this.courses.push(new Course(6,
			'How to Change detection',
			90,
			'10/10/2010',
			'Change decetion is awsome!'));
		this.courses.push(new Course(7,
			'How to Directoves and Pipes',
			90,
			'10/10/2010',
			'Directives is awsome!'));
		this.courses.push(new Course(8,
			'How to RxJs observables',
			90,
			'10/10/2010',
			'RxJs is awsome!'));
		this.courses.push(new Course(9, 'How to HTTP', 90, '10/10/2010', 'HTTP is awsome!'));
		this.courses.push(new Course(10, 'How to Forms', 90, '10/10/2010', 'Forms is awsome!'));
		this.courses.push(new Course(11, 'How to Routing', 90, '10/10/2010', 'Routing is awsome!'));
		this.courses.push(new Course(12, 'How to NgRx/Redux', 90, '10/10/2010', 'NgRx/Redux is awsome!'));
		this.courses.push(new Course(13, 'How to Unit tests', 90, '10/10/2010', 'Unit tests is awsome!'));
	}

	public getCourses(): Course[] {
		return this.courses;
	}

	public getCourse(courseId: number): Course {
		if (!this.courses[courseId]) {
			return this.courses[courseId];
		}
		throw 'Course not found';
	}

	public addCourse(course: Course) {
		this.courses.push(course);
	}

	public deleteCourse(courseId: number) {
		this.courses.forEach((course: Course, index: number) => {
			if (course.id === courseId) {
				this.courses.splice(index, 1);
			}
		});
	}

	public updateCourse(newCourse: Course) {
		this.courses.forEach((currentCourse: Course, index: number) => {
			if (currentCourse.id === newCourse.id) {
				this.courses[index] = newCourse;
			}
		});
	}
}
