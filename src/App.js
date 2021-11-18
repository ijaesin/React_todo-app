import React, { useState, useRef, useCallback } from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

function App() {
  // useState의 파라미터에 함수 형태로 넣어 주면 
  // 컴포넌트가 처음 렌더링될 때만 함수가 실행된다.
  const [Todos, setTodos] = useState(createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);
  
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(Todos => Todos.concat(todo));
      nextId.current += 1; // nextId 1씩 더하기
    },
    [],
  )

  const onRemove = useCallback(
    id => {
      setTodos(Todos => Todos.filter(todo => todo.id !== id));
    },
    [],
  )

  const onToggle = useCallback(
    id => {
      setTodos(Todos => 
        Todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo,
        ),
      )
    },
    [],
  )

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={Todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
