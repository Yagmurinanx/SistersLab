import React, { Component } from 'react';
import "./styles.css";
import { Hamburger } from "../../components";
import { Ingredients } from '../../components';
import { TotalPrice } from "../../components";


// hamburgerapp sınıfı tanımlanır component sınıfında miras alır
class HamburgerApp extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            secilenMalzemeler: [],
            totalPrice: 0,
        }
    }
/*burda super(props) ifadesi üst sınıfın yani component, constructor yötemini çağırır ve props constructor yöntemine iletilir
this.state başlangıç durumunu tanımlar, dinamiktir*/
    malzemeEkle = (malzeme) => {
        // var mi yok mu kontrol ediyoruz
        const varMi = this.state.secilenMalzemeler.find((secilenMalzeme) => secilenMalzeme.id === malzeme.id);
        /*this statete olan seciler malzemelerin id yi kontrol et eğer id eşitse*/
        if (varMi) {
            this.setState({
                secilenMalzemeler: this.state.secilenMalzemeler.map((secilenMalzeme) => {
                    if (secilenMalzeme.id === malzeme.id) {
                        return { ...secilenMalzeme, count: secilenMalzeme.count + 1 }
                    } else {
                        return secilenMalzeme;
                    }
                })
            })
        } else {
            this.setState({
                secilenMalzemeler: [...this.state.secilenMalzemeler, { ...malzeme, count: 1 }]
            })
        }
    }
        /* setState i güncelleyecek bir fonksiyon,map ile döngüye alınır ve malzemeler kontrol edilir sonrasın yeni fonksiyon, seçilen malzeme ıd malzeme id ye eşitse count sayısını bir arttır ve dizinin kopyasında bunu yap, değilse secilen malzemeyi ekler- setState güncellenir ve ikinci else bloğu çalışmaya başlar bu blogda güncel state e 1 ekler*/
    malzemeCikar = (malzeme) => {
        const secilenMalzeme = this.state.secilenMalzemeler.find((secilen) => secilen.id === malzeme.id);
        const secilenMalzemeCount = secilenMalzeme.count;
        // sayi 1 ise secilenlerden tamamen cikartiyorum, 1 den buyuk ise bu sayiyi azaltiyorum
        if (secilenMalzemeCount > 1) {
            this.setState({
                secilenMalzemeler: this.state.secilenMalzemeler.map((secilen) => {
                    if (secilen.id === malzeme.id) {
                        return { ...secilen, count: secilen.count - 1 }
                    }
                    return secilen;
                })
            })
        } else {
            this.setState({
                secilenMalzemeler: this.state.secilenMalzemeler.filter((secilen) => {
                    return secilen.id !== malzeme.id
                })
            })
        }
    }
    /*öncelikle malzeme çıkarmak için seçilen malzeme diye bir const tanımlanır ve bu seçilen malzemeler dizisi içinde malzeme id ile eşleşen bir seçilen id var mı diye kontrol eder, sonrasında yeni bir const tanumlanır ve secilenmalzeme arrayindeki count a eşitlenir
    sonrasında ikinci const yani count 1 den büyükse this.setState kullanılarak durum güncellenir bunu yapmak için kodun devamında map ile secilenmalzemeler dizisindeki id seçilen id ye eşitse return le counttan 1 eksiltiriz yani count eşittir count -1 olur, ilk koşul çalışmazsa yani bu malzeme zaten kullanılmamışsa, filter fonksiyonu ile döngü sağlanır secilen id malzeme id ye eşit değilse dizide kalmaya devam eder ve filter işlemi return sayesinde sona erer*/


    total = () => {
        /* let totals = 0;
        this.state.secilenMalzemeler.forEach((malzeme) => {
             totals += malzeme.price * malzeme.count
        });
         return totals; 
         recduce ile aşşağıda seçilen malzemelerin toplam fiyatı hesaplanıyor*/
        const total = this.state.secilenMalzemeler.reduce((total, malzeme) => {
            return total + malzeme.price * malzeme.count;
        }, 0)
        return total

    }
 /*component içinde tanımlanan seçilen malzemelere this.state ile ulaşılır, bu kod verinin verinin this.state bileşeninin içinde tanımlanan bir nesne olduğunu belirtir.Sol taraf iletilmek istenen verinin adını sağ taraf da prop'un değerini temsil eder*/
    render() {
        const { secilenMalzemeler } = this.state;
        return (
            <div>
                <Hamburger secilenMalzemeler={secilenMalzemeler} />
                <Ingredients
                    secilenMalzemeler={secilenMalzemeler}
                    malzemeEkle={this.malzemeEkle}
                    malzemeCikar={this.malzemeCikar}
                />
                <TotalPrice total={this.total} />
            </div>
        );
    }
}

export default HamburgerApp;