// Find the first student with grade A
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "C" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "B" },
];

const firstAStudent = students.find((student) => student.grade === "A");
console.log(firstAStudent); // Output: { name: "Alice", grade: "A" }
