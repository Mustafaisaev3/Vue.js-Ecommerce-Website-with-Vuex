<template>
    <div class="w-[500px] h-auto p-[40px]">
      <header class="w-full h-auto flex items-center mb-[30px]">
          <div class="w-full h-full capitalize text-[20px] text-center font-semibold pb-2 cursor-pointer " @click="openModal">Login</div>
          <div class="active w-full h-full capitalize text-[20px] text-center font-semibold pb-2 cursor-pointer">Register</div>
      </header>
      <form action="#">
          <div class="login-form">
              <div class="login-form__field">
                  <Input required v-model="firstName" :label="'First name'" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="lustName" :label="'Lust name'" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="email" :label="'Email'" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="password" :label="'Password'" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="confirmPassword" :label="'Confirm password'" />
              </div>

              <div class="buttons mt-5">
                  <Button :buttonType="'primary'" class="rounded-sm">CREATE NEW ACCOUNT</Button>
                  <p class="or">
                      <span>or</span>
                  </p>
                  <Button :buttonType="'secondary'" class="rounded-sm bg-[#263c97] text-white">LOGIN</Button>
              </div>
          </div>
      </form>
    </div>
  </template>
  
  <script>
  import { UIActionsType } from '@/store/modules/ui';
  import { ModalViewsType } from '@/types/modal-views-types';
  import Input from '../../Input/Input.vue';
  import Button from '../../Button/Button.vue';
  
  export default {
      data () {
          return {
              firstName: '',
              lustName: '',
              email: '',
              password: '',
              confirmPassword: '',
          }
      },
      components: {
          Input,
          Button
      },
      watch: {
          email () {
              console.log(this.email)
          }
      },
      methods: {
        openModal () {
            this.$store.commit(UIActionsType.OPEN_MODAL, {
                view: ModalViewsType.LOGIN_VIEW,
                data: 'LOGIN'
            })
        }
      }
  }
  </script>
  
  <style scoped>
  .active {
      border-bottom: 2px solid #16bcdc !important
  }
  
  .or{
      position: relative;
      text-align: center;
      height: 30px;
      margin: 10px 0;
  }
  
  p.or:before {
      content: "";
      border-top: 1px solid #ebebeb;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      -webkit-transform: translate(0,-50%);
      -ms-transform: translate(0,-50%);
      -o-transform: translate(0,-50%);
      transform: translateY(-50%);
  }
  
  p.or span {
      display: inline-block;
      background: #fff;
      padding: 0 15px;
      position: relative;
      color: #999;
      font-size: 14px;
  }
  </style>