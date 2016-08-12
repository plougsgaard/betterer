import test from 'ava'
import API from '../../src/Services/Api'
import FixtureAPI from '../../src/Services/FixtureApi'
import R from 'ramda'

test('All fixtures map to actual API', t => {
  const fixtureKeys = R.keys(FixtureAPI).sort()
  const apiKeys = R.keys(API.create())

  const intersection = R.intersection(fixtureKeys, apiKeys).sort()

  // There is no difference between the intersection and all fixtures
  t.true(R.equals(fixtureKeys, intersection))
})
