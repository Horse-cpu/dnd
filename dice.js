const _ = [
    ["d",
        (t, th) => {
            return `u(${t}, ()=>{ return Math.ceil((1 - Math.random()) * (${th})); })`;
        }
    ], // uniform
    ["e",
        (t, th) => {
            return `u(${t}, ()=>{ return Math.ceil(Math.log(Math.random())/Math.log(1 - 1/(${th}))); })`;
        }
    ], // geometric
    ["c",
        (t, th) => {
            return `u(${t}, ()=>{ return Math.round((${th}) * Math.tan(Math.PI * (Math.random() - 0.5))); })`;
        }
    ], // cauchy
    ["n",
        (t, th) => {
            return `u(${t}, ()=>{ return Math.round((${th}) * Math.SQRT2 * erfinv(2 * Math.random() - 1)); })`;
        }
    ], // normal
    ["l",
        (t, th) => {
            return `u(${t}, ()=>{ return Math.round((${th}) / 2 / Math.pow(erfinv(1 - Math.random()),2)); })`;
        }
    ], // levy
    ["x",
        (t, th) => {
            return `Math.round(u(${t}*${th}, ()=>{ return Math.pow(Math.SQRT2 * erfinv(2 * Math.random() - 1), 2); }))`;
        }
    ]  // chi squared
];

function u(n, f) {
    var q = 0;
    for (var i = 0; i < n; i++) {
        q += f();
    }
    return q;
}
function m(n, f) {
    var q = 1;
    for (var i = 0; i < n; i++) {
        q *= f();
    }
    return q;
}
function parse(s) {
    if (s.includes('(')) {
        var cnt = 0; var start = []; var end = [];
        for (var i = 0; i < s.length; i++) {
            if (s[i] == '(') { cnt++; if (cnt == 1) start.push(i); }
            else if (s[i] == ')') { cnt--; if (cnt < 0) return -1; if (cnt == 0) end.push(i); }
        }
        if (start.length != end.length) return -1;
        for (var i = start.length - 1; i >= 0; i--) {
            var x = parse(s.substring(start[i] + 1, end[i]));
            s = s.substring(0, start[i] + 1) + x + s.substring(end[i]);
        }
    }
    if (s.includes('#')) { // a#b means apply a b many times and add
        for (var i = s.length - 2; i >= 1; i--) {
            if (s[i] == '#' && s[i - 1] != ' ' && s[i + 1] != ' ' && (!isNaN(s[i - 1]) || s[i - 1] == ')') && (!isNaN(s[i + 1]) || s[i + 1] == '(')) {
                s = "u(" + s.slice(0, i) + ",()=>" + s.slice(i + 1) + ")";
            }
        }
    }
    if (s.includes('^')) { // a^b means apply a b many times and multiply
        for (var i = s.length - 2; i >= 1; i--) {
            if (s[i] == '^' && s[i - 1] != ' ' && s[i + 1] != ' ' && (!isNaN(s[i - 1]) || s[i - 1] == ')') && (!isNaN(s[i + 1]) || s[i + 1] == '(')) {
                s = "m(" + s.slice(0, i) + ",()=>" + s.slice(i + 1) + ")";
            }
        }
    }
    for (var _i = 0; _i < _.length; _i++) {
        if (s.includes(_[_i][0])) {
            for (var i = s.length - 1 - _[_i][0].length; i >= 1; i--) {
                if (s.slice(i, i + _[_i][0].length) == _[_i][0] && s[i - 1] != ' ' && s[i + _[_i][0].length] != ' ' && (!isNaN(s[i - 1]) || s[i - 1] == ')') && (!isNaN(s[i + _[_i][0].length]) || s[i + _[_i][0].length] == '(')) {
                    s = "(" + _[_i][1](s.slice(0, i), s.slice(i + _[_i][0].length)) + ")";
                }
            }
        }
    }
    return s;
}
function erfinv(x) {
    var z;
    var a = 0.147;
    var the_sign_of_x;
    if (0 == x) {
        the_sign_of_x = 0;
    } else if (x > 0) {
        the_sign_of_x = 1;
    } else {
        the_sign_of_x = -1;
    }

    if (0 != x) {
        var ln_1minus_x_sqrd = Math.log(1 - x * x);
        var ln_1minusxx_by_a = ln_1minus_x_sqrd / a;
        var ln_1minusxx_by_2 = ln_1minus_x_sqrd / 2;
        var ln_etc_by2_plus2 = ln_1minusxx_by_2 + (2 / (Math.PI * a));
        var first_sqrt = Math.sqrt((ln_etc_by2_plus2 * ln_etc_by2_plus2) - ln_1minusxx_by_a);
        var second_sqrt = Math.sqrt(first_sqrt - ln_etc_by2_plus2);
        z = second_sqrt * the_sign_of_x;
    } else { // x is zero
        z = 0;
    }
    return z;
}