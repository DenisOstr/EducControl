<template>
    <layout>
        <div class="main">
            <top-section :title="title()" :routeUrl="route()" />

            <div class="statistics-block">
                <div class="top-table-container">
                    <div class="container-header">
                        <h1 class="top-table-heading">Groups</h1>
                        
                        <div class="search-container">
                            <input class="search-input" ref="search" type="search" name="search" placeholder="Search">
                            
                            <button @click="setSearch()" type="submit" class="focus:outline-none">
                                <svg class="text-lightTextColor" style="width:18px;height:18px" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                            </button>
                        </div>
                    </div>

                    <groups-table :groups="groups" :search="getSearch()" />
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
        data() {
            return {
                searchStr: '',
            }
        },
        methods: {
            title() {
                return 'Groups'
            },
            route() {
                return 'groups.add'
            },
            setSearch() {
                this.searchStr = this.$refs.search.value;
            },
            getSearch() {
                return this.searchStr
            }
        }
    }
</script>