import axios from 'axios'


export default class AppService {


    public static async getRvrsStr(input: string) {
        return await fetch('/api/reverstr/' + input)
          .then(res => res.text())

    }


}
