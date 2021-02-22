<template>
    <layout>
        <div class="main">
            <top-section :title="title()" />

            <div class="statistics-block"></div>

            <div class="table-blocks">
                <div class="table-block"></div>
                <div class="table-block"></div>
            </div>
        </div>
    </layout>
</template>

<script>
    import Layout from '../../Layouts/Layout'
    import TopSection from '../../Components/TopSection'

    export default {
        components: {
            Layout,
            TopSection,
        },
        methods: {
            title() {
                return 'Groups'
            }
        }
    }
</script>