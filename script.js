var string = '';

function clearScreen() {
    var value = document.getElementById("result").value;
    var string1 = value.slice(0, value.length - 1);
    string = string1;
    document.getElementById("result").value = string1;
}

function display(value) {
    document.getElementById("result").value += value;
}

function pow(x, y) {
    return Math.pow(x, y);
}

function gcd(x, y) {
    function data() {
        var cof = 0;
        cof = Math.floor(x/y);

        var num3 = x;
        var num4 = y;

        x = num4;
        y = num3-Math.floor(num4*cof);
    }

    while (true) {
        data();

        if (y <= 0) {
            break;
        }
    }

    return x;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    var number = new Big(q);

    console.log(number.toFixed());

    document.getElementById("result").value = number.toFixed();
}

document.querySelector('.brasket1').addEventListener('click', (event) => {
    display('(');
});

document.querySelector('.brasket2').addEventListener('click', (event) => {
    display(')');
});

/*fetch('/send_data', {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        datas: datas
    })
}).then(res => {
    res.text().then(txt => {
        console.log(txt);
    });
});*/