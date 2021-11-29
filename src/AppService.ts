import axios from 'axios'

interface ServiceResult {
  str: string
}

export default class AppService {


    public static async getRvrsStr(input: string) {
        return await fetch('/api/rvstr/${input}')
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error(response.statusText);
            }
          })
          .then(data => {
            return data;
          }); 
        
        // .then(res => res.json())


    }

    public static async getRvrsStrA(input: string) {
        const response = await axios.get('/api/rvstr/${input}');
        return response.data;
    }


}