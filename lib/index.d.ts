/**
 * Count average events per second in a timespan
 */
declare class DeltaCounter {
    private ticks;
    private reportingTime;
    private onReportFunction;
    private countInterval;
    constructor(reportingTime?: number, onReportFunction?: (ticksPerSec: number) => void);
    /**
     * Increase counter in current interval
     * @returns number of ticks since beginning of current interval
     */
    tick(): number;
    /**
     * Set interval and start
     * @returns this
     */
    start(): this;
    /**
     * Stop and clear interval
     * @returns this
     */
    stop(): this;
}
export { DeltaCounter };
