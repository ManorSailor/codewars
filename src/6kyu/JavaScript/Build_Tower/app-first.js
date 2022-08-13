// First Attempt
function towerBuilder(nFloors) {
    let tower = [];
    
    for (let i = 0; i < nFloors; i++) {
      const padding = ' '.repeat(nFloors - (i + 1));
      const floors =`${padding}${'*'.repeat(i + i + 1)}${padding}`;
      tower.push(floors);
    }
    
    return tower;
  }
  
  // To figure out, use pen & paper to create a tower of height 5,
  // You will see that the top floor has 5 - 1 spaces on both sides,
  // and with each consecutive floor, our spaces decrease by +1 on both ends i.e, 
  // 2nd floor = 5 - (1 + 1) = 3 spaces on each side etc
  // Now onto add blocks, i.e, *, if you haven't noticed, stars are always there in odd quantities
  // So we just repeat * odd times which is calculated using i + i + 1