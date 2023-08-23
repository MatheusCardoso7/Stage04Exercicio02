let students = [
  {
    name: "Luiz",
    firstGrade: 7,
    secondGrade: 6,
  },
  {
    name: "Mario",
    firstGrade: 9,
    secondGrade: 7,
  },
  {
    name: "Josh",
    firstGrade: 9,
    secondGrade: 9,
  },
  {
    name: "Michael",
    firstGrade: 8,
    secondGrade: 8,
  }
]

function finalGrade(firstGrade, secondGrade) {
  return ((Number(firstGrade) + Number(secondGrade)) / 2).toFixed(2);
}

for (let student of students) {
  let studentName = student.name;
  let average = finalGrade(student.firstGrade, student.secondGrade);

  if (average >= 7) {
    alert("A média do(a) aluno(a) " + studentName + " é: " + average + "\nParabéns, " + studentName + " , você foi aprovado(a) no concurso!");
  } else {
    alert("A média do(a) aluno(a) " + studentName + " é: " + average + "\nNão foi dessa vez, " + studentName + " tente novamente!");
  }
}
