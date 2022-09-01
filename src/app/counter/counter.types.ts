interface CounterState {
  tickRun: boolean;
  tickSpeed: number;
  count: number;
  countBy: number;
  countUp: boolean
}


interface ResetEvent { kind: 'reset', value: null  }
interface TickRunEvent { kind: 'tickRun', value: boolean  }
interface TickSpeedEvent { kind: 'tickSpeed', value: number }
interface CountUpEvent { kind: 'countUp', value: boolean }
interface CountByEvent { kind: 'countBy', value: number }

type CounterEvent = ResetEvent | TickRunEvent | TickSpeedEvent | CountUpEvent | CountByEvent;
