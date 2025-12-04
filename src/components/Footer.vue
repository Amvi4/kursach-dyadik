<script setup>
</script>

<template>
    <footer>
        <div class="footer1">
            <h2>Подпишитесь на наши новости!</h2>
            <div class="all-input">
                <div class="inputs">
                    <input type="email" name="email" id="footer-email" placeholder="E-mail">
                    <label class="checkbox-agree">
                        <input type="checkbox" name="agreement" id="footer-agree"><span class="agree-text">Согласен(на) на обработку персональных данных</span>
                    </label>
                </div>
                <button type="button" id="footer-btn">Подписаться</button>
            </div>
        </div>
        <div class="footer2">
            <img src="../icons/Logo2.svg" alt="" srcset="">
            <div class="information">
                <nav class="footer-nav">
                    <h3>Каталог</h3>
                    <ul class="catalog-list">
                        <li class="lists"><a href="" class="lists-text">Trade-in</a></li>
                        <li class="lists"><a href="" class="lists-text">Велосипеды</a></li>
                        <li class="lists"><a href="" class="lists-text">Экипировка</a></li>
                        <li class="lists"><a href="" class="lists-text">Запчасти</a></li>
                        <li class="lists"><a href="" class="lists-text">Велостанки</a></li>
                        <li class="lists"><a href="" class="lists-text">Аксессуары</a></li>
                    </ul>
                </nav>

                <nav class="footer-nav">
                    <h3>Для клиента</h3>
                    <ul class="catalog-list">
                        <li class="lists"><a href="" class="lists-text">О нас</a></li>
                        <li class="lists"><a href="" class="lists-text">Доставка и оплата</a></li>
                        <li class="lists"><a href="" class="lists-text">Блог</a></li>
                        <li class="lists"><a href="" class="lists-text">Контакты</a></li>
                        <li class="lists"><a href="" class="lists-text">Веломастерская</a></li>
                        <li class="lists"><a href="" class="lists-text">Хранение</a></li>
                        <li class="lists"><a href="" class="lists-text">Гарантии</a></li>
                    </ul>
                </nav>

                <nav class="footer-nav">
                    <h3>Контакты</h3>
                    <div class="numbers">
                        
                        <ul class="numbeers">
                            <li  class="number">+7(999)999-99-99</li>
                            <li  class="number">+7(999)999-99-99</li>
                        </ul>
                    </div>
                    <div class="numbers">
                        
                        <ul class="numbeers">
                            <li  class="number">г.Москва,  ул.</li>
                            <li  class="number">Доватора, 7/8 с1</li>
                        </ul>
                    </div>
                    <div class="numbers">
                        
                        <ul class="numbeers">
                            <li  class="number">order@world-bike.ru</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </footer>
</template>

<style>
.information{
    display: flex;
    gap: 91px;
}
.footer2{
    background-color: #032807;
    display: flex;
    align-items:start;
    padding: 56px 318px;
    justify-content: space-between;

}
.numbers{
    display: flex;
}
.footer-nav{
    display: flex;
    flex-direction: column;
    align-items:first start;
}
.footer-nav ul{
    color: white;
}
.lists-text{
    color: white;
}
.footer1{
    background-color: #AEDE90;
    padding: 56px 318px;
}
.footer1 h2{
    color: black;
}
.all-input{
    display: flex;
}
.inputs{
    display: flex;
    flex-direction: column;
    gap: 14px;
}
#footer-email{
    background-color: white;
    border: none;
    border-radius: 5px;
    color: black;
    width: 346px;
    height: 28px;
    font-size: 16px;
    padding: 10px 16px;
}
.checkbox-agree{
    display: flex;
    align-items: center;
    gap: 10px;
}
#footer-agree{
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 4px;
    background-color: WHITE;
    color: black;
}
.agree-text{
    color: black;
}
#footer-btn{
    width: 284px;
    height: 46px;
    background-color: #032807;
    color: white;
}
#footer-btn:hover{
    background-color: #AEDE90;
    color: black;
    border: 2px      #032807;

}
.ogo{
    width: 32px;
    height: 32px;
}
.numbeers{
    padding: 0;
}
.catalog-list{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
}
.footer-nav h3{
    color: white;
}
.numbeers li{
    color: white;
}
</style>