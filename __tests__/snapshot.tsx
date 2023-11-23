/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react'

import HomePage from '../pages/Home'


it('renders homepage unchanged', () => {
  const { container } = render(<HomePage />)
  expect(container).toMatchSnapshot()
})