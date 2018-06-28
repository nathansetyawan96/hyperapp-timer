import { h, app } from 'hyperapp'

const state = {
  count: 0,
  paused: true
}

const actions = {
  up: () => state => ({ count: state.count + 1 }),
  tick: () => (state, actions) => {
    if(state.paused == false){
      actions.up()
    } else {
      count = state.count
    }
  },
  reset: () => ({ count: 0, paused: true }),
  start: () => state => ({ paused: false }),
  pause: () => state => ({ paused: true })
}

const view = (state, actions) => (
  <main>
    <h1>Timer</h1>
    <h1>{state.count}</h1>
    <div class='buttons'>
      <button onclick={actions.start}>Start</button>
      <button onclick={actions.pause}>Pause</button>
      <button onclick={actions.reset}>Reset</button>
    </div>
  </main>
)

const main = app(state, actions, view, document.body)

setInterval(main.tick, 1000)
