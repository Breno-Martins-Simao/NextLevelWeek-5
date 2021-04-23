import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/Users"
import { UserRepository } from "../repositories/UsersRepository"



class UserService{
    private userRepository:Repository<User>

    constructor (){
        this.userRepository = getCustomRepository(UserRepository)
    }

    async create(email: string){
        //Verificar se usuário existe
        const userExists = await this.userRepository.findOne({
            email
        })

        //Se existir, retornar o usuário
        if(userExists){
            return userExists
        }

        //Se não existir, salvar no DB
        const user = this.userRepository.create({
            email
        })

        await this.userRepository.save(user)

        return user;
        
    }
}

export {UserService}