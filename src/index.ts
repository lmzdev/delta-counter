class DeltaCounter {
    private ticks = 0
    private reportingTime : number
    private onReportFunction : (ticksPerSec: number) => void
    private countInterval : NodeJS.Timer = null

    constructor(reportingTime = 20, onReportFunction? : (ticksPerSec: number)=>void ) {
        this.reportingTime = reportingTime
        this.onReportFunction = onReportFunction
    }

    tick() {
        return ++this.ticks
    }

    start(){
        if (this.countInterval === null){
            this.countInterval = setInterval(()=> {
                const ticksPerSec = this.ticks / this.reportingTime
                this.onReportFunction(ticksPerSec)
                this.ticks = 0
            }, this.reportingTime * 1000)
        }
        return this
    }

    stop(){
        if (this.countInterval != null) {
           clearInterval(this.countInterval) 
           this.countInterval = null
        }
        return this
    }
}

export {DeltaCounter}
