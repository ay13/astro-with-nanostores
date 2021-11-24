import { persistentAtom } from '@nanostores/persistent'

const counter = persistentAtom('counter', 0);

function increaseCounter() {
  counter.set(counter.get() + 1);
}

function decreaseCounter() {
  counter.set(counter.get() - 1);
}

export { counter, increaseCounter, decreaseCounter };
