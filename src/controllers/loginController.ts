import { Request, Response } from 'express';
import { GET, Controller } from './decorators';

@Controller('/auth')
class LoginController {
  @GET('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }
}
