class Thongtin{
    constructor(ten,mota){
        this.ten=ten;
        this.mota=mota;
    }
    hamtinhtoan(giatri=1){
        return giatri*3;
    }
}
class Hinhhoc extends Thongtin{
    constructor(ten,mota,chieudai){
        super(ten,mota)
        this.chieudai=chieudai;
    }
}
let hinhhoc = new Hinhhoc("A","thongtinA",2)
console.log(hinhhoc)
console.log(hinhhoc.hamtinhtoan(2))
let thongtin = new Thongtin("A","thongtinA")
console.log(thongtin)
