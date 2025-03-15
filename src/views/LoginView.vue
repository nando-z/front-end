<script>
import {
    ref
} from 'vue'
import {
    RouterLink
} from 'vue-router'
const title = ref('Login')
</script>
<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">{{ title }}</h2>
                <form class="space-y-5">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                        <div class="flex justify-between mt-2">
                            <label class="label-text-alt">Already have an account? <RouterLink to="/register">Sign
                                    up
                                </RouterLink></label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
