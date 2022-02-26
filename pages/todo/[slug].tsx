import { NextPage } from "next";
import { useRouter } from "next/router";
import {useEffect, useRef, useState} from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import Todo from "../../components/todo";
import styles from "./_todo.module.scss";
import TodoModal from "../../components/modal/todo-modal";
import TodoSearch from "../../components/todo/todo-search";


import useSWR, { useSWRConfig } from "swr";
import useSWRInfinite from 'swr/infinite';
import fetcher from "../../libs/fetch";
import useOnScreen from "../../hooks/useOnScreen";


interface Todos {
  contents?: string;
  check?: boolean;
  userId?: string;
  commenter?: number;
}
let PAGE_SIZE = 2;

const getKey = (pageIndex, previousPageData, slug, pageSize) => {
  if (previousPageData && !previousPageData.length) return null // reached the end

  return `http://3.34.47.186:4000/todo/${slug}?page=${
      pageIndex+1
  }`
}

const TodoPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data: todoTotal } = useSWR(
      `http://3.34.47.186:4000/todo/${slug}?page=1`,
      fetcher
  );
  const PageCount = todoTotal && Math.ceil(todoTotal.countTodo[0].count_contents/12);
  PAGE_SIZE = (PageCount);


  const addModal = useAppSelector((state) => state.todos);


  const ref = useRef()
  const [val, setVal] = useState(slug)
  const isVisible = useOnScreen(ref)




  // const { data, error } = useSWR(
  //   `http://3.34.47.186:4000/todo/${slug}?page=1`,
  //   fetcher
  // );

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
      (...args) => getKey(...args, slug, PageCount),
      fetcher
  )

  const issues = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = size === PageCount
  const isRefreshing = isValidating && data && data.length === size

  useEffect(() => {
    if (isVisible && !isReachingEnd && !isRefreshing) {
      setSize(size + 1)
    }
  }, [isVisible, isRefreshing])

  console.log(issues);



  const isLogin = useAppSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
    if (!isLogin) {
      router.push({
        pathname: `/login`,
      });
    }
  }, [isLogin]);

  return (
    <>
      <p> showing {size} page(s) of {isLoadingMore ? '...' : issues.length}{' '}
        issue(s){' '}</p>
      <div className={styles.todoLayout}>
        {addModal.isTodoModal && <TodoModal items={addModal} />}
        <h1>{slug}'s Todo</h1>
        <TodoSearch />
        <Todo userId={slug} items={issues[0] && issues[0].todo}/>
        <div ref={ref}>
          {isLoadingMore ? 'loading...' : isReachingEnd ? 'no more issues' : ''}
        </div>
      </div>

    </>
  );
};

export default TodoPage;
