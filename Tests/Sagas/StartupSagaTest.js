import test from 'ava'
import { take } from 'redux-saga/effects'
import { watchStartup } from '../../src/Sagas/StartupSaga'
import Types from '../../src/Actions/Types'

const stepper = (fn) => (mock) => fn.next(mock).value

test('watches for the right action', t => {
  const step = stepper(watchStartup())
  t.deepEqual(step(), take(Types.STARTUP))
})
