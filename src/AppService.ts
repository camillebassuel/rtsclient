import axios from 'axios'


export default class AppService {


    public static async getRvrsStr(input: string) {
        return await fetch('/api/reverstr/${input}')
          .then(res => res)

    }

    public static async getRvrsStrA(input: string) {
        const response = await axios.get('/api/rvstr/${input}');
        return response.data;
    }


}