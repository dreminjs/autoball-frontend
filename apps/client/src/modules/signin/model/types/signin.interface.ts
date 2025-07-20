import { signinSchema } from '../schemas/signin.schema';

import { z } from 'zod';

export type ISigninForm = z.infer<typeof signinSchema>;
