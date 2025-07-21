const display = document.getElementById('display');
let inp = '';
let mmr = 0;

function show(value, checkBtn = true) {
    if(checkBtn && isNaN(value)) {
        display.value = '0';
        return;
    }
    display.value = value || '0';
}

function handleClick(value) {
    let c = ["+", "-", "*", "/"];
    if (value == "x") {
        inp = inp.slice(0, -1);
        show(inp);
        return;
    }
    if (value == "+/-") {
        inp = (parseFloat(inp) * -1).toString();
        show(inp);
        return;
    }
    if (value == "²√x") {
        inp = Math.sqrt(parseFloat(inp)).toString();
        show(inp);
        return;
    }
    if (value == "x²") {
        inp = Math.pow(parseFloat(inp), 2).toString();
        show(inp);
        return;
    }
    if (value == "1/x") {
        inp = (1 / parseFloat(inp)).toString();
        show(inp);
        return;
    }
    if (value == "%") {
        inp = (parseFloat(inp) / 100).toString();
        show(inp);
        return;
    }
    if (value === 'CE') {
        inp = inp.slice(0, -1);
        show(inp);
        return;
    }
    if (value === 'C') {
        inp = '';
        show(inp);
    } else if (value === '=') {
        mmr = 0;
        inp = inp.replace(/^[+*/-]/, '').replace(/[+*/-]$/, '');
        if (inp.indexOf(c[0]) == -1 && inp.indexOf(c[1]) == -1 && inp.indexOf(c[2]) == -1 && inp.indexOf(c[3]) == -1) {
            show(Number(inp));
            return;
        }
        try {
            const result = eval(inp);
            show(result);
            inp = result.toString();
        } catch (error) {
            show('Error');
        }
    } else if (value === 'MC') {
        mmr = 0;
    } else if (value === 'MR') {
        inp += mmr.toString();
        show(inp);
    } else if (value === 'M+') {
        mmr += parseFloat(inp) || 0;
    } else if (value === 'M-') {
        mmr -= parseFloat(inp) || 0;
    } else if (value === 'MS') {
        mmr = parseFloat(inp) || 0;
    } else {
        const last = inp[inp.length - 1];
        if (c.includes(value) && c.includes(last)) {
            inp = inp.slice(0, -1) + value;
        } else {
            inp += value;
        }
        show(inp, false);
    }
}

document.querySelectorAll('td').forEach(td => {
    td.addEventListener('click', () => handleClick(td.textContent.trim()));
});