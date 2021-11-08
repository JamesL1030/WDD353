#Command line prompts
puts"Please enter student's name "
name = gets
puts"Please enter student's assignment "
assignment = gets
puts"Please enter student's grade for " + assignment
grade = gets

#grader array
grader = [name, assignment, grade]

#Class
class Grader        

    #Method to output grade
    def gradeCalc(student)
        _name = student[0]
        _assignment = student[1]
        _grade = student[2]
        #If statement to determine output
        if Float(_grade) > 100.00
            return _name + " got a A on " + _assignment + " No extra points were given. "
        elsif Float(_grade) <= 100.00 && Float(_grade) >= 90.00
            return _name + " got a A on " + _assignment
        elsif Float(_grade) <= 89.99 && Float(_grade) >= 80.00
            return _name + " got a B on " + _assignment
        elsif Float(_grade) <= 79.99 && Float(_grade) >= 70.00
            return _name + " got a C on " + _assignment
        elsif Float(_grade) <= 69.99 && Float(_grade) >= 60.00
            return _name + " got a D on " + _assignment
        elsif Float(_grade) < 60.00
            return _name + " got a F on " + _assignment
        end
    end
end

myOutput = Grader.new
#Call gradeCalc        
print(myOutput.gradeCalc(grader))


