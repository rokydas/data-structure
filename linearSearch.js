const number = [12, 45, 86, 45, 32];

for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if(element == 45) {
        return i;
    }
}
