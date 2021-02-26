<template>
    <table class="flex flex-col table-fixed">
        <thead class="table-header">
            <th v-bind:key="column" v-for="(id, column) in columns">
                <a href="#" @click="sortBy(id)" v-bind:class="{ active: sortKey == id }">{{ column }}</a>
            </th>
        </thead>

        <tbody class="table-body" style="height: 25vh;">
            <tr v-bind:key="item" v-for="item in sortFilter" class="table-body-item">
                <td>{{ item.group_id }}</td>
                <td>{{ item.group_code }}</td>
                <td>{{ item.group_name }}</td>
                <td>{{ item.students }}</td>
                <td>{{ item.score }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            groups: Array,
            search: '',
        },
        data() {
            return {
                sortKey: 'group_id',
                reverse: false,
                columns: {
                    'Group Nr.': 'group_id',
                    'Group code': 'group_code',
                    'Group name': 'group_name',
                    'Students': 'students',
                    'Score': 'score',
                },
            }
        },
        computed: {
            sortFilter: function() {
                return this.groups
                .filter(this.filterBy)
                .sort(this.orderBy);
            }
        },
        methods: {
            sortBy: function(sortKey) {
                this.reverse = (this.sortKey == sortKey) ? !this.reverse : false;

                this.sortKey = sortKey;
            },
            orderBy: function(a, b) {
                let modifier = 1;

                if (this.reverse === true) {
                    modifier = -1;
                }

                if (a[this.sortKey] < b[this.sortKey]) {
                    return -1 * modifier;
                } else if (a[this.sortKey] > b[this.sortKey]) {
                    return 1 * modifier;
                }

                return 0;
            },
            filterBy: function(group) {
                if (this.search.length === 0) {
                    return true;
                }

                return  (group.group_id.toString().indexOf(this.search) > -1)
                || (group.group_code.indexOf(this.search) > -1)
                || (group.group_name.indexOf(this.search) > -1)
                || (group.students.toString().indexOf(this.search) > -1)
                || (group.score.toString().indexOf(this.search) > -1);
            },
        }
    }
</script>