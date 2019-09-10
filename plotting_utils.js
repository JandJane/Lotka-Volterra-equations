function plot_exponential(div, a, x0, t, update, delta) {
    if (!t) {
        t = 2.5;
    }
    if (!delta) {
        delta = 0.01;
    }
    var n = t / delta;

    t = [0];
    x = [x0];

    for (var i = 0; i < n; ++i) {
        t.push(i * delta);
        x.push(x[i] + delta * a * x[i]);
    }
    var data = [{ x: t, y: x }];

    if (!update) {
        var layout = {
            xaxis: {
                title: { text: 't'}
            },
            yaxis: {
                title: { text: 'x' }
            },
            margin: { t: 0 }
        };
        Plotly.plot(div, data, layout);
    } else {
        Plotly.animate(div,
            {
                data: data,
                traces: [0],
            },
            {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
        });
    }
}


function plot_lv(div, a, b, c, d, x0, y0, t, update, alpha, delta) {
    if (!alpha) {
        alpha = 0;
    }
    if (!t) {
        t = 2.5;
    }
    if (!delta) {
        delta = 0.001;
    }
    var n = t / delta / 10;

    x = [x0];
    y = [y0];

    for (var i = 0; i < n; ++i) {
        x.push(x[i] + delta * (a * x[i] - c * x[i] * y[i] - alpha * x[i] * x[i]));
        y.push(y[i] + delta * (-b * y[i] + d * x[i] * y[i] - alpha * y[i] * y[i]));
    }

    var data = [{ x: x, y: y }];

    if (!update) {
        var layout = {
            xaxis: {
                title: { text: 'x'}
            },
            yaxis: {
                title: { text: 'y' }
            },
            margin: { t: 0 }
        };
        Plotly.plot(div, data, layout);
    } else {
        Plotly.animate(div,
            {
                data: data,
                traces: [0],
            },
            {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
        });
    }
}


function plot_ht(div, r, w, s, K, D, J, x0, y0, t, update, delta) {
    if (!t) {
        t = 2.5;
    }
    if (!delta) {
        delta = 0.03;
    }
    var n = t / delta;

    x = [x0];
    y = [y0];

    for (var i = 0; i < n; ++i) {
        x.push(x[i] + delta * (r * x[i] - r * x[i] * x[i] / K - w * y[i] * x[i] / (D + x[i])));
        y.push(y[i] + delta * (s * y[i] - s * J * y[i] * y[i] / x[i]));
    }

    var data = [{ x: x, y: y }];

    if (!update) {
        var layout = {
            xaxis: {
                title: { text: 'x'}
            },
            yaxis: {
                title: { text: 'y' }
            },
            margin: { t: 0 }
        };
        Plotly.plot(div, data, layout);
    } else {
        Plotly.animate(div,
            {
                data: data,
                traces: [0],
            },
            {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            });
    }
}


function plot_conv_ht(div, r, w, s, K, D, J, x0, y0, t, update, delta) {
    if (!t) {
        t = 2.5;
    }
    if (!delta) {
        delta = 0.03;
    }
    var n = t / delta;

    x = [x0];
    y = [y0];
    t_ = [0];

    for (var i = 0; i < n; ++i) {
        x.push(x[i] + delta * (r * x[i] - r * x[i] * x[i] / K - w * y[i] * x[i] / (D + x[i])));
        y.push(y[i] + delta * (s * y[i] - s * J * y[i] * y[i] / x[i]));
        t_.push(i * delta);
    }

    var data_x = [{ x: t_, y: x, name: 'жертвы' }];
    var data_y = [{ x: t_, y: y, name: 'хищники'}];

    if (!update) {
        var layout = {
            xaxis: {
                title: { text: 't'}
            },
            yaxis: {
                title: { text: 'x' }
            },
            margin: { t: 0 }
        };
        Plotly.plot(div, data_x, layout);

        var layout = {
            xaxis: {
                title: { text: 't'}
            },
            yaxis: {
                title: { text: 'y' }
            },
            margin: { t: 0 }
        };
        Plotly.plot(div, data_y, layout);
    } else {
        Plotly.animate(div,
            {
                data: data_x,
                traces: [0],
            },
            {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            });
        Plotly.animate(div,
            {
                data: data_y,
                traces: [1],
            },
            {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            });
    }
}


