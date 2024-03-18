import { Router } from 'express';
import { Login,completeUser,logout} from '../controllers/user.js';

const router = Router();

router.post('/login', Login);
router.post('/signup',completeUser);
// router.post('/forgot-request', CheckLogged,forgotPassword )
// router.get('/forgot-check', CheckLogged,forgotVerify )
// router.put('/forgot-finish', CheckLogged,resetPassword)
router.get('/logout',logout )
export default router;
