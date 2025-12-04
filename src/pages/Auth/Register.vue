<script>
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
export default{
    components:  {Header, Footer},
}
</script>

<template>
<!-- форма регистрации -->
    <main class="Authentification">
        <div class="login-register">
            <RouterLink to="/login" class="auth-text">Войти</RouterLink >
            <h1>Регистрация</h1>
        </div>
        <div class="auth-cont">
            <input type="text" name="name" placeholder="Введите ваше имя">
            <input type="email" name="email" id="email-auth" placeholder="ваш E-mail">
            <input type="password" name="password" id="pass-auth" placeholder="Пароль">
            <input type="password" name="password" id="pass-auth" placeholder="Повторите Пароль">
            <RouterLink to="/profile" class="link-auth"><button class="auth-btn">Регистрация</button></RouterLink>
        </div>
    </main>

</template>

<style>
/* текст где сейчас находится юзер */
    input{
        padding: 0px 10px;
    }
    .Authentification{
        display: flex;
        flex-direction: column;
        padding: 60px 318px;
        justify-content: center;
        gap: 60px;
    }
    .login-register{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 40px;
    }
    .Authentification h1{
        color: rgb(102, 102, 102);
        margin: 0;
        padding: 0;
        font-size: 48px;
    }
    .Authentification a{
        color: black;
        font-size: 48px;
    }
    /* инпуты */
    .auth-cont{
        display: flex;
        flex-direction: column;
        gap: 80px;
        align-items: center;
    }
    .auth-cont input{
        width: 80%;
        height: 50px;
        font-size: 24px;
        background-color: white;
        border: 2px solid #7777;
        border-radius: 12px;
        color: black;
    }
    .auth-cont button{
        width: 80%;
        padding: 0;
        text-align: center;
        height: 50px;
        font-size: 24px;
    }
    .link-auth{
        width: 300px;
    }
</style>