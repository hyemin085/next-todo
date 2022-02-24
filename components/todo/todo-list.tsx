import { NextPage } from "next";
import { ReactNode, useState } from "react";
import Api from "../../common/api/Api";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import { checkBox } from "../../redux/todos/todos";

interface listType {
  list: {
    id?: number;
    contents?: string;
    check?: boolean;
    userId?: string;
    commenter?: number;
  };
}

const TodoList: NextPage<listType> = (props) => {
  const dispatch = useAppDispatch();

  const [checking, setChecking] = useState(props.list.check);

  console.log(props.list.id);



  const checkingHandler = () => {
    setChecking((checking) => !checking);
    //checking값이 바로하면 false, true가 반대로 나오는 경우의 수 때문에 따로 나눠줌.
    if (checking) {
      dispatch(
        checkBox({
          id: props.list.id,
          check: false,
        })
      );
    } else {
      dispatch(
        checkBox({
          id: props.list.id,
          check: true,
        })
      );
    }
  };

  const deleteHandler = () => {
    Api.delete(`/todo/${props.list.id}`).then((res) => console.log(res));
  };

  return (
    <>
      <div>
        <input type="checkbox" checked={checking} onChange={checkingHandler} />
        <div>{props.list.contents}</div>
        <button onClick={deleteHandler}>삭제하깅</button>
      </div>
    </>
  );
};

export default TodoList;
