import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Crud({
  model: {
    type: User,
  },
  query: {
    alwaysPaginate: true,
  },
})
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UserService) {}
}
