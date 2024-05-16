function getGrade(score) {
    let grade;

    if (score == 0 && score <= 50) {           // Path 1 (3 lines)
        grade = 'F';
    } else if (score >= 51 && score <= 60) {   // Path 2 (3 lines)
        grade = 'D';
    } else if (score >= 61 && score <= 70) {   // Path 3 (3 lines)
        grade = 'C';
    } else if (score >= 71 && score <= 80) {   // Path 4 (3 lines)
        grade = 'soso';
    } else if (score >= 81 && score <= 100) {  // Path 5 (3 lines)
        grade = 'A';
    } else {                                   // Path 6 (3 lines)
        grade = 'Invalid score';
    }

    return grade; // 1 line
}

/*

Test Cases with Lines Executed:
Test Case 1 (Score: 30):

Executes lines: 1, 2, 4, 5, 18, 19
Explanation: score is 30, so the first condition if (score >= 0 && score <= 50) is true.

______________________________________________________________________________
Test Case 2 (Score: 55):

Executes lines: 1, 2, 4, 6, 7, 18, 19
Explanation: score is 55, so the first condition is false, but the second condition else if (score >= 51 && score <= 60) is true.

______________________________________________________________________________
Test Case 3 (Score: 65):

Executes lines: 1, 2, 4, 6, 8, 9, 18, 19
Explanation: score is 65, so the first two conditions are false, but the third condition else if (score >= 61 && score <= 70) is true.
______________________________________________________________________________
Test Case 4 (Score: 75):

Executes lines: 1, 2, 4, 6, 8, 10, 11, 18, 19
Explanation: score is 75, so the first three conditions are false, but the fourth condition else if (score >= 71 && score <= 80) is true.
______________________________________________________________________________
Test Case 5 (Score: 85):

Executes lines: 1, 2, 4, 6, 8, 10, 12, 13, 18, 19
Explanation: score is 85, so the first four conditions are false, but the fifth condition else if (score >= 81 && score <= 100) is true.
______________________________________________________________________________
Test Case 6 (Score: -10):

Executes lines: 1, 2, 4, 6, 8, 10, 12, 14, 15, 18, 19
Explanation: score is -10, so all the if and else if conditions are false, and the else block is executed.
______________________________________________________________________________
Test Case 7 (Score: 110):

Executes lines: 1, 2, 4, 6, 8, 10, 12, 14, 15, 18, 19
Explanation: score is 110, so all the if and else if conditions are false, and the else block is executed.




*/