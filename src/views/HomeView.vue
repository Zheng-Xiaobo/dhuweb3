<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header style="background-color: #FCFCFC;border-bottom: black;border-width: 5px">DHU WEB3<Header/></el-header>
      <el-container>
        <el-aside width="18%">
          <el-menu
              default-active="3"
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              @open="handleOpen"
              @close="handleClose"
          >
            <el-menu-item index="1" style="height: 70px;" @click="fy(0)">
              <div style="width: 30px;"></div>
              <el-icon :size="100"><HomeFilled /></el-icon>
              <template #title>Home</template>
            </el-menu-item>
            <el-menu-item index="2" style="height: 70px;" @click="fy(1)">
              <div style="width: 30px;"></div>
              <el-icon size="300px"><icon-menu /></el-icon>
              <template #title>Post</template>
            </el-menu-item>
            <el-menu-item index="3" style="height: 70px;" @click="fy(2)">
              <div style="width: 30px;"></div>
              <el-icon size="300px"><UserFilled /></el-icon>
              <template #title>User</template>
            </el-menu-item>
            <el-menu-item index="4" style="height: 70px;" @click="fy(3)">
              <div style="width: 30px;"></div>
              <el-icon size="300px"><document /></el-icon>
              <template #title>Files</template>
            </el-menu-item>
            <el-menu-item index="5" style="height: 70px;">
              <div style="width: 30px;"></div>
              <el-icon size="300px"><setting /></el-icon>
              <template #title>Setting</template>
            </el-menu-item>
          </el-menu>

        </el-aside>
        <el-main>
          <Page v-if="isShow[0]">

            <div style="padding-left: 10%;padding-right: 10%" >
              <div style="height: 60px"><h1>HOME</h1></div>
              <div v-for="message in this.allMessages" :key="message" style="text-align:left;">

                  <el-card class="box-card">
                    <template #header>
                      <div class="card-header" style="display: inline">
                        <div class="demo-type" style="float: left;">
                          <el-avatar :size="60" src="https://empty" @error="errorHandler">
                            <img
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                            />
                          </el-avatar>
                        </div>
                        <span style="display: inline-block;height: 10px"></span>
                        <br>

                        <span style="display: inline-block;height: 25px">{{allUserNameMap.get(message[1])}}</span>

                        <br>
                        <el-link @click="this.inputAddrChange(message[1])">
                        <span style="display: inline-block;font-size: 5px">{{message[1]}}</span>
                        </el-link>
                      </div>
                    </template>
                    <div style="padding-left: 0%">
                    {{message[0]}}
                    </div>
                    <br>
                    <br>
                    <div v-if="message[4]!=null&&message[4].length>0" style="padding-left: 0% ;font-size: 5px">
                      附属文件:
                    </div>
                    <div v-for="item in message[4]" :key="item" style="text-align:left;">
                    <div style="font-size: 5px;">

                      <el-link>
                        <div style="float: left">
                          {{item}}
                        </div>
                      </el-link>
                    </div>
                      <el-image :src=this.ipfsGateway[0]+item lazy />
                    </div>
                    <div style="padding-left: 0% ;font-size: 5px">
                      {{message[3]}}
                    </div>
                    <br>
                    <div style="display: inline-block">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <el-button size="small" style="float: left">
                      <el-icon size="20px"><Share /></el-icon>
                     </el-button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-button size="small">
                      <el-icon size="20px"><Comment /></el-icon>
                      </el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <el-button size="small" style="float: right" @click="this.messageDetail(message)">
                        <el-icon size="20px"><More /></el-icon>
                      </el-button>

                    </div>
                  </el-card>

              </div>
            </div>


          </Page>

          <Page v-if="isShow[1]" >
            <div style="height: 60px"><h1>发布信息</h1></div>
