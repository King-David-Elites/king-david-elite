
const debug = process.env.DEBUG;
const local_url = process.env.LOCAL_URI;
const production_url = process.env.PRODUCTION_URL

let globalApi = "https://kde.cyclic.app";

//"""http://localhost:9099"
// if(debug == "false"){
//     globalApi = production_url;
// }
// else{
//     globalApi = local_url;
// }

export default globalApi
