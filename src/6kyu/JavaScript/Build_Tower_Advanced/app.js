// First Attempt | Best Practice? Opinionated
function towerBuilder(nFloors, [width, height]) {
    let tower = [];

    for (let i = 0; i < nFloors; i++) {
        // Multiplying width by odd numbers produces the correct amount of blocks to be generated
        const nBlocks = width * (i + i + 1);

        // Multiplying width by nFloors - (i + 1) produces the correct amount of padding to be generated
        // i + 1 because i starts from 0 & subtract i + 1 because as the no of floors decreases, our padding also decreases
        const nPadding = width * (nFloors - (i + 1));

        // Generate height many number of floors of each design
        for (let j = 0; j < height; j++) {
            const newFloor = createFloor(nBlocks, nPadding);
            tower.push(newFloor);
        }
    }

    return tower;
}

// Function which creates floors
function createFloor(blockSize, paddingSize) {
    const padding = ' '.repeat(paddingSize);
    const newFloor = `${padding}${'*'.repeat(blockSize)}${padding}`;
    return newFloor;
}