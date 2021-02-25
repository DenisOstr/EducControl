<template>
    <layout>
        <div class="main">
            <top-section :title="title()" :searchExist="true" :routeUrl="route()" />

            <div v-bind:key="item" v-for="item in students">
                <p>{{ item.student_id }}</p>
                <p>{{ item.student_code }}</p>
                <p>{{ item.name }}</p>
                <p>{{ item.surname }}</p>
                <p>{{ item.course }}</p>
                <p>{{ item.group_code }}</p>
                <p>{{ item.score }}</p>
                <p>{{ item.position }}</p>
                <p>{{ item.group_projects }}</p>
                <p>{{ item.main_project }}</p>
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