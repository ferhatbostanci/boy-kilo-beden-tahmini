
# Boy ve Kiloya Göre En Yakın Beni Tahmin

Makine Öğrenmesinin Temelleri (BLG 434) dersi final ödevi.

Ekip Üyeleri:
- Batuhan GÖKTAŞ [@BatuhanGoktaas](https://github.com/BatuhanGoktaas)
- Emine ÖZKAN [@emineozkann](https://github.com/emineozkann)
- Ferhat BOSTANCI [@ferhatbostanci](https://github.com/ferhatbostanci)
- Hasan DEMİRELLİ [@hasandemirelli](https://github.com/hasandemirelli)

## Problemin Tespiti

Pandemi süreciyle birlikte online alışverişlerde gözle görülür miktarda artış
yaşanmıştır. Türkiye İstatistik Kurumu’nun (TÜİK) açıkladığı Hanehalkı Bilişim Teknolojileri
(BT) Kullanım Araştırmasına göre internetten alışverişlerde yüzde 67,2 ile en çok “giyim ve
spor malzemeleri” siparişi veriliyor.İnternetten satın alınan mal ve hizmet türleri cinsiyete
göre farklılık gösteriyor. Erkeklerin de kadınların da en fazla sipariş verdiği tür “giyim ve spor
malzemeleri” ancak bu erkeklerde yüzde 57; kadınlarda ise yüzde 80. Aynı zamanda
pandemi süreciyle dünyada bireylerin kilo artışının yaşandığı da görülmektedir. Sadece kilo
alan bireylerin ortalamada aldıkları kilo incelendiğinde ise ortalama 6,6 kg aldıkları ortaya
çıktı. Durum böyle olunca bedeni gelmeyen kıyafetlerin geri iadesi de artmıştır. Bu noktada
bizler insanların boy ve kilo oranlarına göre kendi bedenlerini bulmalarına makine
öğrenmesiyle yardımcı olmayı düşündük.

## Çözüm Önerisi

Kullanıcıdan aldığımız boy(cm) ve kilo(kg) verilerinin algoritmadaki kullanım mantığı
şöyledir:

Beden ölçüsü kilo ile doğru, boy ile ters orantılıdır. 160 cm 45 kg ile 192 cm 54 kg
olan iki kişinin boy kilo oranı eşitken beden ölçüleri farklıdır. Bundan dolayı algotirmamızda
beden skorunu hesaplarken [(boy + kilo) / boy] * kilo formülü kullanılmıştır.

## Nasıl Çalışıyor

Kullanıcıdan aldığımız boy(cm) ve kilo(kg) verileri ile bir beden skoru hesaplanıyor.
Daha sonrasında kullanıcının beden skoru ile datasetimizdeki verilere göre
hesaplanan beden skorları karşılaştırılıyor. Daha öncesinden kaydedilen beden
skoruna en yakın olanını baz alarak o beden skoruna ait bedeni tahmin olarak
bizlere sunuyor.

## Akış Diyagramı

![proje akış diyagramı](https://i.hizliresim.com/jq9nm5v.png)

## Projeyi Çalıştırma

```bash
> git clone https://link-to-project
> cd my-project
> npm install
> npm run start
```
