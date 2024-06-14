<template>
    <div>
      <p class="text-2xl font-semibold">User Name: {{ post.username }}</p>
      <p class="text-2xl font-semibold">User Eamil: {{ post.email }}</p>
      <p class="text-2xl font-semibold">User Address: {{ post.address }}</p>
    </div>
  </template>
  
  <script setup>
  import {computed} from "vue"
  import { useQuery } from "@vue/apollo-composable";
  import gql from "graphql-tag";
  
  const { result, loading, error } = useQuery(gql`
    query {
      user(id: 1) {
        id
        username
        email
      }
    }
  `);
  const post = computed(() => result.value?.user ?? "")
  </script>