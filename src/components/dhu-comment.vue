<template>
  <div style="margin: auto;text-align:left;" >
    <div style="padding-left: 10%;padding-right: 10%" >
      <div style="height: 30px;width: 100%;display: flex">
        <el-button  @click="this.back" style="width: 100%;float: left">
          <el-icon size="30px" style="float: left;width: 60px"><Back /></el-icon>
        </el-button>
      </div>
          <el-card class="box-card">
            <template #header>
              <div class="card-header" style="display: inline">
<!--                <el-button style="width: 100%;">-->
<!--                  <el-icon size="30px" @click="this.back()" ><Back /></el-icon>-->
<!--                </el-button>-->
                <div class="demo-type" style="float: left;">
                  <el-avatar :size="60" src="https://empty" @error="errorHandler">
                    <img
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    />
                  </el-avatar>
                </div>
                <span style="display: inline-block;height: 10px"></span>
                <br>

                <span style="display: inline-block;height: 25px">{{this.allUserNameMap.get(this.detailPageNow.pageMessage[1])}}</span>

                <br>
                <el-link @click="this.inputAddrChangeComment(this.detailPageNow.pageMessage[1])">
                  <span style="display: inline-block;font-size: 5px">{{this.detailPageNow.pageMessage[1]}}</span>
                </el-link>
                <!--                        <div style="width: 5%;float:right">-->
                <!--                        <el-button class="button" text>详情</el-button>-->
                <!--                        </div>-->
              </div>
            </template>
            <div style="padding-left: 0%">
              {{this.detailPageNow.pageMessage[0]}}
            </div>
            <br>
            <br>
            <div v-if="this.detailPageNow.pageMessage[4]!=null&&this.detailPageNow.pageMessage[4].length>0" style="padding-left: 0% ;font-size: 5px">
              附属文件:
            </div>
            <div v-for="item in this.detailPageNow.pageMessage[4]" :key="item" style="text-align:left;">
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
              {{this.detailPageNow.pageMessage[3]}}
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
              <el-button size="small" style="float: right" @click="this.messageDetailNow(this.detailPageNow.pageMessage)">
                <el-icon size="20px"><More /></el-icon>
              </el-button>

            </div>

      <div  v-for="message in this.detailPageNow.pageComments" :key="message" style="text-align:left;">

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
              <el-link @click="this.inputAddrChangeComment(message[1])">
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
            <el-button size="small" style="float: right" @click="this.messageDetailNow(message)">
              <el-icon size="20px"><More /></el-icon>
            </el-button>

          </div>
        </el-card>
        </div>
        </el-card>
      </div>
  </div>
</template>

<script>
import {IPFSGateway} from "@/components/const";
import {Comment, Edit, Message, More, Setting, Share,Back} from "@element-plus/icons-vue";

export default {
  name: "dhu-comment",
  props: ['detailPageNow','allUserNameMap'],
  components:{
    IPFSGateway,
    Comment,
    Share,
    More,
    Edit,
    Message,
    Setting,
    Back,
  },
  data() {
    return {
      ipfsGateway:IPFSGateway,

    }


  },
  methods: {
    inputAddrChangeComment(ans){
      this.$emit('inputAddrChange',ans);

    },
    messageDetailNow(message){
      this.$emit('messageDetail',message);
    },
    back()
    {
      this.$emit('back');
    }

  }

}
</script>

<style scoped>

</style>