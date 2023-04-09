<template>
  <div class="wholePage" style="border-width: 20px;border-color:black;width: 70%;height:100%;margin: auto;">
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs :tab-position="tabPosition"  type="card-border" style="color:white;height: 100%" class="demo-tabs" tab-click="tabClick">
      <el-tab-pane  label="   关注   " >Home</el-tab-pane>
      <el-tab-pane label="   主页   " >Config
        <div v-for="arrObjContent in arrObj" :key="arrObjContent.id">

          <h1>{{arrObjContent.content}}</h1>
        </div>
        <ul>
          <li v-for="arrObjContent in arrObj" :key="arrObjContent.id">{{arrObjContent.content}}</li>
        </ul>


      </el-tab-pane>
      <el-tab-pane label="   发布   ">
        <h2>发布信息</h2>
        <br>
        <br>
        <!--        <el-input-->
        <!--            v-model="postTitle"-->
        <!--            maxlength="50"-->
        <!--            style="width: 80%;height: 50px"-->
        <!--            placeholder="输入标题"-->
        <!--            show-word-limit-->
        <!--            type="text"-->
        <!--        />-->
        <!--        <br>-->
        <el-input
            style="width: 80%"
            v-model="postText"
            :rows="14"
            type="textarea"
            placeholder="输入内容"
        />
        <!--        <div >添加图片</div>-->
        <!--        <div style="float:left;padding-left: 10%">-->
        <!--        <el-upload-->
        <!--            v-model:file-list="fileList"-->
        <!--            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"-->
        <!--            list-type="picture-card"-->
        <!--            :on-preview="handlePictureCardPreview"-->
        <!--            :on-remove="handleRemove"-->
        <!--            :auto-upload="false"-->
        <!--        >-->
        <!--          <el-icon><Plus /></el-icon>-->
        <!--        </el-upload>-->
        <!--        </div>-->
        <br>
        <br>
        <div style="display: flex;">
          <div style="width: 62%;padding-left: 10%" >
            <el-upload
                v-model:file-list="fileList"
                class="upload-demo"
                drag
                multiple
                :auto-upload="false"
            >
              <el-icon class="el-icon--upload" style="height: 0px"><upload-filled /></el-icon>
              <div class="el-upload__text">
                Drop file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  files with a size less than 100MB
                </div>
              </template>
            </el-upload>
          </div>
          <div style="width: 2%"></div>
          <el-button
              round
              dark:true
              plain:true
              icon="el-icon-edit"
              class="edit_btn"
              style="width:16%;height: 135px;padding-right: 10%"
              @click="PostMessages"
          ><div style="font-size:30px;padding-left: 45%;">Post</div></el-button>
        </div>
      </el-tab-pane>

      <el-tab-pane label="个人">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting,Plus,UploadFilled} from '@element-plus/icons-vue'
// import message from '@/element-plus/icons-vue'

import { Edit,FolderOpened } from '@element-plus/icons-vue'

