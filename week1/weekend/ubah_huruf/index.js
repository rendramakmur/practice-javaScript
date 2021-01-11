let kata = 'i love javascript';
let hurufVokal = 'aAiIuUeEoO';
let temp = '';

for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j <= hurufVokal.length; j++) {
        if (kata[i] === hurufVokal[j]) {
            temp += '$';
            break;
        } else if (!hurufVokal[j]) {
            temp += kata[i];
        }
    }
    
}

console.log(temp);