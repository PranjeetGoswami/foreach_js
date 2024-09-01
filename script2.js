const items = ["item1","item2","item3"];
const copyItems = [];

for(let i = 0; i < items.length; i++){
    copyItems.push(items[i]);
}

items.forEach((item)=>{
    copyItems.push(item);
});