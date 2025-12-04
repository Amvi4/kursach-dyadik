<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { RouterLink } from 'vue-router';

    export default {
        components: { Header, Footer },
        name: "main",
        data() {
            return {
                // данные новинок
                items: [
                    { title: 'Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021', price: 38484, from: '/assets/images/country/italy.png', image: "/assets/images/bicycle-bianchi.png", category: 'mountain', stock: 0, },
                    { title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022', price: 49300, from:'/src/images/country/usa.png', image: '/src/images/bicycle-trekVerve.png', category: 'mountain', stock: 1,},
                    { title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022', price: 15000, from:'/src/images/country/usa.png', image: '/src/images/bicycle-trekMarlin.png', category: 'mountain', stock: 0,},
                ],

                activeCategory: 'mountain',
                // экипировка
                itemsdop: [
                    { title: 'Rudy Project Airstorm Lime Fluo White Shiny', price: 7990, image: "/src/images/kaska.png", stock: 0, },
                    { title: 'Rudy Project Protera Blue Orange Matt', price: 9420, image: "/src/images/kaska2.png", stock: 0, },
                    { title: 'Rudy Project Avenger Titanium Lime Matt', price: 9200, image: "/src/images/kaska3.png", stock: 0, },
                ],

                reviews: [
                    { title: 'BMC Kaius 01 идеальный гоночный гравийный велосипед', image: "/src/images/reviewimg.png", date: '25.01.2023'},
                ],
            };
            
        },

        methods: {
                goToPay() {
                    this.$inertia.visit('/pay');
                }
        }   
    };
</script>

<template>
    <!-- мейн картинка -->
    <main>
        <div class="main">
            <h1>Велосипеды</h1>
            <p>Outleap ACCORD — это городской велосипед, созданный для тех, кто<br>
                ценит своё время и не хочет разбираться в тонкостях<br>
                велоэксплуатации. Он устанавливает новый стандарт простоты и<br>
                надежности для ежедневных поездок.</p>
                <button>Подробнее</button>
        </div>
    </main>
    <!-- вот эти три хрени после мейн картинки -->
    <div class="kinds">
        <div class="first-kind">
            <h3>Экстремальное<br>
                вождение на горном<br>
                велосипеде</h3>
            <a href="http://">Подробнее</a>
        </div>
        <div class="second-kind">
            <h3>Велосипеды<br>
                для профессионалов</h3>
        </div>
         <div class="third-kind">
            <h3>Долгая поездка<br>
                на шоссейном велосипеде</h3>
        </div>
    </div>
    <!-- партнеры-->
     <div class="img-cont-cont">
    <img src="../images/partner.png" alt="партнеры" srcset="" class="img-cont">
    </div>
    <!-- новинки -->
    <div class="new">
        <h2 class="h2">Новинки</h2>
        <div class="new-cards" :key="activeCategory">
            <article class="new-card" v-for="item in items" :key="item.title">
                <RouterLink to="/specifications">
                <img class="card-img" :src="item.from" alt="страна">
                <div class="stocks">
                        <div  class="in-stock" v-if="item.stock === 1">В наличии</div>
                        <div class="no-in-stock" v-else>Распродано</div>
                    </div>
                <div class="cont-card-imgs">
                    <img class="card-img-bicycle" :src="item.image" :alt="item.title">
                    
                </div>
                <div class="card-text">
                    <div class="item-name">{{ item.title }}</div>
                    <div class="item-price">{{ item.price }}₽</div>
                </div>
                </RouterLink>
                <RouterLink to="/pay"><button class="one-click">➤  В 1 клик</button></RouterLink>
            </article>
            <div class="next-button">
                <p class="next-button-text"><img src="../icons/next.svg" alt="" srcset=""></p>
            </div>
        </div>
    </div>
    <!-- переход на ккаталог -->
    <div class="catalogs">
        <h2 class="h2">Каталог</h2>
        <div class="bicycles-catalog"><RouterLink to="/catalog">
            <h3 class="h3-catalog">Велосипеды</h3>
            <img src="../images/pngwing.png" alt="велосипед"></RouterLink>
        </div>
        <div class="bottom-catalog">
            <div class="trade-in-catalog">
                <RouterLink to="/catalog">
                <h3 class="h3-catalog">Trade-in</h3>
                <img src="../images/pngwing2.png" alt="велосипед"></RouterLink>
            </div>
            <div class="twocatalog-1">
                <div class="spare-parts-catalog">
                    <RouterLink to="/catalog">
                    <h3 class="h3-catalog">Запчасти</h3>
                    <img src="../images/pngwing3.png" alt="велосипед"></RouterLink>
                </div>
                <div class="accessories-catalog">
                    <RouterLink to="/catalog">
                    <h3 class="h3-catalog">Аксессуары</h3>
                    <img src="../images/pngwing4.png" alt="велосипед"></RouterLink>
                </div>
            </div>
            <div class="twocatalog-2">
                <div class="equipment-catalog">
                    <RouterLink to="/catalog">
                    <h3 class="h3-catalog">Экипировка</h3>
                    <img src="../images/pngwing5.png" alt="велосипед"></RouterLink>
                </div>
                <div class="bike-stations-catalog">
                    <RouterLink to="/catalog">
                    <h3 class="h3-catalog">Велостанки</h3>
                    <img src="../images/pngwing6.png" alt="велосипед"></RouterLink>
                </div>
            </div>
        </div>
    </div>
    <!-- перимущества -->
    <div class="advantages">
        <h2>Преимущества</h2>
        <div class="advantages-all">
            <img src="../images/man.png" alt="" srcset="">
            <div class="advantages-view">
                <div class="part1">
                    <div class="card">
                        <h3>БЕСПЛАТНАЯ ДОСТАВКА</h3>
                        <p>Мы пользуемся всеми популярными видами доставки</p>
                        <a href="#">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>ОБМЕН И ВОЗВРАТ</h3>
                        <p>Все товары обеспечены фирменной гарантией фирм-производителей</p>
                        <a href="#">Подробнее</a>
                    </div>
                </div>
                <div class="part2">
                    <div class="card">
                        <h3>ДОП. ОБСЛУЖИВАНИЕ</h3>
                        <p>Мы выполняем ремонт велосипеда любой сложности</p>
                        <a href="#">Подробнее</a>
                    </div>
                    <div class="card">
                        <h3>ОНЛАЙН ОПЛАТА</h3>
                        <p>Для удобства вы можете оплатить товар банковской картой через сайт</p>
                        <a href="#">Подробнее</a>
                    </div>
                    </div>
            </div>
        <img src="../images/block.png" alt="" srcset="" class="adv-img-right">
        </div>
    </div>
    <!-- карточки экипировки -->
    <div class="equip">
        <h2 class="h2">Экипировка</h2>
        <div class="equip-cards" :key="activeCategory">
            <article class="equip-card" v-for="item in itemsdop" :key="item.title">
                <RouterLink to="/specifications">
                <div class="cont-card-imgs">
                    <div class="stocks">
                        <div  class="in-stock" v-if="item.stock === 1">В наличии</div>
                        <div class="no-in-stock" v-else>Распродано</div>
                    </div>
                    <img class="card-img-bicycle" :src="item.image" :alt="item.title">
                    
                </div>
                <div class="card-text">
                    <div class="item-name">{{ item.title }}</div>
                    <div class="item-price">{{ item.price }}₽</div>
                </div>
                </RouterLink>
                <RouterLink to="/pay"><button class="one-click">➤  В 1 клик</button></RouterLink>
            </article>
        </div>
    </div>
    <!-- кконтакты -->
    <div class="map-contacts">
        <h2 class="h22">Контакты</h2>
        <img class="mapa" src="../images/map.png" alt="карта" srcset="">
        <div class="contact-number">
            <div class="info">
                <img src="../icons/smartphone2.svg" class="contact-img">
                <div class="numbers">
                    <div class="number">+7 (495) 055-75-86</div>
                    <div class="number">+7 (965) 142-22-99</div>
                </div>
            </div>
            <div class="info">
                <img src="../icons/kursor.svg" class="contact-img">
                <div class="numbers">
                    <div class="number">г. Москва, ул. </div>
                    <div class="number">Доватора, 7/8 с1</div>
                </div>
            </div>
            <div class="info">
                <img src="../icons/mail2.svg" class="contact-img">
                    <div class="numbers">
                    <div class="number">order@world-bike.ru</div>
                </div>
            </div>
            <div class="info">
                <img src="../icons/calendar.svg" class="contact-img">
                <div class="numbers">
                    <div class="number">Без выходных </div>
                    <div class="number">10:00-20:00</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* главная картинка */
    .main{
        padding: 125px 318px;
        background-image: url('../images/imageMain.png');
    }
    .main p{
        color: white;
    }
    /* вот эти 3 хрени после мейн картинки */
    .kinds{
        display: flex;
        margin: 33px 0px;
        align-items: center;
        justify-content: space-between;
    }
    .first-kind{
        height: 246px;
        background-color: #032807;
        padding: 0px 318px;
    }
    .first-kind h3{
        color: white;
    }
    .second-kind{
        padding: 48px 48px 48px 102px;
        background-color: #032807;
    }
    .second-kind h3{
        color: white;
    }
    .third-kind{
        padding: 30px 318px 30px 48px;
        background-color: #AEDE90;

    }
    .third-kind h3{
        color: black;
    }
    /* партнеры */
    .img-cont{
        margin: 30px 0px;
        max-width: 1870px;
    }
    /* новинки и другие карточки всего сайта */
    .new{
        padding: 30px 318px;
    }
    .new-cards{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 120px;
        position: relative;

    }
    .new-card{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 330px;
        height: 443px;
        transition: 0.4s;
    }
    .h2{
        color: black;
    }
    .next-button{
        margin: 0px;
        padding: 0px;
        width: 33px;
        height: 33px;
        background-color: black;
        color: white;
        font-size: 12px;
        position: absolute;
        right: 0%;
        border-radius: 50px;
        top: 200px;
        transition: 0.3s;
    }
    .next-button img{
        position: absolute;
        top: 4.5px;
        left: 10px;
        margin: 0px;
        padding: 0px;
    }
    .next-button:hover{
        position: absolute;
        background-color: rgb(54, 54, 54);
        z-index: 2;
    }
    .next-button:active{
        background-color: white;
        border: black;
        transition: 0s;
    }
    .item-name{
        color: black;
        font-size: 18px;
        padding: 16px 0px;
    }
    .item-price{
        color: #777777;
        font-size: 16px;
    }
    .card-img-bicycle{
        padding: 16px;
    }
    .card-img{
        position: absolute;
        top: 0;
    }
    .card-text{
        margin: 16px;
        position: absolute;
        bottom: 10%;
    }
    .cont-card-imgs{
        top: 0;
        position: absolute;
        width: 300px;
        z-index: -1;
    }
    .stocks{
        font-size: 16px;
        position: absolute;
        top: 0;
        right: 16px;

    }
    .in-stock{
        color: #4D932C;
    }
    .no-in-stock{
        color: #F53A20;
    }
    .one-click{
        margin: 10px;
        opacity: 0;
        transition: 0.4s;
        position: absolute;
        width: 95%;
        bottom: 0%;
    }
    .one-click img{
        margin: 0px 12px;
    }
    .new-card:hover{
        height: 529px;
        box-shadow: 0px 0px 8px 5px #d1d1d188;
    }
    .new-card:hover .one-click{
        display: block;
        position: absolute;
        opacity: 1;
        transition: 0.4s;
    }
    /* перход на каталог*/
    .advantages h2{
        padding: 0 318px;
        color: black;
    }
    .catalogs{
        margin: 30px 318px;
    }
    .bicycles-catalog{
        display: flex;
        width: 1280px;
        height: 300px;
        position: relative;
        background-color: #032807;
        text-align: center;
        align-items: center;
        transition: 0.4s;
        margin: 16px 0px;
    }
    .bicycles-catalog img{
        position: absolute;
        right: 0%;
        top: 0%;
    }
    .bicycles-catalog h3{
        margin: 0;
    }
    .h3-catalog{
        font-size: 64px;
        left: 80px;
        position: absolute;
        color: white;
    }
    .bicycles-catalog:hover{
        background-color:#AEDE90;
        color: black;
    }
    .bottom-catalog{
        display: flex;
        gap: 16px;
    }
    .trade-in-catalog{
        display: flex;
        width: 460px;
        height: 458px;
        position: relative;
        background-color: #032807;
        align-items: center;
        transition: 0.4s;
    }
    .trade-in-catalog img{
        position: absolute;
        bottom: 0%;
        right: 0%;
    }
    .trade-in-catalog h3{
        position: absolute;
        top: 15px;
    }
    .trade-in-catalog:hover{
        background-color:#AEDE90;
        color: black;
    }
    .twocatalog-1{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .spare-parts-catalog{
        display: flex;
        width: 400px;
        height: 190px;
        position: relative;
        background-color: #032807;
        align-items: center;
        transition: 0.4s;
    }
    .spare-parts-catalog img{
        position: absolute;
        bottom: 0%;
        right: 0%;
    }
    .spare-parts-catalog h3{
        position: absolute;
        left: 20px;
        top: 20px;
    }
    .spare-parts-catalog:hover{
        background-color:#AEDE90;
        color: black;
    }
    .accessories-catalog{
        display: flex;
        width: 400px;
        height: 252px;
        position: relative;
        background-color: #032807;
        align-items: center;
        transition: 0.4s;
    }
    .accessories-catalog img{
        position: absolute;
        top: 0%;
        right: 0%;
    }
    .accessories-catalog h3{
        position: absolute;
        bottom: 30px;
        left: 20px;
        margin: 0px;
    }
    .accessories-catalog:hover{
        background-color:#AEDE90;
        color: black;
    }
    .twocatalog-2{
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    .equipment-catalog{
        display: flex;
        width: 440px;
        height: 239px;
        position: relative;
        background-color: #032807;
        align-items: center;
        transition: 0.4s;
    }
    .equipment-catalog img{
        position: absolute;
        bottom: 0%;
        right: 0%;
    }
    .equipment-catalog h3{
        position: absolute;
        top: 0px;
        left: 20px;
        margin: 0px;
    }
    .equipment-catalog:hover{
        background-color:#AEDE90;
        color: black;
    }
    .bike-stations-catalog{
        display: flex;
        width: 440px;
        height: 203px;
        position: relative;
        background-color: #032807;
        align-items: center;
        transition: 0.4s;
    }
    .bike-stations-catalog img{
        position: absolute;
        bottom: 0%;
        right: 0%;
    }
    .bike-stations-catalog h3{
        position: absolute;
        margin: 0px;
        left: 0px;
        bottom: 30px;
        z-index: 1;
    }
    .bike-stations-catalog:hover{
        background-color:#AEDE90;
        color: black;
    }
    /* преимущества */
    .advantages-all{
        display: flex;
        gap: 20px;
        margin: 30px 0px;
    }
    .advantages-view{
        display: flex;
        gap: 15px;
        
    }
    .card{
        position: relative;
        background-color: #AEDE90;
        color: black;
        width: 290px;
        height: 267px;
    }
    .card a{
        color: black;
        position: absolute;
        bottom: 40px;
    }
    .card h3{
        color: black;
    }
    .part1{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .part2{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .adv-img-right{
        max-width: 300px;
    }
    /* карточки эккипировки */
     .equip{
        padding: 30px 318px;
    }
    .equip-cards{
        display: flex;
        justify-content: center;
        gap: 120px;
    }
    .equip-card{
        position: relative;
        width: 330px;
        height: 443px;
        transition: 0.4s;
    }
    .equip-card:hover{
        height: 529px;
        box-shadow: 0px 0px 8px 5px #d1d1d188;
    }
    .equip-card:hover .one-click{
        opacity: 1;
        transition: 0.4s;
    }
    .review{
        padding: 30px 318px;
    }
    .review-cards{
        background-color: #032807;
        display: flex;
        gap: 40px;
    }
    .review-card{
        position: relative;
        width: 400px;
        height: 443px;
        transition: 0.4s;
    }
    /* контакты */
    .contact-number{
        display: flex;
        margin: 30px 318px 318px;
        gap: 140px;
    }
    .contact-img{
        max-width: 32px;
        max-height: 32px;
    }
    .info{
        color:#777777;
        display: flex;
        width: 215px;
        gap: 10px;
    }
    .numbers{
        display: flex;
        flex-direction: column;
    }
    .h22{
        color: black;
        padding: 30px 318px;
    }
    .mapa{
        max-width: 100%;
    }
</style>