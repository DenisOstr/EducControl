<template>
    <layout>
        <div class="main">
            <not-found />
        </div>
    </layout>
</template>

<script>
    import Layout from '../../Layouts/Layout'
    import NotFound from '../../Components/NotFound'

    export default {
        components: {
            Layout,
            NotFound,
        }
    }
</script>