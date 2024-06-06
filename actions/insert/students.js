let studentsNames = ['Tom', 'Bill', 'Sally', 'Jim'];
let studentsGrades = [59,70,30,70];
let studentFail = [];

if(studentsNames.length === studentsGrades.length){

    for(let i = 0; i < studentsGrades.length; i++){

        if(studentsGrades[i] < 60){
            studentFail.push(i);
        }
    }

}


for(let i = 0; i < studentFail.length; i++){
    console.log('Failed: ' + studentsNames[ studentFail[i] ]);
}


