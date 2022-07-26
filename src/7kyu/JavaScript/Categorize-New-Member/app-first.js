// First Attempt
function openOrSenior(data){
  let newData = [];
  for (D of data) {
    for (let i = 0; i < D.length - 1; i++) {
     if (D[i] >= 55 && D[i + 1] > 7) {
       newData.push('Senior');
     } else {
       newData.push('Open');
     }
    }
  }
  
  return newData;
}