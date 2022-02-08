const arr = [
    {
       'name' : 'd',
       'index' : 3
    },
    {
       'name' : 'c',
       'index' : 2
    },
    {
       'name' : 'a',
       'index' : 0
    },
    {
       'name' : 'b',
       'index' : 1
    }
 ];
 const sortAndMap = (arr = []) => {
    const copy = arr.slice();
    console.log(copy);
    const sorter = (a, b) => {
       return a['index'] - b['index'];
    };
    copy.sort(sorter);
  const res = copy.map(({name, index}) => {
      return name;
   });
   return res;
};
console.log(sortAndMap(arr));