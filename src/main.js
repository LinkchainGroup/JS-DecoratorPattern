import './index.html';
import 裝飾器 from './scripts/decorator'

//#region ===== 範例一 =====

@裝飾器.動態加入方法({
    name: "getFullName",
    callback: function() {
        return this.名字 + " " + this.姓氏;
    }
})
class 貓 {
    /** 屬性 */
    名字
    姓氏

    constructor(名字, 姓氏) {
        this.名字 = 名字
        this.姓氏 = 姓氏
    }

    //@裝飾器.唯讀
    叫一聲來聽聽 () {
        console.log('喵')
    }
}



let 咪咪 = new 貓('Ray', 'Huang')

console.log(咪咪.getFullName())

咪咪.叫一聲來聽聽()

//咪咪.叫一聲來聽聽 = () => { console.log('汪') }
//咪咪.叫一聲來聽聽()

//#endregion ===== 範例一 =====

//#region ===== 範例二 =====
@裝飾器.打折({
    name: '售價',    
    callback: function() {        
        return this.標價 * 0.6;
    }
})
class 麥香奶茶 {
    /** 屬性 */
    標價 = 10
    @裝飾器.唯讀
    售價 () {
        return this.標價
    }
}

class 購物車 {
    佇列 = []
    買 (商品) {
        this.佇列.push(商品)
    }
    結帳 () {
        return this.佇列.map(a => a.售價()).reduce((curr, pre) => curr + pre)
    }
}

let 敗家購物車 = new 購物車()
敗家購物車.買(new 麥香奶茶())
敗家購物車.買(new 麥香奶茶())
敗家購物車.買(new 麥香奶茶())
console.log(`總共 ${敗家購物車.結帳()} 元...請支援收銀`)
//#endregion ===== 範例二 =====