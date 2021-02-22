<template>
    <main class="base">
        <sidebar :url="url()" />

        <slot />
    </main>
</template> 

<script>
    import Sidebar from '../Components/Sidebar'

    export default {
        components: {
            Sidebar,
        },
        methods: {
            url() {
                return location.pathname.substr(1)
            }
        }
    }
</script>