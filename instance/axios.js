import axios from 'axios'
const instance = axios.create({
    headers: {
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Bearer FUN2THY.DJYA01C-X2H4WG5-NZRB0PR-SS86F2J',
    'Access-Control-Allow-Headers':'Cache-Control,Authorization,Content-Type,X-Requested-With'
    }
  });

export default instance;