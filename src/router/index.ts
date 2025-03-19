import { createRouter, createWebHistory } from 'vue-router'
import TempView from '../views/TempView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPasswordView from '../views/ForgotPasswordView.vue'
import VerifyEmailView from '../views/VerifyEmailView.vue'
import TwoFactorAuthView from '../views/TwoFactorAuthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'temp',
      component: TempView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordView,
    },
    {
      path: '/verify-email',
      name: 'verify-email',
      component: VerifyEmailView,
    },
    {
      path: '/two-factor-auth',
      name: 'two-factor-auth',
      component: TwoFactorAuthView,
    },
  ],
})

export default router
