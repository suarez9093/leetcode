var numTeams = function (rating) {
    let teams = 0;

    for (let i = 0; i < rating.length; i++) {
        let j = i + 1;
        let k = j + 1;
        while (j <= rating.length - 2) {
            if (
                (rating[i] < rating[j] && rating[j] < rating[k]) ||
                (rating[i] > rating[j] && rating[j] > rating[k])
            ) {
                teams++;
            }
            k++;
            if (k === rating.length) {
                j++;
                k = j + 1;
            }
        }
    }
    return teams;
};