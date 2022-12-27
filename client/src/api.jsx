
const debug = process.env.DEBUG;
const local_url = process.env.LOCAL_URI;
const production_url = process.env.PRODUCTION_URL

let globalApi = "http://192.168.43.168:9099";

//"https://kde.cyclic.app"
// if(debug == "false"){
//     globalApi = production_url;
// }
// else{
//     globalApi = local_url;
// }

export default globalApi