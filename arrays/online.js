function onlineStatus(users) {
    const count = users.length;

    if (count === 0) {
        return 'no one online';
    } else if (count === 1) {
        return `${users[0]} online`;
    } else if (count === 2) {
        return `${users[0]} and ${users[1]} online`;
    } else {
        return `${users[0]}, ${users[1]} and ${count - 2} more online`;
    }
}


console.log(onlineStatus(['Danny', 'Ren', 'Mar']));
