import axios from "axios"


const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const gitReq = axios.create({
    baseURL:GITHUB_URL,
    headers: { 
        Authorization: `token ${GITHUB_TOKEN}`
    }
})


 
 // Search initial users 
 export const searchUser = async (text)=>{
    

    const params = new URLSearchParams({
        q: text
    })

    const response = await gitReq.get(`/search/users?${params}`)

    return response.data.items
}

//  GET USERS AND REPOS 
export const getUserAndRepos = async (login) =>{
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    })

    const [user, repos] = await Promise.all([
        gitReq.get(`users/${login}`),
        gitReq.get(`users/${login}/repos?${params}`)
    ])
    return {user: user.data, repos: repos.data}
}