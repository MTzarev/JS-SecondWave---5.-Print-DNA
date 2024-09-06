function printDNAHelix(length) {
    const sequence = 'ATCGTTAGGG';
    let sequenceIndex = 0;

    for (let i = 0; i < length; i++) {
        const char1 = sequence[sequenceIndex % sequence.length];
        const char2 = sequence[(sequenceIndex + 1) % sequence.length];
        sequenceIndex += 2;

        if (i % 4 === 0) {
            console.log(`**${char1}${char2}**`);
        } else if (i % 4 === 1) {
            console.log(`*${char1}--${char2}*`);
        } else if (i % 4 === 2) {
            console.log(`${char1}----${char2}`);
        } else if (i % 4 === 3) {
            console.log(`*${char1}--${char2}*`);
        }
    }
}

printDNAHelix(10);