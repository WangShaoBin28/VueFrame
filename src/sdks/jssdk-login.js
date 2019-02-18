import { api_request } from '@/utils/request'
const Api={};Api['admin_multi_login']={'url':'/admin/multi_login','method':'post','token_ignored':'true','anonymous':'true'};
Api['admin_login']={'url':'/admin/login','method':'post','token_ignored':'true','anonymous':'true'};
Api['admin_logout']={'url':'/admin/logout','method':'get','token_ignored':'false','anonymous':'true'};
Api['user_login_parents']={'url':'/user/login_parents','method':'get','token_ignored':'false','anonymous':'true'};
Api['user_login_teacher']={'url':'/user/login_teacher','method':'get','token_ignored':'false','anonymous':'true'};
Api['user_login_seat']={'url':'/user/login_seat','method':'get','token_ignored':'false','anonymous':'true'};
Api['user_login_student']={'url':'/user/login_student','method':'get','token_ignored':'false','anonymous':'true'};
Api['user_info_student_get']={'url':'/user/info/student/get','method':'get','token_ignored':'false','anonymous':'false'};
Api['user_info_parents_get']={'url':'/user/info/parents/get','method':'get','token_ignored':'false','anonymous':'false'};
Api['user_info_teacher_get']={'url':'/user/info/teacher/get','method':'get','token_ignored':'false','anonymous':'false'};
Api['user_info_seat_update']={'url':'/user/info/seat/update','method':'get','token_ignored':'false','anonymous':'false'};
const APISDK={};
for(const name in Api){
      APISDK[name]=(options)=>{
        return  api_request(Api[name],options);
      }
}
export default APISDK;
