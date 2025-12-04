<script setup>
    const items = [
        { title: 'Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021', price: 38484, from: '/src/images/country/italy.png', image: "/src/images/bicycle-bianchi.png", category: 'mountain', stock: 0, },
        { title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022', price: 49300, from:'/src/images/country/usa.png', image: '/src/images/bicycle-trekVerve.png', category: 'mountain', stock: 1,},
        { title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022', price: 15000, from:'/src/images/country/usa.png', image: '/src/images/bicycle-trekMarlin.png', category: 'mountain', stock: 0,},
    ]
</script>

<template>
    <div class="spec">
        <img src="../images/adv.png" alt="велосипед" srcset="">
        <div class="spec-info">
            <h1>Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018</h1>
            <p class="spec-text">В наличии</p>
            <h2>435000 ₽</h2>
            <p>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри.</p>
                <RouterLink to="/cart"><button>В корзину</button></RouterLink>
        </div>
    </div>
    <div class="opisaniye">
        <h2>Описание</h2>
        <p>Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых лёгких рам среди гоночных хардтейлов для кросс-кантри. Scott Scale 700 RC — это рама из композитного волокна HMX, гоночная трансмиссия Sram XX1/X01 1×11, дисковые тормоза Shimano XTR M9000 и гоночные колеса Syncros XR RC. Байк Нино Шуртера для шорт-трек кросс-кантри.</p>
    </div>
    <div class="opishar">
        <h2>Характеристика</h2>
        <ul>
            <li>Цвет<p>Жёлтый</p></li>
            <li>Год<p>2016</p></li>
            <li>Диаметр колеса<p>27.5</p></li>
            <li>Материал рамы<p>Карбон</p></li>
            <li>Размер<p>L</p></li>
            <li>Страна<p>Швейцария</p></li>
            <li>Производитель<p>Scott</p></li>
            <li>Покрышки<p>Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound</p></li>
            <li>Рама<p>Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL</p></li>
            <li>Подседельный Штырь<p>Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm</p></li>
            <li>Седло<p>Ritchey WCS Streem V3 Titanium rails</p></li>
            <li>Вилка<p>Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm</p></li>
            <li>Вынос<p>Ritchey WCS C–260 700 Series: +6° / 900 Series: -6° / 31.8mm / 1 1/8»</p></li>
            <li>Колеса<p>Syncros XR RC</p></li>
            <li>Руль<p>Ritchey Carbon WCS / 9° / 720mm / грипсы с замком</p></li>
            <li>Тип тормозов<p>Дисковый гидравлический</p></li>
            <li>Тормозная система<p>Shimano XTR M9000 Disc 180/F and 160/Rmm SM-RT81 IceTech CL диски</p></li>
            <li>Манетки<p>SRAM XO1 Trigger</p></li>
            <li>Система шатунов<p>SRAM XX1 GXP PF DM Carbon crankarm / QF 156 700 Series: 34T / 900 Series: 32T</p></li>
            <li>Задний переключатель<p>SRAM XX1</p></li>
            <li>Цепь<p>SRAM PCX1</p></li>
            <li>Количество скоростей<p>11</p></li>
            <li>Гарантия<p>1 год</p></li>
        </ul>
    </div>
    <div class="delivery">
        <h2>Доставка</h2>
        <img src="../images/delivery.png" alt="доставка" srcset="">
        <h3>Для удобства покупателей действует несколько способов доставки товаров</h3>
        <ul>
            <li>•  Доставка по Москве, в пределах МКАД</li>
            <li>• Доставка по Московской Области</li>
            <li>• Доставка в другие регионы России</li>
        </ul>
        <p>Любой из способов доступен при оформление заказа через сайт или у операторов</p>
        <p>Велосипеды и вело-станки доставляются в собранном и настроенном виде.</p>
        <p>На любые вопросы по правилам и стоимости доставки ответят оператор: <span class="green">+7 (495) 055-75-86</span></p>
        <h3>Для любого заказа возможен самовывоз из магазина</h3>
    </div>

    <div class="new">
        <h2 class="h2">Похожие товары</h2>
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
</template>

<style>
.specifications{
 color: black;
}
.spec h1, h2, p {
    color: black;
}
.spec h1, h2{
    font-size: 40px;
}
.spec{
    padding: 64px 318px;
    display: flex;
    gap: 40px;
    justify-content: space-between;

}
.spec img{
    width: 623px;
    height: 560px;
}
.spec-text{
    color: #4D932C;
}
/* Описание */
.opisaniye{
    padding: 64px 318px;
}
/* Характеристика */
.opishar{
    padding: 64px 318px;
}
.opishar ul{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.opishar ul li{
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.opishar ul li p{
    color: #7777;
    width: 600px;
    text-align: end;
}
/* Доставка */
.delivery{
    padding: 64px 318px;
    display: flex;
    flex-direction: column;
    text-align: start;
}
.delivery h2, h3, p, li{
    color:  black;
}
.green{
    color: #4D932C;
}
.delivery li{
    color: black;
}
.delivery h3{
    font-weight: 900;
}
</style>