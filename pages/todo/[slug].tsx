import {NextPage} from "next";
import {useRouter} from "next/router";
import {useEffect} from "react";
import TodoList from "../../components/todo/todo-list";



const TodoPage:NextPage = () => {

    useEffect(() => {
        if(!localStorage.getItem("token")){
            router.push({
                pathname: `/login`,
            })
        }
    })

    const router = useRouter();
    console.log(router);
    const {slug} = router.query

    console.log(slug)

    return(
        <>
            <h1>로그인환영환영</h1>
            <TodoList userId={slug}/>
        </>
    )
}

export default TodoPage;

