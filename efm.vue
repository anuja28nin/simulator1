<template>
<div>
    
    <table class="divi" style="width:100%">
    
    <tr>
    <th>
  <b-col id="btn-css" >
   <!-- Butoooooooooooooooooooooooon -->
   <b-row lg="4" class="pb-2"><b-button  @click="add1" variant="warning" size="lg">pain001</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add2" variant="warning" size="lg">pacs002</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add3" variant="warning" size="lg">pacs004</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add4" variant="warning" size="lg">pacs006</b-button></b-row>
   <br>
   <b-row lg="4" class="pb-2"><b-button  @click="add5" variant="warning" size="lg">pacs008</b-button></b-row>
   
  
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
    <div>
    
      <b-form-group label="Upload file:" label-cols-sm="2">
        <b-form-file id="file-default"></b-form-file>
      </b-form-group>
    
    </div>
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
  <b-form-textarea ref="my-textarea" v-model="text" placeholder="TCS" rows="20" max-rows="5" column="10">
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
    add1() {
      const { text } = this;
      const textarea = this.$refs["my-textarea"].$el;
      const index = textarea.selectionStart;
      const name = "Pain001";                                                                                                                                                                           

      this.text = `${text.substring(0, index)}${name}${text.substring(
        index
      )}`;
      textarea.focus();
      setTimeout(() => {
        textarea.selectionStart = index + name.length;
        textarea.selectionEnd = index + name.length;
      });
    },
    add2() {
      const { text } = this;
      const textarea = this.$refs["my-textarea"].$el;
      const index = textarea.selectionStart;
      const name = "pac002";

      this.text = `${text.substring(0, index)}${name}${text.substring(
        index
      )}`;
      textarea.focus();
      setTimeout(() => {
        textarea.selectionStart = index + name.length;
        textarea.selectionEnd = index + name.length;
      });
    },
    add3() {
      const { text } = this;
      const textarea = this.$refs["my-textarea"].$el;
      const index = textarea.selectionStart;
      const name = "pac004";
      this.text = `${text.substring(0, index)}${name}${text.substring(
        index
      )}`;
      textarea.focus();
      setTimeout(() => {
        textarea.selectionStart = index + name.length;
        textarea.selectionEnd = index + name.length;
      });
    },
    add4() {
      const { text } = this;
      const textarea = this.$refs["my-textarea"].$el;
      const index = textarea.selectionStart;
      const name = "pac006";

      this.text = `${text.substring(0, index)}${name}${text.substring(
        index
      )}`;
      textarea.focus();
      setTimeout(() => {
        textarea.selectionStart = index + name.length;
        textarea.selectionEnd = index + name.length;
      });
    },
    add5() {
      const { text } = this;
      const textarea = this.$refs["my-textarea"].$el;
      const index = textarea.selectionStart;
      const name = "pac008";

      this.text = `${text.substring(0, index)}${name}${text.substring(
        index
      )}`;
      textarea.focus();
      setTimeout(() => {
        textarea.selectionStart = index + name.length;
        textarea.selectionEnd = index + name.length;
      });
    }
  }
}
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
