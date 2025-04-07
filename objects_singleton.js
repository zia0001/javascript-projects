const tinderUser = new Object()

tinderUser.id = "xyz321"
tinderUser.name = "jack"
tinderUser.isloggedIn = false


//console.log(tinderUser);

const regularUser = {         // nested objects
  email: "jack@google.com",
  fullname: {
    userfullname: {
      firstname: "jack",
      lastname: "sparrow"
    }
  }
}

//console.log(regularUser.fullname.userfullname.firstname);



const object1 = { 1: "l", 2: "k" }
const object2 = { 3: "y", 4: "e" }

const obj3 = Object.assign({}, object1, object2)



const object3 = { ...object1, ...object2 }

//console.log(obj3);


const users = [                         // users/values from database comes in this format i.e array having multiple objects
  {
    id: 123,
    name: "abc"
  },

  {
    id: 321,
    name: "xyz"
  },
]

//console.log(users[1].id);

// console.log(Object.values(users));
// console.log(Object.keys(users));


//console.log(tinderUser.hasOwnProperty("id"));     //checks if object has a specific property



const course = {
  courseName: "networking",
  courseId: "nnc43",
  courseInstructor: "prof Simmon"
}

//console.log(course.courseId);

const { courseId: id } = course         // destructuring >>>>> now we can user courseId directly anywhere

//console.log(id);

{                       //JSON format 
  "name": "Drake",
    "age": "787",
      "isLoggedIn": false,

}