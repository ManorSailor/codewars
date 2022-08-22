// it must support rank, progress and the incProgress(rank) method
class User {
    constructor(rank = -8, progress = 0) {
        this.rank = rank;
        this.progress = progress;
    }

    calcProgress(actRank, userRank) {
        (actRank > 0 && userRank < 0) ? actRank -= 1 : actRank += 0;
        (userRank > 0 && actRank < 0) ? userRank -= 1 : userRank += 0;
        return (10 * ((actRank - userRank) ** 2));
    }

    oneLower(num) {
        return this.rank - (num > 0) ? -num : +num;
    }

    incProgress(num) {
        if (num < -8 || num > 8 || num === 0) throw 'Out of Range';
        else if (num === this.rank) this.progress += 3;
        else if (this.oneLower(num) === 1) this.progress += 1;
        else if (num > this.rank && this.rank !== 8) this.progress += this.calcProgress(num, this.rank);

        while (this.progress >= 100 && this.rank !== 8) {
            this.rank += 1;
            this.progress -= 100;
        }

        (this.rank === 0) ? this.rank += 1 : this.rank += 0;
        (this.rank === 8) ? this.progress = 0 : this.progress += 0;
    }
}