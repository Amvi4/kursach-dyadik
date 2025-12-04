<script setup>
import { computed, ref } from 'vue';
// данные продукта
const items = [
  { title: 'Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021', price: 38484, from: '/src/images/country/italy.png', image: '/src/images/bicycle-bianchi.png', category: 'mountain', stock: 1 },
  { title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022', price: 49300, from: '/src/images/country/usa.png', image: '/src/images/bicycle-trekVerve.png', category: 'city', stock: 1 },
  { title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022', price: 15000, from: '/src/images/country/usa.png', image: '/src/images/bicycle-trekMarlin.png', category: '2podves', stock: 1 },
  { title: 'Look 977 BLACK FLUO YELLOW GREEN XT 2x11S ', price: 12434, from: '/src/images/country/switzerland.png', image: '/src/images/Look977.png', category: 'city', stock: 1 },
  { title: 'Trek Dual Sport 2 Mulsanne Hybd 2022', price: 85634, from: '/src/images/country/italy.png', image: '/src/images/trekDual.png', category: '2podves', stock: 1 },
  { title: 'Orbea ALMA H30 2021', price: 12419, from: '/src/images/country/france.png', image: '/src/images/OrbeaALMA.png', category: 'mountain', stock: 1 },
  { title: 'Trek Fx 3 Disc Dnister Black HYBD 2022', price: 64363, from: '/src/images/country/italy.png', image: '/src/images/trekFx.png', category: 'graviy', stock: 0 },
  { title: 'Scott Scale 700 RS 2016', price: 54322, from: '/src/images/country/france.png', image: '/src/images/scottScale.png', category: 'mountain', stock: 1 },
  { title: 'Look 979 BLACK FLUO YELLOW GREEN XT 2x11S ', price: 49399, from: '/src/images/country/italy.png', image: '/src/images/look979.png', category: 'mountain', stock: 1 },
  { title: 'Scott Scale 700 SL 2016', price: 84579, from: '/src/images/country/spain.png', image: '/src/images/scottScale2.png', category: 'mountain', stock: 1 },
  { title: 'Trek Marlin 4 Matte Anthracite ATB 29 2022', price: 34790, from: '/src/images/country/italy.png', image: '/src/images/trekMarlin2.png', category: 'graviy', stock: 0 },
  { title: 'Orbea RUDE 10 Черный 2022', price: 76589, from: '/src/images/country/spain.png', image: '/src/images/orbeaRUDE.png', category: 'mountain', stock: 1 },
  { title: 'Trek Marlin 5 Lithium Grey Chrome ATB 27.5 2022', price: 21000, from: '/src/images/country/usa.png', image: '/src/images/trekMarlin5.png', category: 'triatlon', stock: 1 },
  { title: 'Trek Marlin 4 Aloha ATB 27.5 2022', price: 23478, from: '/src/images/country/usa.png', image: '/src/images/trekMarlin4.png', category: 'triatlon', stock: 1 },
];

const activeCategory = ref('mountain');

const filteredItems = computed(() => {
  if (!activeCategory.value) return items;
  return items.filter(i => i.category === activeCategory.value);
}); 

function clearFilters() {
  activeCategory.value = '';
}
</script>

<template>
<!-- фльтры -->
    <main class="main-catalog">
        <h1>Каталог</h1>
    </main>

    <div class="catalog-filtres">
        <h2>Категории</h2>
        <div class="filter-forWhat">
        <label class="checkboxes">
        <input type="radio" class="filcheckbox" name="for" v-model="activeCategory" value="triatlon" />
        <span class="fakechekbox"></span>
        Велосипеды для триатлона
      </label>
      <label class="checkboxes">
        <input type="radio" class="filcheckbox" name="for" v-model="activeCategory" value="mountain" />
        <span class="fakechekbox"></span>
        Горные велосипеды
      </label>
      <label class="checkboxes">
        <input type="radio" class="filcheckbox" name="for" v-model="activeCategory" value="city" />
        <span class="fakechekbox"></span>
        Городские велосипеды
      </label>
      <label class="checkboxes">
        <input type="radio" class="filcheckbox" name="for" v-model="activeCategory" value="graviy" />
        <span class="fakechekbox"></span>
        Гравийные велосипеды
      </label>
      <label class="checkboxes">
        <input type="radio" class="filcheckbox" name="for" v-model="activeCategory" value="2podves" />
        <span class="fakechekbox"></span>
        Двухподвесные велосипеды
      </label>
        </div>
        <button class="clear-btn" @click="clearFilters">Очистить фильтры</button>
    </div>
<!-- каталог -->
    <div class="new">
        <h2 class="h2">Каталог</h2>
        <div class="new-cards" :key="activeCategory">
            <article class="new-card" v-for="item in filteredItems" :key="item.title"><RouterLink to="/specifications">
                <div class="cont-card-imgs">
                    <div class="stocks">
                        <div  class="in-stock" v-if="item.stock === 1">В наличии</div>
                        <div class="no-in-stock" v-else>Распродано</div>
                    </div>
                    <img class="card-img" :src="item.from" alt="страна">
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

</template>

<style>
.catalog-filtres{
    height: 140px;
    padding: 10px 318px;
    display: flex;
    gap: 0px 50px;
    color: black;
    align-items: center;
    justify-content: space-between;
    background-color: #AEDE90;
}
.catalog-filtres h2{
    color: black;
}
.catalog-filtres h2{
    margin: 0;
    padding: 0;
}
.filter-forWhat{
    display: flex;
    flex-wrap: wrap;
    gap: 10px 40px;
}
.filter-forWhat input{
    margin: 0;
    padding: 0;
}
.checkboxes{
    padding: 8px;
    width: 200px;
    height: 40px;
    display: flex;
    gap: 10px;
    font-size: 12px;
    transition: 0.4s;
    align-items: center;
    border-radius: 8px;
    color: black;
    font-size: 11px;
}
.clear-btn{
    background-color: #032807;
    color: white;
    width: 250px;
    height: 60px;
}
.clear-btn:hover{
    background-color: #AEDE90;
    color: black;
}
.checkboxes:hover{
    background-color: #032807;
    color: white;
}
.checkboxes p{
 margin: 0;
}
.filcheckbox{
    display: none;
}
.fakechekbox {
    display: block;
    width: 15px;
    height: 15px;
    border: 1px solid black;
    background-color: white;
    border-radius: 8px;
    position: relative;
}

.fakechekbox::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.3s;
    border-radius: 8px;
    background: #032807; /* цвет внутреннего кружка */
}

/* внутренний кружок появляется только когда radio отмечен */
.filcheckbox:checked + .fakechekbox::before {
    opacity: 1;
}

/* фон становится зелёным */
.filcheckbox:checked + .fakechekbox {
    background-color: #032807;
    border: none;
}

.main-catalog{
    padding: 78px 318px;
    background-image: url('../images/catalog.png');
}
.main-catalog h1{
    margin: 0px;
    padding: 0px;
}
p{
    color: black;
}
.card-img-bicycle{
    height: 255px;
    width: 255px;
}
</style>