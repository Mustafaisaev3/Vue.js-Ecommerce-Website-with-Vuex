<template>
    <div class="w-[500px] h-auto p-[40px]">
      <header class="w-full h-auto flex items-center mb-[30px]">
          <div class="w-full h-full capitalize text-[20px] text-center font-semibold pb-2 cursor-pointer " @click="openModal">Login</div>
          <div class="active w-full h-full capitalize text-[20px] text-center font-semibold pb-2 cursor-pointer">Register</div>
      </header>
      <form action="#" @submit="handleRegister">
          <div class="login-form">
              <div class="login-form__field">
                  <Input required v-model="firstName" :label="'First name'" placeholder="First name" :error="v$.firstName.$error && v$.firstName.$errors[0].$message" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="lustName" :label="'Lust name'" placeholder="Lust name" :error="v$.lustName.$error && v$.lustName.$errors[0].$message" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="email" :label="'Email'" placeholder="Email" :error="v$.email.$error && v$.email.$errors[0].$message" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="password" :label="'Password'" placeholder="Password" :error="v$.password.$error && v$.password.$errors[0].$message" />
              </div>
              <div class="login-form__field">
                  <Input required v-model="confirmPassword" :label="'Confirm password'" placeholder="Confirm password" :error="v$.confirmPassword.$error && v$.confirmPassword.$errors[0].$message" />
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
  import useValidate from '@vuelidate/core'
  import { required, email, minLength, sameAs } from '@vuelidate/validators'
  import Input from '../../Input/Input.vue';
  import Button from '../../Button/Button.vue';
  
  export default {
      data () {
          return {
              v$: useValidate(),
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
      validations () {
        return {
            firstName: { required },
            lustName: { required },
            email: { required, email },
            password: { required, minLength: minLength(6) },
            confirmPassword: { required, sameAs: sameAs(this.password) },
        }
      },
      watch: {
        //   email () {
        //       console.log(this.email)
        //   }
      },
      methods: {
        openModal () {
            this.$store.commit(UIActionsType.OPEN_MODAL, {
                view: ModalViewsType.LOGIN_VIEW,
                data: 'LOGIN'
            })
        },
        handleRegister (e) {
            e.preventDefault()
            this.v$.$validate()
            if (this.v$.$errors.length > 0) {
                console.log('error')
            } else {
                const payload = {
                    name: this.$data.firstName,
                    email: this.$data.email,
                    password: this.$data.password,
                }
                this.$store.dispatch('register', payload)
                
            }
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