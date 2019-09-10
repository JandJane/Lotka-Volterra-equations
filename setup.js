var exponential_plots_cards = [1, 2];
var lv_plots_cards = [3, 4, 5, 6];
var ht_plot_cards = [7, 8];

exponential_plots_cards.forEach(
    function(card_idx) {
        var card_id = 'card' + card_idx;

        var t_value = document.getElementById(card_id).getElementsByClassName('t_value')[0];
        var t_slider = document.getElementById(card_id).getElementsByClassName('t_slider')[0];
        t_value.innerHTML = t_slider.value;
        t_slider.oninput = function() {
            t_value.innerHTML = this.value;
        };

        plot(card_id, 'exponential', false);

        document.getElementById(card_id).getElementsByClassName('simulate-button')[0].onclick =
            function () { plot(card_id, 'exponential', true); return false };
    }
);

lv_plots_cards.forEach(
    function(card_idx) {
        var card_id = 'card' + card_idx;

        var t_value = document.getElementById(card_id).getElementsByClassName('t_value')[0];
        var t_slider = document.getElementById(card_id).getElementsByClassName('t_slider')[0];
        t_value.innerHTML = t_slider.value;
        t_slider.oninput = function() {
            t_value.innerHTML = this.value;
        };

        plot(card_id, 'lv', false);

        document.getElementById(card_id).getElementsByClassName('simulate-button')[0].onclick =
            function () { plot(card_id, 'lv', true); return false };
    }
);

ht_plot_cards.forEach(
    function(card_idx) {
        var card_id = 'card' + card_idx;

        var t_value = document.getElementById(card_id).getElementsByClassName('t_value')[0];
        var t_slider = document.getElementById(card_id).getElementsByClassName('t_slider')[0];
        t_value.innerHTML = t_slider.value;
        t_slider.oninput = function() {
            t_value.innerHTML = this.value;
        };

        plot(card_id, 'ht', false);

        document.getElementById(card_id).getElementsByClassName('simulate-button')[0].onclick =
            function () { plot(card_id, 'ht', true); return false };
    }
);