<!--            <el-button size="small" style="float: left" @click="test">-->
<!--              <el-icon size="20px"><Share /></el-icon>-->
<!--            </el-button>-->
            <el-input
                style="width: 76%"
                v-model="postText"
                :rows="10"
                type="textarea"
                placeholder="输入内容"
            />
            <br>
            <br>
            <div style="display: flex;">
              <div style="width: 70%;padding-left: 12%" >
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
              ><div style="font-size:30px;padding-left: 55%;">Post</div></el-button>
            </div>

          </Page>

          <Page v-if="isShow[2]">
              <div style="width: 80%;margin: auto;text-align:left;" >
                <el-input v-model="this.inputAddr" placeholder="Please input userAddress" clearable @change="inputAddrChange"/>
                <br>

                <el-card class="box-card">
                  <template #header>
                    <div class="card-header" style="display: inline">
                      <div class="demo-type" style="float: left;">
                        <el-avatar :size="120" src="https://empty" @error="errorHandler">
                          <img
                              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                          />
                        </el-avatar>
                      </div>
                      <span style="display: inline-block;height: 60px"></span>
                      <br>
                      <span style="display: inline-block;height: 25px">&nbsp;&nbsp;{{this.nowUser[0]}}</span>
                      <span style="display: inline-block;height: 25px;float: right;color: #8D9095;font-size: 12px">
                                                &nbsp;&nbsp;粉丝&nbsp;{{this.nowUser[5]}}&nbsp;&nbsp;&nbsp;&nbsp;关注&nbsp;{{this.nowUser[6]}}</span>
                      <br>
                      <span style="display: inline-block;font-size: 5px">&nbsp;&nbsp;{{this.addr}}</span>
                      <br>
                      <br>
                      <span style="display: inline-block;height: 20px;float: left;color: #8D9095;font-size: 15px">
                        <el-icon size="25px"><document /></el-icon></span>
                      <span style="display: inline-block;height: 20px"></span>
                      <span style="display: inline-block;height: 20px;color: #8D9095;font-size: 15px">
                      &nbsp;{{this.nowUser[1]}}
                        </span>
                      <br>
                      <br>
                      <br>
                    </div>
                    <el-divider />
                    <div>用户发布</div>
                    <br>
                    <br>
                    <div v-for="message in this.userMessage" :key="message" style="text-align:left;">

                      <el-card class="box-card">
                        <template #header>
                          <div class="card-header" style="display: inline">
                            <div class="demo-type" style="float: left;">
                              <el-avatar :size="60" src="https://empty" @error="errorHandler">
                                <img
                                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                />
                              </el-avatar>
                            </div>
                            <span style="display: inline-block;height: 10px"></span>
                            <br>
                            <span style="display: inline-block;height: 25px">{{this.nowUser[0]}}</span>
                            <br>
                            <el-link @click="this.inputAddrChange(message[1])">
<!--                            <el-link @click="this.inputAddrChange(item)">-->
                            <span style="display: inline-block;font-size: 5px">{{message[1]}}</span>
                            </el-link>
                            <!--                        <div style="width: 5%;float:right">-->
                            <!--                        <el-button class="button" text>详情</el-button>-->
                            <!--                        </div>-->
                          </div>
                        </template>






                        <div style="padding-left: 0%">
                          {{message[0]}}
                        </div>
                        <br>
                        <br>
                        <div v-if="message[4]!=null&&message[4].length>0" style="padding-left: 0% ;font-size: 5px">
                          附属文件:
                        </div>
                        <div v-for="item in message[4]" :key="item" style="text-align:left;">
                          <div style="font-size: 5px;">

                            <el-link >
                              <div style="float: left">
                                {{item}}
                              </div>
                            </el-link>
                          </div>
                          <el-image :src=this.ipfsGateway[0]+item lazy />
                        </div>
                        <div style="padding-left: 0% ;font-size: 5px">
                          {{message[3]}}
                        </div>
                        <br>
                        <div style="display: inline-block">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <el-button size="small" style="float: left">
                            <el-icon size="20px"><Share /></el-icon>
                          </el-button>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <el-button size="small">
                            <el-icon size="20px"><Comment /></el-icon>
                          </el-button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <el-button size="small" style="float: right">
                            <el-icon size="20px"><More /></el-icon>
                          </el-button>

                        </div>
                      </el-card>

                    </div>
                  </template>
                </el-card>
              </div>

            </Page>

          <Page v-if="isShow[3]">
            <div style="width: 80%;margin: auto;text-align:left;" >
              <el-input v-model="this.inputFileAddr" placeholder="Please input fileAddress" clearable @change="inputFileAddrChange"/>
                <el-card>


                </el-card>
            </div>
          </Page>


          <Page v-if="detailPageShow">
            <div v-if="this.detailPage!=null&&this.detailPage.length>0">
            <dhu-comment :allUserNameMap="this.allUserNameMap" :detailPageNow="this.detailPage[this.detailPage.length-1]"
                         v-on:inputAddrChange="this.inputAddrChange" v-on:messageDetail="this.messageDetail" v-on:back="this.backPage()">

            </dhu-comment>
            </div>
          </Page>


        </el-main>
        <el-aside width="18%">
          <div></div>
