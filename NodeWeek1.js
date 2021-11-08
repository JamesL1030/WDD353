const { type } = require("os")
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.question("Please enter student's name ", (name) => {
    rl.question("Please enter student's assignment ", (assignment) => {
        rl.question("Please enter student's grade for " + assignment + " ", (grade) => {

            //grader array
            grader = [name, assignment, grade];

            //Class
            class Grader{      
                
                //Function to output grade
                gradeCalc = function(student) {
                    let _name = student[0];
                    let _assignment = student[1];
                    let _grade = student[2];
                    
                    //If statement to determine output
                    if (parseFloat(_grade) > 100.00) {
                        return _name + " got a A on " + _assignment + " No extra points were given. ";
                    }      
                    else if (parseFloat(_grade) <= 100.00 && parseFloat(_grade) >= 90.00) {
                        return _name + " got a A on " + _assignment;
                    }
                    else if (parseFloat(_grade) <= 89.99 && parseFloat(_grade) >= 80.00) {
                        return _name + " got a B on " + _assignment;
                    }    
                    else if (parseFloat(_grade) <= 79.99 && parseFloat(_grade) >= 70.00) {
                        return _name + " got a C on " + _assignment;
                    }         
                    else if (parseFloat(_grade) <= 69.99 && parseFloat(_grade) >= 60.00) {
                        return _name + " got a D on " + _assignment;
                    }
                    else if (parseFloat(_grade) < 60.00) {
                        return _name + " got a F on " + _assignment;
                    }      
                }
            }
            module.exports = Grader;
            myOutput = new Grader();

            //Call gradeCalc        
            console.log(myOutput.gradeCalc(grader));
        })
    })
})



