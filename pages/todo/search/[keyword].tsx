import {NextPage} from "next";
import {useRouter} from "next/router";
import useSWR, {useSWRConfig} from "swr";
import TodoCard from "../../../components/todo/todo-card";
import styles from "../../../components/todo/_todo.module.scss";
import TodoSearch from "../../../components/todo/todo-search";




const SearchResult:NextPage = () => {
    const router = useRouter();

    const keyword = router.query.keyword;


    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { mutate } = useSWRConfig();
    const { data, error } = useSWR(
        `http://3.34.47.186:4000/search?contents=${keyword}`,
        fetcher
    );
    if(error){
        return <div>데이터가 없어요</div>
    }
    const searchResult = data && data.search;
    console.log(searchResult);
    return(
        <>
            <h1>{keyword} Search</h1>
            <TodoSearch/>
            <div className={styles.main_todo}>

                {searchResult ? (searchResult.map((list) => (
                    <TodoCard key={list.id} list={list}/>
                ))) : (<div>노데이터</div>)
                }
                {/*{ && <div>데이터가 읍서요</div>}*/}

            </div>

        </>
    )
}

export default SearchResult;