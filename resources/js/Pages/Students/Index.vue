<template>
    <layout>
        <div class="main">
            <top-section :title="title()" :searchExist="true" :routeUrl="route()" />

            <student-cards :students="students" />
        </div>
    </layout>
</template>

<script>
    import Layout from '../../Layouts/Layout'
    import TopSection from '../../Components/TopSection'
    import StudentCards from '../../Components/StudentCards'

    export default {
        components: {
            Layout,
            TopSection,
            StudentCards,
        },
        props: {
            students: Array,
        },
        methods: {
            title() {
                return 'Students'
            },
            route() {
                return 'students.add'
            }
        }
    }
</script>