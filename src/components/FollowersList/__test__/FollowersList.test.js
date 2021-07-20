import { render, screen, fireEvent } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

// NOTE: AddInput 에 넘겨줘야할 setTodos 함수. 빈 함수를 만들어서 넘기자.

const MockFollowerList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe('FollowersList', () => {
  it('should render Follower items', async () => {
    render(<MockFollowerList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    expect(followerDivElement).toBeInTheDocument();
  });

  it('should render multiple follower items', async () => {
    render(<MockFollowerList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
