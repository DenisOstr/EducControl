<template>
    <layout>
        <div class="main">
            <top-section :title="title()" />

            <div class="statistics-block">
                <div class="w-full h-56 px-2">
                    <groups-table :groups="groups" />
                </div>
            </div>

            <div class="info-blocks">
                <div class="info-block">
                    <div class="statistic-item w-full">
                        <h1 class="statistic-item-header">Groups total</h1>
                        <svg class="statistic-item-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14" /></svg>
                        <h1 class="statistic-item-info">{{ groups.length }}</h1>
                    </div>
                </div>
                <div class="info-block">
                    <div>
                        <h1 class="statistic-item-header">Top Group</h1>
                        <p>{{ topGroup.group_code }}</p>
                        <p>{{ topGroup.group_name }}</p>
                        <p>{{ topGroup.score }}</p>
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
    import Layout from '../../Layouts/Layout'
    import TopSection from '../../Components/TopSection'
    import GroupsTable from '../../Components/GroupsTable'

    export default {
        components: {
            Layout,
            TopSection,
            GroupsTable,
        },
        props: {
            groups: Array,
            topGroup: Array,
        },
        methods: {
            title() {
                return 'Groups'
            }
        }
    }
</script>