import React, {useCallback} from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.scss';
import { List } from 'react-virtualized';

function TodoList({ todos, onRemove, onToggle }) {
  const rowRenderer = useCallback(
    ({index, key, style}) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List 
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이 
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이 (첫번쨰 항목은 테두리가 없으므로 두번쨰 항목의 크기)
      rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
      list={todos} // 배열
      style={{outline: 'none'}} // list에 기본 적용되는 outline 스타일 제거
    />
  )
}

export default React.memo(TodoList);
