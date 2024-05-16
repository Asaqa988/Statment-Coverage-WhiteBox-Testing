function getGrade(score) {
    let grade;

    if (score >= 0 && score <= 50) {           // Decision point 1
        grade = 'F';
    } else if (score >= 51 && score <= 60) {   // Decision point 2
        grade = 'D';
    } else if (score >= 61 && score <= 70) {   // Decision point 3
        grade = 'C';
    } else if (score >= 71 && score <= 80) {   // Decision point 4
        grade = 'B';
    } else if (score >= 81 && score <= 100) {  // Decision point 5
        grade = 'A';
    } else {                                   // Decision point 6
        grade = 'Invalid score';
    }

    return grade; // Return statement
}

// Test cases for branch coverage
const testCases = [
    { score: 30, expected: 'F', description: 'True branch of decision point 1' },
    { score: 51, expected: 'D', description: 'False branch of decision point 1, true branch of decision point 2' },
    { score: 61, expected: 'C', description: 'False branches of decision points 1 and 2, true branch of decision point 3' },
    { score: 71, expected: 'B', description: 'False branches of decision points 1, 2, and 3, true branch of decision point 4' },
    { score: 81, expected: 'A', description: 'False branches of decision points 1, 2, 3, and 4, true branch of decision point 5' },
    { score: 0, expected: 'F', description: 'True branch of decision point 1' },
    { score: 100, expected: 'A', description: 'False branches of decision points 1, 2, 3, and 4, true branch of decision point 5' },
    { score: -10, expected: 'Invalid score', description: 'False branches of decision points 1, 2, 3, 4, and 5, true branch of decision point 6' },
    { score: 110, expected: 'Invalid score', description: 'False branches of decision points 1, 2, 3, 4, and 5, true branch of decision point 6' }
];

// Run test cases
testCases.forEach(test => {
    const result = getGrade(test.score);
    const passed = result === test.expected;
    console.log(`Score: ${test.score}, Expected: ${test.expected}, Result: ${result}, Passed: ${passed}, Description: ${test.description}`);
});


/*


Branches:
Decision point 1: if (score >= 0 && score <= 50)

True branch: grade = 'F'
False branch: move to the next decision
Decision point 2: else if (score >= 51 && score <= 60)

True branch: grade = 'D'
False branch: move to the next decision
Decision point 3: else if (score >= 61 && score <= 70)

True branch: grade = 'C'
False branch: move to the next decision
Decision point 4: else if (score >= 71 && score <= 80)

True branch: grade = 'B'
False branch: move to the next decision
Decision point 5: else if (score >= 81 && score <= 100)

True branch: grade = 'A'
False branch: move to the else block
Decision point 6: else

This block handles the case when none of the above conditions are true.




Test Case 1 (Score: 30):

Covers true branch of decision point 1.
Executed lines: 1, 2, 4, 5, 18, 19
Test Case 2 (Score: 51):

Covers false branch of decision point 1 and true branch of decision point 2.
Executed lines: 1, 2, 4, 6, 7, 18, 19
Test Case 3 (Score: 61):

Covers false branches of decision points 1 and 2, and true branch of decision point 3.
Executed lines: 1, 2, 4, 6, 8, 9, 18, 19
Test Case 4 (Score: 71):

Covers false branches of decision points 1, 2, and 3, and true branch of decision point 4.
Executed lines: 1, 2, 4, 6, 8, 10, 11, 18, 19
Test Case 5 (Score: 81):

Covers false branches of decision points 1, 2, 3, and 4, and true branch of decision point 5.
Executed lines: 1, 2, 4, 6, 8, 10, 12, 13, 18, 19
Test Case 6 (Score: 0):

Covers true branch of decision point 1.
Executed lines: 1, 2, 4, 5, 18, 19
Test Case 7 (Score: 100):

Covers false branches of decision points 1, 2, 3, and 4, and true branch of decision point 5.
Executed lines: 1, 2, 4, 6, 8, 10, 12, 13, 18, 19
Test Case 8 (Score: -10):

Covers false branches of decision points 1, 2, 3, 4, and 5, and true branch of decision point 6.
Executed lines: 1, 2, 4, 6, 8, 10, 12, 14, 15, 18, 19
Test Case 9 (Score: 110):

Covers false branches of decision points 1, 2, 3, 4, and 5, and true branch of decision point 6.
Executed lines: 1, 2, 4, 6, 8, 10, 12, 14, 15, 18, 19

*/