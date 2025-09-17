grades = [90, 80, 99, 98, 97]

sum = 0;
for(let i = 0; i < grades.length; i++){
    sum += grades[i]
}
console.log(sum)
console.log("AVE: " + sum/grades.length);
console.log("LOWEST: " + lowest)
console.log("HIGHEST: " + highest)

console.log(Math.min(...grades))

min = 100000000
for(i = 0; i < grades.length; i++){
    if (grade< min){
        min = grade[i]
    }
}
console.log(min)

for(let grade of grades){
    if (grade< max){
        max = grade
    }
}
console.log(max)

grades.push(100,20)
grades.sort((a,b) => a -b)
console.log(grades)


grades = [90, 80, 99, 98, 97]

sum = 0;
for(let i = 0; i < grades.length; i++){
    sum += grades[i]
}
console.log(sum)
console.log("AVE: " + sum/grades.length);
console.log("LOWEST: " + lowest)
console.log("HIGHEST: " + highest)

console.log(Math.min(...grades))

min = 100000000
for(i = 0; i < grades.length; i++){
    if (grade< min){
        min = grade[i]
    }
}
console.log(min)

for(let grade of grades){
    if (grade< max){
        max = grade
    }
}
console.log(max)

grades.push(100,20)
grades.sort((a,b) => a -b)
console.log(grades)

