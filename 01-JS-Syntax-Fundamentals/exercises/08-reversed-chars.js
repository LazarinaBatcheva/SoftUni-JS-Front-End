function reversedCocnatination(...chars) {
    let result = '';

    for (let i = chars.length - 1; i >= 0; i--) {
        result += chars[i] + ' ';
    }

    console.log(result.trim());
}


// test code

reversedCocnatination('A', 'B', 'C');
reversedCocnatination('1', 'L', '&');