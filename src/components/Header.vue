<script>
import { RouterLink } from 'vue-router';

export  default {
    methods:{
        goToMainPage() {
            this.$inertia.visit('/');
        },
    }
}
</script>

<template>
    <header>
        <div class="header">
        <RouterLink to="/"><img src="../icons/Logo.svg" alt="логотип" srcset=""></RouterLink>
        <nav class="navigation">
            <ul class="links">
                <li><RouterLink to="/catalog" class="link">КАТАЛОГ</RouterLink ></li>
                <li><RouterLink to="/blog" class="link"> БЛОГ</RouterLink ></li>
                <li><RouterLink to="/about" class="link">О НАС</RouterLink ></li>
            </ul>
        </nav>
        <div class="buttons">
            <RouterLink to="/catalog" ><img src="../icons/search.svg" alt="поиск" srcset="" class="link-border"></RouterLink>
            <RouterLink to="/cart" ><img src="../icons/cart.svg" alt="корзина" srcset="" class="link-border2"></RouterLink>
            <RouterLink to="/login" ><img src="../images/profile.png" alt="профиль" srcset="" class="img-profile"></RouterLink>
        </div>
    </div>
    </header>
</template>

<style>
header{
    background-color: #AEDE90;
    width: 100%;
}
.header{
    padding: 23px 318px;
    display: flex;
    gap: 144px;
    justify-content: space-between;
    align-items: center;
}
.link{
      color: #032807;  
}
.links {
    display: flex;
    gap: 32px;
    list-style-type: none;
}
.buttons{
    display: flex;
    gap: 32px;
    align-items: center;
}
.img-profile{
    width: 60px;
    height: 60px;
}
.link-border{
    width: 20px;
    height: 20px;
}
.link-border2{
    width: 25px;
    height: 25px;
}
</style>