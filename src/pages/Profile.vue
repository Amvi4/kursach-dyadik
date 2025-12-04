<script setup>

const items = [
                    { title: 'Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021', price: 38484, 
                    from: '/assets/images/country/italy.png', image: "/assets/images/bicycle-bianchi.png", category: 'mountain', stock: 0, },
                    { title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022', price: 49300, 
                    from:'/assets/images/country/usa.png', image: '/assets/images/bicycle-trekVerve.png', category: 'mountain', stock: 1,},
                    { title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022', price: 15000, 
                    from:'/assets/images/country/usa.png', image: '/assets/images/bicycle-trekMarlin.png', category: 'mountain', stock: 0,},
                ];

</script>

<template>
    <div class="container">

    <main class="main-content">
      <!-- основная часть — содержимое кабинета -->
      <section class="profile-overview">
        <h1>Добро пожаловать, Amvi4!</h1>
        <!-- карточка с данными пользователя -->
        <div class="user-card">
          <img src="../images/profile.png" alt="Аватар">
          <div class="user-info">
            <p><br>Имя:</br> Amvi4</p>
            <p><br>Email:</br> agrostuden4ik@gmail.com</p>
            <p><br>Доставка:</br> г. Артём, ул. Ульяновская 9</p>
            <!-- и т.д. -->
          </div>
          <button>Изменить</button>
        </div>
      </section>

      <!-- другие секции: статистика, заказы, настройки и т.д. -->
        
    </main>
    <div class="orders">
            <h2>Мои заказы</h2>
            <div class="produts-ttlprice ttlprice-profile">
                <div class="cart-items" >
                    <!-- карточки продуктов в корзине -->
                    <div class="cart-products" :key="activeCategory">
                        <div class="cart-product" v-for="item in items" :key="item.title">
                            <div class="cart-product-name-2">{{ item.title }}</div>
                            <RouterLink to="/Specifications"><button>Характеристики</button></RouterLink>
                        </div>
                    </div>
                </div>
                <div class="to-cart">
                    <RouterLink to="/cart"><button><img src="../icons/cart2.svg" alt="" srcset="">Перейти в корзину</button></RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.profile-overview h1{
    color: black;
    font-size: 90px;
}
.user-info p{
    padding: 0;
    margin: 0;
}
.container {
    padding: 0 318px;
  min-height: calc(100vh -  (height-of-header + height-of-footer));
}
.orders{
    padding: 64px 0px;
}
.orders h2{
    color: black;
}
.ttlprice-profile{
    display: flex;
    align-items: start;
}

.sidebar {
  width: 240px;
  background-color: #fafafa;
}

.main-content {
  flex: 1;
  padding: 16px;
}

.user-card {
    padding: 20px;
    position: relative;
  display: flex;
  gap: 16px;
  align-items: center;
}
.user-card button{
    position: absolute;
    right: 0%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.user-card img{
    width: 200px;
    height: 200px;
}
.orders{
    color: black;
}
.cart-products button{
    font-size: 14px;
}
.to-cart{
    position: relative;
    padding: 20px;
    width: 200px;
    height: 200px;
}
.to-cart button{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 190px;
    position: absolute;
    transform: translate(50%, -30%);
    bottom: 0%;
    right: 50%;
}
.to-cart button img{
    width: 30px;
    height: 30px;
    margin: 0;
    padding: 0;
}
.cart-product-name-2{
    margin: 20px;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
  }
}
</style>