import { DeltaCounter } from "../lib/mjs/index.js";
import assert from 'node:assert/strict'


describe('Test DeltaCounter Class',()=>{

    it('Check constructor', () => {
        const dt = new DeltaCounter()
        assert.notEqual(dt, undefined)
    })

    async function promisifiedCounter(testTicks, testInterval) {
        return new Promise((resolve, reject) => {
            const dt = new DeltaCounter(testInterval,(ticksPersec) => {
                resolve(ticksPersec)
                dt.stop()
            })
            dt.start()
            for (let i = 0; i < testTicks; i++) {
                dt.tick()             
            }
        })
    }

    it('Number of ticks > 1/s correct, start() and stop() are working',async () => {
        const p = await promisifiedCounter(1234, 1) 
        assert.equal(p > 1, true)
        assert.equal(p, 1234 / 1)
    })

    it('Number of ticks < 1/s correct',async () => {
        const p = await promisifiedCounter(2, 3) 
        assert.equal(p < 1, true)
        assert.equal(p, 2 / 3)
    }).timeout(5000)
    

}) 