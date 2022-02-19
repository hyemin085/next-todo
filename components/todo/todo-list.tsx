import {NextPage} from "next";
import Api from "../../common/api/Api";
import {ReactNode} from "react";




const TodoList:NextPage = (props:string|void|object) => {
    console.log("헹구", props)
    return(
        <>
            <h1>모르겟당</h1>
        </>
    )

}

export default TodoList;

