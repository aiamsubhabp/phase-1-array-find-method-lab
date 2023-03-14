// code your solution here


function superbowlWin (array){
    let result = array.find(isWin => isWin.result === 'W');
      if (result){
      return result.year;
    } else {
      return undefined;
    }
  }
