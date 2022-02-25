import {NextPage} from "next";
import {useRouter} from "next/router";
import useSWR, {useSWRConfig} from "swr";
import TodoCard from "../../../components/todo/todo-card";
import styles from "../../../components/todo/_todo.module.scss";




const SearchResult:NextPage = () => {
    const router = useRouter();

    const keyword = router.query.keyword;


    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { mutate } = useSWRConfig();
    const { data, error } = useSWR(
        `http://3.34.47.186:4000/search?contents=${keyword}`,
        fetcher
    );
    console.log(data);
    return(
        <>
            <div className={styles.main_todo}>
                {data && (data.search.map((list) => (
                    <TodoCard key={list.id} list={list}/>
                    )))
                }
                {/*{ && <div>데이터가 읍서요</div>}*/}

            </div>

        </>
    )
}

export default SearchResult;