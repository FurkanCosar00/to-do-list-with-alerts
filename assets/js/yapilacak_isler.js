
// GRUPLANDIRMA

let yapilacakisler = ['deneme', 'deneme2'];

// KULLANICIDAN BİLGİ ALMA

let hogeldiniz = alert('Hoşgeldiniz. Yapılacak işlerinizi beraber düzenleyelim.')
let eklemekicin = prompt('Yeni eleman eklemenize yardımcı olabilmek için lütfen sıra seçiniz (a- listenin başına ekle / b- listenin sonuna ekle)')

if(eklemekicin === 'a') {

    let yenieklenecek = prompt(' lütfen ekleyiniz');
    yapilacakisler.push(
        {
            is: yenieklenecek,
            tamamlandimi: false
        }
    );

}

else if(eklemekicin === 'b') {

    let yenieklenecek = prompt(' lütfen ekleyiniz');
    yapilacakisler.unshift(
        {
            is: yenieklenecek,
            tamamlandimi: false
        }
    );

}

// TABLO HALİNE GETİRME

console.table(yapilacakisler);
