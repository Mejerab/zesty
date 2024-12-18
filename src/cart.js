const getStored = () =>{
    const items = localStorage.getItem('foods');
    if (items) {
        return JSON.parse(items);
    }
    else{
        return [];
    }
}
const storeItem = (id) =>{
    const stored = getStored();
    const exist = stored.find(item=>item === id);
    if (!exist) {
        stored.push(id);
        localStorage.setItem('foods', JSON.stringify(stored))
    }
}
const remove = (id) =>{
    const stored = getStored();
    const exist = stored.filter(item=>parseInt(item) !== id);
        localStorage.setItem('foods', JSON.stringify(exist));
}
export {getStored, storeItem, remove};