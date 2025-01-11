// Task 1: Array Filtering and Mapping
const people = [
    { name: "John", age: 30, gender: "male" },
    { name: "Jane", age: 25, gender: "female" },
    { name: "Mike", age: 35, gender: "male" },
    { name: "Emily", age: 28, gender: "female" }
  ];
  
  const result1 = people
    .filter(person => person.gender !== "female")
    .map(person => person.name);
  console.log(result1); // Output: ['John', 'Mike']
  
  // Task 2: Object Manipulation
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 }
  ];
  
  const result2 = books.map(book => book.title);
  console.log(result2); // Output: ['The Great Gatsby', '1984', 'To Kill a Mockingbird']
  
  // Task 3: Function Composition
  const square = x => x * x;
  const double = x => x * 2;
  const addFive = x => x + 5;
  
  const result3 = addFive(double(square(3)));
  console.log(result3); // Output: 23
  
  // Task 4: Sorting Objects (Cars by Year)
  const cars = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Focus", year: 2010 }
  ];
  
  const result4 = cars.sort((a, b) => a.year - b.year);
  console.log(result4);
  // Output: [
  //   { make: 'Ford', model: 'Focus', year: 2010 },
  //   { make: 'Toyota', model: 'Corolla', year: 2015 },
  //   { make: 'Honda', model: 'Civic', year: 2018 }
  // ]
  
  // Task 5: Find and Modify Person's Age
  const people2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 35 }
  ];
  
  const result5 = people2.map(person => person.name === "Jane" ? { ...person, age: 26 } : person);
  console.log(result5); // Output: [{ name: 'John', age: 30 }, { name: 'Jane', age: 26 }, { name: 'Mike', age: 35 }]
  