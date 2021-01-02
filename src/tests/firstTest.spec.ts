import { User } from '@/models/User'

test('It should be okay', () => {
  const user = new User()

  user.getName()
  expect(user.getName()).toEqual('Carlos Voltor')
})
