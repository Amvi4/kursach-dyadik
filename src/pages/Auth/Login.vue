<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
import axios from '../../axios'
import store from '../../store'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default{
    components:  {Header, Footer},
    setup() {
    const username = ref('')
    const password = ref('')
    const router = useRouter()

    const login = async () => {
      try {
        const res = await axios.post('/login', { username: username.value, password: password.value })
        store.mutations.setToken(res.data.token)
        router.push('/profile')
      } catch (err) {
        console.log(err);
        console.log(err.response);
        alert('Ошибка входа');
      }
    }

    return { username, password, login }
  }
}
</script>

<template>
<!-- форма входа-->
    <main class="Authentification">
        <div class="login-register">
            <h1>Войти</h1>
            <RouterLink to="/register" class="auth-text">Регистрация</RouterLink >
        </div>
        <form class="auth-cont" @submit.prevent="login">
            <input type="email" name="email" id="email-auth" placeholder="ваш E-mail" v-model="username">
            <input type="password" name="password" id="pass-auth" placeholder="Пароль" v-model="password">
            <button class="auth-btn" type="submit">Войти</button>
        </form>
    </main>

</template>

<style>

</style>