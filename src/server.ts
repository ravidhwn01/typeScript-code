
const fetchData = async (path:string) => {
    const response = await fetch(`http://example.com${path}`)
    return response.json();
}
// anonymous func
(
   async () => {
   const post = await fetchData('/post')
   post[0]
   }
)()