import { Request, Response } from 'express';
import { Get, Controller, Post, BodyValidator } from './decorators';

@Controller('/auth')
class LoginController {
  @Get('/login')
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

  @Post('/login')
  @BodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email === 'test@test.com' && password === '1qazxsw2') {
      req.session = { logedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
}
