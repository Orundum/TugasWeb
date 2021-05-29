<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>Berikut daftar kerja kita:</div>
    <ul>
      <li v-for="item in todos">{{ item.desc }}</li>
    </ul>
    <input v-model="myText"/>
    <button @click="tambahkan">Klik</button>
    <score-view>
  </div>
  <div>
    Apa kabar {{ nama }}
    <h1>Nilai {{ nilai }}</h1>
    <button @click="nilai++">klik me</button>
  </div>
  <div>
    <ul>
      <li>Andi {{ nilaiAndi }}<button @click="nilaiAndi++">+</button></li>
      <li>Dedi {{ nilaiDedi }}<button @click="nilaiDedi++">+</button></li>
      <button @click="addAll">Add All</button>
    </ul>
  </div>
</template>

<script>
import ScoreView from './ScoreView.vue'
export default {
  data: () => { 
    return {
      todos: [
        {desc: 'Makan Pisang'},
        {desc: 'Masak Sayur'}
      ],
      myText: 'abc',
      nilai: 0,
      nama: 'budi',
      nilaiAndi: 0,
      nilaiDedi: 0
    } 
  },
  methods: {
    addAll: function() {
      this.nilaiAndi++,
      this.nilaiDedi++
    },
    tambahkan: function() {
      this.todos.push({ desc: this.myText })
    }
  }
}
</script>