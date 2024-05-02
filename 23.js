for (let i = 0; i <= 100; i++) {
    process.stdout.write(`${i} `);
    if (i % 10 === 0) { 
        console.log();
    }
}
