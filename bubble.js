/*
    Light popup
    Version: 1.0.0
    Author: Artemij Artemev
    Github: https://github.com/starblust/
*/

function Bubble(opts = {})
{
    this.opts = {};

    let that = this;

    this.default = {
        close: '',
        background: '',
        box: '',
        position: 'center',
        trigger: '',
        clOutsideClose: true 
    }

    function processOpts(opts) {
        that.opts = that.default;
        for (let prop in opts) {
            if (that.default.hasOwnProperty(prop)) {
                that.opts[prop] = opts[prop];
            }
        }
    }

    function init() {
        if (that.opts.background && !document.querySelector(that.opts.background)) {
            console.error("background element not found");
            return false;
        } else if(that.opts.background) {
            that.background = document.querySelector(that.opts.background);
        }

        if (!that.opts.box || !document.querySelector(that.opts.box)) {
            console.error("box not found");
            return false;
        }

        if (that.opts.trigger && !document.querySelector(that.opts.trigger)) {
            console.error("trigger not found");
            return false;
        } else {
            that.trigger = document.querySelector(that.opts.trigger);
        }

        if (that.opts.close && !document.querySelector(that.opts.close)) {
            console.error('close element not found');
        } else if(that.opts.close) {
            that.close = document.querySelector(that.opts.close);
        }

        that.box = document.querySelector(that.opts.box);
        return true;
    }

    function setupView() {
        that.box.classList.add(that.opts.position);
    }

    function attachEvents() {
        document.addEventListener('click', function(e) {
            if (this.opts.clOutsideClose && !this.box.contains(e.target)) {
                this.hide();
            }
            
            if (this.trigger && e.target == this.trigger) {
                this.show();
            }

            if (this.close && e.target == this.close) {
                this.hide();
            }
        }.bind(that))
    }

    processOpts(opts);

    if (init()) {
        setupView();
        attachEvents();
    }

    this.show = function() {
        if (this.background) {
            this.background.classList.add('shown');
        }
        this.box.classList.add('shown');
    }

    this.hide = function() {
        this.box.classList.remove('shown');
        if (this.background) {
            this.background.classList.remove('shown');
        }
    }
}