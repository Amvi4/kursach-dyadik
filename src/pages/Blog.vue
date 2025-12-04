<script>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

export default{
    components: { Header, Footer },

    data(){
        return{
            // блоги
            items: [
                {text:'Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего...', date:'14.02.2025', image:'/src/images/obzor.png'},
                {text:'BMC Kaius 01 идеальный гоночный гравийный велосипед', date:'25.01.2025', image:'/src/images/obzor2.png'},
                {text:'Все новые гоночные велосипеды BMC Fourstroke XC оснащены волшебным подседельным', date:'24.01.2024', image:'/src/images/obzor3.png'},
                {text:'Велосипед Wilier Grantismo SLR для шоссейных гонок', date:'24.01.2024', image:'/src/images/obzor4.png'},
                {text:'Первые поездки на новой гоночной ракете Wilier Urta SLR 100mm XC MTB, всего 9,8 кг!', date:'24.01.2023', image:'/src/images/obzor5.png'},
                {text:'Велосипед Wilier Grantismo SLR для шоссейных гонок', date:'24.01.2023', image:'/src/images/obzor6.png'},
            ]
        }
    }
}
</script>

<template>
<!-- блог -->
    <main class="main-blog">
        <h1>Блог</h1>
    </main>
    <div class="obzors">
        <article class="obzor" v-for="item in items" :key="item.text">
            <img :src="item.image">
            <div class="obzor-info">
                <div class="obzor-date">{{ item.date }}</div>
                <p># Обзор</p>
                <div class="obzor-text">{{ item.text }}</div>
                <a href="#">Подробнее</a>
            </div>
        </article>
    </div>

</template>

<style>
/* блог текст */
.obzors{
    display: flex;
    flex-wrap: wrap;
    margin: 48px 318px;
    gap: 40px 20px;
    justify-content: space-between;
    align-items: center;
}
.main-blog h1{
    padding: 0px;
    margin: 72px  0px;
}
.main-blog{
    padding: 1px 318px 10px;
    background-image: url('../images/blog.png');
}
.main-blog img{
    height: 100px;
}
/* карточка блога */
.obzor{
    position: relative;
    background-color: #032807;
    width: 400px;
}
.obzor img{
    min-width: 195px;
}
.obzor-info{
    height: 340px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 27px;
    justify-content: space-between;
}
.obzor-info a{
    margin: 15px 0px;
}
.obzor-text{
    color: white;
}
.obzor-date{
    color: white;
}
.obzor-info p{
    color: #AEDE90;
}
</style>