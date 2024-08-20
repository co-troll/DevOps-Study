// input을 사용할때 재상용성이 높은 기능을 hook으로 정리

import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  return { value, onChange };
}

export default useInput;