<!--          <el-menu-->
<!--              default-active="2"-->
<!--              class="el-menu-vertical-demo"-->
<!--              :collapse="isCollapse"-->
<!--              @open="handleOpen"-->
<!--              @close="handleClose"-->
<!--          >-->
<!--            <el-menu-item index="1" style="height: 70px;" @click="fy(0)">-->
<!--              <div style="width: 30px;"></div>-->
<!--              <el-icon :size="100"><HomeFilled /></el-icon>-->
<!--              <template #title>Home</template>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item index="2" style="height: 70px;" @click="fy(1)">-->
<!--              <div style="width: 30px;"></div>-->
<!--              <el-icon size="300px"><icon-menu /></el-icon>-->
<!--              <template #title>Post</template>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item index="3" style="height: 70px;">-->
<!--              <div style="width: 30px;"></div>-->
<!--              <el-icon size="300px"><document /></el-icon>-->
<!--              <template #title>Navigator Three</template>-->
<!--            </el-menu-item>-->
<!--            <el-menu-item index="4" style="height: 70px;">-->
<!--              <div style="width: 30px;"></div>-->
<!--              <el-icon size="300px"><setting /></el-icon>-->
<!--              <template #title>Navigator Four</template>-->
<!--            </el-menu-item>-->
<!--          </el-menu>-->

        </el-aside>
      </el-container>
<!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting,Plus,UploadFilled,Document, Location,
  HomeFilled,ChatRound,ChatDotSquare,Comment,Share,More,View,UserFilled} from '@element-plus/icons-vue'
// import message from '@/element-plus/icons-vue'

import { Edit,FolderOpened } from '@element-plus/icons-vue'

