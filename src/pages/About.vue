<script setup>

</script>

<template>
    <!-- майцн картинка -->
    <main class="about">
        <h1>О нас</h1>
    </main>
    <!-- средство -->
    <div class="sredstvo">
        <h2><strong id="green">Велосипед</strong> - это не просто средство передвижения!</h2>
        <div class="sredstvo-conts">
            <div class="sredstvo-cont">
                <h3>Хранение</h3>
                <p>Любишь кататься — люби и велосипед в квартире на зиму парковать или сдавай к нам на хранение и обслуживание.</p>
                <a href="mailto:">Подробнее</a>
            </div>
            <div class="sredstvo-cont">
                <h3>Веломастерская</h3>
                <p>Если вы купили велосипед в нашем магазине, то то можете не волноваться о настройке и проверке, так как мы это выполняем в рамках предпродажной подготовки.</p>
                <a href="mailto:">Подробнее</a>
            </div>
            <div class="sredstvo-cont">
                <h3>Гарантия</h3>
                <p>Также, для удобства покупателей, наш магазин помогает (участвует) в формирование гарантийных запросов по всем нижеперечисленным брендам. При любом гарантийном случае можно обращаться напрямую к нам</p>
                <a href="mailto:">Подробнее</a>
            </div>
        </div>
    </div>
    <!-- пара слов -->
    <div class="words">
        <div class="words-text">
            <h2>НЕСКОЛЬКО СЛОВ О НАС И НАШЕМ ДЕЛЕ</h2>
            <p>Велосипед — это не просто средство передвижения. Мы, команда World-Bike, уверены в этом. Для нас велосипед — это целая жизнь, полная свободы, драйва, приключений и новых открытий. 
                <br><br>
                Мы искренне любим своё дело и стараемся, чтобы и для вас велосипед стал неотъемлемой частью жизни.
            </p>
        </div>
        <img src="../images/zhopa.png" alt="велосипеист сзади" srcset="">
    </div>
    <!-- лучшее -->
    <div class="best">
        <h2>МЫ СОБРАЛИ ДЛЯ ВАС ЛУЧШЕЕ ИЗ ВЕЛОСИПЕДНОГО МирА</h2>
        <div class="best-text-conts">
            <div class="best-text-cont">
                World-Bike специализируется на продаже и обслуживании велосипедов, запчастей, аксессуаров для них и экипировки
            </div>
            <div class="best-text-cont" id="text-dif">
                Мы знаем цену качеству. Поэтому в World-Bike только качественные премиальные товары по соответствующим ценам. А под заказ мы соберём для вас кастомный велосипед с уникальным дизайном и техническими характеристиками!
            </div>
        </div>
        <img src="../images/bicWorld.png" alt="" srcset="">
    </div>
    <!-- команда -->
     <div class="team">
        <h2>WORLD-BIKE – ЭТО В ПЕРВУЮ ОЧЕРЕДЬ КОМАНДА!</h2>
        <div class="team-text-img">
            <div class="team-texts">
                <div class="team-text">Все наши сотрудники — это бывшие профессиональные велосипедисты, чемпионы и призёры соревнований Европы и России, участники отечественной сборной. Не сомневайтесь, если кто-то и способен предоставить вам по-настоящему профессиональную консультацию, то это они.</div>
                <div class="team-text">
                    <h3>Консультанты World-Bike помогут вам в любом вопросе:</h3>
                    <ul class="team-123">
                        <li>подбор велосипеда под ваш рост, вес, стиль езды и цели покупки байка;</li>
                        <li>помощь в выборе запчастей, аксессуаров и экипировки;</li>
                        <li>консультации по любой теме, касающейся спортивной тематики.</li>
                    </ul>
                </div>
            </div>
            <img src="../images/team.png" alt="команда" srcset="">
        </div>
     </div>
     <!-- контакты -->
    <div class="about-contacts">
        <h2>Контакты</h2>
        <div class="all-info">
            <div class="uls">
                <ul>
                    <h3>Адрес магазина;</h3>
                    <li>Россия, Москва, ул. Доватора, дом 7/8 с1</li>
                </ul>
                <ul>
                    <h3>Телефоны:</h3>
                    <li>+7 (495) 055-75-86</li>
                    <li>+7 (965) 142-22-99</li>
                </ul>
                <ul>
                    <h3>E-mail:</h3>
                    <li>order@world-bike.ru — заказы</li>
                    <li>nfo@world-bike.ru — информация</li>
                    <li>opt@world-bike.ru — опт</li>
                </ul>
            </div>
            <div class="ur-info">
                <h3>Юридическая информация:</h3>
                <ul>
                    <li>Наименование:<p>ИП НЕТРЕБИН ВЛАДИСЛАВ ВЯЧЕСЛАВОВИЧ</p></li>
                    <li>ИНН: <p>402573939444</p></li>
                    <li>ОГРН: <p>317402700004683</p></li>
                    <li>Фактический адрес: <p>Москва, ул. Доватора, дом 7/8 с1</p></li>
                    <li>Юридический адрес: <p>Москва, ул. Доватора, дом 7/8 с1</p></li>
                    <li>Расчетный счет: <p>40802810800000085888</p></li>
                    <li>Банк: <p>АО «ТИНЬКОФФ БАНК»</p></li>
                    <li>Корр.счет: <p>30101810145250000974</p></li>
                    <li>БИК: <p>044525974</p></li>
                </ul>
            </div>
        </div>
      </div>
      <img src="../images/partner.png" alt="партнеры" srcset="" class="img-cont">
