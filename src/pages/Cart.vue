<script>
    import Header from '../components/Header.vue';
    import Footer from '../components/Footer.vue';
    import { computed } from 'vue';
    
    export default{

        components: {Header, Footer},

        data(){
            return{
                // продукты в корзине
                items:[
                    { title: 'Bianchi AQUILA L DURA ACE DI2 TEAM JUMBO 2021', price: 38484, 
                    from: '/assets/images/country/italy.png', image: "/assets/images/bicycle-bianchi.png", category: 'mountain', stock: 0, },
                    { title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022', price: 49300, 
                    from:'/assets/images/country/usa.png', image: '/assets/images/bicycle-trekVerve.png', category: 'mountain', stock: 1,},
                    { title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022', price: 15000, 
                    from:'/assets/images/country/usa.png', image: '/assets/images/bicycle-trekMarlin.png', category: 'mountain', stock: 0,},
                ],
                activeCategory: '',
                // похожие товары
                itemsdop:[
                    { title: 'Look 977 BLACK FLUO YELLOW GREEN XT 2x11S AMC 2018', price: 38484, 
                     image: "/assets/images/Look977.png", category: 'mountain', stock: 0, count: 1},
                    { title: 'Trek Verve 2 Disc Lithium Grey HYBD 2022', price: 49300, 
                    from:'/assets/images/country/usa.png', image: '/assets/images/bicycle-trekVerve.png', category: 'mountain', stock: 1, count: 1},
                    { title: 'Trek Marlin 7 Matte Nautical Navy Matte Anth ATB 29 2022', price: 15000, 
                    from:'/assets/images/country/usa.png', image: '/assets/images/bicycle-trekMarlin.png', category: 'mountain', stock: 0, count: 1},
                    
                ],
            }
        },

        methods: {
            increment(item) {
                item.count++
            },
            decrement(item) {
                if (item.count > 1) item.count--
            },
        },
        computed: {
            totalSum() {
                return this.itemsdop.reduce((sum, item) => {
                    return sum + item.price * item.count
                }, 0)
            }
        }
    }

</script>

<template>

<!-- корзина -->
    <div class="cart">
        <h1>Корзина</h1>
        <div class="produts-ttlprice">
            <div class="cart-items" >
                <div class="cart-btns">
                    <RouterLink to="/catalog" class="back-to-catalog">Вернуться к покупкам</RouterLink>
                    <button class="clear-cart">Очистить корзину</button>
                </div>
                <!-- карточки продуктов в корзине -->
                <div class="cart-products" :key="activeCategory">
                    <div class="cart-product" v-for="item in itemsdop" :key="item.title">
                        <img :src="item.image">
                        <div class="cart-product-name">{{ item.title }}</div>
                        <div class="cart-product-quantity">
                            <button class="qty-btn" @click="decrement(item)">−</button>
                            <span class="qty">{{ item.count }}</span>
                            <button class="qty-btn" @click="increment(item)">+</button>
                        </div>
                        <div class="cart-product-price">{{ item.count * item.price}} ₽</div>
                        <RouterLink to="/specifications"><button>Характеристики</button></RouterLink>
                    </div>
                </div>
            </div>
            <!-- итоговая сумма -->
            <div class="itog">
                <div  class="itog-price">
                    <p>Итого</p><div class="totalPrice">{{ totalSum }} ₽</div>
                </div>
                <RouterLink to="/pay"><button >Оформить заказ</button></RouterLink>
            </div>
        </div>
    </div>
<!-- похожие товары -->
    <div class="new">
        <h2 class="h2">Похожие товары</h2>
        <div class="new-cards" :key="activeCategory">
            <article class="new-card" v-for="item in items" :key="item.title">
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
                <button class="one-click">➤  В 1 клик</button>
            </article>
            <div class="next-button">
                <p class="next-button-text"><img src="../icons/next.svg" alt="" srcset=""></p>
            </div>
        </div>
    </div>

</template>

<style>
/* карточи продуктов в корзине */
.produts-ttlprice{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
}
.cart{
    padding: 30px 318px;
    color: black;
}
.cart h1{
    color: black;
}
.cart-items{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 949px;
}
.cart-btns{
    display: flex;
    justify-content: space-between;
}
.back-to-catalog{
    color: #4D932C;
}
.cart-products{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.cart-product{
    padding: 5px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.cart-product img{
    margin: 0;
    padding: 0;
    width: 179px;
    height: 161px;
}
.cart-product-name{
    width: 200px;
    left: 0%;
}
.cart-product-quantity{
    border: 2px solid #E5E5E5;
    border-radius: 12px;

}
.qty-btn{
    background-color: white;
    outline: none;
    color: black;
}
.qty-btn:hover{
    background-color: white;
    color: black;
}
.itog{
    padding: 20px;
    width: 255px;
}
.itog-price{
    margin: 100px 0px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
}
.itog button{
    margin: 0px 14%;
    width: 200px;
}
</style>