import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

// NOTE: AddInput 에 넘겨줘야할 setTodos 함수. 빈 함수를 만들어서 넘기자.

const MockTodo = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('should render Input Element', async () => {
    render(<MockTodo />);
    addTasks(['hello world']);
    const divElement = screen.getByText(/hello world/i);
    expect(divElement).toBeInTheDocument();
  });
  it('should render multiple items', async () => {
    render(<MockTodo />);
    const tasks = ['test1', 'test2', 'test3'];
    addTasks(tasks);

    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('tasks should not have completed class when intially rendered', async () => {
    render(<MockTodo />);
    const tasks = ['test1'];
    addTasks(tasks);

    const divElement = screen.getByText('test1');
    expect(divElement).not.toHaveClass('todo-item-active');
  });

  it('tasks should have completed class when clicked', async () => {
    render(<MockTodo />);
    const tasks = ['test1'];
    addTasks(tasks);

    const divElement = screen.getByText('test1');
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item-active');
  });
});
