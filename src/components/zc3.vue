<template>
  <div class="wholePage" style="color:white;border-width: 20px;border-color:black;width: 80%;height:100%;margin: auto;">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs :tab-position="tabPosition"  style="color:white;background-color:#1D1D1D;height: 100%" class="demo-tabs">
      <el-tab-pane style="color:white" label="User" >User</el-tab-pane>
      <el-tab-pane label="Config">Config</el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
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
};
// import { ref } from 'vue'
//
// const tabPosition = ref('left')
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
      postMessageVisible:false,
      tabPosition:'left'
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


<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
  color: white;
}
</style>