</template>

<style>
/* мейн картинка */
.about{
    padding: 0 318px;
    height: 278px;
    background-image: url('../images/about.png');
}
.about h1{
    margin: 0;
    padding: 64px 0px;
}
/* средство */
.sredstvo{
    padding: 64px 318px;
}
.sredstvo h2{
        color: black;
}
#green{
    color: #AEDE90;
}
.sredstvo-conts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}
.sredstvo-cont{
    position: relative;
    padding: 32px;
    width: 400px;
    height: 334px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: #032807;
    overflow: hidden;
}
.sredstvo-cont::before{
    position: absolute;
    top: -198%;
    left: -150%;
    content: '';
    display: block;
    width: 300%;
    height: 300%;
    background-color: #AEDE90;
    border-radius: 100%;
    z-index: 0;
}
.sredstvo-cont p{
    margin: 0;
    padding: 0;
    color: black;
    font-size: 16px;
    z-index: 1;
}
.sredstvo-cont h3{
    margin: 0;
    padding: 0;
    color: black;
    font-size: 24px;
    z-index: 1;

}
.sredstvo-cont a{
    margin: 0;
    padding: 0;
    color: black;
    font-size: 16px;
    z-index: 1;
}
/* пара слов */
.words{
    padding: 64px 0;
    display: flex;
    align-items: center;

}
.words-text{
    display: flex;
    flex-direction: column;
    padding: 0px 120px 0px 318px;
    justify-content: center;
    background-color: #032807;
    height: 586px;
}
.words-text h2{
    font-size: 64px;
    margin: 0;
    color: white;
}
.words-text p{
    margin: 0;
    color: white;
    font-size: 16px;
}
/* самое лучшее */
.best{
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    gap: 44px;
}
.best h2{
    margin: 0;
    padding: 0 318px;
    color: black;
}
.best-text-conts{
    padding: 0 318px;
    display: flex;
    gap: 40px;
    color: black;
}
#text-dif{
    color: #777777;
}
/* команда */
.team{
    color: black;
    padding: 64px 318px;
}
.team-text{
    justify-content: start;
}
.team-text-img{
    display: flex;
    gap: 42px;
}
.team h2{
    color: black;
}
.team-text h3{
    color: black;
}
.team-123{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.team-text ul{
    margin: 0;  
    padding: 0;
}
.team-text li{
    padding: 0;
    margin: 0;
    color: #777777;
}
/* контакты */
.about-contacts{
    padding: 64px 318px 600px;
    color: black
}
.about-contacts h2,  h3{
    color: black;

}

.about-contacts li{
    color: #777777;
}
.all-info{
    display: flex;
    font-weight: 900;
    justify-content: space-between;
}
.ur-info li{
    width: 620px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ur-info ul{
    display: flex;
    flex-direction: column;
    gap: 15px;
}
li p{
    margin: 0;
    padding: 0;
}
</style>