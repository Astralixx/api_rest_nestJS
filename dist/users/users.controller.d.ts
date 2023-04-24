import { UserEntity } from './user.entity/user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private service;
    constructor(service: UsersService);
    getAll(params: any): Promise<UserEntity[]>;
    get(params: any): Promise<UserEntity[]>;
    create(user: UserEntity): Promise<void>;
    update(user: UserEntity): Promise<void>;
    deleteTypeUser(params: any): Promise<void>;
}
