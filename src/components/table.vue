<template>
  <b-table :data="data" :columns="columns" narrowed="true" hoverable="true"></b-table>
</template>

<script>
export default {
  name: "table",
  data() {
    return {
      data: [
        { date: "2020-03-09", version: "0.1.0", content: "established site" },
        { date: "2020-03-11", version: "0.1.1", content: "change layout" }
      ],
      columns: [
        { field: "date", label: "Date", centered: true },
        { field: "version", label: "Version" },
        { field: "content", label: "Content" }
      ]
    };
  }
};
</script>

<style>
</style>