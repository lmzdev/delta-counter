declare class DeltaCounter {
    private ticks;
    private reportingTime;
    private onReportFunction;
    private countInterval;
    constructor(reportingTime?: number, onReportFunction?: (ticksPerSec: number) => void);
    tick(): number;
    start(): this;
    stop(): this;
}
export { DeltaCounter };
