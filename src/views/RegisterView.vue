<script>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

</script>
<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">Register</h2>
                <form class="space-y-5" @submit.prevent="">
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="password confirmation" class="input input-bordered"
                            required />
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Register</button>
                        <div class="flex justify-between mt-2">
                            <label class="label-text-alt">Already have an account? <RouterLink to="/login">Sign
                                    in
                                </RouterLink></label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
