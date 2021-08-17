
<template>
<div>
    
    <table class="divi" style="width:100%">
    
    <tr>
    <th>
  <b-col id="btn-css" >
   <!-- Butoooooooooooooooooooooooon -->
   <b-row lg="4" class="pb-2"><b-button  @click="add" variant="warning" size="lg">pain001</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add" variant="warning" size="lg">pacs002</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add" variant="warning" size="lg">pacs004</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add" variant="warning" size="lg">pacs006</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add" variant="warning" size="lg">pacs008</b-button></b-row>
   
  
  </b-col>
  </th>
  <hr>
  <!-- Radioooooooooooooooooooooo -->
  <th>
  <div id="radio">
   <div>
     <b-form-input v-model="text1" placeholder="Message count" style="width:30%"></b-form-input>
     <div class="mt-2">Value: {{ text1 }}</div>
   </div>
 <br>
 <br>

 <!-- Uploaddddddddddddddd -->
    <input type="file" ref="myFile" @change="selectedFile"><br/>
  <!-- <textarea v-model="text"></textarea> -->
 <br>
 <br>
     <b-form-group label="Environment" v-slot="{ ariaDescribedby }">
      <b-form-radio-group size="lg" variant="warning"
        id="btn-radios-3"
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="radio-btn-stacked"
        buttons
        stacked
      ></b-form-radio-group>
     </b-form-group>
   </div>
  </th>
  <!-- <hr> -->

  <!-- Texteeeeeeeeeeeeeeeeeeeeeeee -->
  <div class="txtBox_DropBtn">
  <th>
  <b-form-textarea id="my-textarea" v-model="text" placeholder="TCS" rows="20" max-rows="5" column="10">
    <text-reader @load="text = $event"></text-reader>
  </b-form-textarea>

  <!-- Droooooooooooooooooooooooooooooop -->
  <div>
    <b-dropdown
     split
     split-variant="outline-primary"
     variant="primary"
     text="Application"
     class="m-2"
    >
      <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here...</b-dropdown-item>
    </b-dropdown>
  </div>
   <b-button variant="warning" size="lg" href="#">Submit</b-button>
   </th>
   </div>
   </tr>
   <hr>
   </table>
</div>




</template>

<script>  


  import 'viewerjs/dist/viewer.css'
  import VueViewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(VueViewer)

export default {
  name:'Topa',
  data() {
      return {
        file1: null,
        text1: '',
        text: '',
        selected: 'radio1',
        options: [
          { text: 'ST', value: 'radio1' },
          { text: 'ET', value: 'radio2' },
         
        ]
      }
    },
    
  

   methods: {
      selectedFile() {
      console.log('selected a file');
      console.log(this.$refs.myFile.files[0]);
      
      let file = this.$refs.myFile.files[0];
      if(!file || file.type !== 'text/plain') return;
      
      // Credit: https://stackoverflow.com/a/754398/52160
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload =  evt => {
        this.text = evt.target.result;
      }
      reader.onerror = evt => {
        console.error(evt);
      }
      
    }
    }

}

       
       //  document.getElementById('my-textarea').innerText =text
    //  this.file = './../assets/hello.txt';
    //   const reader = new FileReader();
    //   if (this.file.name.includes(".txt")) {
    //     reader.onload = (res) => {
    //       this.content = res.target.result;
    //     };
    //     reader.onerror = (err) => console.log(err);
    //     reader.readAsText(this.file);
    //   } else {
    //     this.content = "check the console for file output";
    //     reader.onload = (res) => {
    //       this.text= res.target.result;
    //     };
    //     reader.onerror = (err) => console.log(err);
    //     reader.readAsText(this.file);
    //   }
      

       
 
 
      

     
    //  add() {
    //    let a = document.getElementById("my-textarea");
    //    console.log(a.value);
    //  }

    //  add() {
    //    document.getElementById('my-textarea').innerText =  "helloooo"
    //    let reader = new FileReader();
    //    reader.readAsText('./../assets/hello.txt', "UTF-8");
    //    reader.onload = evt => {
    //      this.text = evt.target.result;
    //    }
    //    reader.onerror = evt => {
    //      console.error(evt);
    //    }
    //  }
    //  async add(){
    //    try{
    //      const response = await fetch('./../assets/hello.txt');
    //      const data = await response.text();
         
    //      document.getElementById('my-textarea').innerText =  data;
    //    }
    //    catch(err) {
    //      console.log(err);
    //    }
    //  },

//      add(){
        
//       fetch('./../assets/hello.txt').then(response => response.text()).then(data => { console.log(document.getElementById('my-textarea').innerText = data);
      
//  });
       
//      }

</script>

<style>
/* Texteeeeeeeeee styleeeeeeeeee */
.h1{
   background-color:#1A237E;
}
.textarea {
    font-size: .8rem;
    letter-spacing: 1px;
}
.textarea {
    padding: 10px;
    max-width: 100%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
}

/* buttooooooooon */
#btn-css{
  text-align: center;
  margin-left: 70px;
  margin-bottom: 200px;
  
}

.txtBox_DropBtn{
  text-align: center;
  margin-right: 30px;
  

}

#radio{
  text-align: left;
  margin-bottom: 180px;
  margin-left: 150px;}

</style>
