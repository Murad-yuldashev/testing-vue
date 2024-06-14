<template>
  <form @submit.prevent="addTodo()">
    <div class="grid grid-cols-1 gap-4">
      <div>
        <input
          class="border-2 outline-none py-2 px-2 shadow-md font-medium w-full rounded border-blue-300 hover:border-blue-600 focus:border-blue-600 focus:shadow-blue-200"
          v-model="newTodo"
        />
      </div>
      <div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <button
              class="text-white py-2 px-4 shadow-md w-full rounded bg-red-400 hover:bg-red-600 font-semibold"
              v-if="todos.length !== 0"
              @click="removeAllTodos"
            >
              Remove All Todos
            </button>
          </div>
          <div>
            <button
              class="text-white py-2 px-4 shadow-md w-full rounded bg-blue-400 hover:bg-blue-600 font-semibold"
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup></script>
