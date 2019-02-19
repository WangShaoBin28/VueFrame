import { api_request } from '@/utils/request'
const Api={};
Api['user_info_parents_get']={'url':'/user/info/parents/get','method':'get','token_ignored':'false','anonymous':'false'};
const APISDK={};
for(const name in Api){
      APISDK[name]=(options)=>{
        return  api_request(Api[name],options);
      }
}
export default APISDK;
