import React, {useState, useCallback} from 'react'
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert({ onInsert }) {
  const [Value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(Value);
      setValue(''); // value 값 초기화
      
      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, Value],
  )

  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input 
          placeholder="할 일을 입력하세요"
          value={Value}   
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </div>
  )
}

export default TodoInsert