import { abi,contractAddress,NFT_STORAGE_KEY,NFTUploadUrl,Authorization} from '@/components/const.js'
import Web3 from 'web3'
let web3 = new Web3(Web3.givenProvider);
// let web3 = new Web3(Web3.givenProvider);
import Buffer from "vue-buffer";import axios from 'axios';

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
  components: {
    abi,
    contractAddress,
    NFT_STORAGE_KEY,
    Edit,
    IconMenu,
    Message,
    Setting,
    Plus,
    UploadFilled,
    Authorization

  },
  data() {
    return {
      src: '',
      ipfsHash: '',
      file: null,
      addr: null,
      tableData: [],
      tabPosition: 'left',
      postTitle: null,
      postText: null,
      fileList: [],
      fileListString: '',
      contract: null,
      NFTClient: null,
      buffer: null,
      fileAddr: '',
      messageCount:0
    };
  },
  methods: {
    tabClick(){
      console.log("kais")
      this.contract = new web3.eth.Contract(abi, contractAddress)
      this.contract.methods.postMessage(this.postText,this.fileListString).call().on('receipt', (data) => {
        console.log(data)
        // this.messageCount
      }).catch((e)=>{
        console.log('获取失败');
        console.log(e);
      });
    },

    async PostMessages() {
      if (window.ethereum) {
        window.ethereum.enable().then((res) => {
          // console.log(res)
          this.addr=res
          alert("当前钱包地址:" + this.addr);
        });
      } else {
        alert("请安装MetaMask钱包");
      }

      // let ans = await this.contract.methods.getAllUsers().call();
      // console.log(ans)
      console.log("postMessage");
      this.fileListString='';
      if(this.fileList!=null) {
        for (let i = 0; i < this.fileList.length; i++) {
          // this.fileAddr = '';
          // const reader = new window.FileReader()
          // reader.readAsArrayBuffer(this.fileList[i].raw)
          // reader.onloadend = () => {
          //   this.buffer = Buffer(reader.result)
          //   // console.log(this.buffer)
          //
          //   let config = {
          //     method: 'post',
          //     url: NFTUploadUrl,
          //     headers: {
          //       'Authorization': Authorization + NFT_STORAGE_KEY
          //       // 'Accept': '*/*',
          //       // 'Content-Type': 'image/jpeg'
          //     },
          //     data: this.buffer
          //   };
          //   axios(config)
          //       .then(function (response) {
          //         console.log(JSON.stringify(response.data.value.cid));
          //         this.fileListString += '#' + JSON.stringify(response.data.value.cid);
          //         // this.fileAddr=JSON.stringify(response.data.value.cid);
          //       })
          //       .catch(function (error) {
          //         console.log(error);
          //       });
          // }
          await this.UpLoadToIPFS(this.fileList[i]);
        }
      }
      // console.log(this.fileListString);
      // this.contract.methods.postMessage(this.postText,this.fileListString).send({
      //   from:'0x6Ca2ea2dA3119423392751c38819f5aF001F3388'
      //   // from:'0xE1de9c72aa4b5722b25FA1A5BD17A2642c2905A5'
      // }).on('receipt', (data) => {
      //   console.log(data)
      // });
      await this.affAll();
    },
    UpLoadToIPFS(file) {
      // console.log(file)
      return new Promise((resolve, reject) => {
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file.raw)
        reader.onloadend = () => {
          this.buffer = Buffer(reader.result)
          // console.log(this.buffer)

          let config = {
            method: 'post',
            url: NFTUploadUrl,
            headers: {
              'Authorization': Authorization + NFT_STORAGE_KEY
              // 'Accept': '*/*',
              // 'Content-Type': 'image/jpeg'
            },
            data: this.buffer
          };

          axios(config)
              .then(response =>{
                console.log(JSON.stringify(response.data.value.cid));
                // this.fileAddr = JSON.stringify(response.data.value.cid);
                this.fileListString += '#' + JSON.stringify(response.data.value.cid);
                console.log("after||!!!")
                resolve();
              })
              .catch(function (error) {
                console.log(error);
                reject();
              });
        }
      });
    },
    affAll() {

      return new Promise((resolve,reject)=>{
        this.contract = new web3.eth.Contract(abi, contractAddress)
        console.log(this.fileListString);
        this.contract.methods.postMessage(this.postText,this.fileListString).send({
          // from:'0x6Ca2ea2dA3119423392751c38819f5aF001F3388'
          from:'0xE1de9c72aa4b5722b25FA1A5BD17A2642c2905A5'
        }).on('receipt', (data) => {
          console.log(data)
          console.log(data.transactionHash)
          resolve();
        }).catch((e)=>{
          console.log('发送失败');
          console.log(e);
        });
      })
    },
    created() {
      console.log("begin")
      // this.NFTClient=new NFTStorage({ token: NFT_STORAGE_KEY })
      this.contract = new web3.eth.Contract(abi, contractAddress)
      this.contract.methods.getMessageCount().call().then(ans => {
        for (let i = ans - 1; i >= 0; i--) {
          this.contract.methods.getMessageById(i).call().then(data => {
                this.tableData.splice(ans - i - 1, 0, data)
                console.log(data)
              }
          )

        }
        console.log(ans)
      });

    }


  }
}
</script>


<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: black;
  /*font-size: 32px;*/
  font-weight: 600;
  background-color: #E5EAF3;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
  /*color: white;*/
  /*background-color: #E5EAF3;*/
}


.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
