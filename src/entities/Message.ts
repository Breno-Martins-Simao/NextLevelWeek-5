import {
    Entity,
    PrimaryColumn,
    CreateDateColumn,
    Column
} from 'typeorm'

@Entity("Messages")
class Message {

    id: string

    admin_id: string

    text: string
    
    user_id: string

    created_at: Date

}

export {Message}