import { abi,contractAddress,NFT_STORAGE_KEY,NFTUploadUrl,Authorization,IPFSGateway} from '@/components/const.js'
import Web3 from 'web3'
let web3 = new Web3(Web3.givenProvider);
// let web3 = new Web3(Web3.givenProvider);
import Buffer from "vue-buffer";
import axios from 'axios';
import dhuComment from "@/components/dhu-comment";

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
    Authorization,
    Document,
    Location,
    HomeFilled,
    ChatRound,
    ChatDotSquare,
    Comment,
    Share,
    More,
    IPFSGateway,
    View,
    UserFilled,
    dhuComment


  },
  data() {
    return {
      src: '',
      ipfsHash: '',
      file: null,
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
      messageCount:0,
      isShow:[false,false,true,false,false],
      detailPageShow:false,
      allMessages:[],
      allUserMap:new Map(),
      allUserNameMap:new Map(),
      ipfsGateway:IPFSGateway,
      loginAddress:'',
      loginUser:[],
      addr: '',
      nowUser:[],
      userMessage:[],
      inputAddr:'',
      inputFileAddr:'',
      nowFileAddr:'',
      downLoadFile:null,
      detailPage:[],
      comments:[],
      memoPageNumber:0
    };
  },
  methods: {
    fy(i){
      for (let j = 0; j < 5; j++) {
        this.isShow[j]=false;
      }
      this.detailPageShow=false;
      this.isShow[i]=true;
      console.log(i);
      if(i==0)
        this.toHome();
      if(i==2) {
        this.toUser();
      }
      if(i==3) {
        this.toFile();
      }

    },
    test(){

      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = IPFSGateway[0]+'bafkreidympdageefuq2dyczxglmteyjcm27x5gfdemjemw5otmad7cyceq';
      document.body.appendChild(link);
      link.click();

    },
    backPage()
    {
      if(this.detailPage!=null&&this.detailPage.length>0)
      {
          this.detailPage.splice(this.detailPage.length-1,1);
          if(this.detailPage==null||this.detailPage.length==0)
          {
              this.isShow[this.memoPageNumber]=true;
              this.detailPageShow=false;
          }
      };
    },
    messageDetail(message)
    {

      console.log(message);
      this.contract = new web3.eth.Contract(abi, contractAddress);
      this.comments=[];
      this.contract.methods.getComments(message[6]).call().then(comments=>{
        for (let js = 0; js < comments.length; js++) {
          let i=comments[js];
          this.contract.methods.getMessageById(i).call().then(ans=>{
            console.log(ans)
            let now=new Date(parseInt(ans[3]) * 1000);
            let y = now.getFullYear();
            let m = now.getMonth() + 1;
            let d = now.getDate();
            ans[3]=y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
            if(ans[4]!=null&&ans[4].length!=0) {
              let memo=[];
              for (let j = 2; j < ans[4].length; j+=62) {
                memo.push(ans[4].substr(j,59));
              }
              ans[4]=memo;
            }
            ans[6]=i;
            this.userMessage.push(ans);
            this.comments.push(ans);
          })
        }
        this.detailPage.push(
            {
              pageMessage:message,
              pageComments:this.comments
            }
        )
        if(this.isShow[2]==true)
        {
          this.memoPageNumber=2;
          this.isShow[2]=false;
        }
        else {
          this.memoPageNumber = 0;
          this.isShow[0]=false;
        }
        this.detailPageShow=true;




      })



    },
    inputFileAddrChange(inputFileAddrNow){
      if(inputFileAddrNow!=null&&inputFileAddrNow.length==64)
      {
        this.fileAddr=inputFileAddrNow;
        this.toFile();
      }

    },
    inputAddrChange(inputaddrNow){
      console.log("input!!!")
      if(inputaddrNow!=null&&inputaddrNow.length!=0)
        this.inputAddr=inputaddrNow;
      if(this.inputAddr!=null&&this.inputAddr.length==42) {
        this.addr = this.inputAddr;
        this.fy(2);
      }
      else if(this.inputAddr==null||this.inputAddr.length==0)
      {
        this.addr=this.loginAddress;
        this.toUser();
      }
    },
    toFile(){


    },
    toUser(){
      console.log('toUser')
      this.userMessage=[];
      console.log(this.addr)
      this.contract = new web3.eth.Contract(abi, contractAddress);
      console.log(this.allUserNameMap.has(this.addr))
      if(this.allUserNameMap.has(this.addr))
      {

        let user=this.allUserMap.get(this.addr);
        this.nowUser=user;
        this.allUserNameMap.set(this.addr,user[0]);
        for (let i = 0; i < user[4].length; i++) {
          this.contract.methods.getMessageById(user[4][i]).call().then(ans=>{
            console.log(ans)
            let now=new Date(parseInt(ans[3]) * 1000);
            let y = now.getFullYear();
            let m = now.getMonth() + 1;
            let d = now.getDate();
            ans[3]=y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
            if(ans[4]!=null&&ans[4].length!=0) {
              let memo=[];
              for (let j = 2; j < ans[4].length; j+=62) {
                memo.push(ans[4].substr(j,59));
              }
              ans[4]=memo;
            }
            // if(this.allUserMap.prototype.hasKey())
            //   console.log(this.allUserMap.prototype.has(ans[1]));
            // ans.push(i);
            ans[6]=i;
            this.userMessage.push(ans);
          })
        }

      }else{
          this.contract.methods.getUserByAddress(this.addr).call().then(user=>{
          this.nowUser=user;
          this.allUserNameMap.set(this.addr,user[0]);
          this.allUserMap.set(this.addr,user);
          this.allUserNameMap.set(this.addr,user[0]);
          console.log(this.allUserMap.has(this.addr));

          for (let i = 0; i < user[4].length; i++) {
            this.contract.methods.getMessageById(user[4][i]).call().then(ans=>{
              let now=new Date(parseInt(ans[3]) * 1000);
              let y = now.getFullYear();
              let m = now.getMonth() + 1;
              let d = now.getDate();
              ans[3]=y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
              if(ans[4]!=null&&ans[4].length!=0) {
                let memo=[];
                for (let j = 2; j < ans[4].length; j+=62) {
                  memo.push(ans[4].substr(j,59));
                }
                ans[4]=memo;
              }
              // ans.push(i);
              ans[6]=i;
              this.userMessage.push(ans);
            })
          }
        })

      }
      console.log(this.userMessage);

    },
    toHome(){
      this.contract = new web3.eth.Contract(abi, contractAddress);
      this.allMessage=[];
      this.contract.methods.getMessageCount().call().then(count=>{
        this.messageCount=count;
        console.log(count);
        if(count>0)
        {
          for (let i = 0; i <count ; i++) {
            // this.allMessages.push(this.contract.methods.getMessageById(i).call().data);
            this.contract.methods.getMessageById(i).call().then(ans=>{
              console.log('ans:')
              console.log(ans[1]);
              console.log(ans);
              let now=new Date(parseInt(ans[3]) * 1000);
              let y = now.getFullYear();
              let m = now.getMonth() + 1;
              let d = now.getDate();
              ans[3]=y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + now.toTimeString().substr(0, 8);
              // if(this.allUserMap==null) {
              //   this.allUserMap = new Map();
              // }
              if(!this.allUserMap.has(ans[1]))
              { console.log(ans[1]);
                this.contract.methods.getUserByAddress(ans[1]).call().then(user=>{
                  this.allUserMap.set(ans[1],user);
                  this.allUserNameMap.set(ans[1],user[0]);
                })
              }
              if(ans[4]!=null&&ans[4].length!=0) {
                let memo=[];
                for (let j = 2; j < ans[4].length; j+=62) {
                    memo.push(ans[4].substr(j,59));
                }
                ans[4]=memo;
              }
              ans[6]=i;
              this.allMessages.push(ans);
            })

          }
          console.log(this.allMessages);
        }
          }
      )

    },
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
          await this.UpLoadToIPFS(this.fileList[i]);
        }
      }
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


  },
  created() {
    console.log("begin")
    // this.NFTClient=new NFTStorage({ token: NFT_STORAGE_KEY })
    this.contract = new web3.eth.Contract(abi, contractAddress)
    this.allUserMap = new Map();
    if (window.ethereum) {
      window.ethereum.enable().then((res) => {
        console.log(res)
        this.addr = res[0]
        alert("当前钱包地址:" + this.addr);

        this.contract.methods.getUserByAddress(this.addr).call().then(user=>{
          this.loginAddress=this.addr;
          this.allUserMap.set(this.addr,user);
          this.allUserNameMap.set(this.addr,user[0]);
          this.loginUser=user;
          this.nowUser=user;
          console.log(this.allUserNameMap.get(this.addr));
          this.toUser();
        })

      });
    } else {
      alert("请安装MetaMask钱包");
    }


  }

  }
</script>


<style>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;

}

body > .el-container {
  margin-bottom: 40px;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  /*height: 100%;*/
}
</style>
