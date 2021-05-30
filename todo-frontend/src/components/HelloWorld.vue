<template>
  <div>
    <!-- Apa kabar {{nama}}<br>
    Nilai anda {{nilai}}<br>
    <button @click="nilai++">tambah nilai</button>
  <form action="/todo" method="POST">
        <input type="text" id="deskripsi" name="deskripsi" />
        <button @click="add">Add</button>
    </form> -->
    <h1>Selamat Datang</h1>
    <div>Berikut daftar kerja kita</div>
    <ul>
      <li v-for="item in todos" :key="item.id">{{item.list}} <button @click="hapus(item.id)">X</button></li>
    </ul>
    <input v-model="myText"/>
    <button @click="tambahkan">Add</button>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data: function () {
      return{
        // nilai: 0,
        // nama: 'Budi'
        todos : [],
        myText : ' '
      }
    },
    created: function () {
      axios.get('http://localhost:3000/todo')
        .then(result=>{
          this.todos = result.data
        })
    },
    methods: {
      // addAll: function(){
      //   this.nilai++
      // },
      tambahkan: function(){
        const newItem = {list: this.myText}
        axios.post('http://localhost:3000/todo', newItem)
        this.todos.push ({newItem})
        //this.todos.push ({list : this.myText})
      },
      hapus: function(id) {
        axios.delete(`http:localhost:3000/todo/${id}`)
      }
    }
  }
</script>