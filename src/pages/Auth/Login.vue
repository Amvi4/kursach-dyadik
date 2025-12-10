<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
export default{
    components:  {Header, Footer},
}
</script>

<template>
<!-- форма входа-->
    <main class="Authentification">
        <div class="login-register">
            <h1>Войти</h1>
            <RouterLink to="/register" class="auth-text">Регистрация</RouterLink >
        </div>
        <div class="auth-cont">
            <input type="email" name="email" id="email-auth" placeholder="ваш E-mail">
            <input type="password" name="password" id="pass-auth" placeholder="Пароль">
            <RouterLink to="/profile" class="link-auth"><button class="auth-btn">Войти</button></RouterLink>
        </div>
    </main>

</template>

<style>

</style>