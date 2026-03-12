// Use some() to check if any student failed

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "C" },
  { name: "Charlie", grade: "F" },
  { name: "David", grade: "B" },
];

const hasFailedStudent = students.some((student) => student.grade === "F");
console.log(hasFailedStudent); // Output: true
