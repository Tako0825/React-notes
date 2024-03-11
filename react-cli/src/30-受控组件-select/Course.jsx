import React, { PureComponent } from 'react'

export class Course extends PureComponent {
  constructor() {
    super()
    this.state = {
      courses: [
        { id: 1, name: "C语言", value: "c", selected: true },
        { id: 2, name: "Java核心技术", value: "java", selected: false },
        { id: 3, name: "Python", value: "python", selected: false },
        { id: 4, name: "JavaScript程序设计", value: "js", selected: false }
      ],
      selectedCourses: []
    }
  }

  handelSelect(e) {
    const selectedCourses = [...this.state.selectedCourses]
    if(!selectedCourses.includes(e.target.value)) {
      selectedCourses.push(e.target.value)
    }
    else {
      selectedCourses.splice(
        selectedCourses.indexOf(e.target.value),
        1
      )
    }
    this.setState((state) => {
      return { selectedCourses }
    }, () => console.log(this.state.selectedCourses))
  }

  render() {
    return (
        <select 
          multiple 
          value={this.state.selectedCourses} 
          onChange={(e) => this.handelSelect(e)}
          name="course" 
          id="course"
        >
          {
            this.state.courses.map(course => (
              <option 
                value={course.value}
                key={course.id}
              >{course.name}</option>
            ))
          }
        </select>
    )
  }
}

export default Course