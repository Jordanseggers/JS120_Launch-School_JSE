function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(course) {
      this.courses.push(course);
    },
    
    isAlreadyEnrolled: function(course) {
      if(this.courses.includes(course)) {
        return true;
      }
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }
    },
  }
}
    
let school = {
  collectionOfStudents: [],
  collectionOfCourses: [{name: 'Math', code: 101}, {name: "Advanced Math", code: 102}, {name: "Physics", code: 202}],
  
  addStudent: function (name, year) {
    if (!["1st", "2nd", "3rd", "4th", "5th"].includes(year)) {
      console.log("Invalid Year");
    } else if (["1st", "2nd", "3rd", "4th", "5th"].includes(year)) {
      let student = createStudent(name, year);
      this.collectionOfStudents.push(student);
      return student;
    }
  },
  
  selectStudentObj: function (studentName) {
    let studentObj;
    
    this.collectionOfStudents.forEach((person, idx) => {
      if (person.name === studentName) {
        studentObj = this.collectionOfStudents[idx];
      }
    });
    
    return studentObj;
  },
  
  selectCourseObj: function (courseName) {
    let courseObj;
    
    this.collectionOfCourses.forEach((course, idx) => {
      if (course.name === courseName) {
        courseObj = this.collectionOfCourses[idx];
      }
    });
    
    return courseObj;
  },
  
  enrollStudent: function (studentName, courseName) {
    let studentObj = this.selectStudentObj(studentName);
    let courseObj = this.selectCourseObj(courseName);
    
    if(studentObj.isAlreadyEnrolled(courseObj)) {
      console.log('this student is already enrolled');
    } else {
      studentObj.addCourse(courseObj);
    }
  },
  
  addGrade: function (studentName, courseName, studentGrade) {
    let courseObj = this.selectCourseObj(courseName);
    courseObj[studentName] = studentGrade;
  },
  
  getReportCard: function (studentName) {
    let grades = [];
    this.collectionOfCourses.forEach((course) => {
      if (course.hasOwnProperty(studentName)) {
        grades.push(`${course.name}: ${studentName}`);
      }
    });
    
    console.log(grades);
  }
};

school.addStudent("jill", "2nd");
school.enrollStudent("jill", "Math");
school.enrollStudent("jill", "Physics");
school.addGrade("jill", "Math", "A");
console.log(school.collectionOfStudents[0].courses);
school.getReportCard("Jill");
