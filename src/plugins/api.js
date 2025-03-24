import postsRepository from '~/repositories/posts.js'
import usersRepository from '~/repositories/users.js'

export default {
    install: (app) => {
        app.provide('api', {
            posts: postsRepository,
            
            users: usersRepository
        })
    }
}