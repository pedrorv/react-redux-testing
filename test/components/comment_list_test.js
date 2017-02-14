import { renderComponent, expect } from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('CommentList', () => {
  let component

  beforeEach(() => {
    component = renderComponent(CommentList)
  })

  it('should render component', () => {
    expect(component).to.exist
  })
})