<template>
  <teleport to="body" >
    <div v-if="showCheckout" class="fixed top-0 left-0 w-full h-full bg-[#131313ee] flex items-center justify-center z-10">
        <div class="w-full h-full bg-[#131313ee] relative overflow-hidden overflow-y-auto">
            <div class="w-full h-[80px] px-[50px] lg:px-[200px] border-b-[1px] flex items-center justify-between">
                <div class="w-full h-auto text-[30px] text-white">
                    <a href="#" class="cursor-pointer" @click="this.$router.push('/')">E-COMMERCE</a>
                </div>
                <div class="flex gap-4">
                    <div class="text-white cursor-pointer">
                        <IconCart style="font-size: 20px" />
                    </div>
                    <div class="text-white cursor-pointer" @click="closeCheckout">
                        <IconClose style="font-size: 20px" />
                    </div>
                </div>
            </div>
            <div v-if="products.length" class="w-full h-full flex flex-col lg:flex-row">
                <div class="w-[100%] lg:w-[50%] px-[20px] md:px-[50px] lg:pl-[200px] lg:pr-[50px] py-[30px]">
                    <CheckoutBlock :title="'Contact'" :size="'lg'">
                        <CheckoutInput placeholder="Email or mobile phone number" v-model="email" :error="formErrors.email"/>
                    </CheckoutBlock>
                    <CheckoutBlock :title="'Delivery'" :size="'lg'">
                        <div class="flex gap-2">
                            <CheckoutSelect :countries="countries" v-model="country" :error="formErrors.country"/>
                        </div>
                        <div class="flex flex-col md:flex-row gap-2">
                            <CheckoutInput placeholder="City" v-model="city" :error="formErrors.city"/>
                            <CheckoutInput placeholder="State" v-model="state" :error="formErrors.state"/>
                            <CheckoutInput placeholder="ZIP code" v-model="zip" :error="formErrors.zip"/>
                        </div>
                    </CheckoutBlock>
                    <CheckoutBlock :title="'User Info'" :size="'lg'">
                        <div class="flex flex-col md:flex-row gap-2">
                            <CheckoutInput placeholder="First name" v-model="firstname" :error="formErrors.firstname"/>
                            <CheckoutInput placeholder="Lust name" v-model="lustname" :error="formErrors.lustname"/>
                        </div>
                    </CheckoutBlock>
                    <CheckoutBlock :title="'Shipping method'" :size="'sm'">
                        <CheckoutShipping :active="showShippingMethods"/>
                    </CheckoutBlock>

                    <div 
                      class="w-full h-[50px] mt-[30px] flex items-center justify-center rounded-md bg-[#303030ee] border border-[#5c5c5c] text-white"
                      @click="submitForm"
                    >
                        Set Order
                    </div>
                </div>


                <div class="w-[100%] lg:w-[50%] h-auto lg:h-screen px-[50px] lg:p-[30px] py-[30px] bg-white" @click="consoleState">
                    <div class="w-full h-auto flex flex-col gap-4">
                        <CheckoutProduct v-for="product in products" :key="product._id" :product="product" />
                    </div>
                    <div class="min-w-[150px] lg:w-[450px] h-auto pt-8 flex flex-col gap-2">
                        <div class="w-full h-auto flex justify-between text-[12px] lg:text-[14px]">
                            <div>Subtotal</div>
                            <div>$504.00</div>
                        </div>
                        <div class="w-full h-auto flex justify-between text-[12px] lg:text-[14px]">
                            <div>Shipping</div>
                            <div>$72.59</div>
                        </div>
                        <div class="w-full h-auto flex justify-between font-semibold text-[16px] lg:text-[18px]">
                            <div>Total</div>
                            <div>USD $504.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="w-full h-auto flex flex-col items-center justify-center gap-5 py-[100px]">
                <img class="w-[600px] h-auto" src="https://menabasket.com/pub/static/version1618825676/frontend/MageBig/martfury_layout03/en_US/images/empty-cart.svg" alt="">
                <div class="text-[30px] text-[white]">Your Cart Is Empty.</div>
                <Button :buttonType="'primary'" class="rounded-md bg-[white] w-[300px] p-3" @click="closeCheckout">Continue shopping</Button>
            </div>
        </div>
    </div>
  </teleport>
</template>

<script>
import { mapState } from 'vuex';
import useVuelidate from '@vuelidate/core';
import { required, email, numeric, minLength, maxLength } from '@vuelidate/validators';
import IconClose from '~icons/mdi/close'
import IconCart from '~icons/mdi/basket'
import { UIActionsType } from '@/store/modules/ui';
import {ModalViewsType} from '@/types/modal-views-types'
import CheckoutInput from './CheckoutUI/CheckoutInput.vue';
import CheckoutSelect from './CheckoutUI/CheckoutSelect.vue';
import CheckoutBlock from './CheckoutUI/CheckoutBlock.vue';
import CheckoutShipping from './CheckoutUI/CheckoutShipping.vue';
import CheckoutProduct from './CheckoutUI/CheckoutProduct.vue';


const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
console.log(countries)

export default {
    data () {
        return {
            v$: useVuelidate(),
            email: '',
            country: '',
            city: '',
            state: '',
            zip: '',
            firstname: '',
            lustname: '',
        }
    },
    components: {
        IconClose,
        IconCart,
        CheckoutInput,
        CheckoutSelect,
        CheckoutBlock,
        CheckoutShipping,
        CheckoutProduct
    },
    computed: {
        ...mapState({
            showCheckout: (state) => {
                return state.ui.showCheckout
            },
            
        }),
        countries () {
            const list = countries.getNames('en', { select: 'official' })
            return Object.keys(list).map((key) => ({ value: key, label: list[key] }))
        },
        products () {
            return this.$store.getters.products
        },
        formErrors () {
            return {
                email: this.v$.email.$error && this.v$.email.$errors[0].$message,
                country: this.v$.country.$error && this.v$.country.$errors[0].$message,
                city: this.v$.city.$error && this.v$.city.$errors[0].$message,
                state: this.v$.state.$error && this.v$.state.$errors[0].$message,
                zip: this.v$.zip.$error && this.v$.zip.$errors[0].$message,
                firstname: this.v$.firstname.$error && this.v$.firstname.$errors[0].$message,
                lustname: this.v$.lustname.$error && this.v$.lustname.$errors[0].$message,
            }
        },
        showShippingMethods () {
            return (!!this.city && !!this.state && !!this.zip) && (!this.v$.city.$error && !this.v$.state.$error && !this.v$.zip.$error)
        }
    },
    methods: {
        closeCheckout(){
            console.log(this.$store.getters.modalView)
            this.$store.commit(UIActionsType.CLOSE_CHECKOUT)
        },
        consoleState() {
            console.log(this.city, this.state, this.zip, this.country)
        },
        submitForm() {
            this.v$.$validate()
            console.log(this.v$)
        }
    },
    validations() {
        return {
            email: {required, email},
            country: {required},
            city: {required},
            state: {required},
            zip: {
              required, 
              numeric,
              minLength: minLength(5),
              maxLength: maxLength(10)
            },
            firstname: {required},
            lustname: {required},
        }
    } 
}
</script>

<style>

</style>