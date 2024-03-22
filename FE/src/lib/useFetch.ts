import axios from 'axios'

export function useGet(URL: any, set: any) {
    try {
        const BASE_URL = URL
        axios.get(BASE_URL)
            .then((res) => {
                set(res.data)
                // console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        throw error
    }
}

// export function usePost(value: any, URL: any) {
//     try {
//         const BASE_URL = URL
//         axios.post(BASE_URL, value)
//     } catch (error) {

//     }
// }

// export async function useDelete(value: any, URL: any, id: number) {
//     try {
//         const BASE_URL = URL
//         await axios.delete(BASE_URL + `/${id}`, value)
//     } catch (error) {

//     }
// }