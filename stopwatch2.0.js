function Stopwatch(){
    this.isOn = false;
    this.startTime =0;
    this.stopTime =0;
    this.duration = 0;
}
Stopwatch.prototype.start = function(){
    if(this.isOn === true) throw new Error('Stopwatch is already on');
    this.startTime = new Date();
    this.isOn = true;
}

Stopwatch.prototype.stop = function (){
        if(this.isOn === false) throw new Error('Stopwatch is already off');
        this.stopTime = new Date();
        this.isOn = false;
        this.duration = (this.stopTime.getTime() - this.startTime.getTime())/1000;
    }

  

