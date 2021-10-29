import instance from "../../instance/axios";
import fs from 'fs';
export default async function handler(req, res) {
    if (req.method == "GET") {
        let result = await instance.get('https://file.io/',)
        return res.status(200).json(result);
    } else if(req.method == "POST"){
        let headersList = {
            "Accept": "application/json",
            "Authorization": "Bearer FUN2THY.DJYA01C-X2H4WG5-NZRB0PR-SS86F2J" 
           }
                 
           let formdata = new FormData();
           formdata.append("expires", "14d");
           formdata.append("maxDownloads", "1");
           formdata.append("autoDelete", "true");
           formdata.append("file", fs.createReadStream("F:\test3.txt"));
     
           let reqOptions = {
             url: "https://file.io/",
             method: "POST",
             headers: headersList,
             data: formdata,
           }
           
           axios.request(reqOptions).then(function (response) {
             console.log(response.data);
           })
    }
    else {
      return res.status(405).json({ error: "Method Not Allowed." });
    }
  }