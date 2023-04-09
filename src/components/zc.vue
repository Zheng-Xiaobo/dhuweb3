<template>
  <div class="wholePage">
    <!--  <el-container class="allPage">-->
    <el-container class="layout-container-demo">
      <!--  <el-container class="layout-container-demo" style="height: 500px">-->

      <el-aside width="300px">
        <el-scrollbar>
          <!--        <el-menu :default-openeds="['1', '3']">-->
          <el-menu >

            <el-sub-menu index="1">
              <template #title>
                <el-icon size="200"><Message /></el-icon>NavigatorOne
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <el-icon><setting /></el-icon>Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container>

        <el-header style="text-align: right; font-size: 12px;background-color: #1b2733">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 80px; margin-top: 1px"
              ><setting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>
        <el-main style="background-color: #1b2733">
          <el-scrollbar style="color: #1b2733">
            <el-table :data="tableData" style="color: #1b2733">
              <el-table-column prop="3" label="Date" width="140" />
              <el-table-column prop="2" label="Name" width="120" />
              <el-table-column prop="1" label="Content" />
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>

    </el-container>
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
      tableData:[]
    };
  },
  methods:{

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
.wholePage {
  background: #424243;
  position : absolute;
  width : 100%;
  height : 100%
}
/*.layout-container-demo .el-header {*/
/*  position: relative;*/
/*  background: #39393A;*/
/*  !*background-color: var(--el-color-primary-light-7);*!*/
/*  color: var(--el-text-color-primary);*/
/*}*/

/*.layout-container-demo .el-aside {*/
/*  color: var(--el-text-color-primary);*/
/*  !*background: black;*!*/
/*  background: var(--el-color-primary-light-8);*/
/*}*/
/*.layout-container-demo .el-menu {*/
/*  border-right: none;*/
/*}*/
/*.layout-container-demo .el-main {*/
/*  padding: 0;*/
/*}*/
/*.layout-container-demo .toolbar {*/
/*  display: inline-flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  height: 100%;*/
/*  right: 20px;*/
/*}*/
</style>