<template>
    <layout>
        <div class="main">
            <top-section :title="title()" :searchExist="true" :routeUrl="route()" />

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
                    <div class="statistic-item w-full">
                        <h1 class="statistic-item-header">Top Group</h1>
                        <div class="flex">
                            <p class="text-darkTextColor font-medium text-xl">{{ topGroup.group_code }}</p>
                            <svg class="delimeter" style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" /></svg>
                            <p class="text-darkTextColor font-bold text-xl">{{ topGroup.group_name }}</p>
                        </div>
                        <p class="score-item">{{ topGroup.score }}</p>
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
            },
            route() {
                return 'groups.add'
            }
        }
    }
</script>