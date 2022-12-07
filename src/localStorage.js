const loadState = () => {
    try{
        const store = localStorage.getItem('store')
        if(store == null){
            return undefined;
        }else{
            return JSON.parse(store);
        }
    }catch(err){
        return undefined;
    }
}

const saveState = (state) => {
    try{
        const store = JSON.stringify(state);
        localStorage.setItem('store',store)
    }catch(err){

    }
}

export {
    loadState,
    saveState,
}