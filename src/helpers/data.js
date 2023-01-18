const questions = [
  {
    id: 1,
    question: " React JS Nedir?",
    info: "React, bir front-end kütüphanedir. JavaScript temellidir ve Facebook tarafından yaratılmıştır. Kütüphanenin asıl amacı geliştiricilere çok yönlü ve yeniden kullanılabilir bir UI sağlamaktır.",
  },
  {
    id: 2,
    question: "Components Nedir?",
    info: "React’teki component’lar (bileşenler) JavaScript’teki fonksiyonları temsil eder. React kullanıcı arayüzünü ayrı ayrı parçalara ayırır ve geliştirici ihtiyaç duyarsa diye UI’ı yeniden kullanılabilir hale getirir.",
  },
  {
    id: 3,
    question: "Props nedir?",
    info: "Props, React’teki özellikler’in kısaltmasıdır. Saf, yani değişmez tutulması gereken salt okunur bileşenleri ifade eder.Uygulama boyunca her zaman üst bileşenlerden alt bileşenlere aktarılırlar. Bir alt bileşen asla üst bileşene bir destek gönderemez. Bu sayede sadece tek yönlü veri akışının sürdürülmesi gerçekleşir ve genellikle dinamik olarak oluşturulan verileri işlemek için kullanılır.",
  },
  {
    id: 4,
    question: "State nedir?",
    info: "State, React bileşenlerinin kalbidir.Stateler veri kaynağıdır ve olabildiğince basit tutulmalıdır. Temel olarak durumlar, bileşenlerin işlemesini ve davranışını belirleyen nesnelerdir. Propslardan farklı olarak değiştirilebilirler ve dinamik ve etkileşimli bileşenler oluştururlar.",
  },
  {
    id: 5,
    question: "React Hook kavramı nedir?",
    info: "Hook kavramı, işlevsel bir bileşenden React durumuna ve yaşam döngüsü özelliklerine bağlanmamızı sağlayan işlevlerdir. React hooks, bir class yazmadan React özelliklerini kullanmanıza olanak sağlar. State management ve yaşam döngüsü yöntemlerinin kullanılacağı zamanlarda işlevsel bir bileşeni bir sınıf bileşenine dönüştürme ihtiyacı, Hook’ların geliştirilmesine yol açmıştır.",
  },
];
export default questions;
