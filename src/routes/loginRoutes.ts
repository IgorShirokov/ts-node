import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: RequestWithBody, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'test@test.com' && password === '1') {
    req.session = { logedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.logedIn) {
    res.send(
      `<div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
      `
    );
  } else {
    res.send(
      `<div>
        <div>You are not logged in</div>
        <a href="/logoin">Login</a>
      </div>
      `
    );
  }
});

export { router };
