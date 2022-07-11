import api from "../utils/api";

class UserService {

    static createUser = async (payload) => {
        const log = 'USER_SERVICE-CREATE_USER'

        console.log(`${log} payload: `, payload)

        try {

            const { data } = await api.post('/createClient' ,payload)

            console.log(`${log} data: `, data)

            const result = data?.json()

            return result

        } catch(err) {

            console.error(`${log} Error: `, err)

        }

    }

}

export default UserService;