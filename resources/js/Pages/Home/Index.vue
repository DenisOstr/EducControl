<template>
    <layout>
        <div class="main">
            <top-section :title="title()" />

            <infographics />

            <tables />
        </div>
    </layout>
</template>

<script>
    import Layout from '../../Layouts/Layout'
    import TopSection from '../../Components/TopSection'
    import Infographics from '../../Components/Infographics'
    import Tables from '../../Components/Tables'

    export default {
        components: {
            Layout,
            TopSection,
            Infographics,
            Tables,
        },
        methods: {
            title() {
                return 'Dashboard'
            }
        }
    }
</script>