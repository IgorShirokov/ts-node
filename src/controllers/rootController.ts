import { Request, Response } from 'express';

import { Get, Controller, Use } from './decorators';
import { requireAuth } from '../middlewares';

@Controller('')
class RootController {
  @Get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.logedIn) {
      res.send(
        `<div>
          <div>You are logged in</div>
          <a href="/auth/logout">Logout</a>
        </div>
        `
      );
    } else {
      res.send(
        `<div>
          <div>You are not logged in</div>
          <a href="/auth/login">Login</a>
        </div>
        `
      );
    }
  }

  @Get('/protected')
  @Use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to protected route!');
  }
}
