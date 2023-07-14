import axios from 'axios'

const api = "hppt://localhost:800/api/v1/task"

export const postTask = async (taskObj) => {
    try {
        const response = await axios.post(api, taskObj);
        console.log(response)
    } catch (error) {
        console.log(error.message)
    }
}