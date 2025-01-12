<script setup lang="ts"></script>

<template>
    <!-- <div class="profile-picture">
        <img
            src="../assets/image.png"
            class="me-image"
            alt="Raluca image"
            width="512"
            height="682"
        />
    </div> -->
    <p class="text-dark dark:text-white">
        My passion lies in crafting software products with valuable and accessible user experiences.
        This started as a hobby, which became after a while a full-time job. I started to create
        websites using WordPress, and later on I became a WordPress developer helping as well at
        creation of
        <a href="https://zionbuilder.io/" class="text-casal-950 dark:text-scooter-300"
            >Zion Builder visual page builder</a
        >.
    </p>
    <p class="text-dark dark:text-white">
        My Javascript / TypeScript experience is mostly in Vue.js framework or vanilla TypeScript,
        but I like to experience other technologies as well. Choosing the correct algorithm and the way certain
        programming principles are applied assure a good development practice. I like to write comprehensive code, which is easy to be understood
        by others.
    </p>
    <p class="text-dark dark:text-white">
        In my spare time I like to draw, paint and put my imagination into practice. My educational and previous professional
        background is in architectural and urban studies which helped me in approaching all types of
        projects from a multidisciplinary point of view.
    </p>
</template>
<style lang="scss" scoped>
p {
    font-size: 18px;
    margin-bottom: 24px;
}
a {
    text-decoration: none;
    position: relative;
    display: inline-block;

    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        background-color: theme('colors.scooter.300');
        top: 100%;
        left: 0;
        transition: all 0.2s ease-in-out;
    }
    &:hover:after {
        width: 100%;
    }
}
@media (prefers-color-scheme: light) {
    .a {
        &:after {
            background: theme('colors.casal.950');
        }
    }
}
.profile-picture {
    width: 200px;
    height: 200px;
    overflow: hidden;
}
</style>
