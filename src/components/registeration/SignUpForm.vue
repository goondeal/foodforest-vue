<template>
    <div class="bg-white border rounded m-auto my-4" style="width: 26rem;">
        <section class="w-100 px-3 py-3">
            <h2 class="mb-4">Sign up</h2>
            <div class="d-flex flex-column">
                <div class="text-center">
                    <button class="bg-white border rounded p-2 m-2" type="button">
                        <span class="fs-6 text-dark">
                            <i class="inline p-2" role="img" aria-label="google" aria-hidden="false">
                                <svg class="inline" width="20" height="20" viewBox="0 0 24 24">
                                    <g fill="none">
                                        <path fill="#4285F4"
                                            d="M23.49,12.27 C23.49,11.48 23.42,10.73 23.3,10 L12,10 L12,14.51 L18.47,14.51 C18.18,15.99 17.33,17.24 16.07,18.09 L16.07,21.09 L19.93,21.09 C22.19,19 23.49,15.92 23.49,12.27 Z">
                                        </path>
                                        <path fill="#34A853"
                                            d="M12,24 C15.24,24 17.95,22.92 19.93,21.09 L16.07,18.09 C14.99,18.81 13.62,19.25 12,19.25 C8.87,19.25 6.22,17.14 5.27,14.29 L1.29,14.29 L1.29,17.38 C3.26,21.3 7.31,24 12,24 Z">
                                        </path>
                                        <path fill="#FBBC05"
                                            d="M5.27,14.29 C5.02,13.57 4.89,12.8 4.89,12 C4.89,11.2 5.03,10.43 5.27,9.71 L5.27,6.62 L1.29,6.62 C0.47,8.24 0,10.06 0,12 C0,13.94 0.47,15.76 1.29,17.38 L5.27,14.29 Z">
                                        </path>
                                        <path fill="#EA4335"
                                            d="M12,4.75 C13.77,4.75 15.35,5.36 16.6,6.55 L20.02,3.13 C17.95,1.19 15.24,0 12,0 C7.31,0 3.26,2.7 1.29,6.62 L5.27,9.71 C6.22,6.86 8.87,4.75 12,4.75 Z">
                                        </path>
                                    </g>
                                </svg>
                            </i>
                            Continue with Google
                        </span>
                    </button>
                </div>

                <div class="w-100 text-center my-4 d-flex align-items-center position-relative">
                    <hr class="m-0 w-100 text-muted" />
                    <p class="bg-white p-2 rounded m-auto position-absolute" style="left: 45%;">or</p>
                </div>

                <form method="post" @submit.prevent="signup">
                    <!-- <input class="hidden" type="file" accept="image/*" ref="file" @change="readFile($event)" />
                    <div class="flex">
                        <div class="relative inline-d-block mx-auto my-4">
                            <img class="w-24 h-24 rounded-full object-cover" :src="profilePicSrc" alt="profile picture">
                            <div
                                class="absolute top-0 h-full w-100 rounded-full bg-black opacity-20 flex items-center justify-center">
                                <camera-icon class="h-8 w-8 p-2 color-white rounded-full text-white hover:bg-gray-200 hover:text-black"
                                    @click="browse()"></camera-icon>
                                <trash-icon class="h-8 w-8 p-2 color-white rounded-full text-white hover:bg-gray-200 hover:text-black"
                                @click="removePic()"></trash-icon>
                            </div>
                        </div>
                    </div> -->

                    <label class="d-block text-start" for="email">Email Address</label>
                    <input type="email" name="email" id="email" v-model="email"
                        class="mb-4 border text-dark bg-white fs-6 rounded-sm d-block w-100 p-2 "
                        placeholder="example@gmail.com" required>


                    <label class="d-block text-start" for="gender">Gender</label>
                    <select name="gender" v-model="gender"
                        class="mb-4 bg-white text-dark bg-white w-100 border rounded-sm px-1 d-block py-2" required>
                        <option value="M" selected>Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </select>

                    <label class="mt-4 d-block text-start" for="birthday">Birthday</label>
                    <input type="date" name="birthday" v-model="birthday"
                        class="mb-4 bg-white text-dark w-100 border rounded-sm px-1 d-block py-2" required>

                    <label class="mt-4 d-block text-start" for="password">Password</label>
                    <input type="password" name="password" id="password" v-model="password"
                        class="mb-4 border text-dark bg-white fs-6 rounded-sm d-block w-100 p-2 " placeholder="********"
                        required>

                    <label class="mt-4 d-block text-start" for="repeat-password">Repeat Password</label>
                    <input type="password" name="repeat-password" id="repeat-password" v-model="repeatPassword"
                        class="mb-4 border  text-dark bg-white fs-6 rounded-sm d-block w-100 p-2 " placeholder="********"
                        required>

                    <div id="errors">
                        <span class="d-block text-start text-xs text-danger" v-for="error in errors" :key="error">{{ error
                        }}</span>
                    </div>


                    <!-- Submit button -->
                    <button type="submit" class="btm btn-primary w-100 my-3 rounded-xs fs-6 px-5 py-2 text-center">
                        Signup</button>
                </form>

                <!-- Register buttons -->
                <p class="fs-6 fw-normal text-center mt-2">
                    Already signed up? <router-link :to="{ name: 'login' }" class="text-underline fw-normal"> Login
                    </router-link>
                </p>
            </div>
        </section>
    </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'


const router = useRouter()

const email = ref('')
const password = ref('')
const repeatPassword = ref('')

const genders = ['M', 'F', 'O']
const gender = ref(genders[0])

const birthday = ref('2000-01-01')
const errors = ref([])

const profilePic = ref()
const file = ref()
const defaultSrc = 'http://localhost:8000/media/users/default.jpeg'
const profilePicSrc = ref(defaultSrc)

watch(birthday, (newBirthday) => {
    console.log(`birthday is ${newBirthday}`)
    console.log(`birthday is ${typeof newBirthday}`)
})

const isValidEmail = computed(() => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
})

const isValidForm = computed(() => {
    return email.value && isValidEmail
        && password.value && password.value === repeatPassword.value
        && gender.value && genders.includes(gender.value)
        && birthday.value
})

const browse = () => {
    file.value.click()
}

const removePic = () => {
    profilePic.value = null
    profilePicSrc.value = defaultSrc
}

const readFile = ($event) => {
    const target = $event.target
    if (target && target.files) {
        profilePic.value = target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(profilePic.value)
        reader.onload = (res) => {
            profilePicSrc.value = res.target.result
        }
        reader.onerror = (err) => console.log('reader error =', err)

    }

}

const signup = () => {
    errors.value = []
    if (isValidForm.value) {
        let formData = new FormData()
        formData.append('email', email.value)
        formData.append('gender', gender.value)
        formData.append('birthday', birthday.value)
        // if (profilePic.value) {
        //     formData.append('profile_pic', profilePic.value)
        // }
        formData.append('password', password.value)
        formData.append('re_password', repeatPassword.value)
        // const formData = {
        //     email: email.value,
        //     gender: gender.value,
        //     birthday: birthday.value,
        //     profile_pic: profilePic.value,
        //     password: password.value,
        //     re_password: repeatPassword.value,
        // }
        console.log('signup data = ', formData)

        // axios.post({ url: '/auth/users/', method: 'post', data: formData })
        axios.post('/auth/users/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log('signup response =', response)
                if (response.status === 201) {
                    // Navigate to login page
                    router.push({ name: 'login' })
                }
            })
            .catch((err) => {
                console.log('signup error =', err)
                const errs = Object.values(err.response.data)
                errors.value = errs.flat(1)
            })
    }
}
</script>
