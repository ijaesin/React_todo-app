import React from 'react'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

function TodoListItem({ todo, onRemove, onToggle, style }) {
  const {id, text, checked} = todo;
  
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  )
}

// React.memo => 컴포넌트의 props가 바뀌지 않았다면,
// 리렌더링하지 않도록 설정하여 함수형 컴포넌트의 리렌더링 성능을 최적화해 줄 수 있습니다.
export default React.memo(TodoListItem);