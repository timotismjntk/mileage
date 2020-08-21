class penghitungJarak {
    constructor(pukulAwal, pukulAkhir, kecepatanAwal){
        this.pukulAwal = pukulAwal;
        this.pukulAkhir = pukulAkhir;
        this.kecepatanAwal = kecepatanAwal;
        this.arrAwal = [];
        this.arrAkhir = [];
        this.waktuAwal = "";
        this.waktuAkhir = "";
        this.jarak = 0;
        this.x = 0;
    }
    mulai() {
        
        for(let i = 0; i<=this.pukulAwal.length -1; i++){
            this.waktuAwal += this.pukulAwal[i]
            this.waktuAkhir += this.pukulAkhir[i]
            
            if((this.pukulAwal[i] === ':' || i === this.pukulAwal.length - 1) || (this.pukulAkhir[i] === ":" && i !== this.pukulAkhir.length - 1)){
                this.arrAwal[this.x] = parseInt(this.waktuAwal) //mengubah HH:MM:SS menjadi array number
                // arr[x] = Number(waktu1.split(':').join('')) // mengubah HH:MM:SS menjadi array menggunakan method split
                this.arrAkhir[this.x] = parseInt(this.waktuAkhir) //mengubah HH:MM:SS menjadi array number
                // arr1[x] = Number(waktu1.split(':').join('')) // mengubah HH:MM:SS menjadi array menggunakan method split
                this.waktuAwal=''
                this.waktuAkhir=''
                this.x++
            }
        }
        //Mengubah waktu menjadi menit
        this.waktuAwal = this.arrAwal[0] * (60*60) + this.arrAwal[1] * 60 + this.arrAwal[2] // jam diubah ke menit dikali 3600/ 60 * 60
        this.waktuAwal /= 60
        
        //Mengubah waktu menjadi menit
        this.waktuAkhir = this.arrAkhir[0] * (60*60) + this.arrAkhir[1] * 60 + this.arrAkhir[2] // jam diubah ke detik dikali 3600/ 60 * 60
        this.waktuAkhir /= 60

        //5 menit kemudian kecepatan dinaikkan 2m/detik
        this.waktuAwal += 5
        this.kecepatanAwal += 2
        this.jarak = this.kecepatanAwal * this.waktuAwal

        //kecepatan rata-rata dan waktu total
        this.kecepatanRataRata = this.kecepatanAwal
        this.waktuTotal = this.waktuAkhir - this.waktuAwal
        this.waktuTotals = this.waktuTotal * 60 //mengubah menit ke detik
        // console.log(this.waktuTotals)

        //10 menit berikutnya kecepatan selalu dinaikkan 1m/detik
        for(var z=this.waktuAwal; z<=this.waktuAkhir; z += 10){
            this.kecepatanRataRata += 1
        }
        // console.log(this.kecepatanRataRata)

        //menghitung jarak yang ditempuh sebuah mobil
        this.jarak += this.kecepatanRataRata * this.waktuTotals

        console.log("jarak yang ditempuh mobil sejak pukul " + this.pukulAwal + " sampai pukul " + this.pukulAkhir);
        console.log("adalah " + Math.round(this.jarak) + " meter atau " + Math.round(this.jarak)/1000 + " kilometer" + " dengan kecepatan Rata-Rata " + this.kecepatanRataRata + " m/s.");
    }
}


module.exports = penghitungJarak