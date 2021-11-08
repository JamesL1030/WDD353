import sys

#Command line prompts
name = raw_input("Please enter student's name ")
assignment = raw_input("Please enter student's assignment ")

#Validation
while True:
		grade = raw_input("Please enter student's grade for " + assignment + " ")  
		try:
			float(grade)
		except ValueError:
			print("Please only enter numberic values. Please re-enter a grade for " + assignment + "! ")
		else:
			float(grade)
			break

#grader array
grader = [name, assignment, grade]

#Class
class Grader:        
    #Method to output grade
    def gradeCalc(self,student):
        _name = student[0]
        _assignment = student[1]
        _grade = student[2]
        #If statement to determine output
        if float(_grade) <= 100.00:
            if float(_grade) >= 90.00:
                return _name + " got a A on " + _assignment + "."
            elif float(_grade) <= 89.99:
                if float(_grade) >= 80.00:
                    return _name + " got a B on " + _assignment + "."
                elif float(_grade) <= 79.99:
                    if float(_grade) >= 70.00:
                        return _name + " got a C on " + _assignment + "."
                    elif float(_grade) <= 69.99:
                        if float(_grade) >= 60.00:
                            return _name + " got a D on " + _assignment + "."
                        elif float(_grade) < 60.00:
                            return _name + " got a F on " + _assignment + "." 
        else:
            return _name + " got a A on " + _assignment + ". No extra points were given."

myOutput = Grader()
#Call gradeCalc and output       
print(myOutput.gradeCalc(grader))

