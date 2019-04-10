function randomInt(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

function operate(a, b, op) {
    if (op == 0) return a + b;
    else if (op == 1) return a - b;
    else if (op == 2) return a * b;
    else if (op == 3 && b != 0) return a / b;
    else return -1;
}

function alu(num) {
    var opr = ['+', '-', '&times;', '&divide;'];
    var star = '<i class="layui-icon">&#xe67a;</i>';
    var obj = [];
    for (var i = 0; i < num;) {
        var op = [];
        var a = [];
        for (var j = 0; j < 2; j++) op.push(randomInt(0, 3));
        for (var j = 0; j < 3; j++) a.push(randomInt(0, 100));
        var flag = randomInt(0, 1);
        if (flag)//abc*-
        {
            var tmp = operate(a[1], a[2], op[0]);
            if (tmp >= 0 && tmp <= 100 && tmp == Math.floor(tmp)) {
                var res = operate(a[0], tmp, op[1]);
                if (res >= 0 && res <= 100 && res == Math.floor(res)) {
                    if (op[0] >= 2 && op[1] <= 1 || op[0] == 0 && op[1] == 0 || op[0] == 2 && op[1] == 2 || op[0] == 1 && op[1] == 0 || op[0] == 3 && op[1] == 2) var title = (a[0] + ' ' + opr[op[1]] + ' ' + a[1] + ' ' + opr[op[0]] + ' ' + a[2]);
                    else var title = (a[0] + ' ' + opr[op[1]] + ' ' + '(' + ' ' + a[1] + ' ' + opr[op[0]] + ' ' + a[2] + ' ' + ')');
                    var diff = "";
                    for (var j = 0; j < op[0] / 2 + op[1] / 2 + 2; j++) diff += star;
                    obj.push({
                        'id': i + 1, 'title': title, 'res': res, 'diff': diff });
                    i++;
                }

            }
        }
        else//ab+c/
        {
            var tmp = operate(a[0], a[1], op[0]);
            if (tmp >= 0 && tmp <= 100 && tmp == Math.floor(tmp)) {
                var res = operate(tmp, a[2], op[1]);
                if (res >= 0 && res <= 100 && res == Math.floor(res)) {
                    if (op[0] <= 1 && op[1] >= 2) var title = ('(' + ' ' + a[0] + ' ' + opr[op[0]] + ' ' + a[1] + ' ' + ')' + ' ' + opr[op[1]] + ' ' + a[2]);
                    else var title = (a[0] + ' ' + opr[op[0]] + ' ' + a[1] + ' ' + opr[op[1]] + ' ' + a[2]);
                    var diff = "";
                    for (var j = 0; j < op[0] / 2 + op[1] / 2 + 2; j++) diff += star;
                    obj.push({ 'id': i + 1, 'title': title, 'res': res, 'diff': diff });
                    i++;
                }

            }

        }
    }
    return obj;
}
