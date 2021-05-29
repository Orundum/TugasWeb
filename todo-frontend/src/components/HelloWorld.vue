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
      <li v-for="item in todos">{{item.desc}}</li>
    </ul>
    <input v-model="myText"/>
    <button @click="tambahkan">Add</button>
  </div>
</template>

<script>
  export default{
    data:()=>{
      return{
        // nilai: 0,
        // nama: 'Budi'
        todos : [
          {desc : "Makan Enak"},
          {desc : "Makan Sayur"}
        ],
        myText : ' '
      }
    },
    
    methods:{
      // addAll: function(){
      //   this.nilai++
      // },
      tambahkan:function(){
        this.todos.push ({desc : this.myText})
      }
    }
  }
</script>