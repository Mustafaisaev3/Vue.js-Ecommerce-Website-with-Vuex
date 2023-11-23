<template>
<div class="w-full h-auto bg-[#f2f2f2]">
    <div class="contact-header-image w-full h-auto py-[100px] flex flex-col items-center justify-center">
      <h2 class="text-[50px] font-bold">Contact Us</h2>
      <ul class="flex">
          <li>Home /</li>
          <li>Contact</li>
      </ul>
    </div>
    <div class="container w-full h-max py-[60px] flex gap-[40px] flex-col lg:flex-row">
        <div class="w-full lg:w-[35%] h-auto p-[15px] lg:p-[36px] bg-[white]">
            <div class="w-full h-[300px] overflow-hidden">
                <img class="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-682.jpg" alt="">
            </div>
            <div class="w-full h-full ">
                <div class="flex items-center gap-2 py-[20px]">
                    <div class="text-[#03b3db] text-[50px]">
                        <IconHeadphones class="" />
                    </div>
                    <div class="w-full h-auto">
                        <div class="text-[14px] text-[gray]">ecommerce@gmail.com</div>
                        <div class="text-[20px] font-bold">(+100) 111-222-3333</div>
                    </div>
                </div>
                <div class="w-full h-auto">
                    <ul class="w-full h-auto flex flex-col gap-1">
                        <li class="text-[14px] text-[gray]">Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</li>
                        <li class="text-[14px] text-[gray]">Fax: (+100) 123 456 789</li>
                        <li class="text-[14px] text-[gray]">Monday – Friday: 9:00-20:00</li>
                        <li class="text-[14px] text-[gray]">Email: Contact@erentheme.com</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-[65%] h-auto p-[15px] lg:p-[36px] bg-[white]">
            <h2 class="text-[20px] pb-4">Write to us</h2>
            <div class="w-full h-auto flex gap-4">
                <Input placeholder="Name" v-model="name" :error="formErrors.name"/>
                <Input placeholder="Email" v-model="email" :error="formErrors.email"/>
            </div>
            <div class="w-full h-auto">
                <Textarea placeholder="Message" v-model="message" :rows="5" :error="formErrors.message"/>
            </div>
            <div class="w-full h-auto" @click="submitForm">
                <Button :buttonType="buttonTypes.PRIMARY" class="rounded-sm">Send message</Button>
            </div>
        </div>
    </div>
    <div class="w-full h-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.8885055538!2d28.84737317241579!3d41.00546324292252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2z0KHRgtCw0LzQsdGD0LssINCi0YPRgNGG0LjRjw!5e0!3m2!1sru!2sfr!4v1700671340319!5m2!1sru!2sfr" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
</template>

<script>
// Vuelidate
import useVuelidate from '@vuelidate/core'
import { required, email, minLength} from '@vuelidate/validators';

// Components
import Input from '@/components/UI/Input/Input.vue'
import Textarea from '@/components/UI/Textarea/Textarea.vue'
import Button from '@/components/UI/Button/Button.vue'

// Icons
import IconHeadphones from '~icons/mdi/headphones'

import { UserMessageApi } from '@/services/api/userMessageApi.js'

// Types
import { ButtonTypes } from '@/types/button-types';
import notificationTypes from '@/types/notification-types';



export default {
    data () {
        return {
            v$: useVuelidate(),
            name: '',
            email: '',
            message: '',
        }
    },
    components: {
        IconHeadphones,
        Input,
        Textarea,
        Button
    },
    computed: {
        buttonTypes () {
            return ButtonTypes
        },
        formErrors () {
            return {
                email: this.v$.email.$error && this.v$.email.$errors[0].$message,
                name: this.v$.name.$error && this.v$.name.$errors[0].$message,
                message: this.v$.message.$error && this.v$.message.$errors[0].$message,
            }
        },
    },
    methods: {
        async submitForm () {
            this.v$.$validate()
            if (this.v$.$error) {
                console.log(this.v$.$errors)
                return
            } else {
                const response = await UserMessageApi.sendMessage({
                    name: this.name,
                    email: this.email,
                    message: this.message
                })

                if (response.status == 'success') {
                    this.$store.dispatch('addNotification', {type: notificationTypes.SUCCESS, text: response.message})
                } else {
                    this.$store.dispatch('addNotification', {type: notificationTypes.ERROR, text: response.message})
                }
            }


        }
    },
    validations () {
        return {
            name: {required, minLength: minLength(1)},
            email: {required, email},
            message: {required, minLength: minLength(1)},
        }
    }
}
</script>

<style scoped>
.contact-header-image {
    /* background-image: url('https://yassinautomotive.com/wp-content/uploads/2022/09/contactus-1.jpg'); */
    /* background-image: url('https://www.jsalaw.com/wp-content/uploads/2022/07/Contact-Us.jpg'); */
    background-image: url('https://dreamron.com/images/Contact%20us%20cover%20image.jpg');
    background-origin: border-box;
    background-size: cover;
}

iframe {
    width: 100% !important;
    height: 500px !important;
}

</style>