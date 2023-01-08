/**
 * Count average events per second in a timespan
 */
class DeltaCounter {
    ticks = 0;
    reportingTime;
    onReportFunction;
    countInterval = null;
    constructor(reportingTime = 20, onReportFunction) {
        this.reportingTime = reportingTime;
        this.onReportFunction = onReportFunction;
    }
    /**
     * Increase counter in current interval
     * @returns number of ticks since beginning of current interval
     */
    tick() {
        return ++this.ticks;
    }
    /**
     * Set interval and start
     * @returns this
     */
    start() {
        if (this.countInterval === null) {
            this.countInterval = setInterval(() => {
                const ticksPerSec = this.ticks / this.reportingTime;
                this.onReportFunction(ticksPerSec);
                this.ticks = 0;
            }, this.reportingTime * 1000);
        }
        return this;
    }
    /**
     * Stop and clear interval
     * @returns this
     */
    stop() {
        if (this.countInterval != null) {
            clearInterval(this.countInterval);
            this.countInterval = null;
        }
        return this;
    }
}
export { DeltaCounter };
//# sourceMappingURL=index.js.map