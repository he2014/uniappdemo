<template>
	<view class="content">
		页面 - vuex 应用
		<button @click="a">state</button>
		<button @click="b">getters</button>
		<button @click="d">mutations</button>
		<button @click="c">actions</button>
	</view>
</template>

<script>
import {mapMutations, mapGetters, mapActions, mapState} from 'vuex'
import {getDetail}  from '../../../api/user'
export default {
	data() {
		return {
			title: 'Hello'
		};
	},
  mounted() {

	},
  onShow() {
    getDetail({index:1, size:15, title: '', identitfying: ''}).then(res => {
      console.log(res, '接口返回数据')
    })
  },
	computed:{
		...mapState({userInfo: state => state.user.userInfo}),
		...mapGetters(['getUserInfo'])
	},
	methods:{
		...mapActions(['responseUserInfo']),
		...mapMutations(['userCommits']),
		a() {
			console.log(this.userInfo)
		},
		b() {
			console.log(this.getUserInfo)
		},
		async c() {
			await this.responseUserInfo({id:4, type: 'actions'})
		},
		d() {
			this.userCommits({id: 6})
		}


	},
	onLoad() {
		console.log(this.$store, '6767')
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
	margin-top: 200upx;
}
</style>
