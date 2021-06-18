import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    const timestamp = new Date();
    Object.assign(user, {
      name,
      email,
      created_at: timestamp,
      updated_at: timestamp,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    return undefined;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    return undefined;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    return undefined;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
