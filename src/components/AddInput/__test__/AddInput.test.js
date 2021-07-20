import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

// NOTE: AddInput 에 넘겨줘야할 setTodos 함수. 빈 함수를 만들어서 넘기자.
const mockedSetTodo = jest.fn();

describe('AddInput', () => {
  it('should render Input Element', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const element = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(element).toBeInTheDocument();
  });
  it('should be abel to type in input', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const element = screen.getByPlaceholderText(/Add a new task here.../i);
    // NOTE: trigger event
    fireEvent.change(element, { target: { value: 'Go Grocery Shopping' } });
    expect(element.value).toBe('Go Grocery Shopping');
  });
  it('should have empty input when add button is clicked', async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const InputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button', { name: /Add/ });
    // NOTE: trigger event
    fireEvent.change(InputElement, {
      target: { value: 'Go Grocery Shopping' },
    });
    fireEvent.click(buttonElement);
    expect(InputElement.value).toBe('');
  });
});
