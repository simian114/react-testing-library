import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  const headeringElement = screen.getByText(/My header/i);
  expect(headeringElement).toBeInTheDocument();
});

it('same text passed into title prop', async () => {
  render(<Header title='My Header' />);
  // NOTE: 두 번째 {} 는 옵션이다. heading 에 해당하는 2개의 요소가 찾아져서 원래는 실패해야하는데
  // NOTE: 조건으로 My Header를 갖는 헤딩만 찾고 하나만 선택되서 실패하지 않는다.
  const headeringElement = screen.getByRole('heading', { name: 'My Header' });
  expect(headeringElement).toBeInTheDocument();
});

it('getBy TestId', () => {
  render(<Header title='My Header' />);
  const headerElement = screen.getByTestId('header-1');
  expect(headerElement).toBeInTheDocument();
});

// NOTE: findBy 를 사용하기 위해서는 await 를 사용해야만한다.
it('findBy TestId', async () => {
  render(<Header title='My Header' />);
  const headerElement = await screen.findByTestId('header-1');
  expect(headerElement).toBeInTheDocument();
});

// NOTE: 존재하지 않는걸 테스트 할 때 사용하는 경우가 많음
it('queryBy TestId', async () => {
  render(<Header title='My Header' />);
  const headerElement = await screen.queryByText(/dogs/i);
  expect(headerElement).not.toBeInTheDocument();
});

// NOTE: getAllBy
// NOTE: 그 결과가 array가 된다.
it('getAllNy', async () => {
  render(<Header title='My Header' />);
  const headerElement = screen.getAllByRole('heading');
  expect(headerElement.length).toBe(2);
});
