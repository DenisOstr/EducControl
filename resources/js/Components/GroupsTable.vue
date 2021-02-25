<template>
    <table class="flex flex-col table-fixed">
        <thead class="table-header">
            <th v-bind:key="column" v-for="(id, column) in columns">
                <a href="#" @click="sortBy(id)" v-bind:class="{ active: sortKey == id }">{{ column }}</a>
            </th>
        </thead>

        <tbody class="table-body" style="height: 25vh;">
            <tr v-bind:key="item" v-for="item in sorted" class="table-body-item">
                <td>{{ item.group_nr }}</td>
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
        },
        data() {
            return {
                sortKey: 'group_nr',
                reverse: false,
                columns: {
                    'Group Nr.': 'group_nr',
                    'Group code': 'group_code',
                    'Group name': 'group_name',
                    'Students': 'students',
                    'Score': 'score',
                },
            }
        },
        computed: {
            sorted: function() {
                return this.groups.sort((a, b) => {
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