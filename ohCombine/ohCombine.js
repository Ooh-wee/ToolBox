// combine obj
// default combine map 

const ohCombine = (args, res = true) => {
   let emp = res? {}: []; 
   if(res){
      args.map(v => {
        Object.assign(emp, v)
      })
   } else {
     args.map(v => {
        emp.concat(v)
     })
   }
   return emp;
}

// split and map obj 
const ohMap = ({routes, router}) => {
  Object.keys(routes).map(v => {
    return router[v.split('get').length > 1? 'get': 'post'](routes[v].path, routes[v].res);
  })
}

module.exports = {
    ohCombine,
    ohMap
};
