import { Component, JSXElement, createSignal, onCleanup } from 'solid-js'
import Container from './components/container'
import Time from './services/time'

const App: Component = (): JSXElement => {
  const [getTime, setTime] = createSignal(new Time())
  const interval = setInterval(
    () => {
      setTime(new Time())
    },
    1000
  )
  onCleanup(() => clearInterval(interval))

  return (
    <Container>
      <main class="display">
        <p>{getTime().getSet()} of</p>
        <span>{getTime().getDay()} Day</span>
        <p>
          -<span>{getTime().getRemainTime()}</span>
          {' '}Hours Remain-
        </p>
      </main>
    </Container>
  )
}
export default App
