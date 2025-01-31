// My 5th kata, and 1st in a planned series of rock climbing themed katas.

// In rock climbing (bouldering specifically), the V/Vermin (USA) climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade).

// You will be given a list of climbing grades and you have to write a function to return a list of the grades sorted easiest to hardest.

// If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.


function sortGrades(lst){
    
    //your code here
    let swapped;
    do{
        swapped = false;
        for(let i = 0;i<lst.length-1;i++){
            if(lst[i]>lst[i+1]){
                let temp = lst[i];
                lst[i]= lst[i+1];
                lst[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
  }

  let lst = ["V7", "V12", "V1"]
  sortGrades(lst);
  console.log(lst)