import { useEffect, useRef } from "react";

function useDocumentTitle(title , prevailOnUnmounte = false){
    const defaultTitle = useRef(document.title);
    useEffect( ()=>{
        document.title = title;
    },[title])

    useEffect(()=> ()=>{
        if(!prevailOnUnmounte){
            document.title = defaultTitle.current;
        }
    },[])

}
export default useDocumentTitle;