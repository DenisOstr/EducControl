<template>
    <layout>
        <div class="main">
            <top-section :title="title()" />

            <infographics :groups="groups" :students="students" :projects="projects" />

            <div class="info-blocks">
                <div class="info-block">
                    <groups-table :groups="groups" />
                </div>
                
                <div class="info-block">
                    <projects-table :projects="projects" />
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import Layout from '../../Layouts/Layout'
    import TopSection from '../../Components/TopSection'
    import Infographics from '../../Components/Infographics'
    import GroupsTable from '../../Components/GroupsTable'
    import ProjectsTable from '../../Components/ProjectsTable'

    export default {
        components: {
            Layout,
            TopSection,
            Infographics,
            GroupsTable,
            ProjectsTable,
        },
        props: {
            groups: Array,
            projects: Array,
            students: Array,
        },
        methods: {
            title() {
                return 'Dashboard'
            }
        }
    }
</script>