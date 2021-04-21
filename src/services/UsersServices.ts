import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UsersRepository"



class UserService{
    async create(email: string){
        const userRepository = getCustomRepository(UserRepository)
        //Verificar se usuário existe
        const userExists = await userRepository.findOne({
            email
        })

        //Se existir, retornar o usuário
        if(userExists){
            return userExists
        }

        //Se não existir, salvar no DB
        const user = userRepository.create({
            email
        })

        await userRepository.save(user)

        return user;
        
    }
}

export {UserService}