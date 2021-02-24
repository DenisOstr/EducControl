<template>
    <table class="flex flex-col table-fixed">
        <thead class="table-header">
            <th v-bind:key="column" v-for="(id, column) in columns">
                <a href="#" @click="sortBy(id)" v-bind:class="{ active: sortKey == id }">{{ column }}</a>
            </th>
        </thead>

        <tbody class="table-body" style="height: 25vh;">
            <tr v-bind:key="item" v-for="item in sorted" class="table-body-item">
                <td>{{ item.project_nr }}</td>
                <td>{{ item.project_code }}</td>
                <td>{{ item.project_name }}</td>
                <td>{{ item.group_name }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            projects: Array,
        },
        data() {
            return {
                sortKey: 'project_nr',
                reverse: false,
                columns: {
                    'Project Nr.': 'project_nr',
                    'Project code': 'project_code',
                    'Project name': 'project_name',
                    'Group name': 'group_name',
                },
            }
        },
        computed: {
            sorted: function() {
                return this.projects.sort((a, b) => {
                    let modifier = 1;

                    if (this.reverse === true) {
                        modifier = -1;
                    }

                    console.log();

                    if (a[this.sortKey] < b[this.sortKey]) {
                        return -1 * modifier;
                    } else if (a[this.sortKey] > b[this.sortKey]) {
                        return 1 * modifier;
                    }

                    return 0;
                });
            }
        },
        methods: {
            sortBy: function(sortKey) {
                this.reverse = (this.sortKey == sortKey) ? !this.reverse : false;

                this.sortKey = sortKey;
            }
        }
    }
</script>