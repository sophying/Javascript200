const timer = {
    run:function(){
        if(this.t) console.log('이미 실행된 타이머 있음');

        this.t = setTimeout(()=>{
            console.log('1초 뒤에 실행됨');
        }, 1000)
    },
    cancel: function() {
        if(this.t) clearTimeout(this.t);
        this.t = undefined;
    }
};

timer.run();
timer.cancel();
timer.run();
