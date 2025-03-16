<template>
    <div class="min-h-screen flex flex-col">
        <!-- Navigation -->
        <header class="bg-gray-900-200 shadow-sm">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="navbar">
                    <div class="flex-1">
                        <RouterLink :to="{ name: 'home' }" class="btn btn-ghost normal-case text-xl text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            PhotoApp
                        </RouterLink>
                    </div>

                    <div class="flex-none hidden sm:flex">
                        <ul class="menu menu-horizontal px-1 space-x-2">
                            <li>
                                <RouterLink :to="{ name: 'home' }" class="tooltip tooltip-bottom" data-tip="Home"
                                    active-class="active">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'my-image' }" class="tooltip tooltip-bottom" data-tip="Gallery"
                                    active-class="active">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'register' }" class="btn btn-ghost" active-class="btn-active">
                                    Register
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'login' }" class="btn btn-primary" active-class="btn-active">
                                    Login
                                </RouterLink>
                            </li>
                        </ul>
                    </div>

                    <!-- Mobile menu -->
                    <div class="dropdown dropdown-end sm:hidden">
                        <label tabindex="0" class="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </label>
                        <ul tabindex="0"
                            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-900 rounded-box w-52">
                            <li>
                                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'my-image' }">Gallery</RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'register' }">Register</RouterLink>
                            </li>
                            <li>
                                <RouterLink :to="{ name: 'login' }">Login</RouterLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <RouterView />
        </main>

        <!-- Footer -->
        <footer class="footer footer-center p-4 bg-gray-900 text-base-content">
            <aside>
                <p>© 2024 PhotoApp - All rights reserved</p>
            </aside>
        </footer>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