function plot_conv(div, a, b, c, d, x0, y0, t, update, alpha, delta) {
    if (!alpha) {
        alpha = 0;
    }
    if (!t) {
        t = 300;
    }
    if (!delta) {
        delta = 0.001;
    }
    var n = t / delta / 10;

    x = [x0];
    y = [y0];
    t_ = [0];

    for (var i = 0; i < n; ++i) {
        x.push(x[i] + delta * (a * x[i] - c * x[i] * y[i] - alpha * x[i] * x[i]));
        y.push(y[i] + delta * (-b * y[i] + d * x[i] * y[i] - alpha * y[i] * y[i]));
        t_.push(delta * i * 10);
    }

    var data_x = [{ x: t_, y: x, name: 'жертвы' }];
    var data_y = [{ x: t_, y: y, name: 'хищники' }];

    if (!update) {
        var layout = {
            xaxis: {
                title: { text: 't'}
            },
            yaxis: {
                title: { text: 'x' }
            },
            margin: { t: 0 }
        };
        Plotly.plot(div, data_x, layout);

        var layout = {
            xaxis: {
                title: { text: 't'}
            },
            yaxis: {
                title: { text: 'y' }
            },
            margin: { t: 0 }
        };
        Plotly.plot(div, data_y, layout);
    } else {
        Plotly.animate(div,
            {
                data: data_x,
                traces: [0],
            },
            {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            });
        Plotly.animate(div,
            {
                data: data_y,
                traces: [1],
            },
            {
                transition: {
                    duration: 500,
                    easing: 'cubic-in-out'
                },
                frame: {
                    duration: 500
                }
            });
    }
}

function plot(card_id, plot_type, update) {
    if (plot_type === 'exponential') {
        if (card_id === 'card2') {
            var b = parseFloat(document.getElementById(card_id).getElementsByClassName('b')[0].value);
            var y0 = parseFloat(document.getElementById(card_id).getElementsByClassName('y0')[0].value);
            var t = parseFloat(document.getElementById(card_id).getElementsByClassName('t_slider')[0].value);
            plot_exponential(document.getElementById(card_id).getElementsByClassName('plot')[0], -b, y0, t, update);
        } else {
            var a = parseFloat(document.getElementById(card_id).getElementsByClassName('a')[0].value);
            var x0 = parseFloat(document.getElementById(card_id).getElementsByClassName('x0')[0].value);
            var t = parseFloat(document.getElementById(card_id).getElementsByClassName('t_slider')[0].value);
            plot_exponential(document.getElementById(card_id).getElementsByClassName('plot')[0], a, x0, t, update);
        }
    } else if (plot_type === 'lv') {
        var a = parseFloat(document.getElementById(card_id).getElementsByClassName('a')[0].value);
        var b = parseFloat(document.getElementById(card_id).getElementsByClassName('b')[0].value);
        var c = parseFloat(document.getElementById(card_id).getElementsByClassName('c')[0].value);
        var d = parseFloat(document.getElementById(card_id).getElementsByClassName('d')[0].value);
        var x0 = parseFloat(document.getElementById(card_id).getElementsByClassName('x0')[0].value);
        var y0 = parseFloat(document.getElementById(card_id).getElementsByClassName('y0')[0].value);
        var t = parseFloat(document.getElementById(card_id).getElementsByClassName('t_slider')[0].value);
        var alpha = 0;
        if (card_id === 'card5' || card_id === 'card6') {
            alpha = parseFloat(document.getElementById(card_id).getElementsByClassName('alpha')[0].value);
        }
        if (card_id === 'card4' || card_id === 'card6') {
            plot_conv(document.getElementById(card_id).getElementsByClassName('plot')[0],
                a, b, c, d, x0, y0, t, update, alpha);
        } else {
            plot_lv(document.getElementById(card_id).getElementsByClassName('plot')[0],
                                a, b, c, d, x0, y0, t, update, alpha);
        }
    } else if (plot_type === 'ht') {
        var s = parseFloat(document.getElementById(card_id).getElementsByClassName('s')[0].value);
        var w = parseFloat(document.getElementById(card_id).getElementsByClassName('w')[0].value);
        var r = parseFloat(document.getElementById(card_id).getElementsByClassName('r')[0].value);
        var D = parseFloat(document.getElementById(card_id).getElementsByClassName('D')[0].value);
        var J = parseFloat(document.getElementById(card_id).getElementsByClassName('J')[0].value);
        var K = parseFloat(document.getElementById(card_id).getElementsByClassName('K')[0].value);
        var x0 = parseFloat(document.getElementById(card_id).getElementsByClassName('x0')[0].value);
        var y0 = parseFloat(document.getElementById(card_id).getElementsByClassName('y0')[0].value);
        var t = parseFloat(document.getElementById(card_id).getElementsByClassName('t_slider')[0].value);
        if (card_id === 'card7') {
            plot_ht(document.getElementById(card_id).getElementsByClassName('plot')[0],
                r, w, s, K, D, J, x0, y0, t, update);
        } else if (card_id === 'card8') {
            plot_conv_ht(document.getElementById(card_id).getElementsByClassName('plot')[0],
                r, w, s, K, D, J, x0, y0, t, update);
        }
    }
}

// function animate() {
//     var a = parseFloat(document.getElementById("a").value);
//     var b = parseFloat(document.getElementById("b").value);
//     var c = parseFloat(document.getElementById("c").value);
//     var d = parseFloat(document.getElementById("d").value);
//     var x0 = parseFloat(document.getElementById("x0").value);
//     var y0 = parseFloat(document.getElementById("y0").value);
//     var t = parseFloat(document.getElementById("t_slider").value);
//     console.log(t);
//
//     plot_lv(TESTER, a, b, c, d, 'x', 'y', x0, y0, t);
// }