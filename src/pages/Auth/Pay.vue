<script setup>

</script>

<template>
<!-- форма оплаты -->
    <main class="Authentification">
        <div class="pay">
            <h1 class="">Покупка</h1>
        </div>
        <form class="auth-cont">
            <input type="email" name="email" id="email-auth" placeholder="ваш E-mail">
            <input type="text" name="name" placeholder="XXXX-XXXX-XXXX-XXXX">
            <div class="ccvv-crok">
                <input type="number" name="number" id="pass-auth" placeholder="Срок действия">
                <input type="number" name="number" id="pass-auth" placeholder="CVV">
            </div>
            <RouterLink to="/profile" class="link-auth"><button class="auth-btn">Оформить заказ</button></RouterLink>
        </form>
    </main>

</template>

<style>
/* дата и CVV */
.pay h1{
    color: black;
}
.ccvv-crok{
    display: flex;
    flex-direction: row;
    gap: 400px;
    justify-content: space-between;
}
</style>