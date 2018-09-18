const { schemaList} = './shema/schemaList'

let show = async() => {
   let doc = await find(schemaList, 'list')
   console.log(doc)
}