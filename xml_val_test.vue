<template>
  <div id="app"> 
			<input type="file" ref="myFile" @change="selectedFile">
      <textarea id="my-textarea" v-model="text" placeholder="TCS" rows="20" max-rows="5" column="10">
    <text-reader @load="text = $event"></text-reader>
  </textarea>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data(){
    return {
      text:"Pranav is a good boy"
    }
  },
  methods :{

        xmlValidator(xml){
        console.log("We are in xmlvalidator func")
        while(xml.indexOf('<') != -1){
          
        console.log('entered while loop')
        var sub = xml.substring(xml.indexOf('<'), xml.indexOf('>')+1);
        var value = xml.substring(xml.indexOf('<')+1, xml.indexOf('>'));
        var endTag = '</'+value+'>';
        if(xml.indexOf(endTag) != -1){
            console.log('xml is valid');
            // break;
        }else{
            console.log('xml is in invalid');
            break;
        }
        xml = xml.replace(sub, '');
        xml = xml.replace(endTag, '');
        console.log(xml);
        console.log(sub+' '+value+' '+endTag);
    }
    console.log("While loop exited");
},
     selectedFile() {
      console.log('selected a file');
      console.log(this.$refs.myFile.files[0]);
      
      let file = this.$refs.myFile.files[0];
      
      // if(!file || file.type !== 'text/plain') return;
      
      // Credit: https://stackoverflow.com/a/754398/52160
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload =  evt => {
        this.text = evt.target.result;
      }
      reader.onerror = evt => {
        console.error(evt);
      }
      console.log("selectedFile_Func executed")

      var xml = this.text;
      this.xmlValidator(xml);
      console.log("XMLValid_func called")



      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
