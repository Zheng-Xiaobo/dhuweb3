<template style="height: 100%">
  <div class="wholePage" style="border-width: 20px;border-color:black;width: 80%;height:100%;margin: auto;">
    <div style="clear:both"></div>

    <el-container class="layout-container-demo" style="height: 100%">

      <el-aside width="200px" style="background-color:#424243;height: 100%">
        <el-space direction="vertical">
          <div style="height: 80px;">
          </div>
          <div style="height: 45px;">
            <el-button round size="large" color="#626aef" :dark="isDark">Home</el-button>
          </div>
          <div style="height: 45px;">
            <el-button round size="large" color="#626aef" :dark="isDark">Topics</el-button>
          </div>
          <div style="height: 45px;">
            <el-button round size="large" color="#626aef" :dark="isDark">Users</el-button>
          </div>
          <div style="height: 45px;">
            <el-button round size="large" @click="PostMessage" color="#626aef" :dark="isDark">Post</el-button>
          </div>
          <div style="height: 200px;">
          </div>
          <Edit @click="postMessageVisible = true" style="color:white;width: 4em; height: 4em; margin-right: 8px;margin-bottom: 20px"/>
        </el-space>
      </el-aside>

      <el-container>

        <el-header >
        </el-header>

        <el-main >
          <template>
            <el-space direction="vertical">
              <el-card v-for="i in 2" :key="i" class="box-card" style="width: 500px">
                <template #header>
                  <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" text>Operation button</el-button>
                  </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                  {{ 'List item ' + o }}
                </div>
              </el-card>
            </el-space>
          </template>
        </el-main>
      </el-container>

    </el-container>

    <el-dialog v-model="postMessageVisible" title="Shipping address">
      <!--      <el-form :model="form">-->
      <!--        <el-form-item label="Promotion name" :label-width="formLabelWidth">-->
      <!--          <el-input v-model="form.name" autocomplete="off" />-->
      <!--        </el-form-item>-->
      <!--        <el-form-item label="Zones" :label-width="formLabelWidth">-->
      <!--          <el-select v-model="form.region" placeholder="Please select a zone">-->
      <!--            <el-option label="Zone No.1" value="shanghai" />-->
      <!--            <el-option label="Zone No.2" value="beijing" />-->
      <!--          </el-select>-->
      <!--        </el-form-item>-->
      <!--      </el-form>-->
      <!--      <template #footer>-->
      <!--      <span class="dialog-footer">-->
      <!--        <el-button @click="postMessageVisible = false">Cancel</el-button>-->
      <!--        <el-button type="primary" @click="postMessageVisible = false">-->
      <!--          Confirm-->
      <!--        </el-button>-->
      <!--      </span>-->
      <!--      </template>-->
    </el-dialog>

  </div>
</template>

<script>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
// import message from '@/element-plus/icons-vue'

import { Edit,FolderOpened } from '@element-plus/icons-vue'

import { abi,contractAddress,NFT_STORAGE_KEY } from '@/components/const.js'
import Web3 from 'web3'
let web3 = new Web3(Web3.givenProvider);

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
export default {
  name: 'HomeView',
  components:{
    abi,
    contractAddress,
    NFT_STORAGE_KEY,
    Edit,
    IconMenu,
    Message,
    Setting
  },
  data() {
    return {
      src: '',
      fileList: [],
      buffer: null,
      ipfsHash: '',
      file: null,
      addr:null,
      tableData:[],
      postMessageVisible:false
    };
  },
  methods:{
    PostMessage()
    {
      this.postMessageVisible=true;
      console.log("dialog");
    }

  },
  created() {
    console.log("begin")
    const contract = new web3.eth.Contract(abi, contractAddress)
    contract.methods.getMessageCount().call().then(ans=>
    {
      for (let i = ans-1; i >=0 ; i--) {
        contract.methods.getMessageById(i).call().then(data=>{
              this.tableData.splice(ans-i-1,0,data)
              console.log(data)
            }
        )

      }
      console.log(ans)
    });

  }


}
</script>

<style scoped>

</style>