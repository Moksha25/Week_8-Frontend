function powerOfTwoTable(n) {
    let power = 1;
    let i = 0;
    
    console.log(`Powers of 2 up to 2^${n} (max 256):`);
    
    while (i <= n && power <= 256) {
        console.log(`2^${i} = ${power}`);
        power *= 2;
        i++;
    }
}

powerOfTwoTable(10);
